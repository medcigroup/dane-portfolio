import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/pages/CaseStudiesPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Case studies", description: "Remote sensing, GIS, fieldwork and app development projects by KAMENAN Dane Assoumou Junior.", alternates: alternatesFor("en", "/etudes-de-cas/", "/en/case-studies/") };

export default function Page() {
  return <CaseStudiesPage locale="en" />;
}
