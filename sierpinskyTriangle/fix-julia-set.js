const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Path to the Julia Set page
const juliaPath = path.join(pagesDir, 'julia-set.html');
const juliaContent = fs.readFileSync(juliaPath, 'utf8');

// Path to the Mandelbrot Set page as a reference (similar mathematical fractal)
const mandelbrotPath = path.join(pagesDir, 'mandelbrot-set.html');
const mandelbrotContent = fs.readFileSync(mandelbrotPath, 'utf8');

// Extract the script part from the Mandelbrot Set page
const scriptMatch = mandelbrotContent.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('Could not extract script from Mandelbrot Set page');
  process.exit(1);
}
const templateScript = scriptMatch[1];

// Customize the script for Julia Set
const customizedScript = templateScript
  .replace(/mandelbrot-canvas/g, 'julia-canvas')
  .replace(/Mandelbrot Set/g, 'Julia Set')
  .replace(/MandelbrotFractal/g, 'JuliaFractal')
  .replace(/generateMandelbrot/g, 'generateJuliaSet')
  .replace(/mandelbrot-set\.png/g, 'julia-set.png');

// Create the updated Julia Set content
const updatedJuliaContent = juliaContent.replace(
  /<script>[\s\S]*?<\/script>/,
  `<script>\n${customizedScript}\n</script>`
);

// Write the updated content back to the file
fs.writeFileSync(juliaPath, updatedJuliaContent);
console.log('Updated Julia Set page'); 