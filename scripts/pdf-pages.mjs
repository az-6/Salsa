/**
 * Alat bantu: merender tiap halaman PDF menjadi PNG lewat Chrome headless +
 * pdf.js, karena mesin ini tidak punya pdftoppm. Bukan bagian dari website.
 *
 * Pakai: node scripts/pdf-pages.mjs "<berkas.pdf>" "<folder keluaran>" [skala]
 */
import { createReadStream, statSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import puppeteer from "puppeteer-core";

const [, , pdfPath, outDir, scaleArg] = process.argv;
if (!pdfPath || !outDir) {
  console.error('pakai: node scripts/pdf-pages.mjs "<berkas.pdf>" "<folder>" [skala]');
  process.exit(1);
}
const scale = Number(scaleArg ?? 1.5);
const CHROME = process.env.CHROME ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38";

await mkdir(outDir, { recursive: true });

const server = http.createServer((req, res) => {
  if (req.url === "/doc.pdf") {
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Length": statSync(pdfPath).size,
      "Access-Control-Allow-Origin": "*",
    });
    createReadStream(pdfPath).pipe(res);
    return;
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!doctype html><html><body><script type="module">
    import * as pdfjs from "${PDFJS}/pdf.min.mjs";
    pdfjs.GlobalWorkerOptions.workerSrc = "${PDFJS}/pdf.worker.min.mjs";
    window.pdfjs = pdfjs;
    window.ready = true;
  </script></body></html>`);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const port = server.address().port;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
page.on("console", (m) => m.type() === "error" && console.error("  konsol:", m.text()));
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "load" });
await page.waitForFunction(() => window.ready === true, { timeout: 60000 });

const count = await page.evaluate(async (port) => {
  const doc = await window.pdfjs.getDocument(`http://127.0.0.1:${port}/doc.pdf`).promise;
  window.doc = doc;
  return doc.numPages;
}, port);
console.log(`${count} halaman`);

for (let n = 1; n <= count; n++) {
  const dataUrl = await page.evaluate(
    async (n, scale) => {
      const pg = await window.doc.getPage(n);
      const viewport = pg.getViewport({ scale });
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(viewport.width);
      canvas.height = Math.round(viewport.height);
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      await pg.render({ canvasContext: ctx, viewport }).promise;
      return canvas.toDataURL("image/png");
    },
    n,
    scale
  );
  const file = path.join(outDir, `hal-${String(n).padStart(2, "0")}.png`);
  await writeFile(file, Buffer.from(dataUrl.split(",")[1], "base64"));
  console.log(file);
}

await browser.close();
server.close();
