import type { Metadata } from "next";

import CertificateList from "@/components/CertificateList";
import { certificates, certificatesDir } from "@/content/projects";
import { getImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sertifikat",
  description:
    "Sertifikat kompetensi dan keikutsertaan Salsabila Azzahra di bidang batik dan kewirausahaan.",
};

export default function CertificatesPage() {
  const entries = certificates.map((certificate) => ({
    ...certificate,
    image: getImage(certificatesDir, certificate.file),
  }));

  return (
    <section className="section">
      <div className="shell">
        <h1 className="display display-l">Sertifikat</h1>
        <p className="lede certificates-intro">
          Kompetensi batik saya diuji dan disertifikasi secara nasional. Dua sertifikat
          lainnya berasal dari program kewirausahaan mahasiswa.
        </p>
        <p className="callout certificates-hint">Sentuh lembarnya untuk membaca isinya.</p>
      </div>

      <CertificateList entries={entries} />
    </section>
  );
}
