"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import BookACallCard from "@/components/sections/BookACallCard";
import Footer from "@/components/sections/Footer";
import TechAccordionSection from "@/components/sections/TechAccordionSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutProfileCard: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-full min-h-[440px] aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col justify-between p-8 shadow-2xl group">
      {/* 1. Full-Bleed Background Portrait */}
      {!avatarError ? (
        <Image
          src="/profile/avatar.jpg"
          alt="Juan Parra"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={() => setAvatarError(true)}
          className="object-cover object-center absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out z-0"
        />
      ) : null}

      {/* 2. Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none z-10" />

      {/* 3. Top Tag Badge */}
      <div className="flex items-center justify-between relative z-20">
        <span className="font-mono text-xs font-bold text-[#FF4D00] uppercase tracking-widest bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
          // SYS_PROFILE 2026
        </span>
      </div>

      {/* 4. Bottom Typography */}
      <div className="mt-auto space-y-2 relative z-20 text-left">
        <p className="font-mono text-xs text-[#FF4D00] font-bold uppercase tracking-widest">
          SOFTWARE & DATA PROFILE
        </p>
        <h3 className="text-white font-bold text-3xl md:text-4xl uppercase tracking-tight font-sans drop-shadow-md">
          JUAN PARRA
        </h3>
        <p className="font-mono text-xs text-zinc-300 font-medium uppercase tracking-wider leading-relaxed">
          {t.hero.heroRole}
        </p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/20 selection:text-orange-400 select-none relative overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar />

      <main className="w-full relative pt-28 md:pt-36 space-y-20">
        {/* ── 1. BIOGRAPHY & PORTRAIT GRID ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Manifesto Bio Statement */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] font-bold">
                  {t.about.biographyTag}
                </span>
                <span className="h-px w-12 bg-zinc-800" />
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  JUAN PARRA
                </span>
              </div>

              <p className="text-xl md:text-3xl font-sans tracking-tight text-zinc-200 leading-relaxed font-light">
                {t.about.biographyLead}
              </p>

              <p className="text-sm font-sans font-medium text-zinc-400 leading-relaxed">
                {t.about.biographyBody}
              </p>
            </div>

            {/* Industrial Terminal Metric Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 uppercase tracking-wider rounded-md">
                <span className="text-[#FF4D00] font-bold">2+</span>
                <span>{t.about.yearsExp}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 uppercase tracking-wider rounded-md">
                <span className="text-[#FF4D00] font-bold">09</span>
                <span>{t.about.prodSystems}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Profile Card */}
          <AboutProfileCard />
        </section>

        {/* ── 3. TOOLS & TECH MATRIX (Marquee Hover Reveal Accordion) ── */}
        <TechAccordionSection />

        {/* ── 4. EXPERIENCE TIMELINE ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Sticky Title & Record Overview */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-36 space-y-4">
              <span className="font-mono text-xs text-[#FF4D00] uppercase font-bold tracking-widest block">
                // EXPERIENCE &amp; TRACK RECORD
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white font-sans tracking-tight leading-none">
                <span>{t.about.careerTitle.main}</span>
                <span className="text-[#FF4D00]">
                  {t.about.careerTitle.highlight}
                </span>
              </h2>
              <p className="font-mono text-xs text-zinc-400 max-w-xs uppercase tracking-wider leading-relaxed pt-2">
                {t.about.careerDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Industrial Connected Timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-8 md:pl-10 border-l border-zinc-800 space-y-12">
              {t.about.architectureMilestones.map((milestone, index) => (
                <div key={milestone.badge} className="relative group">
                  {/* Node Marker */}
                  <div
                    className={
                      index === 0
                        ? "absolute -left-[37px] md:-left-[45px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-[#FF4D00] group-hover:scale-125 transition-transform duration-200"
                        : "absolute -left-[37px] md:-left-[45px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-[#FF4D00] group-hover:scale-125 transition-all duration-200"
                    }
                  />

                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span
                      className={
                        index === 0
                          ? "font-mono text-xs text-[#FF4D00] uppercase font-bold tracking-widest"
                          : "font-mono text-xs text-zinc-400 uppercase font-bold tracking-widest"
                      }
                    >
                      {milestone.role}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md uppercase tracking-wider self-start sm:self-auto">
                      {milestone.badge}
                    </span>
                  </div>

                  <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-3 font-sans">
                    {milestone.title}
                  </h3>

                  <p className="text-zinc-300 font-sans font-normal text-sm md:text-base leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {milestone.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CERTIFICATIONS 3D COVER FLOW CAROUSEL ── */}
        <CertificationsSection />

        {/* ── 6. BOOK A CALL CTA CARD ── */}
        <BookACallCard />

        {/* ── 7. BRUTALIST FOOTER ── */}
        <Footer />
      </main>
    </div>
  );
}
