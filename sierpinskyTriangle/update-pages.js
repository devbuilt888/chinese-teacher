const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Get the template content
const templatePath = path.join(pagesDir, 'fractal-page-template.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Extract the animation-related JavaScript code from the template
const animationScriptRegex = /document\.addEventListener\('DOMContentLoaded', function\(\) \{[\s\S]*?\}\);/;
const animationScript = templateContent.match(animationScriptRegex)[0];

// Get all HTML files in the pages directory
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.html') && file !== 'fractal-page-template.html');

console.log('Updating fractal pages with new animation functionality...');

files.forEach(file => {
  try {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip the Sierpinski Triangle page as it has its own animation implementation
    if (file === 'sierpinski-triangle.html') {
      console.log(`Skipping ${file} (has custom implementation)`);
      return;
    }

    // Extract the canvas ID and fractal function name from the page
    const canvasIdMatch = content.match(/canvas id="([^"]+)"/);
    const canvasId = canvasIdMatch ? canvasIdMatch[1] : null;
    
    // Try to identify the fractal function name from various potential initialization calls
    let fractalFunction = null;
    
    // Method 1: Look for window.initXXX
    const funcNameMatch1 = content.match(/window\.init([A-Za-z]+Fractal)/i);
    if (funcNameMatch1) {
      fractalFunction = funcNameMatch1[1];
    } else {
      // Method 2: Try to extract from the file name
      const fileNameMatch = file.replace('.html', '').split('-').map(
        part => part.charAt(0).toUpperCase() + part.slice(1)
      ).join('');
      
      // Add "Fractal" suffix if not already there
      if (!fileNameMatch.endsWith('Fractal')) {
        fractalFunction = fileNameMatch + 'Fractal';
      } else {
        fractalFunction = fileNameMatch;
      }
    }

    if (!canvasId) {
      console.log(`Skipping ${file} - Could not identify canvas ID`);
      return;
    }

    console.log(`Updating ${file} with canvasId: ${canvasId}, fractalFunction: ${fractalFunction}`);

    // Replace the existing script section with our new animation script
    const scriptRegex = /<script>[\s\S]*?<\/script>/;
    
    // Replace placeholders in the animation script
    let updatedScript = animationScript
      .replace(/\{\{CANVAS_ID\}\}/g, canvasId)
      .replace(/\{\{FRACTAL_FUNCTION\}\}/g, fractalFunction);
    
    // Update the content
    const updatedContent = content.replace(
      scriptRegex, 
      `<script>\n${updatedScript}\n</script>`
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