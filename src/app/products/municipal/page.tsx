'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Building2, CheckCircle, Shield, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MunicipalCastingPage() {
  const product = manufacturingData.products.find(p => p.id === 'municipal-casting')!

  const applications = [
    {
      title: "Manhole Covers & Frames",
      description: "Heavy-duty covers designed for traffic loads and harsh weather conditions",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Drainage Grates",
      description: "Corrosion-resistant grates for efficient water drainage systems",
      icon: <Building2 className="w-8 h-8 text-primary" />
    },
    {
      title: "Utility Access Covers",
      description: "Secure access points for underground utilities and services",
      icon: <Wrench className="w-8 h-8 text-primary" />
    }
  ]

  const specifications = [
    "IS Standard compliant manufacturing",
    "High-grade ductile iron construction",
    "Corrosion-resistant coating",
    "Load-bearing capacity up to 40 tonnes",
    "Weather-resistant finish",
    "Custom sizes and specifications available"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <AnimatedText>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
              {product.title}
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {product.description}
            </p>
          </AnimatedText>
        </div>

        {/* Product Image */}
        <div className="mb-12">
          <AnimatedText>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/dippl/municipal/manhole-covers.jpg"
                alt="Municipal Castings"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Applications */}
        <Section className="mb-12">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-8 text-center">
              Applications
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <AnimatedText key={app.title} delay={index * 0.1}>
                <div className="bg-background rounded-lg p-6 border border-border/20 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    {app.icon}
                  </div>
                  <h3 className="font-display text-lg mb-3">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Specifications */}
        <Section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedText>
              <h2 className="font-display text-2xl sm:text-3xl font-light mb-6">
                Product Specifications
              </h2>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </AnimatedText>

            <AnimatedText>
              <div className="bg-secondary/5 rounded-lg p-6">
                <h3 className="font-display text-lg mb-4">Quality Standards</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="text-sm font-medium">Material Grade</span>
                    <span className="text-sm text-muted-foreground">Ductile Iron Grade 450-12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="text-sm font-medium">Tensile Strength</span>
                    <span className="text-sm text-muted-foreground">450 MPa (min)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="text-sm font-medium">Elongation</span>
                    <span className="text-sm text-muted-foreground">12% (min)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="text-sm font-medium">Hardness</span>
                    <span className="text-sm text-muted-foreground">150-250 HB</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium">Coating</span>
                    <span className="text-sm text-muted-foreground">Bituminous Paint</span>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Section>

        {/* Features */}
        <Section className="mb-12">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-8 text-center">
              Key Features
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <AnimatedText key={index} delay={index * 0.1}>
                <div className="bg-background rounded-lg p-4 border border-border/20">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center bg-secondary/5 rounded-lg p-8">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
              Need Municipal Castings?
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Our engineering team can provide custom solutions for your municipal infrastructure needs. 
              Contact us for detailed specifications and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/contact">
                  Request Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
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
