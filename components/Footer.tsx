import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone, FaClock, FaFlagCheckered } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-auto bg-background">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                KR <span className="gold">FUNVERSE</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Hyderabad&apos;s ultimate entertainment arena. Go karting, box cricket, indoor games — all under one roof.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaWhatsapp, href: "https://wa.me/919876543210", color: "text-emerald-400" },
                { icon: FaInstagram, href: "https://instagram.com/krfunverse", color: "text-pink-400" },
                { icon: FaPhone, href: "tel:+919876543210", color: "accent-60" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center ${s.color} hover:border-white/10 transition-colors`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Activities", "Packages", "Events", "Gallery", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              Activities
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Go Karting", href: "/activities/go-karting" },
                { label: "Box Cricket", href: "/activities/box-cricket" },
                { label: "Indoor Games", href: "/activities/indoor-games" },
              ].map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-white/40 text-sm hover:text-white/70 transition-colors flex items-center gap-2">
                    <FaFlagCheckered className="gold-40 text-[10px]" />
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/40">
                <FaMapMarkerAlt className="gold-60 mt-1 shrink-0" />
                Rampally, Yamnapmet, Ghatkesar, Hyderabad
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <FaPhone className="gold-60 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <FaClock className="gold-60 shrink-0" />
                10:00 AM — 9:00 PM (All days)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © 2024 KR Funverse. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
