import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Github, Video } from "lucide-react";
import { Project, getLocalized } from "@/types/portfolio";
import { resolveTech } from "@/components/ui/bento-grid";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────────────────────
   PROJECT IMAGE FALLBACK MAPPING
───────────────────────────────────────────────────────────── */
const CarouselCardImage: React.FC<{ project: Project }> = ({ project }) => {
  const [imgSrc, setImgSrc] = useState(
    project.coverImage || `/projects/${project.slug}/cover.jpg`
  );

  return (
    <Image
      src={imgSrc}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 350px, 440px"
      onError={() => setImgSrc(`/projects/${project.slug}/cover.jpg`)}
      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
    />
  );
};

interface HorizontalProjectsCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const HorizontalProjectsCarousel: React.FC<HorizontalProjectsCarouselProps> = ({
  projects,
  onSelectProject,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const { language, t } = useLanguage();

  // Measure exact total scroll distance needed in pixels dynamically
  useEffect(() => {
    const updateDistance = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollDistance(Math.max(0, totalWidth - viewportWidth + 80));
      }
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, [projects]);

  // Capture vertical scroll within parent 300vh container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress (0 to 1) to exact pixel distance on X axis for complete smooth sliding
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full bg-black text-white">
      {/* Sticky Viewport Canvas — 3-block flex layout with strict min-h-0 constraint & full vertical clearance */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-between py-4 md:py-6 px-4 md:px-12 bg-black select-none z-10 overflow-hidden box-border">

        {/* 1. ENCABEZADO SUPERIOR (Respira arriba) */}
        <div className="w-full max-w-7xl mx-auto shrink-0 mb-1">
          <SectionHeader
            number="02"
            category={t.projects.selectedLabsTag}
            title={t.projects.moreProjectsTitle}
            count={language === "es" ? "DESLIZA HACIA ABAJO PARA EXPLORAR →" : "SCROLL DOWN TO SLIDE →"}
            className="mb-0"
          />
        </div>

        {/* 2. TRACK DEL CARRUSEL (Centrado verticalmente con resguardo inferior pb-6) */}
        <div className="w-full flex-1 min-h-0 flex items-center overflow-visible my-auto py-2 pb-6">
          <motion.div
            ref={carouselRef}
            style={{ x }}
            className="flex gap-6 md:gap-8 items-center w-max pr-16"
          >
            {projects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="
                    group relative shrink-0 w-[290px] sm:w-[350px] md:w-[410px] lg:w-[440px]
                    h-[48vh] max-h-[330px] min-h-[250px] rounded-2xl border border-zinc-800/80 bg-zinc-950
                    shadow-2xl transition-all duration-300 hover:border-zinc-700 cursor-pointer overflow-hidden box-border
                  "
                >
                  {/* 1. FULL-BLEED COVER IMAGE (100% COVER AT REST — MAXIMUM SHARPNESS) */}
                  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <CarouselCardImage project={project} />
                  </div>

                  {/* 2. OVERLAY TEXT & BADGES CONTAINER (HIDDEN AT REST, REVEALED ON HOVER) */}
                  <div
                    className="
                      absolute inset-0 z-10 p-5 md:p-6 flex flex-col justify-between
                      bg-gradient-to-t from-black/95 via-black/80 to-black/30 backdrop-blur-sm
                      opacity-0 translate-y-4 pointer-events-none
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      transition-all duration-300 ease-out
                    "
                  >
                    {/* Top Header info (Category & Index) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-700/80 uppercase tracking-wider shadow-sm">
                          {project.category}
                        </span>
                        <span className="text-zinc-400 font-mono text-xs font-bold">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white line-clamp-1 leading-tight group-hover:text-[#FF4D00] transition-colors duration-300 mb-1.5 drop-shadow">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed font-sans font-normal mb-3">
                        {getLocalized(project.subtitle || project.tagline || project.summary, language)}
                      </p>

                      {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.slice(0, 8).map((tech: string) => {
                            const config = resolveTech(tech);
                            const IconComponent = config.icon;

                            return (
                              <span
                                key={tech}
                                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900/90 text-[10px] font-mono text-zinc-300 border border-zinc-800 transition-all duration-200 ${config.bgHover}`}
                              >
                                <IconComponent className={`w-3 h-3 ${config.color}`} />
                                <span>{tech}</span>
                              </span>
                            );
                          })}
                          {project.techStack.length > 8 && (
                            <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-zinc-400 inline-flex items-center">
                              +{project.techStack.length - 8} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer / CTA (VIEW ARCHITECTURE & METRICS) */}
                    <div className="pt-3 mt-auto flex items-center justify-between border-t border-zinc-700/60">
                      <div className="font-mono font-bold text-[10px] text-zinc-400 uppercase tracking-widest">
                        {project.metrics?.throughput ?? "SLA 99.99%"}
                      </div>
                      <div className="flex items-center gap-2">
                        {(() => {
                          const demoLink = project.demoVideoUrl || project.demoUrl || (project.videoUrl && project.videoUrl.startsWith("http") ? project.videoUrl : null);
                          if (!demoLink) return null;
                          return (
                            <a
                              href={demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-red-400 hover:text-white transition-colors"
                              title="Watch Video Demo"
                            >
                              <Video className="w-4 h-4 text-red-500" />
                            </a>
                          );
                        })()}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-zinc-400 hover:text-white transition-colors"
                            title="View Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(project);
                          }}
                          className="text-[#FF4D00] text-xs font-bold font-mono tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          <span>VIEW ARCHITECTURE</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* 3. BARRA INFERIOR DE NAVEGACIÓN (Respira abajo con pt-4 de resguardo) */}
        <div className="w-full shrink-0 pt-4 pb-2 flex flex-col items-center justify-center gap-1.5 z-20">
          <div className="w-64 h-1.5 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden relative">
            <motion.div
              className="h-full bg-zinc-200 rounded-full"
              style={{ width: progressBarWidth }}
            />
          </div>
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            SCROLL DOWN TO SLIDE
          </span>
        </div>

      </div>
    </section>
  );
};

export default HorizontalProjectsCarousel;
