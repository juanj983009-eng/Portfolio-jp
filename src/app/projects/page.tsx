"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { PROJECTS } from "@/config/projects";
import { Project, getLocalized } from "@/types/portfolio";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import BookACallCard from "@/components/sections/BookACallCard";
import Footer from "@/components/sections/Footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HorizontalProjectsCarousel } from "@/components/sections/HorizontalProjectsCarousel";
import TechMarqueeSection from "@/components/sections/TechMarqueeSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

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
const ProjectHeader: React.FC<{ project: Project }> = ({ project }) => {
  const [imgSrc, setImgSrc] = React.useState(
    project.coverImage ?? `/projects/${project.slug}/cover.jpg`
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={imgSrc}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setImgSrc(`/projects/${project.slug}/cover.jpg`)}
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        priority={false}
      />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const { language, t } = useLanguage();

  React.useEffect(() => {
    const controller = new AbortController();

    fetch("/api/projects", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Unable to load projects"))))
      .then((data: Project[]) => setProjects(data))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Unable to load dynamic project galleries:", error);
        }
      });

    return () => controller.abort();
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const projectSlug = params.get("project");
    if (projectSlug) {
      const matched = projects.find(
        (p) => p.slug === projectSlug || p.id === projectSlug
      );
      if (matched) {
        setSelectedProject(matched);
      }
    }
  }, [projects]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("project", project.slug);
      window.history.replaceState(null, "", url.toString());
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("project");
      window.history.replaceState(null, "", url.toString());
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/20 selection:text-orange-400 select-none relative">
      <Navbar />

      <main className="w-full relative pt-28 space-y-16">

        {/* ── MASSIVE HERO TITLE ── */}
        <section className="w-full overflow-hidden pt-6 pb-4 flex justify-center items-center border-b border-zinc-900">
          <h1 className="text-[16vw] leading-none font-black tracking-tighter text-[#FF4D00] uppercase select-none whitespace-nowrap font-sans text-center">
            {t.nav.projects}
          </h1>
        </section>

        {/* ── FULL BENTO GRID — 3-COLUMN CONTROLLED GRID ── */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">

          {/* Section 01 Header */}
          <SectionHeader
            number="01"
            category="FEATURED SHOWCASE"
            title={t.projects.title}
            count={`${projects.length} ENTERPRISE SYSTEMS`}
          />

          {/* Dynamic 3-Column Bento Grid */}
          <BentoGrid>
            {projects.map((project, index) => {
              const spanClass = getBentoSpan(index);

              return (
                <BentoGridItem
                  key={project.id}
                  className={spanClass}
                  title={project.title}
                  description={getLocalized(project.subtitle ?? project.tagline ?? project.summary ?? project.description, language)}
                  badge={project.category}
                  index={`#${String(index + 1).padStart(2, "0")}`}
                  cta="VIEW ARCHITECTURE"
                  ctaHref="#"
                  onCtaClick={() => handleOpenProject(project)}
                  header={
                    <ProjectHeader
                      project={project}
                    />
                  }
                  techStack={project.techStack}
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
          projects={projects}
          onSelectProject={(project) => handleOpenProject(project)}
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
          onClose={handleCloseProject}
        />
      )}
    </div>
  );
}
