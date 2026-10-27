const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const copyItems = [
  'index.html',
  'css',
  'js',
  'fonts',
  'images',
  'media',
  'tilda-popup-1.1.min.css',
  'tilda-stat-1.0.min.js',
  'tilda-variant-select-1.0.min.js'
];

for (const item of copyItems) {
  const src = path.join(__dirname, item);
  const dest = path.join(distDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
  }
}

console.log('✓ Build complete! All assets bundled to dist/ for publishing.');
