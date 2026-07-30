"use client"

import { useState } from "react"
import { FileCode, Folder, ChevronRight, ChevronDown, GitBranch } from "lucide-react"

const files = [
  {
    name: "neuralflow",
    type: "folder",
    children: [
      { name: "main.py", type: "file", lang: "python", content: `def serve_model(model_id: str):
    """Load and serve ML model with auto-scaling."""
    config = load_config(model_id)
    engine = TensorRTEngine(config)
    
    @app.post("/predict")
    async def predict(req: PredictionRequest):
        return await engine.infer(req)
` },
      { name: "Dockerfile", type: "file", lang: "dockerfile", content: `FROM nvidia/cuda:12.1-runtime-ubuntu22.04
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]
` },
    ],
  },
  {
    name: "synapsedb",
    type: "folder",
    children: [
      { name: "index.cpp", type: "file", lang: "cpp", content: `class HNSWIndex {
  std::vector<Node> nodes_;
  
public:
  void insert(const Vector& vec) {
    auto neighbors = search_layer(vec, ef_construction_);
    // ...
  }
};
` },
    ],
  },
  { name: "README.md", type: "file", lang: "markdown", content: `# Deepanshi Ruhil

Software Development Engineer | CSAI

## Featured Projects
- NeuralFlow: ML Inference Platform
- SynapseDB: Vector Database
- Cipher: Encrypted Notes
` },
]

export default function VSCode() {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(["neuralflow"]))
  const [activeFile, setActiveFile] = useState<string>("README.md")
  const [fileContent, setFileContent] = useState<string>(files[2].content || "")

  const toggleFolder = (name: string) => {
    const next = new Set(openFolders)
    if (next.has(name)) next.delete(name)
    else next.add(name)
    setOpenFolders(next)
  }

  const findFile = (name: string): { content: string; lang: string } | null => {
    for (const f of files) {
      if (f.type === "folder" && f.children) {
        const found = f.children.find((c) => c.name === name)
        if (found) return { content: found.content || "", lang: found.lang || "text" }
      }
      if (f.name === name) return { content: f.content || "", lang: f.lang || "text" }
    }
    return null
  }

  const openFile = (name: string) => {
    setActiveFile(name)
    const file = findFile(name)
    if (file) setFileContent(file.content)
  }

  const getLangColor = (lang: string) => {
    const colors: Record<string, string> = {
      python: "#FFD43B",
      cpp: "#00599C",
      dockerfile: "#2496ED",
      markdown: "#083FA1",
    }
    return colors[lang] || "#888"
  }

  return (
    <div className="h-full flex bg-[#1e1e1e] text-[#d4d4d4] text-sm">
      {/* Sidebar */}
      <div className="w-56 bg-[#252526] border-r border-[#333] flex flex-col">
        <div className="h-9 flex items-center px-3 text-xs font-medium uppercase tracking-wider opacity-60">
          Explorer
        </div>
        <div className="px-2">
          <div className="text-xs opacity-50 uppercase tracking-wider px-2 py-1">Portfolio</div>
          {files.map((file) => (
            <div key={file.name}>
              {file.type === "folder" ? (
                <>
                  <button
                    onClick={() => toggleFolder(file.name)}
                    className="flex items-center gap-1 w-full px-2 py-0.5 hover:bg-white/5 rounded text-left"
                  >
                    {openFolders.has(file.name) ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                    <Folder size={14} className="text-[#dcb67a]" />
                    <span>{file.name}</span>
                  </button>
                  {openFolders.has(file.name) && file.children && (
                    <div className="ml-4">
                      {file.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => openFile(child.name)}
                          className={`flex items-center gap-1.5 w-full px-2 py-0.5 hover:bg-white/5 rounded text-left ${
                            activeFile === child.name ? "bg-white/10" : ""
                          }`}
                        >
                          <FileCode size={13} style={{ color: getLangColor(child.lang || "") }} />
                          <span className="text-xs">{child.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => openFile(file.name)}
                  className={`flex items-center gap-1.5 w-full px-2 py-0.5 hover:bg-white/5 rounded text-left ${
                    activeFile === file.name ? "bg-white/10" : ""
                  }`}
                >
                  <FileCode size={13} style={{ color: getLangColor(file.lang || "") }} />
                  <span>{file.name}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col">
        {/* Tabs */}
        <div className="flex bg-[#2d2d2d]">
          <div className="px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-[#007acc] text-xs flex items-center gap-2">
            <FileCode size={12} />
            {activeFile}
          </div>
        </div>

        {/* Code Area */}
        <div className="flex-1 overflow-auto p-4 font-mono text-sm">
          {fileContent.split("\n").map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 text-right pr-4 text-[#858585] select-none">{i + 1}</span>
              <span className="text-[#d4d4d4] whitespace-pre">{line}</span>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-[#007acc] text-white text-[11px] flex items-center px-3 justify-between">
          <div className="flex items-center gap-3">
            <GitBranch size={11} />
            <span>main</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Ln 12, Col 34</span>
            <span>UTF-8</span>
            <span>Python</span>
          </div>
        </div>
      </div>
    </div>
  )
}
