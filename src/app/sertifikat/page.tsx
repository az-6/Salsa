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
    <section data-bagian="Sertifikat" aria-labelledby="judul-sertifikat">
      <div className="pelat-kepala loom">
        <div className="selvedge">
          <span className="selvedge-teks">Kredensial</span>
        </div>

        <div>
          <h1 id="judul-sertifikat" className="display-l">
            Sertifikat
          </h1>
          <p className="lede">
            Kompetensi batik saya diuji dan disertifikasi secara nasional. Dua sertifikat
            lainnya berasal dari program kewirausahaan mahasiswa. Sentuh lembarnya untuk
            membaca isinya.
          </p>
        </div>

        <div className="selvedge selvedge-kanan">
          <span className="selvedge-teks emas">
            {String(entries.length).padStart(2, "0")} lembar
          </span>
        </div>
      </div>

      <CertificateList entries={entries} />
    </section>
  );
}
