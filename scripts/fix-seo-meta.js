const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function updateFile(relPath, fn) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) {
    console.log(`[SKIP] ${relPath} not found`);
    return;
  }
  let content = fs.readFileSync(full, 'utf8');
  content = content.replace(/\r\n/g, '\n');
  const updated = fn(content);
  fs.writeFileSync(full, updated, 'utf8');
  console.log(`[UPDATED] ${relPath}`);
}

// 1. Privacy Policy
updateFile('src/app/privacy-policy/page.tsx', c => {
  c = c.replace(/title:\s*"Privacy Policy \|[^"]*"/, `title: {\n    absolute: "Privacy Policy | Bhagavath Safety Nets Bengaluru",\n  }`);
  c = c.replace(/description:\s*"Review Bhagavath Safety Nets[^"]*"/, `description:\n    "Bhagavath Safety Nets privacy policy. Transparent data handling, customer privacy principles, and zero data sharing across Bengaluru."`);
  c = c.replace(/<h1[^>]*>\s*Privacy Policy\s*<\/h1>/, `<h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">\n                Privacy Policy | Bhagavath Safety Nets Bengaluru\n              </h1>`);
  return c;
});

// 2. Terms & Conditions
updateFile('src/app/terms-and-conditions/page.tsx', c => {
  c = c.replace(/title:\s*"Terms & Conditions \|[^"]*"/, `title: {\n    absolute: "Terms & Conditions | Bhagavath Safety Nets",\n  }`);
  c = c.replace(/description:\s*`Official Terms and Conditions[^`]*`/, `description:\n    "Terms and conditions, warranty guidelines, and installation service policies for Bhagavath Safety Nets customers in Bengaluru."`);
  c = c.replace(/<h1[^>]*>[\s\S]*?Terms &amp; Conditions[\s\S]*?<\/h1>/, `<h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">\n                Terms &amp; Conditions | Bhagavath Safety Nets Bengaluru\n              </h1>`);
  return c;
});

// 3. Dynamic Area page
updateFile('src/app/areas/[area]/page.tsx', c => {
  c = c.replace(/const title = `Safety Nets & Invisible Grills in \${areaDetail\.name} \| Bhagavath Safety Nets`;/,
    `const title = { absolute: \`Safety Nets in \${areaDetail.name}, Bengaluru | Bhagavath\` };`);
  c = c.replace(/const description = `Professional balcony safety nets, pigeon protection netting, and SS316 invisible wire grills installed across \${areaDetail\.name}, Bengaluru\. Free doorstep inspection across \${areaDetail\.localities\.slice\(0, 4\)\.join\(", "\)}\.`;/,
    `const description = \`Balcony safety nets, bird netting & SS316 invisible grills installed in \${areaDetail.name}, Bengaluru. Free site visit & \${CLAIMS.warrantyLabel}.\`;`);
  c = c.replace(/<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-heading">[\s\S]*?<\/h1>/,
    `<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-heading">\n              Safety Nets &amp; Invisible Grills in <span className="text-[#E0A526]">{areaDetail.name}</span>, Bengaluru\n            </h1>`);
  return c;
});

// 4. Dynamic Service page
updateFile('src/app/services/[service]/page.tsx', c => {
  c = c.replace(/const title = serviceDetail\.title \|\| `\${serviceDetail\.name} in Bengaluru \| Bhagavath Safety Nets`;/,
    `const title = { absolute: \`\${serviceDetail.name} in Bengaluru | Bhagavath\` };`);
  c = c.replace(/const description = `\${serviceDetail\.description} Professional doorstep installation across Bengaluru by Bhagavath Safety Nets with \${CLAIMS\.warrantyLabel} & 20% discount on new bookings\.`;/,
    `const description = \`\${serviceDetail.description.slice(0, 110)}... Installed in Bengaluru with \${CLAIMS.warrantyLabel}.\`;`);
  return c;
});

// 5. Testimonials page & client
updateFile('src/app/testimonials/page.tsx', c => {
  c = c.replace(/title:\s*"Customer Reviews & Quality Assurance \|[^"]*"/, `title: {\n    absolute: "Customer Assurance & Quality | Bhagavath Safety Nets",\n  }`);
  c = c.replace(/description:\s*"Learn about Bhagavath Safety Nets' commitment[^"]*"/, `description:\n    "Customer assurance framework, quality standards, and verified project references for residential apartments across Bengaluru."`);
  return c;
});
updateFile('src/app/testimonials/TestimonialsClient.tsx', c => {
  c = c.replace(/<h1[^>]*>[\s\S]*?Customer Satisfaction &amp; Standards[\s\S]*?<\/h1>/,
    `<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">\n            Customer Assurance &amp; Quality Standards in Bengaluru\n          </h1>`);
  return c;
});

// 6. Case Studies page & client
updateFile('src/app/case-studies/page.tsx', c => {
  c = c.replace(/title:\s*"Case Studies \|[^"]*"/, `title: {\n    absolute: "Installation Portfolio in Bengaluru | Bhagavath",\n  }`);
  c = c.replace(/description:\s*"Explore case studies & real installation projects[^"]*"/, `description:\n    "Real-world installation projects for balcony safety netting, invisible grills, and cloth drying systems in Bengaluru apartments."`);
  return c;
});
updateFile('src/app/case-studies/CaseStudiesClient.tsx', c => {
  c = c.replace(/<h1[^>]*>[\s\S]*?Installation Case Studies[\s\S]*?<\/h1>/,
    `<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">\n            Installation Projects &amp; Case Studies in Bengaluru\n          </h1>`);
  return c;
});

// 7. Projects page & filter
updateFile('src/app/projects/page.tsx', c => {
  c = c.replace(/title:\s*"Completed Projects \|[^"]*"/, `title: {\n    absolute: "Completed Projects | Bhagavath Safety Nets Bengaluru",\n  }`);
  c = c.replace(/description:\s*"View completed safety net and invisible grill installation projects[^"]*"/, `description:\n    "Portfolio of completed safety net and invisible grill installations across residential apartment communities in Bengaluru."`);
  return c;
});
updateFile('src/app/projects/ProjectsFilterClient.tsx', c => {
  c = c.replace(/<h1[^>]*>[\s\S]*?Our Installation Portfolio[\s\S]*?<\/h1>/,
    `<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">\n            Safety Nets &amp; Invisible Grills Projects in Bengaluru\n          </h1>`);
  return c;
});

// 8. Blog page
updateFile('src/app/blog/page.tsx', c => {
  c = c.replace(/title:\s*"Safety & Childproofing Blog \|[^"]*"/, `title: {\n    absolute: "Safety & Childproofing Blog | Bhagavath Nets",\n  }`);
  c = c.replace(/description:\s*"Expert guides on safety nets, invisible grills[^"]*"/, `description:\n    "Expert guides on balcony safety nets, invisible grills, and bird exclusion for high-rise apartment living in Bengaluru."`);
  return c;
});

// 9. Search page
updateFile('src/app/search/page.tsx', c => {
  c = c.replace(/title:\s*"Search \|[^"]*"/, `title: {\n    absolute: "Search | Bhagavath Safety Nets Bengaluru",\n  }`);
  c = c.replace(/description:\s*"Search across Bhagavath Safety Nets[^"]*"/, `description:\n    "Search balcony safety nets, invisible grills, and cloth hangers across Bengaluru."`);
  if (!c.includes('robots:')) {
    c = c.replace(/alternates:\s*\{[^}]*\},/, `alternates: {\n    canonical: "/search",\n  },\n  robots: {\n    index: false,\n    follow: true,\n  },`);
  }
  return c;
});

console.log('Done fixing SEO metadata and H1 headers!');

