"use client"

import { motion, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star, Award, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  image: string
  index?: number
}

export function TestimonialCard({ name, role, testimonial, image, index = 0 }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (isHovered) {
      controls.start({ 
        scale: 1.02, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      })
    } else {
      controls.start({ 
        scale: 1, 
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      })
    }
  }, [isHovered, controls])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <motion.div
        animate={controls}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="h-full overflow-hidden transition-all duration-300 border-gray-200 dark:border-gray-800 dark:bg-muted/30 hover:border-red-300 dark:hover:border-red-700 relative">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-muted/30 dark:to-muted/30 opacity-70"></div>
          
          <CardContent className="p-6 flex flex-col h-full relative z-10">
            {/* Quote icon */}
            <motion.div 
              className="mb-4 text-red-600 dark:text-red-400"
              animate={{ 
                rotate: isHovered ? 10 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Quote className="h-6 w-6" />
            </motion.div>
            
            {/* Testimonial text */}
            <motion.p 
              className="text-muted-foreground flex-grow mb-6"
              animate={{ 
                y: isHovered ? -5 : 0
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {testimonial}
            </motion.p>
            
            {/* Author info */}
            <div className="flex items-center">
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="h-10 w-10 mr-3 border border-gray-200 dark:border-gray-800">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">{name.charAt(0)}</AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <p className="font-bold text-gray-800 dark:text-gray-100">{name}</p>
                <p className="text-sm text-red-600 dark:text-red-400">{role}</p>
              </div>
            </div>
            
            {/* Success indicators */}
            <motion.div 
              className="absolute bottom-2 right-2 flex space-x-1"
              animate={{ 
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="h-4 w-4 text-yellow-500" />
              <Award className="h-4 w-4 text-red-500" />
              <CheckCircle className="h-4 w-4 text-green-500" />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

