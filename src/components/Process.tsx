import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="section-label">Process</span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
            Your website live in{" "}
            <span className="text-gradient-gold">4 simple steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            No meetings, no jargon, no waiting weeks. Just share your details
            and we handle the rest — start to live in under a week.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < processSteps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-gold/40 to-transparent lg:block" />
              )}
              <div className="rounded-2xl border border-border bg-background p-6">
                <span className="font-serif text-4xl text-gold/30">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
