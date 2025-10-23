'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Cpu, Database, BarChart3, CheckCircle, Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ITInfrastructurePage() {
  const infrastructure = manufacturingData.infrastructure.it

  const itSystems = [
    {
      title: "ERP Integration",
      description: "Enterprise resource planning system for seamless operations management",
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      title: "Process Monitoring",
      description: "Real-time monitoring of manufacturing processes and equipment",
      icon: <Monitor className="w-8 h-8 text-primary" />
    },
    {
      title: "Quality Tracking",
      description: "Digital quality management system for comprehensive tracking",
      icon: <BarChart3 className="w-8 h-8 text-primary" />
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics for process optimization and quality improvement",
      icon: <Cpu className="w-8 h-8 text-primary" />
    }
  ]

  const digitalCapabilities = [
    "Real-time production monitoring",
    "Automated quality data collection",
    "Digital work order management",
    "Inventory tracking and management",
    "Performance analytics and reporting",
    "Predictive maintenance scheduling",
    "Customer portal for order tracking",
    "Integration with supplier systems"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {infrastructure.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {infrastructure.description}
            </p>
          </AnimatedText>
        </div>

        {/* IT Infrastructure Image */}
        <div className="mb-16">
          <AnimatedText>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dippl/manufacturing/it-infrastructure.jpg"
                alt="IT Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedText>
        </div>

        {/* IT Systems */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              IT Systems & Technologies
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itSystems.map((system, index) => (
              <AnimatedText key={system.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {system.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{system.title}</h3>
                      <p className="text-muted-foreground">{system.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Digital Capabilities */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Digital Capabilities
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalCapabilities.map((capability, index) => (
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

        {/* Benefits */}
        <Section className="mb-16">
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Digital Transformation Benefits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Improved Efficiency</h3>
                  <p className="text-muted-foreground">Streamlined processes and reduced manual errors</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Real-time Visibility</h3>
                  <p className="text-muted-foreground">Complete visibility into production and quality metrics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground">Analytics-driven insights for continuous improvement</p>
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

        {/* Technology Stack */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Technology Stack
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "ERP Systems",
              "IoT Sensors",
              "Cloud Computing",
              "Data Analytics",
              "Mobile Applications",
              "API Integration",
              "Cybersecurity",
              "Backup Systems"
            ].map((tech, index) => (
              <AnimatedText key={tech} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg">{tech}</h3>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Digital Excellence in Manufacturing
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our advanced IT infrastructure ensures operational excellence and customer satisfaction. 
              Experience the benefits of digital manufacturing with DIPPL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Requirements <ArrowRight className="ml-2" />
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
