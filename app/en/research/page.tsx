import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages/ResearchPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Research and publications", description: "Publications, dissertations and research themes of KAMENAN Dane Assoumou Junior.", alternates: alternatesFor("en", "/research/", "/en/research/") };

export default function Page() {
  return <ResearchPage locale="en" />;
}
