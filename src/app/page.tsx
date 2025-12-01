'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ProjectCard } from "@/components/ui/project-card"
import { projects, processSteps, manufacturingData } from "@/lib/data"
import { Layout } from "@/components/layout/layout"
import { ArrowRight, ArrowUpRight, MessageCircle, Ruler, PenTool, Hammer, CheckCircle, MapPin, Building2, ClipboardCheck, Package, PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { useEffect, useState } from "react"
import React from "react"
import { motion } from "framer-motion"

const faqItems = [
  {
    question: "What makes Durgapur Infra Projects Pvt. Ltd. a preferred ductile iron casting partner?",
    answer: "We combine a 7,200 MTPA ductile iron facility in Durgapur with spectrometer testing, pattern development, and logistics support to deliver consistent municipal and railway-grade castings."
  },
  {
    question: "Which industries do you serve?",
    answer: "Our core focus spans municipal infrastructure, metro rail, industrial OEMs, automobile suppliers, and hardscape developers seeking durable ductile iron components."
  },
  {
    question: "Can you support custom designs or short production runs?",
    answer: "Yes. Our engineering team collaborates on CAD/CAM, tooling, and rapid prototyping to match unique load, sealing, or branding requirements without compromising lead times."
  },
  {
    question: "How do I engage the team for a new project?",
    answer: "Share drawings, load data, or reference samples via info@durgapurinfra.co.in or call +91-9609969999. We respond with feasibility, lead time, and pricing tailored to your scope."
  }
]

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }

  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {/* Add your custom static card here */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/images/dippl/municipal-casting/2.jpg"
                alt="Manhole Covers"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-display text-xl mb-2">Manhole Covers</h3>
                </div>
              </div>
            </div>
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
        <Section className="bg-secondary/5">
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src="/images/1.jpg"
                  alt="Casting Solutions"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
                  Why Partner with DIPL for Quality Casting Solutions?
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Manufacturing Excellence:</strong> From municipal and sanitary infrastructure
                    components to complex railway parts, we specialize in
                    precision-engineered ductile iron castings. All products are
                    manufactured in our in-house units and built to meet the most
                    stringent industry standards.
                  </p>

                  <p>
                    <strong>Consultation & Sourcing:</strong> Beyond manufacturing, we offer expert
                    partnership and consultation services. We help you navigate the
                    Indian foundry landscape to source high-quality castings from the
                    best manufacturers in the country.
                  </p>

                  <p>
                    <strong>Your One-Step Solution for Indian Casting Requirements</strong>
                  </p>

                  <p>
                    Get in touch with us today to discuss your project requirements and
                    receive a comprehensive, single-point solution for all your casting
                    needs from India.
                  </p>
                </div>

                <div className="pt-4">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get Quote <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

      </Layout>

      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  )
}