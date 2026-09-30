"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

type Props = {
  as?: "div" | "article" | "li" | "section" | "figure";
  /** Sisi tempat lemparan dimulai. Baris bergantian kiri dan kanan. */
  side: "left" | "right";
  className?: string;
  children: ReactNode;
  [key: `data-${string}`]: string | undefined;
};

let observer: IntersectionObserver | null = null;

function amati(el: Element) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-woven");
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
  }
  observer.observe(el);
}

/**
 * Satu lemparan pakan. Tanpa JS, isinya sudah terlihat. Dengan JS, isi
 * (elemen ber-kelas .weft-geser di dalamnya) masuk dari sisi yang ditentukan
 * begitu baris memasuki viewport, lalu diam.
 */
export default function Weft({ as = "div", side, className, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-woven");
      return;
    }

    amati(el);
    return () => observer?.unobserve(el);
  }, []);

  // Semua tag yang diizinkan menerima atribut yang sama dengan div; tipe div
  // dipakai agar JSX tidak mengiris props dari gabungan lima elemen.
  const Tag = as as "div";

  return (
    <Tag
      ref={ref as RefObject<HTMLDivElement>}
      className={["weft", className].filter(Boolean).join(" ")}
      data-side={side}
      {...rest}
    >
      {children}
    </Tag>
  );
}
