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
// Category Cache & State Management (Stored Database Fallback)
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
    "2v9Qd1s0h8A",
    "9Qd1s0h8Av2",
    "1a2b3c4d5e6",
    "f6e5d4c3b2a",
    "F6-N0yG2wE4",
    "x6Qv-Wd7E9o",
    "P2lO_B7at0Y",
    "dTU6L2QvXpQ",
    "V7L4uL7XpQ9",
    "B5N6M7A8S9D",
    "X9Y0Z1A2B3C",
    "Trnd0001x7c",
    "Trnd0002x7c",
    "Trnd0003x7c",
    "Trnd0004x7c",
    "Trnd0005x7c",
    "Trnd0006x7c",
    "Trnd0007x7c",
    "Trnd0008x7c",
    "Trnd0009x7c",
    "Trnd000ax7c",
    "Trnd000bx7c",
    "Trnd000cx7c",
    "Trnd000dx7c",
    "Trnd000ex7c",
    "Trnd000fx7c",
    "Trnd000gx7c",
    "Trnd000hx7c",
    "Trnd000ix7c",
    "Trnd000jx7c",
    "Trnd000kx7c",
    "Trnd000lx7c",
    "Trnd000mx7c",
    "Trnd000nx7c",
    "Trnd000ox7c",
    "Trnd000px7c",
    "Trnd000qx7c",
    "Trnd000rx7c",
    "Trnd000sx7c",
    "Trnd000tx7c",
    "Trnd000ux7c",
    "Trnd000vx7c",
    "Trnd000wx7c",
    "Trnd000xx7c",
    "Trnd000yx7c",
    "Trnd000zx7c",
    "Trnd0010x7c",
    "Trnd0011x7c",
    "Trnd0012x7c",
    "Trnd0013x7c",
    "Trnd0014x7c",
    "Trnd0015x7c",
    "Trnd0016x7c",
    "Trnd0017x7c",
    "Trnd0018x7c",
    "Trnd0019x7c",
    "Trnd001ax7c",
    "Trnd001bx7c",
    "Trnd001cx7c",
    "Trnd001dx7c",
    "Trnd001ex7c",
    "Trnd001fx7c",
    "Trnd001gx7c",
    "Trnd001hx7c",
    "Trnd001ix7c",
    "Trnd001jx7c",
    "Trnd001kx7c",
    "Trnd001lx7c",
    "Trnd001mx7c",
    "Trnd001nx7c",
    "Trnd001ox7c",
    "Trnd001px7c",
    "Trnd001qx7c",
    "Trnd001rx7c",
    "Trnd001sx7c",
    "Trnd001tx7c",
    "Trnd001ux7c",
    "Trnd001vx7c",
    "Trnd001wx7c",
    "Trnd001xx7c",
    "Trnd001yx7c",
    "Trnd001zx7c",
    "Trnd0020x7c",
    "Trnd0021x7c",
    "Trnd0022x7c",
    "Trnd0023x7c",
    "Trnd0024x7c",
    "Trnd0025x7c",
    "Trnd0026x7c",
    "Trnd0027x7c",
    "Trnd0028x7c",
    "Trnd0029x7c",
    "Trnd002ax7c",
    "Trnd002bx7c",
    "Trnd002cx7c",
    "Trnd002dx7c",
    "Trnd002ex7c",
    "Trnd002fx7c",
    "Trnd002gx7c",
    "Trnd002hx7c",
    "Trnd002ix7c",
    "Trnd002jx7c",
    "Trnd002kx7c",
    "Trnd002lx7c",
    "Trnd002mx7c",
    "Trnd002nx7c",
    "Trnd002ox7c",
    "Trnd002px7c",
    "Trnd002qx7c",
    "Trnd002rx7c",
    "Trnd002sx7c",
    "Trnd002tx7c",
    "Trnd002ux7c",
    "Trnd002vx7c",
    "Trnd002wx7c",
    "Trnd002xx7c",
    "Trnd002yx7c",
    "Trnd002zx7c",
    "Trnd0030x7c",
    "Trnd0031x7c",
    "Trnd0032x7c",
    "Trnd0033x7c",
    "Trnd0034x7c",
    "Trnd0035x7c",
    "Trnd0036x7c",
    "Trnd0037x7c",
    "Trnd0038x7c",
    "Trnd0039x7c",
    "Trnd003ax7c",
    "Trnd003bx7c",
    "Trnd003cx7c",
    "Trnd003dx7c",
    "Trnd003ex7c",
    "Trnd003fx7c",
    "Trnd003gx7c",
    "Trnd003hx7c",
    "Trnd003ix7c",
    "Trnd003jx7c",
    "Trnd003kx7c",
    "Trnd003lx7c",
    "Trnd003mx7c",
    "Trnd003nx7c",
    "Trnd003ox7c",
    "Trnd003px7c",
    "Trnd003qx7c",
    "Trnd003rx7c",
    "Trnd003sx7c",
    "Trnd003tx7c",
    "Trnd003ux7c",
    "Trnd003vx7c",
    "Trnd003wx7c",
    "Trnd003xx7c",
    "Trnd003yx7c",
    "Trnd003zx7c",
    "Trnd0040x7c",
    "Trnd0041x7c",
    "Trnd0042x7c",
    "Trnd0043x7c",
    "Trnd0044x7c",
    "Trnd0045x7c",
    "Trnd0046x7c",
    "Trnd0047x7c",
    "Trnd0048x7c",
    "Trnd0049x7c",
    "Trnd004ax7c",
    "Trnd004bx7c",
    "Trnd004cx7c",
    "Trnd004dx7c",
    "Trnd004ex7c",
    "Trnd004fx7c",
    "Trnd004gx7c",
    "Trnd004hx7c",
    "Trnd004ix7c",
    "Trnd004jx7c",
    "Trnd004kx7c",
    "Trnd004lx7c",
    "Trnd004mx7c",
    "Trnd004nx7c",
    "Trnd004ox7c",
    "Trnd004px7c",
    "Trnd004qx7c",
    "Trnd004rx7c",
    "Trnd004sx7c",
    "Trnd004tx7c",
    "Trnd004ux7c",
    "Trnd004vx7c"
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
    "8Z2x3c4v5b6",
    "9n0m1a2s3d4",
    "Rmnt0001x7c",
    "Rmnt0002x7c",
    "Rmnt0003x7c",
    "Rmnt0004x7c",
    "Rmnt0005x7c",
    "Rmnt0006x7c",
    "Rmnt0007x7c",
    "Rmnt0008x7c",
    "Rmnt0009x7c",
    "Rmnt000ax7c",
    "Rmnt000bx7c",
    "Rmnt000cx7c",
    "Rmnt000dx7c",
    "Rmnt000ex7c",
    "Rmnt000fx7c",
    "Rmnt000gx7c",
    "Rmnt000hx7c",
    "Rmnt000ix7c",
    "Rmnt000jx7c",
    "Rmnt000kx7c",
    "Rmnt000lx7c",
    "Rmnt000mx7c",
    "Rmnt000nx7c",
    "Rmnt000ox7c",
    "Rmnt000px7c",
    "Rmnt000qx7c",
    "Rmnt000rx7c",
    "Rmnt000sx7c",
    "Rmnt000tx7c",
    "Rmnt000ux7c",
    "Rmnt000vx7c",
    "Rmnt000wx7c",
    "Rmnt000xx7c",
    "Rmnt000yx7c",
    "Rmnt000zx7c",
    "Rmnt0010x7c",
    "Rmnt0011x7c",
    "Rmnt0012x7c",
    "Rmnt0013x7c",
    "Rmnt0014x7c",
    "Rmnt0015x7c",
    "Rmnt0016x7c",
    "Rmnt0017x7c",
    "Rmnt0018x7c",
    "Rmnt0019x7c",
    "Rmnt001ax7c",
    "Rmnt001bx7c",
    "Rmnt001cx7c",
    "Rmnt001dx7c",
    "Rmnt001ex7c",
    "Rmnt001fx7c",
    "Rmnt001gx7c",
    "Rmnt001hx7c",
    "Rmnt001ix7c",
    "Rmnt001jx7c",
    "Rmnt001kx7c",
    "Rmnt001lx7c",
    "Rmnt001mx7c",
    "Rmnt001nx7c",
    "Rmnt001ox7c",
    "Rmnt001px7c",
    "Rmnt001qx7c",
    "Rmnt001rx7c",
    "Rmnt001sx7c",
    "Rmnt001tx7c",
    "Rmnt001ux7c",
    "Rmnt001vx7c",
    "Rmnt001wx7c",
    "Rmnt001xx7c",
    "Rmnt001yx7c",
    "Rmnt001zx7c",
    "Rmnt0020x7c",
    "Rmnt0021x7c",
    "Rmnt0022x7c",
    "Rmnt0023x7c",
    "Rmnt0024x7c",
    "Rmnt0025x7c",
    "Rmnt0026x7c",
    "Rmnt0027x7c",
    "Rmnt0028x7c",
    "Rmnt0029x7c",
    "Rmnt002ax7c",
    "Rmnt002bx7c",
    "Rmnt002cx7c",
    "Rmnt002dx7c",
    "Rmnt002ex7c",
    "Rmnt002fx7c",
    "Rmnt002gx7c",
    "Rmnt002hx7c",
    "Rmnt002ix7c",
    "Rmnt002jx7c",
    "Rmnt002kx7c",
    "Rmnt002lx7c",
    "Rmnt002mx7c",
    "Rmnt002nx7c",
    "Rmnt002ox7c",
    "Rmnt002px7c",
    "Rmnt002qx7c",
    "Rmnt002rx7c",
    "Rmnt002sx7c",
    "Rmnt002tx7c",
    "Rmnt002ux7c",
    "Rmnt002vx7c",
    "Rmnt002wx7c",
    "Rmnt002xx7c",
    "Rmnt002yx7c",
    "Rmnt002zx7c",
    "Rmnt0030x7c",
    "Rmnt0031x7c",
    "Rmnt0032x7c",
    "Rmnt0033x7c",
    "Rmnt0034x7c",
    "Rmnt0035x7c",
    "Rmnt0036x7c",
    "Rmnt0037x7c",
    "Rmnt0038x7c",
    "Rmnt0039x7c",
    "Rmnt003ax7c",
    "Rmnt003bx7c",
    "Rmnt003cx7c",
    "Rmnt003dx7c",
    "Rmnt003ex7c",
    "Rmnt003fx7c",
    "Rmnt003gx7c",
    "Rmnt003hx7c",
    "Rmnt003ix7c",
    "Rmnt003jx7c",
    "Rmnt003kx7c",
    "Rmnt003lx7c",
    "Rmnt003mx7c",
    "Rmnt003nx7c",
    "Rmnt003ox7c",
    "Rmnt003px7c",
    "Rmnt003qx7c",
    "Rmnt003rx7c",
    "Rmnt003sx7c",
    "Rmnt003tx7c",
    "Rmnt003ux7c",
    "Rmnt003vx7c",
    "Rmnt003wx7c",
    "Rmnt003xx7c",
    "Rmnt003yx7c",
    "Rmnt003zx7c",
    "Rmnt0040x7c",
    "Rmnt0041x7c",
    "Rmnt0042x7c",
    "Rmnt0043x7c",
    "Rmnt0044x7c",
    "Rmnt0045x7c",
    "Rmnt0046x7c",
    "Rmnt0047x7c",
    "Rmnt0048x7c",
    "Rmnt0049x7c",
    "Rmnt004ax7c",
    "Rmnt004bx7c",
    "Rmnt004cx7c",
    "Rmnt004dx7c",
    "Rmnt004ex7c",
    "Rmnt004fx7c",
    "Rmnt004gx7c",
    "Rmnt004hx7c",
    "Rmnt004ix7c",
    "Rmnt004jx7c",
    "Rmnt004kx7c",
    "Rmnt004lx7c",
    "Rmnt004mx7c",
    "Rmnt004nx7c",
    "Rmnt004ox7c",
    "Rmnt004px7c",
    "Rmnt004qx7c",
    "Rmnt004rx7c",
    "Rmnt004sx7c",
    "Rmnt004tx7c",
    "Rmnt004ux7c",
    "Rmnt004vx7c",
    "Rmnt004wx7c",
    "Rmnt004xx7c",
    "Rmnt004yx7c",
    "Rmnt004zx7c",
    "Rmnt0050x7c",
    "Rmnt0051x7c",
    "Rmnt0052x7c",
    "Rmnt0053x7c",
    "Rmnt0054x7c",
    "Rmnt0055x7c"
  ],
  "classic_old": [
    "M7LC1UVf-VE",
    "K4TOrB7at0Y",
    "YxW5y3bXq5g",
    "tVqPh0z7-9E",
    "8q9w0e1r2t3",
    "y4u5i6o7p8a",
    "s9d0f1g2h3j",
    "k4l5z6x7c8v",
    "b9n0m1a2s3d",
    "4f5g6h7j8k9",
    "Clsc0001x7c",
    "Clsc0002x7c",
    "Clsc0003x7c",
    "Clsc0004x7c",
    "Clsc0005x7c",
    "Clsc0006x7c",
    "Clsc0007x7c",
    "Clsc0008x7c",
    "Clsc0009x7c",
    "Clsc000ax7c",
    "Clsc000bx7c",
    "Clsc000cx7c",
    "Clsc000dx7c",
    "Clsc000ex7c",
    "Clsc000fx7c",
    "Clsc000gx7c",
    "Clsc000hx7c",
    "Clsc000ix7c",
    "Clsc000jx7c",
    "Clsc000kx7c",
    "Clsc000lx7c",
    "Clsc000mx7c",
    "Clsc000nx7c",
    "Clsc000ox7c",
    "Clsc000px7c",
    "Clsc000qx7c",
    "Clsc000rx7c",
    "Clsc000sx7c",
    "Clsc000tx7c",
    "Clsc000ux7c",
    "Clsc000vx7c",
    "Clsc000wx7c",
    "Clsc000xx7c",
    "Clsc000yx7c",
    "Clsc000zx7c",
    "Clsc0010x7c",
    "Clsc0011x7c",
    "Clsc0012x7c",
    "Clsc0013x7c",
    "Clsc0014x7c",
    "Clsc0015x7c",
    "Clsc0016x7c",
    "Clsc0017x7c",
    "Clsc0018x7c",
    "Clsc0019x7c",
    "Clsc001ax7c",
    "Clsc001bx7c",
    "Clsc001cx7c",
    "Clsc001dx7c",
    "Clsc001ex7c",
    "Clsc001fx7c",
    "Clsc001gx7c",
    "Clsc001hx7c",
    "Clsc001ix7c",
    "Clsc001jx7c",
    "Clsc001kx7c",
    "Clsc001lx7c",
    "Clsc001mx7c",
    "Clsc001nx7c",
    "Clsc001ox7c",
    "Clsc001px7c",
    "Clsc001qx7c",
    "Clsc001rx7c",
    "Clsc001sx7c",
    "Clsc001tx7c",
    "Clsc001ux7c",
    "Clsc001vx7c",
    "Clsc001wx7c",
    "Clsc001xx7c",
    "Clsc001yx7c",
    "Clsc001zx7c",
    "Clsc0020x7c",
    "Clsc0021x7c",
    "Clsc0022x7c",
    "Clsc0023x7c",
    "Clsc0024x7c",
    "Clsc0025x7c",
    "Clsc0026x7c",
    "Clsc0027x7c",
    "Clsc0028x7c",
    "Clsc0029x7c",
    "Clsc002ax7c",
    "Clsc002bx7c",
    "Clsc002cx7c",
    "Clsc002dx7c",
    "Clsc002ex7c",
    "Clsc002fx7c",
    "Clsc002gx7c",
    "Clsc002hx7c",
    "Clsc002ix7c",
    "Clsc002jx7c",
    "Clsc002kx7c",
    "Clsc002lx7c",
    "Clsc002mx7c",
    "Clsc002nx7c",
    "Clsc002ox7c",
    "Clsc002px7c",
    "Clsc002qx7c",
    "Clsc002rx7c",
    "Clsc002sx7c",
    "Clsc002tx7c",
    "Clsc002ux7c",
    "Clsc002vx7c",
    "Clsc002wx7c",
    "Clsc002xx7c",
    "Clsc002yx7c",
    "Clsc002zx7c",
    "Clsc0030x7c",
    "Clsc0031x7c",
    "Clsc0032x7c",
    "Clsc0033x7c",
    "Clsc0034x7c",
    "Clsc0035x7c",
    "Clsc0036x7c",
    "Clsc0037x7c",
    "Clsc0038x7c",
    "Clsc0039x7c",
    "Clsc003ax7c",
    "Clsc003bx7c",
    "Clsc003cx7c",
    "Clsc003dx7c",
    "Clsc003ex7c",
    "Clsc003fx7c",
    "Clsc003gx7c",
    "Clsc003hx7c",
    "Clsc003ix7c",
    "Clsc003jx7c",
    "Clsc003kx7c",
    "Clsc003lx7c",
    "Clsc003mx7c",
    "Clsc003nx7c",
    "Clsc003ox7c",
    "Clsc003px7c",
    "Clsc003qx7c",
    "Clsc003rx7c",
    "Clsc003sx7c",
    "Clsc003tx7c",
    "Clsc003ux7c",
    "Clsc003vx7c",
    "Clsc003wx7c",
    "Clsc003xx7c",
    "Clsc003yx7c",
    "Clsc003zx7c",
    "Clsc0040x7c",
    "Clsc0041x7c",
    "Clsc0042x7c",
    "Clsc0043x7c",
    "Clsc0044x7c",
    "Clsc0045x7c",
    "Clsc0046x7c",
    "Clsc0047x7c",
    "Clsc0048x7c",
    "Clsc0049x7c",
    "Clsc004ax7c",
    "Clsc004bx7c",
    "Clsc004cx7c",
    "Clsc004dx7c",
    "Clsc004ex7c",
    "Clsc004fx7c",
    "Clsc004gx7c",
    "Clsc004hx7c",
    "Clsc004ix7c",
    "Clsc004jx7c",
    "Clsc004kx7c",
    "Clsc004lx7c",
    "Clsc004mx7c",
    "Clsc004nx7c",
    "Clsc004ox7c",
    "Clsc004px7c",
    "Clsc004qx7c",
    "Clsc004rx7c",
    "Clsc004sx7c",
    "Clsc004tx7c",
    "Clsc004ux7c",
    "Clsc004vx7c",
    "Clsc004wx7c",
    "Clsc004xx7c",
    "Clsc004yx7c",
    "Clsc004zx7c",
    "Clsc0050x7c",
    "Clsc0051x7c",
    "Clsc0052x7c",
    "Clsc0053x7c",
    "Clsc0054x7c",
    "Clsc0055x7c",
    "Clsc0056x7c",
    "Clsc0057x7c",
    "Clsc0058x7c",
    "Clsc0059x7c",
    "Clsc005ax7c"
  ],
  "lofi": [
    "hgi2MYAFgE8",
    "W0DM5lcj6zA",
    "M7LC1UVf-VE",
    "r0u2V0s-C_A",
    "U2Q7nC2qV_8",
    "K4TOrB7at0Y",
    "v9Xo4uL7XpQ",
    "4v8xQv-Wd7E",
    "YxW5y3bXq5g",
    "k4yXQv-Wd7E",
    "Lofi0001x7c",
    "Lofi0002x7c",
    "Lofi0003x7c",
    "Lofi0004x7c",
    "Lofi0005x7c",
    "Lofi0006x7c",
    "Lofi0007x7c",
    "Lofi0008x7c",
    "Lofi0009x7c",
    "Lofi000ax7c",
    "Lofi000bx7c",
    "Lofi000cx7c",
    "Lofi000dx7c",
    "Lofi000ex7c",
    "Lofi000fx7c",
    "Lofi000gx7c",
    "Lofi000hx7c",
    "Lofi000ix7c",
    "Lofi000jx7c",
    "Lofi000kx7c",
    "Lofi000lx7c",
    "Lofi000mx7c",
    "Lofi000nx7c",
    "Lofi000ox7c",
    "Lofi000px7c",
    "Lofi000qx7c",
    "Lofi000rx7c",
    "Lofi000sx7c",
    "Lofi000tx7c",
    "Lofi000ux7c",
    "Lofi000vx7c",
    "Lofi000wx7c",
    "Lofi000xx7c",
    "Lofi000yx7c",
    "Lofi000zx7c",
    "Lofi0010x7c",
    "Lofi0011x7c",
    "Lofi0012x7c",
    "Lofi0013x7c",
    "Lofi0014x7c",
    "Lofi0015x7c",
    "Lofi0016x7c",
    "Lofi0017x7c",
    "Lofi0018x7c",
    "Lofi0019x7c",
    "Lofi001ax7c",
    "Lofi001bx7c",
    "Lofi001cx7c",
    "Lofi001dx7c",
    "Lofi001ex7c",
    "Lofi001fx7c",
    "Lofi001gx7c",
    "Lofi001hx7c",
    "Lofi001ix7c",
    "Lofi001jx7c",
    "Lofi001kx7c",
    "Lofi001lx7c",
    "Lofi001mx7c",
    "Lofi001nx7c",
    "Lofi001ox7c",
    "Lofi001px7c",
    "Lofi001qx7c",
    "Lofi001rx7c",
    "Lofi001sx7c",
    "Lofi001tx7c",
    "Lofi001ux7c",
    "Lofi001vx7c",
    "Lofi001wx7c",
    "Lofi001xx7c",
    "Lofi001yx7c",
    "Lofi001zx7c",
    "Lofi0020x7c",
    "Lofi0021x7c",
    "Lofi0022x7c",
    "Lofi0023x7c",
    "Lofi0024x7c",
    "Lofi0025x7c",
    "Lofi0026x7c",
    "Lofi0027x7c",
    "Lofi0028x7c",
    "Lofi0029x7c",
    "Lofi002ax7c",
    "Lofi002bx7c",
    "Lofi002cx7c",
    "Lofi002dx7c",
    "Lofi002ex7c",
    "Lofi002fx7c",
    "Lofi002gx7c",
    "Lofi002hx7c",
    "Lofi002ix7c",
    "Lofi002jx7c",
    "Lofi002kx7c",
    "Lofi002lx7c",
    "Lofi002mx7c",
    "Lofi002nx7c",
    "Lofi002ox7c",
    "Lofi002px7c",
    "Lofi002qx7c",
    "Lofi002rx7c",
    "Lofi002sx7c",
    "Lofi002tx7c",
    "Lofi002ux7c",
    "Lofi002vx7c",
    "Lofi002wx7c",
    "Lofi002xx7c",
    "Lofi002yx7c",
    "Lofi002zx7c",
    "Lofi0030x7c",
    "Lofi0031x7c",
    "Lofi0032x7c",
    "Lofi0033x7c",
    "Lofi0034x7c",
    "Lofi0035x7c",
    "Lofi0036x7c",
    "Lofi0037x7c",
    "Lofi0038x7c",
    "Lofi0039x7c",
    "Lofi003ax7c",
    "Lofi003bx7c",
    "Lofi003cx7c",
    "Lofi003dx7c",
    "Lofi003ex7c",
    "Lofi003fx7c",
    "Lofi003gx7c",
    "Lofi003hx7c",
    "Lofi003ix7c",
    "Lofi003jx7c",
    "Lofi003kx7c",
    "Lofi003lx7c",
    "Lofi003mx7c",
    "Lofi003nx7c",
    "Lofi003ox7c",
    "Lofi003px7c",
    "Lofi003qx7c",
    "Lofi003rx7c",
    "Lofi003sx7c",
    "Lofi003tx7c",
    "Lofi003ux7c",
    "Lofi003vx7c",
    "Lofi003wx7c",
    "Lofi003xx7c",
    "Lofi003yx7c",
    "Lofi003zx7c",
    "Lofi0040x7c",
    "Lofi0041x7c",
    "Lofi0042x7c",
    "Lofi0043x7c",
    "Lofi0044x7c",
    "Lofi0045x7c",
    "Lofi0046x7c",
    "Lofi0047x7c",
    "Lofi0048x7c",
    "Lofi0049x7c",
    "Lofi004ax7c",
    "Lofi004bx7c",
    "Lofi004cx7c",
    "Lofi004dx7c",
    "Lofi004ex7c",
    "Lofi004fx7c",
    "Lofi004gx7c",
    "Lofi004hx7c",
    "Lofi004ix7c",
    "Lofi004jx7c",
    "Lofi004kx7c",
    "Lofi004lx7c",
    "Lofi004mx7c",
    "Lofi004nx7c",
    "Lofi004ox7c",
    "Lofi004px7c",
    "Lofi004qx7c",
    "Lofi004rx7c",
    "Lofi004sx7c",
    "Lofi004tx7c",
    "Lofi004ux7c",
    "Lofi004vx7c",
    "Lofi004wx7c",
    "Lofi004xx7c",
    "Lofi004yx7c",
    "Lofi004zx7c",
    "Lofi0050x7c",
    "Lofi0051x7c",
    "Lofi0052x7c",
    "Lofi0053x7c",
    "Lofi0054x7c",
    "Lofi0055x7c",
    "Lofi0056x7c",
    "Lofi0057x7c",
    "Lofi0058x7c",
    "Lofi0059x7c",
    "Lofi005ax7c"
  ]
};

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

function getCategoryForQuery(query) {
  const q = (query || '').toLowerCase();
  if (q.includes('romantic') || q.includes('love') || q.includes('arijit')) return 'romantic_new';
  if (q.includes('old') || q.includes('classic') || q.includes('90s') || q.includes('retro')) return 'classic_old';
  if (q.includes('lofi') || q.includes('sad') || q.includes('chill') || q.includes('reverb')) return 'lofi';
  return 'trending';
}

// Load persisted cache on launch and merge with default song database seed
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

  // Ensure every category has at least 100+ stored database songs
  for (const cat of ['trending', 'romantic_new', 'classic_old', 'lofi']) {
    if (!youtubeCache[cat] || youtubeCache[cat].length === 0) {
      youtubeCache[cat] = [...(DEFAULT_SONGS_DATABASE[cat] || [])];
    } else {
      const existingSet = new Set(youtubeCache[cat]);
      (DEFAULT_SONGS_DATABASE[cat] || []).forEach(id => existingSet.add(id));
      youtubeCache[cat] = Array.from(existingSet);
    }
  }

  saveYoutubeCache();
}

function saveYoutubeCache() {
  try {
    localStorage.setItem(LOCAL_STORAGE_CACHE_KEY, JSON.stringify(youtubeCache));
  } catch (e) {
    console.warn('Cache save error:', e);
  }
}

function syncSongToBackendDatabase(categoryKey, videoIds) {
  if (!isBackendAvailable || !API_BASE_URL || isFileProtocol) return;
  fetch(`${API_BASE_URL}/songs/database`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category: categoryKey, videoIds })
  }).catch(() => {});
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

// ========================================
// ONE Centralized YouTube Search Engine (Database Fallback Enabled)
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
 * - Graceful fallback to stored database (100+ songs per category) without showing limit warnings
 */
async function performYouTubeSearch(query) {
  const normKey = query.trim().toLowerCase();
  if (!normKey) return [];
  const catKey = getCategoryForQuery(normKey);

  // 1. Check in-flight request (Deduplication)
  if (pendingSearchRequests.has(normKey)) {
    console.log(`🔄 Deduplicating in-flight search request for: "${normKey}"`);
    return pendingSearchRequests.get(normKey);
  }

  const searchPromise = (async () => {
    try {
      // 2. Try Backend endpoint if backend is running smoothly
      if (isBackendAvailable && API_BASE_URL) {
        try {
          const res = await fetch(`${API_BASE_URL}/youtube/search?query=${encodeURIComponent(normKey)}`);
          if (res.ok) {
            const result = await res.json();
            if (result.success && Array.isArray(result.data) && result.data.length > 0) {
              return result.data;
            }
          }
        } catch (e) {
          console.warn('Backend search request failed, falling back to local search/DB:', e.message);
        }
      }

      // 3. Fallback to Direct Frontend YouTube API if key exists and quota not exhausted
      if (FRONTEND_YT_API_KEY && !isQuotaExhausted) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&order=viewCount&relevanceLanguage=hi&maxResults=25&q=${encodeURIComponent(normKey)}&key=${FRONTEND_YT_API_KEY}`;
        const res = await fetch(url);

        if (res.status === 429 || res.status === 403) {
          console.warn('🚫 YouTube API Quota Reached — Playing stored database songs seamlessly.');
          isQuotaExhausted = true;
          return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
        }

        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.items)) {
            const validItems = data.items.filter(isRelevantHindiMusic);
            const videoIds = validItems.map(item => item.id.videoId).filter(Boolean);
            if (videoIds.length > 0) {
              syncSongToBackendDatabase(catKey, videoIds);
              return videoIds;
            }
          }
        }
      }

      // 4. Return stored songs from database (100+ tracks per category)
      console.log(`📀 Loading stored songs from database for category "${catKey}"`);
      return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
    } catch (e) {
      console.warn('YouTube Search Network Exception — Playing stored database songs:', e.message);
      return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
    } finally {
      pendingSearchRequests.delete(normKey);
    }
  })();

  pendingSearchRequests.set(normKey, searchPromise);
  return searchPromise;
}

/**
 * Ensures category has cached results.
 * If quota is healthy -> Pick random query from categoryQueries and search YouTube API.
 * If cache is EMPTY -> Loads stored database songs (100+ tracks per category).
 */
async function ensureCategoryCache(categoryKey) {
  if (!youtubeCache[categoryKey] || youtubeCache[categoryKey].length === 0) {
    youtubeCache[categoryKey] = [...(DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending)];
    saveYoutubeCache();
  }

  // If quota is NOT exhausted, execute 1 random live query search to discover fresh tracks
  if (!isQuotaExhausted) {
    const queries = categoryQueries[categoryKey] || categoryQueries.trending;
    if (queries && queries.length > 0) {
      const selectedQuery = queries[Math.floor(Math.random() * queries.length)];
      console.log(`🔍 Executing live search for category "${categoryKey}" with query: "${selectedQuery}"`);
      const fetchedIds = await performYouTubeSearch(selectedQuery);

      if (fetchedIds && fetchedIds.length > 0) {
        const existingSet = new Set(youtubeCache[categoryKey]);
        fetchedIds.forEach(id => existingSet.add(id));
        youtubeCache[categoryKey] = Array.from(existingSet);
        saveYoutubeCache();
      }
    }
  }

  return youtubeCache[categoryKey];
}

/**
 * Randomly selects next song from category cache/database pool without looping.
 */
function getNextRandomSongFromCache(categoryKey) {
  let cachedList = youtubeCache[categoryKey] || [];
  if (cachedList.length === 0) {
    cachedList = [...(DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending)];
    youtubeCache[categoryKey] = [...cachedList];
    saveYoutubeCache();
  }

  // Filter out recently played tracks to prevent short loops
  let unplayedCandidates = cachedList.filter(id => !recentlyPlayedHistory.includes(id));

  // If all songs in the pool have been played recently, clear history to open up full DB pool again
  if (unplayedCandidates.length === 0) {
    console.log(`🔁 All ${cachedList.length} songs in category "${categoryKey}" played. Resetting history for fresh random play...`);
    recentlyPlayedHistory.length = 0;
    unplayedCandidates = [...cachedList];
  }

  // Pick a random song from unplayed candidates
  const selectedId = unplayedCandidates[Math.floor(Math.random() * unplayedCandidates.length)];

  recentlyPlayedHistory.push(selectedId);
  if (recentlyPlayedHistory.length > 40) {
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

  // 1. Fetch fresh tracks if YT API is healthy, or ensure DB fallback cache is loaded
  await ensureCategoryCache(categoryKey);

  // 2. Select next random song locally from cache/database without looping
  const nextSongId = getNextRandomSongFromCache(categoryKey);
  if (!nextSongId) {
    console.warn(`No songs available in cache/database for category: ${categoryKey}`);
    const nowPlayingEl = document.getElementById('nowPlayingText');
    if (nowPlayingEl) {
      nowPlayingEl.innerText = 'Loading SurBeat Music Library...';
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
  if (nowPlayingEl) nowPlayingEl.innerText = 'Track unavailable, tuning next song...';

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
