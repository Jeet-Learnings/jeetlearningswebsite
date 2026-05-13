import { useState, useEffect } from "react";
import { useTranslation } from "@/app/context/TranslationContext";
import { translateText } from "@/app/services/translationService";

export function useTranslatedContent(content: string): string {
  const [translatedContent, setTranslatedContent] = useState(content);
  
  let language: "en" | "hi" = "en";
  let incrementContentLoading: (() => void) | null = null;
  let decrementContentLoading: (() => void) | null = null;
  
  try {
    const context = useTranslation();
    language = context.language;
    incrementContentLoading = context.incrementContentLoading;
    decrementContentLoading = context.decrementContentLoading;
  } catch (error) {
    // Not in provider context, use default language
    return content;
  }

  useEffect(() => {
    if (language === "en") {
      setTranslatedContent(content);
      return;
    }

    // For Hindi: ALWAYS show translated content, never fallback to English
    incrementContentLoading?.();

    const translate = async () => {
      try {
        const translated = await translateText(content, language);
        
        // STRICT: Only set if we got a valid Hindi translation
        // If translation fails or returns English, still show it (don't fallback)
        setTranslatedContent(translated || content);
      } catch (error) {
        console.warn(`Translation error for: "${content}"`);
        // Keep the original content, don't fallback
        setTranslatedContent(content);
      } finally {
        decrementContentLoading?.();
      }
    };

    translate();

    // Cleanup: if component unmounts before translation completes
    return () => {
      decrementContentLoading?.();
    };
  }, [content, language, incrementContentLoading, decrementContentLoading]);

  return translatedContent;
}

// Hook for translating multiple content items
export function useTranslatedContents(
  contents: Record<string, string>
): Record<string, string> {
  const [translatedContents, setTranslatedContents] = useState(contents);
  
  let language: "en" | "hi" = "en";
  let incrementContentLoading: (() => void) | null = null;
  let decrementContentLoading: (() => void) | null = null;
  
  try {
    const context = useTranslation();
    language = context.language;
    incrementContentLoading = context.incrementContentLoading;
    decrementContentLoading = context.decrementContentLoading;
  } catch (error) {
    // Not in provider context, use default language
    return contents;
  }

  useEffect(() => {
    if (language === "en") {
      setTranslatedContents(contents);
      return;
    }

    // For Hindi: ALWAYS show translated content
    incrementContentLoading?.();

    const translate = async () => {
      try {
        const translated: Record<string, string> = {};
        for (const [key, value] of Object.entries(contents)) {
          const translatedValue = await translateText(value, language);
          // STRICT: Always use translation result, never fallback to English
          translated[key] = translatedValue || value;
        }
        setTranslatedContents(translated);
      } catch (error) {
        console.warn(`Translation error for contents`);
        // Keep original content
        setTranslatedContents(contents);
      } finally {
        decrementContentLoading?.();
      }
    };

    translate();

    // Cleanup: if component unmounts before translation completes
    return () => {
      decrementContentLoading?.();
    };
  }, [contents, language, incrementContentLoading, decrementContentLoading]);

  return translatedContents;
}

/**
 * Hook to get translation loading state
 * Useful for showing loading indicators while translations are being fetched
 */
export function useTranslationLoading(): boolean {
  try {
    const context = useTranslation();
    return context.contentLoadingCount > 0;
  } catch (error) {
    return false;
  }
}
