import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getProfessionalProjects, getWorkItems, layerLine, routes, ui, type Locale } from "@/i18n";

const copy = {
  fr: {
    eyebrow: "Projets professionnels",
    title: "Des données spatiales aux produits qui servent le terrain.",
    intro: "Direction technologique, télédétection et développement d’applications : des projets menés de la conception au déploiement, de l’agriculture de précision à l’exploration géoscientifique.",
    summaryLabel: "En bref",
    summary: (count: number, live: number) => [
      { value: String(count).padStart(2, "0"), label: "projets documentés" },
      { value: String(live).padStart(2, "0"), label: "plateforme en production" },
      { value: "CTO", label: "rôle chez GROWAA" },
      { value: "2025", label: "début des missions" },
    ],
    organization: "Structure", role: "Rôle", period: "Période",
    view: "Lire l’étude de cas", visit: "Visiter le projet",
    viewLabel: (title: string) => `Voir le projet ${title}`,
    ctaEyebrow: "Collaborons",
    ctaTitle: "Un produit géospatial ou une analyse à concevoir ?",
    ctaLink: "Échanger sur un projet",
  },
  en: {
    eyebrow: "Professional projects",
    title: "From spatial data to products that serve the field.",
    intro: "Technology leadership, remote sensing and app development: projects carried from design to deployment, from precision agriculture to geoscientific exploration.",
    summaryLabel: "At a glance",
    summary: (count: number, live: number) => [
      { value: String(count).padStart(2, "0"), label: "documented projects" },
      { value: String(live).padStart(2, "0"), label: "platform in production" },
      { value: "CTO", label: "role at GROWAA" },
      { value: "2025", label: "first assignments" },
    ],
    organization: "Organization", role: "Role", period: "Period",
    view: "Read the case study", visit: "Visit project",
    viewLabel: (title: string) => `View ${title}`,
    ctaEyebrow: "Let’s work together",
    ctaTitle: "A geospatial product or analysis to design?",
    ctaLink: "Discuss a project",
  },
} as const;

export function ProfessionalProjectsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const r = routes[locale];
  const projects = getProfessionalProjects(locale);
  const work = getWorkItems(locale);
  const live = projects.filter((project) => /production/i.test(project.status)).length;

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="inner-page" lang={locale}>
        <header className="page-intro shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></header>

        <section className="shell" aria-label={t.summaryLabel}>
          <dl className="pro-summary">
            {t.summary(projects.length, live).map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
          </dl>
        </section>

        <section className="shell pro-dossiers">
          {projects.map((project, index) => {
            const href = r.professionalProject(project.slug);
            const isLive = /production/i.test(project.status);
            const layersText = layerLine(locale, work.find((item) => item.slug === project.slug)?.layers ?? []);
            return (
              <article className={index % 2 ? "pro-dossier reverse" : "pro-dossier"} key={project.slug}>
                <Link className="pro-dossier-image" href={href} aria-label={t.viewLabel(project.shortTitle)}>
                  <Image src={project.image} alt={project.imageAlt} fill priority={index === 0} sizes="(max-width: 960px) 100vw, 50vw" />
                  <span className="pro-dossier-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className={isLive ? "pro-status live" : "pro-status"}><i aria-hidden="true" />{project.status}</span>
                </Link>
                <div className="pro-dossier-copy">
                  <p className="work-meta">{layersText.map((layer) => <span key={layer}>{layer}</span>)}</p>
                  <h2><Link href={href}>{project.shortTitle}</Link></h2>
                  <p>{project.summary}</p>
                  <dl className="pro-dossier-facts">
                    <div><dt>{t.organization}</dt><dd>{project.organization}</dd></div>
                    <div><dt>{t.role}</dt><dd>{project.role}</dd></div>
                    <div><dt>{t.period}</dt><dd>{project.period}</dd></div>
                  </dl>
                  <ul className="pro-dossier-metrics">
                    {project.metrics.slice(0, 2).map((metric) => <li key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></li>)}
                  </ul>
                  <p className="work-tools">{project.tools.join(" · ")}</p>
                  <div className="pro-dossier-actions">
                    <Link className="button primary compact" href={href}>{t.view} <FiArrowRight aria-hidden="true" /></Link>
                    {project.externalUrl ? <a className="button secondary compact" href={project.externalUrl} target="_blank" rel="noreferrer">{t.visit} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> ({ui[locale].newTab})</span></a> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="shell pro-cta">
          <div><p className="eyebrow light">{t.ctaEyebrow}</p><h2>{t.ctaTitle}</h2></div>
          <Link className="button cyan" href={r.contact}>{t.ctaLink} <FiArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
