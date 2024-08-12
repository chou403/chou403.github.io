import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

import { resolve } from 'path';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir = resolve(__dirname, 'src/assets/images');
const destDir = resolve(__dirname, 'dist/_astro');

async function copyRecursive(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);

    if (entry.isDirectory()) {
      await fs.mkdir(destPath, { recursive: true });
      await copyRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }));
}

async function copyStaticFiles() {
  await fs.mkdir(destDir, { recursive: true });
  await copyRecursive(srcDir, destDir);
  console.log('Static files copied to dist/_astro');
}

copyStaticFiles(srcDir, destDir);
