const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Create bhagavath-logo-PLACEHOLDER.svg
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 60" width="320" height="60">
  <defs>
    <linearGradient id="bhLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A2C2A" />
      <stop offset="100%" stop-color="#2C1816" />
    </linearGradient>
    <linearGradient id="bhMustardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0A526" />
      <stop offset="100%" stop-color="#C48E1B" />
    </linearGradient>
  </defs>

  <!-- Stylized 'B' Shield Badge -->
  <rect x="2" y="5" width="50" height="50" rx="14" fill="url(#bhLogoGrad)" stroke="#E0A526" stroke-width="2" />
  
  <!-- 'B' letter in badge with mustard safety dot -->
  <path d="M 17 18 L 29 18 C 34 18 37 20 37 24 C 37 27 35 29 32 30 C 36 31 39 34 39 38 C 39 42 35 44 29 44 L 17 44 Z M 23 23 L 23 28 L 29 28 C 31 28 32 27 32 25.5 C 32 24 31 23 29 23 Z M 23 33 L 23 39 L 30 39 C 32 39 33 38 33 36 C 33 34 32 33 30 33 Z" fill="#FFF4DC" />
  <circle cx="40" cy="14" r="3.5" fill="url(#bhMustardGrad)" />

  <!-- Brand Typography -->
  <text x="64" y="27" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="800" fill="#4A2C2A" letter-spacing="0.5">BHAGAVATH</text>
  <text x="195" y="27" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="800" fill="#E0A526" letter-spacing="0.5">SAFETY</text>
  <text x="64" y="45" font-family="'DM Sans', system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5A3633" letter-spacing="2">NETS &amp; INVISIBLE GRILLS</text>
</svg>`;

// Also light variant for dark footer
const logoLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 60" width="320" height="60">
  <defs>
    <linearGradient id="bhLogoGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A2C2A" />
      <stop offset="100%" stop-color="#2C1816" />
    </linearGradient>
    <linearGradient id="bhMustardGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0A526" />
      <stop offset="100%" stop-color="#C48E1B" />
    </linearGradient>
  </defs>

  <!-- Stylized 'B' Shield Badge -->
  <rect x="2" y="5" width="50" height="50" rx="14" fill="#E0A526" />
  
  <!-- 'B' letter in badge with espresso fill -->
  <path d="M 17 18 L 29 18 C 34 18 37 20 37 24 C 37 27 35 29 32 30 C 36 31 39 34 39 38 C 39 42 35 44 29 44 L 17 44 Z M 23 23 L 23 28 L 29 28 C 31 28 32 27 32 25.5 C 32 24 31 23 29 23 Z M 23 33 L 23 39 L 30 39 C 32 39 33 38 33 36 C 33 34 32 33 30 33 Z" fill="#2C1816" />
  <circle cx="40" cy="14" r="3.5" fill="#FFF4DC" />

  <!-- Brand Typography -->
  <text x="64" y="27" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">BHAGAVATH</text>
  <text x="195" y="27" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="800" fill="#E0A526" letter-spacing="0.5">SAFETY</text>
  <text x="64" y="45" font-family="'DM Sans', system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#FAF5ED" letter-spacing="2">NETS &amp; INVISIBLE GRILLS</text>
</svg>`;

// Icon SVG (512x512)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bIconEspresso" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A2C2A" />
      <stop offset="100%" stop-color="#2C1816" />
    </linearGradient>
    <linearGradient id="bIconMustard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0A526" />
      <stop offset="100%" stop-color="#C48E1B" />
    </linearGradient>
  </defs>

  <!-- Background Squircle in Espresso -->
  <rect x="16" y="16" width="480" height="480" rx="128" fill="url(#bIconEspresso)" stroke="url(#bIconMustard)" stroke-width="16" />

  <!-- Monogram 'B' in Cream & Mustard -->
  <path d="M 160 120 L 260 120 C 310 120 350 145 350 190 C 350 220 330 245 295 256 C 345 268 375 298 375 345 C 375 395 330 420 260 420 L 160 420 Z M 215 170 L 215 235 L 260 235 C 285 235 300 225 300 202.5 C 300 180 285 170 260 170 Z M 215 285 L 215 370 L 265 370 C 290 370 315 355 315 327.5 C 315 300 290 285 265 285 Z" fill="#FFF4DC" />
  <circle cx="390" cy="110" r="32" fill="url(#bIconMustard)" />
</svg>`;

// Open Graph Image SVG (1200x630)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogEspresso" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2C1816" />
      <stop offset="50%" stop-color="#4A2C2A" />
      <stop offset="100%" stop-color="#3B211F" />
    </linearGradient>
    <linearGradient id="ogMustard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0A526" />
      <stop offset="100%" stop-color="#C48E1B" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#ogEspresso)" />
  
  <!-- Subtle decorative grid / border -->
  <rect x="30" y="30" width="1140" height="570" rx="36" fill="none" stroke="#E0A526" stroke-width="2" opacity="0.4" />

  <!-- Badge Monogram -->
  <rect x="80" y="80" width="100" height="100" rx="28" fill="url(#ogMustard)" />
  <path d="M 108 102 L 134 102 C 145 102 153 107 153 118 C 153 125 148 130 142 133 C 152 135 158 142 158 152 C 158 163 148 168 134 168 L 108 168 Z M 120 113 L 120 127 L 134 127 C 139 127 142 125 142 120 C 142 115 139 113 134 113 Z M 120 137 L 120 157 L 134 157 C 140 157 146 154 146 147 C 146 140 140 137 134 137 Z" fill="#2C1816" />

  <!-- Brand Title -->
  <text x="210" y="132" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF" letter-spacing="1">BHAGAVATH</text>
  <text x="530" y="132" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="44" font-weight="800" fill="#E0A526" letter-spacing="1">SAFETY NETS</text>
  <text x="210" y="166" font-family="'DM Sans', system-ui, sans-serif" font-size="20" font-weight="600" fill="#FFF4DC" letter-spacing="3">BENGALURU, KARNATAKA</text>

  <!-- Tagline / Value Proposition -->
  <text x="80" y="280" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="48" font-weight="800" fill="#FFFFFF" letter-spacing="-0.5">Balcony Safety Nets, SS316</text>
  <text x="80" y="340" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="48" font-weight="800" fill="#E0A526" letter-spacing="-0.5">Invisible Grills &amp; Cloth Hangers</text>

  <text x="80" y="410" font-family="'DM Sans', system-ui, sans-serif" font-size="24" font-weight="400" fill="#FAF5ED">High-rise perimeter fall protection &amp; pigeon exclusion across Bengaluru</text>

  <!-- Feature Pills -->
  <rect x="80" y="470" width="260" height="56" rx="28" fill="#FFF4DC" opacity="0.15" />
  <rect x="80" y="470" width="260" height="56" rx="28" fill="none" stroke="#E0A526" stroke-width="1.5" />
  <text x="110" y="506" font-family="'DM Sans', system-ui, sans-serif" font-size="20" font-weight="700" fill="#FFF4DC">10-Year Warranty</text>

  <rect x="360" y="470" width="280" height="56" rx="28" fill="#FFF4DC" opacity="0.15" />
  <rect x="360" y="470" width="280" height="56" rx="28" fill="none" stroke="#E0A526" stroke-width="1.5" />
  <text x="390" y="506" font-family="'DM Sans', system-ui, sans-serif" font-size="20" font-weight="700" fill="#FFF4DC">Free Doorstep Visit</text>

  <rect x="660" y="470" width="310" height="56" rx="28" fill="#FFF4DC" opacity="0.15" />
  <rect x="660" y="470" width="310" height="56" rx="28" fill="none" stroke="#E0A526" stroke-width="1.5" />
  <text x="690" y="506" font-family="'DM Sans', system-ui, sans-serif" font-size="20" font-weight="700" fill="#FFF4DC">SS316 Marine Cable</text>

  <!-- Contact Line -->
  <text x="80" y="575" font-family="'DM Sans', system-ui, sans-serif" font-size="22" font-weight="700" fill="#E0A526">Call / WhatsApp: +91 99005 52179 | bhagavathsafetynets.com</text>
</svg>`;

async function main() {
  const logoDir = path.join(__dirname, '../public/images/logo');
  if (!fs.existsSync(logoDir)) fs.mkdirSync(logoDir, { recursive: true });

  // Write SVG logo placeholders
  fs.writeFileSync(path.join(logoDir, 'bhagavath-logo-PLACEHOLDER.svg'), logoSvg, 'utf8');
  fs.writeFileSync(path.join(logoDir, 'bhagavath-safety-nets-logo-light.svg'), logoLightSvg, 'utf8');
  console.log('✓ Created bhagavath-logo-PLACEHOLDER.svg & light variant');

  // Convert iconSvg to png (512x512) and (180x180) and (32x32)
  const iconBuffer = Buffer.from(iconSvg);

  // 1. icon.png (512x512)
  await sharp(iconBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/icon.png'));
  console.log('✓ Created public/icon.png (512x512)');

  // 2. apple-icon.png (180x180)
  await sharp(iconBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-icon.png'));
  console.log('✓ Created public/apple-icon.png (180x180)');

  // 3. favicon-32x32.png and favicon.ico
  const fav32Buffer = await sharp(iconBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), fav32Buffer);
  console.log('✓ Created public/favicon.ico (32x32)');

  // Also write SVG icon for modern browsers
  fs.writeFileSync(path.join(__dirname, '../public/icon.svg'), iconSvg, 'utf8');
  console.log('✓ Updated public/icon.svg');

  // 4. Generate og-image.webp (1200x630)
  const ogBuffer = Buffer.from(ogSvg);
  await sharp(ogBuffer)
    .resize(1200, 630)
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, '../public/images/og-image.webp'));
  console.log('✓ Generated public/images/og-image.webp (1200x630)');
}

main().catch(console.error);

