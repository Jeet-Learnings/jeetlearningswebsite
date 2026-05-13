"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function TranslationWrapper({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem("translationLang");
    
    if (savedLang && savedLang !== "en") {
      // Apply Google Translate
      applyGoogleTranslate(savedLang);
    }
    
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // When route changes, reapply translation if needed
    const savedLang = localStorage.getItem("translationLang");
    
    if (savedLang && savedLang !== "en") {
      // Small delay to ensure page is rendered
      const timer = setTimeout(() => {
        applyGoogleTranslate(savedLang);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const applyGoogleTranslate = (langCode: string) => {
    // Find or create the Google Translate select element
    const selectElement = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change"));
    } else {
      // If not found, try again after a delay
      setTimeout(() => {
        const select = document.querySelector(
          ".goog-te-combo"
        ) as HTMLSelectElement;
        if (select) {
          select.value = langCode;
          select.dispatchEvent(new Event("change"));
        }
      }, 1000);
    }
  };

  return <>{children}</>;
}
