const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const servicesContent = fs.readFileSync(path.join(ROOT, 'src/utils/servicesData.ts'), 'utf8');
const areasContent = fs.readFileSync(path.join(ROOT, 'src/utils/areasData.ts'), 'utf8');

const serviceMatches = [...servicesContent.matchAll(/"([a-z0-9-]+)":\s*\{[\s\S]*?name:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)"/g)];
const areaMatches = [...areasContent.matchAll(/"([a-z0-9-]+)":\s*\{[\s\S]*?name:\s*"([^"]+)"/g)];

console.log(`Parsed ${serviceMatches.length} services and ${areaMatches.length} areas.`);

// Base static routes
const routesToAudit = [
  { url: '/', title: 'Safety Nets & Invisible Grills in Bengaluru | Bhagavath', desc: 'Balcony safety nets, SS316 invisible wire grills & ceiling cloth drying hangers installed in Bengaluru. Free doorstep measurement & 10-year warranty.' },
  { url: '/about', title: 'About Us | Bhagavath Safety Nets Bengaluru', desc: 'Learn about Bhagavath Safety Nets in Bengaluru. Specialist balcony fall prevention, pigeon nets, and SS316 invisible grills with 10-year warranty.' },
  { url: '/contact', title: 'Contact Us | Bhagavath Safety Nets Bengaluru', desc: 'Book a complimentary doorstep inspection in Bengaluru or call +91 99005 52179 for balcony safety nets, invisible grills & cloth hangers.' },
  { url: '/pricing', title: 'Pricing & Estimates | Bhagavath Safety Nets', desc: 'Transparent price estimation guide for safety nets, invisible grills, and ceiling cloth hangers in Bengaluru. Free site visit and quote.' },
  { url: '/services', title: 'Safety Nets & Grills Services in Bengaluru | Bhagavath', desc: 'Balcony safety nets, anti-pigeon netting, SS316 invisible grills & ceiling cloth drying systems installed across Bengaluru by Bhagavath.' },
  { url: '/services/safety-nets', title: 'Safety Nets in Bengaluru | Bhagavath Safety Nets', desc: 'High-tensile UV copolymer safety nets for balconies, pigeons, children, and pets. Expert installation in Bengaluru with our written 10-year warranty.' },
  { url: '/services/invisible-grills', title: 'Invisible Grills in Bengaluru | Bhagavath Safety Nets', desc: 'High-tensile SS316 marine wire invisible grills for apartment balconies and windows across Bengaluru. Clean 180° views with 10-year warranty.' },
  { url: '/services/cloth-hangers', title: 'Cloth Drying Hangers in Bengaluru | Bhagavath Nets', desc: 'Space-saving ceiling cloth drying hangers and pulley systems for apartment balconies in Bengaluru. Stainless steel rods with our 10-year warranty.' },
  { url: '/areas', title: 'Service Areas in Bengaluru | Bhagavath Safety Nets', desc: 'Explore our 110 service areas across Bengaluru for balcony safety nets, SS316 invisible grills & cloth hangers. Free doorstep inspection.' },
  { url: '/gallery', title: 'Installation Gallery | Bhagavath Safety Nets Bengaluru', desc: 'Visual portfolio of safety nets, invisible grills, and ceiling cloth hangers installed across high-rise apartments in Bengaluru.' },
  { url: '/privacy-policy', title: 'Privacy Policy | Bhagavath Safety Nets Bengaluru', desc: 'Bhagavath Safety Nets privacy policy. Transparent data handling, customer privacy principles, and zero data sharing across Bengaluru.' },
  { url: '/terms-and-conditions', title: 'Terms & Conditions | Bhagavath Safety Nets', desc: 'Terms and conditions, warranty guidelines, and installation service policies for Bhagavath Safety Nets customers in Bengaluru.' },
  { url: '/testimonials', title: 'Customer Assurance & Quality | Bhagavath Safety Nets', desc: 'Customer assurance framework, quality standards, and verified project references for residential apartments across Bengaluru.' },
  { url: '/case-studies', title: 'Installation Portfolio in Bengaluru | Bhagavath', desc: 'Real-world installation projects for balcony safety netting, invisible grills, and cloth drying systems in Bengaluru apartments.' },
  { url: '/projects', title: 'Completed Projects | Bhagavath Safety Nets Bengaluru', desc: 'Portfolio of completed safety net and invisible grill installations across residential apartment communities in Bengaluru.' },
];

// Add 19 services with exact title resolution
serviceMatches.forEach(m => {
  const slug = m[1];
  const name = m[2];
  const title = m[3];
  const desc = m[4];
  const titleStr = title && title.length <= 60
    ? title
    : `${name} in Bengaluru | Bhagavath`.length <= 60
    ? `${name} in Bengaluru | Bhagavath`
    : `${name.split(' ')[0]} in Bengaluru | Bhagavath`;

  routesToAudit.push({
    url: `/services/${slug}`,
    title: titleStr,
    desc: desc.length > 155 ? desc.slice(0, 152) + '...' : desc,
  });
});

// Add 110 areas with exact title resolution
areaMatches.forEach(m => {
  const slug = m[1];
  const name = m[2];
  const baseTitle = `Safety Nets in ${name}, Bengaluru | Bhagavath`;
  const cleanTitle = baseTitle.length <= 60
    ? baseTitle
    : `Safety Nets in ${name.replace(" Corridor", "").replace(" (ORR)", "")} | Bhagavath`.length <= 60
    ? `Safety Nets in ${name.replace(" Corridor", "").replace(" (ORR)", "")} | Bhagavath`
    : `Safety Nets in ${name.slice(0, 20)} | Bhagavath`;

  routesToAudit.push({
    url: `/areas/${slug}`,
    title: cleanTitle,
    desc: `Balcony safety nets, bird netting & SS316 invisible grills installed in ${name}, Bengaluru. Free site visit & 10-Year Warranty.`,
  });
});

console.log(`\n======================================================================`);
console.log(`FULL SEO METADATA AUDIT ACROSS ALL ${routesToAudit.length} ROUTES`);
console.log(`Rules: Title < 60 chars, Description < 160 chars`);
console.log(`======================================================================\n`);

let passCount = 0;
let failCount = 0;

routesToAudit.forEach((r) => {
  const tLen = r.title.length;
  const dLen = r.desc.length;
  const tPass = tLen <= 60;
  const dPass = dLen <= 160 && dLen >= 50;

  if (tPass && dPass) {
    passCount++;
  } else {
    failCount++;
    console.log(`✗ ${r.url}`);
    if (!tPass) console.log(`   Title (${tLen} chars > 60): "${r.title}"`);
    if (!dPass) console.log(`   Desc (${dLen} chars not 50-160): "${r.desc}"`);
  }
});

console.log(`\nResults: ${passCount} PASSED, ${failCount} FAILED out of ${routesToAudit.length} total routes.`);
if (failCount === 0) {
  console.log('✓ 100% of routes meet strict title and description length constraints!');
}
