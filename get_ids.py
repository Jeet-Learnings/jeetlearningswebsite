import re

with open('app/data/careerPageData.ts', 'r', encoding='utf-8') as f:
    data = f.read()

start = data.find('actuarial_science:')
end = data.find('banking_and_related_services:')
act_data = data[start:end]

matches = re.findall(r'id:\s*"([^"]+)"', act_data)
print('Section IDs:', matches)
