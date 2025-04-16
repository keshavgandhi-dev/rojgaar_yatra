"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
}

export function TypewriterEffect({ words }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1))

          if (currentText.length === word.length) {
            setIsDeleting(true)
            setTimeout(() => {}, 1000) // Pause at the end of the word
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1))

          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      <span className="text-red-600">{currentText}</span>
      <span className="animate-blink">|</span>
    </h2>
  )
}

