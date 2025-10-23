'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Factory, TestTube, Cpu, PenTool } from "lucide-react"
import Link from "next/link"

export default function InfrastructurePage() {
  const infrastructureSections = [
    {
      id: 'manufacturing',
      title: 'Manufacturing Infrastructure',
      description: 'State-of-the-art production facilities with automated systems',
      icon: <Factory className="w-12 h-12 text-primary" />,
      href: '/infrastructure/manufacturing'
    },
    {
      id: 'testing',
      title: 'Testing & Inspection Infrastructure',
      description: 'Advanced laboratory and quality control systems',
      icon: <TestTube className="w-12 h-12 text-primary" />,
      href: '/infrastructure/testing'
    },
    {
      id: 'it',
      title: 'IT Infrastructure',
      description: 'Digital systems for process monitoring and quality tracking',
      icon: <Cpu className="w-12 h-12 text-primary" />,
      href: '/infrastructure/it'
    },
    {
      id: 'design',
      title: 'Design & Development',
      description: 'CAD-based design and simulation capabilities',
      icon: <PenTool className="w-12 h-12 text-primary" />,
      href: '/infrastructure/design'
    }
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
            Our Infrastructure
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art facilities and advanced systems that enable us to deliver 
            precision-engineered ductile iron castings of the highest quality.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infrastructureSections.map((section, index) => (
            <AnimatedText key={section.id} delay={index * 0.1}>
              <Link href={section.href}>
                <div className="bg-background rounded-lg p-6 border border-border/20 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg mb-2 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {section.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedText>
          ))}
        </div>

        <Section className="text-center mt-12">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
              Investment in Excellence
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our ₹7.38 Crore expansion project will enhance our manufacturing capacity to 7,200 MTPA, 
              ensuring we can meet growing demand while maintaining the highest quality standards.
            </p>
            <Button asChild>
              <Link href="/contact">
                Discuss Your Requirements <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}
