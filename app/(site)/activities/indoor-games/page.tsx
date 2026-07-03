import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { FaClock, FaUsers, FaGamepad, FaDice, FaFlagCheckered, FaStar } from "react-icons/fa";

const games = [
  { name: "Table Tennis", desc: "Fast-paced singles & doubles", color: "text-accent" },
  { name: "Foosball", desc: "Classic table football", color: "text-accent" },
  { name: "Air Hockey", desc: "Test your reflexes", color: "text-accent" },
  { name: "Carrom", desc: "Traditional board game", color: "text-accent" },
  { name: "Chess", desc: "Classic strategy", color: "text-accent" },
  { name: "Gaming Zone", desc: "Console gaming setup", color: "text-accent" },
];

export const metadata: Metadata = {
  title: "Indoor Games",
  description: "Play Table Tennis, Foosball, Air Hockey, and more at KR Funverse.",
};

export default function IndoorGamesPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <span className="text-[10px] text-accent/60 font-semibold tracking-[0.2em] uppercase">Activity</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                INDOOR <span className="text-accent">GAMES</span>
              </h1>
              <p className="text-white/40 leading-relaxed mb-6 text-sm">
                A wide variety of indoor games to keep you and your friends entertained.
              </p>
              <div className="flex flex-wrap gap-5 mb-8 text-sm text-white/30">
                <span className="flex items-center gap-2"><FaGamepad className="text-accent/70" /> 6+ games</span>
                <span className="flex items-center gap-2"><FaUsers className="text-accent/70" /> All ages</span>
                <span className="flex items-center gap-2"><FaDice className="text-accent/70" /> Flexible timings</span>
              </div>
              <Button href="/booking" variant="primary">
                <FaFlagCheckered className="mr-2" />
                Challenge Your Crew
              </Button>
            </AnimatedSection>
            <AnimatedSection>
              <div className="h-80 md:h-96 rounded-2xl bg-surface border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <FaGamepad className="text-5xl text-accent/30 mx-auto mb-4" />
                  <p className="text-white/20 text-sm">Indoor Games Image</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "var(--font-heading)" }}>
              GAMES <span className="text-accent">AVAILABLE</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game, i) => (
              <AnimatedSection key={game.name} delay={i * 80}>
                <div className="bg-surface rounded-xl border border-white/5 p-5 hover:border-accent/20 transition-all group">
                  <div className="flex items-center gap-3">
                    <FaStar className={`${game.color} text-sm`} />
                    <h3 className="text-white font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{game.name}</h3>
                  </div>
                  <p className="text-white/40 text-sm mt-1">{game.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              COME <span className="text-accent">PLAY</span>!
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mb-8 text-sm">Challenge your friends today.</p>
            <Button href="/booking" variant="primary">
              <FaFlagCheckered className="mr-2" />
              Book Your Slot
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
