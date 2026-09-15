import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, GraduationCap, Mail, MapPin } from "lucide-react";
import NeuralCanvas from "./NeuralCanvas";
import Emblem from "./Emblem";
import { CountUp, GithubIcon, Reveal } from "./fx";
import { useT } from "../i18n";

/* ------------------------------ CLI clone bar ------------------------------ */
function CliBar() {
  const [copied, setCopied] = useState(false);
  const cmd = "git clone https://github.com/hashemian1382";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = cmd;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1700);
  };

  return (
    <div
      dir="ltr"
      className="inline-flex max-w-full items-center gap-3 rounded-xl border border-white/10 bg-[#070a0e]/90 py-2.5 pe-2.5 ps-4 font-code text-[12px] text-dim shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur sm:text-[12.5px]"
    >
      <span className="font-semibold text-neon">$</span>
      <span className="truncate text-ink/90">{cmd}</span>
      <span className="blink text-neon">▌</span>
      <button
        onClick={copy}
        className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-1.5 text-faint transition-colors hover:border-cyanx/40 hover:text-cyanx"
        aria-label="Copy command"
        title="Copy"
      >
        {copied ? <Check size={13} className="text-neon" /> : <Copy size={13} />}
      </button>
    </div>
  );
}

/* ---------------------------------- hero ----------------------------------- */
export default function Hero() {
  const t = useT();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={heroRef} id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* backdrop stack */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000,transparent)]" />
      <NeuralCanvas className="absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 start-[-10%] h-[520px] w-[520px] rounded-full bg-neon/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-20%] end-[-8%] h-[560px] w-[560px] rounded-full bg-azure/[0.07] blur-[140px]" />
      <Emblem className="float-slow pointer-events-none absolute end-[-7%] top-1/2 hidden w-[46vw] max-w-[580px] -translate-y-1/2 opacity-[0.05] blur-[1.5px] lg:block" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-28 pt-36">
        <Reveal delay={0.05}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-code text-[11px] tracking-wide text-dim backdrop-blur">
            <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-neon" />
            {t("در دسترس برای همکاری‌های منتخب", "Available for select collaborations")}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="font-disp mt-8 text-[clamp(46px,9vw,96px)] leading-[1.1]">
            {t(
              <>
                علی <span className="grad-text grad-anim">هاشمیان</span>
              </>,
              <>
                Ali <span className="grad-text grad-anim">Hashemian</span>
              </>
            )}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 font-code text-[11px] uppercase tracking-[0.18em] text-faint md:text-[13px]">
            <span className="text-neon/70">[</span>{" "}
            {t("مهندس فول‌استک × معمار سیستم‌های هوش مصنوعی مولد", "FULL-STACK ENGINEER × GENERATIVE AI SYSTEMS ARCHITECT")}{" "}
            <span className="text-azure/70">]</span>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-7 max-w-[680px] text-[15.5px] leading-9 text-dim md:text-[17px]">
            {t(
              <>
                می‌سازم در نقطه‌ی تلاقی <b className="font-semibold text-ink">تئوری ریاضیات</b>،{" "}
                <b className="font-semibold text-ink">معماری سیستم‌های توزیع‌شده</b> و مدل‌سازی سیستم‌های پیچیده — جایی که دقت
                آکادمیک شریف به سرعت اجرای محصول واقعی پیوند می‌خورد.
              </>,
              <>
                Building at the intersection of <b className="font-semibold text-ink">mathematical theory</b>,{" "}
                <b className="font-semibold text-ink">distributed-systems architecture</b>, and complex-systems modeling —
                where Sharif-grade rigor meets production velocity.
              </>
            )}
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-code text-[11.5px] text-faint">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} className="text-neon/70" />
              {t("تهران، ایران", "Tehran, Iran")}
            </span>
            <span className="text-faint/40">·</span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={13} className="text-cyanx/80" />
              {t("مهندسی کامپیوتر، دانشگاه صنعتی شریف", "Sharif University of Technology")}
            </span>
            <span className="text-faint/40">·</span>
            <span>{t("۱۰+ سال کدنویسی عمیق", "10+ yrs of deep code craft")}</span>
          </div>
        </Reveal>

        <Reveal delay={0.44}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <CliBar />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/hashemian1382"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-[#02110a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_#39ff88,0_16px_44px_rgba(57,255,136,0.22)]"
            >
              <GithubIcon size={17} />
              GitHub
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:aho.hashemian@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-azure hover:text-azure"
            >
              <Mail size={16} />
              {t("ارسال ایمیل", "Get in touch")}
            </a>
          </div>
        </Reveal>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-code text-[9.5px] uppercase tracking-[0.3em] text-faint">{t("اسکرول", "Scroll")}</span>
        <span className="scroll-line block h-9 w-px bg-white/10" />
      </div>
    </section>
  );
}

/* ------------------------------ stats ribbon ------------------------------- */
const STATS = [
  { k: "01", to: 10, suffix: "+", decimals: 0, prefix: "", fa: "سال کدنویسی عمیق و مداوم", en: "Years of hands-on code craft" },
  { k: "02", to: 15, suffix: "+", decimals: 0, prefix: "", fa: "معماری کامل محصول و پژوهش", en: "Production & research architectures" },
  { k: "03", to: 20, suffix: "+", decimals: 0, prefix: "", fa: "تکنولوژی و استک مسلط", en: "Mastered tools & stacks" },
  { k: "04", to: 0.9, suffix: "s", decimals: 1, prefix: "<", fa: "بودجه‌ی تأخیر سیستم‌های استریمینگ", en: "Streaming-systems latency budget" },
];

export function Stats() {
  const t = useT();
  return (
    <section className="relative border-b border-white/[0.06] bg-panel/40">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 px-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.k}
            className="border-t border-white/[0.06] py-9 pe-4 ps-1 transition-colors duration-500 hover:bg-white/[0.015] max-lg:[&:nth-child(-n+2)]:border-t-0 md:px-8 md:py-11 lg:border-s lg:border-t-0 lg:first:border-s-0"
          >
            <Reveal delay={i * 0.08}>
              <div className="mb-4 font-code text-[10px] tracking-[0.3em] text-faint">{s.k}</div>
              <div className={`font-disp text-4xl md:text-[2.7rem] ${i === 3 ? "grad-text" : "text-ink"}`}>
                <CountUp to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[12px] leading-6 text-dim md:text-[12.5px]">{t(s.fa, s.en)}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
