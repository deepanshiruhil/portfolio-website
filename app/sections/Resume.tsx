"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-16 py-12 flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
          <Download size={28} className="opacity-40" />
        </div>
        <h2 className="text-3xl font-serif font-semibold mb-3">Resume</h2>
        <p className="text-sm opacity-60 mb-8 leading-relaxed">Download my complete resume for a detailed overview of my experience, skills, and education.</p>
        <a href="#" className="inline-flex items-center gap-2 bg-ink dark:bg-ivory text-ivory dark:text-ink px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
          <Download size={14} /> Download PDF
        </a>
      </motion.div>
    </div>
  )
}
