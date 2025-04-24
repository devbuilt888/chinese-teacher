const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Get the Sierpinski Triangle page content as our source
const sourcePath = path.join(pagesDir, 'sierpinski-triangle.html');
const sourceContent = fs.readFileSync(sourcePath, 'utf8');

// Extract the animation-related JavaScript code from the source
// We'll include the entire script section which has working animation
const scriptRegex = /<script>([\s\S]*?)<\/script>/;
const scriptMatch = sourceContent.match(scriptRegex);
let sourceScript = scriptMatch ? scriptMatch[1] : '';

// Get all HTML files in the pages directory
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.html') && 
          file !== 'sierpinski-triangle.html' && 
          file !== 'fractal-page-template.html');

console.log('Updating fractal pages with direct animation functionality...');

files.forEach(file => {
  try {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the canvas ID and fractal function name from the page
    const canvasIdMatch = content.match(/canvas id="([^"]+)"/);
    const canvasId = canvasIdMatch ? canvasIdMatch[1] : null;
    
    // Extract function name more carefully
    let fractalFunction = null;
    
    // Try various patterns to find the function name
    // First look for explicit initialization function calls
    const initMatch = content.match(/window\.init([A-Za-z]+Fractal)\(/i) || 
                     content.match(/if\s*\(typeof\s*window\.init([A-Za-z]+Fractal)/i);
    
    if (initMatch) {
      fractalFunction = initMatch[1];
    } else {
      // Use the file name to derive the function name
      const nameBase = file.replace('.html', '');
      const nameParts = nameBase.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1));
      let nameFromFile = nameParts.join('');
      
      // Add "Fractal" suffix if not already there
      if (!nameFromFile.endsWith('Fractal')) {
        fractalFunction = nameFromFile + 'Fractal';
      } else {
        fractalFunction = nameFromFile;
      }
    }

    if (!canvasId) {
      console.log(`Skipping ${file} - Could not identify canvas ID`);
      return;
    }

    console.log(`Updating ${file} with canvasId: ${canvasId}, fractalFunction: ${fractalFunction}`);

    // Customize the script for this page
    let customizedScript = sourceScript
      // Replace canvas ID
      .replace(/sierpinski-canvas/g, canvasId)
      // Replace script function calls
      .replace(/chaosGame\(/g, `generate${fractalFunction}(`);

    // We need to add the implementation of the generate function 
    // right after the color schemes definition
    const colorSchemesIndex = customizedScript.indexOf('// Color schemes');
    if (colorSchemesIndex !== -1) {
      // Find the next line after color schemes section
      const afterColorSchemes = customizedScript.indexOf('\n', 
        customizedScript.indexOf('}', colorSchemesIndex));
      
      // Add our custom function implementation
      const customFunctions = `
            
            // Generate fractal function - customized for ${fractalFunction}
            function generate${fractalFunction}(iterations, animate = false) {
                clearCanvas();
                
                const batchSize = parseInt(speedInput.value);
                
                if (animate) {
                    isAnimating = true;
                    
                    // Use the window init function but track our animation state
                    if (typeof window.init${fractalFunction} === 'function') {
                        try {
                            window.init${fractalFunction}(iterations);
                            animateButton.querySelector('span').textContent = 'Stop';
                        } catch (e) {
                            console.error('Error generating fractal:', e);
                            isAnimating = false;
                        }
                    } else {
                        console.error('Fractal initialization function not found');
                        isAnimating = false;
                    }
                } else {
                    // Non-animated, just generate
                    if (typeof window.init${fractalFunction} === 'function') {
                        window.init${fractalFunction}(iterations);
                    } else {
                        console.error('Fractal initialization function not found');
                    }
                }
            }`;
      
      // Insert the custom functions
      customizedScript = 
        customizedScript.slice(0, afterColorSchemes) + 
        customFunctions + 
        customizedScript.slice(afterColorSchemes);
    }

    // Modify the method change handler as it references specific methods
    customizedScript = customizedScript.replace(
      /methodSelect\.addEventListener\('change',[\s\S]*?\}\);/,
      `// No method select for this fractal`
    );

    // Replace the method choice in button handlers
    customizedScript = customizedScript.replace(
      /const method = methodSelect\.value;[\s\S]*?if \(method === 'chaos'\) \{([\s\S]*?)\} else \{[\s\S]*?\}/g,
      `// Direct fractal generation$1`
    );

    // Replace the initial setup that disables depth controls
    customizedScript = customizedScript.replace(
      /\/\/ Initial setup[\s\S]*?chaosGame\(/g,
      `// Initial setup\n            // Generate initial fractal\n            generate${fractalFunction}(`
    );

    // Update the content
    const updatedContent = content.replace(
      /<script>[\s\S]*?<\/script>/, 
      `<script>${customizedScript}</script>`
    );

    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('Done updating pages!');
console.log('Please rebuild the project with: npm run build'); 