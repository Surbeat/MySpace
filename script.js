/**
 * SurBeat — Music Engine & Audio Architecture
 * Centralized State Machine • Media Session API • PWA Service Worker
 * Automatic API Quota Fallback • Category-Specific Unlimited Discover Feed
 */

'use strict';

// ════════════════════════════════════════════════════════════════
// 1. CONFIG & CONSTANTS
// ════════════════════════════════════════════════════════════════

const FRONTEND_YT_API_KEY = 'AIzaSyCr_j1AevC8Y3oFs9IPHTqZRiQjbQjcryA';

const API_BASE_URL = (() => {
  if (typeof window.__CONFIG__ !== 'undefined' && window.__CONFIG__.API_BASE_URL) {
    return window.__CONFIG__.API_BASE_URL;
  }
  const params = new URLSearchParams(window.location.search);
  if (params.has('api_url')) return params.get('api_url');
  if (window.location.protocol === 'file:') return '';
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3000/api';
  }
  return '/api';
})();

const isFileProtocol = window.location.protocol === 'file:';
let isBackendAvailable = false;

// Category display names & metadata
const CATEGORY_META = {
  trending:     { name: 'Desi Reel Hits',      subLabel: 'DESI REEL HITS',    icon: '🪕' },
  workout:      { name: 'Workout',             subLabel: 'BEAST MODE',         icon: '💪' },
  awarapan:     { name: 'Awarapan',            subLabel: 'AWARAPAN',           icon: '❤️' },
  romantic_new: { name: 'Bollywood Romantics', subLabel: 'BOLLYWOOD ROMANCE',  icon: '💖' },
  classic_old:  { name: 'Golden 90s',          subLabel: 'GOLDEN ERA',         icon: '📻' },
  lofi:         { name: 'Chai & Lo‑fi',        subLabel: 'CHAI LOFI',          icon: '☕' },
};

// YouTube search queries per category (used strictly in API mode when quota is healthy)
const CATEGORY_QUERIES = {
  trending:     ['instagram trending hindi songs 2024', 'desi reel viral hindi songs', 'trending hindi hits songs', 'best hindi songs 2024'],
  workout:      ['gym workout hindi motivation songs', 'haryanvi gym workout songs', 'punjabi workout beast mode songs', 'desi gym motivation hindi'],
  awarapan:     ['awarapan songs emraan hashmi', 'toh phir aao mustafa zahid awarapan', 'mahiya annie khalid awarapan', 'awarapan movie songs full'],
  romantic_new: ['romantic hindi hits songs arijit singh', 'bollywood romantic hindi 2024', 'top hindi love songs hits', 'atif aslam hindi love songs'],
  classic_old:  ['old hindi romantic hits 90s', 'evergreen old hindi songs kishore kumar', 'best 90s bollywood classics', 'rafi lata classic hindi songs'],
  lofi:         ['sad hindi lofi songs slowed reverb', 'hindi lofi chai chill beats', 'slowed reverb hindi love songs', 'chai lofi hindi night drive'],
};

const BRAND_FALLBACK_ARTWORK = 'icons/icon.svg';

// ════════════════════════════════════════════════════════════════
// 2. API QUOTA STATE MACHINE
// ════════════════════════════════════════════════════════════════

const ApiQuotaManager = (() => {
  const STORAGE_KEY = 'surbeat_api_quota_exhausted';
  let currentState = 'API_AVAILABLE'; // 'API_AVAILABLE' | 'API_QUOTA_EXHAUSTED' | 'API_TEMPORARY_ERROR' | 'DATABASE_FALLBACK'
  let apiCallCount = 0;

  function init() {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored === 'true') {
        currentState = 'DATABASE_FALLBACK';
        console.log('⚡ [API Quota Manager] Restored DATABASE_FALLBACK mode from session storage.');
      }
    } catch (e) {}
  }

  function markQuotaExhausted(reason = 'quotaExceeded') {
    currentState = 'DATABASE_FALLBACK';
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {}
    console.warn(`🚨 [API Quota Exhausted] Notice: ${reason}. Silently switched to Category Database Fallback Queue.`);
    updateDebugStatus();
  }

  function markTemporaryError() {
    if (currentState !== 'DATABASE_FALLBACK') {
      currentState = 'API_TEMPORARY_ERROR';
    }
  }

  function isFallbackMode() {
    return currentState === 'DATABASE_FALLBACK' || currentState === 'API_QUOTA_EXHAUSTED';
  }

  function getState() {
    return currentState;
  }

  function recordApiCall() {
    apiCallCount++;
    updateDebugStatus();
  }

  function getApiCallCount() {
    return apiCallCount;
  }

  function reset() {
    currentState = 'API_AVAILABLE';
    apiCallCount = 0;
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    updateDebugStatus();
  }

  return {
    init,
    markQuotaExhausted,
    markTemporaryError,
    isFallbackMode,
    getState,
    recordApiCall,
    getApiCallCount,
    reset
  };
})();

// ════════════════════════════════════════════════════════════════
// 3. CENTRALIZED STATE — Single Source of Truth
// ════════════════════════════════════════════════════════════════

const STATE = {
  currentCategory: 'trending',
  currentTrack: null,     // Canonical Track: { id, youtubeId, videoId, title, artist, album, category, thumbnail }
  playbackQueue: [],      // Array of canonical tracks queued for playback (200 tracks per category)
  renderedFeedTracks: [], // Array of tracks currently rendered in the Discover grid
  renderedCount: 0,       // Current number of rendered cards
  isPlaying: false,
  isShuffle: false,
  repeatMode: 'off',      // 'off' | 'all' | 'one'
  volume: 80,
  isMuted: false,
  prevVolume: 80,
  ytPlayer: null,
  ytReady: false,
  hasStarted: false,      // True after first user-initiated play
  isLoading: false,
  currentTime: 0,
  duration: 0,
  seekIntervalId: null,
  skipAttempts: 0,        // For auto-skip error recovery
  mediaSessionInitialized: false,
  feedLoadingMore: false,
  playToken: 0,           // To prevent async race conditions
};

// ════════════════════════════════════════════════════════════════
// 4. CANONICAL TRACK HELPERS & PERSISTENCE
// ════════════════════════════════════════════════════════════════

function normalizeTrack(raw) {
  if (!raw) return null;
  const ytid = raw.youtubeId || raw.videoId || raw.ytId || '';
  const cat = raw.category || STATE.currentCategory || 'trending';
  return {
    id: raw.id || (ytid ? `track-${ytid}` : `track-${Date.now()}`),
    youtubeId: ytid,
    videoId: ytid,
    title: raw.title || 'SurBeat Track',
    artist: raw.artist || 'SurBeat Artist',
    album: raw.album || (CATEGORY_META[cat]?.name || cat),
    category: cat,
    thumbnail: raw.thumbnail || raw.artwork || getYouTubeThumbnail(ytid, 'hqdefault'),
    audioUrl: raw.audioUrl || null
  };
}

const STORAGE_PREFS_KEY = 'surbeat_player_preferences';

function loadPersistedSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_PREFS_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);

    if (typeof data.volume === 'number' && data.volume >= 0 && data.volume <= 100) {
      STATE.volume = data.volume;
      STATE.prevVolume = data.volume;
      STATE.isMuted = data.volume === 0;
    }
    if (data.repeatMode === 'off' || data.repeatMode === 'all' || data.repeatMode === 'one') {
      STATE.repeatMode = data.repeatMode;
    }
    if (typeof data.isShuffle === 'boolean') {
      STATE.isShuffle = data.isShuffle;
    }
    if (data.currentCategory && CATEGORY_META[data.currentCategory]) {
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('cat');
      if (!catParam || !CATEGORY_META[catParam]) {
        STATE.currentCategory = data.currentCategory;
      }
    }
    if (data.currentTrack && (data.currentTrack.youtubeId || data.currentTrack.videoId)) {
      STATE.currentTrack = normalizeTrack(data.currentTrack);
    }
  } catch (e) {
    console.warn('[SurBeat] Error reading saved preferences:', e);
  }
}

function savePersistedSettings() {
  try {
    const data = {
      volume: STATE.volume,
      repeatMode: STATE.repeatMode,
      isShuffle: STATE.isShuffle,
      currentCategory: STATE.currentCategory,
      currentTrack: STATE.currentTrack ? {
        id: STATE.currentTrack.id,
        youtubeId: STATE.currentTrack.youtubeId,
        videoId: STATE.currentTrack.videoId,
        title: STATE.currentTrack.title,
        artist: STATE.currentTrack.artist,
        album: STATE.currentTrack.album,
        category: STATE.currentTrack.category,
        thumbnail: STATE.currentTrack.thumbnail,
        audioUrl: STATE.currentTrack.audioUrl
      } : null
    };
    localStorage.setItem(STORAGE_PREFS_KEY, JSON.stringify(data));
  } catch (e) {}
}

// ════════════════════════════════════════════════════════════════
// 5. UTILITIES
// ════════════════════════════════════════════════════════════════

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function isValidYouTubeId(id) {
  if (!id || typeof id !== 'string') return false;
  if (id.length !== 11) return false;
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}

function getYouTubeThumbnail(videoId, quality = 'hqdefault') {
  if (!isValidYouTubeId(videoId)) return BRAND_FALLBACK_ARTWORK;
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ════════════════════════════════════════════════════════════════
// 6. LIVE CLOCK & LISTENER SIMULATION
// ════════════════════════════════════════════════════════════════

let clockTimer = null;

function updateClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

function startClock() {
  updateClock();
  if (clockTimer) clearInterval(clockTimer);
  clockTimer = setInterval(updateClock, 1000);
}

let baseListeners = 34;
let listenerTimer = null;

function calculateBaseListeners() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istHour = new Date(utc + 19800000).getHours(); // UTC+5:30
  if (istHour >= 18 && istHour <= 23) return 42 + Math.floor(Math.random() * 12);
  if (istHour >= 9 && istHour < 18) return 28 + Math.floor(Math.random() * 10);
  return 20 + Math.floor(Math.random() * 8);
}

function updateListenerCount() {
  const el = document.getElementById('listenerCount');
  if (!el) return;
  const label = baseListeners === 1 ? 'Listener Online' : 'Listeners Online';
  el.textContent = `${baseListeners} ${label}`;
}

function startListenerFluctuation() {
  baseListeners = calculateBaseListeners();
  updateListenerCount();

  if (listenerTimer) clearInterval(listenerTimer);
  listenerTimer = setInterval(() => {
    const delta = Math.random() < 0.5 ? -1 : 1;
    const next = baseListeners + delta;
    if (next >= 18 && next <= 75) {
      baseListeners = next;
      updateListenerCount();
    }
  }, 4000 + Math.floor(Math.random() * 3000));
}

// ════════════════════════════════════════════════════════════════
// 7. YOUTUBE IFRAME ENGINE & AUDIO CONTROLS
// ════════════════════════════════════════════════════════════════

function loadYouTubeAPI() {
  if (document.getElementById('yt-api-script')) return;
  const tag = document.createElement('script');
  tag.id = 'yt-api-script';
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(tag, firstScript);
}

window.onYouTubeIframeAPIReady = function () {
  STATE.ytPlayer = new YT.Player('yt-player', {
    height: '1',
    width: '1',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      origin: window.location.origin || 'https://localhost',
      playsinline: 1,
      rel: 0,
    },
    events: {
      onReady: onYTPlayerReady,
      onStateChange: onYTPlayerStateChange,
      onError: onYTPlayerError,
    },
  });
};

function onYTPlayerReady() {
  STATE.ytReady = true;
  if (STATE.ytPlayer && typeof STATE.ytPlayer.setVolume === 'function') {
    STATE.ytPlayer.setVolume(STATE.volume);
  }
  console.log('✅ SurBeat Audio Engine Ready');
}

function onYTPlayerStateChange(event) {
  const YTS = YT.PlayerState;

  if (event.data === YTS.PLAYING) {
    STATE.isPlaying = true;
    STATE.isLoading = false;
    STATE.skipAttempts = 0;
    try {
      STATE.duration = STATE.ytPlayer.getDuration() || 0;
    } catch (e) {}
    updatePlaybackUI(true);
    startSeekInterval();
    updateMediaSession();
  }

  if (event.data === YTS.PAUSED) {
    STATE.isPlaying = false;
    updatePlaybackUI(false);
    stopSeekInterval();
    syncMediaSessionPlaybackState();
  }

  if (event.data === YTS.ENDED) {
    stopSeekInterval();
    onTrackEnded();
  }

  if (event.data === YTS.BUFFERING) {
    STATE.isLoading = true;
    showLoading(true);
  }
}

function onYTPlayerError(event) {
  console.warn('⚠️ Audio Stream Notice [code:', event.data, ']');
  STATE.isLoading = false;
  STATE.skipAttempts++;

  if (STATE.skipAttempts < 4) {
    showError('Switching to next available track…');
    setTimeout(() => {
      hideError();
      autoSkipNext();
    }, 800);
  } else {
    showError('Select another vibe to continue.');
    STATE.isLoading = false;
    updatePlaybackUI(false);
  }
}

function autoSkipNext() {
  if (STATE.skipAttempts < 4) {
    playNext();
  } else {
    showError('Track currently unavailable.');
    showLoading(false);
    STATE.isPlaying = false;
    updatePlaybackUI(false);
  }
}

function onTrackEnded() {
  if (STATE.repeatMode === 'one') {
    if (STATE.currentTrack) {
      seekTo(0);
      if (STATE.ytPlayer && typeof STATE.ytPlayer.playVideo === 'function') {
        STATE.ytPlayer.playVideo();
      }
    }
    return;
  }

  let queue = STATE.playbackQueue;
  if (!queue || queue.length === 0) {
    const cat = STATE.currentTrack?.category || STATE.currentCategory || 'trending';
    queue = ContinuousDiscoverFeedManager.getCategoryDatabaseTracks(cat);
    STATE.playbackQueue = queue;
  }

  const currentId = STATE.currentTrack ? (STATE.currentTrack.youtubeId || STATE.currentTrack.videoId) : null;
  const currentIdx = queue.findIndex(t => (t.youtubeId || t.videoId) === currentId);
  const isLastTrack = currentIdx >= queue.length - 1;

  if (isLastTrack && STATE.repeatMode === 'off' && !STATE.isShuffle) {
    // End of full category catalog with repeat off
    STATE.isPlaying = false;
    updatePlaybackUI(false);
    return;
  }

  playNext();
}

// ════════════════════════════════════════════════════════════════
// 8. CENTRAL PLAYBACK ENGINE (CANONICAL TRACK OBJECT DISPATCH)
// ════════════════════════════════════════════════════════════════

function playTrack(track, queue = null) {
  if (!track) return;

  const currentSession = ++STATE.playToken;
  const canonical = normalizeTrack(track);
  const ytid = canonical.youtubeId || canonical.videoId;

  if (!isValidYouTubeId(ytid) && !canonical.audioUrl) {
    console.warn('❌ [SurBeat] Invalid playback source:', canonical);
    showError('Track unavailable. Moving to next…');
    autoSkipNext();
    return;
  }

  const targetCategory = canonical.category || STATE.currentCategory || 'trending';

  // Ensure active category playback queue has full category songs
  if (Array.isArray(queue) && queue.length > 0) {
    STATE.playbackQueue = queue.map(normalizeTrack);
  } else if (!STATE.playbackQueue || STATE.playbackQueue.length === 0 || (STATE.playbackQueue[0] && STATE.playbackQueue[0].category !== targetCategory)) {
    STATE.playbackQueue = ContinuousDiscoverFeedManager.getCategoryDatabaseTracks(targetCategory);
  }

  STATE.currentTrack = canonical;
  STATE.isLoading = true;
  STATE.skipAttempts = 0;
  STATE.currentTime = 0;
  STATE.duration = 0;

  // Immediate UI synchronization from the exact canonical track
  updateNowPlayingUI(canonical);
  updateDiscoverHighlight(canonical);
  updateMobileBar(canonical);

  showLoading(true);
  hideError();

  console.log(`▶️ [PLAY] "${canonical.title}" by ${canonical.artist} [${targetCategory}] (YT: ${ytid})`);

  try {
    if (STATE.ytReady && STATE.ytPlayer && typeof STATE.ytPlayer.loadVideoById === 'function') {
      if (currentSession === STATE.playToken) {
        STATE.ytPlayer.loadVideoById(ytid);
      }
    } else {
      console.warn('Player engine initializing for:', ytid);
    }
  } catch (e) {
    console.warn('Player load error:', e);
    showError('Unable to stream track.');
  }

  if (!STATE.hasStarted) {
    STATE.hasStarted = true;
    showPlayerControls();
  }

  unlockMobileAudio();
  updateMediaSession();
  savePersistedSettings();
  updateDebugStatus();
}

function togglePlayPause() {
  if (!STATE.ytReady || !STATE.ytPlayer) return;

  if (!STATE.currentTrack) {
    if (STATE.renderedFeedTracks.length > 0) {
      playTrack(STATE.renderedFeedTracks[0]);
    } else {
      loadCategoryAndPlay(STATE.currentCategory);
    }
    return;
  }

  if (STATE.isPlaying) {
    try { STATE.ytPlayer.pauseVideo(); } catch (e) {}
    STATE.isPlaying = false;
    updatePlaybackUI(false);
  } else {
    try { STATE.ytPlayer.playVideo(); } catch (e) {}
    STATE.isPlaying = true;
    updatePlaybackUI(true);
  }
}

function playNext() {
  let queue = STATE.playbackQueue;
  if (!queue || queue.length === 0) {
    const cat = STATE.currentTrack?.category || STATE.currentCategory || 'trending';
    queue = ContinuousDiscoverFeedManager.getCategoryDatabaseTracks(cat);
    STATE.playbackQueue = queue;
  }
  if (!queue || queue.length === 0) return;

  const currentId = STATE.currentTrack ? (STATE.currentTrack.youtubeId || STATE.currentTrack.videoId) : null;
  const currentIdx = queue.findIndex(t => (t.youtubeId || t.videoId) === currentId);

  let nextIdx = 0;
  if (STATE.isShuffle) {
    if (queue.length > 1) {
      let tries = 0;
      do {
        nextIdx = Math.floor(Math.random() * queue.length);
        tries++;
      } while (nextIdx === currentIdx && tries < 25);
    }
  } else {
    nextIdx = currentIdx >= 0 ? (currentIdx + 1) % queue.length : 0;
  }

  const nextTrack = queue[nextIdx];
  if (nextTrack) {
    playTrack(nextTrack);
  }
}

function playPrev() {
  if (STATE.currentTime > 3.0) {
    seekTo(0);
    if (!STATE.isPlaying && STATE.ytReady && STATE.ytPlayer) {
      try { STATE.ytPlayer.playVideo(); } catch (e) {}
    }
    return;
  }

  let queue = STATE.playbackQueue;
  if (!queue || queue.length === 0) {
    const cat = STATE.currentTrack?.category || STATE.currentCategory || 'trending';
    queue = ContinuousDiscoverFeedManager.getCategoryDatabaseTracks(cat);
    STATE.playbackQueue = queue;
  }
  if (!queue || queue.length === 0) return;

  const currentId = STATE.currentTrack ? (STATE.currentTrack.youtubeId || STATE.currentTrack.videoId) : null;
  const currentIdx = queue.findIndex(t => (t.youtubeId || t.videoId) === currentId);

  let prevIdx = 0;
  if (STATE.isShuffle) {
    playNext();
    return;
  } else {
    prevIdx = currentIdx >= 0 ? (currentIdx - 1 + queue.length) % queue.length : 0;
  }

  const prevTrack = queue[prevIdx];
  if (prevTrack) {
    playTrack(prevTrack);
  }
}

function seekTo(seconds) {
  seconds = Math.max(0, Math.min(seconds, STATE.duration || 0));
  STATE.currentTime = seconds;
  if (STATE.ytReady && STATE.ytPlayer && typeof STATE.ytPlayer.seekTo === 'function') {
    try {
      STATE.ytPlayer.seekTo(seconds, true);
    } catch (e) {}
  }
  updateSeekUI(seconds, STATE.duration);
  updateMediaSessionPosition();
}

function setVolume(v) {
  v = Math.max(0, Math.min(100, Math.round(v)));
  STATE.volume = v;
  STATE.isMuted = v === 0;
  if (STATE.ytReady && STATE.ytPlayer && typeof STATE.ytPlayer.setVolume === 'function') {
    try { STATE.ytPlayer.setVolume(v); } catch (e) {}
  }
  updateVolumeUI(v);
  savePersistedSettings();
}

function toggleMute() {
  if (STATE.isMuted) {
    setVolume(STATE.prevVolume > 0 ? STATE.prevVolume : 80);
  } else {
    STATE.prevVolume = STATE.volume > 0 ? STATE.volume : 80;
    setVolume(0);
  }
}

function toggleShuffle() {
  STATE.isShuffle = !STATE.isShuffle;
  updateShuffleUI();
  savePersistedSettings();
}

function toggleRepeat() {
  if (STATE.repeatMode === 'off') {
    STATE.repeatMode = 'all';
  } else if (STATE.repeatMode === 'all') {
    STATE.repeatMode = 'one';
  } else {
    STATE.repeatMode = 'off';
  }
  updateRepeatUI();
  savePersistedSettings();
}

function stopPlayback() {
  if (STATE.ytReady && STATE.ytPlayer) {
    try {
      STATE.ytPlayer.pauseVideo();
      STATE.ytPlayer.seekTo(0, true);
    } catch (e) {}
  }
  STATE.isPlaying = false;
  STATE.currentTime = 0;
  updatePlaybackUI(false);
  updateSeekUI(0, STATE.duration);
  syncMediaSessionPlaybackState();
}

// ════════════════════════════════════════════════════════════════
// 9. SEEK INTERVAL & TIMELINE SYNC
// ════════════════════════════════════════════════════════════════

function startSeekInterval() {
  stopSeekInterval();
  STATE.seekIntervalId = setInterval(() => {
    if (!STATE.ytReady || !STATE.ytPlayer || !STATE.isPlaying) return;
    try {
      const ct = STATE.ytPlayer.getCurrentTime() || 0;
      const dur = STATE.ytPlayer.getDuration() || 0;
      STATE.currentTime = ct;
      if (dur > 0 && dur !== STATE.duration) {
        STATE.duration = dur;
      }
      updateSeekUI(ct, STATE.duration);
      updateMediaSessionPosition();
    } catch (e) {}
  }, 500);
}

function stopSeekInterval() {
  if (STATE.seekIntervalId) {
    clearInterval(STATE.seekIntervalId);
    STATE.seekIntervalId = null;
  }
}

// ════════════════════════════════════════════════════════════════
// 10. MEDIA SESSION API & LOCK-SCREEN CONTROLS
// ════════════════════════════════════════════════════════════════

function initMediaSessionHandlers() {
  if (!('mediaSession' in navigator) || STATE.mediaSessionInitialized) return;

  const actionHandlers = [
    ['play', () => {
      if (!STATE.currentTrack && STATE.renderedFeedTracks.length > 0) {
        playTrack(STATE.renderedFeedTracks[0]);
      } else {
        togglePlayPause();
      }
    }],
    ['pause', () => {
      if (STATE.isPlaying) togglePlayPause();
    }],
    ['previoustrack', playPrev],
    ['nexttrack', playNext],
    ['seekto', (details) => {
      if (details.seekTime != null && isFinite(details.seekTime)) {
        seekTo(details.seekTime);
      }
    }],
    ['seekforward', (details) => {
      const offset = (details && details.seekOffset) || 10;
      seekTo(STATE.currentTime + offset);
    }],
    ['seekbackward', (details) => {
      const offset = (details && details.seekOffset) || 10;
      seekTo(STATE.currentTime - offset);
    }],
    ['stop', stopPlayback],
  ];

  actionHandlers.forEach(([action, handler]) => {
    try {
      navigator.mediaSession.setActionHandler(action, handler);
    } catch (err) {}
  });

  STATE.mediaSessionInitialized = true;
}

function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  initMediaSessionHandlers();

  const track = STATE.currentTrack;
  if (!track) return;

  const artworkBase = track.thumbnail || getYouTubeThumbnail(track.youtubeId || track.videoId, 'hqdefault');
  const catTitle = CATEGORY_META[track.category || STATE.currentCategory]?.name || 'SurBeat';

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'SurBeat Track',
      artist: track.artist || 'SurBeat — Indian Music',
      album: `SurBeat • ${catTitle}`,
      artwork: [
        { src: artworkBase, sizes: '96x96', type: 'image/jpeg' },
        { src: artworkBase, sizes: '128x128', type: 'image/jpeg' },
        { src: artworkBase, sizes: '192x192', type: 'image/jpeg' },
        { src: artworkBase, sizes: '256x256', type: 'image/jpeg' },
        { src: artworkBase, sizes: '384x384', type: 'image/jpeg' },
        { src: artworkBase, sizes: '512x512', type: 'image/jpeg' },
      ],
    });
  } catch (e) {
    console.warn('[SurBeat] MediaMetadata error:', e);
  }

  syncMediaSessionPlaybackState();
  updateMediaSessionPosition();
}

function syncMediaSessionPlaybackState() {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.playbackState = STATE.isPlaying ? 'playing' : 'paused';
  } catch (e) {}
}

function updateMediaSessionPosition() {
  if (!('mediaSession' in navigator) || !navigator.mediaSession.setPositionState) return;

  const dur = STATE.duration;
  const pos = STATE.currentTime;

  if (isFinite(dur) && dur > 0 && isFinite(pos) && pos >= 0 && pos <= dur) {
    try {
      navigator.mediaSession.setPositionState({
        duration: dur,
        playbackRate: 1,
        position: Math.min(pos, dur),
      });
    } catch (e) {}
  }
}

// ════════════════════════════════════════════════════════════════
// 11. VISIBILITY & BACKGROUND AUDIO HANDLING
// ════════════════════════════════════════════════════════════════

function setupVisibilityHandling() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (STATE.isPlaying) {
        updateMediaSession();
        syncMediaSessionPlaybackState();
      }
    } else {
      try {
        if (STATE.ytPlayer && STATE.isPlaying) {
          const ct = STATE.ytPlayer.getCurrentTime() || STATE.currentTime;
          const dur = STATE.ytPlayer.getDuration() || STATE.duration;
          STATE.currentTime = ct;
          STATE.duration = dur;
          updateSeekUI(ct, dur);
          updatePlaybackUI(STATE.isPlaying);
        }
      } catch (e) {}
    }
  });

  window.addEventListener('pageshow', (event) => {
    if (event.persisted && STATE.isPlaying && STATE.ytPlayer) {
      try {
        const ct = STATE.ytPlayer.getCurrentTime() || STATE.currentTime;
        const dur = STATE.ytPlayer.getDuration() || STATE.duration;
        STATE.currentTime = ct;
        STATE.duration = dur;
        updateSeekUI(ct, dur);
        updatePlaybackUI(STATE.isPlaying);
      } catch (e) {}
    }
  });
}

// ════════════════════════════════════════════════════════════════
// 12. CONTINUOUS DISCOVER FEED MANAGER (UNLIMITED SCROLL)
// ════════════════════════════════════════════════════════════════

const ContinuousDiscoverFeedManager = (() => {
  const CHUNK_SIZE = 10;
  const categoryCache = {};
  let observer = null;

  function getCategoryDatabaseTracks(category) {
    if (categoryCache[category] && categoryCache[category].length > 0) {
      return categoryCache[category];
    }

    let tracks = [];
    if (typeof window !== 'undefined' && typeof window.getSurBeatDatabaseSongs === 'function') {
      tracks = window.getSurBeatDatabaseSongs(category);
    } else if (typeof window !== 'undefined' && window.SURBEAT_CATALOG && window.SURBEAT_CATALOG[category]) {
      tracks = window.SURBEAT_CATALOG[category];
    }

    if (!tracks || tracks.length === 0) {
      tracks = [];
    }

    const formatted = tracks.map((t, idx) => normalizeTrack({
      id: t.id || `${category}-${String(idx + 1).padStart(3, '0')}`,
      youtubeId: t.youtubeId || t.videoId || t.ytId,
      videoId: t.youtubeId || t.videoId || t.ytId,
      title: t.title || `Melody #${idx + 1}`,
      artist: t.artist || 'SurBeat Artist',
      album: t.album || CATEGORY_META[category]?.name || category,
      category: category,
      thumbnail: t.thumbnail || t.artwork || getYouTubeThumbnail(t.youtubeId || t.videoId || t.ytId)
    }));

    categoryCache[category] = formatted;
    return formatted;
  }

  // Preloads the next group of thumbnails in the background
  function preloadNextThumbnails(category, startIndex, count = 10) {
    try {
      const all = getCategoryDatabaseTracks(category);
      for (let i = 0; i < count; i++) {
        const idx = (startIndex + i) % all.length;
        const track = all[idx];
        if (track && track.thumbnail) {
          const img = new Image();
          img.src = track.thumbnail;
        }
      }
    } catch (e) {}
  }

  function setupInfiniteScroll() {
    const sentinel = document.getElementById('feedSentinel');
    if (!sentinel) return;

    if ('IntersectionObserver' in window) {
      if (observer) observer.disconnect();
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !STATE.feedLoadingMore) {
            loadMore();
          }
        });
      }, {
        root: null,
        rootMargin: '400px',
        threshold: 0.01
      });
      observer.observe(sentinel);
    }

    // Scroll listener fallback
    window.addEventListener('scroll', () => {
      if (STATE.feedLoadingMore) return;
      const scrollPos = window.innerHeight + window.scrollY;
      const bodyHeight = document.documentElement.offsetHeight;
      if (bodyHeight - scrollPos < 600) {
        loadMore();
      }
    }, { passive: true });
  }

  function loadMore() {
    if (STATE.feedLoadingMore) return;
    STATE.feedLoadingMore = true;

    const cat = STATE.currentCategory;
    const allTracks = getCategoryDatabaseTracks(cat);
    if (!allTracks || allTracks.length === 0) {
      STATE.feedLoadingMore = false;
      return;
    }

    const currentCount = STATE.renderedCount;
    const nextTracks = [];

    for (let i = 0; i < CHUNK_SIZE; i++) {
      const trackIdx = (currentCount + i) % allTracks.length;
      const track = allTracks[trackIdx];
      if (track) {
        nextTracks.push(track);
      }
    }

    if (nextTracks.length > 0) {
      const grid = document.getElementById('trackGrid');
      if (grid) {
        const categoryName = CATEGORY_META[cat]?.name || cat;
        nextTracks.forEach((t, i) => {
          const card = createTrackCard(t, currentCount + i, categoryName);
          grid.appendChild(card);
        });
      }
      STATE.renderedFeedTracks = STATE.renderedFeedTracks.concat(nextTracks);
      STATE.renderedCount += nextTracks.length;

      // Preload next batch of thumbnails in background
      preloadNextThumbnails(cat, STATE.renderedCount, 10);
    }

    setTimeout(() => {
      STATE.feedLoadingMore = false;
    }, 200);
  }

  return {
    getCategoryDatabaseTracks,
    setupInfiniteScroll,
    loadMore,
    preloadNextThumbnails
  };
})();

// ════════════════════════════════════════════════════════════════
// 13. CATEGORY SWITCHING & CONTINUOUS LOADING
// ════════════════════════════════════════════════════════════════

async function loadCategory(category, autoPlay = false) {
  STATE.currentCategory = category;

  // Update category buttons UI
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const isActive = btn.dataset.category === category;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  const catName = CATEGORY_META[category]?.name || category;

  // Update discover subtitle with clean non-paginated text
  const subEl = document.getElementById('discoverSubtitle');
  if (subEl) {
    subEl.textContent = `Browse curated melodies from ${catName}`;
  }

  // Load all tracks for playback queue
  const allTracks = ContinuousDiscoverFeedManager.getCategoryDatabaseTracks(category);
  STATE.playbackQueue = allTracks;

  // Reset feed render count and load initial 10 cards
  const initialChunk = allTracks.slice(0, 10);
  STATE.renderedFeedTracks = initialChunk;
  STATE.renderedCount = initialChunk.length;

  renderDiscoverCards(initialChunk);

  // Preload next thumbnails
  ContinuousDiscoverFeedManager.preloadNextThumbnails(category, 10, 10);

  savePersistedSettings();
  updateDebugStatus();

  if (autoPlay && initialChunk.length > 0) {
    playTrack(initialChunk[0], allTracks);
  }
}

async function loadCategoryAndPlay(category) {
  await loadCategory(category, true);
}

// ════════════════════════════════════════════════════════════════
// 14. UI UPDATE & RENDERING FUNCTIONS
// ════════════════════════════════════════════════════════════════

function updatePlaybackUI(isPlaying) {
  const vinylDisc = document.getElementById('vinylDisc');
  if (vinylDisc) vinylDisc.classList.toggle('playing', isPlaying);

  const tonearm = document.getElementById('tonearmPivot');
  if (tonearm) tonearm.classList.toggle('playing', isPlaying);

  const viz = document.getElementById('audioVisualizer');
  if (viz) viz.classList.toggle('playing', isPlaying);

  const npEq = document.getElementById('npEqBars');
  if (npEq) npEq.classList.toggle('playing', isPlaying);

  const sideEqA = document.getElementById('sideEqA');
  const sideEqB = document.getElementById('sideEqB');
  if (sideEqA) sideEqA.classList.toggle('playing', isPlaying);
  if (sideEqB) sideEqB.classList.toggle('playing', isPlaying);

  const path = document.getElementById('playPausePath');
  if (path) {
    path.setAttribute('d', isPlaying
      ? 'M6 5h4v14H6zm8 0h4v14h-4z'   // Pause
      : 'M8 5v14l11-7z'               // Play
    );
  }

  const ppBtn = document.getElementById('playPauseBtn');
  if (ppBtn) ppBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');

  const mbarPlayPath = document.getElementById('mbarPlayPath');
  if (mbarPlayPath) {
    mbarPlayPath.setAttribute('d', isPlaying
      ? 'M6 5h4v14H6zm8 0h4v14h-4z'
      : 'M8 5v14l11-7z'
    );
  }

  const mbarDisc = document.getElementById('mbarDisc');
  if (mbarDisc) mbarDisc.classList.toggle('spinning', isPlaying);

  if (isPlaying) showLoading(false);
  syncMediaSessionPlaybackState();
}

function updateNowPlayingUI(track) {
  if (!track) return;

  const trackEl = document.getElementById('npTrack');
  const artistEl = document.getElementById('npArtist');
  const metaEl = document.getElementById('npMeta');
  const discLabel = document.getElementById('vinylSubLabel');

  if (trackEl) trackEl.textContent = track.title || 'SurBeat Melody';
  if (artistEl) artistEl.textContent = track.artist || '';
  if (metaEl) metaEl.textContent = CATEGORY_META[track.category]?.name || track.category || '';

  const subLabel = CATEGORY_META[track.category || STATE.currentCategory]?.subLabel || 'SURBEAT';
  if (discLabel) discLabel.textContent = subLabel;

  updateSeekUI(0, 0);

  const ctEl = document.getElementById('timeCurrentLabel');
  const durEl = document.getElementById('timeDurationLabel');
  if (ctEl) ctEl.textContent = '0:00';
  if (durEl) durEl.textContent = '0:00';
}

function updateRepeatUI() {
  const repeatBtn = document.getElementById('repeatBtn');
  if (!repeatBtn) return;

  const isAll = STATE.repeatMode === 'all';
  const isOne = STATE.repeatMode === 'one';
  const isActive = isAll || isOne;

  repeatBtn.classList.toggle('active', isAll);
  repeatBtn.classList.toggle('repeat-one', isOne);
  repeatBtn.setAttribute('aria-pressed', isActive.toString());

  const label = isOne ? 'Repeat: One' : (isAll ? 'Repeat: All' : 'Repeat: Off');
  repeatBtn.setAttribute('aria-label', label);
  repeatBtn.title = label;
}

function updateShuffleUI() {
  const shuffleBtn = document.getElementById('shuffleBtn');
  if (!shuffleBtn) return;

  shuffleBtn.classList.toggle('active', STATE.isShuffle);
  shuffleBtn.setAttribute('aria-pressed', STATE.isShuffle.toString());
  const label = `Shuffle: ${STATE.isShuffle ? 'On' : 'Off'}`;
  shuffleBtn.setAttribute('aria-label', label);
  shuffleBtn.title = label;
}

function updateSeekUI(currentTime, duration) {
  const slider = document.getElementById('seekSlider');
  const fill = document.getElementById('seekFill');
  const ctEl = document.getElementById('timeCurrentLabel');
  const durEl = document.getElementById('timeDurationLabel');

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (slider && !slider._isDragging) {
    slider.value = pct;
  }
  if (fill) fill.style.width = `${pct}%`;
  if (ctEl) ctEl.textContent = formatTime(currentTime);
  if (durEl) durEl.textContent = duration > 0 ? formatTime(duration) : '0:00';
}

function updateVolumeUI(v) {
  const slider = document.getElementById('volumeSlider');
  const fill = document.getElementById('volumeFill');
  const iconPath = document.getElementById('volumeIconPath');

  if (slider) slider.value = v;
  if (fill) fill.style.width = `${v}%`;

  if (iconPath) {
    if (v === 0) {
      iconPath.setAttribute('d', 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z');
    } else if (v < 50) {
      iconPath.setAttribute('d', 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z');
    } else {
      iconPath.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
    }
  }

  const muteBtn = document.getElementById('muteBtn');
  if (muteBtn) muteBtn.setAttribute('aria-label', v === 0 ? 'Unmute' : 'Mute');
}

function updateMobileBar(track) {
  const titleEl = document.getElementById('mbarTitle');
  const catEl = document.getElementById('mbarCat');
  const bar = document.getElementById('mobileBar');

  if (titleEl) titleEl.textContent = track.title || 'SurBeat';
  if (catEl) catEl.textContent = CATEGORY_META[track.category || STATE.currentCategory]?.name || '';
  if (bar) bar.style.display = 'flex';
}

function updateDiscoverHighlight(trackOrId) {
  const activeId = (typeof trackOrId === 'object' && trackOrId)
    ? (trackOrId.youtubeId || trackOrId.videoId || trackOrId.id)
    : (typeof trackOrId === 'string'
      ? trackOrId
      : (STATE.currentTrack ? (STATE.currentTrack.youtubeId || STATE.currentTrack.videoId || STATE.currentTrack.id) : null));

  document.querySelectorAll('.track-card').forEach(card => {
    const cardId = card.dataset.youtubeId || card.dataset.videoId || card.dataset.id;
    const isPlaying = !!(activeId && cardId === activeId);
    card.classList.toggle('playing-card', isPlaying);
  });
}

function showLoading(show) {
  const el = document.getElementById('playerLoading');
  if (el) el.style.display = show ? 'flex' : 'none';
}

function showError(msg) {
  const el = document.getElementById('playerError');
  if (el) {
    el.textContent = `⚠️ ${msg}`;
    el.style.display = 'flex';
  }
}

function hideError() {
  const el = document.getElementById('playerError');
  if (el) el.style.display = 'none';
}

function showPlayerControls() {
  ['seekRow', 'controlsRow', 'volumeRow'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'flex';
  });
  const trigger = document.getElementById('playTriggerBtn');
  if (trigger) trigger.style.display = 'none';
}

// ════════════════════════════════════════════════════════════════
// 15. DISCOVER SECTION RENDERING
// ════════════════════════════════════════════════════════════════

function renderDiscoverCards(tracks) {
  const grid = document.getElementById('trackGrid');
  if (!grid) return;

  if (!tracks || tracks.length === 0) {
    grid.innerHTML = `
      <div class="tracks-placeholder">
        <div class="placeholder-icon">🎵</div>
        <p>No tracks found for this vibe.</p>
      </div>`;
    return;
  }

  grid.innerHTML = '';
  const categoryName = CATEGORY_META[STATE.currentCategory]?.name || STATE.currentCategory;

  tracks.forEach((track, index) => {
    const canonical = normalizeTrack(track);
    const card = createTrackCard(canonical, index, categoryName);
    grid.appendChild(card);
  });
}

function createTrackCard(track, index, categoryName) {
  const card = document.createElement('div');
  card.className = 'track-card';
  const ytid = track.youtubeId || track.videoId;
  const currentPlayingId = STATE.currentTrack ? (STATE.currentTrack.youtubeId || STATE.currentTrack.videoId) : null;
  if (currentPlayingId && ytid === currentPlayingId) {
    card.classList.add('playing-card');
  }

  card.setAttribute('role', 'listitem');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Play ${track.title} by ${track.artist}`);
  card.dataset.id = track.id || `track-${index}`;
  card.dataset.youtubeId = ytid;
  card.dataset.videoId = ytid;

  const thumb = track.thumbnail || getYouTubeThumbnail(ytid);
  const isPriority = index < 4;

  card.innerHTML = `
    <div class="track-thumb">
      <div class="thumb-skeleton" aria-hidden="true"></div>
      <img
        src="${thumb}"
        alt="${escapeHtml(track.title)} thumbnail"
        loading="${isPriority ? 'eager' : 'lazy'}"
        width="480"
        height="270"
        onload="this.classList.add('img-loaded'); const s = this.previousElementSibling; if (s) s.style.display='none';"
        onerror="this.style.display='none'; const s = this.previousElementSibling; if (s) s.style.display='none'; const f = this.nextElementSibling; if (f) f.classList.remove('hidden');"
      />
      <div class="track-thumb-fallback hidden" aria-hidden="true">
        <span class="fallback-icon">🎵</span>
        <span class="fallback-brand">SurBeat Music</span>
      </div>
      <div class="track-play-overlay">
        <button class="track-play-btn" aria-label="Play ${escapeHtml(track.title)}" tabindex="-1">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="track-info">
      <div class="track-title">${escapeHtml(track.title)}</div>
      <div class="track-artist">${escapeHtml(track.artist)}</div>
      <div class="track-badge">${escapeHtml(categoryName)}</div>
    </div>
  `;

  card.addEventListener('click', () => {
    playTrack(track);
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playTrack(track);
    }
  });

  return card;
}

// ════════════════════════════════════════════════════════════════
// 16. DEVELOPER MONITOR PANEL
// ════════════════════════════════════════════════════════════════

function updateDebugStatus() {
  const panel = document.getElementById('discoverDebugPanel');
  if (!panel) return;

  const catName = CATEGORY_META[STATE.currentCategory]?.name || STATE.currentCategory;
  const debugCat = document.getElementById('debugCategory');
  const debugMode = document.getElementById('debugFeedMode');
  const debugStatus = document.getElementById('debugApiStatus');
  const debugQueue = document.getElementById('debugQueueInfo');

  if (debugCat) debugCat.textContent = catName;
  if (debugMode) debugMode.textContent = `Continuous (${STATE.renderedCount} visible)`;
  if (debugQueue) debugQueue.textContent = `${STATE.playbackQueue.length} Tracks Prepared`;

  if (debugStatus) {
    if (ApiQuotaManager.isFallbackMode()) {
      debugStatus.textContent = 'Database Fallback Active';
      debugStatus.className = 'debug-badge-green';
    } else {
      debugStatus.textContent = 'API Ready';
      debugStatus.className = 'debug-badge-green';
    }
  }
}

function initDebugPanel() {
  const panel = document.getElementById('discoverDebugPanel');
  const params = new URLSearchParams(window.location.search);
  const showDebug = params.get('debug') === 'true' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (panel && showDebug) {
    panel.classList.add('visible');
  }

  const closeBtn = document.getElementById('debugCloseBtn');
  if (closeBtn && panel) {
    closeBtn.addEventListener('click', () => {
      panel.classList.remove('visible');
    });
  }

  // Toggle debug panel with Ctrl+Shift+D
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
      if (panel) panel.classList.toggle('visible');
    }
  });
}

// ════════════════════════════════════════════════════════════════
// 17. MOBILE AUDIO UNLOCK & PWA SERVICE WORKER
// ════════════════════════════════════════════════════════════════

let audioUnlocked = false;

function unlockMobileAudio() {
  if (audioUnlocked) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      ctx.close();
    }
  } catch (e) {}
  audioUnlocked = true;
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.info('[SurBeat PWA] New update available.');
                }
              });
            }
          });
        })
        .catch(err => {
          console.warn('[SurBeat PWA] Service Worker registration failed:', err);
        });
    });
  }
}

// ════════════════════════════════════════════════════════════════
// 18. BACKEND HEALTH CHECK
// ════════════════════════════════════════════════════════════════

async function checkBackendHealth() {
  if (!API_BASE_URL || isFileProtocol) {
    isBackendAvailable = false;
    return;
  }
  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${API_BASE_URL}/health`, { signal: controller.signal });
    clearTimeout(tid);
    const data = await res.json().catch(() => null);
    isBackendAvailable = res.ok && data?.status === 'ok';
  } catch (e) {
    isBackendAvailable = false;
  }
}

// ════════════════════════════════════════════════════════════════
// 19. UI EVENT BINDINGS
// ════════════════════════════════════════════════════════════════

function bindCategoryButtons() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (!cat) return;
      if (cat !== STATE.currentCategory) {
        loadCategory(cat, false);
      }
    });
  });
}

function bindSideCards() {
  const sideA = document.getElementById('sideCardA');
  const sideB = document.getElementById('sideCardB');

  const activateCard = (card) => {
    if (!card) return;
    const cat = card.dataset.category;
    if (cat) loadCategory(cat, false);
  };

  [sideA, sideB].forEach(card => {
    if (!card) return;
    card.addEventListener('click', () => activateCard(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateCard(card);
      }
    });
  });
}

function bindPlayerControls() {
  const triggerBtn = document.getElementById('playTriggerBtn');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      unlockMobileAudio();
      loadCategoryAndPlay(STATE.currentCategory);
    });
  }

  const ppBtn = document.getElementById('playPauseBtn');
  if (ppBtn) {
    ppBtn.addEventListener('click', () => {
      unlockMobileAudio();
      if (!STATE.currentTrack && STATE.renderedFeedTracks.length === 0) {
        loadCategoryAndPlay(STATE.currentCategory);
      } else {
        togglePlayPause();
      }
    });
  }

  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) prevBtn.addEventListener('click', playPrev);

  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.addEventListener('click', playNext);

  const shuffleBtn = document.getElementById('shuffleBtn');
  if (shuffleBtn) shuffleBtn.addEventListener('click', toggleShuffle);

  const repeatBtn = document.getElementById('repeatBtn');
  if (repeatBtn) repeatBtn.addEventListener('click', toggleRepeat);

  const seekSlider = document.getElementById('seekSlider');
  if (seekSlider) {
    seekSlider.addEventListener('mousedown', () => { seekSlider._isDragging = true; });
    seekSlider.addEventListener('touchstart', () => { seekSlider._isDragging = true; }, { passive: true });

    const doSeek = () => {
      seekSlider._isDragging = false;
      if (!STATE.duration) return;
      const pct = parseFloat(seekSlider.value) / 100;
      seekTo(pct * STATE.duration);
    };

    seekSlider.addEventListener('mouseup', doSeek);
    seekSlider.addEventListener('touchend', doSeek);

    seekSlider.addEventListener('input', () => {
      const fill = document.getElementById('seekFill');
      const pct = parseFloat(seekSlider.value);
      if (fill) fill.style.width = `${pct}%`;
      if (STATE.duration) {
        const ct = (pct / 100) * STATE.duration;
        const ctEl = document.getElementById('timeCurrentLabel');
        if (ctEl) ctEl.textContent = formatTime(ct);
      }
    });
  }

  const volSlider = document.getElementById('volumeSlider');
  if (volSlider) {
    volSlider.addEventListener('input', () => {
      setVolume(parseInt(volSlider.value, 10));
    });
  }

  const muteBtn = document.getElementById('muteBtn');
  if (muteBtn) muteBtn.addEventListener('click', toggleMute);
}

function bindMobileBar() {
  const mbarPrev = document.getElementById('mbarPrev');
  const mbarPlay = document.getElementById('mbarPlay');
  const mbarNext = document.getElementById('mbarNext');
  const mbarTrack = document.querySelector('.mbar-track');

  if (mbarPrev) mbarPrev.addEventListener('click', playPrev);
  if (mbarNext) mbarNext.addEventListener('click', playNext);
  if (mbarPlay) {
    mbarPlay.addEventListener('click', () => {
      unlockMobileAudio();
      togglePlayPause();
    });
  }

  if (mbarTrack) {
    mbarTrack.addEventListener('click', () => {
      const playerEl = document.getElementById('mainPlayer');
      if (playerEl) {
        playerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}

function bindTouchUnlock() {
  document.addEventListener('touchstart', unlockMobileAudio, { passive: true, once: true });
  document.addEventListener('click', unlockMobileAudio, { once: true });
}

// ════════════════════════════════════════════════════════════════
// 20. INITIALIZATION
// ════════════════════════════════════════════════════════════════

async function init() {
  // Load saved preferences
  loadPersistedSettings();

  // Initialize API Quota State Machine
  ApiQuotaManager.init();

  // Start real-time clock & organic listener count
  startClock();
  startListenerFluctuation();

  // Check backend availability
  await checkBackendHealth();

  // Register PWA service worker
  registerServiceWorker();

  // Bind visibility & background events
  setupVisibilityHandling();

  // Bind UI interactive elements
  bindCategoryButtons();
  bindSideCards();
  bindPlayerControls();
  bindMobileBar();
  bindTouchUnlock();

  // Setup infinite scroll observer for continuous feed
  ContinuousDiscoverFeedManager.setupInfiniteScroll();

  // Initialize Developer Debug Panel
  initDebugPanel();

  // Apply persisted settings to UI
  updateVolumeUI(STATE.volume);
  updateRepeatUI();
  updateShuffleUI();

  // Check URL category query
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  const initialCategory = (catParam && CATEGORY_META[catParam]) ? catParam : STATE.currentCategory;

  // Load YouTube IFrame API
  loadYouTubeAPI();

  // Load initial category continuous feed
  loadCategory(initialCategory, false);

  // Initialize media session action listeners
  initMediaSessionHandlers();

  document.body.classList.add('loaded');
  console.log('🎧 SurBeat Audio Engine & Continuous Feed initialized.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
