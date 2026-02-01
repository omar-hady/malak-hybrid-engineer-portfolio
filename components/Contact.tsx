'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600 mb-4" />
          <p className="text-lg text-gray-600 font-light">
            Let&apos;s connect and discuss opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
          className="space-y-6"
        >
          {/* Email */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
            <a
              href="mailto:malakhadyelnagar@gmail.com"
              className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-light"
            >
              malakhadyelnagar@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/malakabass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-light"
            >
              linkedin.com/in/malakabass
            </a>
          </div>

          {/* GitHub */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-2">GitHub</h3>
            <a
              href="https://github.com/malak-hady"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-light"
            >
              github.com/malak-hady
            </a>
          </div>
        </motion.div>

        {/* Send Email Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
          className="mt-12 text-center"
        >
          <motion.a
            href="mailto:malakhadyelnagar@gmail.com?subject=Portfolio Inquiry"
            className="inline-block px-8 py-3 bg-white border-2 border-primary-500 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 hover:border-primary-600 hover:shadow-sm transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ ease: 'easeInOut' }}
          >
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

