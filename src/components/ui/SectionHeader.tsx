"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
  number: string;
  category: string;
  title: string | { main: string; highlight: string };
  highlightTitle?: string;
  subtitle?: string;
  count?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  title,
  highlightTitle,
  subtitle,
  count,
  className = "",
}) => {
  const mainTitleText = typeof title === "string" ? title : title.main;
  const highlightText = typeof title === "string" ? highlightTitle : title.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full text-left mb-12 md:mb-16 select-none ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-4xl">
          {/* Overline Badge (0X // CATEGORY) */}
          <div className="font-mono text-xs md:text-sm font-bold text-[#FF4D00] uppercase tracking-widest block mb-2">
            {number} // {category}
          </div>

          {/* Main Title (Pure White Brutalist Block with optional #FF4D00 highlight) */}
          <h2 className="text-white font-black text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-none font-sans">
            <span>{mainTitleText}</span>{" "}
            {highlightText && <span className="text-[#FF4D00]">{highlightText}</span>}
          </h2>

          {/* Subtitle Description */}
          {subtitle && (
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mt-3">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right-aligned Count or Action Hint */}
        {count && (
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest shrink-0 hidden md:block pb-1">
            {count}
          </span>
        )}
      </div>

      {/* Full-width Divider Line */}
      <div className="w-full border-b border-zinc-800/80 mt-6" />
    </motion.div>
  );
};

export default SectionHeader;
