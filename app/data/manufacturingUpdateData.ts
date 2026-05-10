import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const manufacturingUpdateData: Record<string, CareerPageData> = {
  industrial_design: {
    slug: "industrial_design",
    badge: "The Architect of Everyday Life for Class 10+",
    heading: "Industrial Design",
    subheading: "Blend art, engineering, and business. Design products that are beautiful, functional, and easy to use. Shape the physical world around us.",
    whyCards: [
      { icon: "Zap", title: "Made in India → Designed in India", description: "India is moving from manufacturing to innovation. Companies like Boat, Titan, and Godrej need local designers.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "10-12% Annual Growth", description: "The Indian design industry is booming. PLI schemes and consumer electronics demand are creating huge opportunities.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Demand", description: "Indian designers are now leading teams at global companies. Work on products used by millions worldwide.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Creative + Technical", description: "Combine artistic creativity with engineering knowledge. Solve real human problems through design.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years B.Des / 2 Years M.Des", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Path", detail: "NID DAT, UCEED, SEED Exams", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹5L–₹1.5Cr+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "10-12%", label: "Industry Growth Annually", gradient: "from-blue-500 to-blue-600" },
      { value: "₹1.5Cr+", label: "Leadership Salary Potential", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of product design.",
        color: BLUE,
        content: [
          "Industrial Design blends Art, Engineering, and Business. Designers decide how a product looks (Aesthetics), how it works (Functionality), and how easy it is to use (Ergonomics).",
          "While an engineer makes sure the toaster heats up and a marketer sells it, the Industrial Designer ensures it looks beautiful and doesn't burn your fingers.",
          "An Industrial Designer is part artist, part engineer, and part psychologist. They solve real human problems using mass-produced solutions.",
          "From designing eco-friendly bamboo furniture to creating futuristic electric scooters, Industrial Designers shape the physical world around us.",
          "In today's India, we are moving from 'Made in India' to 'Designed in India.' Companies like Titan, Godrej, and Boat don't just want to assemble products; they want to invent them."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Riya, Industrial Designer",
        icon: "Clock",
        description: "Real workflow of an industrial designer.",
        color: BLUE2,
        content: [
          "09:30 AM –   Studio Arrival: Riya walks into her studio. It's a creative mess—sketches on walls, 3D printed models on desks, material samples everywhere. Today's brief: design a 'Smart Wearable' for seniors that monitors heart rate but looks like jewelry.",
          "10:30 AM –   Sketching Phase: Riya puts on headphones and starts drawing. She doesn't draw one idea; she draws 50. Some sleek, some chunky, some like bracelets. She focuses on 'form factor'—easy for shaky hands to wear.",
          "12:30 PM –   Prototype Lab: She takes her best sketch to the 3D printing room. While it prints, she meets the engineering team. 'Riya, this curve is too tight; the battery won't fit,' the engineer says. Back to drawing board.",
          "02:00 PM –   Lunch & Collaboration: She eats with UX designers. They discuss how the digital screen will interact with the physical button she designed.",
          "03:30 PM –   User Testing: Elderly users test a foam model. Riya watches silently. One user struggles to find the 'Panic Button' because it's too small. She notes: 'Make button red and tactile.'",
          "05:00 PM –   Rendering: Back at desk, she uses KeyShot to create photorealistic images. She adds textures—gold finish, matte black silicon. It looks so real you could touch it.",
          "07:00 PM –   Reflection: On her way home, she sees someone wearing headphones she designed two years ago. That thrill—seeing a stranger use your creation—never gets old."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "The Tinkerer: Do you look at a product and think, 'I could make this better'? Maybe a bag zipper that always gets stuck annoys you?",
          "The Empath: Can you put yourself in someone else's shoes? If designing a toy for a toddler, can you think like a 3-year-old?",
          "The Visualizer: Can you imagine 3D objects in your head? Can you see how a flat piece of plastic becomes a curved phone?",
          "The Storyteller: A product tells a story. Why is this chair expensive? Because it looks and feels premium. You create that feeling.",
          "Hard Skills: Sketching (rapid visualization), 3D CAD Modeling (SolidWorks, Rhino, Fusion360), Rendering (KeyShot), Manufacturing Processes knowledge.",
          "Soft Skills: Critical Thinking, Communication (selling your design to bosses), Observation, Problem-Solving."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The complete design process.",
        color: BLUE2,
        content: [
          "Discover: Research user needs. Example: 'Students need a backpack that charges phones.'",
          "Define: Create a specific design brief with constraints and goals.",
          "Develop: Ideation phase. Sketch hundreds of concepts. Explore different directions.",
          "Deliver: Prototyping, testing with real users, and finalizing for mass production.",
          "Collaborate: Work with engineers on feasibility, marketers on positioning, and manufacturers on cost.",
          "Iterate: Constantly refine based on feedback. Design is never 'done'—it evolves."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: After Class 12th (Design Entrance Route)","Step 1: Complete Class 12th with Physics and Mathematics.","Step 2: Clear UCEED/NID/CEED entrance exam after preparation.","Step 3: Pursue B.Des in Industrial Design (4 years).","Step 4: Learn CAD, SolidWorks, Rhino, and prototyping skills.","Step 5: Complete internship at product design or manufacturing firm.","Step 6: Join as Junior Industrial Designer or Product Designer.","Pathway B: Engineering + Design Route","Step 1: Complete Class 12th with PCM stream subjects.","Step 2: Pursue B.Tech in Mechanical or Design Engineering.","Step 3: Develop skills in 3D modelling and sketching.","Step 4: Pursue M.Des in Industrial/Product Design specialisation.","Step 5: Build portfolio with real product design projects.","Step 6: Join as Industrial Designer in manufacturing companies.","Pathway C: Diploma and Skill-Based Entry Route","Step 1: Complete Class 10th or 12th any stream.","Step 2: Join Diploma in Industrial/Product Design course.","Step 3: Learn tools like AutoCAD, Fusion 360, KeyShot.","Step 4: Work as apprentice in design studio or workshop.","Step 5: Build strong portfolio showcasing original design concepts.","Step 6: Get hired as Design Associate or freelance designer."]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹80 LPA –  ₹2.2 Crore","Senior / Lead Role (10+ yrs): ₹30 –  ₹65 LPA","Mid-Level Professional (5–8 yrs): ₹15 –  ₹28 LPA","Junior / Associate (3–5 yrs): ₹7 –  ₹13 LPA","Entry Level (0–2 yrs): ₹4 –  ₹8 LPA","Note: Metros and M.Des degrees boost pay by 35%.","Where Are the Jobs?","Top Cities: Pune, Bengaluru, Mumbai, Delhi-NCR, Ahmedabad.","Top Industries: Automotive, Consumer Electronics, Medical Devices, Furniture.","Global Demand: High in USA, Germany, Japan. AI-design growing."]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and education costs.",
        color: BLUE2,
        content: [
          "Government (NID/IITs): ₹10L–₹12L total for 4 years. Highly competitive. Best ROI.",
          "Top Private (MIT-Pune/UPES): ₹18L–₹24L total. Expensive due to studio costs and software licenses.",
          "State Government Colleges: ₹4L–₹6L total. Fewer options, but affordable.",
          "Tools & Equipment: ₹2L additional. High-end Laptop, iPad/Tablet, Professional Markers.",
          "Additional Costs: Software subscriptions (SolidWorks, Adobe Creative Suite), internship travel, portfolio development."
        ]
      },
      {
        id: "institutions",
        title: "Top Institutions",
        icon: "Building2",
        description: "Where to pursue industrial design education.",
        color: BLUE,
        content: [
          "Government Institutes: IIT Bombay (IDC School of Design); NID Ahmedabad (National Institute of Design); IIT Delhi (Department of Design); CEPT University Ahmedabad",
          "Private Institutes: Srishti Manipal Institute Bangalore; DSK International Campus Pune; MIT Institute of Design Pune; Lovely Professional University Punjab",
          "Online Institutes: Coursera (IIT Bombay Design Courses); Udemy (Industrial Design Programs); Domestika (Product Design Courses); Skillshare (Industrial Design Classes)"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Ford Foundation & Ratan Tata Scholarships: Often support design students for projects.",
          "Lombard Odier & CII Foundation: Occasionally offer grants for sustainable design projects.",
          "Institute Merit Scholarships: MIT-ID and UPES offer tuition waivers (25-50%) for top rankers in entrance exams.",
          "NID Means-cum-Merit: Financial aid for students with family income below certain slab.",
          "Government Schemes: Various state scholarships for design education available through NSP (National Scholarship Portal)."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional organizations.",
        color: BLUE,
        content: [
          "No License Required: Your Portfolio is your only license. If your portfolio is good, no one asks for a certificate.",
          "Certifications: SolidWorks/Fusion 360 Certified Associate exams help prove CAD skills.; Google UX Design Certificate - Helpful for understanding digital side of products.; Adobe Certified Associate - Useful for rendering and visualization skills.",
          "Professional Bodies: ADI (Association of Designers of India) - Great network for mentors and internships.; WDO (World Design Organization) - Global body for design professionals.; IIID (Indian Institute of Interior Designers) - For specialized interior/product design roles."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in industrial design.",
        color: BLUE2,
        content: [
          "Conventional: Industrial Designer at automobile companies; Product Designer at consumer electronics firms; Design Engineer at manufacturing companies; Faculty/Researcher at design institutes",
          "New-Age & AI-Driven: UX/UI Industrial Designer at smart device and wearable startups; Sustainable Product Designer at green-tech and circular economy firms; AI-Assisted Generative Designer using parametric design tools; EV and Mobility Designer at electric vehicle startups",
          "Remote/Entrepreneurship: Freelance Industrial Designer on global platforms; Founder of product design studio or D2C consumer brand; Remote CAD/3D Modeling Specialist for international design agencies; Industrial Design Educator and Content Creator"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of industrial design.",
        color: BLUE,
        content: [
          "Subjectivity: Everyone has an opinion on design. A marketing manager might reject your design just because they 'don't like the color.' It can be frustrating.",
          "Manufacturing Constraints: You might design a beautiful shape, but factory might say, 'We can't make this cheap enough.' You constantly compromise beauty for cost.",
          "Expensive Education: Design education in private colleges is costly compared to standard degrees.",
          "Niche Market: Unlike software jobs, there aren't millions of openings. It's a specialized, competitive field.",
          "Perfectionism Pressure: Design is never 'done.' You constantly iterate and refine. This can be mentally exhausting.",
          "Long Development Cycles: A product takes 2-3 years from concept to market. Patience is essential."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in industrial design.",
        color: BLUE2,
        content: [
          "Design for Circularity: Designers will be responsible for what happens after product dies. Can it be recycled? Can it be repaired? 'Right to Repair' will drive design.",
          "Generative Design (AI): AI tools will generate 100 variations of a chair in seconds. Designer's job will be to choose and refine best one, not draw all of them.",
          "Phygital Products: Blending physical products with digital experiences (e.g., skipping rope that counts jumps on app).",
          "Personalization at Scale: 3D printing will enable mass customization. Design will be about creating templates, not one-size-fits-all products.",
          "Sustainable Materials: Designers will focus on biodegradable, renewable, and recycled materials.",
          "Human-Centered Design: Post-pandemic, focus on wellness, ergonomics, and mental health in product design."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Deconstruct: Take apart an old pen or broken remote. See how plastic parts snap together. That is industrial design engineering.",
          "Sketching: Learn 'Perspective Drawing.' Draw a cube, cylinder, and sphere in 3D. Practice daily.",
          "Tinkercad: Use this free online tool to make simple 3D models. Get comfortable with 3D thinking.",
          "Observe Materials: Touch things. Is it plastic? Metal? Wood? Why did designer choose that material?",
          "Photography: Learn to photograph products beautifully. Lighting and angles matter.",
          "Problem-Solving: Identify everyday problems. How would you redesign a water bottle? A backpack? A chair?",
          "Build a Portfolio: Document your sketches, models, and ideas. This is your ticket to design school.",
          "Follow Designers: Follow Satyendra Pakhalé, Dieter Rams, and Indian designers on social media. See what great design looks like."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Industrial Design",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Satyendra Pakhalé: IIT Bombay alumnus and global design icon. His furniture designs are in museums worldwide. Proof that Indian designers can compete globally.",
          "Abhimanyu Kulkarni: Design Director at Philips (Asia). He leads design for products used by millions. Shows corporate leadership path.",
          "Ashwini Deshpande: Co-founder of Elephant Design. One of India's leading design consultancies. Entrepreneur path in design.",
          "Udayan Bose: Founder of NetBramha Studios. Leader in blending design thinking with business impact. Shows innovation path.",
          "Tanvi Agarwal: Young designer making waves in sustainable design and social impact through products.",
          "Roshan Prabhakar: Design leader at Ather Energy. Designing the future of electric scooters in India."
        ]
      }
    ]
  },
  industrial_engineering: {
    slug: "industrial_engineering",
    badge: "The Efficiency Experts for Class 10+",
    heading: "Industrial Engineering",
    subheading: "Optimize processes, reduce waste, and maximize productivity. Design systems that make factories, hospitals, and e-commerce operations run faster and smarter.",
    whyCards: [
      { icon: "Zap", title: "10-12% Annual Growth", description: "PLI Schemes and manufacturing boom are creating massive demand for Industrial Engineers in India.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Bridge Engineering & Business", description: "Unique role that combines technical expertise with business strategy. Lead operations at any company.", borderColor: "#059669" },
      { icon: "Globe", title: "Everywhere Needed", description: "Every industry needs optimization: E-commerce, Healthcare, Manufacturing, Consulting. Your skills are universal.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Fast Career Growth", description: "Move from entry-level to leadership quickly. Operations heads earn ₹80L–₹2.5Cr+. High ceiling.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years B.Tech / 2 Years M.Tech", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Path", detail: "JEE Main, JEE Advanced, BITSAT", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹5L–₹2.5Cr+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "10-12%", label: "Industry Growth Annually", gradient: "from-blue-500 to-blue-600" },
      { value: "₹2.5Cr+", label: "Leadership Salary Potential", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of process optimization.",
        color: BLUE,
        content: [
          "Industrial Engineering (IE) is often called the 'Engineering of Better.' While a Mechanical Engineer designs the car and a Civil Engineer designs the factory building, the Industrial Engineer designs the process to make the car inside that building.",
          "They figure out how to do things faster, cheaper, and safer without sacrificing quality. In today's India, where companies like Flipkart deliver in 10 minutes and factories like Tata Motors churn out hundreds of cars daily, Industrial Engineers are the masterminds behind the speed.",
          "They bridge the gap between Engineering (Technology) and Management (Business). They are the ones who ask: 'How can we produce 10% more with the same number of people?' or 'How can we reduce the waiting time for patients in this hospital?'",
          "Industrial Engineers work everywhere: factories, hospitals, e-commerce warehouses, consulting firms, and even tech companies optimizing data centers.",
          "Your job is to observe, measure, analyze, and improve. You don't invent new products; you make existing systems work better."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Rohan, Industrial Engineer",
        icon: "Clock",
        description: "Real workflow at an e-commerce fulfillment center.",
        color: BLUE2,
        content: [
          "08:30 AM –  Warehouse Floor: Rohan walks onto the warehouse floor during 'Big Billion Days' sale week. The noise of conveyor belts and scanners is deafening. He checks his tablet: Order volume is up 40% today.",
          "09:30 AM –  The Bottleneck: He notices a jam in the packing section. Packages are piling up because label printers are slow. Rohan doesn't fix the printer; he re-organizes the line. He instructs the team to split the flow into two lines—one for small packets, one for big boxes. The jam clears in 20 minutes.",
          "11:00 AM –  Time Study: Rohan stands with a stopwatch observing a worker packing a mobile phone. Reach, Grab, Box, Tape, Label. It takes 45 seconds. He realizes if he moves the tape dispenser 6 inches closer, it saves 2 seconds per box. In a day with 10,000 boxes, he just saved 5.5 hours of labor!",
          "01:00 PM –  Lunch & Strategy: He eats with the Operations Manager. They discuss 'Kaizen' (continuous improvement). Rohan suggests a new layout for the loading dock to reduce truck waiting time.",
          "03:00 PM –  Data Analysis: Back at his desk, he analyzes data on Excel/PowerBI. He spots a trend: 15% of returns are happening because of damaged packaging. He schedules a meeting with the cardboard supplier to upgrade material quality.",
          "05:00 PM –  Safety Walk: He walks the floor to ensure no one is lifting heavy boxes incorrectly. Safety is efficient; accidents stop work.",
          "06:30 PM –  End of Day: Rohan logs off. Today, his small changes helped ship 5,000 extra parcels. He didn't invent the product, but he made sure it reached the customer on time."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "The Optimizer: Do you constantly try to find the 'short cut' or the best way to do homework/chores? Do you notice inefficiencies everywhere?",
          "The Diplomat: You will tell workers to change how they work. Can you do it without making them angry? Can you influence without authority?",
          "The Business-Minded Techie: You like engineering, but you also care about profit, loss, and business strategy. Numbers excite you.",
          "The Observer: You notice details others miss—like a fan left on in an empty room (waste of energy!). You see patterns in chaos.",
          "Hard Skills: Data Analysis (Excel, Python), Statistics, Operations Research, knowledge of manufacturing processes, Six Sigma methodologies.",
          "Soft Skills: Communication (talking to CEOs and factory workers), Leadership, Critical Thinking, Problem-Solving, Negotiation."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The DMAIC cycle and daily operations.",
        color: BLUE2,
        content: [
          "Define: Identify the problem. Example: 'Production is too slow' or 'Patient waiting time is 3 hours.'",
          "Measure: Collect data. How slow is it? Use stopwatches, sensors, and software to quantify the problem.",
          "Analyze: Find the root cause. Is the machine breaking down? Are workers untrained? Is the layout inefficient?",
          "Improve: Fix it. Redesign the process, retrain workers, or reorganize the layout. Test the solution on a small scale first.",
          "Control: Ensure the fix stays permanent. Monitor metrics, create standard operating procedures, and train teams.",
          "Collaborate: Work with operations teams, engineers, and management to implement changes. Your job is to convince people to change."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
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
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹75 LPA –  ₹2.2 Crore",
          "Senior / Lead Role (10+ yrs): ₹30 –  ₹65 LPA",
          "Mid-Level Professional (5–8 yrs): ₹15 –  ₹28 LPA",
          "Junior / Associate (3–5 yrs): ₹8 –  ₹14 LPA",
          "Entry Level (0–2 yrs): ₹4 –  ₹9 LPA",
          "Note: Lean Six Sigma and PMP boost pay by 30%.",
          "Where Are the Jobs?",
          "Top Cities: Pune, Bengaluru, Chennai, Gurgaon, Hyderabad, Ahmedabad.",
          "Top Industries: Automotive, E-commerce, FMCG, Electronics, Defense, Logistics.",
          "Global Demand: High in USA, Germany, UAE. Remote process-optimization rising."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries and cities with highest demand.",
        color: BLUE,
        content: [
          "Top Industries:",
          "Manufacturing: Automotive (Maruti, Tata), Electronics (Samsung, Foxconn), Textiles.",
          "E-Commerce/Logistics: Amazon, Flipkart, Delhivery (optimizing delivery routes and warehouse operations).",
          "Healthcare: Large hospitals (Apollo, Max) hire IEs to reduce patient waiting times and optimize bed usage.",
          "Consulting: Big 4 firms (Deloitte, PwC) hire IEs to advise clients on efficiency improvements.",
          "Top Cities:",
          "Manufacturing Hubs: Pune, Chennai, Gurgaon, Sanand (Gujarat), Surat.",
          "Tech/Logistics Hubs: Bangalore, Hyderabad, Delhi-NCR, Mumbai.",
          "Global Demand: USA, Germany, Singapore. High demand for Indian IEs in multinational companies."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and education costs.",
        color: BLUE2,
        content: [
          "IITs / NITs (Government): ₹8L–₹10L total for 4 years. Top-tier placements and ROI.",
          "BITS Pilani (Private): ₹20L–₹24L total. Excellent industry connections and campus life.",
          "State Government Colleges: ₹3L–₹5L total. Affordable, good ROI for engineering education.",
          "Private Universities: ₹12L–₹18L total. Good infrastructure and placement support.",
          "Additional Costs: Laptop (₹60k–₹1L), Software licenses (MATLAB, Minitab), internship travel, certification exams (Six Sigma: ₹15k–₹25k).",
          "Scholarships: Merit-based scholarships available at most institutions. Government schemes like AICTE Pragati for girls."
        ]
      },
      {
        id: "institutions",
        title: "Top Institutions",
        icon: "Building2",
        description: "Where to pursue industrial engineering education.",
        color: BLUE,
        content: [
          "Government Institutes: IIT Kharagpur; IIT Roorkee; NIT Tiruchirappalli; VNIT Nagpur",
          "Private Institutes: BITS Pilani; SRM Institute of Technology Chennai; Manipal Institute of Technology Manipal; Amity University Noida",
          "Online Institutes: NPTEL (IIT Industrial Engineering Courses); Coursera (Operations & Industrial Engineering); edX (Manufacturing & Systems Engineering); Udemy (Industrial Engineering Programs)"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "AICTE Pragati Scheme: ₹50,000/year for girls pursuing technical education.",
          "Panasonic Ratti Chhatr Scholarship: For students from low-income families joining IITs.",
          "Merit-cum-Means Scholarships: Available at all IITs/NITs. Full tuition waiver for family income below ₹1L/year.",
          "Ratan Tata Scholarship: For engineering students (varies by college).",
          "Institute Merit Scholarships: Top rankers in entrance exams get tuition waivers (25-50%) at private colleges.",
          "State Scholarships: Various state governments offer scholarships for engineering students through NSP (National Scholarship Portal)."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional organizations.",
        color: BLUE,
        content: [
          "Professional Bodies:",
          "IIIE (Indian Institution of Industrial Engineering): Join as a student member for access to journals, networking, and industry events.",
          "APICS (Association for Supply Chain Management): Gold standard for supply chain professionals.",
          "Certifications (The Career Boosters):",
          "Six Sigma Green Belt: Cost ₹15k–₹25k. Proves you know statistical quality control. Highly recommended. Boosts salary by 15-20%.",
          "PMP (Project Management Professional): For mid-level career growth. Cost ₹10k–₹15k.",
          "APICS CPIM/CSCP: Gold standard for Supply Chain roles. Cost ₹20k–₹30k.",
          "Lean Manufacturing Certification: Demonstrates expertise in waste reduction. Cost ₹5k–₹10k."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in industrial engineering.",
        color: BLUE2,
        content: [
          "Conventional: Production/Manufacturing Engineer at companies; Quality Control Engineer at automobile firms; Operations Manager at FMCG companies; Industrial Engineer at public sector undertakings",
          "New-Age & AI-Driven: Supply Chain Analytics Specialist at e-commerce platforms; Smart Factory/Industry 4.0 Engineer at automation-driven manufacturers; Robotics and Process Automation Engineer at EV and electronics startups; Digital Twin Specialist at advanced manufacturing and simulation firms",
          "Remote/Entrepreneurship: Freelance Lean/Six Sigma Consultant for international manufacturers; Founder of manufacturing optimization or process consulting startup; Remote Supply Chain and Operations Analyst for global companies; Industrial Engineering Educator and Content Creator"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of industrial engineering.",
        color: BLUE,
        content: [
          "The 'Generalist' Tag: Sometimes, mechanical engineers are hired for IE roles. You must prove your specialized value through statistics and data analysis skills.",
          "Factory Environment: Entry-level jobs are often on the factory floor—hot, noisy, and dusty. It's not an AC office job initially. You need to be comfortable with manual work.",
          "Resistance to Change: Your job is to change how people work. People hate change. You will face resistance from workers and unions. Diplomacy is essential.",
          "Data Overload: You live in spreadsheets and dashboards. If you hate numbers and analysis, this isn't for you.",
          "Pressure for Results: Your improvements directly impact company profits. There's constant pressure to deliver measurable results.",
          "Travel: You may need to visit multiple plants or warehouses. Travel can be frequent, especially in manufacturing roles."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in industrial engineering.",
        color: BLUE2,
        content: [
          "Industry 4.0: Factories are becoming 'Smart.' Machines talk to each other (IoT). IEs will design systems where robots and humans work together (Cobots). Your role shifts from manual optimization to system design.",
          "Green Manufacturing: IEs will be responsible for 'Carbon Footprint Reduction'—designing processes that use less electricity and produce less waste. Sustainability is now a core IE responsibility.",
          "Digital Twins: Creating a virtual 3D replica of a factory to test changes before applying them in real life. Simulation will replace trial-and-error.",
          "AI & Predictive Analytics: Machine learning will predict equipment failures before they happen. IEs will work with data scientists to build these systems.",
          "Gig Economy Optimization: As gig work grows, IEs will optimize how freelancers and contractors are deployed. New frontier for IE.",
          "Healthcare Operations: Post-pandemic, hospitals are hiring IEs to optimize patient flow and reduce waiting times. Huge growth area."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Learn Excel: This is the tool of the trade. Learn formulas like VLOOKUP, Pivot Tables, and Data Visualization. Spend 20 hours mastering it.",
          "Optimize Your Life: Create a study schedule that maximizes free time. That's Industrial Engineering applied to your own life.",
          "Visit a Factory: If your school takes you on an industrial visit, don't just look at the machines. Look at the people and the flow of materials. Ask: 'Where is the bottleneck?'",
          "Statistics: Pay attention in Math class. Probability and Statistics are the foundation of this career. Understand Normal Distribution and Standard Deviation.",
          "Learn Python: Start with basic Python for data analysis. Libraries like Pandas and Matplotlib are IE tools.",
          "Observe Processes: In your daily life, observe queues, workflows, and systems. How would you improve them?",
          "Read Case Studies: Follow companies like Amazon and Flipkart. How do they optimize their operations? Read business case studies."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Industrial Engineering",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "N. Chandrasekaran: Chairman of Tata Sons. His background in optimizing processes at TCS laid the foundation for his leadership. Proof that IE skills lead to the top.",
          "Venu Srinivasan: Chairman of TVS Motor Company. He is famous for bringing 'Total Quality Management' (an IE concept) to India, winning the global Deming Prize.",
          "Kris Gopalakrishnan: Co-founder of Infosys. His expertise in process optimization helped scale Infosys from a startup to a global IT giant.",
          "Rajesh Masrani: Former COO of Flipkart. He optimized Flipkart's supply chain to deliver in 10 minutes. IE at its finest.",
          "Deepak Parekh: Chairman of HDFC Bank. His operational excellence transformed HDFC into India's most efficient bank.",
          "Anand Mahindra: Chairman of Mahindra Group. Known for operational efficiency and process innovation in manufacturing."
        ]
      }
    ]
  },
  mechanical_engineering: {
    slug: "mechanical_engineering",
    badge: "The Builders of Everything for Class 10+",
    heading: "Mechanical Engineering",
    subheading: "Design, build, and innovate. From electric vehicles to space rockets, mechanical engineers turn ideas into reality. Shape the future of manufacturing and technology.",
    whyCards: [
      { icon: "Zap", title: "Make in India Boom", description: "India's manufacturing sector is projected to reach $1 Trillion by 2025-26. 'China Plus One' strategy is bringing global factories to India.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "EV & Green Tech Revolution", description: "Electric vehicles, renewable energy, and sustainable manufacturing are creating massive demand for mechanical engineers.", borderColor: "#059669" },
      { icon: "Globe", title: "Universal Skill", description: "Every industry needs mechanical engineers: Automotive, Defense, Space, Oil & Gas, Robotics. Your skills are globally valued.", borderColor: "#3B82F6" },
      { icon: "Award", title: "From Design to Leadership", description: "Start as a Design Engineer, grow to Plant Head or VP Engineering. Salary potential: ₹4L–₹1.5Cr+.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "4 Years B.Tech / 3 Years Diploma", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Path", detail: "JEE Main, JEE Advanced, BITSAT", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹4L–₹1.5Cr+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "$1 Trillion", label: "India's Manufacturing Target by 2025-26", gradient: "from-blue-500 to-blue-600" },
      { value: "₹1.5Cr+", label: "Leadership Salary Potential", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of designing and building machines.",
        color: BLUE,
        content: [
          "Mechanical Engineering is often called the 'Mother of All Engineering Branches.' It is the discipline that applies the principles of physics, engineering, and materials science to design, analyze, manufacture, and maintain mechanical systems.",
          "Put simply, if it has moving parts, a mechanical engineer probably built it. The fan spinning above you? Mechanical Engineering. The car parked outside? Mechanical Engineering. The robot assembling your smartphone? Mechanical Engineering.",
          "In today's India, this career is the engine of our growth. From the 'Make in India' initiative transforming us into a global manufacturing hub to the push for Electric Vehicles (EVs) and defense self-reliance (Atmanirbhar Bharat), mechanical engineers are the ones turning blueprints into reality.",
          "They are not just mechanics; they are inventors, designers, and problem-solvers who keep the world moving. They bridge the gap between science and industry, between ideas and products.",
          "Mechanical engineers work everywhere: automotive companies, aerospace firms, power plants, robotics startups, and even tech companies designing hardware."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Karthik, Design Engineer",
        icon: "Clock",
        description: "Real workflow at an EV startup in Pune.",
        color: BLUE2,
        content: [
          "08:30 AM –  R&D Center Arrival: Karthik arrives at the R&D center. The air buzzes with the hum of 3D printers and the smell of coffee. He doesn't wear a suit; jeans and a polo t-shirt are the norm here.",
          "09:00 AM –  The Huddle: The team gathers around a whiteboard. They are designing a new battery cooling system for an electric scooter. The challenge? It needs to be 10% lighter but cool 20% faster. Karthik sketches a rough idea involving a new honeycomb structure.",
          "10:30 AM –  CAD Time: Karthik sits at his dual-monitor workstation. He opens SolidWorks (a 3D design software). For the next two hours, he is in 'the zone,' turning his rough sketch into a precise, 3D digital model. He rotates the model, checks for clashes, and simulates how air will flow through it.",
          "01:00 PM –  Lunch & Collaboration: He sits with the manufacturing team. They joke about a robot arm that kept dropping bolts yesterday. These informal chats are crucial—designers need to know what happens on the factory floor.",
          "02:00 PM –  Prototype Lab: This is the fun part. Karthik puts on safety goggles and heads to the lab. A 3D-printed version of his cooling part is ready. He fits it onto a test scooter. Does it fit? Yes. Does it vibrate too much? He uses a sensor to check. 'Hmm, a bit shaky at high speeds,' he notes. Back to the drawing board.",
          "04:30 PM –  Vendor Call: He calls a supplier in Chennai who makes aluminum parts. They discuss material grades. Karthik needs '6061 Aluminum,' but the supplier suggests '7075' for better strength. They negotiate the cost.",
          "06:00 PM –  Documentation: In engineering, if you didn't document it, you didn't do it. Karthik updates the 'Bill of Materials' (BOM)—a list of every single screw and washer needed for his design.",
          "07:00 PM –  End of Day: He logs off. As he rides his own electric scooter home, he smiles, knowing that the cooling system keeping his battery safe was designed by him."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "The Tinkerer: As a kid, did you break toys just to see what was inside? Do you love Lego or Meccano sets? Do you enjoy taking things apart and reassembling them?",
          "The Visualizer: Can you close your eyes and imagine how a gear turns another gear? Can you visualize 3D objects in your mind? (Spatial Intelligence).",
          "The Practical Problem Solver: If a door squeaks, do you just ignore it, or do you look for the hinge that needs oil? Do you notice inefficiencies and want to fix them?",
          "The Team Player: Huge machines aren't built by one person. You need to work with electrical engineers, coders, and workers. Can you collaborate effectively?",
          "Hard Skills: Strong grasp of Physics (Mechanics & Thermodynamics), Mathematics (Calculus), proficiency in CAD tools (AutoCAD, SolidWorks, CATIA), and materials science.",
          "Soft Skills: Logical reasoning, attention to detail (a 1mm error can cause a disaster), clear communication, and problem-solving ability."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The product lifecycle in mechanical engineering.",
        color: BLUE2,
        content: [
          "Conceptualization: Brainstorming ideas for a new product or machine. What problem does it solve? How will it work?",
          "Design (CAD): Creating detailed 2D and 3D digital models using software like SolidWorks or CATIA.",
          "Analysis (CAE): Using computer simulations (like ANSYS) to test if the design will break under pressure before building it.",
          "Prototyping: Building a real-life model to test. Does it work as expected? What needs to be fixed?",
          "Manufacturing: Setting up the factory line to mass-produce the product. Working with production teams to ensure quality.",
          "Maintenance: Fixing the machines when they break down. Continuous improvement based on field feedback."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: The B.Tech Route (The Gold Standard)",
          "Step 1: Complete Class 12 with Science stream (PCM subjects mandatory).",
          "Step 2: Clear entrance exams: JEE Main/Advanced (for IITs, NITs, IIITs), BITSAT (for BITS Pilani), or State CETs (MHT-CET, WBJEE, KCET).",
          "Step 3: Pursue B.Tech/B.E. in Mechanical Engineering (4 years).",
          "Step 4: Gain internship experience at manufacturing or R&D companies during college.",
          "Step 5: Pursue M.Tech (specialization in Thermal, Design, Robotics) via GATE exam or MBA for management roles.",
          "Step 6: Join as Graduate Engineer Trainee (GET) or Design Engineer at top companies.",
          "Pathway B: The Diploma Route (Early Entry)",
          "Step 1: Complete Class 10 with Science and Math.",
          "Step 2: Clear State Polytechnic entrance exams.",
          "Step 3: Pursue Diploma in Mechanical Engineering (3 years).",
          "Step 4: Join as Junior Engineer or Supervisor in manufacturing companies.",
          "Step 5: Can join 2nd Year B.Tech directly via Lateral Entry (LEET) exams if desired.",
          "Step 6: Continue to B.Tech and pursue higher roles.",
          "Pathway C: The Research/Scientist Route",
          "Step 1: Complete B.Tech in Mechanical Engineering.",
          "Step 2: Clear GATE exam with high score.",
          "Step 3: Pursue M.Tech/PhD at IITs or IISc.",
          "Step 4: Join as Scientist at ISRO, DRDO, or BARC.",
          "Step 5: Work on cutting-edge research in aerospace, defense, or energy.",
          "Step 6: Lead research teams and contribute to national projects."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Market Growth: India's manufacturing sector is projected to reach $1 Trillion by 2025-26. The 'China Plus One' strategy is bringing global factories to India.",
          "Hiring Trends: While 'Core' jobs (Tata Steel, L&T) are stable, massive growth is in Mechatronics, Robotics, and EVs. Pure mechanical roles are evolving into 'Electro-Mechanical' roles.",
          "Salary Snapshot (Annual CTC in INR)",
          "Entry Level (0–2 Years): ₹4L–₹10L. Graduate Engineer Trainee roles in core manufacturing or tech/EV companies.",
          "Mid-Level (3–7 Years): ₹9L–₹20L. Senior Design Engineer or Production Engineer roles.",
          "Senior Level (8–12 Years): ₹20L–₹60L. Plant Head or Chief Engineer roles.",
          "Leadership (15+ Years): ₹60L–₹1.5Cr+. VP Engineering or CTO roles.",
          "Note: Tech/EV/R&D companies pay 30-40% more than traditional core manufacturing."
        ]
      },
      {
        id: "jobs",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Industries and cities with highest demand.",
        color: BLUE,
        content: [
          "Top Industries:",
          "Automotive (EVs): Tata Motors, Mahindra, Maruti Suzuki, Ola Electric, Ather.",
          "Heavy Engineering: Larsen & Toubro (L&T), Thermax, Godrej & Boyce.",
          "Public Sector (PSUs): BHEL, GAIL, ONGC, NTPC, Indian Railways (Huge recruiters via GATE).",
          "Defense & Space: ISRO, DRDO, HAL (Hindustan Aeronautics Ltd).",
          "Oil & Gas: Reliance Industries, Shell, Cairn.",
          "Top Cities:",
          "Pune: The 'Detroit of India' (Auto & Engineering hub).",
          "Chennai: Auto manufacturing hub (Ford, Hyundai, Royal Enfield).",
          "Bangalore: R&D, Aerospace, and Tech-Mechanical startups.",
          "Jamshedpur/Bhilai: Steel and heavy manufacturing.",
          "Remote Work: Low. Most mechanical jobs require you to be on-site (factory or lab). Design roles offer some hybrid flexibility."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and education costs.",
        color: BLUE2,
        content: [
          "IITs / NITs (Government): ₹8L–₹10L total for 4 years. Top-tier education. Fee waivers available for low income.",
          "Top Private (BITS/VIT): ₹16L–₹25L total. Expensive but excellent labs and placements.",
          "State Government Colleges: ₹3L–₹5L total. Very affordable. Quality varies.",
          "Diploma (Polytechnic): ₹50k–₹1.5L total. 3 years course.",
          "Additional Costs: Laptop (₹60k–₹1L), CAD software licenses, internship travel, professional certifications (SolidWorks, ANSYS: ₹10k–₹20k each)."
        ]
      },
      {
        id: "institutions",
        title: "Top Institutions",
        icon: "Building2",
        description: "Where to pursue mechanical engineering education.",
        color: BLUE,
        content: [
          "Government Institutes: IIT Madras & IIT Bombay (Consistently ranked #1 & #2 for Mechanical Engineering); IIT Roorkee (Famous for engineering heritage); NIT Trichy & NIT Warangal (Best among NITs); College of Engineering Pune (COEP) (Legendary state college); Jadavpur University Kolkata (Extremely low fees, high ROI)",
          "Private Institutes: BITS Pilani (All campuses, industry-focused curriculum); Manipal Institute of Technology (MIT) (Great student projects like Formula Manipal); VIT Vellore (Massive placement network); Thapar Institute Patiala (Strong mechanical department)",
          "Online Institutes: Coursera (Mechanical Engineering Specialization); edX (Engineering Mechanics & Design); Udemy (CAD & Simulation Tools); NPTEL (IIT Mechanical Engineering Courses)"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Saksham Scholarship (AICTE): For differently-abled students pursuing technical education.",
          "Pragati Scholarship (AICTE): For girl students in technical education (₹50,000/year).",
          "ONGC Scholarship: For SC/ST students pursuing engineering.",
          "Institute Merit Scholarships: IITs and BITS offer tuition waivers for top rankers in entrance exams.",
          "Government Schemes: Various state scholarships for engineering students through NSP (National Scholarship Portal).",
          "Company Scholarships: Tata, Mahindra, and other major companies offer scholarships to engineering students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional organizations.",
        color: BLUE,
        content: [
          "Certifications (The 'Resume Boosters'):",
          "CAD Tools: Certification in SolidWorks, AutoCAD, or CATIA. Essential for design jobs. Cost: ₹5k–₹15k.",
          "Analysis Tools: ANSYS or HyperMesh certification. Proves simulation expertise. Cost: ₹10k–₹20k.",
          "Six Sigma Green Belt: For quality and process improvement roles. Cost: ₹15k–₹25k.",
          "Professional Bodies:",
          "ASME (American Society of Mechanical Engineers): Student membership is great for networking and access to technical journals.",
          "SAE India (Society of Automotive Engineers): A must-join for car enthusiasts. They organize student competitions like 'Baja SAE' and 'Formula SAE.'",
          "IMechE (Institution of Mechanical Engineers): UK-based but recognized globally. Professional membership after graduation."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in mechanical engineering.",
        color: BLUE2,
        content: [
          "Conventional: Design Engineer creating blueprints and CAD models; Production Engineer managing the factory floor; Maintenance Engineer fixing machines; Plant Manager overseeing entire manufacturing facility; Quality Assurance Engineer ensuring zero defects",
          "New-Age & AI-Driven: Robotics Engineer designing automated arms for factories; Mechatronics Engineer blending mechanics with electronics (IoT sensors); 3D Printing Specialist (Additive Manufacturing) building complex parts layer by layer; HVAC Engineer designing green air-conditioning systems; EV Battery Thermal Engineer optimizing cooling systems",
          "Remote/Entrepreneurship: CAD Drafter freelancing design work for global clients on Upwork; Mechanical Design Consultant for startups; Founder of engineering design studio; Mechanical Engineering Educator and Content Creator; Freelance Product Designer for consumer goods"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of mechanical engineering.",
        color: BLUE,
        content: [
          "The 'Core' Struggle: Unlike IT jobs, entry-level salaries in core mechanical companies start lower. Growth is steady but slower initially. You need patience.",
          "Physical Work: Factory jobs can be hot, noisy, and demanding. You aren't always in an AC office. Safety hazards are real.",
          "Obsolescence Risk: If you only know old-school mechanics, you will become obsolete. You must learn coding (Python), electronics, and IoT to stay relevant in the age of EVs and AI.",
          "Long Development Cycles: A product takes 2-3 years from concept to market. Patience and persistence are essential.",
          "Pressure for Perfection: A small design flaw can lead to product failure or safety issues. The responsibility is immense.",
          "Travel & Relocation: You may need to relocate to manufacturing hubs like Pune or Chennai. Travel to factories and sites is frequent."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in mechanical engineering.",
        color: BLUE2,
        content: [
          "Industry 4.0: 'Smart Factories' where machines talk to each other via IoT. Engineers will monitor data dashboards, not just oil gears.",
          "Green Engineering: Designing wind turbines, hydrogen engines, and carbon-capture machines. Sustainability is the biggest trend. Carbon-neutral manufacturing is mandatory.",
          "Bio-Mechanics: Engineers working with doctors to design advanced prosthetics, artificial hearts, and medical devices.",
          "AI-Assisted Design: Generative AI will create 100 design variations in seconds. Your job shifts from drawing to evaluating and refining.",
          "Electric Vehicles (EVs): Massive growth in EV design, battery thermal management, and charging infrastructure.",
          "Space & Defense: India's push for Atmanirbhar Bharat means more opportunities in ISRO, DRDO, and defense manufacturing."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Join Robotics Club: If your school has one, join it. Building a simple bot teaches you mechanics, electronics, and coding.",
          "Learn 3D Design: Download free software like Tinkercad or Fusion 360 (student license). Try designing a keychain or a phone stand.",
          "Fix Things: Next time a bicycle chain breaks or a toy stops working, try to fix it before throwing it away. Learn from failures.",
          "Physics is Key: Pay attention to Newton's Laws and Thermodynamics. They are the Bible of this career.",
          "Learn CAD Basics: Start with free tools like Fusion 360 or FreeCAD. Get comfortable with 3D modeling.",
          "Build Projects: Participate in school science fairs. Build a solar car, a water filter, or a mechanical clock.",
          "Read & Watch: Follow channels like Veritasium and Kurzgesagt. Read books like 'The Way Things Work' by David Macaulay."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Mechanical Engineering",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "E. Sreedharan: The 'Metro Man of India.' A civil/mechanical genius who built the Delhi Metro and Konkan Railway, changing how India travels. Proof that engineering can transform a nation.",
          "Baba Kalyani: Chairman of Bharat Forge. He turned a small Indian company into the world's largest forging giant. Shows entrepreneurial path in mechanical engineering.",
          "Anand Mahindra: While a businessman, his company (Mahindra) is a testament to Indian mechanical engineering prowess, from tractors to the Scorpio-N SUV.",
          "Dr. Pawan Goenka: The man behind the Mahindra Scorpio, putting Indian SUVs on the global map. Shows how Indian engineers can lead global product design.",
          "Rajesh Masrani: Former COO of Flipkart. His expertise in operations and logistics optimization shows how mechanical engineers excel in non-traditional roles.",
          "Kailash Katkar: Co-founder of Quick Heal. Shows how mechanical engineers can pivot to software and entrepreneurship."
        ]
      }
    ]
  },
};


