// Run with: node generate-icons.js
// Generates PNG icons from SVG using canvas (requires Node + canvas package)
// If canvas isn't available, the SVG fallback will be used in the browser.

const fs = require('fs');
const path = require('path');

const sizes = [180, 192, 384, 512];

sizes.forEach(size => {
  const r = Math.round(size * 0.23);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="#4F46E5"/>
  <text x="${size/2}" y="${size*0.67}" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,system-ui,sans-serif" font-weight="800" font-size="${size*0.52}" fill="white">W</text>
</svg>`;
  fs.writeFileSync(path.join(__dirname, 'icons', `icon-${size}.svg`), svg);
  console.log(`Generated icon-${size}.svg`);
});

console.log('SVG icons written. Convert to PNG manually or via a build tool.');
