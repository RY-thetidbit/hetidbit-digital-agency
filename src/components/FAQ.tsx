"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="section-label">FAQ</span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Common{" "}
              <span className="text-gradient-gold">questions</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Everything you need to know before starting your project. Still
              have questions? Reach out — we&apos;re happy to help.
            </p>
            <a href="#contact" className="btn-secondary mt-8 inline-flex">
              Ask Us Anything
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border bg-surface overflow-hidden"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium transition-colors hover:text-gold"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-muted transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-5 pb-5 pt-0">
                      <p className="pt-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
