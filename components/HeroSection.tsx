"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaStar, FaWhatsapp, FaInstagram, FaPhone, FaMapMarkerAlt, FaFlagCheckered, FaTachometerAlt, FaBolt } from "react-icons/fa";

export default function HeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      {/* Track bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/20" />
        <div className="absolute bottom-3 left-0 right-0 h-px bg-white/[0.04]" />
      </div>

      {/* Speed lines */}
      {phase >= 1 && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"
          style={{ top: `${25 + i * 18}%` }}
          initial={{ width: 0, x: "-50%" }}
          animate={{ width: "100%", x: "150%", opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        />
      ))}

      {/* Content */}
      <div className="container-custom relative z-30 pt-28 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Google Rating */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-surface/60 border border-white/5 rounded-full px-3 py-1.5 mb-5 backdrop-blur-sm"
          >
            <span className="text-white/60 text-xs flex items-center gap-1" style={{ fontFamily: "var(--font-heading)" }}>
              <FaStar className="text-accent" size={10} />
              5.0 on Google
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6"
          >
            WEAR YOUR
            <br />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-accent inline-flex items-center gap-3"
            >
              HELMET.
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <FaBolt size={24} className="text-accent" />
              </motion.span>
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              START YOUR
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-accent inline-flex items-center gap-3"
            >
              ENGINE.
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="inline-block"
              >
                <FaBolt size={24} className="text-accent" />
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-white/50 text-base md:text-lg max-w-lg mx-auto mb-3"
          >
            Hyderabad&apos;s Ultimate Entertainment Arena
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-accent/70 text-xs font-semibold tracking-[0.25em] uppercase mb-7"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            THE TRACK IS WAITING.
          </motion.p>

          {/* Activity tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-wrap gap-2 justify-center mb-7"
          >
            {["GO KARTING", "BOX CRICKET", "INDOOR GAMES"].map((activity, i) => (
              <motion.span
                key={activity}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface/60 border border-white/5 text-white/60 text-xs font-medium"
              >
                <FaFlagCheckered className="text-accent" size={8} />
                {activity}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Button href="/booking" variant="primary" size="lg">
              <FaTachometerAlt className="mr-1.5" size={14} />
              START YOUR RACE
            </Button>
            <Button href="/activities" variant="secondary" size="lg">
              <FaFlagCheckered className="mr-1.5" size={14} />
              CHOOSE YOUR ADVENTURE
            </Button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-6 inline-flex items-center gap-1.5 text-white/30 text-xs"
          >
            <FaMapMarkerAlt className="text-accent" size={10} />
            Rampally, Yamnapmet, Ghatkesar, Hyderabad
          </motion.div>
        </div>
      </div>

      {/* Floating social */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30"
      >
        {[
          { icon: FaWhatsapp, color: "text-emerald-400", bg: "bg-emerald-500/10", href: "https://wa.me/919876543210" },
          { icon: FaInstagram, color: "text-pink-400", bg: "bg-pink-500/10", href: "https://instagram.com/krfunverse" },
          { icon: FaPhone, color: "text-accent", bg: "bg-accent/10", href: "tel:+919876543210" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`w-9 h-9 rounded-full ${item.bg} border border-white/5 flex items-center justify-center ${item.color} hover:scale-110 transition-transform`}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3 + i * 0.1 }}
            >
              <Icon size={14} />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-30" />
    </section>
  );
}
