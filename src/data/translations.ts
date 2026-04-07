import type { Locale } from "@/types/i18n";

type Messages = {
  nav: {
    home: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  projects: {
    title: string;
    items: {
      name: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    text: string;
  };
};

export const translations: Record<Locale, Messages> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Hi, I'm Fabian Pappa",
      subtitle: "Fullstack Developer building clean web experiences",
      cta: "View Projects",
    },
    projects: {
      title: "Projects",
      items: [
        { name: "Portfolio", description: "My personal website in Next.js" },
        { name: "App Example", description: "A simple fullstack app" },
      ],
    },
    contact: {
      title: "contact",
      text: "Let's work together.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Hola, soy Fabian Pappa",
      subtitle: "Desarrollador Fullstack creando experiencias web limpias",
      cta: "Ver Proyectos",
    },
    projects: {
      title: "Proyectos",
      items: [
        { name: "Portfolio", description: "Mi sitio personal en Next.js" },
        { name: "App Ejemplo", description: "Una app fullstack simple" },
      ],
    },
    contact: {
      title: "contacto",
      text: "Trabajemos juntos.",
    },
  },
  it: {
    nav: {
      home: "Home",
      projects: "Progetti",
      contact: "Contatto",
    },
    hero: {
      title: "Ciao, sono Fabian Pappa",
      subtitle: "Sviluppatore Fullstack che crea esperienze web pulite",
      cta: "Vedi Progetti",
    },
    projects: {
      title: "Progetti",
      items: [
        { name: "Portfolio", description: "Il mio sito personale in Next.js" },
        { name: "App Esempio", description: "Una semplice app fullstack" },
      ],
    },
    contact: {
      title: "Contatto",
      text: "Lavoriamo insieme.",
    },
  },
};
