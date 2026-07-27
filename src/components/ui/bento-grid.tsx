"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiApachecassandra,
  SiDocker,
  SiSpringboot,
  SiPython,
  SiApachekafka,
  SiDuckdb,
  SiRedis,
  SiNestjs,
  SiRabbitmq,
  SiKubernetes,
  SiFfmpeg,
  SiPrisma,
  SiGo,
  SiLinux,
  SiNginx,
  SiExpress,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { Cpu, Terminal, Database, Server, Layers, Globe, Radio, Activity } from "lucide-react";

const cn = (...inputs: ClassValue[]) => clsx(inputs);

/* ─────────────────────────────────────────────────────────────
   TECH CONFIG DICTIONARY
───────────────────────────────────────────────────────────── */
export interface TechConfigItem {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgHover: string;
}

export const TECH_CONFIG: Record<string, TechConfigItem> = {
  "React": { icon: SiReact, color: "text-[#61DAFB]", bgHover: "hover:border-[#61DAFB]/40" },
  "TypeScript": { icon: SiTypescript, color: "text-[#3178C6]", bgHover: "hover:border-[#3178C6]/40" },
  "Node.js": { icon: SiNodedotjs, color: "text-[#5FA04E]", bgHover: "hover:border-[#5FA04E]/40" },
  "MQTT": { icon: Cpu, color: "text-[#FF4D00]", bgHover: "hover:border-[#FF4D00]/40" },
  "Next.js": { icon: SiNextdotjs, color: "text-white", bgHover: "hover:border-white/40" },
  "PostgreSQL": { icon: SiPostgresql, color: "text-[#4169E1]", bgHover: "hover:border-[#4169E1]/40" },
  "MongoDB": { icon: SiMongodb, color: "text-[#47A248]", bgHover: "hover:border-[#47A248]/40" },
  "Docker": { icon: SiDocker, color: "text-[#2496ED]", bgHover: "hover:border-[#2496ED]/40" },
  "Python": { icon: SiPython, color: "text-[#3776AB]", bgHover: "hover:border-[#3776AB]/40" },
  "Spring Boot": { icon: SiSpringboot, color: "text-[#6DB33F]", bgHover: "hover:border-[#6DB33F]/40" },
  "Apache Kafka": { icon: SiApachekafka, color: "text-[#FF4D00]", bgHover: "hover:border-[#FF4D00]/40" },
  "DuckDB": { icon: SiDuckdb, color: "text-[#FFF000]", bgHover: "hover:border-[#FFF000]/40" },
  "TimescaleDB": { icon: Database, color: "text-[#FDB515]", bgHover: "hover:border-[#FDB515]/40" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#06B6D4]", bgHover: "hover:border-[#06B6D4]/40" },
  "Go": { icon: SiGo, color: "text-[#00ADD8]", bgHover: "hover:border-[#00ADD8]/40" },
  "Redis": { icon: SiRedis, color: "text-[#DC382D]", bgHover: "hover:border-[#DC382D]/40" },
  "NestJS": { icon: SiNestjs, color: "text-[#E0234E]", bgHover: "hover:border-[#E0234E]/40" },
  "RabbitMQ": { icon: SiRabbitmq, color: "text-[#FF6600]", bgHover: "hover:border-[#FF6600]/40" },
  "Kubernetes": { icon: SiKubernetes, color: "text-[#326CE5]", bgHover: "hover:border-[#326CE5]/40" },
  "FFmpeg": { icon: SiFfmpeg, color: "text-[#007800]", bgHover: "hover:border-[#007800]/40" },
  "Prisma": { icon: SiPrisma, color: "text-[#2D3748]", bgHover: "hover:border-zinc-500/40" },
  "Linux": { icon: SiLinux, color: "text-[#FCC624]", bgHover: "hover:border-[#FCC624]/40" },
  "Nginx": { icon: SiNginx, color: "text-[#009639]", bgHover: "hover:border-[#009639]/40" },
  "MySQL": { icon: SiMysql, color: "text-[#4479A1]", bgHover: "hover:border-[#4479A1]/40" },
  "JavaScript": { icon: SiJavascript, color: "text-[#F7DF1E]", bgHover: "hover:border-[#F7DF1E]/40" },
  "Express": { icon: SiExpress, color: "text-white", bgHover: "hover:border-white/40" },
  "Java": { icon: Server, color: "text-[#ED8B00]", bgHover: "hover:border-[#ED8B00]/40" },
  "Cassandra": { icon: SiApachecassandra, color: "text-[#1287B1]", bgHover: "hover:border-[#1287B1]/40" },
  "Apache Cassandra": { icon: SiApachecassandra, color: "text-[#1287B1]", bgHover: "hover:border-[#1287B1]/40" },
  "OPC-UA": { icon: Cpu, color: "text-amber-400", bgHover: "hover:border-amber-400/40" },
  "Modbus TCP": { icon: Activity, color: "text-orange-400", bgHover: "hover:border-orange-400/40" },
  "AWS S3": { icon: Server, color: "text-[#FF9900]", bgHover: "hover:border-[#FF9900]/40" },
  "CloudFront CDN": { icon: Globe, color: "text-[#8C4FFF]", bgHover: "hover:border-[#8C4FFF]/40" },
  "Web Audio API": { icon: Radio, color: "text-cyan-400", bgHover: "hover:border-cyan-400/40" },
  "Redis Streams": { icon: SiRedis, color: "text-[#DC382D]", bgHover: "hover:border-[#DC382D]/40" },
  "IndexedDB": { icon: Database, color: "text-blue-400", bgHover: "hover:border-blue-400/40" },
  "RxDB": { icon: Database, color: "text-purple-400", bgHover: "hover:border-purple-400/40" },
  "CRDTs": { icon: Layers, color: "text-emerald-400", bgHover: "hover:border-emerald-400/40" },
  "WebSocket": { icon: Radio, color: "text-orange-400", bgHover: "hover:border-orange-400/40" },
  "OAuth2 / OIDC": { icon: Terminal, color: "text-rose-400", bgHover: "hover:border-rose-400/40" },
  "Apache Tomcat": { icon: Server, color: "text-[#F8DC75]", bgHover: "hover:border-[#F8DC75]/40" },
  "CSS3": { icon: Terminal, color: "text-[#1572B6]", bgHover: "hover:border-[#1572B6]/40" },
  "Recharts": { icon: Activity, color: "text-[#22B5BF]", bgHover: "hover:border-[#22B5BF]/40" },
  "Zustand": { icon: Layers, color: "text-amber-400", bgHover: "hover:border-amber-400/40" },
};

/* ─────────────────────────────────────────────────────────────
   MOTION VARIANTS
───────────────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   BENTO GRID CONTAINER
───────────────────────────────────────────────────────────── */
export const BentoGrid: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto py-8",
      className
    )}
  >
    {children}
  </motion.div>
);

interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  badge: string;
  index: string;
  cta?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  header: React.ReactNode;
  techStack?: string[];
  metrics?: {
    throughput?: string;
    uptime?: string;
  };
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  badge,
  index,
  cta,
  ctaHref,
  onCtaClick,
  header,
  techStack,
  metrics,
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    className={cn(
      "group relative rounded-3xl",
      "border border-zinc-800/80 bg-zinc-950/90 p-6 pb-8 min-h-[500px] box-border",
      "flex flex-col justify-between",
      "transition-colors duration-500 hover:border-zinc-700/80 shadow-xl hover:shadow-2xl",
      "cursor-pointer overflow-visible",
      className
    )}
    onClick={onCtaClick}
  >
    {/* 1. CONTENEDOR SUPERIOR DE IMAGEN (FRAME h-36 md:h-40) */}
    <div className="relative w-full h-36 md:h-40 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/60 mb-4 shrink-0">
      {header}
    </div>

    {/* 2. CONTENEDOR INFERIOR DE TEXTO Y MÉTRICAS */}
    <div className="flex flex-col flex-1 justify-between gap-4">
      <div className="space-y-3">
        {/* Badge de categoría monolítico sobrio + ID */}
        <div className="flex items-center justify-between">
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/80 text-zinc-400 border border-zinc-800 text-[10px] font-mono uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            {badge}
          </motion.span>
          <span className="font-mono text-xs font-bold text-zinc-500">{index}</span>
        </div>

        {/* Título */}
        <h3 className="font-sans font-black text-base md:text-lg uppercase tracking-tight text-white leading-tight group-hover:text-[#FF4D00] transition-colors duration-300">
          {title}
        </h3>

        {/* Descripción */}
        <p className="font-sans font-medium text-xs text-zinc-400 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Pills de tech stack con íconos oficiales a color y hover inteligente */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => {
              const config = TECH_CONFIG[tech] || {
                icon: Cpu,
                color: "text-zinc-400",
                bgHover: "hover:border-zinc-700",
              };
              const IconComponent = config.icon;

              return (
                <span
                  key={tech}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800/80 text-[11px] font-mono font-medium text-zinc-300 transition-all duration-200 ${config.bgHover}`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${config.color}`} />
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Métricas + Botón CTA (Footer estructural) */}
      <div className="pt-4 mt-auto border-t border-zinc-800/80 flex items-center justify-between shrink-0">
        {metrics && (metrics.throughput || metrics.uptime) ? (
          <div className="flex items-center gap-4">
            {metrics.throughput && (
              <div>
                <p className="font-sans font-bold text-[8px] uppercase tracking-widest text-zinc-500">Throughput</p>
                <p className="font-mono font-bold text-xs text-white">{metrics.throughput}</p>
              </div>
            )}
            {metrics.uptime && (
              <div>
                <p className="font-sans font-bold text-[8px] uppercase tracking-widest text-zinc-500">SLA</p>
                <p className="font-sans font-bold text-xs text-zinc-300">{metrics.uptime}</p>
              </div>
            )}
          </div>
        ) : <div />}

        {cta && (
          <a
            href={ctaHref ?? "#"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCtaClick?.();
            }}
            className="
              inline-flex items-center gap-1.5 ml-auto
              font-sans font-bold text-xs uppercase tracking-wider
              text-[#FF4D00] hover:text-orange-400
              transition-colors duration-200 group/cta
            "
          >
            <span>{cta}</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);
