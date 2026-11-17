"use client";

import React, { useState } from "react";
import { JOURNEY_FLOW, JourneyNode } from "@/data/portfolioData";
import {
  GitCommit,
  GitBranch,
  Calendar,
  MapPin,
  HelpCircle,
  Cpu,
  Layers,
  Heart,
  ChevronRight,
  ChevronLeft,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ExperienceJourney() {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(2); // Current JRS Innovation role
  const [viewMode, setViewMode] = useState<"flowchart" | "stream">("flowchart");
  const [activeTab, setActiveTab] = useState<"story" | "engineering" | "metrics" | "tradeoff">("engineering");

  const currentNode: JourneyNode = JOURNEY_FLOW[selectedNodeIndex];

  return (
    <section id="experience" className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
              <GitBranch className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>02. Engineering Journey &amp; Flowchart</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              <span className="gradient-text">Journey as a Web Developer</span>
            </h2>
            <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-2xl font-mono">
              From telemetry at GAIL and cryptography at DRDO to building production Next.js SaaS platforms at JRS Innovation.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center p-1 rounded-2xl glass-panel self-start md:self-auto">
            <button
              onClick={() => setViewMode("flowchart")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                viewMode === "flowchart"
                  ? "bg-[var(--primary)] text-white shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>Interactive Flowchart</span>
            </button>
            <button
              onClick={() => setViewMode("stream")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                viewMode === "stream"
                  ? "bg-[var(--primary)] text-white shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Timeline Stream</span>
            </button>
          </div>
        </div>

        {/* FLOWCHART VIEW */}
        {viewMode === "flowchart" && (
          <div className="space-y-6">
            
            {/* Flowchart Connected Rail */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-100 dark:border-purple-900/40">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  Interactive Flow Pipeline &bull; Click Any Stage to Inspect
                </span>
                <span className="text-xs font-mono text-[var(--primary)] font-bold">
                  Stage {selectedNodeIndex + 1} of {JOURNEY_FLOW.length}
                </span>
              </div>

              {/* Connected Stage Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
                {JOURNEY_FLOW.map((node, index) => {
                  const isSelected = selectedNodeIndex === index;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeIndex(index)}
                      className={`text-left p-4 rounded-2xl transition-all duration-200 border flex flex-col justify-between relative group ${
                        isSelected
                          ? "bg-white dark:bg-[#181124] border-purple-400 dark:border-purple-600 shadow-md ring-2 ring-purple-300/40"
                          : "bg-white/60 dark:bg-white/5 border-purple-100 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-white/90"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-xl font-mono text-xs font-bold ${
                          isSelected 
                            ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-xs" 
                            : "bg-purple-100/70 dark:bg-purple-950/40 text-[var(--text-muted)]"
                        }`}>
                          {node.step}
                        </span>
                        
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                          node.status === "Active Production"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                            : node.status === "Next Horizon"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                            : "bg-purple-100/80 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300"
                        }`}>
                          {node.status}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-[var(--primary)] dark:text-purple-300 truncate">
                          {node.company}
                        </h4>
                        <p className="text-sm font-bold text-[var(--foreground)] line-clamp-1">
                          {node.role}
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)] font-mono mt-1">
                          {node.period}
                        </p>
                      </div>

                      {/* Active indicator bar */}
                      {isSelected && (
                        <div className="absolute -bottom-[1px] inset-x-4 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stage Detail Card with Interactive Tabs */}
            <motion.div
              key={currentNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-purple-100 dark:border-purple-900/40">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold mb-1">
                    <span>STAGE {currentNode.step}</span>
                    <span>•</span>
                    <span>{currentNode.stageTitle}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                    {currentNode.role}{" "}
                    <span className="text-[var(--primary)]">@ {currentNode.company}</span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
                      {currentNode.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                      {currentNode.location}
                    </span>
                  </div>
                </div>

                {/* Sub-tab pills */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-purple-100/50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/40">
                  <button
                    onClick={() => setActiveTab("engineering")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "engineering"
                        ? "bg-white dark:bg-[#181124] text-[var(--primary)] dark:text-purple-300 font-bold shadow-xs"
                        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Challenge &amp; Solution
                  </button>
                  <button
                    onClick={() => setActiveTab("story")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "story"
                        ? "bg-white dark:bg-[#181124] text-[var(--primary)] dark:text-purple-300 font-bold shadow-xs"
                        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Human Story
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "metrics"
                        ? "bg-white dark:bg-[#181124] text-[var(--primary)] dark:text-purple-300 font-bold shadow-xs"
                        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Metrics
                  </button>
                  <button
                    onClick={() => setActiveTab("tradeoff")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "tradeoff"
                        ? "bg-white dark:bg-[#181124] text-[var(--primary)] dark:text-purple-300 font-bold shadow-xs"
                        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    Tradeoff
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[160px]">
                {activeTab === "engineering" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40">
                      <div className="text-xs font-mono font-bold text-[var(--accent)] mb-2 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> Engineering Challenge
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                        {currentNode.engineeringChallenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-purple-200/60 dark:border-purple-800/40">
                      <div className="text-xs font-mono font-bold text-[var(--primary)] mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" /> Architectural Solution
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                        {currentNode.keyArchitectureDecision}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "story" && (
                  <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40">
                    <div className="text-xs font-mono font-bold text-[var(--accent)] mb-2 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" /> The Human &amp; Operational Reality
                    </div>
                    <p className="text-sm text-[var(--foreground)] leading-relaxed mb-3">
                      {currentNode.humanStory}
                    </p>
                    <div className="text-xs font-mono text-[var(--text-muted)] pt-3 border-t border-purple-200/50">
                      <span className="font-bold text-[var(--primary)]">Human Impact: </span>
                      {currentNode.humanAndBusinessImpact}
                    </div>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentNode.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/40 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-mono text-[var(--foreground)]">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "tradeoff" && (
                  <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
                    <div className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 mb-2">
                      Tradeoff: {currentNode.keyTradeoff.question}
                    </div>
                    <div className="text-sm font-bold text-[var(--foreground)] mb-2">
                      Decision: <span className="text-[var(--primary)]">{currentNode.keyTradeoff.decision}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-mono">
                      {currentNode.keyTradeoff.rationale}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies Tag Strip */}
              <div className="mt-6 pt-4 border-t border-purple-100 dark:border-purple-900/40 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-[var(--text-muted)] mr-2">Technologies:</span>
                {currentNode.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white/90 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40 text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        )}

        {/* TIMELINE STREAM VIEW */}
        {viewMode === "stream" && (
          <div className="space-y-6">
            {JOURNEY_FLOW.map((node, idx) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-3xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[var(--primary)] text-white text-xs font-mono font-bold flex items-center justify-center">
                      {node.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                      {node.role} <span className="text-[var(--primary)]">@ {node.company}</span>
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {node.period} &bull; {node.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--foreground)] mb-3 leading-relaxed">
                  {node.humanStory}
                </p>

                <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/50 mb-3 text-xs font-mono text-[var(--foreground)]">
                  <span className="font-bold text-[var(--primary)]">Key Architectural Decision: </span>
                  {node.keyArchitectureDecision}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {node.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white dark:bg-white/5 border border-purple-200/60 text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
