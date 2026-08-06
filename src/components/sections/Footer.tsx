"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL = "juanj983009@gmail.com";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);
  const resetCopyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetCopyTimerRef.current) {
        clearTimeout(resetCopyTimerRef.current);
      }
    };
  }, []);

  const handleEmailClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`,
      "_blank",
      "noopener,noreferrer",
    );

    const copyEmail = async () => {
      try {
        if (!navigator.clipboard) {
          throw new Error("Clipboard API is unavailable");
        }

        await navigator.clipboard.writeText(EMAIL);
        setEmailCopied(true);

        if (resetCopyTimerRef.current) {
          clearTimeout(resetCopyTimerRef.current);
        }

        resetCopyTimerRef.current = setTimeout(() => {
          setEmailCopied(false);
          resetCopyTimerRef.current = null;
        }, 2000);
      } catch (error: unknown) {
        console.error("Unable to copy email address:", error);
      }
    };

    void copyEmail();
  };

  return (
    <footer
      id="contact"
      className="w-full border-t border-zinc-900 pt-16 pb-8 bg-black text-zinc-400 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-wider">
            JUAN PARRA
          </h3>
          <p className="text-xs text-zinc-500 mt-1 font-sans">
            {t.footer.role}
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-xs font-sans font-bold uppercase tracking-widest text-zinc-300">
          <Link href="/" className="hover:text-[#FF4D00] transition-colors">
            {t.footer.home}
          </Link>
          <Link
            href="/about"
            className="hover:text-[#FF4D00] transition-colors"
          >
            {t.footer.about}
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#FF4D00] transition-colors"
          >
            {t.footer.projects}
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#FF4D00] transition-colors"
          >
            {t.footer.contact}
          </Link>
        </nav>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto flex gap-6 font-sans text-xs text-zinc-500 pb-8 border-b border-zinc-900">
        <a
          href={SITE_CONFIG.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <Github className="w-3.5 h-3.5" /> {t.footer.github}
        </a>
        <a
          href={SITE_CONFIG.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de LinkedIn de Juan Parra"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <Linkedin className="w-3.5 h-3.5" /> {t.footer.linkedin}
        </a>
        <button
          type="button"
          onClick={handleEmailClick}
          aria-label="Copiar correo de Juan Parra y abrir Gmail"
          aria-live="polite"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          <Mail className="w-3.5 h-3.5" />{" "}
          {emailCopied ? "¡COPIADO!" : t.footer.email}
        </button>
      </div>

      {/* Massive Display Footer Watermark */}
      <div className="w-full overflow-hidden pt-8 flex justify-center">
        <h1 className="text-[13vw] leading-none font-black text-[#FF4D00] tracking-tighter uppercase select-none text-center whitespace-nowrap font-sans">
          JUAN PARRA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
