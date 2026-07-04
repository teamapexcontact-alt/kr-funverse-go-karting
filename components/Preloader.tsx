"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "TIGHTEN YOUR SEAT BELTS...",
  "GET READY FOR THE RUSH...",
  "START YOUR ENGINE...",
  "THE TRACK IS WAITING...",
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setPhraseIndex((p) => (p + 1) % phrases.length);
    }, 500);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          clearInterval(phraseTimer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return p + 5;
      });
    }, 30);

    return () => {
      clearInterval(phraseTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          {/* Speedometer */}
          <div className="relative w-36 h-36 mb-6">
            <svg suppressHydrationWarning viewBox="0 0 160 160" className="w-full h-full">
              <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" strokeDasharray="330 110" strokeDashoffset="-55" strokeLinecap="round" />
              <motion.circle cx="80" cy="80" r="70" fill="none" stroke="url(#gaugeGradient)" strokeWidth="8" strokeDasharray="330 110" strokeDashoffset={330 - (progress / 100) * 330} strokeLinecap="round" transform="rotate(-55 80 80)" />
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8362E" />
                  <stop offset="50%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#E8362E" />
                </linearGradient>
              </defs>
              {[...Array(11)].map((_, i) => {
                const angle = -55 + (i / 10) * 220;
                const rad = (angle * Math.PI) / 180;
                const x1 = (80 + 62 * Math.cos(rad)).toFixed(4);
                const y1 = (80 + 62 * Math.sin(rad)).toFixed(4);
                const x2 = (80 + 58 * Math.cos(rad)).toFixed(4);
                const y2 = (80 + 58 * Math.sin(rad)).toFixed(4);
                return (
                  <line key={i}
                    x1={x1} y1={y1}
                    x2={x2} y2={y2}
                    stroke={i <= (progress / 100) * 10 ? "#fff" : "rgba(255,255,255,0.2)"}
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
            <motion.div className="absolute top-1/2 left-1/2 w-1 h-14 bg-accent origin-bottom rounded-full"
              style={{ transformOrigin: "bottom center", marginLeft: "-2px", marginTop: "-56px" }}
              animate={{ rotate: -55 + (progress / 100) * 220 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {Math.floor(progress * 2.4)}
              </div>
              <div className="text-[8px] text-white/30 tracking-widest">KM/H</div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25}}
              className="text-white/50 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {phrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
