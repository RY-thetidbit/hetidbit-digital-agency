import { waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Floating WhatsApp button for desktop — the always-visible way to reach you
// from any point on the page. On mobile the sticky bottom bar covers this, so
// it's hidden there to avoid a redundant, overlapping control.
export default function WhatsAppFAB() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-6 bottom-6 z-50 hidden md:block"
    >
      {/* Label pill (desktop, on hover) */}
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-sm font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative inline-flex">
        <span className="wa-fab-ring" />
        <span className="wa-fab relative">
          <WhatsAppIcon size={28} />
        </span>
      </span>
    </a>
  );
}
