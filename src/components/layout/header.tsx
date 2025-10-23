'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/about' },
  { name: 'Products', href: '/products', submenu: [
    { name: 'Municipal Casting of Gray and Ductile Iron', href: '/products/municipal' },
    { name: 'Cast Iron Ingot Moulds and Centre Columns', href: '/products/ingot-moulds' },
    { name: 'Locomotive / Railway Castings', href: '/products/railway' }
  ]},
  { name: 'Infrastructure', href: '/infrastructure', submenu: [
    { name: 'Manufacturing Infrastructure', href: '/infrastructure/manufacturing' },
    { name: 'Testing & Inspection Infrastructure', href: '/infrastructure/testing' },
    { name: 'IT Infrastructure', href: '/infrastructure/it' },
    { name: 'Design & Development', href: '/infrastructure/design' }
  ]},
  { name: 'Quality', href: '/quality', submenu: [
    { name: 'Quality Assurance', href: '/quality/assurance' },
    { name: 'Our Laboratory', href: '/quality/laboratory' },
    { name: 'Certifications', href: '/quality/certifications' }
  ]},
  { name: 'Contact Us', href: '/contact' },
]

export function Header({ className = '', isOverHero = false }: { className?: string; isOverHero?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      isOverHero && !isScrolled ? "header-on-hero" : "",
      className
    )}>
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/brand/logo.png"
              alt="Durgapur Infra Projects Pvt. Ltd."
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="hidden sm:block">
              <span className="font-display text-xl font-light tracking-wide">
                DIPPL
              </span>
              <div className="text-xs text-muted-foreground hidden lg:block">
                Durgapur Infra Projects Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <div
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className={cn(
                      "absolute top-full left-0 w-72 border border-border rounded-lg shadow-lg z-50 pt-2",
                      isOverHero && !isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-background"
                    )}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isOverHero && !isScrolled 
                              ? "text-gray-800 hover:text-gray-900 hover:bg-gray-100" 
                              : "text-foreground/80 hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/20"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <div className="py-2 text-sm font-medium text-foreground/80 flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
