const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'songs_db.json');

/**
 * Loads songs database from file
 */
function loadDatabase() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('⚠️ Error loading songs_db.json:', err.message);
  }
  return {
    trending: [],
    romantic_new: [],
    classic_old: [],
    lofi: []
  };
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
  if (q.includes('romantic') || q.includes('love') || q.includes('arijit')) {
    return 'romantic_new';
  }
  if (q.includes('old') || q.includes('classic') || q.includes('90s') || q.includes('retro')) {
    return 'classic_old';
  }
  if (q.includes('lofi') || q.includes('sad') || q.includes('chill') || q.includes('reverb')) {
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

  const categorySongs = db[categoryKey] || [];
  if (categorySongs.length > 0) {
    return categorySongs;
  }

  // Fallback to trending if specific category is empty
  return db.trending || [];
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
    if (id && typeof id === 'string' && !existingSet.has(id)) {
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
  mapQueryToCategory
};
