"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE = 550;
const MAX_VISIBLE = 8000;
const tileOrder = [4, 1, 5, 7, 3, 0, 2, 8, 6];

/**
 * "Raster tiles" loading widget for page changes. It appears as soon as an internal link is
 * followed (or the browser goes back/forward) and stays at least MIN_VISIBLE so the swap
 * underneath never reads as a jump; the new page then fades in (see `.page-enter` in CSS).
 */
export function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);
  const hideTimer = useRef<number | undefined>(undefined);
  const safetyTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const show = () => {
      window.clearTimeout(hideTimer.current);
      window.clearTimeout(safetyTimer.current);
      shownAt.current = performance.now();
      setVisible(true);
      safetyTimer.current = window.setTimeout(() => setVisible(false), MAX_VISIBLE);
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      show();
    };
    // Capture phase: next/link calls preventDefault() on the click it handles, so a bubbling
    // listener would see every internal navigation as already "handled" and skip it.
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", show);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", show);
    };
  }, []);

  useEffect(() => {
    if (!shownAt.current) return;
    const remaining = Math.max(0, MIN_VISIBLE - (performance.now() - shownAt.current));
    hideTimer.current = window.setTimeout(() => {
      window.clearTimeout(safetyTimer.current);
      shownAt.current = 0;
      setVisible(false);
    }, remaining);
    return () => window.clearTimeout(hideTimer.current);
  }, [pathname]);

  const english = pathname?.startsWith("/en");
  return (
    <div className={visible ? "route-loader visible" : "route-loader"} role="status" aria-live="polite" aria-hidden={!visible}>
      <div className="route-loader-card">
        <div className="route-loader-tiles" aria-hidden="true">
          {tileOrder.map((delay, index) => <span key={index} style={{ animationDelay: `${delay * 0.06}s` }} />)}
        </div>
        <p>{visible ? (english ? "Loading tiles…" : "Chargement des tuiles…") : ""}</p>
        <small aria-hidden="true">z 11 · EPSG:3857</small>
      </div>
    </div>
  );
}
