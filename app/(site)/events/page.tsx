import type { Metadata } from "next";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import { FaBirthdayCake, FaBuilding, FaSchool, FaGraduationCap, FaLock, FaFlagCheckered } from "react-icons/fa";

const eventTypes = [
  { icon: FaBirthdayCake, title: "Birthday Parties", desc: "Activities, food, and a dedicated party area. Customizable packages.", color: "text-pink-400" },
  { icon: FaBuilding, title: "Corporate Events", desc: "Team building, offsites, and celebrations. We handle everything.", color: "text-blue-400" },
  { icon: FaSchool, title: "School Trips", desc: "Supervised activities with group packages for students.", color: "text-emerald-400" },
  { icon: FaGraduationCap, title: "College Events", desc: "Fests, freshers, and group outings. Special discounts available.", color: "text-accent" },
  { icon: FaLock, title: "Private Bookings", desc: "Host a private event with exclusive access to activities.", color: "text-accent" },
];

export const metadata: Metadata = {
  title: "Events",
  description: "Host birthday parties, corporate events, school trips, and college events at KR Funverse.",
};

export default function EventsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            EVENTS & <span className="text-accent">PARTIES</span>
          </h1>
          <p className="text-white/40 text-center max-w-2xl mx-auto mb-14 text-sm">
            Birthday, corporate, school, or private â€” we make every event special.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, i) => {
            const Icon = event.icon;
            return (
              <AnimatedSection key={event.title} delay={i * 80}>
                <div className="bg-surface rounded-2xl border border-white/5 p-6 hover:border-accent/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className={`${event.color} text-xl`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{event.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{event.desc}</p>
                  <Button href="/contact" variant="outline" size="sm">
                    <FaFlagCheckered className="mr-1" size={10} />
                    Inquire Now
                  </Button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
