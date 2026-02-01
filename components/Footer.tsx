'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-600 font-light">
              Malak Elnagar
            </p>
            <p className="text-sm text-gray-500 font-light mt-1">
              Telecommunication Engineer | AI & Data Science Engineer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href="mailto:malakhadyelnagar@gmail.com"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: 'easeInOut' }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/malakabass/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: 'easeInOut' }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/malak-hady"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: 'easeInOut' }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} Malak Elnagar
          </p>
        </div>
      </div>
    </footer>
  )
}
