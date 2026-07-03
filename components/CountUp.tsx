"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function CountUp({ target, suffix = "", label }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black text-accent mb-1" style={{ fontFamily: "var(--font-heading)" }}>
        {target >= 10000 ? `${(count / 1000).toFixed(0)}K+` : `${count}${suffix}`}
      </div>
      <div className="text-white/40 text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}
