'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { brandValues, manufacturingData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Target, Cog, Award, Users } from "lucide-react"

export default function AboutPage() {
  const brandValueIcons: Record<string, React.ReactElement> = {
    Target: <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Cog: <Cog className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Award: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    Users: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-10 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Our Story
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            {manufacturingData.about.summary}
          </p>
        </AnimatedText>

        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/images/dippl/manufacturing/manufacturing-2.jpeg"
              alt="DIPL Manufacturing Facility"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 text-muted-foreground"
          >
            <h2 className="font-display text-2xl sm:text-3xl mb-2">Our Mission</h2>
            <p>
              At DIPL, we are committed to delivering precision-engineered ductile iron castings that meet the highest industry standards. Through continuous innovation, quality excellence, and customer partnership, we aim to be the preferred supplier for municipal, railway, and metallurgical casting solutions.            </p>
            <p>
              Our commitment extends beyond our own production line. We are dedicated to providing every customer with the perfect casting solution, whether manufactured at our state-of-the-art in-house facility or sourced through our robust network. We actively partner with India's leading manufacturers, leveraging our expertise and rigorous quality standards to ensure your specific requirements are met.
            </p>
            <p>
              DIPL acts as your comprehensive, single-step solution to the entire Indian foundry landscape. We simplify the process of importing and sourcing high-quality castings, ensuring that all your requirements—from specialized production to logistics—are handled seamlessly and efficiently shipped from India.
            </p>
            <p>
              Our mission is to contribute to India's infrastructure development and serve global partners with reliable, durable, and high-performance casting products.            </p>
          </motion.div>
        </div>
      </Section>

      {/* Brand Values */}
      <Section className="bg-secondary/5 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-4xl mb-2 sm:mb-4">Our Values</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            The principles that guide our manufacturing philosophy and ensure quality in every casting we produce.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {brandValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 text-center flex flex-col items-center shadow-sm"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                {brandValueIcons[value.icon]}
              </div>
              <h3 className="font-display text-lg sm:text-xl mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section className="text-center py-10 sm:py-16">
        <AnimatedText>
          <h2 className="font-display text-2xl sm:text-4xl mb-4 sm:mb-6">Our Mission</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            At DIPL, we are committed to delivering precision-engineered ductile iron castings that meet the highest industry standards. Through continuous innovation, quality excellence, and customer partnership, we aim to be the preferred supplier for municipal, railway, and metallurgical casting solutions. Our mission is to contribute to India's infrastructure development with reliable, durable, and high-performance casting products.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Quote <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </AnimatedText>
      </Section>
    </Layout>
  )
} 