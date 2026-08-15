/**
 * SurBeat — Pure Indian Musical Vibes & 100% Dynamic YouTube Engine
 * Strictly Hindi & Desi Hits (Live Online Dynamic Search + 200 Songs/Category Fallback Database)
 * Universal Mobile/Browser Compatibility | Instant Zero-Delay Playback
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

// 100% Dynamic Search Query Groups — Live Online YouTube Search (Pure Hindi & Indian Hits)
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
  // Try Web Audio Context Unlock for mobile Safari / Chrome
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
// 800-Song Fallback Database (200 Real Songs per Category for Quota Finish)
// ========================================

const DEFAULT_SONGS_DATABASE = {
  "trending": [
    "LK7-_dgAVQE",
    "cWMxCE2HTag",
    "XTp5jaRU3Ws",
    "BtQp2U6hJII",
    "o9PY6NsB3_E",
    "-YlmnPh-6rE",
    "x-KbnJ9fvJc",
    "vsWxs1tuwDk",
    "5GCfYLguTIs",
    "uChhQpHMmXE",
    "CeFQO9MQNqs",
    "aFWDOFg7X2A",
    "k85UB5b6pJU",
    "2sAzb3kraoQ",
    "cHwQowOzAf0",
    "Guq9Vl8dK30",
    "fRJ03btNsao",
    "RuDsBrSczis",
    "BXNxrT59MzQ",
    "U4qD41gPQMU",
    "roz9sXFkTuE",
    "hxMNYkLN7tI",
    "nFgsBxw-zWQ",
    "YyepU5ztLf4",
    "xWi8nDUjHGA",
    "1xYZeDReUz4",
    "ri1Ar5nEq4s",
    "PkgStlsVaqw",
    "1-nnEM8chwo",
    "Zrt77f7nTqY",
    "XtZTpxnrHAc",
    "cxKAtmvf-uM",
    "v5jVX0QYwQo",
    "2G2_pc4IfUs",
    "tA3Cv-rYcy4",
    "KVnheXywIbY",
    "NZ1EBaqDL0M",
    "eehSZgV-ovc",
    "VlvOgk5BHS4",
    "0nrvPVnTWlc",
    "EZh7my_RASk",
    "FewWUHxY79w",
    "ZbX_nlzv7uU",
    "MnNQW_L7ovY",
    "YDAWpY747TY",
    "T_lDkgKdTD8",
    "qH-fnpT7qgU",
    "AhO7mWclXOc",
    "FgHz5qNwtqg",
    "fnyd1hGyJIY",
    "fAU6b5U26sM",
    "Z23mOrp8i24",
    "iAv5WMNRX90",
    "H9ogpITFBYM",
    "4VqbPwVYq1s",
    "NV7XJe4nqJ8",
    "JcpiVAbAnYg",
    "Bpj3JYLCCuA",
    "QnQRMHkXzZ4",
    "j3nADe5euQw",
    "Etkd-07gnxM",
    "Zlqf9cuaOBw",
    "7CdpHATpXXU",
    "qnQCd_nZn_g",
    "PesrFCmjdNI",
    "bjfKyIAlsZs",
    "BwiaxAos5cg",
    "-yX2trMgn5s",
    "pCYojfACnzQ",
    "sv26LXD4GbI",
    "1tsCjcq0G-U",
    "sVPKUMyOmg0",
    "E-Qzp9_uzlA",
    "Ref5bT8Tuk8",
    "yWo9_7I58Bc",
    "Xb82Eexgyeo",
    "q8Mhq2GVM9M",
    "2o1Bv1DyUN0",
    "AUvYe_ZgLOY",
    "yktlUKTWlJg",
    "QXJyMpxd210",
    "3qpxJEp4Ec4",
    "taRBVfDRukY",
    "hacByYwJ_a4",
    "GkJ_wZy0iB4",
    "IYK34I7y5O8",
    "aa7_itx64eI",
    "AdYOIQTyAAw",
    "TjXH_P7Khhg",
    "mHdneo9_yLM",
    "vee_P6pIv_E",
    "ETMul5GVk_Y",
    "Pz_FkqA2x6s",
    "FBTgulBOUy0",
    "vW7sbaVWYqE",
    "OweU4sBBqGI",
    "9uIIdCBRNRc",
    "0avk5g_9Cgk",
    "44Aq9OZtM_M",
    "cpfns3c5AQc",
    "BddP6PYo2gs",
    "RLzC55ai0eo",
    "mNuhKUOD_A0",
    "6mr4cYJ7yew",
    "NJAv_7lHUIU",
    "xfMN4SpIxIA",
    "zCGck2spPsU",
    "K3B8-klo5xc",
    "g6fnFALEseI",
    "W1S9AbHpWFY",
    "1qeujW9f4So",
    "k6GjS_Hzg8I",
    "PLIsDVqACZ0",
    "P7yRYiBiV3g",
    "9_gAAHlp9CU",
    "aDOs442shYU",
    "WCDXUgvddR4",
    "532toSHe57E",
    "jZba76mHdg4",
    "HLDFbuGhFVU",
    "4VwtfInG-LU",
    "ObiCEWmYH5Y",
    "Q11jKrhG7m4",
    "WJumea3vEpw",
    "IhLJRgr-r0o",
    "SW2uyfNqHg4",
    "jC1oFRhElEw",
    "gslkqoBV5SA",
    "Gqnnrop26Sw",
    "9uHS97epnYc",
    "BbGNpf5vDTE",
    "Miz5wvLmXPI",
    "AdKdqAqsnsY",
    "UITBjk6FttM",
    "npKOkLWrZeE",
    "gX3Gw-3wxfs",
    "K0I124SPxmI",
    "P6G4QoKwnzI",
    "t5PEt4aXI58",
    "YxWlaYCA8MU",
    "VAdGW7QDJiU",
    "V_jp5_VAzXk",
    "8eYG5QGZAZs",
    "9M_ZKSmxb_s",
    "wr9M-CoxP7A",
    "RpC85RO0okA",
    "Bi7sSC046dk",
    "LdHe2NCj3JE",
    "wwYiyxR7c3c",
    "obMNB-n6PE4",
    "FNoNmaWGoRg",
    "F_jU1KI82kw",
    "oiSIKKlvqVE",
    "s4yy40jRTu4",
    "g98mwbjcmwU",
    "yAe3qndvs7k",
    "Ah6dEARljtE",
    "EZ470Lj1MAQ",
    "WqfCQ93c9TY",
    "huxhqphtDrM",
    "7TRFf7uUfhQ",
    "AU9AdGIdWZs",
    "uUGew2W87cU",
    "EoKOuVGYMSw",
    "bODY50rqPZg",
    "7n562hVNKDc",
    "VtThmt2paH8",
    "C1524HGvznI",
    "mvdsiQ5fl24",
    "MXCHqAEgnN4",
    "y4QVHzYHiU0",
    "QtTM9X26bTk",
    "uSSFACVucbs",
    "OIjbVS9CFL4",
    "dzKSxDEAMDY",
    "UeH6_2qNaq8",
    "NBgA2OxWt9k",
    "pacvj3n-RLw",
    "udgrClXV26Y",
    "Uo_OSlQZlgY",
    "Bu_89PkVqew",
    "Hu-Bdubnnj0",
    "U5yCBCWGbBw",
    "8eDZpQpxnTU",
    "P0dk_SF7Eao",
    "MkkG-7HL7Bg",
    "cI9iguIX87Y",
    "p7f685ljJL8",
    "o8-Gc4h4yVY",
    "poMt_tQAjEg",
    "pqoLQWf7Ync",
    "0Vpv8JEX_Ao",
    "ElZfdU54Cp8",
    "YALvuUpY_b0",
    "u2NAuswnTKs",
    "3lDJZr6kbsg",
    "LSP9SjZ3rrs",
    "6X0pNXXeVIA",
    "Wr0BLOr2WlU",
    "3fPQtxRwn6U"
  ],
  "romantic_new": [
    "tLqtnGLfm4Q",
    "_iktURk0X-A",
    "Ov0YGGSY6gY",
    "inEu2qQuGZ8",
    "VdyBtGaspss",
    "Umqb9KENgmk",
    "MJyKN-8UncM",
    "IJq0yyWug1k",
    "izy2tV-Ssj8",
    "GtPvCa3vvxA",
    "V1oczq_8L0E",
    "z3UHfi9vpbc",
    "pIBoAh4OXhQ",
    "cUmUOb7j3dc",
    "krJsyb_yf7A",
    "2bMEe0UYa8E",
    "eHRrZ5DQCV4",
    "fsiPzT50ZiM",
    "NUo8CKI34o4",
    "YLoYt8H7kjM",
    "gvyUuxdRdR4",
    "orYf6VDtj_k",
    "Dm6YRJHy64c",
    "GLGuLXKT9Ng",
    "skq8M5khNbw",
    "qauUzF4GMZ0",
    "dYwwHf9vWfo",
    "2FRrtuu3Ljg",
    "pz2Yz0_1lr8",
    "oDkZEay6H6k",
    "S2BOXJG71FY",
    "8K9eaAKLrE0",
    "jh6Anzu3ntQ",
    "4O0_erwpB9E",
    "naQXI7l6op0",
    "Kp76nzS7pwA",
    "-kVdEfkWsjo",
    "s095hRZYb2U",
    "bXWcVn4uNd0",
    "7fhY7FFZ6nU",
    "hoNb6HuNmU0",
    "ElZfdU54Cp8",
    "RLzC55ai0eo",
    "Grr0FlC8SQA",
    "w8LcxY43N5Y",
    "vdbP_3o73qI",
    "HYUpNJJELeE",
    "yRB0xbKDebo",
    "CsOsmgUmT9U",
    "UEZm0U6KrfY",
    "EQxEms7gnqs",
    "tdbD2naYwdo",
    "SsOY0gZFfGs",
    "kPtn26x8TZM",
    "iZH_ydGn9i0",
    "tGs7iLem1cE",
    "9-LH8ABADdo",
    "QRwLbf3PwO8",
    "mF2BHtQh4EI",
    "SAcpESN_Fk4",
    "JtnPpxe8K7c",
    "mevO4I0f5lg",
    "nqUbSvFS1e4",
    "5DiLiDaIemI",
    "u5DCgnh8S9M",
    "ca-hzALjrcY",
    "A2JaHCaVjrU",
    "EsPrpf_vpi8",
    "PsyNOOS5Xp4",
    "POvFEQaK634",
    "Pr86yMP_oZE",
    "D8jKEaAyNcs",
    "k_Qe4846hSI",
    "EixnLHZ6QjA",
    "XKmEVtVEMF0",
    "8sxzVtqoAnA",
    "MA9hbox27Zc",
    "h6O4esqraE0",
    "VDzjgO7-pVI",
    "KUpwupYj_tY",
    "2CXSw1oPj3I",
    "Z0VbANbyH2o",
    "eLjmQ0aGC1U",
    "FiENDQapd4g",
    "Nm0qd0uhhhY",
    "PL0f3_ZuJts",
    "-vzZ50Rijm8",
    "JhjnnGuvI0c",
    "kIVgRHm2OKg",
    "ico0Nfz2gfU",
    "yb584STwkTY",
    "BGU1YL9LNr4",
    "XK7Crkcn7Z0",
    "gKioNQ1QwVA",
    "LToDPzfwMoM",
    "6jS1rU4F4HA",
    "sXRnSIcZVZ0",
    "jy26LpiiGJA",
    "iAIBF2ngbWY",
    "HrnrqYxYrbk",
    "WWXm39leYew",
    "lwv_0SEJ4NQ",
    "9cHq63r1vHQ",
    "Xbizke4zftY",
    "NlRrGrrRyNo",
    "KNXYonYD59w",
    "kZGpkkfk2lA",
    "9UmoVnBSm5k",
    "Mv8yFE4-DA8",
    "XaNgxnN6qEI",
    "QKMTreKTpug",
    "6RlpNQiPhgY",
    "3o7o4N_mEUY",
    "kO4AU5yBp64",
    "wqVGA-XDe1I",
    "YMAdgnh9VOI",
    "jBfR0bU82z8",
    "hpqvSU0Ynn0",
    "sK7riqg2mr4",
    "OGI0fNvr4fo",
    "Q2S7CDuBTOc",
    "xRb8hxwN5zc",
    "FOA9iyxsW_A",
    "fQlhzY5UH6s",
    "dhY8jRNELUc",
    "fs7-8M1VbZU",
    "6SGRn9OHtFY",
    "pon8irRa8II",
    "UsxERu1Vv08",
    "zCjRVABSHUs",
    "r-i8teGFG5g",
    "4vSIwdj6MEU",
    "Ya_qVko-Xg0",
    "KAskRVFhv-c",
    "8Y7bYQIWcuk",
    "6AcUmOGMnak",
    "njoL-CQt7H4",
    "4mq5tyWfXDU",
    "TGpG56pg3UU",
    "EtSAs6GD0Yk",
    "_NWaYjsz3qY",
    "ltrstdEFaqg",
    "UNs50T6EYwE",
    "txxAH9D2gZU",
    "fKxEXm9qG4k",
    "WIjra2HHRFM",
    "tnp8SRcXx-s",
    "v9KvrMnnyb4",
    "uJlJBIBIbAU",
    "0n2G2SryMuY",
    "bfzDXYW5fS0",
    "YrBE1Cd9UzA",
    "Y35uCA-XVRM",
    "UcmzeXxF4D4",
    "P9OuseD4zdI",
    "MYgIWSsOaSE",
    "CXlHYSiuW4U",
    "FYfYq2a-orA",
    "8v-TWxPWIWc",
    "jIqRbFQl-ds",
    "Aokj-w3COw0",
    "vIUp4CzOrpQ",
    "RzMmU4xvyCU",
    "Jv03fM7LZgE",
    "s_Ab720t_zo",
    "5BAWcCxkMCs",
    "QMfLDyEoWkE",
    "CSO5DhzK094",
    "Vsxh7gEKuOE",
    "-8DxXays6v8",
    "1AGVmQ5OwtM",
    "tYgy4fF9iJA",
    "4G6-fKG96Y8",
    "TnnOyFHn0Xc",
    "pWJTiLL5PM8",
    "nZpm-87y37Y",
    "RBTXo0Ai8_A",
    "5qJNtsPJtKc",
    "fXRvluHnjxE",
    "xitd9mEZIHk",
    "eXkHvT--DBU",
    "n0L6uHhzWIw",
    "P0KasU0HXD0",
    "tmWL-JxUGZc",
    "OMsrXBzSsUI",
    "bYy_bjsy8Y0",
    "Cz7TfFrFojU",
    "2s93cqRcqAk",
    "lVpZaByCWUE",
    "1BLF5dXRzlA",
    "Wh74IJ9xSxA",
    "Wo5nJJiJ8Cg",
    "ZrhQCtQJ13s",
    "vmLGHNreScc",
    "-j6F012HtAM",
    "06pGYAQnqWQ",
    "SDQdGibJ9mE",
    "OOWvmeTTp7Y",
    "cYOB941gyXI",
    "cs1e0fRyI18"
  ],
  "classic_old": [
    "dt6aKKhNhaA",
    "CWHSNIpl7dg",
    "dyEdcOhxJNQ",
    "huDnyuOBmfg",
    "Pa1UPI5STLk",
    "wKQVoA9UVEQ",
    "WK1z5uJaI7Y",
    "zbvfAkJWntc",
    "bXO13Qqgki4",
    "z486h8Z8PME",
    "cnvkr55Z0Ns",
    "QiWIXpsYM88",
    "cvEeqyQl1zw",
    "s1joyBZpbQ8",
    "PvvPSmSTUAo",
    "6r8KvFpVrnk",
    "yPePNnCkfMs",
    "DCR42fzL2Kk",
    "aFzH9rjOTVo",
    "_61aQJ4EEsk",
    "ddl9TR3a7DM",
    "Ca6dPcHgdFY",
    "gTlY-WV7wYU",
    "1T8G_d5o5Gs",
    "Bx5sqAE86e0",
    "qRdoJJb_rrU",
    "vb9hvky8tc8",
    "_yC4IKZ76GA",
    "9XnNrSlfKOg",
    "qfCt1UZAXMQ",
    "jki29sXNRNM",
    "pzfPccOlY_s",
    "wFAU_duK0Jc",
    "9_oTxNGcXR8",
    "IuZNgJMfEeI",
    "T6Cie280Dq8",
    "keyUyjT0f8A",
    "JVQhw298b6g",
    "KK2vimvZ3Dg",
    "C4QBpS9fq4U",
    "7dO_MS9tZ5E",
    "OssRAVZhsRk",
    "9dcBy2uXL7E",
    "-W2dagktUp0",
    "Wy6ec9YTO8g",
    "BB6KvXQx090",
    "43wT0xhvfsA",
    "QkGqpVYjLUw",
    "Jkd0O1UqyOY",
    "-ArgZa-UsAM",
    "YT7crTHjCAo",
    "kxT-5glSScc",
    "gejKrLu9N9c",
    "K2K33TUE4rw",
    "BVnz6oSupUM",
    "J4i7hGkR3g8",
    "IJRT8hcp53w",
    "COV1a8T5PDg",
    "eMC7RJpMYhk",
    "dqkmT6vLvZc",
    "SBfPs-PMGTA",
    "Oc9E71akp5M",
    "vFN3eNe0_Hs",
    "1R8MGdgZDns",
    "YoThngCrGGc",
    "G_x-UJNEmEU",
    "bydvSfemqcg",
    "Ki41AKu0iHc",
    "hWJohzeDr7w",
    "PZ7mhXZSJ8c",
    "mdPrweVv7DE",
    "LzXLcKbbDTw",
    "ODu7OyAqK-Q",
    "iSUK1QoK9-E",
    "2yyNfCdiVug",
    "dPkwe9AoOmY",
    "lIk5ZBlIByo",
    "17bJ89Ht7zs",
    "Ed1WBWvxnSY",
    "iSC33G5PK38",
    "lZ2PhyBF3GQ",
    "hw_HpTI_Wkw",
    "cNV5hLSa9H8",
    "Zxgvob1Ew0c",
    "BOBUVPrYf2s",
    "wBw9EPtDLw8",
    "-V4XWq_sRDw",
    "ojCnlV1MA-k",
    "cUVUs7M9TS0",
    "y33alFobQdA",
    "O3q6OZbjgKU",
    "uBmdxtJ5c4o",
    "OV-Mpzvdd8E",
    "TopgRkAtS3A",
    "ay6pwhXPNvo",
    "4f9rJADDp2g",
    "Mf_0pDqZi50",
    "hqtmwQ_5uCk",
    "RU-k6NR2o8E",
    "vCTW2GfcepQ",
    "eVnG_Rqfgg4",
    "9Eg4d56rt-U",
    "WzyBk0jKggw",
    "ThHYiiZTB1Y",
    "PFHczgD-lGM",
    "O-BBJgbNsv8",
    "Ujl0rhUICGg",
    "w_2wRMG1mH8",
    "W78aOolYNwo",
    "fJCA1x-FtaA",
    "S3RHzeOCFHQ",
    "fruy3jllfes",
    "D-zNmkjyXNM",
    "CeO-2xTCDTU",
    "ZEgipMHnw6I",
    "hL71wUbaHV4",
    "LYLau8rZZws",
    "mdPFcsZ7Pjc",
    "LHlaLfujm_k",
    "mOLYGNCc9nw",
    "IrpRI8NyulE",
    "7Ib33wy6OT4",
    "lGkqNVrgFWE",
    "9PdSmDRGIwM",
    "Q0LMeOmRUy8",
    "Fpu7OjcxYvY",
    "g_pi4e7lLwE",
    "09pE6IqT1ug",
    "IXIgs15Uqf0",
    "6BBz4BxZmw0",
    "4gbvQNPCt-I",
    "6yL7e60G17c",
    "rWsJ79-TDqM",
    "_70tVb5Ij0U",
    "ZyNXJSgEdGM",
    "-2UcIC_s05I",
    "C4o0maaZFWo",
    "EZIMrK0W7hs",
    "PdelyWYIayk",
    "Rod6fjR3MIY",
    "AMuRRXCuy-4",
    "mzIuhFx5W1o",
    "viKdF7sp_cY",
    "vYGw1V2NSik",
    "cvQWzlNIjt8",
    "GvK5ZVFju1I",
    "cC6UGlKN3PA",
    "pw6r-izZArA",
    "QwLQ4_gkvsE",
    "_q7Wz-N4oaQ",
    "Vabo2KVaEwA",
    "LjxNvViZxew",
    "xB8bPYEFlPA",
    "bwWprAAOyy8",
    "H60L40GbfFI",
    "ywyjyu36HlU",
    "d0JpdfOLXI0",
    "f5dw3nafOuo",
    "Uw5_IzY_Ooc",
    "tJrdQmCHcKs",
    "hgi2MYAFgE8",
    "UlWAjd9bcKw",
    "MTwtrF243kY",
    "6Z3DO-OFIjQ",
    "g3kbONxTpIo",
    "nWbBIf5_LTY",
    "ooeAxo1GMRw",
    "BulAS4su2CU",
    "Xsn0QjMN3fM",
    "LsMEeJpFMD4",
    "XuVOqQI7SqQ",
    "fYPkIaIemAs",
    "SLT4HF7nHKc",
    "0clDXacCD9E",
    "4Nki0dXGt_o",
    "L6DgJVMzkZU",
    "JkdHB8S15Co",
    "p8Tu9oj2ydw",
    "NtrEXzHT4pU",
    "JlxYbAodnjU",
    "xDbK1eZYVzg",
    "Z5D1dhTMclI",
    "fyZ-sOHj-Vg",
    "4gtXTXWBK4o",
    "vKrBHzhBGOQ",
    "wHqKTmEkpBg",
    "MGsw7CnqdJo",
    "uyjiK9QCU5U",
    "8psAZcIOzEA",
    "2beG3rwg2Ck",
    "m7qCWlHdnr8",
    "yTlYMxf7K74",
    "KcZ9C6vWMIs",
    "cIVkYSm7Orw",
    "13AaATy46YU",
    "h34CiqQ51zs",
    "W6dKaCV-mJQ",
    "7shxWODIwqs",
    "zVUKtXI7xTM",
    "g6C-GUy6a3s"
  ],
  "lofi": [
    "ElZfdU54Cp8",
    "BddP6PYo2gs",
    "KUpwupYj_tY",
    "RLzC55ai0eo",
    "Grr0FlC8SQA",
    "HrnrqYxYrbk",
    "Z1-qmKn7DQY",
    "mNuhKUOD_A0",
    "6mr4cYJ7yew",
    "zCGck2spPsU",
    "7Txv-r7ijT8",
    "UJ5J0cFZZTE",
    "CTgdRyg8aVE",
    "TjXH_P7Khhg",
    "W1S9AbHpWFY",
    "BwiaxAos5cg",
    "vEe-UgJvUHE",
    "9uIIdCBRNRc",
    "0avk5g_9Cgk",
    "k6dGN3azeqo",
    "_iktURk0X-A",
    "MJyKN-8UncM",
    "HYUpNJJELeE",
    "yRB0xbKDebo",
    "EQxEms7gnqs",
    "97bFaxqvpnI",
    "MtnsyzHoZGU",
    "ceTSEVpRFnM",
    "9-LH8ABADdo",
    "EEnlczCd1v4",
    "vGHa_VcAIxM",
    "KeSeFHfSqys",
    "XtBsUXGTVZ0",
    "hk5IqAhOrnY",
    "sK1v-XxbSyE",
    "rTvVuLoOq0I",
    "xSGL4bM2jC8",
    "m-e6lZuf5wc",
    "zik32kzJBHc",
    "ilNt2bikxDI",
    "gJLVTKhTnog",
    "bP8ATWCvqzw",
    "2FhgKp_lfJQ",
    "PJWemSzExXs",
    "wmUJwQNGK3k",
    "vA86QFrXoho",
    "SmaY7RfBgas",
    "bL6dJjxm0x0",
    "-BJt4fCAtZE",
    "P0NfnFYpENo",
    "0IIJxkDtkHY",
    "NLKwRW2y-sg",
    "_mR6bY-ndso",
    "JuXuakMtsMQ",
    "tYqZK7bq5Bs",
    "V_cZa8Ice2w",
    "jKqCewZvECA",
    "LIEiEwpEhWM",
    "8erle22S6x0",
    "usvVGXFIpTM",
    "_deqdZmKzyg",
    "uK7Ovgs44Uk",
    "_CuOG9TBCi4",
    "iOIF74Hk80A",
    "HhoNUPDVlbc",
    "4gpZU24m3nQ",
    "0fPStMCNSy8",
    "93oRx73yfAs",
    "LsIDBebTAa4",
    "LPDLr4UiVIQ",
    "i1IDh_ZoJgI",
    "1gEoVHEr_hU",
    "GVQu3ym-Uf0",
    "J3m3uptDf0Q",
    "mEmwd17xpAk",
    "vMtg9hbtvqM",
    "NWDOrQ1hGBE",
    "BmwiS-THm34",
    "TS84-uinbdc",
    "6fTilfKvxbo",
    "5Gggsqvd4w4",
    "0GwYr5jrw48",
    "0P3Gt-60yLc",
    "YmUptL9VSdg",
    "n9W6WrDWQLU",
    "2o7oC_A7TFU",
    "MIcZU1fobg4",
    "LFiofrZKNJE",
    "JP9XJ7x3bEU",
    "oQPfpNzmXnM",
    "GZZovoe1dpM",
    "LY1QEPLXAFk",
    "sm91cOlOodY",
    "p_K1HiTNZN8",
    "Bh5ZRBjgkTs",
    "FVfnQ3RHi-M",
    "ygMbkWRKme4",
    "_9QUykQ2xB8",
    "-3KT1f7WZIo",
    "9et5qzuzbQM",
    "9fKQJcbd-jY",
    "Y2zc2IeVX_g",
    "gfEKRoO-pOU",
    "pdL1imksSqY",
    "AX6OrbgS8lI",
    "A7NDb0iDZd0",
    "aDlv2UX1lA8",
    "sxCVdh2PHcM",
    "7SjrVIxjfQA",
    "gf8H9gtD4JI",
    "TsBP6In4dtM",
    "L2mSvBrq84E",
    "euP-V53PZoc",
    "UR-PAQRnrKw",
    "0llEfC5Stg0",
    "Wk-CpIkbUvo",
    "IWyd09C7brs",
    "l8lamLpCabY",
    "YIEAg-v-Pic",
    "uFbayWnLGxs",
    "D0b7bAiXZJI",
    "F3rN5MXtTL0",
    "Fegf8boqL_w",
    "6-BiWZsjgR8",
    "_XBVWlI8TsQ",
    "zQDAi8tI-cU",
    "CAHN1yO196M",
    "KA4APfVz5I8",
    "-fVtSHPg040",
    "_vRXnq3ISvs",
    "6c-10LBzsIk",
    "9_uPRv8HNqM",
    "Jt7yvXSwyMA",
    "NLAT7ljan8M",
    "rzkP0nwKiqM",
    "LKXxNB8iAMo",
    "eoASHWddx7c",
    "0Wt6C_EzLls",
    "d5b9UNdZfsw",
    "KgdBrGHviv4",
    "7oO-Y7t9I_s",
    "88Xhw-XTDb8",
    "JokgM6-y9Ls",
    "ULcyLYD3o_M",
    "9lyPBa5Kd3I",
    "Q3WfedW2i-s",
    "9aNUc4L_94U",
    "MArLl3XbN8Y",
    "3RAoczaBVP8",
    "ewuvBK5nax8",
    "ZP1lpOMsek4",
    "Q5Sc8IsY-SQ",
    "TZLo-TTnrfQ",
    "qy1l5Wt_olw",
    "FysdiBYGJLI",
    "etwc_LzYTFI",
    "bE_hK9NZ2_A",
    "_rGuNjq6fCE",
    "LWJU1kj1PaI",
    "N-PHKu9FCVY",
    "_RFVSuDK9Eg",
    "n5Jqs1vMyzE",
    "9UpiVZDzXYc",
    "fSS_R91Nimw",
    "1q65CU2JoXg",
    "ZlOZktsODpA",
    "akjdj6iHttY",
    "nJcaU8bKpGs",
    "JKSoBqnQ5I4",
    "EYgSirZikfw",
    "fTtPg6CSeHk",
    "p8p0Pb5R-FA",
    "oTJxvlHcB-4",
    "0bRnXG4ytuM",
    "FvLlxpd4f7M",
    "Qqxb9lI6xLw",
    "4sMdGz8rbcs",
    "3Kjj5UI9edw",
    "fAB7HttsFpE",
    "3lMww57WSzQ",
    "8V8dOlyQj4Y",
    "czfRogz56cA",
    "U4e2UvC_YCo",
    "jHNNMj5bNQw",
    "yk2tHuIP59s",
    "MuCfsZk9lbU",
    "ta-W16uw7zg",
    "lwLVJ0E8gN4",
    "EK2Ol1ov0gk",
    "7jZwAl0ArQw",
    "Ymcbjo6P1O0",
    "3F9r7xggi88",
    "-X2dsCQMLcs",
    "jJ4AsIV1FDI",
    "PAjJAWrCAzU",
    "L-SgTplq2IQ",
    "GgOjecsKCww",
    "iAOA8TLgqG8",
    "w3eYf7noC8A",
    "3oMQuyaPGa4"
  ]
};

const LOCAL_STORAGE_CACHE_KEY = 'surbeat_youtube_cache_v5';
let youtubeCache = {
  trending: [],
  romantic_new: [],
  classic_old: [],
  lofi: []
};

// Shuffled queues per category (combines live online results + 200 songs fallback)
const categoryQueues = {
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
  if (q.includes('romantic') || q.includes('love') || q.includes('arijit') || q.includes('atif') || q.includes('shreya')) return 'romantic_new';
  if (q.includes('old') || q.includes('classic') || q.includes('90s') || q.includes('retro') || q.includes('kishore') || q.includes('rafi') || q.includes('lata')) return 'classic_old';
  if (q.includes('lofi') || q.includes('sad') || q.includes('chill') || q.includes('reverb') || q.includes('slowed') || q.includes('chai')) return 'lofi';
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
            if (valid.length >= 50) {
              youtubeCache[cat] = valid;
            }
          }
        }
      }
    }
  } catch (e) { }

  // Ensure every category is backed by the full 200-song library
  for (const cat of ['trending', 'romantic_new', 'classic_old', 'lofi']) {
    const seed = DEFAULT_SONGS_DATABASE[cat] || DEFAULT_SONGS_DATABASE.trending || [];
    if (!youtubeCache[cat] || youtubeCache[cat].length < 50) {
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
// Live Dynamic Online YouTube Search Engine
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

/**
 * Searches live online YouTube when API quota is available,
 * and seamlessly enriches category queues and cache.
 */
async function performYouTubeSearch(query) {
  const normKey = query.trim().toLowerCase();
  if (!normKey) return [];
  const catKey = getCategoryForQuery(normKey);

  if (pendingSearchRequests.has(normKey)) {
    return pendingSearchRequests.get(normKey);
  }

  const searchPromise = (async () => {
    try {
      // 1. Try Backend dynamic search (YouTube API + Scraper)
      if (isBackendAvailable && API_BASE_URL) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);

          const res = await fetch(`${API_BASE_URL}/youtube/search?query=${encodeURIComponent(normKey)}`, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (res.ok) {
            const result = await res.json();
            if (result.success && Array.isArray(result.data)) {
              const validIds = result.data.filter(isValidYouTubeId);
              if (validIds.length > 0) {
                // Prepend live online songs to the active play queue
                categoryQueues[catKey] = [...validIds, ...(categoryQueues[catKey] || [])];
                return validIds;
              }
            }
          }
        } catch (e) { }
      }

      // 2. Direct Frontend YouTube Data API search if key exists & quota not exhausted
      if (FRONTEND_YT_API_KEY && !isQuotaExhausted) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&order=viewCount&relevanceLanguage=hi&maxResults=25&q=${encodeURIComponent(normKey)}&key=${FRONTEND_YT_API_KEY}`;
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.status === 429 || res.status === 403) {
          isQuotaExhausted = true;
          console.warn('⚠️ YouTube API Quota exhausted. Seamlessly playing from 800-song library (200 in each category).');
          return youtubeCache[catKey] || DEFAULT_SONGS_DATABASE[catKey] || [];
        }

        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.items)) {
            const validItems = data.items.filter(isRelevantHindiMusic);
            const videoIds = validItems.map(item => item.id.videoId).filter(isValidYouTubeId);
            if (videoIds.length > 0) {
              // Prepend newly found online songs to play queue
              categoryQueues[catKey] = [...videoIds, ...(categoryQueues[catKey] || [])];
              syncSongToBackendDatabase(catKey, videoIds);
              return videoIds;
            }
          }
        }
      }

      // 3. Fallback to 200 songs category library when offline or quota finished
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

/**
 * Triggers background dynamic search using online queries without delaying playback
 */
function fetchFreshOnlineSongsInBackground(categoryKey) {
  if (isQuotaExhausted) return;
  const queries = categoryQueries[categoryKey] || categoryQueries.trending;
  if (!queries || queries.length === 0) return;

  const randomQuery = queries[Math.floor(Math.random() * queries.length)];
  performYouTubeSearch(randomQuery).then(fetchedIds => {
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

/**
 * Gets next song from queue; if empty, refills from 200-song category library
 */
function getNextSongFromQueue(categoryKey) {
  if (!categoryQueues[categoryKey] || categoryQueues[categoryKey].length === 0) {
    const pool = (youtubeCache[categoryKey] && youtubeCache[categoryKey].length >= 50)
      ? youtubeCache[categoryKey]
      : (DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending || []);

    const validPool = pool.filter(isValidYouTubeId);
    categoryQueues[categoryKey] = shuffle(validPool.length > 0 ? validPool : DEFAULT_SONGS_DATABASE.trending);
  }

  const selectedId = categoryQueues[categoryKey].pop();
  recentlyPlayedHistory.push(selectedId);
  if (recentlyPlayedHistory.length > 100) {
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
let pendingPlayVideoId = null;

const PAUSE_ICON = 'M6 5h4v14H6zm8 0h4v14h-4z';
const PLAY_ICON = 'M8 5v14l11-7z';

// ========================================
// Playback Engine (Zero-Delay Instant Playback on All Browsers)
// ========================================

function playCategorySong(categoryKey = currentCategory) {
  currentCategory = categoryKey;
  unlockMobileAudioGesture();

  const nextSongId = getNextSongFromQueue(categoryKey);
  if (!nextSongId) {
    const fallbackId = (DEFAULT_SONGS_DATABASE[categoryKey] || DEFAULT_SONGS_DATABASE.trending)[0];
    playVideoById(fallbackId);
    return;
  }

  // Play immediately (0ms delay)
  playVideoById(nextSongId);

  // Trigger live online search in background to keep queue freshly updated from online query
  fetchFreshOnlineSongsInBackground(categoryKey);
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
    if (nowPlayingEl) nowPlayingEl.innerText = 'Loading melody...';

    setTimeout(updateNowPlaying, 700);
  } else {
    // Player not ready yet, queue for instant play as soon as ready
    pendingPlayVideoId = videoId;
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

  let trackTitle = 'SurBeat Hindi Melody';

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
// YouTube Player Integration & Endless Auto-Play
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

  if (pendingPlayVideoId) {
    const queued = pendingPlayVideoId;
    pendingPlayVideoId = null;
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
  console.warn('⚠️ YouTube Track Error Code:', event.data, '- Skipping unplayable video instantly...');
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

  // Fast auto-recovery without delay (under 100ms)
  setTimeout(() => {
    playNext();
  }, 80);
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

  // Global user gesture unlock for all mobile and desktop browsers
  ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'].forEach(evtType => {
    document.addEventListener(evtType, unlockMobileAudioGesture, { once: true, passive: true });
  });

  // Pre-load YouTube Iframe API immediately on page load
  if (typeof YT === 'undefined' || !YT.Player) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  // Genre / Category Buttons
  const genreBtns = document.querySelectorAll('.genre-btn');
  genreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      genreBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'trending';

      playCategorySong(currentCategory);
    });
  });

  // Main Play Button — Instant 0ms launch on touch/click
  const playBtn = document.getElementById('playBtn');
  if (playBtn) {
    const handleInitialPlay = () => {
      unlockMobileAudioGesture();
      startLockScreenAudioSession();

      playBtn.style.display = 'none';
      const controlsRow = document.getElementById('controlsRow');
      const volumeRow = document.getElementById('volumeRow');
      if (controlsRow) controlsRow.style.display = 'flex';
      if (volumeRow) volumeRow.style.display = 'flex';

      playCategorySong(currentCategory);
    };

    playBtn.addEventListener('click', handleInitialPlay);
    playBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      handleInitialPlay();
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
