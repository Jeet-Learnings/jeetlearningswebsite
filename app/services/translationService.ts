// Translation storage -  loads from JSON files in codebase
interface TranslationStore {
  [key: string]: string;
}

let translationCache: {
  en: TranslationStore;
  hi: TranslationStore;
} = {
  en: {},
  hi: {},
};

let isLoaded = false;

// Load translations from JSON files
async function loadTranslations(): Promise<void> {
  if (isLoaded) return;

  try {
    // Import translations directly
    const { default: hiData } = await import("@/app/data/translations/hi.json");
    const { default: enData } = await import("@/app/data/translations/en.json");

    translationCache.en = enData;
    translationCache.hi = hiData;

    isLoaded = true;
    console.log("Translations loaded:", { 
      en: Object.keys(translationCache.en).length, 
      hi: Object.keys(translationCache.hi).length 
    });
  } catch (error) {
    console.error("Error loading translations:", error);
    // Fallback to API
    try {
      const [enResponse, hiResponse] = await Promise.all([
        fetch("/api/translations/en"),
        fetch("/api/translations/hi"),
      ]);

      if (enResponse.ok) {
        const enData = await enResponse.json();
        translationCache.en = enData;
      }
      if (hiResponse.ok) {
        const hiData = await hiResponse.json();
        translationCache.hi = hiData;
      }

      isLoaded = true;
    } catch (fallbackError) {
      console.error("Error loading translations from API:", fallbackError);
    }
  }
}

// Get translation from loaded store
async function getStoredTranslation(
  text: string,
  language: "en" | "hi"
): Promise<string | null> {
  await loadTranslations();

  // Direct lookup -  exact match
  if (translationCache[language][text]) {
    return translationCache[language][text];
  }

  return null;
}

// Save translation to codebase (API endpoint)
async function saveTranslationToCodebase(
  text: string,
  translation: string,
  language: "en" | "hi"
): Promise<void> {
  try {
    const response = await fetch("/api/translations/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        translation,
        language,
      }),
    });

    if (response.ok) {
      // Update local cache
      translationCache[language][text] = translation;
      console.log(`Saved translation for "${text}":`, translation);
    }
  } catch (error) {
    console.error("Error saving translation to codebase:", error);
  }
}

// Translate text using Ollama locally
async function translateWithOllama(text: string): Promise<string> {
  try {
    const response = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "translategemma:4b",
          prompt: `Translate this text to Hindi. Reply ONLY with the Hindi translation:\n\n${text}`,
          stream: false,
          temperature: 0.1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    const translation = data.response?.trim() || text;

    return translation;
  } catch (error) {
    console.warn("Ollama translation error -  returning English text:", error);
    // Return English text if Ollama is not available
    return text;
  }
}

// Main translation function with codebase storage
export async function translateText(
  text: string,
  language: "en" | "hi" = "hi"
): Promise<string> {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // If English, return as-is
  if (language === "en") {
    return text;
  }

  // Check if translation exists in codebase
  const stored = await getStoredTranslation(text, language);
  if (stored) {
    return stored;
  }

  // If not found, translate using Ollama locally
  const translation = await translateWithOllama(text);
  return translation;
}

// Batch translate multiple texts
export async function translateBatch(
  texts: string[],
  language: "en" | "hi" = "hi"
): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    const translated = await translateText(text, language);
    results.push(translated);
  }

  return results;
}

// Get all translations for a language
export async function getAllTranslations(
  language: "en" | "hi"
): Promise<TranslationStore> {
  await loadTranslations();
  return translationCache[language];
}

// Add translation directly to codebase
export async function addTranslation(
  text: string,
  translation: string,
  language: "en" | "hi"
): Promise<void> {
  await saveTranslationToCodebase(text, translation, language);
}
