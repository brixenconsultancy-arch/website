"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated number that counts up when scrolled into view.
 * Parses a value like "$90M+", "300+", "60K", "2017" into
 * prefix + number + suffix and animates only the numeric part.
 */
export function CountUp({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = /^([^\d-]*)([\d.,]+)(.*)$/.exec(value);
    if (!match) {
      setDisplay(value);
      return;
    }
    const prefix = match[1];
    const raw = match[2].replace(/,/g, "");
    const suffix = match[3];
    const target = parseFloat(raw);
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || isNaN(target)) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${suffix}`);

    let raf = 0;
    let start = 0;
    const fmt = (n: number) =>
      `${prefix}${n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(fmt(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisplay(fmt(target));
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            raf = requestAnimationFrame(step);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
