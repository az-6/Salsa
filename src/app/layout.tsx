import type { Metadata, Viewport } from "next";
import { Archivo, Bodoni_Moda } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/content/site";

import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.bio[0],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.bio[0],
    locale: "id_ID",
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  // Ponsel berponi: halaman boleh mengisi seluruh layar, dan tepinya dijaga
  // lewat env(safe-area-inset-*) di globals.css.
  viewportFit: "cover",
  themeColor: "#f8f7f2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${bodoni.variable} ${archivo.variable}`}>
      <body>
        <a href="#isi" className="skip-link">
          Lompat ke isi
        </a>
        <Header />
        <main id="isi">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
