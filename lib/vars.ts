export const env = {
  NEXT_PUBLIC_SITE_NAME:
    process.env.NEXT_PUBLIC_SITE_NAME || "Cabinet Juridique Excellence",
  NEXT_PUBLIC_ADDRESS_STREET:
    process.env.NEXT_PUBLIC_ADDRESS_STREET || "Avenue Kennedy",
  NEXT_PUBLIC_ADDRESS_DISTRICT:
    process.env.NEXT_PUBLIC_ADDRESS_DISTRICT || "Quartier Bastos",
  NEXT_PUBLIC_ADDRESS_CITY: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Yaoundé",
  NEXT_PUBLIC_ADDRESS_COUNTRY:
    process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "Cameroun",
  NEXT_PUBLIC_PHONE: process.env.NEXT_PUBLIC_PHONE || "+237 6 XX XX XX XX",
  NEXT_PUBLIC_PHONE_SECONDARY:
    process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+237 2 XX XX XX XX",
  NEXT_PUBLIC_EMAIL:
    process.env.NEXT_PUBLIC_EMAIL || "contact@cabinet-excellence.cm",
  NEXT_PUBLIC_EMAIL_SECONDARY:
    process.env.NEXT_PUBLIC_EMAIL_SECONDARY || "info@cabinet-excellence.cm",
  NEXT_PUBLIC_EMERGENCY_PHONE:
    process.env.NEXT_PUBLIC_EMERGENCY_PHONE || "+237 6 XX XX XX XX",
  NEXT_PUBLIC_HOURS_WEEKDAYS:
    process.env.NEXT_PUBLIC_HOURS_WEEKDAYS || "Lundi - Vendredi: 8h00 - 18h00",
  NEXT_PUBLIC_HOURS_SATURDAY:
    process.env.NEXT_PUBLIC_HOURS_SATURDAY || "Samedi: 9h00 - 13h00",
  NEXT_PUBLIC_HOURS_SUNDAY:
    process.env.NEXT_PUBLIC_HOURS_SUNDAY || "Dimanche: Fermé",
  NEXT_PUBLIC_SOCIAL_FACEBOOK: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "#",
  NEXT_PUBLIC_SOCIAL_LINKEDIN: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "#",
  NEXT_PUBLIC_SOCIAL_TWITTER: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || "#",
  NEXT_PUBLIC_MAP_EMBED_URL:
    process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7158!2d11.5174!3d3.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDAuMCJOIDExwrAzMScwMi43IkU!5e0!3m2!1sfr!2scm!4v1234567890",
} as const;

export type PublicEnv = typeof env;
