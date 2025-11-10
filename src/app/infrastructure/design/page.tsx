'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, PenTool, Cpu, CheckCircle, Layers, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DesignInfrastructurePage() {
  const infrastructure = manufacturingData.infrastructure.design

  const designCapabilities = [
    {
      title: "In-house Product Design Facility",
      description: "To enhance customer service, we have established a strong product design facility. Using advanced software like AutoCAD, Creo Mechanica, and SolidWorks, we streamline design and development, reducing lead times. This ensures precise, detailed designs tailored to each project's specific requirements.",
      icon: <PenTool className="w-8 h-8 text-primary" />
    },
    {
      title: "Expert Product Development Team",
      description: "Our skilled product development team handles complex engineering and planning tasks, collaborating closely with clients to provide cost-effective, customized solutions. From concept to production, we guarantee products meet international standards and exceed client expectations.",
      icon: <Layers className="w-8 h-8 text-primary" />
    }
  ]

  const certifications = [
    "ISO 9001:2015 certification for quality management",
    "BSI Kitemark EN124-2:2015 for international standards compliance",
    "ISO 45001:2018 for occupational health and safety",
    "ISO 14001:2015 for environmental management",
    "Accredited by TÜV SÜD"
  ]

  const designSoftware = [
    "AutoCAD",
    "Creo Mechanica",
    "SolidWorks"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <PenTool className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              Design & Development
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our comprehensive design and development infrastructure enables us to create innovative casting solutions 
              tailored to your specific requirements. Partner with us for cutting-edge design excellence.
            </p>
          </AnimatedText>
        </div>

        {/* Design Studio Image */}
        <div>
          <AnimatedText>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dippl/manufacturing/design-studio.jpg"
                alt="Design & Development Studio"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Design Facilities */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Design Facilities & Expertise
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 gap-8">
            {designCapabilities.map((capability, index) => (
              <AnimatedText key={capability.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Design Software */}
        <Section>
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Advanced Design Software
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {designSoftware.map((software, index) => (
                  <div key={software} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{software}</h3>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </Section>

        {/* Key Features */}
        <Section>
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

        {/* Certifications */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Certifications
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedText key={cert} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Partner with Our Design Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our comprehensive design and development capabilities ensure we can deliver innovative casting solutions 
              that meet your exact specifications. Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Design Needs <ArrowRight className="ml-2" />
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
