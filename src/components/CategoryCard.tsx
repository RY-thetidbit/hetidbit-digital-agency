import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  categoryWaMessage,
  websiteCategories,
  waLink,
} from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type Category = (typeof websiteCategories)[number];

export default function CategoryCard({
  category,
  compact = false,
}: {
  category: Category;
  compact?: boolean;
}) {
  return (
    <article
      className={`card-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-background ${
        compact ? "" : "h-full"
      }`}
    >
      <div className={`relative overflow-hidden ${compact ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={category.image}
          alt={`${category.name} website example`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
          {category.plan}
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-6"}`}>
        <h3 className="font-serif text-xl tracking-tight md:text-2xl">
          {category.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted md:text-base">
          {category.description}
        </p>

        <div className="mt-5 rounded-xl border border-border bg-surface/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">
            Popular example
          </p>
          <a
            href={category.exampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-between gap-3 font-semibold text-foreground transition-colors hover:text-gold"
          >
            <span>{category.exampleName}</span>
            <ExternalLink size={16} className="shrink-0 opacity-60" />
          </a>
          <p className="mt-1 text-xs text-muted">
            Visit their live site for inspiration
          </p>
        </div>

        <div className={`flex gap-3 ${compact ? "mt-4" : "mt-5"}`}>
          <a
            href={waLink(categoryWaMessage(category.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1 text-sm"
          >
            <WhatsAppIcon size={16} />
            Get mine
          </a>
          {!compact && (
            <a
              href={category.exampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 px-4 text-sm"
              aria-label={`View ${category.exampleName} website`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
