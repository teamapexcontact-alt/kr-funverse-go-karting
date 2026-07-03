import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { FaClock, FaUsers, FaRuler, FaSun, FaFlagCheckered, FaStar, FaChair, FaTshirt, FaTrophy } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Box Cricket",
  description: "Play Box Cricket at KR Funverse in Hyderabad. Turf wicket, floodlights, scoreboard.",
};

export default function BoxCricketPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <span className="text-[10px] text-accent/60 font-semibold tracking-[0.2em] uppercase">Activity</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                BOX <span className="text-accent">CRICKET</span>
              </h1>
              <p className="text-white/40 leading-relaxed mb-6 text-sm">
                Purpose-built box cricket arena. Perfect for friendly matches, corporate team building,
                and weekend tournaments.
              </p>
              <div className="flex flex-wrap gap-5 mb-8 text-sm text-white/30">
                <span className="flex items-center gap-2"><FaClock className="text-accent/70" /> 60 min slots</span>
                <span className="flex items-center gap-2"><FaUsers className="text-accent/70" /> 6-10 players</span>
                <span className="flex items-center gap-2"><FaRuler className="text-accent/70" /> Pro turf</span>
                <span className="flex items-center gap-2"><FaSun className="text-accent/70" /> Floodlights</span>
              </div>
              <Button href="/booking" variant="primary">
                <FaFlagCheckered className="mr-2" />
                Reserve Your Lane
              </Button>
            </AnimatedSection>
            <AnimatedSection>
              <div className="h-80 md:h-96 rounded-2xl bg-surface border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <FaUsers className="text-5xl text-accent/30 mx-auto mb-4" />
                  <p className="text-white/20 text-sm">Box Cricket Image</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* BOX CRICKET FEATURES */}
      <section className="py-16 border-y border-white/5 bg-carbon">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "var(--font-heading)" }}>
              WHY PLAY <span className="text-accent">HERE</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: FaStar, label: "Turf Wicket", desc: "Professional-grade turf for authentic bounce" },
              { icon: FaSun, label: "Floodlights", desc: "Well-lit arena for evening matches" },
              { icon: FaRuler, label: "Regulation Size", desc: "Standard box cricket dimensions" },
              { icon: FaTrophy, label: "Scoreboard", desc: "Electronic scoreboard with live updates" },
              { icon: FaChair, label: "Changing Rooms", desc: "Separate changing & restroom facilities" },
              { icon: FaTshirt, label: "Equipment", desc: "Bats, balls, pads & gloves provided" },
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

      <section className="py-16 text-center border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              BOOK YOUR <span className="text-accent">MATCH</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-8 text-sm">Gather your team. Equipment provided.</p>
            <Button href="/booking" variant="primary">
              <FaFlagCheckered className="mr-2" />
              Book Now
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
