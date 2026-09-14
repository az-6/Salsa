import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/tentang", "/sertifikat", "/kontak"];
  const works = projects.map((project) => `/karya/${project.slug}`);

  return [...pages, ...works].map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
