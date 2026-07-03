import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import AnimatedSection from "@/components/AnimatedSection";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Pricing & Packages — Basic, Pro & Ultra",
  description: "View KR Funverse pricing — Basic, Pro, and Ultra packages. Choose the experience that fits your race day.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            CHOOSE YOUR <span className="text-accent">PACKAGE</span>
          </h1>
          <p className="text-white/40 text-center max-w-2xl mx-auto mb-14 text-sm">
            Pick your pace. From casual laps to full-throttle VIP — there&apos;s a package for every racer.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.id} delay={i * 100}>
              <PricingCard pkg={pkg} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
