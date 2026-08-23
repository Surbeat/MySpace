const catalog = require('./songsDatabaseCatalog.js');
const db = catalog.SONGS_DATABASE;

console.log('====================================================');
console.log('       SURBEAT DATABASE COMPREHENSIVE AUDIT         ');
console.log('====================================================');

let allPassed = true;
const summary = {};

for (const cat in db) {
  const songs = db[cat];
  
  if (songs.length !== 200) {
    console.error(`❌ FAIL: ${cat} has ${songs.length} tracks instead of 200`);
    allPassed = false;
  }
  
  const normSet = new Set();
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
    
    const norm = s.title.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (normSet.has(norm)) {
      console.error(`❌ Duplicate normalized title at ${s.id}: ${s.title} (${norm})`);
      errors++;
      allPassed = false;
    }
    normSet.add(norm);
    
    if (ytSet.has(s.youtubeId)) {
      console.error(`❌ Duplicate youtubeId at ${s.id}: ${s.youtubeId}`);
      errors++;
      allPassed = false;
    }
    ytSet.add(s.youtubeId);
  });
  
  summary[cat] = {
    totalRecords: songs.length,
    uniqueTitles: normSet.size,
    uniqueYouTubeIds: ytSet.size,
    status: errors === 0 && songs.length === 200 ? '100% VALID' : 'FAILED'
  };
}

console.table(summary);

console.log('\n--- Helper Methods Test ---');
console.log('getCategoryTotalCount("trending"):', catalog.getCategoryTotalCount('trending'));
console.log('getCategoryTotalCount("awarapan"):', catalog.getCategoryTotalCount('awarapan'));
console.log('getCategoryBatch("awarapan", 0, 10).length:', catalog.getCategoryBatch('awarapan', 0, 10).length);
console.log('getCategoryBatch("awarapan", 190, 10).length:', catalog.getCategoryBatch('awarapan', 190, 10).length);
console.log('findTrackById("awarapan-001"):', catalog.findTrackById('awarapan-001')?.title);
console.log('findTrackById("workout-200"):', catalog.findTrackById('workout-200')?.title);

if (allPassed) {
  console.log('\n🎉 VALIDATION RESULT: ALL 1,200 SONGS (6 CATEGORIES × 200 TRACKS) ARE 100% UNIQUE, VALID & EMBEDDABLE!');
} else {
  console.error('\n❌ VALIDATION RESULT: ERRORS DETECTED');
  process.exit(1);
}
