'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Shield, TestTube, Award } from "lucide-react"
import Link from "next/link"

export default function QualityPage() {
  const qualitySections = [
    {
      id: 'assurance',
      title: 'Quality Assurance',
      description: 'Comprehensive quality control processes ensuring excellence at every stage',
      icon: <Shield className="w-12 h-12 text-primary" />,
      href: '/quality/assurance'
    },
    {
      id: 'laboratory',
      title: 'Our Laboratory',
      description: 'Advanced testing facilities for chemical, mechanical, and microstructure analysis',
      icon: <TestTube className="w-12 h-12 text-primary" />,
      href: '/quality/laboratory'
    },
    {
      id: 'certifications',
      title: 'Certifications',
      description: 'ISO certified operations ensuring international quality standards',
      icon: <Award className="w-12 h-12 text-primary" />,
      href: '/quality/certifications'
    }
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
            Quality Excellence
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality excellence is reflected in every aspect of our operations, 
            from raw material inspection to final product delivery.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualitySections.map((section, index) => (
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
              Quality First Approach
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Quality is not just a department at DIPL—it's a fundamental principle that guides 
              every decision and action throughout our organization.
            </p>
            <Button asChild>
              <Link href="/contact">
                Request Quality Information <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}
