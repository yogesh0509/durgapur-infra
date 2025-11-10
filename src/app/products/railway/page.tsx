'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Train } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/lib/data/products.json"

export default function RailwayCastingPage() {
  const product = manufacturingData.products.find(p => p.id === 'railway-casting')!
  const railwayData = productsData.railway

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <AnimatedText>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
              <Train className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {product.description}
            </p>
          </AnimatedText>
        </div>

        {/* Brake Blocks Section */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              BRAKE BLOCKS
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left - Description */}
            <AnimatedText delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  High-quality cast iron brake blocks engineered for locomotive and freight car braking systems. 
                  Manufactured to meet stringent railway standards with consistent performance and durability.
                </p>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    Our brake blocks are designed for optimal friction characteristics, heat dissipation, 
                    and extended service life in demanding railway applications.
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* Right - Main Image */}
            <AnimatedText delay={0.2}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={railwayData.products.find(p => p.id.includes('brake'))?.image || "/images/dippl/railway/brake-blocks.jpg"}
                  alt="Brake Blocks"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedText>
          </div>

          {/* Brake Block Products Grid */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {railwayData.products
              .filter(item => item.id.includes('brake'))
              .map((item, index) => (
                <AnimatedText key={item.id} delay={0.1 + index * 0.05}>
                  <Link href={`/products/railway/${item.id}`}>
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
          </div> */}

          <div className="text-center">
            <AnimatedText>
              <Button asChild size="lg">
                <Link href="/products/railway/brake-block">
                  EXPLORE BRAKE BLOCKS <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Section>

        {/* Counter Weights Section */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              COUNTER WEIGHTS
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left - Main Image */}
            <AnimatedText>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={railwayData.products.find(p => p.id.includes('weight'))?.image || "/images/dippl/railway/counter-weights.jpg"}
                  alt="Counter Weights"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedText>

            {/* Right - Description */}
            <AnimatedText delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Precision-manufactured counter weights for locomotive balance and optimal weight distribution. 
                  Critical components ensuring stable operation and enhanced performance of railway systems.
                </p>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    Engineered with precise specifications to meet railway industry standards, 
                    providing reliable weight distribution solutions for various locomotive configurations.
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* Counter Weight Products Grid */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {railwayData.products
              .filter(item => item.id.includes('weight'))
              .map((item, index) => (
                <AnimatedText key={item.id} delay={0.1 + index * 0.05}>
                  <Link href={`/products/railway/${item.id}`}>
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
          </div> */}

          <div className="text-center">
            <AnimatedText>
              <Button asChild size="lg">
                <Link href="/products/railway/counter-weight">
                  EXPLORE COUNTER WEIGHTS <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center bg-secondary/5 rounded-lg p-8">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
              Railway Casting Solutions
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Our railway castings are designed to meet the demanding requirements of modern rail infrastructure. 
              Contact us for custom solutions and technical specifications.
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