#!/usr/bin/env python3
"""
Comprehensive script to extract ALL institutions data from DOCX files.
Handles multiple careers per document and extracts complete institution information.
"""

import os
import re
import json
from pathlib import Path
from docx import Document

DOCX_DIR = "public/extradata"
OUTPUT_FILE = "all_careers_institutions.json"

def extract_all_careers_from_docx(docx_path):
    """
    Extract all careers and their institutions from a DOCX file.
    Returns a dictionary with career names as keys and institutions data as values.
    """
    try:
        doc = Document(docx_path)
        careers_dict = {}
        
        # Process all tables
        for table_idx, table in enumerate(doc.tables):
            # First row usually contains career name
            if len(table.rows) > 0:
                first_cell_text = table.rows[0].cells[0].text.strip()
                
                # Extract career name (first line before newline)
                lines = first_cell_text.split('\n')
                career_name = lines[0].strip() if lines else None
                
                if not career_name or career_name.startswith('Pathway') or career_name.startswith('Market'):
                    continue
                
                # Look for institutions data in all cells of this table
                institutions_data = {
                    "government": [],
                    "private": [],
                    "online": []
                }
                
                found_institutions = False
                
                for row in table.rows:
                    for cell in row.cells:
                        cell_text = cell.text.strip()
                        
                        # Check if this cell contains institutions data
                        if 'Where to Study?' in cell_text or 'Top Institutions' in cell_text:
                            found_institutions = True
                            
                            # Parse the institutions content
                            current_category = None
                            
                            for line in cell_text.split('\n'):
                                line = line.strip()
                                if not line:
                                    continue
                                
                                # Detect category headers
                                if line.lower().startswith('government:'):
                                    current_category = 'government'
                                    content = re.sub(r'^government:\s*', '', line, flags=re.IGNORECASE).strip()
                                    if content:
                                        # Split by comma and clean up
                                        institutions = [inst.strip() for inst in content.split(',')]
                                        institutions_data['government'].extend(institutions)
                                
                                elif line.lower().startswith('private:'):
                                    current_category = 'private'
                                    content = re.sub(r'^private:\s*', '', line, flags=re.IGNORECASE).strip()
                                    if content:
                                        institutions = [inst.strip() for inst in content.split(',')]
                                        institutions_data['private'].extend(institutions)
                                
                                elif line.lower().startswith('online:'):
                                    current_category = 'online'
                                    content = re.sub(r'^online:\s*', '', line, flags=re.IGNORECASE).strip()
                                    if content:
                                        institutions = [inst.strip() for inst in content.split(',')]
                                        institutions_data['online'].extend(institutions)
                                
                                elif current_category and line and not line.startswith('Where') and not line.startswith('Top'):
                                    # Add to current category if it's not a header
                                    if not any(line.lower().startswith(cat + ':') for cat in ['government', 'private', 'online']):
                                        institutions_data[current_category].append(line)
                
                if found_institutions and career_name:
                    careers_dict[career_name] = institutions_data
        
        return careers_dict
        
    except Exception as e:
        print(f"Error processing {docx_path}: {str(e)}")
        import traceback
        traceback.print_exc()
        return {}

def main():
    """Main function to process all DOCX files."""
    
    if not os.path.exists(DOCX_DIR):
        print(f"Error: Directory {DOCX_DIR} not found!")
        return
    
    # Get all original DOCX files (not the _updated ones)
    docx_files = sorted([f for f in os.listdir(DOCX_DIR) 
                        if f.endswith('.docx') and not f.endswith('_updated.docx')])
    
    if not docx_files:
        print(f"No DOCX files found in {DOCX_DIR}")
        return
    
    print(f"Found {len(docx_files)} DOCX files to process\n")
    
    all_careers = {}
    total_careers = 0
    
    for docx_file in docx_files:
        input_path = os.path.join(DOCX_DIR, docx_file)
        
        print(f"Processing: {docx_file}")
        careers_data = extract_all_careers_from_docx(input_path)
        
        if careers_data:
            print(f"  ✓ Extracted {len(careers_data)} careers")
            all_careers.update(careers_data)
            total_careers += len(careers_data)
            
            # Print sample
            for career_name, institutions in list(careers_data.items())[:2]:
                print(f"    - {career_name}")
                if institutions['government']:
                    print(f"      Government: {len(institutions['government'])} institutions")
                if institutions['private']:
                    print(f"      Private: {len(institutions['private'])} institutions")
                if institutions['online']:
                    print(f"      Online: {len(institutions['online'])} institutions")
        else:
            print(f"  (No institutions data found)")
    
    # Save all careers to JSON
    output_path = OUTPUT_FILE
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(all_careers, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"Total careers extracted: {total_careers}")
    print(f"Output saved to: {output_path}")
    print(f"{'='*60}")
    
    # Print summary
    print(f"\nCareers extracted:")
    for i, career_name in enumerate(sorted(all_careers.keys()), 1):
        institutions = all_careers[career_name]
        gov_count = len(institutions.get('government', []))
        priv_count = len(institutions.get('private', []))
        online_count = len(institutions.get('online', []))
        print(f"{i:2d}. {career_name:40s} | Gov: {gov_count:2d} | Priv: {priv_count:2d} | Online: {online_count:2d}")

if __name__ == "__main__":
    main()
