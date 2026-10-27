import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = { alternates: alternatesFor("fr", "/", "/en/") };

export default function Page() {
  return <HomePage locale="fr" />;
}
