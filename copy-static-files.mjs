import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';

import { resolve } from 'path';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const srcDir = resolve(__dirname, 'src/assets/images');
const destDir = resolve(__dirname, 'dist/_astro');

function copyRecursiveSync(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);

    if (entry.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyRecursiveSync(srcPath, destPath);
    } else if (entry.isFile()) {
      copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursiveSync(srcDir, destDir);
console.log('Static files copied to dist/_astro');
