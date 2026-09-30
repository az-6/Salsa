"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Teropong (shuttle): satu benang merah di tepi kiri viewport yang memanjang
 * mengikuti kemajuan gulir. Nama bagian yang sedang dibaca menaiki ujungnya.
 * Elemen bagian ditandai dengan atribut data-bagian.
 */
export default function Teropong() {
  const pathname = usePathname();
  const benangRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const ukur = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const persen = `${(progress * 100).toFixed(2)}%`;
      if (benangRef.current) benangRef.current.style.height = persen;
      if (labelRef.current) labelRef.current.style.top = persen;
    };

    const jadwalkan = () => {
      if (frame) return;
      frame = requestAnimationFrame(ukur);
    };

    ukur();
    window.addEventListener("scroll", jadwalkan, { passive: true });
    window.addEventListener("resize", jadwalkan);
    return () => {
      window.removeEventListener("scroll", jadwalkan);
      window.removeEventListener("resize", jadwalkan);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const label = labelRef.current;
    if (!label) return;

    const bagian = document.querySelectorAll<HTMLElement>("[data-bagian]");
    if (bagian.length === 0) {
      label.textContent = "";
      label.classList.remove("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const nama = entry.target.getAttribute("data-bagian") ?? "";
          label.textContent = nama;
          label.classList.toggle("is-visible", nama.length > 0);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    bagian.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="teropong" aria-hidden="true">
      <span ref={benangRef} className="teropong-benang" />
      <span ref={labelRef} className="teropong-label" />
    </div>
  );
}
