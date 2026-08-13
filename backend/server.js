const express = require('express');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

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
 * Scrape live YouTube search results dynamically without hardcoded IDs
 */
async function scrapeYouTubeSearch(searchQuery, limit = 25) {
  try {
    // Sort by View Count (&sp=CAMSAhAB) and filter duration > 4 mins (&sp=EgIYAQ%253D%253D)
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}&sp=CAMSAhAB`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 8000
    });

    const html = response.data;
    const regex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
    const ids = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
      const id = match[1];
      if (id && !ids.includes(id) && !html.includes(`/shorts/${id}`)) {
        ids.push(id);
      }
    }

    if (ids.length > 0) {
      return ids.slice(0, limit);
    }
  } catch (e) {
    console.warn('Live YouTube scrape warning:', e.message);
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
  max: 300,
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SurBeat Backend is running smoothly' });
});

/**
 * DYNAMIC YOUTUBE SEARCH ENDPOINT (NO HARDCODED VIDEO IDs)
 * YouTube chooses videos automatically based on live search query
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

  // 1. Official YouTube Data API if API Key exists
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
        timeout: 8000
      });

      const videoIds = response.data.items
        ?.map(item => item.id?.videoId)
        .filter(Boolean) || [];

      if (videoIds.length > 0) {
        return res.json({
          success: true,
          data: videoIds
        });
      }
    } catch (error) {
      console.warn('YouTube API call warning:', error.message);
    }
  }

  // 2. Scrape live YouTube search results automatically for the exact query
  const scrapedIds = await scrapeYouTubeSearch(query, limit);

  return res.json({
    success: true,
    data: scrapedIds
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
      timeout: 8000
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
    console.warn('Pexels API warning:', error.message);
    const url = FALLBACK_PHOTOS[Math.floor(Math.random() * FALLBACK_PHOTOS.length)];
    return res.json({ success: true, data: { url }, fallback: true });
  }
});

/**
 * VISITOR COUNTER ENDPOINT
 */
app.get('/api/visitors/count', async (req, res) => {
  try {
    const response = await axios.get(
      'https://countapi.mileshilliard.com/api/v1/hit/surbeat_rishabh_pandey_2026',
      { timeout: 5000 }
    );

    const count = response.data?.value ?? response.data?.count ?? null;

    res.json({
      success: true,
      data: { count }
    });
  } catch (error) {
    console.warn('Visitor counter warning:', error.message);
    res.json({
      success: true,
      data: { count: null },
      message: 'Visitor count temporarily unavailable'
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Unhandled error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎧 SurBeat Backend running on port ${PORT}`);
  console.log(`🔗 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⚙️  CORS Origin: ${CORS_ORIGIN}`);
});
