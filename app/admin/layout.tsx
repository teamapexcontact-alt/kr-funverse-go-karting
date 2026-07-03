"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaTachometerAlt, FaEdit, FaTicketAlt, FaTrophy, FaSignOutAlt, FaBars, FaTimes, FaFlagCheckered } from "react-icons/fa";

const navItems = [
  { href: "/admin", icon: FaTachometerAlt, label: "Dashboard" },
  { href: "/admin/content", icon: FaEdit, label: "Content Editor" },
  { href: "/admin/coupons", icon: FaTicketAlt, label: "Coupons" },
  { href: "/admin/leaderboard", icon: FaTrophy, label: "Leaderboard" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:sticky top-0 left-0 z-50 h-dvh w-64 bg-surface border-r border-white/5 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        {/* Brand */}
        <div className="p-5 border-b border-white/5">
          <Link href="/admin" className="flex items-center gap-2.5">
            <FaFlagCheckered className="text-accent" size={18} />
            <div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>KR FUNVERSE</div>
              <div className="text-[10px] text-white/30 tracking-widest uppercase">Admin Panel</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon size={16} />
                <span style={{ fontFamily: "var(--font-heading)" }}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <Link href="/" className="flex items-center gap-2 text-white/30 hover:text-white/50 text-xs transition-colors">
            <FaSignOutAlt size={12} />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-dvh">
        {/* Top bar */}
        <header className="h-14 border-b border-white/5 flex items-center px-4 md:px-6 bg-surface/50 backdrop-blur-sm sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white/50 hover:text-white mr-3">
            <FaBars size={18} />
          </button>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white/30">/</span>
            <span className="text-white/60 capitalize" style={{ fontFamily: "var(--font-heading)" }}>
              {pathname === "/admin" ? "Dashboard" : pathname.split("/").pop()}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-accent text-xs font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
