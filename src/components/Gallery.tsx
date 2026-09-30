"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox, { type LightboxItem } from "@/components/Lightbox";
import Weft from "@/components/Weft";

export type GalleryItem = LightboxItem & {
  blurDataURL: string;
};

type Props = {
  items: GalleryItem[];
};

type Baris =
  | { bentuk: "lebar"; indeks: [number] }
  | { bentuk: "tunggal"; indeks: [number] }
  | { bentuk: "pasang"; indeks: [number, number] };

const lebar = (item: GalleryItem) => item.width / item.height >= 1.25;

/**
 * Lembar disusun sebagai baris pakan. Lembar melebar (papan suasana, lembar
 * teknis) mengisi satu lemparan penuh. Dua lembar tegak yang berdampingan
 * ditenun berpasangan dalam satu baris: satu lembar motif, satu lembar
 * spesifikasi, seperti cara karya ini memang dibuat.
 */
function susunBaris(items: GalleryItem[]): Baris[] {
  const baris: Baris[] = [];
  let i = 0;
  while (i < items.length) {
    if (lebar(items[i])) {
      baris.push({ bentuk: "lebar", indeks: [i] });
      i += 1;
    } else if (i + 1 < items.length && !lebar(items[i + 1])) {
      baris.push({ bentuk: "pasang", indeks: [i, i + 1] });
      i += 2;
    } else {
      baris.push({ bentuk: "tunggal", indeks: [i] });
      i += 1;
    }
  }
  return baris;
}

const duaDigit = (n: number) => String(n).padStart(2, "0");

export default function Gallery({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const baris = susunBaris(items);

  return (
    <>
      <div>
        {baris.map((b, urutan) => {
          const side = urutan % 2 === 0 ? "left" : "right";
          const pertama = items[b.indeks[0]];
          const label = b.indeks.map((n) => duaDigit(n + 1)).join(" · ");
          const selvedge = (
            <div className={`selvedge ${side === "left" ? "selvedge-kanan" : ""}`}>
              <span className="selvedge-teks">
                <span className="emas">{label}</span>
                {pertama.caption ? ` · ${pertama.caption}` : ""}
              </span>
            </div>
          );

          return (
            <Weft
              key={b.indeks.join("-")}
              as="div"
              side={side}
              className="lembar"
              data-bentuk={b.bentuk}
            >
              {side === "right" ? selvedge : null}

              <div className="lembar-isi weft-geser">
                {b.indeks.map((n) => {
                  const item = items[n];
                  return (
                    <figure key={item.src} className="lembar-pelat">
                      <button
                        type="button"
                        className="lembar-tombol"
                        onClick={() => setOpen(n)}
                        aria-label={`Perbesar lembar ${duaDigit(n + 1)}: ${item.alt}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={item.width}
                          height={item.height}
                          placeholder="blur"
                          blurDataURL={item.blurDataURL}
                          sizes={
                            b.bentuk === "lebar"
                              ? "100vw"
                              : b.bentuk === "pasang"
                                ? "(max-width: 860px) 50vw, 46vw"
                                : "(max-width: 860px) 100vw, 56vw"
                          }
                        />
                      </button>
                      {item.caption && b.bentuk !== "lebar" && n !== b.indeks[0] ? (
                        <figcaption className="lembar-keterangan">{item.caption}</figcaption>
                      ) : null}
                    </figure>
                  );
                })}
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
