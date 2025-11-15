'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  location: string
  type: string
  description: string
  area?: string
  images: string[]
  featured: boolean
  category: string; 
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'default' | 'featured'
}

export function ProjectCard({ 
  project, 
  index = 0,
  variant = 'default'
}: ProjectCardProps) {
  // Use object-contain with padding for first two images, object-cover for rest
  const isProductImage = index < 2
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group cursor-pointer",
        variant === 'featured' ? 'col-span-2' : ''
      )}
    >
      <Link href={`/products/${project.id}`}>
        <div className={cn(
          "relative overflow-hidden rounded-lg aspect-[4/3]",
          isProductImage && "bg-white"
        )}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className={cn(
              "transition-transform duration-700 group-hover:scale-105",
              isProductImage ? "object-contain" : "object-cover"
            )}
          />
        </div>
      </Link>
    </motion.div>
  )
}