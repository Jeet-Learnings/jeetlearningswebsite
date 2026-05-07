#!/usr/bin/env python3
"""
Script to extract "Where to Study?" institution data from DOCX files and generate TypeScript code.
"""

import os
import re
import json
from pathlib import Path
from docx import Document

DOCX_DIR = "public/extradata"
OUTPUT_DIR = "extracted_institutions"

def extract_career_name_from_table(table):
    """Extract career name from the first row of a table."""
    if len(table.rows) > 0:
        first_cell = table.rows[0].cells[0]
        text = first_cell.text.strip()
        # Extract just the career name (before any newline)
        career_name = text.split('\n')[0].strip()
        return career_name
    return None

def extract_institutions_from_table(table):
    """Extract institutions content from a table."""
    institutions_data = {
        "government": [],
        "private": [],
        "online": []
    }
    
    # Look for "Where to Study?" or "Top Institutions" in the table
    for row in table.rows:
        for cell in row.cells:
            cell_text = cell.text.strip()
            
            if 'Where to Study?' in cell_text or 'Top Institutions' in cell_text:
                # Extract the institutions content
                lines = cell_text.split('\n')
                current_category = None
                
                for line in lines:
                    line = line.strip()
                    if not line:
                        continue
                    
                    # Check for category headers
                    if line.lower().startswith('government:'):
                        current_category = 'government'
                        # Extract institutions from this line
                        content = line.replace('Government:', '').replace('government:', '').strip()
                        if content:
                            institutions_data['government'].append(content)
                    elif line.lower().startswith('private:'):
                        current_category = 'private'
                        content = line.replace('Private:', '').replace('private:', '').strip()
                        if content:
                            institutions_data['private'].append(content)
                    elif line.lower().startswith('online:'):
                        current_category = 'online'
                        content = line.replace('Online:', '').replace('online:', '').strip()
                        if content:
                            institutions_data['online'].append(content)
                    elif current_category and line and not line.startswith('Where') and not line.startswith('Top'):
                        # Add to current category
                        institutions_data[current_category].append(line)
    
    return institutions_data

def process_docx_file(docx_path):
    """Process a DOCX file and extract all institutions data."""
    try:
        doc = Document(docx_path)
        careers_data = {}
        
        # Process tables (each table typically contains one career)
        for table_idx, table in enumerate(doc.tables):
            career_name = extract_career_name_from_table(table)
            if career_name:
                institutions = extract_institutions_from_table(table)
                if any(institutions.values()):  # Only add if we found institutions
                    careers_data[career_name] = institutions
        
        return careers_data
        
    except Exception as e:
        print(f"Error processing {docx_path}: {str(e)}")
        return {}

def generate_typescript_code(careers_data, category_name):
    """Generate TypeScript code for the extracted institutions."""
    ts_code = f"// Extracted institutions for {category_name}\n"
    ts_code += f"// Auto-generated from DOCX files\n\n"
    
    ts_code += f"export const {category_name.lower().replace(' ', '_')}Institutions = {{\n"
    
    for career, institutions in careers_data.items():
        # Convert career name to camelCase slug
        career_slug = career.lower().replace(' ', '_').replace('&', 'and').replace('(', '').replace(')', '')
        
        ts_code += f"  {career_slug}: {{\n"
        
        if institutions['government']:
            gov_text = ', '.join(institutions['government'])
            ts_code += f"    government: \"{gov_text}\",\n"
        
        if institutions['private']:
            priv_text = ', '.join(institutions['private'])
            ts_code += f"    private: \"{priv_text}\",\n"
        
        if institutions['online']:
            online_text = ', '.join(institutions['online'])
            ts_code += f"    online: \"{online_text}\",\n"
        
        ts_code += f"  }},\n"
    
    ts_code += f"}};\n"
    
    return ts_code

def main():
    """Main function."""
    
    if not os.path.exists(DOCX_DIR):
        print(f"Error: Directory {DOCX_DIR} not found!")
        return
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Get all DOCX files
    docx_files = sorted([f for f in os.listdir(DOCX_DIR) if f.endswith('_updated.docx')])
    
    if not docx_files:
        print(f"No updated DOCX files found in {DOCX_DIR}")
        print("Please run extract_and_replace_institutions.py first")
        return
    
    print(f"Found {len(docx_files)} updated DOCX files to process\n")
    
    all_careers = {}
    
    for docx_file in docx_files:
        input_path = os.path.join(DOCX_DIR, docx_file)
        
        # Extract category name from filename
        category_name = docx_file.replace('_updated.docx', '').replace('Combined', '').replace('Combine', '').strip()
        
        print(f"Processing: {docx_file}")
        careers_data = process_docx_file(input_path)
        
        if careers_data:
            print(f"  ✓ Extracted {len(careers_data)} careers")
            all_careers[category_name] = careers_data
            
            # Generate TypeScript file for this category
            ts_code = generate_typescript_code(careers_data, category_name)
            output_file = os.path.join(OUTPUT_DIR, f"{category_name.lower().replace(' ', '_')}_institutions.ts")
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(ts_code)
            
            print(f"  ✓ Saved to: {output_file}")
        else:
            print(f"  (No institutions data found)")
    
    # Generate summary JSON
    summary_file = os.path.join(OUTPUT_DIR, "institutions_summary.json")
    with open(summary_file, 'w', encoding='utf-8') as f:
        json.dump(all_careers, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*60}")
    print(f"Extraction complete!")
    print(f"Output files saved in: {OUTPUT_DIR}")
    print(f"Summary: {summary_file}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
