<?php
// Include the HTTPS redirection script
include_once 'force-https.php';

// Get the path to the HTML file
$html_file = 'index.html';

// Check if the HTML file exists
if (file_exists($html_file)) {
    // Read the HTML content
    $html_content = file_get_contents($html_file);
    
    // Output the HTML content
    echo $html_content;
} else {
    // If the HTML file doesn't exist, display an error
    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fractal Explorer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
            color: #333;
        }
        h1 {
            color: #0066cc;
        }
        .error {
            background-color: #ffebee;
            border-left: 4px solid #f44336;
            padding: 15px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Fractal Explorer</h1>
    <div class="error">
        <h2>Error Loading Application</h2>
        <p>The application files could not be found. Please check your installation.</p>
    </div>
</body>
</html>';
}
?> 