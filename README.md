# Website portofolio — Salsabila Azzahra

Website portofolio untuk perancang busana dan motif permukaan. Dibangun dengan
Next.js (App Router) + Tailwind, seluruh halaman dihasilkan statis.

---

## Yang perlu kamu ganti dulu

Cari komentar `TODO: ganti` di dua berkas ini. Hanya dua berkas ini yang perlu
disentuh untuk memperbarui isi website.

**`src/content/site.ts`** — data diri
- `email`, `instagram`, `whatsapp`, `location` — sekarang masih contoh
- `bio` — tiga paragraf draf, tulis ulang dengan suaramu sendiri
- `education` — periksa tahun dan nama jurusan

**`src/content/projects.ts`** — karya
- `year` tiap proyek — angkanya perkiraan dari tanggal berkas, bukan catatan resmi
- `role` tiap proyek — periksa perannya benar
- `body` — paragraf proses, disusun dari apa yang terlihat di gambar

**`public/profil.jpg`** — timpa dengan fotomu. Potret tegak, minimal 800 px.
Yang ada sekarang masih gambar penanda, bukan foto.

**Alamat website** — setelah tayang, isi `NEXT_PUBLIC_SITE_URL` (di Vercel:
Settings → Environment Variables) dengan alamat aslinya. Nilai itu dipakai
`sitemap.xml`, `robots.txt`, dan pratinjau tautan di media sosial.

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
src/content/projects.ts    daftar 8 proyek + 3 sertifikat
src/content/manifest.json  dihasilkan npm run assets — jangan disunting tangan
src/app/globals.css        warna, tipografi, seluruh tata letak
src/app/page.tsx           halaman depan
src/app/karya/[slug]/      halaman tiap proyek
src/app/sitemap.ts         daftar halaman untuk mesin pencari
src/app/robots.ts          robots.txt
src/components/            Header, Footer, Gallery, Lightbox, CertificateList,
                           ProjectRow, ContactForm
scripts/prepare-assets.mjs pengubah gambar mentah jadi turunan web
scripts/shots.mjs          alat bantu: potret tiap halaman (npm run shots)
scripts/check.mjs          alat bantu: uji lightbox, form, dan gambar (npm run check)
```

Dua skrip terakhir hanya alat bantu saat menggarap tampilan; keduanya butuh
Chrome terpasang dan server sedang jalan. Atur lewat variabel lingkungan
`BASE` (alamat server) dan `CHROME` (lokasi chrome.exe) kalau berbeda.

---

## Catatan desain

Palet warna tidak dipilih dari luar, melainkan diambil dari papan suasana
koleksi Srikandi milik Salsabila sendiri (`works/fashion illustration/13.png`):

| | |
|---|---|
| `#f8f7f2` | latar halaman |
| `#313558` | nila — teks dan judul |
| `#4f6c8a` | biru — teks sekunder |
| `#8196a9` | biru pudar — garis bantu |
| `#b85744` | merah bata — tinta keterangan |

Garis keterangan bermata tipis di seluruh website (kelas `.callout`) meniru
lembar spesifikasi Salsabila, tempat tiap detail jahitan ditarik keluar dengan
garis dan diberi nama — dipakai menggantikan label huruf kapital.

`#8196a9` hanya menggambar garis, tidak pernah menjadi teks — kontrasnya 2,85:1
di atas kertas, di bawah ambang keterbacaan. Teks redup memakai `#4f6c8a` atau
`#5f6475`; aksen tautan memakai `#94412f`.

Di layar di bawah 640 px gambar keluar sampai tepi layar (kelas `.bleed`),
seperti lembar lookbook yang dicetak tanpa pinggiran. Kepala halaman menempel
saat digulir dan memendekkan nama jadi satu baris supaya tingginya tetap 61 px.
Croquis pembuka dikalikan ke kertas (`mix-blend-mode: multiply`) agar latar
putihnya lenyap dan figurnya berdiri langsung di halaman.

Kontak memakai `mailto:`, tanpa server. Menekan kirim membuka aplikasi email
pengunjung dengan isian sudah terisi. Kalau nanti butuh email benar-benar masuk
ke inbox tanpa perantara, ganti `ContactForm` dengan route handler + Resend.
