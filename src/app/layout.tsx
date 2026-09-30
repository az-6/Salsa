import type { Metadata, Viewport } from "next";
import { Azeret_Mono, Bricolage_Grotesque } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Teropong from "@/components/Teropong";
import { site } from "@/content/site";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  axes: ["opsz", "wdth"],
});

const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-azeret",
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
  viewportFit: "cover",
  themeColor: "#1c2541",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${azeret.variable}`}
      // Kelas `js` ditambahkan skrip di <head> sebelum hidrasi; React tidak
      // perlu mencocokkannya.
      suppressHydrationWarning
    >
      <head>
        {/* Menandai bahwa JS hidup sebelum cat pertama, supaya baris pakan yang
            belum ditenun tidak berkedip dari terlihat ke tersembunyi. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a href="#isi" className="skip-link">
          Lompat ke isi
        </a>
        <Teropong />
        <Header />
        <main id="isi">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
