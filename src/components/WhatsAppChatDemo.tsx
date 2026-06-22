"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// A self-running WhatsApp conversation — styled like the real app so visitors
// instantly recognise it and think "I want that chat on my site too". It
// demos the "WhatsApp chat button" that ships free with every package.
const SCRIPT = [
  { from: "them", text: "Hi! Do you take cake orders? 🎂" },
  { from: "me", text: "Yes! What date do you need it? 😊" },
  { from: "them", text: "This Sunday, for 10 people 🎉" },
  { from: "me", text: "Perfect — sending the menu now! 🍰" },
] as const;

export default function WhatsAppChatDemo({
  className = "",
}: {
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setCount(SCRIPT.length));
      return () => cancelAnimationFrame(id);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    const run = (i: number) => {
      if (cancelled) return;
      if (i >= SCRIPT.length) {
        timers.push(
          setTimeout(() => {
            setCount(0);
            run(0);
          }, 3000),
        );
        return;
      }
      const isReply = SCRIPT[i].from === "me";
      const reveal = () => {
        if (cancelled) return;
        setTyping(false);
        setCount(i + 1);
        timers.push(setTimeout(() => run(i + 1), 1300));
      };
      if (isReply) {
        setTyping(true);
        timers.push(setTimeout(reveal, 1100));
      } else {
        timers.push(setTimeout(reveal, 650));
      }
    };

    timers.push(setTimeout(() => run(0), 900));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_50px_-12px_rgba(13,42,34,0.4)] ${className}`}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5 text-white">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
          SC
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-sm font-semibold">Sweet Crumbs Bakery</p>
          <p className="flex items-center gap-1 text-[11px] text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
            online
          </p>
        </div>
        <WhatsAppIcon size={18} className="text-white/90" />
      </div>

      {/* Conversation */}
      <div className="flex h-44 flex-col justify-end gap-1.5 bg-[#ece5dd] px-3 py-3">
        {SCRIPT.slice(0, count).map((m, i) => (
          <div
            key={i}
            className={`msg-in flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`max-w-[80%] rounded-lg px-2.5 py-1.5 text-[12px] leading-snug shadow-sm ${
                m.from === "me"
                  ? "rounded-br-sm bg-[#dcf8c6] text-[#0b3d2e]"
                  : "rounded-bl-sm bg-white text-foreground"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}

        {typing && (
          <div className="flex justify-end">
            <span className="flex items-center gap-1 rounded-lg rounded-br-sm bg-[#dcf8c6] px-3 py-2 shadow-sm">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#0b3d2e]/50" />
              <span
                className="typing-dot h-1.5 w-1.5 rounded-full bg-[#0b3d2e]/50"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="typing-dot h-1.5 w-1.5 rounded-full bg-[#0b3d2e]/50"
                style={{ animationDelay: "0.4s" }}
              />
            </span>
          </div>
        )}
      </div>

      {/* "Included free" tag */}
      <div className="flex items-center justify-center gap-1.5 bg-white py-2 text-[11px] font-semibold text-emerald-brand">
        <WhatsAppIcon size={13} />
        Live chat — included free
      </div>
    </div>
  );
}
