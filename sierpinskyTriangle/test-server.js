
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
    console.log(`Test server running at http://localhost:${port}`);
    console.log(`Direct link to nonrepeat page: http://localhost:${port}/nonrepeat-square`);
});
