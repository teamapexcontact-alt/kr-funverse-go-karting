"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaChevronRight, FaFlagCheckered, FaSpinner } from "react-icons/fa";
import Button from "./Button";
import { activities } from "@/data/activities";
import { validateEmail, validatePhone } from "@/utils/validation";

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00",
];

interface FormState {
  activity: string;
  date: string;
  time: string;
  players: number;
  name: string;
  email: string;
  phone: string;
}

const INITIAL: FormState = {
  activity: "",
  date: "",
  time: "",
  players: 2,
  name: "",
  email: "",
  phone: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [step, setStep] = useState<"select" | "details" | "success">("select");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (field: keyof FormState, value: string | number) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  };

  const handleContinue = () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.activity) errs.activity = "Pick an activity";
    if (!form.date) errs.date = "Pick a date";
    if (!form.time) errs.time = "Pick a time";
    if (form.players < 1) errs.players = "At least 1 player";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep("details");
  };

  const handleSubmit = async () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    const emailErr = validateEmail(form.email);
    if (emailErr) errs.email = emailErr;
    const phoneErr = validatePhone(form.phone);
    if (phoneErr) errs.phone = phoneErr;
    setErrors(errs);
    if (Object.keys(errs).length !== 0) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const { saveBooking } = await import("@/lib/firestore");
      await saveBooking({
        activity: form.activity,
        activityTitle: activities.find((a) => a.id === form.activity)?.title,
        date: form.date,
        time: form.time,
        players: form.players,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });
      setStep("success");
    } catch {
      setSubmitError("Could not save your booking. Firebase may not be configured yet — your details are valid!");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
          <FaCheck className="text-emerald-400 text-2xl" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>You&apos;re all set!</h3>
        <p className="text-white/40 mb-2">
          {activities.find((a) => a.id === form.activity)?.title} · {form.date} · {form.time}
        </p>
        <p className="text-white/30 text-sm mb-8">We&apos;ll send your confirmation to {form.email}</p>
        <Button href="/" variant="outline">Back to Home</Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {["select", "details"].map((s, i) => {
          const active = step === s;
          return (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                  active
                    ? "bg-accent text-white shadow-[0_0_12px_rgba(255,30,30,0.3)]"
                    : "bg-white/5 text-white/30"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs tracking-wider uppercase ${
                  active ? "text-white/70" : "text-white/20"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s === "select" ? "Choose" : "Your Info"}
              </span>
              {i === 0 && <div className="w-8 h-px bg-white/10" />}
            </div>
          );
        })}
      </div>

      {step === "select" && (
        <motion.div
          key="select"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Activity */}
          <div className="mb-8">
            <label className="text-sm font-medium text-white/70 mb-3 block">Activity</label>
            <div className="grid grid-cols-3 gap-3">
              {activities.map((a) => {
                const selected = form.activity === a.id;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => update("activity", a.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                      selected
                        ? "border-accent/50 bg-accent/[0.08] shadow-[0_0_16px_rgba(255,30,30,0.1)]"
                        : "border-white/5 bg-surface hover:border-white/10"
                    }`}
                  >
                    <h4 className={`text-sm font-semibold ${selected ? "text-accent" : "text-white/80"}`} style={{ fontFamily: "var(--font-heading)" }}>
                      {a.title}
                    </h4>
                    <p className="text-[11px] text-white/30 mt-0.5">{a.duration}</p>
                  </button>
                );
              })}
            </div>
            {errors.activity && <p className="text-accent text-xs mt-1.5">{errors.activity}</p>}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="text-sm font-medium text-white/70 mb-3 block">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
              />
              {errors.date && <p className="text-accent text-xs mt-1.5">{errors.date}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-white/70 mb-3 block">Time</label>
              <div className="grid grid-cols-4 gap-1.5">
                {timeSlots.map((t) => {
                  const selected = form.time === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("time", t)}
                      className={`py-2 rounded-lg text-[11px] font-medium border transition-all ${
                        selected
                          ? "border-accent/50 bg-accent/[0.08] text-accent"
                          : "border-white/5 bg-surface text-white/40 hover:border-white/10"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              {errors.time && <p className="text-accent text-xs mt-1.5">{errors.time}</p>}
            </div>
          </div>

          {/* Players */}
          <div className="mb-10">
            <label className="text-sm font-medium text-white/70 mb-3 block">Players</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => update("players", Math.max(1, form.players - 1))}
                className="w-11 h-11 rounded-xl bg-surface border border-white/5 text-white/60 hover:border-white/10 text-lg transition-all"
              >
                −
              </button>
              <span className="text-3xl font-black text-white w-14 text-center tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>
                {form.players}
              </span>
              <button
                type="button"
                onClick={() => update("players", form.players + 1)}
                className="w-11 h-11 rounded-xl bg-surface border border-white/5 text-white/60 hover:border-white/10 text-lg transition-all"
              >
                +
              </button>
            </div>
          </div>

          <Button onClick={handleContinue} variant="primary" size="lg" className="w-full">
            Continue <FaChevronRight className="ml-1.5" size={14} />
          </Button>
        </motion.div>
      )}

      {step === "details" && (
        <motion.div
          key="details"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Summary pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-medium">
              <FaFlagCheckered className="text-[10px]" />
              {activities.find((a) => a.id === form.activity)?.title}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs">{form.date}</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs">{form.time}</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs">
              {form.players} player{form.players > 1 ? "s" : ""}
            </span>
          </div>

          {/* Name */}
          <div className="mb-5">
            <label className="text-sm font-medium text-white/70 mb-2 block">Your Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-accent text-xs mt-1.5">{errors.name}</p>}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="text-sm font-medium text-white/70 mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-accent text-xs mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-white/70 mb-2 block">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full bg-surface border border-white/5 rounded-xl px-4 py-3.5 text-white/80 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                placeholder="10-digit number"
              />
              {errors.phone && <p className="text-accent text-xs mt-1.5">{errors.phone}</p>}
            </div>
          </div>

          {submitError && (
            <p className="text-accent/70 text-xs mb-4 text-center">{submitError}</p>
          )}

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep("select")}
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
              disabled={submitting}
            >
              ← Back
            </button>
            <Button onClick={handleSubmit} variant="primary" size="lg" className="flex-1" disabled={submitting}>
              {submitting ? (
                <><FaSpinner className="animate-spin mr-1.5" size={14} /> Saving...</>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
