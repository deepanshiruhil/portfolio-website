"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../../lib/data"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-16 py-12">
      <div className="mb-12">
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3">Education</div>
        <h2 className="text-4xl font-serif font-semibold">Academic Background</h2>
      </div>
      <div className="space-y-8 max-w-3xl">
        {portfolioData.education.map((edu, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex gap-6 p-6 rounded-2xl border border-border dark:border-border-dark hover:border-ink/20 dark:hover:border-ivory/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0">
              <GraduationCap size={20} className="opacity-60" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h3 className="text-lg font-serif font-semibold">{edu.degree}</h3>
                <span className="text-[11px] font-mono opacity-40">{edu.year}</span>
              </div>
              <div className="text-sm opacity-60 mb-3">{edu.institution}</div>
              <p className="text-sm opacity-70 leading-relaxed">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
