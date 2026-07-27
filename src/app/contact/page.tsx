"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Mail, Calendar, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import BookACallCard from "@/components/sections/BookACallCard";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/20 selection:text-orange-400 select-none relative overflow-x-hidden flex flex-col justify-between">
      {/* Fixed Navbar */}
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 py-28 w-full flex flex-col justify-center relative">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF4D00]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
          
          {/* ── LEFT COLUMN: INFO & BOOK A CALL ── */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-tight">
                READY TO TRANSFORM<br />
                <span className="text-[#FF4D00]">YOUR VISION?</span>
              </h1>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed uppercase tracking-wider">
                LET&apos;S DISCUSS YOUR SYSTEM REQUIREMENTS, ARCHITECTURE GOALS, OR SCALABLE DISTRIBUTED PIPELINES.
              </p>
            </div>

            {/* Direct Email Display & Active Status */}
            <div className="py-6 border-y border-zinc-800/80 space-y-3">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                DIRECT INQUIRIES
              </span>
              <a
                href="mailto:contact@juanparra.dev"
                className="font-mono text-2xl md:text-3xl font-bold text-white hover:text-[#FF4D00] transition-colors block"
              >
                contact@juanparra.dev
              </a>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
                <span>RESPONSE TIME: &lt; 24HRS (UTC-5)</span>
              </div>
            </div>

            {/* Compact SCHEDULE CALL Industrial Card */}
            <div className="p-6 md:p-8 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4 relative overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-[#FF4D00]" />
                <span className="font-mono font-bold text-xs text-white uppercase tracking-widest">
                  SCHEDULE CALL
                </span>
              </div>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed uppercase tracking-wider">
                Prefer a direct conversation? Book a 30-minute technical roadmap consultation call.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#FF4D00] hover:bg-[#e04400] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF4D00]/10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>BOOK A CALL</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: INDUSTRIAL TERMINAL FORM ── */}
          <div className="lg:col-span-7 pt-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-20 border border-zinc-800 bg-zinc-950/80 rounded-2xl p-8">
                <CheckCircle2 className="w-16 h-16 text-[#FF4D00]" />
                <h3 className="text-3xl font-black uppercase text-white font-sans tracking-tight">
                  INQUIRY TRANSMITTED
                </h3>
                <p className="font-mono text-xs text-zinc-400 max-w-sm uppercase tracking-wider leading-relaxed">
                  THANK YOU FOR REACHING OUT. YOUR TRANSMISSION HAS BEEN ROUTED TO MY WORKSPACE.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono font-bold text-xs text-[#FF4D00] uppercase tracking-widest hover:underline pt-4 cursor-pointer"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="font-mono font-bold text-xl text-white uppercase tracking-tight">
                    TRANSMIT SPECIFICATIONS
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                      NAME
                    </label>
                    <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                      EMAIL ADDRESS
                    </label>
                    <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                    PROJECT SUBJECT
                  </label>
                  <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Distributed Telemetry Architecture"
                      className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                    MESSAGE &amp; SPECIFICATIONS
                  </label>
                  <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your system requirements, timeline, or architecture goals..."
                      className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-lg bg-[#FF4D00] hover:bg-[#e04400] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF4D00]/10 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                >
                  <Send className="w-4 h-4 stroke-[3]" />
                  <span>TRANSMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      {/* Global Brutalist Footer */}
      <Footer />

      {/* Book a Call Modal Portal — reuses the BookACallCard modal */}
      {isBookModalOpen && (
        <BookACallCard />
      )}
    </div>
  );
}
