import { projects, publication, type Project } from "@/data/portfolio";
import { projectsEn, publicationEn } from "@/data/portfolio.en";
import { professionalProjects, professionalProjectsEn, type ProfessionalProject } from "@/data/professional-projects";

export type Locale = "fr" | "en";

/** Every page exists in both languages: these are the paired route prefixes. */
const routePairs: { fr: string; en: string }[] = [
  { fr: "/etudes-de-cas/", en: "/en/case-studies/" },
  { fr: "/projets-professionnels/", en: "/en/professional-projects/" },
  { fr: "/projects/", en: "/en/projects/" },
  { fr: "/research/", en: "/en/research/" },
  { fr: "/parcours/", en: "/en/background/" },
  { fr: "/contact/", en: "/en/contact/" },
];

export const routes = {
  fr: {
    home: "/",
    work: "/etudes-de-cas/",
    professional: "/projets-professionnels/",
    research: "/research/",
    background: "/parcours/",
    contact: "/contact/",
    project: (slug: string) => `/projects/${slug}/`,
    professionalProject: (slug: string) => `/projets-professionnels/${slug}/`,
  },
  en: {
    home: "/en/",
    work: "/en/case-studies/",
    professional: "/en/professional-projects/",
    research: "/en/research/",
    background: "/en/background/",
    contact: "/en/contact/",
    project: (slug: string) => `/en/projects/${slug}/`,
    professionalProject: (slug: string) => `/en/professional-projects/${slug}/`,
  },
} as const;

/** Returns the same page in the other language (falls back to its home page). */
export function switchLocalePath(pathname: string, target: Locale): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const source: Locale = path === "/en/" || path.startsWith("/en/") ? "en" : "fr";
  if (source === target) return path;
  for (const pair of routePairs) {
    if (path.startsWith(pair[source])) return pair[target] + path.slice(pair[source].length);
  }
  return routes[target].home;
}

export function getProjects(locale: Locale): Project[] {
  return locale === "en" ? projectsEn : projects;
}

export function getProfessionalProjects(locale: Locale): ProfessionalProject[] {
  return locale === "en" ? professionalProjectsEn : professionalProjects;
}

export function getPublication(locale: Locale) {
  return locale === "en" ? publicationEn : publication;
}

/** Academic case studies not already presented as a professional project. */
export function getCaseStudies(locale: Locale): Project[] {
  const professionalSlugs = new Set(professionalProjects.map(({ slug }) => slug));
  return getProjects(locale).filter(({ slug }) => !professionalSlugs.has(slug));
}

export const cvUrl = "/documents/CV-KAMENAN-Dane-Assoumou-Junior_2026.pdf";

export const ui = {
  fr: {
    nav: { home: "Accueil", work: "Études de cas", professional: "Projets pros", research: "Recherche", background: "Parcours", contact: "Contact" },
    homeLabel: "Accueil — KAMENAN Dane",
    coords: "5°20′N · 4°01′O",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    language: "Choix de langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    newTab: "nouvel onglet",
    footer: { eyebrow: "Travaillons ensemble", title: "Un projet de recherche, de données ou de territoire ?", references: "Références disponibles sur demande" },
  },
  en: {
    nav: { home: "Home", work: "Case studies", professional: "Pro projects", research: "Research", background: "Background", contact: "Contact" },
    homeLabel: "Home — KAMENAN Dane",
    coords: "5°20′N · 4°01′W",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    language: "Language selection",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    newTab: "opens in a new tab",
    footer: { eyebrow: "Let’s work together", title: "A research, data or territorial project?", references: "References available on request" },
  },
} as const;

/** Canonical + hreflang links for a page that exists at `fr` and `en`. */
export function alternatesFor(locale: Locale, fr: string, en: string) {
  return { canonical: locale === "en" ? en : fr, languages: { "fr-FR": fr, en } };
}

export type LayerId = "rs" | "gis" | "field" | "app";

export const layers: { id: LayerId; code: string; color: string }[] = [
  { id: "rs", code: "L1", color: "#1a9641" },
  { id: "gis", code: "L2", color: "#1d5fd1" },
  { id: "field", code: "L3", color: "#b8641a" },
  { id: "app", code: "L4", color: "#7a4fc4" },
];

export const layerLabels: Record<Locale, Record<LayerId, string>> = {
  fr: { rs: "Télédétection", gis: "SIG & analyse", field: "Terrain", app: "Dev d’apps" },
  en: { rs: "Remote sensing", gis: "GIS & analysis", field: "Fieldwork", app: "App development" },
};

/** Which skill layers each project draws on (used by the case-study filter and card metadata). */
const projectLayers: Record<string, LayerId[]> = {
  "secheresse-zanzan": ["rs", "gis"],
  "growaa-agri-analytics": ["app", "rs"],
  "pegmatites-sodemi": ["rs", "gis", "app"],
  "eau-sante-agnibilekrou": ["gis", "field"],
  "zone-humide-kan": ["field", "gis"],
};

export type WorkItem = {
  slug: string;
  href: string;
  title: string;
  eyebrow: string;
  period: string;
  organization: string;
  summary: string;
  image: string;
  imageAlt: string;
  tools: string[];
  layers: LayerId[];
  status?: string;
  /** Show the whole image (multi-panel figure) instead of cropping it to fill the frame. */
  contain?: boolean;
};

/** Every project (case studies and professional work) in display order: the flagship study first. */
export function getWorkItems(locale: Locale): WorkItem[] {
  const r = routes[locale];
  const cases = getCaseStudies(locale).map((p): WorkItem => ({ slug: p.slug, href: r.project(p.slug), title: p.title, eyebrow: p.eyebrow, period: p.period, organization: p.organization, summary: p.summary, image: p.image, imageAlt: p.imageAlt, tools: p.tools, layers: projectLayers[p.slug] ?? [], contain: Boolean(p.figure && !p.figure.photo) }));
  const pros = getProfessionalProjects(locale).map((p): WorkItem => ({ slug: p.slug, href: r.professionalProject(p.slug), title: p.shortTitle, eyebrow: p.eyebrow, period: p.period, organization: p.organization, summary: p.summary, image: p.image, imageAlt: p.imageAlt, tools: p.tools, layers: projectLayers[p.slug] ?? [], status: p.status }));
  const [flagship, ...otherCases] = cases;
  return [flagship, ...pros, ...otherCases].filter((item): item is WorkItem => Boolean(item));
}

export function layerLine(locale: Locale, ids: LayerId[]) {
  return ids.map((id) => `${layers.find((layer) => layer.id === id)?.code} ${layerLabels[locale][id]}`);
}
