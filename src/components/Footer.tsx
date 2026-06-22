import Image from "next/image";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-12 pb-28 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#" className="inline-flex items-center">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={1797}
                height={923}
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Complete, ready-to-launch websites for Indian small businesses —
              domain, hosting, design and support included, starting at just
              ₹5,999.
            </p>
          </div>

          <div className="flex gap-16">
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
          <p className="text-sm text-muted">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
