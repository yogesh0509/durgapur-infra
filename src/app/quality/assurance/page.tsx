'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Shield, CheckCircle, Eye, FileCheck, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function QualityAssurancePage() {
  const quality = manufacturingData.quality.assurance

  const qualityStages = [
    {
      stage: "Raw Material Inspection",
      description: "Comprehensive testing of incoming materials for chemical composition and quality",
      icon: <Eye className="w-8 h-8 text-primary" />
    },
    {
      stage: "Process Monitoring",
      description: "Continuous monitoring of manufacturing processes and parameters",
      icon: <AlertCircle className="w-8 h-8 text-primary" />
    },
    {
      stage: "In-Process Inspection",
      description: "Regular quality checks during production to ensure consistency",
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      stage: "Final Product Testing",
      description: "Comprehensive testing of finished products before dispatch",
      icon: <FileCheck className="w-8 h-8 text-primary" />
    }
  ]

  const qaProcess = [
    {
      step: "Incoming Material Testing",
      description: "Chemical analysis and physical property testing of raw materials"
    },
    {
      step: "Process Parameter Control",
      description: "Monitoring and control of temperature, pressure, and other critical parameters"
    },
    {
      step: "In-Process Quality Checks",
      description: "Regular sampling and testing during production stages"
    },
    {
      step: "Dimensional Inspection",
      description: "Precise measurement and verification of dimensional accuracy"
    },
    {
      step: "Mechanical Testing",
      description: "Tensile strength, hardness, and other mechanical property testing"
    },
    {
      step: "Final Quality Certification",
      description: "Comprehensive quality certification before product dispatch"
    }
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {quality.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {quality.description}
            </p>
          </AnimatedText>
        </div>

        {/* Quality Stages */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Quality Control Stages
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStages.map((stage, index) => (
              <AnimatedText key={stage.stage} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {stage.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{stage.stage}</h3>
                      <p className="text-muted-foreground">{stage.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* QA Process */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Quality Assurance Process
            </h2>
          </AnimatedText>
          
          <div className="space-y-6">
            {qaProcess.map((step, index) => (
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

        {/* Quality Metrics */}
        <Section>
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Quality Metrics & Standards
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
                  <div className="text-muted-foreground">Quality Acceptance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Material Traceability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Quality Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">ISO</div>
                  <div className="text-muted-foreground">Certified Systems</div>
                </div>
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

        {/* Quality Tools */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Quality Tools & Techniques
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Statistical Process Control",
              "Failure Mode Analysis",
              "Root Cause Analysis",
              "Control Charts",
              "Sampling Plans",
              "Calibration Systems",
              "Documentation Control",
              "Corrective Actions"
            ].map((tool, index) => (
              <AnimatedText key={tool} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg">{tool}</h3>
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
              Our comprehensive quality assurance system ensures that every casting meets the highest 
              standards. Contact us for detailed quality specifications and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Quality Certificate <ArrowRight className="ml-2" />
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
