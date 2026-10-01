import type { NextConfig } from "next";

/** Alamat karya versi lama, supaya tautan yang sudah dibagikan tidak mati. */
const KARYA_LAMA: Record<string, string> = {
  "kipas-pesisir": "persona-analisis",
  "jejak-laut": "nautica-guard",
  "bank-bpd-diy": "freelance-report",
  "bank-ccb": "freelance-report",
  "kimia-farma": "freelance-report",
  "modest-wear": "internship-report",
};

const nextConfig: NextConfig = {
  redirects() {
    return Object.entries(KARYA_LAMA).map(([lama, baru]) => ({
      source: `/karya/${lama}`,
      destination: `/karya/${baru}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
