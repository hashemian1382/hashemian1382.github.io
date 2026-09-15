import { useT } from "../i18n";

const ITEMS: { fa: string; en: string; on?: boolean }[] = [
  { fa: "مهندسی فول‌استک", en: "FULL-STACK ENGINEERING" },
  { fa: "سیستم‌های هوش مصنوعی مولد", en: "GENERATIVE AI SYSTEMS" },
  { fa: "معماری RAG", en: "RAG ARCHITECTURE" },
  { fa: "نظریه‌ی بازی‌ها", en: "GAME THEORY" },
  { fa: "بیوانفورماتیک و Bio-AI", en: "BIO-AI & COMPUTATIONAL BIOLOGY" },
  { fa: "بک‌اندهای کم‌تأخیر", en: "LOW-LATENCY BACKENDS" },
  { fa: "دانشگاه صنعتی شریف", en: "SHARIF UNIVERSITY OF TECHNOLOGY", on: true },
  { fa: "معماری تمیز", en: "CLEAN ARCHITECTURE" },
  { fa: "عامل‌های خودگردان", en: "AUTONOMOUS AGENTS" },
];

export default function Marquee() {
  const t = useT();
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee mask-x relative overflow-hidden border-b border-white/[0.06] bg-panel/30 py-5" dir="ltr">
      <div className="marquee-track items-center">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`whitespace-nowrap font-code text-[11.5px] tracking-[0.22em] ${
                item.on ? "font-semibold text-ink" : "text-faint"
              }`}
            >
              {t(item.fa, item.en)}
            </span>
            <span className={`px-7 text-[9px] ${item.on ? "text-neon" : "text-neon/40"}`}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
