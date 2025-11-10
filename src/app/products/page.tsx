'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Building2, Cog, Train } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const productIcons = {
    'municipal': <Building2 className="w-12 h-12 text-primary" />,
    'metallurgical': <Cog className="w-12 h-12 text-primary" />,
    'railway': <Train className="w-12 h-12 text-primary" />,
    'urban': <Building2 className="w-12 h-12 text-primary" />,
  }

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-10 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Precision-engineered ductile iron castings for diverse industrial applications. Each product meets the highest quality standards and specifications.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingData.products.map((product, index) => (
            <AnimatedText key={product.id} delay={index * 0.1}>
              <Link href={`/products/${product.id}`}>
                <div className="bg-background rounded-lg p-6 border border-border/20 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group cursor-pointer">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    {productIcons[product.category as keyof typeof productIcons]}
                  </div>
                  <h3 className="font-display text-lg mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedText>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedText>
            <p className="text-muted-foreground mb-6">
              Need a custom casting solution? Our engineering team can develop specialized products to meet your specific requirements.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Request Custom Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedText>
        </div>
      </Section>
    </Layout>
  )
}

