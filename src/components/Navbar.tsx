"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig, waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <a href="#" className="group flex items-center gap-2">
          <Image
            src={siteConfig.logoHeader}
            alt={siteConfig.name}
            width={1341}
            height={947}
            priority
            className="h-14 w-auto md:h-16"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={waLink(waMessages.starter)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-muted transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink(waMessages.starter)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-sm"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon size={18} />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
