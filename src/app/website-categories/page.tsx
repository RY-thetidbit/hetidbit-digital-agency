import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import MobileCTA from "@/components/MobileCTA";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { siteConfig, websiteCategories, waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: `Website Categories & Examples | ${siteConfig.name}`,
  description:
    "Explore website types for bakeries, clinics, salons, restaurants, coaching, online stores and more — with popular real-world examples from each category.",
};

export default function WebsiteCategoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-surface/40 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <span className="section-label mt-8">Website categories</span>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl">
              Find the perfect website for{" "}
              <span className="text-gradient-gold">your business type</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Browse by industry, see how top brands in India present themselves
              online, and get a similar professional website — starting at just
              ₹5,999 with domain, hosting and SSL included.
            </p>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 inline-flex"
            >
              <WhatsAppIcon size={18} />
              Not sure? Chat with us
            </a>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {websiteCategories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Don&apos;t see your business type?
            </h2>
            <p className="mt-4 text-lg text-muted">
              We build websites for almost every industry — kirana stores,
              photographers, CA firms, NGOs, and more. Tell us what you do and
              we&apos;ll design the right site for you.
            </p>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              <WhatsAppIcon size={18} className="opacity-90" />
              Describe my business on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
      <WhatsAppFAB />
    </>
  );
}
