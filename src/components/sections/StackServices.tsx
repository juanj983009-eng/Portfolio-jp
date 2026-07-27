"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

// Brand SVG Icons
const Icons = {
  Java: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-500" {...props}>
      <path d="M11.75 0C11.75 0 8.5 3.5 11.25 6C13.25 7.8 15.5 8.7 13.5 11.5C12.3 13.2 9.8 12.2 8.7 10.7C8.2 13 10.5 15 13 15C16.8 15 18.5 11.8 17.5 9.2C16.8 7.3 14.2 5.5 14 3.5C13.8 1.8 14.5 0.8 14.5 0.8C14.5 0.8 12.8 0 11.75 0Z" />
      <path d="M8.25 15.5C8.25 15.5 5 17 8 18.5C10.5 19.8 15.5 19.8 17.2 18.5C18.5 17.5 17.5 16 17.5 16C17.5 16 15.8 17.2 12.8 17.2C9.8 17.2 8.25 15.5 8.25 15.5Z" />
      <path d="M6 19.5C6 19.5 3 21 7.5 22.2C11.5 23.2 17.5 23 19 21.5C20 20.5 19 19.5 19 19.5C19 19.5 17.2 20.8 13.5 20.8C9.5 20.8 6 19.5 6 19.5Z" />
    </svg>
  ),
  Python: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-sky-400" {...props}>
      <path d="M11.87 0C5.8 0 6.16 2.64 6.16 2.64v2.74H12v.82H3.72S0 5.76 0 11.87c0 6.1 3.24 5.88 3.24 5.88h1.94v-2.73s-.1-3.26 3.26-3.26h5.81s3.15.06 3.15-3.05V3.24S17.94 0 11.87 0zM8.7 1.88a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" />
      <path d="M12.13 24c6.07 0 5.71-2.64 5.71-2.64v-2.74H12v-.82h8.28s3.72.44 3.72-5.67c0-6.1-3.24-5.88-3.24-5.88h-1.94v2.73s.1 3.26-3.26 3.26h-5.81s-3.15-.06-3.15 3.05v5.63S6.06 24 12.13 24zm3.17-1.88a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
    </svg>
  ),
  Keycloak: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500" {...props}>
      <path d="M12 0L2 4v6c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V4l-10-4zm0 6a3 3 0 0 1 3 3c0 1.3-.84 2.4-2 2.82V16h-2v-4.18A3.001 3.001 0 0 1 12 6z" />
    </svg>
  ),
  Go: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-cyan-400" {...props}>
      <path d="M1.8 10.4h3.6v1.2H1.8zm0 2.4h2.4v1.2H1.8zm0 2.4h3.6v1.2H1.8zm5.4-4.8h11.4v1.2H7.2zm0 2.4h9.6v1.2H7.2zm0 2.4h11.4v1.2H7.2z" />
      <path d="M20.4 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6.6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6z" />
    </svg>
  ),
  Cassandra: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#ea580c]" {...props}>
      <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6.5c-4.42 0-8-1.34-8-2.5s3.58-2.5 8-2.5 8 1.34 8 2.5-3.58 2.5-8 2.5zm-8 4.5v2.5c0 1.16 3.58 2.5 8 2.5s8-1.34 8-2.5V13c-1.85 1.15-4.8 1.8-8 1.8s-6.15-.65-8-1.8zm0 5v2.5c0 1.16 3.58 2.5 8 2.5s8-1.34 8-2.5V18c-1.85 1.15-4.8 1.8-8 1.8s-6.15-.65-8-1.8z" />
    </svg>
  ),
  Postgres: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-sky-400" {...props}>
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm-1 15.5v-2h-2v-2h2v-2.5c0-1.66 1.34-3 3-3h2v2h-2c-.55 0-1 .45-1 1V13.5h3l-.5 2H14v2h-3z" />
    </svg>
  ),
  DuckDB: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12c2 0 3-2 5-2s3 2 3 2" stroke="#050505" strokeWidth="2" fill="none" />
    </svg>
  ),
  Kafka: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-orange-400" {...props}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.2 3.6-7.2 3.6-7.2-3.6 7.2-3.6zM4.4 15.4V9.2l6.4 3.2v6.2l-6.4-3.2zm15.2 0l-6.4 3.2v-6.2l6.4-3.2v6.2z" />
    </svg>
  ),
  React: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-cyan-400" {...props}>
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  Nextjs: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-zinc-100" {...props}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 16.5L8.5 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Typescript: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 11h4m-2 0v6M13.5 17c.5.5 1.5 1 2.5 1s2-.5 2-1.5-1-1.5-2-2-2-1.5-2-2.5 1-2.5 2.5-2.5 2 .5 2.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Docker: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-sky-400" {...props}>
      <path d="M13.9 11.2h2.2v2.2h-2.2zm-3.1 0h2.2v2.2h-2.2zm-3.1 0h2.2v2.2H7.7zm-3.1 0h2.2v2.2H4.6zm6.2-3.1h2.2v2.2h-2.2zm-3.1 0h2.2v2.2H7.7zm6.2 0h2.2v2.2h-2.2zm-3.1-3.1h2.2v2.2h-2.2zM1 14.3c.5 3.5 3.5 6.2 7.1 6.2 6.1 0 10.3-4.2 10.3-8.8 0-.3 0-.6-.1-.9h2.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-.4C20 6.1 18.2 5 16 5c-.4 0-.8.1-1.2.2C13.8 2.7 11.1 1 8 1 4.1 1 1 4.1 1 8c0 2.2.9 4.2 2.4 5.6-.9.2-1.8.4-2.4.7z" />
    </svg>
  ),
};

interface TechRow {
  name: string;
  detail: string;
  experience: string;
  icon: React.ReactNode;
}

interface SpecCategory {
  id: string;
  title: string;
  items: TechRow[];
}

export const StackServices: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const categories: SpecCategory[] = [
    {
      id: "backend",
      title: "DISTRIBUTED BACKEND",
      items: [
        { name: "Java / Spring Boot", detail: "Enterprise Microservices & OAuth2", experience: "6+ Yrs", icon: <Icons.Java /> },
        { name: "Python / FastAPI", detail: "Async Data Pipelines & High-Speed APIs", experience: "5+ Yrs", icon: <Icons.Python /> },
        { name: "Keycloak IAM", detail: "OpenID Connect & Zero-Trust Auth", experience: "4+ Yrs", icon: <Icons.Keycloak /> },
        { name: "Go Systems", detail: "Low-Latency Concurrent Services", experience: "3+ Yrs", icon: <Icons.Go /> },
      ],
    },
    {
      id: "data",
      title: "DATA SYSTEMS",
      items: [
        { name: "Apache Cassandra", detail: "Distributed Wide-Column Storage", experience: "4+ Yrs", icon: <Icons.Cassandra /> },
        { name: "PostgreSQL / PostGIS", detail: "Relational Queries & TimescaleDB", experience: "6+ Yrs", icon: <Icons.Postgres /> },
        { name: "DuckDB-Wasm", detail: "In-Browser OLAP Columnar Engine", experience: "3+ Yrs", icon: <Icons.DuckDB /> },
        { name: "Apache Kafka", detail: "Real-Time Event Stream Mesh", experience: "4+ Yrs", icon: <Icons.Kafka /> },
      ],
    },
    {
      id: "frontend",
      title: "FRONTEND SYSTEMS",
      items: [
        { name: "React 19 Architecture", detail: "Reactive UI & Concurrent Mode", experience: "6+ Yrs", icon: <Icons.React /> },
        { name: "Next.js 15 App Router", detail: "SSR, Static Export & Edge Routing", experience: "5+ Yrs", icon: <Icons.Nextjs /> },
        { name: "Strict TypeScript", detail: "Type-Safe Contracts & Solid Clean Code", experience: "6+ Yrs", icon: <Icons.Typescript /> },
        { name: "React Flow Canvas", detail: "Interactive Node Diagram Editors", experience: "3+ Yrs", icon: <Icons.React /> },
      ],
    },
    {
      id: "devops",
      title: "DEVOPS & INFRASTRUCTURE",
      items: [
        { name: "Docker / Swarm", detail: "Containerized Workloads & Swarm", experience: "6+ Yrs", icon: <Icons.Docker /> },
        { name: "Linux Administration", detail: "Systemd Services & Kernel Tuning", experience: "7+ Yrs", icon: <Icons.Docker /> },
        { name: "Nginx & Edge Proxies", detail: "Load Balancing & TLS Termination", experience: "6+ Yrs", icon: <Icons.Docker /> },
        { name: "Automated CI/CD", detail: "GitHub Actions & Zero Downtime", experience: "5+ Yrs", icon: <Icons.Docker /> },
      ],
    },
  ];

  return (
    <section id="stack" className="space-y-12 pt-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
              SECTION // <span className="text-[#ea580c] font-bold">02 - ENGINE_STACK_MATRIX</span>
            </span>
          </div>
          <h2 className="font-sans font-bold tracking-[0.2em] text-xs text-zinc-400 uppercase">
            ENGINE STACK &amp; CAPABILITIES
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold font-sans text-zinc-100 tracking-tight">
            Production Tech Stack &amp; <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">Spec Sheet</span>
          </p>
        </div>

        <div className="flex items-center space-x-2 font-mono text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>VERIFIED PRODUCTION CAPABILITIES</span>
        </div>
      </div>

      {/* UNBOXED 4-COLUMN EDITORIAL SPEC SHEET GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {categories.map((cat) => (
          <div key={cat.id} className="space-y-6">
            
            {/* Category Upper Header */}
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-sans font-bold tracking-[0.2em] text-xs text-zinc-400 uppercase">
                {cat.title}
              </h3>
            </div>

            {/* Spec Rows */}
            <div className="space-y-4">
              {cat.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="group border-b border-white/[0.06] pb-3 transition-colors cursor-default"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <div className="shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-sans font-semibold text-xs text-zinc-100 group-hover:text-orange-400 transition-colors truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 font-medium shrink-0">
                      {item.experience}
                    </span>
                  </div>

                  <p className="text-[11px] font-sans text-zinc-500 font-light mt-1 leading-tight group-hover:text-zinc-400 transition-colors">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StackServices;
