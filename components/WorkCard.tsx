import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { layerLine, type Locale, type WorkItem } from "@/i18n";

export function WorkCard({ item, locale, size, priority, viewCase, viewLabel }: { item: WorkItem; locale: Locale; size: string; priority?: boolean; viewCase: string; viewLabel: string }) {
  const inProduction = item.status && /production/i.test(item.status);
  return (
    <article className={`work-card ${size}`}>
      <Link className={item.contain ? "work-card-image fit-contain" : "work-card-image"} href={item.href} aria-label={viewLabel}>
        <Image src={item.image} alt={item.imageAlt} fill priority={priority} sizes={size === "narrow" ? "(max-width: 820px) 100vw, 40vw" : "(max-width: 820px) 100vw, 60vw"} />
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
