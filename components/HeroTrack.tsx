"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import GoKartVehicle from "./GoKartVehicle";

export default function HeroTrack() {
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);
  const startTime = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const angleRef = useRef(0);
  const kartPosRef = useRef({ x: 0, y: 0, rot: 0 });

  const [kartX, setKartX] = useState(0);
  const [kartY, setKartY] = useState(0);
  const [kartRot, setKartRot] = useState(0);
  const [kartSpeed, setKartSpeed] = useState(0);

  const smoothX = useSpring(0, { stiffness: 200, damping: 25 });
  const smoothY = useSpring(0, { stiffness: 200, damping: 25 });
  const smoothRot = useSpring(0, { stiffness: 150, damping: 20 });
  const smoothSpeed = useSpring(0, { stiffness: 100, damping: 15 });

  const rx = 140;
  const ry = 44;
  const orbitDuration = 6; // seconds per lap

  useEffect(() => {
    setMounted(true);
    startTime.current = Date.now();
    lastTime.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const dt = (now - lastTime.current) / 1000;
      lastTime.current = now;

      // Advance angle smoothly
      angleRef.current += (360 / orbitDuration) * dt;
      const theta = (angleRef.current * Math.PI) / 180;

      // Position on ellipse
      const x = rx * Math.cos(theta);
      const y = ry * Math.sin(theta);

      // Tangent = direction of travel (counterclockwise)
      // dx = -rx * sin(θ), dy = ry * cos(θ)
      const rotDeg = (Math.atan2(ry * Math.cos(theta), -rx * Math.sin(theta)) * 180) / Math.PI;

      // Speed = derivative magnitude for physics feel
      const dx = -rx * Math.sin(theta);
      const dy = ry * Math.cos(theta);
      const speed = Math.sqrt(dx * dx + dy * dy) / 20;

      kartPosRef.current = { x, y, rot: rotDeg };
      setKartX(x);
      setKartY(y);
      setKartRot(rotDeg);
      setKartSpeed(speed);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [rx, ry, orbitDuration]);

  useEffect(() => {
    smoothX.set(kartX);
    smoothY.set(kartY);
    smoothRot.set(kartRot);
    smoothSpeed.set(kartSpeed);
  }, [kartX, kartY, kartRot, kartSpeed, smoothX, smoothY, smoothRot, smoothSpeed]);

  if (!mounted) return null;

  return (
    <div className="relative w-[340px] h-[140px] md:w-[440px] md:h-[180px] mx-auto">
      <svg
        viewBox="-160 -70 320 140"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer edge glow */}
        <ellipse cx="0" cy="0" rx={rx + 14} ry={ry + 14} fill="none" stroke="rgba(232,54,46,0.04)" strokeWidth="2" />
        {/* Track surface */}
        <ellipse cx="0" cy="0" rx={rx} ry={ry} fill="rgba(232,54,46,0.015)" stroke="rgba(232,54,46,0.08)" strokeWidth="0.5" />
        {/* Inner edge */}
        <ellipse cx="0" cy="0" rx={rx - 14} ry={ry - 14} fill="none" stroke="rgba(232,54,46,0.06)" strokeWidth="1" />

        {/* Center lane dashes */}
        <ellipse cx="0" cy="0" rx={rx - 7} ry={ry - 7} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3 5" />

        {/* Start/finish */}
        <line x1={rx} y1={0} x2={rx - 14} y2={0} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="3 3" />

        {/* Checkered flag */}
        <g transform={`translate(${rx - 5}, ${-ry - 14})`}>
          <rect x="0" y="0" width="10" height="7" fill="#fff" opacity="0.3" />
          <rect x="0" y="0" width="3.5" height="3.5" fill="#111" />
          <rect x="7" y="0" width="3.5" height="3.5" fill="#111" />
          <rect x="3.5" y="3.5" width="3.5" height="3.5" fill="#111" />
        </g>

        {/* Corner markers */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const mx = (rx - 20) * Math.cos(rad);
          const my = (ry - 20) * Math.sin(rad);
          const tangent = Math.atan2(ry * Math.cos(rad), -rx * Math.sin(rad));
          return (
            <line key={deg} x1={mx - 2} y1={my} x2={mx + 2} y2={my} stroke="rgba(232,54,46,0.05)" strokeWidth="0.5" transform={`rotate(${tangent * 180 / Math.PI} ${mx} ${my})`} />
          );
        })}
      </svg>

      {/* Kart — springs smooth the position/rotation */}
      <motion.div
        className="absolute"
        style={{
          left: smoothX.get() !== 0 ? `calc(50% + ${smoothX.get()}px)` : "50%",
          top: smoothY.get() !== 0 ? `calc(50% + ${smoothY.get()}px)` : "50%",
          x: "-50%",
          y: "-50%",
          rotate: smoothRot.get(),
        }}
      >
        <GoKartVehicle
          className="w-[60px] h-[30px] md:w-[72px] md:h-[36px]"
          speed={kartSpeed}
        />

        {/* Engine vibration blur at speed */}
        {kartSpeed > 1.5 && (
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ opacity: [0, 0.15, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            style={{ background: "rgba(232,54,46,0.08)", filter: "blur(4px)" }}
          />
        )}
      </motion.div>

      {/* Shadow under kart */}
      <motion.div
        className="absolute w-5 h-1.5 rounded-full bg-black/25 pointer-events-none"
        style={{
          left: smoothX.get() !== 0 ? `calc(50% + ${smoothX.get() * 0.85}px)` : "50%",
          top: smoothY.get() !== 0 ? `calc(50% + ${smoothY.get() * 0.85}px + 22px)` : "50%",
          x: "-50%",
          y: "-50%",
          opacity: Math.max(0.1, 0.6 - kartSpeed * 0.05),
          scale: 0.8 + kartSpeed * 0.04,
        }}
      />

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-[7px] font-bold tracking-[0.3em] text-accent/30 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            CIRCUIT
          </div>
        </div>
      </div>
    </div>
  );
}
