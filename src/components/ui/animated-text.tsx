'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fadeUp' | 'fadeIn' | 'slideIn'
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }
}

export function AnimatedText({ 
  children, 
  className, 
  delay = 0,
  animation = 'fadeUp' 
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={animations[animation].initial}
      animate={animations[animation].animate}
      exit={animations[animation].exit}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
} 