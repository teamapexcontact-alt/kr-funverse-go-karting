import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Book Your Experience",
  description: "Book Go Karting, Box Cricket, or Indoor Games at KR Funverse. Easy online booking with instant confirmation.",
};

export default function BookingPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">
            Book Your <span className="text-accent">Experience</span>
          </h1>
          <p className="text-white/40 text-center max-w-2xl mx-auto mb-12 text-sm">
            Pick your activity, choose a slot, and secure your booking in seconds.
          </p>
        </AnimatedSection>

        <div className="bg-surface rounded-2xl border border-white/5 p-6 md:p-8 max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
