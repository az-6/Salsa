/** Pemeriksaan fungsional saat pengembangan. Bukan bagian dari website. */
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE ?? "http://localhost:3000";
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME ?? "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
});

const fail = [];
const ok = (label) => console.log(`  ok   ${label}`);
const bad = (label, detail) => {
  fail.push(label);
  console.log(`  GAGAL ${label}${detail ? ` — ${detail}` : ""}`);
};
const expect = (passed, label, detail) => {
  if (passed) ok(label);
  else bad(label, detail);
};

// --- bobot halaman depan ---------------------------------------------------
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  let bytes = 0;
  page.on("response", async (res) => {
    const len = Number(res.headers()["content-length"] ?? 0);
    bytes += len;
  });
  await page.goto(BASE, { waitUntil: "networkidle0" });
  console.log(`\nBobot transfer halaman depan (tanpa gulir): ${(bytes / 1024).toFixed(0)} KB`);
  await page.close();
}

// --- lightbox --------------------------------------------------------------
{
  console.log("\nLightbox di /karya/srikandi");
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE}/karya/srikandi`, { waitUntil: "networkidle0" });

  await page.click(".gallery-button");
  await new Promise((r) => setTimeout(r, 400));
  expect(await page.$eval("dialog.viewer", (d) => d.open), "terbuka saat diklik");

  const first = await page.$eval(".viewer-count", (el) => el.textContent.trim());
  await page.click('button[aria-label="Gambar berikutnya"]');
  await new Promise((r) => setTimeout(r, 300));
  const second = await page.$eval(".viewer-count", (el) => el.textContent.trim());
  expect(first !== second, `maju gambar (${first} -> ${second})`, first);

  await page.keyboard.press("ArrowLeft");
  await new Promise((r) => setTimeout(r, 300));
  const back = await page.$eval(".viewer-count", (el) => el.textContent.trim());
  expect(back === first, "tombol panah kiri", `${back} != ${first}`);

  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 400));
  expect(!(await page.$eval("dialog.viewer", (d) => d.open)), "Escape menutup");
  await page.close();
}

// --- form kontak -----------------------------------------------------------
{
  console.log("\nForm kontak");
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // window.location.href tidak bisa diganti dari halaman, jadi navigasi mailto
  // ditangkap lewat protokol DevTools sebelum Chrome menyerahkannya ke OS.
  const mailtos = [];
  const cdp = await page.createCDPSession();
  await cdp.send("Page.enable");
  await cdp.send("Page.setInterceptFileChooserDialog", { enabled: false }).catch(() => {});
  cdp.on("Page.frameRequestedNavigation", ({ url }) => mailtos.push(url));
  await cdp.send("Page.setLifecycleEventsEnabled", { enabled: true });

  await page.goto(`${BASE}/kontak`, { waitUntil: "networkidle0" });
  await page.type("#nama", "Rani");
  await page.type("#email", "rani@contoh.com");
  await page.type("#pesan", "Butuh 40 seragam batik.");
  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 600));

  const status = await page.$eval(".contact-status", (el) => el.textContent.trim());
  expect(errors.length === 0, "tidak ada galat JavaScript", errors.join("; "));
  expect(status.length > 0, `pesan cadangan muncul: "${status}"`);

  const mailto = mailtos.find((u) => u.startsWith("mailto:"));
  if (mailto && decodeURIComponent(mailto).includes("Rani")) {
    ok(`menyusun ${decodeURIComponent(mailto).slice(0, 60)}...`);
  } else {
    bad("menyusun mailto", mailtos.join(" | ") || "tidak ada navigasi tertangkap");
  }
  await page.close();
}

// --- semua gambar benar-benar termuat --------------------------------------
{
  console.log("\nGambar termuat");
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  for (const path of ["/", "/karya/jejak-laut", "/sertifikat"]) {
    await page.goto(BASE + path, { waitUntil: "networkidle0" });
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 250));
      }
    });
    const broken = await page.evaluate(() =>
      Array.from(document.images)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src)
    );
    const total = await page.evaluate(() => document.images.length);
    expect(broken.length === 0, `${path} — ${total} gambar`, broken.join(", "));
  }
  await page.close();
}

await browser.close();
console.log(fail.length === 0 ? "\nSemua pemeriksaan lulus." : `\n${fail.length} gagal.`);
process.exit(fail.length === 0 ? 0 : 1);
