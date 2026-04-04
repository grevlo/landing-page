import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const svg = readFileSync('./public/logo-icon.svg');

const size32 = await sharp(svg)
  .resize(32, 32)
  .png()
  .toBuffer();

writeFileSync('./app/favicon.ico', size32);
writeFileSync('./public/favicon.ico', size32);

await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile('./public/apple-touch-icon.png');

console.log('Done');
