/**
 * SurBeat — Pure Indian Musical Vibes & Endless Dynamic YouTube Player
 * Strictly Hindi & Desi Hits (Zero English) + ViewCount Sorted + Endless Non-Stop Auto-Play
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

console.log('🎧 SurBeat Pure Hindi Endless Engine Initialized');

// 100% Strictly Hindi & Desi Hits (ZERO English Songs allowed)
const CATEGORY_QUERIES = {
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

// Dynamic search modifiers to ensure YouTube returns fresh new Hindi songs every request
const QUERY_SUFFIXES = [
  ' 2026',
  ' jukebox hits',
  ' viral tracks',
  ' chartbusters',
  ' golden collection',
  ' popular playlist',
  ' blockbuster'
];

let currentCategory = 'trending';
const playedSongIds = new Set();
let isFetchingMore = false;

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
    silentAudioEl.play().catch(() => {});
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
      } catch (e) {}
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

let onlineListenersCount = 24;

function updateOnlineListeners() {
  const textEl = document.getElementById('visitorCountText');
  if (!textEl) return;

  const delta = Math.floor(Math.random() * 5) - 2;
  onlineListenersCount = Math.max(16, Math.min(42, onlineListenersCount + delta));

  textEl.innerText = `${onlineListenersCount} Listeners Online`;
}

async function safeJsonFetch(url, label) {
  if (!url || isFileProtocol) {
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

  if (!API_BASE_URL) {
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
// Live YouTube Search Query Execution (Strict Hindi Filter: relevanceLanguage=hi)
// ========================================

async function fetchDirectYouTubeApi(query) {
  if (!FRONTEND_YT_API_KEY) return [];
  try {
    // Add relevanceLanguage=hi to force YouTube API to strictly return Hindi songs
    const suffix = QUERY_SUFFIXES[Math.floor(Math.random() * QUERY_SUFFIXES.length)];
    const fullQuery = query + suffix;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&videoDuration=medium&order=viewCount&relevanceLanguage=hi&maxResults=25&q=${encodeURIComponent(fullQuery)}&key=${FRONTEND_YT_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data || !Array.isArray(data.items)) return [];
    return data.items.map(item => item.id?.videoId).filter(Boolean);
  } catch (e) {
    return [];
  }
}

async function fetchCategorySongs(categoryKey) {
  const baseQueries = CATEGORY_QUERIES[categoryKey] || CATEGORY_QUERIES.trending;
  let fetchedIds = [];

  // 1. Direct YouTube Data API v3 search sorted strictly by viewCount with Hindi relevance filter
  try {
    const promises = baseQueries.map(q => fetchDirectYouTubeApi(q));
    const results = await Promise.all(promises);
    results.forEach(ids => {
      if (Array.isArray(ids)) fetchedIds = fetchedIds.concat(ids);
    });
  } catch (e) {}

  // 2. If client API returns no results, try backend proxy if configured
  if (fetchedIds.length === 0 && API_BASE_URL) {
    try {
      const promises = baseQueries.map(q => {
        const url = `${API_BASE_URL}/youtube/search?query=${encodeURIComponent(q)}&maxResults=25`;
        return safeJsonFetch(url, `Search: ${q}`);
      });

      const results = await Promise.all(promises);
      results.forEach(res => {
        if (res && res.success && Array.isArray(res.data)) {
          fetchedIds = fetchedIds.concat(res.data);
        }
      });
    } catch (e) {}
  }

  let fullPool = [...new Set(fetchedIds)].filter(Boolean);
  let unplayedPool = fullPool.filter(id => !playedSongIds.has(id));

  // If played through most songs, clear history to loop back to fresh variations
  if (unplayedPool.length < 3) {
    playedSongIds.clear();
    unplayedPool = fullPool;
  }

  return shuffle(unplayedPool);
}

// ========================================
// Player State
// ========================================

let player = null;
let isPlayerReady = false;
let queue = [];
let currentIndex = 0;
let isMuted = false;
let isLiked = false;
let isSeeking = false;
let progressTimer = null;

const PAUSE_ICON = 'M6 5h4v14H6zm8 0h4v14h-4z';
const PLAY_ICON = 'M8 5v14l11-7z';

// ========================================
// Endless Dynamic Auto-Play Queue Engine
// ========================================

async function buildQueue(categoryKey = currentCategory) {
  const nowPlayingEl = document.getElementById('nowPlayingText');
  if (nowPlayingEl) nowPlayingEl.innerText = 'searching YouTube for Hindi hits...';

  queue = await fetchCategorySongs(categoryKey);
  currentIndex = 0;
}

async function prefetchMoreSongs() {
  if (isFetchingMore) return;
  isFetchingMore = true;

  try {
    const freshSongs = await fetchCategorySongs(currentCategory);
    const newSongs = freshSongs.filter(id => !queue.includes(id) && !playedSongIds.has(id));
    if (newSongs.length > 0) {
      queue = queue.concat(newSongs);
    }
  } catch (e) {}

  isFetchingMore = false;
}

function playCurrent() {
  if (!queue.length) {
    buildQueue(currentCategory).then(() => playCurrent());
    return;
  }

  if (currentIndex >= queue.length) {
    buildQueue(currentCategory).then(() => playCurrent());
    return;
  }
  if (currentIndex < 0) currentIndex = queue.length - 1;

  const videoId = queue[currentIndex];
  playedSongIds.add(videoId);

  // Auto-prefetch more fresh Hindi songs before queue reaches the end
  if (queue.length - currentIndex < 4) {
    prefetchMoreSongs();
  }

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

// ENDLESS NON-STOP PLAYBACK ENGINE: Never stops playing songs, continuously fetches fresh Hindi songs
function playNext() {
  currentIndex++;
  if (currentIndex >= queue.length) {
    buildQueue(currentCategory).then(() => {
      playCurrent();
    });
    return;
  }
  playCurrent();
}

function playPrev() {
  if (!queue.length) return;
  currentIndex = (currentIndex - 1 + queue.length) % queue.length;
  playCurrent();
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
    } catch (e) {}
  }

  nowPlayingEl.innerText = trackTitle;
  updateMediaSessionMetadata(trackTitle);
}

function resetLike() {
  isLiked = false;
  const likeBtn = document.getElementById('likeBtn');
  if (likeBtn) likeBtn.classList.remove('liked');
}

// Fixed Play/Pause SVG Path Toggle
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
    } catch (e) {}
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
            } catch (e) {}
          }
        }
      }
    } catch (e) {}
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
  if (event.data === YT.PlayerState.ENDED) {
    console.log('🎵 Track ended — Playing next dynamic Hindi hit...');
    playNext();
  }

  if (event.data === YT.PlayerState.PLAYING) {
    // Minimum Duration Guard: Must be over 1 minute (> 60 seconds) to play genuine songs
    try {
      const duration = player.getDuration();
      if (duration > 0 && duration < 60) {
        console.warn(`⚠️ Track duration too short (${Math.round(duration)}s) - Skipping clip under 1 minute...`);
        const nowPlayingEl = document.getElementById('nowPlayingText');
        if (nowPlayingEl) nowPlayingEl.innerText = 'Skipping short clip (< 1 min)...';
        playNext();
        return;
      }
    } catch (e) {}

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
  if (nowPlayingEl) nowPlayingEl.innerText = 'Track unavailable, skipping to next hit...';
  setTimeout(playNext, 600);
}

// ========================================
// Initialization & Event Listeners
// ========================================

document.addEventListener('DOMContentLoaded', () => {
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

      await buildQueue(currentCategory);
      if (player && isPlayerReady) {
        playCurrent();
      }
    });
  });

  const playBtn = document.getElementById('playBtn');
  if (playBtn) {
    playBtn.addEventListener('click', async () => {
      playBtn.innerHTML = '<span class="btn-icon">⌛</span> Tuning SurBeat...';
      playBtn.disabled = true;

      try {
        startLockScreenAudioSession();
        await buildQueue(currentCategory);

        let waitCount = 0;
        while ((!player || !isPlayerReady) && waitCount < 25) {
          await new Promise(resolve => setTimeout(resolve, 200));
          waitCount++;
        }

        if (player && typeof player.unMute === 'function') {
          player.unMute();
          player.setVolume(85);
        }

        playCurrent();

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
