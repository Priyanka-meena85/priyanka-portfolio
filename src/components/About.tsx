"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Cpu,
  Network,
  Boxes,
  Terminal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const csIcons = [
    <Code2 key="dsa" className="w-5 h-5 text-[var(--primary)]" />,
    <Boxes key="oop" className="w-5 h-5 text-[var(--accent)]" />,
    <Database key="dbms" className="w-5 h-5 text-[var(--secondary)]" />,
    <Cpu key="os" className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    <Network key="cn" className="w-5 h-5 text-indigo-500" />,
    <Terminal key="sd" className="w-5 h-5 text-[var(--accent)]" />,
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
            <span className="font-bold">01.</span> Overview
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-2xl font-mono">
            Full-stack web developer bridging resilient REST API design with high-performance Next.js frontends.
          </p>
        </div>

        {/* Top Split: Bio & Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Bio text card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div 
              whileHover={{ y: -2 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between"
            >
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--foreground)]">
                <p>
                  {PERSONAL_INFO.bio[0]}
                </p>
                <p className="text-[var(--text-muted)]">
                  {PERSONAL_INFO.bio[1]}
                </p>
              </div>

              <div className="mt-6 text-xs sm:text-sm font-mono p-4 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40 text-[var(--foreground)]">
                <span className="font-bold text-[var(--primary)] dark:text-purple-300">Core Foundation: </span>
                <span>{PERSONAL_INFO.bio[2]}</span>
              </div>
            </motion.div>
          </div>

          {/* 4 Stats Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3, scale: 1.02 }}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between relative group cursor-default"
              >
                <div className="text-xs font-mono text-[var(--text-muted)] mb-2 flex items-center justify-between">
                  <span>{stat.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] opacity-60 group-hover:opacity-100 transition" />
                </div>
                
                <div className="text-3xl sm:text-4xl font-black font-mono gradient-text my-1 tracking-tight">
                  {stat.value}
                </div>

                <div className="text-[11px] text-[var(--text-muted)] font-mono leading-tight">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Computer Science Fundamentals Grid */}
        <div>
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
            CS Fundamentals &amp; Core Strengths
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERSONAL_INFO.csFundamentals.map((item, idx) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                className="glass-panel p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 group cursor-default"
              >
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 group-hover:scale-110 transition-transform">
                  {csIcons[idx % csIcons.length]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
