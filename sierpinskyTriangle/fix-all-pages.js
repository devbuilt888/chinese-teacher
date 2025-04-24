const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Reference pages that work correctly
const adjRestrictionPath = path.join(pagesDir, 'adjacent-restriction.html');
const adjRestrictionContent = fs.readFileSync(adjRestrictionPath, 'utf8');

const mandelbrotPath = path.join(pagesDir, 'mandelbrot-set.html');
const mandelbrotContent = fs.readFileSync(mandelbrotPath, 'utf8');

// Extract the template scripts
const chaosGameScriptMatch = adjRestrictionContent.match(/<script>([\s\S]*?)<\/script>/);
const chaosGameTemplate = chaosGameScriptMatch ? chaosGameScriptMatch[1] : null;

const mathematicalScriptMatch = mandelbrotContent.match(/<script>([\s\S]*?)<\/script>/);
const mathematicalTemplate = mathematicalScriptMatch ? mathematicalScriptMatch[1] : null;

if (!chaosGameTemplate || !mathematicalTemplate) {
  console.error('Could not extract template scripts');
  process.exit(1);
}

// List of pages to update, categorized by type
const mathematicalPages = [
  'burning-ship.html',
  'julia-set.html', // Already updated but included for completeness
  'lyapunov-fractal.html',
  'newton-fractal.html'
];

const chaosGamePages = [
  'barnsley-fern.html', // Already updated but included for completeness
  'pentagon-fractal.html',
  'modified-square.html',
  'nonrepeat-square.html',
  'restricted-square.html',
  'sierpinski-carpet.html'
];

// Skip these pages as they already work correctly
const skipPages = [
  'adjacent-restriction.html',
  'sierpinski-triangle.html',
  'koch-snowflake.html',
  'fractal-page-template.html'
];

console.log('Updating all fractal pages...');

// Update mathematical pages
console.log('\nUpdating mathematical fractal pages:');
mathematicalPages.forEach(file => {
  try {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`- ${file}: File does not exist, skipping`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the canvas ID
    const canvasIdMatch = content.match(/canvas id="([^"]+)"/);
    if (!canvasIdMatch) {
      console.log(`- ${file}: Could not identify canvas ID, skipping`);
      return;
    }
    const canvasId = canvasIdMatch[1];
    
    // Extract the fractal name from title
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    let fractalName = titleMatch ? 
      titleMatch[1].replace(' - Editor', '').replace(' Editor', '') : 
      file.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Derive the class name
    let className = file.replace('.html', '')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    if (!className.endsWith('Fractal')) {
      className += 'Fractal';
    }
    
    // Customize the template
    let customizedScript = mathematicalTemplate
      .replace(/mandelbrot-canvas/g, canvasId)
      .replace(/Mandelbrot Set/g, fractalName)
      .replace(/MandelbrotFractal/g, className)
      .replace(/mandelbrot-set\.png/g, file.replace('.html', '.png'))
      .replace(/generateMandelbrot/g, `generate${className}`);
    
    // Update the script section
    const updatedContent = content.replace(
      /<script>[\s\S]*?<\/script>/,
      `<script>\n${customizedScript}\n</script>`
    );
    
    // Write the updated content back
    fs.writeFileSync(filePath, updatedContent);
    console.log(`- ${file}: Updated successfully`);
  } catch (error) {
    console.error(`- ${file}: Error:`, error.message);
  }
});

// Update chaos game pages
console.log('\nUpdating chaos game fractal pages:');
chaosGamePages.forEach(file => {
  try {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`- ${file}: File does not exist, skipping`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the canvas ID
    const canvasIdMatch = content.match(/canvas id="([^"]+)"/);
    if (!canvasIdMatch) {
      console.log(`- ${file}: Could not identify canvas ID, skipping`);
      return;
    }
    const canvasId = canvasIdMatch[1];
    
    // Extract the fractal name from title
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    let fractalName = titleMatch ? 
      titleMatch[1].replace(' - Editor', '').replace(' Editor', '') : 
      file.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Derive the class name
    let className = file.replace('.html', '')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    if (!className.endsWith('Fractal')) {
      className += 'Fractal';
    }
    
    // Customize the template
    let customizedScript = chaosGameTemplate
      .replace(/adjacent-canvas/g, canvasId)
      .replace(/Adjacent Restriction/g, fractalName)
      .replace(/AdjacentRestrictionFractal/g, className)
      .replace(/adjacentRestrictionGame/g, `generate${className}`)
      .replace(/adjacent-restriction-fractal\.png/g, file.replace('.html', '.png'));
    
    // Update the script section
    const updatedContent = content.replace(
      /<script>[\s\S]*?<\/script>/,
      `<script>\n${customizedScript}\n</script>`
    );
    
    // Write the updated content back
    fs.writeFileSync(filePath, updatedContent);
    console.log(`- ${file}: Updated successfully`);
  } catch (error) {
    console.error(`- ${file}: Error:`, error.message);
  }
});

console.log('\nAll pages updated. Please rebuild the project with: npm run build'); 