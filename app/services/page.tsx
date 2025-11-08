"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Briefcase,
  FileText,
  Building,
  Gavel,
  Shield,
} from "lucide-react";
import { useI18n } from "@/components/i18n-provider";
import servicesFr from "@/data/services.json";
import servicesEn from "@/data/services.en.json";

const iconMap = {
  Briefcase,
  Users,
  FileText,
  TrendingUp,
  Shield,
  Gavel,
  Building,
  Award,
} as const;

export default function ServicesPage() {
  const { t, locale } = useI18n();
  const services = locale === "en" ? servicesEn : servicesFr;
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("services.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("services.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12">
            {services.map((service: any, index: number) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader className="bg-secondary/50 pb-6 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-accent/15 rounded-xl group-hover:bg-accent/25 transition-colors">
                      {IconComponent ? (
                        <IconComponent className="h-8 w-8 text-accent" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-2xl md:text-3xl mb-2 text-foreground">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground shadow-inner relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t("services.ctaTitle")}
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("services.ctaSubtitle")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link href="/contact">{t("common.bookAppointment")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
