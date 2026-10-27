import { ContactForm } from "@/components/ContactForm";
import { LocationMap } from "@/components/LocationMap";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { ui, type Locale } from "@/i18n";

const copy = {
  fr: {
    title: "Échangeons autour de votre projet.",
    intro: "Doctorat, recherche appliquée, mission SIG ou outil cartographique : décrivez votre contexte.",
    form: {
      type: "Type de projet", types: ["Télédétection", "Mission SIG", "Application web / mobile", "Recherche / doctorat"],
      name: "Nom", email: "Email", zone: "Zone d’étude", zoneHint: "(région, commune, emprise…)", message: "Message",
      submit: "Envoyer le message", note: "Le message s’ouvre dans votre messagerie, prêt à être envoyé.", subject: "Projet",
    },
    mapLabel: "Carte interactive d’Abidjan, Côte d’Ivoire",
    zoomIn: "Zoomer", zoomOut: "Dézoomer", openMap: "Ouvrir dans OpenStreetMap",
    email: "Email", phone: "Téléphone", network: "Réseau",
    references: "Références académiques et professionnelles disponibles sur demande.",
  },
  en: {
    title: "Let’s discuss your project.",
    intro: "PhD research, applied research, a GIS assignment or a mapping tool: tell me about your context.",
    form: {
      type: "Project type", types: ["Remote sensing", "GIS assignment", "Web / mobile app", "Research / PhD"],
      name: "Name", email: "Email", zone: "Study area", zoneHint: "(region, town, extent…)", message: "Message",
      submit: "Send message", note: "The message opens in your email app, ready to send.", subject: "Project",
    },
    mapLabel: "Interactive map of Abidjan, Côte d’Ivoire",
    zoomIn: "Zoom in", zoomOut: "Zoom out", openMap: "Open in OpenStreetMap",
    email: "Email", phone: "Phone", network: "Network",
    references: "Academic and professional references are available on request.",
  },
};

export function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [lat, lon] = ui[locale].coords.split(" · ");
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="inner-page" lang={locale}>
        <section className="shell contact-layout">
          <div className="contact-main">
            <p className="eyebrow">Contact</p>
            <h1>{t.title}</h1>
            <p className="contact-intro">{t.intro}</p>
            <ContactForm labels={t.form} />
          </div>
          <aside className="contact-side">
            <figure className="map-card">
              <LocationMap label={t.mapLabel} zoomIn={t.zoomIn} zoomOut={t.zoomOut} />
              <figcaption><span>Abidjan, Côte d’Ivoire · {lat} · {lon} · UTC+0</span><a href="https://www.openstreetmap.org/?mlat=5.3364&mlon=-4.0267#map=12/5.3364/-4.0267" target="_blank" rel="noreferrer">{t.openMap} ↗<span className="sr-only"> ({ui[locale].newTab})</span></a></figcaption>
            </figure>
            <ul className="contact-list">
              <li><a href="mailto:dannkamenan@hotmail.com"><small>{t.email}</small>dannkamenan@hotmail.com</a></li>
              <li><a href="tel:+2250749985552"><small>{t.phone}</small>+225 07 49 98 55 52</a></li>
              <li><a href="https://www.linkedin.com/in/dane-kamenan-6981352b4/" target="_blank" rel="noreferrer"><small>{t.network}</small>LinkedIn ↗<span className="sr-only"> ({ui[locale].newTab})</span></a></li>
            </ul>
            <p className="contact-note">{t.references}</p>
          </aside>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
