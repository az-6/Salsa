import Image from "next/image";
import Link from "next/link";

import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getImage } from "@/lib/images";

export default function Home() {
  // Croquis Srikandi dipakai sebagai pembuka karena ia memuat seluruh isi
  // portofolio ini sekaligus: siluet busana, motif tradisional, dan bordir.
  const hero = getImage("fashion illustration", "desain 1.png");

  return (
    <>
      <section className="hero">
        <div className="shell hero-inner">
          <div className="hero-words">
            <h1 className="display display-xl hero-name">{site.name}</h1>
            <p className="hero-role">
              <span>{site.role}</span>
              <span className="hero-place">{site.location}</span>
            </p>
            <p className="lede hero-lede">{site.bio[0]}</p>
          </div>

          <figure className="hero-figure">
            <Image
              src={hero.src}
              alt="Gaun putih tanpa lengan berpotongan asimetris dengan wayang Srikandi bersulam di sisi kiri badan"
              width={hero.width}
              height={hero.height}
              placeholder="blur"
              blurDataURL={hero.blurDataURL}
              priority
              sizes="(max-width: 860px) 88vw, 40vw"
            />
            <figcaption className="hero-callout callout callout-mark">
              Wayang Srikandi, bordir pada kain mori
            </figcaption>
          </figure>
        </div>
      </section>

      <hr className="rule" />

      <section className="section" id="karya">
        <div className="shell">
          <h2 className="display display-l work-heading">Karya</h2>
          <p className="lede work-intro">
            Delapan proyek, dari riset motif sampai lembar yang dikirim ke penjahit.
          </p>
        </div>

        <div className="shell work-list">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <hr className="rule" />

      <section className="section">
        <div className="shell about-teaser">
          <div className="prose">
            <h2 className="display display-l about-teaser-heading">
              Cara saya bekerja
            </h2>
            {site.bio.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="about-teaser-action">
              <Link href="/tentang" className="link-underline tap">
                Selengkapnya tentang saya
              </Link>
            </p>
          </div>

          <ul className="skill-list">
            {site.skills.map((skill) => (
              <li key={skill} className="callout">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
