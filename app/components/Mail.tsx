"use client"

import { useState } from "react"
import { Send, Paperclip, Image } from "lucide-react"

export default function Mail() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-bg-dark-secondary">
      {/* Header */}
      <div className="h-12 flex items-center px-4 border-b border-border dark:border-border-dark">
        <div className="text-sm font-medium">New Message</div>
        <div className="ml-auto flex items-center gap-2">
          <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
            <Paperclip size={14} />
          </button>
          <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded">
            <Image size={14} />
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="px-4 border-b border-border dark:border-border-dark">
          <div className="flex items-center h-10 gap-2">
            <span className="text-xs opacity-50 w-16">To:</span>
            <span className="text-sm">deepanshi@example.com</span>
          </div>
          <div className="flex items-center h-10 gap-2 border-t border-border dark:border-border-dark">
            <span className="text-xs opacity-50 w-16">From:</span>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="flex-1 text-sm bg-transparent outline-none placeholder:opacity-30"
              required
            />
          </div>
          <div className="flex items-center h-10 gap-2 border-t border-border dark:border-border-dark">
            <span className="text-xs opacity-50 w-16">Email:</span>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="flex-1 text-sm bg-transparent outline-none placeholder:opacity-30"
              required
            />
          </div>
          <div className="flex items-center h-10 gap-2 border-t border-border dark:border-border-dark">
            <span className="text-xs opacity-50 w-16">Subject:</span>
            <span className="text-sm opacity-60">Portfolio Inquiry</span>
          </div>
        </div>

        <textarea
          placeholder="Write your message here..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="flex-1 p-4 text-sm bg-transparent outline-none resize-none placeholder:opacity-30 leading-relaxed"
          required
        />

        <div className="p-4 border-t border-border dark:border-border-dark flex justify-end">
          <button
            type="submit"
            disabled={sent}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              sent
                ? "bg-green-500 text-white"
                : "bg-[#007AFF] text-white hover:bg-[#0051D5]"
            }`}
          >
            <Send size={14} />
            {sent ? "Sent!" : "Send"}
          </button>
        </div>
      </form>
    </div>
  )
}
