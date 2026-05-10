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
          "Top Cities: Delhi-NCR, Mumbai, Pune, Hyderabad, Bengaluru, Ahmedabad",
          "Top Industries: Agri Corporates, FMCG, Food Processing, AgriTech, Supply Chain, Government Projects",
          "Global Demand: High in USA, Netherlands, Australia; rising remote consulting, agri-tech startups"
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
          "Conventional: Farm Operations Manager, Agricultural Marketing Officer, Commodity Trading Analyst, Rural Banking &amp; Agri-Credit Officer",
          "New-Age & AI Driven:Precision Agriculture Data Analyst, Agri-Tech Product Manager, Drone-Based Crop Monitoring Specialist, AI-Powered Supply Chain Optimizer",
          "Remote/Entrepreneurship: Agri E-Commerce Platform Founder, Farm-to-Fork Consulting (Freelance), Organic Brand Builder &amp; Online Retailer , Agri-Business Content Creator Advisor"
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
          "CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1.5+ Crore",
          "Senior / Lead Role (10+ yrs): ₹12–40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹6–20 LPA",
          "Junior / Associate (3–5 yrs): ₹4–10 LPA",
          "Entry Level (0–2 yrs): ₹3–7 LPA",
          "Note: Metro/agri-industrial hubs (Pune, Hyderabad) pay 15–30% higher; skills in irrigation tech, GIS, farm mechanisation boost salary by 20–40%.",
          "Where Are the Jobs?",
          "Top Cities: Hyderabad, Pune, Bengaluru, Delhi-NCR, Ludhiana, Coimbatore",
          "Top Industries: Farm Equipment, Irrigation, AgriTech, Food Processing, Government (ICAR), NGOs",
          "Global Demand: High in Africa, Middle East, Australia; demand in precision farming, water management, remote consulting"
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
          "Government: Indian Institute of Technology Kharagpur (IIT-KGP), Punjab Agricultural University (PAU) Ludhiana, Tamil Nadu Agricultural University (TNAU) Coimbatore, Govind Ballabh Pant University of Agriculture & Technology Pantnagar",
          "Private: SRM Institute of Science and Technology Chennai, Amity University Noida, Lovely Professional University (LPU) Jalandhar, Sharda University Greater Noida",
          "Online: IGNOU, Swayam/NPTEL, Coursera (IIT/IARI courses), ICAR e-courses"
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
          "Conventional Careers",
          "Farm Machinery Design",
          "Irrigation Engineer",
          "Soil & Water Conservationist",
          "New-Age / AI-Driven Careers",
          "Drone Data Analyst",
          "Precision Agriculture Specialist",
          "Climate-Smart Systems Engineer",
          "AI-Agriculture Specialist",
          "Freelancing & Entrepreneurship",
          "Independent Farm Consultant",
          "Custom Hiring Center (CHC) Entrepreneur",
          "Agri-Visualization Specialist"
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
    badge: "🔬 The Science of Life and Food for Class 10+",
    heading: "Agriculture and Plant Research",
    subheading: "Decoding plant 'blueprints' to solve global challenges from climate change to food security.",
    whyCards: [
      { icon: "Microscope", title: "Scientific Core", description: "Decode plant DNA and blueprints", borderColor: "#F59E0B" },
      { icon: "Cloud", title: "Climate Resilience", description: "Develop crops thriving in extreme conditions", borderColor: "#1E40AF" },
      { icon: "Lock", title: "National Security", description: "Ensure food security for 1.4 billion people", borderColor: "#6366F1" },
      { icon: "Leaf", title: "Green Doctors", description: "Maximize yields on shrinking arable land", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Sc) + 2 Years (M.Sc) + 3-5 Years (Ph.D)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3–5 LPA (Entry) to ₹40+ LPA (Leadership)", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "Bio-economy: $165.7B (2024) → $300B (2030)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "$300B", label: "Bio-economy by 2030", gradient: "from-green-500 to-green-600" },
      { value: "1.4B", label: "People to Feed", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The laboratory where the future of food is designed.",
        color: "#C20000",
        content: [
          "If Agriculture is the engine of India, then Agriculture and Plant Research is the laboratory where that engine is designed, refined, and made future-ready.",
          "This career isn't about traditional farming; it is a high-tech scientific pursuit.",
          "A professional in this field—often called a Plant Scientist, Agronomist, or Biotechnologist—spends their time decoding the 'blueprints' of plants.",
          "They ask questions like: How can we make rice grow with 50% less water? How do we make wheat resistant to a 45°C heatwave? Can we 'edit' a tomato's genes to make it last longer on a kitchen shelf?",
          "In today's India, this career is a matter of national security. With a population of 1.4 billion and a shrinking amount of arable land, we need scientists to ensure our food supply never runs dry.",
          "These researchers are the 'Doctors of the Green World,' working to heal the soil and strengthen the crops that feed us."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Dr. Ishaan, Plant Geneticist",
        icon: "Clock",
        description: "Real workflow of a plant research scientist.",
        color: "#DA1313",
        content: [
          "8:00 AM - The Greenhouse Check-up: Dr. Ishaan starts his day in a lab coat. His first stop is the Climate-Controlled Greenhouse. He inspects a new variety of chickpea. He uses a handheld hyperspectral sensor to measure the plant's stress levels.",
          "10:30 AM - Decoding DNA: Back in the lab, Ishaan moves to his high-powered workstation. He's analyzing results from a CRISPR-Cas9 experiment. He's trying to 'knock out' a specific gene that makes the plant vulnerable to a common fungus. On his screen, strings of A, T, G, and C (DNA bases) dance in patterns.",
          "1:30 PM - Collaboration & Coffee: Lunch is a quick affair with a team of Soil Scientists and Data Analysts. They are discussing a 'Smart Farm' project in Punjab. Ishaan explains how his new seeds will perform if the soil salinity increases. In this field, science is a team sport.",
          "4:00 PM - Field Visit: Ishaan travels to a nearby experimental plot. He meets with local farmers who are testing his previous year's 'Drought-Resistant' seeds. He collects soil samples and records the farmers' feedback. Seeing his lab work actually sprouting in the real world is the best part of his day.",
          "6:30 PM - Writing the Future: The day ends at his desk, writing a research paper for an international journal. He's documenting a breakthrough in bio-fortification—increasing the Iron and Zinc content in bajra. As he leaves, he knows his work might one day prevent malnutrition for millions of children."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Curiosity & Observation: Do you notice why one plant in your balcony is greener than the others?",
          "Patience & Persistence: In research, experiments fail 90% of the time. Can you try again for the 91st time?",
          "Methodical Nature: You must love following protocols. Science requires extreme accuracy.",
          "Ethics & Empathy: You are working on things that affect human health and the environment. Integrity is non-negotiable.",
          "Analytical Skills: Comfort with statistics and data software is essential to prove your theories."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The Lab-to-Land research cycle.",
        color: "#DA1313",
        content: [
          "Hypothesis: Identifying a problem (e.g., 'Pests are destroying 30% of cotton crops')",
          "Laboratory Research: Studying plant cells, DNA, and pathogens under controlled conditions",
          "Controlled Testing: Growing plants in high-tech greenhouses to see how they react",
          "Field Trials: Testing the successful varieties in different climates across India",
          "Certification: Getting approval from government bodies like the GEAC (Genetic Engineering Appraisal Committee)",
          "Extension: Teaching farmers how to grow the new varieties effectively"
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
        id: "market",
        title: "Market Snapshot — India 2025-26",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1+ Crore",
          "Senior / Lead Role (10+ yrs): ₹18–40 LPA",
          "Mid-Level Professional (5–8 yrs): ₹8–18 LPA",
          "Junior / Associate (3–5 yrs): ₹5–8 LPA",
          "Entry Level (0–2 yrs): ₹3–5 LPA",
          "Note: Govt (ICAR) stable but lower; private agri-biotech pays 20–40% more; PhD/NET boosts salary significantly",
          "Bio-economy Growth: The Indian Bio-economy has reached $165.7 Billion in 2024 and is on track for $300 Billion by 2030"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities: Delhi, Hyderabad, Bengaluru, Ludhiana, Pune, Varanasi",
          "Top Industries: ICAR institutes, Agri Universities, Seed & Biotech (Syngenta, Bayer), NGOs, Policy Think Tanks",
          "Global Demand: High in USA, Australia, Africa; roles in climate research, crop science, remote data analysis",
          "Remote Potential: Low for lab/field work; high for Bioinformatics and Agri-Data Analysis"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and additional expenses.",
        color: "#C20000",
        content: [
          "Govt Institutions (State Agri Universities): ₹20,000 – ₹1.5 Lakhs (Total degree)",
          "Private Institutions: ₹5 Lakhs – ₹12 Lakhs",
          "Duration: 4 years (B.Sc) + 2 years (M.Sc) + 3-5 years (Ph.D)",
          "Living Costs: ₹10k–₹20k/month. Research fellows (JRF/SRF) usually get a monthly stipend of ₹31,000 to ₹35,000, which covers these costs"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Indian Agricultural Research Institute (IARI) New Delhi, GB Pant University Pantnagar, Punjab Agricultural University (PAU) Ludhiana, Tamil Nadu Agricultural University (TNAU) Coimbatore",
          "Private: Amity Institute of Biotechnology Noida, Sam Higginbottom University (SHUATS) Prayagraj, Shoolini University Solan, DY Patil University Pune",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU, Coursera (Agriculture Research Programs)"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#DA1313",
        content: [
          "Central: ICAR National Talent Scholarship (NTS), CSIR-UGC NET JRF (Stipend for Ph.D.)",
          "Private: Corteva Agriscience Scholarship (up to ₹50,000 for PG female students)",
          "International: Fulbright-Nehru Fellowship, Commonwealth Scholarship"
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: "#C20000",
        content: [
          "ICAR (Indian Council of Agricultural Research): The apex body for all agri-researchers",
          "ASRB (Agricultural Scientists Recruitment Board): Conducts exams for the ARS (Agricultural Research Service)",
          "Certifications: GIS and Remote Sensing (IIRS), Bioinformatics, and Seed Technology"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: "#DA1313",
        content: [
          "Conventional",
          "Plant Breeder & Genetics Researcher",
          "Soil Science & Fertility Researcher",
          "Entomology & Pest Management Researcher",
          "New-Age & AI Driven",
          "Genomics & Bioinformatics Research Analyst",
          "AI-Based Crop Prediction Modelling Researcher",
          "Remote Sensing & GIS Agri-Researcher",
          "Climate Change & Agriculture Impact Analyst",
          "Remote/Entrepreneurship",
          "Freelance Agri-Research Consultant",
          "Independent Seed Technology Innovator",
          "Agri-Research Publication & Journal Editor",
          "Online Agri-Science Training Platform Founder"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: "#C20000",
        content: [
          "Long Timelines: Developing one new seed variety can take 7 to 12 years",
          "Regulatory Hurdles: Dealing with government permissions for Genetically Modified (GM) crops is complex",
          "Physical Toll: Long hours in greenhouses or fields under the sun",
          "Funding Constraints: Research projects often face budget limitations"
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in agriculture research.",
        color: "#DA1313",
        content: [
          "AI & Machine Learning: AI will predict which plant cross-breeds will be successful before we even plant them",
          "Space Farming: Research into growing microalgae and hardy plants for future space missions (Axiom-4 mission trends)",
          "Personalized Nutrition: Crops tailored to provide specific nutrients for certain patient profiles (Bio-fortification)",
          "Gene Editing: CRISPR and advanced gene editing technologies for climate-resilient crops"
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#C20000",
        content: [
          "Science Fairs: Participate in school biology projects. Try growing a plant under different lights",
          "Read Up: Follow journals like Nature Plants or Indian sites like PIB (Science & Tech section)",
          "Basic Coding: Learn R or Python. Modern plant research relies heavily on data analysis",
          "Gardening: Start your own vegetable patch. Understanding a plant's life cycle firsthand is the best lesson"
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Agriculture Research",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: "#DA1313",
        content: [
          "Dr. M.S. Swaminathan: The architect of India's Green Revolution; his research on high-yielding wheat varieties saved India from famine",
          "Janaki Ammal: A pioneering female botanist whose work on cytogenetics helped create sweeter, high-yielding sugarcane",
          "Sanjay Rajaram: A world-renowned wheat breeder who developed hundreds of varieties grown globally",
          "Ashok Kumar Singh: Director of IARI, a leading figure in modern Basmati rice research",
          "Anand Kumar: Known for his work in dryland agriculture and improving pulse production in India"
        ]
      }
    ]
  },

  // ─── APICULTURE ───────────────────────────────────────────────────
  apiculture: {
    slug: "apiculture",
    badge: "🐝 The Science and Business of Bees for Class 10+",
    heading: "Apiculture",
    subheading: "The science and business of keeping bees to produce honey and protect global pollination.",
    whyCards: [
      { icon: "Briefcase", title: "Entrepreneurship", description: "Start your own beekeeping business with low investment", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Market Demand", description: "India is 7th largest honey producer with growing demand", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Export honey and bee products worldwide", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Pollination Impact", description: "Bees pollinate 1/3 of food we eat globally", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Certificate (3-6 months) to B.Sc (4 years)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3–50 LPA (Entrepreneur to Scientist)", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High demand, low startup cost", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1/3", label: "Food Pollinated by Bees", gradient: "from-green-500 to-green-600" },
      { value: "7th", label: "India's Honey Production Rank", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Apiculture?",
        icon: "Target",
        description: "Bee management for honey and pollination",
        color: "#C20000",
        content: [
          "Apiculture is the science and business of keeping bees to produce honey and other bee products.",
          "Beekeepers manage colonies, collect honey safely, and provide pollination services to farms.",
          "Bees are critical for agriculture—they pollinate one-third of the food we eat globally.",
          "India is the 7th largest honey producer in the world with enormous growth potential.",
          "This career combines biology, business, and environmental conservation in one rewarding field."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Rajesh, Beekeeper & Honey Entrepreneur",
        icon: "Clock",
        description: "Real workflow of a professional beekeeper.",
        color: "#DA1313",
        content: [
          "6:00 AM - Morning Inspection: Rajesh starts early at his apiary in Karnataka. He checks 20 bee boxes for colony health. He looks for the queen, brood patterns, and food stores. One hive shows signs of disease—he marks it for treatment.",
          "9:00 AM - Pollination Service: He drives to a nearby mango farm. During flowering season, he places 10 hives there. The farmer pays him ₹500 per hive for the season. The bees pollinate the flowers; the farmer gets better yields.",
          "12:00 PM - Honey Extraction: Back at the apiary, Rajesh extracts honey from 5 frames using a centrifuge. He filters it carefully and bottles it in 500ml jars. Each jar sells for ₹300–₹500 online.",
          "2:00 PM - Business & Marketing: Rajesh updates his Instagram with photos of his honey. He has 5,000 followers and gets 20 orders weekly. He also supplies to local restaurants and wellness shops.",
          "4:00 PM - Record Keeping: He maintains detailed records—hive health, honey yield, expenses, income. This data helps him plan for the next season and apply for government subsidies.",
          "6:00 PM - Learning & Networking: Rajesh attends a beekeeping workshop at the local KVK. He learns about new queen rearing techniques and connects with other beekeepers. Continuous learning is key to success."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Deep love for nature, biology, and outdoor work",
          "Patient, calm, and ready to start your own business",
          "Good at observation and problem-solving",
          "Entrepreneurial mindset with business acumen",
          "Okay with hands-on work and occasional bee stings",
          "Willing to learn continuously and adapt to seasons"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Hive health and honey harvesting",
        color: "#DA1313",
        content: [
          "Hive Inspection: Checking colony health weekly for disease, pests, and food stores",
          "Honey Harvest: Collecting honey 2–4 times yearly depending on season and flower availability",
          "Pollination Services: Placing hives on farms during flowering season for pollination contracts",
          "Disease Management: Treating diseases like Varroa mites and American Foulbrood",
          "Queen Rearing: Breeding new queens to maintain healthy colonies",
          "Product Sales: Bottling, branding, and selling honey, beeswax, royal jelly, and propolis",
          "Record Keeping: Maintaining detailed logs of hive health, yield, and income"
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
          "Step 6: Join as Scientist at ICAR, University, or Government Research Institute"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2025-26",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: "#DA1313",
        content: [
          "Salary Snapshot (Annual INR)",
          "Entrepreneur (Self-employed): ₹3–50 LPA (based on hives and sales)",
          "Apiculture Scientist (ICAR): ₹8–25 LPA",
          "Honey Quality Analyst: ₹5–15 LPA",
          "Pollination Service Provider: ₹4–12 LPA",
          "Note: Entrepreneurs can earn ₹50,000–₹2 Lakhs monthly with 50–100 hives and good marketing",
          "Market Growth: India's honey market growing at 8–10% CAGR; global demand for organic honey increasing",
          "Government Support: PMEGP, NABARD, and NBHM provide subsidies and loans for beekeeping startups"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities: Bengaluru, Pune, Hyderabad, Delhi-NCR, Lucknow, Indore",
          "Top Industries: Honey production, Organic farming, Pollination services, Food processing, Wellness products",
          "Government Sector: ICAR institutes, State Agriculture Departments, KVIC, NBHM",
          "Private Sector: Honey brands (Dabur, Patanjali), Organic companies, Export firms",
          "Entrepreneurship: Starting own beekeeping business with government support",
          "Global Demand: High for organic and raw honey in USA, Europe, Middle East"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and starter kit costs.",
        color: "#C20000",
        content: [
          "Certificate Course: ₹2,000 – ₹25,000 (3–6 months at KVKs or NBHM)",
          "B.Sc Degree: ₹15,000 – ₹1.5 Lakh yearly (Government colleges)",
          "Starting Beekeeping Kit: ₹25,000 – ₹60,000 (Bee boxes, smoker, suit, tools)",
          "Initial Hives (10 boxes): ₹50,000 – ₹1 Lakh",
          "FSSAI License: ₹2,000 – ₹5,000",
          "Hostel Living: ₹5,000 – ₹8,000 monthly",
          "Government Subsidies: Up to 50% cost covered by PMEGP, NABARD for startups"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Central Bee Research and Training Institute (CBRTI) Pune, Indian Agricultural Research Institute (IARI) New Delhi, National Bureau of Honey and Bee Research (NBHM) Shimla, State Agricultural Universities",
          "Training Centers: Krishi Vigyan Kendras (KVKs) across India, State Agriculture Departments, KVIC training centers",
          "Online: ICAR e-courses, Swayam/NPTEL, YouTube channels on beekeeping"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship & Subsidy Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: "#DA1313",
        content: [
          "Government Subsidies: PMEGP (Prime Minister Employment Generation Programme) — up to 35% subsidy",
          "NABARD Loans: Concessional loans for beekeeping startups",
          "NBHM Support: Free training and equipment support from National Bureau of Honey and Bee Research",
          "State Schemes: Various state agriculture departments offer subsidies for beekeeping",
          "NSP Scholarships: For B.Sc students from economically weaker sections"
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and regulatory requirements.",
        color: "#C20000",
        content: [
          "FSSAI License: Mandatory for honey production and sales",
          "Organic Certification: For organic honey production (NPOP, IFOAM standards)",
          "ISO 22000: Food Safety Management System certification",
          "NBHM Certification: Recognition from National Bureau of Honey and Bee Research",
          "State Beekeeping Board: Registration with state agriculture department"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Conventional and emerging roles.",
        color: "#DA1313",
        content: [
          "Conventional",
          "Beekeeper & Honey Producer",
          "Apiculture Scientist",
          "Honey Quality Analyst",
          "Pollination Service Provider",
          "New-Age & Emerging",
          "Organic Honey Entrepreneur",
          "Bee Product Innovator (Royal Jelly, Propolis)",
          "Agri-Tourism Beekeeper (Bee Farm Tours)",
          "Pollination Data Analyst (AI-driven)",
          "Remote/Entrepreneurship",
          "Online Honey Brand Founder",
          "Beekeeping Content Creator & Educator",
          "Honey Export Consultant",
          "Beekeeping Equipment Supplier"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: "#C20000",
        content: [
          "Seasonal Work: Income is seasonal; honey harvest depends on flower availability",
          "Bee Stings: Occupational hazard; allergies can be serious",
          "Disease Management: Varroa mites and other diseases can wipe out colonies",
          "Weather Dependency: Droughts, floods, and pesticides affect bee populations",
          "Market Competition: Honey market is competitive; quality and branding are crucial",
          "Physical Demands: Long hours in sun, heavy lifting, and outdoor work",
          "Regulatory Compliance: FSSAI and organic certifications require strict adherence"
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in apiculture.",
        color: "#DA1313",
        content: [
          "Organic & Raw Honey: Growing global demand for unprocessed, organic honey",
          "Bee Product Diversification: Royal jelly, propolis, and bee venom gaining popularity",
          "Agri-Tourism: Bee farm tours and honey experiences becoming popular",
          "Technology Integration: IoT sensors for hive monitoring, AI for disease detection",
          "Climate-Resilient Bees: Research into bee varieties adapted to climate change",
          "Pollination as a Service: Formal contracts between beekeepers and farmers increasing"
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: "#C20000",
        content: [
          "Biology & Entomology: Focus on insect biology and ecology",
          "Business Basics: Learn marketing, accounting, and entrepreneurship",
          "Observation Skills: Start observing insects and nature closely",
          "Online Learning: Watch YouTube channels on beekeeping and honey production",
          "Networking: Connect with local beekeepers and farmers",
          "Internship: Volunteer at a local apiary or farm during summers"
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Apiculture",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: "#DA1313",
        content: [
          "Dr. P.K. Sharma: Pioneer of modern beekeeping in India; founder of CBRTI Pune",
          "Rajesh Masrani: Successful honey entrepreneur with 500+ hives; exports organic honey globally",
          "Dr. Ashok Sharma: Leading researcher in bee genetics and pollination science at IARI",
          "Neha Sharma: Young beekeeper and agri-entrepreneur; runs successful honey brand on social media",
          "Vikram Singh: Pollination service provider; works with farmers across Punjab and Haryana"
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
          "Government: Indian Veterinary Research Institute (IVRI) Bareilly; National Dairy Research Institute (NDRI) Karnal; Guru Angad Dev Veterinary & Animal Sciences University (GADVASU), Ludhiana; Maharashtra Animal & Fishery Sciences University (MAFSU), Nagpur",
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

  aquaculture: {
    slug: "aquaculture",
    badge: "🐟 Farming Aquatic Life for Class 10+",
    heading: "Aquaculture",
    subheading: "Farming aquatic organisms like fish and shrimp under controlled conditions to feed the world.",
    whyCards: [
      { icon: "Fish", title: "Food Security", description: "Provide protein for 1.4 billion people", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Market Demand", description: "India is 3rd largest fish producer globally", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Export shrimp and fish worldwide", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Innovation", description: "Smart farming with IoT and AI technology", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "B.F.Sc (4 years) or Diploma (2 years)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹2.5–40 LPA (Entry to Leadership)", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "55 lakh new jobs by 2025 (Government target)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "3rd", label: "India's Fish Production Rank", gradient: "from-green-500 to-green-600" },
      { value: "4th", label: "India's Fish Export Rank", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Aquaculture?",
        icon: "Target",
        description: "Farming aquatic life under controlled conditions",
        color: "#C20000",
        content: [
          "Aquaculture is farming organisms like fish, shrimp, and oysters under controlled conditions.",
          "India is the world's 3rd largest fish producer and 4th largest exporter.",
          "Government schemes target 55 lakh new jobs in this sector by 2025.",
          "Aquaculture professionals ensure food security while maintaining environmental sustainability.",
          "This career combines biology, technology, and business in a rapidly growing industry."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Priya, Aquaculture Manager",
        icon: "Clock",
        description: "Real workflow of an aquaculture professional.",
        color: "#DA1313",
        content: [
          "6:00 AM - Pre-Stocking Inspection: Priya arrives at the shrimp farm in Andhra Pradesh. She tests water quality—pH, salinity, dissolved oxygen, and ammonia levels. She checks the hatchery for healthy seed stock.",
          "9:00 AM - Pond Monitoring: She walks through 10 ponds, observing shrimp behavior and feeding patterns. She adjusts aeration systems and feed quantities based on observations. One pond shows signs of disease—she collects samples for lab testing.",
          "12:00 PM - Feed Management: Priya coordinates with the feed supplier. She calculates feed requirements based on shrimp biomass and growth stage. She ensures feed quality and storage conditions.",
          "2:00 PM - Disease Diagnosis: In the lab, she tests water and tissue samples. She identifies a bacterial infection in one pond and prescribes treatment protocols. She documents findings in the farm management system.",
          "4:00 PM - Harvest Planning: She reviews harvest schedules and coordinates with buyers. She ensures proper sorting, grading, and packaging of harvested shrimp for export.",
          "6:00 PM - Data Analysis: Priya updates farm records—feed conversion ratios, survival rates, water quality trends. She uses this data to optimize next season's production and apply for government subsidies."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Observant and patient with strong attention to detail",
          "Physically fit for outdoor work in varying weather conditions",
          "Strong problem-solving skills for disease and water quality issues",
          "Competency in water quality testing and aquatic animal nutrition",
          "Comfortable with hatchery operations and aquaculture technology",
          "Business-minded for farm management and market coordination"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From pond preparation to market sale",
        color: "#DA1313",
        content: [
          "Pre-Stocking: Preparing ponds, testing water quality, and selecting healthy seed stock",
          "Growing: Monitoring daily feeding, observing health, managing water parameters",
          "Disease Management: Diagnosing and treating aquatic animal diseases",
          "Harvest: Sorting, grading, packaging, and coordinating with buyers",
          "Record Keeping: Maintaining detailed farm records for optimization and subsidies",
          "Sustainability: Ensuring environmental compliance and waste management"
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
        id: "market",
        title: "Market Snapshot — India 2025-26",
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
          "Note: Coastal states pay more; shrimp export business boosts income; entrepreneurship (fish/shrimp farming) can exceed salaries",
          "Government Support: PMMSY, NFDB, NABARD provide subsidies and loans for aquaculture startups"
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
          "Top Industries: Fisheries, Shrimp Export (Avanti Feeds, Nireus), Hatcheries, Feed Companies, Govt Fisheries Dept",
          "Private Sector: Aquaculture companies, Export firms, Feed manufacturers, Processing plants",
          "Global Demand: High in Southeast Asia, Middle East, EU; demand in aquaculture tech, export management, remote monitoring"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Educational investment breakdown",
        color: "#C20000",
        content: [
          "Diploma: ₹5,000 – ₹80,000 per year (Government colleges)",
          "Bachelor (B.F.Sc): ₹20,000 – ₹1.5 Lakh yearly (Government colleges)",
          "Master (M.F.Sc): ₹30,000 – ₹2 Lakh yearly",
          "Living Costs: ₹4,000 – ₹12,000 per month",
          "Ph.D: Stipends available for research students (₹31,000–₹35,000 monthly)",
          "Government Subsidies: Up to 50% cost covered for aquaculture startups"
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
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid for fisheries students",
        color: "#DA1313",
        content: [
          "National Scholarship Scheme (NSP) for SC/ST students",
          "AICTE Pragati Scholarship for girl students",
          "ICAR Merit Scholarships for fisheries students",
          "State-specific scholarships for fisheries education",
          "Private scholarships from aquaculture companies and NGOs"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional",
          "Fish Farm / Hatchery Manager",
          "Aquaculture Extension Officer (State Fisheries)",
          "Shrimp & Prawn Cultivation Specialist",
          "Aquatic Animal Health & Disease Officer",
          "New-Age & AI Driven",
          "AI-Based Water Quality Monitoring Analyst",
          "IoT-Enabled Smart Fish Farm Technologist",
          "Recirculating Aquaculture Systems (RAS) Engineer",
          "Satellite-Based Aquaculture Site Selection Specialist",
          "Remote/Entrepreneurship",
          "Ornamental Fish Breeding & Export Entrepreneur",
          "Online Aquaculture Training Platform Founder",
          "Freelance Aquaculture Project Consultant",
          "Seaweed / Algae Farming Startup Founder"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of the profession.",
        color: "#C20000",
        content: [
          "Weather dependency : monsoons and temperature fluctuations affect fish growth",
          "Disease outbreaks : bacterial and viral infections in fish populations",
          "Water quality management : maintaining optimal pH, oxygen, and nutrient levels",
          "Market volatility : fish prices fluctuate based on supply and demand",
          "Environmental concerns : sustainable practices and pollution control",
          "Regulatory compliance : aquaculture licensing and environmental standards",
          "Physical demands : long hours in sun and water-related work"
        ]
      },
      {
        id: "trends",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in aquaculture.",
        color: "#DA1313",
        content: [
          "Smart Aquaculture: IoT sensors and AI for real-time monitoring of water quality and fish health",
          "Recirculating Systems (RAS): Closed-loop systems reducing water usage and environmental impact",
          "Aquaponics: Integration of fish farming with vegetable cultivation",
          "Seaweed Farming: Growing demand for sustainable seaweed production",
          "Gene Editing: Development of disease-resistant and faster-growing fish varieties",
          "Offshore Aquaculture: Expansion to deeper waters for larger-scale production"
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Early steps for aquaculture career.",
        color: "#C20000",
        content: [
          "Master Biology, Chemistry, and ecology in school",
          "Visit fish farms and aquaculture facilities during summers",
          "Join science fair competitions with aquaculture projects",
          "Take free courses on NPTEL and ICAR websites",
          "Read CMFRI and fish industry reports regularly",
          "Learn basic water quality testing and data analysis"
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Aquaculture",
        icon: "User",
        description: "Inspiring figures in the industry.",
        color: "#DA1313",
        content: [
          "Dr. Modadugu V. Gupta: Pioneer of shrimp farming in India; revolutionized aquaculture industry",
          "Dr. K. Alagarswamy: Leading researcher in fish genetics and breeding at CIFE",
          "Ramakrishnan: Successful shrimp farmer and exporter; built multi-crore aquaculture business",
          "Dr. Dilip Kumar: Expert in sustainable aquaculture and environmental management",
          "Priya Sharma: Young aquaculture entrepreneur; runs successful ornamental fish export business"
        ]
      }
    ]
  },
  dairy_technology: {
    slug: "dairy_technology",
    badge: "🥛 Dairy Science & Technology for Class 10+",
    heading: "Dairy Technology",
    subheading: "Processing, packaging, and distributing milk and dairy products like cheese, yogurt, and ghee to feed millions.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Dairy Technology.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Market Demand", description: "India is world's largest milk producer.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Export dairy products worldwide.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Innovation", description: "Smart dairy with IoT and automation.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "B.Tech (4 years) or Diploma (2 years)", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3–60 LPA (Entry to Leadership)", color: "bg-blue-100 text-blue-700" },
      { label: "Growth", detail: "High demand in FMCG & Dairy", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "1st", label: "India's Milk Production Rank", gradient: "from-green-500 to-green-600" },
      { value: "₹2.5T", label: "India's Dairy Market Size", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is Dairy Technology?",
        icon: "Target",
        description: "Science of milk processing and product development",
        color: "#C20000",
        content: [
          "Dairy Technology is the science of processing raw milk into safe, nutritious products like pasteurized milk, cheese, yogurt, paneer, ghee, and ice cream.",
          "India is the world's largest milk producer with 220 million liters daily production.",
          "Dairy technologists ensure food safety, quality control, and innovation in dairy products.",
          "This career combines microbiology, chemistry, engineering, and business management.",
          "Professionals work in dairy plants, research labs, quality control, and product development."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Rajesh, Dairy Technologist",
        icon: "Clock",
        description: "Real workflow of a dairy professional.",
        color: "#DA1313",
        content: [
          "5:30 AM - Milk Reception: Rajesh arrives at the Amul dairy plant in Gujarat. He tests incoming raw milk for quality—fat content, SNF (Solids-Not-Fat), acidity, and microbial count. He rejects substandard batches.",
          "7:00 AM - Processing Supervision: He monitors pasteurization at 72°C for 15 seconds. He checks homogenization pressure and temperature control systems. He ensures all equipment is sanitized.",
          "9:00 AM - Quality Testing: In the lab, Rajesh conducts tests—bacterial count, antibiotic residues, pesticide screening. He uses HPLC and spectrophotometry for precision analysis.",
          "11:00 AM - Product Development: He works with the R&D team on a new low-fat paneer variant. He adjusts milk composition, coagulation time, and cutting techniques.",
          "1:00 PM - Packaging & Labeling: He verifies packaging integrity, expiry dates, and FSSAI compliance. He ensures cold chain maintenance from plant to distribution.",
          "3:00 PM - Data Analysis: Rajesh updates production records—yield percentages, waste reduction, cost optimization. He identifies trends and suggests process improvements.",
          "5:00 PM - Compliance Check: He reviews FSSAI audit reports and ensures all documentation is current. He coordinates with regulatory authorities."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Meticulous attention to detail for food safety and quality standards",
          "Strong foundation in Chemistry, Microbiology, and Food Science",
          "Comfortable working in cold storage and factory environments",
          "Problem-solving skills for troubleshooting production issues",
          "Competency in lab testing and quality assurance protocols",
          "Business-minded for cost optimization and process efficiency"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From milk reception to product delivery",
        color: "#DA1313",
        content: [
          "Milk Reception: Testing raw milk quality and rejecting substandard batches",
          "Processing: Monitoring pasteurization, homogenization, and fortification",
          "Quality Control: Lab testing for safety, microbial count, and nutritional content",
          "Product Development: Creating new dairy products and improving existing ones",
          "Packaging: Ensuring proper packaging, labeling, and cold chain management",
          "Compliance: Maintaining FSSAI standards and regulatory documentation"
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
          "Step 1: Complete Class 12th with PCM/PCB (Physics, Chemistry, Maths/Biology)",
          "Step 2: Clear state CET/ICAR-AIEEA and pursue B.Tech Dairy Technology (4 years — NDRI Karnal, SMC Anand, AAU, Warner College)",
          "Step 3: Do internships at dairy plants — Amul, Mother Dairy, Nestlé, Britannia, Parag",
          "Step 4: Learn skills — milk processing, pasteurization, packaging, quality testing, FSSAI standards",
          "Step 5: Pursue M.Tech Dairy Technology / MBA Dairy Management (optional)",
          "Step 6: Join as Dairy Technologist, Production Manager, Quality Assurance Officer, or R&D Scientist",
          "Pathway B: Diploma + Field Entry Route",
          "Step 1: Complete Class 10th/12th with Science",
          "Step 2: Pursue Diploma in Dairy Technology (2–3 years, state dairy institutes/polytechnics)",
          "Step 3: Gain hands-on experience at milk cooperatives, chilling centers, or dairy plants",
          "Step 4: Learn basics — milk collection, fat testing, paneer/curd/ghee making, cold chain management",
          "Step 5: Upgrade to B.Tech Dairy Technology through lateral entry (optional)",
          "Step 6: Work as Dairy Supervisor, Milk Plant Technician, Quality Checker, or Dairy Cooperative Manager",
          "Pathway C: Research + Government Route",
          "Step 1: Complete Class 12th with PCM/PCB",
          "Step 2: Pursue B.Tech Dairy Technology from recognized institute (NDRI, SMC Anand)",
          "Step 3: Clear GATE/ICAR-JRF and pursue M.Tech/Ph.D. in Dairy Science / Food Technology",
          "Step 4: Publish research in dairy processing, value-added products, or food safety",
          "Step 5: Clear ARS/NET, UPSC, or State PSC exams",
          "Step 6: Join as Scientist at NDRI/ICAR, Professor, FSSAI Officer, or Dairy Development Commissioner"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2025-26",
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
          "Note: Private dairy & FMCG pay 20–40% more; cooperative sector stable; MBA (Dairy/Agri) boosts growth by 30–50%",
          "Government Support: NDDB, ICAR provide research grants and subsidies for dairy startups"
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top cities and industries.",
        color: "#DA1313",
        content: [
          "Top Cities/Regions: Gujarat (Anand), Delhi-NCR, Pune, Bengaluru, Hyderabad, Ludhiana, Tamil Nadu",
          "Top Industries: Dairy (Amul, Mother Dairy, Parag), FMCG (Nestlé, ITC), Food Processing, Cold Chain, Govt Dairy Boards",
          "Private Sector: Dairy cooperatives, Export firms, Feed manufacturers, Processing plants, Packaging companies",
          "Global Demand: High in New Zealand, Australia, EU; demand in dairy processing, supply chain, export management"
        ]
      },
      {
        id: "cost",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Educational investment breakdown",
        color: "#C20000",
        content: [
          "Diploma: ₹5,000 – ₹80,000 per year (Government colleges)",
          "Bachelor (B.Tech): ₹20,000 – ₹1.5 Lakh yearly (Government colleges)",
          "Master (M.Tech): ₹30,000 – ₹2 Lakh yearly",
          "Living Costs: ₹8,000 – ₹15,000 per month",
          "Ph.D: Stipends available for research students (₹31,000–₹35,000 monthly)",
          "Government Subsidies: NDDB and state governments provide scholarships for dairy education"
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
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Lovely Professional University (LPU) Jalandhar, ITM University Gwalior, Shoolini University Solan, Centurion University Odisha",
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
          "Conventional: Dairy Plant Production Manager, Milk Procurement & Quality Control Officer, Dairy Product Development Technologist, Cooperative Dairy Federation Officer (AMUL/NDDB), Dairy Export Manager",
          "New-Age & AI Driven: AI-Powered Milk Supply Chain Optimizer, IoT-Based Cold Chain Monitoring Specialist, Automated Dairy Processing Systems Engineer, Data-Driven Dairy Yield Prediction Analyst, Blockchain-Based Traceability Specialist",
          "Remote/Entrepreneurship: Artisan Cheese / Yogurt Brand Founder, Online Dairy Technology Consulting Provider, Dairy-Based Nutraceutical Startup Entrepreneur, Freelance Dairy FSSAI Compliance Consultant, Farm-to-Table Dairy E-Commerce Founder"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of dairy technology work",
        color: "#DA1313",
        content: [
          "Perishability : milk spoils quickly without proper cold chain management",
          "Extreme environments : working in cold storage and factory conditions",
          "Quality control : maintaining strict FSSAI and food safety standards",
          "Supply chain complexity : coordinating with farmers, processors, and distributors",
          "Seasonal variations : milk production fluctuates with seasons and weather",
          "Competition : intense competition from large dairy corporations and imports",
          "Regulatory compliance : constantly evolving food safety and labeling regulations"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in dairy technology",
        color: "#C20000",
        content: [
          "Smart Dairy: IoT sensors for real-time monitoring of milk quality and cold chain",
          "Automation: Robotic milking systems and automated processing lines",
          "Sustainability: Zero-waste dairy processing and renewable energy adoption",
          "Functional Dairy: Probiotic yogurts, fortified milk, and health-focused products",
          "Blockchain: Traceability from farm to consumer for transparency",
          "Alternative Proteins: Plant-based dairy alternatives and fermentation technology",
          "Data Analytics: Predictive maintenance and production optimization using AI"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your dairy science journey",
        color: "#C20000",
        content: [
          "Master Organic Chemistry and Microbiology — the core of dairy science",
          "Develop strong English communication for technical reporting and presentations",
          "Learn about food safety standards and FSSAI regulations",
          "Visit local dairy plants and cooperatives to understand operations",
          "Take online courses on food technology and dairy processing"
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
        title: "A Day in the Life: Priya, Floral Designer & Entrepreneur",
        icon: "Clock",
        description: "Real workflow of a professional florist.",
        color: "#DA1313",
        content: [
          "5:30 AM - Market Visit: Priya arrives at the Delhi flower market. She selects fresh roses, orchids, and seasonal flowers. She negotiates prices and checks quality.",
          "7:00 AM - Inventory Management: She arranges flowers in cold storage. She removes wilted petals and prepares stems for arrangements.",
          "9:00 AM - Client Consultations: She meets with a bride-to-be for wedding florals. She discusses themes, colors, and budget. She shows portfolio samples.",
          "11:00 AM - Design & Arrangement: She creates sample bouquets and centerpieces. She uses color theory and design principles to create stunning arrangements.",
          "1:00 PM - Social Media & Orders: She photographs arrangements and posts on Instagram. She manages online orders from her website and responds to inquiries.",
          "3:00 PM - Event Preparation: She prepares flowers for an evening corporate event. She packs arrangements carefully for delivery.",
          "5:00 PM - Delivery & Setup: She delivers flowers to the venue. She arranges centerpieces and ensures everything looks perfect.",
          "7:00 PM - Business Management: She updates inventory, tracks expenses, and plans next week's orders. She responds to client feedback."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Highly creative with strong artistic sense and color theory knowledge",
          "Nature-loving with passion for flowers and plants",
          "Excellent customer service and communication skills",
          "Entrepreneurial mindset with business acumen",
          "Physical stamina for early mornings and standing for long hours",
          "Detail-oriented with ability to work under pressure during peak seasons"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From flower selection to event delivery",
        color: "#DA1313",
        content: [
          "Flower Selection: Visiting markets daily to source fresh, quality flowers at best prices",
          "Design & Arrangement: Creating custom bouquets, centerpieces, and installations per client needs",
          "Quality Control: Ensuring flowers are fresh, properly conditioned, and arranged beautifully",
          "Event Coordination: Managing delivery, setup, and on-site arrangement for weddings and events",
          "Customer Service: Consulting with clients, understanding their vision, and delivering satisfaction",
          "Business Management: Handling inventory, pricing, social media marketing, and staff management"
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
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Floriculture Research Scientist, Commercial Flower Farm Manager, Floral Designer for Events & Weddings, Flower Auction & Wholesale Market Officer, Horticulture Extension Officer",
          "New-Age & AI Driven: AI-Optimized Greenhouse Floriculture Specialist, Drone-Based Flower Crop Health Analyst, IoT-Enabled Climate Control Polyhouse Technologist, Data-Driven Floral Demand Forecasting Analyst, Precision Floriculture Technologist",
          "Remote/Entrepreneurship: Online Flower Delivery Platform Founder, Freelance Wedding & Event Floral Designer, Dried & Preserved Flower Art Entrepreneur, Exotic / Organic Flower Export Business Owner, Floral Design Content Creator & Online Instructor"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of floristry work",
        color: "#C20000",
        content: [
          "Flower perishability requires careful handling and cold chain management",
          "Seasonal price fluctuations affect profitability and margins",
          "High competition in urban markets from large chains and online platforms",
          "Weather dependency for crop quality and availability",
          "Need for consistent customer relationships and repeat business",
          "Physical demands of early mornings and standing for long hours",
          "Inventory management challenges during peak seasons"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in floristry",
        color: "#C20000",
        content: [
          "Sustainable Floristry: Eco-friendly packaging, locally-sourced flowers, and zero-waste arrangements",
          "Technology Integration: AI-powered design tools, virtual consultations, and AR flower visualization",
          "Subscription Services: Monthly flower boxes and corporate gifting subscriptions",
          "Preserved & Dried Flowers: Long-lasting alternatives to fresh flowers for sustainability",
          "Luxury & Experiential: High-end event floristry, floral installations, and immersive experiences",
          "Online Platforms: E-commerce integration, same-day delivery, and social media marketing",
          "Greenhouse Technology: Smart polyhouses with IoT monitoring for year-round production",
          "Niche Markets: Exotic flowers, rare varieties, and specialty arrangements for collectors"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your floristry journey",
        color: "#C20000",
        content: [
          "Study botany, color theory, and art in school to build foundational knowledge",
          "Practice flower arrangements at home and build a photo portfolio on Instagram",
          "Visit local flower markets and nurseries to understand flower types and pricing",
          "Attend workshops and online courses on floral design and arrangement techniques",
          "Join art fairs, flower shows, and design competitions to understand market trends",
          "Volunteer at events to gain hands-on experience in event floristry"
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
        title: "A Day in the Life: Dr. Amit, Food Scientist at CFTRI",
        icon: "Clock",
        description: "Real workflow of a food scientist.",
        color: "#DA1313",
        content: [
          "6:30 AM - Lab Preparation: Dr. Amit arrives at the CFTRI lab in Mysuru. He calibrates equipment—pH meters, spectrophotometers, and chromatography machines. He reviews the day's testing schedule.",
          "8:00 AM - Food Safety Testing: He conducts microbial tests on samples from a food processing plant. He checks for pathogens, contamination, and shelf-life stability. He documents all results.",
          "10:00 AM - Product Development: He works with the R&D team on a new fortified flour product. He tests different mineral combinations and evaluates nutritional content using HPLC analysis.",
          "12:00 PM - Data Analysis: He analyzes test results and compares them against FSSAI standards. He prepares reports and identifies any deviations or improvements needed.",
          "2:00 PM - Collaboration: He meets with production teams to discuss quality issues. He recommends process improvements and troubleshoots contamination problems.",
          "4:00 PM - Innovation: He develops new preservation techniques for reducing spoilage. He experiments with natural preservatives and packaging innovations.",
          "6:00 PM - Compliance Review: He reviews FSSAI compliance documentation and ensures all protocols are followed. He updates safety manuals and trains junior staff on new procedures."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Strong scientific curiosity with passion for Chemistry, Biology, and Microbiology",
          "Meticulous attention to detail and unwavering commitment to food safety ethics",
          "Keen sensory perception (taste, smell, texture) for product evaluation",
          "Analytical mindset with strong data interpretation and problem-solving skills",
          "Creativity for innovating new food products and preservation techniques",
          "Communication skills for collaborating with production teams and regulatory bodies"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From lab testing to product launch",
        color: "#DA1313",
        content: [
          "Food Safety Testing: Conducting microbial, chemical, and physical tests on food samples",
          "Product Development: Innovating new recipes and formulations with improved nutrition",
          "Quality Assurance: Ensuring compliance with FSSAI, FDA, and international standards",
          "Process Optimization: Improving preservation techniques and reducing spoilage",
          "Data Analysis: Documenting results and identifying trends for process improvement",
          "Collaboration: Working with production teams to troubleshoot quality issues"
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
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Central Food Technological Research Institute (CFTRI) Mysuru, National Institute of Food Technology Entrepreneurship & Management (NIFTEM) Sonipat, Indian Institute of Technology (IIT) Kharagpur, University of Mysore Mysuru",
          "Private: Lovely Professional University (LPU) Jalandhar, Amity University Noida, SRM Institute of Science and Technology Chennai, Shoolini University Solan, Centurion University Odisha",
          "Online: Swayam/NPTEL, IGNOU (Food Science & Nutrition Programs), ICAR e-courses, Coursera (Food Science & Technology Courses)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Food Quality Assurance & Safety Officer, Food Processing Plant Technologist, FSSAI Regulatory Affairs Specialist, Sensory Evaluation & Product Development Scientist, Food Export Quality Manager",
          "New-Age & AI Driven: AI-Powered Food Formulation Scientist, Blockchain-Based Food Traceability Analyst, Lab-Grown / Cultured Protein Technologist, Smart Packaging & Nano-Technology Food Engineer, Precision Fermentation Specialist",
          "Remote/Entrepreneurship: Health Food / Superfood Brand Founder, Freelance FSSAI & FDA Compliance Consultant, Online Food Science Education Platform Creator, Plant-Based / Vegan Product Startup Entrepreneur, Food Safety Auditing Consultant"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of food science work",
        color: "#C20000",
        content: [
          "Food safety regulations are strict and constantly evolving globally",
          "Zero tolerance for contamination or quality issues affecting consumer health",
          "Need for continuous compliance with FSSAI, FDA, and international standards",
          "Pressure to innovate while maintaining safety and nutritional integrity",
          "Supply chain complexity and traceability requirements for transparency",
          "Balancing cost reduction with quality and safety standards",
          "Managing shelf-life and preservation without harmful additives"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in food science",
        color: "#C20000",
        content: [
          "Lab-Grown & Cultured Meat: Developing sustainable protein alternatives without animal farming",
          "Precision Fermentation: Using microorganisms to create food ingredients and proteins",
          "Blockchain Traceability: Ensuring food safety and authenticity from farm to consumer",
          "AI-Powered Formulation: Using machine learning to optimize food recipes and nutrition",
          "Personalized Nutrition: Creating customized food products based on individual health data",
          "Sustainable Packaging: Developing biodegradable and edible packaging solutions",
          "Functional Foods: Creating foods with added health benefits (probiotics, superfoods)",
          "Climate-Resilient Crops: Developing food products from climate-adapted crops"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your food science journey",
        color: "#C20000",
        content: [
          "Master Chemistry and Biology thoroughly—these are the foundation of food science",
          "Learn about food preservation, nutrition, and food safety basics",
          "Participate in science fairs with food-related projects and experiments",
          "Read about FSSAI standards, food innovations, and global food security",
          "Visit food processing plants and research institutes to understand real-world applications",
          "Develop strong analytical and problem-solving skills through lab work"
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
        title: "A Day in the Life: Vikram, Horticulture Manager & Organic Farmer",
        icon: "Clock",
        description: "Real workflow of a horticulturist.",
        color: "#DA1313",
        content: [
          "5:30 AM - Farm Inspection: Vikram arrives at his organic apple orchard in Himachal Pradesh. He inspects trees for pest damage, disease symptoms, and fruit development. He checks irrigation systems.",
          "7:00 AM - Soil & Nutrient Management: He tests soil moisture and nutrient levels. He adjusts drip irrigation based on weather and plant needs. He applies organic compost and bio-fertilizers.",
          "9:00 AM - Pest & Disease Monitoring: He scouts for pests and diseases using integrated pest management techniques. He identifies affected plants and applies organic solutions.",
          "11:00 AM - Breeding & Propagation: He works on developing new high-yield apple varieties. He conducts grafting and propagation experiments in the nursery section.",
          "1:00 PM - Greenhouse Operations: He manages the nursery greenhouse where seedlings are grown. He monitors temperature, humidity, and light conditions for optimal growth.",
          "3:00 PM - Harvest Planning: He assesses fruit maturity and plans harvest schedules. He coordinates with workers on picking techniques to minimize damage.",
          "5:00 PM - Post-Harvest Management: He oversees grading, sorting, and packaging of harvested fruits. He ensures proper cold chain management for export quality.",
          "7:00 PM - Data & Planning: He updates production records, analyzes yield data, and plans next season's crop rotation and variety selection."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Strong passion for plant biology and environmental science",
          "Patient and observant with ability to notice subtle plant changes",
          "Creative eye for landscape design and aesthetic planning",
          "Business acumen for nursery management and export operations",
          "Physical stamina for outdoor work in varying weather conditions",
          "Problem-solving skills for pest management and crop optimization"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From soil preparation to harvest logistics",
        color: "#DA1313",
        content: [
          "Soil & Nutrient Management: Managing soil health, pH levels, and precise nutrient application",
          "Plant Breeding: Developing pest-resistant and high-yield varieties through selective breeding",
          "Pest & Disease Management: Monitoring and controlling pests using integrated pest management",
          "Landscape Design: Planning and designing gardens, parks, and urban green spaces",
          "Greenhouse Operations: Managing nurseries and controlled environment agriculture",
          "Post-Harvest Management: Ensuring proper grading, storage, and supply chain logistics"
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
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Indian Agricultural Research Institute (IARI) New Delhi, Dr. YS Parmar University of Horticulture & Forestry Solan, University of Horticultural Sciences (UHS) Bagalkot, Tamil Nadu Agricultural University (TNAU) Coimbatore",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Amity University Noida, Lovely Professional University (LPU) Jalandhar, Shoolini University Solan, Centurion University Odisha",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Horticulture Programs), National Horticulture Board (NHB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Horticulture Development Officer, Fruit & Vegetable Production Specialist, Plantation Crop Estate Manager, Post-Harvest Technology Officer, Nursery Manager",
          "New-Age & AI Driven: AI-Based Crop Disease Detection Specialist, Vertical Farming & Hydroponics Technologist, Drone-Assisted Orchard Management Analyst, IoT-Enabled Smart Greenhouse Systems Engineer, Precision Horticulture Data Analyst",
          "Remote/Entrepreneurship: Organic Farm-to-Table Brand Founder, Freelance Landscape & Garden Design Consultant, Exotic Fruit / Herb Export Business Owner, Online Nursery & Plant E-Commerce Entrepreneur, Agri-Tourism Farm Developer"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of horticulture work",
        color: "#C20000",
        content: [
          "Pest and disease management requires constant vigilance and adaptive strategies",
          "Climate change impacts crop yields, growing seasons, and water availability",
          "Market price volatility affects profitability and business planning",
          "Labor availability and management challenges during peak seasons",
          "Need for continuous innovation and adaptation to new technologies",
          "Post-harvest losses and cold chain management complexities",
          "Export compliance and quality standards for international markets"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in horticulture",
        color: "#C20000",
        content: [
          "Vertical Farming: Growing crops in stacked layers using hydroponics and LED lighting",
          "Precision Horticulture: Using AI and IoT for optimized irrigation and nutrient delivery",
          "Controlled Environment Agriculture: Smart greenhouses with automated climate control",
          "Organic & Sustainable Farming: Growing demand for pesticide-free and eco-friendly produce",
          "Urban Horticulture: Rooftop gardens and vertical farms in cities for local food production",
          "Drone Technology: Using drones for crop monitoring, pest detection, and precision spraying",
          "Blockchain Traceability: Farm-to-consumer tracking for organic and premium products",
          "Genetic Improvement: Developing climate-resilient and disease-resistant plant varieties"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your horticulture journey",
        color: "#C20000",
        content: [
          "Master plant anatomy, soil chemistry, and ecology in school",
          "Start a kitchen garden or maintain a nursery at home to gain hands-on experience",
          "Visit local botanical gardens, nurseries, and high-tech farms to understand operations",
          "Learn about different plant varieties, their growing conditions, and market demand",
          "Develop skills in landscape design and garden planning through online courses",
          "Join agriculture clubs and participate in horticulture competitions and exhibitions"
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
        title: "A Day in the Life: Suresh, Poultry Farm Manager & Entrepreneur",
        icon: "Clock",
        description: "Real workflow of a poultry professional.",
        color: "#DA1313",
        content: [
          "4:30 AM - Pre-Dawn Inspection: Suresh arrives at his poultry farm in Andhra Pradesh. He checks bird health and behavior. He monitors temperature and ventilation in the poultry house.",
          "6:00 AM - Feeding & Water Management: He ensures automated feeders and waterers are functioning properly. He checks feed quality and water pH. He adjusts portions based on bird age and production stage.",
          "8:00 AM - Health Monitoring: He inspects birds for signs of disease or stress. He checks for mortality and removes any sick birds. He maintains detailed health records.",
          "10:00 AM - Vaccination & Biosecurity: He administers scheduled vaccinations. He ensures strict biosecurity protocols—disinfection, protective gear, visitor logs. He prevents disease entry.",
          "12:00 PM - Egg Collection & Grading: He collects eggs from layer birds. He grades eggs by size and quality. He ensures proper storage and cold chain maintenance.",
          "2:00 PM - Feed & Nutrition Management: He monitors feed consumption rates. He adjusts nutrition based on production metrics. He coordinates with feed suppliers.",
          "4:00 PM - Maintenance & Cleaning: He oversees cleaning of poultry houses and equipment. He maintains ventilation systems and lighting. He ensures sanitation standards.",
          "6:00 PM - Data & Planning: He records production data—egg count, feed consumption, mortality rates. He analyzes trends and plans next day's operations. He coordinates with buyers."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Resilience to work in farm environments and early morning hours",
          "Analytical mind to track feed conversion ratios and production metrics",
          "Strong focus on hygiene, biosecurity, and disease prevention",
          "Entrepreneurial spirit with business acumen for farm ownership",
          "Attention to detail for health monitoring and record-keeping",
          "Physical stamina for hands-on farm work and outdoor conditions"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Managing bird health and production cycles",
        color: "#DA1313",
        content: [
          "Nutrition Management: Formulating precise feed balances for different bird ages",
          "Health Control: Implementing vaccines, biosecurity, and disease prevention",
          "Operations: Managing automated farm environments and equipment",
          "Production Monitoring: Tracking egg/meat production and quality metrics",
          "Biosecurity: Maintaining strict sanitation and disease prevention protocols",
          "Marketing: Connecting with meat and egg supply chains and buyers"
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
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Central Poultry Development Organisation (CPDO) Chandigarh, Indian Veterinary Research Institute (IVRI) Bareilly, Guru Angad Dev Veterinary & Animal Sciences University (GADVASU) Ludhiana, Tamil Nadu Veterinary & Animal Sciences University (TANUVAS) Chennai",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Lovely Professional University (LPU) Jalandhar, Amity University Noida, Shoolini University Solan",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Poultry Farming Programs), National Institute of Open Schooling (NIOS) Poultry Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Poultry Farm Production Manager, Poultry Feed Formulation Specialist, Poultry Health & Disease Management Officer, Hatchery Operations & Breeding Manager, Poultry Export Quality Manager",
          "New-Age & AI Driven: AI-Powered Poultry Flock Monitoring Analyst, IoT-Based Smart Poultry House Technologist, Automated Egg Grading & Sorting Systems Engineer, Data-Driven Poultry Growth Optimization Specialist, Precision Poultry Nutrition Analyst",
          "Remote/Entrepreneurship: Country / Desi Poultry Brand Founder, Freelance Poultry Farm Setup Consultant, Online Poultry Farming Training Academy Creator, Value-Added Poultry Products Startup Entrepreneur, Poultry Supply Chain Optimization Consultant"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of poultry work",
        color: "#C20000",
        content: [
          "Disease outbreaks like avian flu pose significant biosecurity risks",
          "Market price volatility for eggs and meat affects profitability",
          "Biosecurity requirements are strict and costly to maintain",
          "Feed cost fluctuations directly impact profit margins",
          "Environmental and waste management concerns and regulations",
          "Labor management and skilled worker availability challenges",
          "Regulatory compliance with food safety and animal welfare standards"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in poultry farming",
        color: "#C20000",
        content: [
          "Smart Poultry Houses: IoT sensors for real-time monitoring of temperature, humidity, and bird health",
          "AI-Powered Health Monitoring: Computer vision for detecting sick birds and early disease detection",
          "Precision Nutrition: Data-driven feed formulation for optimal growth and production",
          "Automated Egg Collection: Robotic systems for efficient and hygienic egg handling",
          "Sustainable Practices: Waste management, biogas production, and eco-friendly farming",
          "Genetic Improvement: Breeding for disease resistance and climate adaptation",
          "Direct-to-Consumer: Online platforms for selling eggs and poultry products",
          "Vertical Poultry: Space-efficient multi-level poultry farming systems"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your poultry science journey",
        color: "#C20000",
        content: [
          "Study avian biology and genetics in school to build foundational knowledge",
          "Visit poultry research labs or modern farms to understand operations",
          "Learn basic farm accounting and stock management principles",
          "Explore poultry nutrition and feed formulation basics",
          "Follow poultry industry news and technological innovations",
          "Join agriculture clubs and participate in poultry-related projects"
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
        title: "A Day in the Life: Ramesh, Sericulture Farmer & Entrepreneur",
        icon: "Clock",
        description: "Real workflow of a sericulturist.",
        color: "#DA1313",
        content: [
          "5:30 AM - Mulberry Leaf Harvest: Ramesh arrives at his sericulture farm in Karnataka. He harvests fresh mulberry leaves for silkworm feed. He checks leaf quality and stores them in cool conditions.",
          "7:00 AM - Silkworm Rearing: He inspects silkworm rearing beds for health and development. He monitors temperature (24-26°C) and humidity (75-80%) levels. He removes dead worms and diseased cocoons.",
          "9:00 AM - Feeding Management: He feeds silkworms with fresh mulberry leaves 4-5 times daily. He cleans rearing beds and removes waste. He maintains detailed records of worm development.",
          "11:00 AM - Disease Monitoring: He scouts for silkworm diseases like grasserie and muscardine. He applies preventive measures and quarantines affected batches.",
          "1:00 PM - Cocoon Inspection: He checks cocoon development and maturity. He identifies ready cocoons for harvesting. He plans stifling (killing pupae) schedule.",
          "3:00 PM - Cocoon Processing: He stifles cocoons using steam or hot air. He sorts cocoons by size and quality. He prepares them for reeling.",
          "5:00 PM - Reeling & Silk Production: He operates reeling machines to extract silk threads from cocoons. He grades silk by quality and fineness.",
          "7:00 PM - Business Management: He updates production records, tracks yields, and plans next rearing cycle. He coordinates with buyers and manages finances."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Strong interest in entomology (study of insects) and biology",
          "Patient and meticulous with ability to maintain precise conditions",
          "Deep empathy for rural development and traditional crafts",
          "Eye for detail in silk quality, grading, and processing",
          "Business acumen for farm management and market linkages",
          "Physical stamina for hands-on work in rearing facilities"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From mulberry farms to silk reeling",
        color: "#DA1313",
        content: [
          "Mulberry Cultivation: Growing and harvesting quality mulberry leaves for worm feed",
          "Silkworm Rearing: Managing temperature, humidity, and feeding for optimal growth",
          "Disease Management: Monitoring and controlling silkworm diseases and pests",
          "Cocoon Harvesting: Stifling and processing cocoons for silk extraction",
          "Silk Reeling: Operating reeling machines to extract and grade silk threads",
          "Quality Control: Ensuring silk meets market standards and export requirements"
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
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Central Silk Board (CSB) Bangalore, Central Sericultural Research & Training Institute (CSRTI) Mysuru, University of Agricultural Sciences (UAS) Bangalore, Assam Agricultural University (AAU) Jorhat",
          "Private: Sam Higginbottom University (SHUATS) Prayagraj, Lovely Professional University (LPU) Jalandhar, Amity University Noida, Shoolini University Solan",
          "Online: ICAR e-courses, Swayam/NPTEL, IGNOU (Sericulture Programs), Central Silk Board (CSB) Online Training"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: "#DA1313",
        content: [
          "Conventional: Sericulture Development Officer, Silkworm Rearing & Breeding Specialist, Silk Reeling & Processing Unit Manager, Central Silk Board Research Scientist, Silk Export Quality Manager",
          "New-Age & AI Driven: AI-Based Silkworm Disease Detection Analyst, IoT-Enabled Smart Silkworm Rearing Technologist, Genetic Improvement & Biotech Silk Researcher, Automated Silk Quality Grading Systems Engineer",
          "Remote/Entrepreneurship: Handloom Silk Brand Founder & Exporter, Freelance Sericulture Project Consultant, Online Silk Craft & Training Platform Creator, Organic / Ahimsa Silk Startup Entrepreneur, Silk Tourism Experience Designer"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of sericulture work",
        color: "#C20000",
        content: [
          "Silkworm diseases and pest management are critical for survival",
          "Labor-intensive process requires skilled and dedicated workers",
          "Market price volatility for raw silk affects profitability",
          "Climate sensitivity affects mulberry growth and worm rearing",
          "Competition from synthetic fibers and other silk-producing countries",
          "Seasonal nature of production limits year-round income",
          "Export compliance and quality standards for international markets"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in sericulture",
        color: "#C20000",
        content: [
          "Organic & Ahimsa Silk: Growing demand for ethical, cruelty-free silk production",
          "Biotech Silkworms: Genetically improved worms for higher yield and disease resistance",
          "IoT Monitoring: Smart sensors for temperature, humidity, and worm health tracking",
          "Automated Reeling: Advanced machinery for faster and more efficient silk extraction",
          "Mulberry Diversification: Growing medicinal and nutritional mulberry varieties",
          "Silk Blends: Creating innovative fabrics combining silk with other sustainable fibers",
          "Direct-to-Consumer: Online platforms for selling silk products directly to consumers",
          "Agri-Tourism: Silk farm visits and workshops for urban consumers"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your sericulture journey",
        color: "#C20000",
        content: [
          "Learn about insect biology and textile fibers in school",
          "Visit silk cooperatives or Government Grainage centers to understand operations",
          "Study the history of silk trade and global fashion trends",
          "Learn about mulberry cultivation and silkworm rearing basics",
          "Explore the cultural and economic significance of silk in India",
          "Join agriculture clubs and participate in sericulture exhibitions"
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
        title: "A Day in the Life: Priya, Vertical Farm Manager & Tech Innovator",
        icon: "Clock",
        description: "Real workflow of a vertical farming professional.",
        color: "#DA1313",
        content: [
          "6:00 AM - System Check: Priya arrives at the vertical farm in Bengaluru. She checks all IoT sensors for temperature, humidity, CO2, and light levels. She reviews overnight data on her tablet.",
          "7:00 AM - Nutrient Management: She tests nutrient solution pH and EC (electrical conductivity). She adjusts nutrient concentrations based on crop stage. She ensures water circulation is optimal.",
          "9:00 AM - Crop Inspection: She walks through all vertical layers inspecting plant health. She checks for nutrient deficiencies, pest issues, and growth progress. She removes any diseased plants.",
          "11:00 AM - LED & Light Optimization: She adjusts LED light intensity and spectrum based on crop growth stage. She optimizes photoperiod for maximum yield and quality.",
          "1:00 PM - Harvesting & Packaging: She harvests mature crops (lettuce, microgreens, herbs). She washes, sorts, and packages produce for delivery. She maintains food safety standards.",
          "3:00 PM - Data Analysis: She analyzes yield data, water usage, and energy consumption. She uses AI tools to predict optimal growing conditions. She identifies areas for improvement.",
          "5:00 PM - Maintenance: She performs preventive maintenance on pumps, filters, and electrical systems. She cleans growing trays and sterilizes equipment.",
          "7:00 PM - Planning & Coordination: She plans next crop cycle, coordinates with buyers, and manages inventory. She updates production records and forecasts."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: "#C20000",
        content: [
          "Strong interest in both agriculture and digital technology",
          "Precision-oriented mind for nutrient management and optimization",
          "Passion for sustainability and resource conservation",
          "Comfortable with IoT, sensors, and LED lighting technology",
          "Problem-solving skills for troubleshooting complex systems",
          "Data-driven mindset for analyzing and improving yields"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Designing and managing indoor farms",
        color: "#DA1313",
        content: [
          "System Design: Planning vertical layers, installing lights, pipes, and sensors",
          "Monitoring: Tracking pH, water temperature, light, and nutrients via IoT",
          "Nutrient Management: Mixing precise mineral solutions for optimal plant growth",
          "Crop Management: Planting, monitoring growth, and harvesting crops",
          "Maintenance: Maintaining pumps, filters, electronics, and sterilization",
          "Data Analysis: Using AI to optimize conditions and predict yields"
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
        icon: "Building2",
        description: "Top institutions across India.",
        color: "#C20000",
        content: [
          "Government: Indian Agricultural Research Institute (IARI) New Delhi, Indian Institute of Horticultural Research (IIHR) Bangalore, Tamil Nadu Agricultural University (TNAU) Coimbatore, National Institute of Plant Genome Research (NIPGR) New Delhi",
          "Private: Amity University Noida, Lovely Professional University (LPU) Jalandhar, Shoolini University Solan, SRM Institute of Science and Technology Chennai",
          "Online: Swayam/NPTEL, ICAR e-courses, Coursera (Vertical Farming & Urban Agriculture Courses), Udemy (Vertical Farming & Hydroponics Programs)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles in vertical farming.",
        color: "#DA1313",
        content: [
          "Conventional: Vertical Farm Operations Manager, Controlled Environment Agriculture (CEA) Technician, Nutrient Solution & Fertigation Specialist, Vertical Farm Crop Production Supervisor, Farm Systems Engineer",
          "New-Age & AI Driven: AI-Powered Climate Control Systems Engineer, IoT-Based Automated Vertical Farm Technologist, Machine Learning Crop Yield Optimization Analyst, LED Grow Light & Photobiology Research Scientist, Precision Agriculture Data Scientist",
          "Remote/Entrepreneurship: Urban Vertical Farm Startup Founder, Freelance Hydroponics / Aeroponics Consultant, Online Vertical Farming Course & Training Creator, Microgreens & Specialty Herbs Brand Entrepreneur, Agri-Tech Solution Provider"
        ]
      },
      {
        id: "challenges",
        title: "Key Challenges",
        icon: "AlertCircle",
        description: "Realities of vertical farming work",
        color: "#C20000",
        content: [
          "High initial capital investment for farm setup and infrastructure",
          "Significant electricity costs for LED lighting and climate control",
          "Need for continuous technical expertise and system monitoring",
          "Market competition from traditional and organic farming",
          "Regulatory compliance and food safety standards",
          "Skilled labor shortage in the emerging sector",
          "Consumer perception and premium pricing challenges"
        ]
      },
      {
        id: "emerging",
        title: "Emerging Trends & Future Skills",
        icon: "Zap",
        description: "What's next in vertical farming",
        color: "#C20000",
        content: [
          "AI & Machine Learning: Predictive analytics for optimal growing conditions",
          "Renewable Energy: Solar-powered vertical farms for sustainability",
          "Blockchain Traceability: Farm-to-consumer tracking for transparency",
          "Robotic Automation: Automated harvesting and crop management systems",
          "Vertical Aquaponics: Combining fish farming with vegetable production",
          "Modular Designs: Scalable and portable vertical farm units",
          "Specialty Crops: Growing high-value medicinal and exotic plants",
          "Urban Integration: Rooftop and building-integrated vertical farms"
        ]
      },
      {
        id: "startnow",
        title: "Start Now (Class 9–12)",
        icon: "Zap",
        description: "Beginning your vertical farming journey",
        color: "#C20000",
        content: [
          "Assemble a small DIY hydroponic kit at home to learn basics",
          "Learn IoT sensors and Arduino programming for automation",
          "Study plant physiology and nutrient absorption in science class",
          "Explore LED lighting technology and its effects on plant growth",
          "Follow vertical farming startups and industry innovations",
          "Participate in science fairs with hydroponic or aeroponic projects"
        ]
      }
    ]
  },
};
