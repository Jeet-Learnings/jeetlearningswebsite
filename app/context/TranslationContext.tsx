"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface TranslationContextType {
  language: "en" | "hi";
  toggleLanguage: () => void;
  isLoading: boolean;
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
  const [isMounted, setIsMounted] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem("preferredLanguage") as
      | "en"
      | "hi"
      | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, isLoading }}>
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
