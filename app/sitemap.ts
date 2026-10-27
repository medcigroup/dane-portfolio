import type { MetadataRoute } from "next";
import { getCaseStudies, getProfessionalProjects, routes } from "@/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dane-portfolio.web.app";
  const entry = (path: string, priority: number, changeFrequency: "monthly" | "yearly", lastModified: string) => ({ url: `${base}${path}`, lastModified: new Date(lastModified), changeFrequency, priority });
  return (["fr", "en"] as const).flatMap((locale) => {
    const r = routes[locale];
    return [
      entry(r.home, 1, "monthly", "2026-10-27"),
      ...[r.work, r.professional, r.research, r.background, r.contact].map((path) => entry(path, 0.7, "monthly", "2026-10-27")),
      ...getProfessionalProjects(locale).map(({ slug }) => entry(r.professionalProject(slug), 0.85, "yearly", "2026-09-17")),
      ...getCaseStudies(locale).map(({ slug }) => entry(r.project(slug), 0.8, "yearly", "2026-09-16")),
    ];
  });
}
