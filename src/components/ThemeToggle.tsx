"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative p-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--primary)]/10 text-[var(--foreground)] transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${className}`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="flex items-center justify-center w-5 h-5"
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-[var(--accent)]" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
