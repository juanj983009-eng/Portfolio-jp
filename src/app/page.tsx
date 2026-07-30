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
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const restoreScrollPosition = () => {
      const hash = window.location.hash.replace("#", "");
      const searchParams = new URLSearchParams(window.location.search);
      const sectionParam = searchParams.get("section");
      const projectParam = searchParams.get("project");
      const targetId = hash || sectionParam || (projectParam ? "projects" : null);

      if (targetId) {
        let attempts = 0;
        const interval = setInterval(() => {
          attempts += 1;
          const element = document.getElementById(targetId);
          if (element) {
            clearInterval(interval);
            element.scrollIntoView({ behavior: "smooth" });
          } else if (attempts > 35) {
            clearInterval(interval);
          }
        }, 80);
      }
    };

    restoreScrollPosition();
  }, []);
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 bg-cad-grid relative [overflow-clip-margin:0px] overflow-clip selection:bg-orange-500/20 selection:text-orange-400">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content — NO overflow-x-hidden here: would break position:sticky on TechStack & Github decks */}
      <main className="w-full min-h-screen bg-black text-white relative pt-16 sm:pt-20 space-y-12 md:space-y-20">

        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT MANIFESTO */}
        <AboutManifesto />

        {/* SECTION 01: STICKY STACKED CARDS PROJECTS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsSection />
        </div>

        {/* NARRATIVE CONNECTOR DIVIDER */}
        <div className="w-full flex items-center justify-center gap-4 py-6 md:py-8 mt-4 md:mt-0 text-zinc-700 font-mono text-xs uppercase tracking-widest select-none">
          <div className="h-[1px] w-16 sm:w-20 md:w-32 bg-zinc-800/80" />
          <span className="text-[10px] sm:text-xs text-center">END OF SHOWCASE // NEXT: CORE CAPABILITIES</span>
          <div className="h-[1px] w-16 sm:w-20 md:w-32 bg-zinc-800/80" />
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
