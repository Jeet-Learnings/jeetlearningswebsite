import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";
const GREEN = "#10B981";
const AMBER = "#F59E0B";

export const bankingAndFinanceUpdateData: Record<string, CareerPageData> = {
  banking_and_related_services: {
    slug: "banking_and_related_services",
    badge: "The Backbone of India's Financial System for Class 10+",
    heading: "Banking & Financial Services",
    subheading: "Build India's financial future. Work at the heart of banking, managing money flows, customer relationships, and economic growth.",
    whyCards: [
      { icon: "TrendingUp", title: "Stable & Secure Career", description: "Banking is recession-proof with job security and consistent growth opportunities.", borderColor: "#10B981" },
      { icon: "DollarSign", title: "Excellent Salary & Benefits", description: "Competitive salaries starting ₹4-6 LPA with bonuses, perks, and career progression.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Multiple Career Paths", description: "Choose from retail banking, corporate banking, investment banking, or fintech roles.", borderColor: "#6366F1" },
      { icon: "Zap", title: "Rapid Growth Sector", description: "India's banking sector growing at 8-10% annually with 50+ lakh jobs by 2030.", borderColor: "#1E40AF" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (Degree + Exams)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4L–₹3Cr+", color: "bg-amber-100 text-amber-700" },
      { label: "Growth", detail: "8-10% CAGR, High Demand", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "50+ Lakh", label: "Banking Jobs by 2030", gradient: "from-green-500 to-green-600" },
      { value: "8-10%", label: "Annual Sector Growth", gradient: "from-amber-500 to-amber-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The engine of India's economic growth.",
        color: BLUE,
        content: [
          "The Foundation: Banking is the backbone of every economy. Banks collect money from savers, lend it to businesses and individuals, and manage the flow of capital that drives economic growth.",
          "The Role: Banking professionals are the architects of financial transactions. They manage accounts, approve loans, invest funds, and ensure the financial system runs smoothly.",
          "The Impact: Every rupee you save, every loan for a home or business, every investment—a banker is involved. They directly impact millions of lives and India's economic development.",
          "Why It Matters: India's banking sector is booming. With digital banking, fintech disruption, and financial inclusion initiatives, the demand for skilled bankers has never been higher.",
          "Career Diversity: Banking isn't just about tellers. It includes investment banking, corporate banking, retail banking, risk management, compliance, and emerging fintech roles.",
          "Global Relevance: Indian bankers are highly valued globally. Skills learned in India's competitive banking sector are recognized worldwide."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Banking Professional",
        icon: "Clock",
        description: "Real workflow of a banker.",
        color: BLUE2,
        content: [
          "8:30 AM|Morning Briefing|Start your day reviewing overnight market updates, forex rates, and customer alerts. Check your email for urgent loan applications and compliance issues.",
          "10:00 AM|Customer Meetings|Meet with a small business owner seeking a ₹50 lakh loan. Analyze their financial statements, business plan, and repayment capacity. Decide whether to approve or request more documentation.",
          "12:30 PM|Risk Analysis|Attend a meeting with the Risk Management team. Review a portfolio of corporate loans to identify potential defaults. Discuss strategies to mitigate risk.",
          "2:00 PM|Compliance & Documentation|Ensure all transactions comply with RBI regulations and KYC (Know Your Customer) norms. Update customer records and file regulatory reports.",
          "3:30 PM|Investment Advisory|Consult with a high-net-worth client about investment options—mutual funds, bonds, stocks. Explain risk-return profiles and recommend a diversified portfolio.",
          "5:00 PM|Team Coordination|Collaborate with colleagues on a new digital banking feature. Discuss how to improve customer experience while maintaining security.",
          "6:00 PM|Performance Review|Track daily targets—deposits collected, loans disbursed, customer satisfaction scores. Plan tomorrow's strategy."
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Numerical Aptitude: You're comfortable with numbers, calculations, and financial analysis. Excel is your friend.",
          "Customer-Centric: You genuinely enjoy helping people solve financial problems and building long-term relationships.",
          "Attention to Detail: Banking demands precision. A single decimal point error can cost thousands of rupees.",
          "Ethical Mindset: You understand the responsibility of handling other people's money and follow compliance rules strictly.",
          "Communication Skills: You can explain complex financial products to customers who have no banking background.",
          "Problem-Solving: You think on your feet and find solutions to customer issues quickly.",
          "Hard Skills: Strong foundation in Mathematics, Economics, and Accounting. Proficiency in Excel, banking software, and digital platforms.",
          "Soft Skills: Patience, empathy, teamwork, and the ability to work under pressure during market volatility."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete banking process.",
        color: BLUE2,
        content: [
          "Customer Account Management: Opening accounts, processing deposits and withdrawals, maintaining customer records, and ensuring KYC compliance.",
          "Loan Processing: Evaluating loan applications, assessing creditworthiness, approving or rejecting loans, and managing loan disbursement and recovery.",
          "Investment Advisory: Recommending financial products (mutual funds, bonds, insurance) based on customer risk profile and financial goals.",
          "Risk Assessment: Analyzing credit risk, market risk, and operational risk. Ensuring the bank maintains adequate capital reserves.",
          "Regulatory Compliance: Following RBI guidelines, anti-money laundering (AML) regulations, and data protection laws.",
          "Sales & Business Development: Meeting targets for deposits, loans, and other financial products. Building customer relationships.",
          "Reconciliation & Reporting: Ensuring daily transactions are accurate, reconciling accounts, and preparing financial reports.",
          "Digital Banking: Managing online platforms, mobile apps, and ensuring cybersecurity measures are in place."
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: Degree + Bank Exam Route",
          "Step 1: Complete Class 12th (any stream, Commerce preferred)",
          "Step 2: Pursue B.Com / BBA / B.A. Economics",
          "Step 3: Prepare for bank exams — IBPS PO, SBI PO, RBI Grade B",
          "Step 4: Learn basics — Tally, MS Excel, financial accounting",
          "Step 5: Clear bank exam and complete probation period (2 years)",
          "Step 6: Progress from Probationary Officer to Senior Manager",
          "Pathway B: Private Banking / Skill-Based Entry",
          "Step 1: Complete Class 12th (Commerce/Maths preferred)",
          "Step 2: Pursue BBA Finance / B.Com (Hons) / B.Sc Economics",
          "Step 3: Get certified — NISM, CFA Level 1, or Financial Modeling courses",
          "Step 4: Do internships at banks like HDFC, ICICI, Kotak, Axis",
          "Step 5: Join as Relationship Manager or Investment Advisor",
          "Step 6: Specialize in wealth management, corporate banking, or investment banking",
          "Pathway C: Domain Switch / Higher Education Route",
          "Step 1: Complete Class 12th (any stream with Maths)",
          "Step 2: Pursue B.Tech / B.Sc / CA / B.Com",
          "Step 3: Work 1–2 years in accounting, sales, or IT",
          "Step 4: Complete MBA Finance (IIMs, XLRI, NMIMS) or PG in Banking",
          "Step 5: Intern at financial institutions or investment banks",
          "Step 6: Join as Senior Analyst or Manager in specialized banking roles"
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
          "CXO / Top Leadership (15+ yrs): ₹50 LPA –  ₹3+ Crore",
          "Senior / Lead Role (10+ yrs): ₹25–80 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10–30 LPA",
          "Junior / Associate (3–5 yrs): ₹6–15 LPA",
          "Entry Level (0–2 yrs): ₹4–8 LPA",
          "Note: Metro cities (Mumbai, Delhi) pay 30–50% more; each promotion adds ₹2–5 LPA; performance bonuses can add 20–40% to base salary."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: BLUE2,
        content: [
          "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Pune",
          "Top Industries: Banking (SBI, HDFC, ICICI, Axis), NBFCs, Investment Firms, FinTech, Insurance, Consulting",
          "Opportunities: High global demand (USA, UK, UAE, Singapore) growing remote roles in fintech and digital banking"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: Delhi University, Mumbai University, Calcutta University, Banaras Hindu University, University of Madras",
          "Private: Amity University, Christ University, NMIMS, XLRI, FLAME University, Symbiosis",
          "Online/Distance: (IGNOU) Indira Gandhi National Open University, Specialized Banking Institutes -  IBPS, SBI Academy, ICICI Academy"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE2,
        content: [
          "Conventional: Probationary Officer, Relationship Manager, Credit Analyst, Investment Advisor, Loan Officer, Branch Manager, Regional Manager",
          "New-Age and AI-Driven: Fintech Product Manager, AI-based Risk Modelling Specialist, Digital Banking Specialist, Blockchain Developer, Data Scientist",
          "Entrepreneurship: Starting a fintech startup, digital lending platform, or financial advisory firm"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Bank Scholarships: Many banks offer scholarships for meritorious students pursuing commerce/finance degrees.",
          "NSP (National Scholarship Portal): Government scholarships for merit students in commerce and finance.",
          "State Scholarships: Various state-level merit scholarships for commerce students.",
          "Institutional Scholarships: Universities and colleges offer scholarships for top scorers in entrance exams.",
          "Corporate Sponsorships: Consulting firms and investment banks sponsor internships and scholarships for finance students.",
          "Research Assistantships: Opportunities to earn while studying in research projects at universities.",
          "ICICI Bank Scholarship: Specifically for students pursuing finance and banking careers.",
          "HDFC Bank Scholarship: Merit-based scholarships for commerce and finance students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: BLUE,
        content: [
          "IBPS (Institute of Banking Personnel Selection): Conducts exams for recruitment in public sector banks. IBPS PO, IBPS Clerk are gateway exams.",
          "SBI (State Bank of India): Conducts its own recruitment exams—SBI PO, SBI Clerk. Highly competitive and prestigious.",
          "RBI Grade B: For those aspiring to work at the Reserve Bank of India in policy-making roles.",
          "NISM (National Institute of Securities Market): Certification for investment advisors and mutual fund distributors.",
          "CFA (Chartered Financial Analyst): Global certification for investment professionals. Highly valued for wealth management and investment banking roles.",
          "CA (Chartered Accountant): Professional qualification for accounting and financial advisory roles.",
          "Continuing Professional Development (CPD): Mandatory training to stay updated with banking regulations and practices.",
          "Compliance Certifications: AML (Anti-Money Laundering), KYC (Know Your Customer), and data protection certifications."
        ]
      },

      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "Competitive Exams: Bank exams are highly competitive with pass rates of 0.5-1%. You must prepare rigorously.",
          "Work-Life Balance: Banking hours can be long, especially during month-end closing and market volatility.",
          "Regulatory Pressure: Constant changes in RBI regulations and compliance requirements demand continuous learning.",
          "Customer Pressure: Dealing with angry customers, loan defaults, and complaints can be emotionally draining.",
          "Performance Targets: Banks set aggressive targets for deposits, loans, and sales. Missing targets affects bonuses and promotions.",
          "Cybersecurity Threats: Increasing cyber attacks and fraud attempts put pressure on security teams.",
          "Market Volatility: Economic downturns, interest rate changes, and market crashes directly impact banking operations and job security.",
          "Ethical Dilemmas: Sometimes you may face pressure to sell unsuitable products or bend compliance rules. Maintaining integrity is crucial."
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in banking.",
        color: BLUE2,
        content: [
          "Digital Banking Revolution: Mobile-first banking, AI chatbots, and voice-activated transactions will dominate. Traditional branch banking will decline.",
          "Fintech Integration: Banks will partner with fintech startups for payments, lending, and investment services. Hybrid banking models will emerge.",
          "AI & Automation: AI will handle routine tasks (KYC, fraud detection, loan approval). Humans will focus on complex decisions and customer relationships.",
          "Blockchain & Cryptocurrency: Central Bank Digital Currency (CBDC) and blockchain-based settlements will transform banking infrastructure.",
          "Personalized Banking: AI-driven recommendations for loans, investments, and insurance based on real-time financial data.",
          "Open Banking: APIs will allow third-party developers to build banking services, creating an ecosystem of financial apps.",
          "Sustainability Banking: Green banking, ESG (Environmental, Social, Governance) investing, and climate risk assessment will be critical.",
          "Cybersecurity Focus: With increasing digital transactions, cybersecurity specialists will be in massive demand."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master MS Excel: Learn advanced formulas, pivot tables, and data analysis. Excel is used daily in banking.",
          "Learn Accounting Basics: Understand debit-credit, balance sheets, and profit-loss statements. This is fundamental to banking.",
          "Read Financial News: Follow 'The Economic Times,' 'Business Standard,' and 'Mint' to understand markets, interest rates, and economic trends.",
          "Understand Economics: Study microeconomics and macroeconomics. Understand how inflation, GDP, and interest rates affect banking.",
          "Practice Quantitative Aptitude: Solve problems on percentages, ratios, and data interpretation. Bank exams heavily test these.",
          "Develop Communication Skills: Join debate clubs, public speaking forums, and practice explaining financial concepts clearly.",
          "Online Courses: Take free courses on Coursera or edX about finance, banking, and investment basics.",
          "Internships: Seek internships at banks or financial institutions during summer breaks to gain practical experience.",
          "Networking: Connect with banking professionals, attend finance seminars, and join finance clubs in school."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Banking Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "Rajesh Masrani: CEO of TD Bank (Canada) and former CEO of ICICI Bank. A visionary who transformed ICICI into a global powerhouse.",
          "Aditya Puri: Former MD of HDFC Bank. Built HDFC Bank from scratch into India's most valuable bank. A legend in Indian banking.",
          "Uday Kotak: Founder and MD of Kotak Mahindra Bank. Pioneered investment banking in India and built a diversified financial services group.",
          "Shikha Sharma: Former MD of Axis Bank. A trailblazer for women in banking leadership. Transformed Axis into a top-tier bank.",
          "Chanda Kochhar: Former MD of ICICI Bank. Pioneered retail banking and digital innovation in India. A global icon for women in finance.",
          "Shaktikanta Das: Former Governor of RBI. Shaped India's monetary policy and financial regulations during critical economic periods.",
          "Nirmala Sitharaman: Finance Minister of India. Driving financial inclusion and digital banking initiatives across the country."
        ]
      }
    ]
  }
};


