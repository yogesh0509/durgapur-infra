'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/lib/data/products.json"

export default function HardscapePage() {
  const product = manufacturingData.products.find(p => p.id === 'hardscape')!
  const hardscapeData = productsData.hardscape

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <AnimatedText>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {product.description}
            </p>
          </AnimatedText>
        </div>

        {/* Detectable Warning Plates */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              DETECTABLE WARNING PLATES
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left - Description */}
            <AnimatedText delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hardscapeData.sections.detectableWarningPlates.description}
                </p>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    Engineered for high visibility and slip resistance, ensuring accessibility compliance and safety in all public spaces.
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* Right - Main Image */}
            <AnimatedText delay={0.2}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={hardscapeData.sections.detectableWarningPlates.image || "/images/dippl/hardscape/dwp.jpg"}
                  alt="Detectable Warning Plates"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedText>
          </div>

          {/* Explore Button */}
          <div className="text-center">
            <AnimatedText>
              <Button asChild size="lg">
                <Link href="/products/hardscape/detectable-warning-plates">
                  EXPLORE DWP <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Section>

        {/* Tree Grates */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              TREE GRATES
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left - Image */}
            <AnimatedText>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={hardscapeData.sections.treeGrates.image || "/images/dippl/hardscape/tree-grates.jpg"}
                  alt="Tree Grates"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedText>

            {/* Right - Description */}
            <AnimatedText delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hardscapeData.sections.treeGrates.description}
                </p>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    Designed for durability and aesthetic integration with urban landscapes. 
                    Our tree grates protect roots while allowing optimal air and water flow.
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>

          {/* Explore Button */}
          <div className="text-center">
            <AnimatedText>
              <Button asChild size="lg">
                <Link href="/products/hardscape/tree-grates">
                  EXPLORE TREE GRATES <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Section>

        {/* Trench Grates */}
        <Section className="mb-16">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              TRENCH GRATES
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left - Description */}
            <AnimatedText delay={0.1}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hardscapeData.sections.trenchGrates.description}
                </p>
                <div className="bg-secondary/5 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    Built for heavy-duty drainage applications, our trench grates ensure effective water flow 
                    while maintaining load-bearing performance for pedestrian and vehicular areas.
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* Right - Image */}
            <AnimatedText delay={0.2}>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={hardscapeData.sections.trenchGrates.image || "/images/dippl/hardscape/trench-grates.jpg"}
                  alt="Trench Grates"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedText>
          </div>

          {/* Explore Button */}
          <div className="text-center">
            <AnimatedText>
              <Button asChild size="lg">
                <Link href="/products/hardscape/trench-grates">
                  EXPLORE TRENCH GRATES <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="text-center bg-secondary/5 rounded-lg p-8">
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-4">
              Hardscape Solutions for Modern Environments
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Our hardscape products combine strength, functionality, and design to enhance public and urban spaces. 
              Contact us to discuss specifications, customization, or project support.
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
