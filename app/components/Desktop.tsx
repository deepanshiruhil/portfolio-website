"use client"

import { useState, useCallback } from "react"
import { AnimatePresence } from "framer-motion"
import MenuBar from "./MenuBar"
import Dock from "./Dock"
import Window from "./Window"
import Safari from "./Safari"
import Terminal from "./Terminal"
import VSCode from "./VSCode"
import Notes from "./Notes"
import Photos from "./Photos"
import Preview from "./Preview"
import Mail from "./Mail"

interface AppWindow {
  id: string
  title: string
  appId: string
}

const appConfig: Record<string, { title: string; component: React.ComponentType<any> }> = {
  safari: { title: "Safari", component: Safari },
  finder: { title: "Finder", component: Safari },
  vscode: { title: "VS Code", component: VSCode },
  terminal: { title: "Terminal", component: Terminal },
  notes: { title: "Notes", component: Notes },
  books: { title: "Books", component: Safari },
  photos: { title: "Photos", component: Photos },
  figma: { title: "Figma", component: Safari },
  spotify: { title: "Spotify", component: Safari },
  preview: { title: "Preview", component: Preview },
  achievements: { title: "Achievements", component: Safari },
  mail: { title: "Mail", component: Mail },
}

export default function Desktop() {
  const [windows, setWindows] = useState<AppWindow[]>([
    { id: "safari-1", title: "Safari", appId: "safari" },
  ])
  const [activeWindow, setActiveWindow] = useState("safari-1")
  const [minimizedWindows, setMinimizedWindows] = useState<Set<string>>(new Set())
  const [zIndexCounter, setZIndexCounter] = useState(100)

  const openApp = useCallback((appId: string) => {
    const existing = windows.find((w) => w.appId === appId)
    if (existing) {
      setMinimizedWindows((prev) => {
        const next = new Set(prev)
        next.delete(existing.id)
        return next
      })
      setActiveWindow(existing.id)
      setZIndexCounter((z) => z + 1)
      return
    }

    const config = appConfig[appId]
    if (!config) return

    const newWindow: AppWindow = {
      id: `${appId}-${Date.now()}`,
      title: config.title,
      appId,
    }

    setWindows((prev) => [...prev, newWindow])
    setActiveWindow(newWindow.id)
    setZIndexCounter((z) => z + 1)
  }, [windows])

  const closeWindow = useCallback((windowId: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== windowId))
    setMinimizedWindows((prev) => {
      const next = new Set(prev)
      next.delete(windowId)
      return next
    })
  }, [])

  const minimizeWindow = useCallback((windowId: string) => {
    setMinimizedWindows((prev) => new Set(prev).add(windowId))
  }, [])

  const focusWindow = useCallback((windowId: string) => {
    setActiveWindow(windowId)
    setZIndexCounter((z) => z + 1)
  }, [])

  const getWindowZIndex = useCallback((windowId: string) => {
    return activeWindow === windowId ? zIndexCounter : 50
  }, [activeWindow, zIndexCounter])

  const openApps = windows.filter((w) => !minimizedWindows.has(w.id)).map((w) => w.appId)

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Wallpaper */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#E8DFD0] via-[#F7F3EA] to-[#DDD5C7] dark:from-[#1a1814] dark:via-[#1a1a1a] dark:to-[#141210]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,180,160,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(180,160,140,0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Menu Bar */}
      <MenuBar />

      {/* Windows */}
      <AnimatePresence>
        {windows.map((win, index) => {
          if (minimizedWindows.has(win.id)) return null
          const config = appConfig[win.appId]
          if (!config) return null
          const AppComponent = config.component

          return (
            <Window
              key={win.id}
              id={win.id}
              title={win.title}
              defaultPosition={{ x: 80 + index * 30, y: 60 + index * 20 }}
              defaultSize={
                win.appId === "terminal"
                  ? { width: 700, height: 450 }
                  : win.appId === "mail"
                  ? { width: 600, height: 500 }
                  : { width: 950, height: 650 }
              }
              onClose={() => closeWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
              isActive={activeWindow === win.id}
              onFocus={() => focusWindow(win.id)}
              zIndex={getWindowZIndex(win.id)}
            >
              <AppComponent onClose={() => closeWindow(win.id)} />
            </Window>
          )
        })}
      </AnimatePresence>

      {/* Dock */}
      <Dock onOpenApp={openApp} openApps={openApps} />
    </div>
  )
}
