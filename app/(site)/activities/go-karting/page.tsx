import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import Podium from "@/components/Podium";
import { FaShieldAlt, FaClock, FaUsers, FaFlagCheckered, FaTachometerAlt, FaHardHat, FaRoad } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Go Karting",
  description: "Experience the thrill of Go Karting at KR Funverse in Ghatkesar, Hyderabad.",
};

const rules = [
  "Minimum age: 12 years (junior karts for 8-12)",
  "Height: 4.5 ft and above",
  "Follow all staff instructions",
  "Secure loose items before race",
];

const safety = [
  "Full-face helmets provided & sanitized",
  "Racing barriers around entire track",
  "Trained marshals monitor every session",
  "Karts inspected daily",
];

export default function GoKartingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <span className="text-[10px] text-accent/60 font-semibold tracking-[0.2em] uppercase">Activity</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                GO <span className="text-accent">KARTING</span>
              </h1>
              <p className="text-white/40 leading-relaxed mb-6 text-sm">
                Feel the adrenaline on our professionally designed track. High-performance karts,
                safety-first environment, and timed laps.
              </p>
              <div className="flex flex-wrap gap-5 mb-8 text-sm text-white/30">
                <span className="flex items-center gap-2"><FaClock className="text-accent/70" /> 10 min sessions</span>
                <span className="flex items-center gap-2"><FaUsers className="text-accent/70" /> Ages 12+</span>
                <span className="flex items-center gap-2"><FaTachometerAlt className="text-accent/70" /> Up to 40 km/h</span>
              </div>
              <Button href="/booking" variant="primary">
                <FaFlagCheckered className="mr-2" />
                Book Your Race
              </Button>
            </AnimatedSection>
            <AnimatedSection>
              <div className="h-80 md:h-96 rounded-2xl bg-surface border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <FaTachometerAlt className="text-5xl text-accent/30 mx-auto mb-4" />
                  <p className="text-white/20 text-sm">Track Image</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TRACK FEATURES */}
      <section className="py-16 border-y border-white/5 bg-carbon">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "var(--font-heading)" }}>
              TRACK <span className="text-accent">FEATURES</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: FaTachometerAlt, label: "400M+ Track", desc: "Professional layout with 13 turns" },
              { icon: FaFlagCheckered, label: "13 Turns", desc: "Includes 4 chicanes & hairpins" },
              { icon: FaRoad, label: "150M Straight", desc: "Long main straight for top speed" },
              { icon: FaShieldAlt, label: "Tecpro Barriers", desc: "FIA-grade barriers at every corner" },
              { icon: FaClock, label: "Live Timing", desc: "Precision lap timing to 0.001s" },
              { icon: FaHardHat, label: "Pro Karts", desc: "High-performance rental fleet" },
            ].map((feat, i) => (
              <AnimatedSection key={feat.label} delay={i * 80}>
                <div className="bg-surface/80 rounded-xl border border-white/5 p-5 hover:border-accent/20 transition-all group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <feat.icon className="text-accent text-sm" />
                    </div>
                    <h3 className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{feat.label}</h3>
                  </div>
                  <p className="text-white/40 text-xs">{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Safety */}
      <section className="py-16 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <FaFlagCheckered className="text-accent text-xl" />
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>TRACK RULES</h2>
              </div>
              <ul className="space-y-3">
                {rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-sm text-white/40">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <FaShieldAlt className="text-emerald-400 text-xl" />
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>SAFETY MEASURES</h2>
              </div>
              <ul className="space-y-3">
                {safety.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/40">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── LEADERBOARD ─── */}
      <section className="py-16 border-y border-white/5">
        <div className="container-custom">
          <Podium />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              READY TO <span className="text-accent">RACE</span>?
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-8 text-sm">Book your session and compete for the fastest lap!</p>
            <Button href="/booking" variant="primary">
              <FaFlagCheckered className="mr-2" />
              Reserve Your Spot
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
