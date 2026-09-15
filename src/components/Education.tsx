import { GraduationCap, School } from "lucide-react";
import { Eyebrow, Reveal } from "./fx";
import { useT } from "../i18n";

export default function Education() {
  const t = useT();

  return (
    <section id="education" className="relative border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="03">{t("مسیر تحصیلی", "Education")}</Eyebrow>
        </Reveal>

        {/* Sharif */}
        <Reveal delay={0.08}>
          <div className="group grid gap-4 border-t border-white/[0.06] py-10 transition-colors duration-500 hover:bg-white/[0.012] md:grid-cols-[170px_1fr] md:gap-10">
            <div className="font-code text-[13px] leading-6 text-azure">
              2022
              <span className="mx-1 text-faint">—</span>
              2026
            </div>
            <div>
              <h3 className="font-disp text-[19px] md:text-[21px]">
                {t("کارشناسی مهندسی کامپیوتر", "B.Sc. Computer Engineering")}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/[0.06] px-3.5 py-1.5 text-[12px] font-medium text-neon">
                  <GraduationCap size={14} />
                  {t("دانشگاه صنعتی شریف", "Sharif University of Technology")}
                </span>
                <span className="font-code text-[10.5px] tracking-[0.15em] text-faint">
                  {t("برترین دانشگاه فنی ایران", "IRAN'S TOP TECHNICAL UNIVERSITY")}
                </span>
              </div>
              <div className="mt-5 max-w-2xl border-s-2 border-azure/60 ps-4 text-[13.5px] leading-8 text-dim">
                {t(
                  "پایان‌نامه: طراحی و پیاده‌سازی سامانه‌ی پرسش‌وپاسخ هوشمند وب مبتنی بر RAG و مدل‌های زبانی بزرگ — با مسیریابی هوشمند بین دانش مدل و جست‌وجوی وب، و پایپ‌لاین ارزیابی مستمر کیفیت.",
                  "Thesis: an intelligent web Q&A system built on RAG and large language models — featuring smart routing between model knowledge and live web search, plus a continuous quality-evaluation pipeline."
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* NODET */}
        <Reveal delay={0.14}>
          <div className="group grid gap-4 border-y border-white/[0.06] py-10 transition-colors duration-500 hover:bg-white/[0.012] md:grid-cols-[170px_1fr] md:gap-10">
            <div className="font-code text-[13px] leading-6 text-azure">
              2019
              <span className="mx-1 text-faint">—</span>
              2022
            </div>
            <div>
              <h3 className="font-disp text-[19px] md:text-[21px]">{t("دیپلم ریاضی و فیزیک", "Diploma, Mathematics & Physics")}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyanx/25 bg-cyanx/[0.05] px-3.5 py-1.5 text-[12px] font-medium text-cyanx">
                  <School size={14} />
                  {t("دبیرستان استعدادهای درخشان علامه حلی ۱۰ تهران (سمپاد)", "Allameh Helli 10 — NODET, Tehran")}
                </span>
              </div>
              <div className="mt-5 max-w-2xl border-s-2 border-white/15 ps-4 text-[13.5px] leading-8 text-dim">
                {t(
                  "جایی که تفکر الگوریتمی و عشق به حل مسئله ریشه گرفت — آغاز بیش از یک دهه کدنویسی پیوسته.",
                  "Where algorithmic thinking and the love of problem-solving took root — the start of 10+ years of continuous coding."
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
