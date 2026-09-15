import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="mb-9 flex items-center gap-4 font-code text-[11px] font-medium uppercase tracking-[0.3em] text-faint">
      <span className="text-neon">{num}</span>
      <span className="whitespace-nowrap">{children}</span>
      <span className="h-px flex-1 bg-white/[0.08]" />
    </div>
  );
}

export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1700,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(to * e);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Brand icon (removed from lucide) — GitHub mark */
export function GithubIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.37 0 0 5.4 0 12.06c0 5.32 3.44 9.83 8.2 11.42.6.12.82-.26.82-.58v-2.02c-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.86 2.83 1.32 3.52 1 .1-.79.42-1.32.76-1.62-2.67-.3-5.47-1.35-5.47-6a4.7 4.7 0 0 1 1.25-3.26c-.13-.31-.54-1.55.12-3.23 0 0 1.02-.33 3.35 1.25a11.5 11.5 0 0 1 6.1 0c2.32-1.58 3.34-1.25 3.34-1.25.66 1.68.25 2.92.12 3.23a4.7 4.7 0 0 1 1.25 3.26c0 4.66-2.8 5.7-5.48 6 .43.38.81 1.13.81 2.28v3.38c0 .32.22.7.83.58A12.06 12.06 0 0 0 24 12.06C24 5.4 18.63 0 12 0z" />
    </svg>
  );
}
