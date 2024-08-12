// vite-plugin-copy-static-files.ts
import { promises as fs } from "fs";
import { resolve } from "path";

export function copyStaticFiles() {
	return {
		name: "vite-plugin-copy-static-files",
		apply: "build",
		async buildEnd() {
			const srcDir = resolve("src/assets/images");
			const destDir = resolve("dist/_astro");

			async function copyRecursive(src: string, dest: string) {
				const entries = await fs.readdir(src, { withFileTypes: true });

				for (const entry of entries) {
					const srcPath = resolve(src, entry.name);
					const destPath = resolve(dest, entry.name);

					if (entry.isDirectory()) {
						await fs.mkdir(destPath, { recursive: true });
						await copyRecursive(srcPath, destPath);
					} else if (entry.isFile()) {
						await fs.copyFile(srcPath, destPath);
					}
				}
			}

			await fs.mkdir(destDir, { recursive: true });
			await copyRecursive(srcDir, destDir);
			console.log("Static files copied to dist/_astro");
		},
	};
}
