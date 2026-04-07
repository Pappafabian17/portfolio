"use client";
import { useEffect, useMemo, useState } from "react";
import { translations } from "@/data/translations";
import type { Locale } from "@/types/i18n";
import styles from "./page.module.css";
const SUPPORTED_LOCALES: Locale[] = ["es", "en", "it"];
function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "es";
  }
  const saved = window.localStorage.getItem("lang");
  if (saved === "es" || saved === "en" || saved === "it") {
    return saved;
  }
  return "es";
}
export default function HomePage() {
  const [lang, setLang] = useState<Locale>(getInitialLocale);
  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);
  const t = useMemo(() => translations[lang], [lang]);
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#home">{t.nav.home}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className={styles.langSelector}>
          <label htmlFor="language-select" className={styles.langLabel}>
            Idioma
          </label>
          <select
            id="language-select"
            className={styles.langSelect}
            value={lang}
            onChange={(event) => setLang(event.target.value as Locale)}
          >
            {SUPPORTED_LOCALES.map((locale) => (
              <option key={locale} value={locale}>
                {locale.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </header>
      <section id="home" className={styles.section}>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <a href="#projects">{t.hero.cta}</a>
      </section>
      <section id="projects" className={styles.section}>
        <h2>{t.projects.title}</h2>
        <ul>
          {t.projects.items.map((project) => (
            <li key={project.name} className={styles.projectItem}>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className={styles.section}>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>
      </section>
    </main>
  );
}
