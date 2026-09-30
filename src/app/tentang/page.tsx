import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: site.bio[0],
};

export default function AboutPage() {
  return (
    <section className="rak loom" data-bagian="Tentang" aria-labelledby="judul-tentang">
      <div className="selvedge">
        <span className="selvedge-teks">{site.role}</span>
      </div>

      <div className="rak-isi">
        <div className="rak-teks">
          <h1 id="judul-tentang" className="display-l">
            Tentang
          </h1>

          <div className="prose">
            {site.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="rak-kolom">
            <div>
              <h2 className="rak-subjudul">Yang saya kerjakan</h2>
              <ul className="benang-daftar">
                {site.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="rak-subjudul">Pendidikan</h2>
              <ul className="benang-daftar">
                {site.education.map((entry) => (
                  <li key={entry.title}>
                    <span>
                      {entry.title}
                      <br />
                      <span className="redup">{entry.org}</span>
                      <br />
                      <span className="num">{entry.period}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="rak-subjudul" style={{ marginTop: "1.5rem" }}>
                Kredensial
              </h2>
              <p>
                <Link href="/sertifikat" className="benang-link tap">
                  Lihat tiga sertifikat
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="selvedge selvedge-kanan">
        <span className="selvedge-teks emas">{site.location}</span>
      </div>
    </section>
  );
}
