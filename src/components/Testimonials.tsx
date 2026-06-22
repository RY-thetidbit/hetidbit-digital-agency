import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="reviews" className="border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label justify-center">Reviews</span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            Loved by{" "}
            <span className="text-gradient-gold">business owners</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border bg-background p-8"
            >
              <Quote size={28} className="text-gold/40" />
              <p className="mt-4 flex-1 leading-relaxed text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                  {testimonial.metric}
                </span>
                <p className="mt-3 font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
