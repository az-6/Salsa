---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx","src/app/globals.css","src/components/Header.tsx","src/components/Footer.tsx","src/app/karya/[slug]/page.tsx","src/app/tentang/page.tsx","src/app/sertifikat/page.tsx","src/app/kontak/page.tsx"]
---

# Surface brief: Beranda (/) dan dunia visual situs

## Scope

Redesign total portofolio Salsabila Azzahra. Surface utama: beranda (`src/app/page.tsx`). Dunia visual yang sama menjangkau layout, header, footer, halaman proyek, tentang, sertifikat, dan kontak. Mode pengunjung: **Experience** (karya memimpin dari viewport pertama; antarmuka mundur), dengan aksi kontak yang selalu terlihat karena sukses produk adalah perekrut menghubungi.

## Audience, job, action, proof

- Audiens: HR dan tim desain brand fesyen Indonesia, datang dari tautan lamaran, sering di ponsel, waktu singkat, membandingkan kandidat.
- Job: memutuskan dalam hitungan menit apakah kandidat ini layak dipanggil.
- Aksi: WhatsApp atau email.
- Bukti: 9 proyek nyata (koleksi Srikandi, Kipas Pesisir, Sunlit Minimalism, motif Jejak Laut, seragam Bank BPD DIY, Bank CCB, Kimia Farma, lembar teknis gamis, studi Nirmana), 3 sertifikat, pasangan lembar motif + lembar teknis.
- Konstanta: konten Indonesia; tanpa foto profil (keputusan pemilik 2026-10-01); email, Instagram, dan WhatsApp asli diisi pemilik pada 2026-10-01; URL situs otomatis dari Vercel; stack Next.js 16 + Tailwind 4 dipertahankan; rute dan struktur bebas ditata ulang.

## Direction contract

THESIS: Website ini adalah kain yang sedang ditenun di ATBM: setiap elemen adalah satu lemparan benang pakan yang melintas di atas lusi nila, satu baris tiap kali. Ia menolak susunan default kategori: nama serif besar di kertas krem di atas grid kartu sampul seukuran, dan kebalikannya yang sama terduga, grid brutalis gelap dengan marquee.

OWN-WORLD: Ground nila #1c2541 dengan tekstur lusi vertikal pitch 3px kontras sangat rendah (~4%), menutup seluruh halaman, bukan panel. Teks benang katun #ece4d2. Satu benang mengkudu merah #b5302a sebagai teropong: penanda gulir tetap di tepi kiri viewport, state aktif nav, tautan aksi, dan garis potong kain di kontak. Benang emas #c9a14a hanya untuk angka terhitung (jumlah lembar, tahun di selvedge, hitungan galeri). Teks sekunder diwarnai dari nila yang dicerahkan (#a8b0cc), bukan abu. Huruf: Bricolage Grotesque (optical size lebar untuk display, condensed untuk label selvedge; satu keluarga untuk display dan isi) dan Azeret Mono hanya untuk hitungan benang dan ukuran. Komponen: pita pakan horizontal full-bleed sebagai unit konten, tanpa kartu, kotak, bayangan, radius, atau border-left; garis hanya 1px benang di ujung lemparan. Gambar duduk telanjang di atas nila; lembar pindaian putih terbaca sebagai kertas pola di atas kain. Label selvedge vertikal di tepi kiri-kanan (writing-mode vertical) membawa peran, kota, tahun, dan tahap. Lebar pita menyandikan bobot karya: komersial dan Srikandi lebar penuh, studi lebih sempit. Kaitan browser ikut ditenun: seleksi teks nila terang di atas katun, focus ring benang merah 2px offset, scrollbar tipis katun di atas nila, angka tabular.

STORY: Perekrut mendarat, melihat nama terjalin menembus pita tiga tampilan Srikandi, dan dalam dua detik tahu ini perancang busana dan motif yang berakar pada khazanah Indonesia. Menggulir, pita-pita karya melintas satu per satu dari sisi bergantian; di selvedge setiap pita terbaca tahapnya (Riset · Motif · Teknis) dan jenisnya, sehingga proses lengkap terlihat tanpa membaca isi. Pita seragam Bank dan Kimia Farma yang lebar memberi bukti komersial. Sampai di garis potong kain, ia menekan WhatsApp atau email.

FIRST VIEWPORT: Full-bleed nila bertekstur lusi, tinggi 100svh. Baris teratas: sisir (header) setinggi 3.5rem, gigi-gigi 1px benang katun di sepanjang lebar, dengan Karya · Tentang · Sertifikat sebagai heddle katun dan Hubungi sebagai heddle merah di kanan; nama pendek "Salsabila" di kiri sebagai teks sisir. Tepi kiri: label vertikal "Perancang busana & motif permukaan"; tepi kanan: "Bandung · 2024–2026" dalam Azeret Mono emas. Tengah: nama SALSABILA di baris pertama dan AZZAHRA di baris kedua, display ~13vw (maks 6rem di desktop per lantai craft dinaikkan ke 11rem karena ini permukaan Experience dan brief menuntut skala, dicatat sebagai keputusan sadar), katun, tracking -0.03em. Di antara kedua baris nama melintas satu pita gambar full-bleed setinggi ~34svh: tiga tampilan Srikandi (works/fashion illustration/14.png), object-fit cover, dari tepi kiri ke tepi kanan. Huruf nama terjalin di atas dan di bawah pita lewat mask garis horizontal selang-seling pitch 12px pada zona tumpang tindih, sehingga nama tampak ditenun menembus gambar. Di bawah pita: satu kalimat peran dan lokasi dalam ukuran isi, lalu tautan "Kirim pesan" sebagai ujung benang merah dengan garis 1px yang memanjang ke tepi kanan. Dasar viewport: puncak pita pakan pertama (Srikandi, label selvedge "01 · Koleksi busana · Riset · Motif") sudah mengintip. Aksi utama: Hubungi merah di sisir kanan atas, dan "Kirim pesan" di bawah nama.

FORM: Lusi & pakan alat tenun bukan mesin, kandidat 7 dari 7 pada daftar terurut saya (di bawah lembar teknis, amplop pola jahit, meja potong pola, buku swatch pasar tekstil, label garmen, papan proses batik). Seed key 42ef3d8e, scope direction, mode experience, code-led. Interaksi tanda tangan: "lemparan teropong": setiap pita pakan masuk horizontal dari kiri lalu kanan bergantian saat memasuki viewport (IntersectionObserver, satu jam bersama, ease-out eksponensial 700ms, dari keadaan sudah terlihat tanpa JS; prefers-reduced-motion mengganti geser dengan fade), dan benang merah teropong di tepi kiri viewport memanjang mengikuti kemajuan gulir dengan nama seksi aktif menaikinya. Jangkauan lintas surface: halaman proyek = kain digulung lepas (fakta di selvedge, lembar sebagai pita bertumpuk, lembar motif dan lembar teknis berpasangan dalam satu pita); tentang = rak gulungan benang (potret sebagai pelat, bio satu measure panjang, keahlian sebagai daftar benang); sertifikat = tiga pelat kertas di atas kain; kontak = garis potong kain: benang merah 1px melintang penuh, lalu saluran kontak dan formulir. Risiko jujur: nila menenggelamkan pindaian kontras rendah, tekstur lusi jadi derau, jalinan menuntut disiplin pitch.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- Janji waktu balas (`replyNote` di `src/content/site.ts`) adalah salinan situs lama yang belum dikonfirmasi ulang pemilik; kosongkan untuk menyembunyikannya.
- Apakah klien korporat dan studio motif dilayani eksplisit di halaman: belum diputuskan; pita seragam korporat tetap tampil lebar sebagai bukti tanpa seksi khusus.

## Perubahan atas permintaan pemilik (2026-10-01)

Bagian ini menggantikan butir kontrak di atas bila berbeda.

- Pita hero memakai lima tampilan Sunlit Minimalism (`works/sunlit minimalism/04 lima tampilan.png`, potongan `#pita`), bukan tiga tampilan Srikandi. Lembarnya berlatar putih, jadi salinan nama di atas pita berwarna nila dan dipotong di tepi pita.
- Bukti kini 7 proyek: Srikandi, Persona Analisis, Ilustrasi Fashion (Sunlit Minimalism), Nautica Guard, Freelance Report, Internship Report, Nirmana. Seragam Bank BPD DIY, Bank CCB, dan Batik Kimia Farma digabung dalam Freelance Report dan dipisah per kelompok di halaman proyeknya.
- Judul, subjudul, deskripsi, dan peran enam proyek pertama serta bio dua paragraf adalah tulisan pemilik; dipakai apa adanya.
