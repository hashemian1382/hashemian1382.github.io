import { ChevronUp, Cpu, Dna, GraduationCap, HeartPulse, Mail, Quote, Sparkles } from "lucide-react";
import Emblem from "./Emblem";
import { Eyebrow, GithubIcon, Reveal } from "./fx";
import { useLang, useT } from "../i18n";

/* ------------------------------ pull quote --------------------------------- */
export function PullQuote() {
  const t = useT();

  return (
    <section className="relative overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure/[0.05] blur-[140px]" />
      <div className="relative mx-auto max-w-[880px] px-6 py-24 text-center md:py-32">
        <Reveal>
          <Quote size={30} className="mx-auto rotate-180 text-neon/60" strokeWidth={1.5} />
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="mt-8 text-[clamp(18px,2.7vw,26px)] font-medium leading-[2.05] text-ink/90 md:leading-[2]">
            {t(
              <>
                «اگر دقیقاً می‌دانید چه سیستمی می‌خواهید، تضمین می‌کنم که با بالاترین کیفیت معماری،{" "}
                <span className="grad-text font-semibold">تمیزترین کد</span> و سریع‌ترین کارایی ممکن پیاده‌سازی شود؛ و اگر
                در آغاز راهید و مرزهای مسئله هنوز شفاف نیست، با تفکر ساختاریافته کمک می‌کنم{" "}
                <span className="grad-text font-semibold">ابهام به شفافیت</span> تبدیل شود، معماری درست ترسیم گردد و
                دقیقاً بدانید کدام مسیر بیشترین ارزش را خلق می‌کند.»
              </>,
              <>
                "If you know exactly what you want built, I guarantee it shipped with the highest architectural quality,
                the <span className="grad-text font-semibold">cleanest code</span>, and the fastest possible performance.
                If you're still shaping the problem, my structured thinking turns{" "}
                <span className="grad-text font-semibold">ambiguity into clarity</span> — and clarity into the right
                architecture."
              </>
            )}
          </blockquote>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex items-center justify-center gap-4 font-code text-[10px] tracking-[0.3em] text-faint uppercase">
            <span className="h-px w-10 bg-white/10" />
            {t("گزاره‌ی ارزش · فلسفه‌ی کاری من", "My value proposition")}
            <span className="h-px w-10 bg-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- vision ---------------------------------- */
export function Vision() {
  const t = useT();

  const nodes = [
    { icon: Cpu, tone: "text-neon", fa: "هوش مصنوعی", en: "AI" },
    { icon: Dna, tone: "text-cyanx", fa: "بیوانفورماتیک", en: "BIOINFORMATICS" },
    { icon: HeartPulse, tone: "text-azure", fa: "پزشکی", en: "MEDICINE" },
  ];

  return (
    <section id="vision" className="relative overflow-hidden border-t border-white/[0.05]">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,#000,transparent)]" />
      <div className="relative mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="07">{t("چشم‌انداز بلندمدت", "Long-Term Vision")}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-disp max-w-3xl text-[clamp(28px,4.2vw,44px)] leading-[1.4]">
            {t(
              <>
                جایی که <span className="grad-text">هوش</span> به <span className="grad-text">زندگی</span> گره می‌خورد.
              </>,
              <>
                Where <span className="grad-text">intelligence</span> meets <span className="grad-text">life</span>.
              </>
            )}
          </h2>
        </Reveal>

        {/* convergence diagram */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="relative z-10 grid grid-cols-3">
              {nodes.map((n) => (
                <div key={n.en} className="flex flex-col items-center gap-2.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-panel/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <n.icon size={21} strokeWidth={1.7} className={n.tone} />
                  </div>
                  <span className="text-center font-code text-[9px] tracking-[0.22em] text-dim uppercase md:text-[10px]">
                    {t(n.fa, n.en)}
                  </span>
                </div>
              ))}
            </div>

            <svg viewBox="0 0 600 180" className="-mt-1 w-full" fill="none" aria-hidden>
              <defs>
                <linearGradient id="vgrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#39ff88" />
                  <stop offset="0.5" stopColor="#38bdf8" />
                  <stop offset="1" stopColor="#2f9bff" />
                </linearGradient>
              </defs>
              <path d="M100 12 C 100 105, 268 96, 290 142" stroke="url(#vgrad)" strokeWidth="1.5" className="vision-line" opacity="0.75" />
              <path d="M300 12 L 300 142" stroke="url(#vgrad)" strokeWidth="1.5" className="vision-line" opacity="0.75" />
              <path d="M500 12 C 500 105, 332 96, 310 142" stroke="url(#vgrad)" strokeWidth="1.5" className="vision-line" opacity="0.75" />
            </svg>

            <div className="relative z-10 -mt-2 flex justify-center">
              <div className="rounded-2xl bg-gradient-to-r from-neon via-cyanx to-azure p-[1px] shadow-[0_0_50px_rgba(56,189,248,0.18)]">
                <div className="flex items-center gap-2.5 rounded-[15px] bg-void px-5 py-3.5">
                  <Sparkles size={16} className="text-neon" />
                  <span className="font-disp text-[13px] md:text-[14px]">
                    {t("تأثیر ملموس و نجات‌بخش بر زندگی انسان‌ها", "Tangible, life-saving human impact")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[13.5px] leading-9 text-dim md:text-[15px]">
            {t(
              "هدف بلندمدت من، خلق و رهبری زیرساخت‌های نرم‌افزاری و هوش مصنوعی با تأثیر ملموس و نجات‌بخش بر زندگی انسان‌هاست — به‌ویژه در لبه‌ی همگرایی هوش مصنوعی، بیوانفورماتیک و ابزارهای تشخیصی و درمانی پزشکی؛ سیستم‌هایی که فراتر از مصرف‌گرایی دیجیتال، از چالش‌های بنیادین سلامت، کشف دارو و تحلیل سیستم‌های زیستی گره‌گشایی کنند.",
              "My long-term mission: to create and lead software & AI infrastructure with tangible, life-saving impact on human lives — especially at the convergence of AI, bioinformatics, and diagnostic / therapeutic medicine. Systems that go beyond digital consumerism to untangle foundational challenges in health, drug discovery, and biological-systems analysis."
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- footer ---------------------------------- */
export function Footer() {
  const t = useT();
  const { lang } = useLang();
  const isFa = lang === "fa";

  return (
    <footer id="connect" className="relative overflow-hidden border-t border-white/[0.05]">
      <div className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-neon/[0.05] blur-[150px]" />
      <div className="relative mx-auto max-w-[1180px] px-6 pb-10 pt-24 md:pt-36">
        <Reveal className="text-center">
          <div className="mb-7 font-code text-[11px] uppercase tracking-[0.3em] text-faint">
            <span className="text-neon">08</span> — {t("ارتباط", "Connect")}
          </div>
          <h2 className="font-disp text-[clamp(36px,6.5vw,68px)] leading-[1.2]">
            {t(
              <>
                بیایید چیزی <span className="grad-text grad-anim">بسازیم</span> که مهم باشد.
              </>,
              <>
                Let's <span className="grad-text grad-anim">build</span> something that matters.
              </>
            )}
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[14px] leading-8 text-dim md:text-[15px]">
            {t(
              "همیشه مشتاق ایده‌های جسورانه و همکاری در نقطه‌ی تلاقی نرم‌افزار، هوش مصنوعی و سیستم‌های پیچیده هستم — صندوق ورودی من همیشه باز است.",
              "Always open to bold ideas and collaborations at the intersection of software, AI, and complex systems — my inbox is open."
            )}
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:aho.hashemian@gmail.com"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-ink px-7 py-4 text-sm font-semibold text-[#02110a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_#39ff88,0_16px_44px_rgba(57,255,136,0.22)]"
            >
              <Mail size={16} />
              {t("ارسال ایمیل", "Send an email")}
            </a>
            <a
              href="https://github.com/hashemian1382"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-azure hover:text-azure"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </Reveal>

        {/* bio terminal */}
        <Reveal delay={0.15}>
          <div
            dir="ltr"
            className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07090d]/90 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
              <span className="ml-3 font-code text-[11px] text-faint">bio.md</span>
            </div>
            <div className="p-6 font-code text-[12px] leading-7 md:p-7">
              <div className="text-dim">
                <span className="font-semibold text-neon">➜</span> <span className="text-cyanx">~</span> cat bio.md
              </div>
              <p dir={isFa ? "rtl" : "ltr"} className="mt-3.5 text-ink/80">
                {isFa
                  ? "علی هاشمیان — فارغ‌التحصیل مهندسی کامپیوتر دانشگاه صنعتی شریف | معمار سیستم‌های نرم‌افزاری و هوش مصنوعی مولد. طراح سامانه‌های مقیاس‌پذیر در پیوند تئوری‌های استراتژیک (نظریه‌ی بازی‌ها و سیستم‌های زیستی) با معماری مدرن نرم‌افزار."
                  : "Ali Hashemian — Sharif CE Alum · Full-Stack & Generative AI Systems Architect. Exploring the intersection of LLMs/RAG, distributed web backends, and complex systemic modeling (Game Theory & Bio-AI). Bridging mathematical theory with resilient, production-grade code."}
              </p>
            </div>
          </div>
        </Reveal>

        {/* bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 md:flex-row">
          <div className="flex items-center gap-2.5 font-code text-[11px] text-faint">
            <Emblem className="w-5" />
            <span>© 2026 Ali Hashemian</span>
          </div>
          <div className="flex items-center gap-2 font-code text-[11px] text-dim">
            <GraduationCap size={13} className="text-neon/80" />
            {t("دانشگاه صنعتی شریف", "Sharif University of Technology")}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-code text-[10.5px] tracking-[0.2em] text-faint transition-all duration-300 hover:border-neon/40 hover:text-neon"
            aria-label="Back to top"
          >
            {t("بازگشت به بالا", "TOP")}
            <ChevronUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
