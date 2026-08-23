const fs = require('fs');
const path = require('path');

// Helper to normalize and clean titles
function normalize(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/\[.*?\]/g, '')
    .replace(/\|.*$/g, '')
    .replace(/-.*$/g, '')
    .replace(/official\s*(video|audio|music\s*video|lyric\s*video|lyrics)/gi, '')
    .replace(/full\s*(video|song|audio)/gi, '')
    .replace(/slowed\s*\+?\s*reverb/gi, '')
    .replace(/lofi|reverb|remix|acoustic|live|cover|karaoke|8d/gi, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanTitle(t) {
  if (!t) return '';
  let res = t
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
    .replace(/[\u{2600}-\u{26FF}]/gu, '')
    .replace(/[\u{2700}-\u{27BF}]/gu, '')
    .replace(/\s*\(From\s+["'].*?["']\)/gi, '')
    .replace(/\s*\(From\s+.*?\)/gi, '')
    .replace(/\s*\(Full Video.*?\)/gi, '')
    .replace(/\s*\[Full Video.*?\]/gi, '')
    .replace(/\s*\(Official.*?\)/gi, '')
    .replace(/\s*\[Official.*?\]/gi, '')
    .replace(/\s*\(Lyrics.*?\)/gi, '')
    .replace(/\s*\[Lyrics.*?\]/gi, '')
    .replace(/\s*\(Lyrical.*?\)/gi, '')
    .replace(/\s*\[Lyrical.*?\]/gi, '')
    .replace(/\s*\(Slowed.*?\)/gi, '')
    .replace(/\s*\[Slowed.*?\]/gi, '')
    .replace(/\s*\(Video.*?\)/gi, '')
    .replace(/\s*\[Video.*?\]/gi, '')
    .replace(/\s*\(Audio.*?\)/gi, '')
    .replace(/\s*\[Audio.*?\]/gi, '')
    .replace(/\s*-\s*Official.*/gi, '')
    .replace(/\s*-\s*Lyrical.*/gi, '')
    .replace(/\s*-\s*Lyric.*/gi, '')
    .replace(/\s*-\s*Full Video.*/gi, '')
    .replace(/\s*-\s*Full Song.*/gi, '')
    .replace(/\s*\|\s*Full Song.*/gi, '')
    .replace(/Full Song With LYRICS/gi, '')
    .replace(/Full Song/gi, '')
    .replace(/Lyrical Video/gi, '')
    .replace(/Music Video/gi, '')
    .replace(/Lyric Video/gi, '')
    .replace(/Video Song/gi, '')
    .replace(/4K Video/gi, '')
    .replace(/HD Video/gi, '')
    .replace(/Lyrical/gi, '')
    .trim();

  // If after cleaning it ends with trailing dash or pipe, remove it
  res = res.replace(/[\s\-\|:]+$/, '').replace(/^[\s\-\|:]+/, '').trim();
  return res || t;
}

function cleanArtist(a) {
  if (!a) return 'SurBeat Artist';
  let res = a
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
    .replace(/[\u{2600}-\u{26FF}]/gu, '')
    .replace(/\|.*$/g, '')
    .replace(/Latest Punjabi.*/gi, '')
    .replace(/New Hindi.*/gi, '')
    .replace(/Official Video.*/gi, '')
    .trim();
  res = res.replace(/[\s\-\|:]+$/, '').trim();
  return res || a;
}

module.exports = { normalize, cleanTitle, cleanArtist };
