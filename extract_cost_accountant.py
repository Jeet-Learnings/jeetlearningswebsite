import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('extracted_careers_complete.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Find Cost Accountant
cost_accountant = None
for career in data['Account and Finance']['careers']:
    if 'cost' in career['title'].lower() and 'accountant' in career['title'].lower():
        cost_accountant = career
        break

if cost_accountant:
    print('=== COST ACCOUNTANT - COMPLETE DATA ===\n')
    for section_name, table_data in cost_accountant['sections'].items():
        print(f'\n--- {section_name.upper()} ---\n')
        for i, row in enumerate(table_data):
            print(f'Row {i}:')
            for j, cell in enumerate(row):
                if cell.strip():
                    print(f'  Col {j}:\n{cell}\n')
else:
    print('Cost Accountant not found')
