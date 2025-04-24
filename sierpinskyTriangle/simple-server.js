const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3010; // Use a different port to avoid conflicts

// Middleware to log all requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve source files for direct access during development
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Serve static files from the pages directory with explicit content type
app.use('/pages', (req, res, next) => {
    // Specifically handle the nonrepeat-square.html request
    if (req.path === '/nonrepeat-square.html') {
        const filePath = path.join(__dirname, 'src', 'pages', 'nonrepeat-square.html');
        if (fs.existsSync(filePath)) {
            console.log(`Special handling for: ${filePath}`);
            res.type('text/html');
            res.sendFile(filePath);
            return;
        }
    }
    next();
}, express.static(path.join(__dirname, 'src', 'pages')));

// For the main page, send the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Special handling for pages
app.get('/pages/:page', (req, res) => {
  const pagePath = path.join(__dirname, 'src/pages', req.params.page);
  
  // Check if file exists
  if (fs.existsSync(pagePath)) {
    res.sendFile(pagePath);
  } else {
    res.status(404).send('Page not found');
  }
});

// Handle other routes
app.get('*', (req, res, next) => {
  const filePath = path.join(__dirname, req.path);
  
  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.sendFile(filePath);
  } else {
    next(); // Continue to 404
  }
});

// Error handling middleware for 404 errors
app.use((req, res, next) => {
    if (req.path.endsWith('.html')) {
        const searchPath = path.join(__dirname, 'src', 'pages', path.basename(req.path));
        if (fs.existsSync(searchPath)) {
            console.log(`File exists but wasn't served correctly: ${searchPath}`);
            res.type('text/html');
            res.sendFile(searchPath);
            return;
        } else {
            console.log(`File not found: ${searchPath}`);
        }
    }
    next();
});

// Direct routes to handle specific fractal pages
app.get('/nonrepeat-square', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pages', 'nonrepeat-square.html'));
});

app.listen(port, () => {
  console.log(`
======================================================
  Fractal Explorer server listening on port ${port}
  
  Open http://localhost:${port} in your browser
======================================================
  `);
  
  // Log available pages for easy access
  console.log(`Sierpinski Triangle Editor: http://localhost:${port}/pages/sierpinski-triangle.html`);
  console.log(`Adjacent Restriction Editor: http://localhost:${port}/pages/adjacent-restriction.html`);
  console.log(`Modified Square Editor: http://localhost:${port}/pages/modified-square.html`);
  console.log(`Non-Repeat Square Editor: http://localhost:${port}/pages/nonrepeat-square.html`);
  console.log(`Restricted Square Editor: http://localhost:${port}/pages/restricted-square.html`);
  console.log(`Sierpinski Carpet Editor: http://localhost:${port}/pages/sierpinski-carpet.html`);
  console.log(`Burning Ship Fractal Editor: http://localhost:${port}/pages/burning-ship.html`);
  console.log(`Julia Set Fractal Editor: http://localhost:${port}/pages/julia-set.html`);
  console.log(`Newton Fractal Editor: http://localhost:${port}/pages/newton-fractal.html`);
  console.log(`Lyapunov Fractal Editor: http://localhost:${port}/pages/lyapunov-fractal.html`);
  console.log(`Phoenix Fractal Editor: http://localhost:${port}/pages/phoenix-fractal.html`);
  console.log(`Pentagon Fractal Editor: http://localhost:${port}/pages/pentagon-fractal.html`);
  console.log(`Barnsley Fern Editor: http://localhost:${port}/pages/barnsley-fern.html`);
  console.log(`Koch Snowflake Editor: http://localhost:${port}/pages/koch-snowflake.html`);
}); 