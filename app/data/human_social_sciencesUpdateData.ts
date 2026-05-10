import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const human_social_sciencesUpdateData: Record<string, CareerPageData> = {
  anthropologist: {
    slug: "anthropologist",
    badge: "Career Exploration for Class 10+",
    heading: "Anthropologist",
    subheading: "Explore opportunities in Anthropologist.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Anthropologist.", borderColor: "#10B981" },
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
        description: "Understanding Anthropologist.",
        color: RED,
        content: [
          "Anthropologist is a dynamic and rewarding career path.",
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
  political_science: {
    slug: "political_science",
    badge: "The Architect of Governance for Class 10+",
    heading: "Political Science",
    subheading: "Understand power, policy, and governance. Shape societies through research, policy-making, and public service. Join the growing field of political analysis and governance.",
    whyCards: [
      { icon: "Globe", title: "Shape Society", description: "Influence policy decisions that affect millions. Work on governance, democracy, and social change.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Growing Demand", description: "Think tanks, NGOs, and governments increasingly need policy experts and political analysts.", borderColor: "#059669" },
      { icon: "Briefcase", title: "Diverse Careers", description: "Civil services, academia, consulting, media, international organizations, and more.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Intellectual Impact", description: "Contribute to research, policy papers, and governance frameworks that shape nations.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years B.A. / 2 Years M.A.", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Path", detail: "CUET, State Exams, Merit Admission", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3L–₹50L+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "High Growth", label: "Policy & Governance Sector", gradient: "from-blue-500 to-blue-600" },
      { value: "Global", label: "Career Opportunities", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA – ₹2.0 Crore",
          "Senior / Lead Role (10+ yrs): ₹20 – ₹45 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10 – ₹18 LPA",
          "Junior / Associate (3–5 yrs): ₹6 – ₹9 LPA",
          "Entry Level (0–2 yrs): ₹3 – ₹5 LPA",
          "Note: Metros pay 30% more; UGC-NET/PhD boosts academic pay scales.",
          "Where Are the Jobs?",
          "Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Pune, Kolkata.",
          "Top Industries: Think Tanks, NGOs, Political Consulting, Media, Corporate CSR.",
          "Global Demand: USA, UK, UAE; Rising remote policy research roles."
        ]
      },
      {
        id: "institutions",
        title: "Top Institutions",
        icon: "Building2",
        description: "Where to pursue political science education.",
        color: BLUE,
        content: [
          "Government: Jawaharlal Nehru University (JNU) New Delhi; University of Delhi (DU) New Delhi; Banaras Hindu University (BHU) Varanasi; University of Hyderabad Hyderabad",
          "Private: Christ University Bengaluru; Symbiosis School of Liberal Arts Pune; Ashoka University Sonipat; Jindal School of Government & Public Policy Sonipat",
          "Online: IGNOU (Indira Gandhi National Open University); Coursera – Introduction to Political Science (various universities); edX – Political Science & Government Courses; Swayam – NPTEL Political Science Courses"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in political science careers.",
        color: BLUE2,
        content: [
          "Conventional: Political Science Professor, Civil Services Officer, Policy Research Associate, Legislative Assistant",
          "New-age and AI driven: Public Policy Analyst, Political Data Analyst, Government Affairs Specialist, Geopolitical Risk Analyst",
          "Remote/Entrepreneurship: Political Consultant, Public Affairs Consultant, Policy Content Creator, Independent Research Consultant"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and education costs.",
        color: BLUE2,
        content: [
          "BA/BA (Hons) in Political Science: Government ₹10,000-50,000/year, Private ₹50,000-2,00,000/year (3 years).",
          "MA in Political Science: Government ₹15,000-60,000/year, Private ₹80,000-3,00,000/year (2 years).",
          "PG Diploma in Public Policy: ₹1,00,000-3,00,000 (1-2 years).",
          "PhD in Political Science: Fellowships available (UGC/JRF), or ₹1,00,000-3,00,000 total (3-5 years).",
          "Additional Costs: Living/Hostel (₹6,000-15,000/month), Research Materials (₹10,000-30,000), Fieldwork Travel (₹20,000-50,000)."
        ]
      }
    ]
  }
};
