#!/usr/bin/env node

import http from "http";

console.log("Testing Ollama API...\n");

async function testTranslation(text) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: "translategemma:4b",
      prompt: `Translate this text to Hindi. Reply ONLY with the Hindi translation:\n\n${text}`,
      stream: false,
      temperature: 0.1,
    });

    const options = {
      hostname: "localhost",
      port: 11434,
      path: "/api/generate",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    console.log(`Testing with: "${text}"`);
    console.log(`Using: http://localhost:11434/api/generate\n`);

    const req = http.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        try {
          const parsed = JSON.parse(responseData);
          console.log(`Status: ${res.statusCode}`);
          
          if (parsed.error) {
            console.log(`Error: ${parsed.error}`);
            reject(parsed.error);
          } else {
            const translation = parsed.response?.trim();
            console.log(`Translation: "${translation}"\n`);
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
      console.log(`Make sure Ollama is running: ollama serve\n`);
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
    
    console.log("✅ Ollama is working correctly!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    console.error("\nMake sure Ollama is installed and running:");
    console.error("  1. Install Ollama from https://ollama.ai");
    console.error("  2. Run: ollama serve");
    console.error("  3. In another terminal, pull the model: ollama pull translategemma:4b");
  }
}

main();
