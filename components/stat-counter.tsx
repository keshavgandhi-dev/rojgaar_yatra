"use client"

import { useEffect, useState } from "react"

interface StatCounterProps {
  label: string
  endValue: number
  duration?: number
}

export function StatCounter({ label, endValue, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(percentage * endValue))

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [endValue, duration])

  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-red-600">{count.toLocaleString()}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

