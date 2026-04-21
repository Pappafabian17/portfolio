import type { Locale } from "@/types/i18n";
type Messages = {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    highlights: string[];
  };
  sections: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  experience: {
    present: string;
  };
  projects: {
    openProject: string;
    technologiesLabel: string;
    items: {
      name: string;
      description: string;
      url: string;
      preview: string;
      technologies: string[];
    }[];
  };
  contact: {
    text: string;
  };
};
export const translations: Record<Locale, Messages> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Hi, I'm Fabian Pappa",
      subtitle: "Frontend Developer building clean and business-focused digital products.",
      cta: "View Projects",
      ctaSecondary: "Contact Me",
      highlights: ["3+ years experience", "Frontend + Product mindset", "AI-ready development"],
    },
    sections: {
      about: "About me",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    experience: {
      present: "Present",
    },
    projects: {
      openProject: "View project",
      technologiesLabel: "Technologies",
      items: [
        {
          name: "NewsTime",
          description:
            "News app built with vanilla JavaScript. It consumes an external API and includes search and favorites.",
          url: "https://newstimewd330.netlify.app/",
          preview: "/assets/projects/newstime-preview.svg",
          technologies: ["HTML", "CSS", "JavaScript", "News API"],
        },
        {
          name: "Sleep Outside",
          description:
            "E-commerce app built with JavaScript, with search bar, shopping cart, and favorites.",
          url: "https://sleepoutside07team.netlify.app/",
          preview: "/assets/projects/sleepoutside-preview.svg",
          technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        },
        {
          name: "Timet",
          description:
            "Landing page built only with HTML and CSS, focused on visual presentation.",
          url: "https://timettime.netlify.app/",
          preview: "/assets/projects/timet-preview.svg",
          technologies: ["HTML", "CSS"],
        },
      ],
    },
    contact: {
      text: "Let's build something great together.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mi",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Hola, soy Fabian Pappa",
      subtitle: "Desarrollador Frontend que crea productos digitales limpios y orientados a negocio.",
      cta: "Ver Proyectos",
      ctaSecondary: "Contactame",
      highlights: ["3+ anos de experiencia", "Mentalidad frontend + producto", "Desarrollo listo para IA"],
    },
    sections: {
      about: "Sobre mi",
      experience: "Experiencia",
      education: "Educacion",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    experience: {
      present: "Actualidad",
    },
    projects: {
      openProject: "Ver proyecto",
      technologiesLabel: "Tecnologias",
      items: [
        {
          name: "NewsTime",
          description:
            "Aplicacion de noticias hecha con JavaScript puro. Consume una API externa e incluye buscador y favoritos.",
          url: "https://newstimewd330.netlify.app/",
          preview: "/assets/projects/newstime-preview.svg",
          technologies: ["HTML", "CSS", "JavaScript", "News API"],
        },
        {
          name: "Sleep Outside",
          description:
            "Aplicacion e-commerce hecha en JavaScript, con barra de busqueda, carrito de compras y favoritos.",
          url: "https://sleepoutside07team.netlify.app/",
          preview: "/assets/projects/sleepoutside-preview.svg",
          technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        },
        {
          name: "Timet",
          description:
            "Landing page hecha solo con HTML y CSS, enfocada en la presentacion visual.",
          url: "https://timettime.netlify.app/",
          preview: "/assets/projects/timet-preview.svg",
          technologies: ["HTML", "CSS"],
        },
      ],
    },
    contact: {
      text: "Construyamos algo increible juntos.",
    },
  },
  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      experience: "Esperienza",
      projects: "Progetti",
      contact: "Contatto",
    },
    hero: {
      title: "Ciao, sono Fabian Pappa",
      subtitle: "Sviluppatore Frontend che crea prodotti digitali puliti e orientati al business.",
      cta: "Vedi Progetti",
      ctaSecondary: "Contattami",
      highlights: ["3+ anni di esperienza", "Mentalita frontend + prodotto", "Sviluppo pronto per IA"],
    },
    sections: {
      about: "Chi sono",
      experience: "Esperienza",
      education: "Istruzione",
      skills: "Competenze",
      projects: "Progetti",
      contact: "Contatto",
    },
    experience: {
      present: "Presente",
    },
    projects: {
      openProject: "Vedi progetto",
      technologiesLabel: "Tecnologie",
      items: [
        {
          name: "NewsTime",
          description:
            "App di notizie realizzata con JavaScript puro. Consuma un API esterna e include ricerca e preferiti.",
          url: "https://newstimewd330.netlify.app/",
          preview: "/assets/projects/newstime-preview.svg",
          technologies: ["HTML", "CSS", "JavaScript", "News API"],
        },
        {
          name: "Sleep Outside",
          description:
            "Applicazione e-commerce realizzata in JavaScript, con barra di ricerca, carrello e preferiti.",
          url: "https://sleepoutside07team.netlify.app/",
          preview: "/assets/projects/sleepoutside-preview.svg",
          technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        },
        {
          name: "Timet",
          description:
            "Landing page realizzata solo con HTML e CSS, focalizzata sulla presentazione visiva.",
          url: "https://timettime.netlify.app/",
          preview: "/assets/projects/timet-preview.svg",
          technologies: ["HTML", "CSS"],
        },
      ],
    },
    contact: {
      text: "Costruiamo qualcosa di grande insieme.",
    },
  },
};
