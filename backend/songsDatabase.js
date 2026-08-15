const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data', 'songs_db.json');

const SEED_DATABASE = {
  trending: [
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
  romantic_new: [
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
  classic_old: [
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
  lofi: [
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

function isValidYouTubeId(id) {
  if (!id || typeof id !== 'string') return false;
  // YouTube ID must be 11 chars with valid Base64-like characters and NOT dummy strings
  if (id.length !== 11) return false;
  if (/^(Trnd|Rmnt|Clsc|Lofi)/i.test(id)) return false;
  if (/^[a-zA-Z0-9_-]{11}$/.test(id)) return true;
  return false;
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
      for (const cat of ['trending', 'romantic_new', 'classic_old', 'lofi']) {
        const rawList = Array.isArray(parsed[cat]) ? parsed[cat] : [];
        const validList = rawList.filter(isValidYouTubeId);
        cleaned[cat] = validList.length > 0 ? validList : [...SEED_DATABASE[cat]];
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

  const categorySongs = (db[categoryKey] || []).filter(isValidYouTubeId);
  if (categorySongs.length > 0) {
    return categorySongs;
  }

  // Fallback to trending if specific category is empty
  return (db.trending || SEED_DATABASE.trending).filter(isValidYouTubeId);
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
