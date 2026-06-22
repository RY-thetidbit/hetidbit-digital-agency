"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "fade" | "scale" | "left" | "right";

const hiddenState: Record<Variant, string> = {
  up: "opacity-0 translate-y-8",
  fade: "opacity-0",
  scale: "opacity-0 scale-95",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
};

// Scroll-triggered reveal. Animates once when the element enters the viewport.
// Pass `delay` (ms) on siblings to create a stagger. Reduced-motion safe.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : hiddenState[variant]
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
