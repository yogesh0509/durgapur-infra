'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Train, CheckCircle, Shield, Zap, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RailwayCastingPage() {
  const product = manufacturingData.products.find(p => p.id === 'railway-casting')!

  const applications = [
    {
      title: "Locomotive Components",
      description: "Critical components for locomotive engines and drive systems",
      icon: <Train className="w-8 h-8 text-primary" />
    },
    {
      title: "Track Infrastructure",
      description: "Durable castings for railway track support and alignment systems",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Signal Equipment",
      description: "Precision castings for railway signaling and communication systems",
      icon: <Zap className="w-8 h-8 text-primary" />
    }
  ]

  const specifications = [
    "Railway specification compliant manufacturing",
    "High-strength ductile iron construction",
    "Vibration and shock resistance",
    "Weather-resistant coating for outdoor use",
    "Custom designs for specific applications",
    "Quality certified for railway use"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Train className="w-10 h-10 text-primary" />
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
                src="/images/dippl/railway/locomotive-parts.jpg"
                alt="Railway Castings"
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
                <h3 className="font-display text-xl mb-6">Railway Standards</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Material Grade</span>
                    <span className="text-muted-foreground">Ductile Iron Grade 500-7</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Tensile Strength</span>
                    <span className="text-muted-foreground">500 MPa (min)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Impact Resistance</span>
                    <span className="text-muted-foreground">High</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/20">
                    <span className="font-medium">Fatigue Strength</span>
                    <span className="text-muted-foreground">Excellent</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Certification</span>
                    <span className="text-muted-foreground">Railway Approved</span>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Section>

        {/* Safety & Quality */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Safety & Quality Standards
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Safety Certified",
                description: "All components meet railway safety standards and regulations",
                icon: <Shield className="w-8 h-8 text-accent" />
              },
              {
                title: "Quality Testing",
                description: "Comprehensive testing for durability and performance",
                icon: <CheckCircle className="w-8 h-8 text-accent" />
              },
              {
                title: "Vibration Resistance",
                description: "Engineered to withstand continuous vibration and stress",
                icon: <Zap className="w-8 h-8 text-accent" />
              },
              {
                title: "Custom Solutions",
                description: "Tailored designs for specific railway applications",
                icon: <Settings className="w-8 h-8 text-accent" />
              }
            ].map((standard, index) => (
              <AnimatedText key={standard.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                    {standard.icon}
                  </div>
                  <h3 className="font-display text-lg mb-3">{standard.title}</h3>
                  <p className="text-sm text-muted-foreground">{standard.description}</p>
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
              Railway Casting Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our railway castings are designed to meet the most demanding requirements of modern rail infrastructure. 
              Contact us for custom solutions and competitive pricing.
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
