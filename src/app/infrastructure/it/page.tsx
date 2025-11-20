'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Cpu, Database, BarChart3, CheckCircle, Monitor } from "lucide-react"
import Link from "next/link"

export default function ITInfrastructurePage() {
  const infrastructure = manufacturingData.infrastructure.it

  const itSystems = [
    {
      title: "Order Tracking System",
      description: "Transparent order tracking lets customers monitor shipments in real-time, building trust, managing expectations, and ensuring timely deliveries with up-to-date status information.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />
    },
    {
      title: "Production Management System (PMS)",
      description: "Optimizes production, scheduling, and resource allocation. Real-time monitoring identifies bottlenecks, ensures quality control, and provides data-driven insights for continuous improvement and decision-making.",
      icon: <Monitor className="w-8 h-8 text-primary" />
    },
    {
      title: "Inventory Management System (IMS)",
      description: "Real-time stock level tracking for raw materials and finished products. Prevents overstocking or stockouts, enhances order accuracy, supporting timely deliveries and better cash flow management.",
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      title: "CRM System",
      description: "Dedicated CRM system ensures efficient client communication, offering timely updates and support. Simplifies issue resolution, allowing clients to easily track orders and access real-time information, strengthening customer satisfaction and long-term relationships.",
      icon: <BarChart3 className="w-8 h-8 text-primary" />
    },
    {
      title: "Secure Network",
      description: "Secure network protects data from unauthorized access, ensuring confidentiality across production, logistics, and client communications, maintaining operational integrity.",
      icon: <Cpu className="w-8 h-8 text-primary" />
    },
    {
      title: "Cloud-Based Data Management",
      description: "Cloud-based services for centralized, real-time data access, enhancing collaboration and operational efficiency across departments, regardless of location.",
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      title: "Data Backup and Recovery",
      description: "Robust backup and disaster recovery system protects critical business data, ensuring continuity and minimizing downtime. Safeguards against potential technical failures, preserving important information for uninterrupted operations.",
      icon: <Cpu className="w-8 h-8 text-primary" />
    }
  ]

  const certifications = [
    "ISO 9001:2015 certification for quality management",
    "BSI Kitemark EN124-2:2015 for international standards compliance",
    "ISO 45001:2018 for occupational health and safety",
    "ISO 14001:2015 for environmental management",
    "Accredited by TÜV SÜD"
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {infrastructure.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We've implemented advanced management systems to ensure seamless operations and 
              compliance with international standards. These systems are key pillars of the company's infrastructure, 
              allowing it to operate efficiently across various departments.
            </p>
          </AnimatedText>
        </div>

        {/* IT Systems */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Management Systems & Technologies
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
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Certifications
              </h2>
              
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
            </AnimatedText>
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
              Experience the benefits of digital manufacturing with DIPL.
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
