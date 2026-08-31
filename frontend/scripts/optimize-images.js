import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base images directory
const IMAGES_DIR = path.resolve(__dirname, '../images');
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp']);
const IGNORED_FOLDERS = new Set(['display', 'thumbs', 'optimized', 'Inicio']);

async function optimizeImages() {
  console.log(`\n🔍 Scanning images in: ${IMAGES_DIR}\n`);

  let entries;
  try {
    entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true });
  } catch (err) {
    console.error(`❌ Failed to read images directory:`, err.message);
    return;
  }

  const sectionFolders = entries
    .filter(e => e.isDirectory() && !IGNORED_FOLDERS.has(e.name))
    .map(e => e.name);

  let totalProcessed = 0;
  let totalSkipped = 0;

  for (const section of sectionFolders) {
    const sectionPath = path.join(IMAGES_DIR, section);
    const displayDir = path.join(sectionPath, 'display');
    const thumbsDir = path.join(sectionPath, 'thumbs');

    await fs.mkdir(displayDir, { recursive: true });
    await fs.mkdir(thumbsDir, { recursive: true });

    const files = await fs.readdir(sectionPath, { withFileTypes: true });
    const imageFiles = files.filter(f => f.isFile() && SUPPORTED_EXTENSIONS.has(path.extname(f.name).toLowerCase()));

    console.log(`📁 Section: [${section}] — ${imageFiles.length} images found.`);

    for (const file of imageFiles) {
      const srcPath = path.join(sectionPath, file.name);
      const baseName = path.parse(file.name).name;
      const targetWebpName = `${baseName}.webp`;

      const displayPath = path.join(displayDir, targetWebpName);
      const thumbPath = path.join(thumbsDir, targetWebpName);

      const displayExists = await fs.stat(displayPath).then(() => true).catch(() => false);
      const thumbExists = await fs.stat(thumbPath).then(() => true).catch(() => false);

      if (displayExists && thumbExists) {
        totalSkipped += 1;
        continue;
      }

      try {
        const imageInstance = sharp(srcPath, { failOn: 'none' }).rotate(); // Auto-orient EXIF

        // 1. Display version (Original dimensions, 80% WebP quality)
        if (!displayExists) {
          await imageInstance
            .clone()
            .webp({ quality: 80, effort: 4 })
            .toFile(displayPath);
        }

        // 2. Thumbs version (Longest edge ~200px, 10% WebP quality, preserves aspect ratio)
        if (!thumbExists) {
          await imageInstance
            .clone()
            .resize({
              width: 200,
              height: 200,
              fit: 'inside', // Preserves aspect ratio without cropping/stretching
              withoutEnlargement: true
            })
            .webp({ quality: 10, effort: 4 })
            .toFile(thumbPath);
        }

        totalProcessed += 1;
        console.log(`  ✨ Optimized: ${file.name} -> display & thumbs`);
      } catch (err) {
        console.error(`  ⚠️ Error processing ${file.name}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Summary:`);
  console.log(`   - Images processed: ${totalProcessed}`);
  console.log(`   - Already existing (skipped): ${totalSkipped}\n`);
}

optimizeImages();
