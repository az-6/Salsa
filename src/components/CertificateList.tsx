"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox, { type LightboxItem } from "@/components/Lightbox";
import type { Certificate } from "@/content/projects";
import type { ImageEntry } from "@/lib/images";

type Entry = Certificate & { image: ImageEntry };

type Props = {
  entries: Entry[];
};

/**
 * Lembar sertifikat penuh teks kecil — pada lebar ponsel isinya mustahil
 * dibaca di tempat. Tiap pelat karena itu bisa diperbesar, memakai penampil
 * yang sama dengan galeri proyek.
 */
export default function CertificateList({ entries }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const items: LightboxItem[] = entries.map((entry) => ({
    src: entry.image.src,
    width: entry.image.width,
    height: entry.image.height,
    alt: entry.alt,
    caption: `${entry.title} — ${entry.issuer}, ${entry.year}`,
  }));

  return (
    <>
      <div className="shell certificate-list">
        {entries.map((entry, index) => (
          <article key={entry.file} className="certificate">
            <button
              type="button"
              className="gallery-button plate bleed"
              onClick={() => setOpen(index)}
              aria-label={`Perbesar sertifikat: ${entry.title}`}
            >
              <Image
                src={entry.image.src}
                alt={entry.alt}
                width={entry.image.width}
                height={entry.image.height}
                placeholder="blur"
                blurDataURL={entry.image.blurDataURL}
                sizes="(max-width: 860px) 100vw, 36vw"
              />
            </button>

            <div>
              <h2 className="certificate-title">{entry.title}</h2>
              <p className="certificate-issuer">{entry.issuer}</p>
              <p className="callout certificate-note">{entry.note}</p>
              <p className="meta certificate-year">{entry.year}</p>
            </div>
          </article>
        ))}
      </div>

      <Lightbox items={items} index={open} onChange={setOpen} />
    </>
  );
}
