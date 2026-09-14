import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";
import { getImage } from "@/lib/images";

type Props = {
  project: Project;
  /** Menentukan sisi gambar agar deretan proyek tidak berjalan lurus ke bawah. */
  index: number;
};

export default function ProjectRow({ project, index }: Props) {
  const cover = getImage(project.dir, project.cover);
  const coverAlt =
    project.shots.find((shot) => shot.file === project.cover)?.alt ?? project.summary;
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <article className={`work-row work-row-${side}`}>
      <Link href={`/karya/${project.slug}`} className="work-link">
        <span className="work-figure plate bleed">
          <Image
            src={cover.src}
            alt={coverAlt}
            width={cover.width}
            height={cover.height}
            placeholder="blur"
            blurDataURL={cover.blurDataURL}
            sizes="(max-width: 860px) 100vw, 58vw"
          />
        </span>

        <span className="work-text">
          <span className="display display-m work-title">{project.title}</span>
          <span className="work-subtitle">{project.subtitle}</span>
          <span className="work-summary">{project.summary}</span>
          <span className="callout work-meta">
            {project.kind}, {project.year}
          </span>
        </span>
      </Link>
    </article>
  );
}
