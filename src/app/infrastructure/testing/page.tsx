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

  const strengthEquipment = [
    {
      title: "Universal Testing Machine",
      description: "40-tonne capacity computerized, digital universal testing machine for tensile, yield and elongation testing",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Hardness Testing",
      description: "Brinell hardness testing machine for material hardness verification and quality assurance",
      icon: <Award className="w-8 h-8 text-primary" />
    },
    {
      title: "Load Testing Machine",
      description: "100-tonne capacity load testing machine for comprehensive strength analysis",
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      title: "Mould and Core Hardness Tester",
      description: "Specialized equipment for testing mould and core hardness to ensure casting quality",
      icon: <TestTube className="w-8 h-8 text-primary" />
    }
  ]

  const microscopyEquipment = [
    {
      title: "Metallurgical Microscope",
      description: "Metallurgical microscope with image analyser for detailed microstructure examination",
      icon: <Microscope className="w-8 h-8 text-primary" />
    },
    {
      title: "Spectrometer Analysis",
      description: "Spectrometer with necessary polishing machine for sampling and wet lab for chemical analysis",
      icon: <TestTube className="w-8 h-8 text-primary" />
    }
  ]

  const sandTestingEquipment = [
    {
      title: "Green Comprehensive Sand Testing Machine",
      description: "Advanced equipment for comprehensive green sand testing and quality control"
    },
    {
      title: "Digital Compatibility Sand Tester",
      description: "Precision digital sand compatibility testing for optimal mould quality"
    },
    {
      title: "Digital Sand Siever",
      description: "Automated digital sand sieving for particle size analysis"
    },
    {
      title: "Digital Sand Moisture Testing",
      description: "Accurate moisture content measurement for sand preparation"
    },
    {
      title: "Digital Permeability Tester",
      description: "Sand permeability testing for gas venting and casting quality assurance"
    }
  ]

  const specializedEquipment = [
    "Pull-out and tilt test machine",
    "Coating thickness tester",
    "Muffle furnace",
    "Precision weighing scale",
    "Raw material inspection equipment"
  ]

  const certifications = [
    "ISO 9001:2015 quality system assurance certification",
    "BSI Kitemark EN124:2015 for international product compliance",
    "Quality and continuous improvement embedded in our culture, processes, recruitment, and training"
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
              Our Laboratory & Testing Facility
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We ensure top-quality manufacturing of products in strict compliance with 
              international standards. Each product undergoes thorough testing to meet required specifications. 
              Our advanced in-house facilities are equipped for sand testing, raw material inspection, chemical 
              analysis, load testing, and comprehensive quality control procedures. From raw material intake to 
              production, quality testing, and final dispatch, every stage is closely overseen by our expert team. 
              Utilizing spectrometers for precise results, we guarantee consistent product reliability and durability, 
              meeting the highest industry standards.
            </p>
          </AnimatedText>
        </div>

        {/* Strength & Hardness Equipment with Images */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Strength and Hardness Testing Equipment
            </h2>
          </AnimatedText>

          {/* Featured Images for Strength Testing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <AnimatedText delay={0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/dippl/manufacturing/testing-1.jpeg"
                  alt="Universal Testing Machine Display"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display text-xl mb-2">Universal Testing Machine</h3>
                    <p className="text-white/90 text-sm">Digital control system for precise testing</p>
                  </div>
                </div>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/dippl/manufacturing/testing-2.jpeg"
                  alt="Computerized Manhole Cover Testing Machine"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display text-xl mb-2">Load Testing Machine</h3>
                    <p className="text-white/90 text-sm">100-tonne capacity for comprehensive analysis</p>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengthEquipment.map((equipment, index) => (
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

        {/* Microscopy & Chemical Analysis with Spectrometer Image */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Microscopy and Chemical Analysis
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <AnimatedText delay={0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group order-2 lg:order-1">
                <Image
                  src="/images/dippl/manufacturing/testing-4.jpeg"
                  alt="Spectrometer for Chemical Analysis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display text-xl mb-2">Spectrometer</h3>
                    <p className="text-white/90 text-sm">Precise chemical composition analysis</p>
                  </div>
                </div>
              </div>
            </AnimatedText>

            <div className="space-y-6 order-1 lg:order-2">
              {microscopyEquipment.map((equipment, index) => (
                <AnimatedText key={equipment.title} delay={index * 0.1 + 0.2}>
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
          </div>
        </Section>

        {/* Specialized Equipment */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Specialized Testing and Laboratory Equipment
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedEquipment.map((equipment, index) => (
              <AnimatedText key={equipment} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{equipment}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section>
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground">{cert}</p>
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