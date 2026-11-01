const fs = require('fs');
const content = fs.readFileSync('src/utils/areasData.ts', 'utf8');
const slugs = [...content.matchAll(/"([a-z0-9-]+)":\s*\{[\s\S]*?name:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Total areas parsed:', slugs.length);
console.log('First 5:', slugs.slice(0, 5));
console.log('Last 5:', slugs.slice(-5));

// Check if Manikanta is mentioned anywhere
const manikantaMatches = [...content.matchAll(/manikanta/gi)];
console.log('Manikanta mentions:', manikantaMatches.length);

