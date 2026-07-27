"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Github, ArrowUpRight, GitBranch, Star, Terminal, Cpu, Database, Network } from "lucide-react";

interface RepoCardConfig {
  id: string;
  title: string;
  lang: string;
  langColor: string;
  stars: number;
  forks: number;
  description: string;
  icon: React.ReactNode;
  targetX: string;
  targetY: string;
  rotate: number;
}

const REPO_CARDS: RepoCardConfig[] = [
  {
    id: "telemetry-engine",
    title: "telemetry-ingestion-v2",
    lang: "Go",
    langColor: "bg-cyan-400",
    stars: 428,
    forks: 84,
    description: "High-throughput OBD-II telemetry ingestion pipeline via EMQX & Kafka.",
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    targetX: "-35vw",
    targetY: "-28vh",
    rotate: -12,
  },
  {
    id: "cassandra-sync",
    title: "cassandra-wide-store",
    lang: "Java",
    langColor: "bg-orange-500",
    stars: 312,
    forks: 49,
    description: "Distributed wide-column time-series data storage & query engine.",
    icon: <Database className="w-4 h-4 text-orange-500" />,
    targetX: "35vw",
    targetY: "-28vh",
    rotate: 14,
  },
  {
    id: "duckdb-wasm",
    title: "duckdb-analytics-wasm",
    lang: "TypeScript",
    langColor: "bg-blue-400",
    stars: 580,
    forks: 112,
    description: "In-browser columnar OLAP analytics client with SQL queries.",
    icon: <Terminal className="w-4 h-4 text-amber-400" />,
    targetX: "-42vw",
    targetY: "0vh",
    rotate: 6,
  },
  {
    id: "kafka-mesh",
    title: "kafka-event-mesh",
    lang: "Python",
    langColor: "bg-emerald-400",
    stars: 264,
    forks: 38,
    description: "Real-time event stream mesh & schema registry validators.",
    icon: <Network className="w-4 h-4 text-emerald-400" />,
    targetX: "42vw",
    targetY: "0vh",
    rotate: -8,
  },
  {
    id: "react-flow-topology",
    title: "react-flow-architectures",
    lang: "TypeScript",
    langColor: "bg-blue-400",
    stars: 690,
    forks: 145,
    description: "Interactive node canvas topology components for Next.js App Router.",
    icon: <GitBranch className="w-4 h-4 text-sky-400" />,
    targetX: "-38vw",
    targetY: "30vh",
    rotate: 8,
  },
  {
    id: "keycloak-zero-trust",
    title: "keycloak-zero-trust",
    lang: "Java",
    langColor: "bg-orange-500",
    stars: 195,
    forks: 29,
    description: "OpenID Connect & OAuth2 multi-tenant authentication provider.",
    icon: <Terminal className="w-4 h-4 text-orange-400" />,
    targetX: "38vw",
    targetY: "30vh",
    rotate: -10,
  },
];

export const GithubLabSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw scroll progress from start to end
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for 120 FPS hardware accelerated lerp
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="github-lab"
      className="relative w-full h-[350vh] bg-black text-white select-none border-none"
    >
      {/* Sticky Viewport Scene Container (overflow-visible to prevent clipping cards) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-visible pointer-events-none bg-black">

        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D00]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* ── CENTRAL HUB CONTENT (z-10: Behind stacked cards at scroll 0, revealed as cards explode) ── */}
        <div className="relative z-10 text-center max-w-xl mx-auto px-4 pointer-events-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] block mb-2">
            FOLLOW ON
          </span>

          <div className="flex items-center justify-center space-x-3 my-3">
            <Github className="w-10 h-10 md:w-12 md:h-12 text-white shrink-0" />
            <h2 className="font-sans text-5xl md:text-7xl font-black not-italic uppercase tracking-tight text-white leading-none select-none">
              GITHUB
            </h2>
          </div>

          <p className="font-mono text-xs text-zinc-400 tracking-wider uppercase leading-relaxed mb-8 max-w-md mx-auto">
            EXPLORING DISTRIBUTED SYSTEMS, HIGH-THROUGHPUT PIPELINES, AND ENTERPRISE MONITORED ARCHITECTURES.
          </p>

          <a
            href="https://github.com/juanparra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#FF4D00] text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(255,77,0,0.4)] group cursor-pointer"
          >
            <span>VIEW GITHUB PROFILE</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ── STACKED TO SCATTERED CARDS ENGINE ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {REPO_CARDS.map((card, index) => (
            <FloatingCard
              key={card.id}
              card={card}
              index={index}
              smoothProgress={smoothProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

interface FloatingCardProps {
  card: RepoCardConfig;
  index: number;
  smoothProgress: MotionValue<number>;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ card, index, smoothProgress }) => {
  // Scatter / Explosion physics: 0 = stacked at center, 0.8 = exploded outward
  const x = useTransform(smoothProgress, [0, 0.8], ["0vw", card.targetX]);
  const y = useTransform(smoothProgress, [0, 0.8], ["0vh", card.targetY]);
  const rotate = useTransform(smoothProgress, [0, 0.8], [0, card.rotate]);
  const scale = useTransform(smoothProgress, [0, 0.8], [1.05, 1]);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        zIndex: 30 + index,
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[260px] md:w-[340px] h-[180px] md:h-[220px] rounded-3xl bg-zinc-900/95 border border-zinc-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 flex flex-col justify-between backdrop-blur-md pointer-events-auto transform-gpu"
    >
      {/* Card Header */}
      <div>
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3">
          <div className="flex items-center space-x-2">
            {card.icon}
            <span className="font-sans font-bold text-xs text-zinc-100 truncate max-w-[140px] md:max-w-[180px]">
              {card.title}
            </span>
          </div>
          <span className="flex items-center space-x-1">
            <span className={`w-2 h-2 rounded-full ${card.langColor}`} />
            <span className="font-sans text-[10px] text-zinc-400">{card.lang}</span>
          </span>
        </div>

        {/* Description */}
        <p className="font-sans font-medium text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {card.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-2.5 font-sans text-[10px] text-zinc-500">
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
            <span>{card.stars}</span>
          </span>
          <span className="flex items-center space-x-1">
            <GitBranch className="w-3 h-3 text-zinc-400" />
            <span>{card.forks}</span>
          </span>
        </div>
        <span className="text-[#FF4D00] font-bold">PUBLIC REPO</span>
      </div>
    </motion.div>
  );
};

export default GithubLabSection;
