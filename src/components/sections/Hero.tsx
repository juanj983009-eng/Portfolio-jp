"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Calendar, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [avatarError, setAvatarError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax Y displacement for background marquee text (factor ~0.3)
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 240]);

  // Raw Motion Values for normalized relative mouse position (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Raw target 2D translation and 3D rotations (Natural 3D Tilt: mouse right -> rotateY +, mouse down -> rotateX -)
  const rawX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const rawY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  const rawRotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rawRotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  // 1. FRONT CARD — Fast, direct spring physics
  const frontX = useSpring(rawX, { stiffness: 180, damping: 20, mass: 0.6 });
  const frontY = useSpring(rawY, { stiffness: 180, damping: 20, mass: 0.6 });
  const frontRotateX = useSpring(rawRotateX, { stiffness: 180, damping: 20, mass: 0.6 });
  const frontRotateY = useSpring(rawRotateY, { stiffness: 180, damping: 20, mass: 0.6 });

  // 2. MIDDLE LAYER (Shadow 1) — Intermediate spring physics with subtle lag
  const midX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.8 });
  const midY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.8 });
  const midRotateX = useSpring(rawRotateX, { stiffness: 120, damping: 22, mass: 0.8 });
  const midRotateY = useSpring(rawRotateY, { stiffness: 120, damping: 22, mass: 0.8 });

  // 3. REAR LAYER (Shadow 2) — Soft, lagging spring physics
  const rearX = useSpring(rawX, { stiffness: 80, damping: 25, mass: 1.0 });
  const rearY = useSpring(rawY, { stiffness: 80, damping: 25, mass: 1.0 });
  const rearRotateX = useSpring(rawRotateX, { stiffness: 80, damping: 25, mass: 1.0 });
  const rearRotateY = useSpring(rawRotateY, { stiffness: 80, damping: 25, mass: 1.0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* ── LAYER 0 (Background z-0): INFINITE MARQUEE POSITIONED AT TOP-42% ── */}
      <div className="absolute top-[42%] -translate-y-1/2 left-0 right-0 w-full overflow-hidden z-0 pointer-events-none select-none">
        <div className="flex w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-8 whitespace-nowrap items-center"
          >
            <span className="text-[13vw] font-black tracking-tighter text-zinc-800/80 uppercase select-none">
              JUAN PARRA — LEAD SOFTWARE ARCHITECT — PORTFOLIO —
            </span>
            <span className="text-[13vw] font-black tracking-tighter text-zinc-800/80 uppercase select-none">
              JUAN PARRA — LEAD SOFTWARE ARCHITECT — PORTFOLIO —
            </span>
          </motion.div>
        </div>
      </div>

      {/* AMBIENT LIGHTING GLOWS */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4">
        
        {/* Top Status Tag — Brutalist Industrial Editorial */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-400 mb-8 select-none"
        >
          <span className="flex items-center gap-2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-200">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
            <span className="font-bold">{t.hero.badge}</span>
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400">LIMA, PE (UTC-5)</span>
        </motion.div>

        {/* ── 3D PERSPECTIVE CANVAS (perspective: 1200px) ── */}
        <div className="relative flex items-center justify-center [perspective:1200px] my-4 z-10">

          {/* ── STACK LAYER 2 (Deepest Rear Layer, -z-20, soft lagging spring) ── */}
          <motion.div
            style={{
              x: rearX,
              y: rearY,
              rotateX: rearRotateX,
              rotateY: rearRotateY,
              rotateZ: -6,
              transformStyle: "preserve-3d",
            }}
            className="absolute w-[290px] sm:w-[350px] aspect-[3/4] rounded-3xl border border-zinc-800/50 bg-zinc-950/60 shadow-2xl pointer-events-none -z-20 style-gpu -translate-x-3 translate-y-1.5 backdrop-blur-sm"
          />

          {/* ── STACK LAYER 1 (Middle Rear Layer, -z-10, intermediate spring) ── */}
          <motion.div
            style={{
              x: midX,
              y: midY,
              rotateX: midRotateX,
              rotateY: midRotateY,
              rotateZ: -3,
              transformStyle: "preserve-3d",
            }}
            className="absolute w-[290px] sm:w-[350px] aspect-[3/4] rounded-3xl border border-zinc-800/80 bg-zinc-900/80 shadow-xl pointer-events-none -z-10 style-gpu -translate-x-1.5 translate-y-0.5 backdrop-blur-md"
          />

          {/* ── MAIN FRONT PROFILE CARD (Layer z-10, fast direct spring, 3D tilt) ── */}
          <motion.div
            style={{
              x: frontX,
              y: frontY,
              rotateX: frontRotateX,
              rotateY: frontRotateY,
              rotateZ: 0,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
            className="relative w-[290px] sm:w-[350px] aspect-[3/4] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[-15px_15px_30px_rgba(0,0,0,0.8),-5px_5px_0px_rgba(255,255,255,0.05)] cursor-pointer backdrop-blur-md group style-gpu [transform-style:preserve-3d]"
          >
            {/* FULL-BLEED PORTRAIT PHOTO (100% COVER) */}
            {!avatarError ? (
              <Image
                src="/profile/avatar.jpg"
                alt="Juan Parra"
                fill
                priority
                sizes="(max-width: 768px) 290px, 350px"
                onError={() => setAvatarError(true)}
                className="object-cover object-center absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out z-0"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-zinc-900 z-0">
                <Code2 className="w-16 h-16 text-orange-500 mb-2" />
                <span className="font-mono text-xs text-zinc-400 uppercase">JUAN PARRA</span>
              </div>
            )}

            {/* SUBTLE INFERIOR GRADIENT OVERLAY FOR CONTRAST */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none z-10" />

            {/* HIGH-CONTRAST OVERLAY TYPOGRAPHY (Layer z-20, translateZ: 20px pop) */}
            <div className="relative z-20 flex flex-col justify-end h-full p-6 text-left space-y-1 select-none [transform-style:preserve-3d] [transform:translateZ(20px)]">
              <span className="font-mono text-[10px] text-[#FF4D00] uppercase tracking-widest font-bold block">
                // LEAD SOFTWARE ARCHITECT
              </span>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight uppercase leading-none drop-shadow-md">
                JUAN PARRA
              </h2>
              <p className="font-mono text-xs text-zinc-300 tracking-wider uppercase font-medium">
                DATA SYSTEMS &amp; IOT TELEMETRY
              </p>
            </div>
          </motion.div>
        </div>

        {/* LAYER 20 (Texto Editorial Inferior) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 text-center mt-8 z-20"
        >
          <h2 className="font-sans font-bold tracking-tight uppercase text-lg sm:text-xl text-center mt-6">
            <span className="text-white">{t.hero.heroTitle.main}</span>
            <span className="text-[#FF4D00]">{t.hero.heroTitle.highlight}</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto uppercase tracking-wider leading-relaxed">
            {t.hero.description}
          </p>

          {/* Action CTAs (Brutalist Industrial Buttons) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/projects"
              className="px-6 py-3.5 bg-[#FF4D00] hover:bg-[#e04400] text-black font-mono font-bold text-xs md:text-sm uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF4D00]/10 cursor-pointer w-full sm:w-auto"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
            </Link>

            <a
              href="/resume.pdf"
              download="Juan_Parra_Lead_Architect_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-zinc-950/80 border border-zinc-700/80 hover:border-[#FF4D00] text-zinc-300 hover:text-white font-mono text-xs md:text-sm font-bold tracking-wider uppercase rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,77,0,0.15)] backdrop-blur-md cursor-pointer w-full sm:w-auto"
            >
              <span className="text-[#FF4D00] group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
              <span>DOWNLOAD CV</span>
              <span className="text-[10px] text-zinc-500 font-normal group-hover:text-zinc-400">[PDF]</span>
            </a>

            <Link
              href="/contact"
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 font-mono font-bold text-xs md:text-sm uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 text-zinc-400" />
              <span>{t.hero.ctaContact}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;


