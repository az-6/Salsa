# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pengunjung utama: HR dan tim desain di brand fesyen Indonesia yang sedang merekrut
fashion designer, pattern maker, atau surface pattern designer (penuh waktu atau
magang). Mereka datang dari tautan di CV, LinkedIn, Instagram, atau email lamaran,
sering dari ponsel, dengan waktu singkat, dan sedang membandingkan beberapa kandidat.
Pekerjaan mereka: memutuskan dalam beberapa menit apakah kandidat ini layak dipanggil
wawancara, berdasarkan kualitas karya, kelengkapan proses (riset sampai lembar
teknis), dan pengalaman komersial.

Audiens sekunder (belum dikonfirmasi sebagai prioritas): klien seragam korporat
dan studio motif/batik.

## Product Purpose

Portofolio pribadi Salsabila Azzahra, perancang busana dan motif permukaan yang
berbasis di Bandung, lulusan S1 Kriya Tekstil Fashion Universitas Muhammadiyah Bandung
(2021-2025). Website memperlihatkan karya dan proses kerjanya agar perekrut
yakin dan menghubunginya.

Berhasil berarti: pengunjung menghubungi lewat WhatsApp atau email untuk lowongan,
magang, atau proyek. Kontak adalah aksi utama; arsip karya adalah bukti yang
mendorong ke situ.

## Positioning

Desainer yang bekerja dari khazanah visual Indonesia (wayang kulit, batik pesisir,
ragam hias tradisional) dan menerjemahkannya sampai ke lembar teknis siap produksi.
Karya berpasangan: satu lembar motif, satu lembar spesifikasi jahitan. Bukti
komersial nyata: seragam untuk Bank BPD DIY, Bank CCB, dan Kimia Farma. Ditambah
sertifikasi BNSP sebagai penggambar motif batik. Kombinasi riset budaya + motif +
teknis produksi + pengalaman korporat ini yang membedakannya dari portofolio
ilustrasi mode semata.

## Operating Context

- Dibuka dari tautan lamaran; kunjungan pertama sering di ponsel.
- Perekrut ingin memindai cepat lalu memperdalam satu atau dua proyek.
- Konten diperbarui oleh pemilik lewat dua berkas data (`src/content/site.ts`,
  `src/content/projects.ts`) dan folder `works/`; gambar diproses `npm run assets`.
- Deploy target: Vercel, seluruh halaman statis.

## Capabilities and Constraints

- Stack yang ada: Next.js 16 App Router, React 19, Tailwind 4, TypeScript, sharp
  untuk pipeline gambar. Dipertahankan sebagai fondasi; struktur halaman, rute,
  komponen, dan seluruh tampilan boleh ditata ulang total (konfirmasi pemilik:
  "tidak ada yang wajib, bebas ubah semuanya").
- Bahasa konten: Indonesia. Versi Inggris tidak diputuskan (tidak diminta).
- Konten yang ada: 7 proyek (Srikandi, Persona Analisis, Ilustrasi Fashion/Sunlit
  Minimalism, Nautica Guard, Freelance Report yang memuat seragam Bank BPD DIY, Bank
  CCB, dan Batik Kimia Farma, Internship Report, Nirmana), 3 sertifikat, bio 2
  paragraf, 6 keahlian, 1 pendidikan. Judul, subjudul, deskripsi, dan peran enam
  proyek pertama serta bio adalah tulisan pemilik (2026-10-01) dan dipakai apa adanya.
- Terminologi yang dipakai pemilik: "karya", "motif permukaan", "lembar teknis",
  "papan suasana", "koleksi busana", "seragam korporat".
- Belum diputuskan: apakah klien korporat dan studio motif menjadi audiens yang
  dilayani secara eksplisit di halaman.

## Brand Commitments

- Nama: Salsabila Azzahra (pendek: Salsabila). Peran: "Perancang busana & motif
  permukaan".
- Suara tulisan yang ada: bahasa Indonesia baku, tenang, deskriptif, orang pertama
  di bio. Tidak ada logo atau identitas visual yang mengikat; palet dan tipografi
  versi sekarang bukan komitmen dan boleh diganti.

## Evidence on Hand

- Gambar karya asli di `works/` (ilustrasi mode, motif, lembar teknis, papan
  suasana, seragam korporat, studi nirmana), diproses ke `public/works/` lewat
  `scripts/prepare-assets.mjs`.
- Sertifikat asli di `works/certificate/` (Penggambar Motif Batik BNSP 2024,
  Program Pembinaan Mahasiswa Wirausaha 2024, KMI Expo XV 2024).
- Teks proyek di `src/content/projects.ts` ditulis pemilik (kecuali Nirmana, yang
  masih draf dari gambar); tahun ditandai TODO untuk diverifikasi pemilik.
- Kontak asli tersedia sejak 2026-10-01 di `src/content/site.ts`: email,
  Instagram, dan WhatsApp diisi pemilik.
- Tidak ada foto profil; pemilik memutuskan situs tanpa potret (2026-10-01).
  URL situs diambil otomatis dari domain produksi Vercel atau
  `NEXT_PUBLIC_SITE_URL`. Testimoni klien, angka, dan logo klien tidak tersedia
  dan tidak boleh dikarang.

## Product Principles

1. Karya memimpin: gambar asli tampil dulu, teks menjelaskan sesudahnya.
2. Tunjukkan proses, bukan hanya hasil: riset, motif, lembar teknis terlihat
   sebagai satu rangkaian di tiap proyek.
3. Bukti komersial dipajang jujur: proyek seragam korporat dan sertifikat BNSP
   ditampilkan apa adanya, tanpa klaim tambahan.
4. Jalan ke kontak selalu dekat: perekrut yang sudah yakin tidak perlu mencari.
5. Nyaman di ponsel dan cepat dipindai: pengunjung pertama datang dari tautan
   lamaran dengan waktu terbatas.

## Accessibility & Inclusion

Alt text deskriptif untuk setiap gambar karya sudah menjadi kebiasaan di data
proyek dan wajib dipertahankan. Tidak ada standar formal yang ditetapkan; target
kerja adalah WCAG 2.2 AA untuk kontras dan navigasi keyboard.
