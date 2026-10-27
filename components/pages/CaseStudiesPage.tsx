import { CaseStudyFilter } from "@/components/CaseStudyFilter";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { getWorkItems, type Locale } from "@/i18n";

const copy = {
  fr: {
    eyebrow: "Études de cas",
    title: "Chaque projet, lu comme une carte.",
    intro: "Activez une couche pour filtrer : télédétection, SIG, terrain ou développement d’applications.",
    labels: { layers: "Couches", all: "Toutes", empty: "Aucun projet sur cette couche.", period: "Période", organization: "Structure", view: "Lire l’étude de cas", count: "{shown} / {total} projets affichés" },
  },
  en: {
    eyebrow: "Case studies",
    title: "Every project, read like a map.",
    intro: "Turn on a layer to filter: remote sensing, GIS, fieldwork or app development.",
    labels: { layers: "Layers", all: "All", empty: "No project on this layer.", period: "Period", organization: "Organization", view: "Read the case study", count: "{shown} / {total} projects shown" },
  },
};

export function CaseStudiesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="inner-page" lang={locale}>
        <header className="page-intro shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></header>
        <section className="shell case-index">
          <CaseStudyFilter items={getWorkItems(locale)} locale={locale} labels={t.labels} />
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
