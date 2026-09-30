import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hilang loom" aria-labelledby="judul-hilang">
      <div className="selvedge">
        <span className="selvedge-teks">Benang putus</span>
      </div>
      <div>
        <h1 id="judul-hilang" className="display-l">
          Halaman ini tidak ada.
        </h1>
        <p className="lede redup" style={{ marginTop: "1rem", maxWidth: "40ch" }}>
          Mungkin tautannya lama, atau lembarnya sudah dipindah.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/#karya" className="ujung-benang" style={{ maxWidth: "20rem" }}>
            Kembali ke karya
          </Link>
        </p>
      </div>
    </section>
  );
}
