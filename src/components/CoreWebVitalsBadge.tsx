"use client";

import React, { useState } from "react";
import { Gauge, ChevronUp, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CoreWebVitalsBadge() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden sm:block font-mono">
      <div className="relative">
        {/* Toggle Pill */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 dark:bg-[#150f20]/90 hover:bg-purple-50 dark:hover:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/40 text-[var(--foreground)] text-xs shadow-lg shadow-purple-500/5 backdrop-blur-xl transition active:scale-95 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <Gauge className="w-3.5 h-3.5 text-[var(--primary)]" />
          <span className="font-semibold">Lighthouse 98</span>
          <span className="text-[var(--text-muted)]">|</span>
          <span className="text-[var(--accent)] text-[11px] font-bold">CWV Passed</span>
          {expanded ? (
            <ChevronDown className="w-3 h-3 text-[var(--text-muted)]" />
          ) : (
            <ChevronUp className="w-3 h-3 text-[var(--text-muted)]" />
          )}
        </button>

        {/* Detailed Metrics Flyout */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-12 right-0 w-72 p-4 rounded-2xl bg-white/95 dark:bg-[#150f20]/95 border border-purple-200/80 dark:border-purple-800/40 shadow-2xl backdrop-blur-2xl text-xs space-y-2.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-purple-100 dark:border-purple-900/40">
                <span className="text-[var(--text-muted)] text-[11px] uppercase tracking-wider flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3 text-[var(--primary)]" /> Web Vitals Audit
                </span>
                <span className="text-emerald-500 font-bold text-[11px]">GRADE A+</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[var(--foreground)]">
                  <span className="text-[var(--text-muted)]">Largest Contentful Paint</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">1.2s (&lt; 2.5s)</span>
                </div>
                <div className="flex items-center justify-between text-[var(--foreground)]">
                  <span className="text-[var(--text-muted)]">Cumulative Layout Shift</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">0.00 (&lt; 0.1)</span>
                </div>
                <div className="flex items-center justify-between text-[var(--foreground)]">
                  <span className="text-[var(--text-muted)]">First Input Delay / INP</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">&lt; 20ms</span>
                </div>
                <div className="flex items-center justify-between text-[var(--foreground)]">
                  <span className="text-[var(--text-muted)]">Total Blocking Time</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">0ms</span>
                </div>
              </div>

              <div className="pt-2 border-t border-purple-100 dark:border-purple-900/40 text-[10px] text-[var(--text-muted)] leading-tight">
                Held to high production standards across Next.js SSR/ISR frontends at JRS Innovation.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
