/** Alat bantu tinjauan visual saat pengembangan. Bukan bagian dari website. */
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const CHROME = process.env.CHROME ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE ?? "http://localhost:3000";
const OUT = process.env.OUT ?? "./.screenshots";

const targets = [
  { path: "/", name: "beranda", full: true },
  { path: "/karya/srikandi", name: "proyek", full: true },
  { path: "/tentang", name: "tentang", full: true },
  { path: "/sertifikat", name: "sertifikat", full: true },
  { path: "/kontak", name: "kontak", full: true },
];

const viewports = [
  { label: "desktop", width: 1440, height: 900 },
  { label: "mobile", width: 390, height: 844 },
];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
});

const only = process.argv[2];

for (const viewport of viewports) {
  if (only && only !== viewport.label) continue;

  const page = await browser.newPage();
  await page.setViewport({ width: viewport.width, height: viewport.height });

  for (const target of targets) {
    await page.goto(`${BASE}${target.path}`, { waitUntil: "networkidle0", timeout: 60000 });
    // Gulir bertahap supaya setiap gambar yang dimuat malas sempat masuk
    // viewport. Melompat langsung ke dasar halaman melewatkan bagian tengah.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 220));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 500));
    });
    await page.evaluate(() =>
      Promise.all(
        Array.from(document.images)
          .filter((img) => !img.complete)
          .map((img) => new Promise((r) => img.addEventListener("load", r, { once: true })))
      )
    );

    const file = `${OUT}/${target.name}-${viewport.label}.png`;
    await page.screenshot({ path: file, fullPage: target.full });
    console.log(file);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (overflow > 0) console.log(`  !! scroll mendatar ${overflow}px di ${target.path}`);
  }

  await page.close();
}

await browser.close();
