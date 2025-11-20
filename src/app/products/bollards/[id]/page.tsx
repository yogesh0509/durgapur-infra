'use client'

import React, { useEffect } from "react"
import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { ArrowRight, Ruler, Package, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/lib/data/products.json"
import { useRouter } from "next/navigation"

export default function BollardProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = React.use(params)

  // Get all bollard products
  const allProducts = productsData.bollards.sections["ductile iron"].products
  
  // Find product by code (convert id back to code format)
  const product = allProducts.find(p => 
    p.code.toLowerCase().replace(/\s+/g, '-') === id
  )

  // Redirect if product not found
  useEffect(() => {
    if (!product) {
      router.push("/products/bollards")
    }
  }, [product, router])

  if (!product) {
    return null
  }

  const sectionData = productsData.bollards.sections["ductile iron"]
  const relatedProducts = allProducts.filter(p => p.code !== product.code)

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
            <span>{product.code}</span>
          </nav>
        </AnimatedText>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left - Image */}
          <AnimatedText>
            <div className="sticky top-24">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg mb-4">
                <Image
                  src={product.image || "/images/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-contain bg-white p-8"
                />
              </div>
            </div>
          </AnimatedText>

          {/* Right - Product Info */}
          <div className="space-y-6">
            <AnimatedText delay={0.1}>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-light mb-4">
                  {product.name}
                </h1>
              </div>
            </AnimatedText>

            {/* Product code */}
            <AnimatedText delay={0.2}>
              <div className="bg-secondary/5 rounded-lg p-4 flex items-center justify-between">
                <span className="text-sm font-medium">{product.code}</span>
              </div>
            </AnimatedText>

            {/* Specifications */}
            <AnimatedText delay={0.3}>
              <div className="space-y-4">
                <h2 className="font-display text-xl font-light">Specifications</h2>
                <div className="space-y-3">
                  {product.dimensions && (
                    <div className="flex items-start">
                      <Ruler className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium block">dimensions:</span>
                        <span className="text-sm text-muted-foreground">{product.dimensions}</span>
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

            {/* Features */}
            {product.applications && product.applications.length > 0 && (
              <AnimatedText delay={0.4}>
                <div>
                  <h2 className="font-display text-xl font-light mb-4">Key Features</h2>
                  <div className="space-y-2">
                    {product.applications.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Shield className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            )}

            {/* CTA Buttons */}
            <AnimatedText delay={0.5}>
              <div className="space-y-3 pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">
                    Request Quote <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/products/bollards">
                    Back to Bollards <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <Section>
            <AnimatedText>
              <h2 className="font-display text-2xl sm:text-3xl font-light mb-8">
                Related Products
              </h2>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProducts.slice(0, 4).map((relatedProduct, index) => (
                <AnimatedText key={relatedProduct.code} delay={index * 0.1}>
                  <Link href={`/products/bollards/${relatedProduct.code.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="bg-background rounded-lg p-3 border border-border/20 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer flex items-center gap-4">
                      {/* Small image */}
                      <div className="relative w-16 h-16 rounded overflow-hidden bg-secondary/10 flex-shrink-0">
                        <Image
                          src={relatedProduct.image || "/images/placeholder.jpg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product info */}
                      <div>
                        <h3 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">
                          {relatedProduct.code}
                        </h3>
                        <p className="text-sm text-muted-foreground">{relatedProduct.name}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedText>
              ))}
            </div>
          </Section>
        )}
      </Section>
    </Layout>
  )
}