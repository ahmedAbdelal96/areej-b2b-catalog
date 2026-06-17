"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"

type Language = "en" | "ar"
type Dir = "ltr" | "rtl"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: Dir
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem("language") as Language | null
  if (stored && (stored === "en" || stored === "ar")) {
    return stored
  }
  return "en"
}

function getInitialDir(lang: Language): Dir {
  return lang === "ar" ? "rtl" : "ltr"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  const [dir, setDir] = useState<Dir>(getInitialDir(getInitialLanguage()))

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = dir
  }, [language, dir])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setDir(lang === "ar" ? "rtl" : "ltr")
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
