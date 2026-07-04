"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function GoKart({ speed }: { speed: number }) {
  const wheelSpin = speed * 4;
  return (
    <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="12" cy="46" rx="11" ry="2" fill="rgba(0,0,0,0.4)" />

      {/* Rear wing support */}
      <rect x="8" y="1" width="8" height="1" rx="0.3" fill="#333" />
      {/* Rear wing */}
      <rect x="4" y="0" width="16" height="3" rx="1" fill="#D72638" />
      <rect x="6" y="3" width="12" height="1.5" rx="0.5" fill="#222" />
      {/* Wing endplates */}
      <rect x="3" y="0" width="1.5" height="4" rx="0.3" fill="#D72638" opacity="0.8" />
      <rect x="19.5" y="0" width="1.5" height="4" rx="0.3" fill="#D72638" opacity="0.8" />

      {/* Engine cover */}
      <rect x="7" y="4" width="10" height="3" rx="1" fill="#1a1a1a" />
      <rect x="8" y="4.5" width="8" height="0.5" fill="rgba(255,255,255,0.05)" />
      <rect x="8" y="5.5" width="8" height="0.5" fill="rgba(255,255,255,0.05)" />

      {/* Main body */}
      <path d="M5 7 L19 7 Q21 7 21 9 L20 24 Q20 26 18 26 L6 26 Q4 26 4 24 L3 9 Q3 7 5 7 Z" fill="#D72638" />

      {/* Body side detail */}
      <path d="M5.5 10 L18.5 10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" />
      <path d="M5.5 18 L18.5 18" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />

      {/* Sidepods */}
      <rect x="4" y="14" width="16" height="5" rx="1.5" fill="#B02030" />
      <rect x="4.5" y="14.5" width="15" height="1" fill="rgba(255,255,255,0.06)" />

      {/* Air intake */}
      <rect x="9" y="6" width="6" height="2" rx="1" fill="#111" />
      <rect x="10" y="6.3" width="4" height="1.4" rx="0.5" fill="#0a0a0a" />

      {/* Cockpit */}
      <path d="M7 9 L17 9 Q18 9 18 10 L17 15 Q17 16 16 16 L8 16 Q7 16 7 15 L6 10 Q6 9 7 9 Z" fill="#0A0A0B" />

      {/* Steering wheel */}
      <circle cx="12" cy="11" r="2" fill="none" stroke="#444" strokeWidth="0.6" />
      <circle cx="12" cy="11" r="0.6" fill="#666" />

      {/* Driver helmet */}
      <ellipse cx="12" cy="10.5" rx="3" ry="2.8" fill="#fff" opacity="0.9" />
      <ellipse cx="12" cy="10.5" rx="2.5" ry="2.3" fill="#f0f0f0" />
      {/* Visor */}
      <path d="M9.5 9.5 Q12 8.5 14.5 9.5" stroke="#1a1a1a" strokeWidth="1" fill="#222" opacity="0.8" />
      <path d="M9.8 9.7 Q12 8.8 14.2 9.7" stroke="#333" strokeWidth="0.4" fill="none" />
      {/* Helmet stripe */}
      <path d="M12 7.5 L12 13" stroke="#D72638" strokeWidth="0.6" />
      <path d="M10.5 8 L13.5 8" stroke="#D72638" strokeWidth="0.3" />

      {/* Front nose */}
      <path d="M7 26 L17 26 L15 30 L9 30 Z" fill="#D72638" />
      <path d="M8 26.5 L16 26.5 L14.5 29.5 L9.5 29.5 Z" fill="#B02030" />

      {/* Front wing */}
      <rect x="3" y="29" width="18" height="2.5" rx="0.8" fill="#222" />
      <rect x="5" y="31.5" width="14" height="2" rx="0.5" fill="#D72638" />
      {/* Front wing flaps */}
      <rect x="3.5" y="29" width="1" height="4" fill="#D72638" opacity="0.7" />
      <rect x="19.5" y="29" width="1" height="4" fill="#D72638" opacity="0.7" />
      <rect x="5" y="29.3" width="14" height="0.3" fill="rgba(255,255,255,0.1)" />

      {/* Rear wheels */}
      <g transform={`translate(12, 21) rotate(${wheelSpin})`}>
        <circle cx="-9" cy="0" r="3.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
        <circle cx="-9" cy="0" r="2" fill="#111" />
        <circle cx="-9" cy="0" r="0.8" fill="#444" />
        <circle cx="9" cy="0" r="3.5" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
        <circle cx="9" cy="0" r="2" fill="#111" />
        <circle cx="9" cy="0" r="0.8" fill="#444" />
      </g>

      {/* Front wheels */}
      <g transform={`translate(12, 28) rotate(${wheelSpin})`}>
        <circle cx="-9" cy="0" r="3" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
        <circle cx="-9" cy="0" r="1.8" fill="#111" />
        <circle cx="-9" cy="0" r="0.7" fill="#444" />
        <circle cx="9" cy="0" r="3" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
        <circle cx="9" cy="0" r="1.8" fill="#111" />
        <circle cx="9" cy="0" r="0.7" fill="#444" />
      </g>

      {/* Exhaust pipes */}
      <rect x="4" y="22" width="1.5" height="3" rx="0.5" fill="#444" />
      <rect x="4.2" y="22" width="1" height="2.5" rx="0.3" fill="#333" />

      {/* Exhaust flame */}
      <motion.ellipse
        cx="4.75" cy="26"
        rx="1.5"
        fill="#D72638"
        initial={{ ry: 1.5, opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.6, 0.2], ry: [1.5, 2.5, 1.5] }}
        transition={{ duration: 0.12, repeat: Infinity }}
      />
      <motion.ellipse
        cx="4.75" cy="26.5"
        rx="0.8"
        fill="#FFB800"
        initial={{ ry: 1, opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.7, 0.3], ry: [1, 1.8, 1] }}
        transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
      />

      {/* Number */}
      <text x="12" y="20" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold" fontFamily="Rajdhani" opacity="0.7">07</text>

      {/* Front headlights (small LED dots) */}
      <circle cx="8" cy="29.5" r="0.5" fill="#FFB800" opacity="0.6" />
      <circle cx="16" cy="29.5" r="0.5" fill="#FFB800" opacity="0.6" />
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
    <div ref={trackRef} className="fixed left-0 top-0 bottom-0 w-10 md:w-12 z-30 pointer-events-none">
      {/* Simple white lane */}
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
          <GoKart speed={scrollVelocity} />
        </motion.div>
        {/* Exhaust smoke */}
        {scrollVelocity > 1 && (
          <div className="absolute -bottom-5 left-1 -translate-x-1/2 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/8"
                style={{ width: 2 + i, height: 2 + i }}
                animate={{
                  y: [0, 6 + i * 3],
                  x: [-1 + Math.random() * 2, -2 + Math.random() * 4],
                  opacity: [0.12, 0],
                  scale: [0.5, 2],
                }}
                transition={{ duration: 0.4, delay: i * 0.06, repeat: Infinity }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
