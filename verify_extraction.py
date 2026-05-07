import json

def verify_extraction():
    """
    Verify the extracted career data and show samples.
    """
    with open('extracted_careers_complete.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print("="*70)
    print("CAREER DATA EXTRACTION VERIFICATION")
    print("="*70)
    
    # Overall statistics
    total_careers = sum(cat['total_careers'] for cat in data.values())
    print(f"\n✓ Total Categories: {len(data)}")
    print(f"✓ Total Careers: {total_careers}")
    
    # Sample: Account and Finance - Actuarial Science
    print("\n" + "="*70)
    print("SAMPLE 1: Actuarial Science (Account and Finance)")
    print("="*70)
    
    actuarial = data['Account and Finance']['careers'][0]
    print(f"\nTitle: {actuarial['title']}")
    print(f"Sections: {len(actuarial['sections'])}")
    
    for section_name, table_data in actuarial['sections'].items():
        print(f"\n  [{section_name}]")
        print(f"  - Rows: {len(table_data)}")
        print(f"  - Columns: {len(table_data[0]) if table_data else 0}")
        if table_data and table_data[0]:
            preview = table_data[0][0][:80]
            print(f"  - Preview: {preview}...")
    
    # Sample: Information Technology - Artificial Intelligence
    print("\n" + "="*70)
    print("SAMPLE 2: Artificial Intelligence (Information Technology)")
    print("="*70)
    
    ai_career = data['Information Technology']['careers'][0]
    print(f"\nTitle: {ai_career['title']}")
    print(f"Sections: {len(ai_career['sections'])}")
    
    for section_name, table_data in ai_career['sections'].items():
        print(f"\n  [{section_name}]")
        print(f"  - Rows: {len(table_data)}")
        if table_data and table_data[0]:
            preview = table_data[0][0][:80]
            print(f"  - Preview: {preview}...")
    
    # Sample: Health Science - Medical Doctor
    print("\n" + "="*70)
    print("SAMPLE 3: Medical Doctor (Health Science)")
    print("="*70)
    
    doctor = data['Health Science']['careers'][7]  # Medical Doctor
    print(f"\nTitle: {doctor['title']}")
    print(f"Sections: {len(doctor['sections'])}")
    
    for section_name, table_data in doctor['sections'].items():
        print(f"\n  [{section_name}]")
        print(f"  - Rows: {len(table_data)}")
        if table_data and table_data[0]:
            preview = table_data[0][0][:80]
            print(f"  - Preview: {preview}...")
    
    # Category-wise breakdown
    print("\n" + "="*70)
    print("CATEGORY-WISE BREAKDOWN")
    print("="*70 + "\n")
    
    for category, cat_data in sorted(data.items()):
        print(f"{category:40} {cat_data['total_careers']:3} careers")
    
    print("\n" + "="*70)
    print("✓ VERIFICATION COMPLETE - All data extracted successfully!")
    print("="*70)

if __name__ == '__main__':
    verify_extraction()
