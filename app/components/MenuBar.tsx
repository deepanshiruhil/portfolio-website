"use client"

import { useState, useEffect } from "react"
import { Wifi, Battery, Search, Moon, Sun, Command } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function MenuBar() {
  const { theme, toggleTheme } = useTheme()
  const [time, setTime] = useState("")
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const menus = ["Finder", "File", "Edit", "View", "History", "Bookmarks", "Window", "Help"]

  return (
    <div className="glass fixed top-0 left-0 right-0 z-[9999] h-8 flex items-center px-4 text-xs select-none">
      {/* Apple Logo */}
      <div className="flex items-center gap-1 mr-4">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.05.05-2.31.71-3.06 1.64-.68.84-1.27 2.18-1.11 3.29 1.18.09 2.38-.6 3.1-1.82"/>
        </svg>
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-4 mr-auto">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
            className={`font-medium transition-colors ${
              menu === "Finder" ? "font-semibold" : ""
            } hover:opacity-70 ${activeMenu === menu ? "opacity-100" : ""}`}
          >
            {menu}
          </button>
        ))}
      </div>

      {/* System Icons */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="hover:opacity-70 transition-opacity p-1"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
        </button>
        <Wifi size={13} className="opacity-80" />
        <Search size={13} className="opacity-80" />
        <Command size={13} className="opacity-80" />
        <Battery size={13} className="opacity-80" />
        <span className="font-mono text-[11px] opacity-90 tabular-nums">{time}</span>
      </div>
    </div>
  )
}
