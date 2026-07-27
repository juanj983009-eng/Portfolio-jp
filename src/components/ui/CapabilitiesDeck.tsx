"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BACK_CARDS = [
  { id: 1, rotate: -8, delay: 0.6 },
  { id: 2, rotate: -5, delay: 0.4 },
  { id: 3, rotate: -2, delay: 0.2 },
];

interface CapabilitiesDeckProps {
  className?: string;
}

export const CapabilitiesDeck: React.FC<CapabilitiesDeckProps> = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`relative w-[290px] sm:w-[350px] aspect-[3/4] ${className}`} />;
  }

  return (
    /* Wrapper flotante: flota TODO el mazo en Y sin interferir con el tilt del mouse */
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`relative w-[290px] sm:w-[350px] aspect-[3/4] ${className}`}
    >
      {BACK_CARDS.map((card, index) => (
        <motion.div
          key={card.id}
          style={{
            zIndex: index,
            transformOrigin: "bottom center",
          }}
          initial={{ rotate: card.rotate }}
          animate={{
            y: [0, (index + 1) * -4, 0],
            rotate: [
              card.rotate,
              card.rotate + (index % 2 === 0 ? 1.5 : -1.5),
              card.rotate,
            ],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: card.delay,
          }}
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <Image
            alt="Card Back"
            className="object-cover"
            fill
            priority
            src="/assets/cards/card-back-pattern.png"
            sizes="(max-width: 768px) 290px, 350px"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CapabilitiesDeck;
