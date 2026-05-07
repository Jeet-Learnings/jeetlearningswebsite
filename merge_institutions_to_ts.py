#!/usr/bin/env python3
"""
Script to merge extracted institutions data into TypeScript career data files.
"""

import json
import os
import re

# Load the extracted institutions data
with open('extracted_institutions/institutions_summary.json', 'r', encoding='utf-8') as f:
    institutions_data = json.load(f)

print("Extracted Institutions Data Summary:")
print("="*60)

for category, careers in institutions_data.items():
    print(f"\n{category}:")
    for career_name, institutions in careers.items():
        print(f"  {career_name}:")
        if 'government' in institutions:
            print(f"    Government: {len(institutions['government'])} institutions")
        if 'private' in institutions:
            print(f"    Private: {len(institutions['private'])} institutions")
        if 'online' in institutions:
            print(f"    Online: {len(institutions['online'])} institutions")

print("\n" + "="*60)
print("\nTo use this data, you need to:")
print("1. Find the corresponding career in the TypeScript files")
print("2. Update the 'institutions' section with the extracted data")
print("\nExample format:")
print("""
{
  id: "institutions",
  title: "Where to Study?",
  icon: "Building2",
  description: "Top institutions across India.",
  color: RED,
  content: [
    "Government: Institution1, Institution2, Institution3",
    "Private: Institution1, Institution2, Institution3",
    "Online: Institution1, Institution2, Institution3"
  ]
}
""")

print("\nExtracted data is available in: extracted_institutions/institutions_summary.json")
