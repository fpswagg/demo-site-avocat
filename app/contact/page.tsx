"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useI18n } from "@/components/i18n-provider";

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(t("contact.alertThanks"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("contact.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("contact.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    {t("contact.detailsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.address")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.district}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.phone")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.contact.phone}
                        <br />
                        {siteConfig.contact.phoneSecondary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.email")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.contact.email}
                        <br />
                        {siteConfig.contact.emailSecondary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.hours")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.hours.weekdays}
                        <br />
                        {siteConfig.hours.saturday}
                        <br />
                        {siteConfig.hours.sunday}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {t("contact.emergencyTitle")}
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    {t("contact.emergencySubtitle")}
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href={`tel:${siteConfig.contact.emergencyPhone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {t("contact.emergencyButton")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    {t("contact.formTitle")}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {t("contact.formSubtitle")}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          {t("contact.firstName")}
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.firstNamePlaceholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          {t("contact.lastName")}
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.lastNamePlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contact.phone")} *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.phonePlaceholder")}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("contact.subject")}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.subjectPlaceholder")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.message")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.messagePlaceholder")}
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      {t("contact.sendMessage")}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t("contact.disclaimer")}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="overflow-hidden">
            <div className="relative h-[400px] bg-muted">
              <iframe
                src={siteConfig.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localisation ${siteConfig.name}`}
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
