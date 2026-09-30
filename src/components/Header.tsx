"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/content/site";

const heddles = [
  { href: "/#karya", label: "Karya", match: "/karya" },
  { href: "/tentang", label: "Tentang", match: "/tentang" },
  { href: "/sertifikat", label: "Sertifikat", match: "/sertifikat" },
];

/**
 * Sisir (reed) alat tenun: balok di atas dengan gigi-gigi benang di bawahnya.
 * Setiap tautan adalah satu heddle; Hubungi memakai benang merah.
 */
export default function Header() {
  const pathname = usePathname();

  const isCurrent = (match: string) =>
    pathname === match || pathname.startsWith(`${match}/`);

  return (
    <header className="sisir">
      <div className="sisir-inner">
        <Link href="/" className="sisir-nama" aria-label={`${site.name}, beranda`}>
          {site.shortName}
        </Link>

        <nav className="sisir-nav" aria-label="Utama">
          {heddles.map((heddle) => (
            <Link
              key={heddle.href}
              href={heddle.href}
              className="heddle"
              aria-current={isCurrent(heddle.match) ? "page" : undefined}
            >
              {heddle.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="heddle-merah heddle-nav"
            aria-current={isCurrent("/kontak") ? "page" : undefined}
          >
            Hubungi
          </Link>
        </nav>
      </div>
    </header>
  );
}
