import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Gallery, { type GalleryItem } from "@/components/Gallery";
import { getProject, projects } from "@/content/projects";
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

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const items: GalleryItem[] = project.shots.map((shot) => ({
    ...getImage(project.dir, shot.file),
    alt: shot.alt,
    caption: shot.caption,
  }));

  const position = projects.findIndex((entry) => entry.slug === project.slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <>
      <article>
        <header className="section project-header">
          <div className="shell project-header-inner">
            <div>
              <h1 className="display display-l">{project.title}</h1>
              <p className="lede project-subtitle">{project.subtitle}</p>
            </div>

            <dl className="project-facts">
              <div>
                <dt>Jenis</dt>
                <dd>{project.kind}</dd>
              </div>
              <div>
                <dt>Tahun</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Peran</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Lembar</dt>
                <dd>{project.shots.length}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="shell project-body prose">
          {project.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="shell project-gallery">
          <Gallery items={items} />
        </div>
      </article>

      <nav className="shell project-next" aria-label="Proyek berikutnya">
        <p className="callout">Proyek berikutnya</p>
        <Link href={`/karya/${next.slug}`} className="display display-m link-underline tap">
          {next.title}
        </Link>
      </nav>
    </>
  );
}
