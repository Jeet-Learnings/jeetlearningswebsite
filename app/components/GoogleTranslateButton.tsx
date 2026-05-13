"use client";

import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export function GoogleTranslateButton() {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "hi", name: "हिंदी (Hindi)" },
    { code: "es", name: "Español (Spanish)" },
    { code: "fr", name: "Français (French)" },
    { code: "de", name: "Deutsch (German)" },
    { code: "it", name: "Italiano (Italian)" },
    { code: "pt", name: "Português (Portuguese)" },
    { code: "ru", name: "Русский (Russian)" },
    { code: "ja", name: "日本語 (Japanese)" },
    { code: "ko", name: "한국어 (Korean)" },
    { code: "zh-CN", name: "中文 (Chinese)" },
    { code: "ar", name: "العربية (Arabic)" },
    { code: "bn", name: "বাংলা (Bengali)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "ur", name: "اردو (Urdu)" },
  ];

  const handleTranslate = (langCode: string) => {
    const currentUrl = window.location.href;
    const translateUrl = `https://translate.google.com/translate?u=${encodeURIComponent(currentUrl)}&hl=en&sl=en&tl=${langCode}`;
    window.open(translateUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200 border border-slate-200 text-xs font-medium"
        title="Translate page to any language"
      >
        <Globe className="w-4 h-4 text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors" />
        <span className="text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors hidden sm:inline">
          Translate
        </span>
        <ChevronDown className="w-3 h-3 text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleTranslate(lang.code)}
              className="w-full text-left px-4 py-2 hover:bg-slate-100 text-sm text-slate-700 hover:text-[var(--color-canam-red)] transition-colors border-b border-slate-100 last:border-b-0"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
