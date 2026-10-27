import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { title: "Contact", description: "Contact KAMENAN Dane Assoumou Junior about a project, collaboration or opportunity.", alternates: alternatesFor("en", "/contact/", "/en/contact/") };

export default function Page() {
  return <ContactPage locale="en" />;
}
