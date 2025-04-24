const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Get the Sierpinski Triangle page source content
const sourcePath = path.join(pagesDir, 'sierpinski-triangle.html');
const sourceContent = fs.readFileSync(sourcePath, 'utf8');

// Extract the controls HTML directly with a more lenient pattern
const controlsMatch = sourceContent.match(/<div class="controls"[\s\S]*?<div class="button-row">/);
const controlsHTML = controlsMatch ? controlsMatch[0] : '';

// List of pages that need manual fixes
const pages = [
  'barnsley-fern.html',
  'restricted-square.html',
  'sierpinski-carpet.html',
  'burning-ship.html',
  'julia-set.html',
  'newton-fractal.html',
  'lyapunov-fractal.html',
  'pentagon-fractal.html',
  'modified-square.html',
  'nonrepeat-square.html'
];

console.log('Updating remaining fractal page HTML structures...');

pages.forEach(file => {
  try {
    const filePath = path.join(pagesDir, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File ${file} doesn't exist - skipping`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the canvas ID
    const canvasIdMatch = content.match(/canvas id="([^"]+)"/);
    if (!canvasIdMatch) {
      console.log(`Skipping ${file} - Could not identify canvas ID`);
      return;
    }
    
    const canvasId = canvasIdMatch[1];
    
    // Extract the fractal name
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    let fractalName = titleMatch ? titleMatch[1].replace(' Editor', '') : 'Fractal';
    
    // Create modified controls HTML
    let customControls = controlsHTML
      .replace(/sierpinski-canvas/g, canvasId)
      .replace(/for="iterations-input"/g, 'for="iterations"')
      .replace(/id="iterations-input"/g, 'id="iterations-input"')
      .replace(/id="iterations-range"/g, 'id="iterations"')
      .replace(/Sierpinski Triangle/g, fractalName);
      
    // Remove method select which only applies to Sierpinski Triangle
    const methodSelectRegex = /<div class="control-group">[\s\S]*?<select id="method-select">[\s\S]*?<\/select>[\s\S]*?<\/div>/;
    customControls = customControls.replace(methodSelectRegex, '');
      
    // Remove depth input which only applies to Sierpinski Triangle
    const depthInputRegex = /<div class="control-group">[\s\S]*?Recursion Depth[\s\S]*?<\/div>/;
    customControls = customControls.replace(depthInputRegex, '');
    
    // Match the key parts of the content to replace
    const canvasContainerRegex = /<div class="canvas-container">[\s\S]*?<\/div>/;
    const canvasContainerMatch = content.match(canvasContainerRegex);
    
    if (canvasContainerMatch) {
      // Find the end of the editor card section
      const editorCardEndIndex = content.indexOf('</div>', content.indexOf(canvasContainerMatch[0]) + canvasContainerMatch[0].length);
      
      if (editorCardEndIndex !== -1) {
        // Create the full replacement HTML
        const fullReplacement = 
          `<div class="canvas-container">
                    <canvas id="${canvasId}" width="800" height="600"></canvas>
                </div>
                ${customControls}`;
        
        // Create the portions before and after our insertion point
        const contentBefore = content.substring(0, content.indexOf(canvasContainerMatch[0]));
        const contentAfter = content.substring(editorCardEndIndex);
        
        // Create the updated content
        const updatedContent = contentBefore + fullReplacement + contentAfter;
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated ${file} with complete controls section`);
      } else {
        console.log(`Could not locate editor card end in ${file}`);
      }
    } else {
      console.log(`Could not locate canvas container in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Done updating remaining pages!');
console.log('Please rebuild the project with: npm run build'); 