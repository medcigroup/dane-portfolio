import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Contact", description: "Contacter KAMENAN Dane Assoumou Junior pour un projet, une collaboration ou une candidature.", alternates: alternatesFor("fr", "/contact/", "/en/contact/") };

export default function Page() {
  return <ContactPage locale="fr" />;
}
