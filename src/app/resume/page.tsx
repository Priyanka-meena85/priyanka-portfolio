import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Sparkles, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Resume | ${PERSONAL_INFO.name}`,
  description: `Official Resume of ${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}.`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative z-10">
      <div className="w-full max-w-5xl mx-auto px-4">
        
        {/* Sleek Glassmorphic Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden">
          
          {/* Header with Back Button and Download CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-100 dark:border-purple-900/40">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="p-2.5 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-purple-100/70 text-[var(--text-muted)] hover:text-[var(--foreground)] border border-purple-200/60 dark:border-purple-800/40 shadow-xs transition active:scale-95"
                aria-label="Go back to portfolio home"
              >
                <ArrowLeft className="w-5 h-5 text-[var(--foreground)]" />
              </Link>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  <span className="gradient-text">My Resume</span>
                </h1>
                <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                  {PERSONAL_INFO.name} &bull; {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="PriyankaMeena_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white rounded-xl transition-all font-semibold text-xs sm:text-sm shadow-md shadow-purple-500/20 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF Viewer Frame */}
          <div className="bg-white/90 dark:bg-[#140e1e] rounded-2xl overflow-hidden shadow-sm border border-purple-200/70 dark:border-purple-800/40 relative">
            <div className="p-3 bg-purple-50/70 dark:bg-purple-950/40 border-b border-purple-200/60 dark:border-purple-800/40 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[var(--primary)]" />
                PriyankaMeena_Resume.pdf
              </span>
              <span className="text-[11px] text-[var(--text-muted)]">
                PDF Viewer (Fit Width)
              </span>
            </div>

            <div className="w-full h-[650px] sm:h-[750px] bg-white">
              <embed
                src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
                type="application/pdf"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Full-Stack Web Developer &bull; 3 Live SaaS Platforms</span>
            </div>
            <div>
              Ready for immediate hiring: <span className="text-[var(--primary)] font-bold">{PERSONAL_INFO.email}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
