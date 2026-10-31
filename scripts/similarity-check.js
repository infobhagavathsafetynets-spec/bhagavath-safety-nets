const fs = require('fs');
const path = require('path');

const BHAGAVATH_DIR = path.resolve(__dirname, '..');
const MANIKANTA_DIR = path.resolve(__dirname, '..', '..', 'Manikanta-Safety-Solutions');

function extractVisibleText(filePath) {
  if (!fs.existsSync(filePath)) return '';
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip 'use client'
  content = content.replace(/["']use client["'];?/g, ' ');

  // Strip imports (single or multi-line)
  content = content.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, ' ');
  content = content.replace(/import\s+['"][^'"]+['"];?/g, ' ');

  // Strip TypeScript interfaces and types
  content = content.replace(/interface\s+\w+[\s\S]*?\{[\s\S]*?\}/g, ' ');
  content = content.replace(/type\s+\w+\s*=[\s\S]*?;/g, ' ');

  // Strip metadata export block (single or multi-line)
  content = content.replace(/export\s+const\s+metadata[\s\S]*?};/g, ' ');
  content = content.replace(/export\s+async\s+function\s+generateMetadata[\s\S]*?^}/gm, ' ');

  // Strip schema generator functions and script tag schemas
  content = content.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  content = content.replace(/const\s+\w+Schema\s*=[\s\S]*?;/g, ' ');

  // Strip JSX/HTML tags
  content = content.replace(/<[^>]+>/g, ' ');

  // Strip JS code keywords and syntax
  content = content.replace(/\b(export|default|function|return|const|let|var|if|else|switch|case|break|typeof|instanceof|async|await|void)\b/g, ' ');
  content = content.replace(/[{}[\]()<>=;:,+*\/\\|&!~`"'$#@%^?_]/g, ' ');

  // Normalize whitespace and lowercase
  return content.toLowerCase().replace(/\s+/g, ' ').trim();
}

function get5WordShingles(text) {
  const words = text.split(/\s+/).filter(w => w.length > 1);
  const shingles = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    const shingle = words.slice(i, i + 5).join(' ');
    shingles.add(shingle);
  }
  return shingles;
}

function getOverlapDetails(shingles1, shingles2) {
  if (shingles1.size === 0) return { overlap: 0, shared: [] };
  const shared = [];
  for (const shingle of shingles1) {
    if (shingles2.has(shingle)) {
      shared.push(shingle);
    }
  }
  return {
    overlap: (shared.length / shingles1.size) * 100,
    shared,
  };
}

const pagesToCheck = [
  { name: 'Homepage (src/app/page.tsx)', bPath: 'src/app/page.tsx', mPath: 'src/app/page.tsx' },
  { name: 'About Page', bPath: 'src/app/about/page.tsx', mPath: 'src/app/about/page.tsx' },
  { name: 'Contact Page', bPath: 'src/app/contact/page.tsx', mPath: 'src/app/contact/page.tsx' },
  { name: 'Pricing Page', bPath: 'src/app/pricing/page.tsx', mPath: 'src/app/pricing/page.tsx' },
  { name: 'Services Hub', bPath: 'src/app/services/page.tsx', mPath: 'src/app/services/page.tsx' },
  { name: 'Safety Nets Hub', bPath: 'src/app/services/safety-nets/page.tsx', mPath: 'src/app/services/safety-nets/page.tsx' },
  { name: 'Invisible Grills Hub', bPath: 'src/app/services/invisible-grills/page.tsx', mPath: 'src/app/services/invisible-grills/page.tsx' },
  { name: 'Cloth Hangers Hub', bPath: 'src/app/services/cloth-hangers/page.tsx', mPath: 'src/app/services/cloth-hangers/page.tsx' },
  { name: 'Areas Hub', bPath: 'src/app/areas/page.tsx', mPath: 'src/app/areas/page.tsx' },
  { name: 'Areas Data', bPath: 'src/utils/areasData.ts', mPath: 'src/utils/areasData.ts' },
  { name: 'Services Data', bPath: 'src/utils/servicesData.ts', mPath: 'src/utils/servicesData.ts' },
  { name: 'Why Choose Us Section', bPath: 'src/components/sections/WhyChooseUs.tsx', mPath: 'src/components/sections/WhyChooseUs.tsx' },
  { name: 'Featured Services Section', bPath: 'src/components/sections/FeaturedServices.tsx', mPath: 'src/components/sections/FeaturedServices.tsx' },
  { name: 'Cost Calculator Section', bPath: 'src/components/sections/CostCalculator.tsx', mPath: 'src/components/sections/CostCalculator.tsx' },
  { name: 'FAQ Accordion Section', bPath: 'src/components/sections/FAQAccordion.tsx', mPath: 'src/components/sections/FAQAccordion.tsx' },
  { name: 'Service Process Template', bPath: 'src/components/sections/service-page/ServiceProcess.tsx', mPath: 'src/components/sections/service-page/ServiceProcess.tsx' },
  { name: 'Service Content Template', bPath: 'src/components/sections/service-page/ServiceContent.tsx', mPath: 'src/components/sections/service-page/ServiceContent.tsx' },
  { name: 'Service Hero Template', bPath: 'src/components/sections/service-page/ServiceHero.tsx', mPath: 'src/components/sections/service-page/ServiceHero.tsx' },
];

console.log('='.repeat(70));
console.log('5-WORD SHINGLE SIMILARITY CHECK: BHAGAVATH vs MANIKANTA');
console.log('Target: Overlap under 10% per page');
console.log('='.repeat(70));

let allPassed = true;

for (const page of pagesToCheck) {
  const bFull = path.join(BHAGAVATH_DIR, page.bPath);
  const mFull = path.join(MANIKANTA_DIR, page.mPath);

  const bText = extractVisibleText(bFull);
  const mText = extractVisibleText(mFull);

  const bShingles = get5WordShingles(bText);
  const mShingles = get5WordShingles(mText);

  const { overlap, shared } = getOverlapDetails(bShingles, mShingles);
  const passed = overlap < 10.0;

  if (!passed) allPassed = false;

  console.log(
    `${passed ? '✓' : '✗'} ${page.name.padEnd(35)} | Overlap: ${overlap.toFixed(2).padStart(6)}% | Bhagavath: ${String(bShingles.size).padStart(4)} shingles | [${passed ? 'PASS' : 'FAIL'}]`
  );

  if (!passed && shared.length > 0) {
    console.log(`   Sample overlapping shingles (showing up to 3):`);
    shared.slice(0, 3).forEach(s => console.log(`     - "${s}"`));
  }
}

console.log('='.repeat(70));
if (allPassed) {
  console.log('SUCCESS: All checked pages have strictly under 10% overlap!');
} else {
  console.log('WARNING: Some pages exceed the 10% threshold and require rewriting.');
}
console.log('='.repeat(70));
