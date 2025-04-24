# Fractal Explorer Deployment Guide

This document provides instructions for deploying the Fractal Explorer application to a cPanel server with HTTPS enforcement.

## Building for Production

1. Make sure you have all dependencies installed:

```bash
npm install
```

2. Build the project for production:

### On Windows
```bash
set NODE_OPTIONS=--openssl-legacy-provider
npm run build:deploy
```

### On macOS/Linux
```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build:deploy
```

3. For convenience, you can use the automated deployment script, which also packages everything into a zip file:

```bash
npm run deploy
```

This will create a `dist` folder containing all the necessary files for deployment, including:
- HTML files
- JavaScript files
- CSS files
- Other assets
- A properly configured `.htaccess` file for HTTPS enforcement

## Deploying to cPanel using FileZilla

1. **Install FileZilla Client**
   - If you don't have FileZilla installed, download and install it from [FileZilla's official website](https://filezilla-project.org/download.php).

2. **Connect to your cPanel server via FTP/SFTP**
   - Open FileZilla
   - Enter your connection details:
     - Host: Your server address (e.g., `ftp.yourdomain.com` or `yourdomain.com`)
     - Username: Your cPanel username
     - Password: Your cPanel password
     - Port: 21 for FTP or 22 for SFTP (recommended for security)
   - Click "Quickconnect" or save these settings as a site in the Site Manager

3. **Navigate to your web root directory**
   - In the right panel (server side), navigate to your website's root directory
   - This is typically `/public_html/` or a subdirectory if you want to install in a specific folder

4. **Upload your files**
   - In the left panel (local side), navigate to the `dist` folder that was created during the build process
   - Select all files and folders in the `dist` directory
   - Drag them to the right panel or right-click and select "Upload"
   - Alternatively, upload the `fractal-explorer-deployment.zip` file to your server, then:
     - Use cPanel's File Manager to extract the ZIP file
     - Make sure all files are extracted to the correct directory

5. **Verify file permissions**
   - Right-click on the uploaded files and select "File permissions"
   - Set the following permissions:
     - HTML/CSS/JS files: 644
     - Directories: 755
     - `.htaccess` file: 644 (important for HTTPS redirection)

## HTTPS Configuration

The included `.htaccess` file contains all necessary rules to enforce HTTPS on your cPanel server. This means:

1. **Automatic HTTP to HTTPS Redirection**
   - All HTTP requests will be automatically redirected to HTTPS
   - The redirection is done using 301 (permanent) redirects for SEO benefits

2. **Requirements for HTTPS to work:**
   - Your cPanel account must have an SSL certificate installed
   - SSL should be enabled for your domain in cPanel
   - To verify this:
     - Log in to cPanel
     - Look for "SSL/TLS Status" or "SSL/TLS" section
     - Ensure a valid certificate is installed for your domain

3. **If HTTPS is not working:**
   - Check if your cPanel hosting supports SSL/HTTPS
   - Verify that an SSL certificate is installed and active
   - Ensure that the `.htaccess` file was uploaded correctly
   - Make sure the `.htaccess` file has the correct permissions (644)
   - Contact your hosting provider if issues persist

## Testing the Deployment

1. **Access your website**
   - Open a browser and navigate to `https://yourdomain.com` (or the subdirectory where you deployed)
   - Verify that the application loads correctly
   - Try accessing via `http://yourdomain.com` and confirm it redirects to HTTPS

2. **Test all features**
   - Verify that all fractal generations work correctly
   - Test controls and interactions
   - Check that all pages load without errors

3. **Browser Console**
   - Open your browser's developer tools (F12 in most browsers)
   - Check the console for any errors
   - Verify that there are no mixed content warnings (HTTP content loaded on HTTPS page)

## Troubleshooting

- **500 Internal Server Error**
  - This often means there's an issue with the `.htaccess` file
  - Try temporarily renaming `.htaccess` to `.htaccess.bak` to see if that resolves the issue
  - Check your server's error logs in cPanel

- **404 Not Found Errors**
  - Verify that all files were uploaded to the correct location
  - Check URL paths in your browser

- **HTTPS Redirect Loop**
  - This can happen if your server is behind a proxy that handles SSL
  - You may need to modify the `.htaccess` file to account for your specific server configuration

- **Mixed Content Warnings**
  - Ensure all resource URLs in your HTML files use HTTPS or protocol-relative URLs (starting with //)

## Updates and Maintenance

When you need to update the application:

1. Make your changes to the codebase
2. Rebuild using `npm run deploy`
3. Upload only the changed files to your cPanel server, or replace all files if easier

## Additional Resources

- [cPanel Documentation](https://docs.cpanel.net/)
- [FileZilla Documentation](https://wiki.filezilla-project.org/Documentation)
- [Let's Encrypt SSL Certificates](https://letsencrypt.org/) (for free SSL certificates) 