'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, TestTube, Microscope, Zap, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LaboratoryPage() {
  const quality = manufacturingData.quality.laboratory

  const labEquipment = [
    {
      title: "Chemical Analysis",
      description: "Advanced spectrometer for precise elemental composition analysis",
      icon: <TestTube className="w-8 h-8 text-primary" />
    },
    {
      title: "Mechanical Testing",
      description: "Universal testing machines for tensile, compression, and impact testing",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Microstructure Analysis",
      description: "Metallographic microscopes for grain structure and quality assessment",
      icon: <Microscope className="w-8 h-8 text-primary" />
    },
    {
      title: "Hardness Testing",
      description: "Multiple hardness testing machines for surface and bulk hardness measurement",
      icon: <Award className="w-8 h-8 text-primary" />
    }
  ]

  const testingCapabilities = [
    "Chemical composition analysis (C, Si, Mn, P, S, Mg)",
    "Tensile strength and yield strength testing",
    "Elongation and reduction of area measurement",
    "Hardness testing (Brinell, Rockwell, Vickers)",
    "Impact testing (Charpy, Izod)",
    "Microstructure examination and grain size analysis",
    "Non-destructive testing (NDT) capabilities",
    "Dimensional measurement and tolerance verification"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <TestTube className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {quality.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {quality.description}
            </p>
          </AnimatedText>
        </div>

        {/* Laboratory Equipment */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Laboratory Equipment
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labEquipment.map((equipment, index) => (
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

        {/* Testing Capabilities */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Testing Capabilities
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingCapabilities.map((capability, index) => (
              <AnimatedText key={capability} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Laboratory Standards */}
        {/* <Section>
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Laboratory Standards & Accreditations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">ISO 17025</h3>
                  <p className="text-muted-foreground">Laboratory testing competence certification</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">NABL Accreditation</h3>
                  <p className="text-muted-foreground">National accreditation for testing laboratories</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">IS Standards</h3>
                  <p className="text-muted-foreground">Compliance with Indian Standard testing methods</p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Section> */}

        {/* Key Features */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Key Features
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quality.features.map((feature, index) => (
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

        {/* Laboratory Services */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Laboratory Services
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Material Testing",
              "Chemical Analysis",
              "Mechanical Testing",
              "Metallography",
              "Hardness Testing",
              "NDT Services",
              "Failure Analysis",
              "Quality Certification"
            ].map((service, index) => (
              <AnimatedText key={service} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg">{service}</h3>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Advanced Testing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our state-of-the-art laboratory provides comprehensive testing services to ensure 
              the highest quality standards. Contact us for detailed testing reports and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Testing Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/quality">
                  View All Quality Information <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}
