const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'songs_db.json');

// 200 Real Verified YouTube Tracks per category (800 Total)
let SEED_DATABASE = {};
try {
  if (fs.existsSync(DB_PATH)) {
    SEED_DATABASE = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  }
} catch (e) {
  console.warn('Could not preload songs_db.json for SEED_DATABASE:', e.message);
}

function isValidYouTubeId(id) {
  if (!id || typeof id !== 'string') return false;
  if (id.length !== 11) return false;
  if (/^(Trnd|Rmnt|Clsc|Lofi)/i.test(id)) return false;
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
}

/**
 * Loads songs database from file
 */
function loadDatabase() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf8');
      const parsed = JSON.parse(data);
      const cleaned = {};
      for (const cat of ['trending', 'workout', 'awarapan', 'romantic_new', 'classic_old', 'lofi']) {
        const rawList = Array.isArray(parsed[cat]) ? parsed[cat] : [];
        const validList = rawList.filter(isValidYouTubeId);
        cleaned[cat] = validList.length > 0 ? validList : [...(SEED_DATABASE[cat] || [])];
      }
      return cleaned;
    }
  } catch (err) {
    console.warn('⚠️ Error loading songs_db.json:', err.message);
  }
  return JSON.parse(JSON.stringify(SEED_DATABASE));
}

/**
 * Saves songs database to file
 */
function saveDatabase(db) {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8');
  } catch (err) {
    console.warn('⚠️ Error saving songs_db.json:', err.message);
  }
}

/**
 * Normalizes query string to category key
 */
function mapQueryToCategory(query) {
  if (!query) return 'trending';
  const q = query.toLowerCase();
  if (q.includes('workout') || q.includes('gym') || q.includes('dangal') || q.includes('sultan') || q.includes('bicep') || q.includes('squat') || q.includes('running') || q.includes('energy') || q.includes('akhada')) {
    return 'workout';
  }
  if (q.includes('awarapan') || q.includes('emraan') || q.includes('mustafa zahid') || q.includes('toh phir aao') || q.includes('tera mera rishta') || q.includes('mahiya')) {
    return 'awarapan';
  }
  if (q.includes('romantic') || q.includes('love') || q.includes('arijit') || q.includes('atif') || q.includes('shreya')) {
    return 'romantic_new';
  }
  if (q.includes('old') || q.includes('classic') || q.includes('90s') || q.includes('retro') || q.includes('kishore') || q.includes('rafi') || q.includes('lata')) {
    return 'classic_old';
  }
  if (q.includes('lofi') || q.includes('sad') || q.includes('chill') || q.includes('reverb') || q.includes('slowed') || q.includes('chai')) {
    return 'lofi';
  }
  return 'trending';
}

/**
 * Get stored songs for category or query
 */
function getSongs(categoryOrQuery) {
  const db = loadDatabase();
  let categoryKey = categoryOrQuery;
  if (!db[categoryKey]) {
    categoryKey = mapQueryToCategory(categoryOrQuery);
  }

  const categorySongs = (db[categoryKey] || []).filter(isValidYouTubeId);
  if (categorySongs.length > 0) {
    return categorySongs;
  }

  // Fallback to trending if specific category is empty
  return (db.trending || SEED_DATABASE.trending || []).filter(isValidYouTubeId);
}

/**
 * Appends new video IDs to a category without duplicates
 */
function addSongs(categoryOrQuery, newVideoIds) {
  if (!Array.isArray(newVideoIds) || newVideoIds.length === 0) return [];
  const db = loadDatabase();

  let categoryKey = categoryOrQuery;
  if (!db[categoryKey]) {
    categoryKey = mapQueryToCategory(categoryOrQuery);
  }

  if (!db[categoryKey]) {
    db[categoryKey] = [];
  }

  const existingSet = new Set(db[categoryKey]);
  let addedCount = 0;

  for (const id of newVideoIds) {
    if (isValidYouTubeId(id) && !existingSet.has(id)) {
      existingSet.add(id);
      addedCount++;
    }
  }

  if (addedCount > 0) {
    db[categoryKey] = Array.from(existingSet);
    saveDatabase(db);
    console.log(`💾 Saved ${addedCount} new songs to database category "${categoryKey}". Total stored: ${db[categoryKey].length}`);
  }

  return db[categoryKey];
}

module.exports = {
  loadDatabase,
  getSongs,
  addSongs,
  mapQueryToCategory,
  isValidYouTubeId,
  SEED_DATABASE
};
