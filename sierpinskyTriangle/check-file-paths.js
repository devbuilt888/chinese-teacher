const fs = require('fs');
const path = require('path');

console.log('Checking file paths and server configuration...');

// Check if the nonrepeat-square.html file exists
const nonrepeatSquarePath = path.join(__dirname, 'src', 'pages', 'nonrepeat-square.html');
console.log(`Checking nonrepeat-square.html exists: ${fs.existsSync(nonrepeatSquarePath)}`);

// Check if the simple-server.js file correctly references the file
const simpleServerPath = path.join(__dirname, 'simple-server.js');
if (fs.existsSync(simpleServerPath)) {
    const serverContent = fs.readFileSync(simpleServerPath, 'utf8');
    console.log(`Server mentions nonrepeat-square: ${serverContent.includes('nonrepeat-square.html')}`);
    
    // Find how the server references the file
    const regex = /nonrepeat-square\.html/g;
    let match;
    console.log('References to nonrepeat-square.html in server file:');
    while ((match = regex.exec(serverContent)) !== null) {
        const lineStart = serverContent.lastIndexOf('\n', match.index) + 1;
        const lineEnd = serverContent.indexOf('\n', match.index);
        const line = serverContent.substring(lineStart, lineEnd).trim();
        console.log(`  - ${line}`);
    }
}

// Check if the main.js file correctly imports the fractal
console.log(`\nChecking fractal imports:`);
const indexPath = path.join(__dirname, 'index.ts');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    console.log(`Import in index.ts: ${indexContent.includes('NonRepeatSquareFractal')}`);
    console.log(`initNonRepeatSquareFractal function exists: ${indexContent.includes('function initNonRepeatSquareFractal')}`);
}

// List all files in the pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
console.log(`\nFiles in pages directory:`);
if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    files.forEach(file => {
        console.log(`  - ${file}`);
    });
}

// Create a simple test server script
console.log('\nCreating test-server.js to serve pages directly...');
const testServerContent = `
const express = require('express');
const path = require('path');
const app = express();
const port = 3050;

// Serve static files from the root directory
app.use(express.static(__dirname));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/pages', express.static(path.join(__dirname, 'src', 'pages')));

// Direct route to nonrepeat-square.html
app.get('/nonrepeat-square', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'nonrepeat-square.html'));
});

app.listen(port, () => {
    console.log(\`Test server running at http://localhost:\${port}\`);
    console.log(\`Direct link to nonrepeat page: http://localhost:\${port}/nonrepeat-square\`);
});
`;

fs.writeFileSync(path.join(__dirname, 'test-server.js'), testServerContent);
console.log('Created test-server.js. Run with: node test-server.js');

console.log('\nDone checking. If the file exists but still shows 404, check the URL path and server configuration.'); 