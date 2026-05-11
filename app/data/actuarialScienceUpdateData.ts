import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const actuarialScienceUpdateData: Record<string, CareerPageData> = {
  actuarial_science: {
    slug: "actuarial_science",
    badge: "The Architects of Risk for Class 10+",
    heading: "Actuarial Science",
    subheading: "Predict the future using math. Measure financial risk and shape the decisions that keep the world's financial systems stable.",
    whyCards: [
      { icon: "Target", title: "Risk Detectives", description: "Use math to predict future events and their financial impact.", borderColor: "#F59E0B" },
      { icon: "TrendingUp", title: "Highest Earning Potential", description: "One of the highest-paying careers in India with ₹1Cr+ for leaders.", borderColor: "#1E40AF" },
      { icon: "Globe", title: "Global Opportunities", description: "Work anywhere in the world with this universally valued skill.", borderColor: "#6366F1" },
      { icon: "Zap", title: "Growing Demand", description: "India needs 25,000 actuaries by 2030; currently only 500-700 exist.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "6-10 Years (ACET + 13-15 Exams)", color: "bg-amber-100 text-amber-700" },
      { label: "Salary Range", detail: "₹6L–₹3Cr+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "4.8-5.2% CAGR, Global Demand", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹1Cr+", label: "Leadership Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "500-700", label: "Actuaries in India", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of predicting the future using mathematics.",
        color: BLUE,
        content: [
          "The Mystery: Have you ever wondered how insurance companies decide how much you should pay for car insurance, or how a bank knows if it's safe to lend money for a massive bridge project? They don't just guess; they use Actuarial Science.",
          "The Definition: Actuarial Science is the art and science of predicting the future using math. Actuaries are 'Risk Detectives' who use mathematics, statistics, and financial theory to measure the probability of future events.",
          "The Impact: They calculate the financial impact of events like accidents, natural disasters, or even how long people might live.",
          "Global Powerhouse: In today's India, this career is a global powerhouse. As our economy grows, every new business, high-speed train, or health insurance policy needs an actuary to ensure it is financially stable.",
          "Why it matters: India is the 'Insurance Hub of Asia.' We produce more insurance policies than almost any other country. Actuaries are the brains behind this massive industry, ensuring India remains a global leader in financial risk management and insurance innovation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Actuarial Associate",
        icon: "Clock",
        description: "Real workflow of an actuary.",
        color: BLUE2,
        content: [
          "8:30 AM|The Morning Model Check|Start your day by reviewing the 'Mortality Tables' you updated yesterday. Check how a new health trend might change the lifespan predictions for thousands of policyholders.",
          "10:30 AM|The 'Clash' Analysis|Meet with the Product Development team. They want to launch a new insurance plan for electric vehicles (EVs). Explain that since EVs have different battery risks than petrol cars, the 'premium' (the price) needs to be calculated differently. Show them a 3D graph of risk probability.",
          "1:30 PM|Data Mining|After lunch, dive into high-performance software like R or Python. Run a 'Stress Test' on the company's pension funds. Simulate a situation where the stock market drops by 20% to see if the company can still pay its retirees.",
          "4:00 PM|Consulting with the 'Big Bosses'|Join a video call with the Chief Financial Officer (CFO). Translate complex statistical formulas into simple business advice: 'If we want to stay profitable, we need to adjust our reserves by 5% this year.'"
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Mathematical Prowess: You don't just like math; you enjoy using it to solve real-world problems.",
          "Analytical Detective: You love digging through data to find a hidden truth.",
          "Infinite Patience: Becoming a fully 'Fellow' Actuary takes years of exams. You need the grit to keep going.",
          "Business Sense: You understand that numbers have to make sense for a business to survive.",
          "Communication Skills: You can explain a complex formula to someone who doesn't even like math.",
          "Hard Skills: Strong foundation in Mathematics, Statistics, and Probability. Comfort with Excel, R, and Python.",
          "Soft Skills: Collaborative spirit and the ability to explain complex concepts to non-technical stakeholders."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete actuarial process.",
        color: BLUE2,
        content: [
          "Data Collection: Gathering massive amounts of historical data (e.g., past 20 years of insurance claims, mortality rates, economic indicators).",
          "Risk Modeling: Building mathematical 'simulations' of what might happen next using probability theory and statistical methods.",
          "Pricing & Valuation: Deciding the 'fair price' for a policy or the 'safe amount' to keep in reserves to ensure the company can pay claims.",
          "Reporting: Presenting findings to government regulators (like IRDAI) to ensure the company is following the law and maintaining solvency.",
          "Continuous Monitoring: Updating models as new data arrives and market conditions change. Stress-testing scenarios.",
          "Documentation: Maintaining detailed records for regulatory compliance and audit purposes."
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: Degree + Professional Exam Route","Step 1: Complete Class 12th with Maths (PCM/Commerce)","Step 2: Pursue B.Sc Actuarial Science / B.Sc Statistics / B.Com (Hons)","Step 3: Start clearing actuarial exams — IAI (India) or IFoA (UK)","Step 4: Do internships at insurance firms like LIC, HDFC Life, ICICI Prudential","Step 5: Clear 6–8 actuarial papers while working as Actuarial Analyst","Step 6: Become Associate/Fellow Actuary","Pathway B: Skill-Based Entry","Step 1: Complete Class 12th with Maths","Step 2: Take a diploma or online course in Actuarial Science / Data Analytics","Step 3: Learn tools — MS Excel, R, Python, SQL","Step 4: Clear initial 3–4 actuarial papers (CT series from IAI/IFoA)","Step 5: Join insurance or consulting firms as Actuarial Trainee","Step 6: Progress to Actuarial Analyst, or Underwriting Analyst","Pathway C: Domain Switch Route","Step 1: Complete Class 12th (Maths compulsory)","Step 2: Pursue B.Tech / B.Sc Maths / MBA Finance / CA","Step 3: Work 1–2 years in finance, banking, or data analytics","Step 4: Begin clearing actuarial exams alongside job (IAI/IFoA)","Step 5: Gain experience in risk, insurance, or pension consulting","Step 6: Transition as Actuarial Consultant, or Pension Fund Manager"]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹80 LPA –  ₹2+ Crore","Senior / Lead Role (10+ yrs): ₹40–80 LPA","Mid-Level Professional (5–8 yrs): ₹20–40 LPA","Junior / Associate (3–5 yrs): ₹10–20 LPA","Entry Level (0–2 yrs): ₹4–8 LPA","Note: Metro cities (Mumbai, Gurugram) pay 20–40% more; each actuarial exam cleared adds ~10–15% salary growth.","Where Are the Jobs?","Top Cities: Mumbai, Gurugram/Delhi-NCR, Bengaluru, Hyderabad, Pune","Top Industries: Insurance (LIC, HDFC Life), Consulting (Aon, WTW, PwC, Deloitte), Reinsurance, Banking, Pensions, InsurTech","Opportunities: High global demand (UK, USA, UAE, Singapore); growing remote, consulting, and freelance roles"]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: Institute of Actuaries of India, University of Mumbai, Maharaja Sayajirao University Baroda, Aligarh Muslim University",
          "Private: Bishop Heber College Tiruchirappalli, Narsee Monjee Institute NMIMS, Manipal Academy of Higher Education, Amity University",
          "Online: Institute and Faculty of Actuaries IFoA UK, SWAYAM, NPTEL, Coursera, NIIT Online Programs"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE2,
        content: [
          "Conventional: Life Insurance Actuary, General Insurance Actuary, Pension & Retirement Fund Actuary, Health Insurance Actuary",
          "New-Age and AI-Driven: Predictive Analytics Actuary, Insurtech Data Scientist, AI-based Catastrophe Risk Modeller, Machine Learning Pricing Specialist",
          "Remote/Entrepreneurship: Freelance Actuarial Consultant, Online Actuarial Exam Coaching, Micro-Insurance Platform Founder, Actuarial Analytics SaaS Startup"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: Institute of Actuaries of India (IAI), University of Mumbai, University of Delhi, Bishop Heber College Trichy, Banaras Hindu University",
          "Private: Amity University, Christ University, Patkar-Varde College Mumbai, VIT Vellore, Manipal Academy",
          "Online: SWAYAM, NPTEL, Coursera"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "IAI Trust Scholarships: Merit-based fee waivers for students from economically weaker sections.",
          "Corporate Sponsorships: Firms like Milliman and Swiss Re often sponsor the exam fees for their employees.",
          "NSP (National Scholarship Portal): General government scholarships for merit students (B.Sc. level).",
          "State Scholarships: Various state-level merit scholarships for science students.",
          "Institutional Scholarships: Many colleges offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: BLUE,
        content: [
          "IAI (Institute of Actuaries of India): The mandatory body for practicing in India. Membership is required to sign off on actuarial valuations.",
          "IFoA (Institute and Faculty of Actuaries, UK): Many Indian students also take exams here for global recognition and international career opportunities.",
          "SOA (Society of Actuaries, USA): Preferred if you want to work in the North American market. Highly valued globally.",
          "Actuaries Act, 2006: Legal framework governing actuarial practice in India. Defines who can call themselves an 'Actuary.'",
          "Continuing Professional Development (CPD): Mandatory annual training to maintain membership and stay updated with industry changes.",
          "Specialized Certifications: Climate Risk Actuary, Cyber Risk Specialist, Pension Actuary certifications available."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: BLUE2,
        content: [
          "Conventional: Actuary, Risk Analyst, Insurance Underwriter, Pension Fund Manager, Investment Analyst, Pricing Actuary, Reserving Actuary.",
          "New-Age: Climate Risk Actuary, Cyber Risk Specialist, Pandemic Modeler, AI-Driven Pricing Specialist, Fintech Risk Manager.",
          "Entrepreneurship: Starting an actuarial consulting firm, risk management advisory, or fintech startup focused on insurance innovation.",
          "Government: IRDAI (Insurance Regulator), Ministry of Finance, RBI, SEBI for policy-making and regulatory roles.",
          "International: High demand in USA, UK, Germany, Singapore for Indian actuaries with global certifications."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: BLUE,
        content: [
          "The Exam 'Wall': Pass rates for professional exams are low (often 30-40%). You must be ready to fail and try again multiple times.",
          "Work-Study Balance: Most actuaries work 9-to-5 and then study 7-to-10 PM. It's a marathon of discipline lasting 6-10 years.",
          "Eye Strain: You will spend a lot of time looking at spreadsheets, complex models, and code.",
          "Continuous Learning: The field evolves rapidly with new regulations, climate risks, and AI applications. Staying updated is mandatory.",
          "High Pressure: Your calculations directly impact company profitability and customer premiums. Mistakes can be costly.",
          "Emotional Weight: Dealing with failed exam attempts and the pressure of continuous learning can be emotionally taxing."
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in actuarial science.",
        color: BLUE2,
        content: [
          "AI Actuaries: AI will do routine calculations and pattern recognition, but humans will be needed to interpret the 'Ethics' and 'Business Logic' of the data.",
          "Pandemic Modeling: A huge new field helping governments and insurers prepare for future health crises. Actuaries will model disease spread and economic impact.",
          "Climate Finance: Calculating the cost of climate change impacts (floods, droughts, extreme weather) and how to insure against them.",
          "Cyber Risk: As digital threats grow exponentially, cyber actuaries will be in massive demand to price cyber insurance and model cyber attacks.",
          "Personalized Insurance: AI-driven models creating individualized insurance products based on real-time data and personal risk profiles.",
          "Blockchain & Parametric Insurance: Using blockchain for transparent claims and parametric insurance that pays automatically when conditions are met."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master MS Excel: This is your primary weapon. Learn VLOOKUPs, Pivot Tables, and advanced formulas. Excel is used daily by actuaries.",
          "Learn Python/R: Coding is the new language of risk. Start with Python basics and gradually move to statistical packages.",
          "Read the News: Follow the 'Financial Express' and 'The Economic Times' to understand how the economy works and how insurance impacts it.",
          "Math Competitions: Participate in Olympiads and math competitions to sharpen your logical speed and problem-solving skills.",
          "ACET Preparation: Start early with free resources from the IAI website. Understand probability and statistics fundamentals.",
          "Online Courses: Take free courses on Coursera or edX about statistics, probability, and financial mathematics.",
          "Science Projects: Conduct projects on data analysis, probability simulations, or financial modeling.",
          "Networking: Join finance clubs and connect with mentors in the insurance and actuarial field."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Actuarial Leaders",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: BLUE2,
        content: [
          "Dr. Rajesh Dalmia: Former President of IAI and a partner at EY; a legend in Indian actuarial consulting. He pioneered actuarial science in India.",
          "Pournima Gupte: A pioneer woman in the field and a whole-time member of the IRDAI (The Insurance Regulator). She shaped insurance policy in India.",
          "K.S. Gopalakrishnan: A seasoned leader who served as the CEO of Aegon Life and is a Fellow of the IAI. He transformed life insurance in India.",
          "Atul Sharma: A leading actuary in climate risk modeling and sustainable finance. He's pioneering climate-aware insurance products.",
          "Priya Nair: A prominent woman actuary pioneering AI applications in actuarial science. She's building the future of insurance.",
          "S.P. Subhedar: Became MD of LIC, leading one of India's largest insurance companies. A visionary in actuarial leadership."
        ]
      }
    ]
  }
};


