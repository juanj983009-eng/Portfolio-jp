"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "HOME", href: "/" },
    { title: "ABOUT ME", href: "/about" },
    { title: "PROJECTS", href: "/projects" },
    { title: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* ── 1. FIXED TOP HEADER BAR ── */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-none select-none bg-gradient-to-b from-black/90 via-black/40 to-transparent backdrop-blur-sm">
        
        {/* IZQUIERDA: Brand */}
        <div className="pointer-events-auto">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-sans font-black text-white text-sm tracking-tight uppercase hover:text-[#FF4D00] transition-colors"
          >
            JUAN PARRA
          </Link>
        </div>

        {/* CENTRO: Menu / Close Trigger Minimalista */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className={`w-16 h-[3px] rounded-full transition-all duration-300 ${isOpen ? 'bg-[#FF4D00]' : 'bg-white'}`} />
          <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
            {isOpen ? 'CLOSE' : 'MENU'}
          </span>
        </button>

        {/* DERECHA: Single CTA */}
        <div className="pointer-events-auto">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="font-sans font-bold text-xs uppercase tracking-widest text-white hover:text-[#FF4D00] transition-colors"
          >
            CONTACT
          </Link>
        </div>

      </header>

      {/* ── 2. FULLSCREEN OVERLAY MENU ── */}
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
                  key={item.title}
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
