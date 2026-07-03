import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { FaBullseye, FaHeart, FaShieldAlt, FaUsers, FaFlagCheckered, FaTrophy, FaStar, FaHardHat } from "react-icons/fa";

const values = [
  { icon: FaHeart, title: "Passion for Fun", desc: "Creating joy through memorable experiences." },
  { icon: FaShieldAlt, title: "Safety First", desc: "Every activity is safety-first designed." },
  { icon: FaUsers, title: "Community", desc: "Building a community of sports enthusiasts." },
  { icon: FaBullseye, title: "Excellence", desc: "Premium equipment & top-notch facilities." },
  { icon: FaStar, title: "Customer Focus", desc: "Every guest leaves with a smile." },
  { icon: FaHardHat, title: "Professionalism", desc: "Trained staff & industry best practices." },
  { icon: FaFlagCheckered, title: "Innovation", desc: "New attractions & experiences regularly." },
  { icon: FaTrophy, title: "Sportsmanship", desc: "Fair play & positive competition." },
];

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about KR Funverse — Hyderabad's premium entertainment destination.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <span className="text-[10px] text-accent/60 font-semibold tracking-[0.2em] uppercase">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                ABOUT <span className="text-accent">KR FUNVERSE</span>
              </h1>
              <p className="text-white/40 leading-relaxed mb-4 text-sm">
                KR Funverse was born from a simple idea — to create Hyderabad&apos;s most exciting entertainment
                destination where friends, families, and colleagues can race, play, and celebrate together.
              </p>
              <p className="text-white/40 leading-relaxed mb-6 text-sm">
                Located in Ghatkesar, our facility features a professional Go Karting track, a Box Cricket
                arena, and a variety of Indoor Games — all in a safe, premium environment.
              </p>
              <Button href="/contact" variant="primary">
                <FaFlagCheckered className="mr-2" />
                Get In Touch
              </Button>
            </AnimatedSection>
            <AnimatedSection>
              <div className="h-80 md:h-96 rounded-2xl bg-surface border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <FaTrophy className="text-5xl text-accent/30 mx-auto mb-4" />
                  <p className="text-white/20 text-sm">KR Funverse Arena</p>
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
              OUR <span className="text-accent">VALUES</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 80}>
                  <div className="bg-surface rounded-xl border border-white/5 p-6 text-center hover:border-accent/20 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent text-xl" />
                    </div>
                    <h3 className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h3>
                    <p className="text-white/30 text-xs">{v.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <FaBullseye className="text-accent text-2xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              OUR <span className="text-accent">MISSION</span>
            </h2>
            <p className="text-white/40 leading-relaxed text-sm">
              To be Hyderabad&apos;s most loved entertainment destination — where every visit creates lasting
              memories, every race sparks joy, and every guest leaves with a smile.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
