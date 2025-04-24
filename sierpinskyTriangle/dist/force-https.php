<?php
/**
 * PHP Fallback for HTTPS redirection
 * Include this at the top of your index.php file or create index.php to include this
 * Some hosting environments need this PHP-level redirection
 */

// Function to check if the site is being accessed via HTTPS
function is_https() {
    // Check for standard HTTPS environment variable
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
        return true;
    }
    
    // Check for alternate server variables (common with load balancers/proxies)
    if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
        return true;
    }
    
    // Check the server port
    if (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443) {
        return true;
    }
    
    return false;
}

// Redirect to HTTPS if not already using it
if (!is_https() && $_SERVER['HTTP_HOST'] !== 'localhost' && !strpos($_SERVER['HTTP_HOST'], '127.0.0.1')) {
    // Determine the redirect URL
    $redirect_url = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    
    // Perform the redirect
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect_url);
    exit();
}
?>
<!-- Include this file in any PHP files that need HTTPS redirection -->
<!-- If you don't have PHP files, create an index.php in the root that includes this and forwards to index.html --> 