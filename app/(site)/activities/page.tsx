import type { Metadata } from "next";
import ActivityCard from "@/components/ActivityCard";
import AnimatedSection from "@/components/AnimatedSection";
import { activities } from "@/data/activities";

export const metadata: Metadata = {
  title: "Activities",
  description: "Explore Go Karting, Box Cricket, and Indoor Games at KR Funverse in Hyderabad.",
};

export default function ActivitiesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            CHOOSE YOUR <span className="accent-100">ADVENTURE</span>
          </h1>
          <p className="chrome-60 text-center max-w-2xl mx-auto mb-14 text-sm">
            Speed, strategy, or fun — pick your arena.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <AnimatedSection key={activity.id} delay={i * 150}>
              <ActivityCard activity={activity} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
