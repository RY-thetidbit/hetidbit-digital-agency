import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center shadow-[0_30px_70px_-30px_rgba(5,150,105,0.6)] md:px-16 md:py-20">
          <Image
            src="/work/office.jpg"
            alt="Our team building websites"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#065f46]/95 to-[#0f766e]/95" />
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Calendar size={14} />
              Limited launch price — ₹5,999
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl tracking-tight text-white md:text-5xl">
              Ready to get your business{" "}
              <span className="text-emerald-200">online today?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Grab your complete ₹5,999 website — free domain, hosting, SSL and
              Google Analytics included. Live in 3–5 days, no tech skills
              needed.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-emerald-700 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Get Your ₹5,999 Website
                <ArrowRight size={18} />
              </a>
            </div>

            <p className="mt-6 text-sm text-white/75">
              No hidden charges · Pay only when you&apos;re happy · 1 year free
              support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
