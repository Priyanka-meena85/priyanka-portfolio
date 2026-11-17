"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import {
  X,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-purple-950/20 dark:bg-black/60">
      <div onClick={onClose} className="fixed inset-0" />

      {/* Sleek Glassmorphic Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl w-full max-w-3xl z-10 max-h-[90vh] overflow-y-auto no-scrollbar relative shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-purple-100 text-[var(--text-muted)] hover:text-[var(--foreground)] border border-purple-200/60 dark:border-purple-800/40 transition active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Category */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-purple-50 dark:bg-purple-950/40 text-[var(--primary)] dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/40">
            {project.badge || project.category}
          </span>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            • {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-1">
          {project.title}
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[var(--accent)] font-semibold mb-4">
          {project.subtitle}
        </p>

        {/* Full Long Description */}
        <p className="text-sm text-[var(--foreground)] leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Architectural Blueprint Breakdown */}
        <div className="mb-6 p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--primary)] dark:text-purple-300 mb-3 uppercase tracking-wider">
            <Layers className="w-4 h-4" /> System Architecture &amp; Data Layer
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {project.architecture.frontend && (
              <div>
                <span className="text-[var(--text-muted)]">Frontend: </span>
                <span className="text-[var(--foreground)] font-semibold">{project.architecture.frontend}</span>
              </div>
            )}
            {project.architecture.backend && (
              <div>
                <span className="text-[var(--text-muted)]">Backend: </span>
                <span className="text-[var(--foreground)] font-semibold">{project.architecture.backend}</span>
              </div>
            )}
            {project.architecture.database && (
              <div>
                <span className="text-[var(--text-muted)]">Database: </span>
                <span className="text-[var(--foreground)] font-semibold">{project.architecture.database}</span>
              </div>
            )}
            {project.architecture.auth && (
              <div>
                <span className="text-[var(--text-muted)]">Auth &amp; Security: </span>
                <span className="text-[var(--foreground)] font-semibold">{project.architecture.auth}</span>
              </div>
            )}
            {project.architecture.deployment && (
              <div className="sm:col-span-2">
                <span className="text-[var(--text-muted)]">Deployment: </span>
                <span className="text-[var(--foreground)] font-semibold">{project.architecture.deployment}</span>
              </div>
            )}
          </div>
        </div>

        {/* Highlights List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] mb-3 font-bold">
            Key Technical Achievements
          </h4>
          <div className="space-y-2">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-100 dark:border-purple-900/40">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:opacity-95 transition shadow-sm active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Application</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[var(--foreground)] bg-white/90 dark:bg-white/5 hover:bg-purple-100/70 border border-purple-200/60 dark:border-purple-800/40 transition active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>Explore Codebase</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
