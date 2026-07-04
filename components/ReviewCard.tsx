import { FaStar, FaGoogle } from "react-icons/fa";
import type { Review } from "@/data/reviews";
import { formatDate } from "@/utils/formatDate";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="bg-surface rounded-2xl border border-white/5 p-6 hover:border-steel/30 transition-all duration-300">
      {/* Google badge */}
      <div className="flex items-center gap-2 mb-4">
        <FaGoogle className="text-accent" size={16} />
        <span className="text-white/40 text-xs">Google Review</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < review.rating ? "text-accent" : "text-white/10"}
            size={14}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/60 text-sm leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div
          className="w-9 h-9 rounded-full bg-cover bg-center ring-2 ring-white/5"
          style={{ backgroundImage: `url(${review.photo})` }}
        />
        <div>
          <h4 className="text-sm font-semibold text-white/80">{review.name}</h4>
          <p className="text-[11px] text-white/30">{formatDate(review.date)}</p>
        </div>
      </div>
    </article>
  );
}
