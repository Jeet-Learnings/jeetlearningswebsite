#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hiPath = path.join(__dirname, "../app/data/translations/hi.json");
const APP_DIR = path.join(__dirname, "../app");

// Load existing translations
const hiTranslations = JSON.parse(fs.readFileSync(hiPath, "utf-8"));

// Extract all UI text from files
function extractTextFromFile(filePath) {
  const ext = path.extname(filePath).slice(1);
  
  if (ext !== 'tsx' && ext !== 'ts') {
    return [];
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const texts = new Set();

  // Extract JSX text content
  const jsxTextRegex = />([^<{}\n]+)</g;
  let match;
  while ((match = jsxTextRegex.exec(content)) !== null) {
    let text = match[1].trim();
    if (text && text.length > 2 && text.length < 300 && !text.includes('className') && !text.includes('{')) {
      texts.add(text);
    }
  }

  // Extract string literals
  const stringRegex = /["'`]([^"'`\n]{2,}?)["'`]/g;
  while ((match = stringRegex.exec(content)) !== null) {
    let text = match[1].trim();
    if (text && text.length > 2 && text.length < 300 && !text.includes('className') && !text.includes('{') && !text.startsWith('http') && !text.startsWith('/')) {
      texts.add(text);
    }
  }

  return Array.from(texts);
}

// Get all files
function getAllFiles(dir) {
  const files = [];
  function walk(currentPath) {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      if (item.startsWith(".") || item === "node_modules" || item === ".next" || item === "dist") {
        continue;
      }
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  walk(dir);
  return files;
}

// Find missing translations
const files = getAllFiles(APP_DIR);
const allTexts = new Set();

for (const file of files) {
  const texts = extractTextFromFile(file);
  for (const text of texts) {
    allTexts.add(text);
  }
}

const missing = Array.from(allTexts).filter(text => !hiTranslations[text]);

console.log(`📊 Translation Status:\n`);
console.log(`  Total UI texts found: ${allTexts.size}`);
console.log(`  Already translated: ${allTexts.size - missing.length}`);
console.log(`  Missing translations: ${missing.length}\n`);

if (missing.length > 0) {
  console.log(`❌ Missing translations (first 50):\n`);
  missing.slice(0, 50).forEach((text, i) => {
    console.log(`  ${i + 1}. "${text}"`);
  });
  
  if (missing.length > 50) {
    console.log(`\n  ... and ${missing.length - 50} more`);
  }
}
