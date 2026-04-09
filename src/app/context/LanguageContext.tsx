"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
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

const STORAGE_KEY = "saxofon-lang";
const VALID_LANGS: Lang[] = ["no", "en", "ar", "es"];

function isValidLang(value: unknown): value is Lang {
  return typeof value === "string" && VALID_LANGS.includes(value as Lang);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("no");

  // Read persisted language on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isValidLang(stored)) {
        setLangState(stored);
      }
    } catch {}
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {}
  }, []);

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
