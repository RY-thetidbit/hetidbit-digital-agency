"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <a href="#" className="group flex items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={160}
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
          <a href="#pricing" className="btn-primary text-sm">
            Get ₹5,999 Website
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
                href="#pricing"
                className="btn-primary w-full text-sm"
                onClick={() => setOpen(false)}
              >
                Get ₹5,999 Website
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
