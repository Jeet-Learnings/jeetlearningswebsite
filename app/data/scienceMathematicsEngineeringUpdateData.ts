import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";
const PURPLE = "#7C3AED";
const INDIGO = "#6366F1";

export const scienceMathematicsEngineeringUpdateData: Record<string, CareerPageData> = {
  mechatronics_engineer: {
    slug: "mechatronics_engineer",
    badge: "System Architects of Intelligent Motion for Class 10+",
    heading: "Mechatronics Engineering",
    subheading: "Design machines that think. Blend mechanical engineering, electronics, computer science, and control systems to bring inanimate metal to life.",
    whyCards: [
      { icon: "Cpu", title: "Intelligent Motion", description: "Create the 'System Architects' of the modern world with seamless hardware-software integration.", borderColor: "#3B82F6" },
      { icon: "Factory", title: "Industry 4.0 Revolution", description: "At the heart of smart factories, drones, and surgical robots transforming Indian manufacturing.", borderColor: "#6366F1" },
      { icon: "TrendingUp", title: "High Growth Sector", description: "12% CAGR through 2027 with massive demand for automation experts.", borderColor: "#10B981" },
      { icon: "Zap", title: "Cutting-Edge Innovation", description: "Work on autonomous vehicles, collaborative robots, and AI-embedded hardware.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years (B.Tech) + Optional M.Tech", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Routes", detail: "JEE Main/Advanced, State CETs, GATE", color: "bg-indigo-100 text-indigo-700" },
      { label: "Salary Range", detail: "₹5L–₹1.2Cr+ (Entry to CTO)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "12%", label: "CAGR Growth Through 2027", gradient: "from-blue-500 to-blue-600" },
      { value: "₹1.2Cr+", label: "Leadership Salary (CTO)", gradient: "from-purple-500 to-purple-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of 'Intelligent Motion'.",
        color: BLUE,
        content: [
          "The Mystery: Have you ever wondered how a robotic arm in a factory knows exactly when to pick up a microscopic component, or how a self-driving car processes a thousand variables per second to avoid a collision? They don't just rely on standard mechanics; they use Mechatronics Engineering.",
          "The Definition: Mechatronics is the art and science of 'Intelligent Motion.' Mechatronics Engineers are the 'System Architects' of the modern world. They use a seamless blend of mechanical engineering, electronics, computer science, and control systems to design machines that think—balancing hardware power with software precision to bring inanimate metal to life.",
          "The Impact: In today's India, this career is at the heart of the 'Industry 4.0' revolution. As our manufacturing shifts toward smart factories, drones, and surgical robots, every innovation requires an expert to bridge the gap between physical movement and digital intelligence.",
          "Beyond Machine Fixers: Mechatronics professionals aren't just 'machine fixers'; they are the strategic innovators building the autonomous future of the nation."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: A Mechatronics Engineer",
        icon: "Clock",
        description: "Real workflow at a smart manufacturing plant.",
        color: BLUE2,
        content: [
          "08:30 AM – System Diagnostics: Ishita, a Mechatronics Engineer at a smart manufacturing plant in Pune, reviews the 'Real-Time Sensor Logs.' She checks if any actuators or robotic servos showed thermal anomalies or precision drift during the midnight shift.",
          "10:30 AM – Integration Briefing: She meets the Software and Mechanical teams to plan a firmware patch for the automated sorting line. Ishita explains how to recalibrate the PID Control Loops to increase throughput without compromising the structural integrity of the robotic arms.",
          "1:30 PM – Digital Twin Simulation: Using Multiphysics software, Ishita runs a 'Stress Simulation' for a new prototype drone. She tests if the integrated circuit board can withstand the vibrations of high-torque motors under extreme weather conditions.",
          "4:00 PM – Strategy Session: She briefs the Chief Technology Officer (CTO). Ishita translates complex sensor data into strategy: recommending a shift to AI-driven Predictive Maintenance to reduce factory downtime by 15%.",
          "7:30 PM – Technical Deep-Dive: Ishita reviews manuals on Cobots (Collaborative Robots) for a safety certification. Staying updated on human-machine interface protocols is vital for her career and the safety of the workforce."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Check if you have the 'Intelligence DNA'.",
        color: BLUE,
        content: [
          "Analytical Curiosity: You don't just read a news headline; you look for the hidden motive and the geopolitical ripple effect behind every event.",
          "Stoic Composure: In high-stakes situations or while handling classified data, you remain calm and poker-faced, making rational decisions when emotions run high.",
          "Adaptive Stealth: You possess 'Social Camouflage.' You can blend into any environment and communicate with people from all walks of life without revealing your true intent.",
          "Unwavering Integrity: You understand that your greatest achievements will never be made public. You are driven by a silent, profound commitment to national sovereignty.",
          "Pattern Recognition: You can synthesize fragmented data points—from financial trails to encrypted signals—to predict and preempt a crisis before it manifests."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The operational cycle: Design → Integration → Optimization.",
        color: BLUE2,
        content: [
          "System Modeling: Using CAD and simulation tools to design the mechanical structure while simultaneously mapping the electronic sensor placement.",
          "Sensor-Actuator Integration: Writing low-level code to ensure sensors (input) and motors (output) communicate with millisecond precision.",
          "Control Loop Tuning: Implementing and refining PID or Fuzzy Logic controllers to ensure smooth, stable movement in robotic or automated systems.",
          "Prototyping & Testing: Building physical 'proof-of-concepts' to test how hardware survives real-world stresses and electrical interference.",
          "Firmware Optimization: Developing efficient embedded software to manage power consumption and processing speed in mobile or autonomous devices.",
          "Predictive Maintenance: Installing diagnostic IoT modules that monitor vibration and heat to predict mechanical failure before it happens.",
          "Safety Interlocking: Designing 'Fail-Safe' protocols to ensure machines stop instantly if human safety or structural limits are compromised."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Specialized academic and technical routes for Industry 4.0.",
        color: BLUE,
        content: ["Pathway A: Core Engineering Route","Step 1: Complete Class 12th with Physics, Chemistry, Mathematics.","Step 2: Clear JEE/State CET for engineering admission.","Step 3: Pursue B.Tech in Mechatronics or Robotics Engineering.","Step 4: Complete internship in automation or robotics companies.","Step 5: Pursue M.Tech in Mechatronics, Robotics, or AI.","Step 6: Work as Mechatronics Engineer or Automation Design Engineer.","Pathway B: Research & Development Route","Step 1: Complete Class 12th with PCM subjects.","Step 2: Pursue B.Tech in Mechatronics, ECE, or Mechanical Engineering.","Step 3: Learn tools like Arduino, ROS, MATLAB, and PLC.","Step 4: Clear GATE exam for M.Tech or PSU recruitment.","Step 5: Pursue M.Tech/Ph.D. from IITs, NITs, or IISC.","Step 6: Join as R&D Scientist or Robotics Research Engineer.","Pathway C: Skill-Based & Industry Entry Route","Step 1: Complete Class 12th with Science or ITI course.","Step 2: Pursue diploma in Mechatronics or Industrial Automation.","Step 3: Learn PLC, SCADA, embedded systems, and IoT basics.","Step 4: Complete industry certifications from Siemens or NSDC.","Step 5: Gain hands-on experience through factory or workshop training.","Step 6: Work as Automation Technician or PLC Programmer."]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth projections, and hiring trends.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹70 LPA – ₹2.5 Crore","Senior / Lead Role (10+ yrs): ₹32 – ₹65 LPA","Mid-Level Professional (5–8 yrs): ₹15 – ₹30 LPA","Junior / Associate (3–5 yrs): ₹8 – ₹14 LPA","Entry Level (0–2 yrs): ₹4.5 – ₹7.5 LPA","Note: Expertise in Robotics, AI-integration (Physical AI), and ROS 2 boosts pay by 40%.","Where Are the Jobs?","Top Cities: Bengaluru, Pune, Chennai, Hyderabad, Delhi-NCR (Gurgaon/Noida).","Top Industries: Automotive/EV, Industrial Automation, Robotics, Aerospace, MedTech.","Global Demand: High in Germany, Japan, USA. Remote R&D and \"Digital Twin\" modeling are key trends.","Top Institutions","Career Opportunities","Conventional:","Mechatronics Engineer","Robotics Engineer","Automation / PLC Engineer","Control Systems Engineer","New-age and AI driven","Embedded Systems Engineer","Computer Vision Robotics Engineer","Smart Manufacturing Engineer","Autonomous Systems Engineer","Remote / Entrepreneurship","Robotics Trainer","Industrial Automation Consultant","Embedded Systems Freelancer","Robotics / Automation Startup Founder"]
      },
      {
        id: "opportunities",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Major hubs and emerging opportunities.",
        color: BLUE,
        content: [
          "Automotive Hubs: Major R&D and manufacturing centers in Pune (Tata Motors, Mercedes-Benz), Chennai (Hyundai, Renault-Nissan), and Gurugram (Maruti Suzuki) for EV and autonomous system development.",
          "Electronics & Tech Corridors: Bengaluru and Hyderabad, home to aerospace giants like HAL and semiconductor firms like Intel and Texas Instruments.",
          "Specialized Robotics Hubs: Emerging clusters in Ahmedabad and Coimbatore focusing on textile automation and industrial 'Cobots.'",
          "Defense & Aerospace: Public sectors like DRDO and ISRO for mechatronic satellite controls, alongside private players like L&T Defence.",
          "Emerging Opportunities: Rapid hiring in the Warehouse Automation sector (e.g., GreyOrange) and Medical Technology firms developing robotic surgical tools.",
          "Remote & Hybrid Potential: Growing demand for Digital Twin Architects and Embedded Software Engineers who can design and simulate hardware systems via cloud-based platforms like MATLAB or NVIDIA Omniverse."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Financial investment breakdown.",
        color: BLUE2,
        content: [
          "Entrance Exams: Fees for JEE Main/Advanced or state CETs typically range from ₹1,000 – ₹2,000. GATE for post-graduation costs approximately ₹1,800.",
          "University Tuition: A 4-year B.Tech in Mechatronics at a government college costs ₹4 Lakhs – ₹8 Lakhs, while premier private universities may range from ₹12 Lakhs – ₹20 Lakhs.",
          "Hardware Kits: Aspiring engineers often invest ₹5,000 – ₹15,000 in Arduino/Raspberry Pi kits, sensors, and basic 3D printing services for personal projects.",
          "Software & Certifications: While student versions of CAD are free, specialized certifications in PLC programming or ROS can cost ₹10,000 – ₹25,000.",
          "Learning Resources: A collection of core textbooks on robotics, control systems, and embedded electronics costs around ₹3,000 – ₹6,000.",
          "Total Journey: Including a degree and essential project kits, a student can become industry-ready with a total investment of ₹6 Lakhs – ₹22 Lakhs."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Premier training institutes and academic routes.",
        color: BLUE,
        content: [
          "Public/Premier Institutes -  IIT Bhilai & IIT Hyderabad: Leaders in integrated Mechatronics and Smart Manufacturing departments, offering specialized B.Tech and M.Tech tracks.",
          "Public/Premier Institutes -  NIT Surathkal & NIT Trichy: Known for robust Industrial Automation and Control Systems programs under their Instrumentation and Mechanical wings.",
          "Public/Premier Institutes -  NIELIT (National Institute of Electronics & Information Technology): Government centers in Aurangabad and Delhi providing advanced diplomas in Robotic Process Automation (RPA) and IoT.",
          "Academic Routes -  Anna University, Chennai: One of the oldest and most respected hubs for Mechatronics at the undergraduate level in India.",
          "Academic Routes -  IIIT Delhi & IIIT Hyderabad: Focus heavily on the 'Intelligence' side, offering niche specializations in Robotics and AI.",
          "Private/Niche Options -  Manipal Institute of Technology (MIT): Offers a dedicated Mechatronics department with strong industry tie-ups for autonomous vehicle research.",
          "Private/Niche Options -  Vellore Institute of Technology (VIT): Known for specialized B.Tech programs in Robotics & Automation with extensive lab facilities.",
          "Private/Niche Options -  Chandigarh University: Provides ABET-accredited Mechatronics programs with a focus on Industry 4.0 and experiential learning.",
          "Skill Development -  MSME Technology Centres: Located in cities like Ludhiana and Hyderabad, these offer hands-on certification in PLC Programming and CNC Maintenance.",
          "Skill Development -  Indian Institute of Robotics (IIR): A private initiative offering intensive project-based training in building custom PCBs and robotic modules.",
          "International Collaboration: Programs linked with Siemens, Bosch-Rexroth, or Fanuc often provide global standard training in industrial robotics and factory automation within Indian campuses."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial aid available.",
        color: BLUE,
        content: [
          "Siemens Scholarship Program: Aimed at first-year government engineering students, this provides full tuition reimbursement and flat allowances. It includes a 'Holistic Development Program' with specific tracks for Mechatronics and soft skills.",
          "AICTE Pragati Scholarship: A dedicated government initiative providing ₹50,000 annually to meritorious girl students pursuing technical degrees or diplomas in fields like Robotics and Automation.",
          "Panasonic Ratti Chhatr Scholarship: Provides financial assistance (up to ₹42,500 per year) for high-performing students from low-income backgrounds admitted to undergraduate engineering programs at the IITs.",
          "ISA (International Society of Automation) Scholarships: Awarded to student members who demonstrate potential in Automation and Control. These grants support tuition, research initiatives, and professional travel.",
          "National Scholarship Portal (NSP): Mechatronics aspirants can access various 'Central Sector Schemes' and AICTE Saksham grants (for specially-abled students) to fund their foundational B.Tech or Diploma.",
          "Corporate R&D Apprenticeships: Under the National Apprenticeship Training Scheme (NATS), firms like Bosch and ABB provide monthly stipends and hands-on experience in smart factory environments.",
          "Industry-Specific CSR Grants: Leading tech firms like L&T often sponsor niche mechatronics diplomas and 'Industry 4.0' certifications for students from rural or marginalized backgrounds to boost technical literacy."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Regulatory and professional organizations.",
        color: BLUE2,
        content: [
          "Ministry of Heavy Industries & MeitY: The apex government bodies that drive the 'National Policy on Robotics' and the 'Digital India' framework, setting the regulatory and manufacturing standards for the industry.",
          "National Skill Development Corporation (NSDC): The official body responsible for certifying and licensing the automation workforce through the Automotive Skills Development Council (ASDC) and electronics sectors.",
          "IEEE Robotics and Automation Society (RAS): The premier global professional body with active India chapters (e.g., Delhi, Madras, Bombay) that provides academic accreditation and sets worldwide research standards.",
          "International Society of Automation (ISA) – India Section: The primary licensing body for automation professionals, offering globally recognized certifications like Certified Automation Professional (CAP) and Control Systems Technician (CCST).",
          "All India Council for Technical Education (AICTE): The statutory body that governs the curriculum standards for Mechatronics and Robotics degrees across Indian engineering colleges.",
          "International Federation of Robotics (IFR): An international body that collaborates with Indian associations (like AIR) to standardize industrial robot definitions and safety protocols globally.",
          "Quality Council of India (QCI): Works with private and public manufacturers to certify 'Zero Defect Zero Effect' standards in mechatronic production lines and smart factories."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Realistic expectations.",
        color: BLUE,
        content: [
          "The 'Hybrid' Learning Curve: You must master three distinct fields—Mechanical, Electronics, and Software. Balancing these competing disciplines requires lifelong learning and intellectual stamina.",
          "Rapid Obsolescence: Technology in robotics and AI evolves at a blistering pace. A system you master today might be redundant in three years, demanding constant re-skilling and agility.",
          "Precision Pressure: In medical robotics or aerospace, a software bug or a 1-millimeter hardware misalignment can lead to catastrophic failure. The 'zero-margin-for-error' reality is mentally taxing.",
          "Complex Troubleshooting: When a smart system fails, the root cause could be a mechanical wear, a sensor glitch, or a code logic error. Diagnosing these 'Ghost in the Machine' issues is often a high-pressure, time-sensitive task.",
          "Interdisciplinary Friction: You act as the bridge between specialized teams. Managing technical conflicts between 'hardware-first' and 'software-first' philosophies requires exceptional communication and negotiation skills."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends (2025–2035)",
        icon: "Sparkles",
        description: "What's next in mechatronics.",
        color: BLUE2,
        content: [
          "Soft Robotics & Bio-mimetics: Moving away from rigid metal, future machines will use flexible, organic-inspired materials for delicate surgeries and 'Human-Robot Collaboration,' mimicking biological muscle movements.",
          "Edge Intelligence: Rather than relying on the cloud, robots will feature 'On-Device AI,' allowing them to make split-second, autonomous decisions locally—critical for self-driving cars and emergency response drones.",
          "Digital Twin Ecosystems: Engineers will build perfect virtual replicas of physical factories. Using IoT data, they can simulate years of wear or test new configurations in seconds before touching a single real-world machine.",
          "Energy-Harvesting Actuators: A shift toward 'Self-Powering Systems' that capture kinetic energy from their own movements, drastically reducing the carbon footprint of industrial automation and wearable exoskeletons.",
          "Human-Machine Tele-presence: Advances in haptic feedback will allow engineers to 'feel' and operate robotic systems from thousands of miles away, enabling remote high-precision manufacturing or space exploration."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master Applied Physics: Dive deep into mechanics, electromagnetism, and rotational dynamics. These are the bedrock principles behind every motor and sensor you will eventually design.",
          "Hands-on Electronics: Start experimenting with DIY kits like Arduino or Raspberry Pi. Learning to blink an LED or move a small servo motor is your first step into hardware-software integration.",
          "Logical Coding (Python/C++): Focus on the 'Logic' of programming. Mechatronics relies on algorithms that translate sensory data into physical movement.",
          "3D Visualization: Explore basic CAD (Computer-Aided Design) software. Being able to visualize a 3D object from a 2D sketch is a vital spatial reasoning skill for roboticists.",
          "Math for Control: Strengthen your grasp on Calculus and Linear Algebra. These aren't just for exams; they are used to program the precision and stability of robotic arms.",
          "Curiosity for Machines: Take apart old toys or broken electronics (safely!) to understand how gears, circuits, and power supplies work together.",
          "Interdisciplinary Projects: Participate in science fairs or robotics clubs. Learning to collaborate with someone who codes while you build the frame mimics the real-world engineering workflow."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in Mechatronics.",
        color: BLUE2,
        content: [
          "Dr. Kota Harinarayana: The 'Father of the LCA Tejas,' he led the development of India's premier indigenous fighter jet, integrating complex fly-by-wire mechatronic systems with aeronautics.",
          "Dr. Vijay P. Bhatkar: A pioneer of India's supercomputing mission (PARAM), his work in embedded systems and computer architecture paved the way for advanced industrial control technologies.",
          "Samay Kohli: Co-founder of GreyOrange, a global robotics firm born in India. He revolutionized 'Warehouse Automation' by designing autonomous mobile robots for massive logistics hubs.",
          "Sonam Wangchuk: A visionary engineer and innovator known for the 'Ice Stupa' and solar-heated buildings. His work often blends mechanical design with environmental sensors to solve real-world ecological problems.",
          "Sujoy Guha: An inventor at the intersection of medicine and engineering, he developed the RISUG (contraceptive) and advanced biomedical devices using precision mechatronic principles.",
          "A.S. Kiran Kumar: Former Chairman of ISRO, he played a vital role in the design of the Mangalyaan (Mars Orbiter), which required flawless integration of robotic payloads and celestial navigation sensors."
        ]
      }
    ]
  }
};

