"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

const ABIDJAN: [number, number] = [5.3364, -4.0267];

/** Interactive OpenStreetMap centred on Abidjan. Leaflet is loaded on the client only. */
export function LocationMap({ label, zoomIn, zoomOut }: { label: string; zoomIn: string; zoomOut: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !container.current) return;
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      map = L.map(container.current, {
        center: ABIDJAN,
        zoom: 11,
        minZoom: 5,
        maxZoom: 17,
        scrollWheelZoom: false,
        dragging: !isTouch,
        zoomControl: false,
        attributionControl: true,
      });
      L.control.zoom({ position: "topright", zoomInTitle: zoomIn, zoomOutTitle: zoomOut }).addTo(map);
      L.control.scale({ position: "bottomleft", metric: true, imperial: false }).addTo(map);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      const icon = L.divIcon({ className: "map-pin", html: "<span></span>", iconSize: [22, 22], iconAnchor: [11, 11] });
      L.marker(ABIDJAN, { icon, keyboard: false, title: label }).addTo(map);
      L.circle(ABIDJAN, { radius: 9000, color: "#1d5fd1", weight: 1, dashArray: "3 6", fillColor: "#1d5fd1", fillOpacity: 0.06 }).addTo(map);
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [label, zoomIn, zoomOut]);

  return <div ref={container} className="location-map" role="region" aria-label={label} />;
}
