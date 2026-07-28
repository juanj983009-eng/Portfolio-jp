"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Mail, Copy, CheckCheck, X, ExternalLink, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

/* ─── BOOK A CALL MODAL ─────────────────────────────────────── */
export const BookACallModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const email = SITE_CONFIG.email;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Technical%20Consultation%20Inquiry`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendEmailClick = () => {
    if (pathname === "/contact" || pathname?.startsWith("/contact")) {
      onClose();
      setTimeout(() => {
        const nameInput = document.getElementById("contact-name-input") || document.querySelector('form input[type="text"]');
        if (nameInput instanceof HTMLElement) {
          nameInput.focus();
          nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  return (
    <motion.div
      key="book-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[20000] flex items-center justify-center p-6 bg-black/85 backdrop-blur-2xl"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        key="book-modal-panel"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-xl rounded-[2rem] p-10 md:p-14 overflow-hidden bg-zinc-950/40 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
      >
        {/* Background Ambient Light Orbs (Behind the Glass) */}
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Inner Surface Glass Texture & Specular Highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF4D00]/60 to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-[#FF4D00] block mb-4 relative z-10">
          {t.bookModal.tag}
        </span>
        <h2 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tighter leading-tight mb-3 relative z-10">
          <span>{t.bookModal.title.main}</span>
          <span className="text-[#FF4D00]">{t.bookModal.title.highlight}</span>
        </h2>
        <p className="font-sans font-medium text-xs text-zinc-400 leading-relaxed mb-10 max-w-sm relative z-10">
          {t.bookModal.subtitle}
        </p>

        {/* Options */}
        <div className="space-y-4 relative z-10">
          {/* Option 1: Send Email */}
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSendEmailClick}
            className="group w-full flex items-center justify-between gap-4 p-5 rounded-2xl bg-[#FF4D00] hover:bg-orange-500 transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.3)] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white shrink-0" />
              <div>
                <p className="font-sans font-bold text-xs text-white uppercase tracking-widest">{t.bookModal.sendEmail}</p>
                <p className="font-sans text-[10px] text-orange-200 mt-0.5">{email}</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          {/* Option 2: Copy Email */}
          <button
            onClick={handleCopy}
            className="group w-full flex items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-zinc-500 transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <CheckCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Copy className="w-5 h-5 text-zinc-400 group-hover:text-white shrink-0 transition-colors" />
                  </motion.span>
                )}
              </AnimatePresence>
              <div>
                <p className="font-sans font-bold text-xs text-white uppercase tracking-widest">
                  {copied ? t.bookModal.copiedEmail : t.bookModal.copyEmail}
                </p>
                <p className="font-sans text-[10px] text-zinc-500 mt-0.5">{email}</p>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {copied && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="font-sans text-[10px] text-emerald-400 uppercase tracking-wider shrink-0"
                >
                  ✓ {t.bookModal.done}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Response time note */}
          <div className="flex items-center gap-2 pt-2 px-1">
            <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <p className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider">
              {t.bookModal.responseTime}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── BOOK A CALL CARD SECTION ───────────────────────────────── */
export const BookACallCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative max-w-5xl mx-auto px-6 md:px-12 py-20">
        {/* Frosted Glass Container with ambient glows */}
        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950/40 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] p-12 md:p-16 text-center group">
          {/* Background Ambient Light Orbs (Behind the Glass) */}
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute -top-10 left-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* Inner Surface Glass Texture & Specular Highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* Hover Inset Glow */}
          <div
            className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ boxShadow: "inset 0 0 80px rgba(255,77,0,0.08)" }}
          />

          {/* Card Content */}
          <span className="text-xs font-sans font-bold tracking-widest text-[#FF4D00] uppercase mb-4 block relative z-10">
            {t.bookModal.bookCallBtn}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-tight relative z-10 font-sans">
            <span>{t.bookModal.readyTitle.main}</span>
            <span className="text-[#FF4D00]">{t.bookModal.readyTitle.highlight}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8 relative z-10 font-sans font-medium">
            {t.bookModal.readyDesc}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="
              relative z-10 inline-flex items-center gap-2.5
              px-8 py-4 rounded-lg
              bg-[#FF4D00] hover:bg-[#e04400]
              text-black font-mono font-bold text-xs uppercase tracking-wider
              shadow-lg shadow-[#FF4D00]/20 hover:scale-105 transition-all duration-300 cursor-pointer
            "
          >
            <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
            <span>{t.bookModal.bookCallBtn}</span>
          </button>
        </div>
      </section>

      {/* Cinematic Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && <BookACallModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default BookACallCard;
