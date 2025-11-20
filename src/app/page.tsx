'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ProjectCard } from "@/components/ui/project-card"
import { projects, services, processSteps, brandValues, manufacturingData } from "@/lib/data"
import { Layout } from "@/components/layout/layout"
import { ArrowRight, ArrowUpRight, MessageCircle, Ruler, PenTool, Hammer, CheckCircle, Target, Cog, Award, Users, Building2, Train } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import React from "react"

export default function Home() {
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHero(window.scrollY < window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  const processIcons: Record<string, React.ReactElement> = {
    MessageCircle: <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    PenTool: <PenTool className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Ruler: <Ruler className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Hammer: <Hammer className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    CheckCircle: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  }

  return (
    <Layout isOverHero={isHero}>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden py-12 sm:py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dippl/manufacturing/foundry-facility.png"
            alt="Durgapur Infra Projects Manufacturing Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        {/* Content */}
        <div className="container relative z-10 text-white text-center flex flex-col items-center justify-center px-4">
          <AnimatedText className="mb-4 sm:mb-6" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 leading-tight">
              {manufacturingData.brandName}
            </h1>
          </AnimatedText>
          <AnimatedText className="mb-6 sm:mb-8" delay={0.4}>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl sm:max-w-2xl mx-auto">
              {manufacturingData.tagline}
            </p>
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto mt-4">
              {manufacturingData.description}
            </p>
          </AnimatedText>
          <AnimatedText delay={0.6}>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                <Link href="/products">
                  Request a Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/infrastructure">
                  View Infrastructure <ArrowUpRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <Section
        title="Our Products"
        subtitle="Precision-engineered ductile iron castings for diverse industrial applications—each product meets the highest quality standards."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10 sm:mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/products">
              View All Products <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </Section>
      
      {/* Process Section */}
      <Section
        title="Our Manufacturing Process"
        subtitle="From consultation to delivery—each step ensures precision, quality, and customer satisfaction in every casting."
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 sm:mt-12">
          {processSteps.map((step, index) => (
            <AnimatedText key={step.id} delay={index * 0.1}>
              <div className="text-center flex flex-col items-center px-2 py-6 bg-background rounded-xl shadow-sm h-full">
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    {processIcons[step.icon]}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-[2px] bg-primary/20" />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-display mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-secondary/5 text-center">
        <AnimatedText>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
            Partner with DIPL for Quality Casting Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
          From municipal and sanitary infrastructure to railway components, we specialize in precision-engineered ductile iron castings built to the highest industry standards. Get in touch to discuss your project requirements.          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                Get Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedText>
      </Section>
    </Layout>
  )
}