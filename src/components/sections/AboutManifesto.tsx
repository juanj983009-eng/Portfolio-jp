"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface WordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1.0]);
  const color = useTransform(progress, range, ["#3f3f46", "#ffffff"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline transition-colors style-gpu"
    >
      {children}{" "}
    </motion.span>
  );
};

export default function AboutManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.2"],
  });

  const text =
    "I AM A SENIOR FULLSTACK ARCHITECT & DATA ENGINEER SPECIALIZING IN HIGH-THROUGHPUT DISTRIBUTED SYSTEMS, REAL-TIME TELEMETRY, AND SCALABLE EVENT-DRIVEN PIPELINES.";
  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full py-24 px-6 md:px-12 border-y border-zinc-800/60 bg-zinc-950/40 my-16 select-none"
    >
      {/* Industrial Corner Marks */}
      <span className="absolute top-0 left-4 -translate-y-1/2 font-mono text-xs text-zinc-600 select-none">+</span>
      <span className="absolute top-0 right-4 -translate-y-1/2 font-mono text-xs text-zinc-600 select-none">+</span>
      <span className="absolute bottom-0 left-4 translate-y-1/2 font-mono text-xs text-zinc-600 select-none">+</span>
      <span className="absolute bottom-0 right-4 translate-y-1/2 font-mono text-xs text-zinc-600 select-none">+</span>

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Minimalist Discrete Overline */}
        <div className="flex items-center justify-center gap-2 mb-8 font-mono text-xs text-zinc-500 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full" />
          <span>// EXECUTIVE SUMMARY &amp; CORE ARCHITECTURE</span>
        </div>

        {/* Main Manifesto Word Reveal Statement */}
        <h2 className="font-sans font-black text-2xl md:text-4xl lg:text-5xl leading-snug tracking-tight uppercase text-center max-w-5xl mx-auto mb-12">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const isHighlight = word.includes("FULLSTACK") || word.includes("ARCHITECT");

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {isHighlight ? (
                  <span className="text-[#FF4D00]">{word}</span>
                ) : (
                  word
                )}
              </Word>
            );
          })}
        </h2>

        {/* Key Technical Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-zinc-800/80 mb-10">
          <div className="text-center">
            <p className="font-mono text-2xl font-black text-white">99.99%</p>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mt-1">Uptime SLA Guaranteed</p>
          </div>
          <div className="text-center md:border-x md:border-zinc-800/80">
            <p className="font-mono text-2xl font-black text-white">50K+ msg/s</p>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mt-1">Telemetry Throughput</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-2xl font-black text-white">Distributed</p>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider mt-1">Multi-Cloud Architectures</p>
          </div>
        </div>

        {/* CTA Action linking to /about */}
        <div className="flex justify-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#e04400] text-black font-sans font-black text-xs uppercase tracking-wider shadow-lg shadow-[#FF4D00]/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            MORE ABOUT ME
          </Link>
        </div>

      </div>
    </section>
  );
}
