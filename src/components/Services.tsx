import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="section-label">Why Bharat.style</span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            Why thousands of businesses{" "}
            <span className="text-gradient-gold">choose us</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We make getting online simple and affordable — one honest price,
            everything done for you, no technical headaches.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-gold/30 hover:bg-surface-elevated"
            >
              <span className="text-sm font-medium text-gold/60">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
