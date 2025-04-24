const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the dist directory (built files)
app.use(express.static(path.join(__dirname, 'dist')));

// Serve source files for direct access during development
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// For the main page, send the dist/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Handle all other routes, fall back to the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
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
  console.log(`Restricted Square Editor: http://localhost:${port}/pages/restricted-square.html`);
  console.log(`Mandelbrot Set Editor: http://localhost:${port}/pages/mandelbrot-set.html`);
}); 