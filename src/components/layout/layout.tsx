'use client'

import { ReactNode } from "react"
import { Header } from "./header"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: ReactNode
  headerClassName?: string
  isOverHero?: boolean
}

export function Layout({ children, headerClassName, isOverHero }: LayoutProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <>
      <Header className={headerClassName} isOverHero={isOverHero} />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "transition-all duration-300",
            !isHome && "mt-12" // adds space under the fixed header
          )}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      <footer className="bg-secondary/5 border-t">
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-display text-xl mb-4">DIPL</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Durgapur Infra Projects Pvt. Ltd.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Precision Ductile Iron Manufacturing for Modern Infrastructure. Specializing in manhole covers, automobile parts, and custom castings.
              </p>
              <div className="text-xs text-muted-foreground mb-4 space-y-1">
                <p>CIN: U26999WB2016PTC218534</p>
                <p>PAN: AAGCD0726K</p>
                <p>Incorporated: 07 December 2016</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:info@dippl.in">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Our Story', href: '/about' },
                  { name: 'Products', href: '/products' },
                  { name: 'Infrastructure', href: '/infrastructure' },
                  { name: 'Quality', href: '/quality' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h3 className="font-display text-lg mb-4">Products</h3>
              <ul className="space-y-2">
                {[
                  'Municipal Castings',
                  'Railway Castings',
                  'Automobile Parts',
                  'Custom Castings',
                ].map((product) => (
                  <li key={product}>
                    <span className="text-sm text-muted-foreground">
                      {product}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-display text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="mailto:info@dippl.in"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    info@dippl.in
                  </Link>
                </li>
                <li>
                  <Link 
                    href="tel:+91-9609969999"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +91-9609969999
                  </Link>
                </li>
                <li className="text-xs text-muted-foreground">
                  <div className="font-medium mb-1">Registered Office:</div>
                  <div>6, Brabourne Road, 3rd Floor, Room 305–306, Kolkata – 700001</div>
                </li>
                <li className="text-xs text-muted-foreground">
                  <div className="font-medium mb-1">Factory:</div>
                  <div>Village Bamunara, Durgapur – 713212</div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Durgapur Infra Projects Pvt. Ltd. All rights reserved.</p>
            <p className="mt-1 text-xs">CIN: U26999WB2016PTC218534 | PAN: AAGCD0726K</p>
          </div>
        </div>
      </footer>
    </>
  )
}
