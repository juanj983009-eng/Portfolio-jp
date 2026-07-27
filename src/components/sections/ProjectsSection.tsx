"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu } from "lucide-react";
import { PROJECTS } from "@/config/projects";
import { Project } from "@/types/portfolio";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import { TECH_CONFIG } from "@/components/ui/bento-grid";
import SectionHeader from "@/components/ui/SectionHeader";

const DEFAULT_IMAGE = "/projects/smartfleet.jpg";

const ProjectCardImage: React.FC<{ project: Project }> = ({ project }) => {
  const [imgSrc, setImgSrc] = useState(
    project.coverImage || `/projects/${project.slug}/cover.jpg`
  );

  return (
    <Image
      src={imgSrc}
      alt={project.title}
      fill
      sizes="(max-width: 1200px) 100vw, 1200px"
      onError={() => setImgSrc(DEFAULT_IMAGE)}
      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="space-y-12 pt-8">

        {/* SECTION HEADER — Compact & Scaled */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4 md:px-0 mb-6 md:mb-8 select-none">
          <h2 className="text-white font-black text-3xl md:text-5xl tracking-tight uppercase leading-none max-w-4xl mx-auto font-sans not-italic">
            A LOOK INTO MY{" "}
            <span className="text-[#FF4D00] font-black not-italic block md:inline">LATEST PROJECTS</span>
          </h2>

          <p className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest mt-3">
            9 PRODUCTION SYSTEMS · SCROLL DOWN TO EXPLORE
          </p>

          <div className="w-full border-b border-zinc-800/80 mt-6" />
        </div>

        {/* STICKY STACKING CARDS CONTAINER WITH SAFE AREA TOP PADDING */}
        <div className="relative w-full max-w-6xl mx-auto space-y-12 pb-20 pt-16 md:pt-20">
          {PROJECTS.map((project, index) => {
            return (
              <div
                key={project.id}
                className="sticky top-24 md:top-28 w-full"
                style={{ zIndex: index + 10 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative w-full min-h-[460px] md:min-h-[500px] rounded-3xl overflow-hidden border border-zinc-800/80 cursor-pointer bg-zinc-950 shadow-2xl hover:border-zinc-700 transition-colors duration-500"
                >
                  {/* 1. FULL-BLEED COVER IMAGE (100% COVER AT REST — MAXIMUM SHARPNESS) */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <ProjectCardImage project={project} />
                  </div>

                  {/* 2. OVERLAY CONTAINER (HIDDEN AT REST, REVEALED FLUIDLY ON HOVER) */}
                  <div
                    className="
                      absolute inset-0 z-10 flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-10 box-border
                      bg-gradient-to-b from-black/85 via-black/40 to-black/95 backdrop-blur-sm
                      opacity-0 pointer-events-none translate-y-4
                      group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
                      transition-all duration-300 ease-in-out
                    "
                  >
                    {/* Giant index watermark (Visible on hover inside overlay) */}
                    <div className="absolute top-4 right-6 font-mono text-[90px] font-black leading-none text-white/[0.12] select-none pointer-events-none z-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* TOP: Category Badge, Pure White Title & Tagline */}
                    <div className="space-y-3 max-w-[70%] relative z-10">
                      <span className="inline-block px-3 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-white/10 font-mono text-xs font-medium uppercase tracking-widest">
                        {project.category}
                      </span>

                      <h3 className="text-2xl sm:text-4xl font-black font-sans text-white uppercase tracking-tight leading-tight drop-shadow-md group-hover:text-[#FF4D00] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="font-sans font-medium text-zinc-300 text-sm leading-relaxed max-w-xl drop-shadow-md line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* BOTTOM: Glassmorphism Tech Badges & Metrics/CTA */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/15 mt-auto relative z-10">

                      {/* Tech stack badges with official brand icons & glassmorphism */}
                      <div className="flex flex-wrap gap-2 max-w-full md:max-w-[65%]">
                        {project.techStack.slice(0, 5).map((tech) => {
                          const config = TECH_CONFIG[tech] || {
                            icon: Cpu,
                            color: "text-zinc-400",
                            bgHover: "hover:border-zinc-700",
                          };
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
                        {project.techStack.length > 5 && (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-zinc-400">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Metrics + Clean CTA Button */}
                      <div className="flex items-center space-x-6 ml-auto md:ml-0 shrink-0">
                        {project.metrics.throughput && (
                          <div className="text-right hidden sm:block">
                            <div className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest">Throughput</div>
                            <div className="font-mono font-bold text-sm text-white">{project.metrics.throughput}</div>
                          </div>
                        )}
                        {project.metrics.uptime && (
                          <div className="text-right hidden sm:block">
                            <div className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest">SLA</div>
                            <div className="font-mono font-bold text-sm text-zinc-300">{project.metrics.uptime}</div>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
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
          })}
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
