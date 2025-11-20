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
      src: "/images/dippl/manufacturing/manufacturing-1.jpeg",
      alt: "Manufacturing Facility Overview",
      title: "State-of-the-Art Foundry"
    },
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
      description: "1 MT Inductotherm iron melting furnace with two crucibles and 2 MT Inductotherm iron melting furnace with two crucibles. Two cupola furnaces with 5 MT/hr casting capacity. Ladle preheater included.",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Sand Plant for Machine Moulding",
      description: "30 TPH capacity RHINO make sand plant using Compact Sand Technology from FONDARC. Simple sand system with three belt conveyors, no pit, no bucket elevator. RTC Series Online Sand Control for 100% batch control with data logging.",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "Moulding Facilities",
      description: "RHINO make FM3 High-Pressure Multi-Piston Moulding Machine Line with 25 boxes/hr speed. 64 pallet cars with 1200mm x 1300mm mould boxes. Automatic mould handling and punch-out system with separate hand moulding line.",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Pattern & Core Shop",
      description: "CO2 process, systematic pattern storage racks, in-house pattern repairing and maintenance. Equipped with radial drilling machine (50mm capacity), surface plate, measuring tools, gauges, and lathe machine with 8-foot bed.",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Fettling and Paint",
      description: "2 automatic shot blast machines (hanger type), various grinding and cutting machines. Wenger-make spray paint machine for epoxy coating and bitumen paint coating.",
      icon: <Cog className="w-8 h-8 text-primary" />
    },
    {
      title: "Material Handling",
      description: "1 x 7.0-tonne EOT crane, 4 x 5.0-tonne EOT cranes, 1 x 2.0-tonne magnet crane, 2 x 2.0-tonne forklifts, 10 x 1-tonne to 3-tonne EOT crane hoists. 18 weighing scales up to 2-tonne capacity. Semi-automatic liquid hot metal pouring system with metal weight measuring.",
      icon: <Zap className="w-8 h-8 text-primary" />
    }
  ]

  const certifications = [
    "ISO 9001:2015 certification for quality management",
    "BSI Kitemark EN124-2:2015 for international standards compliance",
    "ISO 45001:2018 for occupational health and safety",
    "ISO 14001:2015 for environmental management",
    "Accredited by TÜV SÜD"
  ]

  const specialFacilities = [
    {
      title: "Despatch Facilities",
      description: "In-house container stuffing facility with 2 loading ramps and 1 in-house weighbridge for efficient logistics and shipping operations."
    },
    {
      title: "Quality Assurance",
      description: "All facilities certified to international standards ensuring consistent quality across all operations from raw materials to final dispatch."
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

        {/* Capacity & Expansion */}
        <Section>
          <div className="bg-secondary/5 rounded-xl p-12">
            <AnimatedText>
              <h2 className="font-display text-3xl sm:text-4xl font-light mb-8 text-center">
                Current Capacity & Expansion
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">7,200</div>
                  <div className="text-muted-foreground">MTPA Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">April 2025</div>
                  <div className="text-muted-foreground">Expansion Completion</div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Section>

        {/* Certifications */}
        <Section>
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
        </Section>

        {/* Utilities */}
        <Section>
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-12 text-center">
              Utilities & Support Systems
            </h2>
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(manufacturingData.utilities).map(([key, value], index) => (
              <AnimatedText key={key} delay={index * 0.1}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/20 text-center">
                  <h3 className="font-display text-lg mb-3 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <AnimatedText>
            <h2 className="font-display text-3xl sm:text-4xl font-light mb-6">
              Partner with Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our state-of-the-art manufacturing infrastructure ensures consistent quality and timely delivery. 
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