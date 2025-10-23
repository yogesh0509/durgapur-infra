'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { processSteps } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Search, Palette, Settings, CheckCircle } from "lucide-react"

export default function ProcessPage() {
  const processStepIcons: Record<string, React.ReactElement> = {
    Search: <Search className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Palette: <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Settings: <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    CheckCircle: <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-10 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Our Process
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            A mindful, collaborative journey—each step designed to bring your vision to life with intention and care.
          </p>
        </AnimatedText>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center relative">
                  {processStepIcons[step.icon]}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs sm:text-sm font-medium">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-display text-lg sm:text-2xl mb-2 sm:mb-4">{step.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Process */}
      <Section className="bg-steel py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-4xl mb-2 sm:mb-4">Why Our Process Works</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Each step is carefully designed to ensure your vision is understood, refined, and beautifully executed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl mb-2 sm:mb-3">Collaborative Approach</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We work closely with you at every stage, ensuring your ideas and feedback shape the final design. Your input is invaluable to creating a space that truly reflects your personality and needs.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl mb-2 sm:mb-3">Quality Assurance</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Every detail is carefully reviewed and refined. We maintain high standards throughout the process, from initial concepts to final installation, ensuring exceptional results.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl mb-2 sm:mb-3">Timely Delivery</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We understand the importance of deadlines and work efficiently to deliver your project on time without compromising on quality or attention to detail.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-lg sm:text-xl mb-2 sm:mb-3">Sustainable Practices</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We prioritize eco-friendly materials and sustainable design practices, creating beautiful spaces that are environmentally conscious and built to last.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-4xl mb-2 sm:mb-4">Project Timeline</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            A typical project timeline to help you understand what to expect from start to finish.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />
            {[
              { phase: "Discovery & Planning", duration: "1-2 weeks", description: "Initial consultation, site visit, and project planning" },
              { phase: "Design Development", duration: "2-4 weeks", description: "Concept creation, 3D visualizations, and design refinement" },
              { phase: "Final Approval", duration: "1 week", description: "Final design approval and material selection" },
              { phase: "Implementation", duration: "4-12 weeks", description: "Construction, installation, and finishing touches" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center mb-8 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
              >
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                  <div className="bg-background rounded-xl p-4 shadow-sm">
                    <h3 className="font-display text-base sm:text-lg mb-1 sm:mb-2">{item.phase}</h3>
                    <p className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">{item.duration}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-steel text-center py-10 sm:py-16">
        <AnimatedText>
          <h2 className="font-display text-2xl sm:text-4xl mb-4 sm:mb-6">
            Begin Your Journey to a Soulful Space
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8">
            Let us help you create a sanctuary that resonates with your soul. Whether you have a vision or seek inspiration, omeraa Studio is here to guide you—every step, with intention and care.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/products">
                View Our Work
              </Link>
            </Button>
          </div>
        </AnimatedText>
      </Section>
    </Layout>
  )
} 