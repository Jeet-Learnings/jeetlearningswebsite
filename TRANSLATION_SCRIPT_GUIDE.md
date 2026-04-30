# Automatic Translation Script Guide

## Overview

The `extractAndTranslate.js` script automatically:
1. **Extracts** all text content from your React/TypeScript components
2. **Translates** the extracted text to Hindi using Google Gemini API
3. **Saves** translations to `app/data/translations/hi.json` and `app/data/translations/en.json`

## How It Works

### Step 1: Text Extraction
The script scans all `.tsx`, `.ts`, and `.json` files in the `app/` directory and extracts:
- Quoted strings (both single and double quotes)
- JSX text content
- HTML attributes (placeholder, title, alt, etc.)

### Step 2: Filtering
It automatically skips:
- Variable names and code identifiers
- Import/export statements
- Function/class declarations
- Numbers, colors, URLs, and paths
- Very short texts (< 3 characters)
- Already translated texts

### Step 3: Translation
For each new text, it:
1. Calls the Gemini API to translate to Hindi
2. Stores the translation in memory
3. Adds a small delay to avoid rate limiting

### Step 4: Saving
Translations are saved to:
- `app/data/translations/hi.json` - Hindi translations
- `app/data/translations/en.json` - English originals

## Usage

### Prerequisites
Make sure your `.env.local` file has the Gemini API key:
```
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyAJDX3kQBk9aFKvv9EovWkYAalbVwkFLE8
```

### Run the Script
```bash
npm run translate
```

### What You'll See
```
🚀 Starting text extraction and translation...

📦 Loaded 45 existing Hindi translations

📄 Found 127 files to process

📝 Extracted 892 unique texts

🔄 Need to translate 847 new texts

🌐 Translating texts using Gemini API...

✓ Translated 10/847
✓ Translated 20/847
...
✓ Translated 847/847

✅ Translation complete!
   Translated: 847
   Failed: 0

💾 Saving translations...

📊 Final statistics:
   Total Hindi translations: 892
   Total English translations: 892

🎉 Done!
```

## Features

### Smart Extraction
- Extracts text from JSX elements
- Captures HTML attributes
- Handles both single and double quotes
- Skips code patterns automatically

### Incremental Translation
- Only translates new texts
- Preserves existing translations
- Avoids redundant API calls
- Saves progress automatically

### Error Handling
- Gracefully handles API errors
- Shows which texts failed to translate
- Continues processing on errors
- Provides detailed error messages

### Rate Limiting
- Adds 100ms delay between API calls
- Prevents hitting API rate limits
- Suitable for large-scale translations

## Translation Files Structure

### `app/data/translations/hi.json`
```json
{
  "Premium Study Abroad Counselling": "प्रीमियम विदेश में अध्ययन परामर्श",
  "Book Free Consultation": "मुफ्त परामर्श बुक करें",
  "Explore Programs": "कार्यक्रमों का अन्वेषण करें",
  ...
}
```

### `app/data/translations/en.json`
```json
{
  "Premium Study Abroad Counselling": "Premium Study Abroad Counselling",
  "Book Free Consultation": "Book Free Consultation",
  "Explore Programs": "Explore Programs",
  ...
}
```

## How to Use Translations in Components

### Method 1: Using the Hook
```tsx
"use client";

import { useTranslatedContent } from "@/app/hooks/useTranslatedContent";

export function MyComponent() {
  const title = useTranslatedContent("Premium Study Abroad Counselling");
  return <h1>{title}</h1>;
}
```

### Method 2: Using the Component
```tsx
import { TranslatedHeading } from "@/app/components/TranslatedText";

export function MyComponent() {
  return <TranslatedHeading level={1}>Premium Study Abroad Counselling</TranslatedHeading>;
}
```

## Workflow

### First Time Setup
1. Run `npm run translate` to extract and translate all content
2. This creates the initial translation files
3. Takes a few minutes depending on content size

### Adding New Content
1. Add new text to your components
2. Run `npm run translate` again
3. Only new texts are translated
4. Existing translations are preserved

### Updating Translations
1. Edit `app/data/translations/hi.json` manually if needed
2. Or run the script again to re-translate everything

## Tips & Best Practices

### 1. Run Before Deployment
Always run the translation script before deploying:
```bash
npm run translate
npm run build
npm run start
```

### 2. Commit Translation Files
Add translation files to git:
```bash
git add app/data/translations/
git commit -m "Update translations"
```

### 3. Monitor API Usage
Check your Gemini API quota:
- Visit: https://console.cloud.google.com/
- Check API usage and quotas
- Set up billing alerts if needed

### 4. Handle Large Projects
For very large projects:
- Run the script during off-peak hours
- Monitor API rate limits
- Consider running in batches

### 5. Quality Check
After translation:
1. Test the app with Hindi language toggle
2. Review translations for accuracy
3. Manually fix any incorrect translations
4. Re-run script to update

## Troubleshooting

### Issue: "NEXT_PUBLIC_GEMINI_API_KEY not set"
**Solution:** Add the API key to `.env.local`:
```
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

### Issue: "API rate limit exceeded"
**Solution:** 
- Wait a few minutes before running again
- The script has built-in delays
- Check your API quota

### Issue: "Some translations failed"
**Solution:**
- Check the error messages
- Verify API key is valid
- Try running the script again
- Check internet connection

### Issue: "Translations not appearing in app"
**Solution:**
1. Verify translation files exist: `app/data/translations/hi.json`
2. Check that components use `useTranslatedContent` hook
3. Verify language toggle is working
4. Check browser console for errors

## Advanced Usage

### Extract Only (No Translation)
Modify the script to only extract texts without translating:
```javascript
// Comment out the translation loop
// Just collect all texts and save to file
```

### Batch Translation
For very large projects, split into batches:
```bash
# Translate first 100 items
# Then run again for next batch
```

### Custom Skip Patterns
Add more patterns to skip in the script:
```javascript
const SKIP_PATTERNS = [
  // ... existing patterns
  /^custom_pattern$/, // Add your pattern
];
```

## Performance

### Typical Times
- Small project (< 100 texts): 1-2 minutes
- Medium project (100-500 texts): 5-10 minutes
- Large project (500+ texts): 10-30 minutes

### Optimization
- Texts are extracted in parallel
- Translations are done sequentially (to avoid rate limits)
- Already translated texts are skipped
- Progress is shown every 10 translations

## API Costs

### Gemini API Pricing
- Approximately $0.0001 per 1000 characters
- For 1000 texts averaging 50 characters: ~$0.005
- Very affordable for most projects

### Cost Estimation
- 100 texts: ~$0.0005
- 500 texts: ~$0.0025
- 1000 texts: ~$0.005
- 5000 texts: ~$0.025

## Next Steps

1. **Run the script**: `npm run translate`
2. **Test translations**: Toggle language in navbar
3. **Review quality**: Check translations for accuracy
4. **Deploy**: Commit and push to production
5. **Monitor**: Track API usage and user feedback

## Support

If you encounter issues:
1. Check the error messages in console
2. Verify API key is correct
3. Check internet connection
4. Review the troubleshooting section above
5. Check Gemini API documentation

---

**Happy translating!** 🎉
