"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { useI18n } from "@/components/i18n-provider";

const navItemsStatic = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/equipe", key: "team" },
  { href: "/reussites", key: "caseStudies" },
  { href: "/actualites", key: "news" },
  { href: "/contact", key: "contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo image with graceful fallback */}
            <img
              src="/logo.png"
              alt={siteConfig.name[locale]}
              className="h-8 w-8 rounded-sm object-contain transition-transform group-hover:scale-110"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder-logo.png";
              }}
            />
            <span className="font-serif text-xl font-semibold text-foreground">
              {siteConfig.name[locale]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItemsStatic.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">{t("common.bookAppointment")}</Link>
            </Button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLocale("fr")}
                className={cn(
                  "text-xs px-2 py-1 rounded border",
                  locale === "fr"
                    ? "border-accent text-accent"
                    : "border-border text-foreground/70"
                )}
              >
                FR
              </button>
              <button
                onClick={() => setLocale("en")}
                className={cn(
                  "text-xs px-2 py-1 rounded border",
                  locale === "en"
                    ? "border-accent text-accent"
                    : "border-border text-foreground/70"
                )}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItemsStatic.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("common.bookAppointment")}
                </Link>
              </Button>
              <div className="flex gap-2">
                <button
                  onClick={() => setLocale("fr")}
                  className={cn(
                    "flex-1 text-xs px-2 py-2 rounded border",
                    locale === "fr"
                      ? "border-accent text-accent"
                      : "border-border text-foreground/70"
                  )}
                >
                  FR
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "flex-1 text-xs px-2 py-2 rounded border",
                    locale === "en"
                      ? "border-accent text-accent"
                      : "border-border text-foreground/70"
                  )}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
