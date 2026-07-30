"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { portfolioData } from "../../lib/data"

export default function Contact() {
  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-16 py-12">
      <div className="max-w-2xl">
        <div className="mb-10">
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3">Contact</div>
          <h2 className="text-4xl font-serif font-semibold mb-4">Let&apos;s build something together.</h2>
          <p className="text-base opacity-60 leading-relaxed">I&apos;m always interested in hearing about new projects, research opportunities, and collaborations.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-border dark:border-border-dark hover:border-ink/20 dark:hover:border-ivory/20 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#007AFF]/10 transition-colors">
              <Mail size={16} className="opacity-50 group-hover:text-[#007AFF] transition-colors" />
            </div>
            <div><div className="text-sm font-medium">Email</div><div className="text-xs opacity-40 font-mono">{portfolioData.email}</div></div>
          </a>
          <a href={`https://${portfolioData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border dark:border-border-dark hover:border-ink/20 dark:hover:border-ivory/20 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#333] transition-colors">
              <Github size={16} className="opacity-50 group-hover:text-white transition-colors" />
            </div>
            <div><div className="text-sm font-medium">GitHub</div><div className="text-xs opacity-40 font-mono">{portfolioData.github}</div></div>
          </a>
          <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border dark:border-border-dark hover:border-ink/20 dark:hover:border-ivory/20 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#0A66C2]/10 transition-colors">
              <Linkedin size={16} className="opacity-50 group-hover:text-[#0A66C2] transition-colors" />
            </div>
            <div><div className="text-sm font-medium">LinkedIn</div><div className="text-xs opacity-40 font-mono">{portfolioData.linkedin}</div></div>
          </a>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-border dark:border-border-dark opacity-60">
            <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center">
              <MapPin size={16} className="opacity-50" />
            </div>
            <div><div className="text-sm font-medium">Location</div><div className="text-xs opacity-40 font-mono">{portfolioData.location}</div></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
