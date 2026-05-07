import { CareerPageData } from './careerPageData';

const COLOR1 = "#1F2937";
const COLOR2 = "#374151";

export const government_servicesUpdateData: Record<string, CareerPageData> = {
  civil_administrative_services: {
    slug: "civil_administrative_services",
    badge: "Career Exploration for Class 10+",
    heading: "Civil Administrative Services",
    subheading: "Explore opportunities in Civil Administrative Services.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Civil Administrative Services.", borderColor: "#10B981" },
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
        description: "Understanding Civil Administrative Services.",
        color: "#1F2937",
        content: [
          "Civil Administrative Services is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Administrator",
        icon: "Clock",
        description: "Real workflow of a civil administrative professional.",
        color: "#374151",
        content: [
          "6:00 AM | Early Morning Briefing | Meet with district officials to review overnight reports and urgent matters",
          "8:00 AM | Review Reports | Analyze overnight reports and prioritize urgent administrative matters",
          "9:30 AM | Public Grievance Hearing | Conduct Janata Darbar - listen to public complaints and resolve issues",
          "12:00 PM | Coordination Meeting | Meet with police, revenue, and health departments for inter-departmental coordination",
          "1:30 PM | Lunch Break | Informal consultations with colleagues and stakeholders",
          "3:00 PM | Field Visit | Visit development projects or affected areas to assess ground reality",
          "5:00 PM | Administrative Decisions | Make policy decisions and implement administrative directives",
          "6:30 PM | Evening Review | Review day's work and plan for next day's priorities",
          "7:30 PM | Head Home | Reflect on impact made on thousands of lives today"
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1F2937",
        content: [
          "Analytical mindset",
          "Problem-solving ability",
          "Communication skills",
          "Attention to detail",
          "Continuous learning attitude"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete professional process.",
        color: "#374151",
        content: [
          "Planning and analysis",
          "Implementation and execution",
          "Monitoring and evaluation",
          "Reporting and documentation",
          "Continuous improvement"
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1F2937",
        content: [
          "Pathway A: UPSC Route (IAS/IPS/IFS)",
          "Step 1: Score well in Class 10th & 12th",
          "Step 2: Graduate in any stream (BA/BSc/BCom)",
          "Step 3: Study NCERT, current affairs, optional subject",
          "Step 4: Appear in UPSC Civil Services Exam (Prelims)",
          "Step 5: Clear Mains + Interview (Personality Test)",
          "Step 6: Join IAS/IPS/IFS after training at LBSNAA",
          "Pathway B: State PSC Route (SDM/BDO/Tehsildar)",
          "Step 1: Score well in Class 10th & 12th",
          "Step 2: Complete graduation in any subject",
          "Step 3: Apply for State Public Service Commission exam",
          "Step 4: Clear Prelims and Mains exams",
          "Step 5: Qualify State PSC Interview round",
          "Step 6: Join as SDM/Tehsildar/BDO in state government",
          "Pathway C: Lateral Entry Route (Specialist Officer)",
          "Step 1: Score well in Class 10th & 12th",
          "Step 2: Graduate in Economics/Engineering/Law/Management",
          "Step 3: Gain 5–10 years of professional experience",
          "Step 4: Watch for UPSC/DoPT lateral entry notifications",
          "Step 5: Apply and clear selection/interview process",
          "Step 6: Join as Joint Secretary/Director in Central Government"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#374151",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹30 LPA – ₹45 LPA",
          "Senior / Lead Role (10+ yrs): ₹18 – ₹30 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 – ₹18 LPA",
          "Junior / Associate (3–5 yrs): ₹9 – ₹12 LPA",
          "Entry Level (0–2 yrs): ₹7 – ₹9 LPA",
          "Salary Variation Note: Fixed government payscales. High perks in metros; housing provided.",
          "Where Are the Jobs?",
          "Top Cities: Delhi, Mumbai, Bengaluru, Hyderabad, Lucknow",
          "Top Industries: Public Policy, Governance, Administration, Law Enforcement",
          "Global Demand: UN roles, World Bank, Foreign Service assignments"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#374151",
        content: [
          "Top Cities: Delhi, Mumbai, Bengaluru, Hyderabad, Lucknow",
          "Top Industries: Public Policy, Governance, Administration, Law Enforcement",
          "Global Demand: UN roles, World Bank, Foreign Service assignments"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#1F2937",
        content: [
          "Government: Lal Bahadur Shastri National Academy of Administration (LBSNAA), Mussoorie, Indian Institute of Public Administration (IIPA), Delhi, National Academy of Direct Taxes (NADT), Pune, National Academy of Customs, Excise & Narcotics (NACEN), Faridabad",
          "Private: Chanakya IAS Academy, Delhi, Vajiram & Ravi, Delhi, The Hindu Academy, Chennai, Insights IAS, Hyderabad",
          "Online: UPSC Official Website (Study Materials), Unacademy (UPSC Preparation), Byju's (UPSC Courses), Testbook (Mock Tests & Preparation)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#374151",
        content: [
          "Conventional: IAS Officer, IPS Officer, IFS Officer, State Civil Services Officer",
          "New-Age & AI Driven: Digital Governance Specialist, Public Policy Data Analyst, Smart City Mission Officer, Cyber Governance Officer",
          "Remote/Entrepreneurship: UPSC Mentor / Coach, Governance Consultant, Policy Research Entrepreneur, E-Governance Startup Founder"
        ]
      }
    ]
  },
  indian_economic_service_ies: {
    slug: "indian_economic_service_ies",
    badge: "Career Exploration for Class 10+",
    heading: "Indian Economic Service (IES)",
    subheading: "Explore opportunities in Indian Economic Service (IES).",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Indian Economic Service (IES).", borderColor: "#10B981" },
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
        description: "Understanding Indian Economic Service (IES).",
        color: "#1F2937",
        content: [
          "Indian Economic Service (IES) is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Economic Strategist",
        icon: "Clock",
        description: "Real workflow of an IES professional.",
        color: "#374151",
        content: [
          "8:00 AM | Economic Data Review | Review overnight economic indicators and market data from global markets",
          "9:30 AM | Policy Impact Analysis | Analyze how policies affect inflation, GDP, and employment rates",
          "11:00 AM | Ministry Meeting | Meet with senior ministry officials on budget allocation and fiscal planning",
          "1:00 PM | Think Tank Lunch | Discuss economic trends with researchers from leading think tanks",
          "2:30 PM | Policy Briefing | Prepare economic briefing for senior government officials and ministers",
          "4:00 PM | RBI Coordination | Coordinate with Reserve Bank of India and other financial institutions",
          "5:30 PM | Policy Recommendations | Draft policy recommendations based on comprehensive data analysis",
          "6:30 PM | Report Review | Review quarterly economic reports and forecasts for accuracy",
          "7:30 PM | Head Home | Reflect on how your analysis shapes national economic policy"
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1F2937",
        content: [
          "Strong analytical and quantitative skills",
          "Deep understanding of economics and statistics",
          "Policy research and writing ability",
          "Data interpretation and forecasting",
          "Strategic thinking and problem-solving"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete professional process.",
        color: "#374151",
        content: [
          "Economic analysis and research",
          "Policy formulation and implementation",
          "Data collection and statistical analysis",
          "Report writing and presentation",
          "Stakeholder coordination and consultation"
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1F2937",
        content: [
          "Pathway A: Economics Graduate Route",
          "Step 1: Score well in Class 10th & 12th (Commerce/Arts)",
          "Step 2: Complete BA/BSc (Honours) in Economics",
          "Step 3: Pursue MA/MSc in Economics (mandatory)",
          "Step 4: Study statistics, econometrics, and current affairs",
          "Step 5: Appear in UPSC IES Exam (Prelims + Mains)",
          "Step 6: Join as Assistant Economic Adviser in Government",
          "Pathway B: Research/Academic Route",
          "Step 1: Score well in Class 10th & 12th (any stream)",
          "Step 2: Graduate in Economics/Mathematics/Statistics",
          "Step 3: Complete MA Economics + research internships",
          "Step 4: Pursue MPhil/PhD or work in think tanks/RBI",
          "Step 5: Appear in UPSC IES Exam after eligibility",
          "Step 6: Join as policy analyst/Economic Adviser",
          "Pathway C: Statistics & Data Route",
          "Step 1: Score well in Class 10th & 12th (Mathematics)",
          "Step 2: Graduate in Statistics/Mathematics/Economics",
          "Step 3: Complete postgraduate degree in Economics",
          "Step 4: Learn data tools: Excel, STATA, R, Python",
          "Step 5: Clear UPSC IES Exam with quantitative strength",
          "Step 6: Work as Economic Officer in Planning/Finance Ministry"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#374151",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹42 LPA – ₹55 LPA",
          "Senior / Lead Role (10+ yrs): ₹28 LPA – ₹40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹18 LPA – ₹26 LPA",
          "Junior / Associate (3–5 yrs): ₹13 LPA – ₹18 LPA",
          "Entry Level (0–2 yrs): ₹10 LPA – ₹12 LPA",
          "Salary Variation Note: Standardized government pay scales. Metropolitan postings offer higher HRA.",
          "Where Are the Jobs?",
          "Top Cities: Delhi, Mumbai, Kolkata, Bengaluru, Chennai",
          "Top Industries: Ministry of Finance, NITI Aayog, Commerce, Agriculture",
          "Global Demand: Deputations to IMF, World Bank, and WTO"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#374151",
        content: [
          "Top Cities: Delhi, Mumbai, Kolkata, Bengaluru, Chennai",
          "Top Industries: Ministry of Finance, NITI Aayog, Commerce, Agriculture",
          "Global Demand: Deputations to IMF, World Bank, and WTO"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#1F2937",
        content: [
          "Government: Delhi School of Economics (DSE), University of Delhi, Jawaharlal Nehru University (JNU), New Delhi, Jamia Millia Islamia, New Delhi, Dr. Ambedkar Studies Centre (UGC funded), Pan-India",
          "Private: Vajiram & Ravi (Economics Optional), New Delhi, Plutus IAS, New Delhi, Shri Ram IAS, New Delhi, Career Power Institute, New Delhi",
          "Online: Unacademy IES (Economics), Drishti IAS Online (Economics), Edutap Online Coaching, PW (Physics Wallah) IES Program"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#374151",
        content: [
          "Conventional: Indian Economic Service Officer, Economic Advisor, Ministry Economist, Planning / Policy Officer",
          "New-Age & AI Driven: Economic Data Analyst, Public Finance Modelling Specialist, Policy Analytics Officer, AI-based Economic Research Specialist",
          "Remote/Entrepreneurship: Economics Mentor / Coach, Policy Research Consultant, Economic Content Creator, Development Research Entrepreneur"
        ]
      }
    ]
  },
  staff_selection_commission_ssc: {
    slug: "staff_selection_commission_ssc",
    badge: "Career Exploration for Class 10+",
    heading: "Staff Selection Commission (SSC)",
    subheading: "Explore opportunities in Staff Selection Commission (SSC).",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Staff Selection Commission (SSC).", borderColor: "#10B981" },
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
        description: "Understanding Staff Selection Commission (SSC).",
        color: "#1F2937",
        content: [
          "Staff Selection Commission (SSC) is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Government Officer",
        icon: "Clock",
        description: "Real workflow of an SSC professional.",
        color: "#374151",
        content: [
          "8:00 AM | Office Arrival | Arrive at office and check daily assignments and priorities",
          "9:00 AM | Document Processing | Process official documents and maintain accurate records",
          "11:00 AM | Department Meetings | Attend departmental meetings and receive briefings",
          "1:00 PM | Lunch Break | Network with colleagues and discuss work experiences",
          "2:00 PM | Public Service | Handle public inquiries and assist citizens with documentation",
          "4:00 PM | Administrative Tasks | Complete administrative work and data entry tasks",
          "5:30 PM | Quality Review | Review work quality and prepare daily reports",
          "6:30 PM | Wrap Up | Prepare for next day's tasks and organize workspace",
          "7:00 PM | Head Home | Enjoy job security and stable government career"
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#1F2937",
        content: [
          "Attention to detail and accuracy",
          "Organizational and time management skills",
          "Computer proficiency and typing speed",
          "Communication and interpersonal skills",
          "Dedication to public service"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete professional process.",
        color: "#374151",
        content: [
          "Document processing and record management",
          "Data entry and file maintenance",
          "Public service and citizen assistance",
          "Administrative support and coordination",
          "Compliance and quality assurance"
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#1F2937",
        content: [
          "Pathway A: SSC CGL Route (Graduate Level)",
          "Step 1: Score well in Class 10th & 12th",
          "Step 2: Complete graduation in any stream",
          "Step 3: Prepare Maths, English, Reasoning, GK",
          "Step 4: Clear SSC CGL Tier I & Tier II exams",
          "Step 5: Qualify document verification and medical test",
          "Step 6: Join as Inspector/Auditor/Assistant in Central Government",
          "Pathway B: SSC CHSL Route (Class 12th Level)",
          "Step 1: Score well in Class 10th & 12th",
          "Step 2: No graduation needed; apply after Class 12th",
          "Step 3: Prepare Maths, English, Reasoning, GK",
          "Step 4: Clear SSC CHSL Tier I & Tier II exams",
          "Step 5: Qualify typing test/skill test if required",
          "Step 6: Join as LDC/DEO/Postal Assistant in Government",
          "Pathway C: SSC MTS Route (Class 10th Level)",
          "Step 1: Score well in Class 10th (minimum qualification)",
          "Step 2: Apply for SSC MTS after Class 10th",
          "Step 3: Prepare basic Maths, English, Reasoning, GK",
          "Step 4: Clear SSC MTS Paper I & Paper II",
          "Step 5: Qualify document verification process",
          "Step 6: Join as Multi-Tasking Staff in Central Government"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#374151",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹22 LPA – ₹35 LPA",
          "Senior / Lead Role (10+ yrs): ₹15 LPA – ₹22 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10 LPA – ₹15 LPA",
          "Junior / Associate (3–5 yrs): ₹7 LPA – ₹10 LPA",
          "Entry Level (0–2 yrs): ₹4 LPA – ₹7 LPA",
          "Salary Variation Note: Fixed government scales. Higher HRA/DA in Tier-1 cities.",
          "Where Are the Jobs?",
          "Top Cities: Delhi, Mumbai, Kolkata, Chennai, Bengaluru",
          "Top Industries: Income Tax, GST, Railways, CBI, Ministries",
          "Global Demand: Foreign postings via Ministry of External Affairs"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#374151",
        content: [
          "Top Cities: Delhi, Mumbai, Kolkata, Chennai, Bengaluru",
          "Top Industries: Income Tax, GST, Railways, CBI, Ministries",
          "Global Demand: Foreign postings via Ministry of External Affairs"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#1F2937",
        content: [
          "Government: Jamia Millia Islamia Coaching Centre, New Delhi, Dr. Ambedkar Studies Centre (UGC funded), Pan-India, Aligarh Muslim University Coaching Centre, Aligarh, Banaras Hindu University Career Guidance Centre, Varanasi",
          "Private: KD Campus, New Delhi, Mahendras Institute, Pan-India, Career Power Institute, New Delhi, Paramount Coaching Centre, New Delhi",
          "Online: Unacademy SSC, Adda247 (BSE Institute), Testbook, PW (Physics Wallah) SSC Program"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#374151",
        content: [
          "Conventional: SSC CGL Officer, SSC CHSL Officer, SSC Stenographer, SSC GD Constable",
          "New-Age & AI Driven: Digital Records Officer, E-Governance Assistant, Cyber Documentation Executive, Data Processing Officer",
          "Remote/Entrepreneurship: SSC Mentor / Coach, Exam Content Creator, Government Exam YouTuber, Online Test Series Entrepreneur"
        ]
      }
    ]
  },
};
