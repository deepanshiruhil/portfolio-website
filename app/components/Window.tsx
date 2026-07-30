"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { Minus, Square, X } from "lucide-react"

interface WindowProps {
  id: string
  title: string
  icon?: React.ReactNode
  defaultPosition?: { x: number; y: number }
  defaultSize?: { width: number; height: number }
  children: React.ReactNode
  onClose: () => void
  onMinimize: () => void
  isActive: boolean
  onFocus: () => void
  zIndex: number
}

export default function Window({
  id,
  title,
  icon,
  defaultPosition = { x: 100, y: 60 },
  defaultSize = { width: 900, height: 600 },
  children,
  onClose,
  onMinimize,
  isActive,
  onFocus,
  zIndex,
}: WindowProps) {
  const [position, setPosition] = useState(defaultPosition)
  const [size, setSize] = useState(defaultSize)
  const [isDragging, setIsDragging] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [prevState, setPrevState] = useState({ position: defaultPosition, size: defaultSize })
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number } | null>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".window-controls")) return
    setIsDragging(true)
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    }
    onFocus()
  }, [position, onFocus])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !dragRef.current || isMaximized) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    setPosition({
      x: dragRef.current.initialX + dx,
      y: Math.max(32, dragRef.current.initialY + dy),
    })
  }, [isDragging, isMaximized])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    dragRef.current = null
  }, [])

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(prevState.position)
      setSize(prevState.size)
      setIsMaximized(false)
    } else {
      setPrevState({ position, size })
      setPosition({ x: 0, y: 32 })
      setSize({ width: window.innerWidth, height: window.innerHeight - 32 })
      setIsMaximized(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`absolute rounded-xl overflow-hidden window-shadow bg-ivory dark:bg-bg-dark-secondary flex flex-col ${
        isActive ? "ring-1 ring-black/10 dark:ring-white/10" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
        cursor: isDragging ? "grabbing" : "default",
      }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className="h-9 flex items-center px-4 select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isMaximized ? "default" : "grab" }}
      >
        {/* Traffic Lights */}
        <div className="window-controls flex items-center gap-2 mr-4">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black/60" />
          </button>
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors flex items-center justify-center group"
          >
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black/60" />
          </button>
          <button
            onClick={handleMaximize}
            className="w-3 h-3 rounded-full bg-[#28CA42] hover:bg-[#28CA42]/80 transition-colors flex items-center justify-center group"
          >
            <Square size={6} className="opacity-0 group-hover:opacity-100 text-black/60" />
          </button>
        </div>

        {/* Title */}
        <div className="flex-1 text-center text-xs font-medium opacity-70 -ml-16">
          {icon && <span className="inline-flex mr-1.5 align-text-bottom">{icon}</span>}
          {title}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </motion.div>
  )
}
