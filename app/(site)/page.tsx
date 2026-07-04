"use client";

import HeroSection from "@/components/HeroSection";
import ActivityCard from "@/components/ActivityCard";
import Timeline from "@/components/Timeline";
import ReviewCard from "@/components/ReviewCard";
import FAQAccordion from "@/components/FAQAccordion";
import CountUp from "@/components/CountUp";
import AnimatedSection from "@/components/AnimatedSection";
import RacingTrack from "@/components/RacingTrack";
import Map from "@/components/Map";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { activities } from "@/data/activities";
import { reviews } from "@/data/reviews";
import { faqs } from "@/data/faqs";
import {
  FaShieldAlt, FaHardHat, FaStar, FaHandSparkles,
  FaFlagCheckered, FaUsers, FaTachometerAlt, FaRoad,
  FaStopwatch, FaTools, FaUserShield, FaCheckDouble
} from "react-icons/fa";

const highlights = [
  { icon: FaShieldAlt, title: "SAFE & CERTIFIED", desc: "Professional barriers & safety systems", features: ["Tecpro barriers on all corners", "Fire extinguishers at every station", "Emergency protocols in place"] },
  { icon: FaHardHat, title: "PRO TRACK", desc: "Top-quality karts & facilities", features: ["400M+ track with 13 turns", "High-performance rental karts", "Pit lane & paddock area"] },
  { icon: FaStar, title: "TRAINED STAFF", desc: "Expert supervision every session", features: ["Flag-signal certified marshals", "First-aid trained team", "Multi-lingual instructors"] },
  { icon: FaHardHat, title: "HELMETS SANITIZED", desc: "Every helmet cleaned after each use", features: ["UV-sanitized after every use", "Full-face & open-face options", "Free balaclava provided"] },
  { icon: FaTools, title: "DAILY INSPECTIONS", desc: "All equipment inspected every morning", features: ["Karts checked every morning", "Track surface inspected daily", "Barriers tested for impact"] },
  { icon: FaCheckDouble, title: "CERTIFIED TRACK", desc: "International safety standards", features: ["Meets international safety norms", "Fire extinguishers at every station", "Emergency protocols in place"] },
];

export default function HomePage() {
  return (
    <>
      <RacingTrack />
      <HeroSection />

      {/* STATS — 1 row */}
      <section className="py-14 border-y border-white/5 bg-carbon">
        <div className="container-custom">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            <CountUp target={400} suffix="M+" label="Track Length" />
            <CountUp target={10000} suffix="+" label="Happy Racers" />
            <CountUp target={7} suffix="" label="Days Open" />
            <CountUp target={5} suffix=".0" label="Google Rating" />
            <CountUp target={15} suffix="+" label="Activities" />
          </div>
        </div>
      </section>

      {/* WHY KR FUNVERSE — single clean grid */}
      <section className="py-16 md:py-20 bg-carbon">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">WHY </span>
              <span className="gold">KR FUNVERSE</span>
              <span className="chrome-80">?</span>
            </h2>
            <p className="chrome-60 text-center max-w-xl mx-auto mb-10 text-sm">
              We prioritize your safety and enjoyment above everything.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 60}>
                  <div className="pit-stop-card p-5 text-left h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-10 flex items-center justify-center shrink-0">
                        <Icon className="gold-60 text-lg" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                        <p className="chrome-40 text-[9px]">{item.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {item.features.map((f: string) => (
                        <li key={f} className="flex items-center gap-2 text-[10px] text-white/35">
                          <span className="w-1 h-1 rounded-full bg-gold-40 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES — 1 row of 3 */}
      <section className="py-20 md:py-28 bg-asphalt relative overflow-hidden" id="activities">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent 0px, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px), repeating-linear-gradient(0deg, transparent 0px, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)`,
          }} />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">CHOOSE YOUR </span>
              <span className="gold">ADVENTURE</span>
            </h2>
            <p className="chrome-60 text-center max-w-xl mx-auto mb-12 text-sm">
              Speed, strategy, or fun — pick your arena.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activities.map((activity, i) => (
              <AnimatedSection key={activity.id} delay={i * 100}>
                <div className="group relative h-full">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/8 group-hover:via-accent/4 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                  <div className="relative">
                    <ActivityCard activity={activity} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHY RACE WITH US — 1 row of 4 */}
      <section className="py-20 md:py-28 bg-carbon">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">WHY </span>
              <span className="gold">RACE</span>
              <span className="chrome-80"> WITH US?</span>
            </h2>
            <p className="chrome-60 text-center max-w-xl mx-auto mb-12 text-sm">
              Built for speed. Designed for safety. Driven by passion.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: FaRoad, title: "PROFESSIONAL TRACK", stat: "400M+", statLabel: "Track Length", highlights: ["13 turns with 4 chicanes", "150M main straight", "Racing barriers throughout"], desc: "F1-inspired circuit designed for adrenaline" },
              { icon: FaTachometerAlt, title: "HIGH-SPEED KARTS", stat: "40 km/h", statLabel: "Top Speed", highlights: ["Adjustable speed governors", "Racing tires with grip compound", "Hydraulic disc brakes"], desc: "Performance-tuned karts for every skill level" },
              { icon: FaStopwatch, title: "REAL-TIME TIMING", stat: "0.001s", statLabel: "Precision", highlights: ["Live leaderboard on display", "Lap-by-lap split times", "Personal best tracking"], desc: "Race against the clock and compete for P1" },
              { icon: FaUsers, title: "GROUP PACKAGES", stat: "6-20", statLabel: "Group Size", highlights: ["Birthday party packages available", "Corporate team building events", "College & club outings welcome"], desc: "Special rates for groups and celebrations" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 60}>
                <motion.div whileHover={{ y: -4 }} className="relative overflow-hidden rounded-2xl bg-surface border border-white/5 p-5 h-full group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-10 flex items-center justify-center group-hover:bg-gold-20 transition-colors">
                        <item.icon className="gold-60 text-lg" />
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-black gold" style={{ fontFamily: "var(--font-heading)" }}>{item.stat}</div>
                        <div className="text-[8px] chrome-40 tracking-wider uppercase">{item.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="chrome-40 text-[10px] leading-relaxed mb-2">{item.desc}</p>
                    <ul className="space-y-1">
                      {item.highlights.map((h: string) => (
                        <li key={h} className="flex items-center gap-1.5 text-[9px] text-white/20">
                          <span className="w-0.5 h-0.5 rounded-full bg-gold-40 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute top-0 right-0 w-14 h-14 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 64 64" className="w-full h-full text-accent-10"><path d="M64 0v64L0 0z" fill="currentColor" /></svg>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TIMELINE */}
      <Timeline />

      <div className="section-divider" />

      {/* GOOGLE REVIEWS — 1 row of 3 */}
      <section className="py-20 md:py-28 bg-carbon">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">GOOGLE </span>
              <span className="gold">REVIEWS</span>
            </h2>
            <p className="chrome-60 text-center max-w-xl mx-auto mb-12 text-sm">Real reviews from real visitors.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="race-ticket p-8 mb-10 max-w-md mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="gold font-bold text-2xl" style={{ fontFamily: "var(--font-heading)" }}>G</span>
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>REVIEWS</span>
              </div>
              <div className="text-5xl font-black text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>5.0</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (<FaStar key={i} className="gold text-lg" />))}
              </div>
              <p className="chrome-40 text-sm">Based on Google Reviews</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.slice(0, 3).map((review, i) => (
              <AnimatedSection key={review.id} delay={i * 80}>
                <ReviewCard review={review} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-asphalt" id="faq">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">FREQUENTLY ASKED </span>
              <span className="gold">QUESTIONS</span>
            </h2>
            <p className="chrome-60 text-center max-w-xl mx-auto mb-12 text-sm">Everything you need to know before you visit.</p>
          </AnimatedSection>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACT — Map only */}
      <section className="py-20 md:py-28 bg-asphalt" id="contact">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">FIND </span>
              <span className="gold">US</span>
            </h2>
            <p className="chrome-60 text-center max-w-xl mx-auto mb-12 text-sm">Rampally, Ghatkesar — Hyderabad.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <Map />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINISH LINE CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-carbon">
        <div className="absolute inset-0 bg-accent-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-checkered" />
        </div>
        <div className="finish-line w-full absolute top-0 left-0" />
        <div className="container-custom text-center relative z-10">
          <AnimatedSection>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="text-6xl mb-6">
              🏁
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="chrome-80">READY TO </span>
              <span className="gold">DOMINATE</span>
              <span className="chrome-80"><br />THE TRACK?</span>
            </h2>
            <p className="chrome-60 max-w-xl mx-auto mb-10 text-base">
              Your grid position is waiting. Book your slot now and experience Hyderabad&apos;s most exciting entertainment destination.
            </p>
            <Button href="/booking" variant="primary" size="lg">
              <FaFlagCheckered className="mr-2" />
              START YOUR RACE
            </Button>
            <div className="mt-16 flex flex-wrap justify-center gap-6 text-xs chrome-20 tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              <span>RACE.</span><span>PLAY.</span><span>REPEAT.</span>
            </div>
          </AnimatedSection>
        </div>
        <div className="finish-line w-full absolute bottom-0 left-0" />
      </section>
    </>
  );
}
