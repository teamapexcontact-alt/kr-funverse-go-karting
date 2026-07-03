import type { Metadata } from "next";
import Map from "@/components/Map";
import AnimatedSection from "@/components/AnimatedSection";
import { FaPhone, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaEnvelope, FaLocationArrow, FaFlagCheckered } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with KR Funverse. Call, WhatsApp, email, or visit us in Ghatkesar, Hyderabad.",
};

const contactDetails = [
  { icon: FaPhone, color: "text-accent", bg: "bg-accent/10", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: FaWhatsapp, color: "text-emerald-400", bg: "bg-emerald-500/10", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919876543210" },
  { icon: FaInstagram, color: "text-pink-400", bg: "bg-pink-500/10", label: "Instagram", value: "@krfunverse", href: "https://instagram.com/krfunverse" },
  { icon: FaEnvelope, color: "text-accent", bg: "bg-accent/10", label: "Email", value: "hello@krfunverse.com", href: "mailto:hello@krfunverse.com" },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            GET IN <span className="text-accent">TOUCH</span>
          </h1>
          <p className="text-white/40 text-center max-w-2xl mx-auto mb-14 text-sm">
            We&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <AnimatedSection direction="left">
            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 bg-surface rounded-xl border border-white/5 p-5 hover:border-accent/20 transition-all group"
                  >
                    <div className={`w-11 h-11 rounded-xl ${detail.bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`${detail.color} text-lg`} />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/30 tracking-wider uppercase">{detail.label}</p>
                      <p className="text-white/80 font-medium text-sm">{detail.value}</p>
                    </div>
                  </a>
                );
              })}

              <div className="flex items-start gap-4 bg-surface rounded-xl border border-white/5 p-5">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-[11px] text-white/30 tracking-wider uppercase">Location</p>
                  <p className="text-white/80 font-medium text-sm">Rampally, Yamnapmet, Ghatkesar, Hyderabad</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-surface rounded-xl border border-white/5 p-5">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <FaClock className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-[11px] text-white/30 tracking-wider uppercase">Working Hours</p>
                  <p className="text-white/80 font-medium text-sm">Mon - Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=KR+Funverse+Ghatkesar+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-accent/10 rounded-xl border border-accent/20 p-5 hover:bg-accent/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <FaLocationArrow className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-[11px] text-accent/60 tracking-wider uppercase">Navigation</p>
                  <p className="text-white/80 font-medium text-sm">Get Directions →</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Map />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
