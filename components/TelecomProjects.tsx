'use client'

import { motion } from 'framer-motion'
import { telecomProjects } from '@/data/portfolio'

export default function TelecomProjects() {
  return (
    <section id="telecom" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Telecommunication Projects
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600 mb-4" />
          <p className="text-lg text-gray-600 font-light">
            Network infrastructure, fiber optics, and communication systems
          </p>
        </motion.div>

        <div className="space-y-16">
          {telecomProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {project.title}
              </h3>

              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Problem
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Engineering Solution
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Real-world Impact
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white text-gray-700 font-light border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
