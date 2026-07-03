"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCrown, FaStopwatch } from "react-icons/fa";
import { getLeaderboard, type LeaderboardRecord } from "@/lib/leaderboard";

interface PodiumEntry {
  rank: number;
  name: string;
  time: string;
  color: string;
  height: number;
}

export default function Podium() {
  const [top3, setTop3] = useState<PodiumEntry[]>([]);
  const [standings, setStandings] = useState<LeaderboardRecord[]>([]);

  useEffect(() => {
    const records = getLeaderboard();
    setStandings(records);
    setTop3([
      ...(records[1] ? [{ rank: 2, name: records[1].name, time: records[1].time, color: "from-gray-400 to-gray-500", height: 100 }] : []),
      ...(records[0] ? [{ rank: 1, name: records[0].name, time: records[0].time, color: "from-yellow-400 to-yellow-600", height: 140 }] : []),
      ...(records[2] ? [{ rank: 3, name: records[2].name, time: records[2].time, color: "from-amber-600 to-amber-800", height: 70 }] : []),
    ]);
  }, []);

  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 mb-2">
          <FaCrown className="text-accent" size={18} />
          <h3
            className="text-white font-bold text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-accent">LEADERBOARD</span>
          </h3>
        </div>
        <p className="text-white/30 text-xs tracking-wider">FASTEST LAP &middot; TOP RACERS</p>
      </motion.div>

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-4 md:gap-6 px-4 mb-12">
        {top3.map((entry, i) => (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, type: "spring", stiffness: 120, damping: 14 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.18, type: "spring", stiffness: 200, damping: 12 }}
              className="mb-2"
            >
              {entry.rank === 1 ? (
                <FaTrophy className="text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" size={28} />
              ) : (
                <FaMedal className={entry.rank === 2 ? "text-gray-300" : "text-amber-600"} size={22} />
              )}
            </motion.div>

            <div className="text-center mb-2">
              <div className="text-white/90 text-xs font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {entry.name}
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-white/40 mt-0.5">
                <FaStopwatch size={8} />
                {entry.time}
              </div>
            </div>

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: entry.height }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.5, ease: "easeOut" }}
              className={`w-full min-w-[72px] md:min-w-[88px] rounded-t-lg bg-gradient-to-t ${entry.color} flex items-center justify-center relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-2xl md:text-3xl font-black text-white drop-shadow-lg relative z-10" style={{ fontFamily: "var(--font-heading)" }}>
                #{entry.rank}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Full Standings Table */}
      {standings.length > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h4 className="text-white/50 text-xs font-semibold tracking-wider text-center mb-4 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
            Full Standings
          </h4>
          <div className="bg-surface/50 rounded-xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-10 gap-2 px-4 py-2.5 border-b border-white/5 text-[9px] text-white/20 font-semibold uppercase tracking-wider">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Racer</div>
              <div className="col-span-2 text-right">Time</div>
              <div className="col-span-2 text-right">Laps</div>
              <div className="col-span-1 text-right">Kart</div>
            </div>
            {standings.map((record, i) => (
              <div
                key={record.id}
                className={`grid grid-cols-10 gap-2 px-4 py-2.5 items-center ${
                  i < standings.length - 1 ? "border-b border-white/[0.02]" : ""
                } ${i < 3 ? "bg-white/[0.02]" : ""}`}
              >
                <div className="col-span-1">
                  {i === 0 ? <FaCrown className="text-yellow-400" size={10} /> :
                   i === 1 ? <FaMedal className="text-gray-400" size={9} /> :
                   i === 2 ? <FaMedal className="text-amber-600" size={9} /> :
                   <span className="text-white/20 text-xs">{i + 1}</span>}
                </div>
                <div className="col-span-4 text-white/70 text-xs font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                  {record.name}
                </div>
                <div className={`col-span-2 text-right text-xs font-mono font-bold ${i === 0 ? "text-yellow-400" : "text-white/50"}`}>
                  {record.time}
                </div>
                <div className="col-span-2 text-right text-[10px] text-white/30">{record.laps}</div>
                <div className="col-span-1 text-right text-[10px] text-white/20">{record.kartNumber}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="text-center mt-6"
      >
        <div className="inline-flex items-center gap-3 text-[10px] text-white/15 tracking-widest uppercase">
          <span>Compete</span>
          <span className="w-4 h-px bg-white/10" />
          <span>Race</span>
          <span className="w-4 h-px bg-white/10" />
          <span>Dominate</span>
        </div>
      </motion.div>
    </div>
  );
}
