"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";

// Dynamically import all interactive client modules with { ssr: false } for zero hydration mismatch
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
  loading: () => <div className="min-h-[500px] bg-[#050505]" />,
});

const AboutManifesto = dynamic(() => import("@/components/sections/AboutManifesto"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-[#050505]" />,
});

const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), {
  ssr: false,
  loading: () => <div className="min-h-[500px] bg-[#050505]" />,
});

const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-[#050505]" />,
});



const GithubLabSection = dynamic(() => import("@/components/sections/GithubLabSection"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-[#050505]" />,
});

const BookACallCard = dynamic(() => import("@/components/sections/BookACallCard"), {
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-[#050505]" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-[#050505]" />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 bg-cad-grid relative overflow-x-hidden selection:bg-orange-500/20 selection:text-orange-400">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Workspace Container - Sticky-Friendly Root (No overflow-x-hidden) */}
      <main className="w-full min-h-screen bg-black text-white relative pt-16 sm:pt-20 space-y-12 md:space-y-20 overflow-x-hidden">

        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT MANIFESTO */}
        <AboutManifesto />

        {/* SECTION 01: STICKY STACKED CARDS PROJECTS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsSection />
        </div>

        {/* NARRATIVE CONNECTOR DIVIDER */}
        <div className="w-full flex items-center justify-center gap-4 py-8 text-zinc-700 font-mono text-xs uppercase tracking-widest select-none">
          <div className="h-[1px] w-20 md:w-32 bg-zinc-800/80" />
          <span>END OF SHOWCASE // NEXT: CORE CAPABILITIES</span>
          <div className="h-[1px] w-20 md:w-32 bg-zinc-800/80" />
        </div>

        {/* SECTION 02: 3D DECK TECH STACK & CAPABILITIES (Full-Bleed Sticky Track) */}
        <TechStackSection />

        {/* SECTION 04: GITHUB LAB & EXPLODING SOCIAL SHOWCASE */}
        <GithubLabSection />

        {/* PRE-FOOTER BOOK A CALL CARD */}
        <BookACallCard />

      </main>

      {/* EDITORIAL FOOTER (Full Width) */}
      <Footer />

    </div>
  );
}
