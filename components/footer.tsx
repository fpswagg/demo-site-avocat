"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useI18n } from "@/components/i18n-provider";

export function Footer() {
  const { t, locale } = useI18n();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <img
                src="/logo.png"
                alt={siteConfig.name[locale]}
                className="h-8 w-8 rounded-sm object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder-logo.png";
                }}
              /> */}
              <span className="font-serif text-xl font-semibold">
                {siteConfig.name[locale]}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t("footer.brandDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t("footer.ourServices")}
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t("footer.ourTeam")}
                </Link>
              </li>
              <li>
                <Link
                  href="/reussites"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t("footer.ourCaseStudies")}
                </Link>
              </li>
              <li>
                <Link
                  href="/actualites"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {t("footer.news")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  {siteConfig.address.street[locale]}
                  <br />
                  {siteConfig.address.district[locale]}
                  <br />
                  {siteConfig.address.city[locale]},{" "}
                  {siteConfig.address.country[locale]}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {siteConfig.contact.phone}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {siteConfig.contact.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {t("footer.hours")}
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{siteConfig.hours.weekdays[locale]}</li>
              <li>{siteConfig.hours.saturday[locale]}</li>
              <li>{siteConfig.hours.sunday[locale]}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.facebook}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; 2025 {siteConfig.name[locale]}.{" "}
            {t("common.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
