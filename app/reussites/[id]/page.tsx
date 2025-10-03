"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, CheckCircle, Award } from "lucide-react";
import caseStudiesDataFr from "@/data/case-studies.json";
import caseStudiesDataEn from "@/data/case-studies.en.json";
import { useI18n } from "@/components/i18n-provider";

export default function CaseStudyPage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const caseStudiesData =
    locale === "en" ? caseStudiesDataEn : caseStudiesDataFr;
  const caseStudyId = params.id as string;

  const caseStudy = caseStudiesData.find((item) => item.id === caseStudyId);

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            {t("caseStudy.notFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("caseStudy.notFoundDesc")}
          </p>
          <Link href="/reussites">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("caseStudy.backToCaseStudies")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related case studies (same category, excluding current)
  const relatedCaseStudies = caseStudiesData
    .filter(
      (item) => item.category === caseStudy.category && item.id !== caseStudyId
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <Link
              href="/reussites"
              className="hover:text-foreground transition-colors"
            >
              {t("nav.caseStudies")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{caseStudy.title}</span>
          </div>
        </div>
      </section>

      {/* Case Study Header */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/reussites">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("caseStudy.backToCaseStudies")}
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">{caseStudy.category}</Badge>
              <Badge className="bg-accent text-accent-foreground">
                {caseStudy.year}
              </Badge>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {caseStudy.title}
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                {t("caseStudy.share")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <img
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Overview Card */}
            <Card className="mb-8 bg-secondary border-none">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-accent" />
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {t("caseStudy.overview")}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("caseStudies.client")}
                    </h3>
                    <p className="text-muted-foreground">{caseStudy.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("nav.caseStudies")}
                    </h3>
                    <p className="text-muted-foreground">
                      {caseStudy.category}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Challenge */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">1</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {t("caseStudy.theChallenge")}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">2</span>
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    {t("caseStudy.ourSolution")}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* The Result */}
            <div className="mb-12">
              <Card className="bg-primary text-primary-foreground border-none overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-12 w-12 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold mb-4">
                        {t("caseStudy.theResult")}
                      </h2>
                      <p className="text-primary-foreground/90 text-lg leading-relaxed">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Share Section */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {caseStudy.year}
                  </p>
                  <p className="font-semibold text-foreground">
                    {caseStudy.category}
                  </p>
                </div>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  {t("caseStudy.share")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                {t("caseStudy.moreSuccess")}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedCaseStudies.map((related) => (
                  <Card
                    key={related.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <Link href={`/reussites/${related.id}`}>
                      <div className="relative h-[200px]">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground">
                            {related.year}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <Badge variant="outline" className="w-fit mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="font-serif text-xl font-semibold mb-3 line-clamp-2">
                        <Link
                          href={`/reussites/${related.id}`}
                          className="hover:text-accent transition-colors"
                        >
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {related.challenge}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent font-medium">
                        <CheckCircle className="h-4 w-4" />
                        {related.year}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {t("caseStudy.needHelp")}
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              {t("caseStudy.needHelpDesc")}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t("common.bookAppointment")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
