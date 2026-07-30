"use client"

import { Download, ZoomIn, ZoomOut } from "lucide-react"
import { useState } from "react"

export default function Preview() {
  const [scale, setScale] = useState(1)

  return (
    <div className="h-full flex flex-col bg-[#f0f0f0] dark:bg-[#1a1a1a]">
      {/* Toolbar */}
      <div className="h-10 flex items-center justify-between px-4 border-b border-border dark:border-border-dark">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
            className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded"
          >
            <ZoomOut size={14} />
          </button>
          <span className="text-xs font-mono w-12 text-center">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale((s) => Math.min(2, s + 0.1))}
            className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded"
          >
            <ZoomIn size={14} />
          </button>
        </div>
        <a
          href="#"
          className="flex items-center gap-1.5 text-xs bg-[#007AFF] text-white px-3 py-1.5 rounded-md hover:bg-[#0051D5] transition-colors"
        >
          <Download size={12} />
          Download PDF
        </a>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto p-8 flex justify-center">
        <div
          className="bg-white dark:bg-[#242424] shadow-lg w-[210mm] min-h-[297mm] p-12 transition-transform origin-top"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="border-b-2 border-black dark:border-white pb-6 mb-8">
            <h1 className="text-4xl font-serif font-bold">Deepanshi Ruhil</h1>
            <p className="text-lg opacity-60 mt-2">Software Development Engineer</p>
            <div className="flex gap-4 mt-3 text-xs font-mono opacity-50">
              <span>deepanshi@example.com</span>
              <span>github.com/deepanshiruhil</span>
              <span>linkedin.com/in/deepanshiruhil</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Education</h2>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">B.Tech in Computer Science & AI</span>
                    <span className="text-xs opacity-60 font-mono">2021 — 2025</span>
                  </div>
                  <div className="text-sm opacity-60">Indian Institute of Technology — CGPA: 9.2/10</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">Software Development Engineer</span>
                    <span className="text-xs opacity-60 font-mono">2024 — Present</span>
                  </div>
                  <div className="text-sm opacity-60">TechCorp AI</div>
                  <p className="text-sm mt-1 opacity-70 leading-relaxed">
                    Building production ML systems serving 1M+ daily users. Leading inference optimization team.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="font-medium">ML Engineering Intern</span>
                    <span className="text-xs opacity-60 font-mono">2023 — 2024</span>
                  </div>
                  <div className="text-sm opacity-60">Research Labs</div>
                  <p className="text-sm mt-1 opacity-70 leading-relaxed">
                    Developed transformer-based models for document understanding. Published research on efficient attention.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Projects</h2>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">NeuralFlow</span>
                  <span className="text-sm opacity-60"> — Real-time ML Inference Platform</span>
                </div>
                <div>
                  <span className="font-medium">SynapseDB</span>
                  <span className="text-sm opacity-60"> — Vector Database from Scratch</span>
                </div>
                <div>
                  <span className="font-medium">Cipher</span>
                  <span className="text-sm opacity-60"> — End-to-End Encrypted Notes</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Skills</h2>
              <div className="text-sm opacity-70 leading-relaxed">
                Python · C++ · TypeScript · Go · PyTorch · FastAPI · TensorFlow · Docker · Kubernetes · AWS · PostgreSQL · Redis · Linux
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-3">Achievements</h2>
              <div className="space-y-1 text-sm opacity-70">
                <div>Google Summer of Code 2024 — TensorFlow Lite</div>
                <div>ICPC Asia Regionals Finalist — Rank 12</div>
                <div>Best Paper Award — IEEE Conference on AI</div>
                <div>Smart India Hackathon Winner — National Level</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
