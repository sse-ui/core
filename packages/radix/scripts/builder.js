// @ts-check
import path from "node:path";
import fs from "node:fs";
import * as esbuild from "esbuild";
import * as tsup from "tsup";

const packageJsonData = JSON.parse(
  fs.readFileSync(path.resolve("./package.json"), "utf-8")
);

/**
 * Converts a kebab-case string to PascalCase.
 * @param {string} str
 * @returns {string}
 */
function kebabToPascal(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

/**
 * @param {string} relativePath
 */
export async function build(relativePath) {
  console.log("🛠️ Starting build script...");
  console.log("📂 Relative path received:", relativePath);

  const srcDir = path.resolve(relativePath, "src");
  console.log("📁 Looking for src in:", srcDir);

  if (!fs.existsSync(srcDir)) {
    console.error(`src directory not found at ${srcDir}`);
    process.exit(1);
  }

  const componentsMap = new Map();
  const items = fs.readdirSync(srcDir);

  for (const item of items) {
    const itemPath = path.join(srcDir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isFile() && item.endsWith(".tsx")) {
      const name = path.parse(item).name;
      componentsMap.set(name, itemPath); // Prefer .tsx
    } else if (stat.isDirectory() && item !== "core") {
      const indexPath = path.join(itemPath, "index.ts");
      if (fs.existsSync(indexPath)) {
        const name = item;
        if (!componentsMap.has(name)) {
          componentsMap.set(name, indexPath);
        }
      }
    }
  }

  const components = Array.from(componentsMap.entries()).map(
    ([name, entry]) => ({ name, entry })
  );

  if (components.length === 0) {
    console.log("No components found to build.");
    return;
  }

  const tasks = [];

  for (const { name, entry } of components) {
    const relativeEntry = path.relative(process.cwd(), entry);
    console.log(`🔍 Using relative entry for ${name}: ${relativeEntry}`);

    const outDir = path.resolve(relativePath, name);

    if (!fs.existsSync(entry)) {
      console.warn(`⚠️ Entry file for ${name} does not exist: ${entry}`);
      continue;
    }

    // Ensure output directory exists
    fs.mkdirSync(outDir, { recursive: true });

    // Create package.json
    const packageJson = {
      version: `${packageJsonData.version}`,
      main: `./${name}.js`,
      module: `./${name}.mjs`,
      types: `./${name}.d.ts`,
      exports: {
        ".": {
          import: {
            types: `./${name}.d.mts`,
            default: `./${name}.mjs`,
          },
          require: {
            types: `./${name}.d.ts`,
            default: `./${name}.js`,
          },
        },
      },
    };

    await fs.promises.writeFile(
      path.join(outDir, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );

    /** @type {esbuild.BuildOptions} */
    const esbuildConfig = {
      entryPoints: [entry], // Absolute path works fine for esbuild
      packages: "external",
      bundle: true,
      sourcemap: false,
      format: "cjs",
      target: "es2022",
      outdir: outDir,
      outbase: srcDir,
    };

    tasks.push(
      esbuild.build(esbuildConfig).then(() => console.log(`CJS: Built ${name}`))
    );

    tasks.push(
      esbuild
        .build({
          ...esbuildConfig,
          format: "esm",
          outExtension: { ".js": ".mjs" },
        })
        .then(() => console.log(`ESM: Built ${name}`))
    );

    // tsup for d.ts files - Use relativeEntry instead of absolute entry
    // tasks.push(
    //   tsup
    //     .build({
    //       entry: [relativeEntry], // Changed to relative path
    //       format: ["cjs", "esm"],
    //       dts: { only: true },
    //       outDir: outDir,
    //       silent: true,
    //     })
    //     .then(() => console.log(`TSC: Built ${name}`))
    // );
  }

  await Promise.all(tasks);

  const distDir = path.resolve(relativePath, "dist");
  fs.mkdirSync(distDir, { recursive: true });

  const exportLines = components.map(({ name }) => {
    const pascalName = kebabToPascal(name);
    return `export * as ${pascalName} from "./${name}";`;
  });

  const indexContent = exportLines.join("\n");
  await fs.promises.writeFile(path.join(distDir, "index.js"), indexContent);
  console.log("Generated dist/index.js with re-exports");
}

/**
 * @typedef {{ name: string }} PackageJson
 */
