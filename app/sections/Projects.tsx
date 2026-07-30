"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Folder, FolderOpen, Github, ExternalLink, X } from "lucide-react"
import { portfolioData } from "../../lib/data"

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(null)
  const project = portfolioData.projects.find((p) => p.id === openProject)

  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary px-8 lg:px-16 py-12">
      <div className="mb-10">
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-3">Projects</div>
        <h2 className="text-4xl font-serif font-semibold">Repositories & Work</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.projects.map((p, i) => (
          <motion.button key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            onClick={() => setOpenProject(p.id)}
            className="group flex flex-col items-center p-6 rounded-xl hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors border border-transparent hover:border-border dark:hover:border-border-dark"
          >
            <div className="mb-3 text-[#dcb67a] group-hover:text-[#e8c88a] transition-colors">{openProject === p.id ? <FolderOpen size={48} /> : <Folder size={48} />}</div>
            <div className="text-sm font-medium text-center">{p.name}</div>
            <div className="text-[10px] opacity-40 mt-1 font-mono">{p.category}</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {project && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpenProject(null)}
          >
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory dark:bg-bg-dark-secondary rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto window-shadow p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-mono opacity-40 mb-1">{project.category} · {project.year}</div>
                  <h3 className="text-2xl font-serif font-semibold">{project.name}</h3>
                  <div className="text-sm opacity-60 mt-1">{project.tagline}</div>
                </div>
                <button onClick={() => setOpenProject(null)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"><X size={18} /></button>
              </div>
              <p className="text-sm opacity-70 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border dark:border-border-dark opacity-60">{t}</span>)}
              </div>
              <div className="flex items-center gap-4">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"><Github size={14} /> Source</a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"><ExternalLink size={14} /> Live Demo</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
