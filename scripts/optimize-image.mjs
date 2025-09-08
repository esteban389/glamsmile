import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function ensureDir(dir) {
	await fs.promises.mkdir(dir, { recursive: true });
}

async function main() {
	const input = process.argv[2] || path.resolve(__dirname, "../public/assets/man_smile_2.png");
	const outDir = process.argv[3] || path.resolve(__dirname, "../public/assets");
	const baseName = path.basename(input, path.extname(input));

	await ensureDir(outDir);

	const pipeline = sharp(input).resize({ width: 1600, height: 2000, fit: "cover" });

	await pipeline.clone().webp({ quality: 82 }).toFile(path.join(outDir, `${baseName}.webp`));
	await pipeline.clone().avif({ quality: 60 }).toFile(path.join(outDir, `${baseName}.avif`));

	console.log("Generated:", path.join(outDir, `${baseName}.webp`));
	console.log("Generated:", path.join(outDir, `${baseName}.avif`));
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
