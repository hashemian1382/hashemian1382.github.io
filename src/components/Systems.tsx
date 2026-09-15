import { Layers, MoveRight, Plus, Zap, type LucideIcon } from "lucide-react";
import { Eyebrow, Reveal } from "./fx";
import { useT } from "../i18n";

type Bias = { icon: LucideIcon; num: string; faT: string; enT: string; faD: string; enD: string; chips: string[] };

const BIASES: Bias[] = [
  {
    icon: Layers,
    num: "01",
    faT: "معماری تمیز، ماژولار، مقیاس‌پذیر",
    enT: "Clean, Modular, Scalable",
    faD: "سیستم‌ها باید با رشد مقیاس و پیچیدگی، بدهی فنی جمع نکنند: تفکیک لایه‌ها، پایبندی به اصول SOLID، خوانایی بالا و زیرساختی که برای رشد طراحی شده است.",
    enD: "Systems must grow in scale and complexity without accruing technical debt: strict layer separation, SOLID principles, high readability, and infrastructure designed to grow.",
    chips: ["SOLID", "Layering", "Zero-Tech-Debt", "Domain Boundaries"],
  },
  {
    icon: Zap,
    num: "02",
    faT: "کارایی فوق‌العاده، تأخیر حداقلی",
    enT: "Radical Performance, Low Latency",
    faD: "وسواس در مصرف منابع، پاسخ زیرثانیه‌ای در سرویس‌های استریمینگ، بهینه‌سازی کوئری‌های دیتابیس و مدیریت هوشمندانه‌ی کش.",
    enD: "Obsessive resource discipline, sub-second streaming responses, tuned database queries, and intelligent caching strategies.",
    chips: ["Sub-second Streaming", "Query Tuning", "Cache Strategy", "Resource Discipline"],
  },
];

function StackChip({ name, sub, tone }: { name: string; sub: string; tone: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25">
      <div className={`font-code text-[13.5px] font-semibold ${tone}`}>{name}</div>
      <div className="mt-1 font-code text-[10px] text-faint">{sub}</div>
    </div>
  );
}

export default function Systems() {
  const t = useT();

  return (
    <section id="systems" className="relative border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="02">{t("تعصبات فنی · غیرقابل مذاکره", "Engineering Biases · Non-negotiable")}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-disp max-w-2xl text-[clamp(28px,4vw,42px)] leading-[1.35]">
            {t(
              <>
                دو اصل که در هیچ پروژه‌ای <span className="grad-text">معامله</span> نمی‌کنم.
              </>,
              <>
                Two principles I never <span className="grad-text">trade away</span>.
              </>
            )}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {BIASES.map((b, i) => (
            <Reveal key={b.num} delay={0.12 + i * 0.08}>
              <div className="g-border group h-full rounded-2xl border border-white/[0.07] bg-panel/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#0b0e12]/80">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neon transition-all duration-500 group-hover:border-neon/40">
                    <b.icon size={19} strokeWidth={1.8} />
                  </div>
                  <span className="font-code text-[10.5px] tracking-[0.28em] text-faint">PRINCIPLE /{b.num}</span>
                </div>
                <h3 className="font-disp mt-6 text-xl md:text-[22px]">{t(b.faT, b.enT)}</h3>
                <p className="mt-3.5 text-[13.5px] leading-8 text-dim">{t(b.faD, b.enD)}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {b.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-white/[0.08] px-2.5 py-1 font-code text-[10px] tracking-wide text-faint transition-colors duration-300 hover:border-neon/30 hover:text-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 48-hour rapid deployment stack */}
        <Reveal delay={0.15}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07090d]/90 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur" dir="ltr">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/60" />
              <span className="ml-3 font-code text-[11px] text-faint">ali@sharif — ~/stacks/48h-rapid-deploy</span>
              <span className="ml-auto rounded border border-neon/25 bg-neon/5 px-2 py-0.5 font-code text-[9.5px] tracking-[0.15em] text-neon/80">
                PRODUCTION
              </span>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-7 font-code text-[12.5px] text-dim">
                <span className="font-semibold text-neon">$</span> deploy --from idea --to production-mvp{" "}
                <span className="text-faint">--time 48h</span>
                <span className="blink ml-1 text-neon">▌</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <StackChip name="FastAPI" sub="async microservice" tone="text-neon" />
                <Plus size={14} className="shrink-0 text-faint" />
                <StackChip name="React.js" sub="reactive interface" tone="text-cyanx" />
                <Plus size={14} className="shrink-0 text-faint" />
                <StackChip name="Redis" sub="in-memory state · pub/sub" tone="text-neon" />
                <Plus size={14} className="shrink-0 text-faint" />
                <StackChip name="LLM APIs" sub="Claude · Gemini · OpenAI" tone="text-azure" />
                <MoveRight size={18} className="shrink-0 text-faint" />
                <div className="rounded-xl bg-gradient-to-r from-neon via-cyanx to-azure p-[1px]">
                  <div className="flex items-center gap-2.5 rounded-[11px] bg-void px-4 py-3">
                    <Zap size={15} className="text-neon" />
                    <div>
                      <div className="font-code text-[13.5px] font-semibold text-ink">Production-Ready MVP</div>
                      <div className="mt-1 font-code text-[10px] text-faint">≤ 48 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-code text-[11.5px] leading-6 text-faint">
            <span className="text-neon/60">#</span>{" "}
            {t(
              "فرمول اجرای سریع من: از ایده‌ی انقلابی هوش مصنوعی تا نسخه‌ی آماده‌ی تولید — در یک آخر هفته.",
              "The formula for turning a radical AI idea into a shipped product — over a single weekend."
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
