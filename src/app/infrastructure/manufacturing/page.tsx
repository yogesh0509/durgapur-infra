'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Factory, Cog, Zap, Settings, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ManufacturingInfrastructurePage() {
  const infrastructure = manufacturingData.infrastructure.manufacturing

  const equipment = [
    {
      title: "Automated Molding Lines",
      description: "Semi-automatic green sand molding systems for precision and efficiency",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Induction Furnaces",
      description: "High-capacity furnaces for efficient melting of pig iron and scrap",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Shot Blasting Units",
      description: "Advanced surface preparation and cleaning equipment",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "Fettling Operations",
      description: "Precision fettling and grinding systems for final finishing",
      icon: <Settings className="w-8 h-8 text-primary" />
    }
  ]

  const processSteps = [
    {
      step: "Raw Material Preparation",
      description: "Pig iron, steel scrap, and foundry returns are prepared and weighed"
    },
    {
      step: "Melting Process",
      description: "Materials are melted in induction furnaces at controlled temperatures"
    },
    {
      step: "Treatment & Inoculation",
      description: "Magnesium treatment and ferro silicon inoculation for ductile iron properties"
    },
    {
      step: "Molding & Pouring",
      description: "Green sand molds are prepared and molten metal is poured"
    },
    {
      step: "Cooling & Knockout",
      description: "Controlled cooling followed by removal of castings from molds"
    },
    {
      step: "Finishing Operations",
      description: "Fettling, grinding, shot blasting, and surface treatment"
    }
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Factory className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {infrastructure.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {infrastructure.description}
            </p>
          </AnimatedText>
        </div>

        {/* Facility Image */}
        <div className="mb-16">
          <AnimatedText>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dippl/manufacturing/foundry-facility.jpg"
                alt="Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Equipment & Systems */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Equipment & Systems
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <AnimatedText key={item.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Manufacturing Process */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Manufacturing Process
            </h2>
          </AnimatedText>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <AnimatedText key={step.step} delay={index * 0.1}>
                <div className="flex items-start space-x-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl mb-2">{step.step}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Key Features */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Key Features
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.features.map((feature, index) => (
              <AnimatedText key={index} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Capacity & Expansion */}
        <Section className="mb-16">
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Current Capacity & Expansion
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">7,200</div>
                  <div className="text-muted-foreground">MTPA Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">₹7.38</div>
                  <div className="text-muted-foreground">Crore Investment</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">April 2025</div>
                  <div className="text-muted-foreground">Expansion Completion</div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Section>

        {/* Utilities */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Utilities & Support Systems
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(manufacturingData.utilities).map(([key, value], index) => (
              <AnimatedText key={key} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg mb-3 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Partner with Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our state-of-the-art manufacturing infrastructure ensures consistent quality and timely delivery. 
              Contact us to discuss your casting requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/infrastructure">
                  View All Infrastructure <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}
