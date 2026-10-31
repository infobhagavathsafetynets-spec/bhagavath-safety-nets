const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/images/bhagavath');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imagePlan = [
  {
    target: 'bhagavath-balcony-safety-net-bengaluru-1.webp',
    source: 'public/images/hero/balconysafetynet.jpg',
    crop: { widthRatio: 0.95, heightRatio: 0.95 },
  },
  {
    target: 'bhagavath-balcony-safety-net-bengaluru-2.webp',
    source: 'public/images/main-images/balcony-safetynets.webp',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-balcony-safety-net-bengaluru-3.webp',
    source: 'public/images/main-images/balcony-work-real.jpg',
    crop: { widthRatio: 0.94, heightRatio: 0.94 },
  },
  {
    target: 'bhagavath-children-safety-net-bengaluru-1.webp',
    source: 'public/images/hero/childrensafetynet.webp',
    crop: { widthRatio: 0.93, heightRatio: 0.93 },
  },
  {
    target: 'bhagavath-children-safety-net-bengaluru-2.webp',
    source: 'public/images/services/child.webp',
    crop: { widthRatio: 0.95, heightRatio: 0.95 },
  },
  {
    target: 'bhagavath-pet-safety-net-bengaluru-1.webp',
    source: 'public/images/hero/pet.jpg',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-pet-safety-net-bengaluru-2.webp',
    source: 'public/images/services/pet-safetynets-real.jpeg',
    crop: { widthRatio: 0.93, heightRatio: 0.93 },
  },
  {
    target: 'bhagavath-pigeon-safety-net-bengaluru-1.webp',
    source: 'public/images/hero/pigeonnet.jpg',
    crop: { widthRatio: 0.94, heightRatio: 0.94 },
  },
  {
    target: 'bhagavath-pigeon-safety-net-bengaluru-2.webp',
    source: 'public/images/main-images/Duct-Area-3.jpg',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-pigeon-spikes-bengaluru-1.webp',
    source: 'public/images/hero/service-spikes.jpg',
    crop: { widthRatio: 0.95, heightRatio: 0.95 },
  },
  {
    target: 'bhagavath-duct-area-safety-net-bengaluru-1.webp',
    source: 'public/images/services/building-duct-pigeon-netting.jpg',
    crop: { widthRatio: 0.93, heightRatio: 0.93 },
  },
  {
    target: 'bhagavath-invisible-grill-balcony-bengaluru-1.webp',
    source: 'public/images/services/shyambalconygrills.jpg',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-invisible-grill-balcony-bengaluru-2.webp',
    source: 'public/images/main-images/Balcony-Grills.jpg',
    crop: { widthRatio: 0.94, heightRatio: 0.94 },
  },
  {
    target: 'bhagavath-invisible-grill-window-bengaluru-1.webp',
    source: 'public/images/main-images/window-grills-real.webp',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-invisible-grill-window-bengaluru-2.webp',
    source: 'public/images/hero/windowgrill.webp',
    crop: { widthRatio: 0.95, heightRatio: 0.95 },
  },
  {
    target: 'bhagavath-ceiling-cloth-hanger-bengaluru-1.webp',
    source: 'public/images/main-images/cloth-Hangers3.jpg',
    crop: { widthRatio: 0.93, heightRatio: 0.93 },
  },
  {
    target: 'bhagavath-ceiling-cloth-hanger-bengaluru-2.webp',
    source: 'public/images/services/ceiling-cloth-hangers-1.jpg',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-balcony-cloth-hanger-bengaluru-1.webp',
    source: 'public/images/hero/cloth-hanger1.jpg',
    crop: { widthRatio: 0.94, heightRatio: 0.94 },
  },
  {
    target: 'bhagavath-balcony-cloth-hanger-bengaluru-2.webp',
    source: 'public/images/main-images/clothhangerwork2.jpg',
    crop: { widthRatio: 0.92, heightRatio: 0.92 },
  },
  {
    target: 'bhagavath-mesh-material-demo-bengaluru-1.webp',
    source: 'public/images/materials/Balconynetwork.jpeg',
    crop: { widthRatio: 0.94, heightRatio: 0.94 },
  },
  {
    target: 'bhagavath-wire-cable-demo-bengaluru-1.webp',
    source: 'public/images/materials/clothhangerwork.jpeg',
    crop: { widthRatio: 0.93, heightRatio: 0.93 },
  },
  {
    target: 'bhagavath-pulley-hardware-demo-bengaluru-1.webp',
    source: 'public/images/materials/Materials6.jpeg',
    crop: { widthRatio: 0.95, heightRatio: 0.95 },
  },
];

async function processImages() {
  console.log(`Starting image processing for ${imagePlan.length} files...`);
  const results = [];

  for (const item of imagePlan) {
    const srcPath = path.join(__dirname, '..', item.source);
    const destPath = path.join(outDir, item.target);

    if (!fs.existsSync(srcPath)) {
      console.warn(`Source not found: ${srcPath}`);
      continue;
    }

    try {
      const image = sharp(srcPath);
      const meta = await image.metadata();

      const cropWidth = Math.round(meta.width * item.crop.widthRatio);
      const cropHeight = Math.round(meta.height * item.crop.heightRatio);
      const left = Math.round((meta.width - cropWidth) / 2);
      const top = Math.round((meta.height - cropHeight) / 2);

      await sharp(srcPath)
        .extract({ left, top, width: cropWidth, height: cropHeight })
        .resize({ width: Math.min(cropWidth, 1200), withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .withMetadata(false) // Strip EXIF/metadata completely
        .toFile(destPath);

      const destStat = fs.statSync(destPath);
      results.push({
        name: item.target,
        sizeKB: (destStat.size / 1024).toFixed(1),
        original: item.source,
      });
      console.log(`✓ Processed: ${item.target} (${(destStat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error processing ${item.source}:`, err.message);
    }
  }

  // Sort by size descending
  results.sort((a, b) => parseFloat(b.sizeKB) - parseFloat(a.sizeKB));
  console.log('\nTop 5 Largest Images:');
  results.slice(0, 5).forEach((r, i) => {
    console.log(`${i + 1}. ${r.name}: ${r.sizeKB} KB (from ${r.original})`);
  });
}

processImages();
