"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
interface Tech {
  name: string;
  role: string; // short badge label
}

interface TechCategory {
  index: string;
  domain: string;
  accentHex: string;
  accentClass: string;
  techs: Tech[];
}

const CATEGORIES: TechCategory[] = [
  {
    index: "01",
    domain: "BACKEND & DISTRIBUTED SYSTEMS",
    accentHex: "#FF4D00",
    accentClass: "text-[#FF4D00]",
    techs: [
      { name: "Java", role: "CORE" },
      { name: "Spring Boot", role: "FRAMEWORK" },
      { name: "Python", role: "SCRIPTING" },
      { name: "FastAPI", role: "REST / ASYNC" },
      { name: "Apache Kafka", role: "EVENT MESH" },
      { name: "Go", role: "SYSTEMS" },
      { name: "gRPC", role: "PROTOCOL" },
      { name: "Microservices", role: "ARCH PATTERN" },
      { name: "Event Sourcing", role: "CQRS" },
    ],
  },
  {
    index: "02",
    domain: "FRONTEND & CREATIVE TECH",
    accentHex: "#34d399",
    accentClass: "text-emerald-400",
    techs: [
      { name: "Next.js 15", role: "APP ROUTER" },
      { name: "React 19", role: "RSC" },
      { name: "TypeScript", role: "TYPED" },
      { name: "Tailwind CSS", role: "STYLING" },
      { name: "Framer Motion", role: "ANIMATION" },
      { name: "React Flow", role: "DIAGRAMS" },
      { name: "Three.js", role: "3D / WEBGL" },
      { name: "WebGL", role: "GPU RENDER" },
    ],
  },
  {
    index: "03",
    domain: "DATA ENGINEERING & STORAGE",
    accentHex: "#38bdf8",
    accentClass: "text-sky-400",
    techs: [
      { name: "PostgreSQL", role: "RELATIONAL" },
      { name: "Cassandra", role: "WIDE-COLUMN" },
      { name: "MongoDB", role: "DOCUMENT" },
      { name: "DuckDB-WASM", role: "OLAP / IN-BROWSER" },
      { name: "Redis", role: "CACHE" },
      { name: "ClickHouse", role: "COLUMNAR" },
      { name: "Apache Parquet", role: "DATA FORMAT" },
      { name: "dbt", role: "TRANSFORM" },
    ],
  },
  {
    index: "04",
    domain: "CLOUD INFRASTRUCTURE & DEVOPS",
    accentHex: "#a78bfa",
    accentClass: "text-violet-400",
    techs: [
      { name: "Docker", role: "CONTAINERS" },
      { name: "Kubernetes", role: "ORCHESTRATION" },
      { name: "Linux", role: "ADMIN" },
      { name: "CI/CD", role: "PIPELINES" },
      { name: "AWS", role: "CLOUD" },
      { name: "Terraform", role: "IaC" },
      { name: "Nginx", role: "REVERSE PROXY" },
      { name: "Prometheus", role: "OBSERVABILITY" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   TECH MARQUEE  — editorial tech list in a seamless loop
───────────────────────────────────────────────────────────── */
const TechMarquee: React.FC<{ category: TechCategory }> = ({ category }) => {
  const { techs, accentHex } = category;

  // Duplicate the set so the clone wraps seamlessly at -50%
  const renderSet = (keyOffset: number) =>
    techs.map((tech, i) => (
      <div
        key={`${keyOffset}-${i}`}
        className="flex items-center gap-6 md:gap-8 shrink-0"
      >
        {/* Tech name */}
        <span className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-white leading-none">
          {tech.name}
        </span>

        {/* Role badge */}
        <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
          {tech.role}
        </span>

        {/* Separator dot */}
        <span
          className="shrink-0 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: accentHex }}
          aria-hidden="true"
        />
      </div>
    ));

  return (
    <div className="relative w-full overflow-hidden py-8 bg-zinc-950/80 border-t border-b border-zinc-900">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 md:gap-12 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {renderSet(0)}
        {renderSet(1)}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   ACCORDION ROW
───────────────────────────────────────────────────────────── */
const AccordionRow: React.FC<{
  category: TechCategory;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ category, isActive, onHover, onLeave }) => (
  <div
    className={`relative cursor-pointer select-none transition-colors duration-300 ${
      isActive ? "border-b-0" : "border-b border-zinc-800"
    }`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    {/* ── Row Header ── */}
    <div className="flex items-center justify-between px-0 py-5 md:py-6">
      <div className="flex items-baseline gap-5 md:gap-8">
        <span
          className={`font-sans font-bold text-[10px] tracking-widest uppercase transition-colors duration-300 ${
            isActive ? category.accentClass : "text-zinc-600"
          }`}
        >
          {category.index}
        </span>
        <h3
          className={`font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-none transition-all duration-300 ${
            isActive ? "text-white" : "text-zinc-300"
          }`}
        >
          {category.domain}
        </h3>
      </div>

      {/* +/× toggle */}
      <motion.div
        animate={{ rotate: isActive ? 45 : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex-shrink-0 flex items-center justify-center font-sans font-bold text-base transition-colors duration-300 ${
          isActive
            ? "border-[#FF4D00] text-[#FF4D00]"
            : "border-zinc-700 text-zinc-500"
        }`}
      >
        +
      </motion.div>
    </div>

    {/* ── Tech Marquee Strip ── */}
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key="strip"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          {/* Accent hairline top */}
          <div
            className="w-full h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${category.accentHex}60, transparent)`,
            }}
          />

          <TechMarquee category={category} />

          {/* Restore bottom row border */}
          <div className="w-full h-px bg-zinc-800 mt-0" />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────────────────────────── */
const TechAccordionSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-zinc-900">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#FF4D00]">
          <span>{t.techStack.accordionTitle.main}</span>
          <span className="text-[#FF4D00]">{t.techStack.accordionTitle.highlight}</span>
        </span>
        <span className="h-px w-12 bg-zinc-800" />
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-zinc-600">
          HOVER TO REVEAL
        </span>
      </div>

      <div className="border-t border-zinc-800">
        {CATEGORIES.map((category, index) => (
          <AccordionRow
            key={category.index}
            category={category}
            isActive={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default TechAccordionSection;
