// Translation storage - loads from JSON files in codebase
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
    console.log("Translations loaded:", { en: Object.keys(translationCache.en).length, hi: Object.keys(translationCache.hi).length });
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

// Get translation from loaded store
async function getStoredTranslation(
  text: string,
  language: "en" | "hi"
): Promise<string | null> {
  await loadTranslations();

  // Direct lookup - exact match
  if (translationCache[language][text]) {
    console.log(`Found translation for "${text}":`, translationCache[language][text]);
    return translationCache[language][text];
  }

  console.log(`No translation found for "${text}" in ${language}`);
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

// Translate text using Gemini API
async function translateWithGemini(text: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key not configured");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Translate the following text to Hindi. Provide only the translation, nothing else:\n\n${text}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1024,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.statusText}`);
  }

  const data = await response.json();
  const translation =
    data.candidates?.[0]?.content?.parts?.[0]?.text || text;

  return translation.trim();
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

  // If not found, translate using Gemini API
  const translation = await translateWithGemini(text);

  // Save to codebase
  await saveTranslationToCodebase(text, translation, language);

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
