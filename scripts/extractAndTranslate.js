#!/usr/bin/env node

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
const envPath = path.join(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const lines = envContent.split("\n");
  for (const line of lines) {
    const [key, value] = line.split("=");
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  }
}

// Configuration
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const TRANSLATIONS_DIR = path.join(__dirname, "../app/data/translations");
const APP_DIR = path.join(__dirname, "../app");

if (!GEMINI_API_KEY) {
  console.error("Error: NEXT_PUBLIC_GEMINI_API_KEY environment variable not set");
  console.error("Make sure .env.local file exists with the API key");
  process.exit(1);
}

// Regex patterns to extract text from different file types
const TEXT_PATTERNS = {
  tsx: [
    /"([^"]+)"/g, // Double quoted strings
    /'([^']+)'/g, // Single quoted strings
    />([^<]+)</g, // JSX text content
    /placeholder="([^"]+)"/g, // Placeholder attributes
    /title="([^"]+)"/g, // Title attributes
    /alt="([^"]+)"/g, // Alt attributes
  ],
  ts: [
    /"([^"]+)"/g,
    /'([^']+)'/g,
  ],
  json: [], // JSON files are handled separately
};

// Texts to skip (common code patterns, variables, etc.)
const SKIP_PATTERNS = [
  /^[a-zA-Z_$][a-zA-Z0-9_$]*$/, // Variable names
  /^\/\//, // Comments
  /^\/\*/, // Comments
  /^import/, // Import statements
  /^export/, // Export statements
  /^const/, // Variable declarations
  /^let/, // Variable declarations
  /^var/, // Variable declarations
  /^function/, // Function declarations
  /^class/, // Class declarations
  /^interface/, // Interface declarations
  /^type/, // Type declarations
  /^enum/, // Enum declarations
  /^\d+$/, // Numbers only
  /^[a-zA-Z0-9-]+$/, // IDs, classes, etc.
  /^#/, // Hex colors
  /^rgb/, // RGB colors
  /^http/, // URLs
  /^\//, // Paths
  /^\./, // Relative paths
  /^\$/, // Variables
  /^{/, // Objects
  /^\[/, // Arrays
  /^</, // HTML tags
  /^>/, // HTML tags
  /^=/, // Assignments
  /^\(/, // Parentheses
  /^\)/, // Parentheses
];

// Load existing translations
function loadExistingTranslations() {
  const hiPath = path.join(TRANSLATIONS_DIR, "hi.json");
  const enPath = path.join(TRANSLATIONS_DIR, "en.json");

  let hiTranslations = {};
  let enTranslations = {};

  if (fs.existsSync(hiPath)) {
    hiTranslations = JSON.parse(fs.readFileSync(hiPath, "utf-8"));
  }

  if (fs.existsSync(enPath)) {
    enTranslations = JSON.parse(fs.readFileSync(enPath, "utf-8"));
  }

  return { hiTranslations, enTranslations };
}

// Extract text from a file
function extractTextFromFile(filePath) {
  const ext = path.extname(filePath).slice(1);
  const patterns = TEXT_PATTERNS[ext] || [];

  if (patterns.length === 0) {
    return [];
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const texts = new Set();

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const text = match[1] || match[0];

      // Skip if matches skip patterns
      if (SKIP_PATTERNS.some((p) => p.test(text))) {
        continue;
      }

      // Skip very short texts
      if (text.length < 3) {
        continue;
      }

      // Skip if already in translations
      texts.add(text.trim());
    }
  }

  return Array.from(texts);
}

// Recursively get all files from a directory
function getAllFiles(dir, ext = [".tsx", ".ts", ".json"]) {
  const files = [];

  function walk(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      // Skip node_modules, .next, etc.
      if (
        item.startsWith(".") ||
        item === "node_modules" ||
        item === ".next" ||
        item === "dist"
      ) {
        continue;
      }

      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (ext.some((e) => fullPath.endsWith(e))) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

// Translate text using Gemini API
async function translateText(text) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
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
    });

    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    const req = https.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseData);
          const translation =
            parsed.candidates?.[0]?.content?.parts?.[0]?.text || text;
          resolve(translation.trim());
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

// Main function
async function main() {
  console.log("🚀 Starting text extraction and translation...\n");

  // Load existing translations
  const { hiTranslations, enTranslations } = loadExistingTranslations();
  console.log(
    `📦 Loaded ${Object.keys(hiTranslations).length} existing Hindi translations\n`
  );

  // Get all files
  const files = getAllFiles(APP_DIR);
  console.log(`📄 Found ${files.length} files to process\n`);

  // Extract all texts
  const allTexts = new Set();
  const fileTexts = {};

  for (const file of files) {
    const texts = extractTextFromFile(file);
    fileTexts[file] = texts;

    for (const text of texts) {
      allTexts.add(text);
    }
  }

  console.log(`📝 Extracted ${allTexts.size} unique texts\n`);

  // Filter out already translated texts
  const textsToTranslate = Array.from(allTexts).filter(
    (text) => !hiTranslations[text]
  );

  console.log(
    `🔄 Need to translate ${textsToTranslate.length} new texts\n`
  );

  if (textsToTranslate.length === 0) {
    console.log("✅ All texts are already translated!");
    return;
  }

  // Translate texts
  console.log("🌐 Translating texts using Gemini API...\n");

  let translated = 0;
  let failed = 0;

  for (let i = 0; i < textsToTranslate.length; i++) {
    const text = textsToTranslate[i];

    try {
      const translation = await translateText(text);

      hiTranslations[text] = translation;
      enTranslations[text] = text;

      translated++;

      // Show progress
      if ((i + 1) % 10 === 0) {
        console.log(`✓ Translated ${i + 1}/${textsToTranslate.length}`);
      }

      // Add delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`✗ Failed to translate: "${text}"`);
      console.error(`  Error: ${error.message}\n`);
      failed++;
    }
  }

  console.log(`\n✅ Translation complete!`);
  console.log(`   Translated: ${translated}`);
  console.log(`   Failed: ${failed}\n`);

  // Save translations
  console.log("💾 Saving translations...\n");

  if (!fs.existsSync(TRANSLATIONS_DIR)) {
    fs.mkdirSync(TRANSLATIONS_DIR, { recursive: true });
  }

  fs.writeFileSync(
    path.join(TRANSLATIONS_DIR, "hi.json"),
    JSON.stringify(hiTranslations, null, 2)
  );

  fs.writeFileSync(
    path.join(TRANSLATIONS_DIR, "en.json"),
    JSON.stringify(enTranslations, null, 2)
  );

  console.log(`📊 Final statistics:`);
  console.log(`   Total Hindi translations: ${Object.keys(hiTranslations).length}`);
  console.log(`   Total English translations: ${Object.keys(enTranslations).length}\n`);

  console.log("🎉 Done!");
}

// Run the script
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

