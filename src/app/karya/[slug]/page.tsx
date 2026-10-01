import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Gallery, { type GalleryItem } from "@/components/Gallery";
import { getProject, groupsOf, projects } from "@/content/projects";
import { getImage } from "@/lib/images";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

const duaDigit = (n: number) => String(n).padStart(2, "0");

/** "Seragam Bank BPD DIY" -> "seragam-bank-bpd-diy", jangkar kelompok di halaman. */
const groupId = (group: string) =>
  group
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const items: GalleryItem[] = project.shots.map((shot) => ({
    ...getImage(shot.dir ?? project.dir, shot.file),
    alt: shot.alt,
    caption: shot.caption,
    group: shot.group ? { id: groupId(shot.group), title: shot.group } : undefined,
  }));

  const paragraphs = project.body ?? [project.summary];
  const groups = groupsOf(project);

  const position = projects.findIndex((entry) => entry.slug === project.slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <>
      <article>
        <header className="kain-kepala loom" data-bagian={project.title}>
          <div className="selvedge">
            <span className="selvedge-teks">
              <span className="emas">
                {duaDigit(position + 1)}/{duaDigit(projects.length)}
              </span>
              {" · "}
              {project.kind}
            </span>
          </div>

          <div className="kain-judul-blok">
            <div className="kain-judul">
              <h1 className="display-l">{project.title}</h1>
              <p className="lede redup kain-sub">{project.subtitle}</p>
            </div>

            <dl className="fakta">
              <div>
                <dt>Jenis</dt>
                <dd>{project.kind}</dd>
              </div>
              <div>
                <dt>Tahun</dt>
                <dd className="num">{project.year}</dd>
              </div>
              <div>
                <dt>Peran</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Lembar</dt>
                <dd className="num">{duaDigit(project.shots.length)}</dd>
              </div>
            </dl>
          </div>

          <div className="selvedge selvedge-kanan">
            <span className="selvedge-teks emas">{project.year}</span>
          </div>
        </header>

        <div className="kain-isi loom">
          <div className="prose">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {groups.length > 0 ? (
              <ul className="benang-daftar">
                {groups.map((group) => (
                  <li key={group}>
                    <a href={`#${groupId(group)}`} className="katun-link tap">
                      {group}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <Gallery items={items} />
      </article>

      <nav className="lemparan-berikut loom" aria-label="Proyek berikutnya">
        <div className="selvedge">
          <span className="selvedge-teks">Lemparan berikutnya</span>
        </div>
        <Link href={`/karya/${next.slug}`} className="lemparan-berikut-isi">
          <span className="display-l">{next.title}</span>
          <span className="redup">{next.subtitle}</span>
          <span className="ujung-benang">Buka {next.shots.length} lembar</span>
        </Link>
        <div className="selvedge selvedge-kanan">
          <span className="selvedge-teks emas">
            {duaDigit(((position + 1) % projects.length) + 1)}/{duaDigit(projects.length)}
          </span>
        </div>
      </nav>
    </>
  );
}
