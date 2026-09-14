"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { instagramUrl, mailtoUrl, site, whatsappUrl } from "@/content/site";

export default function Footer() {
  const pathname = usePathname();
  // Di halaman Kontak ajakan ini akan menunjuk ke halaman yang sedang dibuka,
  // tepat di atas formulirnya sendiri. Jadi di sana ia tidak ditampilkan.
  const showCta = pathname !== "/kontak";

  return (
    <footer className="site-footer">
      <div className="shell site-footer-inner">
        <div>
          {showCta ? (
            <>
              <p className="display display-m">Sedang mencari perancang?</p>
              <p className="lede site-footer-lede">
                Saya terbuka untuk proyek koleksi, motif permukaan, dan seragam.
              </p>
              <Link href="/kontak" className="button button-solid site-footer-cta">
                Kirim pesan
              </Link>
            </>
          ) : (
            <>
              <p className="display display-m">Sampai jumpa di proyeknya.</p>
              <p className="lede site-footer-lede">
                Balasan biasanya dalam dua hari kerja, lewat email atau WhatsApp.
              </p>
            </>
          )}
        </div>

        <div className="site-footer-links">
          <a href={mailtoUrl} className="link-underline tap">
            {site.email}
          </a>
          <a
            href={instagramUrl}
            className="link-underline tap"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={whatsappUrl}
            className="link-underline tap"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="shell site-footer-baseline">
        <p className="meta">
          {site.name}, {site.location}
        </p>
        <p className="meta">
          Seluruh karya di halaman ini milik {site.name}.
        </p>
      </div>
    </footer>
  );
}
