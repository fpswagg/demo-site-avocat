"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import newsDataFr from "@/data/news.json";
import newsDataEn from "@/data/news.en.json";
import { useI18n, getDateLocaleTag } from "@/components/i18n-provider";
import { useToast } from "@/hooks/use-toast";

export default function ArticlePage() {
  const params = useParams();
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const { toast } = useToast();
  const newsData = locale === "en" ? newsDataEn : newsDataFr;
  const articleId = params.id as string;

  const article = newsData.find((item) => item.id === articleId);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(getDateLocaleTag(locale), {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            {t("article.notFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("article.notFoundDesc")}
          </p>
          <Link href="/actualites">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("article.backToNews")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = newsData
    .filter(
      (item) => item.category === article.category && item.id !== articleId
    )
    .slice(0, 3);

  const handleShare = async () => {
    try {
      const url = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";
      const shareData: ShareData = {
        title: article.title,
        text: article.excerpt || article.title,
        url,
      };
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        toast({ description: t("article.linkCopied") });
      }
    } catch (err) {
      const url = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";
      try {
        await navigator.clipboard.writeText(url);
        toast({ description: t("article.linkCopied") });
      } catch {
        toast({ description: t("article.shareError") });
      }
    }
  };

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
              href="/actualites"
              className="hover:text-foreground transition-colors"
            >
              {t("nav.news")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/actualites">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("article.backToNews")}
              </Button>
            </Link>

            <div>
            <Badge variant="outline" className="mb-4">
              {article.category}
            </Badge>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {article.author}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                {t("article.share")}
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
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Excerpt */}
            <div className="mb-8 p-6 bg-secondary rounded-lg border-l-4 border-accent">
              <p className="text-lg leading-relaxed text-foreground font-medium">
                {article.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("article.writtenBy")}
                  </p>
                  <p className="font-semibold text-foreground">
                    {article.author}
                  </p>
                </div>
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  {t("article.share")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                {t("article.relatedArticles")}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Card
                    key={relatedArticle.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    <Link href={`/actualites/${relatedArticle.id}`}>
                      <div className="relative h-[200px]">
                        <img
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <Badge variant="outline" className="w-fit mb-3">
                        {relatedArticle.category}
                      </Badge>
                      <h3 className="font-serif text-xl font-semibold mb-3 line-clamp-2">
                        <Link
                          href={`/actualites/${relatedArticle.id}`}
                          className="hover:text-accent transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(relatedArticle.date)}
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
              {t("article.needHelp")}
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              {t("article.needHelpDesc")}
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
