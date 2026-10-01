# Website portofolio — Salsabila Azzahra

Website portofolio untuk perancang busana dan motif permukaan. Dibangun dengan
Next.js (App Router) + Tailwind, seluruh halaman dihasilkan statis.

---

## Yang perlu kamu ganti dulu

Cari komentar `TODO: ganti` di dua berkas ini. Hanya dua berkas ini yang perlu
disentuh untuk memperbarui isi website.

**`src/content/site.ts`** — data diri
- `location` — periksa kota tempat kamu berbasis
- `replyNote` — janji waktu balas; kosongkan kalau tidak ingin berjanji
- `education` — periksa tahun dan nama jurusan

**`src/content/projects.ts`** — karya
- `year` tiap proyek — angkanya perkiraan dari tanggal berkas, bukan catatan resmi
- `body` di proyek Nirmana — paragraf draf, disusun dari apa yang terlihat di gambar

**Alamat website** — diambil otomatis dari domain produksi Vercel. Kalau
memakai domain sendiri, isi `NEXT_PUBLIC_SITE_URL` (di Vercel: Settings →
Environment Variables) dengan alamat itu.

---

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev          # buka http://localhost:3000
```

## Menambah karya baru

1. Taruh gambarnya di `works/<nama folder proyek>/`
2. Jalankan `npm run assets` — gambar mentah diubah jadi `.webp` kecil di
   `public/works/`, dan ukurannya dicatat di `src/content/manifest.json`
3. Tambahkan satu baris di `shots` pada proyek yang sesuai di
   `src/content/projects.ts`, lengkap dengan `alt` yang menjelaskan isi gambar

Kalau ada gambar di `works/` yang belum terdaftar, `npm run assets` akan
menyebutkannya di akhir. Kalau ada yang terdaftar tapi belum diproses,
`npm run build` akan gagal dengan pesan yang menyebut nama berkasnya —
sengaja, supaya karya tidak diam-diam hilang dari website.

Satu proyek boleh memuat beberapa pekerjaan (lihat Freelance Report): beri
`group` pada lembar pertama tiap pekerjaan, dan `dir` pada lembar yang berkasnya
ada di folder lain. Halaman proyek lalu menampilkan judul dan jumlah lembar
tiap kelompok.

Gambar pita di halaman depan adalah potongan dari
`works/sunlit minimalism/04 lima tampilan.png`. Untuk menggantinya, ubah `PITA`
di `src/app/page.tsx` dan daftar `CROPS` di `scripts/prepare-assets.mjs`.

Folder `works/` tidak ikut ter-deploy. Yang dipakai website hanya turunan
`.webp` di `public/works/`.

---

## Menayangkan ke internet

```bash
npm i -g vercel
vercel deploy          # pratinjau
vercel deploy --prod   # tayang
```

---

## Struktur

```
src/content/site.ts        data diri dan bio
src/content/projects.ts    daftar 7 proyek + 3 sertifikat
src/content/manifest.json  dihasilkan npm run assets — jangan disunting tangan
src/app/globals.css        warna, tipografi, seluruh tata letak
src/app/page.tsx           halaman depan
src/app/karya/[slug]/      halaman tiap proyek
src/app/sitemap.ts         daftar halaman untuk mesin pencari
src/app/robots.ts          robots.txt
src/components/            Header (sisir), Teropong, Weft, WeftRow, Gallery,
                           Lightbox, CertificateList, ContactForm, Footer, Ikon
PRODUCT.md                 konteks produk: pengguna, tujuan, batasan
DESIGN.md                  sistem desain: warna, huruf, komponen, gerak
scripts/prepare-assets.mjs pengubah gambar mentah jadi turunan web
scripts/shots.mjs          alat bantu: potret tiap halaman (npm run shots)
scripts/check.mjs          alat bantu: uji lightbox, form, dan gambar (npm run check)
scripts/viewport.mjs       alat bantu: potret viewport pertama + galat konsol
```

Dua skrip terakhir hanya alat bantu saat menggarap tampilan; keduanya butuh
Chrome terpasang dan server sedang jalan. Atur lewat variabel lingkungan
`BASE` (alamat server) dan `CHROME` (lokasi chrome.exe) kalau berbeda.

---

## Catatan desain

Dunia visualnya **Lungsi & Pakan**: halaman diperlakukan sebagai kain yang
sedang ditenun di alat tenun bukan mesin. Latar nila bertekstur benang lusi
vertikal; setiap baris karya adalah satu lemparan benang pakan yang masuk dari
kiri dan kanan bergantian; satu benang merah mengkudu (teropong) di tepi kiri
layar menandai kemajuan gulir dan aksi utama; angka yang dihitung memakai emas.
Nama di halaman depan terjalin menembus pita gambar lima tampilan Sunlit
Minimalism.

Token, kontras, huruf (Bricolage Grotesque dan Azeret Mono), komponen, dan
aturan gerak dicatat lengkap di `DESIGN.md`. Konteks produk yang mendasari
keputusan itu ada di `PRODUCT.md`.

Merah `#b5302a` tidak pernah menjadi teks: kontrasnya di atas nila terlalu
rendah. Ia hanya menggambar benang 1-2 px dan isian tombol. Teks merah memakai
`#e8695f`; teks sekunder memakai nila yang dicerahkan `#a8b0cc`, bukan abu.

Gerak masuk baris (`Weft.tsx`) hanya hidup bila JS ada dan pengguna tidak
meminta `prefers-reduced-motion`; tanpa keduanya semua konten terlihat sejak
awal.

Kontak memakai `mailto:`, tanpa server. Menekan kirim membuka aplikasi email
pengunjung dengan isian sudah terisi. Kalau nanti butuh email benar-benar masuk
ke inbox tanpa perantara, ganti `ContactForm` dengan route handler + Resend.
