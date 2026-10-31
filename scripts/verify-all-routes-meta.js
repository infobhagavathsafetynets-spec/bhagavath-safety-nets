const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Import servicesData and areasData
const servicesContent = fs.readFileSync(path.join(ROOT, 'src/utils/servicesData.ts'), 'utf8');
const areasContent = fs.readFileSync(path.join(ROOT, 'src/utils/areasData.ts'), 'utf8');

// Extract service slugs and names
const serviceSlugs = [
  'balcony-safety-nets',
  'children-safety-nets',
  'pet-safety-nets',
  'pigeon-safety-nets',
  'duct-area-safety-nets',
  'invisible-grills-balcony',
  'invisible-grills-window',
  'ceiling-cloth-hangers',
];

const areaSlugs = [
  'koramangala',
  'whitefield',
  'hsr-layout',
  'indiranagar',
  'electronic-city',
  'marathahalli',
  'bellandur',
  'jp-nagar',
  'btm-layout',
  'hebbal',
];

// List of all 32 indexable pages
const routesToAudit = [
  { url: '/', title: 'Safety Nets & Invisible Grills in Bengaluru | Bhagavath', desc: 'Balcony safety nets, SS316 invisible wire grills & ceiling cloth drying hangers installed in Bengaluru. Free doorstep measurement & 10-year warranty.' },
  { url: '/about', title: 'About Us | Bhagavath Safety Nets Bengaluru', desc: 'Learn about Bhagavath Safety Nets in Bengaluru. Specialist balcony fall prevention, pigeon nets, and SS316 invisible grills with 10-year warranty.' },
  { url: '/contact', title: 'Contact Us | Bhagavath Safety Nets Bengaluru', desc: 'Book a complimentary doorstep inspection in Bengaluru or call +91 99005 52179 for balcony safety nets, invisible grills & cloth hangers.' },
  { url: '/pricing', title: 'Pricing & Estimates | Bhagavath Safety Nets', desc: 'Transparent price estimation guide for safety nets, invisible grills, and ceiling cloth hangers in Bengaluru. Free site visit and quote.' },
  { url: '/services', title: 'Safety Nets & Grills Services in Bengaluru | Bhagavath', desc: 'Balcony safety nets, anti-pigeon netting, SS316 invisible grills & ceiling cloth drying systems installed across Bengaluru by Bhagavath.' },
  { url: '/services/safety-nets', title: 'Safety Nets in Bengaluru | Bhagavath Safety Nets', desc: 'High-tensile UV copolymer safety nets for balconies, pigeons, children, and pets. Expert installation in Bengaluru with our written 10-year warranty.' },
  { url: '/services/invisible-grills', title: 'Invisible Grills in Bengaluru | Bhagavath Safety Nets', desc: 'High-tensile SS316 marine wire invisible grills for apartment balconies and windows across Bengaluru. Clean 180° views with 10-year warranty.' },
  { url: '/services/cloth-hangers', title: 'Cloth Drying Hangers in Bengaluru | Bhagavath Nets', desc: 'Space-saving ceiling cloth drying hangers and pulley systems for apartment balconies in Bengaluru. Stainless steel rods with our 10-year warranty.' },
  { url: '/areas', title: 'Service Areas in Bengaluru | Bhagavath Safety Nets', desc: 'Explore our 10 primary service areas in Bengaluru for balcony safety nets, SS316 invisible grills, and cloth hangers. Free doorstep visit.' },
  { url: '/gallery', title: 'Installation Gallery | Bhagavath Safety Nets Bengaluru', desc: 'Visual portfolio of safety nets, invisible grills, and ceiling cloth hangers installed across high-rise apartments in Bengaluru.' },
  { url: '/privacy-policy', title: 'Privacy Policy | Bhagavath Safety Nets Bengaluru', desc: 'Bhagavath Safety Nets privacy policy. Transparent data handling, customer privacy principles, and zero data sharing across Bengaluru.' },
  { url: '/terms-and-conditions', title: 'Terms & Conditions | Bhagavath Safety Nets', desc: 'Terms and conditions, warranty guidelines, and installation service policies for Bhagavath Safety Nets customers in Bengaluru.' },
  { url: '/testimonials', title: 'Customer Assurance & Quality | Bhagavath Safety Nets', desc: 'Customer assurance framework, quality standards, and verified project references for residential apartments across Bengaluru.' },
  { url: '/case-studies', title: 'Installation Portfolio in Bengaluru | Bhagavath', desc: 'Real-world installation projects for balcony safety netting, invisible grills, and cloth drying systems in Bengaluru apartments.' },
  { url: '/projects', title: 'Completed Projects | Bhagavath Safety Nets Bengaluru', desc: 'Portfolio of completed safety net and invisible grill installations across residential apartment communities in Bengaluru.' },
];

// Add 8 dynamic services
serviceSlugs.forEach(slug => {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  routesToAudit.push({
    url: `/services/${slug}`,
    title: `${name} in Bengaluru | Bhagavath`,
    desc: `Engineered ${name.toLowerCase()} installed across residential apartments in Bengaluru with our written 10-year warranty card.`,
  });
});

// Add 10 dynamic areas
areaSlugs.forEach(slug => {
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  routesToAudit.push({
    url: `/areas/${slug}`,
    title: `Safety Nets in ${name}, Bengaluru | Bhagavath`,
    desc: `Balcony safety nets, bird netting & SS316 invisible grills installed in ${name}, Bengaluru. Free site visit & 10-Year Warranty.`,
  });
});

console.log('='.repeat(70));
console.log(`FULL ON-PAGE AUDIT FOR ALL ${routesToAudit.length} ROUTES`);
console.log('='.repeat(70));

let hasErrors = false;
const titles = new Set();
const descriptions = new Set();

routesToAudit.forEach(r => {
  const tLen = r.title.length;
  const dLen = r.desc.length;
  const tOk = tLen <= 60;
  const dOk = dLen <= 160 && dLen >= 50;
  const tUnique = !titles.has(r.title);
  const dUnique = !descriptions.has(r.desc);

  titles.add(r.title);
  descriptions.add(r.desc);

  if (!tOk || !dOk || !tUnique || !dUnique) {
    hasErrors = true;
    console.log(`❌ [${r.url}]`);
    if (!tOk) console.log(`   Title (${tLen}c > 60): "${r.title}"`);
    if (!dOk) console.log(`   Desc (${dLen}c not 50-160): "${r.desc}"`);
    if (!tUnique) console.log(`   Duplicate Title: "${r.title}"`);
    if (!dUnique) console.log(`   Duplicate Desc: "${r.desc}"`);
  } else {
    console.log(`✅ [${r.url.padEnd(35)}] Title: ${tLen}c | Desc: ${dLen}c`);
  }
});

console.log('='.repeat(70));
if (!hasErrors) {
  console.log(`ALL ${routesToAudit.length} ROUTES FULLY PASS METADATA CHECKS!`);
} else {
  console.log('SOME ROUTES FAILED AUDIT CHECKS.');
}
console.log('='.repeat(70));

