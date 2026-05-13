"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { preloadTranslations } from "@/app/services/translationService";

interface TranslationContextType {
  language: "en" | "hi";
  toggleLanguage: () => void;
  isLoading: boolean;
  isRouteLoading: boolean;
  preloadRoute: (language: "en" | "hi") => Promise<void>;
  contentLoadingCount: number;
  incrementContentLoading: () => void;
  decrementContentLoading: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [isLoading, setIsLoading] = useState(false);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [contentLoadingCount, setContentLoadingCount] = useState(0);
  const pathname = usePathname();

  // Load language preference from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem("preferredLanguage") as
      | "en"
      | "hi"
      | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      // Preload translations for saved language
      if (savedLanguage === "hi") {
        preloadTranslations("hi").catch(err => 
          console.error("Error preloading saved language:", err)
        );
      }
    }
  }, []);

  // Preload translations when language changes
  useEffect(() => {
    if (!isMounted || language === "en") {
      setIsRouteLoading(false);
      setContentLoadingCount(0);
      return;
    }

    const preloadCurrentLanguage = async () => {
      setIsRouteLoading(true);
      try {
        console.log(`[TranslationContext] Preloading ${language} for route: ${pathname}`);
        await preloadTranslations(language);
        console.log(`[TranslationContext] ✓ Preload complete for ${language}`);
      } catch (error) {
        console.error("[TranslationContext] Error preloading translations:", error);
      } finally {
        setIsRouteLoading(false);
      }
    };

    preloadCurrentLanguage();
  }, [language, isMounted]);

  // Preload when route changes
  useEffect(() => {
    if (!isMounted || language === "en") {
      setContentLoadingCount(0);
      return;
    }

    const preloadForRoute = async () => {
      setIsRouteLoading(true);
      setContentLoadingCount(0); // Reset content loading count on route change
      try {
        console.log(`[TranslationContext] Preloading ${language} for new route: ${pathname}`);
        await preloadTranslations(language);
        console.log(`[TranslationContext] ✓ Preload complete for route: ${pathname}`);
      } catch (error) {
        console.error("[TranslationContext] Error preloading for route:", error);
      } finally {
        setIsRouteLoading(false);
      }
    };

    preloadForRoute();
  }, [pathname, language, isMounted]);

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === "en" ? "hi" : "en";
    console.log(`[TranslationContext] Toggling language: ${language} → ${newLanguage}`);
    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
    
    // Hard refresh the page to ensure clean state
    window.location.reload();
  }, [language]);

  const preloadRoute = useCallback(
    async (targetLanguage: "en" | "hi") => {
      if (targetLanguage === "en") {
        return;
      }

      setIsRouteLoading(true);
      try {
        console.log(`[TranslationContext] Manual preload for ${targetLanguage}`);
        await preloadTranslations(targetLanguage);
        console.log(`[TranslationContext] ✓ Manual preload complete`);
      } catch (error) {
        console.error("[TranslationContext] Error in manual preload:", error);
      } finally {
        setIsRouteLoading(false);
      }
    },
    []
  );

  const incrementContentLoading = useCallback(() => {
    setContentLoadingCount(prev => prev + 1);
  }, []);

  const decrementContentLoading = useCallback(() => {
    setContentLoadingCount(prev => Math.max(0, prev - 1));
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <TranslationContext.Provider
      value={{
        language,
        toggleLanguage,
        isLoading,
        isRouteLoading,
        preloadRoute,
        contentLoadingCount,
        incrementContentLoading,
        decrementContentLoading,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
