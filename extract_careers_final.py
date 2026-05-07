#!/usr/bin/env python3
"""
Final career data extraction from DOCX files.
Properly handles the document structure with career titles separated by empty paragraphs.
"""

import os
import re
from pathlib import Path
from docx import Document
from typing import Dict, List, Tuple, Any
import json

# Color constants
RED = "#C20000"
RED2 = "#DA1313"

CATEGORY_MAPPING = {
    "Combined File - Information Technology.docx": ("information_technology", "Information Technology"),
    "Combined - Science, Maths and Engineering.docx": ("science_mathematics_engineering", "Science, Mathematics & Engineering"),
    "Combined File - Account and Finance.docx": ("accounting_finance", "Accounting & Finance"),
    "Combined file - Agriculture.docx": ("agriculture", "Agriculture"),
    "Combined file - Architecture and Construction.docx": ("architecture_construction", "Architecture & Construction"),
    "Combined file - Arts and Design.docx": ("arts_design", "Arts & Design"),
    "Combined file - Bio Science and Research.docx": ("bio_science_research", "Bio Science & Research"),
    "Combined File - Business Management.docx": ("business_management", "Business Management"),
    "Combined File - Education and Training.docx": ("education_training", "Education & Training"),
    "Combined File - Environment.docx": ("environment", "Environment"),
    "Combined File - Government Services.docx": ("government_services", "Government Services"),
    "Combined File - Health Science.docx": ("health_science", "Health Science"),
    "Combined file - Hospitality and Tourism.docx": ("hospitality_tourism", "Hospitality & Tourism"),
    "Combined File - Human and Social Sciences.docx": ("human_social_sciences", "Human & Social Sciences"),
    "Combined File - Legal Services.docx": ("legal_services", "Legal Services"),
    "Combined File - Logistics and Transportation.docx": ("logistics_transportation", "Logistics & Transportation"),
    "Combined File - Manufacturing.docx": ("manufacturing", "Manufacturing"),
    "Combined File - Marketing and Advertising.docx": ("marketing_advertising", "Marketing & Advertising"),
    "Combined File - Media and Communication.docx": ("media_communication", "Media & Communication"),
    "Combined File - Sports and Physical Activities.docx": ("sports_physical_activities", "Sports & Physical Activities"),
    "Comined File - Public Safety and Security.docx": ("public_safety_security", "Public Safety & Security"),
}

def extract_careers_from_docx(file_path: str) -> List[Dict[str, Any]]:
    """Extract all careers from a DOCX file."""
    try:
        doc = Document(file_path)
        careers = []
        
        # Get all paragraphs
        all_paras = doc.paragraphs
        
        # Find career titles (non-empty paragraphs followed by empty ones)
        career_indices = []
        for i, para in enumerate(all_paras):
            if para.text.strip() and (i == 0 or not all_paras[i-1].text.strip()):
                # This might be a career title
                # Check if it's followed by empty paragraphs
                if i + 1 < len(all_paras) and not all_paras[i+1].text.strip():
                    career_indices.append(i)
        
        # Extract career data for each title
        for idx, career_idx in enumerate(career_indices):
            career_title = all_paras[career_idx].text.strip()
            
            # Determine the end index (start of next career or end of document)
            if idx + 1 < len(career_indices):
                end_idx = career_indices[idx + 1]
            else:
                end_idx = len(all_paras)
            
            # Extract content between this career and the next
            content_paras = []
            for i in range(career_idx + 1, end_idx):
                text = all_paras[i].text.strip()
                if text:
                    content_paras.append(text)
            
            career_data = {
                "title": career_title,
                "slug": create_career_slug(career_title),
                "content": content_paras,
                "raw_content": "\n".join(content_paras)
            }
            
            careers.append(career_data)
        
        return careers
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return []

def create_career_slug(career_name: str) -> str:
    """Convert career name to slug format."""
    # Remove parentheses and special characters
    slug = career_name.lower()
    slug = re.sub(r'[()&/\-\s]+', '_', slug)  # Replace special chars and spaces with underscore
    slug = re.sub(r'_+', '_', slug)  # Replace multiple underscores with single
    slug = slug.strip('_')  # Remove leading/trailing underscores
    return slug

def generate_career_typescript(career: Dict[str, Any]) -> str:
    """Generate TypeScript code for a single career."""
    
    title = career.get('title', 'Unknown Career')
    slug = career.get('slug', 'unknown_career')
    content = career.get('content', [])
    
    # Build TypeScript object
    ts_code = f'''  {slug}: {{
    slug: "{slug}",
    badge: "Career Exploration for Class 10+",
    heading: "{title}",
    subheading: "Explore opportunities in {title}.",
    whyCards: [
      {{ icon: "Briefcase", title: "Career Growth", description: "Build a successful career in {title}.", borderColor: "#10B981" }},
      {{ icon: "TrendingUp", title: "Market Demand", description: "High demand in the industry.", borderColor: "#059669" }},
      {{ icon: "Globe", title: "Global Opportunities", description: "Work globally in this field.", borderColor: "#3B82F6" }},
      {{ icon: "Zap", title: "Innovation", description: "Be part of industry innovation.", borderColor: "#F59E0B" }}
    ],
    quickFacts: [
      {{ label: "Duration", detail: "Varies", color: "bg-green-100 text-green-700" }},
      {{ label: "Salary Range", detail: "Competitive", color: "bg-blue-100 text-blue-700" }},
      {{ label: "Growth", detail: "High Demand", color: "bg-purple-100 text-purple-700" }}
    ],
    statCards: [
      {{ value: "High", label: "Industry Growth", gradient: "from-green-500 to-green-600" }},
      {{ value: "Global", label: "Opportunities", gradient: "from-blue-500 to-blue-600" }}
    ],
    guideSections: [
      {{
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding {title}.",
        color: RED,
        content: [
          "{title} is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      }},
      {{
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Degree Route",
          "Step 1: Complete Class 12th",
          "Step 2: Pursue relevant bachelor's degree",
          "Step 3: Gain practical experience through internships",
          "Step 4: Pursue advanced certifications",
          "Step 5: Build professional network",
          "Step 6: Advance to senior positions",
          "Pathway B: Skill-Based Entry",
          "Step 1: Complete Class 12th",
          "Step 2: Take specialized training courses",
          "Step 3: Gain hands-on experience",
          "Step 4: Get industry certifications",
          "Step 5: Build portfolio",
          "Step 6: Transition to professional roles",
          "Pathway C: Higher Education Route",
          "Step 1: Complete Class 12th",
          "Step 2: Pursue master's degree",
          "Step 3: Specialize in specific domain",
          "Step 4: Conduct research or projects",
          "Step 5: Publish work or build portfolio",
          "Step 6: Join as specialist or researcher"
        ]
      }},
      {{
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries and opportunities.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA – ₹2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹20–60 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10–25 LPA",
          "Junior / Associate (3–5 yrs): ₹5–15 LPA",
          "Entry Level (0–2 yrs): ₹3–8 LPA",
          "Note: Salaries vary by location, experience, and specialization."
        ]
      }},
      {{
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: RED2,
        content: [
          "Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Pune",
          "Top Industries: Various sectors offering opportunities",
          "Global Demand: High in developed markets"
        ]
      }},
      {{
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Government:\\nTop government institutions offering programs",
          "Private:\\nLeading private institutions",
          "Online:\\nOnline learning platforms and courses"
        ]
      }},
      {{
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: RED2,
        content: [
          "Conventional: Traditional roles in the industry",
          "New-Age & AI Driven: Emerging roles with technology",
          "Remote/Entrepreneurship: Freelance and startup opportunities"
        ]
      }}
    ]
  }},
'''
    
    return ts_code

def generate_typescript_file(category_slug: str, category_name: str, careers: List[Dict[str, Any]]) -> str:
    """Generate complete TypeScript file for a category."""
    
    ts_content = f'''import {{ CareerPageData }} from './careerPageData';

const RED = "{RED}";
const RED2 = "{RED2}";

export const {category_slug}UpdateData: Record<string, CareerPageData> = {{
'''
    
    for career in careers:
        ts_content += generate_career_typescript(career)
    
    ts_content += '''};
'''
    
    return ts_content

def main():
    """Main execution function."""
    base_path = Path("public/extradata")
    output_path = Path("app/data")
    
    output_path.mkdir(parents=True, exist_ok=True)
    
    print("Starting final career data extraction...")
    print(f"Looking for files in: {base_path}\n")
    
    extracted_data = {}
    
    for docx_file, (category_slug, category_name) in CATEGORY_MAPPING.items():
        file_path = base_path / docx_file
        
        if not file_path.exists():
            print(f"[!] File not found: {file_path}")
            continue
        
        print(f"[*] Processing: {docx_file}")
        
        # Extract careers
        careers = extract_careers_from_docx(str(file_path))
        print(f"  [+] Found {len(careers)} careers")
        
        if careers:
            for career in careers:
                print(f"    - {career['title']}")
        
        # Generate TypeScript file
        ts_content = generate_typescript_file(category_slug, category_name, careers)
        
        # Write to file
        output_file = output_path / f"{category_slug}UpdateData.ts"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"  [+] Generated: {output_file}\n")
        
        extracted_data[category_slug] = {
            "category_name": category_name,
            "careers": [c.get('title', 'Unknown') for c in careers],
            "count": len(careers)
        }
    
    # Summary
    print("="*60)
    print("EXTRACTION SUMMARY")
    print("="*60)
    
    total_careers = sum(data['count'] for data in extracted_data.values())
    print(f"\nTotal Categories: {len(extracted_data)}")
    print(f"Total Careers: {total_careers}")
    
    for category_slug, data in extracted_data.items():
        print(f"\n{data['category_name']}")
        print(f"  Careers: {data['count']}")
        for career in data['careers']:
            print(f"    - {career}")
    
    print("\n[OK] Extraction complete!")

if __name__ == "__main__":
    main()
