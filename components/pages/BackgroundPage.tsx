import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { cvUrl, routes, type Locale } from "@/i18n";

const copy = {
  fr: {
    kicker: "Curriculum vitæ · 2026",
    role: "Géographe · Géomaticien · Analyste spatial · CTO GROWAA",
    status: "Disponible pour de nouveaux projets",
    portraitAlt: "Portrait de KAMENAN Dane Assoumou Junior",
    download: "Télécharger le CV",
    profile: "Je transforme des données de terrain, satellitaires et statistiques en analyses spatiales lisibles pour les territoires.",
    timelineTitle: "Le parcours, en transect",
    timelineRange: "2020 → aujourd’hui",
    timeline: [
      { year: "2020", type: "Formation", title: "Licence Géographie physique et environnement", detail: "Université Félix Houphouët-Boigny" },
      { year: "2023", type: "Formation", title: "Master Géographie de l’environnement et de la santé", detail: "IGT · mention Bien" },
      { year: "2024", type: "Terrain", title: "Zone humide du Kan", detail: "STRM–CURAT · base géographique" },
      { year: "2024", type: "Formation", title: "Master Télédétection et SIG", detail: "CURAT · mention Bien" },
      { year: "2025", type: "Expérience", title: "Ingénieur stagiaire télédétection & SIG", detail: "SODEMI · pegmatites" },
      { year: "Depuis avr. 2025", type: "en cours", title: "CTO — GROWAA", detail: "Agriculture de précision" },
    ],
    facts: [["Localisation", "Abidjan, Côte d’Ivoire"], ["Spécialité", "Télédétection & SIG"], ["Langues", "Français · Anglais"]],
    cta: "Échanger sur un projet",
  },
  en: {
    kicker: "Curriculum vitae · 2026",
    role: "Geographer · Geomatics specialist · Spatial analyst · CTO GROWAA",
    status: "Available for new projects",
    portraitAlt: "Portrait of KAMENAN Dane Assoumou Junior",
    download: "Download CV",
    profile: "I turn field, satellite and statistical data into clear spatial analyses for territories and decision-makers.",
    timelineTitle: "My path, as a transect",
    timelineRange: "2020 → today",
    timeline: [
      { year: "2020", type: "Education", title: "Bachelor’s in Physical Geography and Environment", detail: "Félix Houphouët-Boigny University" },
      { year: "2023", type: "Education", title: "Master’s in Environmental and Health Geography", detail: "IGT · honours" },
      { year: "2024", type: "Fieldwork", title: "Kan wetland", detail: "STRM–CURAT · geographic database" },
      { year: "2024", type: "Education", title: "Master’s in Remote Sensing and GIS", detail: "CURAT · honours" },
      { year: "2025", type: "Experience", title: "Remote sensing & GIS engineering intern", detail: "SODEMI · pegmatites" },
      { year: "Since Apr 2025", type: "current", title: "CTO — GROWAA", detail: "Precision agriculture" },
    ],
    facts: [["Location", "Abidjan, Côte d’Ivoire"], ["Specialty", "Remote sensing & GIS"], ["Languages", "French · English"]],
    cta: "Discuss a project",
  },
} as const;

export function BackgroundPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <>
    <SiteHeader locale={locale} />
    <main className="inner-page" lang={locale}>
      <section className="shell bg-intro">
        <div className="bg-portrait">
          <svg viewBox="0 0 240 240" aria-hidden="true"><circle cx="120" cy="120" r="118" fill="var(--globe)" /><circle cx="120" cy="120" r="108" fill="none" stroke="var(--navy)" strokeWidth="1" strokeDasharray="2 7" opacity="0.6" /><g fill="none" stroke="var(--contour)"><ellipse cx="120" cy="120" rx="56" ry="118" /><path d="M2 120h236" /></g></svg>
          <Image src="/images/dane-kamenan-hero-portrait.png" alt={t.portraitAlt} width={1024} height={1536} priority sizes="210px" />
        </div>
        <div className="bg-identity">
          <p className="eyebrow">{t.kicker}</p>
          <h1>KAMENAN Dane Assoumou Junior</h1>
          <p className="bg-role">{t.role}</p>
          <p className="bg-profile">{t.profile}</p>
          <div className="bg-actions">
            <span className="status-pill"><i aria-hidden="true" />{t.status}</span>
            <a className="button primary compact" href={cvUrl} target="_blank" rel="noreferrer"><FiDownload aria-hidden="true" /> {t.download}</a>
          </div>
        </div>
      </section>

      <section className="shell transect">
        <div className="transect-heading"><h2>{t.timelineTitle}</h2><span>{t.timelineRange}</span></div>
        <svg className="transect-profile" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 110 L 0 96 C 120 92, 160 80, 220 78 S 380 70, 420 60 S 560 52, 620 44 S 760 36, 820 30 S 980 18, 1040 14 S 1160 8, 1200 6 L 1200 110 Z" fill="#e4ebe0" />
          <path d="M0 96 C 120 92, 160 80, 220 78 S 380 70, 420 60 S 560 52, 620 44 S 760 36, 820 30 S 980 18, 1040 14 S 1160 8, 1200 6" fill="none" stroke="var(--navy)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d="M0 110 H1200" stroke="#cfc9bb" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="transect-list">
          {t.timeline.map((item, i) => <li key={`${item.year}-${item.title}`} className={i === t.timeline.length - 1 ? "current" : undefined}><span>{item.year} · {item.type}</span><strong>{item.title}</strong><small>{item.detail}</small></li>)}
        </ol>
      </section>

      <SkillsMatrix locale={locale} />

      <section className="shell bg-facts">
        {t.facts.map(([label, value]) => <div key={label}><p>{label}</p><strong>{value}</strong></div>)}
        <div><Link className="text-link" href={routes[locale].contact}>{t.cta} →</Link></div>
      </section>
    </main>
    <Footer locale={locale} />
  </>;
}
