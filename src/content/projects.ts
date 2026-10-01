/**
 * Daftar proyek. Untuk menambah karya baru: taruh filenya di works/<folder>/,
 * tambahkan satu baris di `shots`, lalu jalankan `npm run assets`.
 *
 * TODO: periksa `year` di tiap proyek — angka tahun di bawah adalah perkiraan
 * dari tanggal berkas dan sertifikat, bukan catatan resmi.
 */

export type Shot = {
  /** Nama berkas di dalam folder `dir`. */
  file: string;
  /** Folder di works/, kalau lembar ini bukan dari folder `dir` proyeknya. */
  dir?: string;
  /** Deskripsi untuk pembaca layar. Jelaskan isi gambar, bukan judul proyek. */
  alt: string;
  /** Keterangan pendek di bawah gambar. Kosongkan kalau tidak perlu. */
  caption?: string;
  /**
   * Judul kelompok, untuk proyek yang memuat beberapa pekerjaan. Isi hanya di
   * lembar pertama tiap kelompok; lembar sesudahnya ikut sampai kelompok berikutnya.
   */
  group?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  year: string;
  role: string;
  /** Deskripsi proyek. Muncul di halaman depan, dan di halaman proyek kalau `body` kosong. */
  summary: string;
  /** Paragraf panjang untuk halaman proyek, menggantikan `summary` di sana. Boleh dikosongkan. */
  body?: string[];
  /** Folder di dalam works/ */
  dir: string;
  /** Berkas yang dipakai sebagai sampul di halaman depan. */
  cover: string;
  /** Deskripsi sampul untuk pembaca layar, kalau sampulnya tidak ada di `shots`. */
  coverAlt?: string;
  shots: Shot[];
};

/** Judul kelompok lembar sebuah proyek, berurutan. Kosong kalau tidak berkelompok. */
export const groupsOf = (project: Project) =>
  project.shots.flatMap((shot) => (shot.group ? [shot.group] : []));

export const projects: Project[] = [
  {
    slug: "srikandi",
    title: "Srikandi",
    subtitle: "Wayang Kulit",
    kind: "Koleksi busana",
    year: "2024",
    role: "Riset visual, motif dan ilustrasi",
    summary:
      "Mengambil inspirasi dari Kebudayaan Indonesia, khususnya wayang bernama Dewi Wara Srikandi.",
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
    slug: "persona-analisis",
    title: "Persona Analisis",
    subtitle: "Yura Yunita",
    kind: "Koleksi busana",
    year: "2024",
    role: "Keberagaman, harmoni dan mixed pattern",
    summary:
      "Perpaduan harmonis antara tekstil tradisional batik, pola dan hiasan dari berbagai motif. Terinspirasi dari persona Yura Yunita yang mengangkat budaya batik.",
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
    title: "Ilustrasi Fashion",
    subtitle: "Sunlit Minimalism",
    kind: "Koleksi busana",
    year: "2026",
    role: "Konsep, warna, bahan dan ilustrasi",
    summary:
      "Koleksi busana wanita yang terinspirasi oleh suasana sinar matahari pagi yang lembut. Koleksi ini memiliki siluet yang casual dan elegan.",
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
    slug: "nautica-guard",
    title: "Nautica Guard",
    subtitle: "Transportasi Kapal Laut",
    kind: "Motif permukaan",
    year: "2024",
    role: "Riset, stilasi motif, dan penerapan produk",
    summary:
      "Perancangan ini menggambarkan dari penggabungan antara keindahan biota laut; penyu hijau dan dampak negatif dari limbah laut.",
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
    slug: "freelance-report",
    title: "Freelance Report",
    subtitle: "Seragam kemeja kerja formal",
    kind: "Seragam korporat",
    year: "2025",
    role: "Desain seragam, desain motif dan lembar teknis",
    summary: "Gambar kerja busana tampak depan dan belakang.",
    dir: "project bank bpd diy",
    cover: "1.png",
    shots: [
      {
        file: "1.png",
        group: "Seragam Bank BPD DIY",
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
      {
        file: "motif.png",
        dir: "project bank ccb",
        group: "Seragam Bank CCB",
        alt: "Dua panel motif belah ketupat biru bertingkat dengan inti ungu, disiapkan untuk dasi dan syal leher",
        caption: "Motif dasi dan syal",
      },
      {
        file: "revisi 1.png",
        dir: "project bank ccb",
        alt: "Lembar spesifikasi setelan jas nila: versi rok, versi celana berjilbab, dan kemeja pria berdasi bermotif, dengan keterangan kancing dan jahitan",
        caption: "Revisi satu",
      },
      {
        file: "revisi 2.png",
        dir: "project bank ccb",
        alt: "Lembar spesifikasi seragam Bank CCB, revisi dua",
      },
      {
        file: "revisi 3.png",
        dir: "project bank ccb",
        alt: "Lembar spesifikasi seragam Bank CCB, revisi tiga",
      },
      {
        file: "revisi 4.png",
        dir: "project bank ccb",
        alt: "Lembar spesifikasi seragam Bank CCB, revisi empat",
      },
      {
        file: "design 2ccc.png",
        dir: "project kimia farma",
        group: "Seragam Batik Kimia Farma",
        alt: "Tiga tampilan seragam batik nila dengan rangkaian bunga oranye dan kuning di bahu, versi perempuan, perempuan berjilbab, dan pria lengan pendek",
        caption: "Versi kerja",
      },
      {
        file: "design 2g.png",
        dir: "project kimia farma",
        alt: "Alternatif tampilan seragam batik Kimia Farma",
      },
      {
        file: "37.5cm motiff.png",
        dir: "project kimia farma",
        alt: "Lembar motif batik dengan lebar ulang 37,5 sentimeter",
      },
      {
        file: "37.5cm motifff.png",
        dir: "project kimia farma",
        alt: "Alternatif lembar motif batik dengan lebar ulang 37,5 sentimeter",
      },
    ],
  },
  {
    slug: "internship-report",
    title: "Internship Report",
    subtitle: "Cherry autumn elegance",
    kind: "Lembar teknis",
    year: "2024",
    role: "Gambar teknis depan belakang",
    summary:
      "Terinspirasi dari nuansa kehangatan dan kelembutan dengan palet warna dedaunan seperti merah, oranye, cokelat dan kuning keemasan.",
    dir: "intern",
    cover: "cover (1).png",
    coverAlt:
      "Gambar teknis gamis marun dengan rok bertingkat, panel dada khaki bertali ikat di sisi, dan lengan balon, tampak depan dan belakang",
    shots: [
      {
        file: "1.png",
        alt: "Gambar teknis gamis marun dengan rok bertingkat, panel dada khaki bertali ikat di sisi, dan lengan balon, tampak depan dan belakang",
        caption: "Gamis bertingkat dengan panel dada",
      },
      {
        file: "2.png",
        alt: "Gambar teknis gaun panjang khaki berkerah V marun dengan belahan depan, lengan balon bermotif geometris cokelat, dan pita marun di punggung, tampak depan dan belakang",
        caption: "Gaun belahan depan berlengan motif",
      },
      {
        file: "3.png",
        alt: "Gambar teknis blazer marun longgar dengan bordir emas di dada, dipadu rok panjang khaki berlapis kain tipis, tampak depan dan belakang",
        caption: "Blazer marun dan rok panjang",
      },
      {
        file: "4.png",
        alt: "Gambar teknis blazer khaki dengan pita marun di saku dan bordir emas di dada, dipadu celana panjang marun, tampak depan dan belakang",
        caption: "Blazer khaki dan celana panjang",
      },
      {
        file: "5.png",
        alt: "Gambar teknis gaun panjang marun dengan kerah lebar dan lengan balon khaki serta tali serut di pinggang, tampak depan dan belakang",
        caption: "Gaun kerah lebar bertali pinggang",
      },
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
