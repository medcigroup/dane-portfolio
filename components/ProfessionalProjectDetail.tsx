import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
import type { ProfessionalProject } from "@/data/professional-projects";
import { getProfessionalProjects, getWorkItems, layerLine, routes, ui, type Locale } from "@/i18n";

const copy = {
  fr: {
    breadcrumb: "Fil d’Ariane", all: "Projets professionnels", visit: "Visiter le projet", chapters: "Chapitres du projet",
    anchors: { synthese: "Synthèse", contexte: "Contexte", methode: "Méthode", capacites: "Capacités", architecture: "Architecture", resultats: "Résultats", limites: "Limites" },
    sheet: "Fiche projet", role: "Rôle", organization: "Structure", period: "Période", status: "État", layers: "Couches", tools: "Outils",
    challenge: "Problématique", objective: "Objectif", keyFigures: "Chiffres clés",
    context: "Contexte", defaultContext: "Explorer des minéraux critiques sous couverture tropicale.",
    inputData: "Données d’entrée", defaultSpecifications: "Un cadre technique précisément défini.",
    method: "Méthode", defaultMethod: "Une chaîne de traitement en cinq étapes.",
    families: "Indices", defaultFamilies: "Deux familles de signatures analysées séparément.",
    architecture: "Architecture proposée", defaultArchitecture: "Du traitement Python à la consultation cartographique.",
    defaultArchitectureNote: "Cette architecture a été conceptualisée pendant le stage ; son développement complet n’était pas achevé à la clôture du rapport.",
    contribution: "Ma contribution", deliverables: "Livrables",
    results: "Résultats préliminaires", defaultResults: "Des fondations méthodologiques prêtes à être validées.",
    limitations: "Limites et précautions", defaultLimitations: "Ce que les résultats ne permettent pas encore d’affirmer.",
    perspectives: "Perspectives", defaultPerspectives: "Vers une prospection multi-capteurs validée sur le terrain.",
    source: "Source", back: "Tous les projets professionnels", next: "Projet suivant :",
  },
  en: {
    breadcrumb: "Breadcrumb", all: "Professional projects", visit: "Visit project", chapters: "Project chapters",
    anchors: { synthese: "Summary", contexte: "Context", methode: "Method", capacites: "Capabilities", architecture: "Architecture", resultats: "Results", limites: "Limitations" },
    sheet: "Project sheet", role: "Role", organization: "Organization", period: "Period", status: "Status", layers: "Layers", tools: "Tools",
    challenge: "Challenge", objective: "Objective", keyFigures: "Key figures",
    context: "Context", defaultContext: "Exploring critical minerals under tropical cover.",
    inputData: "Input data", defaultSpecifications: "A precisely defined technical framework.",
    method: "Method", defaultMethod: "A five-step processing chain.",
    families: "Indices and classifications", defaultFamilies: "Two signature families analyzed separately.",
    architecture: "Proposed architecture", defaultArchitecture: "From Python processing to map consultation.",
    defaultArchitectureNote: "This architecture was conceptualized during the internship; full development was not complete when the report closed.",
    contribution: "My contribution", deliverables: "Deliverables",
    results: "Preliminary results", defaultResults: "Methodological foundations ready for validation.",
    limitations: "Limitations and cautions", defaultLimitations: "What the results cannot yet establish.",
    perspectives: "Outlook", defaultPerspectives: "Towards multi-sensor prospecting validated in the field.",
    source: "Source", back: "All professional projects", next: "Next project:",
  },
} as const;

export function ProfessionalProjectDetail({ project, locale = "fr" }: { project: ProfessionalProject; locale?: Locale }) {
  const t = copy[locale];
  const labels = project.sectionLabels ?? {};
  const r = routes[locale];
  const newTab = ui[locale].newTab;
  const all = getProfessionalProjects(locale);
  const next = all[(all.findIndex((item) => item.slug === project.slug) + 1) % all.length];
  const layersText = layerLine(locale, getWorkItems(locale).find((item) => item.slug === project.slug)?.layers ?? []).join(" · ");
  const live = /production/i.test(project.status);
  const chapters = (Object.entries(t.anchors) as [string, string][]).map(([id, label]): [string, string] => [id, id === "capacites" ? (labels.familiesEyebrow ?? t.families) : label]);

  return (
    <main className="pro-detail" lang={locale}>
      <div className="shell cs-toolbar">
        <nav aria-label={t.breadcrumb}><Link href={r.professional}>{t.all}</Link><span aria-hidden="true">/</span><span>{project.shortTitle}</span></nav>
        {project.externalUrl ? <a className="button primary compact" href={project.externalUrl} target="_blank" rel="noreferrer">{t.visit} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> ({newTab})</span></a> : null}
      </div>

      <header className="cs-hero">
        <Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" />
        <div className="shell cs-hero-inner">
          <div className="cs-title">
            <p className="eyebrow light">{project.eyebrow}</p>
            <h1>{project.title}</h1>
          </div>
          <span className={live ? "pro-status live" : "pro-status"}><i aria-hidden="true" />{project.status}</span>
        </div>
      </header>

      <nav className="pro-chapters" aria-label={t.chapters}>
        <div className="shell">{chapters.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}</div>
      </nav>

      <section className="shell cs-intro" id="synthese">
        <div>
          <p className="pro-lead">{project.summary}</p>
          <p className="eyebrow">{t.challenge}</p>
          <p className="cs-question">{project.challenge}</p>
          <div className="pro-objective"><p className="eyebrow">{t.objective}</p><p>{project.objective}</p></div>
        </div>
        <aside className="cs-sheet" aria-label={t.sheet}>
          <p className="eyebrow">{t.sheet}</p>
          <dl>
            <dt>{t.role}</dt><dd>{project.role}</dd>
            <dt>{t.organization}</dt><dd>{project.organization} · {project.department}</dd>
            <dt>{t.period}</dt><dd>{project.period}</dd>
            <dt>{t.status}</dt><dd>{project.status}</dd>
            {layersText ? <><dt>{t.layers}</dt><dd>{layersText}</dd></> : null}
            <dt>{t.tools}</dt><dd>{project.tools.join(" · ")}</dd>
          </dl>
        </aside>
      </section>

      <section className="shell cs-metrics" aria-label={t.keyFigures}>
        {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><small>{metric.detail}</small></div>)}
      </section>

      <section className="shell pro-context" id="contexte">
        <div className="cs-prose">
          <p className="eyebrow">{t.context}</p>
          <h2>{labels.contextTitle ?? t.defaultContext}</h2>
          {project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div>
          <p className="eyebrow">{labels.specificationsEyebrow ?? t.inputData}</p>
          <h3>{labels.specificationsTitle ?? t.defaultSpecifications}</h3>
          <dl className="pro-specs">{project.dataSpecifications.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="cs-method" id="methode">
        <div className="shell">
          <p className="eyebrow">{t.method}</p>
          <h2>{labels.methodTitle ?? t.defaultMethod}</h2>
          <ol>{project.methodSteps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong><p>{step.description}</p></li>)}</ol>
        </div>
      </section>

      <section className="shell pro-section" id="capacites">
        <p className="eyebrow">{labels.familiesEyebrow ?? t.families}</p>
        <h2>{labels.familiesTitle ?? t.defaultFamilies}</h2>
        <div className="pro-families">
          {project.spectralFamilies.map((family) => (
            <article key={family.title}>
              <h3>{family.title}</h3>
              <p>{family.description}</p>
              <ul>{family.indices.map((index) => <li key={index}>{index}</li>)}</ul>
              <small>{family.classification}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="shell pro-section" id="architecture">
        <p className="eyebrow">{labels.architectureEyebrow ?? t.architecture}</p>
        <h2>{labels.architectureTitle ?? t.defaultArchitecture}</h2>
        <p className="pro-note">{labels.architectureNote ?? t.defaultArchitectureNote}</p>
        <ol className="pro-pipeline">
          {project.architecture.map((layer, index) => (
            <li key={layer.title}>
              <span className="pro-pipeline-code">M{index + 1}</span>
              <h3>{layer.title}</h3>
              <ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell cs-findings" id="resultats">
        <p className="eyebrow">{labels.resultsEyebrow ?? t.results}</p>
        <h2>{labels.resultsTitle ?? t.defaultResults}</h2>
        <div>{project.results.map((result) => <article key={result.title}><h3>{result.title}</h3><p>{result.description}</p></article>)}</div>
      </section>

      <section className="shell cs-columns">
        <div><p className="eyebrow">{t.contribution}</p><ul className="pro-checks">{project.contribution.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}</ul></div>
        <div><p className="eyebrow">{t.deliverables}</p><ul className="pro-deliverables">{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="cs-dark" id="limites">
        <div className="shell">
          <div>
            <p className="eyebrow warn">{labels.limitationsEyebrow ?? t.limitations}</p>
            <h2>{labels.limitationsTitle ?? t.defaultLimitations}</h2>
            <ul>{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow light">{t.perspectives}</p>
            <h2>{labels.perspectivesTitle ?? t.defaultPerspectives}</h2>
            <ol className="pro-outlook">{project.perspectives.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </div>
        </div>
      </section>

      <p className="shell pro-source"><span>{t.source}</span> {project.sourceNote}</p>

      <nav className="shell cs-pager" aria-label={t.all}>
        <Link className="text-link" href={r.professional}><FiArrowLeft aria-hidden="true" /> {t.back}</Link>
        {next && next.slug !== project.slug ? <Link className="text-link" href={r.professionalProject(next.slug)}>{t.next} {next.shortTitle} <FiArrowRight aria-hidden="true" /></Link> : null}
      </nav>
    </main>
  );
}
