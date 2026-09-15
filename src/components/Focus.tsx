import { Brain, Dna, Gamepad2, Scale, type LucideIcon } from "lucide-react";
import { Eyebrow, Reveal } from "./fx";
import { useT } from "../i18n";

type Pillar = { icon: LucideIcon; num: string; faT: string; enT: string; faD: string; enD: string };

const PILLARS: Pillar[] = [
  {
    icon: Gamepad2,
    num: "01",
    faT: "نظریه‌ی بازی‌ها و سیستم‌های چندعامله",
    enT: "Game Theory & Multi-Agent RL",
    faD: "تحلیل رفتار استراتژیک، طراحی مکانیزم و تعامل هوش‌های خودگردان در بسترهای رقابتی و اشتراکی؛ نگاه من به LLM، یک عامل تصمیم‌گیر استراتژیک است — نه صرفاً یک چت‌بات.",
    enD: "Strategic behavior analysis, mechanism design, and autonomous intelligences interacting in competitive or cooperative arenas. I see the LLM as a strategic decision-making agent — not a mere chatbot.",
  },
  {
    icon: Dna,
    num: "02",
    faT: "بیوانفورماتیک و هوش زیستی",
    enT: "Computational Biology & Bio-AI",
    faD: "تحلیل توالی‌های ژنومی، مدل‌های ساختار پروتئین و الگوهای زیستی؛ ساختار زیستی، بزرگ‌ترین سیستم پردازش داده‌ی تاریخ است و هم‌افزایی آن با هوش مصنوعی، آینده‌ی پزشکی را رقم می‌زند.",
    enD: "Genomic sequence analysis, protein-structure models, and biological pattern mining. Living systems are history's greatest data-processing machinery — and their synergy with AI will reshape medicine.",
  },
  {
    icon: Scale,
    num: "03",
    faT: "اقتصاد محاسباتی و پیچیدگی",
    enT: "Computational Economics & Complexity",
    faD: "ساختارهای توزیع منابع، مدل‌های پیش‌بینی، بهینه‌سازی جریان سرمایه و سیستم‌های انگیزشی در جوامع انسانی و دیجیتال.",
    enD: "Resource-allocation structures, forecasting models, capital-flow optimization, and incentive systems across human and digital societies.",
  },
  {
    icon: Brain,
    num: "04",
    faT: "فلسفه‌ی ذهن و آگاهی",
    enT: "Philosophy of Mind",
    faD: "چالش‌های ادراک، بازنمایی معنا در مغز انسان در برابر شبکه‌های عصبی عمیق، و ماهیت استدلال در هوش مصنوعی.",
    enD: "The hard problems of perception, semantic representation in human brains versus deep networks, and the nature of reasoning in artificial intelligence.",
  },
];

export default function Focus() {
  const t = useT();

  return (
    <section id="focus" className="relative">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="01">{t("ذهن چندبعدی", "The Polymath Mindset")}</Eyebrow>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal delay={0.08}>
            <h2 className="font-disp text-[clamp(28px,4vw,42px)] leading-[1.35]">
              {t(
                <>
                  محاسبات، ذره‌بین من برای فهم <span className="grad-text">سیستم‌های پیچیده</span> است.
                </>,
                <>
                  Computation is my lens on <span className="grad-text">complex systems</span>.
                </>
              )}
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-8 text-dim">
              {t(
                "پرورش‌یافته‌ی سمپاد و فارغ‌التحصیل شریف؛ با بیش از یک دهه غواصی در کد. هویت حرفه‌ای من در تلاقی تئوری ریاضیات، معماری سیستم‌های توزیع‌شده و مدل‌سازی پدیده‌های زیستی، اقتصادی و ادراکی تعریف می‌شود.",
                "NODET-raised, Sharif-hardened, 10+ years deep in code. My professional identity lives where mathematical theory, distributed architecture, and the modeling of biological, economic, and cognitive phenomena converge."
              )}
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={0.1 + i * 0.07}>
                <div className="g-border group h-full rounded-2xl border border-white/[0.07] bg-panel/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#0b0e12]/80">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyanx transition-all duration-500 group-hover:border-neon/30 group-hover:text-neon">
                      <p.icon size={19} strokeWidth={1.8} />
                    </div>
                    <span className="font-code text-[11px] text-faint/60 transition-colors duration-500 group-hover:text-faint">
                      /{p.num}
                    </span>
                  </div>
                  <h3 className="font-disp mt-6 text-[16px] md:text-[17px]">{t(p.faT, p.enT)}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-dim">{t(p.faD, p.enD)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
