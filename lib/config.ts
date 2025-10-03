import { env } from "@vars";

import type { LocalizedString } from "./types";

export type SiteConfig = {
  name: LocalizedString;
  address: {
    street: LocalizedString;
    district: LocalizedString;
    city: LocalizedString;
    country: LocalizedString;
  };
  contact: {
    phone: string;
    phoneSecondary: string;
    email: string;
    emailSecondary: string;
    emergencyPhone: string;
  };
  hours: {
    weekdays: LocalizedString;
    saturday: LocalizedString;
    sunday: LocalizedString;
  };
  social: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
  map: {
    embedUrl: string;
  };
};

export const siteConfig = {
  name: JSON.parse(env.NEXT_PUBLIC_SITE_NAME || ""),
  address: {
    street: JSON.parse(env.NEXT_PUBLIC_ADDRESS_STREET || ""),
    district: JSON.parse(env.NEXT_PUBLIC_ADDRESS_DISTRICT || ""),
    city: JSON.parse(env.NEXT_PUBLIC_ADDRESS_CITY || ""),
    country: JSON.parse(env.NEXT_PUBLIC_ADDRESS_COUNTRY || ""),
  },
  contact: {
    phone: env.NEXT_PUBLIC_PHONE,
    phoneSecondary: env.NEXT_PUBLIC_PHONE_SECONDARY,
    email: env.NEXT_PUBLIC_EMAIL,
    emailSecondary: env.NEXT_PUBLIC_EMAIL_SECONDARY,
    emergencyPhone: env.NEXT_PUBLIC_EMERGENCY_PHONE,
  },
  hours: {
    weekdays: JSON.parse(env.NEXT_PUBLIC_HOURS_WEEKDAYS || ""),
    saturday: JSON.parse(env.NEXT_PUBLIC_HOURS_SATURDAY || ""),
    sunday: JSON.parse(env.NEXT_PUBLIC_HOURS_SUNDAY || ""),
  },
  social: {
    facebook: env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
    linkedin: env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    twitter: env.NEXT_PUBLIC_SOCIAL_TWITTER,
  },
  map: {
    embedUrl: env.NEXT_PUBLIC_MAP_EMBED_URL,
  },
} as SiteConfig;
