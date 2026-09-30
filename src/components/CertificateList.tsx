"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox, { type LightboxItem } from "@/components/Lightbox";
import Weft from "@/components/Weft";
import type { Certificate } from "@/content/projects";
import type { ImageEntry } from "@/lib/images";

type Entry = Certificate & { image: ImageEntry };

type Props = {
  entries: Entry[];
};

const duaDigit = (n: number) => String(n).padStart(2, "0");

/**
 * Tiga pelat kertas di atas kain. Lembar sertifikat penuh teks kecil, jadi
 * tiap pelat bisa diperbesar lewat penampil yang sama dengan galeri proyek.
 */
export default function CertificateList({ entries }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const items: LightboxItem[] = entries.map((entry) => ({
    src: entry.image.src,
    width: entry.image.width,
    height: entry.image.height,
    alt: entry.alt,
    caption: `${entry.title}, ${entry.issuer}, ${entry.year}`,
  }));

  return (
    <>
      <div>
        {entries.map((entry, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          const selvedge = (
            <div className={`selvedge ${side === "left" ? "selvedge-kanan" : ""}`}>
              <span className="selvedge-teks">
                <span className="emas">{duaDigit(index + 1)}</span>
                {" · "}
                {entry.year}
              </span>
            </div>
          );

          return (
            <Weft key={entry.file} as="article" side={side} className="pakan">
              {side === "right" ? selvedge : null}

              <div className="pelat-isi weft-geser">
                <div className="pelat-gambar">
                  <button
                    type="button"
                    className="lembar-tombol"
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
                      sizes="(max-width: 860px) 100vw, 50vw"
                    />
                  </button>
                </div>

                <div className="pelat-teks">
                  <h2 className="display-m">{entry.title}</h2>
                  <p>{entry.issuer}</p>
                  <p className="redup">{entry.note}</p>
                  <p className="num">{entry.year}</p>
                </div>
              </div>

              {side === "left" ? selvedge : null}
            </Weft>
          );
        })}
      </div>

      <Lightbox items={items} index={open} onChange={setOpen} />
    </>
  );
}
