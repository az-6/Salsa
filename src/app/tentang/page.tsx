import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: site.bio[0],
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="shell about-layout">
        <div>
          <h1 className="display display-l">Tentang</h1>

          <div className="prose about-prose">
            {site.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-columns">
            <div>
              <h2 className="about-subhead">Yang saya kerjakan</h2>
              <ul className="skill-list">
                {site.skills.map((skill) => (
                  <li key={skill} className="callout">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="about-subhead">Pendidikan</h2>
              <ul className="skill-list">
                {site.education.map((entry) => (
                  <li key={entry.title} className="callout">
                    <span>
                      {entry.title}
                      <br />
                      {entry.org}
                      <br />
                      <span className="meta">{entry.period}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="about-subhead about-subhead-spaced">Kredensial</h2>
              <p className="callout">
                <Link href="/sertifikat" className="link-underline tap">
                  Lihat tiga sertifikat
                </Link>
              </p>
            </div>
          </div>
        </div>

        <figure className="about-portrait plate">
          <Image
            src={site.portrait}
            alt={`Potret ${site.name}`}
            width={900}
            height={1200}
            sizes="(max-width: 860px) 100vw, 34vw"
          />
        </figure>
      </div>
    </section>
  );
}
