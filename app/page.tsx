import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=elegant+law+office+interior+with+books)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance animate-fade-in-up">
              Excellence juridique au service de vos ambitions
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Cabinet d'avocats de premier plan à Yaoundé, nous accompagnons entreprises et particuliers avec expertise
              et dévouement depuis plus de 20 ans.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Années d'expérience" },
              { number: "500+", label: "Clients satisfaits" },
              { number: "15", label: "Avocats experts" },
              { number: "95%", label: "Taux de réussite" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expertise complète pour répondre à tous vos besoins juridiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Droit des affaires",
                description: "Conseil juridique, création de sociétés, contrats commerciaux et fusions-acquisitions.",
              },
              {
                icon: Users,
                title: "Droit civil",
                description: "Droit de la famille, successions, immobilier et litiges civils.",
              },
              {
                icon: Award,
                title: "Droit du travail",
                description: "Contrats de travail, licenciements, négociations collectives et contentieux prud'homaux.",
              },
              {
                icon: TrendingUp,
                title: "Droit fiscal",
                description: "Optimisation fiscale, contentieux fiscal et conseil en fiscalité d'entreprise.",
              },
              {
                icon: CheckCircle,
                title: "Droit pénal",
                description: "Défense pénale, droit pénal des affaires et assistance aux victimes.",
              },
              {
                icon: Scale,
                title: "Arbitrage & Médiation",
                description: "Résolution alternative des conflits et représentation en arbitrage international.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent"
              >
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-medium"
                  >
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Pourquoi choisir Cabinet Excellence ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Notre engagement envers l'excellence et notre approche personnalisée font de nous le partenaire
                juridique idéal pour vos projets.
              </p>
              <ul className="space-y-4">
                {[
                  "Équipe d'avocats hautement qualifiés et expérimentés",
                  "Approche personnalisée adaptée à chaque client",
                  "Disponibilité et réactivité exceptionnelles",
                  "Expertise reconnue dans tous les domaines du droit",
                  "Réseau international de partenaires juridiques",
                  "Tarifs transparents et compétitifs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img src="/professional-african-lawyers-team.jpg" alt="Notre équipe" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 lg:p-16 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
                Besoin d'un conseil juridique ?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour une consultation personnalisée. Notre équipe est prête à vous
                accompagner.
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Prendre rendez-vous maintenant</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
