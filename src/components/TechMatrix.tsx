import { Eyebrow, Reveal } from "./fx";
import { useT } from "../i18n";

const GROUPS: { dot: string; faL: string; enL: string; tags: { label: string; exploring?: boolean }[] }[] = [
  {
    dot: "bg-neon",
    faL: "زبان‌ها",
    enL: "Languages",
    tags: [
      { label: "Python" },
      { label: "TypeScript" },
      { label: "JavaScript" },
      { label: "Java" },
      { label: "SQL" },
      { label: "Rust", exploring: true },
    ],
  },
  {
    dot: "bg-azure",
    faL: "هوش مصنوعی و LLM",
    enL: "AI & LLM",
    tags: [
      { label: "RAG / Graph RAG" },
      { label: "LangChain" },
      { label: "LlamaIndex" },
      { label: "Vector Databases" },
      { label: "PyTorch" },
      { label: "Hugging Face" },
      { label: "Prompt Engineering" },
      { label: "Multi-Agent Systems" },
    ],
  },
  {
    dot: "bg-neon",
    faL: "بک‌اند و داده",
    enL: "Backend & Data",
    tags: [
      { label: "FastAPI" },
      { label: "Django" },
      { label: "Node.js" },
      { label: "Spring Boot" },
      { label: "PostgreSQL" },
      { label: "Redis" },
      { label: "MongoDB" },
      { label: "WebSockets / SSE" },
      { label: "REST · GraphQL" },
    ],
  },
  {
    dot: "bg-azure",
    faL: "فرانت‌اند",
    enL: "Frontend",
    tags: [
      { label: "React" },
      { label: "Tailwind CSS" },
      { label: "Framer Motion" },
      { label: "Responsive UI Engineering" },
    ],
  },
  {
    dot: "bg-neon",
    faL: "زیرساخت و ابزارها",
    enL: "Infra & Tools",
    tags: [
      { label: "Docker" },
      { label: "Linux" },
      { label: "Git · Git Flow" },
      { label: "CI/CD" },
      { label: "n8n Automation" },
      { label: "Clean Architecture" },
      { label: "LaTeX" },
    ],
  },
];

export default function TechMatrix() {
  const t = useT();

  return (
    <section id="stack" className="relative border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow num="06">{t("زرادخانه‌ی فنی", "System Arsenal")}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-disp max-w-2xl text-[clamp(28px,4vw,42px)] leading-[1.35]">
            {t(
              <>
                ماتریس <span className="grad-text">ابزارها</span> و مهارت‌ها.
              </>,
              <>
                The <span className="grad-text">tools & skills</span> matrix.
              </>
            )}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 rounded-[22px] border border-white/[0.08] bg-panel/50 p-7 backdrop-blur-sm md:p-10">
            {GROUPS.map((g) => (
              <div
                key={g.enL}
                className="flex flex-col gap-4 border-b border-white/[0.06] py-6 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:items-baseline md:gap-10"
              >
                <div className="flex w-full shrink-0 items-center gap-2.5 md:w-56">
                  <span className={`h-[7px] w-[7px] rounded-full ${g.dot}`} />
                  <span className="font-code text-[12px] font-medium uppercase tracking-[0.15em] text-dim">
                    {t(g.faL, g.enL)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-3.5 py-1.5 font-code text-[11px] transition-all duration-300 hover:-translate-y-0.5 ${
                        tag.exploring
                          ? "border border-dashed border-neon/40 text-neon/90 hover:border-neon hover:bg-neon/[0.06]"
                          : "border border-white/[0.09] bg-white/[0.02] text-dim hover:border-cyanx/50 hover:text-ink"
                      }`}
                    >
                      {tag.label}
                      {tag.exploring && <span className="ms-1 text-[9px]">▲</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-7 border-t border-white/[0.06] pt-5 font-code text-[10.5px] text-faint">
              <span className="text-neon/70">▲</span> {t("در حال کاوش فعال", "actively exploring")} —{" "}
              {t("و این لیست همچنان در حال رشد است", "and the list keeps growing")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
