/** Alat bantu tinjauan visual: potret viewport pertama satu halaman (desktop dan ponsel) plus galat konsol. Bukan bagian dari website. */
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE ?? "http://localhost:3000";
const OUT = process.env.OUT ?? "./.impeccable/review";
const path = process.env.PAGE ?? "/";
const name = process.env.NAME ?? "hero";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
});

for (const vp of [
  { label: "desktop", width: 1440, height: 900 },
  { label: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage();
  const logs = [];
  page.on("console", (m) => {
    if (["error", "warning"].includes(m.type())) logs.push(`${m.type()}: ${m.text()}`);
  });
  page.on("pageerror", (e) => logs.push(`pageerror: ${e.message}`));
  await page.setViewport({ width: vp.width, height: vp.height });
  await page.goto(`${BASE}${path}`, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  const file = `${OUT}/${name}-${vp.label}.png`;
  await page.screenshot({ path: file, fullPage: false });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  console.log(file, overflow > 0 ? `OVERFLOW ${overflow}px` : "no overflow");
  for (const l of logs) console.log("  ", l.slice(0, 400));
  await page.close();
}

await browser.close();
