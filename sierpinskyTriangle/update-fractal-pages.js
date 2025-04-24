/**
 * Script to update all fractal pages with the new responsive design
 */

const fs = require('fs');
const path = require('path');

// Source directories
const pagesDir = path.join(__dirname, 'src', 'pages');
const cssDir = path.join(__dirname, 'styles');

// Check if fractal-pages.css exists
const fractalCssPath = path.join(cssDir, 'fractal-pages.css');
if (!fs.existsSync(fractalCssPath)) {
  console.error('Error: fractal-pages.css not found. Please ensure it exists before running this script.');
  process.exit(1);
}

// Get all HTML files in the pages directory
const htmlFiles = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.html') && file !== 'fractal-page-template.html');

console.log(`Found ${htmlFiles.length} HTML files to update`);

// Update function for each file
function updateHtmlFile(file) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update CSS links - using the correct relative path
  content = content.replace(
    /<link rel="stylesheet" href="..\/styles\/main.css">/g, 
    '<link rel="stylesheet" href="../styles/main.css">\n    <link rel="stylesheet" href="../styles/fractal-pages.css">'
  );
  
  // Also handle any already-updated paths with the incorrect ../../styles/ path
  content = content.replace(
    /<link rel="stylesheet" href="..\/..\/styles\/main.css">/g, 
    '<link rel="stylesheet" href="../styles/main.css">'
  );
  
  content = content.replace(
    /<link rel="stylesheet" href="..\/..\/styles\/fractal-pages.css">/g, 
    '<link rel="stylesheet" href="../styles/fractal-pages.css">'
  );
  
  // Fix src/styles/controls.css path reference
  content = content.replace(
    /<link rel="stylesheet" href="..\/src\/styles\/controls.css">/g,
    '<link rel="stylesheet" href="../styles/components.css">'
  );
  
  // Remove inline styles
  content = content.replace(/<style>[\s\S]*?<\/style>/g, '');
  
  // Update structure to match our new template
  if (!content.includes('<header>')) {
    // Extract the title to preserve it
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Fractal Editor';
    
    // Extract the h1 content
    const h1Match = content.match(/<h1>(.*?)<\/h1>/);
    const h1 = h1Match ? h1Match[1] : title;
    
    // Update the structure
    content = content.replace(
      /<body>[\s\S]*?<h1>(.*?)<\/h1>/m,
      `<body>\n    <header>\n        <h1>${h1}</h1>\n    </header>\n\n    <div class="container">\n        <div class="main-content">`
    );
    
    // Add the return button if not present
    if (!content.includes('return-button')) {
      const returnButton = `
    <button class="return-button" title="Return to Dashboard" onclick="window.location.href='/'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
        </svg>
    </button>
    
    <!-- Debug panel -->
    <div id="debug-info" class="debug-info"></div>
`;
      
      // Add before the first script tag
      content = content.replace(
        /(\s*)<script/,
        `${returnButton}$1<script`
      );
    }
  }
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}

// Process each file
htmlFiles.forEach(updateHtmlFile);

console.log('All fractal pages have been updated to use the new responsive design!');
console.log('Please check the pages and make any necessary adjustments to the script output.'); 