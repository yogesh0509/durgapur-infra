'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { ArrowRight, CheckCircle, Ruler, Package, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/lib/data/products.json"
import { useRouter } from "next/navigation"
import React from "react"

export default function DuctileIronBollardsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const router = useRouter()
  const bollards = productsData.bollards
  const section = bollards.sections["ductile iron"]

  if (id !== "ductile-iron") {
    router.push("/products/bollards")
    return null
  }

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Breadcrumb */}
        <AnimatedText>
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products/bollards" className="hover:text-primary">Bollards</Link>
            <span className="mx-2">/</span>
            <span>{section.title}</span>
          </nav>
        </AnimatedText>

        {/* Ductile Iron Products (All 3 Displayed Like Amazon Product Layout) */}
        {section.products.map((product, index) => (
          <div key={product.model} className="mb-24">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Left - Image */}
              <AnimatedText delay={index * 0.1} className="flex">
                <div className="w-full h-full min-h-[500px] rounded-xl overflow-hidden shadow-lg relative bg-white flex items-center justify-center">
                  <Image
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </AnimatedText>

              {/* Right - Product Details */}
              <div className="space-y-6 flex flex-col justify-center">
                <AnimatedText delay={0.1 + index * 0.1}>
                  <div>
                    <h2 className="font-display text-3xl sm:text-4xl font-light mb-4">
                      {product.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {product.description}
                    </p>
                  </div>
                </AnimatedText>

                {/* Specifications */}
                <AnimatedText delay={0.3 + index * 0.1}>
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-light">Specifications</h3>
                    <div className="space-y-3">
                      {product.height && (
                        <div className="flex items-start">
                          <Ruler className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium block">Height:</span>
                            <span className="text-sm text-muted-foreground">{product.height}</span>
                          </div>
                        </div>
                      )}
                      {product.max_interior_pipe_diameter && (
                        <div className="flex items-start">
                          <Ruler className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium block">Max Interior Pipe Diameter:</span>
                            <span className="text-sm text-muted-foreground">
                              {product.max_interior_pipe_diameter}
                            </span>
                          </div>
                        </div>
                      )}
                      {product.material && (
                        <div className="flex items-start">
                          <Package className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium block">Material:</span>
                            <span className="text-sm text-muted-foreground">{product.material}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedText>

                {/* CTA Buttons */}
                <AnimatedText delay={0.5 + index * 0.1}>
                  <div className="space-y-3 pt-4">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/contact">
                        Request Quote <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>
        ))}


        {/* Back Button */}
        <Section className="text-center mt-16">
          <Button asChild size="lg" variant="outline">
            <Link href="/products/bollards">
              Back to Bollards <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </Section>
      </Section>
    </Layout>
  )
}