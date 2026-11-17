"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Check,
  Copy,
  Sparkles,
  Loader2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Message sent successfully! I will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to send message. Please try again or email directly.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please reach out directly via Priyankameena4656@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-[var(--primary)] text-xs font-mono mb-3 border border-purple-200/50 dark:border-purple-800/40">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>06. Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="mt-2 text-[var(--text-muted)] text-sm sm:text-base max-w-xl font-mono">
            Have an open full-stack role, a project to collaborate on, or just want to chat tech?
          </p>
        </div>

        {/* Content Split: Direct Details & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="glass-panel p-5 rounded-3xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-purple-100/70 dark:bg-purple-950/40 text-[var(--primary)] dark:text-purple-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-muted)]">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-purple-100/60 text-[var(--text-muted)] hover:text-[var(--foreground)] border border-purple-200/60 dark:border-purple-800/40 transition active:scale-95"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="glass-panel p-5 rounded-3xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-rose-100/70 dark:bg-rose-950/40 text-[var(--accent)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--text-muted)]">Direct Phone</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-sm sm:text-base font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-xl bg-white/80 dark:bg-white/5 hover:bg-purple-100/60 text-[var(--text-muted)] hover:text-[var(--foreground)] border border-purple-200/60 dark:border-purple-800/40 transition active:scale-95"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="glass-panel p-5 rounded-3xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-blue-100/70 dark:bg-blue-950/40 text-[var(--secondary)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[var(--text-muted)]">Current Base</div>
                  <div className="text-sm sm:text-base font-bold text-[var(--foreground)]">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-xs font-mono text-[var(--primary)] mt-0.5">
                    Open to Relocation &amp; Remote
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links Box */}
            <div className="glass-panel p-5 rounded-3xl flex items-center justify-around">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-gray-300">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-purple-100 dark:border-purple-900/40">
              <MessageSquare className="w-4 h-4 text-[var(--primary)]" />
              <h3 className="text-sm font-bold font-mono text-[var(--foreground)]">
                Send a Direct Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-white/90 dark:bg-white/5 border border-purple-200/80 dark:border-purple-800/40 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)] placeholder-[var(--text-muted)] shadow-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-white/90 dark:bg-white/5 border border-purple-200/80 dark:border-purple-800/40 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)] placeholder-[var(--text-muted)] shadow-xs transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Full-Stack Developer Opportunity / Project Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-white/90 dark:bg-white/5 border border-purple-200/80 dark:border-purple-800/40 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)] placeholder-[var(--text-muted)] shadow-xs transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Priyanka, we are interested in discussing..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs font-mono bg-white/90 dark:bg-white/5 border border-purple-200/80 dark:border-purple-800/40 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)] placeholder-[var(--text-muted)] shadow-xs transition resize-none"
                />
              </div>

              {responseMsg && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono flex items-start gap-2 ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status === "success" ? (
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                  )}
                  <span>{responseMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--accent)] hover:opacity-95 transition-all shadow-md shadow-purple-500/20 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
