"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Users, Clock, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface JobCardProps {
  title: string
  department: string
  lastDate: string
  vacancies: number
  index?: number
}

export function JobCard({ title, department, lastDate, vacancies, index = 0 }: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50 dark:bg-red-950 dark:text-red-400">
            Government
          </Badge>
          {new Date(lastDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) ? (
            <Badge variant="destructive">Closing Soon</Badge>
          ) : (
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-950 dark:text-green-400"
            >
              New
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Building2 className="mr-2 h-4 w-4" />
            <span>{department}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>Last Date: {lastDate}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-2 h-4 w-4" />
            <span>Vacancies: {vacancies}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-muted-foreground">Qualification:</span>
            <span className="text-xs ml-1">Graduate</span>
          </div>
          <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.2 }}>
            <Button asChild size="sm" className="gap-1 bg-red-600 hover:bg-red-700">
              <Link href={`/jobs/${title.toLowerCase().replace(/\s+/g, '-')}/apply`}>
                Apply Now
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

