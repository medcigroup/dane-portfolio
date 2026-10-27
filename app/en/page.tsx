import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Geographer & Geospatial Analyst", description: "Geospatial portfolio of KAMENAN Dane Assoumou Junior: remote sensing, GIS, spatial analysis and mapping tools.", alternates: alternatesFor("en", "/", "/en/") };

export default function Page() {
  return <HomePage locale="en" />;
}
