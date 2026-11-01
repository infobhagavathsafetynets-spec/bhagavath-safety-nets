const fs = require('fs');
const path = require('path');

const bContent = fs.readFileSync('src/utils/areasData.ts', 'utf8');
const mContent = fs.readFileSync(path.resolve('..', 'Manikanta-Safety-Solutions', 'src/utils/areasData.ts'), 'utf8');

function clean(text) {
  return text.toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}[\]()<>=;:,+*\/\\|&!~`"'$#@%^?_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const bWords = clean(bContent).split(/\s+/);
const mWords = clean(mContent).split(/\s+/);

const mShingles = new Set();
for (let i = 0; i <= mWords.length - 5; i++) {
  mShingles.add(mWords.slice(i, i + 5).join(' '));
}

const overlapCount = {};
for (let i = 0; i <= bWords.length - 5; i++) {
  const sh = bWords.slice(i, i + 5).join(' ');
  if (mShingles.has(sh)) {
    overlapCount[sh] = (overlapCount[sh] || 0) + 1;
  }
}

const sorted = Object.entries(overlapCount).sort((a, b) => b[1] - a[1]);
console.log('Top 20 overlapping shingles in Areas Data:');
sorted.slice(0, 20).forEach(([sh, count]) => {
  console.log(`${count}x: "${sh}"`);
});
