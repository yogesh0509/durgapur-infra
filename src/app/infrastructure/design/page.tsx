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

  const designTools = [
    {
      title: "CAD Design Systems",
      description: "Advanced computer-aided design software for precise modeling",
      icon: <PenTool className="w-8 h-8 text-primary" />
    },
    {
      title: "Simulation Capabilities",
      description: "Finite element analysis and casting simulation software",
      icon: <Cpu className="w-8 h-8 text-primary" />
    },
    {
      title: "3D Modeling",
      description: "Comprehensive 3D modeling for visualization and prototyping",
      icon: <Layers className="w-8 h-8 text-primary" />
    },
    {
      title: "Design Review",
      description: "Collaborative design review and approval processes",
      icon: <Monitor className="w-8 h-8 text-primary" />
    }
  ]

  const designProcess = [
    {
      step: "Requirements Analysis",
      description: "Understanding customer specifications and application requirements"
    },
    {
      step: "Conceptual Design",
      description: "Initial design concepts and feasibility studies"
    },
    {
      step: "CAD Modeling",
      description: "Detailed 3D modeling and technical drawings"
    },
    {
      step: "Simulation & Analysis",
      description: "Finite element analysis and casting simulation"
    },
    {
      step: "Design Optimization",
      description: "Iterative improvement based on simulation results"
    },
    {
      step: "Final Design Approval",
      description: "Customer approval and final design documentation"
    }
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <PenTool className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {infrastructure.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {infrastructure.description}
            </p>
          </AnimatedText>
        </div>

        {/* Design Studio Image */}
        <div className="mb-16">
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

        {/* Design Tools */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Design Tools & Technologies
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTools.map((tool, index) => (
              <AnimatedText key={tool.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{tool.title}</h3>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Design Process */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Design & Development Process
            </h2>
          </AnimatedText>
          
          <div className="space-y-6">
            {designProcess.map((step, index) => (
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

        {/* Capabilities */}
        <Section className="mb-16">
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Design Capabilities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Custom Design</h3>
                  <p className="text-muted-foreground">Tailored solutions for specific applications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Simulation</h3>
                  <p className="text-muted-foreground">Advanced casting simulation and analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Prototyping</h3>
                  <p className="text-muted-foreground">Rapid prototyping and testing capabilities</p>
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

        {/* Design Services */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Design Services
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Concept Development",
              "3D CAD Modeling",
              "Simulation & Analysis",
              "Design Optimization",
              "Technical Documentation",
              "Design Validation",
              "Prototype Development",
              "Design Consultation"
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
              Innovative Design Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our design and development infrastructure enables us to create innovative casting solutions 
              tailored to your specific requirements. Partner with us for cutting-edge design excellence.
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
