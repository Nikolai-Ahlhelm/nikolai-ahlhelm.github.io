export type Locale = "en" | "de";

export type LocalizedText = Record<Locale, string>;

export type SiteLink = {
  href: string;
  external?: boolean;
  label: LocalizedText;
};

export type LocaleContent = {
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroEyebrow: string;
  subtitle: string;
  summary: string;
  navLabel: string;
  contactLabel: string;
  availability: string;
  footerLabel: string;
  languageLabel: string;
  languages: Record<Locale, string>;
  copyright: string;
};

export type SiteConfig = {
  defaultLocale: Locale;
  brand: {
    name: string;
  };
  contact: {
    email: string;
  };
  nav: {
    links: SiteLink[];
  };
  footer: {
    links: SiteLink[];
  };
  locales: Record<Locale, LocaleContent>;
};

export const siteConfig: SiteConfig = {
  defaultLocale: "en",
  brand: {
    name: "Nikolai Ahlhelm"
  },
  contact: {
    email: "mail@nikolai-ahlhelm.de"
  },
  nav: {
    links: [
      {
        href: "#top",
        label: {
          en: "Home",
          de: "Start"
        }
      },
      {
        href: "mailto:mail@nikolai-ahlhelm.de",
        label: {
          en: "Contact",
          de: "Kontakt"
        }
      },
      {
        href: "https://github.com/Nikolai-Ahlhelm",
        external: true,
        label: {
          en: "GitHub",
          de: "GitHub"
        }
      }
    ]
  },
  footer: {
    links: [
      {
        href: "mailto:mail@nikolai-ahlhelm.de",
        label: {
          en: "Mail",
          de: "Mail"
        }
      },
      {
        href: "https://github.com/Nikolai-Ahlhelm",
        external: true,
        label: {
          en: "GitHub",
          de: "GitHub"
        }
      }
    ]
  },
  locales: {
    en: {
      metaTitle: "Nikolai Ahlhelm",
      metaDescription: "A minimal digital presence for modern web development, technical consulting and focused digital products.",
      heroBadge: "",
      heroEyebrow: "",
      subtitle: "",
      summary: "",
      navLabel: "Navigation",
      contactLabel: "Contact",
      availability: "Available for selected projects and long-term collaborations.",
      footerLabel: "Links",
      languageLabel: "Language",
      languages: {
        en: "EN",
        de: "DE"
      },
      copyright: "(c) 2026 Nikolai Ahlhelm. All rights reserved."
    },
    de: {
      metaTitle: "Nikolai Ahlhelm",
      metaDescription: "Eine reduzierte digitale Pr�senz f�r moderne Webentwicklung, technische Beratung und fokussierte digitale Produkte.",
      heroBadge: "Modern digital presence",
      heroEyebrow: "",
      subtitle: "",
      summary: "",
      navLabel: "Navigation",
      contactLabel: "Kontakt",
      availability: "Verfuegbar fuer ausgewaehlte Projekte und langfristige Zusammenarbeit.",
      footerLabel: "Links",
      languageLabel: "Sprache",
      languages: {
        en: "EN",
        de: "DE"
      },
      copyright: "(c) 2026 Nikolai Ahlhelm. Alle Rechte vorbehalten."
    }
  }
};
