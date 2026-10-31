const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// 1. Check all page files
const pageFiles = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/gallery/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-and-conditions/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/safety-nets/page.tsx',
  'src/app/services/invisible-grills/page.tsx',
  'src/app/services/cloth-hangers/page.tsx',
  'src/app/services/[service]/page.tsx',
  'src/app/areas/page.tsx',
  'src/app/areas/[area]/page.tsx',
  'src/app/not-found.tsx',
];

console.log('='.repeat(70));
console.log('SEO METADATA & CONTENT AUDIT');
console.log('='.repeat(70));

let issues = [];

// Check servicesData metadata
const servicesDataPath = path.join(ROOT, 'src/utils/servicesData.ts');
if (fs.existsSync(servicesDataPath)) {
  const content = fs.readFileSync(servicesDataPath, 'utf8');
  // Check for services title/desc lengths
}

// Check areasData metadata
const areasDataPath = path.join(ROOT, 'src/utils/areasData.ts');
if (fs.existsSync(areasDataPath)) {
  const content = fs.readFileSync(areasDataPath, 'utf8');
}

// Check footer links
const footerPath = path.join(ROOT, 'src/components/navigation/Footer.tsx');
if (fs.existsSync(footerPath)) {
  const footerContent = fs.readFileSync(footerPath, 'utf8');
  const hasPrivacy = footerContent.includes('/privacy-policy');
  const hasTerms = footerContent.includes('/terms-and-conditions');
  console.log(`Footer Privacy Policy Link: ${hasPrivacy ? '✅' : '❌'}`);
  console.log(`Footer Terms & Conditions Link: ${hasTerms ? '✅' : '❌'}`);
  if (!hasPrivacy) issues.push('Footer missing /privacy-policy');
  if (!hasTerms) issues.push('Footer missing /terms-and-conditions');
}

// Check for unwanted keywords
function searchKeyword(keyword) {
  const matches = [];
  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!['.next', 'node_modules', '.git'].includes(entry.name)) {
          scan(full);
        }
      } else if (/\.(tsx|ts|js|jsx|json|md|html)$/.test(entry.name)) {
        const text = fs.readFileSync(full, 'utf8');
        if (text.toLowerCase().includes(keyword.toLowerCase())) {
          matches.push(full.replace(ROOT, ''));
        }
      }
    }
  }
  scan(path.join(ROOT, 'src'));
  return matches;
}

const manikantaMatches = searchKeyword('manikanta');
console.log(`Zero 'Manikanta' in src/: ${manikantaMatches.length === 0 ? '✅' : '❌ (' + manikantaMatches.join(', ') + ')'}`);

const loremMatches = searchKeyword('lorem ipsum');
console.log(`Zero 'Lorem ipsum' in src/: ${loremMatches.length === 0 ? '✅' : '❌'}`);

const todoMatches = searchKeyword('TODO');
console.log(`Zero 'TODO' in src/: ${todoMatches.length === 0 ? '✅' : '❌'}`);

// Check favicon and icon files
const iconFiles = [
  'public/favicon.ico',
  'public/icon.png',
  'public/icon.svg',
  'public/apple-icon.png',
  'src/app/favicon.ico',
];
console.log('\nIcon & Favicon files:');
iconFiles.forEach(f => {
  const exists = fs.existsSync(path.join(ROOT, f));
  console.log(`  ${f}: ${exists ? 'EXISTS' : 'NOT FOUND'}`);
});

// Check robots.txt and sitemap
const robotsPath = path.join(ROOT, 'src/app/robots.ts');
const publicRobots = path.join(ROOT, 'public/robots.txt');
const sitemapPath = path.join(ROOT, 'src/app/sitemap.ts');
console.log(`\nrobots.ts: ${fs.existsSync(robotsPath) ? '✅' : '❌'}`);
console.log(`public/robots.txt: ${fs.existsSync(publicRobots) ? '✅' : '❌'}`);
console.log(`sitemap.ts: ${fs.existsSync(sitemapPath) ? '✅' : '❌'}`);

console.log('='.repeat(70));

