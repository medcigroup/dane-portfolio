import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiDownload, FiExternalLink } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { NdviLegend } from "@/components/WorkCard";
import { getProfessionalProjects, getProjects, getWorkItems, layerLine, routes, ui, type Locale } from "@/i18n";

const copy = {
  fr: {
    breadcrumb: "Fil d’Ariane", all: "Études de cas", dissertation: "Mémoire PDF", resource: "Voir la ressource",
    question: "Question de recherche", sheet: "Fiche technique", period: "Période", organization: "Structure", data: "Données", tools: "Outils",
    keyFigures: "Indicateurs clés", context: "Cadre de l’étude", method: "Chaîne de traitement", methodTitle: "La méthode, étape par étape",
    contribution: "Ma contribution", findings: "Ce que montrent les données", results: "Résultats",
    limitations: "Limites", recommendations: "Recommandations", deliverables: "Livrables",
    back: "Toutes les études de cas", next: "Étude suivante :",
  },
  en: {
    breadcrumb: "Breadcrumb", all: "Case studies", dissertation: "Dissertation PDF", resource: "View resource",
    question: "Research question", sheet: "Technical sheet", period: "Period", organization: "Organization", data: "Data", tools: "Tools",
    keyFigures: "Key figures", context: "Study context", method: "Processing chain", methodTitle: "The method, step by step",
    contribution: "My contribution", findings: "What the data show", results: "Results",
    limitations: "Limitations", recommendations: "Recommendations", deliverables: "Deliverables",
    back: "All case studies", next: "Next study:",
  },
} as const;

export function findProject(locale: Locale, slug: string) {
  return getProjects(locale).find((item) => item.slug === slug);
}

export function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  if (getProfessionalProjects(locale).some((item) => item.slug === slug)) redirect(routes[locale].professionalProject(slug));
  const project = findProject(locale, slug);
  if (!project) notFound();
  const t = copy[locale];
  const newTab = ui[locale].newTab;
  const work = getWorkItems(locale);
  const index = work.findIndex((item) => item.slug === slug);
  const next = work[(index + 1) % work.length];
  const layersText = layerLine(locale, work[index]?.layers ?? []).join(" · ");

  return (
    <>
      <SiteHeader locale={locale} />
      <main lang={locale}>
        <div className="shell cs-toolbar">
          <nav aria-label={t.breadcrumb}><Link href={routes[locale].work}>{t.all}</Link><span aria-hidden="true">/</span><span>{project.title}</span></nav>
          {project.documentUrl ? <a className="button secondary compact" href={project.documentUrl} target="_blank" rel="noreferrer"><FiDownload aria-hidden="true" /> {t.dissertation}<span className="sr-only"> ({newTab})</span></a> : null}
          {project.externalUrl ? <a className="button secondary compact" href={project.externalUrl} target="_blank" rel="noreferrer">{t.resource} <FiExternalLink aria-hidden="true" /><span className="sr-only"> ({newTab})</span></a> : null}
        </div>

        <header className="cs-hero">
          <Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" />
          <div className="shell cs-hero-inner">
            <div className="cs-title">
              <p className="eyebrow light">{project.eyebrow} · {project.period}</p>
              <h1>{project.title}</h1>
            </div>
            {project.slug === "secheresse-zanzan" ? <NdviLegend locale={locale} className="ndvi-legend cs-legend" /> : null}
          </div>
        </header>

        <section className="shell cs-intro" id="synthese">
          <div>
            <p className="eyebrow">{t.question}</p>
            <p className="cs-question">{project.question}</p>
            <p className="cs-summary">{project.summary}</p>
            {project.sourceNote ? <p className="case-source-note">{project.sourceNote}</p> : null}
          </div>
          <aside className="cs-sheet" aria-label={t.sheet}>
            <p className="eyebrow">{t.sheet}</p>
            <dl>
              <dt>{t.period}</dt><dd>{project.period}</dd>
              <dt>{t.organization}</dt><dd>{project.organization}</dd>
              {layersText ? <><dt>{locale === "en" ? "Layers" : "Couches"}</dt><dd>{layersText}</dd></> : null}
              <dt>{t.data}</dt><dd><ul>{project.data.map((item) => <li key={item}>{item}</li>)}</ul></dd>
              <dt>{t.tools}</dt><dd>{project.tools.join(" · ")}</dd>
            </dl>
          </aside>
        </section>

        {project.metrics ? (
          <section className="shell cs-metrics" aria-label={t.keyFigures}>
            {project.metrics.map((metric) => <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.detail ? <small>{metric.detail}</small> : null}</div>)}
          </section>
        ) : null}

        {project.context ? (
          <section className="shell cs-prose">
            <p className="eyebrow">{t.context}</p>
            {project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ) : null}

        <section className="cs-method" id="methode">
          <div className="shell">
            <p className="eyebrow">{t.method}</p>
            <h2>{t.methodTitle}</h2>
            <ol>
              {project.methodSteps
                ? project.methodSteps.map((step, i) => <li key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step.title}</strong><p>{step.description}</p></li>)
                : project.methods.map((method, i) => <li key={method}><span>{String(i + 1).padStart(2, "0")}</span><strong>{method}</strong></li>)}
            </ol>
          </div>
        </section>

        <section className="shell cs-findings" id="resultats">
          <h2>{project.keyFindings ? t.findings : t.results}</h2>
          <div>
            {project.keyFindings
              ? project.keyFindings.map((finding) => <article key={finding.title}><h3>{finding.title}</h3><p>{finding.description}</p></article>)
              : project.results.map((result) => <article key={result}><p>{result}</p></article>)}
          </div>
        </section>

        <section className="shell cs-columns">
          <div><p className="eyebrow">{t.contribution}</p><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><p className="eyebrow">{t.deliverables}</p><ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        {project.limitations || project.recommendations ? (
          <section className="cs-dark">
            <div className="shell">
              {project.limitations ? <div id="limites"><p className="eyebrow warn">{t.limitations}</p><ul>{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
              {project.recommendations ? <div id="recommandations"><p className="eyebrow light">{t.recommendations}</p><ul>{project.recommendations.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
            </div>
          </section>
        ) : null}

        <nav className="shell cs-pager" aria-label={t.all}>
          <Link className="text-link" href={routes[locale].work}><FiArrowLeft aria-hidden="true" /> {t.back}</Link>
          {next && next.slug !== slug ? <Link className="text-link" href={next.href}>{t.next} {next.title} <FiArrowRight aria-hidden="true" /></Link> : null}
        </nav>
      </main>
      <Footer locale={locale} />
    </>
  );
}
