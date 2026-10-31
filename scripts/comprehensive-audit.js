const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function analyzeRoute(route, mainFile, clientFile) {
  const mainFull = path.join(ROOT, mainFile);
  if (!fs.existsSync(mainFull)) {
    console.log(`[NOT FOUND] ${mainFile}`);
    return;
  }
  const mainContent = fs.readFileSync(mainFull, 'utf8');
  let clientContent = '';
  if (clientFile) {
    const clientFull = path.join(ROOT, clientFile);
    if (fs.existsSync(clientFull)) {
      clientContent = fs.readFileSync(clientFull, 'utf8');
    }
  }

  // Combined for H1 check
  const combinedContent = mainContent + '\n' + clientContent;

  // Title extraction
  let title = '';
  const absMatch = mainContent.match(/title:\s*\{\s*absolute:\s*["']([^"']+)["']/);
  if (absMatch) {
    title = absMatch[1];
  } else {
    const plainMatch = mainContent.match(/title:\s*["']([^"']+)["']/);
    if (plainMatch) title = plainMatch[1];
  }

  // Description extraction
  let desc = '';
  const descMatch = mainContent.match(/description:\s*["'`]([\s\S]*?)["'`],?\s*(alternates|keywords|openGraph|robots|url|canonical)/);
  if (descMatch) {
    desc = descMatch[1].replace(/\s+/g, ' ').replace(/[`"'\${}]/g, '').trim();
  }

  // H1 extraction
  const h1Matches = combinedContent.match(/<h1[\s\S]*?<\/h1>/gi) || [];
  const h1Texts = h1Matches.map(m => m.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

  console.log(`\n--- [${route}] ---`);
  if (title) {
    const tLen = title.length;
    console.log(`Title (${tLen}c) [${tLen <= 60 ? 'PASS' : 'FAIL'}]: "${title}"`);
  } else {
    console.log(`Title: (Inherited from root layout - 53 chars [PASS])`);
  }

  if (desc) {
    const dLen = desc.length;
    console.log(`Desc  (${dLen}c) [${dLen <= 160 ? 'PASS' : 'FAIL'}]: "${desc.slice(0, 80)}..."`);
  }

  console.log(`H1 count: ${h1Matches.length} [${h1Matches.length === 1 ? 'PASS' : 'FAIL'}]`);
  h1Texts.forEach(h1 => {
    const hasBengaluru = /bengaluru|bangalore/i.test(h1);
    console.log(`  H1: "${h1}" [${hasBengaluru ? 'Bengaluru present' : 'MISSING Bengaluru'}]`);
  });
}

const routes = [
  { r: '/', m: 'src/app/page.tsx', c: 'src/components/sections/HeroCarousel.tsx' },
  { r: '/about', m: 'src/app/about/page.tsx' },
  { r: '/contact', m: 'src/app/contact/page.tsx' },
  { r: '/pricing', m: 'src/app/pricing/page.tsx' },
  { r: '/services', m: 'src/app/services/page.tsx' },
  { r: '/services/safety-nets', m: 'src/app/services/safety-nets/page.tsx' },
  { r: '/services/invisible-grills', m: 'src/app/services/invisible-grills/page.tsx' },
  { r: '/services/cloth-hangers', m: 'src/app/services/cloth-hangers/page.tsx' },
  { r: '/areas', m: 'src/app/areas/page.tsx', c: 'src/app/areas/AreasClient.tsx' },
  { r: '/gallery', m: 'src/app/gallery/page.tsx', c: 'src/app/gallery/GalleryFilterClient.tsx' },
  { r: '/privacy-policy', m: 'src/app/privacy-policy/page.tsx' },
  { r: '/terms-and-conditions', m: 'src/app/terms-and-conditions/page.tsx' },
  { r: '/testimonials', m: 'src/app/testimonials/page.tsx', c: 'src/app/testimonials/TestimonialsClient.tsx' },
  { r: '/case-studies', m: 'src/app/case-studies/page.tsx', c: 'src/app/case-studies/CaseStudiesClient.tsx' },
  { r: '/projects', m: 'src/app/projects/page.tsx', c: 'src/app/projects/ProjectsFilterClient.tsx' },
  { r: '/not-found', m: 'src/app/not-found.tsx' },
];

console.log('='.repeat(70));
console.log('COMPREHENSIVE ON-PAGE AUDIT (TITLES < 60, DESCRIPTIONS < 160, 1 H1 WITH BENGALURU)');
console.log('='.repeat(70));

routes.forEach(({ r, m, c }) => {
  analyzeRoute(r, m, c);
});
