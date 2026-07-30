"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Globe,
  FolderOpen,
  Code2,
  Terminal,
  FileText,
  BookOpen,
  Image,
  Mail,
  FileBadge,
  Trophy,
  Trash2,
  Music,
  PenTool,
} from "lucide-react"

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
  color: string
}

interface DockProps {
  onOpenApp: (appId: string) => void
  openApps: string[]
}

export default function Dock({ onOpenApp, openApps }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items: DockItem[] = [
    { id: "safari", icon: <Globe size={22} />, label: "Safari", color: "#0066CC" },
    { id: "finder", icon: <FolderOpen size={22} />, label: "Finder", color: "#1C1C1E" },
    { id: "vscode", icon: <Code2 size={22} />, label: "VS Code", color: "#007ACC" },
    { id: "terminal", icon: <Terminal size={22} />, label: "Terminal", color: "#1C1C1E" },
    { id: "notes", icon: <FileText size={22} />, label: "Notes", color: "#FFCC00" },
    { id: "books", icon: <BookOpen size={22} />, label: "Books", color: "#FF9500" },
    { id: "photos", icon: <Image size={22} />, label: "Photos", color: "#FF3B30" },
    { id: "figma", icon: <PenTool size={22} />, label: "Figma", color: "#A259FF" },
    { id: "spotify", icon: <Music size={22} />, label: "Spotify", color: "#1DB954" },
    { id: "preview", icon: <FileBadge size={22} />, label: "Preview", color: "#5856D6" },
    { id: "achievements", icon: <Trophy size={22} />, label: "Achievements", color: "#FF9500" },
    { id: "mail", icon: <Mail size={22} />, label: "Mail", color: "#007AFF" },
  ]

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.5
    if (distance === 1) return 1.3
    if (distance === 2) return 1.1
    return 1
  }

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9998]">
      <div className="glass-dock rounded-2xl px-3 py-2 flex items-end gap-1">
        {items.map((item, index) => {
          const isOpen = openApps.includes(item.id)
          return (
            <motion.button
              key={item.id}
              onClick={() => onOpenApp(item.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale: getScale(index) }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileTap={{ scale: 0.9 }}
              className="relative flex flex-col items-center group"
            >
              {/* Tooltip */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs px-2 py-1 rounded-md whitespace-nowrap font-medium">
                  {item.label}
                </div>
              </div>

              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-shadow"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              {/* Open Indicator */}
              {isOpen && (
                <motion.div
                  layoutId="dock-dot"
                  className="w-1 h-1 rounded-full bg-current mt-1 opacity-60"
                />
              )}
            </motion.button>
          )
        })}

        {/* Divider */}
        <div className="w-px h-10 bg-current opacity-20 mx-1" />

        {/* Trash */}
        <motion.button
          onMouseEnter={() => setHoveredIndex(items.length)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{ scale: hoveredIndex === items.length ? 1.3 : 1 }}
          className="relative flex flex-col items-center group"
        >
          <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-black/80 dark:bg-white/90 text-white dark:text-black text-xs px-2 py-1 rounded-md whitespace-nowrap font-medium">
              Trash
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-gray-400 dark:bg-gray-600">
            <Trash2 size={22} />
          </div>
        </motion.button>
      </div>
    </div>
  )
}
