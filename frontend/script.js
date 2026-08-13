/**
 * SurBeat — Pure Indian Musical Vibes & 100% Dynamic YouTube Engine
 * Strictly Hindi & Desi Hits (Zero Hardcoded Songs & Zero English)
 */

// YouTube Data API Key for direct client-side dynamic search on Cloudflare Pages
const FRONTEND_YT_API_KEY = "AIzaSyCr_j1AevC8Y3oFs9IPHTqZRiQjbQjcryA";

const isFileProtocol = window.location.protocol === 'file:';

const API_BASE_URL = (() => {
  if (typeof window.__CONFIG__ !== 'undefined' && window.__CONFIG__.API_BASE_URL) {
    return window.__CONFIG__.API_BASE_URL;
  }
  const params = new URLSearchParams(window.location.search);
  if (params.has('api_url')) {
    return params.get('api_url');
  }
  if (isFileProtocol) {
    return '';
  }
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3000/api';
  }
  return '/api';
})();

console.log('🎧 SurBeat 100% Dynamic Hindi Search Engine Initialized');

// 100% Dynamic Search Query Groups — Pure Hindi, Punjabi & Haryanvi Hits (NO Hardcoded Songs & NO English)
const categoryQueries = {
  trending: [
    'instagram trending hindi songs',
    'best hindi songs',
    'trending hindi hits songs',
    'latest viral hindi song',
    'punjabi haryanvi hindi hits'
  ],

  romantic_new: [
    'romantic hindi hits songs',
    'bollywood romantic hindi songs',
    'arijit singh romantic hindi songs',
    'top hindi love songs hits'
  ],

  classic_old: [
    'old hindi romantic hits',
    'evergreen old hindi songs',
    'best old hindi hits songs',
    '90s bollywood hindi classics'
  ],

  lofi: [
    'sad hindi hits songs',
    'hindi lofi romantic songs',
    'slowed reverb hindi hits songs',
    'chai lofi hindi love songs'
  ]
};

// Aliased for internal consistency
const CATEGORY_QUERIES = categoryQueries;

// ========================================
// Category Cache & State Management
// ========================================

const LOCAL_STORAGE_CACHE_KEY = 'surbeat_youtube_cache_v2';
let youtubeCache = {
  trending: [],
  romantic_new: [],
  classic_old: [],
  lofi: []
};

let currentCategory = 'trending';
const recentlyPlayedHistory = []; // Tracks recent 15 played video IDs to prevent repetition
const pendingSearchRequests = new Map(); // In-flight request deduplication
let isQuotaExhausted = false;
let isBackendAvailable = false;

// Load persisted cache on launch
function loadYoutubeCache() {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_CACHE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object') {
        for (const cat of ['trending', 'romantic_new', 'classic_old', 'lofi']) {
          if (Array.isArray(parsed[cat]) && parsed[cat].length > 0) {
            youtubeCache[cat] = parsed[cat];
          }
        }
      }
    }
  } catch (e) {
    console.warn('Cache load error:', e);
  }
}

function saveYoutubeCache() {
  try {
    localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, JSON.stringify(youtubeCache));
  } catch (e) {
    console.warn('Cache save error:', e);
  }
}

function showSearchStatus(message, type = 'info') {
  const statusEl = document.getElementById('searchStatus');
  if (!statusEl) return;
  statusEl.innerText = message;
  statusEl.className = `search-status ${type}`;
  statusEl.style.display = 'block';
  if (type === 'info' || type === 'success') {
    setTimeout(() => {
      if (statusEl.innerText === message) statusEl.style.display = 'none';
    }, 4000);
  }
}

function hideSearchStatus() {
  const statusEl = document.getElementById('searchStatus');
  if (statusEl) statusEl.style.display = 'none';
}

// Background Audio Keep-Alive Element for Mobile Lock-Screen Playback
let silentAudioEl = null;

function initLockScreenAudioKeepAlive() {
  if (silentAudioEl) return;
  try {
    const silentWavData = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
    silentAudioEl = new Audio(silentWavData);
    silentAudioEl.loop = true;
  } catch (e) {
    console.warn('Silent audio element creation error:', e);
  }
}

function startLockScreenAudioSession() {
  if (!silentAudioEl) initLockScreenAudioKeepAlive();
  if (silentAudioEl && silentAudioEl.paused) {
    silentAudioEl.play().catch(() => { });
  }
}

function stopLockScreenAudioSession() {
  if (silentAudioEl && !silentAudioEl.paused) {
    silentAudioEl.pause();
  }
}

// ========================================
// Media Session API Integration (Mobile Lock Screen Controls)
// ========================================

function updateMediaSessionMetadata(trackTitle = 'SurBeat Hindi Hit') {
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: trackTitle,
        artist: 'Rishabh Pandey — SurBeat',
        album: 'SurBeat Indian Musical Hits',
        artwork: [
          { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=512&q=80', sizes: '512x512', type: 'image/jpeg' },
          { src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=192&q=80', sizes: '192x192', type: 'image/jpeg' }
        ]
      });

      setupMediaSessionActionHandlers();
    } catch (e) {
      console.warn('Media Session metadata error:', e);
    }
  }
}

function setupMediaSessionActionHandlers() {
  if ('mediaSession' in navigator) {
    const actionHandlers = [
      ['play', () => {
        startLockScreenAudioSession();
        if (player && typeof player.playVideo === 'function') {
          player.playVideo();
          setPlayPauseIcon(true);
        }
      }],
      ['pause', () => {
        stopLockScreenAudioSession();
        if (player && typeof player.pauseVideo === 'function') {
          player.pauseVideo();
          setPlayPauseIcon(false);
        }
      }],
      ['previoustrack', () => playPrev()],
      ['nexttrack', () => playNext()],
      ['seekto', (details) => {
        if (player && typeof player.seekTo === 'function' && details.seekTime) {
          player.seekTo(details.seekTime, true);
        }
      }]
    ];

    for (const [action, handler] of actionHandlers) {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch (e) { }
    }
  }
}

// ========================================
// Utilities
// ========================================

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function shuffle(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ========================================
// Clock & Live Online Counter
// ========================================

function updateClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;
  const now = new Date();
  clockEl.innerText = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

// Real Active Session Presence Tracker (Stable Tab ID via sessionStorage)
function getStableTabId() {
  try {
    let id = sessionStorage.getItem('surbeat_tab_id');
    if (!id) {
      id = 'tab_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
      sessionStorage.setItem('surbeat_tab_id', id);
    }
    return id;
  } catch (e) {
    if (!window.__SURBEAT_TAB_ID__) {
      window.__SURBEAT_TAB_ID__ = 'tab_' + Math.random().toString(36).substring(2, 9);
    }
    return window.__SURBEAT_TAB_ID__;
  }
}

function removeTabFromPresence() {
  try {
    const tabId = getStableTabId();
    const presenceKey = 'surbeat_active_presence_v1';
    const raw = localStorage.getItem(presenceKey);
    if (raw) {
      const presenceMap = JSON.parse(raw);
      delete presenceMap[tabId];
      localStorage.setItem(presenceKey, JSON.stringify(presenceMap));
    }
  } catch (e) { }
}

function getRealActiveListenersCount() {
  const now = Date.now();
  const presenceKey = 'surbeat_active_presence_v1';
  const tabId = getStableTabId();

  let presenceMap = {};
  try {
    const raw = localStorage.getItem(presenceKey);
    if (raw) presenceMap = JSON.parse(raw);
  } catch (e) { }

  // Heartbeat for current active browser tab (reuses stable tabId across refreshes)
  presenceMap[tabId] = now;

  // Prune tabs inactive for > 15 seconds
  let activeCount = 0;
  const updatedMap = {};
  for (const [id, ts] of Object.entries(presenceMap)) {
    if (now - ts < 15000) {
      updatedMap[id] = ts;
      activeCount++;
    }
  }

  try {
    localStorage.setItem(presenceKey, JSON.stringify(updatedMap));
  } catch (e) { }

  return Math.max(1, activeCount);
}

function updateOnlineListeners() {
  const textEl = document.getElementById('visitorCountText');
  if (!textEl) return;

  const activeCount = getRealActiveListenersCount();
  textEl.innerText = `${activeCount} Active Listener${activeCount === 1 ? '' : 's'} Online`;
}

window.addEventListener('beforeunload', removeTabFromPresence);
window.addEventListener('pagehide', removeTabFromPresence);

async function checkBackendHealth() {
  if (!API_BASE_URL || isFileProtocol) {
    isBackendAvailable = false;
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (data && data.status === 'ok') {
        isBackendAvailable = true;
        return;
      }
    }
  } catch (e) { }
  isBackendAvailable = false;
}

async function safeJsonFetch(url, label) {
  if (!url || isFileProtocol || !isBackendAvailable) {
    return null;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) return null;

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) return null;

    return await res.json();
  } catch (e) {
    return null;
  }
}

// ========================================
// Background Image Loader
// ========================================

async function loadRomanticBackground() {
  const bgEl = document.getElementById('bgPhoto');
  if (!bgEl) return;

  const localFallbacks = [
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
  ];

  if (!isBackendAvailable) {
    const randomUrl = localFallbacks[Math.floor(Math.random() * localFallbacks.length)];
    bgEl.style.backgroundImage = `url('${randomUrl}')`;
    return;
  }

  try {
    const data = await safeJsonFetch(`${API_BASE_URL}/photos/romantic`, 'Background photo');
    if (data && data.success && data.data?.url) {
      bgEl.style.backgroundImage = `url('${data.data.url}')`;
    } else {
      const randomUrl = localFallbacks[Math.floor(Math.random() * localFallbacks.length)];
      bgEl.style.backgroundImage = `url('${randomUrl}')`;
    }
  } catch (e) {
    const randomUrl = localFallbacks[Math.floor(Math.random() * localFallbacks.length)];
    bgEl.style.backgroundImage = `url('${randomUrl}')`;
  }
}

// ========================================
// Indian Sargam Floating Particles
// ========================================

function addFloatingNotes() {
  const sargamNotes = ['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni', '🪕', '🪘', '♩', '♫', '♬', '✨'];
  for (let i = 0; i < 20; i++) {
    const n = document.createElement('div');
    n.className = 'note';
    n.innerText = sargamNotes[Math.floor(Math.random() * sargamNotes.length)];
    n.style.left = Math.random() * 100 + 'vw';
    n.style.fontSize = (1.1 + Math.random() * 1.5) + 'rem';
    n.style.animationDuration = (12 + Math.random() * 14) + 's';
    n.style.animationDelay = (Math.random() * 14) + 's';
    document.body.appendChild(n);
  }
}

// ========================================
// ONE Centralized YouTube Search Engine
// ========================================

function isRelevantHindiMusic(item) {
  if (!item || !item.id || !item.id.videoId) return false;
  const title = (item.snippet?.title || '').toLowerCase();
  const channelTitle = (item.snippet?.channelTitle || '').toLowerCase();
  const description = (item.snippet?.description || '').toLowerCase();
  const combined = `${title} ${channelTitle} ${description}`;

  // Filter obvious non-music / irrelevant items
  const irrelevantPattern = /\b(tutorial|how to|reaction|review|gameplay|walkthrough|podcast|news|trailer|teaser|full movie|unboxing|bgmi|pubg|vlog|episode)\b/i;
  if (irrelevantPattern.test(combined)) {
    return false;
  }

  return true;
}

/**
 * ONE Centralized API Search Function
 * - Single request per invocation
 * - In-flight request deduplication
 * - 429 / Quota Exhaustion detection and graceful stop
 * - Strictly Hindi/Desi music filtering
 */
async function performYouTubeSearch(query) {
  const normKey = query.trim().toLowerCase();
  if (!normKey) return [];

  // 1. Check in-flight request (Deduplication)
  if (pendingSearchRequests.has(normKey)) {
    console.log(`🔄 Deduplicating in-flight search request for: "${normKey}"`);
    return pendingSearchRequests.get(normKey);
  }

  // 2. Check Quota exhaustion flag
  if (isQuotaExhausted) {
    console.warn('⚠️ YouTube Search Quota is currently exhausted. Skipping search for:', normKey);
    showSearchStatus('YouTube search quota is temporarily unavailable. Loaded cached songs.', 'warning');
    return [];
  }

  const searchPromise = (async () => {
    try {
      if (!FRONTEND_YT_API_KEY) return [];

      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&order=viewCount&relevanceLanguage=hi&maxResults=25&q=${encodeURIComponent(normKey)}&key=${FRONTEND_YT_API_KEY}`;
      const res = await fetch(url);

      if (res.status === 429) {
        console.error('🚫 YouTube API HTTP 429: Quota Limit Exceeded');
        isQuotaExhausted = true;
        showSearchStatus('YouTube search quota is temporarily unavailable. Please try again later.', 'warning');
        return [];
      }

      if (res.status === 403) {
        const errData = await res.json().catch(() => ({}));
        const reason = errData?.error?.errors?.[0]?.reason || '';
        if (reason === 'quotaExceeded' || reason === 'dailyLimitExceeded') {
          console.error('🚫 YouTube API HTTP 403: Quota Limit Exceeded');
          isQuotaExhausted = true;
          showSearchStatus('YouTube search quota is temporarily unavailable. Please try again later.', 'warning');
        } else {
          console.warn('⚠️ YouTube API HTTP 403:', reason || 'Forbidden');
          showSearchStatus('YouTube API access temporarily restricted.', 'warning');
        }
        return [];
      }

      if (!res.ok) {
        console.warn(`YouTube Search HTTP Error ${res.status}`);
        return [];
      }

      const data = await res.json();
      if (!data || !Array.isArray(data.items)) return [];

      const validItems = data.items.filter(isRelevantHindiMusic);
      const videoIds = validItems.map(item => item.id.videoId).filter(Boolean);

      return videoIds;
    } catch (e) {
      console.warn('YouTube Search Network Exception:', e.message);
      return [];
    } finally {
      pendingSearchRequests.delete(normKey);
    }
  })();

  pendingSearchRequests.set(normKey, searchPromise);
  return searchPromise;
}

/**
 * Ensures category has cached results.
 * If cache ALREADY exists -> USE CACHE (0 API calls).
 * If cache is EMPTY -> Picks ONE random query, executes ONE API call, saves results to cache.
 */
async function ensureCategoryCache(categoryKey) {
  if (!youtubeCache[categoryKey]) {
    youtubeCache[categoryKey] = [];
  }

  // 1. Check cache (Instant HIT -> 0 API calls)
  if (youtubeCache[categoryKey].length > 0) {
    console.log(`⚡ Cache HIT for category "${categoryKey}": ${youtubeCache[categoryKey].length} cached songs.`);
    return youtubeCache[categoryKey];
  }

  // 2. Cache is EMPTY -> Select ONE query randomly from categoryQueries[categoryKey]
  const queries = categoryQueries[categoryKey] || categoryQueries.trending;
  if (!queries || queries.length === 0) return [];

  const selectedQuery = queries[Math.floor(Math.random() * queries.length)];
  console.log(`🔍 Cache MISS for category "${categoryKey}". Making 1 API search request with query: "${selectedQuery}"`);

  const fetchedIds = await performYouTubeSearch(selectedQuery);

  if (fetchedIds && fetchedIds.length > 0) {
    const existingSet = new Set(youtubeCache[categoryKey]);
    fetchedIds.forEach(id => existingSet.add(id));
    youtubeCache[categoryKey] = Array.from(existingSet);
    saveYoutubeCache();
    showSearchStatus(`Discovered ${fetchedIds.length} tracks for ${categoryKey.replace('_', ' ')}`, 'success');
  } else {
    // Try one fallback query if first query returned no results
    const fallbackQueries = queries.filter(q => q !== selectedQuery);
    if (fallbackQueries.length > 0 && !isQuotaExhausted) {
      const fallbackQuery = fallbackQueries[Math.floor(Math.random() * fallbackQueries.length)];
      console.log(`🔄 Retrying with fallback single query: "${fallbackQuery}"`);
      const fallbackIds = await performYouTubeSearch(fallbackQuery);
      if (fallbackIds && fallbackIds.length > 0) {
        const existingSet = new Set(youtubeCache[categoryKey]);
        fallbackIds.forEach(id => existingSet.add(id));
        youtubeCache[categoryKey] = Array.from(existingSet);
        saveYoutubeCache();
      }
    }
  }

  return youtubeCache[categoryKey];
}

/**
 * Randomly selects next song from category cache without API calls.
 */
function getNextRandomSongFromCache(categoryKey) {
  const cachedList = youtubeCache[categoryKey] || [];
  if (cachedList.length === 0) return null;

  let unplayedCandidates = cachedList.filter(id => !recentlyPlayedHistory.includes(id));

  // If all cached songs have been recently played, reshuffle cached list locally without API call
  if (unplayedCandidates.length === 0) {
    console.log(`🔁 All cached songs in "${categoryKey}" played. Reshuffling cached list locally (0 API requests)...`);
    recentlyPlayedHistory.splice(0, Math.floor(recentlyPlayedHistory.length / 2));
    unplayedCandidates = [...cachedList];
  }

  const selectedId = unplayedCandidates[Math.floor(Math.random() * unplayedCandidates.length)];

  recentlyPlayedHistory.push(selectedId);
  if (recentlyPlayedHistory.length > 15) {
    recentlyPlayedHistory.shift();
  }

  return selectedId;
}

// ========================================
// Player State
// ========================================

let player = null;
let isPlayerReady = false;
let isMuted = false;
let isLiked = false;
let isSeeking = false;
let progressTimer = null;

const PAUSE_ICON = 'M6 5h4v14H6zm8 0h4v14h-4z';
const PLAY_ICON = 'M8 5v14l11-7z';

// ========================================
// Playback Engine
// ========================================

async function playCategorySong(categoryKey = currentCategory) {
  currentCategory = categoryKey;

  // 1. Ensure cache exists (0 API calls if cache present)
  await ensureCategoryCache(categoryKey);

  // 2. Select next random song locally from cache
  const nextSongId = getNextRandomSongFromCache(categoryKey);
  if (!nextSongId) {
    console.warn(`No songs available in cache for category: ${categoryKey}`);
    const nowPlayingEl = document.getElementById('nowPlayingText');
    if (nowPlayingEl) {
      if (isQuotaExhausted) {
        nowPlayingEl.innerText = 'YouTube quota limit reached. Please try again later.';
      } else {
        nowPlayingEl.innerText = 'No songs found. Retrying...';
      }
    }
    return;
  }

  playVideoById(nextSongId);
}

function playVideoById(videoId) {
  if (!videoId) return;

  startLockScreenAudioSession();

  if (player && isPlayerReady && typeof player.loadVideoById === 'function') {
    player.unMute();
    player.setVolume(85);
    player.loadVideoById(videoId);
    player.playVideo();
    resetLike();
    loadRomanticBackground();

    const nowPlayingEl = document.getElementById('nowPlayingText');
    if (nowPlayingEl) nowPlayingEl.innerText = 'Loading track...';

    setTimeout(updateNowPlaying, 600);
  } else {
    console.warn('Player not ready yet');
  }
}

function playNext() {
  playCategorySong(currentCategory);
}

function playPrev() {
  if (recentlyPlayedHistory.length > 1) {
    recentlyPlayedHistory.pop();
    const prevId = recentlyPlayedHistory[recentlyPlayedHistory.length - 1];
    if (prevId) {
      playVideoById(prevId);
      return;
    }
  }
  playCategorySong(currentCategory);
}

function updateNowPlaying() {
  const nowPlayingEl = document.getElementById('nowPlayingText');
  if (!nowPlayingEl) return;

  let trackTitle = 'SurBeat Dynamic Hindi Hit';

  if (player && typeof player.getVideoData === 'function') {
    try {
      const data = player.getVideoData();
      if (data && data.title && data.title.trim() !== '') {
        trackTitle = data.title;
      }
    } catch (e) { }
  }

  nowPlayingEl.innerText = trackTitle;
  updateMediaSessionMetadata(trackTitle);
}

function resetLike() {
  isLiked = false;
  const likeBtn = document.getElementById('likeBtn');
  if (likeBtn) likeBtn.classList.remove('liked');
}

function setPlayPauseIcon(isPlaying) {
  const path = document.getElementById('playPausePath') || document.querySelector('#playPauseBtn path');
  const btn = document.getElementById('playPauseBtn');

  if (path) {
    path.setAttribute('d', isPlaying ? PAUSE_ICON : PLAY_ICON);
  }
  if (btn) {
    btn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
    btn.setAttribute('title', isPlaying ? 'Pause' : 'Play');
  }

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
    } catch (e) { }
  }
}

// ========================================
// Progress Tracking & Lock Screen Position Sync
// ========================================

function startProgressTracking() {
  if (progressTimer) clearInterval(progressTimer);
  progressTimer = setInterval(() => {
    if (!player || !isPlayerReady || isSeeking) return;
    try {
      if (typeof player.getDuration === 'function' && typeof player.getCurrentTime === 'function') {
        const duration = player.getDuration();
        const current = player.getCurrentTime();
        if (duration > 0 && isFinite(current)) {
          const seekSlider = document.getElementById('seekSlider');
          const currentLabel = document.getElementById('currentTimeLabel');
          const durationLabel = document.getElementById('durationLabel');

          if (seekSlider) {
            seekSlider.max = Math.floor(duration);
            seekSlider.value = Math.floor(current);
          }
          if (currentLabel) currentLabel.innerText = formatTime(current);
          if (durationLabel) durationLabel.innerText = formatTime(duration);

          if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
            try {
              navigator.mediaSession.setPositionState({
                duration: Math.max(0, duration),
                playbackRate: 1,
                position: Math.min(duration, Math.max(0, current))
              });
            } catch (e) { }
          }
        }
      }
    } catch (e) { }
  }, 500);
}

// ========================================
// YouTube Player Integration & Endless Continuous Auto-Play
// ========================================

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1',
    width: '1',
    playerVars: {
      autoplay: 0,
      mute: 1, // Start muted for autoplay permission compliance
      controls: 0,
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError
    }
  });
}

function onPlayerReady(event) {
  console.log('✅ SurBeat YouTube Player is ready');
  isPlayerReady = true;
  initLockScreenAudioKeepAlive();
}

function onPlayerStateChange(event) {
  const disc = document.getElementById('discCore');
  const tonearm = document.getElementById('tonearm');
  const eqBars = document.getElementById('eqBars');
  const ambientGlow = document.getElementById('ambientGlow');

  // ENDLESS CONTINUOUS AUTO-PLAY: Play next song automatically when current song ends
  // Uses cached track without making a new YouTube search request
  if (event.data === YT.PlayerState.ENDED) {
    console.log('🎵 Track ended — Playing next song from category cache...');
    playNext();
  }

  if (event.data === YT.PlayerState.PLAYING) {
    // Minimum Duration Guard: Skip ultra short clips under 1 min
    try {
      const duration = player.getDuration();
      if (duration > 0 && duration < 60) {
        console.warn(`⚠️ Track duration too short (${Math.round(duration)}s) - Skipping clip under 1 minute...`);
        const nowPlayingEl = document.getElementById('nowPlayingText');
        if (nowPlayingEl) nowPlayingEl.innerText = 'Skipping short clip (< 1 min)...';
        playNext();
        return;
      }
    } catch (e) { }

    startLockScreenAudioSession();
    updateNowPlaying();
    if (disc) disc.classList.add('playing');
    if (tonearm) tonearm.classList.add('playing');
    if (eqBars) eqBars.classList.add('playing');
    if (ambientGlow) ambientGlow.classList.add('playing');

    setPlayPauseIcon(true);
    const stopBtn = document.getElementById('stopBtn');
    const seekRow = document.getElementById('seekRow');
    if (stopBtn) stopBtn.classList.remove('active');
    if (seekRow) seekRow.style.display = 'flex';
    startProgressTracking();
  }

  if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.CUED) {
    if (disc) disc.classList.remove('playing');
    if (tonearm) tonearm.classList.remove('playing');
    if (eqBars) eqBars.classList.remove('playing');
    if (ambientGlow) ambientGlow.classList.remove('playing');

    setPlayPauseIcon(false);
  }
}

function onPlayerError(event) {
  console.warn('⚠️ YouTube Track Error Code:', event.data, '- Skipping unplayable video...');
  const nowPlayingEl = document.getElementById('nowPlayingText');
  if (nowPlayingEl) nowPlayingEl.innerText = 'Track unavailable, skipping to next track...';
  setTimeout(playNext, 600);
}

// ========================================
// Initialization & Event Listeners
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
  loadYoutubeCache();
  await checkBackendHealth();

  updateClock();
  setInterval(updateClock, 1000);

  updateOnlineListeners();
  setInterval(updateOnlineListeners, 8000);

  loadRomanticBackground();
  addFloatingNotes();
  initLockScreenAudioKeepAlive();

  if (typeof YT === 'undefined' || !YT.Player) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  const genreBtns = document.querySelectorAll('.genre-btn');
  genreBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      genreBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'trending';

      await playCategorySong(currentCategory);
    });
  });

  const playBtn = document.getElementById('playBtn');
  if (playBtn) {
    playBtn.addEventListener('click', async () => {
      playBtn.innerHTML = '<span class="btn-icon">⌛</span> Tuning SurBeat...';
      playBtn.disabled = true;

      try {
        startLockScreenAudioSession();
        await ensureCategoryCache(currentCategory);

        let waitCount = 0;
        while ((!player || !isPlayerReady) && waitCount < 25) {
          await new Promise(resolve => setTimeout(resolve, 200));
          waitCount++;
        }

        if (player && typeof player.unMute === 'function') {
          player.unMute();
          player.setVolume(85);
        }

        await playCategorySong(currentCategory);

        playBtn.style.display = 'none';
        const controlsRow = document.getElementById('controlsRow');
        const volumeRow = document.getElementById('volumeRow');
        if (controlsRow) controlsRow.style.display = 'flex';
        if (volumeRow) volumeRow.style.display = 'flex';
      } catch (e) {
        console.error('Play click error:', e);
        playBtn.innerHTML = '<span class="btn-icon">🪕</span> Play SurBeat Melodies';
        playBtn.disabled = false;
      }
    });
  }

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const likeBtn = document.getElementById('likeBtn');

  if (nextBtn) nextBtn.addEventListener('click', playNext);
  if (prevBtn) prevBtn.addEventListener('click', playPrev);

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (!player || typeof player.getPlayerState !== 'function') return;

      const state = player.getPlayerState();
      if (state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING) {
        stopLockScreenAudioSession();
        player.pauseVideo();
        setPlayPauseIcon(false);
      } else {
        startLockScreenAudioSession();
        if (typeof player.unMute === 'function') player.unMute();
        player.playVideo();
        setPlayPauseIcon(true);
      }
    });
  }

  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      stopLockScreenAudioSession();
      if (player && typeof player.stopVideo === 'function') {
        player.stopVideo();
      }
      const disc = document.getElementById('discCore');
      const tonearm = document.getElementById('tonearm');
      const eqBars = document.getElementById('eqBars');
      const ambientGlow = document.getElementById('ambientGlow');
      const nowPlayingEl = document.getElementById('nowPlayingText');

      if (disc) disc.classList.remove('playing');
      if (tonearm) tonearm.classList.remove('playing');
      if (eqBars) eqBars.classList.remove('playing');
      if (ambientGlow) ambientGlow.classList.remove('playing');

      if (nowPlayingEl) nowPlayingEl.innerText = 'SurBeat Stopped';
      stopBtn.classList.add('active');
      setPlayPauseIcon(false);

      if (progressTimer) clearInterval(progressTimer);
      const seekSlider = document.getElementById('seekSlider');
      const currentLabel = document.getElementById('currentTimeLabel');
      if (seekSlider) seekSlider.value = 0;
      if (currentLabel) currentLabel.innerText = '0:00';
    });
  }

  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      likeBtn.classList.toggle('liked', isLiked);
    });
  }

  const muteBtn = document.getElementById('muteBtn');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      if (!player || typeof player.isMuted !== 'function') return;
      if (player.isMuted()) {
        player.unMute();
        isMuted = false;
        document.getElementById('volumeSlider').value = 80;
      } else {
        player.mute();
        isMuted = true;
        document.getElementById('volumeSlider').value = 0;
      }
    });
  }

  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const vol = parseInt(e.target.value, 10);
      if (player && typeof player.setVolume === 'function') {
        player.setVolume(vol);
        if (vol === 0) {
          player.mute();
          isMuted = true;
        } else {
          player.unMute();
          isMuted = false;
        }
      }
    });
  }

  const seekSlider = document.getElementById('seekSlider');
  if (seekSlider) {
    seekSlider.addEventListener('mousedown', () => { isSeeking = true; });
    seekSlider.addEventListener('touchstart', () => { isSeeking = true; });
    seekSlider.addEventListener('input', (e) => {
      const currentLabel = document.getElementById('currentTimeLabel');
      if (currentLabel) currentLabel.innerText = formatTime(parseFloat(e.target.value));
    });

    const commitSeek = (e) => {
      if (player && typeof player.seekTo === 'function') {
        player.seekTo(parseFloat(e.target.value), true);
      }
      isSeeking = false;
    };

    seekSlider.addEventListener('mouseup', commitSeek);
    seekSlider.addEventListener('touchend', commitSeek);
    seekSlider.addEventListener('change', commitSeek);
  }
});
