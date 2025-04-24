/**
 * Build script for preparing Fractal Explorer for cPanel deployment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const distDir = path.join(__dirname, 'dist');
const srcDir = path.join(__dirname, 'src');

// Create output directory if it doesn't exist
console.log('Creating dist directory...');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Build the project
console.log('Building project for production...');
try {
  process.env.NODE_OPTIONS = '--openssl-legacy-provider';
  execSync('npm run build:deploy', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

// Copy .htaccess file to dist
console.log('Copying .htaccess file with HTTPS enforcement...');
try {
  fs.copyFileSync(
    path.join(__dirname, '.htaccess'),
    path.join(distDir, '.htaccess')
  );
  console.log('HTTPS enforcement configured in .htaccess');
} catch (error) {
  console.error('Failed to copy .htaccess:', error.message);
}

// Create a zip file for easy upload
console.log('Creating deployment package...');
try {
  const archiver = require('archiver');
  const deploymentZip = fs.createWriteStream(path.join(__dirname, 'fractal-explorer-deployment.zip'));
  const archive = archiver('zip', { zlib: { level: 9 } });
  
  deploymentZip.on('close', function() {
    console.log(`Deployment package created (${archive.pointer()} bytes)`);
    console.log('Deployment package: fractal-explorer-deployment.zip');
    console.log('');
    console.log('DEPLOYMENT PREPARATION COMPLETE!');
    console.log('HTTPS will be enforced with the included .htaccess configuration');
    console.log('Upload the contents of the dist folder or the zip file to your cPanel server.');
    console.log('For detailed instructions, refer to DEPLOYMENT.md');
  });
  
  archive.on('error', function(err) {
    console.error('Failed to create deployment package:', err.message);
  });
  
  archive.pipe(deploymentZip);
  archive.directory(distDir, false);
  archive.finalize();
} catch (error) {
  console.error('Failed to create zip file (make sure archiver is installed):', error.message);
  console.log('You can manually compress the dist folder for upload.');
} 