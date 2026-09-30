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

  /** Alamat email untuk pekerjaan. */
  email: "salsabila0473@gmail.com",

  /** Username Instagram, tanpa tanda @. */
  instagram: "azzhrlaa",

  /** Nomor WhatsApp, format internasional tanpa + atau spasi (+62 895-3904-49302). */
  whatsapp: "62895390449302",

  /**
   * TODO: periksa & sunting — draf ini disusun dari karya di folder works/.
   * Tulis ulang dengan suaramu sendiri; ini yang pertama dibaca orang.
   */
  bio: [
    "Saya merancang busana dan motif permukaan yang berangkat dari khazanah visual Indonesia — wayang kulit, batik pesisir, ragam hias yang sudah lama hidup di kain — lalu menerjemahkannya ke pakaian yang benar-benar dipakai orang setiap hari.",
    "Alurnya selalu sama: riset visual, stilasi bentuk jadi motif, lalu diturunkan ke pola dan lembar teknis yang siap masuk produksi. Karena itu sebagian besar karya di sini berpasangan — satu lembar motif, satu lembar spesifikasi jahitan.",
    "Sebagian proyek bersifat komersial, seperti seragam korporat untuk lingkungan perbankan dan farmasi, di mana identitas perusahaan harus ditampung tanpa mengorbankan kenyamanan pemakainya.",
  ],

  /**
   * TODO: periksa — janji waktu balas yang tampil di halaman Kontak dan footer.
   * Ini komitmen layanan; kosongkan ("") kalau tidak ingin berjanji, dan
   * kalimatnya tidak akan ditampilkan.
   */
  replyNote: "Saya biasanya membalas dalam dua hari kerja.",

  /** Ditampilkan di halaman Tentang. */
  skills: [
    "Ilustrasi mode & croquis",
    "Lembar teknis dan spesifikasi produksi",
    "Desain motif & repeat permukaan",
    "Desain seragam korporat",
    "Batik — penggambar motif bersertifikat BNSP",
    "Adobe Illustrator & Photoshop",
  ],

  /** TODO: periksa tahun. */
  education: [
    {
      period: "2021 — 2025",
      title: "S1 Kriya Tekstil Fashion",
      org: "Universitas Muhammadiyah Bandung",
    },
  ],

  /**
   * Alamat website, dipakai untuk tautan mutlak pada pratinjau media sosial
   * dan sitemap. Diambil otomatis: NEXT_PUBLIC_SITE_URL kalau diisi, lalu
   * domain produksi Vercel, lalu localhost saat pengembangan.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
export const mailtoUrl = `mailto:${site.email}`;
