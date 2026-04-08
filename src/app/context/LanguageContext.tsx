"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Lang, translations, T } from "../lib/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: T;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "no",
  setLang: () => {},
  t: translations["no"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("no");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
