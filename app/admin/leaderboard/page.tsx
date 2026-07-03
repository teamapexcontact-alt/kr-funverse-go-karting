"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaTrash, FaPlus, FaCrown, FaMedal } from "react-icons/fa";
import { getLeaderboard, saveLeaderboard, type LeaderboardRecord } from "@/lib/leaderboard";

export default function LeaderboardPage() {
  const [records, setRecords] = useState<LeaderboardRecord[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newRecord, setNewRecord] = useState({ name: "", time: "", kartNumber: "", laps: 5 });

  useEffect(() => {
    setRecords(getLeaderboard());
  }, []);

  const persist = (updated: LeaderboardRecord[]) => {
    setRecords(updated);
    saveLeaderboard(updated);
  };

  const addRecord = () => {
    if (!newRecord.name || !newRecord.time) return;
    const record: LeaderboardRecord = {
      id: Date.now().toString(),
      name: newRecord.name,
      time: newRecord.time,
      date: new Date().toISOString().split("T")[0],
      kartNumber: newRecord.kartNumber,
      laps: newRecord.laps,
    };
    persist([...records, record]);
    setNewRecord({ name: "", time: "", kartNumber: "", laps: 5 });
    setShowForm(false);
  };

  const deleteRecord = (id: string) => {
    persist(records.filter(r => r.id !== id));
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <FaCrown className="text-yellow-400 drop-shadow-[0_0_6px_rgba(234,179,8,0.4)]" size={16} />;
    if (index === 1) return <FaMedal className="text-gray-300" size={14} />;
    if (index === 2) return <FaMedal className="text-amber-600" size={14} />;
    return <span className="text-white/20 text-xs font-bold w-4 text-center">{index + 1}</span>;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-accent">Leaderboard</span> Records
          </h1>
          <p className="text-white/30 text-sm mt-1">Manage go karting lap records — changes go live immediately on the public page.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-colors"
        >
          <FaPlus size={12} /> Add Record
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-surface rounded-xl border border-white/5 p-5 mb-6 overflow-hidden"
        >
          <h3 className="text-white font-bold text-sm mb-3" style={{ fontFamily: "var(--font-heading)" }}>New Record</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-3">
            <input
              type="text"
              placeholder="Racer Name"
              value={newRecord.name}
              onChange={(e) => setNewRecord(prev => ({ ...prev, name: e.target.value }))}
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/40"
            />
            <input
              type="text"
              placeholder="Time (e.g. 44.8s)"
              value={newRecord.time}
              onChange={(e) => setNewRecord(prev => ({ ...prev, time: e.target.value }))}
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/40"
            />
            <input
              type="text"
              placeholder="Kart Number"
              value={newRecord.kartNumber}
              onChange={(e) => setNewRecord(prev => ({ ...prev, kartNumber: e.target.value }))}
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/40"
            />
            <input
              type="number"
              placeholder="Laps"
              value={newRecord.laps}
              onChange={(e) => setNewRecord(prev => ({ ...prev, laps: Number(e.target.value) }))}
              className="bg-black border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/40"
              min={1}
            />
          </div>
          <button onClick={addRecord} className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-colors">
            Save Record
          </button>
        </motion.div>
      )}

      <div className="bg-surface rounded-xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 gap-3 px-4 py-3 border-b border-white/5 text-[10px] text-white/30 font-semibold uppercase tracking-wider">
          <div className="col-span-1">#</div>
          <div className="col-span-3">Racer</div>
          <div className="col-span-2">Time</div>
          <div className="col-span-2">Kart</div>
          <div className="col-span-2">Laps</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1" />
        </div>
        {records.map((record, i) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.04 }}
            className={`grid grid-cols-12 gap-3 px-4 py-3 items-center ${
              i < records.length - 1 ? "border-b border-white/5" : ""
            } ${i === 0 ? "bg-yellow-500/5" : i === 1 ? "bg-gray-500/5" : i === 2 ? "bg-amber-500/5" : ""}`}
          >
            <div className="col-span-1">{getRankIcon(i)}</div>
            <div className="col-span-3">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{record.name}</span>
            </div>
            <div className="col-span-2">
              <span className={`font-mono font-bold ${i === 0 ? "text-yellow-400" : "text-white/70"}`}>{record.time}</span>
            </div>
            <div className="col-span-2 text-white/40 text-xs">{record.kartNumber}</div>
            <div className="col-span-2 text-white/40 text-xs">{record.laps}</div>
            <div className="col-span-1 text-white/20 text-xs">{record.date.split("-").slice(1).join("/")}</div>
            <div className="col-span-1 flex justify-end">
              <button onClick={() => deleteRecord(record.id)} className="text-white/20 hover:text-red-400 transition-colors">
                <FaTrash size={11} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
