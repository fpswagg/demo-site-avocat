"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import newsDataFr from "@/data/news.json";
import newsDataEn from "@/data/news.en.json";
import { useI18n, getDateLocaleTag } from "@/components/i18n-provider";

export default function NewsPage() {
  const { t, locale } = useI18n();
  const newsData = locale === "en" ? newsDataEn : newsDataFr;
  // Sort news by date (most recent first)
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(getDateLocaleTag(locale), {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t("news.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("news.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {sortedNews.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[300px] lg:h-auto">
                  <img
                    src={sortedNews[0].image || "/placeholder.svg"}
                    alt={sortedNews[0].title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {t("news.featured")}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {sortedNews[0].category}
                  </Badge>
                  <CardTitle className="font-serif text-3xl md:text-4xl mb-4 text-balance">
                    {sortedNews[0].title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {sortedNews[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(sortedNews[0].date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {sortedNews[0].author}
                    </div>
                  </div>
                  <Link
                    href={`/actualites/${sortedNews[0].id}`}
                    className="text-accent hover:underline font-medium"
                  >
                    {t("news.readFull")}
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.slice(1).map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-[200px]">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-serif text-xl line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  <Link
                    href={`/actualites/${article.id}`}
                    className="text-accent hover:underline font-medium text-sm"
                  >
                    {t("news.readMore")}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {t("news.stayInformed")}
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              {t("news.newsletterSubtitle")}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("news.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-md text-foreground bg-background border-0 focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors"
              >
                {t("news.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
