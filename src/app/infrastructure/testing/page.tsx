'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, TestTube, Microscope, Zap, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TestingInfrastructurePage() {
  const infrastructure = manufacturingData.infrastructure.testing

  const testingEquipment = [
    {
      title: "Spectrometer Analysis",
      description: "Advanced chemical composition analysis for precise material verification",
      icon: <TestTube className="w-8 h-8 text-primary" />
    },
    {
      title: "Tensile Testing",
      description: "Mechanical property testing to ensure strength and durability standards",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Hardness Analysis",
      description: "Surface and bulk hardness measurement for quality assurance",
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: "Microstructure Analysis",
      description: "Metallographic examination for grain structure and quality assessment",
      icon: <Microscope className="w-8 h-8 text-primary" />
    }
  ]

  const qualityChecks = [
    "Chemical composition verification",
    "Mechanical property testing",
    "Dimensional accuracy inspection",
    "Surface finish assessment",
    "Hardness measurement",
    "Microstructure analysis",
    "Non-destructive testing",
    "Final quality certification"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <TestTube className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {infrastructure.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {infrastructure.description}
            </p>
          </AnimatedText>
        </div>

        {/* Laboratory Image */}
        <div className="mb-16">
          <AnimatedText>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dippl/manufacturing/testing-lab.jpg"
                alt="Testing & Inspection Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Testing Equipment */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Testing Equipment
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingEquipment.map((equipment, index) => (
              <AnimatedText key={equipment.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {equipment.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{equipment.title}</h3>
                      <p className="text-muted-foreground">{equipment.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Quality Control Process */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Quality Control Process
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityChecks.map((check, index) => (
              <AnimatedText key={check} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{check}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Testing Standards */}
        <Section className="mb-16">
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Testing Standards & Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">ISO Standards</h3>
                  <p className="text-muted-foreground">Compliance with international quality standards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">IS Standards</h3>
                  <p className="text-muted-foreground">Adherence to Indian Standard specifications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Railway Standards</h3>
                  <p className="text-muted-foreground">Specialized testing for railway applications</p>
                </div>
              </div>
            </AnimatedText>
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

        {/* Testing Capabilities */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Testing Capabilities
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Chemical Analysis", description: "Precise elemental composition" },
              { title: "Mechanical Testing", description: "Strength and durability assessment" },
              { title: "Dimensional Inspection", description: "Accuracy and tolerance verification" },
              { title: "Surface Analysis", description: "Finish and coating quality" }
            ].map((capability, index) => (
              <AnimatedText key={capability.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg mb-3">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our comprehensive testing infrastructure ensures every casting meets the highest quality standards. 
              Contact us for detailed quality specifications and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Quality Certificate <ArrowRight className="ml-2" />
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
