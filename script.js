/**
 * SurBeat — Music Engine & Audio Architecture
 * Centralized State Machine • Media Session API • PWA Service Worker
 * Standards-compliant Background Playback & Lock-Screen Audio Controls
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

// Category display names & sub-labels
const CATEGORY_META = {
  trending:     { name: 'Desi Reel Hits',      subLabel: 'DESI REEL HITS',    icon: '🪕' },
  workout:      { name: 'Workout',             subLabel: 'BEAST MODE',         icon: '💪' },
  awarapan:     { name: 'Awarapan',            subLabel: 'AWARAPAN',           icon: '❤️' },
  romantic_new: { name: 'Bollywood Romantics', subLabel: 'BOLLYWOOD ROMANCE',  icon: '💖' },
  classic_old:  { name: 'Golden 90s',          subLabel: 'GOLDEN ERA',         icon: '📻' },
  lofi:         { name: 'Chai & Lo‑fi',        subLabel: 'CHAI LOFI',          icon: '☕' },
};

// YouTube search queries per category
const CATEGORY_QUERIES = {
  trending:     ['instagram trending hindi songs 2024', 'desi reel viral hindi songs', 'trending hindi hits songs', 'best hindi songs 2024'],
  workout:      ['gym workout hindi motivation songs', 'haryanvi gym workout songs', 'punjabi workout beast mode songs', 'desi gym motivation hindi'],
  awarapan:     ['awarapan songs emraan hashmi', 'toh phir aao mustafa zahid awarapan', 'mahiya annie khalid awarapan', 'awarapan movie songs full'],
  romantic_new: ['romantic hindi hits songs arijit singh', 'bollywood romantic hindi 2024', 'top hindi love songs hits', 'atif aslam hindi love songs'],
  classic_old:  ['old hindi romantic hits 90s', 'evergreen old hindi songs kishore kumar', 'best 90s bollywood classics', 'rafi lata classic hindi songs'],
  lofi:         ['sad hindi lofi songs slowed reverb', 'hindi lofi chai chill beats', 'slowed reverb hindi love songs', 'chai lofi hindi night drive'],
};

// Awarapan curated tracks (100% verified & embeddable YouTube IDs)
const AWARAPAN_TRACKS = [
  { videoId: 'n_VrRuNkbrE', title: 'Toh Phir Aao', artist: 'Mustafa Zahid | Pritam', category: 'awarapan' },
  { videoId: 'P2kS3h46cIA', title: 'Tera Mera Rishta Purana', artist: 'Mustafa Zahid | Pritam', category: 'awarapan' },
  { videoId: 'FJzE1p3mvw8', title: 'Mahiya', artist: 'Annie Khalid | Suzanne', category: 'awarapan' },
  { videoId: 'ZsAOnmByy38', title: 'Zara Sa', artist: 'KK | Jannat', category: 'awarapan' },
  { videoId: 'UlacMvx_VYk', title: 'Beete Lamhe', artist: 'KK | The Train', category: 'awarapan' },
  { videoId: '1DBhic8SSKs', title: 'Woh Lamhe Woh Baatein', artist: 'Atif Aslam | Zeher', category: 'awarapan' },
  { videoId: 'I9tX-lFUTrw', title: 'Yeh Awarapan', artist: 'Arijit Singh | Amaal Mallik', category: 'awarapan' },
  { videoId: 'cGNcjqXe87U', title: 'Tu Hi Meri Shab Hai', artist: 'KK | Gangster', category: 'awarapan' },
  { videoId: 'fVeJ6sJERR4', title: 'Teri Yaadon Mein', artist: 'KK | Shreya Ghoshal', category: 'awarapan' },
  { videoId: '6rvUyBiBtik', title: 'Tera Mera Rishta (New Version)', artist: 'Mustafa Zahid | Mithoon', category: 'awarapan' },
  { videoId: 'XwDV5xldudU', title: 'Toh Phir Aao (Lounge Version)', artist: 'Mustafa Zahid', category: 'awarapan' },
  { videoId: 'oHmXALAdydI', title: 'Awarapan All Songs Jukebox', artist: 'Pritam | Emraan Hashmi', category: 'awarapan' },
  { videoId: 'itoIHcocrZI', title: 'Toh Phir Aao (Acoustic)', artist: 'Mustafa Zahid', category: 'awarapan' },
  { videoId: '_RZwGzElnIs', title: 'Bheegi Bheegi', artist: 'James | Gangster', category: 'awarapan' },
  { videoId: '0bAVd9jJE2Q', title: 'Aashiq Banaya Aapne', artist: 'Himesh Reshammiya | Shreya', category: 'awarapan' }
];

// Fallback high-res artwork
const BRAND_FALLBACK_ARTWORK = 'icons/icon.svg';

// ════════════════════════════════════════════════════════════════
// 2. CENTRALIZED STATE — Single Source of Truth
// ════════════════════════════════════════════════════════════════

const STATE = {
  currentCategory: 'trending',
  trackList: [],          // Array of { videoId, title, artist, category, thumbnail }
  currentIndex: -1,
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
};

// ════════════════════════════════════════════════════════════════
// 3. PERSISTENCE (localStorage)
// ════════════════════════════════════════════════════════════════

const STORAGE_KEY = 'surbeat_player_preferences';

function loadPersistedSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
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
      // Allow URL param override
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('cat');
      if (!catParam || !CATEGORY_META[catParam]) {
        STATE.currentCategory = data.currentCategory;
      }
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
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

// ════════════════════════════════════════════════════════════════
// 4. UTILITIES
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
// 5. LIVE CLOCK & LISTENER SIMULATION
// ════════════════════════════════════════════════════════════════

function updateClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

let baseListeners = 28;
let listenerTimer = null;

function calculateBaseListeners() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istHour = new Date(utc + 19800000).getHours(); // UTC+5:30
  if (istHour >= 18 && istHour <= 23) return 36 + Math.floor(Math.random() * 10);
  if (istHour >= 9 && istHour < 18) return 26 + Math.floor(Math.random() * 8);
  return 18 + Math.floor(Math.random() * 6);
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
    if (next >= 16 && next <= 68) {
      baseListeners = next;
      updateListenerCount();
    }
  }, 4000 + Math.floor(Math.random() * 3000));
}

// ════════════════════════════════════════════════════════════════
// 6. YOUTUBE IFRAME ENGINE & EVENTS
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

  if (event.data === YTS.UNSTARTED) {
    // Unstarted state
  }
}

function onYTPlayerError(event) {
  console.warn('⚠️ Audio Source Notice [code:', event.data, ']');
  STATE.isLoading = false;
  STATE.skipAttempts++;

  if (STATE.skipAttempts < 4 && STATE.trackList.length > 1) {
    showError('Unable to play this track. Trying next available track…');
    setTimeout(() => {
      hideError();
      autoSkipNext();
    }, 1200);
  } else {
    showError('Unable to load track. Please select another vibe.');
    STATE.isLoading = false;
    updatePlaybackUI(false);
  }
}

function autoSkipNext() {
  const nextIdx = getNextIndex();
  if (nextIdx !== -1) {
    playTrack(nextIdx);
  }
}

function onTrackEnded() {
  // Handle Repeat One
  if (STATE.repeatMode === 'one') {
    if (STATE.currentIndex !== -1) {
      seekTo(0);
      if (STATE.ytPlayer && typeof STATE.ytPlayer.playVideo === 'function') {
        STATE.ytPlayer.playVideo();
      }
    }
    return;
  }

  // Handle Repeat All or Normal Playlist Progression
  const isLastTrack = STATE.currentIndex >= STATE.trackList.length - 1;
  if (isLastTrack && STATE.repeatMode === 'off' && !STATE.isShuffle) {
    // End of playlist with repeat off
    STATE.isPlaying = false;
    updatePlaybackUI(false);
    return;
  }

  const nextIdx = getNextIndex();
  if (nextIdx !== -1) {
    playTrack(nextIdx);
  } else {
    STATE.isPlaying = false;
    updatePlaybackUI(false);
  }
}

// ════════════════════════════════════════════════════════════════
// 7. TRACK INDEXING & NAVIGATION LOGIC
// ════════════════════════════════════════════════════════════════

function getNextIndex() {
  if (STATE.trackList.length === 0) return -1;
  if (STATE.trackList.length === 1) return 0;

  if (STATE.isShuffle) {
    let idx;
    let tries = 0;
    do {
      idx = Math.floor(Math.random() * STATE.trackList.length);
      tries++;
    } while (idx === STATE.currentIndex && tries < 25);
    return idx;
  }

  return (STATE.currentIndex + 1) % STATE.trackList.length;
}

function getPrevIndex() {
  if (STATE.trackList.length === 0) return -1;
  if (STATE.trackList.length === 1) return 0;

  if (STATE.isShuffle) {
    return getNextIndex();
  }

  return (STATE.currentIndex - 1 + STATE.trackList.length) % STATE.trackList.length;
}

// ════════════════════════════════════════════════════════════════
// 8. CENTRAL PLAYBACK COMMANDS
// ════════════════════════════════════════════════════════════════

function playTrack(index) {
  if (!STATE.ytReady || !STATE.ytPlayer) {
    console.warn('Audio player engine initializing…');
    return;
  }

  if (index < 0 || index >= STATE.trackList.length) return;
  const track = STATE.trackList[index];
  if (!track || !isValidYouTubeId(track.videoId)) {
    console.warn('Invalid track format at index', index);
    autoSkipNext();
    return;
  }

  STATE.currentIndex = index;
  STATE.isLoading = true;
  STATE.skipAttempts = 0;
  STATE.currentTime = 0;
  STATE.duration = 0;

  // Immediate UI synchronization
  updateNowPlayingUI(track);
  updateDiscoverHighlight(index);
  updateMobileBar(track);

  showLoading(true);
  hideError();

  try {
    STATE.ytPlayer.loadVideoById(track.videoId);
  } catch (e) {
    console.warn('Player load error:', e);
    showError('Unable to load track.');
  }

  // Reveal player controls on first play
  if (!STATE.hasStarted) {
    STATE.hasStarted = true;
    showPlayerControls();
  }

  unlockMobileAudio();
  updateMediaSession();
  savePersistedSettings();
}

function togglePlayPause() {
  if (!STATE.ytReady || !STATE.ytPlayer) return;

  if (STATE.trackList.length === 0) {
    loadCategoryAndPlay(STATE.currentCategory);
    return;
  }

  if (STATE.currentIndex === -1) {
    playTrack(0);
    return;
  }

  if (STATE.isPlaying) {
    try {
      STATE.ytPlayer.pauseVideo();
    } catch (e) {}
  } else {
    try {
      STATE.ytPlayer.playVideo();
    } catch (e) {}
  }
}

function playNext() {
  const nextIdx = getNextIndex();
  if (nextIdx !== -1) playTrack(nextIdx);
}

function playPrev() {
  // If current position > 3.0s, restart the current track
  if (STATE.currentTime > 3.0) {
    seekTo(0);
    if (!STATE.isPlaying && STATE.ytReady && STATE.ytPlayer) {
      try { STATE.ytPlayer.playVideo(); } catch (e) {}
    }
    return;
  }

  const prevIdx = getPrevIndex();
  if (prevIdx !== -1) playTrack(prevIdx);
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
  // 3-state cycle: 'off' -> 'all' -> 'one' -> 'off'
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
      if (STATE.currentIndex === -1 && STATE.trackList.length > 0) {
        playTrack(0);
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
    } catch (err) {
      // Some browsers don't support seekforward/seekbackward/stop actions
    }
  });

  STATE.mediaSessionInitialized = true;
}

function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  initMediaSessionHandlers();

  const track = STATE.trackList[STATE.currentIndex];
  if (!track) return;

  const artworkBase = track.thumbnail || getYouTubeThumbnail(track.videoId, 'hqdefault');
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
    console.warn('[SurBeat] MediaMetadata assignment error:', e);
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

  // Strict validation: never send NaN, Infinity, negative duration, or position > duration
  if (
    isFinite(dur) &&
    dur > 0 &&
    isFinite(pos) &&
    pos >= 0 &&
    pos <= dur
  ) {
    try {
      navigator.mediaSession.setPositionState({
        duration: dur,
        playbackRate: 1,
        position: pos,
      });
    } catch (e) {}
  }
}

// ════════════════════════════════════════════════════════════════
// 11. VISIBILITY & BACKGROUND RESILIENCE
// ════════════════════════════════════════════════════════════════

function setupVisibilityHandling() {
  document.addEventListener('visibilitychange', () => {
    // When returning to page, instantly synchronize seekbar & UI state with audio timeline
    if (!document.hidden && STATE.ytReady && STATE.ytPlayer) {
      try {
        const ct = STATE.ytPlayer.getCurrentTime() || 0;
        const dur = STATE.ytPlayer.getDuration() || 0;
        STATE.currentTime = ct;
        STATE.duration = dur;
        updateSeekUI(ct, dur);
        updatePlaybackUI(STATE.isPlaying);
      } catch (e) {}
    }
  });
}

// ════════════════════════════════════════════════════════════════
// 12. CATEGORY LOADING & DISCOVERY
// ════════════════════════════════════════════════════════════════

const CATEGORY_CACHE = {};
let isQuotaExceeded = false;

function getFallbackCategoryTracks(category) {
  let tracks = [];

  // 1. Try global SurBeat Catalog
  if (typeof window !== 'undefined' && typeof window.getSurBeatDatabaseSongs === 'function') {
    tracks = window.getSurBeatDatabaseSongs(category);
  } else if (typeof window !== 'undefined' && window.SURBEAT_CATALOG && window.SURBEAT_CATALOG[category]) {
    tracks = window.SURBEAT_CATALOG[category];
  }

  // 2. Specific fallbacks for workout and awarapan if needed
  if ((!tracks || tracks.length === 0) && category === 'workout' && typeof window !== 'undefined' && window.WORKOUT_CATALOG && Array.isArray(window.WORKOUT_CATALOG)) {
    tracks = window.WORKOUT_CATALOG
      .filter(t => t.ytId && isValidYouTubeId(t.ytId))
      .map(t => ({
        videoId: t.ytId,
        title: t.title,
        artist: t.artist,
        category: 'workout',
        thumbnail: t.artwork || getYouTubeThumbnail(t.ytId),
      }));
  }

  if ((!tracks || tracks.length === 0) && category === 'awarapan') {
    tracks = AWARAPAN_TRACKS;
  }

  // 3. Ultimate fallback
  if (!tracks || tracks.length === 0) {
    tracks = AWARAPAN_TRACKS;
  }

  return tracks.map(t => ({
    videoId: t.videoId || t.ytId,
    title: t.title || 'SurBeat Melody',
    artist: t.artist || 'SurBeat Artist',
    category: category || t.category || 'trending',
    thumbnail: t.thumbnail || t.artwork || getYouTubeThumbnail(t.videoId || t.ytId),
  }));
}

async function loadCategory(category, autoPlay = false, forceRefresh = false) {
  STATE.currentCategory = category;
  STATE.currentIndex = -1;
  STATE.trackList = [];

  // Update category buttons UI
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const isActive = btn.dataset.category === category;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update discover subtitle
  const subEl = document.getElementById('discoverSubtitle');
  if (subEl) subEl.textContent = `Browsing — ${CATEGORY_META[category]?.name || category}`;

  // If already cached and not forcing refresh, use stable cached tracks immediately (no flicker/jump)
  if (!forceRefresh && CATEGORY_CACHE[category] && CATEGORY_CACHE[category].length > 0) {
    STATE.trackList = CATEGORY_CACHE[category];
    renderDiscoverCards(STATE.trackList);
    savePersistedSettings();
    if (autoPlay) playTrack(0);
    return;
  }

  // Clear discover grid with loading skeleton
  const grid = document.getElementById('trackGrid');
  if (grid) {
    grid.innerHTML = `
      <div class="tracks-placeholder" id="tracksPlaceholder">
        <div class="loading-spinner" aria-hidden="true"></div>
        <p style="margin-top:12px;color:var(--text-secondary)">Loading ${CATEGORY_META[category]?.name || category}…</p>
      </div>`;
  }

  let tracks = [];

  // 1. Try backend API
  tracks = await fetchTracksFromBackend(category);

  // 2. Try YouTube search API fallback (if quota not exceeded)
  if (tracks.length === 0 && !isQuotaExceeded) {
    tracks = await searchYouTube(category);
  }

  // 3. Guaranteed instant Database Catalog Fallback when API quota is reached / offline
  if (tracks.length === 0) {
    tracks = getFallbackCategoryTracks(category);
  }

  // Merge with curated tracks for awarapan to ensure 100% complete collection
  if (category === 'awarapan') {
    const curated = AWARAPAN_TRACKS.map(t => ({
      videoId: t.videoId,
      title: t.title,
      artist: t.artist,
      category: t.category,
      thumbnail: getYouTubeThumbnail(t.videoId),
    }));

    const existingIds = new Set(tracks.map(t => t.videoId));
    const needed = curated.filter(t => !existingIds.has(t.videoId));
    tracks = [...needed, ...tracks];
  }

  // Save to category cache for stable discover experience
  CATEGORY_CACHE[category] = tracks;
  STATE.trackList = tracks;

  renderDiscoverCards(tracks);
  savePersistedSettings();

  if (autoPlay) {
    playTrack(0);
  }
}

async function loadCategoryAndPlay(category) {
  await loadCategory(category, true);
}

// ════════════════════════════════════════════════════════════════
// 13. DATA FETCHING
// ════════════════════════════════════════════════════════════════

async function fetchTracksFromBackend(category) {
  if (!API_BASE_URL || isFileProtocol || !isBackendAvailable) return [];

  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${API_BASE_URL}/songs/${category}`, { signal: controller.signal });
    clearTimeout(tid);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data || !Array.isArray(data.tracks)) return [];
    return data.tracks
      .filter(t => isValidYouTubeId(t.videoId || t.ytId))
      .map(t => ({
        videoId: t.videoId || t.ytId,
        title: t.title || 'Unknown Track',
        artist: t.artist || 'Unknown Artist',
        category: category,
        thumbnail: t.thumbnail || t.artwork || getYouTubeThumbnail(t.videoId || t.ytId),
      }));
  } catch (e) {
    return [];
  }
}

async function searchYouTube(category) {
  if (!FRONTEND_YT_API_KEY || isQuotaExceeded) return [];

  // Use primary canonical query to keep discover tracks stable and high-quality
  const queries = CATEGORY_QUERIES[category] || CATEGORY_QUERIES.trending;
  const query = queries[0];

  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('q', query);
    url.searchParams.set('type', 'video');
    url.searchParams.set('videoCategoryId', '10'); // Music
    url.searchParams.set('videoEmbeddable', 'true');
    url.searchParams.set('maxResults', '20');
    url.searchParams.set('relevanceLanguage', 'hi');
    url.searchParams.set('key', FRONTEND_YT_API_KEY);

    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url.toString(), { signal: controller.signal });
    clearTimeout(tid);

    if (res.status === 403) {
      isQuotaExceeded = true;
      console.info('⚡ [SurBeat] YouTube Search API quota reached. Instant failover to verified Database Catalog.');
      return [];
    }

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    if (!data || !Array.isArray(data.items)) return [];

    return data.items
      .filter(item => isValidYouTubeId(item.id?.videoId))
      .map(item => ({
        videoId: item.id.videoId,
        title: item.snippet?.title || 'Unknown Track',
        artist: item.snippet?.channelTitle || 'Unknown Artist',
        category: category,
        thumbnail: item.snippet?.thumbnails?.high?.url ||
                   item.snippet?.thumbnails?.medium?.url ||
                   getYouTubeThumbnail(item.id.videoId),
      }));
  } catch (e) {
    return [];
  }
}

// ════════════════════════════════════════════════════════════════
// 14. UI UPDATE FUNCTIONS
// ════════════════════════════════════════════════════════════════

function updatePlaybackUI(isPlaying) {
  // Vinyl disc spinning
  const vinylDisc = document.getElementById('vinylDisc');
  if (vinylDisc) vinylDisc.classList.toggle('playing', isPlaying);

  // Tonearm pivot
  const tonearm = document.getElementById('tonearmPivot');
  if (tonearm) tonearm.classList.toggle('playing', isPlaying);

  // Audio Visualizer
  const viz = document.getElementById('audioVisualizer');
  if (viz) viz.classList.toggle('playing', isPlaying);

  // NP equalizer bars
  const npEq = document.getElementById('npEqBars');
  if (npEq) npEq.classList.toggle('playing', isPlaying);

  // Side card equalizers
  const sideEqA = document.getElementById('sideEqA');
  const sideEqB = document.getElementById('sideEqB');
  if (sideEqA) sideEqA.classList.toggle('playing', isPlaying);
  if (sideEqB) sideEqB.classList.toggle('playing', isPlaying);

  // Play/Pause button icon
  const path = document.getElementById('playPausePath');
  if (path) {
    path.setAttribute('d', isPlaying
      ? 'M6 5h4v14H6zm8 0h4v14h-4z'   // Pause icon
      : 'M8 5v14l11-7z'               // Play icon
    );
  }

  // Play/Pause accessibility
  const ppBtn = document.getElementById('playPauseBtn');
  if (ppBtn) ppBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');

  // Mobile bar play icon
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

function updateDiscoverHighlight(activeIndex) {
  document.querySelectorAll('.track-card').forEach((card, i) => {
    card.classList.toggle('playing-card', i === activeIndex);
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

  if (tracks.length === 0) {
    grid.innerHTML = `
      <div class="tracks-placeholder">
        <div class="placeholder-icon">🎵</div>
        <p>No tracks found for this category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = '';
  const categoryName = CATEGORY_META[STATE.currentCategory]?.name || STATE.currentCategory;

  tracks.forEach((track, index) => {
    const card = createTrackCard(track, index, categoryName);
    grid.appendChild(card);
  });
}

function createTrackCard(track, index, categoryName) {
  const card = document.createElement('div');
  card.className = 'track-card';
  if (index === STATE.currentIndex) card.classList.add('playing-card');
  card.setAttribute('role', 'listitem');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Play ${track.title} by ${track.artist}`);
  card.dataset.index = index;

  const thumb = track.thumbnail || '';
  const hasThumb = !!thumb;

  card.innerHTML = `
    <div class="track-thumb">
      ${hasThumb
        ? `<img
            src="${thumb}"
            alt="${escapeHtml(track.title)} thumbnail"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=track-thumb-fallback>🎵</div>'"
           />`
        : `<div class="track-thumb-fallback">🎵</div>`
      }
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

  card.addEventListener('click', () => playTrack(index));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playTrack(index);
    }
  });

  return card;
}

// ════════════════════════════════════════════════════════════════
// 16. MOBILE AUDIO UNLOCK & PWA SERVICE WORKER
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
  if ('serviceWorker' in navigator && !isFileProtocol) {
    const doRegister = () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('⚡ SurBeat PWA Service Worker Registered:', reg.scope);
        })
        .catch((err) => {
          console.warn('[SurBeat] SW registration error:', err);
        });
    };

    if (document.readyState === 'complete') {
      doRegister();
    } else if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('load', doRegister);
    }
  }
}

// ════════════════════════════════════════════════════════════════
// 17. BACKEND HEALTH CHECK
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
// 18. UI EVENT BINDINGS
// ════════════════════════════════════════════════════════════════

function bindCategoryButtons() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (!cat || cat === STATE.currentCategory) return;
      loadCategory(cat, false);
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
  // Play trigger (initial start button)
  const triggerBtn = document.getElementById('playTriggerBtn');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      unlockMobileAudio();
      loadCategoryAndPlay(STATE.currentCategory);
    });
  }

  // Play/Pause button
  const ppBtn = document.getElementById('playPauseBtn');
  if (ppBtn) {
    ppBtn.addEventListener('click', () => {
      unlockMobileAudio();
      if (STATE.trackList.length === 0 && STATE.currentIndex === -1) {
        loadCategoryAndPlay(STATE.currentCategory);
      } else {
        togglePlayPause();
      }
    });
  }

  // Previous button
  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) prevBtn.addEventListener('click', playPrev);

  // Next button
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.addEventListener('click', playNext);

  // Shuffle button
  const shuffleBtn = document.getElementById('shuffleBtn');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', toggleShuffle);
  }

  // Repeat button
  const repeatBtn = document.getElementById('repeatBtn');
  if (repeatBtn) {
    repeatBtn.addEventListener('click', toggleRepeat);
  }

  // Seek slider
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

  // Volume slider
  const volSlider = document.getElementById('volumeSlider');
  if (volSlider) {
    volSlider.addEventListener('input', () => {
      setVolume(parseInt(volSlider.value, 10));
    });
  }

  // Mute button
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

  // Clicking track in mini player smoothly navigates back to turntable
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
// 19. INITIALIZATION
// ════════════════════════════════════════════════════════════════

async function init() {
  // Load saved preferences (volume, repeat, shuffle, category)
  loadPersistedSettings();

  // Start real-time clock & organic listener count
  startListenerFluctuation();

  // Check backend availability
  await checkBackendHealth();

  // Register PWA service worker
  registerServiceWorker();

  // Bind visibility & background events
  setupVisibilityHandling();

  // Bind all UI interactive elements
  bindCategoryButtons();
  bindSideCards();
  bindPlayerControls();
  bindMobileBar();
  bindTouchUnlock();

  // Apply persisted settings to UI
  updateVolumeUI(STATE.volume);
  updateRepeatUI();
  updateShuffleUI();

  // Check URL category query or fallback
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  const initialCategory = (catParam && CATEGORY_META[catParam]) ? catParam : STATE.currentCategory;

  // Load YouTube IFrame API
  loadYouTubeAPI();

  // Preload track list for category (without autoplay)
  loadCategory(initialCategory, false);

  // Initialize media session action listeners early where supported
  initMediaSessionHandlers();

  document.body.classList.add('loaded');
  console.log('🎧 SurBeat Audio Engine initialized. Ready for background playback.');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
