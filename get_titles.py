import re

with open('app/data/careerPageData.ts', 'r', encoding='utf-8') as f:
    data = f.read()

start = data.find('actuarial_science:')
end = data.find('banking_and_related_services:')
act_data = data[start:end]

print("Titles of all sections in actuarial_science:")
for m in re.finditer(r'id:\s*"([^"]+)",\s*title:\s*"([^"]+)"', act_data):
    print(m.group(1), "->", m.group(2))
