"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";
import {
  ExternalLink,
  Github,
  Maximize2,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "AI & Automation", "Backend / Systems"];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>04. Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              <span className="gradient-text">Featured Web Projects</span>
            </h2>
            <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-xl font-mono">
              Full-stack applications built with modern frameworks, role-based auth, indexing, and automated pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[var(--primary)] text-white shadow-xs scale-102"
                    : "glass-panel text-[var(--text-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-6 sm:p-7 rounded-3xl flex flex-col justify-between group cursor-default relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar: Badge & External Links */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-purple-50 dark:bg-purple-950/40 text-[var(--primary)] dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/40">
                      {project.badge || project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-purple-100/70 text-[var(--text-muted)] hover:text-[var(--primary)] transition border border-purple-200/50"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-[var(--primary)] transition border border-purple-300/40"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-purple-100/70 text-[var(--text-muted)] hover:text-[var(--foreground)] transition border border-purple-200/50"
                        title="View Architecture Details"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent)] font-semibold mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[var(--foreground)] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((m) => (
                      <div
                        key={m}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-mono bg-purple-50/80 dark:bg-purple-950/30 text-[var(--primary)] dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/40"
                      >
                        <Zap className="w-3 h-3 text-[var(--accent)]" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Strip: Tags & Modal CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-100 dark:border-purple-900/40 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-white/90 dark:bg-white/5 text-[var(--text-muted)] border border-purple-100 dark:border-purple-900/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold text-[var(--primary)] dark:text-purple-300 bg-purple-500/10 hover:bg-purple-500/15 border border-purple-300/40 transition flex items-center justify-center gap-1.5"
                  >
                    <span>View Architecture &amp; Insights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
