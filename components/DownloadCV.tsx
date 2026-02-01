'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function DownloadCV() {
  const handleDownload = () => {
    // Create a download link
    const link = document.createElement('a')
    link.href = '/Malak_Elnagar_CV.pdf' // This will be the actual CV file
    link.download = 'Malak_Elnagar_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="download-cv" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Download CV
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Download my complete resume in PDF format
          </p>
          <motion.button
            onClick={handleDownload}
            className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ ease: 'easeInOut' }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

