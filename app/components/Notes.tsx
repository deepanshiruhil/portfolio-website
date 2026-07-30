"use client"

import { useState } from "react"
import { portfolioData } from "../../lib/data"

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(0)

  return (
    <div className="h-full flex bg-[#FFF9C4] dark:bg-[#2d2a1e] text-[#333] dark:text-[#e8e4d9]">
      {/* Sidebar */}
      <div className="w-64 bg-[#F5F0D8] dark:bg-[#252215] border-r border-[#e0d8b8] dark:border-[#3d3818]">
        <div className="p-3 text-xs font-semibold uppercase tracking-wider opacity-50">Experience</div>
        {portfolioData.experience.map((exp, i) => (
          <button
            key={i}
            onClick={() => setSelectedNote(i)}
            className={`w-full text-left px-4 py-3 border-b border-[#e0d8b8] dark:border-[#3d3818] transition-colors ${
              selectedNote === i ? "bg-[#fff] dark:bg-[#3d3818]" : "hover:bg-[#fff]/50 dark:hover:bg-[#3d3818]/50"
            }`}
          >
            <div className="text-sm font-medium">{exp.role}</div>
            <div className="text-xs opacity-60 mt-0.5">{exp.company}</div>
            <div className="text-[10px] opacity-40 mt-1 font-mono">{exp.year}</div>
          </button>
        ))}
      </div>

      {/* Note Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-2xl">
          <div className="text-xs font-mono opacity-40 mb-6">{portfolioData.experience[selectedNote].year}</div>
          <h2 className="text-3xl font-serif font-semibold mb-2">{portfolioData.experience[selectedNote].role}</h2>
          <div className="text-lg opacity-60 mb-8">{portfolioData.experience[selectedNote].company}</div>
          <p className="text-base leading-relaxed opacity-80">
            {portfolioData.experience[selectedNote].description}
          </p>
        </div>
      </div>
    </div>
  )
}
