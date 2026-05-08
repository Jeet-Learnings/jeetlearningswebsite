import json

# Read the extracted data
with open('science_eng_data.json', 'r') as f:
    data = json.load(f)

# Create TypeScript file content
ts_content = '''import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const science_mathematics_engineeringUpdateData: Record<string, CareerPageData> = {
'''

# Add each career with basic template
careers_list = [
    ('astronomy', 'Explore the Universe', 'Astronomy', 'Study the cosmos and unlock the mysteries of space.'),
    ('biomedical_engineering', 'Bridge Engineering & Medicine', 'Biomedical Engineering', 'Design life-saving medical devices.'),
    ('chemical_engineering', 'Transform Matter', 'Chemical Engineering', 'Design processes that transform raw materials.'),
    ('engineering_and_technology', 'Build the Future', 'Engineering & Technology', 'Design, build, and innovate.'),
    ('mathematician', 'Master Numbers & Logic', 'Mathematician', 'Solve complex problems using pure logic.'),
    ('mechatronics', 'Merge Mechanics & Electronics', 'Mechatronics', 'Design intelligent machines.'),
    ('nanotechnology', 'Explore the Nano World', 'Nanotechnology', 'Design at the atomic scale.'),
    ('robotics', 'Build Intelligent Machines', 'Robotics', 'Design robots that work, learn, and adapt.'),
    ('statistician', 'Master Data & Probability', 'Statistician', 'Unlock insights from data.'),
]

for idx, (slug, badge_text, heading, subheading) in enumerate(careers_list):
    is_last = idx == len(careers_list) - 1
    comma = "" if is_last else ","
    
    ts_content += f'''
  {slug}: {{
    slug: "{slug}",
    badge: "{badge_text} for Class 10+",
    heading: "{heading}",
    subheading: "{subheading}",
    whyCards: [
      {{ icon: "Briefcase", title: "Career Growth", description: "Build a successful career in {heading}.", borderColor: "#10B981" }},
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
        description: "Understanding {heading}.",
        color: BLUE,
        content: [
          "{heading} is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      }},
      {{
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Meet a professional in {heading}",
        color: BLUE2,
        content: [
          "Morning: Start your day with planning and reviewing tasks.",
          "Mid-morning: Engage in core work activities.",
          "Lunch: Break and networking with colleagues.",
          "Afternoon: Continue with project work and collaboration.",
          "Late afternoon: Administrative tasks and planning.",
          "Evening: Personal time and relaxation."
        ]
      }},
      {{
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: Degree Route",
          "Step 1: Complete Class 12th with Science/relevant stream.",
          "Step 2: Pursue relevant bachelor's degree.",
          "Step 3: Gain practical experience through internships.",
          "Step 4: Pursue advanced certifications.",
          "Step 5: Build professional network.",
          "Step 6: Advance to senior positions.",
          "",
          "Pathway B: Skill-Based Entry",
          "Step 1: Complete Class 12th.",
          "Step 2: Take specialized training courses.",
          "Step 3: Gain hands-on experience.",
          "Step 4: Get industry certifications.",
          "Step 5: Build portfolio.",
          "Step 6: Transition to professional roles.",
          "",
          "Pathway C: Higher Education Route",
          "Step 1: Complete Class 12th.",
          "Step 2: Pursue master's degree.",
          "Step 3: Specialize in specific domain.",
          "Step 4: Conduct research or projects.",
          "Step 5: Publish work or build portfolio.",
          "Step 6: Join as specialist or researcher"
        ]
      }},
      {{
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries and opportunities.",
        color: BLUE2,
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
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: Top government institutions offering programs",
          "Private: Leading private institutions",
          "Online: Online learning platforms and courses"
        ]
      }},
      {{
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: BLUE2,
        content: [
          "Conventional: Traditional roles in the industry",
          "New-Age & AI Driven: Emerging roles with technology",
          "Remote/Entrepreneurship: Freelance and startup opportunities"
        ]
      }}
    ]
  }}{comma}
'''

ts_content += '\n};\n'

# Write to file
with open('app/data/science_mathematics_engineeringUpdateData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print('✓ Created complete science_mathematics_engineeringUpdateData.ts with all 9 careers')
print('✓ File properly closed with };')
