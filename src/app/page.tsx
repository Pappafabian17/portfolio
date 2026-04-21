"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { translations } from "@/data/translations";
import profileData from "@/data/profile.json";
import type { Locale } from "@/types/i18n";
import type { Profile } from "@/types/profile";
import styles from "./page.module.css";
const profile = profileData as Profile;
const SUPPORTED_LOCALES: Locale[] = ["es", "en", "it"];
const NAV_SECTIONS = ["about", "experience", "projects", "contact"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];
const EDUCATION_FIELD_LABELS: Record<string, Record<Locale, string>> = {
  "Software Engineering": {
    es: "Ingenieria de Software",
    en: "Software Engineering",
    it: "Ingegneria del Software",
  },
  "Computer Programming": {
    es: "Programacion Informatica",
    en: "Computer Programming",
    it: "Programmazione Informatica",
  },
  "React Development": {
    es: "Desarrollo con React",
    en: "React Development",
    it: "Sviluppo React",
  },
  "JavaScript Development": {
    es: "Desarrollo con JavaScript",
    en: "JavaScript Development",
    it: "Sviluppo JavaScript",
  },
  "Web Development": {
    es: "Desarrollo Web",
    en: "Web Development",
    it: "Sviluppo Web",
  },
};
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage.getItem("lang");
  if (saved === "es" || saved === "en" || saved === "it") return saved;
  return "es";
}
function formatDate(dateStr: string, present: string): string {
  if (!dateStr) return present;
  const [year, month] = dateStr.split("-");
  return month ? `${month}/${year}` : year;
}
function getEducationFieldLabel(field: string, locale: Locale): string {
  return EDUCATION_FIELD_LABELS[field]?.[locale] ?? field;
}
export default function HomePage() {
  const [lang, setLang] = useState<Locale>(getInitialLocale);
  const [activeSection, setActiveSection] = useState<NavSection>("about");
  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);
  useEffect(() => {
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => Boolean(element),
    );
    const updateActiveSection = (): void => {
      const markerY = window.innerHeight * 0.35;
      let current: NavSection = "about";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= markerY) {
          current = section.id as NavSection;
        }
      });
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 8) {
        current = "contact";
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);
  const t = useMemo(() => translations[lang], [lang]);
  const getNavClass = (sectionId: NavSection): string =>
    sectionId === activeSection
      ? `${styles.navLink} ${styles.navLinkActive}`
      : styles.navLink;
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#about" className={getNavClass("about")}>
            {t.nav.about}
          </a>
          <a href="#experience" className={getNavClass("experience")}>
            {t.nav.experience}
          </a>
          <a href="#projects" className={getNavClass("projects")}>
            {t.nav.projects}
          </a>
          <a href="#contact" className={getNavClass("contact")}>
            {t.nav.contact}
          </a>
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
      <section id="home" className={styles.hero}>
        <div className={styles.heroText}>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.heroCta}>
              {t.hero.cta}
            </a>
            <button
              type="button"
              className={styles.heroCtaSecondary}
              onClick={() => scrollToSection("contact")}
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
          <ul className={styles.heroHighlights}>
            {t.hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Image
          src="/assets/images/profile.png"
          alt={profile.name}
          width={180}
          height={180}
          className={styles.heroPhoto}
          priority
        />
      </section>
      <section id="about" className={styles.section}>
        <h2>{t.sections.about}</h2>
        <p className={styles.aboutTitle}>{profile.title[lang]}</p>
        <p>{profile.summary[lang]}</p>
      </section>
      <section id="skills" className={styles.section}>
        <h2>{t.sections.skills}</h2>
        <ul className={styles.skillsList}>
          {profile.skills.map((skill) => (
            <li key={skill} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section id="experience" className={styles.section}>
        <h2>{t.sections.experience}</h2>
        <ul className={styles.experienceList}>
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.start_date}`} className={styles.experienceItem}>
              <div className={styles.experienceTop}>
                <div className={styles.experienceHeading}>
                  <strong>{job.role[lang]}</strong>
                  <span>{job.company}</span>
                </div>
                <div className={styles.experienceMeta}>
                  <span className={styles.experienceDates}>
                    {formatDate(job.start_date, t.experience.present)} - {" "}
                    {job.current
                      ? t.experience.present
                      : formatDate(job.end_date ?? "", t.experience.present)}
                  </span>
                  {job.current ? (
                    <span className={styles.experienceCurrentBadge}>{t.experience.present}</span>
                  ) : null}
                </div>
              </div>
              <p className={styles.experienceSummary}>{job.description[lang]}</p>
              <ul className={styles.responsibilitiesList}>
                {job.responsibilities[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section id="education" className={styles.section}>
        <h2>{t.sections.education}</h2>
        <ul className={styles.educationList}>
          {profile.education.map((edu) => (
            <li key={edu.field} className={styles.educationItem}>
              <strong>{edu.institution}</strong>
              <span>{getEducationFieldLabel(edu.field, lang)}</span>
              <span className={styles.educationDates}>
                {edu.start_date.slice(0, 4)} - {" "}
                {edu.current ? t.experience.present : String(edu.end_date)}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section id="projects" className={styles.section}>
        <h2>{t.sections.projects}</h2>
        <ul>
          {t.projects.items.map((project) => (
            <li key={project.name} className={styles.projectItem}>
              <Image
                src={project.preview}
                alt={`${project.name} preview`}
                width={1200}
                height={675}
                className={styles.projectPreview}
              />
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <p className={styles.projectTechLabel}>{t.projects.technologiesLabel}</p>
              <ul className={styles.projectTechList}>
                {project.technologies.map((tech) => (
                  <li key={`${project.name}-${tech}`} className={styles.projectTechItem}>
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {t.projects.openProject}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className={styles.section}>
        <h2>{t.sections.contact}</h2>
        <p>{t.contact.text}</p>
        <div className={styles.contactLinks}>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
