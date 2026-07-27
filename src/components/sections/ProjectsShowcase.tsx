"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { ChevronLeft, ChevronRight, CheckCircle2, Activity, Play, Image as ImageIcon, Cpu, Film } from "lucide-react";

const nodeTypes = {
  customTech: CustomTechNode,
};

const generateGraphData = (nodesData: ArchitectureNode[]) => {
  const nodes: Node[] = nodesData.map((node, index) => {
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

export const ProjectsShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"diagram" | "video" | "screenshots">("diagram");
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
  const [showcaseVideoError, setShowcaseVideoError] = useState<boolean>(false);

  const activeProject: Project = PROJECTS[currentIndex];

  const graphData = useMemo(() => generateGraphData(activeProject.architectureNodes), [activeProject]);

  const [nodes, setNodes, onNodesChange] = useNodesState(graphData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphData.edges);

  const handleSelectIndex = (idx: number) => {
    setCurrentIndex(idx);
    setShowcaseVideoError(false);
    const newProj = PROJECTS[idx];
    const { nodes: newNodes, edges: newEdges } = generateGraphData(newProj.architectureNodes);
    setNodes(newNodes);
    setEdges(newEdges);

    if (reactFlowInstance) {
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2, duration: 400 });
      }, 50);
    }
  };

  const handlePrev = () => {
    const newIdx = currentIndex === 0 ? PROJECTS.length - 1 : currentIndex - 1;
    handleSelectIndex(newIdx);
  };

  const handleNext = () => {
    const newIdx = currentIndex === PROJECTS.length - 1 ? 0 : currentIndex + 1;
    handleSelectIndex(newIdx);
  };

  const onInit = useCallback((instance: ReactFlowInstance) => {
    setReactFlowInstance(instance);
    instance.fitView({ padding: 0.2 });
  }, []);

  return (
    <section id="architectures" className="space-y-12 pt-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
              SECTION // <span className="text-[#ea580c] font-bold">01 - PRODUCTION_SYSTEMS</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-zinc-100 tracking-tight">
            Featured Systems &amp; <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">Architectures</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl font-light">
            Explora la arquitectura distribuida, flujo de nodos y demostración multimedia de mis {PROJECTS.length} sistemas de producción.
          </p>
        </div>

        {/* Giant Numeric Index */}
        <div className="font-mono text-right">
          <span className="text-3xl sm:text-5xl font-extrabold font-serif italic text-orange-400">
            0{currentIndex + 1}
          </span>
          <span className="text-zinc-600 text-xl font-sans"> / </span>
          <span className="text-zinc-500 text-lg font-mono">0{PROJECTS.length}</span>
        </div>
      </div>

      {/* ANIMATED CAROUSEL CONTAINER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* LEFT COLUMN: UNBOXED EDITORIAL SYSTEM SPECS (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Category & Status Line */}
            <div className="flex items-center space-x-4 font-mono text-xs">
              <span className="text-orange-400 font-bold uppercase tracking-wider">
                // {activeProject.category}
              </span>
              <span className="text-zinc-700">•</span>
              <span className="text-emerald-400 flex items-center space-x-1.5 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeProject.metrics.uptime || "99.99% SLA"}</span>
              </span>
            </div>

            {/* Project Title & Tagline */}
            <div className="space-y-3">
              <h3 className="text-4xl sm:text-6xl font-bold font-serif italic text-zinc-100 leading-tight">
                {activeProject.title}
              </h3>
              <div className="text-xs font-mono text-zinc-400 font-medium">
                ROLE: <span className="text-zinc-200">{activeProject.role}</span>
              </div>
              <p className="text-base text-zinc-400 font-sans font-light leading-relaxed pt-1">
                {activeProject.description}
              </p>
            </div>

            {/* Open Unboxed Metrics Columns */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 font-mono text-xs">
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase block">THROUGHPUT</span>
                <span className="text-orange-400 font-bold text-base mt-1 block">{activeProject.metrics.throughput || "N/A"}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase block">LATENCY</span>
                <span className="text-emerald-400 font-bold text-base mt-1 block">{activeProject.metrics.latency || "N/A"}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase block">NODES</span>
                <span className="text-zinc-200 font-bold text-base mt-1 block">{activeProject.architectureNodes.length} Pipeline</span>
              </div>
            </div>

            {/* Clean Typographic Engineering Stack */}
            <div className="space-y-2 border-t border-white/10 pt-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase block">ENGINEERING STACK</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-zinc-300">
                {activeProject.techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="hover:text-orange-400 transition-colors">{tech}</span>
                    {idx < activeProject.techStack.length - 1 && <span className="text-zinc-700">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key Techniques & Highlights */}
            <div className="space-y-3 border-t border-white/10 pt-4 font-sans text-xs">
              <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase block">KEY TECHNIQUES &amp; HIGHLIGHTS</span>
              <ul className="space-y-2 text-zinc-300 font-light leading-relaxed">
                {activeProject.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE MEDIA HUB (lg:col-span-6) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#09090b] relative h-[540px] shadow-2xl overflow-hidden flex flex-col">
            
            {/* Media Hub Tab Header */}
            <div className="bg-[#121215] border-b border-white/10 px-4 py-2.5 flex items-center justify-between font-mono text-xs z-10">
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => setViewMode("diagram")}
                  className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                    viewMode === "diagram"
                      ? "bg-zinc-800 text-orange-400 font-bold border border-orange-500/40"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>[ Diagram ]</span>
                </button>

                <button
                  onClick={() => setViewMode("video")}
                  className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                    viewMode === "video"
                      ? "bg-zinc-800 text-orange-400 font-bold border border-orange-500/40"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>[ System Video ]</span>
                </button>

                <button
                  onClick={() => setViewMode("screenshots")}
                  className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                    viewMode === "screenshots"
                      ? "bg-zinc-800 text-orange-400 font-bold border border-orange-500/40"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>[ UI Screenshots ]</span>
                </button>
              </div>

              <span className="text-[10px] text-zinc-500 hidden sm:inline">MEDIA_HUB_V2</span>
            </div>

            {/* Tab Viewport */}
            <div className="flex-1 w-full h-full relative bg-[#050505] overflow-hidden">
              {viewMode === "diagram" && (
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  nodeTypes={nodeTypes}
                  onInit={onInit}
                  fitView
                  colorMode="dark"
                  className="bg-[#050505]"
                >
                  <Background variant={BackgroundVariant.Dots} gap={28} size={1} color="#27272a" />
                  <Controls className="!bg-[#121215] !border-zinc-800 !text-zinc-300 fill-zinc-300" />
                </ReactFlow>
              )}

              {viewMode === "video" && (
                <div className="w-full h-full flex items-center justify-center p-4 bg-zinc-950">
                  {activeProject.demoVideoUrl && !showcaseVideoError ? (
                    <video
                      src={activeProject.demoVideoUrl}
                      controls
                      autoPlay
                      loop
                      muted
                      onError={() => setShowcaseVideoError(true)}
                      className="w-full max-h-full rounded border border-white/10 shadow-xl object-contain"
                    />
                  ) : (
                    <div className="text-center font-mono text-xs text-zinc-500 space-y-2">
                      <Film className="w-8 h-8 mx-auto text-orange-500" />
                      <div>VIDEO DEMO PREVIEW (OFFLINE)</div>
                      <div className="text-[10px] text-zinc-600">High-definition telemetry stream simulation</div>
                    </div>
                  )}
                </div>
              )}

              {viewMode === "screenshots" && (
                <div className="w-full h-full p-4 overflow-y-auto custom-scrollbar bg-zinc-950 space-y-4">
                  {activeProject.screenshots && activeProject.screenshots.length > 0 ? (
                    activeProject.screenshots.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${activeProject.title} screenshot ${idx + 1}`}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/projects/smartfleet.jpg"; }}
                        className="w-full rounded border border-white/10 shadow-lg object-cover"
                      />
                    ))
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-zinc-500 space-y-2 py-12">
                      <ImageIcon className="w-8 h-8 text-orange-500" />
                      <div>UI SCREENSHOT GALLERY</div>
                      <div className="text-[10px] text-zinc-600">High-resolution architecture interface previews</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Thumbnails System Selector */}
            <div className="p-3 bg-[#121215] border-t border-white/10 flex items-center space-x-2 overflow-x-auto custom-scrollbar">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => handleSelectIndex(idx)}
                  className={`px-3 py-1.5 rounded font-mono text-[11px] whitespace-nowrap transition-all border ${
                    idx === currentIndex
                      ? "bg-zinc-800 border-orange-500 text-orange-400 font-bold"
                      : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  0{idx + 1}. {proj.title}
                </button>
              ))}
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* CAROUSEL NAVIGATION CONTROLS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs">
        <div className="flex items-center space-x-2">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-orange-500 w-6" : "bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to system ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-zinc-100 flex items-center space-x-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-orange-500" />
            <span>&lt; PREVIOUS SYSTEM</span>
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-zinc-100 flex items-center space-x-1.5 transition-colors"
          >
            <span>NEXT SYSTEM &gt;</span>
            <ChevronRight className="w-4 h-4 text-orange-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
