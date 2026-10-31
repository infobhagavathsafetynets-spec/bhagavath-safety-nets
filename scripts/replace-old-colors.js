const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /#0D5C5C/gi, replacement: '#4A2C2A' },
  { regex: /#063333/gi, replacement: '#2C1816' },
  { regex: /#1B6868/gi, replacement: '#6B4340' },
  { regex: /#094747/gi, replacement: '#2C1816' },
  { regex: /#E8972F/gi, replacement: '#E0A526' },
  { regex: /#F5B054/gi, replacement: '#D4951E' },
  { regex: /#F0F7F7/gi, replacement: '#FFF4DC' },
  { regex: /#B2DCDC/gi, replacement: '#E8D5B5' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (/\.(tsx?|jsx?|css|html|json)$/i.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated colors in: ${fullPath}`);
      }
    }
  }
}

console.log('Replacing old teal & amber colors in src/...');
processDir(path.join(__dirname, '..', 'src'));
console.log('Replacement complete.');

