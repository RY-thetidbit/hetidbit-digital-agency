import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";

const socialLabels: Record<keyof typeof siteConfig.socials, string> = {
  instagram: "IG",
  facebook: "FB",
  youtube: "YT",
};

export default function Footer() {
  return (
    <footer className="border-t border-border pt-12 pb-28 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={400}
                height={206}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Complete, ready-to-launch websites for Indian small businesses —
              domain, hosting, design and support included, starting at just
              ₹5,999.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {(
                Object.entries(siteConfig.socials) as [
                  keyof typeof socialLabels,
                  string,
                ][]
              ).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-2 text-xs font-semibold text-muted transition-colors hover:border-gold/40 hover:text-gold"
                  aria-label={key}
                >
                  {socialLabels[key]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <p className="text-sm font-semibold">Navigate</p>
              <ul className="mt-4 space-y-2">
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
            </div>
            <div>
              <p className="text-sm font-semibold">Contact</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <p className="max-w-[14rem] text-sm text-muted">
                    {siteConfig.address}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <span>{siteConfig.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
