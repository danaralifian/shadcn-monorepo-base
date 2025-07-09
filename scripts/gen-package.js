const fs = require("fs-extra");
const path = require("path");

const name = process.argv[2];

if (!name) {
  console.error("❌ Please provide package name: npm run gen <package-name>");
  process.exit(1);
}

const srcPath = path.resolve("packages/template");
const destPath = path.resolve(`packages/${name}`);

// Check folder destination
if (fs.existsSync(destPath)) {
  console.error(`❌ Package ${name} already exists in packages/${name}`);
  process.exit(1);
}

// 1. Copy folder
fs.copySync(srcPath, destPath);
console.log(`📁 Copied to packages/${name}`);

// 2. Update package.json
const pkgPath = path.join(destPath, "package.json");
if (fs.existsSync(pkgPath)) {
  const pkg = fs.readJsonSync(pkgPath);
  pkg.name = `@repo/${name}`;
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
  console.log(`📦 Updated package name to @repo/${name}`);
}

// 3. Update tsconfig.base.json
const tsconfigPath = path.resolve("tsconfig.base.json");
if (fs.existsSync(tsconfigPath)) {
  const tsconfig = fs.readJsonSync(tsconfigPath);

  tsconfig.compilerOptions.paths = {
    ...(tsconfig.compilerOptions.paths || {}),
    [`@repo/${name}`]: [`packages/${name}/src`],
  };

  fs.writeJsonSync(tsconfigPath, tsconfig, { spaces: 2 });
  console.log(`🛠️  tsconfig.base.json updated with @repo/${name}`);
}

console.log(`✅ Finished! Package @repo/${name} created successfully!`);
