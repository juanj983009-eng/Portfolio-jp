"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, PanInfo, AnimatePresence } from "framer-motion";
import { SiApachekafka, SiDocker, SiKeycloak, SiKubernetes } from "react-icons/si";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
interface Cert {
  id: string;
  title: string;
  specialty: string;
  validationText: string;
  issued: string;
  badge: string;
  hash: string;
  authority: string;
  board: string;
  dockLabel: string;
  /** Official brand hex — drives the active glow colour */
  brandColor: string;
  /** Full-colour brand icon rendered at w-5 h-5 */
  dockIcon: React.ReactNode;
}

const CERTS: Cert[] = [
  {
    id: "01",
    title: "DISTRIBUTED SYSTEMS ARCHITECT",
    specialty: "DISTRIBUTED SYSTEMS & EVENT ARCHITECTURE",
    validationText:
      "Validated through rigorous assessment in consensus algorithms, event sourcing, CQRS, and high-availability fault-tolerant microservice design across multi-datacenter environments.",
    issued: "MAY 2024",
    badge: "ACCREDITED",
    hash: "0x89F4A1C2",
    authority: "DISTRIBUTED SYSTEMS FOUNDATION",
    board: "CHIEF ARCHITECT BOARD",
    dockLabel: "KAFKA / EVENT MESH",
    brandColor: "#FF4D00",          // Kafka has no strong color; use system accent
    dockIcon: <SiApachekafka size={22} color="#FF4D00" />,
  },
  {
    id: "02",
    title: "AWS SOLUTIONS ARCHITECT",
    specialty: "CLOUD INFRASTRUCTURE & RELIABILITY ENGINEERING",
    validationText:
      "Certified in multi-region AWS infrastructure design, edge routing strategies, auto-scaling policies, and enterprise-grade high-speed disaster recovery architectures.",
    issued: "NOV 2023",
    badge: "VERIFIED",
    hash: "0x3DA92FF1",
    authority: "AMAZON WEB SERVICES INSTITUTE",
    board: "CLOUD CERTIFICATION BOARD",
    dockLabel: "DOCKER / CLOUD",
    brandColor: "#2496ED",
    dockIcon: <SiDocker size={22} color="#2496ED" />,
  },
  {
    id: "03",
    title: "ZERO-TRUST IAM ACCREDITATION",
    specialty: "ENTERPRISE SECURITY & IDENTITY ARCHITECTURE",
    validationText:
      "Accredited in Zero-Trust network design, Keycloak federation, OAuth2 / OIDC token flows, SAML enterprise SSO, and RBAC/ABAC policy enforcement at scale.",
    issued: "JAN 2024",
    badge: "ENTERPRISE",
    hash: "0xC7B308E5",
    authority: "ENTERPRISE SECURITY COUNCIL",
    board: "IAM STANDARDS AUTHORITY",
    dockLabel: "KEYCLOAK / IAM",
    brandColor: "#00B4D8",
    dockIcon: <SiKeycloak size={22} color="#00B4D8" />,
  },
  {
    id: "04",
    title: "KUBERNETES & CONTAINERS LEAD",
    specialty: "CONTAINER ORCHESTRATION & SERVICE MESH",
    validationText:
      "Demonstrated mastery in Kubernetes cluster architecture, Docker Swarm orchestration, container lifecycle management, and service mesh telemetry infrastructure at production scale.",
    issued: "MAR 2025",
    badge: "VERIFIED",
    hash: "0xF02D77A9",
    authority: "CLOUD NATIVE COMPUTING FOUNDATION",
    board: "DEVOPS EXCELLENCE BOARD",
    dockLabel: "KUBERNETES",
    brandColor: "#326CE5",
    dockIcon: <SiKubernetes size={22} color="#326CE5" />,
  },
];

/* ─────────────────────────────────────────────────────────────
   LAYOUT CONSTANTS
───────────────────────────────────────────────────────────── */
const CARD_W = 620;
const SPREAD = 520;

/* ─────────────────────────────────────────────────────────────
   BORDER BEAM
   Technique: a spinning disc (4× the button size, centered at 50%/50%)
   carries a conic-gradient arc. The outer wrapper clips it to the button
   shape, so only the perimeter strip is visible → the comet travels the edge.
   CSS @keyframes spin is provided by Tailwind by default (animate-spin).
   We use an arbitrary duration via `style` on the element instead of
   relying on the Tailwind JIT arbitrary animation value.
───────────────────────────────────────────────────────────── */
const BorderBeam: React.FC<{ color: string }> = ({ color }) => (
  <div
    /* Clip container — sits 2 px outside the button on every side */
    className="absolute -inset-[2px] rounded-[18px] overflow-hidden pointer-events-none z-0"
  >
    {/*
     * The spinning disc.
     * -inset-[100%] makes it 3× the container (width = 3 × container width),
     * centred via translate. Rotating this large disc means its bright arc
     * sweeps cleanly around every corner of the clip rectangle.
     */}
    <div
      className="absolute -inset-[100%]"
      style={{
        animation: "spin 3s linear infinite",
        background: `conic-gradient(
          from 0deg at 50% 50%,
          transparent   0deg,
          transparent   300deg,
          ${color}CC    340deg,
          #ffffff        355deg,
          transparent   360deg
        )`,
      }}
    />
    {/* Inner mask — covers the centre, leaving only the 2 px border strip */}
    <div className="absolute inset-[2px] rounded-[16px] bg-zinc-950" />
  </div>
);

/* ─────────────────────────────────────────────────────────────
   DOCK  — tech logo badges with Border Beam on active
───────────────────────────────────────────────────────────── */
const CertDock: React.FC<{
  certs: Cert[];
  activeIndex: number;
  onSelect: (i: number) => void;
}> = ({ certs, activeIndex, onSelect }) => (
  <div className="flex flex-col items-center gap-3 mt-14">
    <div className="flex items-center gap-4 bg-zinc-950/80 border border-zinc-800/60 backdrop-blur-2xl px-6 py-4 rounded-2xl">
      {certs.map((cert, i) => {
        const isActive = i === activeIndex;
        return (
          <div key={cert.id} className="relative flex flex-col items-center gap-2">

            {/* Floating label — fades in on active */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <span className="block font-sans font-bold text-[9px] uppercase tracking-widest bg-zinc-900 border border-zinc-700/60 text-zinc-200 px-3 py-1 rounded-md whitespace-nowrap">
                  {cert.dockLabel}
                </span>
              </motion.div>
            </div>

            {/* Button — overflow-hidden so the beam is clipped to its shape */}
            <motion.button
              onClick={() => onSelect(i)}
              aria-label={cert.dockLabel}
              animate={{ scale: isActive ? 1.2 : 1, opacity: isActive ? 1 : 0.4 }}
              whileHover={!isActive ? { scale: 1.1, opacity: 0.72 } : {}}
              transition={{ type: "spring", stiffness: 340, damping: 26 }}
              className="relative w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center focus:outline-none overflow-hidden"
            >
              {/* Border Beam — mounts / unmounts with AnimatePresence for a fade */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={`beam-${cert.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="contents"
                  >
                    <BorderBeam color={cert.brandColor} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subtle brand-tint wash on active */}
              {isActive && (
                <div
                  className="absolute inset-[2px] rounded-[16px] pointer-events-none"
                  style={{ backgroundColor: `${cert.brandColor}0D` }}
                />
              )}

              {/* Logo — always on top */}
              <span className="relative z-20">{cert.dockIcon}</span>
            </motion.button>

            {/* Active indicator line */}
            <motion.span
              animate={{
                opacity: isActive ? 1 : 0,
                scaleX: isActive ? 1 : 0.15,
                backgroundColor: cert.brandColor,
              }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-5 rounded-full"
            />
          </div>
        );
      })}
    </div>
  </div>
);



/* ─────────────────────────────────────────────────────────────
   PER-OFFSET TRANSFORMS
───────────────────────────────────────────────────────────── */
function getCardProps(offset: number) {
  const abs = Math.abs(offset);
  if (abs === 0) return { x: 0,              scale: 1,    opacity: 1,    rotateY: 0,            zIndex: 30, blur: 0 };
  if (abs === 1) return { x: offset * SPREAD, scale: 0.83, opacity: 0.32, rotateY: offset * -14, zIndex: 20, blur: 1 };
  if (abs === 2) return { x: offset * SPREAD, scale: 0.68, opacity: 0.10, rotateY: offset * -20, zIndex: 10, blur: 2 };
  return              { x: offset * SPREAD,  scale: 0.56, opacity: 0,    rotateY: offset * -24, zIndex: 0,  blur: 3 };
}

/* ─────────────────────────────────────────────────────────────
   SEAL — decorative wax-seal SVG in orange
───────────────────────────────────────────────────────────── */
const WaxSeal: React.FC<{ id: string }> = ({ id }) => (
  <div className="relative w-14 h-14 flex-shrink-0">
    <svg viewBox="0 0 56 56" className="w-full h-full" aria-hidden="true">
      {/* Outer ring */}
      <circle cx="28" cy="28" r="26" fill="none" stroke="#FF4D00" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Inner disc */}
      <circle cx="28" cy="28" r="19" fill="#FF4D00" />
      {/* ID text */}
      <text
        x="28" y="24" textAnchor="middle"
        fontSize="7" fontWeight="800" fill="white"
        fontFamily="sans-serif" letterSpacing="1"
      >
        CERT
      </text>
      <text
        x="28" y="34" textAnchor="middle"
        fontSize="9" fontWeight="900" fill="white"
        fontFamily="sans-serif" letterSpacing="0"
      >
        {id}
      </text>
    </svg>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   DIPLOMA CARD
───────────────────────────────────────────────────────────── */
const DiplomaCard: React.FC<{
  cert: Cert;
  offset: number;
  onClick: () => void;
}> = ({ cert, offset, onClick }) => {
  const { x, scale, opacity, rotateY, zIndex, blur } = getCardProps(offset);
  const isActive = offset === 0;

  return (
    <motion.div
      onClick={!isActive ? onClick : undefined}
      animate={{ x, scale, opacity, rotateY }}
      transition={{ type: "spring", stiffness: 290, damping: 36, mass: 0.9 }}
      style={{
        zIndex,
        filter: blur > 0 ? `blur(${blur}px)` : "none",
        transformStyle: "preserve-3d",
        position: "absolute",
        width: CARD_W,
        left: "50%",
        marginLeft: -(CARD_W / 2),
        cursor: isActive ? "default" : "pointer",
      }}
    >
      {/*
        Diploma lienzo — white/ivory paper background
        Double border: outer decorative band + inner content area
      */}
      <div
        className="
          relative overflow-hidden rounded-xl
          bg-stone-50 text-zinc-900
          shadow-[0_32px_80px_rgba(0,0,0,0.55)]
          border-[6px] border-stone-200
        "
        style={{ height: 340 }}
      >
        {/* Decorative corner filigree lines */}
        <div className="absolute inset-[10px] border border-stone-300/60 rounded-lg pointer-events-none" />
        <div className="absolute inset-[14px] border border-stone-200/40 rounded-md pointer-events-none" />

        {/* Subtle watermark logo behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035]">
          <span className="font-sans font-black text-[110px] text-zinc-900 uppercase tracking-tighter leading-none">
            JP
          </span>
        </div>

        {/* Orange top accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF4D00]" />

        {/* Main content padding */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-10 pt-7 pb-6">

          {/* ── HEADER ── */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Institution label */}
              <p className="font-sans font-bold text-[9px] uppercase tracking-[0.22em] text-zinc-400 text-center">
                CERTIFICATE OF ARCHITECTURAL COMPETENCE
              </p>
              {/* Thin rule */}
              <div className="flex items-center gap-2 mt-1.5 justify-center">
                <span className="h-px flex-1 bg-stone-300/80" />
                <span className="w-1 h-1 rounded-full bg-[#FF4D00]" />
                <span className="h-px flex-1 bg-stone-300/80" />
              </div>
            </div>
            {/* Wax seal */}
            <WaxSeal id={cert.id} />
          </div>

          {/* ── BODY ── */}
          <div className="text-center space-y-1 -mt-1">
            <p className="font-sans font-bold text-[9px] uppercase tracking-[0.18em] text-zinc-400">
              THIS IS TO CERTIFY THAT
            </p>
            <p className="font-sans font-black text-2xl md:text-3xl uppercase tracking-tight text-zinc-950 leading-none">
              JUAN PARRA
            </p>
            <p className="font-sans font-bold text-[9px] uppercase tracking-[0.18em] text-zinc-400">
              HAS DEMONSTRATED MASTERY IN
            </p>
            <p className="font-sans font-black text-base md:text-lg uppercase tracking-tight text-[#FF4D00] leading-tight">
              {cert.title}
            </p>
            <p className="font-sans font-medium text-[11px] text-zinc-500 leading-relaxed max-w-md mx-auto pt-1">
              {cert.validationText}
            </p>
          </div>

          {/* ── FOOTER / SIGNATURES ── */}
          <div>
            {/* Divider */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px flex-1 bg-stone-300/80" />
              <span className="font-sans font-bold text-[8px] uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap">
                VERIFIED HASH: {cert.hash} &nbsp;·&nbsp; ISSUED {cert.issued}
              </span>
              <span className="h-px flex-1 bg-stone-300/80" />
            </div>

            {/* Two signature blocks */}
            <div className="flex items-end justify-between">
              <div className="text-left space-y-0.5">
                {/* Simulated signature stroke */}
                <div className="w-24 border-b border-zinc-400/60 pb-0.5 mb-1">
                  <svg viewBox="0 0 96 18" className="w-24 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M4 14 C12 4, 20 16, 30 10 C38 4, 44 16, 56 8 C64 2, 72 14, 84 10 L92 9" />
                  </svg>
                </div>
                <p className="font-sans font-bold text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                  ISSUING AUTHORITY
                </p>
                <p className="font-sans font-bold text-[9px] uppercase tracking-tight text-zinc-700">
                  {cert.authority}
                </p>
              </div>

              {/* Centre badge */}
              <div className="text-center space-y-0.5">
                <div
                  className="w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center mx-auto"
                  aria-hidden="true"
                >
                  <span className="font-sans font-black text-[8px] text-white uppercase tracking-tight">
                    {cert.badge.slice(0, 3)}
                  </span>
                </div>
                <p className="font-sans font-bold text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                  {cert.badge}
                </p>
              </div>

              <div className="text-right space-y-0.5">
                <div className="w-24 ml-auto border-b border-zinc-400/60 pb-0.5 mb-1">
                  <svg viewBox="0 0 96 18" className="w-24 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M4 10 C14 2, 22 16, 34 8 C44 2, 52 16, 64 6 C72 0, 80 14, 92 10" />
                  </svg>
                </div>
                <p className="font-sans font-bold text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                  REVIEW BOARD
                </p>
                <p className="font-sans font-bold text-[9px] uppercase tracking-tight text-zinc-700">
                  {cert.board}
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* Bottom orange accent stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4D00]/40" />
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
const CertificationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.1"],
  });
  const wmOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.04, 0.06, 0.025]);
  const wmScale   = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const clamp = (v: number) => Math.max(0, Math.min(CERTS.length - 1, v));
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60) setActiveIndex((i) => clamp(i + 1));
    else if (info.offset.x > 60) setActiveIndex((i) => clamp(i - 1));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black py-28 border-t border-zinc-900 select-none"
    >
      {/* Watermark */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: wmOpacity, scale: wmScale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4"
      >
        <p className="font-sans font-black text-white uppercase text-center leading-none tracking-tighter text-[7vw]">
          I HOLD A ROBUST SUITE OF CERTIFICATIONS
        </p>
      </motion.div>

      {/* Section label */}
      <div className="relative z-10 flex items-center gap-3 max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#FF4D00]">
          CERTIFICATIONS
        </span>
        <span className="h-px w-12 bg-zinc-800" />
        <span className="font-sans font-bold text-xs uppercase tracking-widest text-zinc-600">
          DRAG OR CLICK TO EXPLORE
        </span>
      </div>

      {/* Stage */}
      <div className="relative z-10">
        <div style={{ height: 400 }} className="relative">
        {/* Ambient glow — warm ivory/orange */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-72 rounded-full bg-[#FF4D00]/10 blur-[130px] pointer-events-none -z-10"
        />

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          style={{ perspective: 1600, height: "100%", cursor: "grab" }}
          whileDrag={{ cursor: "grabbing" }}
          className="relative flex items-center justify-center"
        >
          {CERTS.map((cert, index) => (
            <DiplomaCard
              key={cert.id}
              cert={cert}
              offset={index - activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </motion.div>
        </div>

        {/* Dock */}
        <CertDock
          certs={CERTS}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      </div>
    </section>
  );
};

export default CertificationsSection;
