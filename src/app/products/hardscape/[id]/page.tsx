'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { ArrowRight, CheckCircle, Palette, Ruler, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/lib/data/products.json"
import { useRouter } from "next/navigation"

export default function HardscapeProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  // Combine all hardscape products from sections
  const dwp = productsData.hardscape.sections.detectableWarningPlates.products
  const tree = productsData.hardscape.sections.treeGrates.products
  const trench = productsData.hardscape.sections.trenchGrates.products
  const allProducts = [...dwp, ...tree, ...trench]

  const product = allProducts.find(p => p.id === params.id)
  if (!product) {
    router.push('/products/hardscape')
    return null
  }

  // Identify which section it belongs to
  const section =
    dwp.find(p => p.id === params.id) ? 'detectableWarningPlates' :
    tree.find(p => p.id === params.id) ? 'treeGrates' :
    'trenchGrates'

  const sectionData = productsData.hardscape.sections[section as keyof typeof productsData.hardscape.sections]
  const relatedProducts = sectionData.products.filter(p => p.id !== product.id)

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Breadcrumb */}
        <AnimatedText>
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <Link href="/products/hardscape" className="hover:text-primary">Hardscape</Link>
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
                  className="object-cover"
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
                <p className="text-lg text-muted-foreground mb-6">
                  {sectionData.description}
                </p>
              </div>
            </AnimatedText>

            {/* Product Code */}
            <AnimatedText delay={0.2}>
              <div className="bg-secondary/5 rounded-lg p-4 flex items-center justify-between">
                <span className="text-sm font-medium">Product Code:</span>
                <span className="text-sm text-muted-foreground font-mono">{product.code}</span>
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
                        <span className="text-sm font-medium block">Dimensions:</span>
                        <span className="text-sm text-muted-foreground">{product.dimensions}</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start">
                    <Palette className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium block">Color:</span>
                      <span className="text-sm text-muted-foreground">{product.color}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium block">Material:</span>
                      <span className="text-sm text-muted-foreground">{product.material}</span>
                    </div>
                  </div>
                  {product.finish && (
                    <div className="flex items-start">
                      <Package className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium block">Finish:</span>
                        <span className="text-sm text-muted-foreground">{product.finish}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedText>

            {/* Applications */}
            {product.applications?.length > 0 && (
              <AnimatedText delay={0.4}>
                <div>
                  <h2 className="font-display text-xl font-light mb-4">Applications</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, i) => (
                      <span key={i} className="px-3 py-1 bg-background border border-border/20 rounded-full text-sm text-muted-foreground">
                        {app}
                      </span>
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
                  <Link href="/products/hardscape">
                    Back to Hardscape <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>

        {/* Related Products */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-2xl sm:text-3xl font-light mb-8">
              Related Products
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <AnimatedText key={relatedProduct.id} delay={index * 0.1}>
                <Link href={`/products/hardscape/${relatedProduct.id}`}>
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
      </Section>
    </Layout>
  )
}
