import { CareerPageData } from './careerPageData';

const COLOR1 = "#EC4899";
const COLOR2 = "#F472B6";

export const sports_and_physical_activitiesUpdateData: Record<string, CareerPageData> = {
  physical_trainer: {
    slug: "physical_trainer",
    badge: "Career Exploration for Class 10+",
    heading: "Physical Trainer",
    subheading: "Explore opportunities in Physical Training.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Physical Training.", borderColor: "#10B981" },
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
        description: "Understanding Physical Training.",
        color: COLOR1,
        content: [
          "Physical Training is a dynamic and rewarding career path.",
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
        description: "Meet Priya, a Certified Personal Trainer",
        color: COLOR2,
        content: [
          "05:30 AM –  Wake up and morning routine: Cold shower, hydration, light stretching.",
          "06:00 AM –  Personal workout: 45 minutes of cardio and strength training to stay fit and energized.",
          "07:00 AM –  Breakfast: High-protein meal (eggs, oats, fruits, protein shake).",
          "08:00 AM –  Client sessions begin: First client arrives for 1-hour personal training session.",
          "09:00 AM –  Second client session: Different fitness level, customized workout plan.",
          "10:00 AM –  Break and nutrition consultation: Discuss diet plans with clients, answer fitness questions.",
          "11:00 AM –  Third client session: Group fitness class or one-on-one training.",
          "12:30 PM –  Lunch: Balanced meal with carbs, protein, and vegetables.",
          "01:30 PM –  Administrative work: Update client progress records, plan next week's sessions, respond to emails.",
          "02:30 PM –  Continuing education: Watch fitness tutorials, read about new training techniques, stay updated.",
          "03:30 PM –  Afternoon client sessions: Peak hours with multiple clients.",
          "05:30 PM –  Evening sessions: More clients, often busier time of the day.",
          "06:30 PM –  Dinner: Meal prep for next day, personal nutrition.",
          "07:30 PM –  Personal time: Spend time with family, manage social media, pursue hobbies.",
          "09:00 PM –  Sleep preparation: Wind down, aim for 7-8 hours of quality sleep for recovery."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: COLOR1,
        content: [
          "Pathway A: Degree Route (After Class 12th –  Science/PE)",
          "Step 1: Pass Class 12th with Science/Physical Education.",
          "Step 2: Pursue B.P.Ed or B.Sc Sports Science degree.",
          "Step 3: Complete internship at gym or sports academy.",
          "Step 4: Get certified: ACE, ACSM, or K11 certification.",
          "Step 5: Work as trainer in gym or fitness centre.",
          "Step 6: Advance to head trainer or open own studio.",
          
          "Pathway B: Certification Route (Skill-Based Entry)",
          "Step 1: Pass Class 12th in any stream.",
          "Step 2: Join certified personal training course (K11/ISSA).",
          "Step 3: Learn nutrition basics and exercise science fundamentals.",
          "Step 4: Complete practical training under senior trainer.",
          "Step 5: Get hired at gym, wellness centre, or club.",
          "Step 6: Specialize in strength, yoga, or sports conditioning.",
          
          "Pathway C: Diploma & NIS Route (Government Path)",
          "Step 1: Pass Class 12th with Physical Education subject.",
          "Step 2: Apply to NIS Patiala or SAI centres.",
          "Step 3: Complete diploma in sports coaching from NIS.",
          "Step 4: Clear government fitness trainer recruitment exams.",
          "Step 5: Join as trainer in schools, SAI, or military.",
          "Step 6: Rise to chief coach or national-level trainer."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2025-26",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: COLOR2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Fitness Entrepreneur (15+ yrs): ₹60 LPA –  ₹1.5 Crore+",
          "Senior / Celebrity Trainer (10+ yrs): ₹25 –  ₹55 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 –  ₹24 LPA",
          "Junior / Associate (3–5 yrs): ₹6 –  ₹11 LPA",
          "Entry Level (0–2 yrs): ₹3 –  ₹5 LPA",
          "Note: Global certifications (ACE, NASM), AI-driven fitness tech, and the 8th Pay Commission (for government/PE roles) boost pay by 35%.",
          
          "Where Are the Jobs?",
          "Top Cities: Mumbai, Bengaluru, Delhi-NCR, Hyderabad, Pune, Goa.",
          "Top Industries: Premium Gym Chains, Corporate Wellness, Sports Academies, Luxury Hotels, Digital Fitness Platforms.",
          "Global Demand: High in USA, UAE, Australia. Remote/Hybrid coaching is now a 45% market share."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: COLOR1,
        content: [
          "Government: NIS Patiala; SAI Training Centres; Delhi University (B.P.Ed); Banaras Hindu University (B.P.Ed)",
          "Private: K11 Academy; ISSA India; YMCA Delhi; Symbiosis Institute of Health Sciences",
          "Online: Coursera (Fitness & Wellness); Udemy (Personal Training Certification); ACE Online Certification; NASM Online Programs"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: COLOR2,
        content: [
          "Conventional: Physical Trainer; Fitness Trainer / Gym Trainer; Physical Education Teacher; Sports Coach",
          "New-age and AI driven: Online Fitness Coach; Sports Performance Analyst; Wearable Fitness Data Coach; Corporate Wellness Trainer",
          "Remote / Entrepreneurship: Personal Training Freelancer; Fitness Content Creator; Online Transformation Coach; Fitness Studio / Gym Founder"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Daily tasks and duties.",
        color: COLOR1,
        content: [
          "Client Assessment: Evaluate fitness levels, health conditions, and goals through fitness tests and consultations.",
          "Program Design: Create customized workout plans based on individual needs, fitness levels, and objectives.",
          "Training Sessions: Conduct one-on-one or group fitness classes, demonstrating exercises and monitoring form.",
          "Progress Tracking: Monitor client progress, adjust programs, and maintain detailed records.",
          "Nutrition Guidance: Provide basic nutrition advice and coordinate with nutritionists for specialized diets.",
          "Motivation & Support: Encourage clients, celebrate achievements, and help overcome fitness plateaus.",
          "Equipment Maintenance: Ensure gym equipment is safe, functional, and properly maintained.",
          "Continuing Education: Stay updated with latest fitness trends, certifications, and training methodologies."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Real obstacles in the profession.",
        color: COLOR2,
        content: [
          "Client Motivation: Keeping clients motivated and committed to their fitness goals is challenging.",
          "Physical Demands: The job requires standing for long hours and physical exertion, leading to fatigue.",
          "Irregular Hours: Evening and weekend shifts are common, affecting work-life balance.",
          "Liability Issues: Risk of client injuries and associated legal/insurance complications.",
          "Income Variability: Income depends on client retention and gym membership trends.",
          "Burnout Risk: Repetitive routines and high-energy demands can lead to professional burnout.",
          "Competition: Intense competition from other trainers and online fitness platforms.",
          "Certification Costs: Continuous education and certifications require significant financial investment."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Fitness Personalities",
        icon: "User",
        description: "Inspiring figures in Indian fitness.",
        color: COLOR1,
        content: [
          "Rujuta Diwekar: Renowned nutritionist and fitness expert who revolutionized fitness culture in India.",
          "Yasmin Karachiwala: Celebrity fitness trainer known for training Bollywood actors and promoting functional fitness.",
          "Kaizzad Capadia: Fitness entrepreneur and founder of XYZ Fitness, pioneering gym culture in India.",
          "Namrata Purohit: Pilates expert and fitness influencer who popularized Pilates in India.",
          "Anushka Sharma: Actress and fitness enthusiast who promotes healthy lifestyle through her fitness journey."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook",
        icon: "Sparkles",
        description: "What's next for fitness professionals.",
        color: COLOR2,
        content: [
          "AI-Powered Training: AI-driven fitness apps and wearables will personalize workouts and track progress automatically.",
          "Virtual Fitness: Online training platforms and metaverse fitness experiences are growing rapidly.",
          "Holistic Wellness: Integration of mental health, nutrition, and fitness into comprehensive wellness programs.",
          "Corporate Wellness: Increasing demand for fitness programs in corporate offices and remote work settings.",
          "Specialized Training: Niche fitness areas like functional fitness, mobility training, and recovery coaching.",
          "Data Analytics: Use of biometric data and analytics to optimize training programs.",
          "Sustainability: Eco-friendly gyms and sustainable fitness practices gaining popularity.",
          "Market Growth: Indian fitness industry projected to grow at 15% CAGR through 2030."
        ]
      }
    ]
  },

  sports_management: {
    slug: "sports_management",
    badge: "Career Exploration for Class 10+",
    heading: "Sports Management",
    subheading: "Explore opportunities in Sports Management.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Sports Management.", borderColor: "#10B981" },
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
        description: "Understanding Sports Management.",
        color: COLOR1,
        content: [
          "Sports Management is a dynamic and rewarding career path.",
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
        description: "Meet Rohan, a Sports Event Manager",
        color: COLOR2,
        content: [
          "08:00 AM –  Office arrival and morning briefing: Check emails, review event schedules, team standup meeting.",
          "09:00 AM –  Event planning meeting: Discuss logistics for upcoming tournament, budget allocation, vendor coordination.",
          "10:00 AM –  Sponsor communication: Call sponsors, discuss marketing opportunities, negotiate contracts.",
          "11:00 AM –  Venue coordination: Visit venue, check facilities, ensure compliance with event requirements.",
          "12:30 PM –  Lunch: Quick meal while reviewing event timelines and contingency plans.",
          "01:30 PM –  Marketing and promotion: Work with marketing team on social media campaigns, press releases.",
          "02:30 PM –  Athlete/Team coordination: Communicate with teams about schedules, accommodations, travel arrangements.",
          "03:30 PM –  Budget and financial management: Review expenses, process invoices, manage event budget.",
          "04:30 PM –  Media relations: Handle press inquiries, arrange media coverage, conduct interviews.",
          "05:30 PM –  Administrative tasks: Update event documentation, create reports, manage databases.",
          "06:30 PM –  Problem-solving: Address unexpected issues, coordinate with stakeholders, find solutions.",
          "07:00 PM –  Evening events: Attend event meetings, networking sessions, or evening events.",
          "08:00 PM –  Personal time: Dinner, family time, or relaxation.",
          "09:00 PM –  Planning for next day: Review tomorrow's schedule, prepare presentations, wind down."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: COLOR1,
        content: [
          "Pathway A: Degree Route (After Class 12th)",
          "Step 1: Pass Class 12th in any stream.",
          "Step 2: Pursue BBA or B.Sc in Sports Management.",
          "Step 3: Complete internship with sports club or federation.",
          "Step 4: Earn MBA in Sports Management for advancement.",
          "Step 5: Join as sports manager, event coordinator, or analyst.",
          "Step 6: Rise to director-level in sports organizations.",
          
          "Pathway B: Certification & Skill-Based Route",
          "Step 1: Pass Class 12th in any stream.",
          "Step 2: Take diploma in sports management or event management.",
          "Step 3: Learn tools: event planning, marketing, and sponsorship.",
          "Step 4: Volunteer or intern at sports events and leagues.",
          "Step 5: Get hired by IPL teams, ISL clubs, or agencies.",
          "Step 6: Specialize in athlete management, marketing, or operations.",
          
          "Pathway C: Commerce/MBA Route (Domain Switch)",
          "Step 1: Pass Class 12th with Commerce or Humanities.",
          "Step 2: Complete BBA, B.Com, or BA in any field.",
          "Step 3: Pursue MBA in Sports Management (IISM/TISS).",
          "Step 4: Complete internship with sports federation or brand.",
          "Step 5: Work as sports marketing or operations manager.",
          "Step 6: Advance to CEO, league director, or sports consultant."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2025-26",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: COLOR2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50 LPA –  ₹1.8 Crore",
          "Senior / Lead Role (10+ yrs): ₹25 –  ₹55 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 –  ₹24 LPA",
          "Junior / Associate (3–5 yrs): ₹7 –  ₹11 LPA",
          "Entry Level (0–2 yrs): ₹4 –  ₹8 LPA",
          "Note: MBA in Sports Management, AI-analytics skills, and the 8th Pay Commission (for government roles) boost pay by 40%.",
          
          "Where Are the Jobs?",
          "Top Cities: Bengaluru, Mumbai, Delhi-NCR, Pune, Hyderabad.",
          "Top Industries: Franchise Leagues (IPL, ISL, PKL), Sports Tech/Gaming, Digital Media, Marketing Agencies, Retail (e.g., Decathlon).",
          "Global Demand: High in USA, UK, UAE. Remote 'Fan Engagement' and 'Sports Data Science' roles are booming."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: COLOR1,
        content: [
          "Government: Delhi University (BBA); Banaras Hindu University (BBA); Jamia Millia Islamia (BBA); IIM Ahmedabad (MBA Sports Management)",
          "Private: TISS Mumbai (MBA Sports Management); Symbiosis Pune (BBA Sports Management); FLAME University (BBA); Amity University (BBA)",
          "Online: Coursera (Sports Management); Udemy (Sports Event Management); LinkedIn Learning (Sports Business); edX (Sports Analytics)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: COLOR2,
        content: [
          "Conventional: Sports Event Manager; League / Franchise Operations Executive; Athlete Management Executive; Sports Marketing Manager",
          "New-age and AI driven: Sports Analytics Specialist; Fan Engagement / Digital Sports Manager; Sports Data Analyst; Performance Insights Analyst",
          "Remote / Entrepreneurship: Sports Consultant; Sports Content Creator; Online Sports Business Trainer; Sports Academy / Event Startup Founder"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Daily tasks and duties.",
        color: COLOR1,
        content: [
          "Event Planning: Organize sports events, tournaments, and competitions from conception to execution.",
          "Vendor Management: Coordinate with venues, sponsors, broadcasters, and service providers.",
          "Budget Management: Develop budgets, manage expenses, and ensure financial viability of events.",
          "Team Coordination: Work with athletes, coaches, medical staff, and administrative teams.",
          "Marketing & Promotion: Develop marketing strategies, manage social media, and promote events.",
          "Sponsorship Management: Identify sponsors, negotiate contracts, and manage sponsor relationships.",
          "Media Relations: Handle press coverage, arrange interviews, and manage media communications.",
          "Problem-Solving: Address unexpected issues and find quick solutions during events.",
          "Performance Analysis: Analyze event success metrics and prepare reports for stakeholders."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Real obstacles in the profession.",
        color: COLOR2,
        content: [
          "High Pressure: Managing large-scale events with tight deadlines and high expectations.",
          "Budget Constraints: Limited budgets often require creative problem-solving and cost management.",
          "Unpredictable Events: Weather, injuries, or unforeseen circumstances can disrupt event plans.",
          "Stakeholder Management: Balancing interests of athletes, sponsors, broadcasters, and fans.",
          "Long Hours: Events often require working evenings, weekends, and holidays.",
          "Seasonal Work: Many sports events are seasonal, leading to income fluctuations.",
          "Competition: Intense competition from other event management companies and professionals.",
          "Regulatory Compliance: Navigating complex regulations and compliance requirements for events."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Sports Managers",
        icon: "User",
        description: "Inspiring figures in sports management.",
        color: COLOR1,
        content: [
          "Nita Ambani: Chairperson of Football Sports Development Limited, pioneering sports management in India.",
          "Mustafa Ghouse: CEO of JSW Sports, instrumental in building India's private sports ecosystem.",
          "Deepthi Bopaiah: CEO of GoSports Foundation, supporting Olympic athlete development.",
          "Bunty Sajdeh: Founder of Cornerstone, building athlete brand-management pathways.",
          "Tenzing Niyogi: CEO of Ultimate Kho Kho, demonstrating commercial potential of traditional sports."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook",
        icon: "Sparkles",
        description: "What's next for sports management.",
        color: COLOR2,
        content: [
          "Digital Transformation: Virtual events, metaverse sports experiences, and digital fan engagement.",
          "Data Analytics: Advanced analytics for fan behavior, player performance, and event optimization.",
          "Sustainability: Eco-friendly sports events and sustainable management practices.",
          "Esports Integration: Merging traditional sports with esports for broader audience reach.",
          "Fan Experience: Enhanced fan engagement through technology and personalized experiences.",
          "Global Expansion: Indian sports events gaining international recognition and participation.",
          "Franchise Model: Growth of franchise-based leagues (IPL, ISL, PKL model).",
          "Market Growth: Indian sports management industry projected to grow at 12% CAGR through 2030."
        ]
      }
    ]
  },

  sports_physiotherapist: {
    slug: "sports_physiotherapist",
    badge: "Career Exploration for Class 10+",
    heading: "Sports Physiotherapist",
    subheading: "Explore opportunities in Sports Physiotherapy.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Sports Physiotherapy.", borderColor: "#10B981" },
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
        description: "Understanding Sports Physiotherapy.",
        color: COLOR1,
        content: [
          "Sports Physiotherapy is a dynamic and rewarding career path.",
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
        description: "Meet Dr. Aisha, a Sports Physiotherapist",
        color: COLOR2,
        content: [
          "07:00 AM –  Morning routine: Wake up, light exercise, breakfast.",
          "08:00 AM –  Clinic preparation: Set up treatment rooms, review patient files, prepare equipment.",
          "08:30 AM –  First patient session: Assessment and treatment of sports injury (e.g., ankle sprain).",
          "09:30 AM –  Second patient: Rehabilitation exercises, progress monitoring.",
          "10:30 AM –  Third patient: Manual therapy, stretching, and pain management techniques.",
          "11:30 AM –  Administrative work: Update patient records, document progress, plan treatment protocols.",
          "12:30 PM –  Lunch break: Meal and brief relaxation.",
          "01:30 PM –  Afternoon patient sessions: Continue with rehabilitation and treatment.",
          "02:30 PM –  Team consultation: Discuss athlete cases with coaches and medical team.",
          "03:30 PM –  Continuing education: Read research papers, watch training videos on new techniques.",
          "04:30 PM –  More patient sessions: Evening appointments with athletes and fitness enthusiasts.",
          "05:30 PM –  Equipment maintenance: Check and maintain physiotherapy equipment.",
          "06:00 PM –  Personal time: Dinner, family, or hobbies.",
          "07:00 PM –  Evening: Prepare for next day, review case studies, wind down.",
          "09:00 PM –  Sleep: Aim for 7-8 hours for recovery."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: COLOR1,
        content: [
          "Pathway A: Degree Route (After Class 12th –  Science)",
          "Step 1: Pass Class 12th with Physics, Chemistry, Biology.",
          "Step 2: Complete Bachelor of Physiotherapy (BPT) four-year degree.",
          "Step 3: Do internship at hospital or sports rehabilitation centre.",
          "Step 4: Pursue Master's (MPT) in Sports Physiotherapy specialization.",
          "Step 5: Join sports team, academy, or elite rehabilitation clinic.",
          "Step 6: Become head physiotherapist for national or professional teams.",
           
          "Pathway B: Diploma & Certification Route",
          "Step 1: Pass Class 12th with Science (Biology) stream.",
          "Step 2: Complete diploma in physiotherapy from recognized institute.",
          "Step 3: Get certified in sports injury management and rehabilitation.",
          "Step 4: Train under senior sports physiotherapist for practical experience.",
          "Step 5: Work at gyms, fitness centres, or sports academies.",
          "Step 6: Upgrade to BPT/MPT for higher career growth.",
           
          "Pathway C: BPT + International Certification Route",
          "Step 1: Pass Class 12th with Science (PCB) subjects.",
          "Step 2: Complete BPT degree from recognized university.",
          "Step 3: Obtain international certification (CSCS, FIFA Diploma, IFSPT).",
          "Step 4: Complete fellowship or internship with professional sports team.",
          "Step 5: Work as sports physiotherapist with IPL, ISL, or Olympics.",
          "Step 6: Advance to consultant, researcher, or private practice owner."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2025-26",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: COLOR2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹65 LPA –  ₹1.8 Crore+",
          "Senior / Lead Role (10+ yrs): ₹26 –  ₹60 LPA",
          "Mid-Level Professional (5–8 yrs): ₹13 –  ₹25 LPA",
          "Junior / Associate (3–5 yrs): ₹7 –  ₹12 LPA",
          "Entry Level (0–2 yrs): ₹4 –  ₹6 LPA",
          "Note: MPT (Sports), Global certifications (HCPC, APC), and the 8th Pay Commission (for government/Sports Authority of India roles) boost pay by 40%.",
          
          "Where Are the Jobs?",
          "Top Cities: Mumbai, Bengaluru, Delhi-NCR, Hyderabad, Pune, Chennai.",
          "Top Industries: Professional Leagues (IPL, ISL, PKL), Elite Sports Academies, Multi-specialty Hospitals (Max, Apollo), Rehab Centers, Luxury Wellness Resorts.",
          "Global Demand: High in Australia, UK, USA; Remote 'Digital Rehab' and injury-prevention consulting are growing trends."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: COLOR1,
        content: [
          "Government: Delhi University (BPT); Banaras Hindu University (BPT); Manipal Academy (BPT); AIIMS Delhi (BPT)",
          "Private: Symbiosis Institute of Health Sciences (BPT); Lovely Professional University (BPT); Amity University (BPT); Saveetha University (BPT)",
          "Online: Coursera (Sports Rehabilitation); Udemy (Sports Physiotherapy); LinkedIn Learning (Injury Management); edX (Clinical Rehabilitation)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: COLOR2,
        content: [
          "Conventional: Sports Physiotherapist; Rehabilitation Physiotherapist; Clinical Physiotherapist; Team / Academy Physiotherapist",
          "New-age and AI driven: Sports Performance Rehab Specialist; Tele-Rehabilitation Physiotherapist; Wearable Movement Analysis Specialist; Sports Injury Data Analyst",
          "Remote / Entrepreneurship: Online Sports Recovery Coach; Independent Physiotherapy Consultant; Sports Rehab Content Creator; Sports Rehab Clinic Founder"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Daily tasks and duties.",
        color: COLOR1,
        content: [
          "Patient Assessment: Evaluate injuries, assess movement patterns, and diagnose physiotherapy needs.",
          "Treatment Planning: Develop customized rehabilitation programs based on injury severity and goals.",
          "Manual Therapy: Perform massage, joint mobilization, and other hands-on treatments.",
          "Exercise Prescription: Design and supervise therapeutic exercises for recovery and strength building.",
          "Progress Monitoring: Track patient progress, adjust treatment plans, and document outcomes.",
          "Injury Prevention: Educate athletes on injury prevention techniques and proper training methods.",
          "Collaboration: Work with doctors, coaches, and sports teams to ensure comprehensive care.",
          "Equipment Use: Utilize specialized equipment for rehabilitation and recovery.",
          "Patient Education: Teach patients about their injuries and recovery process."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Real obstacles in the profession.",
        color: COLOR2,
        content: [
          "Physical Demands: Repetitive manual therapy and standing for long hours cause physical strain.",
          "Emotional Burden: Dealing with injured athletes and managing their frustrations.",
          "Slow Recovery: Some injuries take months or years to heal, requiring patience and persistence.",
          "Liability Issues: Risk of complications or adverse reactions to treatment.",
          "Income Variability: Income depends on patient volume and insurance reimbursements.",
          "Continuing Education: Constant need to update skills and knowledge in sports medicine.",
          "Work-Life Balance: Irregular hours, especially when working with professional athletes.",
          "Competition: Growing number of physiotherapists and alternative therapies.",
          "Burnout Risk: Emotionally and physically demanding work can lead to burnout."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Sports Physiotherapists",
        icon: "User",
        description: "Inspiring figures in sports physiotherapy.",
        color: COLOR1,
        content: [
          "Dr. Anupam Sibal: Renowned sports physiotherapist who has worked with Indian national teams.",
          "Dr. Rajesh Bhardwaj: Leading sports medicine expert and physiotherapist in India.",
          "Dr. Suresh Subramaniam: Pioneer in sports physiotherapy and rehabilitation in India.",
          "Dr. Ashish Contractor: Sports physiotherapist known for working with elite athletes.",
          "Dr. Vedavati Kulkarni: Women physiotherapist making significant contributions to sports medicine."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook",
        icon: "Sparkles",
        description: "What's next for sports physiotherapy.",
        color: COLOR2,
        content: [
          "Telehealth Services: Remote consultations and virtual rehabilitation programs.",
          "AI & Wearables: AI-powered movement analysis and wearable devices for monitoring recovery.",
          "Regenerative Medicine: Stem cell therapy and advanced biological treatments for injuries.",
          "Personalized Rehabilitation: Data-driven, customized recovery programs for each athlete.",
          "Prevention Focus: Shift towards injury prevention rather than just treatment.",
          "Integration with Sports Science: Closer collaboration with coaches and sports scientists.",
          "Global Standards: Adoption of international best practices and certifications.",
          "Market Growth: Sports physiotherapy market in India projected to grow at 18% CAGR through 2030."
        ]
      }
    ]
  },

  sportsperson: {
    slug: "sportsperson",
    badge: "Career Exploration for Class 10+",
    heading: "Sportsperson",
    subheading: "Explore opportunities as a Professional Sportsperson.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career as a Sportsperson.", borderColor: "#10B981" },
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
        description: "Understanding Professional Sports.",
        color: COLOR1,
        content: [
          "Professional Sports is a dynamic and rewarding career path.",
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
        description: "Meet Arjun, a National-Level Cricket Player",
        color: COLOR2,
        content: [
          "05:00 AM –  Wake up and morning routine: Cold shower to energize. Drink water with electrolytes. Mental preparation for the day ahead.",
          "05:30 AM –  Cardio session: 45 minutes of running or cycling on the field. Focus on building endurance and explosive power.",
          "06:30 AM –  Breakfast: High-protein meal (eggs, oats, fruits). Timing is crucial—fuel the body right after cardio.",
          "07:30 AM –  Skill-specific training: 2 hours of batting/bowling practice. Facing different bowlers, working on weak areas, perfecting technique.",
          "09:30 AM –  Strength & conditioning: Gym session focusing on core strength, flexibility, and injury prevention. Work with strength coach.",
          "11:00 AM –  Recovery & physiotherapy: Ice baths, stretching, massage. Recovery is as important as training.",
          "12:30 PM –  Lunch: Balanced meal with carbs, protein, and vegetables. Hydration is key.",
          "01:30 PM –  Rest & mental conditioning: 1-hour power nap. Visualization of match scenarios. Mental toughness training.",
          "02:30 PM –  Video analysis: Watch recordings of own performance and opponents. Identify patterns and strategies.",
          "03:30 PM –  Tactical training: Work with coaches on game plans, field placements, and match situations.",
          "05:00 PM –  Light practice or match simulation: Practice match scenarios or play friendly matches.",
          "06:30 PM –  Dinner: High-protein meal to aid muscle recovery.",
          "07:30 PM –  Personal time: Spend time with family, manage social media, or pursue hobbies.",
          "09:00 PM –  Sleep preparation: Wind down, avoid screens. Aim for 8-9 hours of quality sleep for recovery."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: COLOR1,
        content: [
          "Pathway A: School to Professional Athlete Route",
          "Step 1: Start sports training from school level (Class 8–10).",
          "Step 2: Join district/state-level sports academy or SAI centre.",
          "Step 3: Represent state in national-level tournaments and championships.",
          "Step 4: Get selected for national team or professional league.",
          "Step 5: Compete in Asian Games, Commonwealth, or Olympic events.",
          "Step 6: Become national champion, brand ambassador, or sports icon.",
      
          "Pathway B: Sports Scholarship & University Route",
          "Step 1: Excel in school-level sports and win district medals.",
          "Step 2: Apply for sports quota admission in top universities.",
          "Step 3: Train at university sports centre with professional coaches.",
          "Step 4: Represent university in national inter-university tournaments.",
          "Step 5: Get scouted by professional leagues (IPL, ISL, PKL).",
          "Step 6: Build career as professional athlete or sports officer.",
          
          "Pathway C: Government Sports & SAI Route",
          "Step 1: Pass Class 10th and register at SAI training centre.",
          "Step 2: Train under SAI coaches with government scholarship support.",
          "Step 3: Win medals at state and national-level competitions.",
          "Step 4: Apply for government sports quota jobs (Railway, Police, Army).",
          "Step 5: Represent department team in national championships.",
          "Step 6: Retire as coach, selector, or sports administrator role."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2025-26",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: COLOR2,
        content: [
          "Salary Snapshot (Annual INR)",
          "Elite/A-List (Cricket/Top Leagues): ₹5 Crore –  ₹25 Crore+ (BCCI/IPL contracts)",
          "National/Pro Level (ISL, Kabaddi, Tier 2 Cricket): ₹15 LPA –  ₹1 Crore",
          "Senior Professional (8–10 yrs): ₹8 LPA –  ₹20 LPA (State Level/Senior Nationals)",
          "Junior/Entry Level (0–3 yrs): ₹3 LPA –  ₹7 LPA (Club Level/District)",
          "Government Sports Quota: ₹4.5 LPA –  ₹12 LPA (Based on 8th Pay Commission levels)",
          "Note: Brand endorsements for A-list athletes often exceed contract salaries by 3x–10x.",
        
          "Where Are the Jobs?",
          "Top Cities: Bengaluru (JSP/Training), Mumbai (Leagues), Delhi-NCR (Admin/Training), Hyderabad, Patiala (NIS).",
          "Top Industries: Professional Leagues (IPL, ISL, PKL), Government PSUs (Railways, ONGC, Banks), Defense (Indian Army/Navy), Sports Management Agencies.",
          "Global Demand: High for Cricket (Global T20 Leagues), Athletics/Wrestling (European Leagues), and Esports (Growing rapidly)."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: COLOR1,
        content: [
          "Government: NIS Patiala; SAI Training Centres; Delhi University (Sports); Banaras Hindu University (Sports)",
          "Private: Symbiosis Institute (Sports Science); FLAME University (Sports); Lovely Professional University (Sports); Amity University (Sports)",
          "Online: Coursera (Sports Science); Udemy (Athletic Training); LinkedIn Learning (Sports Performance); edX (Exercise Science)"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: COLOR2,
        content: [
          "Conventional: Professional Athlete; National / State-Level Player; Sports Quota Government Employee; Team / League Player",
          "New-age and AI driven: Esports Athlete; Performance-Tech Enabled Athlete; Data-Driven Training Athlete; Digital Brand Athlete / Influencer",
          "Remote / Entrepreneurship: Personal Sports Coach; Online Skills Trainer; Sports Content Creator; Sports Academy Founder"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Daily tasks and duties.",
        color: COLOR1,
        content: [
          "Training & Practice: Rigorous daily training sessions to maintain and improve skills.",
          "Competition: Participate in tournaments, matches, and competitive events.",
          "Physical Conditioning: Maintain peak physical fitness through strength and endurance training.",
          "Nutrition Management: Follow strict dietary plans to optimize performance.",
          "Recovery & Rest: Prioritize sleep, recovery techniques, and injury prevention.",
          "Mental Preparation: Visualization, meditation, and psychological conditioning.",
          "Video Analysis: Study own performance and opponents' strategies.",
          "Team Coordination: Work with coaches, teammates, and support staff.",
          "Media & Sponsorship: Manage public image, endorsements, and media appearances."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Real obstacles in the profession.",
        color: COLOR2,
        content: [
          "Injury Risk: Constant risk of career-ending injuries and long-term health issues.",
          "Short Career Span: Most athletes retire by age 35, requiring career planning.",
          "Extreme Pressure: Representing country/team with immense mental and physical stress.",
          "Financial Uncertainty: Income depends on performance, sponsorships, and tournament winnings.",
          "Burnout: Constant training and competition can lead to physical and mental exhaustion.",
          "Public Scrutiny: Intense media attention and public criticism of performance.",
          "Limited Opportunities: Only a few sports have professional leagues in India.",
          "Sacrifice: Missing family time, education, and normal social life.",
          "Post-Retirement Challenges: Difficulty transitioning to life after sports."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Sportspersons",
        icon: "User",
        description: "Inspiring figures in Indian sports.",
        color: COLOR1,
        content: [
          "Neeraj Chopra: First Indian to win Olympic gold in track and field (Javelin throw).",
          "PV Sindhu: Badminton champion with Olympic and World Championship medals.",
          "Virat Kohli: Cricket icon and one of the world's best batsmen.",
          "Mary Kom: Six-time World Amateur Boxing champion, Olympic medalist.",
          "Sunil Chhetri: One of the world's highest active goal-scorers in international football."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook",
        icon: "Sparkles",
        description: "What's next for professional sports.",
        color: COLOR2,
        content: [
          "AI-Driven Training: Wearables and AI analytics revolutionizing training methods.",
          "Esports Growth: Gaming recognized as sport with growing prize pools and opportunities.",
          "Women in Sports: Increasing opportunities and investment in women's sports.",
          "Franchise Leagues: Growth of IPL, ISL, PKL model creating more professional opportunities.",
          "Global Participation: Indian athletes competing in more international leagues.",
          "Sports Science: Advanced biomechanics, nutrition, and recovery science.",
          "Mental Health Focus: Greater emphasis on psychological support and mental wellness.",
          "Market Growth: Indian sports industry projected to reach $60.1 billion by 2033."
        ]
      }
    ]
  }
};


