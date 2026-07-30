"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface TerminalProps {
  onClose: () => void
}

export default function Terminal({ onClose }: TerminalProps) {
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "Last login: " + new Date().toLocaleString() + " on ttys001" },
    { type: "output", text: "" },
    { type: "output", text: "┌─────────────────────────────────────────┐" },
    { type: "output", text: "│  Welcome to Deepanshi OS v1.0           │" },
    { type: "output", text: "│  Type 'help' to see available commands  │" },
    { type: "output", text: "└─────────────────────────────────────────┘" },
    { type: "output", text: "" },
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  skills      — Show technical skills",
      "  languages   — Programming languages",
      "  frameworks  — Frameworks & libraries",
      "  tools       — Development tools",
      "  experience  — Work experience",
      "  projects    — Project list",
      "  education   — Education background",
      "  clear       — Clear terminal",
      "  exit        — Close terminal",
    ],
    skills: [
      "TECHNICAL SKILLS",
      "═══════════════════════════════════════",
      "",
      "Machine Learning     ████████████████████  95%",
      "Deep Learning        ███████████████████░  90%",
      "Backend Engineering  ██████████████████░░  88%",
      "System Design        █████████████████░░░  85%",
      "Distributed Systems  ████████████████░░░░  80%",
      "MLOps                ███████████████░░░░░  78%",
      "",
    ],
    languages: [
      "PROGRAMMING LANGUAGES",
      "═══════════════════════════════════════",
      "",
      "Python        ████████████████████████  Expert",
      "C++           █████████████████████░░░  Advanced",
      "TypeScript    ████████████████████░░░░  Advanced",
      "Go            █████████████████░░░░░░░  Intermediate",
      "Rust          ███████████████░░░░░░░░░  Intermediate",
      "SQL           ███████████████████░░░░░  Advanced",
      "",
    ],
    frameworks: [
      "FRAMEWORKS & LIBRARIES",
      "═══════════════════════════════════════",
      "",
      "PyTorch       ████████████████████████  Expert",
      "FastAPI       ████████████████████████  Expert",
      "TensorFlow    ████████████████████░░░░  Advanced",
      "Next.js       ████████████████████░░░░  Advanced",
      "Node.js       ██████████████████░░░░░░  Advanced",
      "React         ███████████████████░░░░░  Advanced",
      "",
    ],
    tools: [
      "DEVELOPMENT TOOLS",
      "═══════════════════════════════════════",
      "",
      "Docker & K8s  █████████████████████░░░  Advanced",
      "Git & CI/CD   ███████████████████████░  Expert",
      "AWS / GCP     ████████████████████░░░░  Advanced",
      "Linux         ███████████████████████░  Expert",
      "PostgreSQL    ████████████████████░░░░  Advanced",
      "Redis         ██████████████████░░░░░░  Advanced",
      "",
    ],
    experience: [
      "WORK EXPERIENCE",
      "═══════════════════════════════════════",
      "",
      "2024 — Present  Software Development Engineer",
      "                TechCorp AI",
      "",
      "2023 — 2024     ML Engineering Intern",
      "                Research Labs",
      "",
      "2022 — 2023     Backend Developer",
      "                StartupXYZ",
      "",
    ],
    projects: [
      "PROJECTS",
      "═══════════════════════════════════════",
      "",
      "• NeuralFlow    — Real-time ML Inference Platform",
      "• SynapseDB     — Vector Database from Scratch",
      "• Cipher        — End-to-End Encrypted Notes",
      "• Atlas Vision  — Autonomous Navigation System",
      "• Zenith        — Educational Compiler",
      "• Flux Graph    — Distributed Graph Processing",
      "",
    ],
    education: [
      "EDUCATION",
      "═══════════════════════════════════════",
      "",
      "B.Tech in CSAI",
      "Indian Institute of Technology",
      "2021 — 2025  |  CGPA: 9.2/10",
      "",
    ],
    clear: [],
    exit: ["Closing terminal..."],
  }

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const newHistory = [...history, { type: "input" as const, text: `deepanshi@portfolio ~ % ${cmd}` }]

    if (trimmed === "clear") {
      setHistory([])
      setInput("")
      return
    }

    if (trimmed === "exit") {
      setHistory([...newHistory, { type: "output" as const, text: "Goodbye!" }])
      setTimeout(onClose, 500)
      setInput("")
      return
    }

    const response = commands[trimmed]
    if (response) {
      response.forEach((line) => {
        newHistory.push({ type: "output" as const, text: line })
      })
    } else if (trimmed) {
      newHistory.push({ type: "output" as const, text: `zsh: command not found: ${trimmed}` })
      newHistory.push({ type: "output" as const, text: "Type 'help' for available commands" })
    }

    newHistory.push({ type: "output" as const, text: "" })
    setHistory(newHistory)
    setInput("")
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  return (
    <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-sm flex flex-col">
      {/* Terminal Header */}
      <div className="h-7 bg-[#2d2d2d] flex items-center px-3 gap-2 text-xs">
        <span className="opacity-50">deepanshi@portfolio — zsh — 80×24</span>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-auto p-3">
        {history.map((line, i) => (
          <div key={i} className={line.type === "input" ? "text-[#7ee787]" : ""}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="text-[#7ee787]">deepanshi@portfolio</span>
          <span className="text-white">~</span>
          <span className="text-[#7ee787]">%</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(input)
              }
            }}
            className="flex-1 bg-transparent outline-none text-inherit ml-1"
            autoFocus
            spellCheck={false}
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "steps(1)" }}
            className="w-2 h-4 bg-[#d4d4d4]"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
