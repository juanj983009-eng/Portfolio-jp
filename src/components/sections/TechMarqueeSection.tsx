"use client";

import React from "react";
import { resolveTech } from "@/components/ui/bento-grid";
import SectionHeader from "@/components/ui/SectionHeader";
import { Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ROW_1_TECHS = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Python",
  "Go",
  "Apache Kafka",
  "Redis",
  "Spring Boot",
  "TimescaleDB",
  "Tailwind CSS",
];

const ROW_2_TECHS = [
  "MongoDB",
  "Cassandra",
  "DuckDB",
  "NestJS",
  "RabbitMQ",
  "Kubernetes",
  "FFmpeg",
  "Prisma",
  "Linux",
  "Nginx",
  "MySQL",
  "JavaScript",
  "MQTT",
];

const TechMarqueeItem: React.FC<{ tech: string }> = ({ tech }) => {
  const config = resolveTech(tech);
  const IconComponent = config.icon;

  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-200 cursor-pointer shadow-md group shrink-0 select-none">
      <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
        <IconComponent className={`w-4 h-4 ${config.color} transition-transform duration-200 group-hover:scale-110`} />
      </div>
      <span className="text-xs font-mono text-zinc-300 font-semibold tracking-wide whitespace-nowrap group-hover:text-white transition-colors">
        {tech}
      </span>
    </div>
  );
};

export const TechMarqueeSection: React.FC = () => {
  const { t } = useLanguage();
  const titleObj = t.infrastructureTitle || t.techStack?.infrastructureTitle;

  return (
    <section id="tech-ecosystem" className="relative w-full pt-12 pb-24 bg-black border-t border-zinc-800/80 text-white select-none overflow-hidden">
      {/* Section 03 Header — Centered */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4 md:px-6 mb-12 select-none">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-none text-center font-sans">
          <span className="text-white block">
            {titleObj?.main}
          </span>
          <span className="text-[#FF4D00] block">
            {titleObj?.highlight}
          </span>
        </h2>

        <div className="w-full border-b border-zinc-800/80 mt-8" />
      </div>

      {/* Marquee Wrapper with Fade Edge Masks */}
      <div className="w-full space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* ROW 1: Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-4 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0">
            {ROW_1_TECHS.map((tech, i) => (
              <TechMarqueeItem key={`r1-1-${i}`} tech={tech} />
            ))}
          </div>
          <div className="flex gap-4 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0 aria-hidden:true">
            {ROW_1_TECHS.map((tech, i) => (
              <TechMarqueeItem key={`r1-2-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* ROW 2: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-4 animate-marquee-right group-hover:[animation-play-state:paused] shrink-0">
            {ROW_2_TECHS.map((tech, i) => (
              <TechMarqueeItem key={`r2-1-${i}`} tech={tech} />
            ))}
          </div>
          <div className="flex gap-4 animate-marquee-right group-hover:[animation-play-state:paused] shrink-0 aria-hidden:true">
            {ROW_2_TECHS.map((tech, i) => (
              <TechMarqueeItem key={`r2-2-${i}`} tech={tech} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechMarqueeSection;
