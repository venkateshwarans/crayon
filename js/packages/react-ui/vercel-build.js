const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Define paths
const outputDir = path.resolve(__dirname, '../../../docs/static/ui');
const vercelOutputDir = path.resolve(__dirname, '.vercel-output');

try {
  console.log('Building Storybook...');
  execSync('pnpm run build:storybook', { stdio: 'inherit' });
  
  console.log('Copying build output to Vercel-compatible location...');
  // Ensure the destination directory exists
  fs.ensureDirSync(vercelOutputDir);
  
  // Copy the build output to the Vercel-compatible location
  fs.copySync(outputDir, vercelOutputDir);
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
