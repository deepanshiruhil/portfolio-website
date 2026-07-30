"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, PenTool, BookOpen, Camera, Palette } from "lucide-react"
import { portfolioData } from "../../lib/data"

const categoryIcons: Record<string, React.ReactNode> = {
  writing: <BookOpen size={16} />,
  art: <Palette size={16} />,
  photography: <Camera size={16} />,
}

const categoryColors: Record<string, string> = {
  writing: "#FF9500",
  art: "#FF2D55",
  photography: "#5856D6",
}

export default function Photos() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const categories = ["writing", "art", "photography"] as const

  const filtered = selectedCategory
    ? portfolioData.creative.filter((c) => c.type === selectedCategory)
    : portfolioData.creative

  return (
    <div className="h-full flex flex-col bg-[#f5f5f5] dark:bg-[#1a1a1a]">
      {/* Toolbar */}
      <div className="h-12 flex items-center px-4 gap-4 border-b border-border dark:border-border-dark">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
            !selectedCategory ? "bg-[#007AFF] text-white" : "hover:bg-black/5 dark:hover:bg-white/5"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-medium px-3 py-1 rounded-full transition-colors flex items-center gap-1.5 capitalize ${
              selectedCategory === cat ? "bg-[#007AFF] text-white" : "hover:bg-black/5 dark:hover:bg-white/5"
            }`}
          >
            {categoryIcons[cat]}
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-3 gap-3">
          {filtered.map((item, i) => (
            <motion.button
              key={i}
              layoutId={`photo-${i}`}
              onClick={() => setSelectedItem(i)}
              className="aspect-square rounded-lg overflow-hidden relative group bg-[#ddd] dark:bg-[#333] flex flex-col items-center justify-center gap-2 hover:ring-2 ring-[#007AFF] transition-all"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: categoryColors[item.type] }}
              >
                {categoryIcons[item.type]}
              </div>
              <div className="text-center px-2">
                <div className="text-sm font-medium">{item.title}</div>
                <div className="text-[10px] opacity-60 uppercase tracking-wider">{item.category}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen Preview */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              layoutId={`photo-${selectedItem}`}
              className="bg-[#f5f5f5] dark:bg-[#242424] rounded-2xl p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: categoryColors[filtered[selectedItem].type] }}
                  >
                    {categoryIcons[filtered[selectedItem].type]}
                  </div>
                  <div>
                    <div className="font-medium">{filtered[selectedItem].title}</div>
                    <div className="text-xs opacity-60">{filtered[selectedItem].category}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="aspect-video bg-[#ddd] dark:bg-[#333] rounded-lg flex items-center justify-center">
                <PenTool size={48} className="opacity-20" />
              </div>
              <p className="mt-4 text-sm opacity-70 leading-relaxed">
                A creative exploration blending technology and artistic expression. 
                This piece represents the intersection of computational thinking and human creativity.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
