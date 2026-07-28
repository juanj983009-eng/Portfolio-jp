"use client";

import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Film,
  Image as ImageIcon,
  CheckCircle2,
  ArrowDown,
  Cpu,
  Github,
  X as XIcon,
} from "lucide-react";
import { Project, getLocalized } from "@/types/portfolio";
import { resolveTech } from "@/components/ui/bento-grid";
import BookACallCard from "@/components/sections/BookACallCard";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORY_HERO_GRADIENT: Record<string, string> = {
  "IoT / Real-Time":        "from-orange-950 via-zinc-900 to-black",
  "Production System":      "from-blue-950 via-zinc-900 to-black",
  "Logistics / Port":       "from-emerald-950 via-zinc-900 to-black",
  "Media / Streaming":      "from-purple-950 via-zinc-900 to-black",
  "SaaS / Inventory":       "from-cyan-950 via-zinc-900 to-black",
  "Task Management":        "from-amber-950 via-zinc-900 to-black",
  "Retail / Offline-First": "from-rose-950 via-zinc-900 to-black",
  "Healthcare / SaaS":      "from-teal-950 via-zinc-900 to-black",
  "Education / Gov":        "from-indigo-950 via-zinc-900 to-black",
};

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const getProjectFallback = (slug: string) => `/projects/${slug}/cover.jpg`;

/** Helper to convert standard YouTube URLs (watch, shorts, youtu.be) into an embed URL */
const getYouTubeEmbedUrl = (url?: string): string => {
  if (!url) return "";
  if (url.includes("youtube.com/embed/")) {
    return url;
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[2] && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return url;
};

const isYouTubeUrl = (url?: string): boolean => {
  if (!url) return false;
  return url.includes("youtube.com") || url.includes("youtu.be");
};

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [heroImgError, setHeroImgError] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    setVideoError(false);
    setHeroImgError(false);
  }, [project?.id]);

  const handleNavClick = (sectionId: string) => {
    if (onClose) {
      onClose();
    }
    setTimeout(() => {
      if (window.location.pathname !== "/") {
        window.location.href = `/#${sectionId}`;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!mounted || !project) return null;

  const heroBg = CATEGORY_HERO_GRADIENT[project.category] ?? "from-zinc-900 via-zinc-950 to-black";

  const modalContent = (
    <AnimatePresence mode="wait">
      {project && (
        <>
          {/* FIXED CLOSE BUTTON */}
          <motion.button
            key="close-btn"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed top-6 right-8 z-[10000] flex items-center gap-2 px-6 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full border border-zinc-700 shadow-2xl backdrop-blur-md cursor-pointer transition-all"
          >
            ✕ <span>{t.projectDetail.closeProject}</span>
          </motion.button>

          {/* FULLSCREEN SCROLLABLE OVERLAY */}
          <motion.div
            key="modal-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] w-screen h-screen bg-black overflow-y-auto overflow-x-hidden"
          >

            {/* ══════════════════════════════════════════
                SECTION 1 — FULL-SCREEN IMMERSIVE POSTER HERO
            ══════════════════════════════════════════ */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-screen min-h-[700px] flex flex-col justify-end overflow-hidden bg-zinc-950 p-6 md:p-12 mb-16 select-none"
            >
              {/* 1. FULL-BLEED BACKGROUND IMAGE (100% CLEAN PREVIEW) */}
              <img
                src={heroImgError ? getProjectFallback(project.slug) : (project.coverImage || project.screenshots?.[0] || `/projects/${project.slug}/cover.jpg`)}
                alt={project.title}
                onError={() => setHeroImgError(true)}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />

              {/* 2. DUAL DIRECTIONAL GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-10 pointer-events-none" />

              {/* 3. CLEAN BOTTOM POSTER FOOTER (Z-20): Giant Pure White Title & Description */}
              <div className="relative z-20 space-y-4 max-w-full min-w-0">
                {/* PROJECT TITLE — fluid responsive scale, contained & wrappable */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-tight font-sans drop-shadow-2xl break-words max-w-4xl">
                  {project.title}
                </h1>

                {/* Tagline Description */}
                <p className="font-sans font-medium text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl drop-shadow-md break-words">
                  {getLocalized(project.tagline || project.subtitle, language)}
                </p>

                {/* Animated Scroll Hint Indicator */}
                <div className="flex items-center space-x-2 font-mono font-bold text-xs text-zinc-400 pt-4 uppercase tracking-widest animate-bounce">
                  <ArrowDown className="w-4 h-4 text-[#FF4D00]" />
                  <span>SCROLL TO EXPLORE DETAILS</span>
                </div>
              </div>
            </motion.section>

            {/* ══════════════════════════════════════════
                SECTION 2 — GRID: METADATA + EDITORIAL
            ══════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-7xl mx-auto px-6 md:px-12 pb-32 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start w-full relative"
            >
              {/* ── LEFT COLUMN: Sticky Monochromatic Industrial Metadata Card ── */}
              <div className="lg:sticky lg:top-8 self-start w-full space-y-6 font-mono">
                <div className="bg-zinc-950 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[550px] border border-zinc-800/80 shadow-2xl relative overflow-hidden">
                  {/* Subtle texture depth */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-6 flex-1">
                    <div>
                      <span className="font-mono font-bold text-xs uppercase tracking-widest text-zinc-500 block mb-1">
                        PROJECT DETAILS
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight font-sans">
                        {project.title}
                      </h2>
                    </div>

                    {/* Metadata specification table */}
                    <div className="space-y-0 border-t border-zinc-900 pt-2">
                      {[
                        { label: "ROLE",        value: getLocalized(project.role, language) },
                        { label: "RELEASE DATE", value: "Production" },
                        { label: "SERVICES",     value: project.category },
                        { label: "THROUGHPUT",   value: project.metrics.throughput ?? "N/A" },
                        { label: "LATENCY",      value: project.metrics.latency    ?? "N/A" },
                        { label: "SLA",          value: project.metrics.uptime     ?? "99.99%" },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-center border-b border-zinc-900 py-3.5">
                          <span className="font-mono font-medium text-xs uppercase tracking-wider text-zinc-400 shrink-0">
                            {label}
                          </span>
                          <span className="text-right font-mono font-bold text-sm text-white max-w-[55%] leading-tight truncate">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stack pills with official brand icons */}
                    <div className="space-y-3 pt-2">
                      <span className="font-mono font-bold text-xs uppercase tracking-widest text-zinc-500 block">
                        STACK SPECIFICATIONS
                      </span>
                      <div className="flex flex-wrap gap-2 w-full min-w-0">
                        {project.techStack.map((tech) => {
                          const config = resolveTech(tech);
                          const IconComponent = config.icon;

                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono font-medium text-zinc-200"
                            >
                              <IconComponent className={`w-4 h-4 ${config.color}`} />
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* DUAL CTA: LIVE DEMO + VIEW SOURCE */}
                  {(() => {
                    const rawDemoUrl = project.demoUrl || project.liveUrl || project.demoVideoUrl;
                    const hasValidDemo = Boolean(rawDemoUrl && rawDemoUrl.trim() !== "" && rawDemoUrl.trim() !== "#");
                    const rawGithubUrl = project.githubUrl;
                    const hasValidGithub = Boolean(rawGithubUrl && rawGithubUrl.trim() !== "" && rawGithubUrl.trim() !== "#");

                    return (
                      <div className="relative z-10 mt-8 flex gap-3">
                        {hasValidDemo ? (
                          <a
                            href={rawDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#FF4D00] hover:bg-[#e04400] text-black font-mono font-bold uppercase py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-xs cursor-pointer shadow-lg shadow-[#FF4D00]/10"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{t.projectDetail.liveDemo}</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className="flex-1 bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 cursor-not-allowed opacity-60 shadow-none font-mono font-bold uppercase py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-xs select-none"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{t.projectDetail.demoUnavailable}</span>
                          </button>
                        )}

                        {hasValidGithub ? (
                          <a
                            href={rawGithubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-zinc-900 border border-zinc-700 hover:border-[#FF4D00] text-white font-mono font-bold uppercase py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-xs cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>{t.projectDetail.viewSource}</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className="flex-1 bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 cursor-not-allowed opacity-60 shadow-none font-mono font-bold uppercase py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-xs select-none"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>{t.projectDetail.privateRepo}</span>
                          </button>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* ── RIGHT COLUMN: Clean Motion Editorial Overview + Media ── */}
              <div className="w-full min-w-0 overflow-x-hidden space-y-8 text-white">

                {/* OVERVIEW */}
                <div className="border-b border-zinc-800/80 pb-6 mb-6 w-full max-w-full min-w-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-black text-white text-xl uppercase tracking-tight mb-3 select-none hover:text-[#FF4D00] transition-colors cursor-default"
                  >
                    {t.projectDetail.overview}
                  </motion.h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-sans w-full min-w-0 break-words whitespace-normal">
                    {getLocalized(project.description, language)}
                  </p>
                </div>

                {/* OBJECTIVE */}
                <div className="border-b border-zinc-800/80 pb-6 mb-6 w-full max-w-full min-w-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-black text-white text-xl uppercase tracking-tight mb-3 select-none hover:text-[#FF4D00] transition-colors cursor-default"
                  >
                    {t.projectDetail.objective}
                  </motion.h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-sans w-full min-w-0 break-words whitespace-normal">
                    {getLocalized(project.summary ?? project.subtitle ?? project.tagline, language)}
                  </p>
                </div>

                {/* ARCHITECTURE & PIPELINE */}
                <div className="mb-8 space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-black text-white text-xl uppercase tracking-tight mb-4 select-none hover:text-[#FF4D00] transition-colors cursor-default"
                  >
                    {t.projectDetail.projectMedia}
                  </motion.h3>

                  {/* ── VIDEO PLAYER / YOUTUBE EMBED (Main Visual) ── */}
                  {project.videoUrl && isYouTubeUrl(project.videoUrl) ? (
                    <div className="mb-8 w-full">
                      <h3 className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
                        SYSTEM DEMONSTRATION &amp; ARCHITECTURE OVERVIEW
                      </h3>
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
                        <iframe
                          src={getYouTubeEmbedUrl(project.videoUrl)}
                          title={`${project.title} Video Demo`}
                          className="absolute top-0 left-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-h-[450px] rounded-xl border border-zinc-800 bg-black overflow-hidden aspect-video relative">
                      {project.videoUrl && !videoError ? (
                        <video
                          src={project.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          onError={() => setVideoError(true)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        /* ── BRUTALIST PLACEHOLDER — shown when videoUrl is absent or fails ── */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden select-none">
                          {/* Scanline texture overlay */}
                          <div
                            className="absolute inset-0 pointer-events-none z-0"
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.018) 2px, rgba(255,255,255,0.018) 4px)",
                            }}
                          />
                          {/* Subtle corner grid */}
                          <div
                            className="absolute inset-0 pointer-events-none z-0 opacity-10"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(255,77,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.15) 1px, transparent 1px)",
                              backgroundSize: "48px 48px",
                            }}
                          />
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="inline-block w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
                              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF4D00] font-bold">
                                SYSTEM DEMO
                              </span>
                            </div>
                            <Film className="w-10 h-10 text-zinc-700" strokeWidth={1} />
                            <p className="font-mono font-bold text-sm text-zinc-400 uppercase tracking-widest leading-tight">
                              Demo Pipeline Offline
                            </p>
                            <p className="font-mono text-[11px] text-zinc-600 max-w-xs leading-relaxed">
                              Interactive architecture demo not yet available for this project.
                            </p>
                          </div>
                          {/* Bottom status bar */}
                          <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800/80 flex items-center justify-between px-4 py-2 z-10">
                            <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                              SYS:PREVIEW — NO SIGNAL
                            </span>
                            <span className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
                              VIDEO DEMO PENDING
                            </span>
                          </div>
                        </div>
                      )}
                      {/* Label badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-zinc-700/60 px-3 py-1.5 rounded-md">
                        <Film className="w-3 h-3 text-[#FF4D00]" />
                        <span className="font-mono text-[10px] text-zinc-300 uppercase tracking-widest">
                          {project.videoUrl && !videoError ? "LIVE PREVIEW" : "SYSTEM DEMO"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ── DUAL-DIRECTION MARQUEE GALLERY ── */}
                  {project.screenshots && project.screenshots.length > 1 && (
                    <div className="space-y-3 overflow-hidden pt-2">
                      <style>{`
                        @keyframes marquee-ltr { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                        @keyframes marquee-rtl { from { transform: translateX(-50%); } to { transform: translateX(0); } }
                        .marquee-ltr { animation: marquee-ltr 30s linear infinite; }
                        .marquee-rtl { animation: marquee-rtl 30s linear infinite; }
                        .marquee-track:hover .marquee-ltr,
                        .marquee-track:hover .marquee-rtl { animation-play-state: paused; }
                      `}</style>

                      {/* Rail 1 — Left to Right */}
                      <div className="marquee-track w-full overflow-hidden">
                        <div className="flex gap-3 marquee-ltr" style={{ width: "max-content" }}>
                          {[...project.screenshots, ...project.screenshots].map((src, i) => (
                            <button
                              key={`ltr-${i}`}
                              type="button"
                              onClick={() => setLightboxSrc(src)}
                              className="shrink-0 w-48 h-28 rounded-lg overflow-hidden border border-zinc-800 hover:border-[#FF4D00]/60 transition-colors cursor-zoom-in focus:outline-none"
                            >
                              <img
                                src={src}
                                alt={`Preview ${i + 1}`}
                                onError={(e) => { (e.currentTarget as HTMLImageElement).src = getProjectFallback(project.slug); }}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Rail 2 — Right to Left */}
                      <div className="marquee-track w-full overflow-hidden">
                        <div className="flex gap-3 marquee-rtl" style={{ width: "max-content" }}>
                          {[...project.screenshots.slice().reverse(), ...project.screenshots.slice().reverse()].map((src, i) => (
                            <button
                              key={`rtl-${i}`}
                              type="button"
                              onClick={() => setLightboxSrc(src)}
                              className="shrink-0 w-48 h-28 rounded-lg overflow-hidden border border-zinc-800 hover:border-[#FF4D00]/60 transition-colors cursor-zoom-in focus:outline-none"
                            >
                              <img
                                src={src}
                                alt={`Preview ${i + 1}`}
                                onError={(e) => { (e.currentTarget as HTMLImageElement).src = getProjectFallback(project.slug); }}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* TECHNICAL HIGHLIGHTS */}
                <div className="border-t border-zinc-800/80 pt-6 mt-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans font-black text-white text-xl uppercase tracking-tight mb-4 select-none hover:text-[#FF4D00] transition-colors cursor-default"
                  >
                    {t.projectDetail.techHighlights}
                  </motion.h3>
                  <ul className="space-y-3 w-full max-w-full">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="text-zinc-300 text-sm leading-relaxed flex items-start gap-3 min-w-0 w-full">
                        <span className="text-zinc-500 font-mono select-none shrink-0">—</span>
                        <span className="break-words min-w-0 whitespace-normal">{getLocalized(item, language)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>

            {/* ══════════════════════════════════════════
                SECTION 3 — CTA "READY TO TRANSFORM"
            ══════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <BookACallCard />
            </motion.div>

            {/* ══════════════════════════════════════════
                SECTION 4 — EDITORIAL PROJECT FOOTER
            ══════════════════════════════════════════ */}
            <footer className="w-full border-t border-zinc-800/80 pt-16 pb-8 bg-black text-zinc-400 px-6 md:px-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">JUAN PARRA</h3>
                  <p className="text-xs text-zinc-500 mt-1">LIMA, PE (UTC-5) • SENIOR LEAD DEVELOPER &amp; ARCHITECT</p>
                </div>
                <nav className="flex items-center gap-6 font-sans font-bold text-xs uppercase tracking-widest text-zinc-400">
                  <button onClick={() => handleNavClick('hero')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
                  <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors cursor-pointer">ABOUT</button>
                  <button onClick={() => handleNavClick('projects')} className="hover:text-white transition-colors cursor-pointer">PROJECTS</button>
                  <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors cursor-pointer">CONTACT</button>
                </nav>
              </div>

              {/* Massive name anchor — overflow-safe */}
              <div className="w-full overflow-hidden pt-8 border-t border-zinc-900 flex justify-center">
                <h1 className="text-[13vw] leading-none font-black text-[#FF4D00] tracking-tighter uppercase select-none text-center whitespace-nowrap font-sans">
                  JUAN PARRA
                </h1>
              </div>
            </footer>

          </motion.div>

          {/* ── LIGHTBOX OVERLAY ── */}
          <AnimatePresence>
            {lightboxSrc && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
                onClick={() => setLightboxSrc(null)}
              >
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={lightboxSrc} alt="Screenshot enlarged" className="w-full h-auto object-contain" />
                  <button
                    type="button"
                    onClick={() => setLightboxSrc(null)}
                    className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-zinc-900 border border-zinc-700 hover:border-[#FF4D00] rounded-lg transition-all cursor-pointer"
                    aria-label="Close lightbox"
                  >
                    <XIcon className="w-4 h-4 text-white" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectDetailModal;
