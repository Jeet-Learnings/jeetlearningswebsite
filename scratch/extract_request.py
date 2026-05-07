import json
import os

log_path = r'C:\Users\coddy\.gemini\antigravity\brain\b47b5286-0ebe-4328-bcae-8629463fa397\.system_generated\logs\overview.txt'

with open(log_path, 'r', encoding='utf-8') as f:
    line = f.readline()
    data = json.loads(line)
    content = data['content']
    
with open('full_request.txt', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Extracted {len(content)} characters to full_request.txt")
