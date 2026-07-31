"use client"

import { motion } from "framer-motion"
import { portfolioData } from "../../lib/data"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

function VintageMac() {
  return (
    <svg viewBox="0 0 500 600" className="w-full max-w-[420px] h-auto">
      <ellipse cx="250" cy="570" rx="180" ry="20" fill="black" opacity="0.08"/>
      
      <g transform="translate(30, 480)">
        <rect x="0" y="0" width="440" height="80" rx="6" fill="#D4CFC7"/>
        <rect x="0" y="0" width="440" height="76" rx="6" fill="#E8E4DC"/>
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <rect key={`r1-${i}`} x={10 + i * 35} y="8" width="30" height="14" rx="2" fill="#F5F2EC"/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <rect key={`r2-${i}`} x={10 + i * 35} y="26" width="30" height="14" rx="2" fill="#F5F2EC"/>
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <rect key={`r3-${i}`} x={10 + i * 35} y="44" width="30" height="14" rx="2" fill="#F5F2EC"/>
        ))}
        <rect x="10" y="62" width="200" height="14" rx="2" fill="#F5F2EC"/>
        <rect x="220" y="62" width="210" height="14" rx="2" fill="#F5F2EC"/>
      </g>

      <rect x="50" y="20" width="400" height="460" rx="16" fill="#F0EBE3"/>
      <rect x="50" y="20" width="400" height="455" rx="16" fill="#E8E4DC"/>
      
      <rect x="75" y="45" width="350" height="280" rx="12" fill="#1A1A1A"/>
      
      <rect x="85" y="55" width="330" height="260" rx="8" fill="#0D0D0D"/>
      
      <defs>
        <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="2" x2="4" y2="2" stroke="black" strokeWidth="0.5" opacity="0.15"/>
        </pattern>
      </defs>
      <rect x="85" y="55" width="330" height="260" rx="8" fill="url(#scanlines)"/>
      
      <rect x="85" y="55" width="330" height="260" rx="8" fill="radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)"/>
      
      <g fontFamily="monospace" fontSize="10">
        <rect x="95" y="65" width="310" height="18" rx="2" fill="rgba(255,255,255,0.05)"/>
        <text x="105" y="77" fill="#888" fontSize="8">Deepanshi OS v1.0</text>
        
        <text x="105" y="100" fill="#5AC8FA" fontSize="9">●</text>
        <text x="118" y="100" fill="#ccc" fontSize="9">About</text>
        
        <text x="105" y="118" fill="#FF9500" fontSize="9">●</text>
        <text x="118" y="118" fill="#ccc" fontSize="9">Projects</text>
        
        <text x="105" y="136" fill="#AF52DE" fontSize="9">●</text>
        <text x="118" y="136" fill="#ccc" fontSize="9">AI</text>
        
        <text x="105" y="154" fill="#FF2D55" fontSize="9">●</text>
        <text x="118" y="154" fill="#ccc" fontSize="9">Creative</text>
        
        <text x="105" y="172" fill="#34C759" fontSize="9">●</text>
        <text x="118" y="172" fill="#ccc" fontSize="9">Resume</text>
        
        <text x="105" y="200" fill="#666" fontSize="8">deepanshi@portfolio ~ %</text>
        <text x="245" y="200" fill="#4CD964" fontSize="9">_</text>
      </g>
      
      <rect x="180" y="340" width="140" height="10" rx="5" fill="#2A2A2A"/>
      <rect x="185" y="342" width="130" height="6" rx="3" fill="#1A1A1A"/>
      
      <g transform="translate(235, 375)">
        <circle cx="0" cy="0" r="14" fill="none"/>
        <path d="M-8,-6 Q-8,-12 0,-12 Q8,-12 8,-6 Q8,0 0,0 Q-8,0 -8,-6" fill="#FF3B30"/>
        <path d="M-8,0 Q-8,-6 0,-6 Q8,-6 8,0 Q8,6 0,6 Q-8,6 -8,0" fill="#FF9500"/>
        <path d="M-8,6 Q-8,0 0,0 Q8,0 8,6 Q8,12 0,12 Q-8,12 -8,6" fill="#FFCC00"/>
        <path d="M-8,6 Q-8,0 0,0 Q8,0 8,6" fill="#34C759" opacity="0.3"/>
        <path d="M-2,-14 Q2,-18 6,-14 Q4,-10 0,-10 Q-4,-10 -2,-14" fill="#FF3B30"/>
        <path d="M-2,-14 Q2,-18 6,-14" fill="none" stroke="#FF3B30" strokeWidth="2"/>
      </g>
      
      <circle cx="120" cy="400" r="12" fill="#FF6B35" opacity="0.9"/>
      
      <g transform="translate(150, 395)">
        <rect x="0" y="0" width="18" height="18" rx="3" fill="white" transform="rotate(15 9 9)"/>
        <polygon points="9,2 11,7 16,7 12,10 13,15 9,12 5,15 6,10 2,7 7,7" fill="#0066CC" transform="rotate(15 9 9) scale(0.7) translate(4,4)"/>
      </g>
      
      <g transform="translate(280, 390)">
        <rect x="0" y="0" width="70" height="22" rx="2" fill="#8B0000"/>
        <text x="35" y="9" textAnchor="middle" fill="white" fontSize="5" fontFamily="monospace" fontWeight="bold">MACHINE</text>
        <text x="35" y="17" textAnchor="middle" fill="white" fontSize="5" fontFamily="monospace" fontWeight="bold">INTELLIGENCE</text>
      </g>
      
      <g transform="translate(380, 390)">
        {[0,1,2,3].map(row =>
          [0,1,2,3].map(col => (
            <rect key={`g-${row}-${col}`} x={col * 5} y={row * 5} width="3" height="3" rx="1" fill="#333"/>
          ))
        )}
      </g>
    </svg>
  )
}

export default function Hero() {
  const { featuredProject, hero } = portfolioData

  return (
    <div className="min-h-full bg-ivory dark:bg-bg-dark-secondary">
      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl lg:text-8xl font-serif font-light tracking-tight leading-[0.9] mb-2">
              {hero.heading.split(" ")[0]}
            </h1>
            <h1 className="text-6xl lg:text-8xl font-serif font-light italic tracking-tight leading-[0.9] mb-8">
              {hero.heading.split(" ").slice(1).join(" ")}.
            </h1>

            <p className="text-lg lg:text-xl opacity-60 max-w-md leading-relaxed mb-8 font-serif-body">
              {hero.description}
            </p>

            <div className="flex items-center gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink dark:bg-ivory text-ivory dark:text-ink px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
              >
                View Projects
                <ArrowRight size={14} />
              </a>
              <a
                href="https://github.com/deepanshiruhil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-ink/20 dark:border-ivory/20 px-6 py-3 rounded-lg text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-lg"
          >
            {hero.specs.map((spec, i) => (
              <div key={i}>
                <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">
                  {spec.label}
                </div>
                <div className="text-sm font-mono opacity-80">{spec.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <VintageMac />
          </motion.div>
        </div>
      </div>

      <div className="px-8 lg:px-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">Featured Project</span>
            <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          </div>

          <div className="border border-border dark:border-border-dark rounded-2xl p-8 lg:p-12 bg-white/50 dark:bg-white/[0.02] hover:border-ink/20 dark:hover:border-ivory/20 transition-colors">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="flex-1">
                <div className="text-xs font-mono text-[#0066CC] mb-3">{featuredProject.tagline}</div>
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-4">{featuredProject.name}</h2>
                <p className="text-base opacity-60 leading-relaxed mb-6 max-w-xl">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border dark:border-border-dark opacity-60">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
                    <Github size={14} /> Source Code
                  </a>
                  {featuredProject.live && (
                    <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="lg:w-80">
                <div className="space-y-3">
                  {featuredProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-border dark:border-border-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0066CC] mt-1.5 shrink-0" />
                      <span className="text-sm opacity-70">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
