import { stats } from "@/lib/constants";

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/10 via-surface to-surface p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">Results</span>
              <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
                Trusted by businesses{" "}
                <span className="text-gradient-gold">across India</span>
              </h2>
              <p className="mt-4 text-lg text-muted">
                From bakeries to boutiques to clinics — thousands of small
                businesses have gone online with us, quickly and affordably.
              </p>
              <a href="#pricing" className="btn-primary mt-8 inline-flex">
                Get Your ₹5,999 Website
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background/60 p-6 text-center"
                >
                  <p className="font-serif text-4xl text-gold md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
