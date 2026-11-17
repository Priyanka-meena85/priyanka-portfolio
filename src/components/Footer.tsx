"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Clock, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-[var(--card-border)] bg-[var(--background)] relative z-10">
      <div className="section-container">
        
        {/* Top Split */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[var(--card-border)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] p-[1.5px]">
              <div className="w-full h-full bg-[var(--background)] rounded-[10px] flex items-center justify-center font-bold text-xs gradient-text font-mono">
                PM
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--foreground)]">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                {PERSONAL_INFO.title} &bull; {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
              <Clock className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Jaipur, IN: </span>
              <span className="text-[var(--primary)] font-semibold">{localTime || "IST (UTC+5:30)"}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[var(--card-bg)] hover:bg-[var(--primary)]/10 text-[var(--foreground)] border border-[var(--card-border)] transition flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-xs">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>
            Designed &amp; Built by{" "}
            <span className="text-[var(--primary)] font-semibold">{PERSONAL_INFO.name}</span>
          </p>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[var(--primary)] transition flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          <p className="text-[11px]">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
