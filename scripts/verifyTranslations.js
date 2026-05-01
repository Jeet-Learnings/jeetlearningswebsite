#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hiPath = path.join(__dirname, "../app/data/translations/hi.json");
const enPath = path.join(__dirname, "../app/data/translations/en.json");

console.log("📋 Verifying Translation Files...\n");

// Load translations
const hiTranslations = JSON.parse(fs.readFileSync(hiPath, "utf-8"));
const enTranslations = JSON.parse(fs.readFileSync(enPath, "utf-8"));

console.log(`✅ Hindi translations loaded: ${Object.keys(hiTranslations).length} entries`);
console.log(`✅ English translations loaded: ${Object.keys(enTranslations).length} entries`);

// Show sample translations
console.log("\n📝 Sample Translations:\n");

const samples = [
  "Home",
  "Career Path",
  "Book Consultation",
  "Resources",
  "Blog",
  "Contact",
  "Find Your Path",
  "Build Your Future",
];

samples.forEach((key) => {
  const hi = hiTranslations[key] || "NOT FOUND";
  const en = enTranslations[key] || "NOT FOUND";
  console.log(`  "${key}"`);
  console.log(`    EN: ${en}`);
  console.log(`    HI: ${hi}\n`);
});

// Verify all Hindi translations are different from English
let sameCount = 0;
let differentCount = 0;

Object.keys(hiTranslations).forEach((key) => {
  if (hiTranslations[key] === key) {
    sameCount++;
  } else {
    differentCount++;
  }
});

console.log(`📊 Translation Quality:\n`);
console.log(`  ✅ Properly translated: ${differentCount}`);
console.log(`  ⚠️  Same as English: ${sameCount}`);
console.log(`  📈 Translation rate: ${((differentCount / Object.keys(hiTranslations).length) * 100).toFixed(1)}%\n`);

console.log("✨ Translation verification complete!");
