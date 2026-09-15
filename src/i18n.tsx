import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fa" | "en";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "fa",
  setLang: () => {},
});

const TITLES: Record<Lang, string> = {
  fa: "علی هاشمیان — مهندس نرم‌افزار و معمار سیستم‌های هوش مصنوعی",
  en: "Ali Hashemian — Software & Generative AI Systems Architect",
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("ah.lang");
      return saved === "en" || saved === "fa" ? saved : "fa";
    } catch {
      return "fa";
    }
  });

  const setLang = (l: Lang) => {
    try {
      localStorage.setItem("ah.lang", l);
    } catch {
      /* private mode */
    }
    setLangState(l);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    root.classList.toggle("lang-fa", lang === "fa");
    root.classList.toggle("lang-en", lang === "en");
    document.title = TITLES[lang];
  }, [lang]);

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

/** Returns a translator: t(persianNode, englishNode) */
export function useT() {
  const { lang } = useLang();
  return (fa: ReactNode, en: ReactNode): ReactNode => (lang === "fa" ? fa : en);
}
