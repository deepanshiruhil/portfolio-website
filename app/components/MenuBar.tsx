"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./ThemeProvider"

export default function MenuBar() {
  const { theme, toggleTheme } = useTheme()
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }))
      setDate(now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const menus = ["Finder", "File", "Edit", "View", "History", "Bookmarks", "Window", "Help"]

  return (
    <div className="glass fixed top-0 left-0 right-0 z-[9999] h-[28px] flex items-center px-3 text-[13px] select-none font-normal">
      <div className="flex items-center mr-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.05.05-2.31.71-3.06 1.64-.68.84-1.27 2.18-1.11 3.29 1.18.09 2.38-.6 3.1-1.82"/>
        </svg>
      </div>

      <div className="flex items-center gap-5 mr-auto">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
            className={`transition-colors ${
              menu === "Finder" ? "font-semibold" : "font-normal"
            } hover:opacity-70 ${activeMenu === menu ? "opacity-100" : ""}`}
          >
            {menu}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button className="hover:opacity-70 transition-opacity p-0.5" aria-label="Control Center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
            <rect x="2" y="2" width="9" height="9" rx="2" opacity="0.9"/>
            <rect x="13" y="2" width="9" height="5" rx="2" opacity="0.6"/>
            <rect x="13" y="9" width="9" height="5" rx="2" opacity="0.6"/>
            <rect x="2" y="13" width="9" height="9" rx="2" opacity="0.9"/>
            <rect x="13" y="16" width="9" height="6" rx="2" opacity="0.6"/>
          </svg>
        </button>

        <button className="hover:opacity-70 transition-opacity p-0.5" aria-label="Siri">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
            <circle cx="12" cy="12" r="3" opacity="0.9"/>
            <circle cx="12" cy="4" r="1.5" opacity="0.5"/>
            <circle cx="12" cy="20" r="1.5" opacity="0.5"/>
            <circle cx="4" cy="12" r="1.5" opacity="0.5"/>
            <circle cx="20" cy="12" r="1.5" opacity="0.5"/>
            <circle cx="6.34" cy="6.34" r="1.2" opacity="0.4"/>
            <circle cx="17.66" cy="6.34" r="1.2" opacity="0.4"/>
            <circle cx="6.34" cy="17.66" r="1.2" opacity="0.4"/>
            <circle cx="17.66" cy="17.66" r="1.2" opacity="0.4"/>
          </svg>
        </button>

        <button className="hover:opacity-70 transition-opacity p-0.5" aria-label="Spotlight Search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-80">
            <circle cx="11" cy="11" r="7"/>
            <line x1="20" y1="20" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        <div className="opacity-80">
          <svg width="16" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C7.46 3 3.34 4.78.29 7.67l11.71 13.66L23.71 7.67C20.66 4.78 16.54 3 12 3zm0 2c3.7 0 7.13 1.46 9.67 3.9L12 18.34 2.33 8.9C4.87 6.46 8.3 5 12 5z" opacity="0.9"/>
            <path d="M12 8c-2.5 0-4.8 1-6.5 2.6L12 18l6.5-7.4C16.8 9 14.5 8 12 8z" opacity="0.7"/>
          </svg>
        </div>

        <div className="flex items-center gap-1 opacity-80">
          <span className="text-[11px] font-medium tabular-nums">99%</span>
          <svg width="22" height="11" viewBox="0 0 24 12" fill="none" className="mt-[1px]">
            <rect x="0.5" y="0.5" width="20" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15"/>
            <rect x="2" y="2" width="16" height="8" rx="1" fill="currentColor" opacity="0.9"/>
            <rect x="21.5" y="3.5" width="2" height="5" rx="1" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        <button
          onClick={toggleTheme}
          className="hover:opacity-70 transition-opacity p-0.5"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2 text-[13px]">
          <span className="opacity-80">{date}</span>
          <span className="font-medium opacity-90 tabular-nums">{time}</span>
        </div>
      </div>
    </div>
  )
}
