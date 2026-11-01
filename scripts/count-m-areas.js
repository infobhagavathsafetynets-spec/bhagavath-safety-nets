const fs = require('fs');
const path = require('path');

const M_DIR = path.resolve(__dirname, '..', '..', 'Manikanta-Safety-Solutions');

const mAreasContent = fs.readFileSync(path.join(M_DIR, 'src/utils/areasData.ts'), 'utf8');
const matches = [...mAreasContent.matchAll(/"([a-z0-9-]+)":\s*\{\s*name:\s*"([^"]+)"/g)];
console.log('Total Manikanta Areas in localTraits:', matches.length);
matches.forEach((m, i) => console.log(`${i+1}. ${m[1]} (${m[2]})`));

