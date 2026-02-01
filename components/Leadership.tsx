'use client'

import { motion } from 'framer-motion'
import { leadership } from '@/data/portfolio'

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Leadership & Impact
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600" />
        </motion.div>

        <div className="space-y-12">
          {/* IEEE */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">IEEE</h3>
            <p className="text-gray-600 mb-1 font-light">{leadership.ieee.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {leadership.ieee.description}
            </p>
          </div>

          {/* Volunteering */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteering</h3>
            <div className="space-y-6">
              {leadership.volunteering.map((vol, index) => (
                <div key={index}>
                  <p className="text-gray-700 font-medium mb-1">{vol.title}</p>
                  <p className="text-gray-600 text-sm mb-1 font-light">
                    {vol.organization}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recommendations</h3>
            <div className="space-y-6">
              {leadership.recommendations.map((rec, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6">
                  <p className="text-gray-600 text-sm leading-relaxed font-light italic mb-2">
                    &quot;{rec.quote}&quot;
                  </p>
                  <p className="text-gray-500 text-xs font-light">
                    — {rec.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
