"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 bg-zinc-950/80 border border-zinc-800 rounded-lg p-1 font-mono text-xs select-none pointer-events-auto">
      <Globe className="w-3.5 h-3.5 text-zinc-500 ml-1.5 mr-0.5" />
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-label="Cambiar idioma a Español"
        className={`px-2 py-0.5 rounded font-bold uppercase transition-colors cursor-pointer ${
          language === "es"
            ? "bg-[#FF4D00] text-black shadow-sm"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        ES
      </button>
      <span className="text-zinc-700 font-normal select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="Switch language to English"
        className={`px-2 py-0.5 rounded font-bold uppercase transition-colors cursor-pointer ${
          language === "en"
            ? "bg-[#FF4D00] text-black shadow-sm"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
