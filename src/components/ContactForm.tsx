"use client";

import { useState, type FormEvent } from "react";

import { IkonPanahKanan } from "@/components/Ikon";
import { site } from "@/content/site";

/**
 * Form ini tidak mengirim apa pun ke server. Saat dikirim, isinya disusun jadi
 * satu tautan mailto dan dibuka di aplikasi email pengunjung. Tidak ada data
 * yang berpindah tanpa mereka menekan kirim sendiri.
 */
export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("nama") ?? "").trim();
    const from = String(form.get("email") ?? "").trim();
    const message = String(form.get("pesan") ?? "").trim();

    const subject = name ? `Proyek dari ${name}` : "Halo dari website";
    const body = [message, "", "—", name, from].filter(Boolean).join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setOpened(true);
  }

  return (
    <form className="formulir" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="nama">Nama</label>
        <input id="nama" name="nama" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email kamu</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="pesan">Pesan</label>
        <textarea
          id="pesan"
          name="pesan"
          rows={6}
          required
          placeholder="Ceritakan proyeknya: jenis busana atau motif, jumlah, dan kapan dibutuhkan."
        />
      </div>

      <div>
        <button type="submit" className="heddle-merah">
          Buka di aplikasi email
          <IkonPanahKanan />
        </button>
      </div>

      <p className="formulir-catatan">
        Mengirim pesan membuka aplikasi email kamu dengan isian ini sudah terisi.
      </p>

      <p className="formulir-status" role="status">
        {opened ? `Kalau aplikasi email tidak terbuka, kirim langsung ke ${site.email}.` : ""}
      </p>
    </form>
  );
}
