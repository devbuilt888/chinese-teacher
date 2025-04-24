console.log('Test script is running');
const fs = require('fs');
const path = require('path');

console.log('Current directory:', __dirname);
console.log('Files in root directory:');
fs.readdirSync(__dirname).forEach(file => {
  console.log(' -', file);
});

// Check if the pages directory exists
const pagesDir = path.join(__dirname, 'src', 'pages');
console.log('Pages directory exists:', fs.existsSync(pagesDir));

if (fs.existsSync(pagesDir)) {
  console.log('Files in pages directory:');
  fs.readdirSync(pagesDir).forEach(file => {
    console.log(' -', file);
  });
} 