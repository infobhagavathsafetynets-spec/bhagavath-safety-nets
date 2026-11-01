const fs = require('fs');
const path = require('path');

const M_DIR = path.resolve(__dirname, '..', '..', 'Manikanta-Safety-Solutions');
const B_DIR = path.resolve(__dirname, '..');

console.log('='.repeat(70));
console.log('COMPARING MANIKANTA vs BHAGAVATH');
console.log('='.repeat(70));

// Services
const mServicesContent = fs.readFileSync(path.join(M_DIR, 'src/utils/servicesData.ts'), 'utf8');
const bServicesContent = fs.readFileSync(path.join(B_DIR, 'src/utils/servicesData.ts'), 'utf8');

const mServiceMatches = [...mServicesContent.matchAll(/"([a-z0-9-]+)":\s*\{\s*slug:\s*"([^"]+)"/g)].map(m => m[1]);
const bServiceMatches = [...bServicesContent.matchAll(/"([a-z0-9-]+)":\s*\{\s*slug:\s*"([^"]+)"/g)].map(m => m[1]);

console.log(`\nServices Count:`);
console.log(`  Manikanta: ${mServiceMatches.length}`);
console.log(`  Bhagavath: ${bServiceMatches.length}`);

console.log(`\nManikanta Services:`);
mServiceMatches.forEach((s, i) => console.log(`  ${i+1}. ${s}`));

// Areas
const mAreasContent = fs.readFileSync(path.join(M_DIR, 'src/utils/areasData.ts'), 'utf8');
const bAreasContent = fs.readFileSync(path.join(B_DIR, 'src/utils/areasData.ts'), 'utf8');

const mAreaMatches = [...mAreasContent.matchAll(/"([a-z0-9-]+)":\s*\{\s*slug:\s*"([^"]+)"/g)].map(m => m[1]);
const bAreaMatches = [...bAreasContent.matchAll(/"([a-z0-9-]+)":\s*\{\s*slug:\s*"([^"]+)"/g)].map(m => m[1]);

console.log(`\nAreas Count:`);
console.log(`  Manikanta: ${mAreaMatches.length}`);
console.log(`  Bhagavath: ${bAreaMatches.length}`);

console.log(`\nManikanta Areas:`);
mAreaMatches.forEach((a, i) => console.log(`  ${i+1}. ${a}`));

// Check Images in Manikanta services
console.log(`\nManikanta Service Images:`);
const mImages = [...mServicesContent.matchAll(/image:\s*"([^"]+)"/g)].map(m => m[1]);
mImages.forEach((img, i) => console.log(`  ${mServiceMatches[i] || i}: ${img}`));

console.log('='.repeat(70));
