"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolioData";
import {
  Briefcase,
  ShieldCheck,
  Activity,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";

const EXPERIENCE_ICONS: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5 text-cyan-400" />,
  ShieldAlert: <ShieldCheck className="w-5 h-5 text-purple-400" />,
  Activity: <Activity className="w-5 h-5 text-emerald-400" />,
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono mb-3">
            <span className="text-cyan-400 font-bold">03.</span> Career History
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Engineering Experience
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
            Track record of delivering production software across industrial B2B SaaS, national defense research, and public sector energy.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-cyan-400/30 transition-all duration-300">
                {EXPERIENCE_ICONS[exp.icon] || <Briefcase className="w-4 h-4 text-cyan-400" />}
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/40 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-950/20">
                
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Current Role
                        </span>
                      )}
                    </div>
                    
                    <div className="text-base sm:text-lg font-medium text-cyan-400 font-mono">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-white/5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Focus */}
                {exp.tagline && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/30 text-xs font-mono text-cyan-300 mb-5">
                    {exp.tagline}
                  </div>
                )}

                {/* Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
                  {exp.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="px-3 py-2 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-2 text-xs font-mono text-cyan-200"
                    >
                      <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Tech:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/30 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
