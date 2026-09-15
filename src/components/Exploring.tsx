import { Bot, Cog, Network, type LucideIcon } from "lucide-react";
import { Eyebrow, Reveal } from "./fx";
import { useT } from "../i18n";

type Exp = {
  icon: LucideIcon;
  num: string;
  tone: string;
  dot: string;
  faT: string;
  enT: string;
  faD: string;
  enD: string;
  status: string;
};

const EXPS: Exp[] = [
  {
    icon: Bot,
    num: "01",
    tone: "text-neon",
    dot: "bg-neon",
    faT: "عامل‌های هوشمند خودگردان",
    enT: "Autonomous AI Agents",
    faD: "طراحی سیستم‌های چندعاملی مبتنی بر LLM با توانایی برنامه‌ریزی زنجیره‌ای، ارزیابی خود و حل مسئله‌ی مستقل.",
    enD: "LLM-based multi-agent systems with chain planning, self-evaluation, and independent problem solving.",
    status: "reading · prototyping",
  },
  {
    icon: Network,
    num: "02",
    tone: "text-cyanx",
    dot: "bg-cyanx",
    faT: "RAG پیشرفته و گرافی",
    enT: "Advanced & Graph RAG",
    faD: "اتصال پایگاه‌های داده‌ی برداری به گراف‌های دانش برای کاهش توهم مدل‌ها و بهبود استدلال رابطه‌ای.",
    enD: "Coupling vector stores with knowledge graphs to cut hallucination and deepen relational reasoning.",
    status: "experimenting",
  },
  {
    icon: Cog,
    num: "03",
    tone: "text-azure",
    dot: "bg-azure",
    faT: "Rust و همروندیِ کارایی‌بالا",
    enT: "Rust & High-Performance Concurrency",
    faD: "زبان‌های سطح سیستم و بهینه‌سازی لایه‌های زیرین برای محاسبات سنگین موازی در پردازش داده.",
    enD: "Systems-level languages and low-layer optimization for heavy parallel data compute.",
    status: "learning by building",
  },
];

export default function Exploring() {
  const t = useT();

  return (
    <section id="lab" className="relative border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="05">{t("اکنون در آزمایشگاه", "Currently Exploring")}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-disp max-w-2xl text-[clamp(28px,4vw,42px)] leading-[1.35]">
            {t(
              <>
                آنچه این روزها <span className="grad-text">آزمایش</span> می‌کنم.
              </>,
              <>
                What I'm <span className="grad-text">experimenting</span> with now.
              </>
            )}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {EXPS.map((e, i) => (
            <Reveal key={e.num} delay={0.1 + i * 0.07}>
              <div className="g-border group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-panel/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#0b0e12]/80">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] ${e.tone}`}
                  >
                    <e.icon size={19} strokeWidth={1.8} />
                  </div>
                  <span className="font-code text-[10.5px] tracking-[0.28em] text-faint">LAB /{e.num}</span>
                </div>
                <h3 className="font-disp mt-6 text-[16.5px] md:text-[17.5px]">{t(e.faT, e.enT)}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-dim">{t(e.faD, e.enD)}</p>
                <div className="mt-6 border-t border-white/[0.06] pt-4 font-code text-[10px] tracking-[0.2em] text-faint">
                  <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle ${e.dot}`} />
                  <span className="align-middle">status: {e.status}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
