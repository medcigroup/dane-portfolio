import type { Metadata } from "next";
import { ProfessionalProjectsPage } from "@/components/pages/ProfessionalProjectsPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Projets professionnels", description: "Projets professionnels en agriculture de précision, produits numériques, télédétection et analyse géospatiale.", alternates: alternatesFor("fr", "/projets-professionnels/", "/en/professional-projects/") };

export default function Page() {
  return <ProfessionalProjectsPage locale="fr" />;
}
