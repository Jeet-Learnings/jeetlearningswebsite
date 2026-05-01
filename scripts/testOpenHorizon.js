#!/usr/bin/env node

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
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

const OPENHORIZON_API_KEY = process.env.NEXT_PUBLIC_OPENHORIZON_API_KEY;

console.log("Testing OpenHorizon API...\n");
console.log(`API Key: ${OPENHORIZON_API_KEY?.substring(0, 20)}...`);

async function testTranslation(text) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: "openhorizon/embeddinggemma:300m",
      prompt: `Translate this text to Hindi. Reply ONLY with the Hindi translation:\n\n${text}`,
    });

    const options = {
      hostname: "api.openhorizon.devwtf.in",
      path: "/v1/chat",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENHORIZON_API_KEY}`,
        "Content-Length": data.length,
      },
    };

    console.log(`\nTesting with: "${text}"`);

    const req = https.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseData);
          console.log(`Status: ${res.statusCode}`);
          
          if (parsed.error) {
            console.log(`Error: ${parsed.error.message}`);
            reject(parsed.error);
          } else {
            const translation = parsed.choices?.[0]?.message?.content;
            console.log(`Translation: "${translation}"`);
            resolve(translation);
          }
        } catch (error) {
          console.log(`Parse error: ${error.message}`);
          console.log(`Response: ${responseData.substring(0, 200)}`);
          reject(error);
        }
      });
    });

    req.on("error", (error) => {
      console.log(`Request error: ${error.message}`);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function main() {
  try {
    await testTranslation("Hello");
    await new Promise(r => setTimeout(r, 1000));
    
    await testTranslation("Career Path");
    await new Promise(r => setTimeout(r, 1000));
    
    await testTranslation("Book Consultation");
  } catch (error) {
    console.error("Test failed:", error);
  }
}

main();
