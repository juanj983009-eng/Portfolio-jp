"use client";

import React from "react";
import { Cpu, Server, Database, Layers, ShieldCheck, Terminal, Code2, Cloud, TerminalSquare } from "lucide-react";

interface TechItem {
  name: string;
  level: "EXPERT" | "ADVANCED" | "PROFICIENT";
  experience: string;
  tag: string;
}

interface StackCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  accentColor: string;
  skills: TechItem[];
}

export const TechStack: React.FC = () => {
  const stackCategories: StackCategory[] = [
    {
      id: "backend",
      title: "DISTRIBUTED BACKEND",
      icon: <Server className="w-4 h-4 text-orange-400" />,
      accentColor: "text-orange-400 border-orange-500/30",
      skills: [
        { name: "Java (Spring Boot / Ecosystem)", level: "EXPERT", experience: "6+ YRS", tag: "Enterprise Microservices" },
        { name: "Python (FastAPI / Asyncio)", level: "EXPERT", experience: "5+ YRS", tag: "Data Pipelines & APIs" },
        { name: "Keycloak (OAuth2 / OIDC)", level: "EXPERT", experience: "4+ YRS", tag: "Identity & IAM Security" },
        { name: "Go (Golang Systems)", level: "ADVANCED", experience: "3+ YRS", tag: "High-Throughput Services" },
        { name: "REST / gRPC / OpenAPI", level: "EXPERT", experience: "6+ YRS", tag: "Contract-Driven APIs" },
      ],
    },
    {
      id: "data",
      title: "DATA ENGINEERING & STORAGE",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      accentColor: "text-emerald-400 border-emerald-500/30",
      skills: [
        { name: "Apache Cassandra", level: "EXPERT", experience: "4+ YRS", tag: "Distributed NoSQL Columnar" },
        { name: "PostgreSQL / PostGIS", level: "EXPERT", experience: "6+ YRS", tag: "Relational & Spatial GIS" },
        { name: "DuckDB / DuckDB-Wasm", level: "EXPERT", experience: "3+ YRS", tag: "In-Browser OLAP Engine" },
        { name: "Apache Kafka / Event Mesh", level: "EXPERT", experience: "4+ YRS", tag: "Real-Time Telemetry Queue" },
        { name: "Redis Streams & CRDTs", level: "EXPERT", experience: "5+ YRS", tag: "Caching & Offline Delta Sync" },
      ],
    },
    {
      id: "frontend",
      title: "FRONTEND & UI SYSTEMS",
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      accentColor: "text-sky-400 border-sky-500/30",
      skills: [
        { name: "React 19 & Concurrent UI", level: "EXPERT", experience: "6+ YRS", tag: "Reactive Component Architecture" },
        { name: "Next.js 15 (App Router)", level: "EXPERT", experience: "5+ YRS", tag: "SSR & Static Optimization" },
        { name: "Strict TypeScript", level: "EXPERT", experience: "6+ YRS", tag: "Type-Safe Solid Contracts" },
        { name: "Tailwind CSS & Design Tokens", level: "EXPERT", experience: "5+ YRS", tag: "Dark Industrial Aesthetic" },
        { name: "React Flow (@xyflow/react)", level: "EXPERT", experience: "3+ YRS", tag: "Node Graph Visualization" },
      ],
    },
    {
      id: "infrastructure",
      title: "INFRASTRUCTURE & DEVOPS",
      icon: <Cloud className="w-4 h-4 text-amber-400" />,
      accentColor: "text-amber-400 border-amber-500/30",
      skills: [
        { name: "Docker / Docker Compose", level: "EXPERT", experience: "6+ YRS", tag: "Containerization & Swarm" },
        { name: "Linux Administration & Shell", level: "EXPERT", experience: "7+ YRS", tag: "Systemd / Kernel Tuning" },
        { name: "Nginx & Reverse Proxies", level: "EXPERT", experience: "6+ YRS", tag: "Load Balancing & TLS/mTLS" },
        { name: "Cloudflare & Edge CDN", level: "ADVANCED", experience: "4+ YRS", tag: "WAF & Security Edge" },
        { name: "CI/CD (GitHub Actions / GitLab)", level: "EXPERT", experience: "5+ YRS", tag: "Automated Build & Test" },
      ],
    },
  ];

  return (
    <section id="stack" className="space-y-8 pt-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
              SECTION // <span className="text-[#ea580c] font-bold">02 - TECH_STACK_MATRIX</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-zinc-100 tracking-tight">
            Hardware Spec Sheet &amp; <span className="font-serif italic font-normal text-orange-400">Competency Matrix</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl">
            Matriz técnica de producción clasificada por paradigmas de ingeniería backend distribuida, motores de datos, frontend avanzado e infraestructura.
          </p>
        </div>

        <div className="flex items-center space-x-3 font-mono text-xs text-zinc-400">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
            <TerminalSquare className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>STRICT_TYPES: 100%</span>
          </div>
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PRODUCTION_READY</span>
          </div>
        </div>
      </div>

      {/* 4-COLUMN HARDWARE SPEC SHEET GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stackCategories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl border border-zinc-800 bg-[#121215] p-5 shadow-xl space-y-4 flex flex-col justify-between hover:border-zinc-700 transition-colors duration-200"
          >
            {/* Column Header */}
            <div className="border-b border-zinc-800 pb-3 space-y-1">
              <div className="flex items-center space-x-2 font-mono text-xs font-bold text-zinc-100">
                {cat.icon}
                <span>{cat.title}</span>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                {cat.skills.length} CORE CAPABILITIES
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-3 flex-1 font-mono text-xs">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80 space-y-1.5 group hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-zinc-200 group-hover:text-[#ea580c] transition-colors text-[11px] truncate">
                      {skill.name}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[9px] font-bold border uppercase tracking-wider ${
                        skill.level === "EXPERT"
                          ? "bg-emerald-950/60 text-emerald-400 border-emerald-500/30"
                          : "bg-orange-950/60 text-orange-400 border-orange-500/30"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-0.5">
                    <span className="font-sans text-zinc-500">{skill.tag}</span>
                    <span className="font-mono text-zinc-300 font-semibold">{skill.experience}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Column Footer Badge */}
            <div className="pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
              <span>STATUS: VERIFIED</span>
              <span className="text-emerald-400">100% OPERATIONAL</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
