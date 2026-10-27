import type { Metadata } from "next";
import { BackgroundPage } from "@/components/pages/BackgroundPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Parcours", description: "Formation, expériences et compétences de KAMENAN Dane Assoumou Junior.", alternates: alternatesFor("fr", "/parcours/", "/en/background/") };

export default function Page() {
  return <BackgroundPage locale="fr" />;
}
