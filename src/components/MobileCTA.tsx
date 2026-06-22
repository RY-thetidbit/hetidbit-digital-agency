import { waLink, waMessages } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Sticky mobile action bar — WhatsApp is the primary action; pricing is the
// lighter secondary so visitors can still scan plans.
export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={waLink(waMessages.starter)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 text-sm"
        >
          <WhatsAppIcon size={18} />
          Chat on WhatsApp
        </a>
        <a
          href="#pricing"
          className="btn-secondary shrink-0 px-5 text-sm"
        >
          Plans
        </a>
      </div>
    </div>
  );
}
