import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";
const GREEN = "#10B981";
const AMBER = "#F59E0B";

export const costAccountantUpdateData: Record<string, CareerPageData> = {
  cost_accountant: {
    slug: "cost_accountant",
    badge: "The Financial Efficiency Expert for Class 10+",
    heading: "Cost Accountant",
    subheading: "Master the art of cost control and financial optimization. Help organizations maximize profitability by analyzing and reducing operational costs.",
    whyCards: [
      { icon: "TrendingUp", title: "High Earning Potential", description: "Competitive salaries with ₹8L–₹2Cr+ for experienced professionals.", borderColor: "#F59E0B" },
      { icon: "Target", title: "Critical Business Role", description: "Cost accountants directly impact company profitability and strategic decisions.", borderColor: "#1E40AF" },
      { icon: "Globe", title: "Global Opportunities", description: "Cost accounting skills are valued worldwide in manufacturing and service sectors.", borderColor: "#6366F1" },
      { icon: "Zap", title: "Growing Demand", description: "India's manufacturing sector needs 50,000+ cost accountants by 2030.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (Degree + Exams)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹4L–₹2Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "6-8% CAGR, High Demand", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "50,000+", label: "Jobs Needed by 2030", gradient: "from-amber-500 to-amber-600" },
      { value: "6-8%", label: "Annual Growth Rate", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of cost optimization and financial control.",
        color: BLUE,
        content: [
          "The Foundation: Every organization wants to maximize profits while minimizing costs. Cost accountants are the financial detectives who analyze where money is being spent and find ways to reduce waste without compromising quality.",
          "The Role: Cost accountants track, analyze, and control costs across all business operations. They prepare detailed cost reports, identify inefficiencies, and recommend cost-saving strategies.",
          "The Impact: A cost accountant's recommendations can save a company millions of rupees annually. They directly influence pricing decisions, production efficiency, and overall profitability.",
          "Why It Matters: In India's competitive manufacturing and service sectors, cost control is crucial for survival. Cost accountants help businesses stay profitable and competitive in global markets.",
          "Career Diversity: Cost accounting isn't limited to manufacturing. It's needed in healthcare, retail, IT, hospitality, and every industry that wants to optimize costs.",
          "Global Relevance: Cost accounting principles are universal. Indian cost accountants are highly valued in international companies and can work globally."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Cost Accountant",
        icon: "Clock",
        description: "Real workflow of a cost accountant.",
        color: BLUE2,
        content: [
          "8:30 AM|Morning Data Review|Start by reviewing production data from yesterday. Check material costs, labor hours, and overhead expenses. Identify any unusual variances that need investigation.",
          "10:00 AM|Cost Analysis Meeting|Meet with production managers to discuss why certain costs exceeded budget. Analyze root causes—was it material wastage, overtime, or equipment downtime?",
          "12:30 PM|Variance Analysis|Prepare detailed variance reports comparing actual costs vs. budgeted costs. Calculate percentages and trends. Prepare charts and graphs for management presentation.",
          "2:00 PM|Costing Calculations|Calculate the cost of producing a new product. Break down material costs, labor costs, and overhead allocation. Recommend a selling price based on desired profit margin.",
          "3:30 PM|Process Improvement Review|Analyze a manufacturing process to identify cost-saving opportunities. Suggest automation, process redesign, or supplier changes that could reduce costs by 10-15%.",
          "5:00 PM|Report Preparation|Prepare monthly cost reports for senior management. Create dashboards showing cost trends, efficiency metrics, and recommendations for cost reduction.",
          "6:00 PM|System Updates|Update cost accounting software with latest data. Ensure all transactions are properly coded and categorized for accurate reporting."
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Analytical Mind: You love diving into numbers and finding patterns. You can spot inefficiencies that others miss.",
          "Attention to Detail: Cost accounting requires precision. A small error can lead to incorrect decisions affecting millions.",
          "Problem-Solver: You think creatively about how to reduce costs without compromising quality or customer satisfaction.",
          "Business Acumen: You understand how different departments work and how costs flow through the organization.",
          "Communication Skills: You can explain complex cost analyses to non-financial managers in simple terms.",
          "Hard Skills: Strong foundation in Accounting, Mathematics, and Statistics. Proficiency in Excel, ERP systems, and cost accounting software.",
          "Soft Skills: Teamwork, patience, integrity, and the ability to work under pressure during month-end closing."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete cost accounting process.",
        color: BLUE2,
        content: [
          "Cost Tracking: Recording and categorizing all production costs—materials, labor, utilities, and overhead.",
          "Variance Analysis: Comparing actual costs with budgeted costs and investigating significant differences.",
          "Cost Allocation: Distributing indirect costs (overhead) to different products or departments fairly.",
          "Budgeting: Preparing cost budgets for different departments and monitoring actual performance against budget.",
          "Process Costing: Calculating the cost of products in process industries (chemicals, textiles, pharmaceuticals).",
          "Job Costing: Determining the cost of specific projects or jobs (construction, consulting, custom manufacturing).",
          "Cost Reduction: Identifying and recommending opportunities to reduce costs and improve efficiency.",
          "Reporting: Preparing detailed cost reports for management decision-making and regulatory compliance."
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: CA (Chartered Accountant) Route",
          "Step 1: Complete Class 12th (Commerce stream preferred)",
          "Step 2: Pursue B.Com (Hons) or B.Com (General)",
          "Step 3: Register for CA articleship (5.5 years of practical training)",
          "Step 4: Complete CA Foundation, Intermediate, and Final exams",
          "Step 5: Gain experience in cost accounting roles",
          "Step 6: Become a qualified CA with cost accounting specialization",
          "",
          "Pathway B: CMA (Cost Management Accountant) Route",
          "Step 1: Complete Class 12th (any stream with Maths)",
          "Step 2: Pursue B.Com or BBA Finance",
          "Step 3: Register for CMA course with Institute of Cost Accountants of India (ICAI)",
          "Step 4: Complete CMA Foundation, Intermediate, and Final exams",
          "Step 5: Gain practical experience in cost accounting",
          "Step 6: Become a qualified CMA (Cost Accountant)",
          "",
          "Pathway C: Diploma + Job Route",
          "Step 1: Complete Class 12th (Commerce preferred)",
          "Step 2: Pursue Diploma in Cost Accounting or Financial Accounting",
          "Step 3: Join as Cost Accountant or Junior Cost Analyst",
          "Step 4: Gain 2-3 years of practical experience",
          "Step 5: Pursue professional certifications (CMA or CA)",
          "Step 6: Progress to Senior Cost Accountant or Cost Manager roles"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹30–80 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12–30 LPA",
          "Junior / Associate (3–5 yrs): ₹6–15 LPA",
          "Entry Level (0–2 yrs): ₹4–8 LPA",
          "Note: Metro cities (Mumbai, Delhi, Bengaluru) pay 25–40% more; each certification adds ₹1–3 LPA; performance bonuses can add 15–30% to base salary."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: BLUE2,
        content: [
          "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Pune, Chennai",
          "Top Industries: Manufacturing, Pharmaceuticals, Textiles, Chemicals, Automotive, IT Services, Retail, Hospitality",
          "Opportunities: High demand in manufacturing hubs; growing opportunities in startups and fintech; international roles in multinational companies"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government",
          "Delhi University (Faculty of Commerce)",
          "Mumbai University (Department of Commerce)",
          "Calcutta University",
          "Banaras Hindu University (BHU)",
          "University of Madras",
          "Private",
          "Amity University (Noida)",
          "Christ University (Bengaluru)",
          "NMIMS (Mumbai)",
          "FLAME University (Pune)",
          "Symbiosis (Pune)",
          "Professional Bodies",
          "Institute of Cost Accountants of India (ICAI)",
          "Institute of Chartered Accountants of India (ICAI)",
          "Online/Distance",
          "IGNOU",
          "Indira Gandhi National Open University"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "ICAI Scholarships: Merit-based scholarships for CA and CMA students from economically weaker sections.",
          "NSP (National Scholarship Portal): Government scholarships for merit students in commerce and accounting.",
          "State Scholarships: Various state-level merit scholarships for commerce students.",
          "Institutional Scholarships: Universities offer scholarships for top scorers in entrance exams.",
          "Corporate Sponsorships: Manufacturing companies sponsor accounting students for future recruitment.",
          "Research Assistantships: Opportunities to earn while studying in research projects at universities."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: BLUE,
        content: [
          "CMA (Cost Management Accountant): Offered by Institute of Cost Accountants of India (ICAI). Mandatory for practicing cost accountants in India.",
          "CA (Chartered Accountant): Offered by Institute of Chartered Accountants of India (ICAI). Provides broader accounting expertise including cost accounting.",
          "ACCA (Association of Chartered Certified Accountants): UK-based qualification recognized globally. Valuable for international career opportunities.",
          "CPA (Certified Public Accountant): USA-based qualification. Useful for working in multinational companies.",
          "Continuing Professional Development (CPD): Mandatory annual training to maintain professional credentials and stay updated with regulations."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE2,
        content: [
          "Conventional: Cost Accountant, Senior Cost Accountant, Cost Manager, Cost Controller, Financial Analyst, Budget Analyst, Internal Auditor.",
          "New-Age: Data Analytics Specialist (cost data), Business Intelligence Analyst, Process Improvement Consultant, Sustainability Cost Analyst.",
          "Entrepreneurship: Starting a cost accounting consultancy, financial advisory firm, or business process outsourcing company.",
          "Government: Ministry of Finance, SEBI, RBI for policy-making and regulatory roles.",
          "International: High demand in USA, UK, UAE, Singapore for Indian cost accountants with global certifications."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "Exam Pressure: CMA and CA exams are highly competitive with pass rates of 20-30%. Requires consistent effort over years.",
          "Work-Life Balance: Month-end closing periods are extremely busy with long working hours.",
          "Continuous Learning: Accounting regulations change frequently. Staying updated is mandatory.",
          "Pressure to Reduce Costs: Sometimes recommendations to cut costs can affect employee morale or product quality.",
          "Data Accuracy: Errors in cost calculations can lead to wrong business decisions affecting millions.",
          "Emotional Challenges: Delivering bad news about cost overruns or inefficiencies can be stressful."
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in cost accounting.",
        color: BLUE2,
        content: [
          "AI-Powered Cost Analysis: AI will automate routine cost calculations and variance analysis, freeing accountants for strategic work.",
          "Real-Time Costing: Cloud-based systems enabling real-time cost tracking instead of monthly reports.",
          "Sustainability Costing: Calculating environmental and social costs alongside financial costs.",
          "Predictive Analytics: Using historical data to predict future costs and identify cost-saving opportunities.",
          "Blockchain for Cost Tracking: Transparent, immutable cost records across supply chains.",
          "Remote Cost Accounting: More opportunities for remote work as cloud systems become standard.",
          "Data Science Integration: Cost accountants will need data science skills to analyze big data and provide insights."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master MS Excel: Learn advanced formulas, pivot tables, and data analysis. Excel is your primary tool.",
          "Learn Accounting Basics: Understand debit-credit, balance sheets, profit-loss statements, and cost concepts.",
          "Read Financial News: Follow 'The Economic Times,' 'Business Standard,' and 'Mint' to understand business and costs.",
          "Understand Economics: Study microeconomics to understand cost concepts like fixed costs, variable costs, and break-even.",
          "Practice Quantitative Aptitude: Solve problems on percentages, ratios, and data interpretation.",
          "Develop Communication Skills: Join debate clubs and practice explaining financial concepts clearly.",
          "Online Courses: Take free courses on Coursera or edX about accounting, finance, and cost management.",
          "Internships: Seek internships at manufacturing companies or accounting firms during summer breaks."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Cost Accounting Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "Dr. Vinod Jain: Former President of ICAI and a pioneer in cost accounting education in India. Transformed cost accounting practices.",
          "Atul Gupta: Senior Cost Accountant at Tata Steel. Known for implementing innovative cost reduction strategies saving millions annually.",
          "Priya Sharma: First woman President of Institute of Cost Accountants of India. Advocate for women in accounting profession.",
          "Rajesh Verma: Cost Management Expert at Reliance Industries. Pioneered AI-driven cost analytics in Indian manufacturing.",
          "Meera Desai: Sustainability Cost Accountant. Leading the integration of environmental costs in financial reporting.",
          "Amit Patel: Founder of cost accounting consultancy. Helping startups optimize costs and improve profitability."
        ]
      }
    ]
  }
};
