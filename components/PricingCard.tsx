"use client";

import { motion } from "framer-motion";
import { FaCheck, FaCrown, FaStar, FaBolt, FaGem, FaCouch, FaUtensils, FaTshirt, FaCamera } from "react-icons/fa";
import Button from "./Button";
import type { Package } from "@/data/packages";

interface PricingCardProps {
  pkg: Package;
}

const tierConfig = {
  basic: {
    border: "border-white/8",
    badge: null as string | null,
    buttonVariant: "outline" as const,
    glow: "",
    bg: "bg-surface",
    scale: "",
  },
  pro: {
    border: "border-accent/30",
    badge: "POPULAR",
    buttonVariant: "primary" as const,
    glow: "shadow-[0_0_40px_rgba(255,30,30,0.1)]",
    bg: "bg-surface",
    scale: "",
  },
  ultra: {
    border: "border-yellow-500/50",
    badge: "BEST VALUE",
    buttonVariant: "primary" as const,
    glow: "shadow-[0_0_80px_rgba(255,200,0,0.15)]",
    bg: "bg-gradient-to-b from-surface via-surface to-yellow-500/5",
    scale: "md:scale-105 md:-my-3",
  },
};

const ultraPerks = [
  { icon: FaCouch, label: "VIP Lounge" },
  { icon: FaUtensils, label: "₹200 Meal" },
  { icon: FaTshirt, label: "Free Merch" },
  { icon: FaCamera, label: "Photo Booth" },
];

export default function PricingCard({ pkg }: PricingCardProps) {
  const cfg = tierConfig[pkg.tier];
  const isUltra = pkg.tier === "ultra";
  const isPro = pkg.tier === "pro";

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl border p-6 md:p-7 transition-all duration-500 ${cfg.border} ${cfg.glow} ${cfg.bg} ${cfg.scale} backdrop-blur-sm`}
    >
      {/* Clipped decorative glows */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {isUltra && (
          <>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-500/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-yellow-500/8 rounded-full blur-xl" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
          </>
        )}
        {isPro && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        )}
      </div>

      {/* Badge */}
      {cfg.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-5 py-1.5 rounded-full tracking-wider uppercase shadow-lg z-10 ${
          isUltra ? "bg-yellow-500 text-black" : "bg-accent text-white"
        }`}>
          {cfg.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          {isUltra && (
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <FaCrown className="text-yellow-500" size={18} />
            </motion.div>
          )}
          {isPro && <FaBolt className="text-accent" size={14} />}
          <h3 className={`font-bold text-white ${isUltra ? "text-2xl" : "text-xl"}`} style={{ fontFamily: "var(--font-heading)" }}>
            {pkg.name}
          </h3>
        </div>
        <p className="text-white/30 text-xs tracking-wider uppercase">{pkg.duration}</p>
      </div>

      {/* Price */}
      <div className="mb-5">
        <span className={`font-black ${isUltra ? "text-6xl text-yellow-500" : isPro ? "text-5xl text-white" : "text-4xl text-white/80"}`} style={{ fontFamily: "var(--font-heading)" }}>
          ₹{pkg.price.toLocaleString("en-IN")}
        </span>
        <span className="text-white/25 text-sm ml-1">/ {pkg.duration}</span>
      </div>

      {/* Ultra: Perks icons */}
      {isUltra && (
        <div className="grid grid-cols-4 gap-2 mb-5">
          {ultraPerks.map((perk) => {
            const PerkIcon = perk.icon;
            return (
              <div key={perk.label} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <PerkIcon className="text-yellow-500/70 text-sm" />
                <span className="text-[7px] text-yellow-500/50 text-center leading-tight">{perk.label}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Features */}
      <ul className="space-y-2.5 mb-8">
        {pkg.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={isUltra ? { opacity: 0, x: -8 } : undefined}
            animate={isUltra ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: i * 0.05 }}
            className={`flex items-start gap-2.5 text-sm ${isUltra ? "text-white/70" : "text-white/50"}`}
          >
            {isUltra ? (
              <FaStar className="mt-0.5 shrink-0 text-yellow-500" size={10} />
            ) : (
              <FaCheck className="mt-0.5 shrink-0 text-accent" size={11} />
            )}
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href="/booking"
        variant={cfg.buttonVariant}
        className={`w-full ${isUltra ? "bg-yellow-500 text-black hover:bg-yellow-400 border-yellow-500 font-bold" : ""}`}
      >
        {isUltra ? (
          <><FaCrown className="mr-1.5" size={13} /> Go Ultra</>
        ) : isPro ? (
          "Get Pro"
        ) : (
          "Choose Basic"
        )}
      </Button>

      {/* Ultra: bottom sparkle line */}
      {isUltra && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.article>
  );
}
