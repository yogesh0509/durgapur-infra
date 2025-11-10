'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/lib/data/products.json"

export default function BollardsPage() {
  const product = manufacturingData.products.find(p => p.id === 'bollards')!
  const bollards = productsData.bollards
  const ductileIron = bollards.sections["ductile iron"]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <AnimatedText>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
              {bollards.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {bollards.description}
            </p>
          </AnimatedText>
        </div>

        {/* Ductile Iron Bollards */}
        <Section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedText>
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={ductileIron.image || "/images/placeholder.jpg"}
                  alt="Ductile Iron Bollards"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedText>

            <div className="space-y-6">
              <AnimatedText delay={0.1}>
                <div className="bg-secondary/5 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {ductileIron.description}
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <Button asChild size="lg" className="w-full">
                  <Link href="/products/bollards/ductile-iron">
                    EXPLORE DUCTILE IRON BOLLARDS <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </AnimatedText>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center bg-secondary/5 rounded-lg p-8">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
              Need Custom Bollards?
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Our team can design and manufacture bollards tailored to your specific requirements.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}
