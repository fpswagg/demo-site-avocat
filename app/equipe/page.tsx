"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, GraduationCap, Languages } from "lucide-react";
import Link from "next/link";
import teamDataFr from "@/data/team.json";
import teamDataEn from "@/data/team.en.json";
import { useI18n } from "@/components/i18n-provider";

export default function TeamPage() {
  const { t, locale } = useI18n();
  const teamData = locale === "en" ? teamDataEn : teamDataFr;
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("team.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("team.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12">
            {teamData.map((member, index) => (
              <Card
                key={member.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`grid lg:grid-cols-5 gap-8 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-2 ${
                      index % 2 === 1 ? "lg:col-start-4" : ""
                    }`}
                  >
                    <div className="relative h-[400px] lg:h-full">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent
                    className={`lg:col-span-3 p-8 lg:p-12 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="mb-4">
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {member.name}
                      </h2>
                      <p className="text-accent font-medium text-lg">
                        {member.role}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        {t("team.specialties")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Education */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-foreground">
                          {t("team.education")}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {member.education.map((edu, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground pl-7"
                          >
                            • {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Languages className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-foreground">
                          {t("team.languages")}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground pl-7">
                        {member.languages.join(", ")}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          Email
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          {t("team.phone")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t("team.meetExperts")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t("team.meetExpertsSubtitle")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">{t("common.bookAppointment")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
