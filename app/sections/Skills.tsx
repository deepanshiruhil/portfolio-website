"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../../lib/data"

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4 }} className="mb-4">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="font-medium">{name}</span>
        <span className="opacity-40 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${level}%` }} transition={{ delay: delay + 0.1, duration: 0.8, ease: "easeOut" }} className="h-full bg-ink dark:bg-ivory rounded-full" />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { skills } = portfolioData
  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-16 py-12">
      <div className="mb-10">
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3">Skills</div>
        <h2 className="text-4xl font-serif font-semibold">Technical Proficiency</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Languages</h3>
          {skills.languages.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.05} />)}
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Frameworks</h3>
          {skills.frameworks.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={0.3 + i * 0.05} />)}
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Tools</h3>
          {skills.tools.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={0.6 + i * 0.05} />)}
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border dark:border-border-dark">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Domains</h3>
        <div className="flex flex-wrap gap-3">
          {skills.domains.map((d) => <span key={d} className="px-4 py-2 rounded-full border border-border dark:border-border-dark text-sm opacity-70 hover:opacity-100 hover:border-ink dark:hover:border-ivory transition-all cursor-default">{d}</span>)}
        </div>
      </div>
    </div>
  )
}
