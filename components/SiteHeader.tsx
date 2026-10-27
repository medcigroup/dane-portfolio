"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { routes, switchLocalePath, ui, type Locale } from "@/i18n";

/** Graduation shown under each menu entry: 0, 1, 2… and a unit on the last one, like a map scale bar. */
const tickLabel = (index: number, count: number) => (index === count - 1 ? `${index} km` : String(index));

export function SiteHeader({ locale = "fr" }: { locale?: Locale }) {
  const pathname = usePathname() ?? routes[locale].home;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = ui[locale];
  const r = routes[locale];
  const links = [
    { href: r.home, label: t.nav.home },
    { href: r.work, label: t.nav.work },
    { href: r.professional, label: t.nav.professional },
    { href: r.research, label: t.nav.research },
    { href: r.background, label: t.nav.background },
    { href: r.contact, label: t.nav.contact },
  ];
  const frHref = switchLocalePath(pathname, "fr");
  const enHref = switchLocalePath(pathname, "en");
  const mobileMenuId = `mobile-navigation-${locale}`;
  const isCurrent = (href: string) => !href.includes("#") && (href === r.home ? pathname === href : pathname.startsWith(href));

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // The static export has a single root layout (lang="fr"); keep <html lang> in sync on English pages.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const languageLinks = (onClick?: () => void) => (
    <>
      <Link className={locale === "fr" ? "active" : undefined} href={frHref} lang="fr" hrefLang="fr" aria-current={locale === "fr" ? "true" : undefined} onClick={onClick}>FR</Link>
      <Link className={locale === "en" ? "active" : undefined} href={enHref} lang="en" hrefLang="en" aria-current={locale === "en" ? "true" : undefined} onClick={onClick}>EN</Link>
    </>
  );

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={r.home} aria-label={t.homeLabel}>
          <svg className="brand-mark" viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="17" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M1 18h34M18 1v34" stroke="currentColor" strokeWidth="0.75" />
            <ellipse cx="18" cy="18" rx="8" ry="17" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="23" cy="13" r="3" fill="var(--blue)" />
          </svg>
          <span className="brand-text">
            <strong>KAMENAN Dane</strong>
            <span>{t.coords}</span>
          </span>
        </Link>
        <nav className="desktop-nav scale-nav" aria-label={t.mainNav}>
          {links.map((link, index) => (
            <Link key={link.href} className="scale-step" href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
              <span className="scale-label">{link.label}</span>
              <span className="scale-segment" aria-hidden="true" />
              <span className="scale-tick" aria-hidden="true">{tickLabel(index, links.length)}</span>
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <div className="language-switch" role="group" aria-label={t.language}>{languageLinks()}</div>
          <span className="scale-ratio" aria-hidden="true">1:25 000</span>
        </div>
        <div className="mobile-menu">
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
          {isMenuOpen ? (
            <>
              <button className="menu-backdrop" type="button" aria-label={t.closeMenu} onClick={closeMenu} />
              <nav id={mobileMenuId} className="mobile-nav" aria-label={t.mobileNav}>
                <div className="mobile-scale">
                  {links.map((link, index) => (
                    <Link key={link.href} className="scale-step" href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined} onClick={closeMenu}>
                      <span className="scale-segment" aria-hidden="true" />
                      <span className="scale-tick" aria-hidden="true">{index}</span>
                      <span className="scale-label">{link.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="mobile-nav-footer">
                  <span>1:25 000 · Abidjan</span>
                  <div className="mobile-language-switch" role="group" aria-label={t.language}>{languageLinks(closeMenu)}</div>
                </div>
              </nav>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
