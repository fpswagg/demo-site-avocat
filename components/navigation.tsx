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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo image with graceful fallback */}
            <img
              src="/logo.png"
              alt={siteConfig.name[locale]}
              className="h-11 w-11 rounded object-contain transition-all duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder-logo.png";
              }}
            />
            <span className="font-serif text-xl lg:text-2xl font-bold text-foreground tracking-tight">
              {siteConfig.name[locale]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Navigation Links */}
            <div className="flex items-center gap-2 mr-6">
              {navItemsStatic.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 px-5 py-2.5 rounded-md transition-all duration-200 relative group"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-border mx-3" />

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button asChild size="default" className="shadow-sm px-6">
                <Link href="/contact">{t("common.bookAppointment")}</Link>
              </Button>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-1 ml-2 p-1 rounded-md bg-secondary/30">
                <button
                  onClick={() => setLocale("fr")}
                  className={cn(
                    "text-xs font-medium px-4 py-2 rounded transition-all duration-200",
                    locale === "fr"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  FR
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "text-xs font-medium px-4 py-2 rounded transition-all duration-200",
                    locale === "en"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-foreground hover:bg-secondary/50 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-8 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-3">
              {/* Navigation Links */}
              {navItemsStatic.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 px-5 py-3.5 rounded-md transition-all duration-200"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              
              {/* Divider */}
              <div className="h-px bg-border my-3" />
              
              {/* CTA Button */}
              <Button asChild className="w-full shadow-sm" size="lg">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("common.bookAppointment")}
                </Link>
              </Button>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-2 mt-3 p-1.5 rounded-md bg-secondary/30">
                <button
                  onClick={() => setLocale("fr")}
                  className={cn(
                    "flex-1 text-sm font-medium px-4 py-3 rounded transition-all duration-200",
                    locale === "fr"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  Français
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "flex-1 text-sm font-medium px-4 py-3 rounded transition-all duration-200",
                    locale === "en"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
