import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return <><SiteHeader /><main className="not-found shell"><p className="eyebrow">Erreur 404</p><h1>Cette page n’existe pas.</h1><p>Le contenu a peut-être changé d’adresse.</p><Link className="button primary" href="/">Retour à l’accueil</Link></main></>;
}
