/**
 * Mengubah gambar mentah di works/ menjadi turunan .webp yang layak dikirim ke browser,
 * lalu menulis src/content/manifest.json berisi ukuran dan placeholder blur tiap gambar.
 *
 * Jalankan: npm run assets
 *
 * Gambar mentah tidak pernah ikut ter-deploy. Hanya isi public/works/ yang dipakai.
 */

import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "works");
const OUT_DIR = path.join(ROOT, "public", "works");
const MANIFEST = path.join(ROOT, "src", "content", "manifest.json");

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);

/** Lebar maksimum turunan. Gambar sangat lebar diberi ruang lebih agar detailnya terbaca. */
const maxWidthFor = (width, height) => (width / height >= 2 ? 2400 : 1800);

const QUALITY = 82;

/**
 * Turunan terpotong di luar galeri, dicatat di manifest sebagai
 * "<folder>/<berkas>#<nama>". `top` dan `bottom` adalah bagian tinggi lembar
 * yang dibuang.
 *
 * pita: deretan figur untuk pita di halaman depan, tanpa judul lembar di atas
 * dan tepi kosong di bawahnya.
 */
const CROPS = [
  {
    dir: "sunlit minimalism",
    file: "04 lima tampilan.png",
    name: "pita",
    top: 0.09,
    bottom: 0.08,
    maxWidth: 2400,
  },
];

/** "project bank bpd diy" -> "project-bank-bpd-diy" */
export const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s.-]/g, "")
    .replace(/[\s_.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const outputName = (file) => {
  const base = slugify(path.basename(file, path.extname(file)));
  // Nama berkas seperti "ChatGPT Image Jul 12, 2026, 02_17_49 PM" menyusut jadi mirip
  // satu sama lain, jadi ditambah sidik pendek dari nama aslinya agar tetap unik.
  const hash = createHash("sha1").update(file).digest("hex").slice(0, 6);
  return `${base || "gambar"}-${hash}`;
};

const formatBytes = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

async function collectSources() {
  const dirs = await readdir(SRC_DIR, { withFileTypes: true });
  const sources = [];

  for (const dir of dirs) {
    if (!dir.isDirectory()) continue;
    const files = await readdir(path.join(SRC_DIR, dir.name));
    for (const file of files.sort()) {
      if (!IMAGE_EXT.has(path.extname(file).toLowerCase())) continue;
      sources.push({ dir: dir.name, file });
    }
  }

  return sources;
}

async function main() {
  const sources = await collectSources();
  if (sources.length === 0) {
    throw new Error(`Tidak ada gambar di ${SRC_DIR}`);
  }

  await rm(OUT_DIR, { recursive: true, force: true });

  const manifest = {};
  let bytesIn = 0;
  let bytesOut = 0;

  for (const { dir, file } of sources) {
    const absolute = path.join(SRC_DIR, dir, file);
    const input = sharp(absolute, { limitInputPixels: false });
    const meta = await input.metadata();
    bytesIn += (await stat(absolute)).size;

    const targetDir = path.join(OUT_DIR, slugify(dir));
    await mkdir(targetDir, { recursive: true });

    const name = `${outputName(file)}.webp`;
    const target = path.join(targetDir, name);

    const maxWidth = maxWidthFor(meta.width, meta.height);
    const width = Math.min(meta.width, maxWidth);
    const height = Math.round((meta.height / meta.width) * width);

    await input
      .clone()
      .resize({ width, withoutEnlargement: true })
      // Gambar teknis banyak yang punya latar transparan; ratakan ke putih supaya
      // garis hitamnya tetap terbaca di tema terang maupun gelap.
      .flatten({ background: "#ffffff" })
      .webp({ quality: QUALITY })
      .toFile(target);

    const blur = await input
      .clone()
      .resize({ width: 16 })
      .flatten({ background: "#ffffff" })
      .webp({ quality: 40 })
      .toBuffer();

    bytesOut += (await stat(target)).size;

    manifest[`${dir}/${file}`] = {
      src: `/works/${slugify(dir)}/${name}`,
      width,
      height,
      blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
    };

    process.stdout.write(`  ${dir}/${file} -> ${width}x${height}\n`);

    for (const crop of CROPS) {
      if (crop.dir !== dir || crop.file !== file) continue;

      const region = {
        left: 0,
        top: Math.round(meta.height * crop.top),
        width: meta.width,
        height: Math.round(meta.height * (1 - crop.top - crop.bottom)),
      };
      const cropWidth = Math.min(region.width, crop.maxWidth);
      const cropHeight = Math.round((region.height / region.width) * cropWidth);
      const cropName = `${outputName(file)}-${crop.name}.webp`;
      const cropTarget = path.join(targetDir, cropName);

      await input
        .clone()
        .extract(region)
        .resize({ width: cropWidth, withoutEnlargement: true })
        .flatten({ background: "#ffffff" })
        .webp({ quality: QUALITY })
        .toFile(cropTarget);

      const cropBlur = await input
        .clone()
        .extract(region)
        .resize({ width: 16 })
        .flatten({ background: "#ffffff" })
        .webp({ quality: 40 })
        .toBuffer();

      bytesOut += (await stat(cropTarget)).size;

      manifest[`${dir}/${file}#${crop.name}`] = {
        src: `/works/${slugify(dir)}/${cropName}`,
        width: cropWidth,
        height: cropHeight,
        blurDataURL: `data:image/webp;base64,${cropBlur.toString("base64")}`,
      };

      process.stdout.write(`  ${dir}/${file}#${crop.name} -> ${cropWidth}x${cropHeight}\n`);
    }
  }

  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(
    `\n${sources.length} gambar diproses.\n` +
      `Sumber ${formatBytes(bytesIn)} -> keluaran ${formatBytes(bytesOut)}` +
      ` (${Math.round((1 - bytesOut / bytesIn) * 100)}% lebih kecil).\n` +
      `Manifest: ${path.relative(ROOT, MANIFEST)}`
  );

  // Peringatkan kalau ada berkas di works/ yang belum terdaftar di projects.ts,
  // supaya karya baru tidak diam-diam hilang dari website.
  const projectsSource = await readFile(path.join(ROOT, "src", "content", "projects.ts"), "utf8");
  const unused = Object.keys(manifest).filter((key) => {
    if (key.includes("#")) return false;
    const file = key.slice(key.indexOf("/") + 1);
    return !projectsSource.includes(JSON.stringify(file).slice(1, -1));
  });
  if (unused.length > 0) {
    console.log(`\nBelum dipakai di projects.ts (${unused.length}):`);
    for (const key of unused) console.log(`  ${key}`);
  }
}

await main();
