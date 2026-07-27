"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { PROJECTS } from "@/config/projects";
import { Project } from "@/types/portfolio";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import BookACallCard from "@/components/sections/BookACallCard";
import Footer from "@/components/sections/Footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HorizontalProjectsCarousel } from "@/components/sections/HorizontalProjectsCarousel";
import TechMarqueeSection from "@/components/sections/TechMarqueeSection";
import SectionHeader from "@/components/ui/SectionHeader";

/* ─────────────────────────────────────────────────────────────
   PROJECT IMAGE FALLBACK MAPPING
───────────────────────────────────────────────────────────── */
const PROJECT_IMAGES: Record<string, string> = {
  "smartfleet-v2": "/projects/smartfleet.jpg",
  "logicore-port-control": "/projects/logicore.jpg",
  "controller-production": "/projects/controller.jpg",
  "podcast-streaming-app": "/projects/podcast.jpg",
  "saas-bodegas-pos": "/projects/logicore.jpg",
  "task-orchestration-system": "/projects/controller.jpg",
  "offline-first-pos": "/projects/smartfleet.jpg",
  "clinicav2-stack": "/projects/podcast.jpg",
  "olimpiadas-peru": "/projects/smartfleet.jpg",
};

const DEFAULT_IMAGE = "/projects/smartfleet.jpg";

/* ─────────────────────────────────────────────────────────────
   BENTO SPAN PATTERN (Controlled 3-Column Asymmetric Distribution)
   Row 1: [2] [1] = 3 cols
   Row 2: [1] [1] [1] = 3 cols
   Row 3: [1] [2] = 3 cols
   Row 4: [2] [1] = 3 cols
───────────────────────────────────────────────────────────── */
const getBentoSpan = (index: number): string => {
  if (index === 0 || index === 6 || index === 7) {
    return "col-span-1 md:col-span-2 lg:col-span-2";
  }
  return "col-span-1";
};

/* ─────────────────────────────────────────────────────────────
   PROJECT IMAGE HEADER (Frame Mode: object-cover object-center)
───────────────────────────────────────────────────────────── */
const ProjectHeader: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative w-full h-full overflow-hidden">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      priority={false}
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/20 selection:text-orange-400 select-none relative">
      <Navbar />

      <main className="w-full relative pt-28 space-y-16">

        {/* ── MASSIVE HERO TITLE ── */}
        <section className="w-full overflow-hidden pt-6 pb-4 flex justify-center items-center border-b border-zinc-900">
          <h1 className="text-[16vw] leading-none font-black tracking-tighter text-[#FF4D00] uppercase select-none whitespace-nowrap font-sans text-center">
            PROJECTS
          </h1>
        </section>

        {/* ── FULL BENTO GRID — 3-COLUMN CONTROLLED GRID ── */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">

          {/* Section 01 Header */}
          <SectionHeader
            number="01"
            category="FEATURED SHOWCASE"
            title="PRODUCTION SYSTEMS & ARCHITECTURES"
            count={`${PROJECTS.length} ENTERPRISE SYSTEMS`}
          />

          {/* Dynamic 3-Column Bento Grid */}
          <BentoGrid>
            {PROJECTS.map((project, index) => {
              const imageSrc = PROJECT_IMAGES[project.id] ?? DEFAULT_IMAGE;
              const spanClass = getBentoSpan(index);

              return (
                <BentoGridItem
                  key={project.id}
                  className={spanClass}
                  title={project.title}
                  description={project.tagline ?? project.summary ?? project.description ?? ""}
                  badge={project.category}
                  index={`#${String(index + 1).padStart(2, "0")}`}
                  cta="VIEW ARCHITECTURE"
                  ctaHref="#"
                  onCtaClick={() => setSelectedProject(project)}
                  header={
                    <ProjectHeader
                      src={imageSrc}
                      alt={`${project.title} architecture preview`}
                    />
                  }
                  techStack={project.techStack.slice(0, 4)}
                  metrics={{
                    throughput: project.metrics?.throughput,
                    uptime:     project.metrics?.uptime,
                  }}
                />
              );
            })}
          </BentoGrid>
        </section>

        {/* ── INTERACTIVE HORIZONTAL PROJECTS CAROUSEL (ARCHITECTURE LAB) ── */}
        <HorizontalProjectsCarousel
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* ── INFINITE TECH ECOSYSTEM MARQUEE ── */}
        <TechMarqueeSection />

        {/* ── PRE-FOOTER BOOK A CALL CARD ── */}
        <BookACallCard />

        {/* ── BRUTALIST FOOTER ── */}
        <Footer />

      </main>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
