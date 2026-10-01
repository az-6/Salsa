import Image from "next/image";
import Link from "next/link";

import { IkonPanahKanan } from "@/components/Ikon";
import WeftRow from "@/components/WeftRow";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getImage } from "@/lib/images";

/**
 * Pita yang melintas di antara dua baris nama: lima tampilan Sunlit Minimalism.
 * Potongan "#pita" dibuat `npm run assets` dari lembar aslinya (lihat CROPS).
 */
const PITA = { dir: "sunlit minimalism", file: "04 lima tampilan.png" } as const;

const tahunAwal = Math.min(...projects.map((p) => Number(p.year)));
const tahunAkhir = Math.max(...projects.map((p) => Number(p.year)));

export default function HomePage() {
  const pita = getImage(PITA.dir, `${PITA.file}#pita`);
  const pitaAlt =
    projects
      .find((p) => p.dir === PITA.dir)
      ?.shots.find((shot) => shot.file === PITA.file)?.alt ??
    "Lima tampilan koleksi Sunlit Minimalism";

  const [nama, ...sisa] = site.name.split(" ");
  const namaKedua = sisa.join(" ");

  return (
    <>
      <section className="tenun" data-bagian="Tenunan" aria-labelledby="nama">
        <div className="selvedge">
          <span className="selvedge-teks">{site.role}</span>
        </div>

        <div className="tenun-jalin">
          <h1 id="nama" className="tenun-nama">
            <span>{nama}</span>
            <span>{namaKedua}</span>
          </h1>

          <div className="tenun-pita">
            <Image
              src={pita.src}
              alt={pitaAlt}
              width={pita.width}
              height={pita.height}
              placeholder="blur"
              blurDataURL={pita.blurDataURL}
              sizes="100vw"
              priority
            />
          </div>

          <div className="tenun-nama is-over" aria-hidden="true">
            <span>{nama}</span>
            <span>{namaKedua}</span>
          </div>
        </div>

        <div className="tenun-bawah">
          <p className="tenun-peran">
            <strong>{site.role}</strong> yang berangkat dari wayang kulit, batik pesisir, dan
            ragam hias Nusantara, lalu menurunkannya sampai lembar teknis siap produksi.
            Berbasis di {site.location}.
          </p>
          <Link href="/kontak" className="ujung-benang">
            Kirim pesan
          </Link>
        </div>

        <div className="selvedge selvedge-kanan">
          <span className="selvedge-teks emas">
            {site.location.split(",")[0]} · {tahunAwal}–{tahunAkhir}
          </span>
        </div>
      </section>

      <section id="karya" data-bagian="Karya" aria-labelledby="judul-karya">
        <div className="karya-kepala">
          <h2 id="judul-karya" className="display-l">
            Karya
          </h2>
          <span className="num">{String(projects.length).padStart(2, "0")} lemparan</span>
        </div>

        <div>
          {projects.map((project, index) => (
            <WeftRow
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </section>

      <section className="catatan loom" data-bagian="Tentang" aria-label="Tentang saya">
        <div className="catatan-isi">
          <p className="catatan-teks">{site.bio[0]}</p>
          <div className="catatan-tautan">
            <Link href="/tentang" className="heddle-merah">
              Tentang saya
              <IkonPanahKanan />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
