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
  year: string
  area?: string
  images: string[]
  featured: boolean
  category: 'residential' | 'commercial' | 'architecture'
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'default' | 'featured' | 'photoOnly'
}

export function ProjectCard({ 
  project, 
  index = 0,
  variant = 'default'
}: ProjectCardProps) {
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
        <div className={cn("relative overflow-hidden rounded-lg aspect-[4/3]", variant !== 'photoOnly' ? 'mb-4' : '')}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {variant !== 'photoOnly' && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-white">
                  <h3 className="font-display text-xl font-light mb-1">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.location}</p>
                </div>
              </div>
            </>
          )}
        </div>
        {variant !== 'photoOnly' && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{project.type}</span>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-steel0 text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </Link>
    </motion.div>
  )
} 