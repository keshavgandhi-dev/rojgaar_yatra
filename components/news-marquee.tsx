"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export default function NewsMarquee() {
  const news = [
    "UPSC Civil Services 2025 Application Deadline Extended to April 15",
    "SSC CGL 2025 Notification Released - Apply Before May 3",
    "IBPS PO 2025 Results Announced - Check Now",
    "Railway RRB NTPC Result for CBT-2 Declared",
    "NTA JEE Main 2025 April Session Registration Starts",
  ]

  return (
    <div className="bg-red-50 dark:bg-red-950 rounded-lg p-1.5 md:p-2 flex items-center overflow-hidden">
      <div className="flex-shrink-0 bg-red-600 text-white p-1 md:p-1.5 rounded-md mr-2 md:mr-3">
        <AlertCircle className="h-3 w-3 md:h-4 md:w-4" />
      </div>
      <div className="overflow-hidden relative w-full">
        <motion.div
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="whitespace-nowrap text-xs md:text-sm"
        >
          {news.map((item, index) => (
            <span key={index} className="inline-block mx-2 md:mx-4">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

