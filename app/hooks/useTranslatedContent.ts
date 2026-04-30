import { useState, useEffect } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { translateText } from "@/app/services/translationService";

export function useTranslatedContent(content: string): string {
  const { language } = useTranslation();
  const [translatedContent, setTranslatedContent] = useState(content);
  const [isLoading, setIsLoading] = useState(false);

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
        console.error("Translation error:", error);
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
  const { language } = useTranslation();
  const [translatedContents, setTranslatedContents] = useState(contents);
  const [isLoading, setIsLoading] = useState(false);

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
        console.error("Translation error:", error);
        setTranslatedContents(contents);
      } finally {
        setIsLoading(false);
      }
    };

    translate();
  }, [contents, language]);

  return translatedContents;
}
