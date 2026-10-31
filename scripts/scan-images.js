const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles('./src');
const imageMap = {};
const imgRegex = /["'](\/(?:images|hero|main-images|services)[^"']+\.(?:jpg|jpeg|png|webp|svg))["']/g;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const img = match[1];
    if (!imageMap[img]) imageMap[img] = [];
    imageMap[img].push(f);
  }
});

console.log('Total referenced images:', Object.keys(imageMap).length);
for (const [img, refFiles] of Object.entries(imageMap)) {
  console.log(img, '-> referenced in', refFiles.length, 'files');
}

