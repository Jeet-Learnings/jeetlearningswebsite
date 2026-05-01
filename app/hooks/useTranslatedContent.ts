import { useState, useEffect } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { translateText } from "@/app/services/translationService";

export function useTranslatedContent(content: string): string {
  const [translatedContent, setTranslatedContent] = useState(content);
  const [isLoading, setIsLoading] = useState(false);
  
  let language: "en" | "hi" = "en";
  
  try {
    const context = useTranslation();
    language = context.language;
  } catch (error) {
    // Not in provider context, use default language
    return content;
  }

  useEffect(() => {
    if (language === "en") {
      setTranslatedContent(content);
      return;
    }

    const translate = async () => {
      setIsLoading(true);
      try {
        const translated = await translateText(content, language);
        setTranslatedContent(translated);
      } catch (error) {
        console.warn(`Translation missing for: "${content}"`);
        // Keep original English text if translation not found
        setTranslatedContent(content);
      } finally {
        setIsLoading(false);
      }
    };

    translate();
  }, [content, language]);

  return translatedContent;
}

// Hook for translating multiple content items
export function useTranslatedContents(
  contents: Record<string, string>
): Record<string, string> {
  const [translatedContents, setTranslatedContents] = useState(contents);
  const [isLoading, setIsLoading] = useState(false);
  
  let language: "en" | "hi" = "en";
  
  try {
    const context = useTranslation();
    language = context.language;
  } catch (error) {
    // Not in provider context, use default language
    return contents;
  }

  useEffect(() => {
    if (language === "en") {
      setTranslatedContents(contents);
      return;
    }

    const translate = async () => {
      setIsLoading(true);
      try {
        const translated: Record<string, string> = {};
        for (const [key, value] of Object.entries(contents)) {
          translated[key] = await translateText(value, language);
        }
        setTranslatedContents(translated);
      } catch (error) {
        console.warn(`Translation missing for contents`);
        // Keep original English text if translation not found
        setTranslatedContents(contents);
      } finally {
        setIsLoading(false);
      }
    };

    translate();
  }, [contents, language]);

  return translatedContents;
}
