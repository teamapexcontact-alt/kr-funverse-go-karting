"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSave, FaUndo } from "react-icons/fa";

interface Offer {
  id: string;
  title: string;
  description: string;
  status: "active" | "scheduled" | "expired";
  startDate: string;
  endDate: string;
}

const defaultOffers: Offer[] = [
  { id: "1", title: "Monsoon Madness", description: "Flat 20% off on all Go Karting sessions this monsoon", status: "active", startDate: "2026-07-01", endDate: "2026-08-31" },
  { id: "2", title: "Weekend Warrior", description: "Buy 2 Get 1 Free on Box Cricket every Saturday & Sunday", status: "scheduled", startDate: "2026-07-15", endDate: "2026-09-15" },
  { id: "3", title: "Summer Camp", description: "Special student pricing — show your ID and save 15%", status: "expired", startDate: "2026-04-01", endDate: "2026-06-30" },
];

export default function ContentEditor() {
  const [offers, setOffers] = useState<Offer[]>(defaultOffers);
  const [saved, setSaved] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);

  const updateOffer = (id: string, field: keyof Offer, value: string) => {
    setOffers(prev => prev.map(o => o.id === id ? { ...o, [field]: value } : o));
  };

  const handleSave = () => {
    localStorage.setItem("krfunverse-offers", JSON.stringify(offers));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addOffer = () => {
    const newOffer: Offer = {
      id: Date.now().toString(),
      title: "New Offer",
      description: "Describe your offer here",
      status: "active",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
    };
    setOffers(prev => [...prev, newOffer]);
    setEditing(newOffer.id);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-accent">Content Editor</span>
          </h1>
          <p className="text-white/30 text-sm mt-1">Manage offers, banners, and page text.</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={addOffer} className="px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 transition-colors border border-accent/20">
            + Add Offer
          </button>
          <button onClick={handleSave} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-colors">
            {saved ? "Saved!" : <><FaSave size={12} /> Save Changes</>}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-surface rounded-xl border border-white/5 p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {editing === offer.id ? (
                  <input
                    type="text"
                    value={offer.title}
                    onChange={(e) => updateOffer(offer.id, "title", e.target.value)}
                    className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-white font-bold text-base w-full mb-2 focus:border-accent/40 outline-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  />
                ) : (
                  <h3 className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>{offer.title}</h3>
                )}
                {editing === offer.id ? (
                  <textarea
                    value={offer.description}
                    onChange={(e) => updateOffer(offer.id, "description", e.target.value)}
                    className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-white/70 text-sm w-full mb-2 resize-none h-20 focus:border-accent/40 outline-none"
                  />
                ) : (
                  <p className="text-white/40 text-sm mt-1">{offer.description}</p>
                )}
              </div>
              <button
                onClick={() => setEditing(editing === offer.id ? null : offer.id)}
                className="text-white/20 hover:text-accent text-xs transition-colors ml-3"
              >
                {editing === offer.id ? <FaUndo size={12} /> : "Edit"}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              {/* Status */}
              <select
                value={offer.status}
                onChange={(e) => updateOffer(offer.id, "status", e.target.value)}
                className={`px-2.5 py-1 rounded-md border font-semibold outline-none cursor-pointer ${
                  offer.status === "active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                  offer.status === "scheduled" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                  "bg-white/5 text-white/30 border-white/10"
                }`}
              >
                <option value="active">Active</option>
                <option value="scheduled">Scheduled</option>
                <option value="expired">Expired</option>
              </select>

              {/* Dates */}
              <div className="flex items-center gap-2 text-white/30">
                <span>From:</span>
                <input
                  type="date"
                  value={offer.startDate}
                  onChange={(e) => updateOffer(offer.id, "startDate", e.target.value)}
                  className="bg-black border border-white/10 rounded px-2 py-1 text-white/60 text-xs outline-none focus:border-accent/40"
                />
                <span>To:</span>
                <input
                  type="date"
                  value={offer.endDate}
                  onChange={(e) => updateOffer(offer.id, "endDate", e.target.value)}
                  className="bg-black border border-white/10 rounded px-2 py-1 text-white/60 text-xs outline-none focus:border-accent/40"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-surface rounded-xl border border-white/5">
        <h3 className="text-white font-bold text-sm mb-2" style={{ fontFamily: "var(--font-heading)" }}>Hero Banner Text</h3>
        <p className="text-white/30 text-xs mb-3">Edit the main hero section tagline shown on the homepage.</p>
        <div className="flex gap-2">
          <input
            type="text"
            defaultValue="THE TRACK IS WAITING."
            className="flex-1 bg-black border border-white/10 rounded-lg px-3 py-2 text-white/70 text-sm outline-none focus:border-accent/40"
          />
          <button className="px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 transition-colors border border-accent/20">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
