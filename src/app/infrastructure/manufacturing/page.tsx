'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { manufacturingData } from "@/lib/data"
import { ArrowRight, Factory, Cog, Zap, Settings, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ManufacturingInfrastructurePage() {
  const infrastructure = manufacturingData.infrastructure.manufacturing

  const facilityImages = [
    {
      src: "/images/dippl/manufacturing/manufacturing-2.jpeg",
      alt: "Production Line",
      title: "Advanced Production Line"
    },
    {
      src: "/images/dippl/manufacturing/manufacturing-3.jpeg",
      alt: "Quality Control Department",
      title: "Quality Assurance"
    }
  ]

  const meltingEquipment = [
    {
      title: "Induction Furnaces",
      description: "Our facility is equipped with a 1-Metric-Ton (MT) induction furnace that feeds a dedicated treatment ladle for precise metallurgical adjustments. Following treatment, the molten material is transferred to various pouring ladles to ensure a seamless and efficient casting.",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Sand Plant for Machine Moulding",
      description: "A state-of-the-art, fully automatic sand plant powers the machine moulding process, providing a 220-tonne capacity. It ensures the consistent production of high-quality green sand with a preparation throughput of 64 tonnes per hour.",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "Moulding Facilities",
      description: "We utilize a VME F16 High-Pressure Multi-Piston Moulding Machine capable of producing 30 moulds per hour. To ensure maximum flexibility, our facilities include more than 150 pallet cars (sized 1000×1000 mm) with adjustable heights from 400 mm to 800 mm. This extensive setup enables us to efficiently tailor production to your specific needs.",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Pattern & Core Shop",
      description: "The Pattern & Core Shop handles systematic in-house core manufacturing using the CO2 process and dedicated core maker machinery. We are fully equipped for the manufacture, repair, and maintenance of all pattern types. Our modern machinery ensures a high-quality, seamless production of both patterns and cores.",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Fettling and Paint",
      description: "The Fettling and Paint process begins with efficient cleaning using an automatic hanger-type shot blast machine. Precision finishing is achieved with various grinding and cutting machines. For protective final coatings, we employ a spray paint machine for both epoxy and bitumen applications.",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "Material Handling",
      description: "Our factory ensures smooth and efficient operations through the extensive use of multiple Electric Overhead Traveling (EOT) cranes, each with varying load-bearing capacities. These cranes are integral to the entire production flow, handling everything from mould transportation and metal pouring to final finishing and conveyance.",
      icon: <Zap className="w-8 h-8 text-primary" />
    }
  ]

  const certifications = [
    "ISO 9001:2015 certification for quality management",
    "BSI Kitemark EN124-2:2015 for international standards compliance",
    "ISO 45001:2018 for occupational health and safety",
    "ISO 14001:2015 for environmental management"
  ]

  const specialFacilities = [
    {
      title: "Despatch Facilities",
      description: "Our dispatch area is fully equipped for efficient logistics and shipping operations. We offer in-house container stuffing facilities, complete with loading ramps and an integrated weighbridge, ensuring seamless control over shipping weights and logistics."
    },
    {
      title: "Quality Assurance",
      description: "We guarantee consistent quality from raw material procurement to final product dispatch, as all our facilities are certified to meet international standards."
    }
  ]

  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="text-center">
          <AnimatedText>
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 mx-auto">
              <Factory className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {infrastructure.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We manufacture products in accordance with relevant international market standards.
              Our manufacturing processes are the backbone of our operations and give us immense confidence, from melting
              iron to delivery of castings. We guarantee consistent product reliability and durability, meeting the highest
              industry standards.
            </p>
          </AnimatedText>
        </div>

        {/* Facility Images - 3 Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {facilityImages.map((image, index) => (
            <AnimatedText key={image.alt} delay={index * 0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* Manufacturing Equipment */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Manufacturing Equipment & Facilities
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {meltingEquipment.map((item, index) => (
              <AnimatedText key={item.title} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-8 shadow-sm border border-border/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Special Facilities */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Special Facilities
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialFacilities.map((facility, index) => (
              <AnimatedText key={facility.title} delay={index * 0.1}>
                <div className="bg-secondary/5 rounded-xl p-8">
                  <h3 className="font-display text-xl mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Key Features */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Key Features
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructure.features.map((feature, index) => (
              <AnimatedText key={index} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        {/* <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Certifications & Standards
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedText key={cert} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section> */}

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Partner with Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Located in Durgapur, our state-of-the-art manufacturing infrastructure is engineered for precision, reliability and scale.
              Contact us to discuss your casting requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/infrastructure">
                  View All Infrastructure <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </Section>
      </Section>
    </Layout>
  )
}