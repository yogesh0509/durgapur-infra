import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  centered?: boolean
  id?: string
}

export function Section({ 
  children, 
  className, 
  title, 
  subtitle, 
  centered = false,
  id 
}: SectionProps) {
  return (
    <section id={id} className={cn("py-6 sm:py-4 lg:py-8", className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className={cn(
            "max-w-[800px]", 
            centered ? "mx-auto text-center" : "",
            "mb-8 lg:mb-10"
          )}>
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
} 