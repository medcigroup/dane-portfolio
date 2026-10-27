"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SHOW_DELAY = 300;
const MAX_VISIBLE = 8000;
const tileOrder = [4, 1, 5, 7, 3, 0, 2, 8, 6];

/**
 * "Raster tiles" loading widget shown during client-side navigation.
 * It only appears when the next page takes longer than SHOW_DELAY, so fast navigations never flash.
 */
export function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const showTimer = useRef<number | undefined>(undefined);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      window.clearTimeout(showTimer.current);
      window.clearTimeout(hideTimer.current);
      showTimer.current = window.setTimeout(() => setVisible(true), SHOW_DELAY);
      hideTimer.current = window.setTimeout(() => setVisible(false), MAX_VISIBLE);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    window.clearTimeout(showTimer.current);
    window.clearTimeout(hideTimer.current);
    setVisible(false);
  }, [pathname]);

  const english = pathname?.startsWith("/en");
  return (
    <div className={visible ? "route-loader visible" : "route-loader"} role="status" aria-live="polite" aria-hidden={!visible}>
      <div className="route-loader-card">
        <div className="route-loader-tiles" aria-hidden="true">
          {tileOrder.map((delay, index) => <span key={index} style={{ animationDelay: `${delay * 0.12}s` }} />)}
        </div>
        <p>{visible ? (english ? "Loading tiles…" : "Chargement des tuiles…") : ""}</p>
        <small aria-hidden="true">z 11 · EPSG:3857</small>
      </div>
    </div>
  );
}
