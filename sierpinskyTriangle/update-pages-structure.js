const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Get the Sierpinski Triangle page content as our source
const sourcePath = path.join(pagesDir, 'sierpinski-triangle.html');
const sourceContent = fs.readFileSync(sourcePath, 'utf8');

// Extract the control HTML elements from the source
const controlsRegex = /<div class="controls">([\s\S]*?)<\/div>\s*<div class="controls">/;
const controlsMatch = sourceContent.match(controlsRegex);
let controlsHTML = controlsMatch ? controlsMatch[1] : '';

// Get all HTML files in the pages directory
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.html') && 
          file !== 'sierpinski-triangle.html' && 
          file !== 'fractal-page-template.html');

console.log('Updating fractal page HTML structures...');

files.forEach(file => {
  try {
    const filePath = path.join(pagesDir, file);
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
    
    // Prepare customized controls HTML
    let customControls = controlsHTML
      .replace(/Iterations/g, 'Number of Iterations')
      .replace(/for="iterations-input"/g, 'for="iterations"')
      .replace(/id="iterations-input"/g, 'id="iterations-input"')
      .replace(/id="iterations-range"/g, 'id="iterations"');
    
    // Match the controls section
    const existingControlsRegex = /<div class="controls">([\s\S]*?)<\/div>\s*<div class="controls">/;
    const existingControlsMatch = content.match(existingControlsRegex);
    
    if (existingControlsMatch) {
      // Replace the controls section
      content = content.replace(
        existingControlsRegex,
        `<div class="controls">${customControls}</div>\n                <div class="controls">`
      );
      
      console.log(`Updated HTML structure for ${file}`);
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Could not locate controls section in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Done updating page structures!');
console.log('Please rebuild the project with: npm run build'); 