"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox, { type LightboxItem } from "@/components/Lightbox";

export type GalleryItem = LightboxItem & {
  blurDataURL: string;
};

type Props = {
  items: GalleryItem[];
};

/**
 * Lembar yang melebar — papan suasana, spesifikasi jahitan, tahapan stilasi —
 * memakai satu baris penuh karena keterangannya perlu terbaca. Croquis tegak
 * dan motif persegi disusun dua per baris, seperti lembar lookbook.
 */
const shapeOf = (item: GalleryItem) =>
  item.width / item.height >= 1.25 ? "wide" : "upright";

export default function Gallery({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="gallery">
        {items.map((item, index) => (
          <figure key={item.src} className={`gallery-item gallery-item-${shapeOf(item)}`}>
            <button
              type="button"
              className="gallery-button plate bleed"
              onClick={() => setOpen(index)}
              aria-label={`Perbesar: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                placeholder="blur"
                blurDataURL={item.blurDataURL}
                sizes={
                  shapeOf(item) === "upright"
                    ? "(max-width: 860px) 100vw, 38vw"
                    : "(max-width: 860px) 100vw, 78vw"
                }
              />
            </button>
            {item.caption ? (
              <figcaption className="callout gallery-caption">{item.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      <Lightbox items={items} index={open} onChange={setOpen} />
    </>
  );
}
