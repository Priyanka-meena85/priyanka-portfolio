"use client";

import React from "react";
import { EDUCATION } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>05. Academics</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            <span className="gradient-text">Education &amp; Qualifications</span>
          </h2>
          <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-xl font-mono">
            Formal foundations in Computer Science and Engineering.
          </p>
        </div>

        {/* Sleek Glassmorphic Education Card */}
        <motion.div 
          whileHover={{ y: -2 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-100/70 dark:bg-purple-950/40 text-[var(--primary)] dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40 shadow-xs">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                  {EDUCATION.degree}
                </h3>
                <div className="text-sm sm:text-base font-mono text-[var(--primary)] dark:text-purple-300 mt-1 font-semibold">
                  {EDUCATION.field}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
                  {EDUCATION.institution}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 bg-white/80 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-purple-200/60 dark:border-purple-800/40 text-[var(--foreground)]">
                <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
                {EDUCATION.period}
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-purple-200/60 dark:border-purple-800/40">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                {EDUCATION.location}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6 pt-6 border-t border-purple-100 dark:border-purple-900/40 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] flex items-center gap-2 font-bold">
              <Award className="w-4 h-4" /> Academic Highlights &amp; CS Rigor
            </h4>
            <div className="space-y-2.5">
              {EDUCATION.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
