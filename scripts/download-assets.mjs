import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, '..', 'public', 'images');
mkdirSync(BASE, { recursive: true });

const IMAGES = [
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/481-luke-renner-logo-15885549844261.png?v=1588624851',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/1175-startup-marketing-consultant-17.jpg?v=1613758499',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/206326401138-startup-marketing-consultant-4.jpg?v=1613758288',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfry83.png?v=1588632002',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfqw3q.png?v=1588632002',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfksu3.png?v=1589559208',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfnfbj.png?v=1588632002',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfjdb1.png?v=1588632002',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfm3hh.png?v=1588632002',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/391-smartmockupsk9qfkdal.png?v=1589559193',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/432-manceps.png?v=1588482726',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/431-jcc-bowers.png?v=1588482731',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/430-steelhouse.png?v=1588482563',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/433-propelx.png?v=1588482745',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/434-deherbs-15884826158034.png?v=1588482751',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/435-gary-germer.png?v=1588482755',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/250589640612-startup-marketing-consultant-14-15886373848755.jpg?v=1613758296',
  'https://static.ucraft.net/fs/ucraft/userFiles/renneragency/images/r168-startup-marketing-consultant-17.jpg?v=1589300079',
];

async function download(url) {
  const filename = url.split('/').pop().split('?')[0];
  const dest = path.join(BASE, filename);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await pipeline(res.body, createWriteStream(dest));
    console.log(`✓ ${filename}`);
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`);
  }
}

// Download 4 at a time
for (let i = 0; i < IMAGES.length; i += 4) {
  await Promise.all(IMAGES.slice(i, i + 4).map(download));
}
console.log('Done.');
