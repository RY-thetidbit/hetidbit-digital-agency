import { outcomeHighlights, waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 via-surface to-surface p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Why go online</span>
              <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
                A website works for you{" "}
                <span className="text-gradient-gold">around the clock</span>
              </h2>
              <p className="mt-4 text-lg text-muted">
                Your customers are already searching on Google and WhatsApp. A
                professional site helps them find you, trust you, and reach out
                — even when your shop is closed.
              </p>
              <a
                href={waLink(waMessages.starter)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex"
              >
                <WhatsAppIcon size={16} className="opacity-80" />
                Get Your ₹5,999 Website
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {outcomeHighlights.map((item, index) => (
                <Reveal
                  key={item.label}
                  variant="scale"
                  delay={index * 120}
                  className="card-lift rounded-2xl border border-border bg-background/60 p-6 text-center"
                >
                  <p className="font-serif text-4xl text-gold md:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
