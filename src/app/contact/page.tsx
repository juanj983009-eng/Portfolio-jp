"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Calendar, Send, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { BookACallModal } from "@/components/sections/BookACallCard";
import { SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field — must stay empty; bots fill it automatically
    _hp_website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // ── HONEYPOT BOT GUARD ─────────────────────────────────────────────
    // If the hidden field was filled, it's a bot. Silently fake success.
    if (formData._hp_website) {
      setSubmitted(true);
      return;
    }
    // ──────────────────────────────────────────────────────────────────

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_li4bzan',
        'template_s2zyxun',
        {
          name: formData.name,
          reply_to: formData.email,
          subject: formData.subject || 'Consulta desde Portafolio Web',
          message: formData.subject 
            ? `[Asunto: ${formData.subject}]\n\n${formData.message}` 
            : formData.message
        },
        'rCRMkHpFPZalCLQgT'
      );

      // Éxito: reinicia formulario y activa pantalla de confirmación
      setFormData({ name: "", email: "", subject: "", message: "", _hp_website: "" });
      setSubmitted(true);
    } catch (error: unknown) {
      console.error('[EMAILJS_TRANSPORT_ERROR]:', error);
      setErrorMessage(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
                <span>{t.contact.title.main}</span>
                <span className="text-[#FF4D00]">{t.contact.title.highlight}</span>
              </h1>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed uppercase tracking-wider">
                {t.contact.description}
              </p>
            </div>

            {/* Direct Email Display & Active Status */}
            <div className="py-6 border-y border-zinc-800/80 space-y-3">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                {t.contact.directInquiries}
              </span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-mono text-2xl md:text-3xl font-bold text-white hover:text-[#FF4D00] transition-colors block"
              >
                {SITE_CONFIG.email}
              </a>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
                <span>{t.contact.responseTime}</span>
              </div>
            </div>

            {/* Compact SCHEDULE CALL Industrial Card */}
            <div className="p-6 md:p-8 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4 relative overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-[#FF4D00]" />
                <span className="font-mono font-bold text-xs text-white uppercase tracking-widest">
                  {t.contact.scheduleCallTitle}
                </span>
              </div>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed uppercase tracking-wider">
                {t.contact.scheduleCallDesc}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#FF4D00] hover:bg-[#e04400] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF4D00]/10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
                  <span>{t.contact.bookCallBtn}</span>
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
                  {t.contact.successTitle}
                </h3>
                <p className="font-mono text-xs text-zinc-400 max-w-sm uppercase tracking-wider leading-relaxed">
                  {t.contact.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono font-bold text-xs text-[#FF4D00] uppercase tracking-widest hover:underline pt-4 cursor-pointer"
                >
                  {t.contact.transmitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ── HONEYPOT FIELD: hidden from real users, bots fill it ── */}
                <div aria-hidden="true" className="sr-only" tabIndex={-1}>
                  <label htmlFor="_hp_website">Website</label>
                  <input
                    id="_hp_website"
                    name="_hp_website"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    value={formData._hp_website}
                    onChange={(e) =>
                      setFormData({ ...formData, _hp_website: e.target.value })
                    }
                  />
                </div>

                <div className="border-b border-zinc-800 pb-4">
                  <h3 className="font-mono font-bold text-xl text-white uppercase tracking-tight">
                    {t.contact.formTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                      {t.contact.nameLabel}
                    </label>
                    <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                      {t.contact.emailLabel}
                    </label>
                    <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                    {t.contact.subjectLabel}
                  </label>
                  <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 block">
                    {t.contact.messageLabel}
                  </label>
                  <div className="bg-zinc-950/80 border border-zinc-800 focus-within:border-[#FF4D00] rounded-md transition-colors">
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="bg-transparent text-white placeholder-zinc-600 focus:outline-none font-mono text-sm w-full py-3 px-4 resize-none"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs p-3 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-lg bg-[#FF4D00] hover:bg-[#e04400] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF4D00]/10 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>{t.contact.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[3]" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      {/* Global Brutalist Footer */}
      <Footer />

      {/* Book a Call Modal Portal */}
      <AnimatePresence>
        {isBookModalOpen && (
          <BookACallModal onClose={() => setIsBookModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
