"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IkonPanahKanan } from "@/components/Ikon";
import { instagramUrl, mailtoUrl, site, whatsappUrl } from "@/content/site";

/**
 * Potong kain: kain selesai ditenun dipotong dari alat dengan satu garis merah.
 * Di bawahnya ajakan menghubungi; di halaman Kontak ajakan itu tidak diulang.
 */
export default function Footer() {
  const pathname = usePathname();
  const showCta = pathname !== "/kontak";

  return (
    <footer className="potong">
      <div className="garis-potong" aria-hidden="true" />

      <div className="loom">
        <div className="selvedge">
          <span className="selvedge-teks">Potong kain</span>
        </div>

        <div>
          <div className="potong-isi">
            <div className="potong-ajakan">
              {showCta ? (
                <>
                  <p className="display-m">Sedang mencari perancang?</p>
                  <p className="lede redup">
                    Saya terbuka untuk lowongan, magang, dan proyek koleksi, motif permukaan,
                    atau seragam.
                  </p>
                  <Link href="/kontak" className="heddle-merah">
                    Kirim pesan
                    <IkonPanahKanan />
                  </Link>
                </>
              ) : (
                <>
                  <p className="display-m">Sampai jumpa di proyeknya.</p>
                  <p className="lede redup">
                    {site.replyNote
                      ? `${site.replyNote.replace(/\.$/, "")}, lewat email atau WhatsApp.`
                      : "Lewat email atau WhatsApp."}
                  </p>
                </>
              )}
            </div>

            <div className="potong-tautan">
              <a href={mailtoUrl} className="katun-link tap">
                {site.email}
              </a>
              <a href={instagramUrl} className="katun-link tap" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={whatsappUrl} className="katun-link tap" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="potong-dasar">
            <p>
              {site.name}, {site.location}
            </p>
            <p>Seluruh karya di halaman ini milik {site.name}.</p>
          </div>
        </div>

        <div className="selvedge selvedge-kanan">
          <span className="selvedge-teks emas">{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
