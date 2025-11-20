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
    { name: 'Railway Castings', href: '/products/railway-casting' },
    { name: 'Bollards', href: '/products/bollards' },
    { name: 'Hardscape', href: '/products/hardscape' }
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

  const isHeaderOnHero = isOverHero && !isScrolled

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
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
              <span className={cn(
                "font-display text-xl font-light tracking-wide transition-colors",
                isHeaderOnHero ? "text-white" : "text-foreground"
              )}>
                DIPL
              </span>
              <div className={cn(
                "text-xs hidden lg:block transition-colors",
                isHeaderOnHero ? "text-white/80" : "text-muted-foreground"
              )}>
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
                    className={cn(
                      "text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1",
                      isHeaderOnHero 
                        ? "text-white/90 hover:text-white" 
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isHeaderOnHero 
                        ? "text-white/90 hover:text-white" 
                        : "text-foreground/80 hover:text-foreground"
                    )}
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
                    className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 pt-2"
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
            className={cn(
              "md:hidden",
              isHeaderOnHero && "text-white hover:text-white hover:bg-white/10"
            )}
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
              className={cn(
                "md:hidden border-t backdrop-blur-md",
                isHeaderOnHero 
                  ? "bg-black/80 border-white/20" 
                  : "bg-background/95 border-border/20"
              )}
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <div className={cn(
                          "py-2 text-sm font-medium flex items-center justify-between px-4",
                          isHeaderOnHero ? "text-white" : "text-foreground/80"
                        )}>
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="pl-8 pr-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                "block py-1 text-xs transition-colors",
                                isHeaderOnHero 
                                  ? "text-white/70 hover:text-white" 
                                  : "text-muted-foreground hover:text-foreground"
                              )}
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
                        className={cn(
                          "block py-2 px-4 text-sm font-medium transition-colors",
                          isHeaderOnHero 
                            ? "text-white/90 hover:text-white" 
                            : "text-foreground/80 hover:text-foreground"
                        )}
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