const fs = require('fs');
const path = require('path');

const mFile = path.resolve('..', 'Manikanta-Safety-Solutions', 'src', 'utils', 'areasData.ts');
const mContent = fs.readFileSync(mFile, 'utf8');

// match localTraits keys
const traitMatches = [...mContent.matchAll(/"([a-z0-9-]+)":\s*\{\s*name:\s*"([^"]+)",[\s\S]*?localities:\s*\[([^\]]*)\],[\s\S]*?landmarks:\s*\[([^\]]*)\]/g)];
console.log('Parsed trait matches:', traitMatches.length);

if (traitMatches.length > 0) {
  console.log('Sample match 0:', {
    slug: traitMatches[0][1],
    name: traitMatches[0][2],
    localities: traitMatches[0][3].replace(/["\s]/g, '').split(','),
    landmarks: traitMatches[0][4].replace(/["\s]/g, '').split(',')
  });
}
