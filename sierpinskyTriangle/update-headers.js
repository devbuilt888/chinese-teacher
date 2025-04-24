/**
 * Update Header Opacity Script - Simplified
 */

const fs = require('fs');
const path = require('path');

// List of all the fractal pages to update
const pagesToUpdate = [
  'adjacent-restriction.html',
  'adjacency-mover.html',
  'barnsley-fern.html',
  'burning-ship.html',
  'fractal-page-template.html',
  'julia-set.html',
  'koch-snowflake.html',
  'lyapunov-fractal.html',
  'mandelbrot-set.html',
  'modified-square.html',
  'newton-fractal.html',
  'nonrepeat-square.html',
  'pentagon-fractal.html',
  'phoenix-fractal.html',
  'restricted-square.html',
  'sierpinski-carpet.html',
  'sierpinski-triangle.html'
];

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Process each page
pagesToUpdate.forEach(page => {
  const filePath = path.join(pagesDir, page);
  
  try {
    console.log(`Updating ${page}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already updated
    if (content.includes('header-fix.css')) {
      console.log(`  - Already updated, skipping`);
      return;
    }
    
    // Add the new stylesheet link before the closing head tag
    const updatedContent = content.replace(
      '</head>',
      '    <link rel="stylesheet" href="../styles/header-fix.css">\n</head>'
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent);
    console.log(`  - Successfully updated`);
    
  } catch (error) {
    console.error(`  - Error: ${error.message}`);
  }
});

console.log('\nUpdate completed! Please rebuild the project with: npm run build'); 