import { ArrowRight, BadgeCheck, Check, Sparkles } from "lucide-react";
import { heroStats, packageIncludes } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-radial-glow bg-grid absolute inset-0" />
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: pitch */}
          <div>
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm text-gold">
              <Sparkles size={14} />
              <span>2,500+ businesses online · Trusted across India</span>
            </div>

            <h1 className="animate-fade-up-delay-1 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              A complete website for your business —{" "}
              <span className="text-gradient-gold">just ₹5,999</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Free domain, free hosting, free SSL, Google Analytics and a
              mobile-ready design — all done for you and live in{" "}
              <span className="text-foreground">3–5 days</span>. No tech skills
              needed.
            </p>

            <div className="animate-fade-up-delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#pricing" className="btn-primary">
                Get My ₹5,999 Website
                <ArrowRight size={18} />
              </a>
              <a href="#included" className="btn-secondary">
                See What&apos;s Included
              </a>
            </div>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <BadgeCheck size={16} className="text-emerald-brand" />
                No hidden charges
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck size={16} className="text-emerald-brand" />
                100% done-for-you
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck size={16} className="text-emerald-brand" />
                Pay only when happy
              </span>
            </div>
          </div>

          {/* Right: lucrative ₹5,999 package card */}
          <div className="animate-fade-up-delay-2 relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 via-cyan/15 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-gold/25 bg-surface-elevated p-1 shadow-[0_24px_60px_-20px_rgba(5,150,105,0.45)]">
              <div className="rounded-[1.4rem] bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-gold/20">
                    Most Popular · Starter
                  </span>
                  <span className="rounded-full bg-emerald-brand/10 px-2.5 py-1 text-xs font-semibold text-emerald-brand">
                    Save 60%
                  </span>
                </div>

                <div className="mt-5 flex items-end gap-3">
                  <span className="font-serif text-5xl text-foreground">₹5,999</span>
                  <div className="mb-1.5">
                    <span className="block text-sm text-muted line-through">
                      ₹14,999
                    </span>
                    <span className="block text-xs text-muted">/ first year</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2.5">
                  {packageIncludes.slice(0, 7).map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-brand/15 text-emerald-brand">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-sm text-foreground/90">
                        {item.label}
                        {item.free && (
                          <span className="ml-1.5 rounded bg-emerald-brand/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-brand">
                            Free
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                  <p className="pl-7 text-sm text-gold">+ 5 more included →</p>
                </div>

                <a href="#pricing" className="btn-primary mt-6 w-full">
                  Claim This Offer
                  <ArrowRight size={18} />
                </a>
                <p className="mt-3 text-center text-xs text-muted">
                  Limited launch price · Renews from ₹1,499/year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="animate-fade-up-delay-3 mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {heroStats.map((item) => (
            <div key={item.label}>
              <p className="font-serif text-3xl text-gold md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
