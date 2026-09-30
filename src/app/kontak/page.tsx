import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import { instagramUrl, mailtoUrl, site, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} untuk proyek koleksi, motif permukaan, dan seragam.`,
};

export default function ContactPage() {
  return (
    <section data-bagian="Kontak" aria-labelledby="judul-kontak">
      <div className="garis-potong" aria-hidden="true" />

      <div className="kontak loom">
        <div className="selvedge">
          <span className="selvedge-teks">Potong kain di sini</span>
        </div>

        <div className="kontak-isi">
          <div className="kontak-kiri">
            <h1 id="judul-kontak" className="display-l">
              Kontak
            </h1>
            <p className="lede">
              Ceritakan lowongan, magang, atau proyek yang sedang kamu kerjakan.
              {site.replyNote ? ` ${site.replyNote}` : ""}
            </p>

            <ul className="saluran">
              <li>
                <span className="label">Email</span>
                <a href={mailtoUrl} className="katun-link tap">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="label">Instagram</span>
                <a
                  href={instagramUrl}
                  className="katun-link tap"
                  target="_blank"
                  rel="noreferrer"
                >
                  @{site.instagram}
                </a>
              </li>
              <li>
                <span className="label">WhatsApp</span>
                <a
                  href={whatsappUrl}
                  className="katun-link tap"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka percakapan
                </a>
              </li>
              <li>
                <span className="label">Lokasi</span>
                <span>{site.location}</span>
              </li>
            </ul>
          </div>

          <div className="kontak-kanan">
            <ContactForm />
          </div>
        </div>

        <div className="selvedge selvedge-kanan">
          <span className="selvedge-teks emas">{site.location.split(",")[0]}</span>
        </div>
      </div>
    </section>
  );
}
