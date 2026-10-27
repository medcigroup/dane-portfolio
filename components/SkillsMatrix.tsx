import Link from "next/link";
import { layers, routes, type LayerId, type Locale } from "@/i18n";

type ProofId = "zanzan" | "kan" | "agnibilekrou" | "sodemi" | "growaa" | "research";
type Skill = { label: string; tools: string[]; detail: string; proof: ProofId[] };
type Family = { code: string; title: string; subtitle: string; layer: LayerId; skills: Skill[] };

const proofs: Record<ProofId, { label: string; href: (locale: Locale) => string }> = {
  zanzan: { label: "Zanzan", href: (l) => routes[l].project("secheresse-zanzan") },
  kan: { label: "Kan", href: (l) => routes[l].project("zone-humide-kan") },
  agnibilekrou: { label: "Agnibilékrou", href: (l) => routes[l].project("eau-sante-agnibilekrou") },
  sodemi: { label: "SODEMI", href: (l) => routes[l].professionalProject("pegmatites-sodemi") },
  growaa: { label: "GROWAA", href: (l) => routes[l].professionalProject("growaa-agri-analytics") },
  research: { label: "Publication", href: (l) => routes[l].research },
};

// Content follows the updated CV (CV_KAMENAN_Dane_mis_a_jour.pdf, "Compétences techniques").
const copy: Record<Locale, { eyebrow: string; title: string; intro: string; figures: { value: string; label: string }[]; proofLabel: string; methodsLabel: string; methods: string[]; families: Family[] }> = {
  fr: {
    eyebrow: "Compétences",
    title: "De l’image satellite à l’outil de décision",
    intro: "Neuf domaines organisés comme ma chaîne de travail : observer, analyser, restituer. Chaque compétence renvoie au projet qui la démontre.",
    figures: [
      { value: "3+ ans", label: "d’expérience en télédétection et SIG" },
      { value: "40 ans", label: "de séries Landsat analysées (1984–2023)" },
      { value: "10", label: "indices de végétation en production (GROWAA)" },
      { value: "1 + 2", label: "article scientifique et mémoires de M2" },
    ],
    proofLabel: "Démontré par",
    methodsLabel: "Méthodes et indices pratiqués",
    methods: ["NDVI", "SAVI", "EVI", "LST", "CHIRPS", "ETCCDI", "SPI", "EDI", "Random Forest", "K-Means", "ISODATA", "IDW", "Séries temporelles"],
    families: [
      { code: "01", title: "Observer", subtitle: "Acquérir la donnée", layer: "rs", skills: [
        { label: "Télédétection optique", tools: ["Google Earth Engine", "ENVI", "SNAP", "Landsat 5–9"], detail: "Prétraitement d’images, indices spectraux et température de surface.", proof: ["zanzan", "sodemi"] },
        { label: "Collecte terrain et mesures", tools: ["KoboCollect", "QField"], detail: "Enquêtes, échantillonnage et dispositifs de mesures environnementales.", proof: ["kan", "agnibilekrou"] },
      ] },
      { code: "02", title: "Analyser", subtitle: "Modéliser l’espace et le temps", layer: "gis", skills: [
        { label: "Python scientifique", tools: ["GeoPandas", "Rasterio", "NumPy", "Pandas", "Matplotlib", "Plotly"], detail: "Chaînes de traitement raster et vecteur reproductibles.", proof: ["zanzan", "sodemi"] },
        { label: "Séries temporelles et modélisation spatiale", tools: ["ETCCDI", "SPI · EDI", "Random Forest"], detail: "Analyse spatio-temporelle, sécheresse et vulnérabilité territoriale.", proof: ["zanzan"] },
        { label: "Bases de données", tools: ["SQL", "PostgreSQL / PostGIS", "Firebase", "MS Access"], detail: "Bases géographiques pour le suivi et la diffusion des données.", proof: ["kan", "growaa"] },
        { label: "Analyses statistiques", tools: ["Descriptives", "Inférentielles", "Excel"], detail: "Corrélations, tests et tableaux croisés sur données d’enquête.", proof: ["agnibilekrou"] },
      ] },
      { code: "03", title: "Restituer", subtitle: "Rendre la donnée utile", layer: "app", skills: [
        { label: "SIG et cartographie", tools: ["QGIS", "ArcGIS Online"], detail: "Cartographie thématique et livrables cartographiques.", proof: ["zanzan", "kan"] },
        { label: "Développement d’applications", tools: ["Dart / Flutter", "JavaScript", "Python", "R", "Java"], detail: "Plateformes web, cartes interactives et tableaux de bord.", proof: ["growaa", "sodemi"] },
        { label: "Rédaction scientifique", tools: ["1 article", "2 mémoires de M2"], detail: "Publication évaluée et mémoires de recherche.", proof: ["research"] },
      ] },
    ],
  },
  en: {
    eyebrow: "Skills",
    title: "From satellite imagery to decision tools",
    intro: "Nine fields organized like my workflow: observe, analyze, deliver. Each skill links to the project that demonstrates it.",
    figures: [
      { value: "3+ yrs", label: "of remote sensing and GIS experience" },
      { value: "40 yrs", label: "of Landsat time series analyzed (1984–2023)" },
      { value: "10", label: "vegetation indices in production (GROWAA)" },
      { value: "1 + 2", label: "scientific article and Master’s dissertations" },
    ],
    proofLabel: "Demonstrated in",
    methodsLabel: "Methods and indices in practice",
    methods: ["NDVI", "SAVI", "EVI", "LST", "CHIRPS", "ETCCDI", "SPI", "EDI", "Random Forest", "K-Means", "ISODATA", "IDW", "Time series"],
    families: [
      { code: "01", title: "Observe", subtitle: "Acquire the data", layer: "rs", skills: [
        { label: "Optical remote sensing", tools: ["Google Earth Engine", "ENVI", "SNAP", "Landsat 5–9"], detail: "Image preprocessing, spectral indices and land-surface temperature.", proof: ["zanzan", "sodemi"] },
        { label: "Fieldwork and measurements", tools: ["KoboCollect", "QField"], detail: "Surveys, sampling and environmental monitoring equipment.", proof: ["kan", "agnibilekrou"] },
      ] },
      { code: "02", title: "Analyze", subtitle: "Model space and time", layer: "gis", skills: [
        { label: "Scientific Python", tools: ["GeoPandas", "Rasterio", "NumPy", "Pandas", "Matplotlib", "Plotly"], detail: "Reproducible raster and vector processing chains.", proof: ["zanzan", "sodemi"] },
        { label: "Time series and spatial modelling", tools: ["ETCCDI", "SPI · EDI", "Random Forest"], detail: "Spatio-temporal analysis, drought and territorial vulnerability.", proof: ["zanzan"] },
        { label: "Databases", tools: ["SQL", "PostgreSQL / PostGIS", "Firebase", "MS Access"], detail: "Geographic databases for monitoring and sharing data.", proof: ["kan", "growaa"] },
        { label: "Statistical analysis", tools: ["Descriptive", "Inferential", "Excel"], detail: "Correlations, tests and cross-tabulations on survey data.", proof: ["agnibilekrou"] },
      ] },
      { code: "03", title: "Deliver", subtitle: "Make the data useful", layer: "app", skills: [
        { label: "GIS and mapping", tools: ["QGIS", "ArcGIS Online"], detail: "Thematic mapping and cartographic deliverables.", proof: ["zanzan", "kan"] },
        { label: "Application development", tools: ["Dart / Flutter", "JavaScript", "Python", "R", "Java"], detail: "Web platforms, interactive maps and dashboards.", proof: ["growaa", "sodemi"] },
        { label: "Scientific writing", tools: ["1 article", "2 Master’s dissertations"], detail: "Peer-reviewed publication and research dissertations.", proof: ["research"] },
      ] },
    ],
  },
};

const layerColor = (id: LayerId) => layers.find((layer) => layer.id === id)?.color ?? "#9fb0bf";

export function SkillsMatrix({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="skills-matrix" aria-labelledby="skills-title">
      <div className="shell">
        <div className="skills-head">
          <div>
            <p className="eyebrow light">{t.eyebrow}</p>
            <h2 id="skills-title">{t.title}</h2>
            <p>{t.intro}</p>
          </div>
          <dl className="skills-figures">
            {t.figures.map((figure) => <div key={figure.label}><dt>{figure.label}</dt><dd>{figure.value}</dd></div>)}
          </dl>
        </div>

        <div className="skills-families">
          {t.families.map((family) => (
            <section className="skills-family" key={family.code} aria-labelledby={`family-${family.code}`}>
              <header style={{ borderTopColor: layerColor(family.layer) }}>
                <span>{family.code}</span>
                <h3 id={`family-${family.code}`}>{family.title}</h3>
                <p>{family.subtitle}</p>
              </header>
              <ul>
                {family.skills.map((skill) => (
                  <li key={skill.label} className="skill-card">
                    <h4><i aria-hidden="true" style={{ background: layerColor(family.layer) }} />{skill.label}</h4>
                    <ul className="skill-tools">{skill.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                    <p>{skill.detail}</p>
                    <p className="skill-proof">
                      <span>{t.proofLabel}</span>
                      {skill.proof.map((id) => <Link key={id} href={proofs[id].href(locale)}>{proofs[id].label} →</Link>)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="skills-methods">
          <p>{t.methodsLabel}</p>
          <ul>{t.methods.map((method) => <li key={method}>{method}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
