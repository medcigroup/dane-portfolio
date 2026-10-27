import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { layerLine, type Locale, type WorkItem } from "@/i18n";

const legend = {
  fr: { title: "NDVI · 2024", low: "sec", high: "dense" },
  en: { title: "NDVI · 2024", low: "dry", high: "dense" },
};

/** Map-style legend shown on the drought study, whose cover image is an NDVI rendering. */
export function NdviLegend({ locale, className = "ndvi-legend" }: { locale: Locale; className?: string }) {
  const t = legend[locale];
  return (
    <div className={className}>
      <span>{t.title}</span>
      <div className="ndvi-ramp" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="ndvi-scale"><span>{t.low}</span><span>{t.high}</span></div>
    </div>
  );
}

export function WorkCard({ item, locale, size, priority, viewCase, viewLabel }: { item: WorkItem; locale: Locale; size: string; priority?: boolean; viewCase: string; viewLabel: string }) {
  const inProduction = item.status && /production/i.test(item.status);
  return (
    <article className={`work-card ${size}`}>
      <Link className="work-card-image" href={item.href} aria-label={viewLabel}>
        <Image src={item.image} alt={item.imageAlt} fill priority={priority} sizes={size === "narrow" ? "(max-width: 820px) 100vw, 40vw" : "(max-width: 820px) 100vw, 60vw"} />
        {item.slug === "secheresse-zanzan" ? <NdviLegend locale={locale} /> : null}
        {inProduction ? <span className="work-badge">{item.status}</span> : null}
      </Link>
      <div className="work-card-copy">
        <p className="work-meta">
          {layerLine(locale, item.layers).map((layer) => <span key={layer}>{layer}</span>)}
          <span>{item.period}</span>
        </p>
        <h3><Link href={item.href}>{item.title}</Link></h3>
        <p>{item.summary}</p>
        <p className="work-tools">{item.tools.slice(0, 4).join(" · ")}</p>
        <Link className="text-link" href={item.href}>{viewCase} <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
