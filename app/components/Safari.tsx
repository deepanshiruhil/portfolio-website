
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronLeft, ChevronRight, RotateCcw, Plus, X } from "lucide-react"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Education from "../sections/Education"
import Achievements from "../sections/Achievements"
import Resume from "../sections/Resume"
import Contact from "../sections/Contact"

const tabs = [
  { id: "home", label: "Home", component: Hero },
  { id: "about", label: "About", component: About },
  { id: "projects", label: "Projects", component: Projects },
  { id: "skills", label: "Skills", component: Skills },
  { id: "education", label: "Education", component: Education },
  { id: "achievements", label: "Achievements", component: Achievements },
  { id: "resume", label: "Resume", component: Resume },
  { id: "contact", label: "Contact", component: Contact },
]

export default function Safari() {
  const [activeTab, setActiveTab] = useState("home")
  const [openTabs, setOpenTabs] = useState(["home"])

  const addTab = (tabId: string) => {
    if (!openTabs.includes(tabId)) {
      setOpenTabs([...openTabs, tabId])
    }
    setActiveTab(tabId)
  }

  const closeTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation()
    const newTabs = openTabs.filter((t) => t !== tabId)
    setOpenTabs(newTabs)
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1])
    }
  }

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component || Hero

  return (
    <div className="flex flex-col h-full bg-ivory dark:bg-bg-dark-secondary">
      {/* Toolbar */}
      <div className="h-11 flex items-center px-3 gap-2 border-b border-border dark:border-border-dark">
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-60 hover:opacity-100">
            <ChevronLeft size={14} />
          </button>
          <button className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-60 hover:opacity-100">
            <ChevronRight size={14} />
          </button>
          <button className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-60 hover:opacity-100">
            <RotateCcw size={12} />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="h-7 bg-black/5 dark:bg-white/5 rounded-lg flex items-center px-3 gap-2 text-xs">
            <Globe size={11} className="opacity-40" />
            <span className="opacity-60 font-mono">portfolio://deepanshi/{activeTab}</span>
          </div>
        </div>

        <div className="w-20" />
      </div>

      {/* Tabs */}
      <div className="flex items-end px-2 pt-1 gap-0.5 bg-black/[0.02] dark:bg-white/[0.02] border-b border-border dark:border-border-dark">
        {openTabs.map((tabId) => {
          const tab = tabs.find((t) => t.id === tabId)
          if (!tab) return null
          return (
            <button
              key={tabId}
              onClick={() => setActiveTab(tabId)}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs transition-all min-w-[100px] max-w-[160px] ${
                activeTab === tabId
                  ? "bg-ivory dark:bg-bg-dark-secondary font-medium"
                  : "hover:bg-black/5 dark:hover:bg-white/5 opacity-60"
              }`}
            >
              <span className="truncate flex-1 text-left">{tab.label}</span>
              <span
                onClick={(e) => closeTab(e, tabId)}
                className="opacity-0 hover:opacity-100 group-hover:opacity-60 transition-opacity p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
              >
                <X size={10} />
              </span>
              {activeTab === tabId && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#0066CC]"
                />
              )}
            </button>
          )
        })}
        <button
          onClick={() => {
            const available = tabs.find((t) => !openTabs.includes(t.id))
            if (available) addTab(available.id)
          }}
          className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-40 hover:opacity-100 mb-1"
        >
          <Plus size={12} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
