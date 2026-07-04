import Link from "next/link";
import { FaClock, FaUsers, FaArrowRight, FaFlagCheckered, FaCheck } from "react-icons/fa";
import type { Activity } from "@/data/activities";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/15 transition-all duration-500">
      {/* Image */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${activity.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Stats overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          {activity.stats.map((stat) => (
            <div key={stat.label} className="bg-black/50 backdrop-blur-md rounded-lg px-2.5 py-1.5 text-center flex-1 border border-white/5">
              <div className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
              <div className="text-[7px] text-white/25 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Checkered flag corner */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaFlagCheckered className="gold-60 text-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 md:p-6">
        <h3
          className="text-lg font-bold text-white mb-1.5 group-hover:gold transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {activity.title}
        </h3>
        <p className="chrome-60 text-xs leading-relaxed mb-3">{activity.longDesc}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-3 text-xs chrome-40">
          <span className="flex items-center gap-1.5">
            <FaClock className="gold-60" size={10} />
            {activity.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUsers className="gold-60" size={10} />
            {activity.suitableFor}
          </span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {activity.highlights.map((h) => (
            <span key={h} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/5 border border-accent/8 text-[9px] accent-60">
              <FaCheck size={6} />
              {h}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={activity.ctaLink}
          className="inline-flex items-center gap-2 gold font-semibold text-sm group/link"
        >
          {activity.ctaText}
          <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" size={11} />
        </Link>
      </div>
    </article>
  );
}
