import { Check, Gift } from "lucide-react";
import { packageIncludes } from "@/lib/constants";
import WhatsAppChatDemo from "@/components/WhatsAppChatDemo";

export default function Included() {
  return (
    <section
      id="included"
      className="border-y border-border bg-surface/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-label">What&apos;s Included</span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Everything you need to be online —{" "}
              <span className="text-gradient-gold">in one ₹5,999 package</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Other agencies charge separately for domain, hosting, SSL, design
              and analytics. We bundle it all together so you get a complete,
              professional website without the surprise bills.
            </p>

            {/* Live demo of the included WhatsApp chat — proves the feature
                right where it's being sold. */}
            <WhatsAppChatDemo className="mt-8 max-w-md" />

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-emerald-brand/30 bg-emerald-brand/5 px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-brand/15 text-emerald-brand">
                <Gift size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Worth ₹14,999+ — yours for ₹5,999
                </p>
                <p className="text-xs text-muted">
                  Domain, hosting, SSL & support all free for year one
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {packageIncludes.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-gold/30"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Check size={14} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug">
                    {item.label}
                    {item.free && (
                      <span className="ml-1.5 rounded bg-emerald-brand/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-brand">
                        Free
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
