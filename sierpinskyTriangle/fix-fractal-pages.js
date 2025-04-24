const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

console.log('Fixing fractal pages to ensure consistent UI and animation functionality...');
console.log(`Pages directory: ${pagesDir}`);

// Get all HTML files in the pages directory
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.html') && 
          file !== 'fractal-page-template.html');

console.log(`Found ${files.length} HTML files: ${files.join(', ')}`);

// Reference pages that work correctly
const adjRestrictionPath = path.join(pagesDir, 'adjacent-restriction.html');
const sierpinskiPath = path.join(pagesDir, 'sierpinski-triangle.html');
const kochPath = path.join(pagesDir, 'koch-snowflake.html');

console.log(`Verifying reference files exist:`);
console.log(`- Adjacent Restriction: ${fs.existsSync(adjRestrictionPath)}`);
console.log(`- Sierpinski Triangle: ${fs.existsSync(sierpinskiPath)}`);
console.log(`- Koch Snowflake: ${fs.existsSync(kochPath)}`);

if (!fs.existsSync(adjRestrictionPath) || !fs.existsSync(sierpinskiPath) || !fs.existsSync(kochPath)) {
  console.error('One or more reference files missing! Exiting.');
  process.exit(1);
}

const adjRestrictionContent = fs.readFileSync(adjRestrictionPath, 'utf8');
const sierpinskiContent = fs.readFileSync(sierpinskiPath, 'utf8');
const kochContent = fs.readFileSync(kochPath, 'utf8');

console.log(`Processing each fractal page...`);

files.forEach(file => {
  // Skip our reference pages - they already work correctly
  if (file === 'adjacent-restriction.html' || 
      file === 'sierpinski-triangle.html' || 
      file === 'koch-snowflake.html') {
    console.log(`Skipping ${file} (reference implementation)`);
    return;
  }

  try {
    console.log(`\nProcessing ${file}...`);
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Extract the canvas ID
    const canvasIdMatch = content.match(/canvas id="([^"]+)"/);
    if (!canvasIdMatch) {
      console.log(`- Skipping ${file} - Could not identify canvas ID`);
      return;
    }
    const canvasId = canvasIdMatch[1];
    console.log(`- Canvas ID: ${canvasId}`);

    // Extract the fractal name from title 
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    let fractalName = titleMatch ? titleMatch[1].replace(' - Editor', '').replace(' Editor', '') : 'Fractal';
    console.log(`- Fractal name: ${fractalName}`);

    // Derive the JavaScript class name from the file name
    let className = file.replace('.html', '')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    if (!className.endsWith('Fractal')) {
      className += 'Fractal';
    }
    console.log(`- Class name: ${className}`);

    // Extract the script part to analyze what kind of fractal this is
    const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
    const script = scriptMatch ? scriptMatch[1] : '';
    console.log(`- Script length: ${script.length} characters`);

    // Determine fractal type - mathematical or chaos game
    const isMathematical = script.includes('MathFractal') || 
                          script.includes('mandelbrot') || 
                          script.includes('setCenter') ||
                          script.includes('julia') ||
                          script.includes('newton') ||
                          script.includes('lyapunov') ||
                          script.includes('burning');
    console.log(`- Fractal type: ${isMathematical ? 'Mathematical' : 'Chaos Game'}`);

    // Choose the right template based on the fractal type
    let templateScript;
    if (isMathematical) {
      // Mathematical fractal - use Koch snowflake as template
      const templateMatch = kochContent.match(/<script>([\s\S]*?)<\/script>/);
      if (!templateMatch) {
        console.error(`- ERROR: Could not extract script from Koch template`);
        return;
      }
      templateScript = templateMatch[1];
      console.log(`- Using Koch snowflake template (${templateScript.length} characters)`);
    } else {
      // Chaos game fractal - use adjacent restriction as template
      const templateMatch = adjRestrictionContent.match(/<script>([\s\S]*?)<\/script>/);
      if (!templateMatch) {
        console.error(`- ERROR: Could not extract script from Adjacent Restriction template`);
        return;
      }
      templateScript = templateMatch[1];
      console.log(`- Using Adjacent Restriction template (${templateScript.length} characters)`);
    }

    // Replace any references to the specific fractal in the template with our target fractal
    templateScript = templateScript
      .replace(/koch-canvas/g, canvasId)
      .replace(/adjacent-canvas/g, canvasId)
      .replace(/Koch Snowflake/g, fractalName)
      .replace(/Adjacent Restriction/g, fractalName)
      .replace(/KochSnowflakeFractal/g, className)
      .replace(/AdjacentRestrictionFractal/g, className)
      .replace(/generateKochSnowflake/g, `generate${className}`)
      .replace(/adjacentRestrictionGame/g, `generate${className}`)
      .replace(/koch-snowflake\.png/g, `${file.replace('.html', '')}.png`)
      .replace(/adjacent-restriction-fractal\.png/g, `${file.replace('.html', '')}.png`);

    // Update the script section in the page
    const updatedContent = content.replace(
      /<script>[\s\S]*?<\/script>/,
      `<script>\n${templateScript}\n</script>`
    );

    if (updatedContent === content) {
      console.log(`- WARNING: No changes made to ${file}`);
    } else {
      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent);
      console.log(`- SUCCESS: Updated ${file} with ${isMathematical ? 'mathematical' : 'chaos game'} template`);
    }
  } catch (error) {
    console.error(`- ERROR processing ${file}:`, error.message);
  }
});

console.log('\nDone fixing fractal pages!');
console.log('Please rebuild the project with: npm run build'); 