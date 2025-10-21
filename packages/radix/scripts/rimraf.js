// rimraf.js
import rimraf from 'rimraf';
import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');

// Dynamically build the list of component names from src
const components = [];
if (fs.existsSync(srcDir)) {
  const items = fs.readdirSync(srcDir);
  for (const item of items) {
    const itemPath = path.join(srcDir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isFile() && item.endsWith('.tsx')) {
      components.push(path.parse(item).name); // e.g., 'slider' from 'slider.tsx'
    } else if (stat.isDirectory() && item !== 'core') {
      const indexPath = path.join(itemPath, 'index.ts');
      if (fs.existsSync(indexPath)) {
        components.push(item); // e.g., 'collection'
      }
    }
  }
} else {
  console.error(`src directory not found at ${srcDir}`);
  process.exit(1);
}

if (components.length === 0) {
  console.log('No components found in src to clean.');
  return;
}

// Delete each corresponding folder at the root
for (const component of components) {
  const dirPath = path.join(rootDir, component);
  if (fs.existsSync(dirPath)) {
    rimraf.sync(dirPath);
    console.log(`Cleared ${dirPath}`);
  } else {
    console.log(`${dirPath} does not exist, skipping.`);
  }
}

console.log('All build folders cleared.');
