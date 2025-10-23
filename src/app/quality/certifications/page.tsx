'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Award, Shield, CheckCircle, FileText, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CertificationsPage() {
  const quality = manufacturingData.quality.certifications

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality and customer satisfaction",
      icon: <Award className="w-8 h-8 text-primary" />,
      scope: "Quality Management Systems"
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System certification for sustainable manufacturing practices",
      icon: <Globe className="w-8 h-8 text-primary" />,
      scope: "Environmental Management"
    },
    {
      title: "Railway Standards",
      description: "Compliance with Indian Railway specifications for railway component manufacturing",
      icon: <Shield className="w-8 h-8 text-primary" />,
      scope: "Railway Applications"
    },
    {
      title: "IS Standards",
      description: "Adherence to Indian Standard specifications for ductile iron castings",
      icon: <FileText className="w-8 h-8 text-primary" />,
      scope: "Indian Standards"
    }
  ]

  const certificationBenefits = [
    "Enhanced customer confidence and trust",
    "Improved operational efficiency",
    "Reduced environmental impact",
    "Compliance with international standards",
    "Continuous improvement culture",
    "Better risk management",
    "Increased market competitiveness",
    "Quality assurance for customers"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {quality.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {quality.description}
            </p>
          </AnimatedText>
        </div>

        {/* Certifications Image */}
        <div className="mb-16">
          <AnimatedText>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dippl/manufacturing/certifications.jpg"
                alt="Quality Certifications"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* Certifications */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Our Certifications
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedText key={cert.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl mb-2">{cert.title}</h3>
                      <p className="text-sm text-accent font-medium mb-2">{cert.scope}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{cert.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Certification Benefits */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Benefits of Our Certifications
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationBenefits.map((benefit, index) => (
              <AnimatedText key={benefit} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Certification Timeline */}
        <Section className="mb-16">
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Certification Timeline & Renewal
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Initial Certification</h3>
                  <p className="text-muted-foreground">Rigorous assessment and audit process</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Annual Surveillance</h3>
                  <p className="text-muted-foreground">Regular monitoring and compliance verification</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Recertification</h3>
                  <p className="text-muted-foreground">Comprehensive renewal every 3 years</p>
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

        {/* Quality Standards */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Quality Standards & Compliance
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ISO 9001:2015",
              "ISO 14001:2015",
              "IS 1865:1991",
              "Railway Standards",
              "ASTM Standards",
              "BS Standards",
              "Customer Specifications",
              "Regulatory Compliance"
            ].map((standard, index) => (
              <AnimatedText key={standard} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg">{standard}</h3>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Certified Quality Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our certifications demonstrate our commitment to quality, environmental responsibility, 
              and continuous improvement. Partner with us for certified quality assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Certificate Copies <ArrowRight className="ml-2" />
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
