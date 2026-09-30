/**
 * Daftar proyek. Untuk menambah karya baru: taruh filenya di works/<folder>/,
 * tambahkan satu baris di `shots`, lalu jalankan `npm run assets`.
 *
 * TODO: periksa `year` dan `role` di tiap proyek — angka tahun di bawah adalah
 * perkiraan dari tanggal berkas dan sertifikat, bukan catatan resmi.
 */

export type Shot = {
  /** Nama berkas di dalam folder `dir`. */
  file: string;
  /** Deskripsi untuk pembaca layar. Jelaskan isi gambar, bukan judul proyek. */
  alt: string;
  /** Keterangan pendek di bawah gambar. Kosongkan kalau tidak perlu. */
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  year: string;
  role: string;
  /** Satu kalimat, muncul di halaman depan. */
  summary: string;
  /** Paragraf di halaman proyek. */
  body: string[];
  /** Folder di dalam works/ */
  dir: string;
  /** Berkas yang dipakai sebagai sampul di halaman depan. */
  cover: string;
  shots: Shot[];
};

export const projects: Project[] = [
  {
    slug: "srikandi",
    title: "Srikandi",
    subtitle: "Wayang kulit sebagai motif busana",
    kind: "Koleksi busana",
    year: "2024",
    role: "Riset visual, motif, ilustrasi",
    summary:
      "Tokoh Srikandi diangkat dari layar wayang ke permukaan kain, lalu diturunkan ke sembilan tampilan siap pakai.",
    body: [
      "Riset berangkat dari satu tokoh: Srikandi, pemanah perempuan dalam wayang kulit Jawa. Siluet tatahannya yang khas — busur, gelung rambut, warna merah dan emas — dipertahankan utuh, bukan disederhanakan jadi ornamen.",
      "Bahan utamanya kain mori, bahan yang sama dengan batik tulis. Motif diterapkan lewat dua jalur: cetak untuk bidang besar dan bordir untuk penempatan tunggal di dada dan panggul.",
      "Palet diambil dari wayang itu sendiri — nila tua, biru pudar, dan dua tingkat merah bata — agar tokoh tetap terbaca meski dipakai di luar konteks pertunjukan.",
    ],
    dir: "fashion illustration",
    cover: "14.png",
    shots: [
      {
        file: "13.png",
        alt: "Papan suasana berisi potongan kain batik bermotif wayang, bordir bunga di kain nila, foto panggung busana, dan enam contoh warna dari nila tua sampai merah bata",
        caption: "Papan suasana dan palet koleksi",
      },
      {
        file: "desain 1.png",
        alt: "Gaun putih tanpa lengan berpotongan asimetris dengan wayang Srikandi bersulam di sisi kiri badan",
      },
      { file: "desain 2.png", alt: "Ilustrasi busana koleksi Srikandi" },
      {
        file: "desain 3.png",
        alt: "Gaun biru bermotif geometris bunga dengan sepasang wayang Srikandi saling berhadapan di bagian panggul",
      },
      { file: "desain 4.png", alt: "Ilustrasi busana koleksi Srikandi" },
      { file: "desain 5.png", alt: "Ilustrasi busana koleksi Srikandi" },
      { file: "desain 6.png", alt: "Ilustrasi busana koleksi Srikandi" },
      {
        file: "14.png",
        alt: "Tiga tampilan berjajar di depan bayangan wayang: gaun putih asimetris, setelan rok merah bata, dan gaun panjang bermotif biru",
        caption: "Tampilan satu sampai tiga",
      },
      {
        file: "15.png",
        alt: "Tiga tampilan berjajar: rok duyung nila, gaun pendek berlengan gelembung, dan atasan merah bata dengan celana bermotif",
        caption: "Tampilan empat sampai enam",
      },
    ],
  },
  {
    // TODO: periksa — nama ini pilihan sementara dari kipas lipat dan payung
    // pantai di papan suasananya. Ganti kalau koleksinya punya nama sendiri.
    slug: "kipas-pesisir",
    title: "Kipas Pesisir",
    subtitle: "Koleksi resor biru dan kuning",
    kind: "Koleksi busana",
    year: "2024",
    role: "Riset visual, motif, ilustrasi",
    summary:
      "Payung pantai, kipas lipat, dan batik indigo bertemu di satu palet: biru laut, kuning matahari, putih.",
    body: [
      "Titik berangkatnya suasana pesisir di tengah hari — payung kuning berjajar, air yang membiru, bayangan yang pendek. Dari situ diambil tiga warna saja, tanpa warna keempat sebagai jalan keluar.",
      "Motifnya disusun berlapis: sulur batik indigo untuk bidang lembut, kisi geometris untuk bidang tegas, dan pengulangan bentuk kipas sebagai penghubung keduanya.",
      "Potongannya dijaga tetap sederhana — korset berkait tali dan rok draperi yang jatuh tak rata — supaya motif yang bekerja, bukan konstruksinya.",
    ],
    dir: "fashion illustration",
    cover: "1.png",
    shots: [
      {
        file: "12.png",
        alt: "Papan suasana berisi kipas lipat biru dan kuning, kain batik indigo berhias sulur emas, kursi pantai di bawah payung kuning, dan enam contoh warna dari biru tua sampai putih",
        caption: "Papan suasana dan palet koleksi",
      },
      {
        file: "1.png",
        alt: "Tiga gaun bertali dengan korset bermotif dan rok draperi biru dan hijau muda yang jatuh tak rata",
      },
      {
        file: "2.png",
        alt: "Tiga gaun berkorset dengan motif sulur, kisi, dan kotak biru kuning, dipadu rok draperi biru dan bot selutut",
      },
      {
        file: "3.png",
        alt: "Tiga gaun tanpa tali dengan korset bermotif ranting, bunga, dan wajik biru kuning, rok draperi berlapis biru, hijau muda, dan kuning",
      },
      {
        file: "4.png",
        alt: "Tiga setelan dengan luaran sifon transparan berlengan lebar, korset bermotif di pinggang, dan rok asimetris kuning dan biru",
      },
    ],
  },
  {
    slug: "sunlit-minimalism",
    title: "Sunlit Minimalism",
    subtitle: "Koleksi busana perempuan bernuansa pagi",
    kind: "Koleksi busana",
    year: "2026",
    role: "Konsep, palet, bahan, ilustrasi, gambar teknis",
    summary:
      "Gaya minimal alami dan kehangatan yang tenang: linen, rajut ringan, dan kuning matahari pagi di atas Cloud Dancer.",
    body: [
      "Konsepnya berangkat dari suasana matahari pagi yang lembut: cahaya yang menegaskan siluet bersih, bukan pernyataan yang keras. Fokusnya kejernihan, keseimbangan, dan feminitas modern yang tidak dipaksakan.",
      "Paletnya menempatkan Cloud Dancer, warna tahun 2026, sebagai jembatan antara cahaya dan bahan. Kuning hangat seperti Warm Vanilla, Butter Yellow, dan Sunshine dipakai sebagai aksen yang ditahan; hijau sage dan olive menjadi penyeimbang alaminya.",
      "Bahannya serat alam: linen bertekstur, katun ringan, dan rajut katun. Pola garis dan kotak-kotak dijaga bernada lembut; ritsleting tersembunyi menjaga konstruksinya tetap tenang. Lima tampilan dirancang, dan tampilan pertama diturunkan ke gambar teknis depan dan belakang.",
    ],
    dir: "sunlit minimalism",
    cover: "04 lima tampilan.png",
    shots: [
      {
        file: "01 konsep dan papan suasana.png",
        alt: "Papan konsep Sunlit Minimalism: judul, uraian konsep, foto perempuan bergaun rajut krem di depan tirai bermandi cahaya, bunga peoni dan lili kuning, serta kain putih berlipat",
        caption: "Konsep dan papan suasana",
      },
      {
        file: "02 palet warna.png",
        alt: "Dua belas contoh warna Pantone dari Meringue dan Cloud Dancer sampai Sunshine, Warm Sand, dan Sage Green, dengan penjelasan aksen hangat dan penyeimbang alami",
        caption: "Palet warna",
      },
      {
        file: "03 bahan dan detail.png",
        alt: "Contoh bahan: linen coklat dan krem, rajut kabel putih, katun ringan hijau sage, pola garis kuning, pola kotak linen, dan ritsleting tersembunyi kuning",
        caption: "Bahan dan detail",
      },
      {
        file: "04 lima tampilan.png",
        alt: "Lima tampilan berjajar: jaket crop krem dengan rok lipit sage, gaun halter kuning transparan, gaun garis kuning dengan celana linen, atasan sage berok mengembang dengan celana krem, dan gaun rajut krem berkerah tinggi",
        caption: "Lima tampilan",
      },
      {
        file: "05 look 1 gambar teknis.png",
        alt: "Tampilan pertama: ilustrasi jaket crop krem dan gaun sage, di sampingnya gambar teknis depan dan belakang untuk jaket dan gaun",
        caption: "Tampilan satu: gambar teknis",
      },
    ],
  },
  {
    slug: "jejak-laut",
    title: "Jejak Laut",
    subtitle: "Motif penyu dan sampah plastik",
    kind: "Motif permukaan",
    year: "2024",
    role: "Riset, stilasi motif, penerapan produk",
    summary:
      "Penyu yang tempurungnya tersusun dari sampah plastik — satu motif yang dipakai di seprai sampai baju kerja lapangan.",
    body: [
      "Motif ini dimulai dari satu foto: sampah plastik yang disusun di pasir membentuk penyu. Bentuk itu ditelusuri jadi garis, disederhanakan, lalu diwarnai ulang sampai jadi motif yang bisa diulang.",
      "Dua jenis penyu dipakai bergantian dalam satu bidang — yang utuh dan yang tempurungnya terisi sisir, sendok, dan tutup botol — supaya pesannya muncul perlahan, bukan langsung di muka.",
      "Repeat diuji pada dua produk dengan tuntutan yang berbeda jauh: seprai, yang bidangnya lebar dan tenang, dan wearpack, yang motifnya harus tunduk pada pita reflektif dan jahitan saku.",
    ],
    dir: "surface pattern project",
    cover: "komposisi band with sampah 20x20 bg hijau.png",
    shots: [
      {
        file: "stilasi motif (1).png",
        alt: "Empat tahap stilasi: foto sampah plastik yang disusun berbentuk penyu di pasir, lalu garis luarnya, lalu blok warna, lalu motif jadi",
        caption: "Dari foto ke motif",
      },
      { file: "stilasi motif (2).png", alt: "Tahapan stilasi motif penyu" },
      { file: "stilasi motif (3).png", alt: "Tahapan stilasi motif penyu" },
      { file: "outline.png", alt: "Gambar garis motif penyu sebelum diberi warna" },
      { file: "motif (1).png", alt: "Susunan ulang motif penyu" },
      { file: "motif (2).png", alt: "Susunan ulang motif penyu" },
      { file: "motif 3.png", alt: "Susunan ulang motif penyu" },
      { file: "motif (4).png", alt: "Susunan ulang motif penyu" },
      { file: "motif (5).png", alt: "Susunan ulang motif penyu" },
      {
        file: "komposisi band with sampah 20x20 bg hijau.png",
        alt: "Motif berlatar hijau laut: penyu berenang di antara gelombang keemasan, gelembung, dan potongan sampah plastik yang mengambang",
        caption: "Repeat 20 × 20 cm",
      },
      {
        file: "SEPREEE.png",
        alt: "Motif penyu diterapkan pada seprai dan sarung bantal berlatar hijau laut",
        caption: "Penerapan pada seprai",
      },
      {
        file: "wearpack revisi 3.png",
        alt: "Gambar teknis wearpack biru tampak depan dan belakang, dengan pita reflektif, saku dada beresleting, dan motif penyu pada bahu dan lidah saku",
        caption: "Penerapan pada wearpack",
      },
    ],
  },
  {
    slug: "bank-bpd-diy",
    title: "Seragam Bank BPD DIY",
    subtitle: "Kemeja kerja denim dan katun",
    kind: "Seragam korporat",
    year: "2025",
    role: "Desain seragam & lembar teknis",
    summary:
      "Tujuh lembar spesifikasi untuk satu kemeja kerja yang harus jatuh rapi pada tiga potongan tubuh sekaligus.",
    body: [
      "Satu rancangan dikerjakan dalam tiga versi sekaligus — lengan tiga perempat, lengan panjang berjilbab, dan lengan pendek — supaya seluruh staf terlihat seragam tanpa perlu memaksakan satu potongan.",
      "Warna nila dipasangkan dengan celana katun khaki, ditahan garis merah tipis di bahu sebagai satu-satunya aksen.",
      "Tiap lembar mencantumkan detail yang menentukan biaya jahit: saku pena, belahan sisi 7 cm, kancing tersembunyi, dan penempatan alamat situs di punggung.",
    ],
    dir: "project bank bpd diy",
    cover: "1.png",
    shots: [
      {
        file: "1.png",
        alt: "Lembar spesifikasi kemeja denim nila dalam tiga versi lengan, lengkap dengan contoh bahan denim dan katun serta tampak belakang",
        caption: "Versi denim",
      },
      { file: "2.png", alt: "Lembar spesifikasi seragam Bank BPD DIY" },
      { file: "3.png", alt: "Lembar spesifikasi seragam Bank BPD DIY" },
      { file: "4.png", alt: "Lembar spesifikasi seragam Bank BPD DIY" },
      {
        file: "5.png",
        alt: "Lembar spesifikasi kemeja katun twill nila berkancing tersembunyi dalam tiga versi lengan",
        caption: "Versi katun twill",
      },
      { file: "6.png", alt: "Lembar spesifikasi seragam Bank BPD DIY" },
      { file: "7.png", alt: "Lembar spesifikasi seragam Bank BPD DIY" },
    ],
  },
  {
    slug: "bank-ccb",
    title: "Seragam Bank CCB",
    subtitle: "Setelan formal dan motif dasi",
    kind: "Seragam korporat",
    year: "2025",
    role: "Desain seragam & lembar teknis",
    summary:
      "Setelan jas nila dengan motif belah ketupat yang dibuat khusus untuk dasi dan syal leher.",
    body: [
      "Tuntutannya formal: jas berjahitan pangeran, rok selutut atau celana panjang, kemeja biru muda. Ruang bermainnya hanya sekian sentimeter di leher.",
      "Di situ dimasukkan motif belah ketupat berlapis — biru bertingkat dengan inti ungu — yang dipakai untuk dasi pria dan syal leher perempuan.",
      "Rancangan melewati empat putaran revisi; keempatnya disimpan di sini karena perubahan antar putaran adalah bagian dari pekerjaannya.",
    ],
    dir: "project bank ccb",
    cover: "revisi 1.png",
    shots: [
      {
        file: "motif.png",
        alt: "Dua panel motif belah ketupat biru bertingkat dengan inti ungu, disiapkan untuk dasi dan syal leher",
        caption: "Motif dasi dan syal",
      },
      {
        file: "revisi 1.png",
        alt: "Lembar spesifikasi setelan jas nila: versi rok, versi celana berjilbab, dan kemeja pria berdasi bermotif, dengan keterangan kancing dan jahitan",
        caption: "Revisi satu",
      },
      { file: "revisi 2.png", alt: "Lembar spesifikasi seragam Bank CCB, revisi dua" },
      { file: "revisi 3.png", alt: "Lembar spesifikasi seragam Bank CCB, revisi tiga" },
      { file: "revisi 4.png", alt: "Lembar spesifikasi seragam Bank CCB, revisi empat" },
    ],
  },
  {
    slug: "kimia-farma",
    title: "Seragam Kimia Farma",
    subtitle: "Batik kerja dengan bahu berbunga",
    kind: "Seragam korporat",
    year: "2025",
    role: "Desain motif & seragam",
    summary:
      "Batik seragam yang bunganya dikumpulkan di bahu, supaya tetap terbaca saat pemakainya duduk di balik meja.",
    body: [
      "Motif disusun dua lapis. Latarnya kisi geometris rapat berwarna nila; di atasnya rangkaian bunga oranye dan kuning yang hanya muncul di bahu dan dada.",
      "Penempatan itu disengaja: pekerjaan di apotek dan gerai banyak dilakukan sambil duduk, dan bagian tubuh yang paling sering terlihat pelanggan adalah dari dada ke atas.",
      "Dikerjakan dalam tiga versi — perempuan, perempuan berjilbab, dan pria lengan pendek — dengan saku bobok samping supaya garis motif di depan tidak terpotong.",
    ],
    dir: "project kimia farma",
    cover: "design 2ccc.png",
    shots: [
      {
        file: "design 2ccc.png",
        alt: "Tiga tampilan seragam batik nila dengan rangkaian bunga oranye dan kuning di bahu, versi perempuan, perempuan berjilbab, dan pria lengan pendek",
        caption: "Versi kerja",
      },
      { file: "design 2g.png", alt: "Alternatif tampilan seragam batik Kimia Farma" },
      { file: "37.5cm motiff.png", alt: "Lembar motif batik dengan lebar ulang 37,5 sentimeter" },
      {
        file: "37.5cm motifff.png",
        alt: "Alternatif lembar motif batik dengan lebar ulang 37,5 sentimeter",
      },
    ],
  },
  {
    slug: "modest-wear",
    title: "Gamis bertingkat",
    subtitle: "Lembar teknis busana muslim",
    kind: "Lembar teknis",
    year: "2024",
    role: "Gambar teknis (magang)",
    summary:
      "Lima lembar gambar kerja gamis: tampak depan, tampak belakang, dan ukuran jadi.",
    body: [
      "Dikerjakan selama masa magang. Tugasnya bukan merancang siluet baru, melainkan menerjemahkan rancangan yang sudah disetujui menjadi gambar yang bisa dibaca penjahit tanpa bertanya.",
      "Tiap lembar memuat tampak depan dan belakang berdampingan, dengan ukuran kritis ditulis langsung di gambar — misalnya tinggi susun bawah 40 cm.",
      "Dua warna bahan ditempatkan bersisian di setiap lembar supaya batas potongan pas dada dan tali ikat di pinggang terbaca jelas.",
    ],
    dir: "intern",
    cover: "1111.png",
    shots: [
      {
        file: "1111.png",
        alt: "Gambar teknis gamis merah marun bertingkat dengan pas dada khaki dan tali ikat, tampak depan dan belakang, dengan keterangan tinggi susun 40 sentimeter",
        caption: "Marun dan khaki",
      },
      { file: "2222.png", alt: "Gambar teknis gamis, tampak depan dan belakang" },
      { file: "3333.png", alt: "Gambar teknis gamis, tampak depan dan belakang" },
      { file: "4444.png", alt: "Gambar teknis gamis, tampak depan dan belakang" },
      { file: "5555.png", alt: "Gambar teknis gamis, tampak depan dan belakang" },
    ],
  },
  {
    slug: "nirmana",
    title: "Nirmana",
    subtitle: "Studi garis dan ilusi ruang",
    kind: "Studi",
    year: "2026",
    role: "Karya studi",
    summary:
      "Enam bidang hitam putih: garis lurus yang disusun sampai permukaannya terbaca melengkung.",
    body: [
      "Latihan dasar rupa tanpa warna dan tanpa objek. Aturannya satu: hanya garis lurus dan dua nilai, hitam dan putih.",
      "Yang dicari adalah titik ketika mata berhenti membaca garis dan mulai membaca kedalaman — pusat yang seolah menekan ke dalam, tepi yang seolah terangkat.",
      "Kemampuan menyusun pengulangan seperti ini yang kemudian dipakai untuk menyusun repeat motif pada kain.",
    ],
    dir: "2d",
    cover: "ChatGPT Image Jul 12, 2026, 02_17_49 PM.png",
    shots: [
      {
        file: "ChatGPT Image Jul 12, 2026, 02_17_49 PM.png",
        alt: "Karya hitam putih: empat titik pusat memancarkan garis lurus sehingga bidang tengahnya terbaca seperti bintang yang cekung",
      },
      {
        file: "ChatGPT Image Jul 12, 2026, 02_19_08 PM.png",
        alt: "Studi nirmana hitam putih dengan susunan garis lurus",
      },
      {
        file: "ChatGPT Image Jul 12, 2026, 02_22_01 PM.png",
        alt: "Studi nirmana hitam putih dengan susunan garis lurus",
      },
      {
        file: "ChatGPT Image Jul 12, 2026, 02_33_24 PM.png",
        alt: "Studi nirmana hitam putih dengan susunan garis lurus",
      },
      {
        file: "ChatGPT Image Jul 12, 2026, 02_57_58 PM.png",
        alt: "Studi nirmana hitam putih dengan susunan garis lurus",
      },
      {
        file: "ChatGPT Image Jul 12, 2026, 02_59_30 PM.png",
        alt: "Studi nirmana hitam putih dengan susunan garis lurus",
      },
    ],
  },
];

export type Certificate = {
  file: string;
  title: string;
  issuer: string;
  year: string;
  note: string;
  alt: string;
};

export const certificatesDir = "certificate";

export const certificates: Certificate[] = [
  {
    file: "Sertifikat Kompetensi (Batik).jpg",
    title: "Penggambar Motif Batik",
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2024",
    note: "Sertifikat kompetensi bidang industri batik, berlaku lima tahun sejak Juni 2024.",
    alt: "Sertifikat kompetensi BNSP atas nama Salsabila Azzahra untuk okupasi Tukang Gambar Motif Batik",
  },
  {
    file: "SALSABILA AZZAHRA_210209031_5aeef2de_page-0001.jpg",
    title: "Program Pembinaan Mahasiswa Wirausaha",
    issuer: "Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi",
    year: "2024",
    note: "Kategori industri kreatif, seni, dan budaya, dengan usaha Crafting Needleloops.",
    alt: "Sertifikat P2MW 2024 atas nama Salsabila Azzahra sebagai peserta kategori industri kreatif, seni, dan budaya",
  },
  {
    file: "Universitas Muhammadiyah Bandung-Salsabila Azzahra-Peserta_page-0001.jpg",
    title: "KMI Expo XV",
    issuer: "Ditjen Diktiristek & Universitas Halu Oleo",
    year: "2024",
    note: "Peserta pameran Kewirausahaan Mahasiswa Indonesia, Kendari, Oktober 2024.",
    alt: "Sertifikat keikutsertaan KMI Expo XV 2024 atas nama Salsabila Azzahra",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
