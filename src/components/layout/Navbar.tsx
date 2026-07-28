"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const menuItems = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.about, href: "/about" },
    { title: t.nav.projects, href: "/projects" },
    { title: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      {/* ── GHOST TRANSPARENT FIXED HEADER (NO BACKGROUND) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent border-none pointer-events-none py-6 transition-all duration-300 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between pointer-events-auto">

          {/* 1. Izquierda: Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-sans font-black text-white text-sm tracking-tight uppercase hover:text-[#FF4D00] transition-colors duration-200"
          >
            JUAN PARRA
          </Link>

          {/* 2. Centro: Botón MENU minimalista */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-[3px] group bg-transparent border-none outline-none cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={`w-8 h-[2px] rounded-full transition-all duration-300 ${
                isOpen ? "bg-[#FF4D00]" : "bg-white group-hover:bg-[#FF4D00]"
              }`}
            />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors duration-200">
              {isOpen ? (language === "es" ? "CERRAR" : "CLOSE") : "MENU"}
            </span>
          </button>

          {/* 3. Derecha: i18n inline + Contacto */}
          <div className="flex items-center gap-5">
            {/* Selector de idioma compacto */}
            <div className="flex items-center gap-0.5 text-[10px] sm:text-xs font-mono bg-black/40 backdrop-blur-sm border border-zinc-800/80 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 select-none">
              <button
                onClick={() => setLanguage("es")}
                className={`px-1 sm:px-1.5 py-0.5 rounded-full transition-all duration-200 font-bold ${
                  language === "es"
                    ? "bg-[#FF4D00] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <span className="text-zinc-700 px-0.5">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-1 sm:px-1.5 py-0.5 rounded-full transition-all duration-200 font-bold ${
                  language === "en"
                    ? "bg-[#FF4D00] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Contacto */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hidden sm:block font-mono font-bold text-xs uppercase tracking-widest text-white hover:text-[#FF4D00] transition-colors duration-200"
            >
              {language === "es" ? "CONTACTO" : "CONTACT"}
            </Link>
          </div>

        </div>
      </header>

      {/* ── FULLSCREEN OVERLAY MENU ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center select-none"
          >
            {/* Resplandor Naranja Central */}
            <div className="absolute w-[400px] h-[400px] bg-[#FF4D00]/20 rounded-full blur-[140px] pointer-events-none" />

            {/* Enlaces Gigantes Centrados */}
            <nav className="relative z-10 flex flex-col items-center gap-6 text-center">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans font-bold text-4xl md:text-6xl text-white hover:text-[#FF4D00] tracking-tight uppercase transition-all block py-2"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
