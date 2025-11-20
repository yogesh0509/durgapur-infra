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
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {product.description}
            </p>
          </AnimatedText>
        </div>

        {/* Ductile Iron Bollards */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              BOLLARDS
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left - Description */}
            <AnimatedText delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bollards.sections["ductile iron"].description}
                </p>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    Engineered for maximum durability and impact resistance, our ductile iron bollards provide reliable protection
                    for high-security applications while maintaining an elegant aesthetic.
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* Right - Main Image */}
            <AnimatedText delay={0.2}>
              <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg relative bg-white flex items-center justify-center">
                <Image
                  src="/images/dippl/bollards/bollards-1.webp"
                  alt="Ductile Iron Bollards"
                  fill
                  className="object-contain"
                />
              </div>
            </AnimatedText>
          </div>

          {/* Explore Button */}
          <div className="text-center">
            <AnimatedText>
              <Button asChild size="lg">
                <Link href="/products/bollards/ductile-iron">
                  EXPLORE BOLLARDS <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Section>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {bollards.sections["ductile iron"].products
            .map((item, index) => (
              <AnimatedText key={item.code} delay={0.1 + index * 0.05}>
                <Link href={`/products/bollards/${item.code.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="bg-background rounded-lg p-3 border border-border/20 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
                    <div className="relative aspect-square mb-2 rounded overflow-hidden bg-secondary/10">
                      <Image
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium mb-1 line-clamp-2">{item.code}</p>
                    <p className="text-xs text-muted-foreground">Contact for pricing</p>
                  </div>
                </Link>
              </AnimatedText>
            ))}
        </div>

        {/* CTA Section */}
        <Section className="text-center bg-secondary/5 rounded-lg p-8">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
              Security Solutions for Every Application
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Our bollards combine superior strength, precision engineering, and aesthetic design to protect
              critical infrastructure and public spaces. Contact us to discuss specifications or custom solutions.
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