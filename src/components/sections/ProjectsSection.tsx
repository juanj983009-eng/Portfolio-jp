"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/config/projects";
import { Project, getLocalized } from "@/types/portfolio";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import { resolveTech } from "@/components/ui/bento-grid";
import { useLanguage } from "@/context/LanguageContext";

// ─── Spring config: low stiffness + high damping = butter smooth, no bounce ───
const SPRING_CFG = { stiffness: 100, damping: 30, restDelta: 0.001 };

// ─── Per-card scroll-driven scale + opacity ────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  language: string;
  onOpen: (project: Project) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  total,
  language,
  onOpen,
  containerRef,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(
    project.coverImage || `/projects/${project.slug}/cover.jpg`
  );

  // Track scroll relative to the outer scroll-track container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each card gets its own spring-smoothed progress
  const smoothProgress = useSpring(scrollYProgress, SPRING_CFG);

  // How far into the total track this card should be "active"
  const cardFraction = 1 / total;
  const cardStart  = index * cardFraction;
  const cardEnd    = cardStart + cardFraction;

  // Scale: card shrinks as the next card slides over it
  const scaleOutput = index < total - 1 ? [1, 0.92] : [1, 1];
  const rawScale = useTransform(smoothProgress, [cardStart, cardEnd], scaleOutput);
  const scale = useSpring(rawScale, SPRING_CFG);

  // Parallax Y nudge: subtle upward drift as card is buried
  const rawY = useTransform(
    smoothProgress,
    [cardStart, cardEnd],
    index < total - 1 ? [0, -18] : [0, 0]
  );
  const y = useSpring(rawY, SPRING_CFG);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 md:top-28 w-full"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        // Scroll-driven spring transforms — 100% solid opacity at all times (no transparency)
        style={{
          scale,
          y,
          willChange: "transform",
          transformOrigin: "top center",
        }}
        onClick={() => onOpen(project)}
        className="group relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/80 cursor-pointer bg-black shadow-2xl hover:border-zinc-700 transition-colors duration-500 transform-gpu"
      >
        {/* 1. FULL-BLEED COVER IMAGE */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            onError={() => setImgSrc(`/projects/${project.slug}/cover.jpg`)}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* 2. OVERLAY — hidden at rest, revealed on hover */}
        <div
          className="
            absolute inset-0 z-10 flex flex-col justify-between h-full
            min-h-[380px] sm:min-h-[460px] md:min-h-[500px]
            p-5 sm:p-8 md:p-10 box-border
            bg-gradient-to-b from-black/85 via-black/40 to-black/95 backdrop-blur-sm
            opacity-0 pointer-events-none translate-y-4
            group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
            transition-all duration-300 ease-in-out
          "
        >
          {/* Giant index watermark */}
          <div className="absolute top-4 right-6 font-mono text-[90px] font-black leading-none text-white/[0.12] select-none pointer-events-none z-0">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* TOP BLOCK */}
          <div className="flex-1 flex flex-col gap-4 relative z-10">
            <div className="space-y-3 max-w-[70%]">
              <span className="inline-block px-3 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-white/10 font-mono text-xs font-medium uppercase tracking-widest">
                {project.category}
              </span>

              <h3 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase tracking-tight leading-tight drop-shadow-md group-hover:text-[#FF4D00] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="font-sans font-medium text-zinc-300 text-sm leading-relaxed max-w-xl drop-shadow-md line-clamp-2">
                {getLocalized(
                  project.subtitle || project.tagline || project.summary || project.description,
                  language
                )}
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 w-full min-w-0 max-w-full md:max-w-[75%]">
              {project.techStack.slice(0, 8).map((tech) => {
                const config = resolveTech(tech);
                const IconComponent = config.icon;
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-zinc-200"
                  >
                    <IconComponent className={`w-4 h-4 ${config.color}`} />
                    <span>{tech}</span>
                  </span>
                );
              })}
              {project.techStack.length > 8 && (
                <span className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-md text-zinc-400 font-medium inline-flex items-center">
                  + {project.techStack.length - 8} more
                </span>
              )}
            </div>
          </div>

          {/* BOTTOM BLOCK: Metrics + CTAs */}
          <div className="mt-auto pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
            <div className="flex items-center space-x-6">
              {project.metrics.throughput && (
                <div>
                  <div className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest">
                    Throughput
                  </div>
                  <div className="font-mono font-bold text-sm text-white">
                    {project.metrics.throughput}
                  </div>
                </div>
              )}
              {project.metrics.uptime && (
                <div>
                  <div className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest">
                    SLA
                  </div>
                  <div className="font-mono font-bold text-sm text-zinc-300">
                    {project.metrics.uptime}
                  </div>
                </div>
              )}
            </div>

            <div className="inline-flex items-center gap-2.5 ml-auto sm:ml-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center p-2.5 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-[#FF4D00] transition-all duration-300 shadow-xl cursor-pointer"
                  title="View Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(project);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF4D00] text-black border border-orange-400/30 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer hover:bg-[#e04400]"
              >
                <span>VIEW ARCHITECTURE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── SECTION ──────────────────────────────────────────────────────────────────
export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language, t } = useLanguage();
  // Outer scroll-track: tall enough so each card has ~100vh of scroll real-estate
  const containerRef = useRef<HTMLDivElement>(null);
  const total = PROJECTS.length;

  return (
    <>
      <section id="projects" className="w-full pt-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4 mb-6 md:mb-8 select-none">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight text-center font-sans break-words">
            <span className="text-white">
              {(t.projectsTitle || t.projects?.title)?.main}
            </span>
            <span className="text-[#FF4D00]">
              {(t.projectsTitle || t.projects?.title)?.highlight}
            </span>
          </h2>

          <p className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest mt-3">
            {t.projects.subtitle}
          </p>

          <div className="w-full border-b border-zinc-800/80 mt-6" />
        </div>

        {/* SCROLL TRACK — gives each card ~100vh of scroll room */}
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl mx-auto pb-20"
          // height = 100vh per card, measured in px via inline style for SSR safety
          style={{ minHeight: `${total * 100}vh` }}
        >
          {/* Cards stack inside — space-y drives the scroll spacing between sticky anchors */}
          <div className="space-y-[10vh] sm:space-y-[12vh] md:space-y-[14vh] pt-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={total}
                language={language}
                onOpen={setSelectedProject}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>

      </section>

      {/* PROJECT DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
