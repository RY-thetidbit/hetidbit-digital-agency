import { Check, Star } from "lucide-react";
import { pricingPlans, waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="bg-radial-glow absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label justify-center">Pricing</span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            One price.{" "}
            <span className="text-gradient-gold">Everything included.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            No hidden fees, no per-hour billing. Pick a plan and get your
            complete website — domain, hosting, SSL and setup all in.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlighted
                  ? "border-gold/40 bg-surface-elevated shadow-[0_30px_60px_-25px_rgba(5,150,105,0.55)] ring-1 ring-gold/10 lg:-mt-4 lg:mb-4"
                  : "border-border bg-surface"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-gold to-cyan text-white"
                      : "bg-surface-elevated text-gold ring-1 ring-gold/30"
                  }`}
                >
                  {plan.highlighted && <Star size={12} fill="currentColor" />}
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 min-h-[2.5rem] text-sm text-muted">
                {plan.tagline}
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-serif text-5xl text-foreground">
                  {plan.price}
                </span>
                <span className="mb-1.5 text-sm text-muted line-through">
                  {plan.originalPrice}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">{plan.period}</p>

              <a
                href={waLink(waMessages.plan(plan.name, plan.price))}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 ${plan.highlighted ? "btn-primary" : "btn-secondary"} w-full`}
              >
                <WhatsAppIcon size={16} className="opacity-80" />
                {plan.cta}
              </a>

              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => {
                  const isHeader = feature.endsWith(":");
                  return (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        isHeader ? "font-semibold text-foreground" : "text-muted"
                      }`}
                    >
                      {!isHeader && (
                        <Check
                          size={16}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0 text-gold"
                        />
                      )}
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 text-[11px] leading-relaxed text-muted">
                {plan.note}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Not sure which plan fits? {" "}
          <a
            href={waLink(waMessages.pricingHelp)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold hover:underline"
          >
            Chat with us on WhatsApp
          </a>{" "}
          — we&apos;ll help you choose.
        </p>
      </div>
    </section>
  );
}
