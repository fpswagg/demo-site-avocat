"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/config"

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/equipe", label: "Équipe" },
  { href: "/reussites", label: "Nos Réussites" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scale className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl font-semibold text-foreground">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
