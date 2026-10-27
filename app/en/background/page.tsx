import type { Metadata } from "next";
import { BackgroundPage } from "@/components/pages/BackgroundPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Background", description: "Education, experience and skills of KAMENAN Dane Assoumou Junior.", alternates: alternatesFor("en", "/parcours/", "/en/background/") };

export default function Page() {
  return <BackgroundPage locale="en" />;
}
