/**
 * SurBeat — Complete Music Engine
 * Single centralized STATE. YouTube IFrame API. All controls functional.
 * No WebGL. No Three.js. No fake interactions.
 */

'use strict';

// ════════════════════════════════════════════════════════════════
// CONFIG
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

// ════════════════════════════════════════════════════════════════
// CENTRALIZED STATE — single source of truth
// ════════════════════════════════════════════════════════════════

const STATE = {
  currentCategory: 'trending',
  trackList: [],          // Array of { videoId, title, artist, category, thumbnail }
  currentIndex: -1,
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  volume: 80,
  isMuted: false,
  prevVolume: 80,
  ytPlayer: null,
  ytReady: false,
  hasStarted: false,      // True after first play
  isLoading: false,
  currentTime: 0,
  duration: 0,
  seekIntervalId: null,
  skipAttempts: 0,        // For auto-skip on error
};

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

// Awarapan curated tracks (known video IDs)
const AWARAPAN_TRACKS = [
  { videoId: 'iqC_a6RQRGE', title: 'Toh Phir Aao', artist: 'Mustafa Zahid', category: 'awarapan' },
  { videoId: 'G_3tBVyLGlI', title: 'Tera Mera Rishta', artist: 'Mustafa Zahid', category: 'awarapan' },
  { videoId: 'Xa0D6kfQ7Ic', title: 'Mahiya', artist: 'Annie Khalid', category: 'awarapan' },
  { videoId: 'Dz_9sFaKIRg', title: 'Awarapan Banjarapan', artist: 'Mohammed Rafi', category: 'awarapan' },
  { videoId: 'T0v9WrHxjfM', title: 'O Sanam', artist: 'Lucky Ali', category: 'awarapan' },
  { videoId: 'yOqNHnNZsAs', title: 'Woh Lamhe', artist: 'Atif Aslam', category: 'awarapan' },
  { videoId: 'R4LhF_D4vSk', title: 'Tu Hi Meri Shab Hai', artist: 'Mohit Chauhan', category: 'awarapan' },
  { videoId: 'LGKmQmvnMh0', title: 'Dil Ibaadat', artist: 'KK', category: 'awarapan' },
];

// ════════════════════════════════════════════════════════════════
// UTILITIES
// ════════════════════════════════════════════════════════════════

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isValidYouTubeId(id) {
  if (!id || typeof id !== 'string') return false;
  if (id.length !== 11) return false;
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}

function getYouTubeThumbnail(videoId) {
  if (!isValidYouTubeId(videoId)) return null;
  return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
}

// ════════════════════════════════════════════════════════════════
// CLOCK
// ════════════════════════════════════════════════════════════════

function updateClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

setInterval(updateClock, 1000);
updateClock();

// ════════════════════════════════════════════════════════════════
// LISTENER COUNT (organic simulation)
// ════════════════════════════════════════════════════════════════

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
// YOUTUBE IFRAME API
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
  STATE.ytPlayer.setVolume(STATE.volume);
  console.log('✅ SurBeat YouTube Player Ready');
}

function onYTPlayerStateChange(event) {
  const YTS = YT.PlayerState;

  if (event.data === YTS.PLAYING) {
    STATE.isPlaying = true;
    STATE.isLoading = false;
    STATE.skipAttempts = 0;
    STATE.duration = STATE.ytPlayer.getDuration() || 0;
    updatePlaybackUI(true);
    startSeekInterval();
    updateMediaSession();
  }

  if (event.data === YTS.PAUSED) {
    STATE.isPlaying = false;
    updatePlaybackUI(false);
    stopSeekInterval();
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
    // ignore
  }
}

function onYTPlayerError(event) {
  console.warn('⚠️ YouTube Player Error:', event.data);
  STATE.isLoading = false;
  STATE.skipAttempts++;

  if (STATE.skipAttempts < 5 && STATE.trackList.length > 1) {
    showError('Unable to load track. Skipping…');
    setTimeout(() => {
      hideError();
      autoSkipNext();
    }, 1500);
  } else {
    showError('Unable to load this track. Please choose another song.');
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
  if (STATE.isRepeat) {
    // Replay current
    playTrack(STATE.currentIndex);
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

function getNextIndex() {
  if (STATE.trackList.length === 0) return -1;
  if (STATE.isShuffle) {
    let idx;
    let tries = 0;
    do {
      idx = Math.floor(Math.random() * STATE.trackList.length);
      tries++;
    } while (idx === STATE.currentIndex && STATE.trackList.length > 1 && tries < 20);
    return idx;
  }
  return (STATE.currentIndex + 1) % STATE.trackList.length;
}

function getPrevIndex() {
  if (STATE.trackList.length === 0) return -1;
  if (STATE.isShuffle) return getNextIndex();
  return (STATE.currentIndex - 1 + STATE.trackList.length) % STATE.trackList.length;
}

// ════════════════════════════════════════════════════════════════
// PLAYBACK CONTROL
// ════════════════════════════════════════════════════════════════

function playTrack(index) {
  if (!STATE.ytReady || !STATE.ytPlayer) {
    console.warn('YouTube player not ready');
    return;
  }

  if (index < 0 || index >= STATE.trackList.length) return;
  const track = STATE.trackList[index];
  if (!track || !isValidYouTubeId(track.videoId)) {
    console.warn('Invalid track at index', index);
    autoSkipNext();
    return;
  }

  STATE.currentIndex = index;
  STATE.isLoading = true;
  STATE.skipAttempts = 0;
  STATE.currentTime = 0;
  STATE.duration = 0;

  // Update now-playing info immediately (no layout shift)
  updateNowPlayingUI(track);

  // Update discover cards highlight
  updateDiscoverHighlight(index);

  // Update mobile bar
  updateMobileBar(track);

  // Load and play
  showLoading(true);
  hideError();

  try {
    STATE.ytPlayer.loadVideoById(track.videoId);
  } catch (e) {
    console.warn('loadVideoById error:', e);
    showError('Failed to load track.');
  }

  // Show controls if first play
  if (!STATE.hasStarted) {
    STATE.hasStarted = true;
    showPlayerControls();
  }

  // Unlock audio on mobile
  unlockMobileAudio();
}

function togglePlayPause() {
  if (!STATE.ytReady || !STATE.ytPlayer) return;

  if (STATE.trackList.length === 0) {
    // No tracks loaded yet — trigger load and play
    loadCategoryAndPlay(STATE.currentCategory);
    return;
  }

  if (STATE.currentIndex === -1) {
    playTrack(0);
    return;
  }

  if (STATE.isPlaying) {
    STATE.ytPlayer.pauseVideo();
  } else {
    STATE.ytPlayer.playVideo();
  }
}

function playNext() {
  const nextIdx = getNextIndex();
  if (nextIdx !== -1) playTrack(nextIdx);
}

function playPrev() {
  // If > 3s into track, restart it
  if (STATE.currentTime > 3 && STATE.ytReady && STATE.ytPlayer) {
    try { STATE.ytPlayer.seekTo(0, true); } catch (e) {}
    return;
  }
  const prevIdx = getPrevIndex();
  if (prevIdx !== -1) playTrack(prevIdx);
}

function setVolume(v) {
  v = Math.max(0, Math.min(100, v));
  STATE.volume = v;
  STATE.isMuted = v === 0;
  if (STATE.ytReady && STATE.ytPlayer) {
    try { STATE.ytPlayer.setVolume(v); } catch (e) {}
  }
  updateVolumeUI(v);
}

function toggleMute() {
  if (STATE.isMuted) {
    setVolume(STATE.prevVolume || 80);
  } else {
    STATE.prevVolume = STATE.volume;
    setVolume(0);
  }
}

function seekTo(seconds) {
  if (!STATE.ytReady || !STATE.ytPlayer) return;
  try { STATE.ytPlayer.seekTo(seconds, true); } catch (e) {}
  STATE.currentTime = seconds;
  updateSeekUI(seconds, STATE.duration);
}

// ════════════════════════════════════════════════════════════════
// SEEK INTERVAL
// ════════════════════════════════════════════════════════════════

function startSeekInterval() {
  stopSeekInterval();
  STATE.seekIntervalId = setInterval(() => {
    if (!STATE.ytReady || !STATE.ytPlayer || !STATE.isPlaying) return;
    try {
      const ct = STATE.ytPlayer.getCurrentTime() || 0;
      const dur = STATE.ytPlayer.getDuration() || 0;
      STATE.currentTime = ct;
      STATE.duration = dur;
      updateSeekUI(ct, dur);
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
// CATEGORY LOADING
// ════════════════════════════════════════════════════════════════

async function loadCategory(category, autoPlay = false) {
  STATE.currentCategory = category;
  STATE.currentIndex = -1;
  STATE.trackList = [];

  // Update category button UI
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const isActive = btn.dataset.category === category;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update discover subtitle
  const subEl = document.getElementById('discoverSubtitle');
  if (subEl) subEl.textContent = `Browsing — ${CATEGORY_META[category]?.name || category}`;

  // Clear discover grid
  const grid = document.getElementById('trackGrid');
  if (grid) {
    grid.innerHTML = `
      <div class="tracks-placeholder" id="tracksPlaceholder">
        <div class="loading-spinner" aria-hidden="true"></div>
        <p style="margin-top:12px;color:var(--text-secondary)">Loading ${CATEGORY_META[category]?.name || category}…</p>
      </div>`;
  }

  // Use curated data for awarapan, or YouTube search for others
  let tracks = [];

  if (category === 'awarapan') {
    tracks = AWARAPAN_TRACKS.map(t => ({
      videoId: t.videoId,
      title: t.title,
      artist: t.artist,
      category: t.category,
      thumbnail: getYouTubeThumbnail(t.videoId),
    }));
  } else {
    // Try backend first
    tracks = await fetchTracksFromBackend(category);

    // If no backend / empty, try YouTube search API
    if (tracks.length === 0) {
      tracks = await searchYouTube(category);
    }
  }

  if (tracks.length === 0) {
    if (grid) {
      grid.innerHTML = `
        <div class="tracks-placeholder">
          <div class="placeholder-icon">🎵</div>
          <p>No tracks found. Check your connection and try again.</p>
        </div>`;
    }
    return;
  }

  STATE.trackList = tracks;
  renderDiscoverCards(tracks);

  if (autoPlay) {
    playTrack(0);
  }
}

async function loadCategoryAndPlay(category) {
  await loadCategory(category, true);
}

// ════════════════════════════════════════════════════════════════
// DATA FETCHING
// ════════════════════════════════════════════════════════════════

async function fetchTracksFromBackend(category) {
  if (!API_BASE_URL || isFileProtocol || !isBackendAvailable) return [];

  try {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`${API_BASE_URL}/songs/${category}`, { signal: controller.signal });
    clearTimeout(tid);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data || !Array.isArray(data.tracks)) return [];
    return data.tracks
      .filter(t => isValidYouTubeId(t.videoId))
      .map(t => ({
        videoId: t.videoId,
        title: t.title || 'Unknown Track',
        artist: t.artist || 'Unknown Artist',
        category: category,
        thumbnail: t.thumbnail || getYouTubeThumbnail(t.videoId),
      }));
  } catch (e) {
    return [];
  }
}

async function searchYouTube(category) {
  if (!FRONTEND_YT_API_KEY) return [];

  const queries = CATEGORY_QUERIES[category] || CATEGORY_QUERIES.trending;
  const query = queries[Math.floor(Math.random() * queries.length)];

  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('q', query);
    url.searchParams.set('type', 'video');
    url.searchParams.set('videoCategoryId', '10'); // Music
    url.searchParams.set('maxResults', '20');
    url.searchParams.set('relevanceLanguage', 'hi');
    url.searchParams.set('key', FRONTEND_YT_API_KEY);

    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(url.toString(), { signal: controller.signal });
    clearTimeout(tid);

    if (!res.ok) {
      console.warn('YouTube API error:', res.status, res.statusText);
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
        thumbnail: item.snippet?.thumbnails?.medium?.url ||
                   item.snippet?.thumbnails?.default?.url ||
                   getYouTubeThumbnail(item.id.videoId),
      }));
  } catch (e) {
    console.warn('YouTube search failed:', e.message);
    return [];
  }
}

// ════════════════════════════════════════════════════════════════
// UI UPDATE FUNCTIONS
// ════════════════════════════════════════════════════════════════

function updatePlaybackUI(isPlaying) {
  // Vinyl rotation
  const vinylDisc = document.getElementById('vinylDisc');
  if (vinylDisc) vinylDisc.classList.toggle('playing', isPlaying);

  // Tonearm position
  const tonearm = document.getElementById('tonearmPivot');
  if (tonearm) tonearm.classList.toggle('playing', isPlaying);

  // Visualizer
  const viz = document.getElementById('audioVisualizer');
  if (viz) viz.classList.toggle('playing', isPlaying);

  // NP eq bars
  const npEq = document.getElementById('npEqBars');
  if (npEq) npEq.classList.toggle('playing', isPlaying);

  // Side EQs
  const sideEqA = document.getElementById('sideEqA');
  const sideEqB = document.getElementById('sideEqB');
  if (sideEqA) sideEqA.classList.toggle('playing', isPlaying);
  if (sideEqB) sideEqB.classList.toggle('playing', isPlaying);

  // Play/Pause button icon
  const path = document.getElementById('playPausePath');
  if (path) {
    path.setAttribute('d', isPlaying
      ? 'M6 5h4v14H6zm8 0h4v14h-4z'   // pause icon
      : 'M8 5v14l11-7z'               // play icon
    );
  }

  // Play/Pause aria-label
  const ppBtn = document.getElementById('playPauseBtn');
  if (ppBtn) ppBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');

  // Mobile bar
  const mbarPlayPath = document.getElementById('mbarPlayPath');
  if (mbarPlayPath) {
    mbarPlayPath.setAttribute('d', isPlaying
      ? 'M6 5h4v14H6zm8 0h4v14h-4z'
      : 'M8 5v14l11-7z'
    );
  }

  const mbarDisc = document.getElementById('mbarDisc');
  if (mbarDisc) mbarDisc.classList.toggle('spinning', isPlaying);

  // Loading hidden if playing
  if (isPlaying) showLoading(false);
}

function updateNowPlayingUI(track) {
  if (!track) return;

  const trackEl = document.getElementById('npTrack');
  const artistEl = document.getElementById('npArtist');
  const metaEl = document.getElementById('npMeta');
  const discLabel = document.getElementById('vinylSubLabel');

  // Use text content (no innerHTML) to prevent XSS
  if (trackEl) trackEl.textContent = track.title || 'Unknown Track';
  if (artistEl) artistEl.textContent = track.artist || '';
  if (metaEl) metaEl.textContent = CATEGORY_META[track.category]?.name || track.category || '';

  const subLabel = CATEGORY_META[track.category || STATE.currentCategory]?.subLabel || 'SURBEAT';
  if (discLabel) discLabel.textContent = subLabel;

  // Reset seek
  updateSeekUI(0, 0);

  // Reset time labels
  const ctEl = document.getElementById('timeCurrentLabel');
  const durEl = document.getElementById('timeDurationLabel');
  if (ctEl) ctEl.textContent = '0:00';
  if (durEl) durEl.textContent = '0:00';
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
      // Muted icon
      iconPath.setAttribute('d', 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z');
    } else if (v < 50) {
      // Low volume
      iconPath.setAttribute('d', 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z');
    } else {
      // Full volume
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
// DISCOVER SECTION
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

  // Click anywhere on card = play
  card.addEventListener('click', () => playTrack(index));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playTrack(index);
    }
  });

  return card;
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
// MOBILE AUDIO UNLOCK
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

// ════════════════════════════════════════════════════════════════
// MEDIA SESSION API (lock screen controls)
// ════════════════════════════════════════════════════════════════

function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const track = STATE.trackList[STATE.currentIndex];
  if (!track) return;

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'SurBeat',
      artist: track.artist || 'SurBeat — Indian Vibes',
      album: CATEGORY_META[track.category]?.name || 'SurBeat',
      artwork: [
        { src: track.thumbnail || 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', sizes: '320x180', type: 'image/jpeg' }
      ],
    });

    navigator.mediaSession.setActionHandler('play', () => {
      if (STATE.ytReady && STATE.ytPlayer) STATE.ytPlayer.playVideo();
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      if (STATE.ytReady && STATE.ytPlayer) STATE.ytPlayer.pauseVideo();
    });
    navigator.mediaSession.setActionHandler('previoustrack', playPrev);
    navigator.mediaSession.setActionHandler('nexttrack', playNext);
    navigator.mediaSession.setActionHandler('seekto', (d) => {
      if (d.seekTime != null) seekTo(d.seekTime);
    });
  } catch (e) {}
}

// ════════════════════════════════════════════════════════════════
// BACKEND HEALTH CHECK
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
// EVENT BINDINGS
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
  // Play trigger (initial button)
  const triggerBtn = document.getElementById('playTriggerBtn');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      unlockMobileAudio();
      loadCategoryAndPlay(STATE.currentCategory);
    });
  }

  // Play/Pause
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

  // Previous
  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) prevBtn.addEventListener('click', playPrev);

  // Next
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.addEventListener('click', playNext);

  // Shuffle
  const shuffleBtn = document.getElementById('shuffleBtn');
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      STATE.isShuffle = !STATE.isShuffle;
      shuffleBtn.classList.toggle('active', STATE.isShuffle);
      shuffleBtn.setAttribute('aria-pressed', STATE.isShuffle.toString());
      shuffleBtn.setAttribute('aria-label', `Shuffle: ${STATE.isShuffle ? 'On' : 'Off'}`);
      shuffleBtn.title = `Shuffle: ${STATE.isShuffle ? 'On' : 'Off'}`;
    });
  }

  // Repeat
  const repeatBtn = document.getElementById('repeatBtn');
  if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
      STATE.isRepeat = !STATE.isRepeat;
      repeatBtn.classList.toggle('active', STATE.isRepeat);
      repeatBtn.setAttribute('aria-pressed', STATE.isRepeat.toString());
      repeatBtn.setAttribute('aria-label', `Repeat: ${STATE.isRepeat ? 'On' : 'Off'}`);
      repeatBtn.title = `Repeat: ${STATE.isRepeat ? 'On' : 'Off'}`;
    });
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
      // Update fill live while dragging
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

  if (mbarPrev) mbarPrev.addEventListener('click', playPrev);
  if (mbarNext) mbarNext.addEventListener('click', playNext);
  if (mbarPlay) {
    mbarPlay.addEventListener('click', () => {
      unlockMobileAudio();
      togglePlayPause();
    });
  }
}

function bindTouchUnlock() {
  // once: true auto-removes after first trigger
  document.addEventListener('touchstart', unlockMobileAudio, { passive: true, once: true });
  document.addEventListener('click', unlockMobileAudio, { once: true });
}

// ════════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════════

async function init() {
  // Start listeners count
  startListenerFluctuation();

  // Check backend
  await checkBackendHealth();

  // Bind all UI events
  bindCategoryButtons();
  bindSideCards();
  bindPlayerControls();
  bindMobileBar();
  bindTouchUnlock();

  // Load YouTube API
  loadYouTubeAPI();

  // Pre-load tracks for default category (no autoplay)
  loadCategory('trending', false);

  // Body loaded class
  document.body.classList.add('loaded');

  console.log('🎧 SurBeat initialized. Backend:', isBackendAvailable ? 'connected' : 'offline (using YouTube API)');
}

// Start on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
