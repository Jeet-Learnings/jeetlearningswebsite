import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const RED3 = "#E70000";
const RED4 = "#B30000";
const RED5 = "#9B0000";

export const manufacturingUpdateData: Record<string, CareerPageData> = {
  industrial_design: {
    slug: "industrial_design",
    badge: "The Creator of Tomorrow's Products for Class 10+",
    heading: "Industrial Design",
    subheading: "Shape the products people use every day. Design innovative solutions that blend aesthetics, functionality, and sustainability. Become the architect of the future.",
    whyCards: [
      { icon: "Lightbulb", title: "Creative Problem Solving", description: "Design products that solve real problems and improve people's lives.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "Growing Demand", description: "India's design sector growing rapidly. Startups and corporates need talented designers.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, Germany, Japan. Remote design work trending globally.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "AI-Design Revolution", description: "Generative design and AI tools creating new opportunities for designers.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Des) or 3 Years (Diploma)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "UCEED, NID, CEED", color: "bg-orange-100 text-orange-700" },
      { label: "Salary Range", detail: "₹4L–₹80L+ (Entry to Leadership)", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "₹80L+", label: "Leadership Salary", gradient: "from-red-500 to-red-600" },
      { value: "35%", label: "Pay Boost (M.Des)", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Lightbulb",
        description: "Understanding industrial design and product creation",
        color: RED,
        content: [
          "Industrial Design is the art and science of creating products that are beautiful, functional, and manufacturable. You design everything from smartphones to furniture to medical devices.",
          "An Industrial Designer bridges the gap between engineering and art. You think about how a product looks, feels, and works. You consider user experience, manufacturing constraints, sustainability, and market trends.",
          "In today's world, good design is competitive advantage. Companies like Apple, Tesla, and Dyson succeed because of exceptional design. India is emerging as a design hub with startups and corporations desperately needing talented designers.",
          "You work with engineers, marketers, and manufacturers to bring ideas to life. You use tools like CAD software, 3D modeling, and prototyping to visualize and test your designs.",
          "The field offers creative satisfaction, good salaries, and the opportunity to impact millions of lives through the products you design."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world experience of an industrial designer",
        color: RED2,
        content: [
          "09:00 AM - Design Critique: Priya starts her day at a product design studio in Bangalore. Reviews sketches and 3D models from yesterday's brainstorming session with the team.",
          "10:30 AM - Client Meeting: Meets with a startup founder who wants to design a sustainable water bottle. Discusses requirements: eco-friendly materials, ergonomic grip, attractive aesthetics, affordable manufacturing.",
          "12:00 PM - CAD Modeling: Returns to desk and opens SolidWorks. Creates 3D models of three different bottle designs. Tests how they feel in hand using VR visualization.",
          "02:00 PM - Prototyping: Visits the workshop. Reviews 3D-printed prototypes from yesterday. Tests durability, grip comfort, and water-tightness. Makes notes for design refinements.",
          "04:00 PM - Sustainability Research: Researches biodegradable materials and manufacturing processes. Ensures the design aligns with circular economy principles.",
          "05:30 PM - Portfolio Update: Photographs the prototype and updates her portfolio. Good documentation is crucial for future clients and job opportunities.",
          "07:00 PM - Inspiration Hunt: Scrolls through design platforms like Behance and Dribbble. Stays updated on global design trends and competitor products."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Traits that make someone well-suited for industrial design",
        color: RED3,
        content: [
          "The Creative Visionary: You see possibilities where others see problems. You imagine how things could be better.",
          "The Detail Perfectionist: You obsess over every curve, color, and texture. Small details matter to you.",
          "The Empathizer: You understand user needs deeply. You design for people, not just aesthetics.",
          "The Problem Solver: You balance creativity with practicality. You know how to manufacture what you design.",
          "The Communicator: You can sketch ideas quickly and explain your vision to engineers and clients.",
          "The Curious Learner: You're interested in materials, manufacturing, psychology, and technology.",
          "The Persistent Optimist: Design involves many iterations and rejections. You bounce back quickly."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Core duties of an industrial designer",
        color: RED4,
        content: [
          "Research & Ideation: Understanding user needs, market trends, and competitor products.",
          "Sketching & Conceptualization: Creating quick sketches to explore design ideas.",
          "3D Modeling: Using CAD software to create detailed digital models.",
          "Prototyping: Building physical prototypes to test functionality and aesthetics.",
          "User Testing: Gathering feedback from real users on prototypes.",
          "Design Refinement: Iterating based on feedback and technical constraints.",
          "Manufacturing Coordination: Working with engineers to ensure designs are manufacturable.",
          "Documentation: Creating technical drawings and specifications for production."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "How to become an industrial designer in India",
        color: RED,
        content: [
          "Pathway A: After Class 12th (Design Entrance Route)",
          "Step 1: Complete Class 12th with Physics and Mathematics.",
          "Step 2: Clear UCEED/NID/CEED entrance exam after preparation.",
          "Step 3: Pursue B.Des in Industrial Design (4 years).",
          "Step 4: Learn CAD, SolidWorks, Rhino, and prototyping skills.",
          "Step 5: Complete internship at product design or manufacturing firm.",
          "Step 6: Join as Junior Industrial Designer or Product Designer.",
          "",
          "Pathway B: Engineering + Design Route",
          "Step 1: Complete Class 12th with PCM stream subjects.",
          "Step 2: Pursue B.Tech in Mechanical or Design Engineering.",
          "Step 3: Develop skills in 3D modelling and sketching.",
          "Step 4: Pursue M.Des in Industrial/Product Design specialisation.",
          "Step 5: Build portfolio with real product design projects.",
          "Step 6: Join as Industrial Designer in manufacturing companies.",
          "",
          "Pathway C: Diploma and Skill-Based Entry Route",
          "Step 1: Complete Class 10th or 12th any stream.",
          "Step 2: Join Diploma in Industrial/Product Design course.",
          "Step 3: Learn tools like AutoCAD, Fusion 360, KeyShot.",
          "Step 4: Work as apprentice in design studio or workshop.",
          "Step 5: Build strong portfolio showcasing original design concepts.",
          "Step 6: Get hired as Design Associate or freelance designer."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary, growth, and job market data for industrial designers",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹80LPA – ₹2.2 Crore",
          "Senior / Lead Role (10+ yrs): ₹30 – ₹65LPA",
          "Mid-Level Professional (5–8 yrs): ₹15 –₹28 LPA",
          "Junior / Associate (3–5 yrs): ₹7 – ₹13LPA",
          "Entry Level (0–2 yrs): ₹4 – ₹8 LPA",
          "Note: Metros and M.Des degrees boost pay by 35%.",
         
          "Where Are the Jobs?",
          "Top Cities: Pune, Bengaluru, Mumbai, Delhi-NCR, Ahmedabad.",
          "Top Industries: Automotive, Consumer Electronics, Medical Devices, Furniture.",
          "Global Demand: High in USA, Germany, Japan. AI-design growing."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top industrial design institutes across India",
        color: RED,
        content: [
          "Government: IIT Bombay (IDC School of Design); NID Ahmedabad (National Institute of Design); IIT Delhi (Department of Design); CEPT University, Ahmedabad",
          "Private: Srishti Manipal Institute, Bangalore; DSK International Campus, Pune; MIT Institute of Design, Pune; Lovely Professional University, Punjab",
          "Online: Coursera (IIT Bombay Design Courses); Udemy (Industrial Design Programs); Domestika (Product Design Courses); Skillshare (Industrial Design Classes)"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment required for industrial design education",
        color: RED3,
        content: [
          "Government Institutes: ₹2L–₹4L (Total for 4 years). Highly affordable with excellent reputation.",
          "Private Institutes: ₹8L–₹15L (Total for 4 years). Premium facilities and industry connections.",
          "Diploma Programs: ₹1.5L–₹3L (Total for 3 years). Good entry point.",
          "Software & Tools: ₹50,000–₹1L for CAD software licenses and design tools.",
          "Hostel/Living: ₹12,000–₹20,000 per month in major cities.",
          "Additional Costs: Portfolio development, internship travel, design competitions.",
          "Total Investment: Approximately ₹15L–₹30L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹8L per annum, you can recover investment in 3-4 years."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial support available for design students",
        color: RED5,
        content: [
          "NID Scholarships: Merit-based scholarships for top performers in entrance exams.",
          "IIT Design Scholarships: Full tuition waivers for economically weaker students.",
          "NSP (National Scholarship Portal): Merit-cum-Means scholarships for SC/ST/OBC students.",
          "State Scholarships: Various states offer scholarships for design students.",
          "Corporate Sponsorships: Design firms sponsor talented students' education.",
          "Women-Specific: Special scholarships for women in design.",
          "Merit-Based: Top performers in UCEED/CEED receive scholarships."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional credentials for industrial designers",
        color: RED,
        content: [
          "Certifications:",
          "IDSA (Industrial Designers Society of America): International recognition.",
          "CAD Certifications: SolidWorks, AutoCAD, Rhino certified professional.",
          "UX/UI Certification: For digital product design specialization.",
          "",
          "Professional Bodies:",
          "Indian Institute of Interior Designers (IIID)",
          "Design Council of India",
          "National Institute of Design (NID) Alumni Network",
          "",
          "Continuing Education: Workshops on emerging design tools and trends."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse career paths for industrial designers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "Industrial Designer at automobile companies",
          "Product Designer at consumer electronics firms",
          "Design Engineer at manufacturing companies",
          "Faculty/Researcher at design institutes",
          "",
          "New-Age & AI-Driven:",
          "UX/UI Industrial Designer at smart device and wearable startups",
          "Sustainable Product Designer at green-tech and circular economy firms",
          "AI-Assisted Generative Designer using parametric design tools",
          "EV and Mobility Designer at electric vehicle startups",
          "",
          "Remote/Entrepreneurship:",
          "Freelance Industrial Designer on global platforms",
          "Founder of product design studio or D2C consumer brand",
          "Remote CAD/3D Modeling Specialist for international design agencies",
          "Industrial Design Educator and Content Creator"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Challenges to be aware of in industrial design",
        color: RED3,
        content: [
          "Design Rejection: Your designs will be rejected. You must handle criticism gracefully.",
          "Manufacturing Constraints: Not all beautiful designs are manufacturable or affordable.",
          "Tight Deadlines: Product launches have fixed timelines. You work under pressure.",
          "Continuous Learning: Design tools and trends evolve rapidly.",
          "Portfolio Competition: You compete with designers globally for jobs.",
          "Freelance Uncertainty: Freelance work can be inconsistent and unpredictable.",
          "Ethical Dilemmas: Balancing aesthetics with sustainability and ethics."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in industrial design",
        color: RED2,
        content: [
          "AI-Powered Design: Generative design tools will create multiple design options automatically.",
          "Sustainable Design: Circular economy and eco-friendly materials will dominate.",
          "Personalization: Mass customization using 3D printing and AI.",
          "Smart Products: IoT integration making products intelligent and connected.",
          "Metaverse Design: Designing virtual products and experiences.",
          "Biophilic Design: Nature-inspired design becoming mainstream.",
          "Remote Collaboration: Global design teams working across time zones."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey",
        color: RED,
        content: [
          "Master Sketching: Draw daily. Develop quick sketching skills.",
          "Learn Basic CAD: Start with free tools like Fusion 360 or Tinkercad.",
          "Study Design Principles: Understand color, typography, composition.",
          "Observe Products: Analyze how everyday products are designed.",
          "Build Things: Make prototypes using cardboard, clay, or 3D printing.",
          "Follow Design Trends: Study platforms like Behance, Dribbble, and Design Observer.",
          "Participate in Competitions: Join design contests to build portfolio."
        ]
      }
    ]
  },

  industrial_engineering: {
    slug: "industrial_engineering",
    badge: "The Optimizer of Systems for Class 10+",
    heading: "Industrial Engineering",
    subheading: "Optimize processes and systems. Eliminate waste, increase efficiency, and drive profitability. Become the architect of operational excellence.",
    whyCards: [
      { icon: "Zap", title: "Efficiency Expert", description: "Optimize manufacturing and business processes. Save companies millions through smart systems.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "High Demand", description: "Every company needs industrial engineers. Massive demand across sectors.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, Germany, UAE. Remote process-optimization rising.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Leadership Path", description: "Fast track to management. Industrial engineers often become operations leaders.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech) or 3 Years (Diploma)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "JEE Main/Advanced, State CET", color: "bg-orange-100 text-orange-700" },
      { label: "Salary Range", detail: "₹4L–₹75L+ (Entry to Leadership)", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "₹75L+", label: "Leadership Salary", gradient: "from-red-500 to-red-600" },
      { value: "30%", label: "Pay Boost (Six Sigma)", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Zap",
        description: "Understanding industrial engineering and process optimization",
        color: RED,
        content: [
          "Industrial Engineering is the science of optimizing systems, processes, and resources. You analyze how things work and find ways to make them work better, faster, and cheaper.",
          "An Industrial Engineer is a detective of inefficiency. You identify bottlenecks, eliminate waste, and redesign processes. You work with data, statistics, and human factors to improve productivity.",
          "In today's competitive world, companies that optimize their operations win. Whether it's a manufacturing plant, e-commerce warehouse, or hospital, industrial engineers are essential.",
          "You use tools like Lean Manufacturing, Six Sigma, and data analytics to drive continuous improvement. You work with teams across the organization to implement changes.",
          "The field offers excellent career growth, good salaries, and the satisfaction of making tangible improvements to business performance."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world experience of an industrial engineer",
        color: RED2,
        content: [
          "08:30 AM - Plant Floor Walk: Rajesh starts his day at an automotive manufacturing plant in Pune. Walks the production floor observing assembly line operations.",
          "10:00 AM - Data Analysis: Returns to office and analyzes production data from yesterday. Identifies a bottleneck in the welding station causing 15% efficiency loss.",
          "11:30 AM - Root Cause Analysis: Meets with the welding team. Uses 5-Why analysis to understand why the bottleneck exists. Discovers outdated equipment and poor scheduling.",
          "01:00 PM - Solution Design: Sketches a new workflow that redistributes tasks and optimizes equipment usage. Calculates potential savings: ₹50 lakhs annually.",
          "02:30 PM - Stakeholder Meeting: Presents findings to plant manager and finance team. Discusses implementation timeline and resource requirements.",
          "04:00 PM - Pilot Implementation: Oversees testing of the new process on a small scale. Collects data on cycle time, quality, and worker safety.",
          "05:30 PM - Documentation: Updates process documentation and creates training materials for workers. Prepares for full-scale rollout next week."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Traits that make someone well-suited for industrial engineering",
        color: RED3,
        content: [
          "The Analytical Mind: You love data and statistics. You see patterns others miss.",
          "The Problem Solver: You break complex problems into manageable parts.",
          "The Systems Thinker: You understand how different parts of a system interact.",
          "The Communicator: You can explain technical concepts to non-technical people.",
          "The Change Agent: You're comfortable with change and driving organizational transformation.",
          "The Detail Observer: You notice inefficiencies and waste.",
          "The Continuous Improver: You believe everything can be optimized."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Core duties of an industrial engineer",
        color: RED4,
        content: [
          "Process Analysis: Studying current processes to identify inefficiencies.",
          "Data Collection: Gathering metrics on time, cost, quality, and safety.",
          "Root Cause Analysis: Understanding why problems exist.",
          "Solution Design: Creating improved processes and workflows.",
          "Simulation & Modeling: Using software to test solutions before implementation.",
          "Implementation: Overseeing rollout of new processes.",
          "Training: Teaching teams about new procedures.",
          "Continuous Monitoring: Tracking performance and making adjustments."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "How to become an industrial engineer in India",
        color: RED,
        content: [
          "Pathway A: After Class 12th (B.Tech Route)",
          "Step 1: Complete Class 12th with PCM (Physics, Chemistry, Mathematics).",
          "Step 2: Clear JEE Main/Advanced or state engineering entrance exams.",
          "Step 3: Pursue B.Tech in Industrial Engineering (4 years).",
          "Step 4: Learn Six Sigma, Lean Manufacturing, and ERP tools.",
          "Step 5: Complete internship in manufacturing or operations management.",
          "Step 6: Join as Industrial Engineer or Production Planning Engineer.",
        
          "Pathway B: Engineering + MBA/M.Tech Route",
          "Step 1: Complete Class 12th with PCM stream subjects.",
          "Step 2: Pursue B.Tech in Mechanical or Industrial Engineering.",
          "Step 3: Gain work experience in factory or supply chain.",
          "Step 4: Pursue MBA (Operations) or M.Tech in Industrial Engineering.",
          "Step 5: Develop expertise in operations research and quality management.",
          "Step 6: Join as Operations Manager or Senior Industrial Engineer.",
          
          "Pathway C: Diploma and Skill-Based Entry Route",
          "Step 1: Complete Class 10th or 12th with science subjects.",
          "Step 2: Join Diploma in Industrial/Mechanical Engineering (3 years).",
          "Step 3: Learn AutoCAD, SAP, and quality control techniques.",
          "Step 4: Work as junior technician in manufacturing plant.",
          "Step 5: Gain certifications in Six Sigma or Lean Manufacturing.",
          "Step 6: Get promoted to Industrial Engineering Supervisor or Analyst."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary, growth, and job market data for industrial engineers",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹75LPA – ₹2.2 Crore",
          "Senior / Lead Role (10+ yrs): ₹30 – ₹65LPA",
          "Mid-Level Professional (5–8 yrs): ₹15 –₹28 LPA",
          "Junior / Associate (3–5 yrs): ₹8 – ₹14LPA",
          "Entry Level (0–2 yrs): ₹4 – ₹9 LPA",
          "Note: Lean Six Sigma and PMP boost pay by 30%.",
          "",
          "Where Are the Jobs?",
          "Top Cities: Pune, Bengaluru, Chennai, Gurgaon, Hyderabad, Ahmedabad.",
          "Top Industries: Automotive, E-commerce, FMCG, Electronics, Defense, Logistics.",
          "Global Demand: High in USA, Germany, UAE. Remote process-optimization rising."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top industrial engineering institutes across India",
        color: RED,
        content: [
          "Government: IIT Kharagpur; IIT Roorkee; NIT Tiruchirappalli; VNIT Nagpur",
          "Private: BITS Pilani; SRM Institute of Technology, Chennai; Manipal Institute of Technology, Manipal; Amity University, Noida",
          "Online: NPTEL (IIT Industrial Engineering Courses); Coursera (Operations & Industrial Engineering); edX (Manufacturing & Systems Engineering); Udemy (Industrial Engineering Programs)"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment required for industrial engineering education",
        color: RED3,
        content: [
          "Government Institutes: ₹2L–₹4L (Total for 4 years). Highly affordable.",
          "Private Institutes: ₹8L–₹15L (Total for 4 years). Premium facilities.",
          "Diploma Programs: ₹1.5L–₹3L (Total for 3 years). Good entry point.",
          "Certifications: Six Sigma (₹30,000–₹50,000), PMP (₹40,000–₹60,000).",
          "Hostel/Living: ₹12,000–₹20,000 per month in major cities.",
          "Additional Costs: Software tools, internship travel, professional memberships.",
          "Total Investment: Approximately ₹15L–₹30L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹9L per annum, you can recover investment in 3-4 years."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial support available for industrial engineering students",
        color: RED5,
        content: [
          "IIT Scholarships: Merit-based scholarships for top performers.",
          "NIT Scholarships: Full tuition waivers for economically weaker students.",
          "NSP (National Scholarship Portal): Merit-cum-Means scholarships for SC/ST/OBC students.",
          "State Scholarships: Various states offer scholarships for engineering students.",
          "Corporate Sponsorships: Manufacturing companies sponsor talented students.",
          "Women-Specific: Special scholarships for women in engineering.",
          "GATE Scholarships: Scholarships for GATE qualified students pursuing M.Tech."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional credentials for industrial engineers",
        color: RED,
        content: [
          "Certifications:",
          "Six Sigma Green Belt/Black Belt: Industry-standard quality certification.",
          "Lean Manufacturing Certification: Lean process optimization.",
          "PMP (Project Management Professional): Project management credential.",
          "APICS CSCP: Supply chain management certification.",
          "",
          "Professional Bodies:",
          "Institution of Engineers (IE) India",
          "American Society of Mechanical Engineers (ASME)",
          "Institute of Industrial and Systems Engineers (IISE)",
          "",
          "Continuing Education: Workshops on Industry 4.0, AI, and automation."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse career paths for industrial engineers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "Production/Manufacturing Engineer at companies",
          "Quality Control Engineer at automobile firms",
          "Operations Manager at FMCG companies",
          "Industrial Engineer at public sector undertakings",
          "",
          "New-Age & AI-Driven:",
          "Supply Chain Analytics Specialist at e-commerce platforms",
          "Smart Factory/Industry 4.0 Engineer at automation-driven manufacturers",
          "Robotics and Process Automation Engineer at EV and electronics startups",
          "Digital Twin Specialist at advanced manufacturing and simulation firms",
          "",
          "Remote/Entrepreneurship:",
          "Freelance Lean/Six Sigma Consultant for international manufacturers",
          "Founder of manufacturing optimization or process consulting startup",
          "Remote Supply Chain and Operations Analyst for global companies",
          "Industrial Engineering Educator and Content Creator"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Challenges to be aware of in industrial engineering",
        color: RED3,
        content: [
          "Resistance to Change: Workers often resist new processes. Change management is difficult.",
          "Data Quality: Decisions depend on accurate data. Poor data leads to wrong conclusions.",
          "Implementation Complexity: Designing solutions is easier than implementing them.",
          "Continuous Pressure: Always expected to find more improvements and cost savings.",
          "Work-Life Balance: Deadlines and production schedules can demand long hours.",
          "Ethical Dilemmas: Balancing efficiency with worker welfare and safety.",
          "Rapid Technology Change: Must stay updated with Industry 4.0 and automation trends."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in industrial engineering",
        color: RED2,
        content: [
          "Industry 4.0: Smart factories with IoT, AI, and automation.",
          "Digital Twins: Virtual replicas of physical systems for optimization.",
          "AI-Powered Analytics: Machine learning predicting and preventing inefficiencies.",
          "Sustainable Manufacturing: Green processes and circular economy focus.",
          "Supply Chain Resilience: Building robust supply chains post-pandemic.",
          "Human-Robot Collaboration: Cobots working alongside humans.",
          "Remote Monitoring: Real-time optimization from anywhere in the world."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey",
        color: RED,
        content: [
          "Master Mathematics: Strong foundation in statistics and calculus.",
          "Learn Data Analysis: Excel, basic Python, or R for data handling.",
          "Study Processes: Understand how systems and processes work.",
          "Develop Problem-Solving: Practice logical thinking and analysis.",
          "Learn Quality Concepts: Understand Six Sigma and Lean basics.",
          "Build Projects: Create optimization projects for school or community.",
          "Stay Curious: Follow manufacturing and supply chain news."
        ]
      }
    ]
  },

  mechanical_engineering: {
    slug: "mechanical_engineering",
    badge: "The Builder of the Future for Class 10+",
    heading: "Mechanical Engineering",
    subheading: "Design and build machines that power the world. From electric vehicles to renewable energy systems, shape the future through mechanical innovation.",
    whyCards: [
      { icon: "Cog", title: "Universal Skill", description: "Mechanical engineering applies everywhere. Every industry needs mechanical engineers.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "EV Revolution", description: "Electric vehicles and renewable energy creating massive demand for mechanical engineers.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Germany, USA. Remote R&D and EV trends growing.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Innovation Hub", description: "Work on cutting-edge technologies: robotics, aerospace, renewable energy.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech) or 3 Years (Diploma)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "JEE Main/Advanced, State CET", color: "bg-orange-100 text-orange-700" },
      { label: "Salary Range", detail: "₹4L–₹50L+ (Entry to Leadership)", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "₹50L+", label: "Leadership Salary", gradient: "from-red-500 to-red-600" },
      { value: "30%", label: "Pay Boost (M.Tech/EV)", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Cog",
        description: "Understanding mechanical engineering and machine design",
        color: RED,
        content: [
          "Mechanical Engineering is the science of designing, building, and improving machines and mechanical systems. You work with everything from tiny gears to massive turbines.",
          "A Mechanical Engineer applies physics and mathematics to solve practical problems. You design products, optimize systems, and ensure they work reliably and efficiently.",
          "In today's world, mechanical engineers are driving the EV revolution, renewable energy transition, and Industry 4.0. Every electric vehicle, solar panel, and robot needs mechanical engineers.",
          "You use tools like CAD software, simulation software, and prototyping to bring ideas to life. You work with teams of engineers, designers, and manufacturers.",
          "The field offers excellent career growth, good salaries, and the satisfaction of building things that impact millions of lives."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world experience of a mechanical engineer",
        color: RED2,
        content: [
          "08:00 AM - Design Review: Vikram starts his day at an EV startup in Bengaluru. Reviews CAD models of a new electric motor design created by his team.",
          "09:30 AM - Simulation Analysis: Opens ANSYS software to run thermal and stress simulations on the motor design. Checks if it can handle peak loads without failure.",
          "11:00 AM - Team Meeting: Discusses simulation results with electrical engineers and manufacturing team. Identifies design modifications needed for better performance.",
          "12:30 PM - CAD Modeling: Returns to SolidWorks and modifies the motor design based on feedback. Creates detailed technical drawings for manufacturing.",
          "02:00 PM - Prototype Review: Visits the workshop to inspect a 3D-printed prototype of the motor housing. Tests fit and function with other components.",
          "03:30 PM - Problem Solving: Discovers a cooling issue in the prototype. Sketches alternative designs and discusses solutions with the team.",
          "05:00 PM - Documentation: Updates design specifications and creates manufacturing drawings. Prepares for next week's prototype testing.",
          "06:30 PM - Learning: Watches a webinar on advanced battery thermal management for EVs. Stays updated on latest technologies."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Traits that make someone well-suited for mechanical engineering",
        color: RED3,
        content: [
          "The Problem Solver: You love tackling complex technical challenges.",
          "The Practical Thinker: You understand how things work in the real world.",
          "The Detail Perfectionist: You care about precision and quality.",
          "The Innovator: You imagine new solutions and improvements.",
          "The Communicator: You can explain technical concepts clearly.",
          "The Hands-On Learner: You enjoy building and testing prototypes.",
          "The Continuous Learner: You stay updated with new technologies and methods."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Core duties of a mechanical engineer",
        color: RED4,
        content: [
          "Conceptualization: Understanding requirements and brainstorming solutions.",
          "Design: Creating detailed designs using CAD software.",
          "Analysis: Using simulation software to test designs virtually.",
          "Prototyping: Building physical prototypes to validate designs.",
          "Testing: Conducting tests to ensure performance and safety.",
          "Optimization: Improving designs for cost, performance, and manufacturability.",
          "Documentation: Creating technical drawings and specifications.",
          "Collaboration: Working with cross-functional teams."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "How to become a mechanical engineer in India",
        color: RED,
        content: [
          "Pathway A: After Class 12th (B.Tech Route)",
          "Step 1: Complete Class 12th with PCM (Physics, Chemistry, Mathematics).",
          "Step 2: Clear JEE Main/Advanced or state engineering entrance exams.",
          "Step 3: Pursue B.Tech in Mechanical Engineering (4 years).",
          "Step 4: Learn AutoCAD, SolidWorks, ANSYS, and MATLAB tools.",
          "Step 5: Complete internship in automobile, manufacturing, or HVAC industry.",
          "Step 6: Join as Mechanical Engineer or Design Engineer role.",
         
          "Pathway B: B.Tech + M.Tech/MBA Specialisation Route",
          "Step 1: Complete Class 12th with PCM stream subjects.",
          "Step 2: Pursue B.Tech in Mechanical Engineering from reputed college.",
          "Step 3: Gain industry experience in core mechanical sector.",
          "Step 4: Pursue M.Tech (Thermal/Design) or MBA in Operations.",
          "Step 5: Specialise in robotics, aerospace, or energy systems field.",
          "Step 6: Join as Senior Engineer, R&D Lead, or Operations Manager.",

          "Pathway C: Diploma and Skill-Based Entry Route",
          "Step 1: Complete Class 10th or 12th with science subjects.",
          "Step 2: Join Diploma in Mechanical Engineering (3 years).",
          "Step 3: Learn CNC programming, welding, and workshop technology.",
          "Step 4: Work as junior technician in factory or workshop.",
          "Step 5: Pursue lateral entry into B.Tech or gain certifications.",
          "Step 6: Get promoted to Mechanical Supervisor or Site Engineer."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary, growth, and job market data for mechanical engineers",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹50LPA – ₹2.2 Crore",
          "Senior / Lead Role (10+ yrs): ₹20 – ₹45LPA",
          "Mid-Level Professional (5–8 yrs): ₹10 –₹19 LPA",
          "Junior / Associate (3–5 yrs): ₹6 – ₹9LPA",
          "Entry Level (0–2 yrs): ₹4 – ₹7 LPA",
          "Note: Metros and GATE/M.Tech or EV skills boost pay by 30%.",
  
          "Where Are the Jobs?",
          "Top Cities: Pune, Bengaluru, Chennai, Delhi-NCR, Ahmedabad.",
          "Top Industries: Automotive/EV, Aerospace, Manufacturing, Energy, Defense.",
          "Global Demand: High in Germany, USA. Remote R&D and EV trends."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top mechanical engineering institutes across India",
        color: RED,
        content: [
          "Government: IIT Bombay; IIT Madras; IIT Kanpur; IIT Delhi; Thapar Institute of Engineering, Patiala",
          "Private: BITS Pilani; VIT Vellore; Manipal Institute of Technology, Manipal",
          "Online: NPTEL (IIT Mechanical Engineering Courses); Coursera (Mechanical Engineering Specializations); edX (MIT Mechanical Engineering Programs); Udemy (Mechanical Engineering Courses)"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment required for mechanical engineering education",
        color: RED3,
        content: [
          "Government Institutes: ₹2L–₹4L (Total for 4 years). Highly affordable.",
          "Private Institutes: ₹8L–₹15L (Total for 4 years). Premium facilities.",
          "Diploma Programs: ₹1.5L–₹3L (Total for 3 years). Good entry point.",
          "Software & Tools: ₹50,000–₹1L for CAD and simulation software.",
          "Hostel/Living: ₹12,000–₹20,000 per month in major cities.",
          "Additional Costs: Internship travel, professional memberships, certifications.",
          "Total Investment: Approximately ₹15L–₹30L for complete degree.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 4-5 years."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial support available for mechanical engineering students",
        color: RED5,
        content: [
          "IIT Scholarships: Merit-based scholarships for top performers.",
          "NIT Scholarships: Full tuition waivers for economically weaker students.",
          "NSP (National Scholarship Portal): Merit-cum-Means scholarships for SC/ST/OBC students.",
          "State Scholarships: Various states offer scholarships for engineering students.",
          "Corporate Sponsorships: Automotive and manufacturing companies sponsor students.",
          "Women-Specific: Special scholarships for women in engineering.",
          "GATE Scholarships: Scholarships for GATE qualified students pursuing M.Tech."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional credentials for mechanical engineers",
        color: RED,
        content: [
          "Certifications:",
          "PE (Professional Engineer): License to practice engineering independently.",
          "GATE: Graduate Aptitude Test in Engineering for M.Tech admission.",
          "CAD Certifications: SolidWorks, AutoCAD, ANSYS certified professional.",
          "ASME Certifications: American Society of Mechanical Engineers credentials.",
          "",
          "Professional Bodies:",
          "Institution of Engineers (IE) India",
          "American Society of Mechanical Engineers (ASME)",
          "Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE)",
          "",
          "Continuing Education: Workshops on EV technology, Industry 4.0, and renewable energy."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse career paths for mechanical engineers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "Design Engineer at automobile companies",
          "Mechanical Engineer at public sector undertakings",
          "Production Engineer at manufacturing firms",
          "Maintenance Engineer at Railways, Indian Navy, and defence establishments",
          "",
          "New-Age & AI-Driven:",
          "EV Powertrain Engineer at electric vehicle startups",
          "Robotics and Automation Engineer at Industry 4.0 smart factories",
          "3D Printing/Additive Manufacturing Specialist at aerospace and medical firms",
          "Renewable Energy Engineer at solar/wind energy companies",
          "",
          "Remote/Entrepreneurship:",
          "Freelance CAD/CAM Designer for international manufacturing clients",
          "Founder of precision manufacturing or engineering services startup",
          "Remote Simulation and FEA Analyst for global engineering companies",
          "Mechanical Engineering Educator and Content Creator"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Challenges to be aware of in mechanical engineering",
        color: RED3,
        content: [
          "Design Constraints: Balancing performance, cost, and manufacturability is difficult.",
          "Rapid Technology Change: Must stay updated with new tools and technologies.",
          "Project Deadlines: Tight timelines and high-pressure environments.",
          "Quality Responsibility: Failures can have serious consequences for users.",
          "Continuous Learning: New materials, processes, and technologies emerge constantly.",
          "Work-Life Balance: Project phases can demand long hours.",
          "Global Competition: Competing with engineers worldwide for jobs and projects."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in mechanical engineering",
        color: RED2,
        content: [
          "EV Revolution: Electric vehicles and battery technology dominating.",
          "Renewable Energy: Solar, wind, and hydrogen fuel cell systems.",
          "Robotics & Automation: Collaborative robots and autonomous systems.",
          "3D Printing: Additive manufacturing for complex parts.",
          "AI & Machine Learning: Optimizing designs and predicting failures.",
          "Sustainable Materials: Biodegradable and recycled materials.",
          "Space Technology: Commercial space exploration and satellite systems."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey",
        color: RED,
        content: [
          "Master Physics: Strong foundation in mechanics and thermodynamics.",
          "Learn CAD: Start with free tools like Fusion 360 or Tinkercad.",
          "Build Projects: Make mechanical models and machines.",
          "Study Machines: Understand how engines, motors, and machines work.",
          "Learn Programming: Python or C++ for automation and simulation.",
          "Participate in Robotics: Join robotics clubs and competitions.",
          "Follow Tech News: Stay updated on EV and renewable energy developments."
        ]
      }
    ]
  }
};
