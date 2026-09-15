import { ArrowUpRight, Sparkles } from "lucide-react";
import { Eyebrow, GithubIcon, Reveal } from "./fx";
import { useT } from "../i18n";

const FLAG_TAGS = ["LangChain", "Vector DB", "Hybrid Search", "LLM Routing", "FastAPI", "Streaming SSE"];

const ROWS = [
  {
    num: "01",
    faT: "سامانه‌ی اشیای گم‌شده‌ی شریف",
    enT: "Sharif Lost & Found Platform",
    faD: "تطبیق معنایی متن و تصویر بر پایه‌ی امبدینگ‌ها، با نقشه‌ی تعاملی پردیس.",
    enD: "Semantic text + image embedding search over an interactive campus map.",
  },
  {
    num: "02",
    faT: "سامانه‌ی مدیریت ساختمان «ساکن»",
    enT: "Saken — Building Management ERP",
    faD: "محاسبه‌ی خودکار شارژ و تنخواه، صندوق مالی، تیکتینگ تعمیرات و رزرو امکانات.",
    enD: "Automated fees & treasury, maintenance ticketing, amenity reservations.",
  },
  {
    num: "03",
    faT: "پلتفرم چت‌بات استریمینگ LLM",
    enT: "Real-time LLM Chatbot Platform",
    faD: "استریم بی‌درنگ توکن‌ها روی SSE، حافظه‌ی نشست با Redis و پرامپت‌های ماژولار.",
    enD: "Live token streaming over SSE, Redis session memory, modular prompts.",
  },
  {
    num: "04",
    faT: "فرم‌ساز آنلاین پویا",
    enT: "Dynamic Form Builder",
    faD: "موتور اعتبارسنجی پویا و داشبورد تحلیلی نتایج.",
    enD: "Dynamic validation engine with an analytics dashboard.",
  },
  {
    num: "05",
    faT: "بانک سوالات و آزمون‌ساز آنلاین",
    enT: "Question Bank & Exam Engine",
    faD: "رندر کامل فرمول‌های LaTeX، تصحیح آنی و کارنامه‌ی تحلیلی.",
    enD: "Full LaTeX formula rendering, instant grading, analytical reports.",
  },
];

export default function Work() {
  const t = useT();

  return (
    <section id="work" className="relative border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="04">{t("آثار منتخب", "Selected Work")}</Eyebrow>
        </Reveal>

        {/* flagship */}
        <Reveal delay={0.08}>
          <article className="g-border group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-br from-neon/[0.045] via-transparent to-azure/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 md:p-11">
            <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-neon/[0.06] opacity-60 blur-[90px] transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center gap-3 font-code text-[10.5px] tracking-[0.25em] text-neon">
                <Sparkles size={13} />
                {t("پروژه‌ی شاخص · پایان‌نامه‌ی شریف", "FLAGSHIP · SHARIF THESIS")}
              </div>
              <h3 className="font-disp text-[22px] md:text-[27px]">
                {t("موتور پرسش‌وپاسخ هوشمند مبتنی بر RAG", "Intelligent RAG-Based Q&A Engine")}
              </h3>
              <p className="mt-4 max-w-2xl text-[13.5px] leading-8 text-dim md:text-[14.5px]">
                {t(
                  "طراحی و پیاده‌سازی سامانه‌ی RAG مبتنی بر LLM و پایگاه‌داده‌ی برداری، مجهز به مسیریابی هوشمند بین دانش مدل و جست‌وجوی وب، پایپ‌لاین ارزیابی مستمر کیفیت برای مهار توهم مدل، و وب‌سرویس ماژولار با پاسخ‌های استریمینگ زیرثانیه‌ای.",
                  "An LLM-based retrieval system over a vector database, featuring smart routing between model knowledge and live web search, a continuous evaluation pipeline that keeps hallucination in check, and a modular streaming web service with sub-second responses."
                )}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {FLAG_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 font-code text-[10.5px] text-dim transition-colors duration-300 hover:border-neon/40 hover:text-neon"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* rows */}
        <div className="mt-14">
          {ROWS.map((r, i) => (
            <Reveal key={r.num} delay={0.05 + i * 0.05}>
              <div className="group grid cursor-default grid-cols-[42px_1fr_24px] items-center gap-5 border-t border-white/[0.06] px-2 py-7 transition-all duration-300 last:border-b hover:bg-white/[0.018] hover:ps-5 md:grid-cols-[56px_1fr_28px] md:gap-8">
                <span className="font-code text-[11.5px] text-faint transition-colors duration-300 group-hover:text-neon/70">
                  {r.num}
                </span>
                <div>
                  <h4 className="text-[15.5px] font-semibold md:text-[17px]">{t(r.faT, r.enT)}</h4>
                  <p className="mt-2 max-w-xl text-[12.5px] leading-7 text-dim md:text-[13.5px]">{t(r.faD, r.enD)}</p>
                </div>
                <ArrowUpRight
                  size={17}
                  className="text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon rtl:group-hover:-translate-x-1"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href="https://github.com/hashemian1382?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 font-code text-[12px] tracking-wide text-dim transition-colors duration-300 hover:text-neon"
          >
            <GithubIcon size={14} />
            {t("مشاهده‌ی همه‌ی مخازن در گیت‌هاب", "Explore all repositories on GitHub")}
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
