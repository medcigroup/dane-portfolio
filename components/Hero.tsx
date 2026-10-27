import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { cvUrl, routes, ui, type Locale } from "@/i18n";

const copy = {
  fr: {
    eyebrow: "Géographe · Géomaticien · Développeur SIG",
    title: "Des pixels satellites aux décisions territoriales.",
    intro: "Je m’appelle KAMENAN Dane Assoumou Junior, géographe-géomaticien. Je mobilise la télédétection, les SIG et le développement d’applications web pour éclairer les enjeux d’environnement, de santé et d’agriculture en Côte d’Ivoire.",
    work: "Explorer les études de cas",
    cv: "Télécharger le CV",
    factsLabel: "Repères du parcours",
    facts: [
      { label: "Formation", value: "2 Masters · mention Bien" },
      { label: "Recherche", value: "1 publication" },
      { label: "Terrain", value: "3+ ans" },
    ],
    portraitAlt: "Portrait professionnel de KAMENAN Dane Assoumou Junior",
    tags: ["Télédétection · SIG", "CTO · GROWAA"],
  },
  en: {
    eyebrow: "Geographer · Geospatial analyst · GIS developer",
    title: "From satellite pixels to territorial decisions.",
    intro: "I’m KAMENAN Dane Assoumou Junior, a geographer and geospatial analyst. I use remote sensing, GIS and web application development to shed light on environmental, health and agricultural issues in Côte d’Ivoire.",
    work: "Explore case studies",
    cv: "Download résumé",
    factsLabel: "Career highlights",
    facts: [
      { label: "Education", value: "2 Master’s · honours" },
      { label: "Research", value: "1 publication" },
      { label: "Fieldwork", value: "3+ years" },
    ],
    portraitAlt: "Professional portrait of KAMENAN Dane Assoumou Junior",
    tags: ["Remote sensing · GIS", "CTO · GROWAA"],
  },
} as const;

export function Hero({ locale = "fr" }: { locale?: Locale }) {
  const t = copy[locale];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <svg className="hero-contours" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M-20 620 C 180 560, 320 640, 520 590 S 860 520, 1000 600 S 1300 660, 1460 600" />
          <path d="M-20 660 C 200 600, 340 690, 540 630 S 870 560, 1010 640 S 1300 700, 1460 650" />
          <path d="M-20 700 C 220 650, 360 730, 560 680 S 880 610, 1020 690 S 1300 740, 1460 700" />
          <path d="M-20 140 C 120 100, 260 180, 400 130 S 620 60, 760 120" />
          <path d="M-20 180 C 140 140, 280 220, 420 170 S 640 100, 780 160" />
        </g>
      </svg>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 id="hero-title">{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <Link className="button primary" href={routes[locale].work}>{t.work} <FiArrowRight aria-hidden="true" /></Link>
            <a className="button secondary" href={cvUrl} download><FiDownload aria-hidden="true" /> {t.cv}</a>
          </div>
          <dl className="hero-facts" aria-label={t.factsLabel}>
            {t.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          </dl>
        </div>
        <figure className="hero-figure">
          <svg className="hero-globe" viewBox="0 0 520 520" aria-hidden="true">
            <circle cx="260" cy="260" r="256" fill="var(--globe)" />
            <circle cx="260" cy="260" r="236" fill="none" stroke="var(--navy)" strokeWidth="1" strokeDasharray="2 7" opacity="0.6" />
            <g fill="none" stroke="var(--contour)" strokeWidth="1">
              <ellipse cx="260" cy="260" rx="120" ry="256" />
              <ellipse cx="260" cy="260" rx="200" ry="256" />
              <path d="M4 260h512M24 160h472M24 360h472" />
            </g>
            <g stroke="var(--navy)" strokeWidth="1.5"><path d="M260 0v16M0 260h16M504 260h16" /></g>
          </svg>
          <Image
            className="hero-portrait"
            src="/images/dane-kamenan-hero-portrait.png"
            alt={t.portraitAlt}
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 560px) 78vw, (max-width: 820px) 340px, 440px"
          />
          <span className="hero-tag hero-tag-a"><i aria-hidden="true" />{t.tags[0]}</span>
          <span className="hero-tag hero-tag-b"><i aria-hidden="true" />{t.tags[1]}</span>
          <span className="hero-tag hero-tag-c"><i aria-hidden="true" />Abidjan · {ui[locale].coords.split(" · ")[0]}</span>
        </figure>
      </div>
    </section>
  );
}
