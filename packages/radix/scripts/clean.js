import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const srcDir = path.join(rootDir, "src");

function deleteDirectoryRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  for (const file of fs.readdirSync(dirPath)) {
    const curPath = path.join(dirPath, file);
    const stat = fs.statSync(curPath);
    if (stat.isDirectory()) {
      deleteDirectoryRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  }

  fs.rmdirSync(dirPath);
}

const components = [];
if (fs.existsSync(srcDir)) {
  const items = fs.readdirSync(srcDir);
  for (const item of items) {
    const itemPath = path.join(srcDir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isFile() && item.endsWith(".tsx")) {
      components.push(path.parse(item).name);
    } else if (stat.isDirectory() && item !== "core") {
      const indexPath = path.join(itemPath, "index.ts");
      if (fs.existsSync(indexPath)) {
        components.push(item);
      }
    }
  }
} else {
  console.error(`❌ src directory not found at ${srcDir}`);
  process.exit(1);
}

if (components.length === 0) {
  console.log("⚠️ No components found in src to clean.");
  process.exit(0);
}

// Delete each corresponding folder in rootDir
for (const component of components) {
  const dirPath = path.join(rootDir, component);
  if (fs.existsSync(dirPath)) {
    deleteDirectoryRecursive(dirPath);
    console.log(`🧹 Cleared ${dirPath}`);
  } else {
    // console.log(`ℹ️ ${dirPath} does not exist, skipping.`);
  }
}

console.log("✅ All build folders cleared.");
