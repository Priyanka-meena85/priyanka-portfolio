"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal } from "./Terminal";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  GitBranch,
  Layers,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="section-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Fluid, Breathable, Engaging Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-purple-200/80 dark:border-purple-800/40 shadow-sm mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[var(--primary)] dark:text-[var(--accent)]">
                {PERSONAL_INFO.liveStatus.text}
              </span>
            </div>

            {/* Greeting & Name */}
            <p className="text-lg sm:text-xl font-medium text-[var(--text-muted)] font-mono mb-1">
              Hello, world.
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 text-[var(--foreground)]">
              I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            <div className="inline-flex items-center gap-2 text-base sm:text-lg font-bold font-mono text-[var(--primary)] dark:text-purple-300 mb-4 px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-300/30">
              <Code2 className="w-4 h-4 text-[var(--accent)]" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Location & Platforms */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] font-mono mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="opacity-40">•</span>
              <span className="text-[var(--primary)] font-semibold">3 Live Production SaaS Platforms</span>
            </div>

            {/* Sleek Glassmorphic Tagline Card */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="glass-panel p-5 rounded-2xl mb-6 relative overflow-hidden group"
            >
              <div className="flex items-start gap-3">
                <span className="text-[var(--accent)] text-lg leading-tight select-none font-bold">✶</span>
                <p className="text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>
            </motion.div>

            {/* Interactive Floating Trait Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="glow-pill px-3 py-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white rounded-full text-xs font-semibold shadow-sm cursor-default">
                Next.js (SSR/ISR)
              </span>
              <span className="glow-pill px-3 py-1.5 bg-gradient-to-r from-[var(--secondary)] to-[#48638b] text-white rounded-full text-xs font-semibold shadow-sm cursor-default">
                Node.js &amp; Express APIs
              </span>
              <span className="glow-pill px-3 py-1.5 bg-gradient-to-r from-[var(--accent)] to-[#e86071] text-white rounded-full text-xs font-semibold shadow-sm cursor-default">
                Lighthouse 85+ CWV
              </span>
              <span className="glow-pill px-3 py-1.5 bg-white/90 dark:bg-purple-950/40 text-[var(--foreground)] border border-purple-200/70 dark:border-purple-800/50 rounded-full text-xs font-semibold shadow-sm cursor-default">
                MongoDB &amp; JWT
              </span>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--accent)] hover:opacity-95 transition-all shadow-md shadow-purple-500/20 active:scale-95"
              >
                <GitBranch className="w-4 h-4" />
                <span>Explore Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[var(--foreground)] bg-white/90 dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/40 transition-all shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-[var(--primary)]" />
                <span>View Resume</span>
              </Link>

              <button
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-mono text-[var(--foreground)] bg-white/80 dark:bg-white/5 hover:bg-purple-50/80 dark:hover:bg-purple-950/20 border border-purple-200/70 dark:border-purple-800/30 transition-all shadow-sm active:scale-95"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connect Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
              <span className="text-[var(--text-muted)]">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <span className="opacity-40">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <span className="opacity-40">•</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
              <span className="opacity-40">•</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                <Phone className="w-3.5 h-3.5" />
                Phone
              </a>
            </div>

          </motion.div>

          {/* Right Column: Sleek, Glassmorphic Interactive Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="w-full relative">
              {/* Subtle Ambient Behind Terminal */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 via-rose-300/20 to-blue-300/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
              <div className="relative">
                <Terminal />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
