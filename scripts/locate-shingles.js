const fs = require('fs');
const path = require('path');

const bRaw = fs.readFileSync('src/utils/areasData.ts', 'utf8');
const mRaw = fs.readFileSync(path.resolve('..', 'Manikanta-Safety-Solutions', 'src/utils/areasData.ts'), 'utf8');

function clean(text) {
  return text.toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}[\]()<>=;:,+*\/\\|&!~`"'$#@%^?_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const bClean = clean(bRaw);
const mClean = clean(mRaw);

const mWords = mClean.split(/\s+/);
const mShingles = new Set();
for (let i = 0; i <= mWords.length - 5; i++) {
  mShingles.add(mWords.slice(i, i + 5).join(' '));
}

const bWords = bClean.split(/\s+/);
const matchingShingles = new Map();

for (let i = 0; i <= bWords.length - 5; i++) {
  const sh = bWords.slice(i, i + 5).join(' ');
  if (mShingles.has(sh)) {
    matchingShingles.set(sh, (matchingShingles.get(sh) || 0) + 1);
  }
}

console.log('Total unique matching shingles:', matchingShingles.size);
const sorted = [...matchingShingles.entries()].sort((a, b) => b[1] - a[1]);
console.log('Top 30:');
sorted.slice(0, 30).forEach(([sh, count]) => {
  // Find where it occurs in bRaw
  const firstWord = sh.split(' ')[0];
  console.log(`${count}x: "${sh}"`);
});

