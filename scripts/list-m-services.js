const fs = require('fs');
const path = require('path');

const M_DIR = path.resolve('..', 'Manikanta-Safety-Solutions');
const content = fs.readFileSync(path.join(M_DIR, 'src/utils/servicesData.ts'), 'utf8');

// parse services list
const serviceBlocks = content.split(/{\s*slug:\s*"/g).slice(1);
console.log('Total services blocks:', serviceBlocks.length);

const services = serviceBlocks.map(block => {
  const slug = block.split('"')[0];
  const nameMatch = block.match(/name:\s*"([^"]+)"/);
  const catMatch = block.match(/category:\s*"([^"]+)"/);
  const imgMatch = block.match(/image:\s*"([^"]+)"/);
  const suppMatch = block.match(/supportingImages:\s*\[([^\]]*)\]/);
  return {
    slug,
    name: nameMatch ? nameMatch[1] : '',
    category: catMatch ? catMatch[1] : '',
    image: imgMatch ? imgMatch[1] : '',
    supportingImages: suppMatch ? suppMatch[1].replace(/[\s"']/g, '').split(',').filter(Boolean) : []
  };
});

console.log(JSON.stringify(services, null, 2));

