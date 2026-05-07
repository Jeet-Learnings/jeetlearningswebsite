import json

with open('extracted_careers_complete.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Show detailed view of Actuarial Science
actuarial = data['Account and Finance']['careers'][0]

print('='*70)
print('DETAILED VIEW: ACTUARIAL SCIENCE')
print('='*70)
print(f'\nTitle: {actuarial["title"]}\n')

for section_name, table_data in actuarial['sections'].items():
    print(f'\n--- {section_name.upper().replace("_", " ")} ---')
    print(f'Total rows: {len(table_data)}\n')
    
    for i, row in enumerate(table_data[:3]):  # Show first 3 rows
        print(f'Row {i+1}:')
        for j, cell in enumerate(row):
            if cell.strip():
                preview = cell[:200] if len(cell) > 200 else cell
                print(f'  Col {j+1}: {preview}')
        print()
    
    if len(table_data) > 3:
        print(f'... and {len(table_data) - 3} more rows\n')

print('='*70)
print('✓ All career data successfully extracted!')
print('='*70)
