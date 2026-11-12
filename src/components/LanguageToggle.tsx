"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Lang } from "@/lib/types";

export function LanguageToggle() {
  const { lang, setLang } = usePortfolio();

  return (
    <div className="lang-btns">
      <button
        className={`lang-btn ${lang === "en" ? "active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        className={`lang-btn ${lang === "id" ? "active" : ""}`}
        aria-pressed={lang === "id"}
        onClick={() => setLang("id")}
      >
        ID
      </button>
    </div>
  );
}
