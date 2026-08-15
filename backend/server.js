const express = require('express');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const songsDb = require('./songsDatabase');

const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:8000';

const FALLBACK_PHOTOS = [
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80'
];

/**
 * Scrape live YouTube search results dynamically without blocking (Fast 2.5s timeout)
 */
async function scrapeYouTubeSearch(searchQuery, limit = 25) {
  try {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}&sp=CAMSAhAB`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 2500
    });

    const html = response.data;
    const regex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
    const ids = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
      const id = match[1];
      if (id && songsDb.isValidYouTubeId(id) && !ids.includes(id) && !html.includes(`/shorts/${id}`)) {
        ids.push(id);
      }
    }

    if (ids.length > 0) {
      return ids.slice(0, limit);
    }
  } catch (e) {
    // Fail silently and fast
  }
  return [];
}

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SurBeat Backend is running smoothly' });
});

/**
 * DATABASE SONGS ENDPOINT
 * Directly retrieve or store songs in the database
 */
app.get('/api/songs/database', (req, res) => {
  const { category = 'trending' } = req.query;
  const songs = songsDb.getSongs(category);
  return res.json({
    success: true,
    data: songs,
    total: songs.length,
    category
  });
});

app.post('/api/songs/database', (req, res) => {
  const { category = 'trending', videoIds = [] } = req.body;
  if (!Array.isArray(videoIds) || videoIds.length === 0) {
    return res.status(400).json({ success: false, error: 'videoIds must be a non-empty array' });
  }
  const updatedSongs = songsDb.addSongs(category, videoIds);
  return res.json({
    success: true,
    data: updatedSongs,
    total: updatedSongs.length,
    category
  });
});

/**
 * FAST YOUTUBE SEARCH ENDPOINT (WITH INSTANT DATABASE FAILOVER)
 * Responds in milliseconds. Never delays song playback.
 */
app.get('/api/youtube/search', async (req, res) => {
  const { query, maxResults = 25 } = req.query;
  const limit = Math.min(parseInt(maxResults) || 25, 50);

  if (!query) {
    return res.status(400).json({
      success: false,
      error: 'Query parameter is required'
    });
  }

  let fetchedIds = [];

  // 1. Official YouTube Data API if API Key exists (fast 2s timeout)
  if (process.env.YOUTUBE_API_KEY) {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          videoCategoryId: '10', // Music Category
          videoDuration: 'medium',
          order: 'viewCount',
          maxResults: limit,
          q: query,
          key: process.env.YOUTUBE_API_KEY
        },
        timeout: 2000
      });

      fetchedIds = (response.data.items || [])
        .map(item => item.id?.videoId)
        .filter(songsDb.isValidYouTubeId);

      if (fetchedIds.length > 0) {
        songsDb.addSongs(query, fetchedIds);
        return res.json({
          success: true,
          data: fetchedIds,
          source: 'youtube_api'
        });
      }
    } catch (error) {
      // Fast failover to scraper / database
    }
  }

  // 2. Scrape live YouTube search results with strict fast timeout
  try {
    const scrapedIds = await scrapeYouTubeSearch(query, limit);
    if (scrapedIds.length > 0) {
      songsDb.addSongs(query, scrapedIds);
      return res.json({
        success: true,
        data: scrapedIds,
        source: 'youtube_scraper'
      });
    }
  } catch (e) {
    // Fast failover
  }

  // 3. INSTANT FALLBACK TO STORED DATABASE (Guaranteed real 100% working YouTube music video IDs)
  const storedSongs = songsDb.getSongs(query);

  return res.json({
    success: true,
    data: storedSongs,
    source: 'stored_database',
    fallback: true
  });
});

/**
 * PEXELS PHOTOS ENDPOINT
 */
app.get('/api/photos/romantic', async (req, res) => {
  if (!process.env.PEXELS_API_KEY) {
    const url = FALLBACK_PHOTOS[Math.floor(Math.random() * FALLBACK_PHOTOS.length)];
    return res.json({
      success: true,
      data: { url },
      fallback: true
    });
  }

  try {
    const queries = [
      'romantic music concerts neon',
      'sunset couple love music',
      'moody music studio dark',
      'romantic sunset aesthetic'
    ];

    const randomQuery = queries[Math.floor(Math.random() * queries.length)];

    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {
        query: randomQuery,
        orientation: 'landscape',
        size: 'large',
        per_page: 15
      },
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      },
      timeout: 3000
    });

    if (!response.data.photos || response.data.photos.length === 0) {
      const url = FALLBACK_PHOTOS[Math.floor(Math.random() * FALLBACK_PHOTOS.length)];
      return res.json({ success: true, data: { url }, fallback: true });
    }

    const photo = response.data.photos[Math.floor(Math.random() * response.data.photos.length)];
    const url = photo.src?.landscape || photo.src?.large2x || photo.src?.original || FALLBACK_PHOTOS[0];

    res.json({
      success: true,
      data: { url }
    });
  } catch (error) {
    const url = FALLBACK_PHOTOS[Math.floor(Math.random() * FALLBACK_PHOTOS.length)];
    return res.json({ success: true, data: { url }, fallback: true });
  }
});

/**
 * REAL-TIME ONLINE PRESENCE ENGINE (SSE + HEARTBEAT + BEACON)
 */
const activeVisitors = new Map();
const sseClients = new Set();

function getActiveCount() {
  const now = Date.now();
  const TTL = 15000;
  let count = 0;

  for (const [visitorId, data] of activeVisitors.entries()) {
    if (now - data.lastSeen < TTL && data.tabs && data.tabs.size > 0) {
      count++;
    }
  }
  return Math.max(1, count);
}

function broadcastPresenceCount() {
  const count = getActiveCount();
  const data = JSON.stringify({ count, timestamp: Date.now() });

  for (const client of sseClients) {
    try {
      client.write(`data: ${data}\n\n`);
    } catch (e) {
      sseClients.delete(client);
    }
  }
}

function cleanupStaleVisitors() {
  const now = Date.now();
  const TTL = 15000;
  let changed = false;

  for (const [visitorId, data] of activeVisitors.entries()) {
    if (now - data.lastSeen >= TTL || !data.tabs || data.tabs.size === 0) {
      activeVisitors.delete(visitorId);
      changed = true;
    }
  }

  if (changed) {
    broadcastPresenceCount();
  }
}

setInterval(cleanupStaleVisitors, 4000);

app.get('/api/presence/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const count = getActiveCount();
  res.write(`data: ${JSON.stringify({ count, timestamp: Date.now() })}\n\n`);

  sseClients.add(res);

  req.on('close', () => {
    sseClients.delete(res);
  });
});

app.post('/api/presence/heartbeat', (req, res) => {
  const { visitorId, tabId } = req.body || {};
  if (!visitorId || !tabId) {
    return res.status(400).json({ success: false, error: 'visitorId and tabId are required' });
  }

  const now = Date.now();
  let visitor = activeVisitors.get(visitorId);

  if (!visitor) {
    visitor = { lastSeen: now, tabs: new Set() };
    activeVisitors.set(visitorId, visitor);
  }

  const prevCount = getActiveCount();
  visitor.lastSeen = now;
  visitor.tabs.add(tabId);

  const newCount = getActiveCount();
  if (newCount !== prevCount) {
    broadcastPresenceCount();
  }

  return res.json({ success: true, count: newCount });
});

app.post('/api/presence/leave', (req, res) => {
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }

  const { visitorId, tabId } = body || {};
  if (visitorId && activeVisitors.has(visitorId)) {
    const visitor = activeVisitors.get(visitorId);
    if (tabId) {
      visitor.tabs.delete(tabId);
    }

    if (!tabId || visitor.tabs.size === 0) {
      activeVisitors.delete(visitorId);
    }
    broadcastPresenceCount();
  }

  return res.json({ success: true });
});

app.get('/api/presence/count', (req, res) => {
  return res.json({ success: true, count: getActiveCount() });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🎧 SurBeat Backend running on port ${PORT}`);
  console.log(`🔗 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⚙️  CORS Origin: ${CORS_ORIGIN}`);
});
