import Image from "next/image";
import Link from "next/link";

import Weft from "@/components/Weft";
import type { Project } from "@/content/projects";
import { getImage } from "@/lib/images";

type Props = {
  project: Project;
  /** Urutan lemparan, mulai dari 0. Menentukan sisi dan nomor di selvedge. */
  index: number;
  total: number;
};

/** Koleksi, seragam, dan motif ditenun lebar; studi dan lembar tunggal lebih sempit. */
const LEBAR = new Set(["Koleksi busana", "Seragam korporat", "Motif permukaan"]);

const duaDigit = (n: number) => String(n).padStart(2, "0");

export default function WeftRow({ project, index, total }: Props) {
  const cover = getImage(project.dir, project.cover);
  const coverAlt =
    project.shots.find((shot) => shot.file === project.cover)?.alt ?? project.summary;
  const side = index % 2 === 0 ? "left" : "right";
  const bobot = LEBAR.has(project.kind) ? "lebar" : "sempit";
  const nomor = `${duaDigit(index + 1)}/${duaDigit(total)}`;

  const selvedge = (
    <div className={`selvedge ${side === "left" ? "selvedge-kanan" : ""}`}>
      <span className="selvedge-teks">
        <span className="emas">{nomor}</span>
        {" · "}
        {project.kind}
        {" · "}
        {project.role}
      </span>
    </div>
  );

  return (
    <Weft as="article" side={side} className="pakan" data-bobot={bobot}>
      {side === "right" ? selvedge : null}

      <div className="pakan-isi weft-geser">
        <Link href={`/karya/${project.slug}`} className="pakan-link">
          <span className="pakan-gambar">
            <Image
              src={cover.src}
              alt={coverAlt}
              width={cover.width}
              height={cover.height}
              placeholder="blur"
              blurDataURL={cover.blurDataURL}
              sizes={
                bobot === "lebar"
                  ? "(max-width: 860px) 100vw, 62vw"
                  : "(max-width: 860px) 100vw, 40vw"
              }
              priority={index === 0}
            />
          </span>

          <span className="pakan-teks">
            <span className="display-m pakan-judul">{project.title}</span>
            <span className="pakan-sub">{project.subtitle}</span>
            <span className="pakan-ringkas">{project.summary}</span>
            <span className="pakan-peran">{project.role}</span>
            <span className="pakan-lihat benang-link">
              Buka {project.shots.length} lembar
            </span>
          </span>
        </Link>
      </div>

      {side === "left" ? selvedge : null}
    </Weft>
  );
}
