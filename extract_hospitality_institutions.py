from docx import Document
import json

# Load the hospitality DOCX file
doc = Document('public/extradata/Combined file - Hospitality and Tourism.docx')

# Extract all tables
tables_data = {}
for table_idx, table in enumerate(doc.tables):
    table_num = table_idx + 1
    table_key = f"table_{table_num}"
    
    # Extract table content
    rows = []
    for row in table.rows:
        cells = [cell.text.strip() for cell in row.cells]
        rows.append(cells)
    
    tables_data[table_key] = rows
    print(f"\n=== TABLE {table_num} ===")
    for i, row in enumerate(rows[:15]):  # Print first 15 rows
        print(f"Row {i}: {row}")

print(f"\n\nTotal tables found: {len(tables_data)}")

# Now extract institutions data
# Based on the pattern, we need to find the "Where to Study?" or "Top Institutions" section
hospitality_institutions = {}

for table_key, rows in tables_data.items():
    print(f"\n\nProcessing {table_key}...")
    
    # Find the institutions section
    in_institutions = False
    current_type = None
    institutions = {}
    
    for row in rows:
        row_text = ' '.join(row).lower()
        
        # Check if this is the institutions header
        if 'where to study' in row_text or 'top institutions' in row_text:
            in_institutions = True
            print(f"Found institutions section in {table_key}")
            continue
        
        if in_institutions:
            # Check for type headers (Government, Private, Online)
            if len(row) > 0:
                first_cell = row[0].strip()
                if first_cell in ['Government', 'Private', 'Online']:
                    current_type = first_cell
                    institutions[current_type] = []
                    print(f"  Found type: {current_type}")
                elif current_type and first_cell and not first_cell.startswith('Career'):
                    # This is an institution
                    institutions[current_type].append(first_cell)
                    print(f"    Added: {first_cell}")
                elif first_cell.startswith('Career') or first_cell.startswith('Conventional'):
                    # End of institutions section
                    break
    
    if institutions:
        hospitality_institutions[table_key] = institutions

print("\n\n=== EXTRACTED INSTITUTIONS ===")
print(json.dumps(hospitality_institutions, indent=2))
