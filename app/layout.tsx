import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { I18nProvider } from "@/components/i18n-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabinet Juridique Excellence | Avocats à Yaoundé",
  description:
    "Cabinet d'avocats de premier plan à Yaoundé, spécialisé en droit des affaires, droit civil et conseil juridique d'entreprise.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`font-sans ${inter.variable} ${crimson.variable} antialiased`}
      >
        <I18nProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Analytics />
          </Suspense>
        </I18nProvider>
      </body>
    </html>
  );
}
