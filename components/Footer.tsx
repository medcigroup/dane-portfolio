import Link from "next/link";
import { FiArrowUpRight, FiLinkedin, FiMail } from "react-icons/fi";
import { routes, ui, type Locale } from "@/i18n";

export function Footer({ locale = "fr" }: { locale?: Locale }) {
  const t = ui[locale].footer;
  return (
    <footer className="footer" id="contact">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow light">{t.eyebrow}</p>
          <h2>{t.title}</h2>
        </div>
        <div className="footer-contact">
          <a href="mailto:dannkamenan@hotmail.com"><FiMail aria-hidden="true" /> dannkamenan@hotmail.com</a>
          <a href="https://www.linkedin.com/in/dane-kamenan-6981352b4/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> ({ui[locale].newTab})</span></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 KAMENAN Dane Assoumou Junior</span>
        <span className="footer-coords">Abidjan · {ui[locale].coords} · WGS 84</span>
        <Link href={routes[locale].contact}>{t.references}</Link>
      </div>
    </footer>
  );
}
