"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface DockProps {
  onOpenApp: (appId: string) => void
  openApps: string[]
}

// Realistic macOS-style app icons as SVG components
const SafariIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="white"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#0066CC" strokeWidth="2.5"/>
    <circle cx="32" cy="32" r="3" fill="#0066CC"/>
    <line x1="32" y1="8" x2="32" y2="56" stroke="#0066CC" strokeWidth="1.5" opacity="0.3"/>
    <line x1="8" y1="32" x2="56" y2="32" stroke="#0066CC" strokeWidth="1.5" opacity="0.3"/>
    <line x1="15" y1="15" x2="49" y2="49" stroke="#0066CC" strokeWidth="1" opacity="0.2"/>
    <line x1="49" y1="15" x2="15" y2="49" stroke="#0066CC" strokeWidth="1" opacity="0.2"/>
    <polygon points="32,14 34,30 50,32 34,34 32,50 30,34 14,32 30,30" fill="#0066CC"/>
  </svg>
)

const FinderIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <defs>
      <linearGradient id="finderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E9AFF"/>
        <stop offset="100%" stopColor="#0066CC"/>
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#finderGrad)"/>
    <rect x="14" y="18" width="36" height="28" rx="3" fill="none" stroke="white" strokeWidth="2.5" opacity="0.9"/>
    <circle cx="32" cy="32" r="10" fill="none" stroke="white" strokeWidth="2" opacity="0.9"/>
    <circle cx="32" cy="32" r="3" fill="white" opacity="0.9"/>
    <path d="M20 18 L24 14 L40 14 L44 18" fill="none" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
    <path d="M24 14 L24 18 M40 14 L40 18" stroke="white" strokeWidth="2" opacity="0.6"/>
  </svg>
)

const VSCodeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#2C2C32"/>
    <path d="M42 12 L52 18 L52 46 L42 52" fill="none" stroke="#007ACC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 20 L42 32 L20 44" fill="none" stroke="#007ACC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M42 32 L52 32" stroke="#007ACC" strokeWidth="4" strokeLinecap="round"/>
    <path d="M20 20 L12 16 L12 48 L20 44" fill="#007ACC" opacity="0.3"/>
  </svg>
)

const TerminalIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#1C1C1E"/>
    <rect x="8" y="8" width="48" height="48" rx="10" fill="#2C2C2E"/>
    <text x="14" y="26" fill="#4CD964" fontFamily="monospace" fontSize="10" fontWeight="bold">$</text>
    <rect x="22" y="20" width="20" height="2" rx="1" fill="#4CD964" opacity="0.8"/>
    <rect x="14" y="30" width="28" height="2" rx="1" fill="#8E8E93" opacity="0.6"/>
    <rect x="14" y="38" width="20" height="2" rx="1" fill="#8E8E93" opacity="0.4"/>
    <rect x="14" y="46" width="24" height="2" rx="1" fill="#8E8E93" opacity="0.3"/>
  </svg>
)

const NotesIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#FFCC00"/>
    <rect x="12" y="10" width="40" height="44" rx="4" fill="white" opacity="0.95"/>
    <line x1="20" y1="22" x2="44" y2="22" stroke="#C4C4C4" strokeWidth="1.5"/>
    <line x1="20" y1="30" x2="44" y2="30" stroke="#C4C4C4" strokeWidth="1.5"/>
    <line x1="20" y1="38" x2="36" y2="38" stroke="#C4C4C4" strokeWidth="1.5"/>
    <line x1="20" y1="46" x2="40" y2="46" stroke="#C4C4C4" strokeWidth="1.5"/>
    <rect x="12" y="10" width="40" height="8" rx="4" fill="#FFCC00" opacity="0.3"/>
  </svg>
)

const BooksIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#FF9500"/>
    <rect x="16" y="12" width="32" height="40" rx="3" fill="white" opacity="0.95"/>
    <rect x="20" y="16" width="24" height="32" rx="1" fill="none" stroke="#FF9500" strokeWidth="1.5" opacity="0.4"/>
    <line x1="32" y1="16" x2="32" y2="48" stroke="#FF9500" strokeWidth="1" opacity="0.3"/>
    <text x="24" y="30" fill="#FF9500" fontFamily="serif" fontSize="8" fontWeight="bold" opacity="0.6">A</text>
  </svg>
)

const PhotosIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="white"/>
    <circle cx="32" cy="32" r="22" fill="none" stroke="#E5E5EA" strokeWidth="2"/>
    <circle cx="32" cy="18" r="6" fill="#FF3B30" opacity="0.9"/>
    <circle cx="44" cy="26" r="6" fill="#FF9500" opacity="0.9"/>
    <circle cx="44" cy="38" r="6" fill="#FFCC00" opacity="0.9"/>
    <circle cx="32" cy="46" r="6" fill="#4CD964" opacity="0.9"/>
    <circle cx="20" cy="38" r="6" fill="#5AC8FA" opacity="0.9"/>
    <circle cx="20" cy="26" r="6" fill="#5856D6" opacity="0.9"/>
    <circle cx="32" cy="32" r="5" fill="white"/>
  </svg>
)

const FigmaIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#1E1E1E"/>
    <circle cx="28" cy="22" r="7" fill="#F24E1E"/>
    <circle cx="28" cy="36" r="7" fill="#FF7262"/>
    <circle cx="42" cy="22" r="7" fill="#A259FF"/>
    <circle cx="42" cy="36" r="7" fill="#1ABCFE"/>
    <circle cx="28" cy="50" r="7" fill="#0ACF83"/>
  </svg>
)

const SpotifyIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#1DB954"/>
    <circle cx="32" cy="32" r="20" fill="#1ED760"/>
    <path d="M24 26 Q32 22 42 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 34 Q32 30 40 32" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 42 Q32 38 38 40" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
)

const PreviewIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#5856D6"/>
    <rect x="14" y="18" width="36" height="28" rx="3" fill="white" opacity="0.95"/>
    <circle cx="32" cy="32" r="8" fill="none" stroke="#5856D6" strokeWidth="2"/>
    <circle cx="32" cy="32" r="3" fill="#5856D6"/>
    <line x1="20" y1="14" x2="20" y2="18" stroke="white" strokeWidth="2" opacity="0.5"/>
    <line x1="44" y1="14" x2="44" y2="18" stroke="white" strokeWidth="2" opacity="0.5"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#007AFF"/>
    <rect x="12" y="18" width="40" height="28" rx="4" fill="white" opacity="0.95"/>
    <path d="M12 22 L32 36 L52 22" fill="none" stroke="#007AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22 L12 42 Q12 46 16 46 L48 46 Q52 46 52 42 L52 22" fill="none" stroke="#007AFF" strokeWidth="1.5" opacity="0.3"/>
  </svg>
)

const TrashIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <rect width="64" height="64" rx="14" fill="#8E8E93"/>
    <rect x="20" y="12" width="24" height="6" rx="2" fill="#636366"/>
    <rect x="16" y="18" width="32" height="34" rx="3" fill="#636366"/>
    <line x1="26" y1="26" x2="26" y2="42" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="26" x2="32" y2="42" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round"/>
    <line x1="38" y1="26" x2="38" y2="42" stroke="#8E8E93" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function TrophyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#FF9500"/>
      <path d="M20 16 L20 28 Q20 36 32 36 Q44 36 44 28 L44 16" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="18" y1="16" x2="46" y2="16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="32" y1="36" x2="32" y2="46" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="24" y1="46" x2="40" y2="46" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

interface DockItem {
  id: string
  icon: React.ReactNode
  label: string
}

export default function Dock({ onOpenApp, openApps }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items: DockItem[] = [
    { id: "safari", icon: <SafariIcon />, label: "Safari" },
    { id: "finder", icon: <FinderIcon />, label: "Finder" },
    { id: "vscode", icon: <VSCodeIcon />, label: "VS Code" },
    { id: "terminal", icon: <TerminalIcon />, label: "Terminal" },
    { id: "notes", icon: <NotesIcon />, label: "Notes" },
    { id: "books", icon: <BooksIcon />, label: "Books" },
    { id: "photos", icon: <PhotosIcon />, label: "Photos" },
    { id: "figma", icon: <FigmaIcon />, label: "Figma" },
    { id: "spotify", icon: <SpotifyIcon />, label: "Spotify" },
    { id: "preview", icon: <PreviewIcon />, label: "Preview" },
    { id: "achievements", icon: <TrophyIcon />, label: "Achievements" },
    { id: "mail", icon: <MailIcon />, label: "Mail" },
  ]

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.55
    if (distance === 1) return 1.35
    if (distance === 2) return 1.15
    return 1
  }

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[9998]">
      <div className="glass-dock rounded-[22px] px-2 pb-2 pt-2 flex items-end gap-1">
        {items.map((item, index) => {
          const isOpen = openApps.includes(item.id)
          return (
            <motion.button
              key={item.id}
              onClick={() => onOpenApp(item.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale: getScale(index), y: hoveredIndex === index ? -8 : 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              whileTap={{ scale: 0.92 }}
              className="relative flex flex-col items-center group"
            >
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-1 group-hover:translate-y-0">
                <div className="bg-black/80 dark:bg-white/90 text-white dark:text-black text-[11px] px-3 py-1 rounded-lg whitespace-nowrap font-medium shadow-lg">
                  {item.label}
                </div>
              </div>
              <div className="w-[52px] h-[52px] rounded-[13px] overflow-hidden shadow-md transition-shadow group-hover:shadow-xl">
                {item.icon}
              </div>
              {isOpen && (
                <div className="w-1 h-1 rounded-full bg-current mt-1 opacity-50" />
              )}
            </motion.button>
          )
        })}
        <div className="w-px h-8 bg-current opacity-15 mx-1 mb-2" />
        <motion.button
          onMouseEnter={() => setHoveredIndex(items.length)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{ scale: hoveredIndex === items.length ? 1.35 : 1, y: hoveredIndex === items.length ? -8 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative flex flex-col items-center group mb-[2px]"
        >
          <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-1 group-hover:translate-y-0">
            <div className="bg-black/80 dark:bg-white/90 text-white dark:text-black text-[11px] px-3 py-1 rounded-lg whitespace-nowrap font-medium shadow-lg">
              Trash
            </div>
          </div>
          <div className="w-[52px] h-[52px] rounded-[13px] overflow-hidden shadow-md">
            <TrashIcon />
          </div>
        </motion.button>
      </div>
    </div>
  )
}
