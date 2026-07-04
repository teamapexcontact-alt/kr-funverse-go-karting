"use client";

import { motion } from "framer-motion";

interface GoKartVehicleProps {
  className?: string;
  speed?: number;
}

export default function GoKartVehicle({ className = "", speed = 0 }: GoKartVehicleProps) {
  const wheelRotate = speed * 3;

  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* === SHADOW === */}
      <ellipse cx="120" cy="108" rx="100" ry="6" fill="rgba(0,0,0,0.4)" />

      {/* === REAR WING ASSEMBLY === */}
      <g>
        {/* Main wing plate */}
        <rect x="8" y="28" width="6" height="44" rx="1.5" fill="#0A0A0B" />
        <rect x="6" y="22" width="10" height="8" rx="2" fill="#D72638" />
        <rect x="7" y="20" width="8" height="3" rx="1" fill="#fff" opacity="0.6" />
        {/* Wing endplates */}
        <rect x="4" y="24" width="2" height="6" rx="0.5" fill="#D72638" opacity="0.8" />
        <rect x="16" y="24" width="2" height="6" rx="0.5" fill="#D72638" opacity="0.8" />
      </g>

      {/* === ENGINE COVER === */}
      <path
        d="M28 44 L28 72 Q28 76 32 76 L50 76 Q54 76 54 72 L54 44 Z"
        fill="#1A1A1A"
      />
      {/* Engine vents */}
      <rect x="32" y="50" width="18" height="2" rx="0.5" fill="#111" />
      <rect x="32" y="55" width="14" height="1.5" rx="0.5" fill="#111" />
      <rect x="32" y="60" width="16" height="1.5" rx="0.5" fill="#111" />
      {/* Heat glow */}
      <motion.rect
        x="30" y="70" width="20" height="3" rx="1"
        fill="#D72638"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      />

      {/* === MAIN MONOCOQUE BODY === */}
      <path
        d="M40 40 L185 38 Q198 38 202 48 L206 62 Q208 72 202 76 L40 78 Q32 78 30 72 L26 52 Q24 44 30 40 Z"
        fill="#D72638"
      />
      {/* Body highlight */}
      <path
        d="M45 44 L180 42"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Sidepod curve accent */}
      <path
        d="M60 60 L140 60"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        fill="none"
      />

      {/* === COCKPIT === */}
      <path
        d="M70 36 L128 36 Q134 36 136 42 L138 54 Q138 58 134 60 L70 60 Q66 60 64 56 L60 44 Q58 38 64 36 Z"
        fill="#0A0A0B"
      />
      {/* Cockpit padding */}
      <path
        d="M68 38 L130 38 Q134 38 135 42 L137 54 Q137 57 134 58 L68 58 Q65 58 63 55 L62 42 Q61 38 65 38 Z"
        fill="#111"
      />

      {/* === WINDSHIELD === */}
      <path
        d="M124 37 L132 37 Q136 37 138 40 L141 52 Q142 55 140 56 L124 56 Q122 56 121 53 L118 40 Q117 37 120 37 Z"
        fill="rgba(120,200,255,0.12)"
        stroke="rgba(120,200,255,0.2)"
        strokeWidth="0.8"
      />
      {/* Windshield reflection */}
      <path
        d="M126 39 L130 39 Q132 39 133 41 L135 48"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.8"
        fill="none"
      />

      {/* === STEERING WHEEL === */}
      <ellipse cx="110" cy="48" rx="4" ry="2" fill="#1A1A1A" opacity="0.5" />

      {/* === DRIVER HELMET === */}
      <g>
        {/* Helmet base */}
        <ellipse cx="98" cy="44" rx="14" ry="12" fill="#D72638" />
        <ellipse cx="98" cy="43" rx="13" ry="11" fill="#CC1515" />
        {/* Visor */}
        <path
          d="M86 40 Q88 35 98 34 Q108 35 110 40 L109 45 Q108 49 98 49 Q88 49 87 45 Z"
          fill="#1A1A1A"
        />
        {/* Visor reflection */}
        <path
          d="M90 38 Q92 36 98 35 Q104 36 106 38"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Helmet center stripe */}
        <path d="M98 32 L98 55" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
        {/* Helmet top vents */}
        <rect x="95" y="33" width="6" height="1" fill="#111" opacity="0.5" />
        <rect x="95" y="35" width="4" height="1" fill="#111" opacity="0.5" />
      </g>

      {/* === FRONT WING ASSEMBLY === */}
      <g>
        {/* Main wing */}
        <rect x="198" y="34" width="24" height="48" rx="4" fill="#1A1A1A" />
        <rect x="204" y="28" width="12" height="6" rx="2" fill="#D72638" />
        <rect x="206" y="26" width="8" height="3" rx="1" fill="#fff" opacity="0.5" />
        {/* Endplates */}
        <rect x="218" y="36" width="4" height="44" rx="1.5" fill="#D72638" opacity="0.9" />
        <rect x="200" y="36" width="2" height="44" rx="1" fill="#111" />
        {/* Turning vanes */}
        <rect x="220" y="42" width="2" height="4" fill="#fff" opacity="0.3" />
        <rect x="220" y="52" width="2" height="4" fill="#fff" opacity="0.3" />
        <rect x="220" y="62" width="2" height="4" fill="#fff" opacity="0.3" />
      </g>

      {/* === NOSE CONE === */}
      <path
        d="M185 44 L204 46 L206 64 L204 72 L185 70 Z"
        fill="#CC1515"
      />
      {/* Nose tip */}
      <path
        d="M200 46 L210 47 L211 54 L210 60 L200 61 Z"
        fill="#D72638"
        opacity="0.8"
      />

      {/* === SIDEPODS (Side intakes) === */}
      <path
        d="M55 64 L90 64 L92 72 L58 74 Z"
        fill="#CC1515"
      />
      <path
        d="M145 64 L178 64 L180 72 L148 74 Z"
        fill="#CC1515"
      />
      {/* Sidepod air intakes */}
      <ellipse cx="62" cy="65" rx="4" ry="3" fill="#111" />
      <ellipse cx="170" cy="65" rx="4" ry="3" fill="#111" />

      {/* === EXHAUST SYSTEM === */}
      <g>
        {/* Exhaust pipe */}
        <path d="M34 76 L22 82 L18 84" stroke="#444" strokeWidth="2" fill="none" />
        {/* Flame effects */}
        <motion.ellipse
          cx="16" cy="86"
          rx="6" ry="4"
          fill="#D72638"
          animate={{ opacity: [0.2, 0.6, 0.2], rx: [6, 9, 6] }}
          transition={{ duration: 0.12, repeat: Infinity }}
        />
        <motion.ellipse
          cx="12" cy="88"
          rx="5" ry="3"
          fill="#FF4444"
          animate={{ opacity: [0.1, 0.4, 0.1], rx: [5, 7, 5] }}
          transition={{ duration: 0.15, repeat: Infinity, delay: 0.05 }}
        />
        <motion.ellipse
          cx="9" cy="89"
          rx="4" ry="2"
          fill="#FF6666"
          animate={{ opacity: [0.05, 0.3, 0.05], rx: [3, 5, 3] }}
          transition={{ duration: 0.18, repeat: Infinity, delay: 0.1 }}
        />
      </g>

      {/* === RACING NUMBER === */}
      <rect x="82" y="62" width="34" height="12" rx="3" fill="rgba(0,0,0,0.3)" />
      <text
        x="99"
        y="72"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
        fontFamily="Rajdhani, sans-serif"
        opacity="0.95"
      >
        07
      </text>

      {/* === HEADLIGHTS === */}
      <motion.ellipse
        cx="222" cy="48" rx="4" ry="3"
        fill="#fff"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      />
      <motion.ellipse
        cx="222" cy="66" rx="4" ry="3"
        fill="#fff"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
      />

      {/* === BRAKE LIGHTS === */}
      <motion.ellipse
        cx="28" cy="50" rx="2" ry="3" fill="#D72638"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />

      {/* === REAR WHEELS === */}
      <g transform={`translate(34, 96) rotate(${wheelRotate})`}>
        <circle cx="0" cy="0" r="16" fill="#0A0A0B" />
        <circle cx="0" cy="0" r="14" fill="#1A1A1A" />
        <circle cx="0" cy="0" r="12" fill="#222" />
        {/* Tyre tread */}
        <line x1="0" y1="-16" x2="0" y2="-12" stroke="#333" strokeWidth="2" />
        <line x1="0" y1="12" x2="0" y2="16" stroke="#333" strokeWidth="2" />
        <line x1="-16" y1="0" x2="-12" y2="0" stroke="#333" strokeWidth="2" />
        <line x1="12" y1="0" x2="16" y2="0" stroke="#333" strokeWidth="2" />
        <line x1="-11" y1="-11" x2="-8" y2="-8" stroke="#333" strokeWidth="1.5" />
        <line x1="8" y1="8" x2="11" y2="11" stroke="#333" strokeWidth="1.5" />
        <line x1="-11" y1="11" x2="-8" y2="8" stroke="#333" strokeWidth="1.5" />
        <line x1="8" y1="-8" x2="11" y2="-11" stroke="#333" strokeWidth="1.5" />
        {/* Rim */}
        <circle cx="0" cy="0" r="6" fill="#333" />
        <circle cx="0" cy="0" r="4" fill="#444" />
        {/* Center hub */}
        <circle cx="0" cy="0" r="2" fill="#D72638" />
      </g>

      {/* === FRONT WHEELS === */}
      <g transform={`translate(205, 96) rotate(${wheelRotate})`}>
        <circle cx="0" cy="0" r="14" fill="#0A0A0B" />
        <circle cx="0" cy="0" r="12" fill="#1A1A1A" />
        <circle cx="0" cy="0" r="10" fill="#222" />
        <line x1="0" y1="-14" x2="0" y2="-10" stroke="#333" strokeWidth="2" />
        <line x1="0" y1="10" x2="0" y2="14" stroke="#333" strokeWidth="2" />
        <line x1="-14" y1="0" x2="-10" y2="0" stroke="#333" strokeWidth="2" />
        <line x1="10" y1="0" x2="14" y2="0" stroke="#333" strokeWidth="2" />
        <line x1="-10" y1="-10" x2="-7" y2="-7" stroke="#333" strokeWidth="1.5" />
        <line x1="7" y1="7" x2="10" y2="10" stroke="#333" strokeWidth="1.5" />
        <line x1="-10" y1="10" x2="-7" y2="7" stroke="#333" strokeWidth="1.5" />
        <line x1="7" y1="-7" x2="10" y2="-10" stroke="#333" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" fill="#333" />
        <circle cx="0" cy="0" r="3" fill="#444" />
        <circle cx="0" cy="0" r="1.5" fill="#D72638" />
      </g>
    </svg>
  );
}
