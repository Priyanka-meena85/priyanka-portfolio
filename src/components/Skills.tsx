"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  CheckCircle,
  Flame,
  Search,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-4 h-4" />,
  Frontend: <Layout className="w-4 h-4" />,
  Backend: <Server className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  "Tools & DevOps": <Wrench className="w-4 h-4" />,
  "Cloud & Hosting": <Cloud className="w-4 h-4" />,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => {
    if (selectedCategory !== "All" && cat.title !== selectedCategory) {
      return false;
    }
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>03. Technical Arsenal</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              <span className="gradient-text">Skills &amp; Technology Stack</span>
            </h2>
            <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-xl font-mono">
              Core technologies used across 3 live B2B SaaS platforms and full-stack projects.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skills (e.g. Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs font-mono bg-white/90 dark:bg-white/5 border border-purple-200/80 dark:border-purple-800/40 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)] placeholder-[var(--text-muted)] shadow-xs transition"
            />
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  isSelected
                    ? "bg-[var(--primary)] text-white shadow-xs scale-102"
                    : "glass-panel text-[var(--text-muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-5 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-purple-100 dark:border-purple-900/40">
                    <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[var(--primary)] dark:text-purple-300">
                      {CATEGORY_ICONS[category.title] || <Code2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--foreground)]">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default ${
                          skill.hot
                            ? "bg-purple-50 dark:bg-purple-950/40 text-[var(--primary)] dark:text-purple-200 border border-purple-200/80 dark:border-purple-800/40 font-semibold hover:border-[var(--primary)] hover:shadow-xs"
                            : "bg-white/80 dark:bg-white/5 text-[var(--foreground)] border border-purple-100 dark:border-purple-900/40 hover:border-purple-200"
                        }`}
                      >
                        {skill.hot && <Flame className="w-3 h-3 text-[var(--accent)] fill-[var(--accent)]" />}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-100/60 dark:border-purple-900/40 flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                  <span>Production verified</span>
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
