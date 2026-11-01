const fs = require('fs');
const content = fs.readFileSync('src/utils/servicesData.ts', 'utf8');
const slugs = [...content.matchAll(/"([a-z0-9-]+)":\s*\{[\s\S]*?slug:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Total services:', slugs.length);
slugs.forEach((s, i) => console.log(`${i+1}. ${s}`));

