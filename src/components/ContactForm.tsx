"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // WhatsApp-first: the form has no backend — instead it composes a tidy
  // message from the fields and opens a WhatsApp chat pre-filled with it, so
  // the enquiry lands straight in your inbox ready to reply.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) || "").toString().trim();

    const phone = get("phone").replace(/\s/g, "");
    const phoneOk = /^(?:\+91|91)?[6-9]\d{9}$/.test(phone);
    if (!phoneOk) {
      alert("Please enter a valid Indian mobile number (10 digits).");
      return;
    }

    const lines = [
      "Hi TheTidbit Tech! I'd like to get a website. Here are my details:",
      "",
      `• Name: ${get("name") || "-"}`,
      `• Business: ${get("business") || "-"}`,
      `• Phone: ${get("phone") || "-"}`,
      `• Plan: ${get("plan") || "-"}`,
    ];
    const message = get("message");
    if (message) lines.push(`• About: ${message}`);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
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
              The fastest way to start is a quick WhatsApp message — we usually
              reply within minutes. Prefer a form? Fill it in and it&apos;ll open
              WhatsApp with your details ready to send.
            </p>

            {/* Primary: WhatsApp */}
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-whatsapp/30 bg-whatsapp/5 p-5 transition-colors hover:bg-whatsapp/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
                <WhatsAppIcon size={24} />
              </span>
              <span>
                <span className="block font-semibold text-foreground">
                  Chat on WhatsApp
                </span>
                <span className="block text-sm text-muted">
                  Instant replies · 9 AM–9 PM, all 7 days
                </span>
              </span>
            </a>

            {/* Secondary contact details */}
            <div className="mt-8 space-y-4">
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
              <div className="flex items-start gap-3 text-muted">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <MapPin size={18} className="text-gold" />
                </span>
                <span className="pt-2">{siteConfig.address}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                  <WhatsAppIcon size={30} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">WhatsApp opened!</h3>
                <p className="mt-2 text-muted">
                  Just hit send in WhatsApp and we&apos;ll get right back to you.
                  Didn&apos;t open?{" "}
                  <a
                    href={waLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-whatsapp hover:underline"
                  >
                    Tap here to chat
                  </a>
                  .
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
                    placeholder="Your name"
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
                    Tell us about your business{" "}
                    <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="What does your business do? Any pages or features you want?"
                    className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <button type="submit" className="btn-whatsapp w-full">
                  <WhatsAppIcon size={18} />
                  Send on WhatsApp
                </button>
                <p className="text-center text-xs text-muted">
                  Opens WhatsApp with your details · No spam · Reply within minutes
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
