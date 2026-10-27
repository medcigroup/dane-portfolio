import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/pages/CaseStudiesPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Études de cas", description: "Projets de télédétection, SIG, terrain et développement d’applications de KAMENAN Dane Assoumou Junior.", alternates: alternatesFor("fr", "/etudes-de-cas/", "/en/case-studies/") };

export default function Page() {
  return <CaseStudiesPage locale="fr" />;
}
