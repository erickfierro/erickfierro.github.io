"use client"

import { useLanguage } from "./language-context"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-2 transition-colors duration-300 ${
          locale === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLocale("es")}
        className={`px-3 py-2 transition-colors duration-300 ${
          locale === "es" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
    </div>
  )
}
