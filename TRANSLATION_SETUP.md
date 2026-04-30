# Hindi Translation System Setup

## Overview
This system provides automatic Hindi translation for your website content using Google's Gemini API. Translations are cached locally in IndexedDB to avoid redundant API calls.

## Features
- **Smart Caching**: Translations are cached in IndexedDB, so Gemini API is only called once per unique text
- **Language Toggle**: Users can switch between English and Hindi via the navbar
- **Persistent Preference**: Language preference is saved in localStorage
- **Automatic Translation**: Content is translated on-demand when users switch to Hindi
- **Performance Optimized**: Uses Gemini 1.5 Flash for fast, cost-effective translations

## Setup Instructions

### 1. Environment Configuration
The `.env.local` file already contains your Gemini API key:
```
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyAJDX3kQBk9aFKvv9EovWkYAalbVwkFLE8
```

### 2. Using Translations in Components

#### For Simple Text Translation
```tsx
import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

export function MyComponent() {
  const translatedTitle = useTranslatedContent("Welcome to our site");
  
  return <h1>{translatedTitle}</h1>;
}
```

#### For Multiple Content Items
```tsx
import { useTranslatedContents } from "@/app/hooks/useTranslatedContent";

export function MyComponent() {
  const content = {
    title: "Welcome",
    description: "This is a description"
  };
  
  const translated = useTranslatedContents(content);
  
  return (
    <>
      <h1>{translated.title}</h1>
      <p>{translated.description}</p>
    </>
  );
}
```

#### Accessing Current Language
```tsx
import { useTranslation } from "@/app/context/TranslationContext";

export function MyComponent() {
  const { language, toggleLanguage } = useTranslation();
  
  return (
    <>
      <p>Current language: {language}</p>
      <button onClick={toggleLanguage}>Switch Language</button>
    </>
  );
}
```

## How It Works

1. **User clicks language toggle** in navbar
2. **Language preference is saved** to localStorage
3. **Components using `useTranslatedContent` hook** detect language change
4. **System checks IndexedDB cache** for existing translation
5. **If cached**: Returns cached translation immediately
6. **If not cached**: Calls Gemini API to translate, then caches result
7. **Content updates** with translated text

## Cache Storage
- **Location**: Browser's IndexedDB (persists across sessions)
- **Database**: `TranslationCache`
- **Store**: `translations`
- **Key**: Original English text
- **Value**: Hindi translation + timestamp

## API Usage
- **Model**: Gemini 1.5 Flash (fast and cost-effective)
- **Temperature**: 0.3 (for consistent translations)
- **Max Tokens**: 1024 per request

## Navbar Integration
The language toggle button appears in the navbar:
- **Desktop**: Shows "हिंदी" when in English, "EN" when in Hindi
- **Mobile**: Shows a globe icon that toggles language
- **Persistent**: Language choice is remembered across sessions

## Example: Translating a Page Component

```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";
import { useTranslation } from "@/app/context/TranslationContext";

export default function MyPage() {
  const { language } = useTranslation();
  const title = useTranslatedContent("My Page Title");
  const description = useTranslatedContent("This is my page description");
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Current language: {language}</p>
    </div>
  );
}
```

## Performance Considerations
- First translation of unique text: ~1-2 seconds (API call)
- Subsequent translations of same text: Instant (from cache)
- Cache persists across browser sessions
- No API calls for cached content

## Troubleshooting

### Translations not appearing
1. Check that `.env.local` has the correct API key
2. Open browser DevTools → Application → IndexedDB to verify cache
3. Check browser console for any error messages

### API errors
1. Verify the Gemini API key is valid
2. Check that you have API quota remaining
3. Ensure the API is enabled in Google Cloud Console

### Cache issues
1. Clear IndexedDB: DevTools → Application → IndexedDB → Delete database
2. Clear localStorage: `localStorage.clear()`
3. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

## Future Enhancements
- Add more languages (Spanish, French, etc.)
- Implement batch translation for better performance
- Add translation progress indicator
- Create admin panel to manage translations
- Add RTL support for Hindi text
