import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkCard } from "@/components/WorkCard";
import { getPublication, getWorkItems, routes, type Locale } from "@/i18n";

const copy = {
  fr: {
    domainsLabel: "Domaines",
    domains: [
      { code: "L1", title: "Télédétection", tools: "Landsat · Sentinel · GEE" },
      { code: "L2", title: "SIG & analyse", tools: "QGIS · PostGIS · Python" },
      { code: "L3", title: "Terrain", tools: "KoboCollect · QField" },
      { code: "L4", title: "Dev d’apps", tools: "Flutter · JavaScript" },
    ],
    workEyebrow: "Travaux sélectionnés",
    workTitle: "Des terrains, des échelles, des outils",
    allCases: "Toutes les études de cas",
    viewCase: "Lire l’étude de cas",
    viewLabel: (title: string) => `Voir ${title}`,
    researchEyebrow: "Recherche & publication",
    researchTitle: "Relier les observations de terrain aux dynamiques territoriales.",
    articleType: "Article scientifique",
    readPublication: "Lire la publication",
    methodEyebrow: "Méthode",
    methodTitle: "Une chaîne de traitement complète",
    backgroundLink: "Voir mon parcours",
    steps: [
      { tag: "01 → acquisition", title: "Observer", text: "Enquêtes, KoboCollect, QField, images Landsat et données géoscientifiques." },
      { tag: "02 → traitement", title: "Analyser", text: "Python, statistiques, séries temporelles, indices climatiques et modélisation spatiale." },
      { tag: "03 → rendu", title: "Cartographier", text: "QGIS, GeoPandas, Rasterio, PostGIS et livrables décisionnels." },
      { tag: "04 → diffusion", title: "Transmettre", text: "Applications web et mobiles, tableaux de bord, publications et restitution." },
    ],
  },
  en: {
    domainsLabel: "Fields",
    domains: [
      { code: "L1", title: "Remote sensing", tools: "Landsat · Sentinel · GEE" },
      { code: "L2", title: "GIS & analysis", tools: "QGIS · PostGIS · Python" },
      { code: "L3", title: "Fieldwork", tools: "KoboCollect · QField" },
      { code: "L4", title: "App development", tools: "Flutter · JavaScript" },
    ],
    workEyebrow: "Selected work",
    workTitle: "Places, scales and tools",
    allCases: "All case studies",
    viewCase: "Read the case study",
    viewLabel: (title: string) => `View ${title}`,
    researchEyebrow: "Research & publication",
    researchTitle: "Connecting field observations with territorial dynamics.",
    articleType: "Scientific article",
    readPublication: "Read the publication",
    methodEyebrow: "Method",
    methodTitle: "An end-to-end processing chain",
    backgroundLink: "View my background",
    steps: [
      { tag: "01 → acquisition", title: "Observe", text: "Surveys, KoboCollect, QField, Landsat imagery and geoscientific data." },
      { tag: "02 → processing", title: "Analyze", text: "Python, statistics, time series, climate indices and spatial modelling." },
      { tag: "03 → rendering", title: "Map", text: "QGIS, GeoPandas, Rasterio, PostGIS and decision-ready deliverables." },
      { tag: "04 → sharing", title: "Share", text: "Web and mobile applications, dashboards, publications and stakeholder reporting." },
    ],
  },
} as const;

const cardSizes = ["wide", "narrow", "narrow", "wide"];

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const r = routes[locale];
  const publication = getPublication(locale);
  const work = getWorkItems(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main lang={locale}>
        <Hero locale={locale} />

        <section className="domain-band" aria-label={t.domainsLabel}>
          <ul className="shell domain-list">
            {t.domains.map((domain) => <li key={domain.code}><span>{domain.code}</span><strong>{domain.title}</strong><small>{domain.tools}</small></li>)}
          </ul>
        </section>

        <section className="section shell" id="travaux" aria-labelledby="travaux-title">
          <div className="section-heading">
            <div><p className="eyebrow">{t.workEyebrow}</p><h2 id="travaux-title">{t.workTitle}</h2></div>
            <Link className="text-link" href={r.work}>{t.allCases} <FiArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="work-grid">
            {work.map((item, index) => <WorkCard key={item.slug} item={item} locale={locale} size={cardSizes[index] ?? "full"} priority={index === 0} viewCase={t.viewCase} viewLabel={t.viewLabel(item.title)} />)}
          </div>
        </section>

        <section className="section shell" aria-labelledby="method-title">
          <div className="section-heading">
            <div><p className="eyebrow">{t.methodEyebrow}</p><h2 id="method-title">{t.methodTitle}</h2></div>
            <Link className="text-link" href={r.background}>{t.backgroundLink} <FiArrowRight aria-hidden="true" /></Link>
          </div>
          <ol className="method-chain">
            {t.steps.map((step) => <li key={step.title}><span>{step.tag}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}
          </ol>
        </section>

        <section className="research-band" aria-labelledby="research-title">
          <div className="shell research-grid">
            <div><p className="eyebrow light">{t.researchEyebrow}</p><h2 id="research-title">{t.researchTitle}</h2></div>
            <article className="publication-card">
              <span>{publication.year} · {t.articleType}</span>
              <h3>{publication.title}</h3>
              <p>{publication.authors}</p>
              <a href={publication.doi} target="_blank" rel="noreferrer">{t.readPublication} <FiExternalLink aria-hidden="true" /></a>
            </article>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
