'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
              className="p-6 border border-gray-200 rounded-lg bg-white hover:border-primary-300 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 font-light">
                {cert.issuer} · {cert.year}
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded bg-gray-50 text-gray-600 font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
