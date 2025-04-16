"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  className?: string
}

export function AnimatedCounter({ from, to, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = (to - from) / steps
    const interval = duration / steps

    let current = from
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [from, to])

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      {count.toLocaleString()}
    </motion.span>
  )
}

