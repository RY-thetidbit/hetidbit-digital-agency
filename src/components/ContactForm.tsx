"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Let&apos;s get your business{" "}
              <span className="text-gradient-gold">online</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us about your business and the plan you want. We&apos;ll reply
              within 24 hours — or message us on WhatsApp for an instant
              response.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <Mail size={18} className="text-gold" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <Phone size={18} className="text-gold" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                  <MessageCircle size={18} className="text-emerald-brand" />
                </span>
                Chat instantly on WhatsApp
              </a>
              <div className="flex items-start gap-3 text-muted">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <MapPin size={18} className="text-gold" />
                </span>
                <span className="pt-2">{siteConfig.address}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Send size={28} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 text-muted">
                  We&apos;ll be in touch within 24 hours to schedule your free
                  strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" className="mb-2 block text-sm font-medium">
                      Plan you want
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      defaultValue="Starter — ₹5,999"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/50"
                    >
                      <option>Starter — ₹5,999</option>
                      <option>Business — ₹11,999</option>
                      <option>Premium Store — ₹24,999</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="mb-2 block text-sm font-medium">
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="Your business / shop name"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="What does your business do? Any pages or features you want?"
                    className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <ArrowRight size={18} />
                </button>
                <p className="text-center text-xs text-muted">
                  Free consultation · No spam · Response within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
