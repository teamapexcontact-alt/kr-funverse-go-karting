"use client";

import { motion } from "framer-motion";
import { FaFlagCheckered, FaUsers, FaStar, FaTicketAlt, FaEdit, FaTrophy, FaArrowUp, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const stats = [
  { icon: FaUsers, label: "Total Bookings", value: "1,247", change: "+12%", color: "text-accent" },
  { icon: FaStar, label: "Avg. Rating", value: "5.0", change: "+0.2", color: "text-yellow-400" },
  { icon: FaTicketAlt, label: "Active Coupons", value: "8", change: "+3", color: "text-emerald-400" },
  { icon: FaTrophy, label: "Leaderboard Records", value: "42", change: "+5", color: "text-accent" },
];

const quickActions = [
  { icon: FaEdit, label: "Edit Offers", href: "/admin/content", desc: "Update banners, dates & page text" },
  { icon: FaTicketAlt, label: "Generate Coupon", href: "/admin/coupons", desc: "Create discount codes for visitors" },
  { icon: FaTrophy, label: "Manage Records", href: "/admin/leaderboard", desc: "Add go karting lap records" },
  { icon: FaCalendarAlt, label: "View Bookings", href: "/booking", desc: "See all incoming reservations" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="text-accent">Dashboard</span>
        </h1>
        <p className="text-white/30 text-sm mt-1">Welcome back, Admin. Here&apos;s your venue overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-surface rounded-xl border border-white/5 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={stat.color} size={18} />
                <span className="flex items-center gap-0.5 text-[10px] text-emerald-400">
                  <FaArrowUp size={8} />
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
              <div className="text-[11px] text-white/30 mt-0.5">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-white/50 mb-4 tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)" }}>Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} href={action.href}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-surface rounded-xl border border-white/5 p-5 hover:border-accent/20 hover:bg-accent/[0.02] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={16} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{action.label}</h3>
                  <p className="text-white/30 text-xs">{action.desc}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-sm font-bold text-white/50 mb-4 tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)" }}>Recent Activity</h2>
        <div className="bg-surface rounded-xl border border-white/5 divide-y divide-white/5">
          {[
            { action: "New booking — Go Karting", time: "2 mins ago", by: "Rahul Sharma" },
            { action: "Coupon used — SPEED20", time: "15 mins ago", by: "Priya Reddy" },
            { action: "New leaderboard record — 44.2s", time: "1 hour ago", by: "Arun K." },
            { action: "Page content updated", time: "3 hours ago", by: "Admin" },
            { action: "Booking cancelled — Box Cricket", time: "5 hours ago", by: "Neha S." },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-white/70 text-sm">{item.action}</p>
                <p className="text-white/20 text-xs mt-0.5">{item.by}</p>
              </div>
              <span className="text-white/20 text-xs">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
