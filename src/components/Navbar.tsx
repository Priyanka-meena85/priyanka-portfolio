"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Menu, 
  X, 
  FileText, 
  ArrowUpRight, 
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "About", href: "/#about" },
  { name: "Journey", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "experience", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0f0b15]/85 backdrop-blur-xl border-b border-purple-100/80 dark:border-purple-900/40 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          
          {/* Rotating Monogram Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] animate-spin-slow opacity-80"></div>
              <div className="absolute inset-[2px] rounded-[10px] bg-white dark:bg-[#140e1e] flex items-center justify-center">
                <span className="text-sm md:text-base font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  PM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] font-mono">
                Full-Stack Web Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("/#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-[var(--primary)] font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[var(--foreground)] bg-white/90 dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/40 transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
            </Link>

            <Link
              href="/#contact"
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] hover:opacity-90 transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-purple-200/80 dark:border-purple-800/40 bg-white/90 dark:bg-white/5 text-[var(--foreground)]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-purple-100/80 dark:border-purple-900/40 bg-white/95 dark:bg-[#0f0b15]/95 backdrop-blur-2xl px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-purple-100 dark:border-purple-900/40 text-xs font-mono text-[var(--primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                {PERSONAL_INFO.liveStatus.text}
              </div>

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/20 transition flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">→</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/40 flex flex-col gap-2.5">
                <Link
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[var(--foreground)] bg-white dark:bg-white/5 border border-purple-200 dark:border-purple-800"
                >
                  <FileText className="w-3.5 h-3.5 text-[var(--primary)]" />
                  View Interactive Resume
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]"
                >
                  <Sparkles className="w-3 h-3" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
