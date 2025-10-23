'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { services } from "@/lib/data"
import { MessageCircle, Home, Building } from "lucide-react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-10 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Holistic, soulful, and personalized design solutions—crafted to elevate your everyday living.
          </p>
        </AnimatedText>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                {service.icon === 'MessageCircle' && <MessageCircle className="h-7 w-7 text-primary" />}
                {service.icon === 'Home' && <Home className="h-7 w-7 text-primary" />}
                {service.icon === 'Building' && <Building className="h-7 w-7 text-primary" />}
              </div>
              {/* Service Content */}
              <h2 className="font-display text-lg sm:text-2xl mb-2 sm:mb-4">{service.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Action Button */}
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href="/contact">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center py-10 sm:py-16">
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
              <Link href="/prodcuts">
                View Our Work
              </Link>
            </Button>
          </div>
        </AnimatedText>
      </Section>
    </Layout>
  )
} 