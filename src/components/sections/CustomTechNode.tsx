"use client";

import React, { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import {
  Cpu, Database, Server, Radio, Shield,
  HardDrive, Globe, Network, Layers,
} from "lucide-react";

export interface CustomNodeData extends Record<string, unknown> {
  label: string;
  type: "frontend" | "backend" | "database" | "queue" | "cache" | "gateway" | "iot" | "microservice" | "storage";
  tech: string;
  status?: "active" | "standby" | "syncing" | "healthy";
  description?: string;
}

const getNodeIcon = (type: CustomNodeData["type"]) => {
  const cls = "w-4 h-4";
  switch (type) {
    case "iot":         return <Radio       className={`${cls} text-orange-400`} />;
    case "gateway":     return <Shield      className={`${cls} text-amber-400`} />;
    case "queue":       return <Network     className={`${cls} text-orange-400`} />;
    case "microservice":
    case "backend":     return <Server      className={`${cls} text-zinc-200`} />;
    case "cache":
    case "database":    return <Database    className={`${cls} text-emerald-400`} />;
    case "storage":     return <HardDrive   className={`${cls} text-emerald-400`} />;
    case "frontend":    return <Globe       className={`${cls} text-sky-400`} />;
    default:            return <Cpu         className={`${cls} text-zinc-400`} />;
  }
};

const STATUS_COLOR: Record<string, string> = {
  active:  "text-emerald-400 bg-emerald-500",
  healthy: "text-emerald-400 bg-emerald-500",
  syncing: "text-amber-400   bg-amber-500",
  standby: "text-zinc-400    bg-zinc-500",
};

const TYPE_BADGE: Record<string, string> = {
  iot:         "text-orange-400 border-orange-500/40",
  gateway:     "text-amber-400  border-amber-500/40",
  queue:       "text-orange-400 border-orange-500/40",
  backend:     "text-zinc-300   border-zinc-700",
  microservice:"text-zinc-300   border-zinc-700",
  database:    "text-emerald-400 border-emerald-500/40",
  cache:       "text-emerald-400 border-emerald-500/40",
  storage:     "text-emerald-400 border-emerald-500/40",
  frontend:    "text-sky-400    border-sky-500/40",
};

export const CustomTechNode = memo(({ data, selected }: NodeProps) => {
  const d = data as unknown as CustomNodeData;
  const statusColors = STATUS_COLOR[d.status ?? "active"].split(" ");
  const textColor    = statusColors[0];
  const dotColor     = statusColors[1];
  const typeBadge    = TYPE_BADGE[d.type] ?? "text-zinc-300 border-zinc-700";

  return (
    <div
      className={`
        relative w-[260px] p-4
        bg-zinc-950/90 backdrop-blur-md
        border rounded-2xl shadow-xl
        transition-all duration-200
        ${selected
          ? "border-orange-500 ring-2 ring-orange-500/25 shadow-orange-500/10"
          : "border-zinc-800 hover:border-amber-500/50"
        }
      `}
    >
      {/* Input handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-[#FF4D00] !border-2 !border-zinc-950"
        style={{ boxShadow: "0 0 6px rgba(255,77,0,0.7)" }}
      />

      {/* Header row: icon + label + type badge */}
      <div className="flex items-center justify-between gap-2 border-b border-zinc-800/70 pb-3 mb-3">
        <div className="flex items-center space-x-2 min-w-0">
          {getNodeIcon(d.type)}
          <span className="font-mono text-xs font-bold text-zinc-100 truncate leading-tight">
            {d.label}
          </span>
        </div>
        <span className={`shrink-0 px-1.5 py-0.5 rounded border text-[9px] font-mono uppercase tracking-wider ${typeBadge}`}>
          {d.type}
        </span>
      </div>

      {/* TECH row */}
      <div className="flex items-center justify-between font-mono text-[10px] mb-1.5">
        <span className="text-zinc-500 tracking-widest uppercase">TECH</span>
        <span className="text-zinc-200 font-semibold text-right max-w-[60%] leading-tight">{d.tech}</span>
      </div>

      {/* STATUS row */}
      {d.status && (
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="text-zinc-500 tracking-widest uppercase">STATUS</span>
          <span className={`flex items-center space-x-1.5 font-medium uppercase ${textColor}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColor}`} />
            <span>{d.status}</span>
          </span>
        </div>
      )}

      {/* Description tooltip row */}
      {d.description && (
        <p className="mt-2.5 pt-2.5 border-t border-zinc-800/60 text-[10px] text-zinc-500 font-mono leading-relaxed line-clamp-2">
          {d.description}
        </p>
      )}

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-emerald-500 !border-2 !border-zinc-950"
        style={{ boxShadow: "0 0 6px rgba(16,185,129,0.7)" }}
      />
    </div>
  );
});

CustomTechNode.displayName = "CustomTechNode";
export default CustomTechNode;
