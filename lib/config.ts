export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Cabinet Juridique Excellence",
  address: {
    street: process.env.NEXT_PUBLIC_ADDRESS_STREET || "Avenue Kennedy",
    district: process.env.NEXT_PUBLIC_ADDRESS_DISTRICT || "Quartier Bastos",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Yaoundé",
    country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "Cameroun",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || "+237 6 XX XX XX XX",
    phoneSecondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+237 2 XX XX XX XX",
    email: process.env.NEXT_PUBLIC_EMAIL || "contact@cabinet-excellence.cm",
    emailSecondary: process.env.NEXT_PUBLIC_EMAIL_SECONDARY || "info@cabinet-excellence.cm",
    emergencyPhone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE || "+237 6 XX XX XX XX",
  },
  hours: {
    weekdays: process.env.NEXT_PUBLIC_HOURS_WEEKDAYS || "Lundi - Vendredi: 8h00 - 18h00",
    saturday: process.env.NEXT_PUBLIC_HOURS_SATURDAY || "Samedi: 9h00 - 13h00",
    sunday: process.env.NEXT_PUBLIC_HOURS_SUNDAY || "Dimanche: Fermé",
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "#",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "#",
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || "#",
  },
  map: {
    embedUrl:
      process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7158!2d11.5174!3d3.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDAuMCJOIDExwrAzMScwMi43IkU!5e0!3m2!1sfr!2scm!4v1234567890",
  },
}
