"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaMapMarkerAlt, FaClipboardList, FaTshirt, FaInfoCircle,
  FaFlagCheckered, FaTrophy, FaCamera
} from "react-icons/fa";

const steps = [
  { icon: FaMapMarkerAlt, title: "ARRIVE", detail: "Find us at Rampally, Ghatkesar. Free parking available." },
  { icon: FaClipboardList, title: "REGISTER", detail: "Fill a quick form, sign the waiver, and you are in." },
  { icon: FaTshirt, title: "GEAR UP", detail: "Sanitized helmets, gloves, and racing suits provided." },
  { icon: FaInfoCircle, title: "BRIEFING", detail: "Marshals walk you through flags, rules & racing line." },
  { icon: FaFlagCheckered, title: "RACE / PLAY", detail: "8 laps of pure adrenaline. Push for your best time." },
  { icon: FaTrophy, title: "LEADERBOARD", detail: "Times posted live. Can you take P1?" },
  { icon: FaCamera, title: "CELEBRATE", detail: "Photos, trophies, and bragging rights await." },
];

function degToPos(deg: number, rx: number, ry: number) {
  const a = (deg * Math.PI) / 180;
  return { x: rx * Math.cos(a), y: ry * Math.sin(a) };
}

function toPct(x: number, y: number) {
  return {
    l: `${((x + 240) / 480) * 100}%`,
    t: `${((y + 150) / 300) * 100}%`,
  };
}

const checkpointAngles = [0, 51, 103, 154, 206, 257, 309];

export default function Timeline() {
  const RX = 180;
  const RY = 100;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [kartDeg, setKartDeg] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const displayIdx = hoverIndex !== null ? hoverIndex : activeIndex;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start center", "end center"] });
  const kartAngle = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const u = scrollYProgress.on("change", (v) => setProgress(Math.round(v * 100)));
    return () => u();
  }, [scrollYProgress]);

  useEffect(() => {
    const u = kartAngle.on("change", (v) => {
      setKartDeg(v);
      let closest = 0, best = Infinity;
      checkpointAngles.forEach((a, i) => {
        let d = Math.abs(v - a);
        if (d > 180) d = 360 - d;
        if (d < best) { best = d; closest = i; }
      });
      if (best < 22) setActiveIndex(closest);
    });
    return () => u();
  }, [kartAngle]);

  const kartPos = degToPos(kartDeg, RX, RY);

  const checkpoints = checkpointAngles.map((angle) => {
    const ck = degToPos(angle, RX, RY);
    return { ck, pCk: toPct(ck.x, ck.y) };
  });

  return (
    <section ref={sectionRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-dvh flex items-center justify-center overflow-hidden bg-carbon">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,30,30,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle at 20px 20px,rgba(255,255,255,0.03)1px,transparent 1px)`, backgroundSize: "40px 40px" }} />

        {/* Header */}
        <div className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 text-center z-30 pointer-events-none">
          <h2 className="text-xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="chrome-80">EXPERIENCE THE </span>
            <span className="gold">THRILL</span>
          </h2>
          <p className="chrome-40 text-xs mt-1 tracking-widest uppercase">Scroll to advance — hover checkpoints</p>
        </div>

        {/* Single centered container for track + checkpoints */}
        <div className="relative w-full max-w-[520px] md:max-w-[600px] mx-auto" style={{ aspectRatio: "480 / 300" }}>
          {/* Track SVG */}
          <svg viewBox="-240 -150 480 300" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            <ellipse cx="0" cy="0" rx={RX + 16} ry={RY + 10} fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx={RX} ry={RY} fill="rgba(255,30,30,0.006)" stroke="rgba(255,30,30,0.03)" strokeWidth="0.5" />
            <ellipse cx="0" cy="0" rx={RX - 16} ry={RY - 10} fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx={RX - 8} ry={RY - 5} fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" strokeDasharray="3 5" />
            <line x1={RX-16} y1={0} x2={RX} y2={0} stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="2 3" />
            <g transform={`translate(${RX+3}, -6)`}>{[0,1,2,3].map(j => <rect key={j} x={j*3} y={0} width={3} height={3} fill={j%2===0?"rgba(255,255,255,0.12)":"rgba(255,30,30,0.12)"}/>)}</g>
            <g transform={`translate(${kartPos.x}, ${kartPos.y}) rotate(${kartDeg + 90})`}>
              <rect x="-7" y="-3.5" width="14" height="7" rx="2.5" fill="#D72638" />
              <rect x="-5" y="-2.5" width="10" height="5" rx="1.5" fill="#111" />
              <circle cx="3.5" cy="0" r="2.5" fill="#fff" /><circle cx="3.5" cy="0" r="1.5" fill="#111" />
              <rect x="-8" y="-4.5" width="2" height="9" rx="0.5" fill="#fff" opacity="0.7" />
              <rect x="6" y="-2.5" width="1" height="5" rx="0.5" fill="#fff" opacity="0.5" />
              {[-5,3].map(x => [
                <circle key={`${x}t`} cx={x} cy="-4" r="1.5" fill="#222" stroke="#444" strokeWidth="0.3" />,
                <circle key={`${x}b`} cx={x} cy="4" r="1.5" fill="#222" stroke="#444" strokeWidth="0.3" />
              ])}
            </g>
          </svg>

          {/* Checkpoint buttons — on the track */}
          {checkpoints.map((cp, i) => {
            const isCurrent = displayIdx === i;
            const isActive = activeIndex >= i;
            const Icon = steps[i].icon;

            return (
              <button
                key={i}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setHoverIndex(hoverIndex === i ? null : i)}
                className="absolute z-25 -translate-x-1/2 -translate-y-1/2 pointer-events-auto group"
                style={{ left: cp.pCk.l, top: cp.pCk.t }}
              >
                <div className="relative flex items-center justify-center">
                  {isCurrent && (
                    <>
                      <motion.span className="absolute rounded-full border border-accent/30" animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ duration: 1.8, repeat: Infinity }} style={{ width: 36, height: 36 }} />
                      <motion.span className="absolute rounded-full border border-accent/15" animate={{ scale: [1, 2.5], opacity: [0.3, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} style={{ width: 36, height: 36 }} />
                    </>
                  )}
                  <div className={`rounded-full flex items-center justify-center transition-all duration-500 ${
                    isCurrent
                      ? "bg-accent shadow-[0_0_25px_rgba(255,30,30,0.4)] scale-110"
                      : isActive
                      ? "bg-accent/70 shadow-[0_0_10px_rgba(255,30,30,0.15)]"
                      : "bg-surface/90 border border-white/10 hover:border-white/30"
                  }`} style={{ width: 32, height: 32 }}>
                    <Icon size={isCurrent ? 14 : isActive ? 12 : 10} className={`transition-all duration-300 ${isCurrent || isActive ? "text-white" : "text-white/30 group-hover:text-white/60"}`} />
                  </div>
                  <div className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-bold transition-all duration-300 ${
                    isCurrent ? "bg-white text-accent scale-110 shadow-lg" : "bg-accent/40 text-white/70"
                  }`}>{i + 1}</div>
                </div>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap transition-all duration-300 ${
                  isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                }`}>
                  <span className={`text-[7px] font-bold tracking-wider ${isCurrent ? "accent-60" : "chrome-40"}`} style={{ fontFamily: "var(--font-heading)" }}>
                    {steps[i].title}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Content card — desktop: positioned near checkpoint; mobile: fixed bottom panel */}
          {isMobile ? (
            /* Mobile: fixed panel at very bottom of screen */
            <motion.div
              key={displayIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: displayIdx >= 0 ? 1 : 0, y: displayIdx >= 0 ? 0 : 16 }}
              className="absolute bottom-3 left-3 right-3 z-30 pointer-events-none"
            >
              {displayIdx >= 0 && (
                <div className="bg-black/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl px-5 py-4 shadow-2xl shadow-black/80 max-w-sm mx-auto">
                  <div className="flex items-center gap-2 mb-2">
                    {(() => { const Icon = steps[displayIdx].icon; return <Icon className="gold-80" size={12} />; })()}
                    <span className="gold-60 text-[9px] font-semibold tracking-wider uppercase">Step 0{displayIdx + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>{steps[displayIdx].title}</h3>
                  <p className="chrome-60 text-xs mt-1 leading-relaxed">{steps[displayIdx].detail}</p>
                </div>
              )}
            </motion.div>
          ) : (
            /* Desktop: positioned near checkpoint on track */
            checkpoints.map((cp, i) => {
              const isCurrent = displayIdx === i;
              if (!isCurrent) return null;
              const ct = degToPos(checkpointAngles[i], RX + 50, RY + 25);
              const pct = toPct(ct.x, ct.y);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ left: pct.l, top: pct.t }}
                >
                  <div className="bg-black/80 backdrop-blur-2xl border border-white/[0.08] rounded-xl px-4 py-3 shadow-2xl shadow-black/40 w-[170px]">
                    <div className="flex items-center gap-1.5 mb-1">
                      {(() => { const Icon = steps[i].icon; return <Icon className="gold-80" size={10} />; })()}
                      <span className="gold-60 text-[8px] font-semibold tracking-wider uppercase">Step 0{i + 1}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{steps[i].title}</h3>
                    <p className="chrome-60 text-[9px] mt-0.5 leading-relaxed">{steps[i].detail}</p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Progress — hidden on mobile (detail panel is there) */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 items-center gap-3 z-30 hidden md:flex">
          <motion.div className="w-20 h-[2px] rounded-full bg-white/5 relative overflow-hidden">
            <motion.div className="h-full rounded-full bg-gold-40" style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} />
          </motion.div>
          <span className="text-[10px] chrome-40 font-mono">{progress}%</span>
        </div>

        <motion.div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-30" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
            <path d="M8 2v10M4 8l4 4 4-4" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
