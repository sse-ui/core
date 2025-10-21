// @ts-check
import path from "node:path";
import fs from "node:fs";
import * as esbuild from "esbuild";
import * as tsup from "tsup";

const packageJsonData = JSON.parse(
  fs.readFileSync(path.resolve("./package.json"), "utf-8")
);

/**
 * @param {string} relativePath
 */
export async function build(relativePath) {
  const srcDir = path.resolve(relativePath, "src");
  if (!fs.existsSync(srcDir)) {
    console.error(`src directory not found at ${srcDir}`);
    process.exit(1);
  }

  // Get all components: .tsx files and folders with index.ts, excluding 'core'
  const components = [];
  const items = fs.readdirSync(srcDir);
  for (const item of items) {
    const itemPath = path.join(srcDir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isFile() && item.endsWith(".tsx")) {
      components.push({ name: path.parse(item).name, entry: itemPath });
    } else if (stat.isDirectory() && item !== "core") {
      const indexPath = path.join(itemPath, "index.ts");
      if (fs.existsSync(indexPath)) {
        components.push({ name: item, entry: indexPath });
      }
    }
  }

  if (components.length === 0) {
    console.log("No components found to build.");
    return;
  }

  const tasks = [];

  for (const { name, entry } of components) {
    const outDir = path.resolve(relativePath, name);

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
      entryPoints: [entry],
      packages: "external",
      bundle: true,
      sourcemap: true,
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

    // tsup for d.ts files
    tasks.push(
      tsup
        .build({
          entry: [entry],
          format: ["cjs", "esm"],
          dts: { only: true },
          outDir: outDir,
          silent: true,
        })
        .then(() => console.log(`TSC: Built ${name}`))
    );
  }

  await Promise.all(tasks);

  const distDir = path.resolve(relativePath, "dist");
  fs.mkdirSync(distDir, { recursive: true });

  const exportLines = components.map(({ name }) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return `export * as ${capitalizedName} from "./${name}";`;
  });

  const indexContent = exportLines.join("\n");
  await fs.promises.writeFile(path.join(distDir, "index.js"), indexContent);
  console.log("Generated dist/index.js with re-exports");
}

/**
 * @typedef {{ name: string }} PackageJson
 */
