"use client";

import { useEffect, useRef, useState } from "react";

// Parses display strings like "2,500+", "₹5,999", "4.9★", "99%".
// Strings that aren't a single number (e.g. "3–5 days") are rendered static.
function parse(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  if (/\d/.test(suffix)) return null; // ranges / multi-number → no animation
  const hasSep = numStr.includes(",");
  const clean = numStr.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, num: parseFloat(clean), suffix, decimals, hasSep };
}

function format(n: number, decimals: number, hasSep: boolean) {
  const fixed = n.toFixed(decimals);
  if (!hasSep) return fixed;
  const [int, dec] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${grouped}.${dec}` : grouped;
}

// Counts a number up from zero when it scrolls into view.
export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);
  const [display, setDisplay] = useState(
    parsed
      ? `${parsed.prefix}${format(0, parsed.decimals, parsed.hasSep)}${parsed.suffix}`
      : value,
  );

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1500;
        let start = 0;
        const tick = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(
            `${parsed.prefix}${format(parsed.num * eased, parsed.decimals, parsed.hasSep)}${parsed.suffix}`,
          );
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
