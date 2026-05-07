import docx
import json
import glob
import os

data = {}

for filepath in glob.glob('public/extradata/*.docx'):
    try:
        doc = docx.Document(filepath)
        filename = os.path.basename(filepath)
        data[filename] = []
        
        for table in doc.tables:
            table_data = []
            for row in table.rows:
                row_data = [cell.text.strip().replace('\n', ' | ') for cell in row.cells]
                table_data.append(row_data)
            data[filename].append(table_data)
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

with open('extracted_tables.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
