"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { PROJECTS } from "@/config/projects";
import { Project, ArchitectureNode } from "@/types/portfolio";
import CustomTechNode from "./CustomTechNode";
import { Layers, Activity, Cpu, CheckCircle2, Server, ShieldCheck, Database, Filter } from "lucide-react";

// Node types registry
const nodeTypes = {
  customTech: CustomTechNode,
};

// Helper: Convert architectureNodes array to React Flow Node[] and Edge[]
const generateGraphData = (nodesData: ArchitectureNode[]) => {
  const nodes: Node[] = nodesData.map((node, index) => {
    // Pipeline grid layout: 2 rows or linear flow depending on node count
    const col = index % 3;
    const row = Math.floor(index / 3);
    const posX = col * 260 + 40;
    const posY = row * 160 + 50;

    return {
      id: node.id,
      type: "customTech",
      position: { x: posX, y: posY },
      data: {
        label: node.label,
        type: node.type,
        tech: node.tech,
        status: node.status || "active",
        description: node.description,
      },
    };
  });

  const edges: Edge[] = [];
  for (let i = 0; i < nodesData.length - 1; i++) {
    edges.push({
      id: `edge-${nodesData[i].id}-${nodesData[i + 1].id}`,
      source: nodesData[i].id,
      target: nodesData[i + 1].id,
      animated: true,
      style: { stroke: "#ea580c", strokeWidth: 2 },
    });
  }

  return { nodes, edges };
};

export const Architectures: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  // Filter projects by category
  const categories = ["All", "IoT / Real-Time Telemetry", "Industrial OEE Monitoring", "Port Logistics Microservices", "Distributed Queue Engine", "Distributed Sync Engine"];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  }, [selectedCategory]);

  // Generate initial React Flow nodes and edges for the active project
  const initialGraph = useMemo(() => generateGraphData(activeProject.architectureNodes), [activeProject]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialGraph.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialGraph.edges);

  // Handle project selection change
  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    const { nodes: newNodes, edges: newEdges } = generateGraphData(project.architectureNodes);
    setNodes(newNodes);
    setEdges(newEdges);

    if (reactFlowInstance) {
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2, duration: 400 });
      }, 50);
    }
  };

  const onInit = useCallback((instance: ReactFlowInstance) => {
    setReactFlowInstance(instance);
    instance.fitView({ padding: 0.2 });
  }, []);

  return (
    <section id="architectures" className="space-y-8 pt-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
              SECTION // <span className="text-[#ea580c] font-bold">01 - SYSTEM_ARCHITECTURES</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-zinc-100 tracking-tight">
            Production Architectures &amp; <span className="font-serif italic font-normal text-orange-400">Data Pipelines</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl">
            Explora el flujo de datos, microservicios e infraestructura reactiva de mis {PROJECTS.length} sistemas de producción.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <div className="flex items-center space-x-1.5 text-zinc-500 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {["All", "IoT", "Microservices", "POS / Sync"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === "All" ? "All" : cat)}
              className={`px-2.5 py-1 rounded text-[11px] transition-all border ${
                (selectedCategory === cat || (cat === "All" && selectedCategory === "All"))
                  ? "bg-zinc-800 text-[#ea580c] border-[#ea580c]/50 font-bold"
                  : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3-PANEL BENTO GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* PANEL 1: LEFT PROJECT SELECTOR (lg:col-span-3) */}
        <div className="lg:col-span-3 rounded-xl border border-zinc-800 bg-[#121215] p-4 flex flex-col h-[560px] shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3 font-mono text-xs text-zinc-400">
            <span className="flex items-center space-x-2 font-bold text-zinc-200">
              <Layers className="w-4 h-4 text-[#ea580c]" />
              <span>PROJECTS ({filteredProjects.length})</span>
            </span>
            <span className="text-[10px] text-zinc-500">SELECT_SYSTEM</span>
          </div>

          {/* Scrollable Project Cards */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar">
            {filteredProjects.map((proj) => {
              const isSelected = activeProject.id === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelectProject(proj)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#18181b] border-[#ea580c] shadow-lg shadow-orange-500/10"
                      : "bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-100 truncate">
                      {proj.title}
                    </span>
                    {isSelected && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#ea580c]/10 text-[#ea580c] border border-[#ea580c]/30">
                        ACTIVE_NODE
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-zinc-400 font-sans mt-1 line-clamp-1">
                    {proj.tagline}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>{proj.category}</span>
                    <span className="text-emerald-400">{proj.metrics.throughput || proj.metrics.latency}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PANEL 2: CENTER REACT FLOW CANVAS VIEWER (lg:col-span-6) */}
        <div className="lg:col-span-6 rounded-xl border border-zinc-800 bg-cad-grid relative h-[560px] shadow-2xl overflow-hidden flex flex-col">
          {/* Canvas Top Bar */}
          <div className="bg-[#121215]/90 backdrop-blur-sm border-b border-zinc-800 px-4 py-2.5 flex items-center justify-between font-mono text-xs z-10">
            <div className="flex items-center space-x-2 text-zinc-300">
              <Activity className="w-4 h-4 text-[#ea580c]" />
              <span className="font-bold">{activeProject.title}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 text-[11px]">CANVAS_VIEWER</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeProject.architectureNodes.length} PIPELINE NODES</span>
            </div>
          </div>

          {/* React Flow Container */}
          <div className="flex-1 w-full h-full relative">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              nodeTypes={nodeTypes}
              onInit={onInit}
              fitView
              colorMode="dark"
              className="bg-[#09090b]"
            >
              <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#27272a" />
              <Controls className="!bg-[#121215] !border-zinc-800 !text-zinc-300 fill-zinc-300" />
            </ReactFlow>
          </div>
        </div>

        {/* PANEL 3: RIGHT SPECIFICATION & METRICS INSPECTOR (lg:col-span-3) */}
        <div className="lg:col-span-3 rounded-xl border border-zinc-800 bg-[#121215] p-5 flex flex-col justify-between h-[560px] shadow-xl overflow-y-auto space-y-4 font-mono text-xs">
          {/* Inspector Header */}
          <div className="border-b border-zinc-800 pb-3 space-y-1">
            <div className="flex items-center justify-between text-zinc-500 text-[10px] uppercase">
              <span>SYSTEM_INSPECTOR</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold text-zinc-100">{activeProject.title}</h3>
            <div className="text-[11px] text-[#ea580c] font-semibold">{activeProject.role}</div>
          </div>

          {/* Architecture Paradigm */}
          <div className="space-y-1 bg-zinc-950 p-3 rounded border border-zinc-800/80">
            <div className="text-[10px] text-zinc-500 uppercase">Architecture Paradigm</div>
            <div className="text-zinc-200 font-semibold text-[11px]">{activeProject.category}</div>
          </div>

          {/* Metrics Badges */}
          <div className="space-y-2">
            <div className="text-[10px] text-zinc-500 uppercase">Performance Metrics</div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 text-[9px] block">THROUGHPUT</span>
                <span className="text-orange-400 font-bold">{activeProject.metrics.throughput || "N/A"}</span>
              </div>
              <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                <span className="text-zinc-500 text-[9px] block">LATENCY</span>
                <span className="text-emerald-400 font-bold">{activeProject.metrics.latency || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <div className="text-[10px] text-zinc-500 uppercase">Engine Stack</div>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-2 font-sans text-xs">
            <div className="font-mono text-[10px] text-zinc-500 uppercase">Key Highlights</div>
            <ul className="space-y-1 text-zinc-300 text-[11px] leading-snug">
              {activeProject.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#ea580c] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>

      </div>
    </section>
  );
};

export default Architectures;
