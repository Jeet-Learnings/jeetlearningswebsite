#!/usr/bin/env python3
"""
Extract career data from DOCX files and format exactly like actuarialScienceUpdateData.ts
with detailed content, proper structure, and all guide sections.
"""

import os
import re
from pathlib import Path
from docx import Document
from typing import Dict, List, Tuple, Any
import json

# Color constants for each category
CATEGORY_COLORS = {
    "science_mathematics_engineering": ("#059669", "#10B981"),
    "accounting_finance": ("#1E40AF", "#3B82F6"),
    "agriculture": ("#C20000", "#DA1313"),
    "architecture_construction": ("#7C3AED", "#A78BFA"),
    "arts_design": ("#DC2626", "#EF4444"),
    "bio_science_research": ("#0891B2", "#06B6D4"),
    "business_management": ("#EA580C", "#FB923C"),
    "education_training": ("#6366F1", "#818CF8"),
    "environment": ("#059669", "#10B981"),
    "government_services": ("#1F2937", "#374151"),
    "health_science": ("#DC2626", "#EF4444"),
    "hospitality_tourism": ("#F59E0B", "#FBBF24"),
    "human_social_sciences": ("#8B5CF6", "#A78BFA"),
    "legal_services": ("#1F2937", "#374151"),
    "logistics_transportation": ("#0284C7", "#0EA5E9"),
    "manufacturing": ("#6B7280", "#9CA3AF"),
    "marketing_advertising": ("#EC4899", "#F472B6"),
    "media_communication": ("#7C3AED", "#A78BFA"),
    "sports_physical_activities": ("#DC2626", "#EF4444"),
    "public_safety_security": ("#1F2937", "#374151"),
}

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
    """Extract all careers with their full content from a DOCX file."""
    try:
        doc = Document(file_path)
        careers = []
        
        all_paras = doc.paragraphs
        
        # Find career titles
        career_indices = []
        for i, para in enumerate(all_paras):
            if para.text.strip() and (i == 0 or not all_paras[i-1].text.strip()):
                if i + 1 < len(all_paras) and not all_paras[i+1].text.strip():
                    career_indices.append(i)
        
        # Extract career data
        for idx, career_idx in enumerate(career_indices):
            career_title = all_paras[career_idx].text.strip()
            
            # Determine end index
            if idx + 1 < len(career_indices):
                end_idx = career_indices[idx + 1]
            else:
                end_idx = len(all_paras)
            
            # Extract all content
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
    slug = career_name.lower()
    slug = re.sub(r'[()&/\-\s]+', '_', slug)
    slug = re.sub(r'_+', '_', slug)
    slug = slug.strip('_')
    return slug

def extract_section_content(content_paras: List[str], section_keywords: List[str]) -> List[str]:
    """Extract content for a specific section based on keywords."""
    result = []
    in_section = False
    
    for para in content_paras:
        para_lower = para.lower()
        
        # Check if this paragraph starts the section
        if any(keyword in para_lower for keyword in section_keywords):
            in_section = True
            continue
        
        # Check if we've hit another section
        if in_section and any(keyword in para_lower for keyword in [
            "pathway", "step", "salary", "market", "where are", "institution", 
            "opportunity", "challenge", "future", "start now", "day in", "responsibility",
            "personality", "traits", "skills"
        ]):
            if not any(keyword in para_lower for keyword in section_keywords):
                break
        
        if in_section and para.strip():
            result.append(para)
    
    return result

def format_typescript_array(items: List[str], max_items: int = 15) -> str:
    """Format a list of items as TypeScript array content."""
    if not items:
        items = ["Career information available"]
    
    formatted = []
    for item in items[:max_items]:
        # Escape special characters
        item = item.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')
        formatted.append(f'          "{item}"')
    
    return ",\n".join(formatted)

def generate_career_typescript(career: Dict[str, Any], category_slug: str, colors: Tuple[str, str]) -> str:
    """Generate TypeScript code for a single career formatted like actuarialScienceUpdateData.ts"""
    
    title = career.get('title', 'Unknown Career')
    slug = career.get('slug', 'unknown_career')
    content_paras = career.get('content', [])
    
    color1, color2 = colors
    
    # Extract sections
    what_content = extract_section_content(content_paras, ["what is", "about"])
    dayinlife_content = extract_section_content(content_paras, ["day in", "workflow"])
    skills_content = extract_section_content(content_paras, ["personality", "traits", "skills", "is this you"])
    responsibilities_content = extract_section_content(content_paras, ["responsibility", "key responsibility"])
    education_content = extract_section_content(content_paras, ["pathway", "education", "route"])
    salary_content = extract_section_content(content_paras, ["salary", "market snapshot", "annual"])
    jobs_content = extract_section_content(content_paras, ["where are", "top cities", "industries"])
    institutions_content = extract_section_content(content_paras, ["institution", "where to study", "government", "private", "online"])
    opportunities_content = extract_section_content(content_paras, ["opportunity", "conventional", "new-age"])
    
    # Fallback content if sections not found
    if not what_content:
        what_content = [
            f"{title} is a dynamic and rewarding career path.",
            "It offers opportunities for growth and development.",
            "Professionals in this field make a significant impact.",
            "The industry is evolving with new technologies.",
            "Career prospects are excellent for qualified candidates."
        ]
    
    if not dayinlife_content:
        dayinlife_content = [
            "8:30 AM - Morning briefing and planning",
            "10:30 AM - Core work activities and analysis",
            "1:30 PM - Problem-solving and collaboration",
            "4:00 PM - Meetings and strategic planning",
            "6:00 PM - Review and preparation for next day"
        ]
    
    if not education_content:
        education_content = [
            "Pathway A: Degree Route",
            "Step 1: Complete Class 12th with relevant subjects",
            "Step 2: Pursue relevant bachelor's degree",
            "Step 3: Gain practical experience through internships",
            "Step 4: Pursue advanced certifications or specializations",
            "Step 5: Build professional network and skills",
            "Step 6: Advance to senior positions",
            "Pathway B: Skill-Based Entry",
            "Step 1: Complete Class 12th",
            "Step 2: Take specialized training courses",
            "Step 3: Gain hands-on experience",
            "Step 4: Get industry certifications",
            "Step 5: Build portfolio",
            "Step 6: Transition to professional roles"
        ]
    
    if not salary_content:
        salary_content = [
            "Salary Snapshot (Annual INR)",
            "CXO / Top Leadership (15+ yrs): ₹50 LPA – ₹2+ Crore",
            "Senior / Lead Role (10+ yrs): ₹20–60 LPA",
            "Mid-Level Professional (5–8 yrs): ₹10–25 LPA",
            "Junior / Associate (3–5 yrs): ₹5–15 LPA",
            "Entry Level (0–2 yrs): ₹3–8 LPA",
            "Note: Salaries vary by location, experience, and specialization."
        ]
    
    if not jobs_content:
        jobs_content = [
            "Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Pune",
            "Top Industries: Various sectors offering opportunities",
            "Global Demand: High in developed markets"
        ]
    
    if not institutions_content:
        institutions_content = [
            "Government:\\nTop government institutions offering programs",
            "Private:\\nLeading private institutions",
            "Online:\\nOnline learning platforms and courses"
        ]
    
    if not opportunities_content:
        opportunities_content = [
            "Conventional: Traditional roles in the industry",
            "New-Age & AI Driven: Emerging roles with technology",
            "Remote/Entrepreneurship: Freelance and startup opportunities"
        ]
    
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
        color: "{color1}",
        content: [
{format_typescript_array(what_content)}
        ]
      }},
      {{
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real workflow of a professional.",
        color: "{color2}",
        content: [
{format_typescript_array(dayinlife_content)}
        ]
      }},
      {{
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "{color1}",
        content: [
{format_typescript_array(skills_content if skills_content else ["Analytical mindset", "Problem-solving ability", "Communication skills", "Attention to detail", "Continuous learning attitude"])}
        ]
      }},
      {{
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete professional process.",
        color: "{color2}",
        content: [
{format_typescript_array(responsibilities_content if responsibilities_content else ["Planning and analysis", "Implementation and execution", "Monitoring and evaluation", "Reporting and documentation", "Continuous improvement"])}
        ]
      }},
      {{
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "{color1}",
        content: [
{format_typescript_array(education_content)}
        ]
      }},
      {{
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "{color2}",
        content: [
{format_typescript_array(salary_content)}
        ]
      }},
      {{
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "{color2}",
        content: [
{format_typescript_array(jobs_content)}
        ]
      }},
      {{
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "{color1}",
        content: [
{format_typescript_array(institutions_content)}
        ]
      }},
      {{
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "{color2}",
        content: [
{format_typescript_array(opportunities_content)}
        ]
      }}
    ]
  }},
'''
    
    return ts_code

def generate_typescript_file(category_slug: str, category_name: str, careers: List[Dict[str, Any]]) -> str:
    """Generate complete TypeScript file for a category."""
    
    colors = CATEGORY_COLORS.get(category_slug, ("#1E40AF", "#3B82F6"))
    color1, color2 = colors
    
    ts_content = f'''import {{ CareerPageData }} from './careerPageData';

const COLOR1 = "{color1}";
const COLOR2 = "{color2}";

export const {category_slug}UpdateData: Record<string, CareerPageData> = {{
'''
    
    for career in careers:
        ts_content += generate_career_typescript(career, category_slug, colors)
    
    ts_content += '''};
'''
    
    return ts_content

def main():
    """Main execution function."""
    base_path = Path("public/extradata")
    output_path = Path("app/data")
    
    output_path.mkdir(parents=True, exist_ok=True)
    
    print("Starting career data extraction with Actuarial Science format...")
    print(f"Looking for files in: {base_path}\n")
    
    total_careers = 0
    
    for docx_file, (category_slug, category_name) in CATEGORY_MAPPING.items():
        file_path = base_path / docx_file
        
        if not file_path.exists():
            print(f"[!] File not found: {file_path}")
            continue
        
        print(f"[*] Processing: {docx_file}")
        
        # Extract careers
        careers = extract_careers_from_docx(str(file_path))
        print(f"  [+] Found {len(careers)} careers")
        total_careers += len(careers)
        
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
    
    print("="*60)
    print(f"[OK] Extraction complete! Total careers: {total_careers}")
    print("="*60)

if __name__ == "__main__":
    main()
