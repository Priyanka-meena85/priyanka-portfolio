"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal as TerminalIcon, Sparkles, Play, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TAB_FILES = [
  {
    name: "developer.config.ts",
    language: "typescript",
    content: `// Full-Stack Web Developer Profile
import { WebDeveloper } from "@production/stack";

export const priyankaMeena: WebDeveloper = {
  name: "Priyanka Meena",
  title: "Full-Stack Web Developer",
  location: "Jaipur, Rajasthan, India",
  status: "Available for Full-Stack Web Developer Roles",
  livePlatforms: [
    "OxMaint AI", 
    "iFactory AI", 
    "FleetRabbit"
  ],
  stack: {
    frontend: ["React.js", "Next.js 14 (SSR/ISR)", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC"],
    database: ["MongoDB (Mongoose)", "PostgreSQL", "SQL"],
    cloud: ["Vercel", "Render", "MongoDB Atlas"]
  },
  performanceCommitments: {
    lighthousePerformance: "85+",
    coreWebVitals: { lcp: "< 2.5s", cls: "< 0.1" },
    dailySEOThroughput: "50+ pages/day",
    organicLift: "+40% traffic growth"
  }
};`,
  },
  {
    name: "production_metrics.env",
    language: "bash",
    content: `# Live Production SaaS Metrics
PRODUCTION_PLATFORMS_COUNT=3
CURRENT_COMPANY="JRS Innovation Pvt. Ltd."
ROLE="Full-Stack Software Engineering Intern"
LIGHTHOUSE_TARGET="85+"
CORE_WEB_VITALS="PASSING (LCP<2.5s, CLS<0.1)"
SEO_PIPELINE="50+ pages/day automated"
ORGANIC_LIFT="+40% organic traffic"
PREV_INTERNSHIPS="DRDO (Cryptography), GAIL (Telemetry)"`,
  },
  {
    name: "contact_cli.sh",
    language: "bash",
    content: `# Send message directly:
curl -X POST https://priyankameena.dev/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Recruiter", "message": "Let us talk!"}'

# Direct Reach:
EMAIL="Priyankameena4656@gmail.com"
PHONE="+91 85039 96575"
LOCATION="Jaipur, Rajasthan, India"`,
  },
];

export function Terminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [commandOutput, setCommandOutput] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(TAB_FILES[activeTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCommand = (cmd: string) => {
    setActiveCommand(cmd);
    if (cmd === "npm run audit") {
      setCommandOutput(`✔ Lighthouse Performance: 96/100
✔ LCP: 1.2s (Threshold < 2.5s)
✔ CLS: 0.00 (Threshold < 0.1)
✔ Security: JWT HttpOnly + CORS
✔ Core Web Vitals: 100% Passed`);
    } else if (cmd === "git log --oneline -n 3") {
      setCommandOutput(`9df8a3c feat(seo): architect 50+ pages/day content pipeline (+40% traffic)
3e1b74a perf(nextjs): optimize SSR/ISR chunks and Core Web Vitals (LCP < 2.5s)
c45a901 feat(auth): ship JWT role-based access control with Mongoose indexing`);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-purple-200/80 dark:border-purple-800/40 bg-white/90 dark:bg-[#150f20]/90 backdrop-blur-xl shadow-xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-purple-50/70 dark:bg-purple-950/40 border-b border-purple-200/60 dark:border-purple-800/40 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[var(--text-muted)] text-xs flex items-center gap-1.5 font-sans font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
            priyanka@web-dev: ~/portfolio
            <span className="text-[var(--text-muted)] font-mono text-[11px]">(</span>
            <span className="text-[var(--accent)] font-mono text-[11px] font-semibold">main</span>
            <span className="text-[var(--text-muted)] font-mono text-[11px]">)</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] text-[var(--text-muted)] hover:text-[var(--foreground)] bg-white/80 dark:bg-white/5 hover:bg-purple-100/60 dark:hover:bg-purple-900/30 transition border border-purple-200/50 dark:border-purple-800/40"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="text-emerald-600 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-[var(--text-muted)]" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-purple-100/30 dark:bg-purple-950/20 border-b border-purple-200/60 dark:border-purple-800/40 overflow-x-auto no-scrollbar">
        {TAB_FILES.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => {
              setActiveTab(idx);
              setCommandOutput(null);
              setActiveCommand(null);
            }}
            className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all flex items-center gap-2 border-t border-x ${
              activeTab === idx
                ? "bg-white dark:bg-[#150f20] text-[var(--primary)] dark:text-purple-300 border-purple-200/80 dark:border-purple-800/50 font-semibold shadow-xs"
                : "text-[var(--text-muted)] hover:text-[var(--foreground)] border-transparent"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? "bg-[var(--accent)]" : "bg-purple-300/60"}`} />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto text-[var(--foreground)] leading-relaxed font-mono">
        <pre className="text-xs sm:text-[13px] font-mono whitespace-pre">
          {TAB_FILES[activeTab].content.split("\n").map((line, i) => (
            <div key={i} className="flex">
              <span className="inline-block w-8 text-right pr-4 text-[var(--text-muted)] opacity-50 select-none text-xs">
                {i + 1}
              </span>
              <span className="flex-1">
                {line.startsWith("//") || line.startsWith("#") ? (
                  <span className="text-[var(--text-muted)] opacity-80 italic">{line}</span>
                ) : line.includes("export") || line.includes("import") ? (
                  <span className="text-[var(--primary)] font-semibold">{line}</span>
                ) : line.includes(":") ? (
                  <span>
                    <span className="text-purple-700 dark:text-purple-300">{line.split(":")[0]}</span>:
                    <span className="text-[var(--accent)] font-medium">{line.slice(line.indexOf(":") + 1)}</span>
                  </span>
                ) : (
                  line
                )}
              </span>
            </div>
          ))}
        </pre>

        {/* Interactive Simulation Strip */}
        <div className="mt-4 pt-3 border-t border-purple-200/50 dark:border-purple-800/40 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-[var(--text-muted)] font-sans flex items-center gap-1 font-medium">
            <Sparkles className="w-3 h-3 text-[var(--primary)]" /> Live Action:
          </span>
          <button
            onClick={() => runCommand("npm run audit")}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-[var(--primary)] dark:text-purple-300 border border-purple-300/40 text-[11px] font-semibold transition active:scale-95"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            npm run audit
          </button>
          <button
            onClick={() => runCommand("git log --oneline -n 3")}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[var(--secondary)] dark:text-blue-300 border border-blue-300/40 text-[11px] font-semibold transition active:scale-95"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            git log -n 3
          </button>
        </div>

        {/* Live Simulation Output */}
        <AnimatePresence>
          {commandOutput && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 p-3 rounded-xl bg-purple-50/90 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-xs font-mono text-[var(--foreground)] shadow-inner"
            >
              <div className="text-[var(--text-muted)] mb-1 flex items-center gap-1.5 text-[11px]">
                <span className="text-[var(--accent)] font-bold">$</span> {activeCommand}
              </div>
              <div className="whitespace-pre-line text-xs font-mono text-purple-900 dark:text-purple-200">
                {commandOutput}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
