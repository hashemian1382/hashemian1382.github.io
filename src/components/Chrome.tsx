import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang, useT } from "../i18n";
import Emblem from "./Emblem";

/* ---------------------------------- grain ---------------------------------- */
export function Grain() {
  return <div className="grain" aria-hidden />;
}

/* -------------------------------- cursor aura ------------------------------ */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    let visible = false;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
    };
    const leave = () => {
      visible = false;
      el.style.opacity = "0";
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate(${x - 220}px, ${y - 220}px)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden />;
}

/* --------------------------------- top bar --------------------------------- */
export function TopBar() {
  const { lang, setLang } = useLang();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.4 });
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v: number) => setScrolled(v > 30));

  return (
    <>
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-neon via-cyanx to-azure"
        style={{ scaleX: progress, originX: lang === "fa" ? 1 : 0 }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/[0.06] bg-void/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
          <a href="#hero" className="group flex items-center gap-3">
            <Emblem className="w-8 transition-transform duration-500 group-hover:rotate-[8deg]" />
            <span className="font-code text-[12px] tracking-wider text-faint">
              <b className="font-semibold text-ink">A.HASHEMIAN</b>
              <span className="mx-2 text-faint/50">/</span>
              <span className="hidden sm:inline">systems × intelligence</span>
            </span>
          </a>

          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            <button
              onClick={() => setLang("fa")}
              className={`rounded-full px-3.5 py-1.5 font-code text-[11px] font-semibold transition-all duration-300 ${
                lang === "fa" ? "bg-ink text-[#02110a]" : "text-dim hover:text-ink"
              }`}
            >
              فا
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3.5 py-1.5 font-code text-[11px] font-semibold tracking-wide transition-all duration-300 ${
                lang === "en" ? "bg-ink text-[#02110a]" : "text-dim hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

/* --------------------------------- dot nav --------------------------------- */
const NAV_ITEMS = [
  { id: "hero", fa: "معرفی", en: "Intro" },
  { id: "focus", fa: "ذهن چندبعدی", en: "Mindset" },
  { id: "systems", fa: "اصول مهندسی", en: "Systems" },
  { id: "education", fa: "تحصیلات", en: "Education" },
  { id: "work", fa: "آثار منتخب", en: "Work" },
  { id: "lab", fa: "آزمایشگاه", en: "Lab" },
  { id: "stack", fa: "زرادخانه", en: "Stack" },
  { id: "vision", fa: "چشم‌انداز", en: "Vision" },
  { id: "connect", fa: "ارتباط", en: "Connect" },
];

export function DotNav() {
  const t = useT();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed end-7 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex" aria-label="Section navigation">
      {NAV_ITEMS.map(({ id, fa, en }) => (
        <a key={id} href={`#${id}`} className="group relative block h-2 w-2">
          <span
            className={`block h-2 w-2 rounded-full transition-all duration-300 ${
              active === id ? "scale-125 bg-neon shadow-[0_0_12px_#39ff88]" : "bg-white/15 group-hover:bg-white/45"
            }`}
          />
          <span className="pointer-events-none absolute end-5 top-1/2 -translate-y-1/2 whitespace-nowrap font-code text-[10px] tracking-[0.2em] text-dim opacity-0 transition-all duration-300 group-hover:end-6 group-hover:opacity-100">
            {t(fa, en)}
          </span>
        </a>
      ))}
    </nav>
  );
}
