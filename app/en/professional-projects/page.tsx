import type { Metadata } from "next";
import { ProfessionalProjectsPage } from "@/components/pages/ProfessionalProjectsPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Professional projects", description: "Professional projects in precision agriculture, digital products, remote sensing and geospatial analysis.", alternates: alternatesFor("en", "/projets-professionnels/", "/en/professional-projects/") };

export default function Page() {
  return <ProfessionalProjectsPage locale="en" />;
}
