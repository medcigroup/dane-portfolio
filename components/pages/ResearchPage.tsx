import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getPublication, routes, ui, type Locale } from "@/i18n";

const copy = {
  fr: {
    eyebrow: "Recherche",
    title: "Comprendre les relations entre environnement, santé et territoires.",
    intro: "Mes travaux combinent observation de terrain, analyse statistique, télédétection et représentation cartographique.",
    themesLabel: "Axes scientifiques",
    axis: "Axe",
    themes: ["Géographie de la santé", "Vulnérabilités territoriales", "Climat et environnement", "Analyse spatio-temporelle", "SIG participatifs", "Recherche-action"],
    publication: "Publication scientifique",
    article: "Article",
    read: "Lire l’article",
    cite: "Copier la citation",
    copied: "Citation copiée",
    sample: "Échantillon", sampleValue: "350 ménages",
    methods: "Méthodes", methodsValue: "Pearson · Khi-deux · cartographie thématique",
    dissertations: "Mémoires de recherche",
    explore: "Étude détaillée",
    pdf: "Mémoire PDF",
    memories: [
      { kicker: "Master Télédétection & SIG · 2024", title: "Apport de la télédétection à l’évaluation de la sécheresse dans le Zanzan (1984–2053)", text: "Indices ETCCDI, occupation du sol et températures de surface.", slug: "secheresse-zanzan", image: "/images/zanzan-drought-map.png", pdf: "/documents/MEMOIRE%20DE%20RECHERCHE%20TELEDETECTION%20ET%20SIG.pdf" },
      { kicker: "Master Géographie · 2023", title: "Difficultés d’approvisionnement en eau potable et problèmes de santé à Agnibilékrou", text: "Enquête auprès de 350 ménages · statistiques et cartographie des vulnérabilités.", slug: "eau-sante-agnibilekrou", image: "/images/agnibilekrou-water.png", pdf: "/documents/MEMOIRE%20DE%20RECHERCHE%20GEOGRAPHIE.pdf" },
    ],
  },
  en: {
    eyebrow: "Research",
    title: "Understanding the relationships between environment, health and territories.",
    intro: "My work combines field observation, statistical analysis, remote sensing and cartographic representation.",
    themesLabel: "Research themes",
    axis: "Theme",
    themes: ["Health geography", "Territorial vulnerabilities", "Climate and environment", "Spatio-temporal analysis", "Participatory GIS", "Action research"],
    publication: "Scientific publication",
    article: "Article",
    read: "Read the article",
    cite: "Copy citation",
    copied: "Citation copied",
    sample: "Sample", sampleValue: "350 households",
    methods: "Methods", methodsValue: "Pearson · Chi-square · thematic mapping",
    dissertations: "Research dissertations",
    explore: "Detailed study",
    pdf: "Dissertation PDF",
    memories: [
      { kicker: "Master’s in Remote Sensing & GIS · 2024", title: "Remote sensing contribution to drought assessment in Zanzan (1984–2053)", text: "ETCCDI indices, land cover and land-surface temperatures.", slug: "secheresse-zanzan", image: "/images/zanzan-drought-map.png", pdf: "/documents/MEMOIRE%20DE%20RECHERCHE%20TELEDETECTION%20ET%20SIG.pdf" },
      { kicker: "Master’s in Geography · 2023", title: "Drinking-water supply challenges and health issues in Agnibilékrou", text: "Survey of 350 households · statistics and vulnerability mapping.", slug: "eau-sante-agnibilekrou", image: "/images/agnibilekrou-water.png", pdf: "/documents/MEMOIRE%20DE%20RECHERCHE%20GEOGRAPHIE.pdf" },
    ],
  },
} as const;

export function ResearchPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const publication = getPublication(locale);
  const newTab = ui[locale].newTab;
  const doi = publication.doi.replace("https://doi.org/", "");
  const citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}. ${publication.doi}`;
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="inner-page" lang={locale}>
        <header className="page-intro shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></header>

        <section className="shell" aria-label={t.themesLabel}>
          <ul className="axis-matrix">
            {t.themes.map((theme, i) => <li key={theme}><span>{t.axis} {String.fromCharCode(65 + i)}</span><strong>{theme}</strong></li>)}
          </ul>
        </section>

        <section className="shell research-block">
          <p className="eyebrow">{t.publication}</p>
          <article className="publication-panel">
            <div>
              <span className="publication-kicker">{publication.year} · {t.article}</span>
              <h2>{publication.title}</h2>
              <p>{publication.authors}</p>
              <p className="publication-journal">{publication.journal}</p>
              <div className="publication-actions">
                <a className="button cyan" href={publication.doi} target="_blank" rel="noreferrer">{t.read} <FiExternalLink aria-hidden="true" /><span className="sr-only"> ({newTab})</span></a>
                <CopyButton className="button ghost-light" text={citation} label={t.cite} copiedLabel={t.copied} />
              </div>
            </div>
            <dl>
              <div><dt>DOI</dt><dd className="mono">{doi}</dd></div>
              <div><dt>{t.sample}</dt><dd>{t.sampleValue}</dd></div>
              <div><dt>{t.methods}</dt><dd>{t.methodsValue}</dd></div>
            </dl>
          </article>
        </section>

        <section className="shell research-block">
          <p className="eyebrow">{t.dissertations}</p>
          <div className="memoir-grid">
            {t.memories.map((memory) => (
              <article className="memoir-card" key={memory.slug}>
                <div className="memoir-image"><Image src={memory.image} alt="" fill sizes="(max-width: 820px) 100vw, 50vw" /><span>{memory.kicker}</span></div>
                <div className="memoir-copy">
                  <h3>{memory.title}</h3>
                  <p>{memory.text}</p>
                  <div>
                    <Link className="text-link" href={routes[locale].project(memory.slug)}>{t.explore} →</Link>
                    <a className="text-link muted" href={memory.pdf} target="_blank" rel="noreferrer"><FiDownload aria-hidden="true" /> {t.pdf}<span className="sr-only"> ({newTab})</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
