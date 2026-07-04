"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFlagCheckered, FaPhone } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "HOME" },
  {
    label: "ACTIVITIES",
    children: [
      { href: "/activities/go-karting", label: "Go Karting" },
      { href: "/activities/box-cricket", label: "Box Cricket" },
      { href: "/activities/indoor-games", label: "Indoor Games" },
    ],
  },
  { href: "/pricing", label: "PACKAGES" },
  { href: "/events", label: "EVENTS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      {/* Glassmorphism background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`} />

      {/* Steel blue accent line at top — only when scrolled */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] transition-all duration-700 ${
        scrolled
          ? "bg-gradient-to-r from-transparent via-steel/30 to-transparent opacity-100"
          : "opacity-0"
      }`} />

      <div className="container-custom flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <FaFlagCheckered className="gold-80 text-xl group-hover:gold transition-colors" />
            <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span
            className="text-xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            KR{" "}
            <span className="gold-80 group-hover:gold transition-colors">FUNVERSE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="px-4 py-2 text-[13px] font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-wider">
                  {link.label}
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/70 backdrop-blur-2xl border border-white/[0.08] rounded-xl p-1.5 min-w-[180px] shadow-2xl shadow-black/50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Phone + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden md:inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs transition-colors"
          >
            <FaPhone size={10} />
            <span className="font-medium">+91 98765 43210</span>
          </a>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <Link
            href="/booking"
            className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(232,54,46,0.15)] hover:shadow-[0_0_25px_rgba(232,54,46,0.3)] uppercase tracking-wider"
          >
            BOOK YOUR SLOT
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/60 hover:text-white p-2 transition-colors"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — glassmorphism */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden relative z-10 bg-black/70 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <nav className="container-custom py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <span className="block px-4 py-3 text-sm font-semibold chrome-40 uppercase tracking-wider">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-8 py-2.5 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/booking"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-accent hover:bg-accent-dark text-white text-xs font-bold px-5 py-3 rounded-xl text-center uppercase tracking-wider"
              >
                BOOK YOUR SLOT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
