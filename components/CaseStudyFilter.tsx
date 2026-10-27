"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { layerLabels, layers, type LayerId, type Locale, type WorkItem } from "@/i18n";

type Labels = { layers: string; all: string; count: string; empty: string; period: string; organization: string; view: string };

export function CaseStudyFilter({ items, locale, labels }: { items: WorkItem[]; locale: Locale; labels: Labels }) {
  const [active, setActive] = useState<LayerId | "all">("all");
  const visible = active === "all" ? items : items.filter((item) => item.layers.includes(active));
  const options = [{ id: "all" as const, label: labels.all, color: "var(--navy)" }, ...layers.map((layer) => ({ id: layer.id, label: `${layer.code} · ${layerLabels[locale][layer.id]}`, color: layer.color }))];

  return (
    <>
      <div className="layer-panel" role="group" aria-label={labels.layers}>
        <span className="layer-panel-title">{labels.layers}</span>
        {options.map((option) => (
          <button key={option.id} type="button" className="layer-chip" aria-pressed={active === option.id} onClick={() => setActive(option.id)}>
            <i aria-hidden="true" style={{ background: option.color }} />{option.label}
          </button>
        ))}
        <span className="layer-count" aria-live="polite">{labels.count.replace("{shown}", String(visible.length)).replace("{total}", String(items.length))}</span>
      </div>

      <div className="case-list">
        {visible.map((item) => (
          <article className="case-row" key={item.slug}>
            <Link className="case-row-image" href={item.href} tabIndex={-1} aria-hidden="true">
              <Image src={item.image} alt="" fill sizes="(max-width: 820px) 100vw, 45vw" />
            </Link>
            <div className="case-row-copy">
              <div className="case-row-tags">{item.layers.map((id) => <span key={id}>{layerLabels[locale][id]}</span>)}</div>
              <h2><Link href={item.href}>{item.title}</Link></h2>
              <p>{item.summary}</p>
              <dl>
                <div><dt>{labels.period}</dt><dd>{item.period}</dd></div>
                <div><dt>{labels.organization}</dt><dd>{item.organization}</dd></div>
              </dl>
              <p className="work-tools">{item.tools.join(" · ")}</p>
              <Link className="text-link" href={item.href}>{labels.view} <FiArrowRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
        {visible.length === 0 ? <p className="case-empty">{labels.empty}</p> : null}
      </div>
    </>
  );
}
