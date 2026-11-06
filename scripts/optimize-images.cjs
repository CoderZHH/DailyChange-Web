const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");
const root = path.resolve(__dirname, "..");
async function main() {
  const brand = path.join(root, "public/media/brand");
  await sharp(path.join(brand, "app-icon.png")).resize(96, 96).png().toFile(path.join(root, "public/favicon.png"));
  await sharp(path.join(brand, "app-icon.png")).resize(192, 192).webp({ quality: 90 }).toFile(path.join(brand, "app-icon-192.webp"));
  await sharp(path.join(brand, "dailychange-wordmark-wide.png")).resize(690).webp({ quality: 90 }).toFile(path.join(brand, "dailychange-wordmark-wide.webp"));
  const app = path.join(root, "public/media/app");
  for (const file of await fs.readdir(app)) {
    if (!file.endsWith(".jpg")) continue;
    for (const width of [480, 960]) {
      await sharp(path.join(app, file)).resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(path.join(app, file.replace(/\.jpg$/, `-${width}.webp`)));
    }
  }
  console.log("Generated responsive website images; source images retained.");
}
main().catch(error => { console.error(error); process.exitCode = 1; });
