/**
 * Semua data pribadi ada di file ini.
 * Baris bertanda `TODO: ganti` masih berisi contoh — ganti dengan data asli
 * sebelum website dibagikan ke publik.
 */

export const site = {
  name: "Salsabila Azzahra",
  shortName: "Salsabila",

  /** Muncul di bawah nama pada halaman depan. */
  role: "Perancang busana & motif permukaan",

  /** TODO: ganti — kota tempat kamu berbasis sekarang. */
  location: "Bandung, Indonesia",

  /** TODO: ganti — alamat email yang kamu pakai untuk pekerjaan. */
  email: "halo@contoh.com",

  /** TODO: ganti — username Instagram, tanpa tanda @. */
  instagram: "username",

  /** TODO: ganti — nomor WhatsApp, format internasional tanpa + atau spasi. */
  whatsapp: "6281234567890",

  /**
   * TODO: periksa & sunting — draf ini disusun dari karya di folder works/.
   * Tulis ulang dengan suaramu sendiri; ini yang pertama dibaca orang.
   */
  bio: [
    "Saya merancang busana dan motif permukaan yang berangkat dari khazanah visual Indonesia — wayang kulit, batik pesisir, ragam hias yang sudah lama hidup di kain — lalu menerjemahkannya ke pakaian yang benar-benar dipakai orang setiap hari.",
    "Alurnya selalu sama: riset visual, stilasi bentuk jadi motif, lalu diturunkan ke pola dan lembar teknis yang siap masuk produksi. Karena itu sebagian besar karya di sini berpasangan — satu lembar motif, satu lembar spesifikasi jahitan.",
    "Sebagian proyek bersifat komersial, seperti seragam korporat untuk lingkungan perbankan dan farmasi, di mana identitas perusahaan harus ditampung tanpa mengorbankan kenyamanan pemakainya.",
  ],

  /** Ditampilkan di halaman Tentang. */
  skills: [
    "Ilustrasi mode & croquis",
    "Lembar teknis dan spesifikasi produksi",
    "Desain motif & repeat permukaan",
    "Desain seragam korporat",
    "Batik — penggambar motif bersertifikat BNSP",
    "Adobe Illustrator & Photoshop",
  ],

  /** TODO: periksa tahun & jurusan. */
  education: [
    {
      period: "2021 — 2025",
      title: "S1 Desain Fesyen",
      org: "Universitas Muhammadiyah Bandung",
    },
  ],

  /** TODO: ganti file di public/profil.jpg dengan fotomu (potret, min. 800px). */
  portrait: "/profil.jpg",

  /**
   * TODO: ganti — alamat website setelah tayang. Dipakai untuk tautan mutlak
   * pada pratinjau media sosial dan sitemap. Saat deploy di Vercel, isi lewat
   * variabel lingkungan NEXT_PUBLIC_SITE_URL dan nilai ini terpakai otomatis.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://salsabila-azzahra.example",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
export const mailtoUrl = `mailto:${site.email}`;
