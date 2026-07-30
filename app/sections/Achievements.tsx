"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../../lib/data"
import { Award, Trophy, Medal, Star } from "lucide-react"

const icons = [Award, Trophy, Medal, Star, Award, Trophy]

export default function Achievements() {
  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-16 py-12">
      <div className="mb-12">
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3">Achievements</div>
        <h2 className="text-4xl font-serif font-semibold">Awards & Recognition</h2>
      </div>
      <div className="space-y-4 max-w-4xl">
        {portfolioData.achievements.map((ach, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex gap-5 p-5 rounded-xl border border-border dark:border-border-dark hover:border-ink/20 dark:hover:border-ivory/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF9500]/10 transition-colors">
                <Icon size={18} className="opacity-50 group-hover:text-[#FF9500] transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="text-base font-medium">{ach.title}</h3>
                  <span className="text-[10px] font-mono opacity-40">{ach.org} · {ach.year}</span>
                </div>
                <p className="text-sm opacity-60 leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
