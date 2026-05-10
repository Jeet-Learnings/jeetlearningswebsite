import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";

export const environmentUpdateData: Record<string, CareerPageData> = {
  environmental_scientist: {
    slug: "environmental_scientist",
    badge: "The Planet Protector for Class 10+",
    heading: "Environmental Scientist",
    subheading: "Solve Earth's greatest challenges. Protect ecosystems and communities. Build sustainable futures. Join ₹4L–₹50L+ market with 12% annual growth.",
    whyCards: [
      { icon: "Leaf", title: "12% Annual Growth", description: "Environmental science market growing rapidly. India's green economy expanding. Massive opportunity as nation prioritizes sustainability.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹50L+ Salaries", description: "Entry-level ₹4L–₹7L. Mid-level ₹12L–₹25L. Senior specialists ₹30L–₹50L+. Research grants and consulting income.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, EU, Australia. International NGOs, UN agencies, multinational corporations. Remote research roles abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Climate Crisis Solvers", description: "India's environmental challenges create urgent demand. Your expertise directly impacts millions. Legacy-building career with real-world impact.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Master's (4-5 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET/JEE or University Entrance", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹50L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "12%", label: "Annual Market Growth", gradient: "from-green-500 to-green-600" },
      { value: "₹50L+", label: "Senior Specialist Salaries", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Protecting Earth through science and innovation.",
        color: RED,
        content: [
          "Environmental Scientist Definition: A professional who studies Earth's systems—air, water, soil, ecosystems—to understand and solve environmental problems. Bridge between nature and human society.",
          "The Role: The Detective (investigate pollution sources, trace contaminants, understand environmental degradation), The Problem Solver (design solutions for air quality, water treatment, waste management), The Advocate (communicate environmental risks to policymakers and public).",
          "What They Do: Conduct field research, analyze water and soil samples, monitor air quality, assess environmental impact of projects, design remediation strategies, develop sustainability policies, work with communities on conservation.",
          "Why It Matters: India faces critical environmental challenges—air pollution in Delhi, water scarcity in Gujarat, deforestation in Northeast. Environmental Scientists are frontline warriors solving these crises. Your work directly protects millions.",
          "The Scope: Work in government agencies (CPCB, SPCB), NGOs, research institutions, multinational corporations, consulting firms, or as independent environmental consultant.",
          "The Impact: You're not just studying nature—you're protecting it. You're ensuring clean air for children to breathe, clean water for communities to drink, and sustainable futures for generations."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Earth Guardian",
        icon: "Clock",
        description: "Real workflow of an environmental scientist.",
        color: RED2,
        content: [
          "6:30 AM –  The Field Mission: Day begins early at a river in Gurgaon. Collecting water samples from multiple points. Using portable testing kits to measure pH, dissolved oxygen, heavy metals. Data will reveal if factory upstream is polluting.",
          "10:00 AM –  Lab Analysis: Back at laboratory. Running samples through sophisticated equipment—Gas Chromatography, Mass Spectrometry. Identifying exact pollutants and their concentrations. Like detective work, but with molecules.",
          "1:00 PM –  The Strategy Meeting: Meet with municipal corporation officials. Presenting findings from last month's air quality study. Recommending specific actions—restrict traffic on certain roads, plant trees in pollution hotspots. Your science drives policy.",
          "3:30 PM –  Community Engagement: Head to local school. Teaching children about water conservation and waste segregation. Seeing their enthusiasm reminds you why this work matters. You're not just solving problems—you're building environmental consciousness.",
          "5:30 PM –  Report Writing: Back at desk, compiling data into comprehensive Environmental Impact Assessment (EIA) report. This report will determine if a new factory gets permission to operate. Your work protects communities.",
          "7:00 PM –  Research Planning: Reviewing latest climate data. Planning next research project on urban heat islands. Feeling energized knowing your work contributes to global climate solutions."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Scientist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Curiosity (want to understand how nature works?), Passion for Planet (care deeply about environmental issues?), Problem-Solver (enjoy tackling complex challenges?).",
          "Soft Skills: Communication (explain complex science to non-scientists?), Advocacy (comfortable speaking up for environmental protection?), Collaboration (work with diverse teams—scientists, engineers, policymakers?).",
          "Hard Skills: Scientific Method (design experiments and analyze data), Laboratory Techniques (proficiency with testing equipment), Data Analysis (interpret environmental data), GIS & Remote Sensing (map environmental changes).",
          "The Self-Check: Do you love nature? Can you think scientifically? Do you want to solve real-world problems? If yes, you have the Scientist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Research Cycle",
        icon: "Briefcase",
        description: "The complete environmental scientist workflow.",
        color: RED2,
        content: [
          "Field Research: Collecting samples and data from natural environments. Monitoring environmental conditions.",
          "Laboratory Analysis: Testing samples to identify pollutants and contaminants. Analyzing environmental data.",
          "Data Interpretation: Understanding what data reveals about environmental health. Identifying trends and problems.",
          "Report Writing: Documenting findings in Environmental Impact Assessments and research papers.",
          "Policy Recommendations: Suggesting solutions and regulations based on scientific findings.",
          "Community Engagement: Communicating environmental risks and solutions to public and stakeholders.",
          "Compliance Monitoring: Ensuring organizations follow environmental regulations.",
          "Research & Innovation: Developing new methods and technologies for environmental protection."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Traditional Academic Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Biology)",
          "Step 2: Pursue BSc in Environmental Science or related field (3 years)",
          "Step 3: Complete MSc in Environmental Science or specialization (2 years)",
          "Step 4: Gain internship experience in research institutions or government agencies",
          "Step 5: Clear UPSC/State PSC for government positions or join private sector",
          "Step 6: Advance to Senior Environmental Scientist or Research Lead roles",
          "Pathway B: Engineering to Environment Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Mathematics)",
          "Step 2: Pursue BTech in Environmental Engineering (4 years)",
          "Step 3: Complete MTech in Environmental Engineering or related specialization",
          "Step 4: Gain experience in pollution control and environmental management",
          "Step 5: Pursue certifications in environmental auditing or sustainability",
          "Step 6: Join as Environmental Consultant or Project Manager",
          "Pathway C: Research & Specialization Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Biology/Chemistry/Geology (3 years)",
          "Step 3: Complete MSc in specialized environmental field (2 years)",
          "Step 4: Pursue PhD in environmental science or related discipline (3-4 years)",
          "Step 5: Conduct cutting-edge research and publish findings",
          "Step 6: Join as Research Scientist or University Professor"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹40 LPA –  ₹1.5 Crore",
          "Senior / Lead Role (10+ yrs): ₹22 LPA –  ₹45 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 LPA –  ₹22 LPA",
          "Junior / Associate (3–5 yrs): ₹6 LPA –  ₹12 LPA",
          "Entry Level (0–2 yrs): ₹4 LPA –  ₹7 LPA",
          "Note: Government positions offer job security; private sector offers higher salaries. Research grants supplement income.",
          "Where Are the Jobs?",
          "Top Cities: Delhi-NCR, Bengaluru, Mumbai, Hyderabad, Pune, Chennai.",
          "Top Industries: Government Agencies (CPCB, SPCB), NGOs, Multinational Corporations, Consulting Firms, Research Institutions.",
          "Global Demand: High in USA, EU, Australia, Canada. UN agencies and international NGOs actively recruiting.",
          "Top Institutions",
          "Government: Indian Institute of Science (IISc) Bangalore, Delhi University, Banaras Hindu University, University of Pune, Anna University Chennai",
          "Private: FLAME University, Ashoka University, Symbiosis Institute, Manipal University, Christ University",
          "Online: NPTEL (IIT courses), Coursera (Environmental Science), edX (Sustainability courses), Swayam (UGC courses)",
          "Career Opportunities",
          "Conventional",
          "Environmental Consultant",
          "Pollution Control Officer",
          "Environmental Auditor",
          "Water Quality Analyst",
          "New-age and AI driven",
          "Climate Data Scientist",
          "Environmental AI Specialist",
          "Sustainability Strategist",
          "Green Technology Developer",
          "Remote/Entrepreneurship",
          "Environmental Research Consultant",
          "Sustainability Advisor",
          "Green Startup Founder",
          "Environmental Content Creator"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: RED2,
        content: [
          "Government Institutions: ₹10,000–₹50,000 per year for degree. Very affordable but highly competitive.",
          "Private Institutions: ₹2L–₹5L per year for degree. Better infrastructure and placement support.",
          "Duration: 3 years for bachelor's + 2 years for master's = 5 years total.",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs.",
          "Additional Costs: Field research equipment (₹20k–₹50k), certifications (₹30k–₹100k), software tools (₹10k–₹30k).",
          "Total Investment: Approximately ₹8L–₹15L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top environmental science institutes across India.",
        color: RED,
        content: [
          "National Leaders: Indian Institute of Science (IISc) Bangalore, Delhi University, Banaras Hindu University, University of Pune.",
          "Regional Excellence: Anna University Chennai, Jadavpur University Kolkata, University of Hyderabad, Panjab University Chandigarh.",
          "Private Institutions: FLAME University Pune, Ashoka University Delhi, Symbiosis Pune, Manipal University, Christ University Bangalore.",
          "Online/Distance: NPTEL (IIT courses), Swayam (UGC courses), Coursera, edX.",
          "Note: Choose institutes with strong research facilities, field stations, and industry connections."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "National Scholarship Portal (NSP): Post-matric scholarships for meritorious students.",
          "CSIR Fellowships: For pursuing research in environmental science.",
          "DBT Scholarships: Department of Biotechnology scholarships for life sciences.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Environment occasionally sponsors students for specialized programs.",
          "NGO Scholarships: Environmental NGOs offer scholarships for committed students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: RED,
        content: [
          "IAEE (Indian Association of Environmental Economists): Professional body for environmental professionals.",
          "IEMA (Institute of Environmental Management and Assessment): International certification in environmental management.",
          "ISO 14001: Environmental Management System certification.",
          "CEPI (Certified Environmental Professional India): Recognized certification for environmental professionals.",
          "UGC-NET: For pursuing academic and research positions.",
          "Continuing Education: Must stay updated on environmental regulations and climate science."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in environmental science careers.",
        color: RED2,
        content: [
          "Conventional Careers: Environmental Consultant, Pollution Control Officer, Environmental Auditor, Water Quality Analyst, Air Quality Specialist.",
          "New-Age Careers: Climate Data Scientist, Environmental AI Specialist, Sustainability Strategist, Green Technology Developer, Carbon Analyst.",
          "Specialized Roles: Environmental Impact Assessor, Waste Management Specialist, Conservation Biologist, Environmental Lawyer (with additional law degree).",
          "Entrepreneurship: Starting environmental consulting firm, green technology startup, environmental education platform.",
          "Freelancing: Environmental research consultant, sustainability advisor, environmental content creator, online course instructor."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of environmental science career.",
        color: RED,
        content: [
          "Emotional Toll: Witnessing environmental degradation daily can be psychologically challenging.",
          "Slow Policy Implementation: Your recommendations may take years to become policy.",
          "Limited Funding: Research often faces budget constraints and competition for grants.",
          "Field Hazards: Fieldwork can involve exposure to pollutants and hazardous conditions.",
          "Political Pressure: Environmental decisions often face political and corporate resistance.",
          "Data Limitations: Sometimes insufficient data to make definitive conclusions.",
          "Work-Life Balance: Research deadlines and field missions can demand long hours.",
          "Career Advancement: Limited senior positions compared to other fields."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in environmental science careers.",
        color: RED2,
        content: [
          "Climate Tech Revolution: AI and machine learning revolutionizing climate modeling and prediction.",
          "Carbon Capture Technology: New careers in carbon capture, utilization, and storage (CCUS).",
          "Circular Economy: Shift from linear to circular economy creating new environmental roles.",
          "Biodiversity Tech: Using technology to monitor and protect biodiversity.",
          "Green Finance: Environmental scientists advising on ESG (Environmental, Social, Governance) investments.",
          "Urban Sustainability: Growing focus on sustainable cities and green infrastructure.",
          "Ocean Science: Increasing demand for marine environmental scientists.",
          "Climate Justice: Environmental science intersecting with social justice and equity."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Excellence: Excel in Physics, Chemistry, and Biology. Build strong foundation.",
          "Field Observation: Start observing nature—water quality in local rivers, air quality, biodiversity.",
          "Data Analysis: Learn basic statistics and data analysis. Familiarize with Excel and Python.",
          "Environmental Activism: Join school environmental club or participate in cleanup drives.",
          "Research Projects: Conduct simple environmental research projects for school science fair.",
          "Technology Skills: Learn GIS basics, remote sensing, and environmental monitoring tools.",
          "Communication: Develop ability to explain complex environmental concepts simply.",
          "Networking: Connect with environmental professionals and organizations.",
          "Online Courses: Take free courses on Coursera or edX on environmental science.",
          "Entrance Prep: Prepare for NEET or JEE if pursuing engineering route."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Environmental Scientists",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: RED2,
        content: [
          "Dr. Madhav Gadgil: Legendary ecologist and biodiversity expert. Pioneered environmental conservation in India.",
          "Dr. Sunita Narain: Director of Centre for Science and Environment. Leading voice on environmental policy and climate justice.",
          "Dr. Vandana Shiva: Renowned environmental activist and scientist. Pioneer of organic farming and biodiversity conservation.",
          "Dr. Rajendra Pachauri: Former IPCC Chair. Global leader in climate science and sustainability.",
          "Dr. Anil Agarwal: Founder of Centre for Science and Environment. Visionary in environmental journalism and activism.",
          "Dr. Ashish Kothari: Conservation biologist and environmental thinker. Expert in biodiversity and sustainability.",
          "Dr. Chandra Bhushan: Environmental scientist and policy expert. Leading voice on air quality and pollution control."
        ]
      }
    ]
  },
  forest_officer: {
    slug: "forest_officer",
    badge: "The Guardian of Wilderness for Class 10+",
    heading: "Forest Officer",
    subheading: "Protect India's forests and wildlife. Lead conservation efforts. Build sustainable ecosystems. Join ₹5L–₹60L+ market with 8% annual growth.",
    whyCards: [
      { icon: "Trees", title: "8% Annual Growth", description: "Forest conservation market expanding. India's green cover initiatives creating opportunities. Massive demand for forest management professionals.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹5L–₹60L+ Salaries", description: "Entry-level ₹5L–₹8L. Mid-level ₹15L–₹30L. Senior officers ₹40L–₹60L+. Plus allowances and benefits.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in international conservation organizations. UNESCO, IUCN, World Wildlife Fund actively recruiting. International postings available.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Wildlife Protectors", description: "India's forests home to 80% of Asia's wildlife. Your work protects tigers, elephants, and endangered species. Direct impact on biodiversity.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Training (3-4 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "UPSC/State PSC Forest Service", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹5L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "8%", label: "Annual Market Growth", gradient: "from-green-500 to-green-600" },
      { value: "71.6M", label: "Forest Area (hectares)", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Protecting forests and wildlife through leadership and conservation.",
        color: RED,
        content: [
          "Forest Officer Definition: A government professional responsible for managing, protecting, and conserving forest resources. Leader of conservation efforts at ground level.",
          "The Role: The Guardian (protect forests from illegal logging, poaching, encroachment), The Manager (manage forest resources sustainably, plan timber operations), The Conservationist (protect wildlife, restore degraded forests, implement biodiversity programs).",
          "What They Do: Patrol forests, prevent poaching and illegal logging, manage wildlife populations, conduct forest surveys, implement conservation projects, work with local communities, manage forest fires, enforce environmental laws.",
          "Why It Matters: India's 71.6 million hectares of forests are under pressure from deforestation, climate change, and human encroachment. Forest Officers are frontline defenders protecting these vital ecosystems and the 80% of Asia's wildlife they harbor.",
          "The Scope: Work in government forest departments, wildlife sanctuaries, national parks, research institutions, or international conservation organizations.",
          "The Impact: You're not just managing trees—you're protecting entire ecosystems. You're ensuring tigers roam free, rivers flow clean, and future generations inherit a living planet."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Wilderness Guardian",
        icon: "Clock",
        description: "Real workflow of a forest officer.",
        color: RED2,
        content: [
          "5:30 AM –  The Patrol Mission: Day begins before dawn in a forest range in Madhya Pradesh. Leading patrol team on foot through dense forest. Checking for signs of poaching, illegal logging, or encroachment. Every footprint tells a story.",
          "9:00 AM –  Wildlife Monitoring: Spotting tiger pug marks and elephant dung. Recording data in field notebook. Using camera traps to monitor wildlife populations. Your observations help scientists understand ecosystem health.",
          "12:00 PM –  Community Engagement: Meeting with local villagers. Discussing forest protection and sustainable livelihood programs. Balancing conservation with community needs. Building trust is crucial.",
          "2:30 PM –  Administrative Work: Back at forest office. Reviewing reports from other patrol teams. Planning next week's operations. Coordinating with wildlife veterinarian on injured animal rescue.",
          "4:00 PM –  Fire Prevention: Monsoon season approaching. Inspecting fire watchtowers and ensuring equipment is ready. Training staff on fire management protocols. Prevention is better than fighting forest fires.",
          "6:00 PM –  Data Analysis: Compiling monthly wildlife census data. Analyzing trends in animal populations. This data informs conservation strategies and policy decisions."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Guardian's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Love for Nature (passionate about forests and wildlife?), Leadership (comfortable making decisions in field?), Physical Fitness (ready for challenging terrain and weather?).",
          "Soft Skills: Communication (work with diverse stakeholders—villagers, officials, scientists?), Problem-Solving (handle wildlife conflicts and poaching incidents?), Resilience (work in remote areas with limited resources?).",
          "Hard Skills: Forest Management (understand silviculture and forest ecology), Wildlife Biology (knowledge of animal behavior and conservation), GIS & Remote Sensing (map forest resources), Law Enforcement (knowledge of wildlife protection laws).",
          "The Self-Check: Do you love forests? Can you lead teams? Are you physically fit? Do you want to protect wildlife? If yes, you have the Guardian's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Conservation Cycle",
        icon: "Briefcase",
        description: "The complete forest officer workflow.",
        color: RED2,
        content: [
          "Forest Protection: Patrolling forests to prevent poaching, illegal logging, and encroachment.",
          "Wildlife Management: Monitoring animal populations, managing human-wildlife conflicts, protecting endangered species.",
          "Resource Management: Managing timber operations, planning sustainable harvesting, maintaining forest health.",
          "Fire Management: Preventing and fighting forest fires. Training staff on fire safety protocols.",
          "Community Engagement: Working with local communities on conservation and sustainable livelihoods.",
          "Law Enforcement: Enforcing wildlife protection laws and environmental regulations.",
          "Research Support: Collecting data for wildlife research and forest surveys.",
          "Administrative Duties: Managing staff, budgets, reports, and coordination with higher authorities."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: UPSC Forest Service Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Biology)",
          "Step 2: Pursue BSc in Forestry or related field (4 years)",
          "Step 3: Work as Forest Guard or Ranger (1-2 years minimum)",
          "Step 4: Clear UPSC Civil Service Exam (Forest Service)",
          "Step 5: Complete Forest Service training at academy",
          "Step 6: Join as Assistant Conservator of Forests (ACF) or Forest Officer",
          "Pathway B: State Forest Service Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Forestry (4 years)",
          "Step 3: Clear State PSC Forest Service Exam",
          "Step 4: Complete state-level forest training",
          "Step 5: Join as Forest Officer in state forest department",
          "Step 6: Advance to senior positions like Divisional Forest Officer (DFO)",
          "Pathway C: Wildlife Conservation Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Wildlife Biology or Zoology (3 years)",
          "Step 3: Complete MSc in Wildlife Science or Conservation Biology",
          "Step 4: Gain experience in wildlife sanctuaries or national parks",
          "Step 5: Clear wildlife service exams or join NGOs",
          "Step 6: Become Wildlife Officer or Conservation Manager"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA –  ₹1.8 Crore",
          "Senior / Lead Role (10+ yrs): ₹28 LPA –  ₹50 LPA",
          "Mid-Level Professional (5–8 yrs): ₹15 LPA –  ₹28 LPA",
          "Junior / Associate (3–5 yrs): ₹8 LPA –  ₹15 LPA",
          "Entry Level (0–2 yrs): ₹5 LPA –  ₹8 LPA",
          "Note: Government positions offer excellent job security and benefits. Allowances for remote postings. Pension benefits substantial.",
          "Where Are the Jobs?",
          "Top Cities/Regions: Madhya Pradesh, Chhattisgarh, Odisha, Jharkhand, Assam, Kerala, Himachal Pradesh.",
          "Top Industries: Government Forest Departments, National Parks, Wildlife Sanctuaries, NGOs, International Conservation Organizations.",
          "Global Demand: High in international conservation organizations (WWF, IUCN, UNESCO). Postings in Africa and Southeast Asia.",
          "Top Institutions",
          "Government: Indian Institute of Forest Management (IIFM) Bhopal, Forest Research Institute (FRI) Dehradun, State Forest Academies",
          "Private: Wildlife Institute of India (WII) Dehradun, Ashoka University, FLAME University",
          "Online: NPTEL (Forestry courses), Coursera (Conservation Biology), edX (Environmental Management)",
          "Career Opportunities",
          "Conventional",
          "Forest Officer",
          "Wildlife Officer",
          "Divisional Forest Officer (DFO)",
          "Range Officer",
          "New-age and AI driven",
          "Forest Data Scientist",
          "Wildlife Monitoring Specialist",
          "Climate Adaptation Specialist",
          "Drone-Based Forest Surveyor",
          "Remote/Entrepreneurship",
          "Forest Conservation Consultant",
          "Eco-Tourism Manager",
          "Wildlife Documentary Producer",
          "Conservation NGO Founder"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: RED2,
        content: [
          "Government Institutions: ₹15,000–₹60,000 per year for forestry degree. Very affordable but highly competitive.",
          "Private Institutions: ₹2.5L–₹6L per year for forestry degree. Better infrastructure and placement support.",
          "Duration: 4 years for bachelor's degree in forestry.",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs.",
          "Additional Costs: Field equipment (₹30k–₹60k), certifications (₹20k–₹50k), exam coaching (₹50k–₹150k).",
          "Total Investment: Approximately ₹6L–₹12L for complete degree and exam preparation.",
          "ROI: With entry-level government salaries of ₹5L–₹8L per annum plus benefits, you can recover investment in 1-2 years. Excellent job security and pension."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top forestry and wildlife institutes across India.",
        color: RED,
        content: [
          "National Leaders: Forest Research Institute (FRI) Dehradun, Indian Institute of Forest Management (IIFM) Bhopal, Wildlife Institute of India (WII) Dehradun.",
          "State Universities: Indira Gandhi National Forest Academy (IGNFA) Dehradun, Banaras Hindu University, University of Allahabad.",
          "Regional Excellence: Sher-e-Kashmir University of Agricultural Sciences (Kashmir), Acharya N.G. Ranga Agricultural University (Andhra Pradesh).",
          "Private Institutions: Ashoka University Delhi, FLAME University Pune, Manipal University.",
          "Online/Distance: NPTEL (IIT courses), Swayam (UGC courses), Coursera.",
          "Note: Choose institutes with strong field stations, research facilities, and connections with forest departments."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "National Scholarship Portal (NSP): Post-matric scholarships for meritorious students.",
          "Ministry of Environment Scholarships: For pursuing forestry and wildlife studies.",
          "State Forest Department Sponsorships: Many states sponsor students for forestry degrees.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "CSIR Fellowships: For pursuing research in forestry and wildlife.",
          "NGO Scholarships: Conservation NGOs offer scholarships for committed students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: RED,
        content: [
          "UPSC Forest Service: Mandatory for central government forest officer positions.",
          "State PSC Forest Service: Required for state-level forest officer positions.",
          "Indian Forestry Society: Professional body for networking and professional development.",
          "IUCN Certifications: International certifications in conservation management.",
          "Wildlife Management Certification: Specialized certifications in wildlife conservation.",
          "Continuing Education: Must stay updated on forest management practices and wildlife conservation."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in forest and wildlife careers.",
        color: RED2,
        content: [
          "Conventional Careers: Forest Officer, Wildlife Officer, Divisional Forest Officer, Range Officer, Forest Guard.",
          "New-Age Careers: Forest Data Scientist, Wildlife Monitoring Specialist, Climate Adaptation Specialist, Drone-Based Forest Surveyor.",
          "Specialized Roles: Tiger Reserve Manager, Elephant Corridor Manager, Wetland Manager, Biosphere Reserve Director.",
          "Entrepreneurship: Starting eco-tourism ventures, forest conservation consulting, wildlife education platforms.",
          "Freelancing: Forest conservation consultant, wildlife documentary producer, environmental journalist, conservation NGO founder."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of forest officer career.",
        color: RED,
        content: [
          "Physical Demands: Patrolling remote forests in challenging terrain and weather conditions.",
          "Safety Risks: Encounters with wildlife, poachers, and dangerous situations.",
          "Remote Postings: Often stationed in isolated areas far from family and urban amenities.",
          "Limited Resources: Working with budget constraints and outdated equipment.",
          "Political Pressure: Balancing conservation with political and economic interests.",
          "Emotional Toll: Witnessing wildlife suffering and forest destruction.",
          "Work-Life Balance: Emergency situations like forest fires demand immediate response.",
          "Career Advancement: Limited senior positions compared to other government services."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in forest and wildlife careers.",
        color: RED2,
        content: [
          "Technology Integration: Drones, AI, and satellite imagery revolutionizing forest monitoring.",
          "Climate Adaptation: New roles in helping forests adapt to climate change.",
          "Biodiversity Tech: Using technology to track and protect endangered species.",
          "Eco-Tourism Growth: Sustainable tourism creating new forest officer roles.",
          "Carbon Markets: Forest officers managing carbon credit programs.",
          "Community-Based Conservation: Shift toward community-led forest management.",
          "Urban Forests: Growing focus on urban green spaces and city forests.",
          "International Collaboration: Increasing cross-border conservation initiatives."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Excellence: Excel in Biology, Chemistry, and Environmental Science.",
          "Physical Fitness: Build stamina and strength. Join sports or outdoor activities.",
          "Nature Knowledge: Learn about local flora and fauna. Develop field observation skills.",
          "Leadership: Take on leadership roles in school clubs and activities.",
          "Communication: Develop ability to work with diverse communities.",
          "Technology Skills: Learn GIS basics, drone operation, and data analysis.",
          "Environmental Activism: Join conservation clubs or participate in tree-planting drives.",
          "Outdoor Skills: Learn camping, navigation, and wilderness survival basics.",
          "Networking: Connect with forest officers and conservation professionals.",
          "Entrance Prep: Prepare for UPSC/State PSC exams if pursuing government route."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Forest Officers & Conservationists",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: RED2,
        content: [
          "Salim Ali: Legendary ornithologist and conservationist. Pioneer of bird conservation in India.",
          "M.K. Ranjitsinh: Visionary forest officer who saved the Asiatic Lion from extinction.",
          "Valmik Thapar: Renowned tiger conservationist and wildlife filmmaker. Global leader in tiger protection.",
          "Raghu Chundawat: Tiger researcher and conservationist. Expert in tiger behavior and conservation.",
          "Ullas Karanth: Wildlife biologist and conservation scientist. Pioneer in wildlife monitoring technology.",
          "Priya Davidar: Conservation biologist and environmental advocate. Expert in biodiversity protection.",
          "Arun Ranganathan: Forest officer and wildlife expert. Leader in human-wildlife conflict mitigation."
        ]
      }
    ]
  },
  geology: {
    slug: "geology",
    badge: "The Earth Detective for Class 10+",
    heading: "Geologist",
    subheading: "Unlock Earth's secrets. Discover minerals and resources. Predict natural disasters. Join ₹4L–₹55L+ market with 10% annual growth.",
    whyCards: [
      { icon: "Gem", title: "10% Annual Growth", description: "Geology market expanding with mining, energy, and climate research. India's mineral wealth creating opportunities. Geoscience becoming critical field.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹55L+ Salaries", description: "Entry-level ₹4L–₹7L. Mid-level ₹12L–₹25L. Senior specialists ₹30L–₹55L+. Consulting and research income.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in oil & gas, mining, environmental consulting. International postings in Africa, Middle East, Southeast Asia. Remote research roles.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Earth Protectors", description: "Geologists predict earthquakes, tsunamis, landslides. Your work saves lives. Climate change research creating urgent demand for geoscientists.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Master's (4-5 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET/JEE or University Entrance", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹55L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "10%", label: "Annual Market Growth", gradient: "from-green-500 to-green-600" },
      { value: "₹55L+", label: "Senior Specialist Salaries", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Understanding Earth's structure, resources, and hazards.",
        color: RED,
        content: [
          "Geologist Definition: A scientist who studies Earth's materials, structures, and processes. Unlocks secrets of rocks, minerals, and Earth's history.",
          "The Role: The Detective (investigate rock formations, trace mineral deposits, understand geological history), The Resource Hunter (locate oil, gas, metals, water), The Hazard Predictor (forecast earthquakes, landslides, volcanic eruptions).",
          "What They Do: Conduct field surveys, collect rock and mineral samples, analyze geological structures, map subsurface resources, assess natural hazards, conduct laboratory analysis, write geological reports, advise on construction and mining projects.",
          "Why It Matters: India sits on diverse mineral wealth and faces significant geological hazards. Geologists are essential for resource exploration, disaster prevention, and understanding climate change impacts on Earth systems.",
          "The Scope: Work in government agencies (GSI, CGWB), mining companies, oil & gas corporations, environmental consulting firms, research institutions, or as independent consultant.",
          "The Impact: You're not just studying rocks—you're unlocking resources that power civilization, predicting disasters that save lives, and understanding Earth's past to protect its future."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Earth Detective",
        icon: "Clock",
        description: "Real workflow of a geologist.",
        color: RED2,
        content: [
          "6:00 AM –  The Field Expedition: Day begins in a remote mountain range in Himachal Pradesh. Hiking to geological sites with field kit. Collecting rock samples from different layers. Each rock tells story of Earth's history.",
          "10:00 AM –  Geological Mapping: Using GPS and geological compass to map rock formations. Sketching cross-sections showing subsurface structure. This data will help mining company plan extraction safely.",
          "1:00 PM –  Sample Analysis: Back at field camp. Using portable testing equipment to analyze mineral composition. Identifying ore types and assessing quality. Preliminary data guides next phase of exploration.",
          "3:30 PM –  Hazard Assessment: Meeting with local government officials. Presenting findings on landslide risk in region. Recommending mitigation measures—slope stabilization, early warning systems. Your work prevents disasters.",
          "5:00 PM –  Lab Work: Back at laboratory. Running samples through X-ray diffraction and electron microscope. Determining exact mineral composition and crystal structure.",
          "7:00 PM –  Report Writing: Compiling day's findings into comprehensive geological report. This report will guide exploration strategy and investment decisions."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Geologist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Curiosity (want to understand how Earth works?), Patience (geological processes take millions of years to understand?), Adventurous (comfortable working in remote field locations?).",
          "Soft Skills: Observation (notice subtle differences in rock formations?), Communication (explain complex geology to non-scientists?), Problem-Solving (interpret geological data to solve real problems?).",
          "Hard Skills: Mineralogy (identify minerals and rocks), Structural Geology (understand rock deformation), Geochemistry (analyze chemical composition), GIS & Remote Sensing (map geological features), Laboratory Techniques.",
          "The Self-Check: Do you love rocks and Earth science? Can you work in field conditions? Do you enjoy solving geological puzzles? If yes, you have the Geologist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Research Cycle",
        icon: "Briefcase",
        description: "The complete geologist workflow.",
        color: RED2,
        content: [
          "Field Surveys: Conducting geological surveys and mapping rock formations.",
          "Sample Collection: Collecting rock, mineral, and soil samples for analysis.",
          "Laboratory Analysis: Testing samples using various analytical techniques.",
          "Data Interpretation: Understanding what geological data reveals about Earth systems.",
          "Report Writing: Documenting findings in geological reports and research papers.",
          "Resource Assessment: Evaluating mineral and resource deposits.",
          "Hazard Assessment: Assessing geological hazards and risks.",
          "Consultation: Advising on construction, mining, and environmental projects."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Traditional Academic Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Biology/Mathematics)",
          "Step 2: Pursue BSc in Geology or Earth Sciences (3 years)",
          "Step 3: Complete MSc in Geology or specialization (2 years)",
          "Step 4: Gain internship experience in mining or oil & gas companies",
          "Step 5: Clear UPSC/State PSC for government positions or join private sector",
          "Step 6: Advance to Senior Geologist or Research Lead roles",
          "Pathway B: Engineering Geology Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Mathematics)",
          "Step 2: Pursue BTech in Geology or Mining Engineering (4 years)",
          "Step 3: Complete MTech in Engineering Geology or Geotechnical Engineering",
          "Step 4: Gain experience in construction and infrastructure projects",
          "Step 5: Pursue certifications in geotechnical engineering",
          "Step 6: Join as Engineering Geologist or Geotechnical Consultant",
          "Pathway C: Research & Specialization Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Geology or related field (3 years)",
          "Step 3: Complete MSc in specialized geological field (2 years)",
          "Step 4: Pursue PhD in geology or geoscience (3-4 years)",
          "Step 5: Conduct cutting-edge research and publish findings",
          "Step 6: Join as Research Scientist or University Professor"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹45 LPA –  ₹1.8 Crore",
          "Senior / Lead Role (10+ yrs): ₹25 LPA –  ₹50 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 LPA –  ₹25 LPA",
          "Junior / Associate (3–5 yrs): ₹6 LPA –  ₹12 LPA",
          "Entry Level (0–2 yrs): ₹4 LPA –  ₹7 LPA",
          "Note: Oil & gas sector pays 40% more. Mining sector offers field allowances. Research positions offer grants.",
          "Where Are the Jobs?",
          "Top Cities: Bangalore, Hyderabad, Delhi-NCR, Mumbai, Pune, Kolkata.",
          "Top Industries: Oil & Gas, Mining, Environmental Consulting, Government Agencies, Research Institutions.",
          "Global Demand: High in Middle East, Africa, Southeast Asia. International oil & gas companies actively recruiting.",
          "Top Institutions",
          "Government: Geological Survey of India (GSI), Indian Bureau of Mines, Central Ground Water Board",
          "Academic: Delhi University, Banaras Hindu University, University of Pune, Osmania University, Andhra University",
          "Private: FLAME University, Ashoka University, Manipal University, Christ University",
          "Online: NPTEL (IIT courses), Coursera (Geology), edX (Earth Sciences), Swayam (UGC courses)",
          "Career Opportunities",
          "Conventional",
          "Exploration Geologist",
          "Mining Geologist",
          "Petroleum Geologist",
          "Hydrogeologist",
          "New-age and AI driven",
          "Geospatial Data Scientist",
          "Climate Geology Specialist",
          "Subsurface Modeling Specialist",
          "Geothermal Energy Specialist",
          "Remote/Entrepreneurship",
          "Geological Consulting Firm Founder",
          "Environmental Geology Consultant",
          "Geotourism Developer",
          "Geological Content Creator"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: RED2,
        content: [
          "Government Institutions: ₹10,000–₹50,000 per year for degree. Very affordable but highly competitive.",
          "Private Institutions: ₹2L–₹5L per year for degree. Better infrastructure and placement support.",
          "Duration: 3 years for bachelor's + 2 years for master's = 5 years total.",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs.",
          "Additional Costs: Field equipment (₹30k–₹60k), lab equipment (₹20k–₹40k), certifications (₹30k–₹100k).",
          "Total Investment: Approximately ₹8L–₹15L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top geology and earth science institutes across India.",
        color: RED,
        content: [
          "National Leaders: Delhi University, Banaras Hindu University, University of Pune, Osmania University.",
          "Regional Excellence: Andhra University Visakhapatnam, University of Rajasthan, Panjab University Chandigarh, University of Allahabad.",
          "Private Institutions: FLAME University Pune, Ashoka University Delhi, Manipal University, Christ University Bangalore.",
          "Government Research: Geological Survey of India (GSI), Indian Bureau of Mines, Central Ground Water Board.",
          "Online/Distance: NPTEL (IIT courses), Swayam (UGC courses), Coursera, edX.",
          "Note: Choose institutes with strong field stations, laboratory facilities, and industry connections."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "National Scholarship Portal (NSP): Post-matric scholarships for meritorious students.",
          "CSIR Fellowships: For pursuing research in earth sciences.",
          "DST Scholarships: Department of Science and Technology scholarships for geoscience research.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Mines occasionally sponsors students for geology studies.",
          "Industry Scholarships: Oil & gas and mining companies offer scholarships for committed students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: RED,
        content: [
          "Indian Geological Society: Premier professional body for networking and professional development.",
          "IAEG (International Association for Engineering Geology): For engineering geology professionals.",
          "UGC-NET: For pursuing academic and research positions.",
          "Professional Geoscientist (PG) Certification: Recognized certification for geoscience professionals.",
          "GIS Certifications: Esri GIS certifications for geospatial analysis.",
          "Continuing Education: Must stay updated on geological research and industry practices."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in geology careers.",
        color: RED2,
        content: [
          "Conventional Careers: Exploration Geologist, Mining Geologist, Petroleum Geologist, Hydrogeologist, Engineering Geologist.",
          "New-Age Careers: Geospatial Data Scientist, Climate Geology Specialist, Subsurface Modeling Specialist, Geothermal Energy Specialist.",
          "Specialized Roles: Earthquake Prediction Specialist, Volcanic Hazard Analyst, Groundwater Specialist, Environmental Geologist.",
          "Entrepreneurship: Starting geological consulting firm, geotourism venture, environmental geology services.",
          "Freelancing: Geological consultant, geospatial analyst, geological content creator, online course instructor."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of geology career.",
        color: RED,
        content: [
          "Field Hazards: Fieldwork can involve exposure to harsh weather, difficult terrain, and geological hazards.",
          "Remote Postings: Often stationed in remote locations far from family and urban amenities.",
          "Limited Resources: Research often faces budget constraints and competition for grants.",
          "Slow Decision-Making: Geological processes take time; policy implementation can be slow.",
          "Political Pressure: Resource extraction decisions often face political and environmental resistance.",
          "Data Limitations: Sometimes insufficient data to make definitive conclusions.",
          "Work-Life Balance: Field seasons can demand long hours and extended time away from home.",
          "Career Advancement: Limited senior positions compared to other fields."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in geology careers.",
        color: RED2,
        content: [
          "Climate Geology: Growing focus on understanding climate change impacts on geological systems.",
          "Geothermal Energy: New careers in geothermal energy exploration and development.",
          "Subsurface Technology: AI and machine learning revolutionizing subsurface modeling.",
          "Rare Earth Elements: Increasing demand for geologists specializing in rare earth mineral exploration.",
          "Carbon Capture: Geological storage of CO2 creating new career opportunities.",
          "Asteroid Mining: Future opportunities in space geology and asteroid resource exploration.",
          "Urban Geology: Growing focus on geological hazards in urban areas.",
          "Precision Geology: Using advanced technology for precise resource mapping and extraction."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Excellence: Excel in Physics, Chemistry, and Biology. Build strong foundation.",
          "Rock Collection: Start collecting and identifying rocks and minerals from your area.",
          "Field Observation: Learn to observe geological features in nature—rock formations, soil types, water sources.",
          "Data Analysis: Learn basic statistics and data analysis. Familiarize with Excel and Python.",
          "Technology Skills: Learn GIS basics, remote sensing, and geological mapping tools.",
          "Communication: Develop ability to explain complex geological concepts simply.",
          "Outdoor Skills: Build physical fitness and comfort with outdoor fieldwork.",
          "Networking: Connect with geologists and earth science professionals.",
          "Online Courses: Take free courses on Coursera or edX on geology and earth sciences.",
          "Entrance Prep: Prepare for NEET or JEE if pursuing engineering geology route."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Geologists",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: RED2,
        content: [
          "Dr. Vinod K. Gaur: Renowned seismologist and geophysicist. Pioneer in earthquake research in India.",
          "Dr. Ashok Sahni: Paleontologist and geologist. Expert in vertebrate paleontology and evolution.",
          "Dr. Rajendra Prasad: Geologist and mineral expert. Leader in mineral resource assessment.",
          "Dr. Pradeep Srivastava: Structural geologist and tectonics expert. Authority on Himalayan geology.",
          "Dr. Kalachand Sain: Geophysicist and seismologist. Expert in crustal studies and earthquake prediction.",
          "Dr. Arun Kumar: Hydrogeologist and groundwater expert. Leader in water resource management.",
          "Dr. Satish Chandra Tripathi: Environmental geologist. Pioneer in geological hazard assessment."
        ]
      }
    ]
  },
  oceanographer: {
    slug: "oceanographer",
    badge: "The Ocean Explorer for Class 10+",
    heading: "Oceanographer",
    subheading: "Explore Earth's final frontier. Protect marine ecosystems. Unlock ocean's secrets. Join ₹4L–₹60L+ market with 15% annual growth.",
    whyCards: [
      { icon: "Waves", title: "15% Annual Growth", description: "Ocean science market expanding rapidly. Climate change and marine conservation creating urgent demand. Blue economy opportunities exploding.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹60L+ Salaries", description: "Entry-level ₹4L–₹7L. Mid-level ₹12L–₹28L. Senior specialists ₹35L–₹60L+. Research grants and consulting income.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, EU, Australia. International research vessels, UN agencies, marine conservation organizations. Remote research roles abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Ocean Guardians", description: "Oceans cover 71% of Earth, contain 80% of life. Your work protects marine biodiversity, predicts tsunamis, combats climate change. Direct impact on humanity's future.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Master's (4-5 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET/JEE or University Entrance", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "15%", label: "Annual Market Growth", gradient: "from-green-500 to-green-600" },
      { value: "71%", label: "Ocean Coverage of Earth", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Exploring and protecting Earth's oceans and marine life.",
        color: RED,
        content: [
          "Oceanographer Definition: A scientist who studies oceans—their physical properties, chemical composition, biology, and geology. Explorer of Earth's final frontier.",
          "The Role: The Explorer (discover new marine species and underwater phenomena), The Protector (conserve marine ecosystems and biodiversity), The Predictor (forecast tsunamis, understand ocean currents, predict climate impacts).",
          "What They Do: Conduct ocean research expeditions, collect water and sediment samples, study marine organisms, monitor ocean temperature and chemistry, map seafloor, assess marine pollution, develop conservation strategies, work with fishing communities.",
          "Why It Matters: Oceans regulate climate, provide food for billions, contain undiscovered species. Climate change threatens marine ecosystems. Oceanographers are frontline defenders protecting oceans and understanding their role in Earth's future.",
          "The Scope: Work in government agencies (NIOT, CSIR), research institutions, environmental organizations, oil & gas companies, or as independent marine consultant.",
          "The Impact: You're not just studying water—you're protecting the engine of Earth's climate system. You're ensuring marine biodiversity survives, food security for billions, and a habitable planet for future generations."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Ocean Explorer",
        icon: "Clock",
        description: "Real workflow of an oceanographer.",
        color: RED2,
        content: [
          "5:00 AM –  The Research Vessel: Day begins on research ship in Arabian Sea. Preparing scientific equipment for deep-sea sampling. Checking CTD (Conductivity, Temperature, Depth) sensors and water sampling bottles.",
          "8:00 AM –  Ocean Sampling: Deploying instruments to collect water samples from different ocean depths. Recording temperature, salinity, oxygen levels, and nutrient concentrations. Each sample tells story of ocean health.",
          "11:00 AM –  Marine Biology: Observing plankton under microscope. Identifying species and assessing population health. These tiny organisms form base of ocean food chain.",
          "1:30 PM –  Data Analysis: Back in ship's laboratory. Analyzing water chemistry data. Comparing current readings with historical data to identify trends and changes.",
          "3:30 PM –  Seafloor Mapping: Using sonar to map ocean floor topography. Identifying underwater features—trenches, ridges, hydrothermal vents. Creating detailed maps for future research.",
          "6:00 PM –  Community Engagement: Video conference with fishing community on shore. Sharing findings about fish populations and ocean health. Discussing sustainable fishing practices.",
          "8:00 PM –  Report Writing: Compiling day's data into research log. Planning next day's sampling strategy. Feeling energized knowing your work contributes to ocean conservation."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Ocean Explorer's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Curiosity (want to explore ocean's mysteries?), Adventure (comfortable on research vessels?), Passion for Marine Life (care deeply about ocean conservation?).",
          "Soft Skills: Observation (notice subtle changes in marine ecosystems?), Communication (explain complex ocean science to non-scientists?), Collaboration (work with diverse research teams?).",
          "Hard Skills: Marine Biology (understand ocean organisms), Physical Oceanography (ocean currents and temperature), Chemical Analysis (water chemistry), Data Analysis (interpret oceanographic data), GIS & Remote Sensing.",
          "The Self-Check: Do you love oceans? Can you work in challenging marine environments? Do you want to protect marine life? If yes, you have the Ocean Explorer's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Research Cycle",
        icon: "Briefcase",
        description: "The complete oceanographer workflow.",
        color: RED2,
        content: [
          "Ocean Research: Conducting research expeditions and collecting oceanographic data.",
          "Sample Collection: Collecting water, sediment, and biological samples from oceans.",
          "Laboratory Analysis: Testing samples to understand ocean chemistry and biology.",
          "Data Interpretation: Understanding what oceanographic data reveals about ocean health.",
          "Report Writing: Documenting findings in research papers and reports.",
          "Marine Conservation: Developing strategies to protect marine ecosystems.",
          "Climate Research: Contributing to understanding ocean's role in climate change.",
          "Community Engagement: Working with coastal communities on marine resource management."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Traditional Academic Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Biology)",
          "Step 2: Pursue BSc in Marine Science or Oceanography (3 years)",
          "Step 3: Complete MSc in Oceanography or Marine Biology (2 years)",
          "Step 4: Gain internship experience on research vessels or marine institutes",
          "Step 5: Clear UPSC/State PSC for government positions or join private sector",
          "Step 6: Advance to Senior Oceanographer or Research Lead roles",
          "Pathway B: Marine Engineering Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Mathematics)",
          "Step 2: Pursue BTech in Marine Engineering or Ocean Engineering (4 years)",
          "Step 3: Complete MTech in Marine Technology or Ocean Engineering",
          "Step 4: Gain experience in offshore oil & gas or marine infrastructure",
          "Step 5: Pursue certifications in marine technology",
          "Step 6: Join as Marine Engineer or Ocean Technology Specialist",
          "Pathway C: Research & Specialization Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Marine Science or related field (3 years)",
          "Step 3: Complete MSc in specialized oceanography field (2 years)",
          "Step 4: Pursue PhD in oceanography or marine science (3-4 years)",
          "Step 5: Conduct cutting-edge research and publish findings",
          "Step 6: Join as Research Scientist or University Professor"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA –  ₹2 Crore",
          "Senior / Lead Role (10+ yrs): ₹28 LPA –  ₹55 LPA",
          "Mid-Level Professional (5–8 yrs): ₹14 LPA –  ₹28 LPA",
          "Junior / Associate (3–5 yrs): ₹7 LPA –  ₹14 LPA",
          "Entry Level (0–2 yrs): ₹4 LPA –  ₹7 LPA",
          "Note: Research positions offer grants. Oil & gas sector pays 35% more. International postings offer premium salaries.",
          "Where Are the Jobs?",
          "Top Cities: Kochi, Mumbai, Goa, Chennai, Visakhapatnam, Kolkata.",
          "Top Industries: Government Research Institutes, Oil & Gas, Marine Conservation, Fishing Industry, Environmental Consulting.",
          "Global Demand: Very high in USA, EU, Australia, Canada. International research organizations actively recruiting.",
          "Top Institutions",
          "Government: National Institute of Oceanography (NIO) Goa, Central Marine Fisheries Research Institute (CMFRI) Kochi, Indian National Centre for Ocean Information Services (INCOIS) Hyderabad",
          "Academic: Cochin University of Science and Technology, University of Kerala, Andhra University, University of Mumbai",
          "Private: FLAME University, Ashoka University, Manipal University, Christ University",
          "Online: NPTEL (IIT courses), Coursera (Marine Science), edX (Oceanography), Swayam (UGC courses)",
          "Career Opportunities",
          "Conventional",
          "Research Oceanographer",
          "Marine Biologist",
          "Fisheries Scientist",
          "Coastal Zone Manager",
          "New-age and AI driven",
          "Ocean Data Scientist",
          "Marine Climate Specialist",
          "Underwater Drone Operator",
          "Ocean Monitoring Specialist",
          "Remote/Entrepreneurship",
          "Marine Conservation Consultant",
          "Eco-Tourism Developer",
          "Marine Documentary Producer",
          "Ocean Science Educator"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: RED2,
        content: [
          "Government Institutions: ₹10,000–₹50,000 per year for degree. Very affordable but highly competitive.",
          "Private Institutions: ₹2L–₹5L per year for degree. Better infrastructure and placement support.",
          "Duration: 3 years for bachelor's + 2 years for master's = 5 years total.",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs.",
          "Additional Costs: Research equipment (₹30k–₹60k), certifications (₹30k–₹100k), diving certifications (₹50k–₹150k).",
          "Total Investment: Approximately ₹8L–₹16L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top oceanography and marine science institutes across India.",
        color: RED,
        content: [
          "National Leaders: National Institute of Oceanography (NIO) Goa, Cochin University of Science and Technology, Central Marine Fisheries Research Institute (CMFRI) Kochi.",
          "Regional Excellence: Andhra University Visakhapatnam, University of Kerala, University of Mumbai, University of Calcutta.",
          "Private Institutions: FLAME University Pune, Ashoka University Delhi, Manipal University, Christ University Bangalore.",
          "Government Research: Indian National Centre for Ocean Information Services (INCOIS) Hyderabad, National Centre for Coastal Research (NCCR) Chennai.",
          "Online/Distance: NPTEL (IIT courses), Swayam (UGC courses), Coursera, edX.",
          "Note: Choose institutes with access to research vessels, marine laboratories, and coastal field stations."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "National Scholarship Portal (NSP): Post-matric scholarships for meritorious students.",
          "CSIR Fellowships: For pursuing research in marine science and oceanography.",
          "DST Scholarships: Department of Science and Technology scholarships for ocean research.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Earth Sciences occasionally sponsors students for oceanography studies.",
          "NGO Scholarships: Marine conservation NGOs offer scholarships for committed students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: RED,
        content: [
          "Indian Society of Oceanographers: Premier professional body for networking and professional development.",
          "PADI Diving Certification: Professional Association of Diving Instructors certification for underwater research.",
          "UGC-NET: For pursuing academic and research positions.",
          "Marine Science Certification: Recognized certifications for marine science professionals.",
          "GIS Certifications: Esri GIS certifications for marine spatial analysis.",
          "Continuing Education: Must stay updated on oceanographic research and marine conservation practices."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in oceanography careers.",
        color: RED2,
        content: [
          "Conventional Careers: Research Oceanographer, Marine Biologist, Fisheries Scientist, Coastal Zone Manager, Environmental Oceanographer.",
          "New-Age Careers: Ocean Data Scientist, Marine Climate Specialist, Underwater Drone Operator, Ocean Monitoring Specialist, Blue Economy Consultant.",
          "Specialized Roles: Coral Reef Specialist, Deep-Sea Researcher, Marine Pollution Specialist, Tsunami Warning Specialist.",
          "Entrepreneurship: Starting marine conservation consulting firm, eco-tourism venture, marine research startup.",
          "Freelancing: Marine research consultant, ocean documentary producer, marine science educator, ocean data analyst."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of oceanography career.",
        color: RED,
        content: [
          "Physical Demands: Research vessel work involves challenging sea conditions and extended time away from land.",
          "Safety Risks: Diving and deep-sea research involve inherent hazards and safety concerns.",
          "Limited Funding: Research often faces budget constraints and competition for grants.",
          "Remote Postings: Often stationed in coastal areas far from major cities.",
          "Political Pressure: Marine resource decisions often face political and economic resistance.",
          "Data Limitations: Sometimes insufficient data to make definitive conclusions about ocean systems.",
          "Work-Life Balance: Research expeditions can demand long hours and extended time away from family.",
          "Career Advancement: Limited senior positions compared to other fields."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in oceanography careers.",
        color: RED2,
        content: [
          "Climate Oceanography: Growing focus on understanding ocean's role in climate change.",
          "Blue Economy: New careers in sustainable ocean resource management and blue economy development.",
          "Ocean Technology: Autonomous underwater vehicles and AI revolutionizing ocean research.",
          "Marine Biotechnology: New opportunities in marine genetic research and bioprospecting.",
          "Ocean Acidification: Urgent research on ocean acidification and its impacts.",
          "Deep-Sea Mining: Emerging field of deep-sea mineral exploration and extraction.",
          "Marine Renewable Energy: Growing focus on ocean-based renewable energy sources.",
          "Ocean Restoration: New careers in marine ecosystem restoration and coral reef rehabilitation."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Excellence: Excel in Physics, Chemistry, and Biology. Build strong foundation.",
          "Ocean Knowledge: Learn about marine ecosystems, ocean currents, and marine life.",
          "Data Analysis: Learn basic statistics and data analysis. Familiarize with Excel and Python.",
          "Technology Skills: Learn GIS basics, remote sensing, and ocean monitoring tools.",
          "Diving Skills: Consider getting PADI diving certification if interested in underwater research.",
          "Communication: Develop ability to explain complex oceanography concepts simply.",
          "Environmental Activism: Join marine conservation clubs or participate in beach cleanups.",
          "Networking: Connect with oceanographers and marine science professionals.",
          "Online Courses: Take free courses on Coursera or edX on oceanography and marine science.",
          "Entrance Prep: Prepare for NEET or JEE if pursuing marine engineering route."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Oceanographers",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: RED2,
        content: [
          "Dr. Madhav Gadgil: Legendary ecologist and oceanographer. Pioneer in marine conservation in India.",
          "Dr. Srinivasa Reddy: Renowned oceanographer and climate scientist. Expert in Indian Ocean research.",
          "Dr. Hari Haran: Marine biologist and oceanographer. Leader in coral reef research and conservation.",
          "Dr. Shailesh Nayak: Oceanographer and geologist. Former Secretary of Ministry of Earth Sciences.",
          "Dr. Ramesh Ramachandran: Marine scientist and oceanographer. Expert in fisheries oceanography.",
          "Dr. Suresh Babu: Physical oceanographer. Pioneer in ocean modeling and forecasting.",
          "Dr. Anita Sharma: Marine biologist and oceanographer. Expert in marine biodiversity and conservation."
        ]
      }
    ]
  },
  wildlife_biologist: {
    slug: "wildlife_biologist",
    badge: "The Species Protector for Class 10+",
    heading: "Wildlife Biologist",
    subheading: "Protect endangered species. Restore ecosystems. Save biodiversity. Join ₹4L–₹55L+ market with 11% annual growth.",
    whyCards: [
      { icon: "Paw", title: "11% Annual Growth", description: "Wildlife conservation market expanding rapidly. India's biodiversity crisis creating urgent demand. Global conservation initiatives offering opportunities.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹55L+ Salaries", description: "Entry-level ₹4L–₹7L. Mid-level ₹12L–₹25L. Senior specialists ₹30L–₹55L+. Research grants and consulting income.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, EU, Africa. International conservation organizations, UN agencies, wildlife NGOs actively recruiting. Remote research roles abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Biodiversity Guardians", description: "India home to 8% of world's species. Your work protects tigers, elephants, rhinos, and countless others. Direct impact on species survival and ecosystem health.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Master's (4-5 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NEET/JEE or University Entrance", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹55L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "11%", label: "Annual Market Growth", gradient: "from-green-500 to-green-600" },
      { value: "8%", label: "World's Species in India", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Protecting wildlife and conserving biodiversity.",
        color: RED,
        content: [
          "Wildlife Biologist Definition: A scientist who studies wild animals, their behavior, ecology, and conservation. Protector of Earth's biodiversity.",
          "The Role: The Observer (study animal behavior and ecology in natural habitats), The Protector (develop conservation strategies for endangered species), The Advocate (communicate wildlife conservation needs to policymakers and public).",
          "What They Do: Conduct field research on wildlife populations, track animal movements, study habitat requirements, assess conservation status, develop breeding programs, work with communities on human-wildlife conflict, conduct genetic studies, write conservation plans.",
          "Why It Matters: India faces biodiversity crisis with species extinction accelerating. Wildlife Biologists are frontline defenders protecting endangered species, maintaining ecosystem balance, and preserving Earth's natural heritage.",
          "The Scope: Work in national parks, wildlife sanctuaries, research institutions, NGOs, government agencies, or as independent wildlife consultant.",
          "The Impact: You're not just studying animals—you're saving species from extinction. You're protecting ecosystems that sustain all life. You're ensuring future generations inherit a world rich with wildlife."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Wildlife Guardian",
        icon: "Clock",
        description: "Real workflow of a wildlife biologist.",
        color: RED2,
        content: [
          "5:30 AM –  The Field Expedition: Day begins in tiger reserve in Madhya Pradesh. Hiking through forest with tracking equipment. Looking for tiger pug marks, scat, and other signs. Every clue reveals tiger's movements and health.",
          "9:00 AM –  Camera Trap Analysis: Checking camera traps placed throughout reserve. Reviewing footage to identify individual tigers, count population, assess breeding success. Data crucial for conservation planning.",
          "12:00 PM –  Community Engagement: Meeting with local villagers. Discussing livestock protection and compensation schemes. Building trust is essential for conservation success.",
          "2:30 PM –  Lab Work: Back at research station. Analyzing DNA samples from tiger scat. Genetic analysis reveals population health, inbreeding levels, and genetic diversity.",
          "4:00 PM –  Data Analysis: Compiling population data and creating conservation models. Analyzing trends in tiger numbers and habitat quality.",
          "6:00 PM –  Report Writing: Writing conservation recommendations for park management. Your findings will guide protection strategies.",
          "8:00 PM –  Collaboration: Video call with international conservation partners. Sharing research findings and coordinating global tiger conservation efforts."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Conservationist's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: RED,
        content: [
          "Personality Traits: Passion for Wildlife (love animals and nature?), Patience (wildlife research requires long observation periods?), Resilience (work in challenging field conditions?).",
          "Soft Skills: Observation (notice subtle animal behaviors?), Communication (explain wildlife conservation to diverse audiences?), Collaboration (work with communities and other scientists?).",
          "Hard Skills: Animal Behavior (ethology), Ecology (understand ecosystems), Genetics (DNA analysis), GIS & Remote Sensing (track animal movements), Statistical Analysis (population modeling).",
          "The Self-Check: Do you love wildlife? Can you work in field conditions? Do you want to protect endangered species? If yes, you have the Conservationist's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Conservation Cycle",
        icon: "Briefcase",
        description: "The complete wildlife biologist workflow.",
        color: RED2,
        content: [
          "Field Research: Conducting wildlife surveys and population monitoring.",
          "Data Collection: Collecting behavioral, ecological, and genetic data on wildlife.",
          "Population Analysis: Analyzing population trends and assessing conservation status.",
          "Habitat Assessment: Evaluating habitat quality and identifying conservation needs.",
          "Conservation Planning: Developing strategies to protect endangered species.",
          "Community Engagement: Working with local communities on wildlife conservation.",
          "Research Publication: Publishing findings in scientific journals.",
          "Policy Advocacy: Recommending conservation policies to government agencies."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Traditional Academic Route",
          "Step 1: Complete Class 12th with Science (Physics, Chemistry, Biology)",
          "Step 2: Pursue BSc in Zoology or Wildlife Biology (3 years)",
          "Step 3: Complete MSc in Wildlife Science or Conservation Biology (2 years)",
          "Step 4: Gain internship experience in national parks or wildlife sanctuaries",
          "Step 5: Clear UPSC/State PSC for government positions or join NGOs",
          "Step 6: Advance to Senior Wildlife Biologist or Research Lead roles",
          "Pathway B: Specialized Conservation Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Zoology or related field (3 years)",
          "Step 3: Complete MSc in specialized wildlife field (2 years)",
          "Step 4: Gain experience in specific conservation area (tiger, elephant, bird conservation)",
          "Step 5: Pursue certifications in wildlife management",
          "Step 6: Join as Specialist or Conservation Manager",
          "Pathway C: Research & Specialization Route",
          "Step 1: Complete Class 12th with Science",
          "Step 2: Pursue BSc in Zoology or Biology (3 years)",
          "Step 3: Complete MSc in Wildlife Science or related field (2 years)",
          "Step 4: Pursue PhD in wildlife biology or conservation (3-4 years)",
          "Step 5: Conduct cutting-edge research and publish findings",
          "Step 6: Join as Research Scientist or University Professor"
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹45 LPA –  ₹1.8 Crore",
          "Senior / Lead Role (10+ yrs): ₹24 LPA –  ₹50 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 LPA –  ₹24 LPA",
          "Junior / Associate (3–5 yrs): ₹6 LPA –  ₹12 LPA",
          "Entry Level (0–2 yrs): ₹4 LPA –  ₹7 LPA",
          "Note: Government positions offer job security. NGO positions offer mission-driven work. Research grants supplement income.",
          "Where Are the Jobs?",
          "Top Cities/Regions: Madhya Pradesh, Chhattisgarh, Odisha, Jharkhand, Assam, Kerala, Himachal Pradesh.",
          "Top Industries: Government Wildlife Departments, National Parks, Wildlife Sanctuaries, NGOs, Research Institutions.",
          "Global Demand: Very high in USA, EU, Africa. International conservation organizations actively recruiting.",
          "Top Institutions",
          "Government: Wildlife Institute of India (WII) Dehradun, Sálim Ali Centre for Ornithology and Natural History (SACON) Tamil Nadu, Indian Institute of Science (IISc) Bangalore",
          "Academic: Delhi University, Banaras Hindu University, University of Pune, Osmania University, Andhra University",
          "Private: FLAME University, Ashoka University, Manipal University, Christ University",
          "Online: NPTEL (IIT courses), Coursera (Conservation Biology), edX (Wildlife Management), Swayam (UGC courses)",
          "Career Opportunities",
          "Conventional",
          "Wildlife Biologist",
          "Conservation Manager",
          "Field Researcher",
          "Park Ranger",
          "New-age and AI driven",
          "Wildlife Data Scientist",
          "Conservation Technology Specialist",
          "Drone-Based Wildlife Surveyor",
          "Genetic Conservation Specialist",
          "Remote/Entrepreneurship",
          "Wildlife Conservation Consultant",
          "Eco-Tourism Developer",
          "Wildlife Documentary Producer",
          "Conservation NGO Founder"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: RED2,
        content: [
          "Government Institutions: ₹10,000–₹50,000 per year for degree. Very affordable but highly competitive.",
          "Private Institutions: ₹2L–₹5L per year for degree. Better infrastructure and placement support.",
          "Duration: 3 years for bachelor's + 2 years for master's = 5 years total.",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs.",
          "Additional Costs: Field equipment (₹30k–₹60k), certifications (₹30k–₹100k), research tools (₹20k–₹50k).",
          "Total Investment: Approximately ₹8L–₹15L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top wildlife biology and conservation institutes across India.",
        color: RED,
        content: [
          "National Leaders: Wildlife Institute of India (WII) Dehradun, Sálim Ali Centre for Ornithology and Natural History (SACON) Tamil Nadu, Indian Institute of Science (IISc) Bangalore.",
          "Regional Excellence: Delhi University, Banaras Hindu University, University of Pune, Osmania University, Andhra University.",
          "Private Institutions: FLAME University Pune, Ashoka University Delhi, Manipal University, Christ University Bangalore.",
          "Government Research: National Centre for Biological Sciences (NCBS) Bangalore, Centre for Ecological Sciences (CES) Bangalore.",
          "Online/Distance: NPTEL (IIT courses), Swayam (UGC courses), Coursera, edX.",
          "Note: Choose institutes with strong field stations, research facilities, and connections with wildlife agencies."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: RED2,
        content: [
          "National Scholarship Portal (NSP): Post-matric scholarships for meritorious students.",
          "CSIR Fellowships: For pursuing research in wildlife biology and conservation.",
          "DST Scholarships: Department of Science and Technology scholarships for conservation research.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Environment occasionally sponsors students for wildlife studies.",
          "NGO Scholarships: Conservation NGOs offer scholarships for committed students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: RED,
        content: [
          "Indian Society of Naturalists: Professional body for wildlife and nature enthusiasts.",
          "Bombay Natural History Society: Premier organization for wildlife research and conservation.",
          "UGC-NET: For pursuing academic and research positions.",
          "Wildlife Management Certification: Recognized certifications for wildlife professionals.",
          "GIS Certifications: Esri GIS certifications for wildlife spatial analysis.",
          "Continuing Education: Must stay updated on conservation practices and wildlife research."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in wildlife biology careers.",
        color: RED2,
        content: [
          "Conventional Careers: Wildlife Biologist, Conservation Manager, Field Researcher, Park Ranger, Wildlife Veterinarian.",
          "New-Age Careers: Wildlife Data Scientist, Conservation Technology Specialist, Drone-Based Wildlife Surveyor, Genetic Conservation Specialist.",
          "Specialized Roles: Tiger Specialist, Elephant Specialist, Bird Specialist, Marine Mammal Specialist, Primate Specialist.",
          "Entrepreneurship: Starting wildlife conservation consulting firm, eco-tourism venture, wildlife research startup.",
          "Freelancing: Wildlife research consultant, wildlife documentary producer, conservation educator, wildlife data analyst."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of wildlife biology career.",
        color: RED,
        content: [
          "Physical Demands: Fieldwork involves challenging terrain, weather, and long hours in remote locations.",
          "Safety Risks: Working with wildlife involves encounters with dangerous animals.",
          "Emotional Toll: Witnessing species decline and habitat destruction can be psychologically challenging.",
          "Limited Funding: Research often faces budget constraints and competition for grants.",
          "Remote Postings: Often stationed in isolated areas far from family and urban amenities.",
          "Political Pressure: Conservation decisions often face political and economic resistance.",
          "Data Limitations: Sometimes insufficient data to make definitive conservation recommendations.",
          "Career Advancement: Limited senior positions compared to other fields."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in wildlife biology careers.",
        color: RED2,
        content: [
          "Technology Integration: Drones, AI, and satellite imagery revolutionizing wildlife monitoring.",
          "Genetic Conservation: Advanced genetic techniques for species recovery and breeding programs.",
          "Climate Adaptation: New roles in helping wildlife adapt to climate change.",
          "Human-Wildlife Coexistence: Growing focus on reducing human-wildlife conflict.",
          "Rewilding Projects: Emerging field of ecosystem restoration and species reintroduction.",
          "Urban Wildlife: Growing focus on wildlife in urban and suburban areas.",
          "Citizen Science: Leveraging public participation in wildlife monitoring.",
          "Conservation Technology: New careers in developing conservation tech solutions."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: RED,
        content: [
          "Science Excellence: Excel in Biology, Chemistry, and Environmental Science.",
          "Nature Knowledge: Learn about local wildlife, birds, insects, and plants.",
          "Field Observation: Develop skills in observing and identifying wildlife.",
          "Photography: Learn wildlife photography to document species and behavior.",
          "Data Analysis: Learn basic statistics and data analysis. Familiarize with Excel and Python.",
          "Technology Skills: Learn GIS basics, drone operation, and wildlife monitoring tools.",
          "Communication: Develop ability to explain wildlife conservation concepts simply.",
          "Outdoor Skills: Build physical fitness and comfort with outdoor fieldwork.",
          "Networking: Connect with wildlife biologists and conservation professionals.",
          "Online Courses: Take free courses on Coursera or edX on wildlife biology and conservation."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Wildlife Biologists",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: RED2,
        content: [
          "Dr. Ullas Karanth: Renowned tiger researcher and conservation scientist. Pioneer in wildlife monitoring technology.",
          "Dr. Raghu Chundawat: Tiger researcher and conservationist. Expert in tiger behavior and conservation.",
          "Dr. Valmik Thapar: Legendary tiger conservationist and wildlife filmmaker. Global leader in tiger protection.",
          "Dr. Divya Mudappa: Wildlife biologist and conservation researcher. Expert in primate and forest conservation.",
          "Dr. Sanjay Molur: Herpetologist and conservation biologist. Expert in reptile and amphibian conservation.",
          "Dr. Aparajita Datta: Wildlife biologist and conservation researcher. Expert in elephant and forest conservation.",
          "Dr. Ravi Chellam: Wildlife biologist and conservation expert. Leader in carnivore conservation in India."
        ]
      }
    ]
  },
};


