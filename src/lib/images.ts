import manifest from "@/content/manifest.json";

export type ImageEntry = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

const entries = manifest as Record<string, ImageEntry>;

/**
 * Mengambil turunan gambar yang sudah disiapkan `npm run assets`.
 * Melempar galat saat build kalau gambarnya belum pernah diproses, supaya
 * karya yang hilang ketahuan sebelum website tayang, bukan sesudahnya.
 */
export function getImage(dir: string, file: string): ImageEntry {
  const entry = entries[`${dir}/${file}`];
  if (!entry) {
    throw new Error(
      `Gambar belum diproses: "${dir}/${file}". Pastikan berkasnya ada di works/, lalu jalankan: npm run assets`
    );
  }
  return entry;
}

