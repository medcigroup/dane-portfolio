import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages/ResearchPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Recherche et publications", description: "Publications, mémoires et axes de recherche de KAMENAN Dane Assoumou Junior.", alternates: alternatesFor("fr", "/research/", "/en/research/") };

export default function Page() {
  return <ResearchPage locale="fr" />;
}
