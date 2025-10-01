import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react"
import caseStudiesData from "@/data/case-studies.json"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Nos réussites
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Découvrez comment nous avons aidé nos clients à surmonter leurs défis juridiques les plus complexes avec
              succès et professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, number: "500+", label: "Affaires gagnées" },
              { icon: TrendingUp, number: "95%", label: "Taux de réussite" },
              { icon: Users, number: "300+", label: "Clients satisfaits" },
              { icon: Award, number: "50M+", label: "FCFA récupérés" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-serif font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
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
              <Card key={caseStudy.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-[300px] lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">{caseStudy.year}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <Badge variant="outline" className="mb-4">
                      {caseStudy.category}
                    </Badge>

                    <CardTitle className="font-serif text-2xl md:text-3xl mb-4 text-balance">
                      {caseStudy.title}
                    </CardTitle>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-accent">•</span> Client
                        </h3>
                        <p className="text-muted-foreground pl-5">{caseStudy.client}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-accent">•</span> Défi
                        </h3>
                        <p className="text-muted-foreground pl-5 leading-relaxed">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="text-accent">•</span> Solution
                        </h3>
                        <p className="text-muted-foreground pl-5 leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" /> Résultat
                        </h3>
                        <p className="text-foreground pl-7 leading-relaxed font-medium">{caseStudy.result}</p>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Cabinet Excellence a géré notre fusion avec un professionnalisme exceptionnel. Leur expertise nous a fait économiser des millions.",
                author: "Directeur Général, Groupe Bancaire",
              },
              {
                quote:
                  "Grâce à Maître Ndiaye, j'ai pu résoudre un conflit familial qui durait depuis des années. Son empathie et sa compétence sont remarquables.",
                author: "Client particulier",
              },
              {
                quote:
                  "L'équipe fiscale du cabinet nous a sauvés d'un redressement catastrophique. Leur connaissance du droit fiscal est impressionnante.",
                author: "PDG, Groupe Industriel",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
