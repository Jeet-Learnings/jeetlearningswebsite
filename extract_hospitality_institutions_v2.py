from docx import Document
import json
import re

# Load the hospitality DOCX file
doc = Document('public/extradata/Combined file - Hospitality and Tourism.docx')

# Map of table numbers to career names
career_map = {
    3: "airhostess",
    6: "culinary_arts",
    9: "event_planner",
    12: "hotel_management",
    15: "travel_and_tourism",
    18: "wedding_planner"
}

hospitality_institutions = {}

for table_idx, table in enumerate(doc.tables):
    table_num = table_idx + 1
    
    if table_num not in career_map:
        continue
    
    career_name = career_map[table_num]
    print(f"\n=== Processing Table {table_num} ({career_name}) ===")
    
    # Get all text from the table
    full_text = ""
    for row in table.rows:
        for cell in row.cells:
            full_text += cell.text + "\n"
    
    # Find the institutions section
    institutions_match = re.search(r'Top Institutions\s*\n(.*?)(?=Career Opportunities|$)', full_text, re.DOTALL | re.IGNORECASE)
    
    if institutions_match:
        institutions_text = institutions_match.group(1)
        print(f"Found institutions section")
        
        # Parse Government, Private, Online sections
        institutions = {}
        
        # Split by type
        gov_match = re.search(r'Government\s*\n(.*?)(?=Private|$)', institutions_text, re.DOTALL | re.IGNORECASE)
        private_match = re.search(r'Private\s*\n(.*?)(?=Online|$)', institutions_text, re.DOTALL | re.IGNORECASE)
        online_match = re.search(r'Online\s*\n(.*?)$', institutions_text, re.DOTALL | re.IGNORECASE)
        
        if gov_match:
            gov_text = gov_match.group(1).strip()
            gov_insts = [line.strip() for line in gov_text.split('\n') if line.strip()]
            institutions['Government'] = gov_insts
            print(f"  Government: {len(gov_insts)} institutions")
        
        if private_match:
            private_text = private_match.group(1).strip()
            private_insts = [line.strip() for line in private_text.split('\n') if line.strip()]
            institutions['Private'] = private_insts
            print(f"  Private: {len(private_insts)} institutions")
        
        if online_match:
            online_text = online_match.group(1).strip()
            online_insts = [line.strip() for line in online_text.split('\n') if line.strip()]
            institutions['Online'] = online_insts
            print(f"  Online: {len(online_insts)} institutions")
        
        hospitality_institutions[career_name] = institutions
        
        # Print details
        for inst_type, insts in institutions.items():
            print(f"\n  {inst_type}:")
            for inst in insts:
                print(f"    - {inst}")

print("\n\n=== FINAL EXTRACTED DATA ===")
print(json.dumps(hospitality_institutions, indent=2))

# Save to file
with open('hospitality_institutions_extracted.json', 'w') as f:
    json.dump(hospitality_institutions, f, indent=2)
print("\nSaved to hospitality_institutions_extracted.json")
