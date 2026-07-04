"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function VerticalKart({ speed }: { speed: number }) {
  const wheelY = speed * 2;
  return (
    <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="40" rx="10" ry="2" fill="rgba(0,0,0,0.3)" />
      <rect x="3" y="0" width="14" height="3" rx="0.5" fill="#FF1E1E" />
      <rect x="6" y="3" width="8" height="2" rx="0.5" fill="#111" />
      <path d="M3 5 L17 5 Q19 5 19 7 L18 20 Q18 22 16 22 L4 22 Q2 22 2 20 L1 7 Q1 5 3 5 Z" fill="#FF1E1E" />
      <path d="M4 9 L16 9" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <path d="M5 7 L15 7 Q16 7 16 8 L16 12 Q16 13 15 13 L5 13 Q4 13 4 12 L4 8 Q4 7 5 7 Z" fill="#0D0D0D" />
      <circle cx="10" cy="8.5" r="2.5" fill="#fff" opacity="0.85" />
      <circle cx="10" cy="8.5" r="2" fill="#eee" />
      <path d="M8.5 7.5 Q10 7 11.5 7.5" stroke="#1A1A1A" strokeWidth="0.8" fill="none" />
      <path d="M10 6 L10 11" stroke="#FF1E1E" strokeWidth="0.5" />
      <rect x="2" y="21" width="16" height="3" rx="0.5" fill="#111" />
      <rect x="4" y="24" width="12" height="3" rx="0.5" fill="#FF1E1E" />
      <rect x="1" y="21" width="1" height="4" fill="#FF1E1E" opacity="0.6" />
      <rect x="18" y="21" width="1" height="4" fill="#FF1E1E" opacity="0.6" />
      <rect x="2" y="0" width="1" height="3" fill="#FF1E1E" opacity="0.6" />
      <rect x="17" y="0" width="1" height="3" fill="#FF1E1E" opacity="0.6" />
      <g transform={`translate(10, 18) rotate(${wheelY})`}>
        <rect x="-8" y="-1" width="3" height="5" rx="0.8" fill="#111" />
        <rect x="5" y="-1" width="3" height="5" rx="0.8" fill="#111" />
      </g>
      <g transform={`translate(10, 26) rotate(${wheelY})`}>
        <rect x="-8" y="-1" width="3" height="5" rx="0.8" fill="#111" />
        <rect x="5" y="-1" width="3" height="5" rx="0.8" fill="#111" />
      </g>
      <rect x="3" y="14" width="14" height="1" fill="rgba(255,255,255,0.05)" />
      <motion.ellipse
        cx="10" cy="28"
        rx="2.5"
        fill="#FF1E1E"
        initial={{ ry: 2, opacity: 0.15 }}
        animate={{ opacity: [0.15, 0.5, 0.15], ry: [2, 3, 2] }}
        transition={{ duration: 0.15, repeat: Infinity }}
      />
      <text x="10" y="17" textAnchor="middle" fill="white" fontSize="3.5" fontWeight="bold" fontFamily="Rajdhani">07</text>
    </svg>
  );
}

export default function RacingTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const kartY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setMounted(true);
    let lastValue = 0;
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const velocity = Math.abs(v - lastValue) * 500;
      setScrollVelocity(Math.min(velocity, 6));
      lastValue = v;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!mounted) return null;

  return (
    <div ref={trackRef} className="fixed left-0 top-0 bottom-0 w-8 md:w-10 z-30 pointer-events-none">
      {/* Simple white lane — very low opacity */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/[0.04]" />

      {/* Go Kart */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{ top: kartY }}
      >
        <motion.div
          style={{ rotate: scrollVelocity > 2 ? (scrollVelocity > 4 ? 1.5 : 0.8) : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <VerticalKart speed={scrollVelocity} />
        </motion.div>
        {scrollVelocity > 1 && (
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{ width: 2 + i, height: 2 + i }}
                animate={{
                  y: [0, 5 + i * 3],
                  x: [-0.5 + Math.random(), -1 + Math.random() * 2],
                  opacity: [0.15, 0],
                  scale: [0.5, 1.5],
                }}
                transition={{ duration: 0.5, delay: i * 0.08, repeat: Infinity }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
