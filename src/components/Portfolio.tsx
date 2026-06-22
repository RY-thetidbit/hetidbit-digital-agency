import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">Recent Work</span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Real businesses,{" "}
              <span className="text-gradient-gold">real websites</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              A few of the businesses we&apos;ve recently put online — beautiful,
              fast and ready to bring in customers.
            </p>
          </div>
          <a href="#pricing" className="btn-secondary shrink-0">
            Get Your Website
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <Image
                src={item.image}
                alt={`${item.title} website preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                  {item.category}
                </span>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-gold-light backdrop-blur-sm">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
