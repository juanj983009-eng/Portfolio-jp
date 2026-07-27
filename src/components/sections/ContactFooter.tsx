"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Send, Calendar, Github, Linkedin, Mail, Download, ArrowUp, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export const ContactFooter: React.FC = () => {
  // Form input state
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    projectScope: "Lead Role",
    message: "",
  });

  // Submission simulation state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responsePayload, setResponsePayload] = useState<{
    status: number;
    statusText: string;
    timestamp: string;
    body: Record<string, unknown> | null;
  } | null>(null);

  // Live UTC Clock state
  const [utcTime, setUtcTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.senderEmail || !formData.message) return;

    setIsSubmitting(true);
    setResponsePayload(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setResponsePayload({
        status: 202,
        statusText: "Accepted",
        timestamp: new Date().toISOString(),
        body: {
          success: true,
          message: "Transmission received. Priority queue acknowledged.",
          ticket_id: `TCK-${Math.floor(100000 + Math.random() * 900000)}`,
          response_sla: "< 24 Hours",
        },
      });
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="space-y-12 pt-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-6 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2">
            <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-400">
              SECTION // <span className="text-[#ea580c] font-bold">04 - API_CONTACT_INTERFACE</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-zinc-100 tracking-tight">
            Execute Remote Call &amp; <span className="font-serif italic font-normal text-orange-400">Architecture Review</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl">
            Canales directos de contacto para roles de Liderazgo Técnico, Consultoría de Arquitectura y proyectos Fullstack / Data.
          </p>
        </div>

        <div className="flex items-center space-x-3 font-mono text-xs text-zinc-400">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>HTTP_ENDPOINT: ONLINE</span>
          </div>
        </div>
      </div>

      {/* MAIN 2-PANEL BENTO GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* PANEL 1: HTTP API TERMINAL REQUEST FORM (lg:col-span-7) */}
        <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-[#121215] p-5 shadow-2xl space-y-4 flex flex-col justify-between font-mono text-xs">
          
          {/* Terminal Request Bar Header */}
          <div className="bg-zinc-950 p-3 rounded border border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center space-x-2 text-zinc-300">
              <Terminal className="w-4 h-4 text-[#ea580c]" />
              <span className="font-bold text-orange-400">POST</span>
              <span className="text-zinc-400">/api/v1/contact</span>
              <span className="text-zinc-600">HTTP/1.1</span>
            </div>
            <div className="text-[10px] text-zinc-500">Host: architect.dev | JSON Payload</div>
          </div>

          {/* Form JSON Object Structure */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800/80 space-y-3">
              <div className="text-zinc-500 text-[11px] select-none font-semibold">
                &#123; <span className="text-zinc-600">// JSON Payload Request Headers</span>
              </div>

              {/* sender_name */}
              <div className="pl-4 space-y-1">
                <label className="text-zinc-400 font-bold block text-[11px]">
                  &quot;sender_name&quot;:
                </label>
                <input
                  type="text"
                  required
                  value={formData.senderName}
                  onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                  placeholder="&quot;John Doe / Tech Lead&quot;"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-zinc-200 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all font-mono text-xs"
                />
              </div>

              {/* sender_email */}
              <div className="pl-4 space-y-1">
                <label className="text-zinc-400 font-bold block text-[11px]">
                  &quot;sender_email&quot;:
                </label>
                <input
                  type="email"
                  required
                  value={formData.senderEmail}
                  onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  placeholder="&quot;john@company.com&quot;"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-zinc-200 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all font-mono text-xs"
                />
              </div>

              {/* project_scope */}
              <div className="pl-4 space-y-1">
                <label className="text-zinc-400 font-bold block text-[11px]">
                  &quot;project_scope&quot;:
                </label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-orange-400 focus:outline-none focus:border-[#ea580c] transition-all font-mono text-xs"
                >
                  <option value="Lead Role">Lead Role (Senior Fullstack / Architect)</option>
                  <option value="Architecture Consulting">Architecture Consulting &amp; Audit</option>
                  <option value="Data Telemetry System">Data Engineering &amp; Telemetry Pipeline</option>
                  <option value="Fullstack Microservice">Fullstack System &amp; Microservices</option>
                </select>
              </div>

              {/* message */}
              <div className="pl-4 space-y-1">
                <label className="text-zinc-400 font-bold block text-[11px]">
                  &quot;message&quot;:
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="&quot;Brief summary of technical requirements or position...&quot;"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-zinc-200 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]/50 transition-all font-mono text-xs resize-none"
                />
              </div>

              <div className="text-zinc-500 text-[11px] select-none font-semibold">&#125;</div>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-orange-600/20 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>[ EXECUTING REQUEST... ]</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>[ EXECUTE POST REQUEST ]</span>
                </>
              )}
            </button>
          </form>

          {/* Response Payload Drawer */}
          {responsePayload && (
            <div className="mt-4 p-4 rounded bg-zinc-950 border border-emerald-500/40 text-emerald-400 space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between text-[11px] font-bold border-b border-emerald-500/20 pb-2">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>HTTP/1.1 {responsePayload.status} {responsePayload.statusText}</span>
                </span>
                <span className="text-zinc-500 text-[10px]">{responsePayload.timestamp}</span>
              </div>
              <pre className="text-[11px] text-zinc-300 overflow-x-auto p-2 bg-zinc-900/60 rounded">
                {JSON.stringify(responsePayload.body, null, 2)}
              </pre>
            </div>
          )}

        </div>

        {/* PANEL 2: DIRECT CHANNELS & CALENDLY (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Calendly Scheduling Card */}
          <div className="rounded-xl border border-zinc-800 bg-[#121215] p-5 shadow-xl space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <div className="flex items-center space-x-2 text-zinc-100 font-bold">
                <Calendar className="w-4 h-4 text-[#ea580c]" />
                <span>DIRECT_SCHEDULING</span>
              </div>
              <span className="text-[10px] text-emerald-400">CALENDLY_SYNC</span>
            </div>

            <p className="text-zinc-400 font-sans text-xs leading-relaxed">
              Reserva una llamada técnica directa de 30 minutos para evaluar requerimientos de arquitectura o propuestas de liderazgo.
            </p>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[#ea580c]/50 text-zinc-100 font-mono text-xs flex items-center justify-center space-x-2 transition-all shadow block text-center"
            >
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              <span>[ Schedule Architecture Review (30 Min) ]</span>
            </a>
          </div>

          {/* Direct Hardware Links Cards */}
          <div className="rounded-xl border border-zinc-800 bg-[#121215] p-5 shadow-xl space-y-3 font-mono text-xs">
            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider border-b border-zinc-800 pb-2">
              VERIFIED_COMMUNICATION_CHANNELS
            </div>

            <div className="space-y-2">
              {/* Email */}
              <a
                href="mailto:architect@portfolio.dev"
                className="flex items-center justify-between p-3 rounded bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 text-zinc-300 hover:text-orange-400 transition-all group"
              >
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="font-bold">Email Direct</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300">architect@portfolio.dev</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 text-zinc-300 hover:text-orange-400 transition-all group"
              >
                <div className="flex items-center space-x-2.5">
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-orange-400" />
                  <span className="font-bold">GitHub Profile</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300">github.com/architect-lead</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 text-zinc-300 hover:text-orange-400 transition-all group"
              >
                <div className="flex items-center space-x-2.5">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span className="font-bold">LinkedIn Network</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300">linkedin.com/in/architect-lead</span>
              </a>

              {/* Resume */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-between p-3 rounded bg-zinc-950 border border-zinc-800 hover:border-orange-500/40 text-zinc-300 hover:text-orange-400 transition-all group"
              >
                <div className="flex items-center space-x-2.5">
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold">Curriculum Vitae</span>
                </div>
                <span className="text-[11px] text-emerald-400">Download (.PDF)</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* TECHNICAL FOOTER */}
      <footer className="pt-8 border-t border-zinc-800 font-mono text-xs text-zinc-500 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left System Specs */}
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="text-zinc-300 font-bold">SYSTEM_OS: ARCHITECT_OS v2.4</span>
            <span className="text-zinc-700">•</span>
            <span>BUILD: 2026.07-PROD</span>
            <span className="text-zinc-700">•</span>
            <span className="text-emerald-400 flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>STATUS: 200 OK</span>
            </span>
          </div>

          {/* Center Credits */}
          <div className="text-[11px] text-center text-zinc-400">
            Crafted with <span className="text-zinc-200 font-semibold">Next.js 15</span>, <span className="text-zinc-200 font-semibold">React Flow</span> &amp; <span className="text-zinc-200 font-semibold">DuckDB-Wasm</span>
          </div>

          {/* Right UTC Clock & Scroll Top */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-[11px] text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>{utcTime || "UTC"}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-orange-400 transition-colors flex items-center space-x-1 text-[10px]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>[ BACK TO TOP ]</span>
            </button>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
