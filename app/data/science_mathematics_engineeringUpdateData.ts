import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const science_mathematics_engineeringUpdateData: Record<string, CareerPageData> = {
  engineering_and_technology: {
    slug: "engineering_and_technology",
    badge: "Build the Future for Class 10+",
    heading: "Engineering & Technology",
    subheading: "Design, build, and innovate.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Engineering & Technology.", borderColor: "#10B981" },
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
        description: "Building solutions that shape the future.",
        color: BLUE,
        content: [
          "Engineering & Technology Definition: The application of scientific and mathematical principles to design, build, and improve structures, machines, systems, and software that solve real-world problems.",
          "The Scope: From designing earthquake-resistant buildings to creating AI algorithms that diagnose diseases, from building electric vehicles to developing cybersecurity systems that protect nations.",
          "Your Role: You are a problem-solver, innovator, and builder. You take ideas and turn them into reality using technology, creativity, and engineering principles.",
          "Why It Matters in India: India is transitioning from a service-based economy to a technology and manufacturing powerhouse. We need engineers to build Smart Cities, develop AI solutions, create EV infrastructure, and lead the digital revolution.",
          "Career Diversity: Unlike many fields, engineering offers multiple specializations—Software, Civil, Electrical, Mechanical, Aerospace, Biomedical, Chemical, and emerging fields like AI/ML, Cybersecurity, and Robotics."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Priya, Senior Software Engineer at a FinTech Startup",
        icon: "Clock",
        description: "Real workflow of a tech professional.",
        color: BLUE2,
        content: [
          "08:00 AM – Morning Standup: Arrive at the office in Bengaluru. Start with a 15-minute standup meeting with the team. Discuss the sprint progress on a new payment gateway feature.",
          "09:00 AM – Code Review: Review pull requests from junior developers. Ensure code quality, security, and adherence to best practices. Suggest improvements and approve changes.",
          "10:30 AM – Architecture Discussion: Meet with the tech lead to discuss the system architecture for a new microservice. Debate between using Kubernetes or serverless architecture.",
          "12:00 PM – Coding Sprint: Deep focus time. Write code for the authentication module. Use Python and FastAPI. Test locally and push to the staging environment.",
          "01:00 PM – Lunch & Networking: Lunch with a colleague from the DevOps team. Discuss the new CI/CD pipeline they're implementing.",
          "02:30 PM – Bug Fixing: A critical bug is reported in production. Investigate logs, identify the root cause (a race condition in the database query), and deploy a fix.",
          "04:00 PM – Learning Time: Spend 30 minutes learning about a new technology—today it's exploring GraphQL as an alternative to REST APIs.",
          "05:00 PM – Documentation: Update the technical documentation for the module you built. Write clear comments in the code for future developers.",
          "06:00 PM – Wrap-up: Prepare for tomorrow's tasks. Update the project management tool with progress. Head home, often thinking about optimization opportunities."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Engineer's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Problem-Solver: Do you enjoy breaking down complex problems into manageable parts?",
          "Curious Mind: Do you want to understand how things work?",
          "Logical Thinker: Can you think in algorithms and systems?",
          "Persistent: Can you debug for hours without giving up?",
          "Collaborative: Can you work in teams and communicate technical ideas clearly?",
          "Adaptable: Can you learn new technologies quickly?",
          "The Self-Check: Do you love building things? Do you enjoy both theory and hands-on work? If yes, you have the Engineer's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "Core duties of an engineer.",
        color: BLUE2,
        content: [
          "Design: Creating blueprints or system architectures for projects.",
          "Development: Writing code or building physical structures.",
          "Testing: Ensuring quality and identifying bugs or flaws.",
          "Optimization: Making systems faster, cheaper, or more efficient.",
          "Documentation: Recording processes and decisions for future reference.",
          "Collaboration: Working with teams, clients, and stakeholders.",
          "Continuous Learning: Staying updated with new technologies and best practices."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: B.Tech/B.E. Core Route",
          "Step 1: Complete Class 12th with Physics, Chemistry, Mathematics.",
          "Step 2: Clear JEE Main/Advanced or State CET exam.",
          "Step 3: Pursue B.Tech/B.E. in chosen engineering branch.",
          "Step 4: Complete industrial internships and live projects.",
          "Step 5: Pursue M.Tech or MBA for specialization or management.",
          "Step 6: Work as Engineer, Project Manager, or Technical Lead.",
          "",
          "Pathway B: Diploma & Lateral Entry Route",
          "Step 1: Complete Class 10th with Science and Mathematics.",
          "Step 2: Pursue 3-year Polytechnic Diploma in Engineering.",
          "Step 3: Take lateral entry into B.Tech second year.",
          "Step 4: Gain hands-on skills through workshop and internships.",
          "Step 5: Clear GATE for higher studies or PSU jobs.",
          "Step 6: Work as Technical Officer, Site Engineer, or PSU Engineer.",
          "",
          "Pathway C: Skill-Based & Certification Route",
          "Step 1: Complete Class 12th with Science or ITI course.",
          "Step 2: Pursue diploma or certificate in specific technology field.",
          "Step 3: Learn tools like AutoCAD, SolidWorks, or programming.",
          "Step 4: Complete industry certifications from NSDC or Sector Councils.",
          "Step 5: Build portfolio through freelance or startup projects.",
          "Step 6: Work as Technician, CAD Designer, or Technical Consultant."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and opportunities.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Tech Leadership (15+ yrs): ₹75 LPA –  ₹3.2 Crore",
          "Senior / Lead Role (10+ yrs): ₹35 –  ₹70 LPA",
          "Mid-Level Professional (5–8 yrs): ₹15 –  ₹32 LPA",
          "Junior / Associate (3–5 yrs): ₹8 –  ₹14 LPA",
          "Entry Level (0–2 yrs): ₹4.5 –  ₹8.5 LPA",
          "Note: AI/ML, Cybersecurity, and Cloud specializations boost pay by 45%.",
          "",
          "Where Are the Jobs?",
          "Top Cities: Bengaluru, Hyderabad, Pune, Chennai, Noida, Gurgaon.",
          "Emerging Hubs: Ahmedabad (GIFT City), Visakhapatnam, Coimbatore, Kochi.",
          "Top Industries: IT/SaaS, Global Capability Centres (GCCs), Fintech, EV/Automotive, HealthTech.",
          "Global Demand: High in USA, Germany, UAE, UK. Remote R&D is growing."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: Indian Institute of Technology (IIT) Bombay, Indian Institute of Technology (IIT) Delhi, Indian Institute of Technology (IIT) Madras, Indian Institute of Technology (IIT) Kharagpur, National Institute of Technology (NIT) Trichy, Indian Institute of Science (IISc) Bengaluru",
          "Private: BITS Pilani, VIT Vellore, Manipal Institute of Technology, SRM Institute of Science and Technology Chennai",
          "Online: IGNOU Engineering Programs, Swayam/NPTEL Technology Modules, Coursera Engineering Certifications, edX Technology Courses"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in engineering.",
        color: BLUE2,
        content: [
          "Conventional: Software Developer, Civil Engineer, Electrical Engineer, Mechanical Engineer, Project Manager",
          "New-Age and AI Driven: AI/Machine Learning Engineer, Cybersecurity Engineer, Semiconductor/Chip Design Engineer, Robotics/Automation Engineer",
          "Remote / Entrepreneurship: Full-Stack Developer, Freelancer, Tech Consultant, SaaS Product Founder, EdTech/STEM Content Creator"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The real side of engineering careers.",
        color: BLUE,
        content: [
          "Continuous Learning: Technology evolves rapidly; you must keep updating your skills.",
          "High Pressure: Deadlines, bugs, and system failures can create stress.",
          "Work-Life Balance: Crunch periods may require long hours.",
          "Imposter Syndrome: The field is vast; you may feel like you don't know enough.",
          "Burnout Risk: Intense focus and problem-solving can be mentally exhausting."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends (2025–2035)",
        icon: "Sparkles",
        description: "What's next in engineering.",
        color: BLUE2,
        content: [
          "AI Integration: Every engineering field will integrate AI for optimization and automation.",
          "Quantum Computing: Next frontier in computing power and problem-solving.",
          "Sustainable Engineering: Green energy, circular economy, and eco-friendly solutions.",
          "Edge Computing: Processing data closer to the source for faster, more efficient systems.",
          "Autonomous Systems: Self-driving vehicles, drones, and robots becoming mainstream."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Learn Programming: Start with Python or C++. Use free resources like Codecademy or Khan Academy.",
          "Build Projects: Create simple projects—a calculator app, a weather bot, or a basic website.",
          "Participate in Competitions: Join robotics clubs, coding competitions, or science fairs.",
          "Understand Fundamentals: Master Physics and Mathematics. These are the foundation of all engineering.",
          "Explore Tools: Learn CAD software like Fusion 360 (free for students) or Tinkercad.",
          "Read Tech News: Follow tech blogs and YouTube channels to stay updated on innovations."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Engineers & Technologists",
        icon: "User",
        description: "Inspiring figures in Indian engineering",
        color: BLUE2,
        content: [
          "Visvesvaraya (1861–1962): Known as the 'Father of Indian Engineering.' Pioneered hydroelectric power and irrigation systems in India. His contributions shaped modern Indian infrastructure.",
          "Sundar Pichai: CEO of Google and Alphabet. Started as an engineer and rose to lead one of the world's largest tech companies. Proof that Indian engineers can reach the highest global positions.",
          "Satya Nadella: CEO of Microsoft. Transformed the company through cloud computing and AI innovation. Demonstrates Indian leadership in global tech.",
          "Nandan Nilekani: Co-founder of Infosys and architect of India's digital identity system (Aadhaar). Revolutionized how India approaches digital infrastructure.",
          "Anand Mahindra: Chairman of Mahindra Group. Pioneered electric vehicles and sustainable engineering solutions in India.",
          "Kailash Sivaramakrishnan: CTO of Infosys. Leading digital transformation and AI adoption across enterprises globally.",
          "Rajesh Masrani: Founder of Masrani Group. Built a global engineering and technology conglomerate from India.",
          "Ravi Shankar Prasad: Tech entrepreneur and innovator. Contributed significantly to India's IT revolution and digital economy."
        ]
      }
    ]
  },

  mathematician: {
    slug: "mathematician",
    badge: "The Pattern Finder for Class 10+",
    heading: "Mathematician",
    subheading: "Unlocking the hidden patterns in nature, finance, and technology—from predicting stock markets to designing AI algorithms.",
    whyCards: [
      { icon: "Brain", title: "20% Annual Growth in Quant Roles", description: "Demand for quantitative professionals in Fintech and AI companies is exploding at 20% year-on-year.", borderColor: "#10B981" },
      { icon: "Zap", title: "AI & Quantum Computing Era", description: "Mathematicians are the architects of AI ethics and quantum computing—the next frontier of technology.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Demand", description: "Indian mathematicians are highly sought after on Wall Street, tech hubs in Europe, and ISRO/DRDO.", borderColor: "#3B82F6" },
      { icon: "Fingerprint", title: "India's Math Legacy", description: "From Aryabhata to Ramanujan to Manjul Bhargava (Fields Medal winner)—India's mathematical tradition is world-class.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3 Years (B.Sc) + 2 Years (M.Sc) + 4-5 Years (PhD, optional)", color: "bg-green-100 text-green-700" },
      { label: "Tools", detail: "Mathematica, MATLAB, Python, R, Aspen HYSYS", color: "bg-blue-100 text-blue-700" },
      { label: "Salary Range", detail: "₹4L–₹1.5Cr+ (Entry to Leadership)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "20%", label: "Annual Growth in Quant Roles", gradient: "from-green-500 to-green-600" },
      { value: "8-12 yrs", label: "Entry to Senior Level", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The architects of patterns, formulas, and predictions.",
        color: BLUE,
        content: [
          "Pure Mathematics: Discovering new theorems and mathematical truths that have no immediate application but shape the future.",
          "Applied Mathematics: Using math to solve real-world problems in physics, engineering, and business.",
          "Data Science & Statistics: Turning raw data into insights that drive business decisions.",
          "Cryptography & Security: Using prime numbers and complex algorithms to keep digital transactions safe.",
          "The Mathematician's Role: You don't just 'do sums.' You look for patterns. You are the architect of the formulas that predict weather, encrypt WhatsApp messages, and help companies decide where to invest money.",
          "Why It Matters in India: From the Unified Payments Interface (UPI) to AI algorithms behind YouTube and Instagram, everything is built on math. India needs mathematicians to lead in data science, space exploration at ISRO, and global finance."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Dr. Aryan, Research Mathematician at ISI",
        icon: "Clock",
        description: "Real workflow at the Indian Statistical Institute.",
        color: BLUE2,
        content: [
          "09:30 AM – The Whiteboard Session: Day starts at the Indian Statistical Institute (ISI) in Kolkata. Office is filled with whiteboards and scrap paper. Current project involves 'Graph Theory'—studying how different points in a network are connected. This helps telecom companies optimize 5G towers.",
          "11:00 AM – Deep Focus: Spend two hours trying to prove a theorem that has been bothering for weeks. It's like a puzzle where most pieces look the same. Use Mathematica to run simulations, but most work happens in the head.",
          "01:30 PM – Faculty Lunch: Sit with a colleague who works in 'Cryptography.' Discuss how prime numbers are the secret to keeping bank transactions safe. It sounds like a spy movie, but for mathematicians, it's just Tuesday.",
          "03:00 PM – Teaching Masters Students: Discuss 'Stochastic Processes'—how to predict random events. One student asks how this applies to the Indian Stock Market. Spend the next hour sketching out how math can model the 'random' movements of stock prices.",
          "05:00 PM – International Collaboration: Zoom call with a research team in Germany. Co-writing a paper. In math, you don't need a lab; you just need a shared digital document. Argue over a single equation for thirty minutes. A single misplaced 'x' or '+' can change everything.",
          "08:00 PM – Relaxing at Home: Reading a non-math book, but find yourself calculating the probability of the plot twist. Once you see the world through numbers, you can never really switch it off!"
        ]
      },
      {
        id: "who",
        title: "Is This You? The Mathematician's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Abstract Thinking: Can you visualize things that don't exist in the physical world, like four-dimensional shapes?",
          "Extreme Patience: Some math problems take months—or even years—to solve. You can't be in a rush.",
          "Logic & Deductive Reasoning: You enjoy finding 'if-then' connections in everything.",
          "Coding Skills (Python/R): Modern math is done on computers. You need to tell the machine what to calculate.",
          "Curiosity: You aren't satisfied with knowing a formula works; you want to know why it works.",
          "The Self-Check: Do you spend hours on a single problem? Do you see patterns everywhere? If yes, you have the Mathematician's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "From problem to proof.",
        color: BLUE2,
        content: [
          "Identifying the Pattern: Seeing a problem in the real world (e.g., 'How do we reduce traffic in Bengaluru?').",
          "Modeling: Turning that real-world problem into an equation.",
          "Analysis: Using existing math rules to manipulate the equation.",
          "Verification: Testing the answer with computer data to see if it predicts reality.",
          "Documentation: Writing a 'Proof'—the ultimate stamp of truth in math.",
          "Publication: Sharing findings with the global mathematical community through peer-reviewed journals."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: Academic & Research Route",
          "Step 1: Complete Class 12th with Mathematics as main subject.",
          "Step 2: Pursue B.Sc. (Hons.) in Mathematics.",
          "Step 3: Complete M.Sc. in Mathematics or Applied Mathematics.",
          "Step 4: Clear CSIR-NET/JRF or NBHM exam for fellowship.",
          "Step 5: Pursue Ph.D. from ISI, CMI, IITs, or IISc.",
          "Step 6: Join as Professor or Research Mathematician at institutes.",
          "",
          "Pathway B: Applied Mathematics & Industry Route",
          "Step 1: Complete Class 12th with PCM subjects.",
          "Step 2: Pursue B.Sc./B.Tech in Mathematics or Statistics.",
          "Step 3: Learn Python, R, MATLAB, and data modelling tools.",
          "Step 4: Complete internship in analytics or finance sector.",
          "Step 5: Pursue M.Sc./MBA in Quantitative Finance or Analytics.",
          "Step 6: Work as Data Scientist, Quantitative Analyst, or Actuary.",
          "",
          "Pathway C: Teaching & Competitive Exam Coaching Route",
          "Step 1: Complete Class 12th with Mathematics subject.",
          "Step 2: Pursue B.Sc. in Mathematics from recognized university.",
          "Step 3: Complete B.Ed. or NET qualification for teaching.",
          "Step 4: Gain experience teaching at school or coaching level.",
          "Step 5: Clear TGT/PGT or UGC-NET for college-level teaching.",
          "Step 6: Work as School Teacher, Lecturer, or Coaching Faculty."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹60 LPA –  ₹2.5 Crore",
          "Senior / Lead Role (10+ yrs): ₹30 –  ₹60 LPA",
          "Mid-Level Professional (5–8 yrs): ₹15 –  ₹28 LPA",
          "Junior / Associate (3–5 yrs): ₹8 –  ₹14 LPA",
          "Entry Level (0–2 yrs): ₹4.5 –  ₹9 LPA",
          "Note: A PhD, CSIR-NET, or expertise in AI/Quant Finance boosts pay by 40%. The 8th Pay Commission implementation in 2026 also significantly raises base pay for government research and academic roles.",
          "",
          "Where Are the Jobs?",
          "Top Cities: Bengaluru, Mumbai, Hyderabad, Delhi-NCR, Pune.",
          "Top Industries: BFSI (Quantitative Finance), Tech/AI, Research Organizations (ISRO, TIFR), Academia, Cryptography.",
          "Global Demand: High in USA, UK, Germany, UAE. Remote 'Math-as-a-Service' and AI research roles are surging."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions for mathematics in India.",
        color: BLUE,
        content: [
          "Government: IIT Bombay, Chennai Mathematical Institute, Indian Statistical Institute Kolkata, University of Delhi, Manipal Academy of Higher Education",
          "Private: Ashoka University Sonipat, BITS Pilani, Shiv Nadar University Greater Noida",
          "Online: edX Advanced Math Courses, Swayam/NPTEL Math Modules, IGNOU Mathematics Programs, Coursera Mathematics Certifications"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in mathematics.",
        color: BLUE2,
        content: [
          "Conventional: Mathematician/Researcher, Lecturer/Professor, Statistician, Actuarial Analyst",
          "New-Age and AI Driven: Data Scientist, Machine Learning Engineer, Quantitative Analyst, Cryptography/Security Analyst",
          "Remote / Entrepreneurship: Online Mathematics Educator, Mathematics Content Creator, Freelance Quant Consultant, EdTech/Test-Prep Founder"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The real side of mathematics careers.",
        color: BLUE,
        content: [
          "Mental Fatigue: Solving abstract problems can be exhausting and mentally draining.",
          "Isolation: Deep research often means spending a lot of time alone with your thoughts.",
          "Niche Market: Pure math roles are fewer than 'Applied Math' roles like Data Science.",
          "Pressure: High expectations to publish papers and contribute to the field.",
          "Funding Challenges: Research funding can be competitive and limited.",
          "Transition Difficulty: Moving from academia to industry requires learning new skills."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "The future of mathematics.",
        color: BLUE2,
        content: [
          "AI Ethics: AI doesn't replace mathematicians; it gives them bigger tools. Mathematicians will be needed to ensure AI Ethics—making sure algorithms aren't biased.",
          "Quantum Computing: The next big frontier, which requires a type of math most people haven't even heard of yet!",
          "Climate Modeling: Mathematical models will be crucial for understanding and predicting climate change.",
          "Blockchain & Cryptography: As digital currencies grow, cryptographers will be in high demand.",
          "Space Exploration: ISRO's ambitious plans will need mathematicians for trajectory calculations and data analysis.",
          "Personalized Medicine: Mathematical models will help predict disease progression and personalize treatments."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While in School (Class 9–12)",
        icon: "Rocket",
        description: "Preparation during Class 9-12.",
        color: BLUE,
        content: [
          "Olympiads: Don't just do school math. Try the PRMO/RMO papers. These build problem-solving skills.",
          "Learn Python: It is the 'calculator' of the 21st century. Start with basic coding.",
          "Read Popular Math: Books like 'The Man Who Knew Infinity' or 'Fermat's Last Theorem' inspire and educate.",
          "Chess: It builds the logical 'branching' mind needed for math.",
          "Online Courses: Explore platforms like Khan Academy, Coursera, or MIT OpenCourseWare.",
          "Math Clubs: Join school math clubs or participate in math competitions."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "Star",
        description: "Inspiring mathematicians from India.",
        color: BLUE2,
        content: [
          "Srinivasa Ramanujan: The man who 'knew infinity' and wrote 3,900 results without formal training. His legacy inspires mathematicians worldwide.",
          "C.R. Rao: A titan of statistics whose work is used in every scientific study today. Pioneer of statistical theory.",
          "Manjul Bhargava: The first person of Indian origin to win the Fields Medal (the 'Nobel Prize of Math'). Proved the Bhargava Cube theorem.",
          "Neena Gupta: A young star who solved a 70-year-old problem called the Zariski Cancellation Conjecture. Recipient of the TWAS Prize.",
          "Shakuntala Devi: The 'Human Computer' who showed the world the speed of the Indian mathematical mind. Could calculate complex problems mentally."
        ]
      }
    ]
  }

};


