const fs = require('fs');
const path = require('path');

// Path to the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');

// Path to the Barnsley Fern page
const fernPath = path.join(pagesDir, 'barnsley-fern.html');
const fernContent = fs.readFileSync(fernPath, 'utf8');

// Path to the Adjacent Restriction page as a reference (similar chaos game fractal)
const adjRestrictionPath = path.join(pagesDir, 'adjacent-restriction.html');
const adjRestrictionContent = fs.readFileSync(adjRestrictionPath, 'utf8');

// Extract the script part from the Adjacent Restriction page
const scriptMatch = adjRestrictionContent.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('Could not extract script from Adjacent Restriction page');
  process.exit(1);
}
const templateScript = scriptMatch[1];

// Customize the script for Barnsley Fern
const customizedScript = templateScript
  .replace(/adjacent-canvas/g, 'fern-canvas')
  .replace(/Adjacent Restriction/g, 'Barnsley Fern')
  .replace(/AdjacentRestrictionFractal/g, 'FernFractal')
  .replace(/adjacentRestrictionGame/g, 'generateFernFractal')
  .replace(/adjacent-restriction-fractal\.png/g, 'barnsley-fern.png');

// Create the updated Barnsley Fern content
const updatedFernContent = fernContent.replace(
  /<script>[\s\S]*?<\/script>/,
  `<script>\n${customizedScript}\n</script>`
);

// Write the updated content back to the file
fs.writeFileSync(fernPath, updatedFernContent);
console.log('Updated Barnsley Fern page'); 