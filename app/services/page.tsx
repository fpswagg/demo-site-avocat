import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, TrendingUp, CheckCircle, Briefcase, FileText, Building, Gavel, Shield } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Droit des affaires",
    description: "Accompagnement juridique complet pour les entreprises",
    details: [
      "Création et structuration de sociétés",
      "Rédaction et négociation de contrats commerciaux",
      "Fusions, acquisitions et restructurations",
      "Droit des sociétés et gouvernance d'entreprise",
      "Propriété intellectuelle et protection des marques",
      "Contentieux commercial",
    ],
  },
  {
    icon: Users,
    title: "Droit civil",
    description: "Protection de vos intérêts personnels et familiaux",
    details: [
      "Droit de la famille (divorce, garde d'enfants)",
      "Successions et donations",
      "Droit immobilier (vente, location, copropriété)",
      "Responsabilité civile",
      "Contrats entre particuliers",
      "Litiges civils et médiation",
    ],
  },
  {
    icon: FileText,
    title: "Droit du travail",
    description: "Conseil et défense en matière de relations de travail",
    details: [
      "Rédaction de contrats de travail",
      "Procédures de licenciement",
      "Négociations collectives",
      "Contentieux prud'homaux",
      "Harcèlement et discrimination",
      "Audit social et conformité",
    ],
  },
  {
    icon: TrendingUp,
    title: "Droit fiscal",
    description: "Optimisation et conformité fiscale",
    details: [
      "Conseil en fiscalité d'entreprise",
      "Optimisation fiscale légale",
      "Contentieux fiscal et recours",
      "Fiscalité internationale",
      "Contrôles fiscaux et redressements",
      "TVA et taxes indirectes",
    ],
  },
  {
    icon: Shield,
    title: "Droit pénal",
    description: "Défense et assistance en matière pénale",
    details: [
      "Défense pénale (garde à vue, instruction, procès)",
      "Droit pénal des affaires",
      "Assistance aux victimes",
      "Droit pénal routier",
      "Appels et pourvois en cassation",
      "Médiation pénale",
    ],
  },
  {
    icon: Gavel,
    title: "Arbitrage & Médiation",
    description: "Résolution alternative des conflits",
    details: [
      "Arbitrage commercial national et international",
      "Médiation et conciliation",
      "Rédaction de clauses compromissoires",
      "Représentation devant les tribunaux arbitraux",
      "Exécution de sentences arbitrales",
      "Négociation et transaction",
    ],
  },
  {
    icon: Building,
    title: "Droit immobilier",
    description: "Expertise en transactions et contentieux immobiliers",
    details: [
      "Acquisitions et cessions immobilières",
      "Baux commerciaux et d'habitation",
      "Droit de la construction",
      "Copropriété et ASL",
      "Urbanisme et permis de construire",
      "Contentieux immobilier",
    ],
  },
  {
    icon: Award,
    title: "Droit bancaire",
    description: "Conseil en opérations bancaires et financières",
    details: [
      "Contrats de crédit et garanties",
      "Restructuration de dettes",
      "Contentieux bancaire",
      "Recouvrement de créances",
      "Droit des sûretés",
      "Conformité bancaire",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Nos domaines de compétence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Une expertise juridique complète et reconnue pour accompagner entreprises et particuliers dans tous leurs
              projets et défis juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-secondary/50 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-2xl md:text-3xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
            Besoin d'une expertise spécifique ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre situation. Nous trouverons la solution juridique adaptée à vos
            besoins.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
