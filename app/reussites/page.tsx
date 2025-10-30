"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";
import caseStudiesDataFr from "@/data/case-studies.json";
import caseStudiesDataEn from "@/data/case-studies.en.json";
import testimonialsFr from "@/data/testimonials.json";
import testimonialsEn from "@/data/testimonials.en.json";
import { useI18n } from "@/components/i18n-provider";

export default function CaseStudiesPage() {
  const { t, locale } = useI18n();
  const caseStudiesData =
    locale === "en" ? caseStudiesDataEn : caseStudiesDataFr;
  const testimonials = locale === "en" ? testimonialsEn : testimonialsFr;
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("caseStudies.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("caseStudies.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                number: "500+",
                label: t("caseStudies.statsWon"),
              },
              {
                icon: TrendingUp,
                number: "95%",
                label: t("caseStudies.statsRate"),
              },
              {
                icon: Users,
                number: "300+",
                label: t("caseStudies.statsClients"),
              },
              {
                icon: Award,
                number: "50M+",
                label: t("caseStudies.statsRecovered"),
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-serif font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12">
            {caseStudiesData.map((caseStudy, index) => (
              <Card
                key={caseStudy.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-[300px] lg:h-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        {caseStudy.year}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent
                    className={`p-8 lg:p-12 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <Badge variant="outline" className="mb-4">
                      {caseStudy.category}
                    </Badge>

                    <CardTitle className="font-serif text-2xl md:text-3xl mb-4 text-balance">
                      {caseStudy.title}
                    </CardTitle>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-accent">•</span>{" "}
                          {t("caseStudies.client")}
                        </h3>
                        <p className="text-muted-foreground pl-5">
                          {caseStudy.client}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-accent">•</span>{" "}
                          {t("caseStudies.challenge")}
                        </h3>
                        <p className="text-muted-foreground pl-5 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-accent">•</span>{" "}
                          {t("caseStudies.solution")}
                        </h3>
                        <p className="text-muted-foreground pl-5 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />{" "}
                          {t("caseStudies.result")}
                        </h3>
                        <p className="text-foreground pl-7 leading-relaxed font-medium">
                          {caseStudy.result}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            {t("caseStudies.testimonials")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-foreground">
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
