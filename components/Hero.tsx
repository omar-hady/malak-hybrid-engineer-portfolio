'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const phrases = [
  'Building intelligent data-driven systems',
  'Building scalable AI solutions',
  'Building reliable communication networks',
]

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentPhrase) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      // Move to next phrase
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    } else if (isDeleting) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1))
      }, 50)
    } else {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1))
      }, 100)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhraseIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="block mb-4">Malak Elnagar</span>
            <span className="text-2xl md:text-3xl font-light text-gray-600 block min-h-[3rem]">
              <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, ease: 'easeInOut' }}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light"
          >
            Telecommunication Engineer | AI & Data Science Engineer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#timeline"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
