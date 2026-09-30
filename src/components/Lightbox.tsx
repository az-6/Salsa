"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import { IkonKanan, IkonKiri, IkonTutup } from "@/components/Ikon";

export type LightboxItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

type Props = {
  items: LightboxItem[];
  /** Indeks gambar yang sedang dibuka, atau null kalau penampil tertutup. */
  index: number | null;
  onChange: (index: number | null) => void;
};

/** Jarak geser minimum sebelum sebuah sentuhan dihitung sebagai ganti gambar. */
const SWIPE_PX = 48;

const duaDigit = (n: number) => String(n).padStart(2, "0");

/**
 * Penampil lembar layar penuh, di atas kain nila yang sama. Dipakai galeri
 * proyek dan halaman sertifikat; lembar penuh teks kecil mustahil dibaca di
 * lebar ponsel tanpa ini.
 */
export default function Lightbox({ items, index, onChange }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const close = useCallback(() => onChange(null), [onChange]);

  const step = useCallback(
    (delta: number) =>
      onChange(index === null ? null : (index + delta + items.length) % items.length),
    [index, items.length, onChange]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    document.body.classList.add("is-locked");
    return () => document.body.classList.remove("is-locked");
  }, [index]);

  useEffect(() => {
    if (index === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const active = index === null ? null : items[index];

  return (
    <dialog ref={dialogRef} className="viewer" onClose={close} aria-label="Penampil lembar">
      {active ? (
        <div className="viewer-inner">
          <div
            className="viewer-stage"
            onTouchStart={(event) => {
              const touch = event.touches[0];
              touchStart.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              if (!start || items.length < 2) return;

              const touch = event.changedTouches[0];
              const dx = touch.clientX - start.x;
              const dy = touch.clientY - start.y;
              if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy)) return;

              step(dx < 0 ? 1 : -1);
            }}
          >
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="viewer-image"
              sizes="100vw"
            />
          </div>

          <div className="viewer-bar">
            <p className="viewer-caption">{active.caption ?? active.alt}</p>
            <div className="viewer-controls">
              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="ikon-tombol"
                    onClick={() => step(-1)}
                    aria-label="Lembar sebelumnya"
                  >
                    <IkonKiri />
                  </button>
                  <span className="viewer-count num">
                    {duaDigit((index ?? 0) + 1)} / {duaDigit(items.length)}
                  </span>
                  <button
                    type="button"
                    className="ikon-tombol"
                    onClick={() => step(1)}
                    aria-label="Lembar berikutnya"
                  >
                    <IkonKanan />
                  </button>
                </>
              ) : null}
              <button
                type="button"
                className="ikon-tombol merah"
                onClick={close}
                aria-label="Tutup penampil"
              >
                <IkonTutup />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
