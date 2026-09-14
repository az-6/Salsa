import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import { instagramUrl, mailtoUrl, site, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${site.name} untuk proyek koleksi, motif permukaan, dan seragam.`,
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="shell contact-layout">
        <div>
          <h1 className="display display-l">Kontak</h1>
          <p className="lede contact-intro">
            Ceritakan apa yang sedang kamu kerjakan. Saya biasanya membalas dalam dua
            hari kerja.
          </p>

          <ul className="contact-channels">
            <li className="callout">
              <a href={mailtoUrl} className="link-underline tap">
                {site.email}
              </a>
            </li>
            <li className="callout">
              <a
                href={instagramUrl}
                className="link-underline tap"
                target="_blank"
                rel="noreferrer"
              >
                Instagram @{site.instagram}
              </a>
            </li>
            <li className="callout">
              <a
                href={whatsappUrl}
                className="link-underline tap"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="callout">{site.location}</li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
