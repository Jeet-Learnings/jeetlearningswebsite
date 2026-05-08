import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";

export const public_safety_securityUpdateData: Record<string, CareerPageData> = {
  disaster_management: {
    slug: "disaster_management",
    badge: "Career Exploration for Class 10+",
    heading: "Disaster Management",
    subheading: "Explore opportunities in Disaster Management.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Disaster Management.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Market Demand", description: "High demand in the industry.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Work globally in this field.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Innovation", description: "Be part of industry innovation.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Varies", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "Competitive", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "High", label: "Industry Growth", gradient: "from-green-500 to-green-600" },
      { value: "Global", label: "Opportunities", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding Disaster Management.",
        color: RED,
        content: [
          "Disaster Management is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Government:\nTop government institutions offering programs",
          "Private:\nLeading private institutions",
          "Online:\nOnline learning platforms and courses"
        ]
      },
      {
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
      }
    ]
  },
};
