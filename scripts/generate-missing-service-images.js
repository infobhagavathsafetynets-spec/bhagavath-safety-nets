const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const M_DIR = path.resolve('..', 'Manikanta-Safety-Solutions');
const outDir = path.resolve('public', 'images', 'bhagavath');

// Let's plan the new images to generate for Bhagavath
const newImageTasks = [
  // 1. Monkey Safety Nets
  {
    target: 'bhagavath-monkey-safety-net-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/monkey-safety-nets-real.jpg'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  {
    target: 'bhagavath-monkey-safety-net-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/main-images/monkey-safety.webp'),
    crop: { widthRatio: 0.92, heightRatio: 0.92 }
  },
  // 2. Cricket Practice Nets
  {
    target: 'bhagavath-cricket-net-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/cricket-practice-net.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  {
    target: 'bhagavath-cricket-net-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/materials/BoxCricketnet.jpeg'),
    crop: { widthRatio: 0.95, heightRatio: 0.95 }
  },
  // 3. Sports Netting
  {
    target: 'bhagavath-sports-net-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/main-images/Sports-Nets-3.jpg'),
    crop: { widthRatio: 0.92, heightRatio: 0.92 }
  },
  {
    target: 'bhagavath-sports-net-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/hero/sports-safety.webp'),
    crop: { widthRatio: 0.95, heightRatio: 0.95 }
  },
  // 4. Construction Safety Nets
  {
    target: 'bhagavath-construction-safety-net-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/materials/FactoryNets.jpeg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  {
    target: 'bhagavath-construction-safety-net-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/hero/constructionnet.webp'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  // 5. Duct Area Safety Nets (we have bhagavath-duct-area-safety-net-bengaluru-1.webp, let's add -2)
  {
    target: 'bhagavath-duct-area-safety-net-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/services/duct-area-2.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  // 6. Anti-Bird Spikes (we have bhagavath-pigeon-spikes-bengaluru-1.webp, let's add bhagavath-anti-bird-spikes-bengaluru-1.webp and -2.webp)
  {
    target: 'bhagavath-anti-bird-spikes-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/bird-spikes-real.jpg'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  {
    target: 'bhagavath-anti-bird-spikes-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/hero/service-spikes.jpg'),
    crop: { widthRatio: 0.92, heightRatio: 0.92 }
  },
  // 7. Mosquito Nets
  {
    target: 'bhagavath-mosquito-net-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/mosquito-net.jpg'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  {
    target: 'bhagavath-mosquito-net-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/main-images/Mosquito-Net.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  // 8. Children Invisible Grills
  {
    target: 'bhagavath-children-invisible-grill-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/shyamchildreninvisiblegrills.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  {
    target: 'bhagavath-children-invisible-grill-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/hero/childrensafetygrill.jpg'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  // 9. Pet Invisible Grills
  {
    target: 'bhagavath-pet-invisible-grill-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/shyampetinvisiblegrills.jpg'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  {
    target: 'bhagavath-pet-invisible-grill-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/materials/pet.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  // 10. Staircase Invisible Grills
  {
    target: 'bhagavath-staircase-invisible-grill-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/Shayamstaircase-grills.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  {
    target: 'bhagavath-staircase-invisible-grill-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/hero/customgrill.jpg'),
    crop: { widthRatio: 0.94, heightRatio: 0.94 }
  },
  // 11. Wall Mounted Cloth Hangers
  {
    target: 'bhagavath-wall-cloth-hanger-bengaluru-1.webp',
    source: path.join(M_DIR, 'public/images/services/cloth-hangers-real.jpg'),
    crop: { widthRatio: 0.93, heightRatio: 0.93 }
  },
  {
    target: 'bhagavath-wall-cloth-hanger-bengaluru-2.webp',
    source: path.join(M_DIR, 'public/images/hero/cloth-hanger2.webp'),
    crop: { widthRatio: 0.95, heightRatio: 0.95 }
  }
];

async function run() {
  for (const item of newImageTasks) {
    const dest = path.join(outDir, item.target);
    if (!fs.existsSync(item.source)) {
      console.warn('Source file missing:', item.source);
      continue;
    }
    try {
      const img = sharp(item.source);
      const meta = await img.metadata();
      const cropW = Math.round(meta.width * item.crop.widthRatio);
      const cropH = Math.round(meta.height * item.crop.heightRatio);
      const left = Math.round((meta.width - cropW) / 2);
      const top = Math.round((meta.height - cropH) / 2);

      await sharp(item.source)
        .extract({ left, top, width: cropW, height: cropH })
        .resize({ width: Math.min(cropW, 1200), withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .withMetadata(false) // strip all EXIF metadata
        .toFile(dest);

      const stat = fs.statSync(dest);
      console.log(`Generated: ${item.target} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`Failed ${item.target}:`, e.message);
    }
  }
}

run();
