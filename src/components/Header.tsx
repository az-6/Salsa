"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { site } from "@/content/site";

const nav = [
  { href: "/#karya", label: "Karya", match: "/" },
  { href: "/tentang", label: "Tentang", match: "/tentang" },
  { href: "/sertifikat", label: "Sertifikat", match: "/sertifikat" },
  { href: "/kontak", label: "Kontak", match: "/kontak" },
];

export default function Header() {
  const pathname = usePathname();
  // Halaman depan sepanjang tujuh layar; kepala halaman ikut menempel supaya
  // navigasi tidak hilang di tengah gulungan. Garis bawahnya baru muncul
  // setelah halaman digulir, agar pembuka tetap bersih.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
      <div className="shell site-header-inner">
        <Link href="/" className="site-header-name link-quiet tap">
          <span className="site-header-name-full">{site.name}</span>
          <span className="site-header-name-short">{site.shortName}</span>
        </Link>
        <nav aria-label="Utama">
          <ul className="site-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-quiet tap"
                  aria-current={pathname === item.match ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
