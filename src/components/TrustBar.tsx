import { Shield, Star, Zap } from "lucide-react";
import { trustBadges } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="text-sm font-medium tracking-wide uppercase opacity-60"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm">
              <Shield size={18} className="text-gold" />
              <span>1 year free support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star size={18} className="text-gold" />
              <span>4.9 average rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap size={18} className="text-gold" />
              <span>Live in 3–5 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
