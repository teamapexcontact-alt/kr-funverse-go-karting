"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaCheck, FaTrash, FaTicketAlt, FaPlus } from "react-icons/fa";

interface Coupon {
  id: string;
  code: string;
  discount: number;
  type: "percentage" | "flat";
  usageCount: number;
  maxUsage: number;
  expiresAt: string;
  active: boolean;
}

const generateCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};

const defaultCoupons: Coupon[] = [
  { id: "1", code: "SPEED20", discount: 20, type: "percentage", usageCount: 12, maxUsage: 50, expiresAt: "2026-08-31", active: true },
  { id: "2", code: "FIRST10", discount: 10, type: "percentage", usageCount: 5, maxUsage: 100, expiresAt: "2026-09-30", active: true },
  { id: "3", code: "FLAT200", discount: 200, type: "flat", usageCount: 3, maxUsage: 20, expiresAt: "2026-07-31", active: false },
];

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>(defaultCoupons);
  const [copied, setCopied] = useState<string | null>(null);
  const [discount, setDiscount] = useState(20);
  const [type, setType] = useState<"percentage" | "flat">("percentage");
  const [maxUsage, setMaxUsage] = useState(50);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const generateCoupon = () => {
    const code = generateCode();
    const newCoupon: Coupon = {
      id: Date.now().toString(),
      code,
      discount,
      type,
      usageCount: 0,
      maxUsage,
      expiresAt: new Date(Date.now() + 60 * 86400000).toISOString().split("T")[0],
      active: true,
    };
    setCoupons(prev => [newCoupon, ...prev]);
  };

  const deleteCoupon = (id: string) => {
    setCoupons(prev => prev.filter(c => c.id !== id));
  };

  const toggleActive = (id: string) => {
    setCoupons(prev => prev.map(c => c.id === id ? { ...c, active: !c.active } : c));
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="text-accent">Coupon Generator</span>
        </h1>
        <p className="text-white/30 text-sm mt-1">Create and manage discount coupons for your visitors.</p>
      </div>

      {/* Generator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface rounded-xl border border-white/5 p-5 mb-6"
      >
        <h3 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "var(--font-heading)" }}>Generate New Coupon</h3>
        <div className="flex flex-wrap gap-3 items-end">
          <div>
            <label className="text-[10px] text-white/30 block mb-1">Discount</label>
            <div className="flex items-center bg-black border border-white/10 rounded-lg overflow-hidden">
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="w-20 px-3 py-2 bg-transparent text-white text-sm outline-none"
                min={1}
                max={100}
              />
              <span className="pr-3 text-white/30 text-xs">{type === "percentage" ? "%" : "₹"}</span>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-white/30 block mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "percentage" | "flat")}
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-white/70 text-sm outline-none cursor-pointer"
            >
              <option value="percentage">Percentage (%)</option>
              <option value="flat">Flat (₹)</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-white/30 block mb-1">Max Uses</label>
            <input
              type="number"
              value={maxUsage}
              onChange={(e) => setMaxUsage(Number(e.target.value))}
              className="w-20 bg-black border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none"
              min={1}
            />
          </div>
          <button
            onClick={generateCoupon}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-colors"
          >
            <FaPlus size={12} /> Generate
          </button>
        </div>
      </motion.div>

      {/* Coupon List */}
      <div className="space-y-3">
        {coupons.map((coupon, i) => (
          <motion.div
            key={coupon.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-surface rounded-xl border border-white/5 p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <FaTicketAlt className={`${coupon.active ? "text-accent" : "text-white/20"}`} size={16} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm font-mono tracking-wider">{coupon.code}</span>
                  <button
                    onClick={() => handleCopy(coupon.code)}
                    className="text-white/20 hover:text-accent transition-colors"
                    title="Copy code"
                  >
                    {copied === coupon.code ? <FaCheck size={12} className="text-emerald-400" /> : <FaCopy size={12} />}
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-white/40 text-xs">
                    {coupon.type === "percentage" ? `${coupon.discount}% OFF` : `₹${coupon.discount} OFF`}
                  </span>
                  <span className="text-white/20 text-[10px]">|</span>
                  <span className="text-white/30 text-[10px]">{coupon.usageCount}/{coupon.maxUsage} used</span>
                  <span className="text-white/20 text-[10px]">|</span>
                  <span className="text-white/30 text-[10px]">Expires {coupon.expiresAt}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleActive(coupon.id)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-semibold border transition-colors ${
                  coupon.active
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-white/5 text-white/30 border-white/10"
                }`}
              >
                {coupon.active ? "Active" : "Inactive"}
              </button>
              <button onClick={() => deleteCoupon(coupon.id)} className="text-white/20 hover:text-red-400 transition-colors">
                <FaTrash size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
