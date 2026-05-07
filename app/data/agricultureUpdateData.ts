import { CareerPageData } from './careerPageData';

const COLOR1 = "#C20000";
const COLOR2 = "#DA1313";

export const agricultureUpdateData: Record<string, CareerPageData> = {
  agri_business_management: {
    slug: "agri_business_management",
    badge: "Career Exploration for Class 10+",
    heading: "Agri-Business Management",
    subheading: "Explore opportunities in Agri-Business Management.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Agri-Business Management.", borderColor: "#10B981" },
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
        description: "Understanding Agri-Business Management.",
        color: "#C20000",
        content: [
          "Agri-Business Management is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real workflow of a professional.",
        color: "#DA1313",
        content: [
          "8:30 AM - Morning briefing and planning",
          "10:30 AM - Core work activities and analysis",
          "1:30 PM - Problem-solving and collaboration",
          "4:00 PM - Meetings and strategic planning",
          "6:00 PM - Review and preparation for next day"
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
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
        color: "#DA1313",
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
        color: "#C20000",
        content: [
          "Pathway A: Degree Route",
          "Step 1: Complete Class 12th (PCM/PCB/Commerce)",
          "Step 2: Pursue BBA in Agri-Business / B.Sc Agriculture",
          "Step 3: Do summer internships at agri-firms like ITC, Mahindra Agri",
          "Step 4: Learn tools — SAP, MS Excel, supply chain basics",
          "Step 5: Complete MBA in Agri-Business (MANAGE Hyderabad, IIM-A ABM)",
          "Step 6: Join as Agri-Business Manager, Supply Chain Analyst, or Commodity Trader",
          "Pathway B: Skill-Based Entry",
          "Step 1: Complete Class 12th (any stream)",
          "Step 2: Take diploma in Agriculture / Agri-Business",
          "Step 3: Gain field experience — FPOs, cooperatives, mandis",
          "Step 4: Learn digital tools — AgroStar, DeHaat platforms",
          "Step 5: Get certified in agri-supply chain or rural management",
          "Step 6: Work as Field Coordinator, Procurement Officer, or Agri-Sales Executive",
          "Pathway C: Domain Switch Route",
          "Step 1: Complete Class 12th (Commerce/Science)",
          "Step 2: Pursue B.Com / BBA / B.Sc",
          "Step 3: Work 1–2 years in sales, logistics, or banking",
          "Step 4: Enroll in PG Diploma — Rural Management (IRMA) or Agri-Business",
          "Step 5: Intern with agri-startups like Ninjacart, DeHaat",
          "Step 6: Transition as Agri-Business Consultant, Rural Marketing Manager, or Agri-Finance Analyst"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
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
        color: "#DA1313",
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
        color: "#C20000",
        content: [
          "Government: Indian Institute of Management (IIM) Ahmedabad, Indian Institute of Management (IIM) Bangalore, National Institute of Agricultural Extension Management (MANAGE) Hyderabad, Indian Agricultural Research Institute (IARI) New Delhi",
          "Private: Manipal Academy of Higher Education, Amity University Noida, Lovely Professional University (LPU) Jalandhar, Shoolini University Solan",
          "Online: Swayam/NPTEL, Coursera (Agri-Business Courses), IGNOU (Agriculture Management Programs), Udemy (Agri-Business & Supply Chain Courses)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Traditional roles in the industry",
          "New-Age & AI Driven: Emerging roles with technology",
          "Remote/Entrepreneurship: Freelance and startup opportunities"
        ]
      }
    ]
  },
  agricultural_engineering: {
    slug: "agricultural_engineering",
    badge: "Engineering the Future of Food for Class 10+",
    heading: "Agricultural Engineering",
    subheading: "Apply engineering principles to solve the Food-Energy-Water puzzle. Design drones, automated systems, and sustainable technologies for modern farming.",
    whyCards: [
      { icon: "Cpu", title: "Precision Farming", description: "Use drones for soil mapping and precision robotic harvesters that don't bruise delicate fruits.", borderColor: "#10B981" },
      { icon: "Tractor", title: "Resource Optimization", description: "Solve the Food-Energy-Water puzzle for 1.4 billion people with smart systems.", borderColor: "#059669" },
      { icon: "Droplets", title: "Smart Systems", description: "Design automated irrigation and high-tech processing systems that save water and energy.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Sustainable Innovation", description: "Transform traditional farming into a high-tech, profitable, and sustainable industry.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech) or 3 Years (Diploma)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3.5L–₹60L+", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "5.2% CAGR, $13.79B Market by 2030", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1.4B", label: "People to Feed", gradient: "from-green-500 to-green-600" },
      { value: "5.2%", label: "Industry CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Engineering solutions for modern agriculture.",
        color: "#C20000",
        content: [
          "The Brain and Hands: If a Farmer is the 'Heart' of Indian agriculture, an Agricultural Engineer is the 'Brain' and 'Hands' that make the system smarter and more powerful.",
          "Agricultural Engineering is the branch of engineering that applies the principles of science and technology to agricultural production and processing.",
          "Beyond Tractors: It's not just about tractors; it's about using drones to map soil health, designing automated irrigation systems that save every drop of water, and creating robotic harvesters that can pick delicate fruits without bruising them.",
          "Solving the Puzzle: With a population of over 1.4 billion, we need to grow more food using less land and less water. Agricultural Engineers solve the 'Food-Energy-Water' puzzle.",
          "Modern Industry: They ensure that farming is not just a tradition, but a high-tech, profitable, and sustainable industry for the 21st century.",
          "Global Priority: In today's India, this career is a global priority as we become a leader in agricultural innovation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Arjun, Agricultural Engineer at Agri-Tech Startup",
        icon: "Clock",
        description: "Real workflow of an agricultural engineer.",
        color: "#DA1313",
        content: [
          "8:30 AM - The Field Briefing: Arjun starts his day on a sprawling farm in Pune. He isn't holding a shovel; he's holding a tablet. He's checking the telemetry data from a fleet of autonomous tractors currently tilling the soil. One tractor has flagged a sensor error, and Arjun quickly recalibrates the GPS settings from his screen.",
          "10:30 AM - Drone Scouting: He launches a thermal-imaging drone to fly over the 50-acre wheat field. As the drone sends back live data, Arjun identifies a 'stressed' patch of crops that isn't getting enough nitrogen. He sends a command to the automated sprinkler system to deliver a precise dose of liquid fertilizer to only that specific patch. This is Precision Agriculture in action.",
          "1:30 PM - Designing the Future: After lunch, Arjun heads to the R&D lab. He's working on a 3D model of a new 'Solar-Powered Cold Storage' unit. In India, 40% of fresh produce is wasted due to heat. Arjun's design uses affordable, locally sourced materials and solar panels to keep vegetables fresh in remote villages without electricity.",
          "4:00 PM - The Client Meeting: He meets with a group of local farmers to explain how a new moisture-sensing probe works. He translates complex engineering jargon into simple language, showing them how they can save 30% on their water bills.",
          "6:30 PM - Data Analytics: Before leaving, Arjun reviews the day's data logs. He prepares a report for his manager on how the new robotic seeder performed compared to manual labor. As he drives home, he sees the green fields and feels proud—he didn't just 'work' today; he helped secure the food on a thousand plates."
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills Required",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Mechanical Interest: You like building things, fixing broken toys, or understanding how engines run.",
          "Analytical Mind: You enjoy Math and Physics and like using data to solve puzzles.",
          "Environmental Sensitivity: You care about nature, water conservation, and climate change.",
          "Resilience: You are comfortable spending time in the sun and dust of a farm as much as a clean, air-conditioned lab.",
          "Problem-Solving Skills: When a machine breaks or a crop fails, you don't panic—you look for the 'Why' and the 'How to fix.'"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete agricultural engineering cycle.",
        color: "#DA1313",
        content: [
          "Requirement Analysis: Talking to farmers or companies to understand a problem (e.g., 'We are losing too much water during irrigation').",
          "Design & Modeling: Using software like AutoCAD or SolidWorks to design a solution (e.g., a smart drip-irrigation valve).",
          "Prototyping: Building a small version of the machine or system in a lab.",
          "Field Testing: Taking the prototype to a real farm to see if it works under heat, rain, and mud.",
          "Quality Control: Ensuring the final product follows safety codes and is durable.",
          "Maintenance & Support: Teaching others how to use the technology and fixing it if it malfunctions."
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.Tech Route",
          "Step 1: Complete Class 12th with PCM (Physics, Chemistry, Maths)",
          "Step 2: Clear JEE/State CET and pursue B.Tech Agricultural Engineering (IITs, SAUs, GBPUAT)",
          "Step 3: Do internships at ICAR, farm machinery companies, or agri-tech startups",
          "Step 4: Learn tools — AutoCAD, MATLAB, GIS, drone technology",
          "Step 5: Pursue M.Tech or MBA in Agri-Business (optional)",
          "Step 6: Join as Agricultural Engineer, Farm Machinery Designer, or Irrigation Specialist",
          "Pathway B: Diploma + Field Entry Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Agricultural Engineering (3 years, state polytechnics)",
          "Step 3: Gain field experience — FPOs, KVKs, farm equipment dealers",
          "Step 4: Learn basics — soil testing, irrigation systems, tractor mechanics",
          "Step 5: Upgrade through lateral entry to B.Tech (optional)",
          "Step 6: Work as Junior Engineer, Field Technician, or Agri-Equipment Supervisor",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCM",
          "Step 2: Pursue B.Tech Agricultural Engineering",
          "Step 3: Clear GATE and pursue M.Tech (IITs, IARI, CIAE Bhopal)",
          "Step 4: Publish research in farm mechanization, renewable energy, or water management",
          "Step 5: Clear ARS/NET, UPSC Engineering Services, or State PSC exams",
          "Step 6: Join as Scientist at ICAR, Professor, or Government Engineer in agriculture department"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "Entry-Level (Fresher): ₹3.5 Lakhs – ₹7 Lakhs",
          "Mid-Level (5–8 years): ₹10 Lakhs – ₹18 Lakhs",
          "Senior/Leadership: ₹20 Lakhs – ₹45 Lakhs",
          "CXO/Startup Founder: ₹60 Lakhs+",
          "Salary Comparison: Metro Cities (Bengaluru, Pune) pay higher starting salaries (₹6L–₹8L) in Agri-Tech R&D centers. Tier-2/3 Cities offer starting pay (₹3.5L–₹5L) but often include housing/field allowances in manufacturing hubs.",
          "Market Growth: The industry is growing at a CAGR of over 5.2%. The fastest-growing segments are Precision Farming and Automated Machinery.",
          "Note: The Indian Agricultural Equipment market is expected to reach $13.79 Billion by 2030."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Industries: Farm Machinery (Tractors/Harvesters), Irrigation Systems, Food Processing, Agri-Tech Startups, Renewable Energy (Biofuels)",
          "Top Companies: Mahindra & Mahindra, John Deere, TAFE, Jain Irrigation, ITC, Nestlé, Amul",
          "Government Sector: ICAR (Scientist), FCI (Technical Officer), State Water Resources Departments, NABARD",
          "Remote Work: High for Design Engineers, Data Analysts, and Remote Sensing specialists",
          "International: Huge demand in the USA, Germany, and Israel for Indian engineers with expertise in tropical agriculture",
          "Top Cities: Hyderabad, Pune, Bengaluru, Delhi-NCR, Ludhiana, Coimbatore"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: "#C20000",
        content: [
          "Government Institutions: ₹50,000 – ₹2,50,000 (Total 4-year degree fees)",
          "Private Institutions: ₹4,00,000 – ₹12,00,000 (Total 4-year degree fees)",
          "Duration: 4 Years (B.Tech)",
          "Living/Hostel Costs: ₹8,000 – ₹15,000 per month in cities like Pantnagar, Ludhiana, or Coimbatore",
          "Additional Costs: High-end laptop (₹60k+), certification exams (₹5k–₹15k)"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Public/Government: IIT Kharagpur (West), Punjab Agricultural University (PAU), Ludhiana (North), Tamil Nadu Agricultural University (TNAU), Coimbatore (South), GB Pant University of Agriculture & Technology, Pantnagar (North)",
          "Private: Vellore Institute of Technology (VIT), Lovely Professional University (LPU), SRM University",
          "Distance/Online: Not recommended for B.Tech as this is a highly hands-on lab-based field"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#DA1313",
        content: [
          "Central: NSP (National Scholarship Portal), AICTE Pragati (₹50k/year for girls)",
          "ICAR: National Talent Scholarship (NTS) for students moving to a different state for studies",
          "State: e.g., Krishi Vidya Nidhi (Odisha) or MOMA scholarship for minorities",
          "Private: Corteva Agriscience Scholarship (₹25k–₹50k) for students in agri-allied streams"
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: "#C20000",
        content: [
          "ISAE (Indian Society of Agricultural Engineers): The primary professional body for networking",
          "Certifications: Drone Pilot License (DGCA approved), GIS & Remote Sensing (IIRS/ISRO), Data Analytics (Google/IBM)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: "#DA1313",
        content: [
          "Conventional: Farm Machinery Design, Irrigation Engineer, Soil & Water Conservationist",
          "New-Age: Drone Data Analyst, Precision Agriculture Specialist, Climate-Smart Systems Engineer, AI-Agriculture Specialist",
          "Freelancing: Independent Farm Consultant, Custom Hiring Center (CHC) Entrepreneur, Agri-Visualization Specialist"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: "#C20000",
        content: [
          "Physical Environment: You will often work in dusty, hot, and muddy conditions",
          "Seasonal Peak: During harvest seasons, your workload might triple",
          "Translational Gap: Designing a machine in a lab is easy; making it work for a small Indian farmer with a 1-acre plot is the real, hard challenge",
          "Field Work Demands: You will spend significant time in challenging field conditions — heat, dust, rain, and remote locations",
          "Weather Dependency: Your work is heavily dependent on weather patterns and seasonal cycles",
          "Technology Adoption: Farmers may resist new technologies; you need patience and communication skills to convince them",
          "Budget Constraints: Many farms operate on tight budgets; solutions must be affordable and practical",
          "Continuous Learning: Agricultural technology evolves rapidly; staying updated with new tools and methods is mandatory"
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends (2025–2035)",
        icon: "Sparkles",
        description: "What's next in agricultural engineering.",
        color: "#DA1313",
        content: [
          "The Drone Revolution: By 2030, drones will be used for everything from spraying pesticides to planting seeds",
          "Vertical Farming: Engineering farms inside urban skyscrapers to grow 'Zero-Mile' food",
          "AI & IoT: Sensors in the soil that 'talk' to the farmer's phone, telling them exactly when the plant is thirsty",
          "Precision Farming: Advanced data analytics and machine learning for crop optimization",
          "Renewable Energy: Integration of solar and biogas systems in agricultural operations"
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#C20000",
        content: [
          "Science & Math: Focus on Mechanics (Physics) and Geometry",
          "Coding: Learn basic Python. It's the language of AI and drone data",
          "Observation: Visit a local farm or a 'Kisan Mela.' Ask how a tractor works or why a pump fails",
          "Projects: Build a simple solar-powered lamp or a DIY watering system for your balcony plants"
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Agricultural Engineering",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: "#DA1313",
        content: [
          "Dr. A.M. Michael: A pioneer in Irrigation Engineering who revolutionized how India manages its water resources",
          "Vidyut Mohan: A young innovator (Takachar) who turned farm waste into biofuel and won the Earthshot Prize",
          "Bhavarlal Jain: Founder of Jain Irrigation; he pioneered drip irrigation in India, saving billions of liters of water",
          "M.S. Swaminathan: Though a scientist, his vision for 'Farm Mechanization' as part of the Green Revolution paved the way for modern agricultural engineering"
        ]
      }
    ]
  },
  agriculture_research: {
    slug: "agriculture_research",
    badge: "Career Exploration for Class 10+",
    heading: "Agriculture Research",
    subheading: "Explore opportunities in Agriculture Research.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Agriculture Research.", borderColor: "#10B981" },
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
        description: "Understanding Agriculture Research.",
        color: "#C20000",
        content: [
          "Agriculture Research is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real workflow of a professional.",
        color: "#DA1313",
        content: [
          "8:30 AM - Morning briefing and planning",
          "10:30 AM - Core work activities and analysis",
          "1:30 PM - Problem-solving and collaboration",
          "4:00 PM - Meetings and strategic planning",
          "6:00 PM - Review and preparation for next day"
        ]
      },
      {
        id: "skills",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
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
        color: "#DA1313",
        content: [
          "Planning and analysis",
          "Implementation and execution",
          "Monitoring and evaluation",
          "Reporting and documentation",
          "Continuous improvement"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.Sc + Research Route",
          "Step 1: Complete Class 12th with PCB/PCM",
          "Step 2: Pursue B.Sc Agriculture (4 years — SAUs, IARI, BHU, GBPUAT)",
          "Step 3: Clear ICAR-JRF/SRF and pursue M.Sc Agriculture (specialization — Agronomy, Plant Breeding, Soil Science)",
          "Step 4: Learn tools — SPSS, R, GIS, remote sensing, lab techniques",
          "Step 5: Pursue Ph.D. in Agriculture and publish research papers",
          "Step 6: Join as Scientist at ICAR/CSIR, Professor, or Research Fellow at international organizations (ICRISAT, IRRI)",
          "Pathway B: Diploma + Field Research Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Agriculture (2 years, state polytechnics)",
          "Step 3: Work at KVKs, seed companies, or fertilizer research labs",
          "Step 4: Upgrade to B.Sc Agriculture through lateral entry",
          "Step 5: Gain field research experience — crop trials, soil testing, pest management",
          "Step 6: Work as Research Assistant, Lab Technician, or Agricultural Field Officer",
          "Pathway C: B.Tech + Agri-Tech Research Route",
          "Step 1: Complete Class 12th with PCM",
          "Step 2: Pursue B.Tech Agricultural Engineering / Biotechnology",
          "Step 3: Clear GATE and pursue M.Tech (IARI, IITs, CIAE)",
          "Step 4: Specialize in precision farming, drone technology, or agri-biotech",
          "Step 5: Intern/work at agri-tech startups — CropIn, DeHaat, Ninjacart",
          "Step 6: Join as Agri-Tech Researcher, R&D Engineer, or Innovation Scientist at ICAR, private firms, or global research centers"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
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
        color: "#DA1313",
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
        color: "#C20000",
        content: [
          "Government: Top government institutions offering programs",
          "Private: Leading private institutions",
          "Online: Online learning platforms and courses"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Traditional roles in the industry",
          "New-Age & AI Driven: Emerging roles with technology",
          "Remote/Entrepreneurship: Freelance and startup opportunities"
        ]
      }
    ]
  },
  animal_veterinary_science: {
    slug: "animal_veterinary_science",
    badge: "Career Exploration for Class 10+",
    heading: "Animal / Veterinary Science",
    subheading: "Scientific study of animal biology, management, and welfare, covering domestic pets to large livestock.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Animal / Veterinary Science.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Market Demand", description: "High demand in the industry.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Work globally in this field.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Innovation", description: "Be part of industry innovation.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5.5 Years (B.V.Sc & AH)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4–50 LPA", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High Demand", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "5.5 Years", label: "Duration to Qualify", gradient: "from-green-500 to-green-600" },
      { value: "NEET", label: "Entrance Required", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Animal Science?",
        icon: "Target",
        description: "Biology, management, and welfare of animals.",
        color: "#C20000",
        content: [
          "It is the scientific study of animal biology, management, and welfare",
          "Professionals safeguard India's food supply and prevent zoonotic diseases like Rabies",
          "India is a global leader in dairy and relies on experts for ethical exports"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real workflow of a veterinary professional.",
        color: "#DA1313",
        content: [
          "8:30 AM - Morning clinic hours and patient consultations",
          "10:30 AM - Diagnostic tests and lab work",
          "1:30 PM - Surgical procedures and treatments",
          "4:00 PM - Farm visits and livestock inspections",
          "6:00 PM - Record keeping and case documentation"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Traits for veterinary excellence.",
        color: "#C20000",
        content: [
          "Deep compassion for non-verbal creatures and keen observation",
          "High stamina and physical strength for handling large livestock",
          "Calm, decisive action during emergencies",
          "Ability to simplify complex medical data for owners"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "Briefcase",
        description: "Clinical care and public safety.",
        color: "#DA1313",
        content: [
          "Clinical Care: Diagnosing ailments and executing medicinal treatment plans",
          "Preventive Health: Managing vaccinations, deworming, and tailored nutrition",
          "Public Safety: Monitoring diseases to prevent jumping from animals to humans"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment in veterinary education.",
        color: "#C20000",
        content: [
          "Govt Tuition: ₹30,000 – ₹1.5 Lakh total",
          "Private Tuition: ₹10 Lakh – ₹25 Lakh",
          "Living Costs: ₹10,000 – ₹18,000 monthly",
          "NEET Coaching: ₹50,000 – ₹1 Lakh",
          "Equipment: Budget for medical tools like stethoscopes"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.V.Sc Degree Route",
          "Step 1: Complete Class 12th with PCB (Physics, Chemistry, Biology)",
          "Step 2: Clear NEET and pursue B.V.Sc & AH (5.5 years — including 1 year internship)",
          "Step 3: Do clinical training at veterinary hospitals, dairy farms, poultry units",
          "Step 4: Learn tools — ultrasound, lab diagnostics, animal nutrition software",
          "Step 5: Register with State Veterinary Council",
          "Step 6: Work as Veterinary Doctor, Livestock Officer, or start own veterinary clinic",
          "Pathway B: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.V.Sc & AH from recognized college (IVRI, GADVASU, TANUVAS)",
          "Step 3: Clear ICAR-JRF/SRF and pursue M.V.Sc (specialization — Surgery, Pathology, Animal Genetics)",
          "Step 4: Publish research and pursue Ph.D. in Veterinary Science",
          "Step 5: Clear ARS/NET, UPSC Veterinary Services, or State PSC exams",
          "Step 6: Join as Scientist at ICAR/IVRI, Professor, Government Veterinary Officer, or WHO/FAO Consultant",
          "Pathway C: Diploma + Field Entry Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Animal Husbandry / Veterinary Science (2 years, state institutes)",
          "Step 3: Gain field experience — dairy cooperatives, poultry farms, animal shelters",
          "Step 4: Learn basics — vaccination, first aid, artificial insemination, feed management",
          "Step 5: Upgrade to B.V.Sc through lateral entry or bridge courses (optional)",
          "Step 6: Work as Veterinary Technician, Livestock Supervisor, Dairy Manager, or Animal Welfare Officer"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Aid for animal science students.",
        color: "#DA1313",
        content: [
          "Central: NSP (National Scholarship Portal), AICTE Pragati (₹50k/year for girls)",
          "ICAR: National Talent Scholarship (NTS) for students moving to a different state",
          "State: Various state-level scholarships for veterinary students",
          "Private: Zoetis Scholarship, Boehringer Ingelheim Veterinary Scholarship"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA – ₹1.5+ Crore",
          "Senior / Lead Role (10+ yrs): ₹20–50 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10–20 LPA",
          "Junior / Associate (3–5 yrs): ₹6–10 LPA",
          "Entry Level (0–2 yrs): ₹4–8 LPA",
          "Note: Private pet care & dairy sectors pay 20–40% more; govt vets stable; specialization increases income."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities: Delhi-NCR, Bengaluru, Hyderabad, Pune, Chennai, Ludhiana",
          "Top Industries: Veterinary Hospitals, Dairy (Amul), Poultry, Pharma (Zoetis), Pet Care Industry",
          "Global Demand: High in Canada, Australia, UK; demand in livestock management, pet healthcare, remote advisory roles"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Indian Veterinary Research Institute (IVRI), Bareilly; National Dairy Research Institute (NDRI), Karnal; Guru Angad Dev Veterinary & Animal Sciences University (GADVASU), Ludhiana; Maharashtra Animal & Fishery Sciences University (MAFSU), Nagpur",
          "Private: Sam Higginbottom University (SHUATS), Prayagraj; Rajiv Gandhi Institute of Veterinary Education & Research, Puducherry; Apollo College of Veterinary Medicine, Jaipur; Shoolini University, Solan",
          "Online: ICAR e-courses; Swayam/NPTEL; IGNOU (Animal Husbandry Programs); Coursera (Veterinary Science Courses)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: "#DA1313",
        content: [
          "Conventional: Government Veterinary Officer; Livestock Development Officer; Animal Nutritionist & Feed Specialist; Dairy Farm Operations Manager",
          "New-Age & AI Driven: AI-Based Animal Health Diagnostics Specialist; Precision Livestock Farming Technologist; Genetic Engineering & Cloning Researcher; IoT-Enabled Smart Dairy Management Expert",
          "Remote/Entrepreneurship: Online Veterinary Telemedicine Provider; Pet Care & Wellness Startup Founder; Freelance Animal Husbandry Consultant; Organic Dairy / Poultry Brand Entrepreneur"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Rocket",
        description: "Preparing from school for Vet school.",
        color: "#DA1313",
        content: [
          "Volunteer at local shelters or gaushalas for hands-on experience",
          "Focus intensely on Biology and Physiology",
          "Join debate clubs to refine communication skills for owners",
          "Learn digital tools used in modern veterinary diagnostics"
        ]
      }
    ]
  },
  apiculture: {
    slug: "apiculture",
    badge: "Career Exploration for Class 10+",
    heading: "Apiculture",
    subheading: "The science and business of keeping bees to produce honey and protect global pollination.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Apiculture.", borderColor: "#10B981" },
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
        title: "What is Apiculture?",
        icon: "Target",
        description: "Bee management for honey and pollination",
        color: "#C20000",
        content: [
          "Apiculture means keeping bees to produce honey and other products",
          "Beekeepers manage colonies and collect honey safely",
          "Bees help grow one-third of the food we eat through pollination",
          "India is the 7th largest honey producer with many opportunities"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real workflow of a professional.",
        color: "#DA1313",
        content: [
          "Inspection: Checking hive health weekly",
          "Harvest: Collecting honey 2–4 times yearly",
          "Pollination: Providing seasonal pollination for farms",
          "Sales: Bottling and selling honey often"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Traits for successful beekeepers",
        color: "#C20000",
        content: [
          "Deep love for nature, biology, and outdoor work",
          "Patient, calm, and ready to start your own business",
          "Good at observation and problem-solving",
          "Okay with hands-on work and occasional bee stings"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Hive health and honey harvesting",
        color: "#DA1313",
        content: [
          "Inspection: Checking hive health weekly",
          "Harvest: Collecting honey 2–4 times yearly",
          "Pollination: Providing seasonal pollination for farms",
          "Sales: Bottling and selling honey often"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "TrendingUp",
        description: "Education and starter kit costs",
        color: "#DA1313",
        content: [
          "Certificate: ₹2,000 – ₹25,000",
          "Degree (B.Sc): ₹15,000 – ₹1.5 Lakh yearly",
          "Starting Tools: ₹25,000 – ₹60,000 (Bee boxes, etc.)",
          "License (FSSAI): ₹2,000 – ₹5,000",
          "Hostel Living: ₹5,000 – ₹8,000 monthly"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.Sc Agriculture + Specialization Route",
          "Step 1: Complete Class 12th with PCB/PCM",
          "Step 2: Pursue B.Sc Agriculture / B.Sc Zoology / B.Sc Entomology",
          "Step 3: Take specialized training in Apiculture (CBRTI Pune, IARI, KVKs)",
          "Step 4: Learn skills — bee colony management, honey extraction, queen rearing",
          "Step 5: Pursue M.Sc Entomology / Apiculture for advanced knowledge",
          "Step 6: Join as Apiculture Scientist, Bee Research Officer, or Honey Quality Analyst at ICAR, KVIC, or NBHM",
          "Pathway B: Skill-Based / Entrepreneurship Route",
          "Step 1: Complete Class 10th/12th (any stream)",
          "Step 2: Attend beekeeping training at KVKs, NBHM, or state agriculture departments (free/subsidized)",
          "Step 3: Learn basics — bee box setup, seasonal management, disease control",
          "Step 4: Get FSSAI license and organic certification for honey products",
          "Step 5: Apply for government subsidies — PMEGP, NABARD, NBHM schemes",
          "Step 6: Start own beekeeping business — sell honey, beeswax, royal jelly, pollination services",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.Sc Agriculture / Zoology from recognized university",
          "Step 3: Clear ICAR-JRF and pursue M.Sc/Ph.D. in Entomology / Apiculture",
          "Step 4: Publish research in bee biology, pollination science, or honey technology",
          "Step 5: Clear ARS/NET or State PSC exams",
          "Step 6: Join as Scientist at CBRTI/ICAR, Professor, NBHM Coordinator, or FAO Bee Health Consultant"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Building2",
        description: "Financial aid for aspiring beekeepers",
        color: "#C20000",
        content: [
          "National Scholarship Scheme (NSP) for SC/ST students",
          "AICTE Pragati Scholarship for girl students",
          "ICAR Merit Scholarships for agriculture students",
          "State-specific scholarships for agriculture education",
          "Private scholarships from honey companies and NGOs"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹20 LPA – ₹80 LPA",
          "Senior / Lead Role (10+ yrs): ₹10–20 LPA",
          "Mid-Level Professional (5–8 yrs): ₹5–10 LPA",
          "Junior / Associate (3–5 yrs): ₹3–6 LPA",
          "Entry Level (0–2 yrs): ₹2–4 LPA",
          "Note: Income varies widely; entrepreneurs earn more via honey/wax sales; govt schemes (KVIC) + export markets boost earnings."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities/Regions: Punjab, Haryana, Uttar Pradesh, Himachal Pradesh, Uttarakhand, Maharashtra",
          "Top Industries: Honey Processing, Agri-Cooperatives, KVIC, FMCG (Dabur, Patanjali), Export Firms",
          "Global Demand: High in EU, USA, Middle East; demand for organic honey, pollination services, export-driven entrepreneurship"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Central Bee Research & Training Institute (CBRTI) Pune, Khadi & Village Industries Commission (KVIC) Mumbai, Punjab Agricultural University (PAU) Ludhiana, University of Agricultural Sciences (UAS) Bangalore",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Amity University Noida, Shoolini University Solan, Lovely Professional University (LPU) Jalandhar",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Certificate in Beekeeping), National Bee Board (NBB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Government Apiculture Development Officer, Bee Colony Management Specialist, Honey Processing & Quality Control Officer, Pollination Service Provider for Farms",
          "New-Age & AI Driven: AI-Powered Hive Health Monitoring Analyst, IoT-Based Smart Beekeeping Technologist, Bee Genomics & Breeding Research Scientist, Drone-Assisted Pollination Mapping Specialist",
          "Remote/Entrepreneurship: Organic Honey Brand Founder & Exporter, Online Beekeeping Training Academy Creator, Bee Venom & Apitherapy Product Entrepreneur, Freelance Apiculture & Pollination Consultant"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Seasonal risks and market issues",
        color: "#DA1313",
        content: [
          "Seasonal dependency — honey production varies with weather and flowering seasons",
          "Bee diseases — varroa mites, nosema, and colony collapse disorder",
          "Market volatility — honey prices fluctuate based on global supply",
          "Physical demands — outdoor work in all weather conditions",
          "Regulatory compliance — FSSAI standards and organic certification requirements",
          "Competition from imported honey and synthetic alternatives"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your beekeeping journey",
        color: "#C20000",
        content: [
          "Study Biology, Chemistry, and pollination topics deeply",
          "Visit local KVK (Krishi Vigyan Kendra) or bee farms",
          "Watch ICAR videos and take free digital courses",
          "Learn basic profit and loss for business operations"
        ]
      }
    ]
  },
  aquaculture: {
    slug: "aquaculture",
    badge: "Career Exploration for Class 10+",
    heading: "Aquaculture",
    subheading: "Farming aquatic organisms like fish and shrimp under controlled conditions.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Aquaculture.", borderColor: "#10B981" },
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
        title: "What is Aquaculture?",
        icon: "Target",
        description: "Farming aquatic life under controlled conditions",
        color: "#C20000",
        content: [
          "Farming organisms like fish, shrimp, and oysters under controlled conditions",
          "India is the world's 3rd largest fish producer and 4th largest exporter",
          "Government schemes target 55 lakh new jobs in this sector by 2025"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real workflow of a professional.",
        color: "#DA1313",
        content: [
          "Pre-Stocking: Preparing ponds and testing water quality",
          "Growing: Monitoring feeding and observing health daily",
          "Harvest: Sorting, packaging, and coordinating with buyers"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Traits for aquaculture success",
        color: "#C20000",
        content: [
          "Observant, patient, and physically fit for outdoor work",
          "Strong attention to detail and problem-solving skills",
          "Competency in water quality and fish nutrition",
          "Comfortable with hatchery operations and aquaculture technology"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From pond preparation to market sale",
        color: "#DA1313",
        content: [
          "Pre-Stocking: Preparing ponds and testing water quality",
          "Growing: Monitoring feeding and observing health daily",
          "Harvest: Sorting, packaging, and coordinating with buyers"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "TrendingUp",
        description: "Educational investment breakdown",
        color: "#DA1313",
        content: [
          "Diploma: ₹5,000 – ₹80,000 per year",
          "Bachelor (B.F.Sc): ₹20,000 – ₹1.5 Lakh yearly",
          "Master: ₹30,000 – ₹2 Lakh yearly",
          "Living Costs: ₹4,000 – ₹12,000 per month",
          "Ph.D: Stipends available for research students"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.F.Sc Degree Route",
          "Step 1: Complete Class 12th with PCB (Physics, Chemistry, Biology)",
          "Step 2: Clear ICAR-AIEEA/State CET and pursue B.F.Sc — Bachelor of Fisheries Science (4 years — CIFE Mumbai, SAUs, State Fisheries Colleges)",
          "Step 3: Do internships at fish hatcheries, shrimp farms, or MPEDA export units",
          "Step 4: Learn skills — water quality testing, feed management, disease diagnosis",
          "Step 5: Pursue M.F.Sc in Aquaculture / Mariculture / Fish Genetics (optional)",
          "Step 6: Join as Aquaculture Officer, Fisheries Development Officer, or Hatchery Manager",
          "Pathway B: Skill-Based / Entrepreneurship Route",
          "Step 1: Complete Class 10th/12th (any stream)",
          "Step 2: Attend aquaculture training at CIFA, NFDB, KVKs, or state fisheries departments (free/subsidized)",
          "Step 3: Learn basics — pond construction, seed selection, feeding, harvesting techniques",
          "Step 4: Get FSSAI license and aquaculture registration from CAA (Coastal Aquaculture Authority)",
          "Step 5: Apply for government subsidies — PMMSY, NFDB, NABARD, Blue Revolution schemes",
          "Step 6: Start own fish/shrimp farm — sell fresh fish, prawns, ornamental fish, or value-added products",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.F.Sc from recognized college (CIFE, KUFOS, WBUAFS)",
          "Step 3: Clear ICAR-JRF/SRF and pursue M.F.Sc/Ph.D. in Aquaculture / Fish Biotechnology",
          "Step 4: Publish research in fish breeding, aquaponics, or sustainable aquaculture",
          "Step 5: Clear ARS/NET, UPSC, or State PSC exams",
          "Step 6: Join as Scientist at CIFA/CMFRI/ICAR, Professor, State Fisheries Officer, or FAO/WorldFish Consultant"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Building2",
        description: "Financial aid for fisheries students",
        color: "#C20000",
        content: [
          "National Scholarship Scheme (NSP) for SC/ST students",
          "AICTE Pragati Scholarship for girl students",
          "ICAR Merit Scholarships for fisheries students",
          "State-specific scholarships for fisheries education",
          "Private scholarships from aquaculture companies and NGOs"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1.2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹15–40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹8–15 LPA",
          "Junior / Associate (3–5 yrs): ₹4–8 LPA",
          "Entry Level (0–2 yrs): ₹2.5–5 LPA",
          "Note: Coastal states pay more; shrimp export business boosts income; entrepreneurship (fish/shrimp farming) can exceed salaries."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities/Regions: Andhra Pradesh, Tamil Nadu, Kerala, West Bengal, Odisha, Gujarat",
          "Top Industries: Fisheries, Shrimp Export (Avanti Feeds), Hatcheries, Feed Companies, Govt Fisheries Dept",
          "Global Demand: High in Southeast Asia, Middle East, EU; demand in aquaculture tech, export management, remote monitoring"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Central Institute of Fisheries Education (CIFE) Mumbai, Central Institute of Freshwater Aquaculture (CIFA) Bhubaneswar, Central Institute of Brackishwater Aquaculture (CIBA) Chennai, Kerala University of Fisheries & Ocean Studies (KUFOS) Kochi",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Shoolini University Solan, Lovely Professional University (LPU) Jalandhar, Centurion University Odisha",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Fisheries & Aquaculture Programs), Coursera (Aquaculture & Marine Science Courses)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Fish Farm / Hatchery Manager, Aquaculture Extension Officer (State Fisheries), Shrimp & Prawn Cultivation Specialist, Aquatic Animal Health & Disease Officer",
          "New-Age & AI Driven: AI-Based Water Quality Monitoring Analyst, IoT-Enabled Smart Fish Farm Technologist, Recirculating Aquaculture Systems (RAS) Engineer, Satellite-Based Aquaculture Site Selection Specialist",
          "Remote/Entrepreneurship: Ornamental Fish Breeding & Export Entrepreneur, Online Aquaculture Training Platform Founder, Freelance Aquaculture Project Consultant, Seaweed / Algae Farming Startup Founder"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Weather risks and market volatility",
        color: "#DA1313",
        content: [
          "Weather dependency — monsoons and temperature fluctuations affect fish growth",
          "Disease outbreaks — bacterial and viral infections in fish populations",
          "Water quality management — maintaining optimal pH, oxygen, and nutrient levels",
          "Market volatility — fish prices fluctuate based on supply and demand",
          "Environmental concerns — sustainable practices and pollution control",
          "Regulatory compliance — aquaculture licensing and environmental standards"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Early steps for fish farming",
        color: "#C20000",
        content: [
          "Master Biology, Chemistry, and ecology in school",
          "Visit fish farms and join science fair competitions",
          "Take free courses on NPTEL and ICAR websites",
          "Read CMFRI and fish industry reports regularly"
        ]
      }
    ]
  },
  dairy_technology: {
    slug: "dairy_technology",
    badge: "Career Exploration for Class 10+",
    heading: "Dairy Technology",
    subheading: "High-tech processing, packaging, and distribution of milk and dairy products like cheese and yogurt.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Dairy Technology.", borderColor: "#10B981" },
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
        title: "What is Dairy Technology?",
        icon: "Target",
        description: "Scientific processing of milk into safe products",
        color: "#C20000",
        content: [
          "Focused on processing, packaging, and distribution of milk and products like cheese and yogurt",
          "Technologists act as scientists ensuring milk is safe, nutrient-dense, and spoilage-free",
          "Professionals serve as the industry's backbone, as India is the world's largest producer"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "Clock",
        description: "From procurement to cold chain logistics",
        color: "#DA1313",
        content: [
          "Procurement: Collecting and immediate cooling of raw milk",
          "Processing: Pasteurization, homogenization, and fortification",
          "Value Addition: Transforming milk into premium cheese, paneer, and ghee",
          "Quality & Logistics: Lab testing and managing the 'cold chain' for delivery"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "User",
        description: "Traits for dairy science excellence",
        color: "#C20000",
        content: [
          "Sharp attention to detail for chemical testing and consumer health",
          "Strong foundation in Biology and Chemistry with physical endurance",
          "Ability to work in cold storage or factory environments",
          "Expert problem-solving skills to troubleshoot production issues"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From procurement to cold chain logistics",
        color: "#DA1313",
        content: [
          "Procurement: Collecting and immediate cooling of raw milk",
          "Processing: Pasteurization, homogenization, and fortification",
          "Value Addition: Transforming milk into premium cheese, paneer, and ghee",
          "Quality & Logistics: Lab testing and managing the 'cold chain' for delivery"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "TrendingUp",
        description: "Investment in dairy technology degree",
        color: "#DA1313",
        content: [
          "Govt Tuition: ₹20,000 – ₹1.5 Lakh for 4 years",
          "Private Tuition: ₹5 Lakh – ₹12 Lakh total",
          "Living Costs: ₹10,000 – ₹20,000 monthly",
          "Coaching: Exam prep costs ₹50,000 – ₹1 Lakh"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: "#C20000",
        content: [
          "Pathway A: B.Tech Dairy Technology Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Clear state CET/ICAR-AIEEA and pursue B.Tech Dairy Technology (4 years — NDRI Karnal, SMC Anand, AAU, Warner College)",
          "Step 3: Do internships at dairy plants — Amul, Mother Dairy, Nestle, Britannia",
          "Step 4: Learn skills — milk processing, pasteurization, packaging, quality testing, FSSAI standards",
          "Step 5: Pursue M.Tech Dairy Technology / MBA Dairy Management (optional)",
          "Step 6: Join as Dairy Technologist, Production Manager, Quality Assurance Officer, or R&D Scientist",
          "Pathway B: Diploma + Field Entry Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Dairy Technology (2–3 years, state dairy institutes/polytechnics)",
          "Step 3: Gain hands-on experience at milk cooperatives, chilling centers, or dairy booths",
          "Step 4: Learn basics — milk collection, fat testing, paneer/curd/ghee making, cold chain management",
          "Step 5: Upgrade to B.Tech Dairy Technology through lateral entry (optional)",
          "Step 6: Work as Dairy Supervisor, Milk Plant Technician, Quality Checker, or Dairy Cooperative Manager",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Pursue B.Tech Dairy Technology from recognized institute (NDRI, SMC Anand)",
          "Step 3: Clear GATE/ICAR-JRF and pursue M.Tech/Ph.D. in Dairy Science / Food Technology",
          "Step 4: Publish research in dairy processing, value-added dairy products, or food safety",
          "Step 5: Clear ARS/NET, UPSC, or State PSC exams",
          "Step 6: Join as Scientist at NDRI/ICAR, Professor, FSSAI Officer, or Dairy Development Commissioner in government"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Building2",
        description: "Funding for dairy science students",
        color: "#C20000",
        content: [
          "National Scholarship Scheme (NSP) for SC/ST students",
          "AICTE Pragati Scholarship for girl students",
          "ICAR Merit Scholarships for dairy technology students",
          "State-specific scholarships for dairy education",
          "Private scholarships from dairy companies and NGOs"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹20–60 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10–20 LPA",
          "Junior / Associate (3–5 yrs): ₹5–10 LPA",
          "Entry Level (0–2 yrs): ₹3–6 LPA",
          "Note: Private dairy & FMCG pay 20–40% more; cooperative sector stable; MBA (Dairy/Agri) boosts growth."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities/Regions: Gujarat (Anand), Delhi-NCR, Pune, Bengaluru, Hyderabad, Ludhiana",
          "Top Industries: Dairy (Amul, Mother Dairy), FMCG (Nestlé), Food Processing, Cold Chain, Govt Dairy Boards",
          "Global Demand: High in New Zealand, Australia, EU; demand in dairy processing, supply chain, export management"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: National Dairy Research Institute (NDRI) Karnal, SMC College of Dairy Science Anand (AAU), Guru Angad Dev Veterinary & Animal Sciences University (GADVASU) Ludhiana, Warner College of Dairy Technology (SHUATS) Prayagraj",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Lovely Professional University (LPU) Jalandhar, ITM University Gwalior, Shoolini University Solan",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Dairy Technology Programs), National Dairy Development Board (NDDB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Dairy Plant Production Manager, Milk Procurement & Quality Control Officer, Dairy Product Development Technologist, Cooperative Dairy Federation Officer (AMUL/NDDB)",
          "New-Age & AI Driven: AI-Powered Milk Supply Chain Optimizer, IoT-Based Cold Chain Monitoring Specialist, Automated Dairy Processing Systems Engineer, Data-Driven Dairy Yield Prediction Analyst",
          "Remote/Entrepreneurship: Artisan Cheese / Yogurt Brand Founder, Online Dairy Technology Consulting Provider, Dairy-Based Nutraceutical Startup Entrepreneur, Freelance Dairy FSSAI Compliance Consultant"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Perishability and extreme environments",
        color: "#DA1313",
        content: [
          "Perishability — milk spoils quickly without proper cold chain management",
          "Extreme environments — working in cold storage and factory conditions",
          "Quality control — maintaining strict FSSAI and food safety standards",
          "Supply chain complexity — coordinating with farmers, processors, and distributors",
          "Seasonal variations — milk production fluctuates with seasons",
          "Competition — intense competition from large dairy corporations"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your milk science journey",
        color: "#C20000",
        content: [
          "Master Organic Chemistry and Biomolecules — the core of milk science",
          "Develop strong English communication for technical reporting",
          "Experiment at home with fermentation and temperature at safe levels"
        ]
      }
    ]
  },
  florist: {
    slug: "florist",
    badge: "🌸 Career Exploration for Class 10+",
    heading: "Florist / Floriculture",
    subheading: "Selecting, arranging, and presenting flowers for events, gifting, and hospitality.",
    whyCards: [
      { icon: "💐", title: "Creative Art", description: "Select and arrange flowers for weddings and events", borderColor: "#F59E0B" },
      { icon: "📈", title: "Booming Market", description: "India's market expected to reach ₹744 billion", borderColor: "#1E40AF" },
      { icon: "🏨", title: "Growth Drivers", description: "Driven by hotels, cafés, and online gifting", borderColor: "#6366F1" },
      { icon: "🌍", title: "Global Scale", description: "Industry valued at over USD 57 billion globally", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Creative Career", detail: "Best for nature-loving and entrepreneurial minds", color: "bg-amber-100 text-amber-700" },
      { label: "Rising Market", detail: "Massive growth expected in India by 2033", color: "bg-blue-100 text-blue-700" },
      { label: "Digital Sales", detail: "Strong focus on social media and online gifting", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹744B", label: "Projected Market (2033)", gradient: "from-amber-500 to-amber-600" },
      { value: "USD 57B", label: "Global Industry Size", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is a Florist?",
        icon: "🌸",
        description: "Art and business of flower arrangements",
        color: "#C20000",
        content: [
          "Selecting and arranging flowers for weddings, events, hotels, and gifting",
          "Combines creativity with colour theory, biology, and digital marketing",
          "Growth is driven by weddings and rising incomes in India"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "🌸",
        description: "Real workflow of a florist",
        color: "#DA1313",
        content: [
          "6:00 AM - Visit flower markets for fresh stock selection",
          "8:00 AM - Prepare arrangements for daily orders",
          "11:00 AM - Client consultations for events and weddings",
          "2:00 PM - Design custom arrangements and bouquets",
          "4:00 PM - Manage social media and online orders",
          "6:00 PM - Delivery and setup for evening events"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "🎨",
        description: "Traits for creative florists",
        color: "#C20000",
        content: [
          "Creative, nature-loving, and entrepreneurial individuals",
          "Good at customer service and teamwork",
          "Knowledge of arrangements, colours, and basic accounts",
          "Unsuitable for those avoiding early mornings or physical work"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From buying to event delivery",
        color: "#DA1313",
        content: [
          "Buying: Purchasing fresh flowers from farms or markets",
          "Design: Arranging flowers as per customer needs and events",
          "Delivery: Packing and ensuring timely delivery for fresh look",
          "Business: Handling social media, stock, and staff management"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Training and tool investment",
        color: "#DA1313",
        content: [
          "Certificate: ₹5,000 – ₹60,000",
          "Degree: ₹20,000 – ₹2 Lakh yearly",
          "Living Costs: ₹5,000 – ₹15,000 monthly",
          "Tools/Equipment: ₹3,000 – ₹10,000"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways",
        icon: "🎓",
        description: "Three routes to floriculture success",
        color: "#C20000",
        content: [
          "Pathway A: B.Sc Horticulture + Specialization Route",
          "Step 1: Complete Class 12th with PCB/PCM",
          "Step 2: Pursue B.Sc Horticulture / B.Sc Agriculture (4 years — SAUs, IARI, UAS Bangalore)",
          "Step 3: Specialize in Floriculture during graduation or take certificate courses",
          "Step 4: Learn skills — flower arrangement, bouquet making, landscape design, greenhouse management",
          "Step 5: Do internships at nurseries, export houses, or floral design studios",
          "Step 6: Join as Floriculture Officer, Floral Designer, Greenhouse Manager, or Flower Export Specialist",
          "Pathway B: Skill-Based / Entrepreneurship Route",
          "Step 1: Complete Class 10th/12th (any stream)",
          "Step 2: Attend floristry training — short courses at IIFD, IGNOU, KVKs, or private floral schools",
          "Step 3: Learn basics — flower types, colour theory, arrangement styles, preservation techniques",
          "Step 4: Practice event floristry — weddings, corporate events, festivals",
          "Step 5: Build portfolio on Instagram/social media and get FSSAI/MSME registration for business",
          "Step 6: Start own florist shop, online flower delivery service, or event decoration business",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.Sc Horticulture / B.Sc Agriculture from recognized university",
          "Step 3: Clear ICAR-JRF and pursue M.Sc/Ph.D. in Floriculture / Horticulture",
          "Step 4: Publish research in flower breeding, post-harvest technology, or tissue culture",
          "Step 5: Clear ARS/NET or State PSC exams",
          "Step 6: Join as Scientist at IARI/IIHR/ICAR, Professor, Horticulture Officer, or APEDA Floriculture Export Consultant"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Aid for floriculture and design",
        color: "#DA1313",
        content: [
          "Government scholarships for agriculture students",
          "IARI and SAU merit-based awards",
          "NABARD grants for floriculture entrepreneurs",
          "State horticulture department support"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "📊",
        description: "Salaries, growth, and opportunities",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹30 LPA – ₹1+ Crore",
          "Senior / Lead Role (10+ yrs): ₹10–30 LPA",
          "Mid-Level Professional (5–8 yrs): ₹5–10 LPA",
          "Junior / Associate (3–5 yrs): ₹3–6 LPA",
          "Entry Level (0–2 yrs): ₹2–4 LPA",
          "Note: Income varies; event/wedding florists earn more; metro cities pay 30–50% higher; creativity + branding boosts earnings."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "📍",
        description: "Top cities and industries",
        color: "#DA1313",
        content: [
          "Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Pune, Jaipur",
          "Top Industries: Event Management, Wedding Planning, Retail Flower Shops, E-commerce (Ferns N Petals), Hospitality",
          "Global Demand: High in UAE, Europe; freelancing, luxury events, export floriculture opportunities"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "🏛️",
        description: "Top institutions across India",
        color: "#C20000",
        content: [
          "Government: Indian Agricultural Research Institute (IARI) New Delhi, Tamil Nadu Agricultural University (TNAU) Coimbatore, Dr. YS Parmar University of Horticulture & Forestry Solan, University of Horticultural Sciences (UHS) Bagalkot",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Amity University Noida, Lovely Professional University (LPU) Jalandhar, Shoolini University Solan",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Floriculture & Landscaping Programs), National Horticulture Board (NHB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "💼",
        description: "Various career roles",
        color: "#DA1313",
        content: [
          "Conventional",
          "Floriculture Research Scientist (ICAR/SAU)",
          "Commercial Flower Farm Manager",
          "Floral Designer for Events & Weddings",
          "Flower Auction & Wholesale Market Officer",
          "New-Age & AI Driven",
          "AI-Optimized Greenhouse Floriculture Specialist",
          "Drone-Based Flower Crop Health Analyst",
          "IoT-Enabled Climate Control Polyhouse Technologist",
          "Data-Driven Floral Demand Forecasting Analyst",
          "Remote/Entrepreneurship",
          "Online Flower Delivery Platform Founder",
          "Freelance Wedding & Event Floral Designer",
          "Dried & Preserved Flower Art Entrepreneur",
          "Exotic / Organic Flower Export Business Owner"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Perishability and seasonal variation",
        color: "#C20000",
        content: [
          "Flower perishability requires careful handling and storage",
          "Seasonal price fluctuations affect profitability",
          "High competition in urban markets",
          "Weather dependency for crop quality",
          "Need for consistent customer relationships"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Early steps for budding florists",
        color: "#DA1313",
        content: [
          "Study botany, colour theory, and art in school",
          "Arrange flowers at home and build a photo portfolio",
          "Start an Instagram page for your designs early",
          "Join art fairs and workshops to understand market trends"
        ]
      }
    ]
  },
  food_science: {
    slug: "food_science",
    badge: "🍎 Career Exploration for Class 10+",
    heading: "Food Science",
    subheading: "Ensuring food is safe, nutritious, and long-lasting through scientific innovation.",
    whyCards: [
      { icon: "🛡️", title: "Safety First", description: "Ensure food is safe and nutritional", borderColor: "#F59E0B" },
      { icon: "🔬", title: "Science Edge", description: "Study biological and chemical makeup of food", borderColor: "#1E40AF" },
      { icon: "🧊", title: "Preservation", description: "Apply technology to distribution and storage", borderColor: "#6366F1" },
      { icon: "🍩", title: "Healthy Snacks", description: "Innovative snacks and crop fortification", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Spoilage Solver", detail: "Critical role in reducing India's 30% spoilage", color: "bg-amber-100 text-amber-700" },
      { label: "4-Year B.Tech", detail: "Engineering path for food technology", color: "bg-blue-100 text-blue-700" },
      { label: "High Impact", detail: "Vital bridge between farms and consumers", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "30%", label: "India Spoilage Rate", gradient: "from-amber-500 to-amber-600" },
      { value: "100%", label: "Fee Waiver (NIFTEM)", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Food Science?",
        icon: "🍎",
        description: "Science of making food safe and nutritious",
        color: "#C20000",
        content: [
          "Critical field for reducing India's 30% food spoilage rate",
          "Studies biological makeup and applies research to preserve food",
          "Creates healthier snacks and manages global food security"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "🍎",
        description: "Real workflow of a food scientist",
        color: "#DA1313",
        content: [
          "7:00 AM - Lab setup and equipment calibration",
          "9:00 AM - Conduct food safety and quality tests",
          "12:00 PM - Analyze data and document results",
          "2:00 PM - Collaborate with production teams",
          "4:00 PM - Develop new recipes and formulations",
          "6:00 PM - Review compliance and safety protocols"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits of a food scientist",
        color: "#C20000",
        content: [
          "Scientific curiosity for Biology, Chemistry, and data",
          "Keen palette and sharp observational skills",
          "Meticulous measurements and unwavering ethics",
          "Creativity to innovate plant-based alternatives"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From recipe innovation to packaging",
        color: "#DA1313",
        content: [
          "Development: Innovating and testing new recipes in labs",
          "Processing: Using thermal or drying techniques for preservation",
          "Quality Assurance: Hourly testing for safety compliance",
          "Packaging: Designing attractive, secure containers"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Educational investment in food science",
        color: "#DA1313",
        content: [
          "B.Tech Tuition: ₹2 Lakh – ₹8 Lakh total",
          "Diploma: ₹50,000 – ₹2 Lakh",
          "Living Costs: ₹10,000 – ₹20,000 monthly",
          "Lab Equipment & Materials: ₹5,000 – ₹15,000"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways",
        icon: "🎓",
        description: "Three routes to food science success",
        color: "#C20000",
        content: [
          "Pathway A: B.Tech Food Technology Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Pursue B.Tech Food Technology (CFTRI, NIFTEM)",
          "Step 3: Intern at Nestle, ITC, Britannia, Parle",
          "Step 4: Learn HACCP, FSSAI standards, food processing",
          "Step 5: Pursue M.Tech Food Technology (optional)",
          "Step 6: Join as Food Technologist or R&D Scientist",
          "Pathway B: Diploma + Skill-Based Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Food Processing/Technology",
          "Step 3: Gain experience at food plants, bakeries",
          "Step 4: Learn food safety, packaging, cold chain",
          "Step 5: Get FOSTAC or ISO 22000 certification",
          "Step 6: Work as Quality Checker or Production Supervisor",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Pursue B.Tech/B.Sc Food Science",
          "Step 3: Clear GATE/ICAR-JRF, pursue M.Tech/Ph.D.",
          "Step 4: Research food fortification, nutraceuticals, food safety",
          "Step 5: Clear ARS/NET or UPSC exams",
          "Step 6: Join as Scientist at CFTRI/ICAR or Professor"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Grants for food tech students",
        color: "#DA1313",
        content: [
          "NIFTEM: 100% fee waiver plus monthly stipend",
          "Corteva scholarship for girls' education costs",
          "Aditya Birla and Foundation for Excellence aid",
          "ICAR merit-based scholarships"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "📊",
        description: "Salaries, growth, and opportunities",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹70 LPA – ₹2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹25–70 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12–25 LPA",
          "Junior / Associate (3–5 yrs): ₹6–12 LPA",
          "Entry Level (0–2 yrs): ₹3–7 LPA",
          "Note: FMCG & MNCs pay 20–50% more; metro cities higher; specialization (food safety, R&D) boosts salary."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "📍",
        description: "Top cities and industries",
        color: "#DA1313",
        content: [
          "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Pune, Ahmedabad",
          "Top Industries: FMCG (Nestlé, ITC, HUL), Food Processing, Quality Testing Labs, Packaging, Startups",
          "Global Demand: High in USA, Canada, EU; roles in food safety, R&D, export quality, remote consulting"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "🏛️",
        description: "Top institutions across India",
        color: "#C20000",
        content: [
          "Government:",
          "Central Food Technological Research Institute (CFTRI), Mysuru",
          "Indian Institute of Technology (IIT), Kharagpur",
          "National Institute of Food Technology Entrepreneurship & Management (NIFTEM), Sonipat",
          "University of Mysore, Mysuru",
          "Private:",
          "Lovely Professional University (LPU), Jalandhar",
          "Amity University, Noida",
          "SRM Institute of Science and Technology, Chennai",
          "Shoolini University, Solan",
          "Online:",
          "Swayam/NPTEL",
          "IGNOU (Food Science & Nutrition Programs)",
          "ICAR e-courses",
          "Coursera (Food Science & Technology Courses)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "💼",
        description: "Various career roles",
        color: "#DA1313",
        content: [
          "Conventional",
          "Food Quality Assurance & Safety Officer",
          "Food Processing Plant Technologist",
          "FSSAI Regulatory Affairs Specialist",
          "Sensory Evaluation & Product Development Scientist",
          "New-Age & AI Driven",
          "AI-Powered Food Formulation Scientist",
          "Blockchain-Based Food Traceability Analyst",
          "Lab-Grown / Cultured Protein Technologist",
          "Smart Packaging & Nano-Technology Food Engineer",
          "Remote/Entrepreneurship",
          "Health Food / Superfood Brand Founder",
          "Freelance FSSAI & FDA Compliance Consultant",
          "Online Food Science Education Platform Creator",
          "Plant-Based / Vegan Product Startup Entrepreneur"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Zero margin for error",
        color: "#C20000",
        content: [
          "Food safety regulations are strict and constantly evolving",
          "Zero tolerance for contamination or quality issues",
          "Need for continuous compliance with FSSAI and international standards",
          "Pressure to innovate while maintaining safety",
          "Supply chain complexity and traceability requirements"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Early steps in food technology",
        color: "#DA1313",
        content: [
          "Study chemistry and biology thoroughly in school",
          "Learn about food preservation and nutrition basics",
          "Participate in science fairs with food-related projects",
          "Read about food safety standards and innovations"
        ]
      }
    ]
  },
  horticulture: {
    slug: "horticulture",
    badge: "🌳 Career Exploration for Class 10+",
    heading: "Horticulture",
    subheading: "Art and science of growing plants for ornament, food, or medicine, with a focus on high-value yields.",
    whyCards: [
      { icon: "🌳", title: "High-Value Crops", description: "Focus on fruits, vegetables, flowers, and medicinal herbs", borderColor: "#F59E0B" },
      { icon: "🍏", title: "Nutritional Security", description: "Ensuring high-yield orchards and veggie farms", borderColor: "#1E40AF" },
      { icon: "🔬", title: "Modern Science", description: "Tissue culture, biotechnology, and post-harvest tech", borderColor: "#6366F1" },
      { icon: "💰", title: "Booming Market", description: "Organic exports and high-end landscaping are growing", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "High Growth", detail: "Market for organic and high-end plants is rising", color: "bg-amber-100 text-amber-700" },
      { label: "B.Sc/B.Tech", detail: "4-year degree in Horticulture Science", color: "bg-blue-100 text-blue-700" },
      { label: "Export Focus", detail: "Strong focus on global standards and shipping", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "₹15+ LPA", label: "Senior Salary", gradient: "from-amber-500 to-amber-600" },
      { value: "₹744B", label: "Projected Industry", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Horticulture?",
        icon: "🌳",
        description: "The science of intensive plant cultivation",
        color: "#C20000",
        content: [
          "Focused on growing fruits, vegetables, flowers, and medicinal plants",
          "Combines artistic landscape design with biological engineering",
          "Essential for high-yield farming in small areas"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "🌳",
        description: "Real workflow of a horticulturist",
        color: "#DA1313",
        content: [
          "6:00 AM - Inspect crops and check irrigation systems",
          "8:00 AM - Monitor plant health and pest management",
          "11:00 AM - Conduct soil testing and nutrient analysis",
          "1:00 PM - Plan breeding and propagation activities",
          "3:00 PM - Manage greenhouse and nursery operations",
          "5:00 PM - Document growth data and prepare reports"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for horticultural success",
        color: "#C20000",
        content: [
          "Strong interest in plant biology and environmental science",
          "Patience to observe growth cycles over months and years",
          "Creative eye for landscape and floral arrangement",
          "Business acumen for nursery and export management"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From seed selection to harvest logistics",
        color: "#DA1313",
        content: [
          "Cultivation: Managing soil health and precise irrigation",
          "Breeding: Developing pest-resistant and high-yield varieties",
          "Design: Planning gardens, parks, and urban green spaces",
          "Logistics: Managing the supply chain for perishable goods"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Educational investment in horticulture",
        color: "#DA1313",
        content: [
          "Govt Tuition: ₹20,000 – ₹1.5 Lakh total for 4 years",
          "Private Tuition: ₹5 Lakh – ₹12 Lakh total",
          "Living Costs: ₹10,000 – ₹25,000 monthly",
          "Nursery Tools: ₹5,000 – ₹15,000 for personal kits"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways",
        icon: "🎓",
        description: "Three routes to horticultural success",
        color: "#C20000",
        content: [
          "Pathway A: B.Sc Horticulture Route",
          "Step 1: Complete Class 12th with PCB/PCM",
          "Step 2: Pursue B.Sc Horticulture (IARI, UAS, SAUs)",
          "Step 3: Intern at nurseries, plantations, export houses",
          "Step 4: Learn landscaping, greenhouse management, organic farming",
          "Step 5: Pursue M.Sc Horticulture or MBA Agri-Business",
          "Step 6: Join as Horticulture Officer or Plantation Manager",
          "Pathway B: Diploma + Skill-Based Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Horticulture (state polytechnics)",
          "Step 3: Gain experience at nurseries, KVKs, farms",
          "Step 4: Learn fruit/vegetable cultivation, drip irrigation, composting",
          "Step 5: Get organic certification or MSME registration",
          "Step 6: Work as Nursery Manager or start own business",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.Sc Horticulture from recognized university",
          "Step 3: Clear ICAR-JRF, pursue M.Sc/Ph.D. Horticulture",
          "Step 4: Research plant breeding, post-harvest technology",
          "Step 5: Clear ARS/NET or State PSC exams",
          "Step 6: Join as Scientist at IIHR/ICAR or Professor"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Funding for future horticulturists",
        color: "#DA1313",
        content: [
          "Government scholarships for agriculture students",
          "IARI and SAU merit-based awards",
          "NABARD grants for horticulture entrepreneurs",
          "State horticulture department support"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "📊",
        description: "Salaries, growth, and opportunities",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1.2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹15–40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹8–15 LPA",
          "Junior / Associate (3–5 yrs): ₹4–8 LPA",
          "Entry Level (0–2 yrs): ₹2.5–5 LPA",
          "Note: Floriculture/export firms pay 20–40% more; metro landscaping pays higher; greenhouse, hydroponics skills boost income."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "📍",
        description: "Top cities and industries",
        color: "#DA1313",
        content: [
          "Top Cities/Regions: Bengaluru, Pune, Hyderabad, Delhi-NCR, Himachal, Uttarakhand",
          "Top Industries: Floriculture, Landscaping, Nurseries, Agri-Exports, Govt Horticulture Dept",
          "Global Demand: High in Netherlands, UAE, Australia; demand in greenhouse tech, export farming, urban landscaping"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "🏛️",
        description: "Top institutions across India",
        color: "#C20000",
        content: [
          "Government:",
          "Indian Agricultural Research Institute (IARI), New Delhi",
          "Dr. YS Parmar University of Horticulture & Forestry, Solan",
          "University of Horticultural Sciences (UHS), Bagalkot",
          "Tamil Nadu Agricultural University (TNAU), Coimbatore",
          "Private:",
          "Sam Higginbottom University (SHUATS), Prayagraj",
          "Amity University, Noida",
          "Lovely Professional University (LPU), Jalandhar",
          "Shoolini University, Solan",
          "Online:",
          "ICAR e-courses",
          "Swayam/NPTEL",
          "IGNOU (Horticulture Programs)",
          "National Horticulture Board (NHB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "💼",
        description: "Various career roles",
        color: "#DA1313",
        content: [
          "Conventional",
          "Horticulture Development Officer (State/Central Govt)",
          "Fruit & Vegetable Production Specialist",
          "Plantation Crop Estate Manager",
          "Post-Harvest Technology & Storage Officer",
          "New-Age & AI Driven",
          "AI-Based Crop Disease Detection Specialist",
          "Vertical Farming & Hydroponics Technologist",
          "Drone-Assisted Orchard Management Analyst",
          "IoT-Enabled Smart Greenhouse Systems Engineer",
          "Remote/Entrepreneurship",
          "Organic Farm-to-Table Brand Founder",
          "Freelance Landscape & Garden Design Consultant",
          "Exotic Fruit / Herb Export Business Owner",
          "Online Nursery & Plant E-Commerce Entrepreneur"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Pests and climate unpredictability",
        color: "#C20000",
        content: [
          "Pest and disease management requires constant vigilance",
          "Climate change impacts crop yields and growing seasons",
          "Market price volatility affects profitability",
          "Labor availability and management challenges",
          "Need for continuous innovation and adaptation"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap for budding plant scientists",
        color: "#DA1313",
        content: [
          "Master plant anatomy and soil chemistry in school",
          "Start a kitchen garden or maintain a nursery at home",
          "Visit local botanical gardens and high-tech farms"
        ]
      }
    ]
  },
  poultry: {
    slug: "poultry",
    badge: "🍗 Career Exploration for Class 10+",
    heading: "Poultry Science",
    subheading: "Commercial management of birds like chickens and ducks for meat and egg production.",
    whyCards: [
      { icon: "🍗", title: "Protein Source", description: "Vital role in affordable nutrition for millions", borderColor: "#F59E0B" },
      { icon: "🤖", title: "Automation", description: "Automated feeding and climate control systems", borderColor: "#1E40AF" },
      { icon: "📈", title: "Fast Returns", description: "Quick growth cycles and rapid ROI", borderColor: "#6366F1" },
      { icon: "🛡️", title: "Bio-Security", description: "High-tech health management and safety", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Protein Backbone", detail: "Essential for India's food security", color: "bg-amber-100 text-amber-700" },
      { label: "Tech-Driven", detail: "Modern farms use AI and IoT for monitoring", color: "bg-blue-100 text-blue-700" },
      { label: "Massive Industry", detail: "One of the fastest-growing agri-sectors", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "No. 3", label: "Global Egg Producer", gradient: "from-amber-500 to-amber-600" },
      { value: "₹1.2L Cr", label: "Industry Valuation", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Poultry Science?",
        icon: "🍗",
        description: "Science-led bird rearing for food",
        color: "#C20000",
        content: [
          "Focuses on breeding, hatching, and raising domestic birds",
          "Ensures meat and egg production meets health standards",
          "Utilizes advanced genetics and nutritional planning"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "🍗",
        description: "Real workflow of a poultry manager",
        color: "#DA1313",
        content: [
          "5:00 AM - Check bird health and farm conditions",
          "7:00 AM - Monitor feeding and water systems",
          "10:00 AM - Conduct health inspections and vaccinations",
          "1:00 PM - Manage egg collection and grading",
          "3:00 PM - Oversee biosecurity and sanitation",
          "5:00 PM - Record production data and plan next day"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "🎯",
        description: "Traits for poultry management",
        color: "#C20000",
        content: [
          "Resilience to work in farm environments and odd hours",
          "Analytical mind to track feed-to-meat conversion rates",
          "Strong focus on hygiene and disease prevention",
          "Entrepreneurial spirit for farm ownership"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "Managing bird health and production cycles",
        color: "#DA1313",
        content: [
          "Nutrition: Formulating precise feed balances",
          "Health Control: Implementing vaccines and biosecurity",
          "Operations: Managing automated farm environments",
          "Marketing: Connecting with meat and egg supply chains"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment in poultry education",
        color: "#DA1313",
        content: [
          "Diploma/Cert: ₹10,000 – ₹50,000",
          "Degree Path: ₹3 Lakh – ₹8 Lakh total",
          "Training: Specialized workshops cost ₹5k-15k"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways",
        icon: "🎓",
        description: "Three routes to poultry success",
        color: "#C20000",
        content: [
          "Pathway A: B.V.Sc / B.Sc Poultry Science Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.V.Sc or B.Sc Poultry Science (CARI, SAUs)",
          "Step 3: Intern at poultry farms, hatcheries, feed mills",
          "Step 4: Learn broiler/layer management, nutrition, disease control",
          "Step 5: Pursue M.V.Sc Poultry Science or MBA Agri-Business",
          "Step 6: Join as Poultry Manager or Production Specialist",
          "Pathway B: Diploma + Entrepreneurship Route",
          "Step 1: Complete Class 10th/12th (any stream)",
          "Step 2: Attend poultry training at CARI, KVKs, NABARD",
          "Step 3: Learn basics — chick rearing, feeding, vaccination",
          "Step 4: Get FSSAI license and poultry farm registration",
          "Step 5: Apply for subsidies — NABARD, PMMSY, NLM schemes",
          "Step 6: Start own poultry farm — broiler, layer, or desi breeds",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.V.Sc from recognized veterinary college",
          "Step 3: Clear ICAR-JRF, pursue M.V.Sc/Ph.D. Poultry Science",
          "Step 4: Research poultry genetics, nutrition, disease management",
          "Step 5: Clear ARS/NET or State PSC exams",
          "Step 6: Join as Scientist at CARI/ICAR or Professor"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Support for poultry science",
        color: "#DA1313",
        content: [
          "Government scholarships for veterinary and agriculture students",
          "ICAR merit-based awards",
          "NABARD grants for poultry entrepreneurs",
          "State animal husbandry department support"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "📊",
        description: "Salaries, growth, and opportunities",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1.5+ Crore",
          "Senior / Lead Role (10+ yrs): ₹15–40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹8–15 LPA",
          "Junior / Associate (3–5 yrs): ₹4–8 LPA",
          "Entry Level (0–2 yrs): ₹2.5–5 LPA",
          "Note: Income varies; poultry farm owners earn more; contract farming stable; metro-integrated supply chains pay higher."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "📍",
        description: "Top cities and industries",
        color: "#DA1313",
        content: [
          "Top Regions: Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Punjab, Haryana",
          "Top Industries: Poultry Farms (Suguna, Venky's), Feed Companies, Hatcheries, Processing Units, Retail Chains",
          "Global Demand: High in Middle East, Africa; demand in poultry management, processing, export logistics, advisory roles"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "🏛️",
        description: "Top institutions across India",
        color: "#C20000",
        content: [
          "Government:",
          "Central Poultry Development Organisation (CPDO), Chandigarh",
          "Indian Veterinary Research Institute (IVRI), Bareilly",
          "Guru Angad Dev Veterinary & Animal Sciences University (GADVASU), Ludhiana",
          "Tamil Nadu Veterinary & Animal Sciences University (TANUVAS), Chennai",
          "Private:",
          "Sam Higginbottom University (SHUATS), Prayagraj",
          "Lovely Professional University (LPU), Jalandhar",
          "Amity University, Noida",
          "Shoolini University, Solan",
          "Online:",
          "ICAR e-courses",
          "Swayam/NPTEL",
          "IGNOU (Poultry Farming Programs)",
          "National Institute of Open Schooling (NIOS) Poultry Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "💼",
        description: "Various career roles",
        color: "#DA1313",
        content: [
          "Conventional",
          "Poultry Farm Production Manager",
          "Poultry Feed Formulation Specialist",
          "Poultry Health & Disease Management Officer",
          "Hatchery Operations & Breeding Manager",
          "New-Age & AI Driven",
          "AI-Powered Poultry Flock Monitoring Analyst",
          "IoT-Based Smart Poultry House Technologist",
          "Automated Egg Grading & Sorting Systems Engineer",
          "Data-Driven Poultry Growth Optimization Specialist",
          "Remote/Entrepreneurship",
          "Country / Desi Poultry Brand Founder",
          "Freelance Poultry Farm Setup Consultant",
          "Online Poultry Farming Training Academy Creator",
          "Value-Added Poultry Products Startup Entrepreneur"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Viral risks and market price swings",
        color: "#C20000",
        content: [
          "Disease outbreaks like avian flu pose significant risks",
          "Market price volatility affects profitability",
          "Biosecurity requirements are strict and costly",
          "Feed cost fluctuations impact margins",
          "Environmental and waste management concerns"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap to poultry expertise",
        color: "#DA1313",
        content: [
          "Study avian biology and genetics in school",
          "Visit poultry research labs or modern farms",
          "Learn basic farm accounting and stock management"
        ]
      }
    ]
  },
  sericulture: {
    slug: "sericulture",
    badge: "🐛 Career Exploration for Class 10+",
    heading: "Sericulture",
    subheading: "Cultivation of silkworms to produce luxury silk fiber, supporting rural economies.",
    whyCards: [
      { icon: "🐛", title: "Silk Artistry", description: "Creating raw silk from silkworm cocoons", borderColor: "#F59E0B" },
      { icon: "🌾", title: "Rural Growth", description: "Empowering millions of rural households", borderColor: "#1E40AF" },
      { icon: "👗", title: "Eco-Luxury", description: "Sustainable alternative to synthetic fabrics", borderColor: "#6366F1" },
      { icon: "🌍", title: "Export Power", description: "India is a major global silk exporter", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Silk Hub", detail: "India is the 2nd largest producer globally", color: "bg-amber-100 text-amber-700" },
      { label: "High Employment", detail: "80 lakh+ people employed in silk industry", color: "bg-blue-100 text-blue-700" },
      { label: "Rural Impact", detail: "Vital for rural and tribal livelihoods", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "No. 2", label: "Global Producer", gradient: "from-amber-500 to-amber-600" },
      { value: "8M+", label: "People Employed", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Sericulture?",
        icon: "🐛",
        description: "Production of raw silk via silkworms",
        color: "#C20000",
        content: [
          "Focuses on rearing silkworms and mulberry cultivation",
          "Integral to India's textile and luxury heritage",
          "Combines agriculture with high-end fabric technology"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "🐛",
        description: "Real workflow of a sericulturist",
        color: "#DA1313",
        content: [
          "6:00 AM - Check mulberry leaf quality and harvest",
          "8:00 AM - Monitor silkworm rearing conditions",
          "11:00 AM - Maintain temperature and humidity levels",
          "1:00 PM - Inspect cocoon development",
          "3:00 PM - Prepare cocoons for reeling",
          "5:00 PM - Record production data and plan next cycle"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "🔬",
        description: "Traits for sericulture success",
        color: "#C20000",
        content: [
          "Interest in entomology (study of insects) and biology",
          "Patience for intensive indoor rearing processes",
          "Deep empathy for rural development and craft",
          "Eye for detail in silk quality and grading"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "From mulberry farms to reeling units",
        color: "#DA1313",
        content: [
          "Farming: Cultivating mulberry leaves for worm feed",
          "Rearing: Managing temperature for silkworm growth",
          "Harvest: Collecting cocoons for silk extraction",
          "Reeling: Unwinding silk threads using machines"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Investment in sericulture training",
        color: "#DA1313",
        content: [
          "Certificate/Short Course: ₹5,000 – ₹20,000",
          "B.Sc Sericulture: ₹2 Lakh – ₹5 Lakh total",
          "Govt training is often free or highly subsidized"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways",
        icon: "🎓",
        description: "Three routes to sericulture success",
        color: "#C20000",
        content: [
          "Pathway A: B.Sc Sericulture Route",
          "Step 1: Complete Class 12th with PCB/PCM",
          "Step 2: Pursue B.Sc Sericulture (Mysore University, UAS, SAUs)",
          "Step 3: Intern at silk farms, CSB centres, reeling units",
          "Step 4: Learn silkworm rearing, mulberry cultivation, silk reeling",
          "Step 5: Pursue M.Sc Sericulture or MBA Agri-Business",
          "Step 6: Join as Sericulture Officer or Silk Production Manager",
          "Pathway B: Diploma + Entrepreneurship Route",
          "Step 1: Complete Class 10th/12th (any stream)",
          "Step 2: Attend training at CSB, KVKs, state sericulture departments",
          "Step 3: Learn basics — mulberry farming, worm rearing, cocoon harvesting",
          "Step 4: Get MSME registration and silk mark certification",
          "Step 5: Apply for subsidies — CSB, NABARD, CDP schemes",
          "Step 6: Start own silk farm or cocoon trading business",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCB",
          "Step 2: Pursue B.Sc Sericulture/Zoology from recognized university",
          "Step 3: Clear ICAR-JRF, pursue M.Sc/Ph.D. in Sericulture",
          "Step 4: Research silkworm genetics, disease control, silk technology",
          "Step 5: Clear ARS/NET or State PSC exams",
          "Step 6: Join as Scientist at CSRTI/CSB or Professor"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Grants for silk science",
        color: "#DA1313",
        content: [
          "Government scholarships for agriculture students",
          "Central Silk Board (CSB) merit-based awards",
          "NABARD grants for sericulture entrepreneurs",
          "State sericulture department support"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "📊",
        description: "Salaries, growth, and opportunities",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹25 LPA – ₹1 Crore",
          "Senior / Lead Role (10+ yrs): ₹10–25 LPA",
          "Mid-Level Professional (5–8 yrs): ₹5–10 LPA",
          "Junior / Associate (3–5 yrs): ₹3–6 LPA",
          "Entry Level (0–2 yrs): ₹2–4 LPA",
          "Note: Income varies; entrepreneurs earn more via silk production; govt schemes + export markets boost earnings."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "📍",
        description: "Top cities and industries",
        color: "#DA1313",
        content: [
          "Top Regions: Karnataka, Andhra Pradesh, Tamil Nadu, West Bengal, Assam, Jammu & Kashmir",
          "Top Industries: Silk Production, Handloom/Textile, Sericulture Dept, KVIC, Export Firms",
          "Global Demand: High in China, Italy, Japan; demand in silk processing, export trade, rural entrepreneurship"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "🏛️",
        description: "Top institutions across India",
        color: "#C20000",
        content: [
          "Government:",
          "Central Silk Board (CSB), Bangalore",
          "Central Sericultural Research & Training Institute (CSRTI), Mysuru",
          "University of Agricultural Sciences (UAS), Bangalore",
          "Assam Agricultural University (AAU), Jorhat",
          "Private:",
          "Sam Higginbottom University (SHUATS), Prayagraj",
          "Lovely Professional University (LPU), Jalandhar",
          "Amity University, Noida",
          "Shoolini University, Solan",
          "Online:",
          "ICAR e-courses",
          "Swayam/NPTEL",
          "IGNOU (Sericulture Programs)",
          "Central Silk Board (CSB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "💼",
        description: "Various career roles",
        color: "#DA1313",
        content: [
          "Conventional",
          "Sericulture Development Officer (State/Central Govt)",
          "Silkworm Rearing & Breeding Specialist",
          "Silk Reeling & Processing Unit Manager",
          "Central Silk Board Research Scientist",
          "New-Age & AI Driven",
          "AI-Based Silkworm Disease Detection Analyst",
          "IoT-Enabled Smart Silkworm Rearing Technologist",
          "Genetic Improvement & Biotech Silk Researcher",
          "Automated Silk Quality Grading Systems Engineer",
          "Remote/Entrepreneurship",
          "Handloom Silk Brand Founder & Exporter",
          "Freelance Sericulture Project Consultant",
          "Online Silk Craft & Training Platform Creator",
          "Organic / Ahimsa Silk Startup Entrepreneur"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "⚠️",
        description: "Pests and labor intensity",
        color: "#C20000",
        content: [
          "Silkworm diseases and pest management are critical",
          "Labor-intensive process requires skilled workers",
          "Market price volatility for raw silk",
          "Climate sensitivity affects mulberry and worm rearing",
          "Competition from synthetic fibers and other countries"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Roadmap to silk mastery",
        color: "#DA1313",
        content: [
          "Learn about insect biology and textile fibers in school",
          "Visit silk cooperatives or Government Grainage centers",
          "Study the history of silk trade and global fashion trends"
        ]
      }
    ]
  },
  vertical_farming: {
    slug: "vertical_farming",
    badge: "🏙️ Career Exploration for Class 10+",
    heading: "Vertical Farming",
    subheading: "Growing crops in stacked layers indoors using hydroponics, aeroponics, and IoT.",
    whyCards: [
      { icon: "🏙️", title: "Urban Future", description: "Grow food in cities with zero soil requirement", borderColor: "#F59E0B" },
      { icon: "💧", title: "90% Water Savings", description: "Massive eco-efficiency and water conservation", borderColor: "#1E40AF" },
      { icon: "🧪", title: "Tech-Savvy", description: "Control nutrients, light, and climate precisely", borderColor: "#6366F1" },
      { icon: "🔋", title: "Year-Round", description: "Harvest fresh food regardless of outside weather", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Soilless Farming", detail: "Grow plants in air or nutrient-rich water", color: "bg-amber-100 text-amber-700" },
      { label: "Urban Impact", detail: "Solving fresh food access in crowded cities", color: "bg-blue-100 text-blue-700" },
      { label: "High-Tech", detail: "Requires knowledge of IoT and climate control", color: "bg-indigo-100 text-indigo-700" }
    ],
    statCards: [
      { value: "90%", label: "Water Saved", gradient: "from-amber-500 to-amber-600" },
      { value: "₹40+ LPA", label: "Top Designer Salary", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Vertical Farming?",
        icon: "🏙️",
        description: "High-tech urban agriculture",
        color: "#C20000",
        content: [
          "Growing crops in vertically stacked layers without soil",
          "Uses Hydroponics (water) or Aeroponics (mist) for nutrients",
          "Essential for future food security in dense urban areas"
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life",
        icon: "⏰",
        description: "Real workflow of a vertical farm professional",
        color: "#DA1313",
        content: [
          "6:00 AM - Check farm sensors and climate control systems",
          "8:00 AM - Monitor nutrient levels and pH balance",
          "10:00 AM - Inspect crop health and growth progress",
          "1:00 PM - Manage harvesting and packaging operations",
          "3:00 PM - Analyze yield data and optimize growing conditions",
          "5:00 PM - Document daily operations and plan next day"
        ]
      },
      {
        id: "who",
        title: "Who Should Consider This Career?",
        icon: "🎯",
        description: "Traits for the future farmer",
        color: "#C20000",
        content: [
          "Interest in both agriculture and digital technology",
          "Precision-oriented mind for nutrient management",
          "Passion for sustainability and resource conservation",
          "Comfortable with IoT, sensors, and LED lighting tech"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Work Process",
        icon: "📋",
        description: "Designing and managing indoor farms",
        color: "#DA1313",
        content: [
          "System Design: Placing layers and installing lights/pipes",
          "Monitoring: Tracking pH, water temp, and light via tablets",
          "Nutrients: Mixing precise mineral cocktails for plants",
          "Maintenance: Maintaining complex pumps and electronics"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "💰",
        description: "Cost of vertical farming education",
        color: "#DA1313",
        content: [
          "Certifications: ₹50,000 – ₹1.5 Lakh for specialist courses",
          "Degree Path: ₹4 Lakh – ₹10 Lakh (B.Tech Agri/Electronics)",
          "Small Scale Kits: ₹5k-20k for home experimentation"
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways",
        icon: "🎓",
        description: "Three routes to vertical farming success",
        color: "#C20000",
        content: [
          "Pathway A: B.Sc/B.Tech Agriculture Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Pursue B.Tech Agriculture / B.Sc Horticulture (IARI, SAUs)",
          "Step 3: Intern at vertical farms — UrbanKisaan, Barton Breeze",
          "Step 4: Learn hydroponics, aeroponics, LED grow systems, IoT",
          "Step 5: Pursue M.Tech CEA or PG in Agri-Tech",
          "Step 6: Join as Vertical Farm Manager or CEA Specialist",
          "Pathway B: Skill-Based / Entrepreneurship Route",
          "Step 1: Complete Class 10th/12th (any stream)",
          "Step 2: Take hydroponics/vertical farming training courses online/offline",
          "Step 3: Learn basics — nutrient solutions, climate control, crop cycles",
          "Step 4: Get FSSAI license and MSME/startup registration",
          "Step 5: Apply for subsidies — NABARD, RKVY, agri-startup schemes",
          "Step 6: Start own vertical farm or urban microgreens business",
          "Pathway C: Research + Agri-Tech Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Pursue B.Tech Agricultural Engineering / Biotechnology",
          "Step 3: Clear GATE, pursue M.Tech in CEA/Protected Cultivation",
          "Step 4: Research AI-based farming, sensor technology, crop optimization",
          "Step 5: Work at agri-tech startups — CropIn, Clover, Bioprime",
          "Step 6: Join as Agri-Tech Researcher or Innovation Scientist"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "🎓",
        description: "Funding for agri-tech innovators",
        color: "#DA1313",
        content: [
          "Government scholarships for agriculture and technology students",
          "ICAR merit-based awards for agricultural research",
          "NABARD grants for agri-startup entrepreneurs",
          "State innovation and startup support schemes",
          "University-specific scholarships for top performers"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "📊",
        description: "Salaries, growth, and opportunities",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹2+ Crore",
          "Senior / Lead Role (10+ yrs): ₹20–60 LPA",
          "Mid-Level Professional (5–8 yrs): ₹10–20 LPA",
          "Junior / Associate (3–5 yrs): ₹5–10 LPA",
          "Entry Level (0–2 yrs): ₹3–7 LPA",
          "Note: Startup ecosystem pays higher; metro cities lead; skills in hydroponics, IoT, automation boost salaries significantly."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "📍",
        description: "Top cities and industries",
        color: "#DA1313",
        content: [
          "Top Cities: Bengaluru, Hyderabad, Pune, Delhi-NCR, Mumbai, Chennai",
          "Top Industries: Agri-tech startups (UrbanKisaan, Barton Breeze), Hydroponics Firms, Retail Chains, Food Supply Startups",
          "Global Demand: High in UAE, Singapore, USA; demand in smart farming, controlled environment agriculture, remote monitoring roles"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "🏛️",
        description: "Top institutions across India",
        color: "#C20000",
        content: [
          "Government:",
          "Indian Agricultural Research Institute (IARI), New Delhi",
          "Indian Institute of Horticultural Research (IIHR), Bangalore",
          "Tamil Nadu Agricultural University (TNAU), Coimbatore",
          "National Institute of Plant Genome Research (NIPGR), New Delhi",
          "Private:",
          "Amity University, Noida",
          "Lovely Professional University (LPU), Jalandhar",
          "Shoolini University, Solan",
          "SRM Institute of Science and Technology, Chennai",
          "Online:",
          "Swayam/NPTEL",
          "ICAR e-courses",
          "Coursera (Vertical Farming & Urban Agriculture Courses)",
          "Udemy (Vertical Farming & Hydroponics Programs)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "💼",
        description: "Various career roles in vertical farming",
        color: "#DA1313",
        content: [
          "Conventional",
          "Vertical Farm Operations Manager",
          "Controlled Environment Agriculture (CEA) Technician",
          "Nutrient Solution & Fertigation Specialist",
          "Vertical Farm Crop Production Supervisor",
          "New-Age & AI Driven",
          "AI-Powered Climate Control Systems Engineer",
          "IoT-Based Automated Vertical Farm Technologist",
          "Machine Learning Crop Yield Optimization Analyst",
          "LED Grow Light & Photobiology Research Scientist",
          "Remote/Entrepreneurship",
          "Urban Vertical Farm Startup Founder",
          "Freelance Hydroponics / Aeroponics Consultant",
          "Online Vertical Farming Course & Training Creator",
          "Microgreens & Specialty Herbs Brand Entrepreneur"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "⚠️",
        description: "High costs and energy needs",
        color: "#C20000",
        content: [
          "High initial capital investment for farm setup",
          "Significant electricity costs for LED lighting and climate control",
          "Need for continuous technical expertise and monitoring",
          "Market competition from traditional farming",
          "Regulatory compliance and food safety standards",
          "Skilled labor shortage in the sector"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "📚",
        description: "Building your indoor farming base",
        color: "#DA1313",
        content: [
          "Assemble a small DIY hydroponic kit at home",
          "Learn basics of IoT sensors and Arduino programming",
          "Study plant physiology and nutrient absorption in science"
        ]
      }
    ]
  },
};
