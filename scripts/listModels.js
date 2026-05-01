#!/usr/bin/env node

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local first, then .env
let envPath = path.join(__dirname, "../.env.local");
if (!fs.existsSync(envPath)) {
  envPath = path.join(__dirname, "../.env");
}

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

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

console.log("Listing available models...\n");

async function listModels() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "generativelanguage.googleapis.com",
      path: `/v1beta/models?key=${GEMINI_API_KEY}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
          console.log("Available models:");
          if (parsed.models) {
            parsed.models.forEach((model) => {
              console.log(`  - ${model.name}`);
              if (model.supportedGenerationMethods) {
                console.log(`    Methods: ${model.supportedGenerationMethods.join(", ")}`);
              }
            });
          } else {
            console.log(JSON.stringify(parsed, null, 2));
          }
          resolve();
        } catch (error) {
          console.log(`Parse error: ${error.message}`);
          console.log(`Response: ${responseData}`);
          reject(error);
        }
      });
    });

    req.on("error", reject);
    req.end();
  });
}

listModels().catch(console.error);
