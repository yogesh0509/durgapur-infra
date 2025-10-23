'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Cog, CheckCircle, Gauge, Thermometer, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IngotMouldsPage() {
  const product = manufacturingData.products.find(p => p.id === 'ingot-moulds')!

  const applications = [
    {
      title: "Steel Ingot Moulds",
      description: "High-precision moulds for steel ingot casting with excellent dimensional stability",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "Centre Columns",
      description: "Robust centre columns for ingot mould assembly and alignment",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Custom Moulds",
      description: "Specialized moulds designed for specific metallurgical requirements",
      icon: <Gauge className="w-8 h-8 text-primary" />
    }
  ]

  const specifications = [
    "Metallurgical grade cast iron construction",
    "Precision-machined surfaces for dimensional accuracy",
    "Heat-resistant design for high-temperature applications",
    "Extended service life with minimal wear",
    "Custom dimensions and configurations",
    "IS Standard compliant manufacturing"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Cog className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {product.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {product.description}
            </p>
          </AnimatedText>
        </div>

        {/* Product Image */}
        <div className="mb-16">
          <AnimatedText>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dippl/metallurgical/ingot-moulds.jpg"
                alt="Cast Iron Ingot Moulds"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Applications */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Applications
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <AnimatedText key={app.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                    {app.icon}
                  </div>
                  <h3 className="font-display text-xl mb-4">{app.title}</h3>
                  <p className="text-muted-foreground">{app.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Specifications */}
        <Section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8">
                Product Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </AnimatedText>

            <AnimatedText>
              <div className="bg-secondary/5 rounded-xl p-8">
                <h3 className="font-display text-xl mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Material</span>
                    <span className="text-muted-foreground">Gray Cast Iron</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Working Temperature</span>
                    <span className="text-muted-foreground">Up to 1600°C</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Surface Finish</span>
                    <span className="text-muted-foreground">Machined Ra 3.2</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Dimensional Tolerance</span>
                    <span className="text-muted-foreground">±0.5mm</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Service Life</span>
                    <span className="text-muted-foreground">500+ Cycles</span>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Section>

        {/* Manufacturing Process */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Manufacturing Excellence
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Precision Casting",
                description: "Advanced green sand molding process ensures dimensional accuracy",
                icon: <Cog className="w-8 h-8 text-primary" />
              },
              {
                title: "Quality Control",
                description: "Rigorous testing and inspection at every stage",
                icon: <CheckCircle className="w-8 h-8 text-primary" />
              },
              {
                title: "Heat Treatment",
                description: "Controlled annealing for optimal material properties",
                icon: <Thermometer className="w-8 h-8 text-primary" />
              },
              {
                title: "Final Inspection",
                description: "Comprehensive quality checks before dispatch",
                icon: <Gauge className="w-8 h-8 text-primary" />
              }
            ].map((process, index) => (
              <AnimatedText key={process.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    {process.icon}
                  </div>
                  <h3 className="font-display text-lg mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Key Features
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <AnimatedText key={index} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center bg-secondary/5 rounded-xl p-12">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Need Custom Ingot Moulds?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our metallurgical expertise allows us to manufacture ingot moulds and centre columns 
              to your exact specifications. Contact us for detailed technical discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">
                  View All Products <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}
