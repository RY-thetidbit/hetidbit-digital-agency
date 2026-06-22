import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <a href="#pricing" className="btn-primary flex-1 text-sm">
          Get ₹5,999 Website
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-brand text-[#052e1c]"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </div>
  );
}
