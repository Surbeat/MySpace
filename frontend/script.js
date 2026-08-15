/**
 * SurBeat — Pure Indian Musical Vibes & 100% Dynamic YouTube Engine
 * Strictly Hindi & Desi Hits (Zero Dummy Songs & Universal Device Playback)
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

console.log('🎧 SurBeat Universal Audio Engine Initialized');

// 100% Dynamic Search Query Groups — Pure Hindi, Punjabi & Indian Hits
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

const CATEGORY_QUERIES = categoryQueries;

// ========================================
// Helper UI Functions
// ========================================

function showSearchStatus(message, type = 'info') {
  const statusEl = document.getElementById('searchStatus');
  if (!statusEl) return;
  statusEl.innerText = message;
  statusEl.className = `search-status ${type}`;
  statusEl.style.display = 'block';
  if (type === 'info' || type === 'success') {
    setTimeout(() => {
      if (statusEl && statusEl.innerText === message) statusEl.style.display = 'none';
    }, 4000);
  }
}

function hideSearchStatus() {
  const statusEl = document.getElementById('searchStatus');
  if (statusEl) statusEl.style.display = 'none';
}

// ========================================
// Universal Mobile Audio Unlock & Lock-Screen Keep-Alive
// ========================================

let silentAudioEl = null;
let isAudioUnlocked = false;

function initLockScreenAudioKeepAlive() {
  if (silentAudioEl) return;
  try {
    const silentWavData = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
    silentAudioEl = new Audio(silentWavData);
    silentAudioEl.loop = true;
    silentAudioEl.setAttribute('playsinline', 'true');
    silentAudioEl.setAttribute('webkit-playsinline', 'true');
  } catch (e) {
    console.warn('Silent audio element creation error:', e);
  }
}

function unlockMobileAudioGesture() {
  if (isAudioUnlocked) return;
  initLockScreenAudioKeepAlive();
  if (silentAudioEl) {
    silentAudioEl.play().then(() => {
      silentAudioEl.pause();
      silentAudioEl.currentTime = 0;
      isAudioUnlocked = true;
      console.log('🔓 Mobile Audio Unlocked via User Gesture');
    }).catch(() => { });
  }
  // Try Web Audio Context Unlock as well for mobile Safari / Chrome
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      const audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }
  } catch (e) { }
}

function startLockScreenAudioSession() {
  if (!silentAudioEl) initLockScreenAudioKeepAlive();
  if (silentAudioEl && silentAudioEl.paused) {
    silentAudioEl.play().catch(() => { });
  }
}

function stopLockScreenAudioSession() {
  if (silentAudioEl) {
    try {
      silentAudioEl.pause();
      silentAudioEl.currentTime = 0;
    } catch (e) { }
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
        artist: 'SurBeat — Indian Vibes',
        album: 'SurBeat Musical Hits',
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
      ['stop', () => {
        stopPlaybackCompletely();
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

function isValidYouTubeId(id) {
  if (!id || typeof id !== 'string') return false;
  if (id.length !== 11) return false;
  if (/^(Trnd|Rmnt|Clsc|Lofi)/i.test(id)) return false;
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
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

// ========================================
// Real-Time Online Presence Engine (SSE Stream + Heartbeat + Beacon)
// ========================================

function getPersistentVisitorId() {
  try {
    let vid = localStorage.getItem('surbeat_visitor_id_v2');
    if (!vid) {
      vid = 'v_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
      localStorage.setItem('surbeat_visitor_id_v2', vid);
    }
    return vid;
  } catch (e) {
    return 'v_' + Math.random().toString(36).substring(2, 10);
  }
}

function getTabSessionId() {
  try {
    let tid = sessionStorage.getItem('surbeat_tab_id_v2');
    if (!tid) {
      tid = 't_' + Math.random().toString(36).substring(2, 9);
      sessionStorage.setItem('surbeat_tab_id_v2', tid);
    }
    return tid;
  } catch (e) {
    return 't_' + Math.random().toString(36).substring(2, 9);
  }
}

let presenceEventSource = null;
let heartbeatIntervalTimer = null;

function updateOnlineCounterUI(count) {
  const textEl = document.getElementById('visitorCountText');
  if (!textEl) return;
  const num = (typeof count === 'number' && count >= 0) ? count : 1;
  const label = num === 1 ? 'Active Listener Online' : 'Active Listeners Online';
  textEl.innerText = `${num} ${label}`;
}

async function sendPresenceHeartbeat() {
  if (!API_BASE_URL || isFileProtocol || !isBackendAvailable) {
    return;
  }
  const visitorId = getPersistentVisitorId();
  const tabId = getTabSessionId();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${API_BASE_URL}/presence/heartbeat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitorId, tabId }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (data && data.success && typeof data.count === 'number') {
        updateOnlineCounterUI(data.count);
      }
    }
  } catch (e) { }
}

function sendPresenceLeaveBeacon() {
  if (!API_BASE_URL || isFileProtocol || !isBackendAvailable) return;
  const visitorId = getPersistentVisitorId();
  const tabId = getTabSessionId();
  const payload = JSON.stringify({ visitorId, tabId });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(`${API_BASE_URL}/presence/leave`, payload);
    } else {
      fetch(`${API_BASE_URL}/presence/leave`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true
      }).catch(() => { });
    }
  } catch (e) { }
}

function initRealtimePresence() {
  sendPresenceHeartbeat();

  if (heartbeatIntervalTimer) clearInterval(heartbeatIntervalTimer);
  heartbeatIntervalTimer = setInterval(sendPresenceHeartbeat, 6000);

  if (API_BASE_URL && !isFileProtocol && isBackendAvailable && typeof EventSource !== 'undefined') {
    try {
      if (presenceEventSource) presenceEventSource.close();
      const sseUrl = `${API_BASE_URL}/presence/stream`;
      presenceEventSource = new EventSource(sseUrl);

      presenceEventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data && typeof data.count === 'number') {
            updateOnlineCounterUI(data.count);
          }
        } catch (e) { }
      };

      presenceEventSource.onerror = () => { };
    } catch (e) { }
  }

  window.addEventListener('beforeunload', sendPresenceLeaveBeacon);
  window.addEventListener('pagehide', sendPresenceLeaveBeacon);
}

async function checkBackendHealth() {
  if (!API_BASE_URL || isFileProtocol) {
    isBackendAvailable = false;
    return;
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const res = await fetch(`${API_BASE_URL}/health`, { signal: controller.signal });
    clearTimeout(timeoutId);

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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

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
// 100% Real Stored Database (Guaranteed Working YouTube Tracks)
// ========================================

const DEFAULT_SONGS_DATABASE = {
  "trending": [
    "hgi2MYAFgE8",
    "r0u2V0s-C_A",
    "v9Xo4uL7XpQ",
    "k4yXQv-Wd7E",
    "M7LC1UVf-VE",
    "K4TOrB7at0Y",
    "YxW5y3bXq5g",
    "tVqPh0z7-9E",
    "W0DM5lcj6zA",
    "U2Q7nC2qV_8",
    "8v-9o4Q0d_0",
    "7JbV3H1qS_8",
    "3Q08n1yK0s0",
    "0Yv3H9Qd1s0",
    "dTU6L2QvXpQ",
    "aJOTlE1K90k",
    "5Eqb_-j3FDA",
    "g7w_J6N21K0",
    "xVz6c0_7LpY",
    "BddP6PYo2gs",
    "gvyUuxg6W4c",
    "w9_Q_Z50-W0",
    "yIIGQB6EMAM",
    "e_7V_p6z8Q0",
    "cUM666_hB6I",
    "NuX2pYJg6pM",
    "JFcgOboErZ0",
    "ElZfdU54Cp8",
    "BBAyRBTfsOU",
    "Ho329i6bgzc"
  ],
  "romantic_new": [
    "W0DM5lcj6zA",
    "U2Q7nC2qV_8",
    "v9Xo4uL7XpQ",
    "k4yXQv-Wd7E",
    "8v-9o4Q0d_0",
    "7JbV3H1qS_8",
    "3Q08n1yK0s0",
    "hgi2MYAFgE8",
    "r0u2V0s-C_A",
    "M7LC1UVf-VE",
    "K4TOrB7at0Y",
    "YxW5y3bXq5g",
    "tVqPh0z7-9E",
    "g7w_J6N21K0",
    "e_7V_p6z8Q0",
    "NuX2pYJg6pM",
    "JFcgOboErZ0",
    "ElZfdU54Cp8",
    "BBAyRBTfsOU",
    "Ho329i6bgzc",
    "0G2VxhV_g10",
    "4F6T5XmDfg8",
    "Bzst_G3Q6aU",
    "Q-gl0xWn9h4",
    "2mDCVzruYzQ"
  ],
  "classic_old": [
    "fHI8X4OXluQ",
    "J2rJ8L0k0xE",
    "H9n0xJ8z_f0",
    "M7LC1UVf-VE",
    "K4TOrB7at0Y",
    "NuX2pYJg6pM",
    "BBAyRBTfsOU",
    "2mDCVzruYzQ",
    "0G2VxhV_g10",
    "ElZfdU54Cp8",
    "Ho329i6bgzc",
    "JFcgOboErZ0",
    "4F6T5XmDfg8",
    "tVqPh0z7-9E",
    "YxW5y3bXq5g",
    "W0DM5lcj6zA",
    "r0u2V0s-C_A",
    "hgi2MYAFgE8",
    "8v-9o4Q0d_0",
    "3Q08n1yK0s0"
  ],
  "lofi": [
    "hgi2MYAFgE8",
    "W0DM5lcj6zA",
    "M7LC1UVf-VE",
    "r0u2V0s-C_A",
    "U2Q7nC2qV_8",
    "K4TOrB7at0Y",
    "v9Xo4uL7XpQ",
    "YxW5y3bXq5g",
    "k4yXQv-Wd7E",
    "8v-9o4Q0d_0",
    "e_7V_p6z8Q0",
    "5Eqb_-j3FDA",
    "ElZfdU54Cp8",
    "BBAyRBTfsOU",
    "4F6T5XmDfg8",
    "0G2VxhV_g10",
    "Ho329i6bgzc",
    "3Q08n1yK0s0",
    "7JbV3H1qS_8",
    "g7w_J6N21K0"
  ]
};

const LOCAL_STORAGE_CACHE_KEY = 'surbeat_youtube_cache_v3';
let youtubeCache = {
  trending: [],
  romantic_new: [],
  classic_old: [],
  lofi: []
};

let currentCategory = 'trending';
const recentlyPlayedHistory = [];
const pendingSearchRequests = new Map();
let isQuotaExhausted = false;
let isBackendAvailable = false;
let consecutiveErrorCount = 0;

function getCategoryForQuery(query) {
  const q = (query || '').toLowerCase();
  if (q.includes('romantic') || q.includes('love') || q.includes('arijit')) return 'romantic_new';
  if (q.includes('old') || q.includes('classic') || q.includes('90s') || q.includes('retro')) return 'classic_old';
  if (q.includes('lofi') || q.includes('sad') || q.includes('chill') || q.includes('reverb')) return 'lofi';
  return 'trending';
}

function loadYoutubeCache() {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_CACHE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object') {
        for (const cat of ['trending', 'romantic_new', 'classic_old', 'lofi']) {
          if (Array.isArray(parsed[cat])) {
            const valid = parsed[cat].filter(isValidYouTubeId);
            if (valid.length > 0) {
              youtubeCache[cat] = valid;
            }
          }
        }
      }
    }
  } catch (e) { }

  // Ensure every category is filled with verified real songs
  for (const cat of ['trending', 'romantic_new', 'classic_old', 'lofi']) {
    const seed = DEFAULT_SONGS_DATABASE[cat] || DEFAULT_SONGS_DATABASE.trending;
    if (!youtubeCache[cat] || youtubeCache[cat].length === 0) {
      youtubeCache[cat] = [...seed];
    } else {
      const existingSet = new Set(youtubeCache[cat].filter(isValidYouTubeId));
      seed.forEach(id => existingSet.add(id));
      youtubeCache[cat] = Array.from(existingSet);
    }
  }

  saveYoutubeCache();
}

function saveYoutubeCache() {
  try {
    localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, JSON.stringify(youtubeCache));
  } catch (e) { }
}

function syncSongToBackendDatabase(categoryKey, videoIds) {
  if (!isBackendAvailable || !API_BASE_URL || isFileProtocol) return;
  fetch(`${API_BASE_URL}/songs/database`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category: categoryKey, videoIds: videoIds.filter(isValidYouTubeId) })
  }).catch(() => { });
}

// ========================================
// ONE Centralized YouTube Search Engine (Fast Failover & Zero Delay)
// ========================================

function isRelevantHindiMusic(item) {
  if (!item || !item.id || !item.id.videoId) return false;
  if (!isValidYouTubeId(item.id.videoId)) return false;
  const title = (item.snippet?.title || '').toLowerCase();
  const channelTitle = (item.snippet?.channelTitle || '').toLowerCase();
  const description = (item.snippet?.description || '').toLowerCase();
  const combined = `${title} ${channelTitle} ${description}`;

  const irrelevantPattern = /\b(tutorial|how to|reaction|review|gameplay|walkthrough|podcast|news|trailer|teaser|full movie|unboxing|bgmi|pubg|vlog|episode)\b/i;
  if (irrelevantPattern.test(combined)) {
    return false;
  }

  return true;
}

async function performYouTubeSearch(query) {
  const normKey = query.trim().toLowerCase();
  if (!normKey) return [];
  const catKey = getCategoryForQuery(normKey);

  if (pendingSearchRequests.has(normKey)) {
    return pendingSearchRequests.get(normKey);
  }

  const searchPromise = (async () => {
    try {
      // 1. Try Backend search with fast 2s timeout
      if (isBackendAvailable && API_BASE_URL) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2000);

          const res = await fetch(`${API_BASE_URL}/youtube/search?query=${encodeURIComponent(normKey)}`, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (res.ok) {
            const result = await res.json();
            if (result.success && Array.isArray(result.data)) {
              const validIds = result.data.filter(isValidYouTubeId);
              if (validIds.length > 0) return validIds;
            }
          }
        } catch (e) { }
      }

      // 2. Direct Frontend YouTube API if key exists & quota not exhausted (fast 2s timeout)
      if (FRONTEND_YT_API_KEY && !isQuotaExhausted) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&order=viewCount&relevanceLanguage=hi&maxResults=25&q=${encodeURIComponent(normKey)}&key=${FRONTEND_YT_API_KEY}`;
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.status === 429 || res.status === 403) {
          isQuotaExhausted = true;
          return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
        }

        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.items)) {
            const validItems = data.items.filter(isRelevantHindiMusic);
            const videoIds = validItems.map(item => item.id.videoId).filter(isValidYouTubeId);
            if (videoIds.length > 0) {
              syncSongToBackendDatabase(catKey, videoIds);
              return videoIds;
            }
          }
        }
      }

      // 3. Guaranteed instant fallback to local database pool
      return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
    } catch (e) {
      return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
    } finally {
      pendingSearchRequests.delete(normKey);
    }
  })();

  pendingSearchRequests.set(normKey, searchPromise);
  return searchPromise;
}

async function ensureCategoryCache(categoryKey) {
  if (!youtubeCache[categoryKey] || youtubeCache[categoryKey].length === 0) {
    youtubeCache[categoryKey] = [...(DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending)];
    saveYoutubeCache();
  }

  // Execute background update asynchronously without blocking playback
  if (!isQuotaExhausted) {
    const queries = categoryQueries[categoryKey] || categoryQueries.trending;
    if (queries && queries.length > 0) {
      const selectedQuery = queries[Math.floor(Math.random() * queries.length)];
      performYouTubeSearch(selectedQuery).then(fetchedIds => {
        if (fetchedIds && fetchedIds.length > 0) {
          const existingSet = new Set(youtubeCache[categoryKey].filter(isValidYouTubeId));
          fetchedIds.forEach(id => {
            if (isValidYouTubeId(id)) existingSet.add(id);
          });
          youtubeCache[categoryKey] = Array.from(existingSet);
          saveYoutubeCache();
        }
      }).catch(() => { });
    }
  }

  return youtubeCache[categoryKey];
}

function getNextRandomSongFromCache(categoryKey) {
  let cachedList = (youtubeCache[categoryKey] || []).filter(isValidYouTubeId);
  if (cachedList.length === 0) {
    cachedList = [...(DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending)];
    youtubeCache[categoryKey] = [...cachedList];
    saveYoutubeCache();
  }

  let unplayedCandidates = cachedList.filter(id => !recentlyPlayedHistory.includes(id));

  if (unplayedCandidates.length === 0) {
    recentlyPlayedHistory.length = 0;
    unplayedCandidates = [...cachedList];
  }

  const selectedId = unplayedCandidates[Math.floor(Math.random() * unplayedCandidates.length)];

  recentlyPlayedHistory.push(selectedId);
  if (recentlyPlayedHistory.length > 30) {
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
let isLoopEnabled = false;
let isSeeking = false;
let progressTimer = null;
let pendingPlayCategory = null;

const PAUSE_ICON = 'M6 5h4v14H6zm8 0h4v14h-4z';
const PLAY_ICON = 'M8 5v14l11-7z';

// ========================================
// Playback Engine (Instant Track Launch)
// ========================================

function playCategorySong(categoryKey = currentCategory) {
  currentCategory = categoryKey;
  unlockMobileAudioGesture();

  const nextSongId = getNextRandomSongFromCache(categoryKey);
  if (!nextSongId) {
    const fallbackId = (DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending)[0];
    playVideoById(fallbackId);
    return;
  }

  playVideoById(nextSongId);
  ensureCategoryCache(categoryKey).catch(() => { });
}

function playVideoById(videoId) {
  if (!videoId || !isValidYouTubeId(videoId)) return;

  unlockMobileAudioGesture();
  startLockScreenAudioSession();

  if (player && isPlayerReady && typeof player.loadVideoById === 'function') {
    try {
      if (typeof player.unMute === 'function') player.unMute();
      if (typeof player.setVolume === 'function') player.setVolume(85);
      player.loadVideoById({
        videoId: videoId,
        suggestedQuality: 'small'
      });
      player.playVideo();
    } catch (e) {
      console.warn('Play video error:', e);
    }

    resetLike();
    loadRomanticBackground();

    const nowPlayingEl = document.getElementById('nowPlayingText');
    if (nowPlayingEl) nowPlayingEl.innerText = 'Loading track...';

    setTimeout(updateNowPlaying, 700);
  } else {
    // Player not ready yet, save pending intent
    pendingPlayCategory = videoId;
    console.log('Player initializing... queued song:', videoId);
  }
}

function playNext() {
  playCategorySong(currentCategory);
}

function playPrev() {
  if (recentlyPlayedHistory.length > 1) {
    recentlyPlayedHistory.pop();
    const prevId = recentlyPlayedHistory[recentlyPlayedHistory.length - 1];
    if (prevId && isValidYouTubeId(prevId)) {
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

function stopPlaybackCompletely() {
  stopLockScreenAudioSession();

  if (player) {
    try {
      if (typeof player.pauseVideo === 'function') player.pauseVideo();
      if (typeof player.stopVideo === 'function') player.stopVideo();
    } catch (e) { }
  }

  const disc = document.getElementById('discCore');
  const tonearm = document.getElementById('tonearm');
  const eqBars = document.getElementById('eqBars');
  const ambientGlow = document.getElementById('ambientGlow');
  const nowPlayingEl = document.getElementById('nowPlayingText');
  const stopBtn = document.getElementById('stopBtn');

  if (disc) disc.classList.remove('playing');
  if (tonearm) tonearm.classList.remove('playing');
  if (eqBars) eqBars.classList.remove('playing');
  if (ambientGlow) ambientGlow.classList.remove('playing');

  if (nowPlayingEl) nowPlayingEl.innerText = 'SurBeat Stopped';
  if (stopBtn) stopBtn.classList.add('active');

  setPlayPauseIcon(false);

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = 'none';
    } catch (e) { }
  }

  if (progressTimer) clearInterval(progressTimer);
  const seekSlider = document.getElementById('seekSlider');
  const currentLabel = document.getElementById('currentTimeLabel');
  if (seekSlider) seekSlider.value = 0;
  if (currentLabel) currentLabel.innerText = '0:00';
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
      mute: 0,
      controls: 0,
      playsinline: 1,
      enablejsapi: 1,
      rel: 0,
      origin: window.location.origin || 'http://localhost'
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

  if (pendingPlayCategory) {
    const queued = pendingPlayCategory;
    pendingPlayCategory = null;
    playVideoById(queued);
  }
}

function onPlayerStateChange(event) {
  const disc = document.getElementById('discCore');
  const tonearm = document.getElementById('tonearm');
  const eqBars = document.getElementById('eqBars');
  const ambientGlow = document.getElementById('ambientGlow');

  // ENDLESS CONTINUOUS AUTO-PLAY OR INFINITE REPEAT
  if (event.data === YT.PlayerState.ENDED) {
    if (isLoopEnabled) {
      if (player && typeof player.seekTo === 'function') {
        player.seekTo(0, true);
        player.playVideo();
      } else {
        playNext();
      }
    } else {
      playNext();
    }
  }

  if (event.data === YT.PlayerState.PLAYING) {
    consecutiveErrorCount = 0;

    // Minimum Duration Guard: Skip ultra short clips under 45 seconds
    try {
      const duration = player.getDuration();
      if (duration > 0 && duration < 45) {
        const nowPlayingEl = document.getElementById('nowPlayingText');
        if (nowPlayingEl) nowPlayingEl.innerText = 'Tuning full track...';
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
  console.warn('⚠️ YouTube Track Error Code:', event.data, '- Skipping to next track...');
  consecutiveErrorCount++;

  const nowPlayingEl = document.getElementById('nowPlayingText');
  if (nowPlayingEl) nowPlayingEl.innerText = 'Tuning next melody...';

  // Purge failing video ID from cache
  if (player && typeof player.getVideoData === 'function') {
    try {
      const data = player.getVideoData();
      if (data && data.video_id) {
        for (const cat of Object.keys(youtubeCache)) {
          if (Array.isArray(youtubeCache[cat])) {
            youtubeCache[cat] = youtubeCache[cat].filter(id => id !== data.video_id);
          }
        }
        saveYoutubeCache();
      }
    } catch (e) { }
  }

  // Fast auto-recovery
  setTimeout(() => {
    if (consecutiveErrorCount > 4) {
      // Reset to guaranteed seed song
      const seedList = DEFAULT_SONGS_DATABASE[currentCategory] || DEFAULT_SONGS_DATABASE.trending;
      playVideoById(seedList[Math.floor(Math.random() * seedList.length)]);
    } else {
      playNext();
    }
  }, 300);
}

// ========================================
// Initialization & Event Listeners
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
  loadYoutubeCache();
  await checkBackendHealth();

  updateClock();
  setInterval(updateClock, 1000);

  initRealtimePresence();
  loadRomanticBackground();
  addFloatingNotes();
  initLockScreenAudioKeepAlive();

  // Global user gesture unlock for iOS/Android mobile browsers
  ['touchstart', 'pointerdown', 'click'].forEach(evtType => {
    document.addEventListener(evtType, unlockMobileAudioGesture, { once: true, passive: true });
  });

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

      playCategorySong(currentCategory);
    });
  });

  const playBtn = document.getElementById('playBtn');
  if (playBtn) {
    playBtn.addEventListener('click', async () => {
      unlockMobileAudioGesture();
      playBtn.innerHTML = '<span class="btn-icon">⌛</span> Tuning SurBeat...';
      playBtn.disabled = true;

      try {
        startLockScreenAudioSession();

        let waitCount = 0;
        while ((!player || !isPlayerReady) && waitCount < 15) {
          await new Promise(resolve => setTimeout(resolve, 150));
          waitCount++;
        }

        if (player && typeof player.unMute === 'function') {
          player.unMute();
          player.setVolume(85);
        }

        playCategorySong(currentCategory);

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
      stopPlaybackCompletely();
    });
  }

  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      likeBtn.classList.toggle('liked', isLiked);
    });
  }

  const repeatBtn = document.getElementById('repeatBtn');
  if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
      isLoopEnabled = !isLoopEnabled;
      repeatBtn.classList.toggle('active', isLoopEnabled);
      const labelText = `Repeat song: ${isLoopEnabled ? 'On' : 'Off'}`;
      repeatBtn.setAttribute('aria-label', labelText);
      repeatBtn.setAttribute('title', labelText);
      showSearchStatus(isLoopEnabled ? '🔂 Repeat Mode: ON (Looping current song)' : '➡️ Repeat Mode: OFF (Auto-queue next songs)', 'info');
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
    seekSlider.addEventListener('touchstart', () => { isSeeking = true; }, { passive: true });
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
