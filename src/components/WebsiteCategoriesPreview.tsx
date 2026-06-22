import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { websiteCategories } from "@/lib/constants";
import CategoryCard from "@/components/CategoryCard";
import Reveal from "@/components/Reveal";

const PREVIEW_COUNT = 6;

export default function WebsiteCategoriesPreview() {
  const preview = websiteCategories.slice(0, PREVIEW_COUNT);

  return (
    <section id="categories" className="border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-label">Website types</span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Websites for{" "}
              <span className="text-gradient-gold">every business</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Whether you run a bakery, clinic, salon, or online store — we
              build the right website for your industry. See popular examples
              from each category.
            </p>
          </div>
          <Link href="/website-categories" className="btn-primary shrink-0">
            <LayoutGrid size={18} />
            View all categories
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((category, index) => (
            <Reveal key={category.slug} delay={index * 100}>
              <CategoryCard category={category} compact />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          +{websiteCategories.length - PREVIEW_COUNT} more categories including
          gym, real estate &amp; more —{" "}
          <Link
            href="/website-categories"
            className="font-medium text-gold hover:underline"
          >
            explore all
          </Link>
        </p>
      </div>
    </section>
  );
}
