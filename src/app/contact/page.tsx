'use client'

import { AnimatedText } from "@/components/ui/animated-text"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout/layout"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { manufacturingData } from "@/lib/data"
import Link from "next/link"

export default function ContactPage() {
  return (
    <Layout>
      <Section className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <AnimatedText className="text-center mb-10 sm:mb-16">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Ready to discuss your casting requirements? Get in touch with our team for quality ductile iron solutions and customized manufacturing services.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/5 rounded-xl p-6 sm:p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="productType" className="block text-sm font-medium mb-2">
                  Product Interest
                </label>
                <select
                  id="productType"
                  name="productType"
                  className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Select a product type</option>
                  <option value="municipal">Municipal Castings</option>
                  <option value="railway">Railway Castings</option>
                  <option value="metallurgical">Ingot Moulds & Centre Columns</option>
                  <option value="automobile">Automobile Parts</option>
                  <option value="custom">Custom Castings</option>
                  <option value="quote">Request Quote</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Requirements & Specifications
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link 
                      href={`mailto:${manufacturingData.contact.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {manufacturingData.contact.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <Link 
                      href={`tel:${manufacturingData.contact.phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {manufacturingData.contact.phone}
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Registered Office</p>
                    <p className="text-muted-foreground text-sm">
                      {manufacturingData.contact.office.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Factory</p>
                    <p className="text-muted-foreground text-sm">
                      {manufacturingData.contact.factory.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">Connect With Us</h2>
              <div className="flex space-x-3 sm:space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-secondary/5 rounded-xl p-6">
              <h2 className="font-display text-lg sm:text-xl mb-2 sm:mb-4">Company Information</h2>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p><strong>CIN:</strong> {manufacturingData.companyInfo.cin}</p>
                <p><strong>PAN:</strong> {manufacturingData.companyInfo.pan}</p>
                <p><strong>Incorporated:</strong> {manufacturingData.companyInfo.incorporated}</p>
                <p><strong>Type:</strong> {manufacturingData.companyInfo.type}</p>
              </div>
            </div>
            <div className="bg-secondary/5 rounded-xl p-6">
              <h2 className="font-display text-lg sm:text-xl mb-2 sm:mb-4">Office Hours</h2>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  )
} 