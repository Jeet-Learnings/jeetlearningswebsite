import json

with open('extracted_careers_complete.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

banking = data['Account and Finance']['careers'][1]

print('=== BANKING & FINANCIAL SERVICES DATA ===\n')
for section_name, table_data in banking['sections'].items():
    print(f'\n--- {section_name.upper()} ---')
    print(f'Total rows: {len(table_data)}\n')
    for i, row in enumerate(table_data):
        print(f'Row {i}:')
        for j, cell in enumerate(row):
            if cell.strip():
                preview = cell if len(cell) < 300 else cell[:300] + '...'
                print(f'  Col {j}: {preview}')
        print()
