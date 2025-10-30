"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Locale = "fr" | "en";

type Messages = Record<string, string>;

type NamespacedMessages = Record<Locale, Record<string, Messages>>;

const messages: NamespacedMessages = {
  fr: {
    common: {
      bookAppointment: "Prendre rendez-vous",
      readMore: "En savoir plus",
      loading: "Chargement...",
      allRightsReserved: "Tous droits réservés.",
    },
    nav: {
      home: "Accueil",
      services: "Services",
      team: "Équipe",
      caseStudies: "Nos Réussites",
      news: "Actualités",
      contact: "Contact",
    },
    footer: {
      brandDescription:
        "Votre partenaire juridique de confiance à Yaoundé, offrant des services juridiques d'excellence depuis plus de 20 ans.",
      quickLinks: "Liens rapides",
      ourServices: "Nos services",
      ourTeam: "Notre équipe",
      ourCaseStudies: "Nos réussites",
      news: "Actualités",
      contact: "Contact",
      hours: "Horaires",
    },
    home: {
      heroTitle: "Excellence juridique au service de vos ambitions",
      heroSubtitle:
        "Cabinet d'avocats de premier plan à Yaoundé, nous accompagnons entreprises et particuliers avec expertise et dévouement depuis plus de 20 ans.",
      ctaDiscoverServices: "Découvrir nos services",
      statsYears: "Années d'expérience",
      statsClients: "Clients satisfaits",
      statsLawyers: "Avocats experts",
      statsSuccessRate: "Taux de réussite",
      expertiseTitle: "Nos domaines d'expertise",
      expertiseSubtitle:
        "Une expertise complète pour répondre à tous vos besoins juridiques",
      whyTitle: "Pourquoi choisir Cabinet Excellence ?",
      whyPoint1: "Équipe d'avocats hautement qualifiés et expérimentés",
      whyPoint2: "Approche personnalisée adaptée à chaque client",
      whyPoint3: "Disponibilité et réactivité exceptionnelles",
      whyPoint4: "Expertise reconnue dans tous les domaines du droit",
      whyPoint5: "Réseau international de partenaires juridiques",
      whyPoint6: "Tarifs transparents et compétitifs",
      ourTeamAlt: "Notre équipe",
      needAdvice: "Besoin d'un conseil juridique ?",
      contactToday:
        "Contactez-nous dès aujourd'hui pour une consultation personnalisée. Notre équipe est prête à vous accompagner.",
      bookNow: "Prendre rendez-vous maintenant",
      serviceBusiness: "Droit des affaires",
      serviceCivil: "Droit civil",
      serviceLabor: "Droit du travail",
      serviceTax: "Droit fiscal",
      serviceCriminal: "Droit pénal",
      serviceArbitration: "Arbitrage & Médiation",
      serviceBusinessDesc:
        "Conseil juridique, création de sociétés, contrats commerciaux et fusions-acquisitions.",
      serviceCivilDesc:
        "Droit de la famille, successions, immobilier et litiges civils.",
      serviceLaborDesc:
        "Contrats de travail, licenciements, négociations collectives et contentieux prud'homaux.",
      serviceTaxDesc:
        "Optimisation fiscale, contentieux fiscal et conseil en fiscalité d'entreprise.",
      serviceCriminalDesc:
        "Défense pénale, droit pénal des affaires et assistance aux victimes.",
      serviceArbitrationDesc:
        "Résolution alternative des conflits et représentation en arbitrage international.",
    },
    services: {
      heroTitle: "Nos domaines de compétence",
      heroSubtitle:
        "Une expertise juridique complète et reconnue pour accompagner entreprises et particuliers dans tous leurs projets et défis juridiques.",
      ctaTitle: "Besoin d'une expertise spécifique ?",
      ctaSubtitle:
        "Contactez-nous pour discuter de votre situation. Nous trouverons la solution juridique adaptée à vos besoins.",
    },
    team: {
      heroTitle: "Notre équipe d'experts",
      heroSubtitle:
        "Des avocats passionnés et hautement qualifiés, dévoués à la défense de vos intérêts avec excellence et intégrité.",
      specialties: "Spécialités",
      education: "Formation",
      languages: "Langues",
      meetExperts: "Rencontrez nos experts",
      meetExpertsSubtitle:
        "Prenez rendez-vous avec l'avocat qui correspond le mieux à vos besoins juridiques.",
      phone: "Téléphone",
    },
    news: {
      heroTitle: "Actualités juridiques",
      heroSubtitle:
        "Restez informé des dernières évolutions législatives, réglementaires et jurisprudentielles au Cameroun et dans la zone CEMAC.",
      featured: "À la une",
      readFull: "Lire l'article complet →",
      readMore: "Lire la suite →",
      stayInformed: "Restez informé",
      newsletterSubtitle:
        "Inscrivez-vous à notre newsletter pour recevoir nos analyses juridiques et actualités directement dans votre boîte mail.",
      emailPlaceholder: "Votre adresse email",
      subscribe: "S'inscrire",
    },
    article: {
      notFound: "Article non trouvé",
      notFoundDesc:
        "L'article que vous recherchez n'existe pas ou a été supprimé.",
      backToNews: "Retour aux actualités",
      share: "Partager",
      writtenBy: "Rédigé par",
      relatedArticles: "Articles similaires",
      needHelp: "Besoin d'un conseil juridique ?",
      needHelpDesc:
        "Notre équipe d'experts est à votre disposition pour vous accompagner dans vos démarches juridiques.",
      linkCopied: "Lien copié dans le presse-papiers",
      shareError: "Impossible de partager le lien",
    },
    caseStudy: {
      notFound: "Réussite non trouvée",
      notFoundDesc:
        "La réussite que vous recherchez n'existe pas ou a été supprimée.",
      backToCaseStudies: "Retour aux réussites",
      share: "Partager",
      overview: "Vue d'ensemble",
      theChallenge: "Le défi",
      ourSolution: "Notre solution",
      theResult: "Le résultat",
      moreSuccess: "Plus de réussites",
      needHelp: "Besoin d'accompagnement juridique ?",
      needHelpDesc:
        "Confiez-nous votre dossier et bénéficiez de notre expertise reconnue.",
    },
    caseStudies: {
      heroTitle: "Nos réussites",
      heroSubtitle:
        "Découvrez comment nous avons aidé nos clients à surmonter leurs défis juridiques les plus complexes avec succès et professionnalisme.",
      statsWon: "Affaires gagnées",
      statsRate: "Taux de réussite",
      statsClients: "Clients satisfaits",
      statsRecovered: "FCFA récupérés",
      client: "Client",
      challenge: "Défi",
      solution: "Solution",
      result: "Résultat",
      testimonials: "Ce que disent nos clients",
    },
    contact: {
      heroTitle: "Contactez-nous",
      heroSubtitle:
        "Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos démarches juridiques.",
      detailsTitle: "Nos coordonnées",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      hours: "Horaires",
      emergencyTitle: "Urgence juridique ?",
      emergencySubtitle:
        "Pour les situations urgentes nécessitant une intervention immédiate, contactez notre ligne d'urgence.",
      emergencyButton: "Ligne d'urgence",
      formTitle: "Envoyez-nous un message",
      formSubtitle:
        "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.",
      firstName: "Prénom *",
      lastName: "Nom *",
      firstNamePlaceholder: "Votre prénom",
      lastNamePlaceholder: "Votre nom",
      emailPlaceholder: "votre.email@exemple.com",
      phonePlaceholder: "+237 6XX XX XX XX",
      subject: "Objet *",
      subjectPlaceholder: "Objet de votre demande",
      message: "Message *",
      messagePlaceholder: "Décrivez votre situation ou votre demande...",
      sendMessage: "Envoyer le message",
      disclaimer:
        "* Champs obligatoires. Vos données sont traitées de manière confidentielle conformément à notre politique de confidentialité.",
      alertThanks:
        "Merci pour votre message. Nous vous contacterons dans les plus brefs délais.",
      mapTitlePrefix: "Localisation ",
    },
  },
  en: {
    common: {
      bookAppointment: "Book an appointment",
      readMore: "Learn more",
      loading: "Loading...",
      allRightsReserved: "All rights reserved.",
    },
    nav: {
      home: "Home",
      services: "Services",
      team: "Team",
      caseStudies: "Our Successes",
      news: "News",
      contact: "Contact",
    },
    footer: {
      brandDescription:
        "Your trusted legal partner in Yaoundé, providing excellent legal services for over 20 years.",
      quickLinks: "Quick links",
      ourServices: "Our services",
      ourTeam: "Our team",
      ourCaseStudies: "Our successes",
      news: "News",
      contact: "Contact",
      hours: "Opening hours",
    },
    home: {
      heroTitle: "Legal excellence serving your ambitions",
      heroSubtitle:
        "A leading law firm in Yaoundé, supporting businesses and individuals with expertise and dedication for over 20 years.",
      ctaDiscoverServices: "Explore our services",
      statsYears: "Years of experience",
      statsClients: "Satisfied clients",
      statsLawyers: "Expert lawyers",
      statsSuccessRate: "Success rate",
      expertiseTitle: "Our areas of expertise",
      expertiseSubtitle: "Comprehensive expertise to meet all your legal needs",
      whyTitle: "Why choose Cabinet Excellence?",
      whyPoint1: "Highly qualified and experienced lawyers",
      whyPoint2: "Personalized approach tailored to each client",
      whyPoint3: "Exceptional availability and responsiveness",
      whyPoint4: "Recognized expertise in all areas of law",
      whyPoint5: "International network of legal partners",
      whyPoint6: "Transparent and competitive fees",
      ourTeamAlt: "Our team",
      needAdvice: "Need legal advice?",
      contactToday:
        "Contact us today for a personalized consultation. Our team is ready to assist you.",
      bookNow: "Book an appointment now",
      serviceBusiness: "Business law",
      serviceCivil: "Civil law",
      serviceLabor: "Labor law",
      serviceTax: "Tax law",
      serviceCriminal: "Criminal law",
      serviceArbitration: "Arbitration & Mediation",
      serviceBusinessDesc:
        "Legal advice, company formation, commercial contracts and M&A.",
      serviceCivilDesc:
        "Family law, inheritance, real estate and civil litigation.",
      serviceLaborDesc:
        "Employment contracts, dismissals, collective bargaining and labor disputes.",
      serviceTaxDesc:
        "Tax optimization, tax litigation and corporate tax advisory.",
      serviceCriminalDesc:
        "Criminal defense, corporate criminal law and victim support.",
      serviceArbitrationDesc:
        "Alternative dispute resolution and representation in international arbitration.",
    },
    services: {
      heroTitle: "Our areas of practice",
      heroSubtitle:
        "Comprehensive and recognized legal expertise to support businesses and individuals in all their projects and legal challenges.",
      ctaTitle: "Need specific expertise?",
      ctaSubtitle:
        "Contact us to discuss your situation. We will find the legal solution tailored to your needs.",
    },
    team: {
      heroTitle: "Our team of experts",
      heroSubtitle:
        "Passionate and highly qualified lawyers, dedicated to defending your interests with excellence and integrity.",
      specialties: "Specialties",
      education: "Education",
      languages: "Languages",
      meetExperts: "Meet our experts",
      meetExpertsSubtitle:
        "Book a meeting with the lawyer who best fits your legal needs.",
      phone: "Phone",
    },
    news: {
      heroTitle: "Legal news",
      heroSubtitle:
        "Stay informed about the latest legislative, regulatory and case-law developments in Cameroon and the CEMAC zone.",
      featured: "Featured",
      readFull: "Read the full article →",
      readMore: "Read more →",
      stayInformed: "Stay informed",
      newsletterSubtitle:
        "Subscribe to our newsletter to receive our legal insights and updates directly in your inbox.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
    },
    article: {
      notFound: "Article not found",
      notFoundDesc:
        "The article you are looking for does not exist or has been deleted.",
      backToNews: "Back to news",
      share: "Share",
      writtenBy: "Written by",
      relatedArticles: "Related articles",
      needHelp: "Need legal advice?",
      needHelpDesc:
        "Our team of experts is available to assist you with your legal matters.",
      linkCopied: "Link copied to clipboard",
      shareError: "Unable to share the link",
    },
    caseStudy: {
      notFound: "Success story not found",
      notFoundDesc:
        "The success story you are looking for does not exist or has been deleted.",
      backToCaseStudies: "Back to success stories",
      share: "Share",
      overview: "Overview",
      theChallenge: "The challenge",
      ourSolution: "Our solution",
      theResult: "The result",
      moreSuccess: "More success stories",
      needHelp: "Need legal assistance?",
      needHelpDesc:
        "Entrust us with your case and benefit from our recognized expertise.",
    },
    caseStudies: {
      heroTitle: "Our successes",
      heroSubtitle:
        "Discover how we helped our clients overcome their most complex legal challenges with success and professionalism.",
      statsWon: "Cases won",
      statsRate: "Success rate",
      statsClients: "Satisfied clients",
      statsRecovered: "FCFA recovered",
      client: "Client",
      challenge: "Challenge",
      solution: "Solution",
      result: "Result",
      testimonials: "What our clients say",
    },
    contact: {
      heroTitle: "Contact us",
      heroSubtitle:
        "Our team is available to answer your questions and support you with your legal matters.",
      detailsTitle: "Our contact details",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Opening hours",
      emergencyTitle: "Legal emergency?",
      emergencySubtitle:
        "For urgent situations requiring immediate action, contact our emergency line.",
      emergencyButton: "Emergency line",
      formTitle: "Send us a message",
      formSubtitle:
        "Fill out the form below and we will get back to you within 24 hours.",
      firstName: "First name *",
      lastName: "Last name *",
      firstNamePlaceholder: "Your first name",
      lastNamePlaceholder: "Your last name",
      emailPlaceholder: "your.email@example.com",
      phonePlaceholder: "+237 6XX XX XX XX",
      subject: "Subject *",
      subjectPlaceholder: "Subject of your request",
      message: "Message *",
      messagePlaceholder: "Describe your situation or request...",
      sendMessage: "Send message",
      disclaimer:
        "* Required fields. Your data is processed confidentially in accordance with our privacy policy.",
      alertThanks:
        "Thank you for your message. We will get back to you shortly.",
      mapTitlePrefix: "Location ",
    },
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("locale") as Locale | null)
        : null;
    if (saved === "fr" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const t = useCallback(
    (path: string) => {
      const [ns, key] = path.split(".");
      const value = (messages[locale] as any)?.[ns]?.[key];
      if (typeof value === "string") return value;
      // Fallback to FR, then to the key itself
      const frValue = (messages["fr"] as any)?.[ns]?.[key];
      return typeof frValue === "string" ? frValue : key;
    },
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function getDateLocaleTag(locale: Locale): string {
  return locale === "en" ? "en-US" : "fr-FR";
}
