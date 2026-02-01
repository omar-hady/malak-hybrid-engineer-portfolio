'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

const categoryLabels = {
  telecom: 'Core Telecom Skills',
  ai: 'AI & Data Skills',
  tools: 'Tools & Platforms',
  soft: 'Soft & Leadership Skills',
}

export default function SkillsMap() {
  const categories = ['telecom', 'ai', 'tools', 'soft'] as const

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category)

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700 font-light">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05, ease: 'easeInOut' }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
