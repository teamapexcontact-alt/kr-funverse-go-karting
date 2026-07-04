"use client";

import { motion } from "framer-motion";
import { FaCheck, FaCrown, FaStar, FaBolt, FaCouch, FaUtensils, FaTshirt, FaCamera, FaIdBadge, FaTicketAlt, FaTrophy, FaImage } from "react-icons/fa";
import Button from "./Button";
import type { Package } from "@/data/packages";

interface PricingCardProps {
  pkg: Package;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  FaCouch, FaUtensils, FaTshirt, FaCamera, FaIdBadge, FaTicketAlt, FaTrophy, FaImage,
};

const tierConfig = {
  basic: {
    border: "border-white/5 hover:border-white/10",
    badge: null as string | null,
    buttonVariant: "outline" as const,
    glow: "",
    bg: "bg-white/[0.02] backdrop-blur-sm",
    scale: "",
  },
  pro: {
    border: "border-steel/30",
    badge: "POPULAR",
    buttonVariant: "primary" as const,
    glow: "shadow-[0_0_40px_rgba(62,92,118,0.08)]",
    bg: "bg-white/[0.03] backdrop-blur-xl",
    scale: "",
  },
  ultra: {
    border: "border-accent/30",
    badge: "BEST VALUE",
    buttonVariant: "primary" as const,
    glow: "shadow-[0_0_80px_rgba(232,54,46,0.12)]",
    bg: "bg-white/[0.03] backdrop-blur-2xl",
    scale: "md:scale-105 md:-my-3",
  },
};

export default function PricingCard({ pkg }: PricingCardProps) {
  const cfg = tierConfig[pkg.tier];
  const isUltra = pkg.tier === "ultra";
  const isPro = pkg.tier === "pro";
  const ultraPerks = (pkg as any).perks || [];

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl border p-6 md:p-7 transition-all duration-500 ${cfg.border} ${cfg.glow} ${cfg.bg} ${cfg.scale}`}
    >
      {/* Glassmorphism inset highlight */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.06), inset 0 -1px 0 0 rgba(0,0,0,0.15)" }} />

      {/* Ultra: Animated glowing border */}
      {isUltra && (
        <motion.div
          className="absolute -inset-[1px] rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(232,54,46,0.3), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Clipped decorative glows */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {isUltra && (
          <>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-accent/8 rounded-full blur-xl" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            {/* Sparkle particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent/40 rounded-full"
                style={{ top: `${15 + i * 14}%`, right: `${5 + (i % 3) * 8}%` }}
                animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </>
        )}
        {isPro && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        )}
      </div>

      {/* Badge */}
      {cfg.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-5 py-1.5 rounded-full tracking-wider uppercase shadow-lg z-10 ${
          isUltra ? "bg-accent text-white" : "bg-coral text-white"
        }`}>
          {isUltra && (
            <motion.span
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              ★{" "}{cfg.badge}{" "}★
            </motion.span>
          )}
          {!isUltra && cfg.badge}
        </div>
      )}

      {/* Ultra: Champion's Experience label */}
      {isUltra && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-3"
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-accent/60" style={{ fontFamily: "var(--font-heading)" }}>
            Champion&apos;s Experience
          </span>
        </motion.div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          {isUltra && (
            <motion.div
              animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaCrown className="text-accent" size={20} />
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
        <div className="flex items-baseline gap-1">
          <span className="text-white/30 text-lg">₹</span>
          <span className={`font-black ${isUltra ? "text-6xl text-accent" : isPro ? "text-5xl text-white" : "text-4xl text-white/80"}`} style={{ fontFamily: "var(--font-heading)" }}>
            {pkg.price.toLocaleString("en-IN")}
          </span>
        </div>
        <span className="text-white/25 text-sm">/ {pkg.duration}</span>
      </div>

      {/* Ultra: Perks grid — 4x2 */}
      {isUltra && ultraPerks.length > 0 && (
        <div className="mb-5">
          <div className="text-[9px] font-semibold tracking-wider uppercase text-accent/50 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            VIP Perks Included
          </div>
          <div className="grid grid-cols-4 gap-2">
            {ultraPerks.map((perk: any) => {
              const PerkIcon = iconMap[perk.icon] || FaStar;
              return (
                <motion.div
                  key={perk.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-accent/[0.06] border border-accent/10 hover:border-accent/25 transition-colors cursor-default"
                >
                  <PerkIcon className="text-accent/70 text-sm" />
                  <span className="text-[7px] text-accent/50 text-center leading-tight font-medium">{perk.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Ultra: "Everything in Pro +" divider */}
      {isUltra && (
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-accent/10" />
          <span className="text-[8px] font-bold tracking-wider uppercase text-accent/40" style={{ fontFamily: "var(--font-heading)" }}>
            Everything in Pro +
          </span>
          <div className="h-px flex-1 bg-accent/10" />
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
              <FaStar className="mt-0.5 shrink-0 text-coral" size={10} />
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
        className={`w-full ${isUltra ? "bg-accent text-white hover:bg-accent-dark border-accent font-bold" : ""}`}
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
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.article>
  );
}
