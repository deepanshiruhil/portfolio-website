"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../../lib/data"

export default function About() {
  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-8">About Me</div>
          <h2 className="text-5xl lg:text-7xl font-serif font-light leading-[1.1] mb-12">
            Crafting intelligence<br /><span className="italic">through code.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {portfolioData.about.paragraphs.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }} className="text-lg leading-[1.7] opacity-70 font-serif-body">{p}</motion.p>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#e0d8c8] to-[#d0c8b8] dark:from-[#2a2824] dark:to-[#1e1c18] rounded-2xl flex items-center justify-center">
                <div className="text-center opacity-30">
                  <div className="text-6xl font-serif italic mb-2">DR</div>
                  <div className="text-xs font-mono uppercase tracking-widest">Portrait</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-border dark:border-border-dark rounded-xl bg-ivory dark:bg-bg-dark-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold">4+</div>
                  <div className="text-[10px] font-mono opacity-40 uppercase">Years</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
