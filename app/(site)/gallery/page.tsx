import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from KR Funverse — Go Karting, Box Cricket, Indoor Games, and events.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="text-accent">GALLERY</span>
          </h1>
          <p className="text-white/40 text-center max-w-2xl mx-auto mb-12 text-sm">
            A glimpse into the excitement at KR Funverse.
          </p>
        </AnimatedSection>
        <GalleryGrid />
      </div>
    </div>
  );
}
