#!/usr/bin/env python3
"""
Script to populate institutions data for ALL careers in TypeScript files.
Uses extracted data where available, and generates reasonable defaults for others.
"""

import json
import os

# Load extracted institutions
extracted_file = "all_careers_institutions_complete.json"
if os.path.exists(extracted_file):
    with open(extracted_file, 'r', encoding='utf-8') as f:
        extracted_institutions = json.load(f)
else:
    extracted_institutions = {}

# Default institutions by category (for careers without extracted data)
DEFAULT_INSTITUTIONS = {
    "IT": {
        "government": ["Indian Institute of Technology (IIT)", "National Institute of Technology (NIT)", "IIIT Hyderabad", "IIIT Delhi"],
        "private": ["Manipal Institute of Technology", "VIT Vellore", "BITS Pilani", "Lovely Professional University"],
        "online": ["Coursera", "edX", "Udemy", "NPTEL"]
    },
    "Engineering": {
        "government": ["Indian Institute of Technology (IIT)", "National Institute of Technology (NIT)", "IIIT", "JNTU"],
        "private": ["Manipal Institute of Technology", "VIT Vellore", "BITS Pilani", "SRM Institute"],
        "online": ["Coursera", "edX", "NPTEL", "Udemy"]
    },
    "Management": {
        "government": ["Indian Institute of Management (IIM)", "Faculty of Management Studies (FMS)", "Delhi School of Economics", "XLRI"],
        "private": ["ISB Hyderabad", "Great Lakes Institute", "SP Jain", "IIMB"],
        "online": ["Coursera", "edX", "Great Learning", "Udemy"]
    },
    "Science": {
        "government": ["Indian Institute of Science (IISc)", "University of Delhi", "Jawaharlal Nehru University (JNU)", "Banaras Hindu University (BHU)"],
        "private": ["Manipal Academy", "Amity University", "SRM Institute", "VIT Vellore"],
        "online": ["NPTEL", "IGNOU", "Coursera", "edX"]
    },
    "Medical": {
        "government": ["AIIMS Delhi", "AIIMS Bangalore", "PGI Chandigarh", "CMC Vellore"],
        "private": ["Manipal Academy", "Amrita University", "Sri Ramachandra", "Kasturba Medical College"],
        "online": ["Coursera", "edX", "NPTEL", "Udemy"]
    },
    "Arts": {
        "government": ["Delhi University", "Jawaharlal Nehru University (JNU)", "University of Mumbai", "Banaras Hindu University (BHU)"],
        "private": ["Ashoka University", "FLAME University", "Symbiosis", "Christ University"],
        "online": ["Coursera", "edX", "Udemy", "Skillshare"]
    },
    "Design": {
        "government": ["National Institute of Design (NID)", "IIT Bombay IDC", "CEPT University", "IIITDM Jabalpur"],
        "private": ["Pearl Academy", "Srishti Manipal", "Arena Animation", "MAAC"],
        "online": ["Coursera", "Udemy", "Skillshare", "Domestika"]
    },
    "Business": {
        "government": ["Indian Institute of Management (IIM)", "Faculty of Management Studies (FMS)", "Delhi School of Economics", "XLRI"],
        "private": ["ISB Hyderabad", "Great Lakes Institute", "SP Jain", "IIMB"],
        "online": ["Coursera", "edX", "Great Learning", "Udemy"]
    },
    "Default": {
        "government": ["University of Delhi", "Jawaharlal Nehru University (JNU)", "Indian Institute of Science (IISc)", "Banaras Hindu University (BHU)"],
        "private": ["Manipal Academy", "Amity University", "SRM Institute", "Lovely Professional University"],
        "online": ["Coursera", "edX", "NPTEL", "Udemy"]
    }
}

def get_institutions_for_career(career_name):
    """Get institutions for a career, using extracted data or defaults."""
    
    # Check if we have extracted data
    if career_name in extracted_institutions:
        data = extracted_institutions[career_name]
        return {
            "government": data.get("government", []),
            "private": data.get("private", []),
            "online": data.get("online", [])
        }
    
    # Determine category based on career name
    career_lower = career_name.lower()
    
    if any(word in career_lower for word in ['engineer', 'developer', 'programmer', 'software', 'data', 'ai', 'ml', 'blockchain', 'iot']):
        category = "IT"
    elif any(word in career_lower for word in ['manager', 'management', 'business', 'analyst', 'consultant', 'hr', 'finance', 'accounting']):
        category = "Management"
    elif any(word in career_lower for word in ['doctor', 'nurse', 'medical', 'pharmacist', 'therapist', 'physiotherapist']):
        category = "Medical"
    elif any(word in career_lower for word in ['designer', 'architect', 'artist', 'animator', 'photographer', 'fashion']):
        category = "Design"
    elif any(word in career_lower for word in ['scientist', 'researcher', 'biologist', 'chemist', 'physicist']):
        category = "Science"
    elif any(word in career_lower for word in ['writer', 'journalist', 'teacher', 'professor', 'educator']):
        category = "Arts"
    else:
        category = "Default"
    
    return DEFAULT_INSTITUTIONS.get(category, DEFAULT_INSTITUTIONS["Default"])

def generate_typescript_content(career_name, institutions):
    """Generate TypeScript content for institutions section."""
    content_lines = []
    
    if institutions['government']:
        gov_str = "Government: " + ", ".join(institutions['government'])
        content_lines.append(f'"{gov_str}"')
    
    if institutions['private']:
        priv_str = "Private: " + ", ".join(institutions['private'])
        content_lines.append(f'"{priv_str}"')
    
    if institutions['online']:
        online_str = "Online: " + ", ".join(institutions['online'])
        content_lines.append(f'"{online_str}"')
    
    return ",\n    ".join(content_lines)

def main():
    """Main function."""
    
    print(f"Extracted institutions: {len(extracted_institutions)}")
    print(f"Default categories: {len(DEFAULT_INSTITUTIONS)}")
    print(f"\nGenerated TypeScript snippets for all careers:")
    print(f"{'='*80}\n")
    
    # Generate snippets for all extracted careers
    all_careers = list(extracted_institutions.keys())
    
    # Add some common careers that might not be in extracted data
    common_careers = [
        "Software Engineer", "Data Scientist", "Product Manager", "UX Designer",
        "Marketing Manager", "Sales Executive", "HR Manager", "Finance Analyst",
        "Accountant", "Lawyer", "Doctor", "Nurse", "Teacher", "Journalist",
        "Architect", "Civil Engineer", "Mechanical Engineer", "Electrical Engineer",
        "Entrepreneur", "Consultant", "Analyst", "Developer"
    ]
    
    for career in common_careers:
        if career not in all_careers:
            all_careers.append(career)
    
    # Generate output
    output_lines = []
    output_lines.append("// Auto-generated institutions data for all careers")
    output_lines.append("// Generated by populate_all_institutions.py\n")
    
    for career_name in sorted(all_careers):
        institutions = get_institutions_for_career(career_name)
        ts_content = generate_typescript_content(career_name, institutions)
        
        output_lines.append(f"// {career_name}")
        output_lines.append("{")
        output_lines.append('  id: "institutions",')
        output_lines.append('  title: "Where to Study?",')
        output_lines.append('  icon: "Building2",')
        output_lines.append('  description: "Top institutions across India.",')
        output_lines.append('  color: BLUE,')
        output_lines.append('  content: [')
        output_lines.append(f'    {ts_content}')
        output_lines.append('  ]')
        output_lines.append("},\n")
    
    # Save to file
    output_file = "all_careers_institutions_typescript.ts"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("\n".join(output_lines))
    
    print(f"✓ Generated TypeScript for {len(all_careers)} careers")
    print(f"✓ Saved to: {output_file}")
    print(f"\n{'='*80}")
    print(f"\nCareers with extracted data: {len(extracted_institutions)}")
    print(f"Total careers generated: {len(all_careers)}")
    print(f"\nExtracted careers:")
    for i, career in enumerate(sorted(extracted_institutions.keys()), 1):
        print(f"  {i}. {career}")

if __name__ == "__main__":
    main()
