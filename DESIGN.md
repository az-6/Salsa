---
name: Lungsi & Pakan
description: "Portofolio Salsabila Azzahra sebagai kain yang sedang ditenun di ATBM: lusi nila, pakan katun, satu benang merah, angka emas."
colors:
  nila: "#1c2541"
  nila-dalam: "#151c33"
  katun: "#ece4d2"
  katun-30: "rgba(236, 228, 210, 0.3)"
  katun-12: "rgba(236, 228, 210, 0.12)"
  lusi-warna: "rgba(236, 228, 210, 0.045)"
  redup: "#a8b0cc"
  mengkudu: "#b5302a"
  mengkudu-terang: "#e8695f"
  mengkudu-hover: "#f07d74"
  mengkudu-tekan: "#c93b33"
  emas: "#c9a14a"
typography:
  nama:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 12.5vw, 11rem)"
    fontWeight: 760
    lineHeight: 0.86
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 96, 'wdth' 100"
  display-l:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 96, 'wdth' 100"
  display-m:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 48, 'wdth' 100"
  catatan:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 450
    lineHeight: 1.35
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 28, 'wdth' 100"
  lede:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "'opsz' 20, 'wdth' 100"
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'opsz' 14, 'wdth' 100"
    fontFeature: "'kern', 'liga'"
  heddle:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.01em"
  label:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.1em"
    fontVariation: "'opsz' 12, 'wdth' 75"
  selvedge:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 500
    letterSpacing: "0.12em"
    fontVariation: "'opsz' 12, 'wdth' 75"
  num:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.08em"
    fontFeature: "'tnum'"
rounded:
  none: "0"
spacing:
  benang: "1px"
  lusi-pitch: "3px"
  gigi-pitch: "12px"
  sisir-h: "3.5rem"
  selvedge: "clamp(2.25rem, 4vw, 3.5rem)"
  gutter: "clamp(1.25rem, 4.5vw, 4.5rem)"
  measure: "66ch"
  kolom-gap: "clamp(1rem, 2.5vw, 2.5rem)"
  pakan-block: "clamp(2rem, 5vw, 4.5rem)"
  kepala-block: "clamp(2.5rem, 6vw, 5rem)"
  seksi-block: "clamp(3rem, 8vw, 7rem)"
  pita-h: "clamp(200px, 38svh, 520px)"
components:
  heddle-merah:
    backgroundColor: "{colors.mengkudu}"
    textColor: "{colors.katun}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.5em"
    typography: "{typography.body}"
  heddle-merah-hover:
    backgroundColor: "{colors.mengkudu-tekan}"
    textColor: "{colors.katun}"
  heddle-merah-nav:
    backgroundColor: "{colors.mengkudu}"
    textColor: "{colors.katun}"
    rounded: "{rounded.none}"
    padding: "0.6em 1em"
    typography: "{typography.heddle}"
  heddle:
    textColor: "{colors.katun}"
    typography: "{typography.heddle}"
    height: "{spacing.sisir-h}"
  benang-link:
    textColor: "{colors.mengkudu-terang}"
    typography: "{typography.body}"
  benang-link-hover:
    textColor: "{colors.mengkudu-hover}"
  katun-link:
    textColor: "{colors.katun}"
    typography: "{typography.body}"
  ujung-benang:
    textColor: "{colors.mengkudu-terang}"
    typography: "{typography.body}"
  field-input:
    backgroundColor: "transparent"
    textColor: "{colors.katun}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0"
    typography: "{typography.body}"
  ikon-tombol:
    backgroundColor: "transparent"
    textColor: "{colors.katun}"
    rounded: "{rounded.none}"
    size: "2.75rem"
  ikon-tombol-merah:
    backgroundColor: "{colors.mengkudu}"
    textColor: "{colors.katun}"
    rounded: "{rounded.none}"
    size: "2.75rem"
  selvedge-teks:
    textColor: "{colors.redup}"
    typography: "{typography.selvedge}"
  label:
    textColor: "{colors.redup}"
    typography: "{typography.label}"
  num:
    textColor: "{colors.emas}"
    typography: "{typography.num}"
  sisir:
    backgroundColor: "{colors.nila}"
    textColor: "{colors.katun}"
    height: "{spacing.sisir-h}"
  pakan:
    backgroundColor: "transparent"
    textColor: "{colors.katun}"
    padding: "{spacing.pakan-block} 0"
---

# Design System: Lungsi & Pakan

## Overview

**Creative North Star: "Kain yang Sedang Ditenun di ATBM"**

Seluruh halaman adalah satu helai kain di alat tenun bukan mesin. Latar nila (`nila`) dengan tekstur lusi vertikal pitch 3px berkontras sangat rendah adalah benang lungsi yang terentang; setiap baris konten adalah satu lemparan benang pakan yang melintas penuh dari tepi ke tepi. Tidak ada kartu, kotak, bayangan, atau radius: batas antar-baris hanya satu benang 1px, gambar duduk telanjang di atas nila, dan lembar pindaian putih terbaca sebagai kertas pola di atas kain. Antarmuka mundur; karya memimpin dari viewport pertama.

Kepadatan sistem sengaja renggang dan berirama: satu lemparan per baris, sisi kiri dan kanan bergantian, dengan label selvedge vertikal di kedua tepi membawa nomor lemparan, jenis, dan peran. Satu benang merah mengkudu bertugas tunggal sebagai "teropong": penanda gulir di tepi kiri viewport, state aktif navigasi, tautan aksi, dan garis potong kain di footer. Benang emas dipesan khusus untuk angka yang dihitung. Dunia ini menolak susunan portofolio default: nama serif di kertas krem di atas grid kartu seukuran, dan kebalikannya, grid brutalis gelap dengan marquee.

Yang tercatat di sini adalah hasil bangunan yang dikirim, bukan rencana. Di mana kontrak arah dan kode berbeda, kode yang berlaku; perbedaan dicatat di bagian yang bersangkutan.

**Key Characteristics:**
- Ground nila penuh halaman dengan tekstur lusi 3px (`lusi-warna`, sekitar 4,5% katun), bukan panel; sisir, penampil, dan body memakai gradien yang sama.
- Satu keluarga huruf, Bricolage Grotesque, dengan sumbu `opsz` dan `wdth` yang mengerjakan seluruh hierarki; Azeret Mono hanya untuk angka terhitung.
- Baris pakan full-bleed bergantian sisi; lebar baris menyandikan bobot karya (`data-bobot="lebar" | "sempit"`).
- Garis hanya 1px benang: ujung lemparan `katun-12`, tepi pita dan gigi sisir `katun-30`, potong kain `mengkudu-terang`.
- Ikon digambar dengan satu bobot garis 1,5px, ujung persegi, sambungan siku (`stroke-linecap: square; stroke-linejoin: miter`).
- Kaitan browser ikut ditenun: seleksi katun di atas nila, focus ring merah 2px offset 3px, scrollbar tipis katun, caret merah, `color-scheme: dark`.

## Colors

Palet ini adalah empat benang di atas satu warna dasar kain: katun untuk teks, merah mengkudu untuk aksi, emas untuk hitungan, dan nila yang dicerahkan (bukan abu) untuk teks sekunder.

### Primary
- **Mengkudu** (`mengkudu`, #b5302a): benang merah struktural. Isian tombol `heddle-merah`, garis bawah tautan `benang-link`, garis 1px `ujung-benang`, isian `ikon-tombol.merah`, `skip-link`. Tidak pernah dipakai sebagai warna teks.
- **Mengkudu Terang** (`mengkudu-terang`, #e8695f, kontras 4,9:1 di atas nila): merah yang boleh jadi teks. Warna tautan aksi, benang teropong 2px, garis aktif nav 2px, garis potong kain, focus ring, caret, garis bawah field saat fokus dan saat `:user-invalid`, penanda `benang-daftar`.
- **Mengkudu Hover** (`mengkudu-hover`, #f07d74): warna teks tautan dan judul pakan saat hover.
- **Mengkudu Tekan** (`mengkudu-tekan`, #c93b33): isian `heddle-merah` dan `ikon-tombol.merah` saat hover. Satu-satunya warna yang ditulis literal di CSS (dua kali), bukan sebagai custom property.

### Secondary
- **Emas** (`emas`, #c9a14a, kontras 5,9:1): hanya untuk angka yang dihitung: nomor lemparan `01/08`, tahun dan rentang tahun di selvedge, hitungan `08 lemparan`, hitungan penampil, status formulir. Kelas `.num` dan `.selvedge-teks .emas`.

### Neutral
- **Nila** (`nila`, #1c2541): warna dasar kain untuk seluruh halaman, sisir, penampil, `theme-color`, dan warna teks saat seleksi.
- **Nila Dalam** (`nila-dalam`, #151c33): dipakai sebagai `::backdrop` penampil pada opasitas 96% (`rgba(21, 28, 51, 0.96)`).
- **Katun** (`katun`, #ece4d2, kontras 12,1:1): teks utama, latar seleksi, garis bawah `katun-link` saat hover, border `ikon-tombol` saat hover.
- **Katun 30** (`katun-30`): benang 1px yang terlihat: garis bawah sisir, gigi sisir, dua tepi pita hero, border `ikon-tombol`, border-top bar penampil, garis bawah field saat diam, garis bawah `katun-link`, thumb scrollbar.
- **Katun 12** (`katun-12`): benang 1px yang samar: ujung setiap lemparan `.pakan::before` dan `.lembar::before`, pemisah daftar saluran, border-top dasar footer.
- **Lusi** (`lusi-warna`): tekstur lungsi 1px tiap 3px pada body, sisir, dan penampil.
- **Redup** (`redup`, #a8b0cc, kontras 6,6:1): teks sekunder: subjudul pakan, peran, keterangan lembar, label, selvedge, placeholder dan label field, dasar footer, caption penampil. Nila yang dicerahkan, bukan abu netral.

### Named Rules
**The Satu Benang Merah Rule.** Merah adalah satu benang yang menandai posisi dan aksi: teropong, nav aktif, tautan aksi, tombol utama, garis potong. Ia tidak dipakai sebagai dekorasi, latar seksi, atau warna gambar.

**The Emas Terhitung Rule.** Emas hanya untuk angka yang dihitung. Kata, judul, dan label tidak pernah emas; angka yang bukan hitungan (nomor telepon, kode pos) tidak memakainya.

**The Merah Tidak Bicara Rule.** `mengkudu` (#b5302a) tidak pernah menjadi warna teks; teks merah selalu `mengkudu-terang` (#e8695f). Mengkudu gelap hanya untuk isian dan benang 1-2px.

**The Redup Bukan Abu Rule.** Teks sekunder diwarnai dari nila yang dicerahkan (`redup`), bukan katun dengan opasitas dan bukan abu. Opasitas katun (`katun-30`, `katun-12`) hanya untuk benang dan garis, bukan teks.

## Typography

**Display Font:** Bricolage Grotesque (dengan system-ui, sans-serif), sumbu `opsz` dan `wdth` aktif, via next/font `--font-bricolage`
**Body Font:** Bricolage Grotesque, keluarga yang sama
**Label/Mono Font:** Azeret Mono 400/500 (dengan ui-monospace, monospace), via `--font-azeret`; hanya untuk angka

**Character:** Satu keluarga grotesque variabel yang berganti wajah lewat ukuran optik dan lebar: display bertracking rapat pada `opsz 96`, isi bersuara tenang pada `opsz 14`, label dipadatkan ke `wdth 75` dengan huruf kapital berjarak. Mono muncul hanya ketika ada yang dihitung, sehingga setiap angka emas terasa seperti hitungan benang.

### Hierarchy
- **Nama** (760, `clamp(3rem, 12.5vw, 11rem)`, 0.86, -0.03em, kapital, `opsz 96`): hanya nama pemilik di viewport pertama beranda, dua baris dengan pita gambar melintas di antaranya. Batas atas 11rem adalah pengecualian sadar untuk permukaan Experience, bukan tangga display umum.
- **Display L** (650, `clamp(2.25rem, 5vw, 4.5rem)`, 0.95, -0.025em, `opsz 96`): judul halaman (Karya, judul proyek, Tentang, Sertifikat, Kontak) dan judul lemparan berikutnya. `text-wrap: balance`.
- **Display M** (600, `clamp(1.5rem, 2.6vw, 2.5rem)`, 1.05, -0.015em, `opsz 48`): judul pakan di beranda, ajakan footer, judul sertifikat.
- **Catatan** (450, `clamp(1.25rem, 2vw, 1.75rem)`, 1.35, -0.01em, `opsz 28`): paragraf pembuka bio di beranda; satu-satunya teks isi berukuran besar.
- **Lede** (400, `clamp(1.125rem, 1.5vw, 1.375rem)`, 1.45, `opsz 20`): kalimat pengantar di bawah judul halaman, biasanya `redup`. `text-wrap: pretty`.
- **Body** (400, 1.0625rem, 1.55, `opsz 14`, `wdth 100`): isi dan input. Measure prosa 66ch (`.prose`), kalimat peran hero 34ch, lede sertifikat 52ch, ajakan footer 40ch.
- **Heddle** (500, 0.875rem, 0.01em): tautan navigasi di sisir; 0.8rem di bawah 420px.
- **Body kecil** (0.95rem / 0.9rem / 0.875rem / 0.85rem / 0.8rem): tangga rapat untuk ringkasan, tautan footer, keterangan lembar, peran, dasar footer. Tidak ada bobot atau warna baru di tingkat ini.
- **Label** (500, 0.78rem, 0.1em, kapital, `opsz 12`, `wdth 75`, `redup`): label horizontal kecil (saluran kontak). Bricolage dipadatkan, bukan mono.
- **Selvedge** (500, 0.74rem, 0.12em, kapital, `opsz 12`, `wdth 75`, `writing-mode: vertical-rl`): teks tepi kiri-kanan; sisi kiri diputar 180deg. Definisi `dt` fakta proyek memakai ukuran dan lebar yang sama secara horizontal dengan tracking 0.1em.
- **Teropong label** (500, 0.68rem, 0.12em, `wdth 75`, `mengkudu-terang`): nama seksi yang menaiki benang gulir; disembunyikan di bawah 720px.
- **Num** (Azeret Mono, `tabular-nums`, `emas`; 0.8rem dengan 0.08em di kepala Karya dan sertifikat; mewarisi ukuran di tempat lain): angka terhitung. Di selvedge, angka mono mempertahankan `letter-spacing: 0.12em` sekitarnya dengan `font-variation-settings: normal`.

### Named Rules
**The Satu Keluarga Rule.** Display, isi, dan label semua Bricolage Grotesque; hierarki dibentuk oleh `opsz`, `wdth`, bobot, dan tracking, bukan oleh pergantian keluarga. Label kecil dipadatkan ke `wdth 75`, tidak pernah diganti mono.

**The Mono Hanya Menghitung Rule.** Azeret Mono muncul hanya pada `.num` dan `.selvedge-teks .emas`, selalu `tabular-nums`, selalu emas. Mono untuk kata adalah pelanggaran.

**The Rapat di Atas, Longgar di Bawah Rule.** Tracking negatif bertambah seiring ukuran (-0.01em pada 1.75rem sampai -0.03em pada nama); tracking positif hanya pada kapital kecil (0.1em sampai 0.12em). Teks isi tidak ditracking.

## Layout

Model spasial adalah alat tenun: grid tiga kolom `loom` dengan kolom selvedge `clamp(2.25rem, 4vw, 3.5rem)` di kiri dan kanan serta `minmax(0, 1fr)` di tengah. Setiap seksi dan baris pakan (`.tenun`, `.pakan`, `.lembar`, `.loom`) memakai kolom yang sama, sehingga label vertikal selvedge sejajar di seluruh halaman. Di dalam kolom tengah, konten dibagi 12 kolom dengan gap `clamp(1rem, 2.5vw, 2.5rem)`.

Baris pakan (`.pakan`) adalah unit konten. Sisi bergantian kiri dan kanan per indeks. Gambar merangkak melewati kolom selvedge (`margin-left/right: calc(-1 * var(--selvedge))`) sehingga menyentuh tepi kain; teks menempati sisa kolom. Lebar menyandikan bobot: `data-bobot="lebar"` (koleksi busana, seragam korporat, motif permukaan) memberi gambar 8 kolom dan teks 4; `data-bobot="sempit"` (studi, lembar tunggal) memberi gambar 5 kolom dan teks 5. Halaman proyek memakai tiga bentuk lembar: `lebar` (12 kolom, meluber ke kedua selvedge), `pasang` (6 + 6, lembar motif berpasangan dengan lembar teknis), dan `tunggal` (7 kolom, merangkak ke satu sisi). Sertifikat: gambar 6 kolom, teks 5.

Irama vertikal: padding blok baris pakan `clamp(2rem, 5vw, 4.5rem)`; kepala halaman `clamp(2.5rem, 6vw, 5rem)`; jarak antar-seksi besar `clamp(3rem, 8vw, 7rem)`. Padding horizontal di luar grid loom (sisir, kepala Karya, bar penampil) memakai `gutter` `clamp(1.25rem, 4.5vw, 4.5rem)`. Sisir setinggi 3.5rem, sticky, dengan gigi 7px di bawahnya. Viewport pertama mengisi `calc(100svh - 3.5rem - 4.5rem)`; pita hero setinggi `clamp(200px, 38svh, 520px)` dan selebar kolom tengah plus dua selvedge.

Responsif, satu breakpoint utama dan tiga penunjang:
- **≤860px**: semua baris 12 kolom runtuh ke satu kolom; gambar selalu baris pertama dan meluber ke kedua selvedge (pakan sempit hanya ke satu sisi); lembar `pasang` tetap dua kolom dengan gap 1rem; fakta proyek dan potret turun ke lebar penuh.
- **≤720px**: label teropong disembunyikan; kolom bawah hero jadi satu kolom.
- **≤560px**: kolom keahlian dan bar penampil membungkus.
- **≤420px**: nav sisir merapat (gap 0.6rem, 0.8rem).
- **≥861px**: pita hero memindah `object-position` ke `50% 6%`.

Body memakai `overflow-x: clip` (bukan hidden) agar pita dan gambar yang meluber tidak membuat kontainer gulir baru; `.weft` juga `overflow-x: clip` untuk geseran masuk.

## Elevation & Depth

Sistem ini datar sepenuhnya: tidak ada bayangan, tidak ada lapisan tonal, tidak ada blur. Kedalaman disampaikan oleh tumpang tindih tenunan: nama menembus pita hero lewat salinan bertopeng garis horizontal (`mask-image: repeating-linear-gradient(to bottom, #000 0 8px, transparent 8px 14px)`), sisir sticky memakai warna dan tekstur lusi yang sama dengan kain sehingga terbaca sebagai bagian alat, dan penampil membuka di atas `::backdrop` nila-dalam 96% dengan tekstur lusi yang sama. Satu-satunya `box-shadow` di seluruh CSS adalah `0 1px 0 0 var(--mengkudu-terang)` pada field yang fokus, yang berfungsi menebalkan garis bawah menjadi benang 2px, bukan mengangkat elemen.

### Named Rules
**The Tanpa Bayangan Rule.** Tidak ada `box-shadow` atau `drop-shadow` untuk mengangkat permukaan. Pemisahan antar-elemen adalah benang 1px atau ruang kosong. Hover mengubah warna benang atau menggeser 1px (`translateY(1px)` saat tombol ditekan), bukan menambah bayangan.

**The Kain Satu Lapis Rule.** Sisir, penampil, dan body membawa latar nila dan tekstur lusi yang identik. Tidak ada permukaan yang lebih terang atau lebih gelap dari kain untuk menandai "panel".

## Shapes

Tidak ada radius di mana pun (`border-radius: 0` ditegaskan pada input). Semua bentuk persegi dengan tepi tajam: tombol adalah balok merah, ikon-tombol adalah kotak 2.75rem berbingkai 1px, field hanya garis bawah. Garis adalah benang: 1px untuk pembatas (ujung lemparan, tepi pita, gigi sisir, garis potong), 2px untuk benang aktif (teropong, garis nav aktif, focus ring). Tekstur berulang membentuk silhouette alat: lusi 1px tiap 3px, gigi sisir 1px tiap 12px setinggi 7px, topeng jalinan 8px hidup dan 6px mati. Gambar tidak dibingkai, dipotong, atau dibulatkan; ia duduk di atas nila dengan tepinya sendiri. Ikon SVG 24 grid, stroke 1,5px, `linecap: square`, `linejoin: miter`; ukuran 1em di dalam tombol teks, 1.1rem di ikon-tombol.

## Components

### Buttons
Balok merah yang terbaca sebagai heddle alat tenun: tegas, tanpa lengkung, dengan gerakan sekecil 1px.
- **Shape:** persegi tajam (0).
- **Primary (`heddle-merah`):** isian `mengkudu`, teks `katun`, bobot 600, tracking 0.005em, `line-height: 1`, padding `0.85em 1.5em`, `inline-flex` dengan gap 0.7em dan ikon panah 1em. Varian nav (`heddle-nav`) padding `0.6em 1em`, 0.875rem.
- **Hover / Active:** isian `mengkudu-tekan` (#c93b33) dalam 180ms `ease-out`; `:active` `translateY(1px)`.
- **Ikon (`ikon-tombol`):** kotak 2.75rem, border 1px `katun-30`, teks `katun`; hover border `katun`; varian `.merah` isian dan border `mengkudu`, hover `mengkudu-tekan`. Dipakai di bar penampil.
- **Focus:** ring global `2px solid mengkudu-terang`, offset 3px.

### Links
- **Benang link (`benang-link`):** teks `mengkudu-terang`, garis bawah 1px `mengkudu`, offset 0.24em; hover keduanya `mengkudu-hover`, 160ms.
- **Katun link (`katun-link`):** mewarisi warna, garis bawah 1px `katun-30`; hover garis bawah `katun`. Dipakai untuk tautan sekunder (footer). Kelas `.tap` menambah area sentuh 0.35em tanpa mengubah layout.
- **Ujung benang (`ujung-benang`):** tautan aksi `mengkudu-terang` bobot 600 dengan `::after` benang 1px `mengkudu` yang memanjang ke tepi kanan (flex: 1); hover benang memendek ke 94% dalam 500ms `ease-out`.

### Cards / Containers
Tidak ada kartu. Unit konten adalah baris pakan (`pakan`): grid loom dengan padding blok `clamp(2rem, 5vw, 4.5rem)`, satu benang 1px `katun-12` di tepi atas (`::before`), tanpa latar, tanpa border samping, tanpa radius. Teks di dalamnya bersusun vertikal dengan gap 0.6rem: judul `display-m`, subjudul `redup` 1rem, ringkasan, peran 0.85rem `redup`, tautan `benang-link` 0.95rem. Hover pada tautan pakan mewarnai judul `mengkudu-hover`. Lembar galeri (`lembar`) mengikuti pola yang sama dengan tombol zoom `lembar-tombol` (kursor `zoom-in`, hover opacity 0.94) dan keterangan 0.875rem `redup`.

### Inputs / Fields
- **Style:** latar transparan, tanpa border kecuali garis bawah 1px `katun-30`, padding `0.6rem 0`, teks `katun` 1.0625rem, radius 0. Label 0.85rem `redup` di atas dengan gap 0.4rem; placeholder `redup` opasitas penuh. Textarea `resize: vertical`, min 8rem.
- **Focus:** garis bawah `mengkudu-terang` plus `box-shadow: 0 1px 0 0 mengkudu-terang` (benang menebal ke 2px), 160ms; outline dimatikan hanya di sini karena garis bawah sudah menjadi ring.
- **Error:** `:user-invalid` mewarnai garis bawah `mengkudu-terang`; tidak ada teks merah tambahan. Status kirim muncul sebagai teks `emas` 0.9rem di `role="status"`.

### Navigation
Sisir (`sisir`): sticky 3.5rem, latar nila bertekstur lusi, benang bawah 1px `katun-30`, dan gigi 7px (1px tiap 12px) menggantung di bawahnya. Kiri: nama pendek bobot 650 `opsz 24`. Kanan: tautan `heddle` (0.875rem, 500, `katun`, tinggi penuh sisir) dengan garis bawah 2px `mengkudu-terang` yang tumbuh dari kiri (`scaleX 0 → 1`, 260ms) pada hover dan tetap penuh pada `aria-current="page"`; lalu `Hubungi` sebagai `heddle-merah heddle-nav`. Di ponsel nav tetap satu baris yang merapat (gap 0.6rem, 0.8rem di ≤420px); tidak ada menu hamburger.

### Selvedge
Kolom tepi `clamp(2.25rem, 4vw, 3.5rem)` di kiri dan kanan setiap baris, berisi satu teks vertikal (`selvedge-teks`, `writing-mode: vertical-rl`, 0.74rem, kapital, `wdth 75`, `redup`; sisi kiri diputar 180deg). Isinya adalah metadata baris: nomor lemparan dalam mono emas (`01/08`), jenis, dan peran; di hero, peran di kiri dan kota plus rentang tahun emas di kanan; di footer, "Potong kain" dan tahun. Label selvedge duduk di sisi berlawanan dengan asal geseran baris.

### Teropong
Benang merah 2px `mengkudu-terang` tetap di tepi kiri viewport (`position: fixed`, z 50, `pointer-events: none`), tingginya mengikuti kemajuan gulir lewat `requestAnimationFrame`. Nama seksi aktif (dari `data-bagian`) menaiki ujungnya sebagai label vertikal 0.68rem yang memudar masuk 240ms; aktif ketika seksi melewati pita 35%–45% viewport. Label disembunyikan di ≤720px, benang tetap.

### Lemparan (row entrance)
Interaksi tanda tangan. Setiap `.weft` memasuki viewport (threshold 0.08, rootMargin bawah -8%) lalu isi `.weft-geser` bergeser dari sisi asal (`translateX(∓6vw)`, opacity 0) ke tempatnya dalam `700ms cubic-bezier(0.16, 1, 0.3, 1)`; opacity 490ms linear. Kelas `js` di `<html>` dipasang sebelum cat pertama sehingga tanpa JS baris sudah terlihat. `prefers-reduced-motion: reduce` menghilangkan geseran dan mengganti dengan fade 300ms, serta mematikan transisi `heddle::after` dan `ujung-benang::after`. Satu IntersectionObserver dibagi semua baris; setelah `is-woven` baris diam selamanya.

### Penampil (lightbox)
`<dialog>` layar penuh dengan latar nila bertekstur lusi dan `::backdrop` nila-dalam 96%. Panggung `place-items: center`, padding `clamp(0.75rem, 2vw, 2rem)`, gambar `object-fit: contain`. Bar bawah dengan border-top 1px `katun-30`, caption 0.9rem `redup` satu baris (membungkus di ≤560px), hitungan `num` 0.8rem, dan tiga `ikon-tombol` (kiri, kanan, tutup merah). `body.is-locked` mengunci gulir.

### Potong Kain (footer)
Garis 1px `mengkudu-terang` melintang penuh (`garis-potong`), lalu grid loom dengan ajakan `display-m` + `lede redup` + `heddle-merah` di 7 kolom kiri dan tautan `katun-link` di 4 kolom kanan; dasar footer border-top `katun-12`, 0.8rem `redup`. Ajakan disembunyikan di halaman Kontak agar tidak mengulang formulir.

## Do's and Don'ts

### Do:
- **Do** letakkan setiap konten baru sebagai satu baris pakan di grid loom (`selvedge | 1fr | selvedge`) dengan benang 1px `katun-12` di tepi atas dan label selvedge vertikal yang membawa metadatanya.
- **Do** ganti sisi asal geseran per indeks (genap kiri, ganjil kanan) dan pakai `Weft` untuk masuknya, sehingga `is-woven`, `js`, dan reduced-motion tetap satu jalur.
- **Do** biarkan gambar merangkak ke selvedge (`margin: calc(-1 * var(--selvedge))`) dan duduk telanjang di atas nila; lembar putih adalah kertas pola, bukan kartu.
- **Do** pilih warna teks hanya dari `katun`, `redup`, `mengkudu-terang`, dan `emas` (masing-masing 12,1 / 6,6 / 4,9 / 5,9 : 1 di atas nila).
- **Do** bentuk hierarki lewat `font-variation-settings` (`opsz` 12/14/20/24/28/48/96, `wdth` 75/100) dan bobot 450–760 Bricolage, dengan tracking negatif yang mengecil bersama ukuran.
- **Do** gunakan `var(--ease-out)` (`cubic-bezier(0.16, 1, 0.3, 1)`) untuk semua transisi: 160ms warna, 180ms tombol, 240ms label, 260ms garis nav, 500ms benang ujung, 700ms (`--dur`) lemparan; opacity selalu linear.
- **Do** gambar ikon baru pada grid 24 dengan stroke 1,5px, `linecap: square`, `linejoin: miter`, `currentColor`, dan `aria-hidden`.
- **Do** tulis angka yang dihitung dengan `.num` (Azeret Mono, tabular, emas) dan padankan dua digit (`01`, `08`).

### Don't:
- **Don't** tambahkan kartu, kotak berlatar, border samping, radius, atau `box-shadow` pengangkat; pemisah hanya benang 1px atau ruang.
- **Don't** pakai `mengkudu` (#b5302a) sebagai warna teks, dan jangan pakai merah untuk latar seksi, ornamen, atau lebih dari satu aksi utama per baris.
- **Don't** warnai kata, judul, atau label dengan `emas`; emas hanya untuk hitungan.
- **Don't** pakai Azeret Mono untuk label, kicker, atau kata apa pun; label kecil adalah Bricolage `wdth 75` kapital.
- **Don't** buat teks sekunder dari katun beropasitas atau abu netral; pakai `redup`.
- **Don't** ganti tekstur lusi dengan latar polos, gradien warna, gambar latar, atau blur; nila bertekstur 3px adalah kain yang sama di body, sisir, dan penampil.
- **Don't** pakai `overflow-x: hidden` pada body atau baris; `clip` dipakai agar geseran dan gambar meluber tidak membuat kontainer gulir baru.
- **Don't** naikkan ukuran display lain ke skala nama (11rem); tangga display umum berhenti di `display-l` 4.5rem.
