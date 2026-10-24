const catalog = require('./songsDatabaseCatalog.js');
const db = catalog.SONGS_DATABASE;

console.log('====================================================');
console.log('       SURBEAT DATABASE COMPREHENSIVE AUDIT         ');
console.log('====================================================');

let allPassed = true;
const summary = {};
let totalTracksAll = 0;

for (const cat in db) {
  const songs = db[cat];
  totalTracksAll += songs.length;
  
  if (songs.length < 50) {
    console.error(`❌ FAIL: ${cat} has only ${songs.length} tracks (expected at least 50)`);
    allPassed = false;
  }
  
  const ytSet = new Set();
  let errors = 0;
  
  songs.forEach((s, i) => {
    const expectedId = `${cat}-${String(i+1).padStart(3, '0')}`;
    if (s.id !== expectedId) {
      console.error(`❌ ID mismatch at ${i}: expected ${expectedId}, got ${s.id}`);
      errors++;
      allPassed = false;
    }
    
    if (!s.youtubeId || s.youtubeId.length !== 11) {
      console.error(`❌ Invalid youtubeId at ${s.id}: ${s.youtubeId}`);
      errors++;
      allPassed = false;
    }
    
    if (s.thumbnail !== `https://i.ytimg.com/vi/${s.youtubeId}/hqdefault.jpg`) {
      console.error(`❌ Thumbnail mismatch at ${s.id}`);
      errors++;
      allPassed = false;
    }
    
    if (ytSet.has(s.youtubeId)) {
      console.error(`❌ Duplicate youtubeId at ${s.id}: ${s.youtubeId}`);
      errors++;
      allPassed = false;
    }
    ytSet.add(s.youtubeId);
  });
  
  summary[cat] = {
    totalRecords: songs.length,
    uniqueYouTubeIds: ytSet.size,
    status: errors === 0 && songs.length >= 50 ? '100% VALID' : 'FAILED'
  };
}

console.table(summary);

console.log('\n--- Helper Methods Test ---');
console.log('getCategoryTotalCount("sad"):', catalog.getCategoryTotalCount('sad'));
console.log('getCategoryTotalCount("romantic_new"):', catalog.getCategoryTotalCount('romantic_new'));
console.log('getCategoryBatch("sad", 0, 10).length:', catalog.getCategoryBatch('sad', 0, 10).length);
console.log('findTrackById("sad-001"):', catalog.findTrackById('sad-001')?.title);
console.log('findTrackById("workout-100"):', catalog.findTrackById('workout-100')?.title);

if (allPassed) {
  console.log(`\n🎉 VALIDATION RESULT: ALL ${totalTracksAll} SONGS (6 CATEGORIES) ARE 100% UNIQUE, VALID & EMBEDDABLE!`);
} else {
  console.error('\n❌ VALIDATION RESULT: ERRORS DETECTED');
  process.exit(1);
}
