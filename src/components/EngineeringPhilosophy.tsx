"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Gauge,
  Layers,
  ShieldAlert,
  Users,
  Quote,
  Sparkles,
  Heart,
} from "lucide-react";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Gauge: <Gauge className="w-5 h-5 text-[var(--accent)]" />,
  Layers: <Layers className="w-5 h-5 text-[var(--primary)]" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-indigo-500" />,
  Users: <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
};

export function EngineeringPhilosophy() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
            <Heart className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Human Touch &amp; Development Principles</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            <span className="gradient-text">Engineering with Empathy</span>
          </h2>
          <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-2xl font-mono">
            Writing code isn't merely typing syntax; it's designing fast, resilient experiences for the people using them.
          </p>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Pillar Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PERSONAL_INFO.engineeringPrinciples.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.title}
                  onClick={() => setActivePillar(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between ${
                    isActive
                      ? "bg-white dark:bg-[#181124] border-purple-300 dark:border-purple-700 shadow-md translate-x-1"
                      : "glass-panel hover:border-purple-200 dark:hover:border-purple-800"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/40">
                      {PILLAR_ICONS[pillar.icon]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        {pillar.tag}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[var(--foreground)]">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                  <span className={`text-xs font-mono font-semibold transition-transform ${isActive ? "text-[var(--primary)] translate-x-1" : "text-gray-300"}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Display Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/40">
                        {PILLAR_ICONS[PERSONAL_INFO.engineeringPrinciples[activePillar].icon]}
                      </div>
                      <span className="text-xs font-mono font-bold text-[var(--primary)] uppercase tracking-wider">
                        {PERSONAL_INFO.engineeringPrinciples[activePillar].tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Principle 0{activePillar + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-1">
                    {PERSONAL_INFO.engineeringPrinciples[activePillar].title}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-mono text-[var(--accent)] mb-4">
                    {PERSONAL_INFO.engineeringPrinciples[activePillar].subtitle}
                  </h4>

                  <p className="text-sm sm:text-base text-[var(--foreground)] leading-relaxed mb-6">
                    {PERSONAL_INFO.engineeringPrinciples[activePillar].desc}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5 opacity-60" />
                  <p className="text-xs sm:text-sm italic font-mono text-[var(--foreground)]">
                    &ldquo;{PERSONAL_INFO.engineeringPrinciples[activePillar].quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
