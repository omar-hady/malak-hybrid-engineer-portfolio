'use client'

import { motion } from 'framer-motion'
import { aiProjects } from '@/data/portfolio'
import { Github } from 'lucide-react'

export default function AIProjects() {
  return (
    <section id="ai" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI & Data Science Projects
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600 mb-4" />
          <p className="text-lg text-gray-600 font-light">
            Machine learning and data science projects focused on intelligent systems
          </p>
        </motion.div>

        <div className="space-y-16">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                {project.period && (
                  <span className="text-sm text-gray-500 font-light">
                    {project.period}
                  </span>
                )}
              </div>

              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && project.githubUrl !== '' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors font-light"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
