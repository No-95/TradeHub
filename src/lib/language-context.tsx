"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "VIE" | "ENG" | "KR";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({ lang: "ENG", setLang: () => {} });

const STORAGE_KEY = "hdp-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ENG";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "VIE" || stored === "ENG" || stored === "KR") return stored;
  return "ENG";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const updateLang = (next: Lang) => {
    setLang(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: updateLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
