"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

import {
  SiSpringboot,
  SiSpringsecurity,
  SiPython,
  SiKeycloak,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiVercel,
  SiPostgresql,
  SiRedis,
  SiApachespark,
  SiDocker,
  SiNginx,
  SiApachetomcat,
  SiGithub,
} from "react-icons/si";
import { Database } from "lucide-react";

interface StackItem {
  name: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}

interface StackCardData {
  id: string;
  num: string;
  category: string;
  tag: string;
  items: StackItem[];
  /** Final X position after spread (vw units, e.g. "-34vw") */
  targetVw: string;
}

// ── 4 PRODUCTION STACK CARDS ──
const STACK_CARDS: StackCardData[] = [
  {
    id: "backend",
    num: "#01",
    category: "BACKEND",
    tag: "DISTRIBUTED SYSTEMS",
    items: [
      {
        name: "Java / Spring Boot",
        desc: "ENTERPRISE MICROSERVICES & APIS",
        icon: SiSpringboot,
        color: "text-[#6DB33F]",
      },
      {
        name: "Spring Security",
        desc: "JWT AUTHENTICATION & AUTHORIZATION",
        icon: SiSpringsecurity,
        color: "text-[#6DB33F]",
      },
      {
        name: "Python",
        desc: "DATA PROCESSING & SCRIPTS",
        icon: SiPython,
        color: "text-[#3776AB]",
      },
      {
        name: "Keycloak IAM",
        desc: "CENTRALIZED IDENTITY & ZERO-TRUST",
        icon: SiKeycloak,
        color: "text-[#FF4D00]",
      },
    ],
    targetVw: "-36vw",
  },
  {
    id: "frontend",
    num: "#02",
    category: "FRONTEND",
    tag: "REACTIVE INTERFACES",
    items: [
      {
        name: "React Architecture",
        desc: "SPA & COMPONENT DESIGN SYSTEMS",
        icon: SiReact,
        color: "text-[#61DAFB]",
      },
      {
        name: "Tailwind CSS",
        desc: "UTILITY-FIRST STYLING & THEMING",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]",
      },
      {
        name: "JavaScript / ES6+",
        desc: "DYNAMIC CLIENT-SIDE LOGIC",
        icon: SiJavascript,
        color: "text-[#F7DF1E]",
      },
      {
        name: "Vercel",
        desc: "PRODUCTION EDGE DEPLOYMENTS",
        icon: SiVercel,
        color: "text-white",
      },
    ],
    targetVw: "-12vw",
  },
  {
    id: "data",
    num: "#03",
    category: "DATA LAB",
    tag: "ENGINEERING & ANALYTICS",
    items: [
      {
        name: "PostgreSQL",
        desc: "RELATIONAL SCHEMAS & TRANSACTIONS",
        icon: SiPostgresql,
        color: "text-[#4169E1]",
      },
      {
        name: "MS SQL Server",
        desc: "ENTERPRISE DATA ENGINES",
        icon: Database,
        color: "text-[#CC2927]",
      },
      {
        name: "Redis",
        desc: "IN-MEMORY CACHING & SESSIONS",
        icon: SiRedis,
        color: "text-[#DC382D]",
      },
      {
        name: "Apache Spark",
        desc: "DISTRIBUTED DATA PROCESSING",
        icon: SiApachespark,
        color: "text-[#E25A1C]",
      },
    ],
    targetVw: "12vw",
  },
  {
    id: "infra",
    num: "#04",
    category: "INFRA & OPS",
    tag: "DEVOPS & CLOUD",
    items: [
      {
        name: "Docker & Compose",
        desc: "CONTAINERIZED WORKLOADS",
        icon: SiDocker,
        color: "text-[#2496ED]",
      },
      {
        name: "Nginx",
        desc: "REVERSE PROXY & LOAD BALANCING",
        icon: SiNginx,
        color: "text-[#009639]",
      },
      {
        name: "Apache Tomcat",
        desc: "JAVA APP SERVERS",
        icon: SiApachetomcat,
        color: "text-[#F8DC75]",
      },
      {
        name: "Git & GitHub",
        desc: "VERSION CONTROL",
        icon: SiGithub,
        color: "text-white",
      },
    ],
    targetVw: "36vw",
  },
];

// ──────────────────────────────────────────────────────────────────
// CARD ITEM — Phase-separated scroll animation
//
// PHASE 0  (0.00 → 0.05): All cards stacked at center (x=0, rotateY=0)
// PHASE 1  (0.05 → 0.45): Spread out horizontally (x: 0 → targetVw), back still visible
// PHASE 2  (0.45 → 0.82): Each card flips in 3D (rotateY: 0 → 180)
// ──────────────────────────────────────────────────────────────────
const CardItem: React.FC<{
  card: StackCardData;
  index: number;
  smoothProgress: MotionValue<number>;
}> = ({ card, index, smoothProgress }) => {
  // PHASE 1: Horizontal spread (scroll 5% → 45%)
  const x = useTransform(smoothProgress, [0.05, 0.45], ["0vw", card.targetVw]);

  // PHASE 2: 3D Flip (scroll 45% → 82%)
  const rotateY = useTransform(smoothProgress, [0.45, 0.82], [0, 180]);

  // IDLE FLOAT: autonomous Y keyframe (no MotionValue conflict — different prop from scroll)
  // Note: y from the idle float is applied directly via the animate prop on the SAME outer div.
  // Framer Motion merges animate keyframes with style MotionValues on different axes cleanly.

  return (
    // Single container with preserve-3d — BOTH faces are direct children
    // x, rotateY come from scroll MotionValues via style{}
    // y float comes from animate{} keyframe — different axis, zero conflict
    <motion.div
      style={{
        x,
        rotateY,
        transformStyle: "preserve-3d",
        zIndex: index + 10,
      }}
      animate={{
        y: [0, -14, 0],
      }}
      transition={{
        y: {
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: index * 0.2,
        },
      }}
      className="absolute w-[200px] sm:w-[260px] h-[300px] sm:h-[390px] max-h-[50vh] sm:max-h-[58vh] rounded-3xl style-gpu will-change-transform select-none cursor-pointer shadow-[0_16px_48px_rgba(0,0,0,0.9)]"
    >
      {/* ── CARA TRASERA (REVERSO ORNAMENTAL)
           Padded black container so the ornament pattern breathes and
           never gets clipped by border-radius. object-contain preserves
           the full card-back geometry at 2:3 ratio. ── */}
      <div
        className="absolute inset-0 w-full h-full rounded-3xl bg-black border border-zinc-700/80 overflow-hidden p-3 flex items-center justify-center"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/cards/card-back-pattern.png"
            alt="Card Back"
            fill
            priority
            sizes="280px"
            className="object-contain"
          />
        </div>
      </div>

      {/* ── CARA FRONTAL (SKILLS CONTENT)
           Pre-rotated 180deg so it faces away at start.
           After card rotates 180°, this face comes forward correctly oriented.
           backfaceVisibility:hidden → hides before flip. ── */}
      <div
        className="absolute inset-0 rounded-3xl bg-zinc-950 border border-zinc-700/80 hover:border-zinc-500 transition-colors duration-300 p-3.5 md:p-4 flex flex-col justify-between backdrop-blur-md overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5 mb-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
              <span className="font-mono text-[9px] md:text-[10px] text-zinc-400 tracking-widest uppercase">
                {card.tag}
              </span>
            </div>
            <span className="font-mono font-bold text-xs text-zinc-500">
              {card.num}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-black font-sans text-zinc-100 uppercase tracking-tight mb-2">
            {card.category}
          </h3>

          {/* Tech Stack Items */}
          <div className="space-y-1">
            {card.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 py-1 px-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60"
                >
                  <div
                    className={`w-7 h-7 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center ${item.color} shrink-0`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[11px] md:text-xs text-zinc-200 leading-tight">
                      {item.name}
                    </h4>
                    <p className="font-mono font-medium text-zinc-500 text-[8.5px] md:text-[9px] uppercase tracking-tight mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accent Number Watermark */}
        <span className="font-mono text-2xl font-black text-[#FF4D00] select-none absolute bottom-2.5 right-3 pointer-events-none">
          {card.num.replace("#", "")}
        </span>
      </div>
    </motion.div>
  );
};

// ──────────────────────────────────────────────────────────────────
// SECTION
// ──────────────────────────────────────────────────────────────────
import { useLanguage } from "@/context/LanguageContext";

export const TechStackSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 18,
    restDelta: 0.001,
  });

  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.15], [0, -30]);
  const titleScale = useTransform(smoothProgress, [0, 0.15], [1, 0.92]);

  return (
    <section
      ref={targetRef}
      id="stack"
      className="relative w-full h-[400vh] bg-black"
      style={{ perspective: "1200px" }}
    >
      {/* Sticky full-bleed canvas (100vh / 100dvh) */}
      <div
        className="sticky top-0 h-screen h-[100dvh] w-full relative overflow-hidden bg-black select-none z-10"
        style={{ perspective: "1200px" }}
      >
        {/* Section Header — floating subtly at the very top (top-4/top-6), z-30 */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
          className="absolute top-16 sm:top-4 md:top-6 left-0 right-0 z-30 w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center text-center select-none pointer-events-none"
        >
          <h2 className="text-xl sm:text-3xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight text-center font-sans mb-1 sm:mb-3">
            <span className="text-white">
              {(t.techStackTitle || t.techStack?.title)?.main}
            </span>
            <span className="text-[#FF4D00]">
              {(t.techStackTitle || t.techStack?.title)?.highlight}
            </span>
          </h2>
          <p className="font-mono text-[9px] md:text-[11px] text-zinc-500 uppercase tracking-widest mt-1.5">
            {t.techStack.subtitle}
          </p>
          <div className="w-full max-w-md border-b border-zinc-800/80 mt-2 mb-4" />
        </motion.div>

        {/* 3D Cards Deck — Centered with top clearance for floating header */}
        <div
          className="absolute inset-0 pt-20 sm:pt-24 md:pt-32 z-20 flex items-center justify-center pointer-events-none"
          style={{ perspective: "1200px" }}
        >
          {STACK_CARDS.map((card, index) => (
            <CardItem
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

export default TechStackSection;
