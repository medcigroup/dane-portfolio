import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";
import "./atlas-pages.css";
import { RouteLoader } from "@/components/RouteLoader";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Lora({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dane-portfolio.web.app"),
  title: { default: "KAMENAN Dane — Géographe-géomaticien", template: "%s | KAMENAN Dane" },
  description: "Portfolio scientifique de KAMENAN Dane Assoumou Junior : télédétection, SIG, analyse spatiale, environnement, santé et outils cartographiques.",
  keywords: ["géomaticien", "géographe", "SIG", "télédétection", "QGIS", "analyse spatiale", "Côte d’Ivoire"],
  authors: [{ name: "KAMENAN Dane Assoumou Junior" }],
  alternates: { canonical: "/", languages: { "fr-FR": "/", "en": "/en/" } },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "KAMENAN Dane — Géographe-géomaticien",
    description: "Des données de terrain et satellites aux décisions territoriales.",
    images: [{ url: "/images/hero-wetland-satellite.png", width: 1536, height: 1024, alt: "Paysage humide observé par satellite" }],
  },
  twitter: { card: "summary_large_image", title: "KAMENAN Dane — Géographe-géomaticien", description: "Analyse spatiale, télédétection et outils numériques pour les territoires.", images: ["/images/hero-wetland-satellite.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f4ee" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>{children}<RouteLoader /></body>
    </html>
  );
}
