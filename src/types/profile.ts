import type { Locale } from "@/types/i18n";

// Representa cualquier campo que tiene traducción: { es: "...", en: "...", it: "..." }
export type LocalizedString = Record<Locale, string>;

// Lo mismo pero para arrays: { es: [...], en: [...], it: [...] }
export type LocalizedStringArray = Record<Locale, string[]>;

export type Experience = {
  company: string;
  role: LocalizedString;
  start_date: string;
  end_date: string | null;
  current: boolean;
  duration: string;
  location: string | null;
  description: LocalizedString;
  responsibilities: LocalizedStringArray;
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string | number;
  current: boolean;
};

export type Profile = {
  name: string;
  title: LocalizedString;
  location: string;
  contact: {
    email: string;
    linkedin: string;
  };
  summary: LocalizedString;
  skills: string[];
  certifications: string[];
  experience: Experience[];
  education: Education[];
  default_locale: string;
  supported_locales: string[];
};
