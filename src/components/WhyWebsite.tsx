import {
  Check,
  Clock,
  Globe,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import Reveal from "@/components/Reveal";

// Four dimensions, contrasted side by side. The parallel structure lets a
// business owner instantly feel the cost of staying offline.
const POINTS = [
  {
    icon: Search,
    without: "Invisible when customers search on Google",
    with: "Found first when locals search for what you offer",
  },
  {
    icon: Clock,
    without: "Enquiries stop the moment your shop closes",
    with: "Takes orders & enquiries 24/7 — even while you sleep",
  },
  {
    icon: ShieldCheck,
    without: "New customers doubt if you're real or reliable",
    with: "Looks professional and earns instant trust",
  },
  {
    icon: Globe,
    without: "Stuck with walk-ins and word-of-mouth only",
    with: "Reaches customers across your whole city",
  },
] as const;

// A mock phone search that pictures the headline: a customer searching, and the
// business with a website winning the top result while rivals stay buried.
function SearchMockup() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_60px_-25px_rgba(13,42,34,0.35)]">
      {/* Search bar */}
      <div className="border-b border-border bg-surface px-4 py-4">
        <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm">
          <Search size={16} className="shrink-0 text-muted" />
          <span className="text-foreground">cake shop near me</span>
          <span className="search-caret ml-0.5 inline-block h-4 w-px bg-foreground" />
          <span className="ml-auto flex items-center gap-1 text-xs text-muted">
            <MapPin size={13} /> Ambernath
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3 p-4">
        {/* Winner: has a website */}
        <div className="rounded-2xl border border-emerald-brand/30 bg-emerald-brand/5 p-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold">
              SC
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                Sweet Crumbs Bakery
              </p>
              <p className="truncate text-xs text-emerald-brand">
                sweetcrumbs.in
              </p>
            </div>
            <span className="ml-auto shrink-0 rounded-full bg-emerald-brand/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-brand">
              Top result
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            4.9 · Fresh cakes & custom orders · Order on WhatsApp
          </div>
        </div>

        {/* Losers: no website */}
        {["A local bakery", "Another sweet shop"].map((name) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-2xl border border-border p-3.5 opacity-50"
          >
            <span className="h-9 w-9 shrink-0 rounded-full bg-foreground/5" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-muted">{name}</p>
              <p className="text-xs text-muted/70">No website found</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyWebsite() {
  return (
    <section
      id="why-website"
      className="border-y border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <span className="section-label">The difference</span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Your next customer is searching{" "}
              <span className="text-gradient-gold">right now</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every day, people look up businesses like yours online. A website
              decides whether they find <em>you</em> — or your competitor sitting
              one search result away.
            </p>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <SearchMockup />
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* VS badge sits in the gap on desktop */}
          <span className="absolute top-1/2 left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background font-serif text-sm font-semibold text-muted shadow-lg lg:flex">
            VS
          </span>

          {/* Without a website */}
          <Reveal
            variant="left"
            className="rounded-3xl border border-border bg-surface p-8"
          >
            <div className="mb-6 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-muted">
                <X size={18} />
              </span>
              <h3 className="text-lg font-semibold text-muted">
                Without a website
              </h3>
            </div>
            <ul className="space-y-4">
              {POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.without}
                    className="flex items-start gap-3 text-muted"
                  >
                    <Icon size={18} className="mt-0.5 shrink-0 opacity-40" />
                    <span>{p.without}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* With your website */}
          <Reveal
            variant="right"
            delay={120}
            className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface-elevated p-8 shadow-[0_30px_60px_-30px_rgba(5,150,105,0.5)] ring-1 ring-gold/10"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-brand/15 text-emerald-brand">
                  <Check size={18} strokeWidth={3} />
                </span>
                <h3 className="text-lg font-semibold">
                  With your TheTidbit website
                </h3>
              </div>
              <ul className="space-y-4">
                {POINTS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.with} className="flex items-start gap-3">
                      <Icon
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-brand"
                      />
                      <span className="text-foreground/90">{p.with}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
