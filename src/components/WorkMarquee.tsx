import Image from "next/image";

const shots = [
  { src: "/work/bakery.jpg", label: "Sweet Crumbs Bakery", tier: "Starter" },
  { src: "/work/boutique.jpg", label: "Aalia Boutique", tier: "Online Store" },
  { src: "/work/clinic.jpg", label: "Mehta Dental Care", tier: "Business" },
  { src: "/work/office.jpg", label: "Local Service Co.", tier: "Custom" },
  { src: "/work/laptop.jpg", label: "Analytics Dashboard", tier: "Included" },
];

function Card({
  src,
  label,
  tier,
}: {
  src: string;
  label: string;
  tier: string;
}) {
  return (
    <figure className="relative mr-5 h-48 w-72 shrink-0 overflow-hidden rounded-2xl border border-border md:h-56 md:w-80">
      <Image
        src={src}
        alt={`${label} website`}
        fill
        sizes="320px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-4">
        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
          {tier}
        </span>
        <p className="mt-1.5 text-sm font-semibold text-white">{label}</p>
      </figcaption>
    </figure>
  );
}

// Auto-scrolling band of recent launches. The track holds two copies of the
// list and slides to -50%, so it loops seamlessly. Pauses on hover.
export default function WorkMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-surface/30 py-16 md:py-20">
      <div className="mx-auto mb-10 max-w-6xl px-6 text-center">
        <span className="section-label justify-center">Recently launched</span>
        <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-4xl">
          A glimpse of{" "}
          <span className="text-gradient-gold">
            businesses we&apos;ve put online
          </span>
        </h2>
      </div>

      <div
        className="relative flex w-max"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee flex w-max">
          {[...shots, ...shots].map((s, i) => (
            <Card key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
