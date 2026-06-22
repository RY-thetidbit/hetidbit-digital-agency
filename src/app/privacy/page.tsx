import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name} website services.`,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <Link href="/" className="text-sm text-gold hover:underline">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-serif text-4xl tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-muted">Last updated: June 2026</p>

      <div className="mt-10 space-y-6 text-muted leading-relaxed">
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy.
          This policy explains what information we collect when you visit our
          website or contact us, and how we use it.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            Information we collect
          </h2>
          <p className="mt-2">
            When you contact us via WhatsApp, email, phone, or our enquiry form,
            we may collect your name, phone number, business name, and any
            details you choose to share about your project.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            How we use your information
          </h2>
          <p className="mt-2">
            We use your information only to respond to enquiries, provide
            website services, send project updates, and improve our offerings.
            We do not sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Analytics</h2>
          <p className="mt-2">
            We may use Google Analytics to understand how visitors use our
            website. This helps us improve the site experience. Analytics data
            is aggregated and does not personally identify you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Email us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            or call {siteConfig.phone}.
          </p>
        </section>
      </div>
    </main>
  );
}
