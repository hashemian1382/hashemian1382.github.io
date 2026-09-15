import { useId } from "react";

/**
 * Signature emblem — a neural tree growing between code brackets,
 * rendered as pure strokes with the neon → cyan → azure gradient.
 */
export default function Emblem({ className }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const g = `emg-${uid}`;

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={g} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39ff88" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2f9bff" />
        </linearGradient>
      </defs>

      {/* outer arcs */}
      <path d="M 28 20 C 14 34, 14 66, 28 80" stroke="#39ff88" strokeWidth="5" strokeLinecap="round" />
      <path d="M 72 20 C 86 34, 86 66, 72 80" stroke="#2f9bff" strokeWidth="5" strokeLinecap="round" />

      {/* code brackets */}
      <path d="M 24 38 L 12 50 L 24 62" stroke="#39ff88" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 76 38 L 88 50 L 76 62" stroke="#2f9bff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

      {/* neural nodes */}
      <circle cx="50" cy="24" r="4.5" fill="#39ff88" />
      <circle cx="36" cy="34" r="4" fill="#39ff88" />
      <circle cx="64" cy="34" r="4" fill="#2f9bff" />
      <circle cx="32" cy="48" r="4.5" fill="#39ff88" />
      <circle cx="68" cy="48" r="4.5" fill="#2f9bff" />
      <circle cx="50" cy="44" r="4" fill="#38bdf8" />
      <circle cx="42" cy="60" r="4" fill="#39ff88" />
      <circle cx="58" cy="60" r="4" fill="#2f9bff" />
      <circle cx="50" cy="70" r="4" fill="#38bdf8" />

      {/* interconnects */}
      <path
        d="M50 24 L36 34 L32 48 L42 60 L50 70 L58 60 L68 48 L64 34 Z"
        stroke={`url(#${g})`}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M50 24 L50 44 M36 34 L50 44 L64 34 M32 48 L50 44 L68 48 M42 60 L50 44 L58 60"
        stroke={`url(#${g})`}
        strokeWidth="1.7"
      />

      {/* circuit traces */}
      <path
        d="M 50 74 L 50 86 M 42 64 L 42 78 L 36 84 M 58 64 L 58 78 L 64 84"
        stroke={`url(#${g})`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="88" r="2.4" fill="#38bdf8" />
      <circle cx="36" cy="86" r="2.4" fill="#39ff88" />
      <circle cx="64" cy="86" r="2.4" fill="#2f9bff" />
    </svg>
  );
}
