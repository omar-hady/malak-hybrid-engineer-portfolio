'use client'

import { motion } from 'framer-motion'
import { timeline } from '@/data/portfolio'

export default function HybridTimeline() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unified Journey
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600 mb-8" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1">
                  <div className="w-3 h-3 rounded-full bg-primary-500 border-2 border-white" />
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-light">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 font-light">
                    {item.organization}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
