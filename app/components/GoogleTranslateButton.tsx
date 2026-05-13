"use client";

import { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

export function GoogleTranslateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate
    (window as any).googleTranslateElementInit = function () {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,es,fr,de,it,pt,ru,ja,ko,zh-CN,ar,bn,ta,te,ur",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
      setIsInitialized(true);
    };

    // Load saved language
    const savedLang = localStorage.getItem("translationLang") || "en";
    setCurrentLang(savedLang);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    // Save language preference
    localStorage.setItem("translationLang", langCode);
    setCurrentLang(langCode);

    // Trigger Google Translate
    const selectElement = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change"));
    }

    setIsOpen(false);
  };

  const languages = [
    { code: "en", name: "English" },
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

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }} />

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200 border border-slate-200 text-xs font-medium"
          title="Translate page"
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
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors border-b border-slate-100 last:border-b-0 ${
                  currentLang === lang.code
                    ? "bg-red-50 text-[var(--color-canam-red)] font-semibold"
                    : "text-slate-700 hover:bg-slate-100 hover:text-[var(--color-canam-red)]"
                }`}
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

      {/* Hide Google Translate UI elements */}
      <style>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-gadget {
          color: transparent;
          font-size: 0;
        }
        .goog-te-gadget img {
          display: none;
        }
      `}</style>
    </>
  );
}
