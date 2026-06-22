import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of service for ${siteConfig.name} website packages.`,
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <Link href="/" className="text-sm text-gold hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-serif text-4xl tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-muted">Last updated: June 2026</p>

      <div className="mt-10 space-y-6 text-muted leading-relaxed">
        <p>
          By purchasing a website package from {siteConfig.name}, you agree to
          these terms.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Services</h2>
          <p className="mt-2">
            We provide website design, domain registration, hosting setup, SSL,
            and related services as described in your chosen plan. Delivery
            timelines are estimates — typically 3–5 days for Starter plans once
            we receive your content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Payment</h2>
          <p className="mt-2">
            Package prices are as listed on our website. Introductory pricing
            applies to the first year. Domain and hosting renew annually at the
            rates stated on each plan. We will notify you before any renewal
            charge.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Satisfaction guarantee
          </h2>
          <p className="mt-2">
            We include reasonable revisions during the design phase. You approve
            the final design before launch. If we cannot deliver what was agreed,
            we will work with you to resolve the issue fairly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Your content</h2>
          <p className="mt-2">
            You are responsible for the text, images, and information you provide.
            You confirm you have the right to use all materials supplied for your
            website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            For questions about these terms, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
