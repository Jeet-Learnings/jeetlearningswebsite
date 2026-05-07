import { CareerPageData } from './careerPageData';

const BLUE = '#1E40AF';
const BLUE2 = '#3B82F6';

const buildData = (
  slug: string,
  heading: string,
  subheading: string,
  skillLine: string,
  impactLine: string
): CareerPageData => ({
  slug,
  badge: 'Bio Science Career Pathway',
  heading,
  subheading,
  whyCards: [
    {
      icon: 'FlaskConical',
      title: 'Research Driven Work',
      description: 'Combine scientific method, experimentation, and modern tools to solve health and life science problems.',
      borderColor: '#10B981'
    },
    {
      icon: 'Database',
      title: 'Data + Biology',
      description: 'Interpret complex biological signals and convert observations into practical outcomes.',
      borderColor: '#3B82F6'
    },
    {
      icon: 'Briefcase',
      title: 'Strong Career Demand',
      description: impactLine,
      borderColor: '#F59E0B'
    }
  ],
  quickFacts: [
    { label: 'Entry Salary', detail: 'INR 3.5L - 7L PA', color: 'bg-green-100 text-green-700' },
    { label: 'Top Skills', detail: skillLine, color: 'bg-blue-100 text-blue-700' },
    { label: 'Pathway', detail: 'BSc plus MSc or research track', color: 'bg-purple-100 text-purple-700' }
  ],
  statCards: [
    { value: 'High', label: 'Research Relevance', gradient: 'from-green-500 to-green-600' },
    { value: 'Pan India', label: 'Opportunities', gradient: 'from-blue-500 to-blue-600' }
  ],
  guideSections: [
    {
      id: 'what',
      title: 'What is this career about?',
      icon: 'Target',
      description: 'Understand the role and domain focus.',
      color: BLUE,
      content: [
        'This career builds scientific understanding of living systems and applies that knowledge in healthcare, diagnostics, agriculture, and research.',
        'You will work with labs, datasets, protocols, and scientific literature to make accurate, evidence based decisions.',
        'The role suits learners who enjoy biology and can reason through complex problems step by step.'
      ]
    },
    {
      id: 'who',
      title: 'Who should consider this?',
      icon: 'User',
      description: 'Traits and habits that help you succeed.',
      color: BLUE2,
      content: [
        'Strong curiosity, patience, and comfort with technical detail.:',
        'Ability to document work clearly and communicate scientific findings to mixed audiences.:',
        'Willingness to keep learning as new tools and methods evolve.:'
      ]
    },
    {
      id: 'startnow',
      title: 'Start now (Class 9-12)',
      icon: 'Rocket',
      description: 'Practical actions to begin early.',
      color: BLUE,
      content: [
        'Focus on Biology, Chemistry, and Mathematics fundamentals.:',
        'Build basic coding and data literacy with Python and spreadsheet analysis.:',
        'Join science fairs, olympiads, and beginner research projects to gain hands on exposure.:'
      ]
    }
  ]
});

export const bioScienceUpdateData: Record<string, CareerPageData> = {
  biochemistry: {
    slug: "biochemistry",
    badge: "The Molecular Architect for Class 10+",
    heading: "Biochemistry",
    subheading: "Imagine you are a detective solving mysteries inside a single living cell. Become the Molecular Architect who understands how food turns into energy, how viruses hijack bodies, and how plants can cure diseases.",
    whyCards: [
      { icon: "Microscope", title: "Cell Explorer", description: "Study how molecules like proteins, lipids, and DNA interact to keep us alive.", borderColor: "#10B981" },
      { icon: "Pill", title: "Drug Developer", description: "Design new medicines for diseases like diabetes, cancer, and new types of flu.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Food Scientist", description: "Improve nutritional value of food and create sustainable alternatives like plant-based meat.", borderColor: "#F59E0B" },
      { icon: "Shield", title: "Quality Controller", description: "Ensure every batch of vaccine or medicine produced is safe and effective.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹3.5L–₹6.0L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Organic Chemistry, Lab Methods, Data Analysis, Molecular Modeling", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. (3 yrs) + M.Sc. (2 yrs) + PhD/Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "11% CAGR", label: "Market Growth to 2030", gradient: "from-green-500 to-green-600" },
      { value: "$34B", label: "India Diagnostic & Biotech Market by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The study of chemical processes within living organisms.",
        color: BLUE,
        content: [
          "Biochemistry is the study of chemical processes within and relating to living organisms. It combines the 'What' of Biology with the 'How' of Chemistry.",
          "The Cell Explorer: They study how molecules like proteins, lipids, and DNA interact to keep us alive.",
          "The Drug Developer: They work in pharmaceutical companies to design new medicines for diseases like diabetes, cancer, or even new types of flu.",
          "The Food Scientist: They improve the nutritional value of our food and help create sustainable alternatives like plant-based meat.",
          "The Quality Controller: They ensure that every batch of vaccine or medicine produced in a factory is safe and effective.",
          "Why it matters: India is the 'Pharmacy of the World.' We produce more vaccines and generic medicines than almost any other country. Biochemists are the brains behind this massive industry, ensuring India remains a global leader in healthcare and biotechnology."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Lab Detective",
        icon: "Clock",
        description: "Real workflow of a biochemist.",
        color: BLUE2,
        content: [
          "9:00 AM – The Lab Huddle: Your day begins at a high-tech research facility in Hyderabad or Bangalore. You aren't sitting at a desk; you are at your 'Bench'—the lab station where the magic happens. You start with a quick team meeting to discuss the results of last night's protein crystallization experiment.",
          "11:30 AM – Pipettes and Precision: The core of your day is hands-on work. You are using a high-precision pipette to transfer clear liquids between test tubes. Today, you are testing how a new enzyme reacts with a specific sugar. You wear a lab coat, goggles, and gloves—not just for safety, but to protect your experiment from 'human contamination.'",
          "1:30 PM – Lunch and Data: Over lunch with fellow scientists, you don't just talk about sports; you brainstorm. 'Why did the reaction fail at 37°C?' A colleague suggests checking the pH levels.",
          "3:30 PM – The Digital Lab: You spend the afternoon in front of a computer. You use advanced software to create 3D models of molecules. You aren't just looking at pictures; you are simulating how a drug molecule 'docks' into a virus, effectively neutralizing it.",
          "6:00 PM – The Review: Before heading home, you document every single step of your work in a digital lab notebook. In science, if it isn't documented, it didn't happen. You leave the lab knowing that one small discovery today could lead to a life-saving medicine tomorrow."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Biochemist DNA.",
        color: BLUE,
        content: [
          "The Curious Soul: Do you always ask 'Why' and 'How' things work?",
          "The Patient Observer: Experiments often fail. Can you stay calm and try again for the 100th time?",
          "The Detail-Oriented Eye: Can you notice a tiny color change in a liquid or a small spike on a graph?",
          "Analytical Thinking: Are you good at solving puzzles and connecting different pieces of information?",
          "Hard Skills: Strong foundation in Biology and Organic Chemistry, and comfort with Mathematics and Computer Simulations.",
          "Self-Assessment: Do I love understanding how things work at a molecular level? Can I work with precision? Do I want to create life-saving medicines? If yes, you have the Biochemist DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Scientific Method.",
        color: BLUE2,
        content: [
          "Hypothesize: You guess what might happen based on current knowledge.",
          "Experiment: You design a test to see if your guess is right.",
          "Analyze: You use machines like Spectrometers or Chromatographs to read the results.",
          "Communicate: You write reports or papers to tell the world about your discovery.",
          "Validate: You work with colleagues to ensure your findings are reproducible.",
          "Documentation: Maintaining detailed records for regulatory compliance and research publication."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a biochemist.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.Sc. in Biochemistry (3 years)","Step 3: Complete M.Sc. in Biochemistry (2 years)","Step 4: Gain laboratory internship in research institute","Step 5: Pursue Ph.D. or NET/GATE for research","Step 6: Join as Scientist/Professor/Research Associate","Pathway B: Professional/Industry Route","Step 1: Complete Class 12th with PCB stream","Step 2: Pursue B.Tech Biotechnology/Biochemical Engineering (4 years)","Step 3: Learn tools like HPLC, PCR, chromatography","Step 4: Complete industry internship in pharma company","Step 5: Pursue M.Tech or MBA in Biotech Management","Step 6: Join as Biotech Analyst/Product Manager/QC Officer","Pathway C: Skill-Based Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue diploma in Medical Lab Technology","Step 3: Get certified in clinical biochemistry techniques","Step 4: Join hospital/diagnostic lab as technician","Step 5: Gain experience and pursue part-time B.Sc.","Step 6: Advance as Senior Lab Technologist/Supervisor"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO (15+ yrs): ₹60 LPA – ₹1.5 Cr+","Senior (10+ yrs): ₹25 – ₹45 LPA","Mid-Level (5–8 yrs): ₹12 – ₹20 LPA","Junior (3–5 yrs): ₹6 – ₹11 LPA","Entry Level (0–2 yrs): ₹3.5 – ₹6 LPA","Salary Note: Metros pay 30% more. NET/GATE exams boost entry salary.","Where Are the Jobs?","Top Cities: Bangalore, Hyderabad, Pune, Mumbai, Ahmedabad.","Top Industries: Pharma, Biotech, Diagnostics, Clinical Research.","Global Demand: High in USA, Germany. R&D outsourcing is growing.","Top Institutions","Government: Indian Institute of Science (IISc), Bangalore, University of Delhi, Banaras Hindu University (BHU), Jawaharlal Nehru University (JNU)","Private: Manipal Academy of Higher Education, Amity University, SRM Institute of Science and Technology, Lovely Professional University","Online: NPTEL (IIT/IISc courses), IGNOU, Coursera (partnered Indian institutes), SWAYAM Portal","Career Opportunities","Conventional","Biochemist","Research Associate","Quality Control Analyst","Clinical Laboratory Scientist","New-age and AI driven","Bioinformatics Analyst","Computational Biologist","Molecular Diagnostics Specialist","Drug Discovery Data Analyst","Remote/entrepreneurship","Scientific Content Creator","Medical Writer","Biotech Consultant","Diagnostic Startup Founder"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Pharmaceuticals (Cipla, Sun Pharma), Biotechnology (Biocon), Hospitals & Diagnostics (Apollo, Dr. Lal PathLabs), Agriculture (Monsanto India).",
          "Top Cities: Hyderabad, Bangalore, Mumbai, Pune, and Ahmedabad.",
          "Remote Potential: Limited for lab work, but high in Bioinformatics (data-based biochemistry) and Scientific Writing.",
          "International: High demand in the USA, Germany, and Switzerland for Ph.D. holders.",
          "Emerging Hubs: Hyderabad (Pharma Hub), Bangalore (Biotech), Pune (Research), Ahmedabad (Diagnostics)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹5,000–₹50,000 per year (IITs, Central Universities). Very affordable for quality education.",
          "Private Fees: ₹1L–₹3L per year (Amity, VIT, LPU). Higher cost but strong industry connections.",
          "Duration: 3 years (B.Sc.) + 2 years (M.Sc.) + 3-5 years (Optional Ph.D.).",
          "Living Costs: ₹10,000–₹20,000 per month in major cities (Hostel/Rent, Food, Transport).",
          "Additional Costs: Lab equipment, certifications, and research materials can cost ₹20,000–₹50,000.",
          "ROI: Entry salary of ₹3.5L+ makes education investment recoverable in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Elite/Government: IISc Bangalore, AIIMS Delhi, Banaras Hindu University (BHU), University of Delhi (DU), University of Pune.",
          "Private: VIT Vellore, Manipal (MAHE), Amity University, Lovely Professional University (LPU), BITS Pilani.",
          "Geographic Diversity: North (JNU/DU), South (IISc/Madras University), West (Pune University/IIT Bombay), East (Calcutta University/IIT Kharagpur).",
          "Research Centers: CSIR Labs, DBT-supported institutes, and Biotech Park facilities."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: INSPIRE Scholarship (₹80,000/year for top board scorers), KVPY (Fellowships for basic sciences), DBT-JRF (₹12,000-31,000/month).",
          "State: Prathibha Scholarship (Kerala) for science students, various state-level merit scholarships.",
          "Corporate: Biocon Rama Mazumdar Scholarship for biotech/biochemistry students, L'Oréal India For Young Women in Science.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "SBC(I): Society of Biological Chemists (India). Primary professional body for biochemists.",
          "Certifications: Clinical Biochemistry certification (for hospital work), Bioinformatics courses, Quality Control certifications.",
          "Licensing: Required if you want to sign off on medical reports (requires a medical degree + biochemistry specialization).",
          "Specialized Training: Advanced Molecular Biology, Protein Biochemistry, Metabolic Biochemistry, Enzyme Kinetics.",
          "International: ISCB (International Society for Computational Biology) membership for global recognition."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in biochemistry careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Research Scientist, Clinical Biochemist, Lecturer, Quality Control Officer, Lab Manager.",
          "New-Age Careers: Bioinformatics Analyst, Genetic Counselor, Sustainability Officer (working on biofuels), AI Drug Discovery Specialist.",
          "Entrepreneurship: Starting a Diagnostic Lab, Biotech Startup (e.g., eco-friendly cosmetics), Nutraceutical Company.",
          "Freelancing: Scientific Writing, Research Consulting, Patent Consultancy, Lab Auditing.",
          "Interdisciplinary Roles: Biochemistry + Data Science, Biochemistry + Environmental Science, Biochemistry + Food Technology."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of biochemistry careers.",
        color: BLUE,
        content: [
          "The Long Wait: Research takes years. You might work on one medicine for a decade before it hits the market.",
          "Academic Rigor: You never stop studying. The 'textbooks' of biochemistry change every year.",
          "Lab Hours: You might have to check an experiment at 2 AM or work on weekends if the cells are growing!",
          "Funding Challenges: Research projects depend on grants, which can be unpredictable and competitive.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Emotional Weight: Dealing with failed experiments or research setbacks can be emotionally taxing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in biochemistry.",
        color: BLUE2,
        content: [
          "AI-Drug Discovery: AI will predict how chemicals react, making the lab work 100 times faster.",
          "CRISPR & Gene Editing: Fixing diseases by 'editing' DNA like a word document.",
          "Personalized Medicine: Medicines made specifically for your DNA, not just anyone's.",
          "Synthetic Biology: Designing custom organisms for medicine production and environmental cleanup.",
          "Sustainable Biochemistry: Creating eco-friendly alternatives to fossil fuels and plastics.",
          "Impact on Employment: New roles for AI specialists, bioinformatics experts, and sustainability officers. Required skills: Python, Machine Learning, Data Analytics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Read Popular Science: Follow sites like ScienceDaily or magazines like Scientific American.",
          "Coding Basics: Learn a bit of Python. In the future, every biochemist will also be a data scientist.",
          "Kitchen Science: Try baking or making curd. Both are actually complex biochemical reactions!",
          "Visit a Lab: Ask your teacher to take you to a local hospital or college lab to see the machines in action.",
          "Science Fairs: Participate in science fairs and olympiads to test your knowledge.",
          "Online Courses: Take free courses on Coursera or edX about biochemistry and molecular biology.",
          "Science Projects: Conduct experiments on enzyme reactions, protein extraction, or fermentation.",
          "Observation: Keep a lab journal. Document observations carefully and precisely.",
          "Networking: Join science clubs and connect with mentors in the field."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in biochemistry.",
        color: BLUE2,
        content: [
          "Venkataraman Ramakrishnan: Nobel Prize winner who mapped the structure of the Ribosome (the cell's protein factory).",
          "Har Gobind Khorana: Nobel winner who helped crack the Genetic Code.",
          "Kiran Mazumdar-Shaw: Founder of Biocon; she showed how a biochemist can become one of the world's most successful business leaders.",
          "M.S. Swaminathan: Though known for agriculture, his work in plant biochemistry led to the Green Revolution.",
          "Soumya Swaminathan: Former Chief Scientist at WHO, she played a vital role in global health and vaccine science.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's biochemistry and vaccine development initiatives."
        ]
      }
    ]
  },
  bioinformatics: {
    slug: "bioinformatics",
    badge: "The Digital Architect of Biology for Class 10+",
    heading: "Bioinformatics",
    subheading: "Imagine you are a detective solving mysteries hidden inside a single drop of blood or a tiny strand of DNA. Become the Digital Biologist who bridges Biology and Computer Science to design vaccines and personalized medicines.",
    whyCards: [
      { icon: "Database", title: "Data Translator", description: "Take massive biological data and use computers to find patterns humans could never see.", borderColor: "#10B981" },
      { icon: "Pill", title: "Drug Designer", description: "Use computer simulations to predict which medicine will work best without wet lab testing.", borderColor: "#3B82F6" },
      { icon: "Dna", title: "Genetic Map Maker", description: "Help doctors understand a patient's genetic code to provide Precision Medicine.", borderColor: "#F59E0B" },
      { icon: "Zap", title: "AI Biologist", description: "Combine AI and genomics to revolutionize drug discovery and personalized healthcare.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹4.5L–₹7.5L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Python, R, Linux, SQL, Genomics, Machine Learning", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Tech/B.Sc. (4 yrs) + M.Tech/M.Sc. (2 yrs) + Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "19% CAGR", label: "Market Growth to 2030", gradient: "from-green-500 to-green-600" },
      { value: "$1.15B", label: "India Bioinformatics Market by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The marriage between Biology, Chemistry, Mathematics, and Computer Science.",
        color: BLUE,
        content: [
          "Bioinformatics is a 'multidisciplinary' field—think of it as a marriage between Biology, Chemistry, Mathematics, and Computer Science.",
          "The Data Translator: They take massive amounts of biological data (like the human genome) and use computers to find patterns that a human eye could never see.",
          "The Drug Designer: Instead of testing thousands of chemicals in a wet lab (which is slow), they use 'in-silico' (computer-based) simulations to predict which medicine will work best.",
          "The Genetic Map Maker: They help doctors understand a patient's specific genetic code to provide 'Precision Medicine'—treatment made just for them.",
          "Why it matters: India is currently a global leader in IT and Pharmaceuticals. Bioinformatics combines these two strengths. With the rise of AI-driven biology and the 'Genome India Project,' we need Digital Biologists who can navigate this data-rich world."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Code-Breaker",
        icon: "Clock",
        description: "Real workflow of a bioinformatician.",
        color: BLUE2,
        content: [
          "9:00 AM – The Lab Login: Your day begins not with test tubes, but with a high-performance workstation. You check your server logs—last night, your 'Next-Generation Sequencing' (NGS) pipeline was processing data from 500 different patients. You ensure the algorithms have correctly identified a specific mutation in a cancer-causing gene.",
          "11:30 AM – Collaborative Huddle: You meet with 'Wet Lab' scientists (the ones who handle real samples). They've discovered a new protein in a rare plant. Your job is to go back to your screen and 'blast' that protein's sequence against a global database to see what it does and if it can be used for a new medicine.",
          "1:30 PM – Lunch and Logic: Over lunch with fellow data scientists, you brainstorm. 'Why did the AI model flag this gene as a false positive?' You realize the algorithm needs a better filter for 'background noise.'",
          "3:30 PM – Algorithm Optimization: You spend the afternoon writing scripts in Python or R. You aren't just coding; you are building a tool that will help scientists simulate how a virus attaches to human cells. You are literally building a digital battlefield to see how to defeat a disease.",
          "6:00 PM – Visualizing Success: Before heading home, you create a 3D visualization of a DNA structure. Seeing it on the screen helps you explain your findings to the company's directors. You log off knowing that today, your code moved us one step closer to a cure."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Bioinformatician DNA.",
        color: BLUE,
        content: [
          "The Logical Puzzle-Solver: Do you love connecting dots and finding hidden patterns?",
          "Patience for Perfection: Biological data is 'messy.' Can you spend hours 'cleaning' data to find one single truth?",
          "The Balanced Brain: Are you equally comfortable with Biology (living things) and Logic (coding)?",
          "Hard Skills: Python, R, Linux, SQL, and a strong grasp of Genomics.",
          "Soft Skills: Collaborative spirit and the ability to explain 'tech' to 'non-tech' people.",
          "Self-Assessment: Do I love solving puzzles with data? Can I code and understand biology? Do I want to revolutionize medicine? If yes, you have the Bioinformatician DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Digital Discovery Cycle.",
        color: BLUE2,
        content: [
          "Data Acquisition: Gathering raw sequences from DNA labs and sequencing machines.",
          "Processing: Using high-speed computers to 'clean' and organize the data.",
          "Analysis: Running algorithms to identify mutations or patterns in genetic sequences.",
          "Validation: Working with biologists to prove the digital findings in a real lab.",
          "Visualization: Creating 3D models and graphs to communicate findings to stakeholders.",
          "Documentation: Maintaining detailed records and publishing findings in scientific journals."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a bioinformatician.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB/PCM (Science)","Step 2: Pursue B.Sc. in Bioinformatics (3 years)","Step 3: Complete M.Sc. in Bioinformatics (2 years)","Step 4: Learn tools like BLAST, Python, R programming","Step 5: Pursue Ph.D. or clear GATE/NET exam","Step 6: Join as Bioinformatics Scientist/Professor/Researcher","Pathway B: Engineering/IT Route","Step 1: Complete Class 12th with PCM stream","Step 2: Pursue B.Tech in Bioinformatics/Computer Science (4 years)","Step 3: Learn genomics, machine learning, database management","Step 4: Complete internship in biotech/pharma/IT company","Step 5: Pursue M.Tech or MS in Computational Biology","Step 6: Join as Computational Biologist/Data Analyst/Software Developer","Pathway C: Skill-Based/Domain Switch Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue B.Sc. in Biology/Computer Science","Step 3: Complete certification in Bioinformatics (online/offline)","Step 4: Learn SQL, Python, genomic databases practically","Step 5: Gain internship in research lab/biotech startup","Step 6: Join as Bioinformatics Analyst/Lab Data Manager"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹70 LPA – ₹1.8 Crore","Senior / Lead Role (10+ yrs): ₹30 – ₹55 LPA","Mid-Level Professional (5–8 yrs): ₹15 – ₹28 LPA","Junior / Associate (3–5 yrs): ₹8 – ₹14 LPA","Entry Level (0–2 yrs): ₹5 – ₹9 LPA","Note: Metros pay 40% higher. AI/ML skills command a premium.","Where Are the Jobs?","Top Cities: Bangalore, Hyderabad, Chennai, Pune, Delhi-NCR.","Top Industries: Genomics, Pharma R&D, Agri-tech, Precision Medicine.","Global Demand: High in USA, UK. Remote freelance roles increasing.","Top Institutions","Government: Jawaharlal Nehru University (JNU), Delhi, University of Hyderabad, Pondicherry University, Indian Institute of Science (IISc), Bangalore","Private: Manipal Academy of Higher Education, Amity University, SRM Institute of Science and Technology, Vellore Institute of Technology (VIT)","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Bioinformatics Analyst","Genomics Data Analyst","Research Associate","Clinical Data Analyst","New-age and AI driven","Computational Biologist","AI-Driven Drug Discovery Analyst","Multi-Omics Data Scientist","Precision Medicine Analyst","Remote/entrepreneurship","Freelance Bioinformatics Consultant","Scientific Content Creator","Online Bioinformatics Trainer","Biotech Startup Founder"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Pharmaceuticals (Cipla, Sun Pharma), Biotechnology (Biocon, Strand Life Sciences), IT Services (TCS, Wipro, Infosys), Healthcare Startups.",
          "Top Cities: Bangalore (The Hub), Hyderabad, Pune, and Gurgaon.",
          "Remote Work: Very high! Since the work is primarily computer-based, many roles are hybrid or fully remote.",
          "International: Massive demand in USA, UK, and Germany for Indian talent in clinical data management.",
          "Emerging Hubs: Bangalore (Tech + Biotech), Hyderabad (Pharma), Pune (Research), Gurgaon (Startups)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹15,000–₹2.5L total (Central universities/IITs). Very affordable for quality education.",
          "Private Fees: ₹4L–₹12L total (Private engineering/science degrees). Higher cost but strong industry connections.",
          "Duration: 4 years (B.Tech) or 3+2 years (B.Sc.+M.Sc.).",
          "Living Costs: ₹15,000–₹25,000 per month in major education hubs (Hostel/Rent, Food, Transport).",
          "Additional Costs: Certifications (BINC, AWS, Cisco) can cost ₹20,000–₹50,000.",
          "ROI: Entry salary of ₹4.5L+ makes education investment recoverable in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Elite/Government: IISc Bangalore, IBAB Bangalore, IIT Hyderabad, JNU Delhi, University of Pune.",
          "Private: Amity University, VIT Vellore, Manipal (MAHE), JIIT Noida, BITS Pilani.",
          "Online: upGrad (in collaboration with IIIT-B), Coursera (Google Data Analytics), Swayam.",
          "Regional Diversity: North (IGIB Delhi), South (IISc Bangalore), West (IIT Bombay), East (NIBMG Kalyani)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: INSPIRE Fellowship (for science merit), GAT-B stipends (₹12,000/month for PG students), DBT-JRF (₹12,000-31,000/month).",
          "Private: ARM Scholarship (Biotecnika), Biocon Rama Mazumdar Scholarship, L'Oréal India For Young Women in Science.",
          "Criteria: Often based on board percentages (>85%) or entrance exam ranks.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "BINC (Bioinformatics National Certification): The 'Gold Standard' certification by DBT India.",
          "Bodies: Society of Biological Chemists (India), ISCB (International Society for Computational Biology).",
          "Value-Adds: Cisco/AWS Cloud certifications are highly valued in modern bioinformatics labs.",
          "Specialized Training: Advanced Python, Machine Learning, Cloud Computing, Genomic Data Analysis.",
          "International: ISCB membership for global recognition and networking."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in bioinformatics careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Bioinformatics Analyst, Computational Biologist, Biostatistician, Data Scientist.",
          "New-Age Careers: AI Drug Discovery Lead, Genomics Data Scientist, Precision Medicine Consultant, AI Model Developer.",
          "Entrepreneurship: Starting a Diagnostic Lab, Bio-Data Consultancy for pharma giants, AI-driven drug discovery startup.",
          "Freelancing: Scientific Writing, Data Analysis Consulting, Bioinformatics Tool Development, Patent Consultancy.",
          "Interdisciplinary Roles: Bioinformatics + AI, Bioinformatics + Cloud Computing, Bioinformatics + Public Health."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of bioinformatics careers.",
        color: BLUE,
        content: [
          "Constant Re-skilling: You must learn a new coding language or tool every year.",
          "Data Fatigue: Staring at screens and massive spreadsheets can be mentally draining.",
          "Interdisciplinary Stress: You have to speak the 'language' of both a coder and a doctor—which takes years to master.",
          "Imposter Syndrome: You might feel like you're not 'biologist enough' or 'coder enough.'",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Ethical Dilemmas: Handling sensitive genetic data requires strong ethical judgment."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in bioinformatics.",
        color: BLUE2,
        content: [
          "Generative AI in Biology: AI models that 'write' new proteins like ChatGPT writes essays.",
          "Cloud-Native Bioinformatics: Moving all analysis to massive global clouds for 100x faster processing.",
          "Ethical AI: Ensuring that genetic data is used fairly and doesn't lead to 'DNA-based' discrimination.",
          "Personalized Medicine at Scale: Every patient will have a digital twin for treatment planning.",
          "Real-Time Genomics: Processing and analyzing genomic data in real-time for instant diagnosis.",
          "Impact on Employment: New roles for AI specialists, cloud engineers, and data scientists. Required skills: Python, Machine Learning, Cloud Computing."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master Python: It is the 'lingua franca' of the field. Start a project on Kaggle.",
          "Logic and Math: Focus on Statistics. Bioinformatics is 50% math!",
          "Read Scientific Blogs: Follow GenomeWeb or Nature News to see what's trending.",
          "DIY Experiments: Use online tools like NCBI BLAST to play with real DNA sequences from home.",
          "Learn Linux: Familiarize yourself with command-line interfaces and Linux systems.",
          "Online Courses: Take free courses on Coursera or edX about bioinformatics and data science.",
          "Science Projects: Conduct experiments on genomic analysis or protein structure prediction.",
          "Coding Practice: Build small projects that combine biology and coding.",
          "Observation: Keep a lab journal. Document your learning and discoveries."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in bioinformatics.",
        color: BLUE2,
        content: [
          "Gajendra Pal Singh Raghava: A world-renowned scientist at IIIT-Delhi who developed tools for drug and vaccine design.",
          "Samir K. Brahmachari: Former Director-General of CSIR and a pioneer in open-source drug discovery.",
          "Venkataraman Ramakrishnan: Nobel Prize winner (Chemistry) who used computational biology to map the Ribosome.",
          "Kiran Mazumdar-Shaw: While a business leader, she built Biocon into a global giant using high-end bioinformatics.",
          "Anup Som: A leading researcher in computational biology and genomic data analysis.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's genomics and data-driven health initiatives."
        ]
      }
    ]
  },
  biotechnology: buildData(
    'biotechnology',
    'Biotechnology',
    'Use biology and engineering to create products in health, agriculture, and industrial biotech.',
    'Cell Biology, Bioprocess, QA/QC, Research Writing',
    'Biotech growth is driven by vaccines, therapeutics, and sustainable manufacturing innovation.'
  ),
  genetics: {
    slug: "genetics",
    badge: "Decoding Life for Class 10+",
    heading: "Genetics",
    subheading: "Imagine you are a detective solving mysteries hidden inside a single drop of blood or a tiny strand of DNA. Become the scientist who decodes the blueprint of life and revolutionizes healthcare, agriculture, and our understanding of human diversity.",
    whyCards: [
      { icon: "Dna", title: "Code-Breakers", description: "Study DNA to understand how mutations cause diseases like cancer or rare disorders.", borderColor: "#10B981" },
      { icon: "Heart", title: "Healers", description: "Work in hospitals to help families understand genetic risks and choose personalized medicine.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Farmers of the Future", description: "Develop seeds that grow in difficult weather, ensuring India's food security.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Bioeconomy Leaders", description: "Lead India's $300 billion bioeconomy by 2030 and the Genome India Project.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹4.0L–₹8.0L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Molecular Biology, Bioinformatics, Python, Statistics", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc./B.Tech (3-4 yrs) + M.Sc. (2 yrs) + PhD/Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "10.8% CAGR", label: "Market Growth to 2025", gradient: "from-green-500 to-green-600" },
      { value: "$1.7B", label: "India Human Genetics Market by 2025", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The study of heredity and the blueprint of life.",
        color: BLUE,
        content: [
          "Genetics is the study of heredity—how traits are passed from parents to children through genes. A professional in this field, a Geneticist, explores the blueprint of life.",
          "The Code-Breakers: They study DNA to understand how mutations (small 'typos' in our genetic code) cause diseases like cancer or rare disorders.",
          "The Healers: They work in hospitals to help families understand the risk of inheriting a condition and help doctors choose the best 'personalized' medicine for a patient.",
          "The Farmers of the Future: They help develop seeds that can grow in difficult weather, ensuring India's food security.",
          "Why it matters: India has a massive population with unique genetic diversity. As we move toward a $300 billion bioeconomy by 2030, we need geneticists to lead the 'Genome India Project,' protect our biodiversity, and revolutionize healthcare."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The DNA Detective",
        icon: "Clock",
        description: "Real workflow of a geneticist in research.",
        color: BLUE2,
        content: [
          "8:30 AM – The Morning Huddle: Your day begins at a high-tech lab in Hyderabad's Genome Valley or a premier hospital in Delhi. You suit up in a white lab coat, gloves, and a mask. You start with a quick team meeting to discuss the results of a 'Next-Generation Sequencing' (NGS) run that finished overnight.",
          "10:30 AM – In the Lab: You spend your morning at the lab bench. Using high-precision pipettes, you prepare biological samples—perhaps from a rare medicinal plant or a patient's blood. You aren't just mixing liquids; you are extracting the very essence of life: DNA.",
          "1:30 PM – The Digital Deep Dive: Lunch is a quick break before you sit at your workstation. Modern genetics is 50% computer work. You use Bioinformatics software to 'align' the DNA sequences you extracted. It's like a giant digital puzzle where you are looking for one specific piece that doesn't fit.",
          "4:00 PM – Genetic Counseling: In the late afternoon, you might meet a couple who is worried about a family history of a certain condition. You aren't just a scientist here; you are a counselor. You explain complex data in simple terms, helping them make life-changing decisions with empathy and clarity.",
          "6:30 PM – Closing the Loop: Before heading home, you document your findings in a digital lab notebook. You might send an email to a researcher in the UK or the US, as science is a global team sport. You leave the lab knowing that today, your work moved us one step closer to a cure or a breakthrough."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Geneticist DNA.",
        color: BLUE,
        content: [
          "The Logical Puzzle-Solver: Do you love connecting dots and finding hidden patterns?",
          "Patience & Resilience: Experiments in genetics can take months. Can you stay motivated even when 'Plan A' fails?",
          "Ethical Integrity: You will handle very private information. Do you have a strong sense of right and wrong?",
          "Soft Skills: Can you explain a 'mutation' to a 10-year-old or a worried parent? (Empathy and Communication).",
          "Hard Skills: Mastery of Biology and Organic Chemistry, comfort with Statistics, and an interest in Coding.",
          "Self-Assessment: Do I love solving puzzles? Can I work with data and computers? Do I care about helping people? If yes, you have the Geneticist DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Discovery Cycle.",
        color: BLUE2,
        content: [
          "Sample Acquisition: Collecting blood, tissue, or plant samples from patients or research subjects.",
          "Lab Processing: Extracting DNA and preparing it for sequencing using advanced techniques.",
          "Data Analysis: Using AI and algorithms to find genetic variations and mutations.",
          "Reporting: Presenting findings to doctors, farmers, or other scientists in clear, actionable formats.",
          "Genetic Counseling: Explaining complex genetic information to patients and families.",
          "Documentation: Maintaining detailed records for quality assurance and regulatory compliance."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a geneticist.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.Sc. in Genetics/Biotechnology (3 years)","Step 3: Complete M.Sc. in Genetics/Human Genetics (2 years)","Step 4: Gain research experience in genetics laboratory","Step 5: Pursue Ph.D. or clear GATE/NET/ICMR exam","Step 6: Join as Geneticist/Research Scientist/University Professor","Pathway B: Medical/Clinical Genetics Route","Step 1: Complete Class 12th with PCB stream","Step 2: Pursue MBBS or B.Sc. in Medical Genetics (4-5 years)","Step 3: Complete MD/M.Sc. in Medical/Clinical Genetics","Step 4: Learn genetic counselling and diagnostic techniques","Step 5: Get trained in cytogenetics, DNA sequencing tools","Step 6: Join as Genetic Counsellor/Clinical Geneticist/Diagnostic Specialist","Pathway C: Skill-Based/Certification Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue any life sciences graduate degree","Step 3: Complete certification in genomics/genetic testing","Step 4: Learn tools like CRISPR, PCR, bioinformatics software","Step 5: Join diagnostic lab or biotech company as trainee","Step 6: Advance as Genomics Analyst/Lab Geneticist/Research Associate"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹55LPA–₹1.4Cr","Senior / Lead Role (10+ yrs): ₹22–₹42LPA","Mid-Level Professional (5–8 yrs): ₹11–₹19LPA","Junior / Associate (3–5 yrs): ₹6–₹10LPA","Entry Level (0–2 yrs): ₹3–₹5LPA","Salary Note: Metros pay 30% more. Specialized certifications boost entry pay.","Where Are the Jobs?","Top Cities: Bangalore, Hyderabad, Pune, Mumbai, Delhi-NCR.","Top Industries: Genomics R&D, Pharma, Diagnostics, Agri-biotech.","Global Demand: High in USA, UK. Remote data analysis growing.","Top Institutions","Government: Indian Institute of Science (IISc), Bangalore, Indian Agricultural Research Institute (IARI), Delhi, Centre for Cellular and Molecular Biology (CCMB), Hyderabad, Banaras Hindu University (BHU)","Private: Manipal Academy of Higher Education, Amity University, SRM Institute of Science and Technology, Birla Institute of Technology and Science (BITS), Pilani","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Geneticist","Cytogenetics Analyst","Molecular Genetics Scientist","Genetic Counselor","New-age and AI driven","Genomics Data Analyst","Computational Geneticist","Precision Medicine Analyst","AI-Driven Genomics Researcher","Remote/entrepreneurship","Genetics Consultant","Medical Genetics Writer","Online Genetics Trainer","Genomics Startup Founder"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Healthcare & Diagnostics (MedGenome, Strand Life Sciences), Pharmaceuticals (Biocon, Dr. Reddy's), Agri-Biotech (Monsanto, Mahyco), Forensics.",
          "Top Cities: Bangalore (Biotech Capital), Hyderabad (Genome Valley), Pune, Delhi-NCR, and Chennai.",
          "Remote Work: High potential in Genomic Data Analysis and Genetic Counseling (Tele-health).",
          "International: High demand in the USA, Germany, and Switzerland for Ph.D. holders in Genomics.",
          "Emerging Hubs: Bangalore (Tech + Biotech), Hyderabad (Genome Valley), Pune (Biotech), Delhi (Research)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹10,000–₹1.5L total (IISc, DU, BHU). Very affordable for quality education.",
          "Private Institutions: ₹5L–₹15L total (VIT, Manipal, Amity). Higher cost but strong industry connections.",
          "Duration: 3-4 years (B.Sc./B.Tech) + 2 years (M.Sc.) + 3-5 years (PhD optional).",
          "Living Costs: ₹15,000–₹25,000 per month in major metros (Hostel/Rent, Food, Transport).",
          "Additional Costs: Specialized certifications (BGC) can cost ₹5,000–₹20,000. NGS certification adds value.",
          "ROI: Entry salary of ₹4L+ makes education investment recoverable in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: IISc Bangalore, Jawaharlal Nehru University (JNU), University of Delhi (DU), BHU Varanasi, CCMB Hyderabad.",
          "Private: Vellore Institute of Technology (VIT), Manipal Academy of Higher Education, BITS Pilani, Lovely Professional University (LPU), Symbiosis (Pune).",
          "Online: NPTEL/Swayam offers free courses; Coursera/edX for professional certifications.",
          "Research Centers: National Institute of Immunology (Delhi), Institute of Genomics and Integrative Biology (Delhi), CSIR Labs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: INSPIRE Scholarship (₹80k/year for top board scorers), DBT-JRF (Stipends for researchers).",
          "Specialized: Khorana Program for Scholars (Internships in the USA), Ramalingaswami Fellowship.",
          "State: Post-Matric Scholarships for SC/ST/OBC students across all states.",
          "Institutional: Many universities offer merit-based scholarships (₹15,000–₹30,000/year) and research assistantships.",
          "UGC NET/JRF: ₹31,000-35,000/month for PhD students pursuing research."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "Board of Genetic Counseling (BGC), India: Essential for professional counselors. Certification adds credibility.",
          "SIAMG: Society for Indian Academy of Medical Genetics (offers specialized fellowships and training).",
          "Certifications: Next-Generation Sequencing (NGS) certification adds massive value. CRISPR Gene Editing certification.",
          "Specialized Training: Advanced Bioinformatics, Genomic Data Analysis, Genetic Counseling, CRISPR Technology.",
          "International: ASHG (American Society of Human Genetics) membership for global recognition."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in genetics careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Cytogeneticist, Medical Lab Technologist, University Professor, Hospital Geneticist, Research Scientist.",
          "New-Age Careers: AI-Genomic Data Scientist, CRISPR Gene Editor, Direct-to-Consumer Genetic Consultant, Precision Medicine Specialist.",
          "Entrepreneurship: Starting a Genetic Testing Lab, Ancestry/Wellness DNA Service, Personalized Medicine Startup.",
          "Freelancing: Scientific Content Writer, Forensic Consultant, Wellness/Ancestry Advisor, Online Course Creator.",
          "Interdisciplinary Roles: Genetics + Data Science, Genetics + Agriculture, Genetics + Forensics, Genetics + Public Health."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of genetics careers.",
        color: BLUE,
        content: [
          "The Long Road: You usually need a Master's or a Ph.D. to reach high-paying roles.",
          "Lab Fatigue: You may spend hours staring at a computer screen or standing at a lab bench.",
          "Emotional Weight: In clinical genetics, you may have to share difficult news with families.",
          "Ethical Dilemmas: Handling sensitive genetic information requires strong ethical judgment.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Limited Public Awareness: Genetics is not mainstream. Explaining your job to relatives can be challenging."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in genetics.",
        color: BLUE2,
        content: [
          "AI-Driven Genomics: AI will predict diseases years before symptoms appear, revolutionizing preventive medicine.",
          "Gene Editing (CRISPR): We are entering an era where we can 'fix' faulty genes to cure inherited blindness or sickle-cell anemia.",
          "Home Testing: DNA kits for fitness, nutrition, and ancestry will become as common as blood tests.",
          "Personalized Medicine: Treatments tailored to individual genetic profiles will become standard care.",
          "Synthetic Biology: Designing custom organisms for medicine production and environmental cleanup.",
          "Impact on Employment: New roles for AI specialists, bioinformatics experts, and biotech entrepreneurs. Required skills: Python, Machine Learning, Genomics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Read Scientific Blogs: Follow ScienceDaily or Nature News to see what's trending in genetics.",
          "Learn Python: It is the 'universal language' of genetic data analysis. Start with basic Python programming.",
          "Kitchen Science: Try extracting DNA from a strawberry at home (look up the tutorial online!).",
          "Volunteer: Try to get a tour of a local diagnostic lab or hospital genetics department.",
          "Focus on Biology & Chemistry: Master 'Genetics' and 'Molecular Biology' chapters in NCERT books.",
          "Coding: Learn basic coding with Python or R for data analysis.",
          "Science Projects: Conduct experiments on DNA extraction, genetic traits, or pedigree analysis.",
          "Online Courses: Take free courses on Coursera or edX about genetics and bioinformatics.",
          "Observation: Keep a lab journal. Document observations carefully and precisely."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in genetics.",
        color: BLUE2,
        content: [
          "M. S. Swaminathan: Known as the 'Father of the Green Revolution,' his work in plant genetics saved millions from hunger.",
          "E. K. Janaki Ammal: A pioneering botanist and cytologist who worked on sugarcane and eggplant genetics.",
          "V. L. Ramprasad: CEO of MedGenome; a leader in bringing modern genetic diagnostics to India.",
          "Anju Shukla: Head of Medical Genetics at KMC Manipal; a key figure in diagnosing rare genetic diseases in India.",
          "K. Thangaraj: A top scientist at CCMB Hyderabad, famous for studying the genetic history of Indian populations.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's medical research and genomics initiatives."
        ]
      }
    ]
  },
  microbiology: {
    slug: "microbiology",
    badge: "The Invisible Giants for Class 10+",
    heading: "Microbiology",
    subheading: "Imagine you are a detective, but your suspects aren't humans. They are tiny, invisible creatures called microbes—bacteria, viruses, fungi, and parasites. Become the scientist who studies these 'invisible giants' and solves the biggest mysteries of health, food security, and climate change.",
    whyCards: [
      { icon: "Microscope", title: "Disease Detectives", description: "Identify which bacteria or virus is making a patient sick and tell doctors which medicine will kill it.", borderColor: "#10B981" },
      { icon: "Shield", title: "Food Guardians", description: "Ensure the milk, bread, and chocolate you eat are free from harmful germs.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Green Engineers", description: "Use microbes to clean up oil spills or create bio-fertilizers that help farmers grow crops without chemicals.", borderColor: "#F59E0B" },
      { icon: "Syringe", title: "Vaccine Architects", description: "Design the formulas for vaccines that protect millions of people from deadly diseases.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹3.0L–₹5.5L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Microbial Techniques, Sterile Practice, Data Analysis, Python", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. (3 yrs) + M.Sc. (2 yrs) + Research/PhD", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "10.26% CAGR", label: "Market Growth to 2030", gradient: "from-green-500 to-green-600" },
      { value: "$318M", label: "India Microbiology Market by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The study of microscopic organisms and their impact on our world.",
        color: BLUE,
        content: [
          "Microbiology is the study of microscopic organisms. A professional in this field explores how these tiny life forms grow, interact, and affect our world.",
          "The Disease Detectives: They identify which bacteria or virus is making a patient sick and tell doctors which medicine will kill it.",
          "The Food Guardians: They ensure the milk, bread, and chocolate you eat are free from harmful germs.",
          "The Green Engineers: They use microbes to clean up oil spills in the ocean or create 'Bio-fertilizers' that help farmers grow crops without chemicals.",
          "The Vaccine Architects: They are the ones who design the formulas for vaccines that protect millions of people.",
          "Why it matters: India is the 'Pharmacy of the World' and one of the largest food producers. We need microbiologists to lead the fight against new diseases, ensure our exports are safe, and help our industries grow sustainably."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Micro-Explorer",
        icon: "Clock",
        description: "Real workflow of a microbiologist in research.",
        color: BLUE2,
        content: [
          "8:30 AM – The Lab Huddle: Your day begins at a high-tech lab in Hyderabad or Pune. You suit up—lab coat, gloves, and a mask are your 'armor.' You check your incubators—warm cabinets where your microbial samples have been growing overnight on colorful jelly-like plates called agar.",
          "10:30 AM – The Invisible Discovery: You sit at a high-powered microscope. You aren't just looking at dots; you are watching a 'battle' under the lens. You've added a new antibiotic to a sample of bacteria. You see a clear space around the medicine—the Zone of Inhibition. This means the medicine is working!",
          "1:30 PM – The Data Deep-Dive: After a quick lunch, you sit at your computer. Modern microbiology uses Bioinformatics. You are comparing the DNA of a new virus found in a local forest with a global database. You are looking for 'fingerprints' to see if it's a new threat.",
          "4:00 PM – The Factory Visit: In the late afternoon, you might visit a nearby dairy or pharmaceutical plant. You are checking the 'Bio-reactors'—giant steel tanks where beneficial bacteria are 'working' to ferment yogurt or produce insulin. You ensure the 'good guys' are happy and healthy.",
          "6:30 PM – The Review: Before heading home, you document your findings. In science, if it isn't recorded, it didn't happen. You leave the lab knowing that today, your work helped keep the invisible world in balance."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Microbiologist DNA.",
        color: BLUE,
        content: [
          "Personality Traits: Patience (Microbes grow at their own pace. You can't rush nature!), Meticulousness (A single tiny dust particle can ruin a week's work), Curiosity (Do you always ask 'Why did this happen?')",
          "Soft Skills: Observation (Noticing a tiny color change in a test tube), Collaboration (Working with doctors, engineers, and farmers), Communication (Explaining complex findings clearly).",
          "Hard Skills: Microscopy (Handling delicate lab equipment), Data Analysis (Understanding graphs and DNA sequences), Sterile Technique (Preventing contamination), Lab Safety (Following protocols 100%).",
          "Self-Assessment: Do I love Biology and Chemistry? Am I fascinated by invisible life? Do I enjoy working with precision instruments? Can I follow detailed protocols? If yes, you have the Microbiologist DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Scientific Workflow.",
        color: BLUE2,
        content: [
          "Sampling: Collecting water from a river, soil from a farm, or a swab from a patient.",
          "Culturing: Growing the microbes in a controlled lab environment on agar plates or in broth.",
          "Identification: Using chemicals, staining techniques, and computers to name the 'suspect.'",
          "Testing: Seeing how the microbe reacts to medicines, heat, or other chemicals (Antibiotic Sensitivity Testing).",
          "Reporting: Writing down the results so doctors, food companies, or environmental agencies can act on them.",
          "Documentation: Maintaining detailed lab records for quality assurance and regulatory compliance."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a microbiologist.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.Sc. in Microbiology (3 years)","Step 3: Complete M.Sc. in Microbiology (2 years)","Step 4: Gain research experience in microbiology laboratory","Step 5: Pursue Ph.D. or clear GATE/NET/ICMR exam","Step 6: Join as Microbiologist/Research Scientist/University Professor","Pathway B: Medical/Clinical Microbiology Route","Step 1: Complete Class 12th with PCB stream","Step 2: Pursue MBBS or B.Sc. in Medical Microbiology","Step 3: Complete MD/M.Sc. in Clinical Microbiology","Step 4: Learn diagnostic techniques like ELISA, culture sensitivity","Step 5: Complete internship in hospital/diagnostic laboratory","Step 6: Join as Clinical Microbiologist/Infection Control Officer/Pathologist","Pathway C: Skill-Based/Industry Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue diploma in Medical Lab Technology","Step 3: Get certified in food/water/environmental microbiology","Step 4: Learn quality control and sterility testing techniques","Step 5: Join pharma/food industry lab as lab technician","Step 6: Advance as QC Microbiologist/Senior Lab Analyst/Supervisor"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹1.5 Crore","Senior / Lead Role (10+ yrs): ₹25 – ₹45 LPA","Mid-Level Professional (5–8 yrs): ₹12 – ₹20 LPA","Junior / Associate (3–5 yrs): ₹6 – ₹11 LPA","Entry Level (0–2 yrs): ₹3.5 – ₹6 LPA","Salary Note: Metros pay 30% more. CSIR-NET/GATE exams boost pay.","Where Are the Jobs?","Top Cities: Bangalore, Hyderabad, Pune, Mumbai, Ahmedabad, Delhi-NCR.","Top Industries: Pharma R&D, Biotech, Food Processing, Diagnostics.","Global Demand: High in USA, Germany. Remote research roles rising.","Top Institutions","Government: All India Institute of Medical Sciences (AIIMS), Delhi, Jawaharlal Nehru University (JNU), Delhi, University of Delhi (South Campus), Maharaja Sayajirao University of Baroda","Private: Manipal Academy of Higher Education, Amity University, VIT University, Vellore, Jain University, Bangalore","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Microbiologist","Quality Control Microbiologist","Clinical Microbiology Analyst","Food Safety Microbiologist","New-age and AI driven","Molecular Diagnostics Specialist","Bioinformatics-Microbiology Analyst","Industrial Fermentation Analyst","AI-Enabled Pathogen Surveillance Analyst","Remote/entrepreneurship","Microbiology Consultant","Regulatory Compliance Consultant","Scientific Content Creator","Diagnostic Startup Founder"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Pharmaceuticals (Cipla, Biocon), Food & Beverage (Nestlé, Amul), Healthcare Diagnostics (Apollo, Metropolis), Agriculture, Biotech Companies.",
          "Top Cities: Bangalore, Hyderabad, Pune, Mumbai, and Ahmedabad.",
          "Remote Work: Limited for lab roles, but high in Scientific Writing, Bioinformatics, and Regulatory Affairs.",
          "International: High demand in the USA, Germany, and Ireland for Indian Ph.D. holders.",
          "Emerging Hubs: Pune (Biotech), Hyderabad (Pharma), Bangalore (Tech + Health), Delhi (Research Institutes)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹10,000–₹50,000 per year (Delhi University, BHU, Pune University). Total for 3 years: ₹30,000-1,50,000.",
          "Private Institutions: ₹1.5L–₹4.5L per year (Amity, VIT, LPU). Total for 3 years: ₹4.5L-13.5L.",
          "Living Costs: ₹15,000–₹25,000 per month in major metros (Hostel/Rent, Food, Transport).",
          "Additional Costs: Lab kits and certification exams (₹5,000–₹15,000), Research materials, Software training.",
          "Scholarships: INSPIRE Scholarship (₹80k/year), PM-USP (Central Sector Scheme), Prathibha Scholarship (Kerala), Biocon Rama Mazumdar Scholarship.",
          "ROI: Entry salary of ₹3L+ makes education investment recoverable in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Public: Indian Institute of Science (IISc), University of Delhi, Banaras Hindu University (BHU), Savitribai Phule Pune University, University of Calcutta.",
          "Private: Vellore Institute of Technology (VIT), Manipal Academy of Higher Education, Amity University, Lovely Professional University (LPU), Symbiosis (Pune).",
          "Online/Distance: IGNOU and Acharya Nagarjuna University for working professionals.",
          "Research Centers: National Institute of Virology (Pune), ICMR Labs, CSIR Institutes."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: INSPIRE Scholarship (₹80k/year for top board scorers), PM-USP (Central Sector Scheme), KVPY Fellowship.",
          "State: Prathibha Scholarship (Kerala) for science students, State-specific schemes in Maharashtra, West Bengal, Uttar Pradesh.",
          "Private: Biocon Rama Mazumdar Scholarship for biotech/microbiology students, Tata Trusts, Sitaram Jindal Foundation.",
          "Institutional: Many universities offer merit-based scholarships (₹15,000–₹30,000/year) and research assistantships.",
          "UGC NET/JRF: ₹31,000-35,000/month for PhD students pursuing research."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "AMI (Association of Microbiologists of India): The oldest and most prestigious professional body for microbiologists.",
          "ACMB (Association of Clinical Microbiologists and Biochemists): Focuses on clinical microbiology and diagnostics.",
          "Certifications: FSSAI Food Safety Auditor, Clinical Data Management, NABL Lab Manager, ISO 9001 Quality Management.",
          "Specialized Training: Advanced Microbiology Techniques, Antibiotic Resistance Testing, Bioinformatics for Microbiologists.",
          "Licensing: No mandatory license required. However, government positions require UPSC/State Civil Services clearance."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in microbiology careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Research Scientist, Clinical Microbiologist, Quality Control Officer, Lab Director, Medical College Lecturer.",
          "New-Age Careers: AI-Microbial Analyst, Probiotic Product Designer, Astrobiologist (studying life in space!), Bioinformatics Specialist.",
          "Entrepreneurship: Starting a Soil Health Testing Lab, Craft Brewery (fermentation business), Diagnostic Testing Center, Probiotic Product Company.",
          "Freelancing: Scientific Writer, Research Consultant, Online Course Creator, Lab Auditor.",
          "Interdisciplinary Roles: Microbiology + Data Science, Environmental Science, Food Technology, Pharmaceutical Development."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of microbiology careers.",
        color: BLUE,
        content: [
          "Safety Hazards: You work with real pathogens. Safety rules must be followed 100% of the time. Biosafety protocols are non-negotiable.",
          "Lab Fatigue: You may spend hours standing at a lab bench or looking into a screen. Physical and mental stamina required.",
          "Academic Road: To get the highest-paying research jobs, a Ph.D. is often required.",
          "Funding Challenges: Research projects depend on grants, which can be difficult to secure.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Limited Public Awareness: Microbiology is not mainstream. Explaining your job to relatives can be challenging."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in microbiology.",
        color: BLUE2,
        content: [
          "AI-Microbiology: AI will predict antibiotic resistance in seconds, helping save millions from 'Superbugs.'",
          "Personalized Probiotics: In 2030, you might get a drink made specifically for the microbes in your stomach.",
          "Microbiome Research: Studying how the microbes on our skin and in our gut control our mood and health.",
          "Space Microbiology: Understanding how microbes behave in zero gravity for future space missions.",
          "Synthetic Biology: Designing custom microbes to produce medicines, biofuels, and sustainable materials.",
          "Impact on Employment: New roles for AI specialists, bioinformatics experts, and biotech entrepreneurs. Required skills: Python, Machine Learning, Genomics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Join Science Clubs: Participate in Olympiads like the National Science Olympiad (NSO) and Science Fairs.",
          "Read Scientific Blogs: Follow sites like ScienceDaily or Nature News for microbiology breakthroughs.",
          "Kitchen Science: Try making curd (yogurt) or fermenting idli batter—that's real-world microbiology!",
          "Volunteer: Try to get a tour of a local diagnostic lab or hospital microbiology department.",
          "Learn Python: Data analysis is the future of microbiology. Start with basic Python programming.",
          "Focus on Biology & Chemistry: Master 'Microbiology' and 'Biochemistry' chapters in NCERT books.",
          "Observation Skills: Keep a lab journal. Document observations carefully and precisely.",
          "Coding: Learn basic coding with Python or R for data analysis.",
          "Science Projects: Conduct experiments on water quality, soil microbes, or food preservation."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in microbiology.",
        color: BLUE2,
        content: [
          "Dr. Sanghamitra Pati: A top scientist at ICMR who led India's fight against COVID-19 with advanced diagnostics and research.",
          "Mandayam J. Thirumalachar: A legendary microbiologist who co-discovered many life-saving antibiotics in India. Pioneer in antibiotic research.",
          "Dr. Manoj Murhekar: Director at the National Institute of Epidemiology, famous for tracking infectious disease outbreaks and epidemiological research.",
          "Kiran Mazumdar-Shaw: While a business leader, she started as a fermentation expert and built Biocon into a global biotech giant.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's medical research and vaccine development initiatives.",
          "Dr. Gagandeep Kang: Renowned virologist and vaccine researcher, contributing to India's vaccine development programs."
        ]
      }
    ]
  },
  clinical_research: {
    slug: "clinical_research",
    badge: "The Miracle Makers for Class 10+",
    heading: "Clinical Research",
    subheading: "Imagine a world where a mysterious fever spreads across a city, but within months, a small vial of clear liquid arrives that makes people immune. Become the 'intelligence officer' working behind the scenes to give doctors the best weapons possible against disease.",
    whyCards: [
      { icon: "Microscope", title: "Trial Designer", description: "Write the 'manual' (Protocol) for how a new drug should be tested.", borderColor: "#10B981" },
      { icon: "Shield", title: "Safety Guardian", description: "Monitor patients in a study to ensure they are not having bad side effects.", borderColor: "#3B82F6" },
      { icon: "BarChart3", title: "Data Detective", description: "Collect thousands of data points and analyze them to see if a treatment is a success.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Impact", description: "Help develop life-saving medicines that reach millions of people worldwide.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹3.5L–₹6.5L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "GCP, Pharmacology, Data Management, Ethics", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Pharm/MBBS + PG Diploma/M.Sc. (1-2 yrs)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "8.6% CAGR", label: "Market Growth to 2030", gradient: "from-green-500 to-green-600" },
      { value: "$3.37B", label: "India Clinical Trials Market by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Determining the safety and effectiveness of new medicines.",
        color: BLUE,
        content: [
          "Clinical Research is the branch of healthcare science that determines the safety and effectiveness of medications, devices, diagnostic products, and treatment regimens intended for human use.",
          "The Trial Designer: They write the 'manual' (Protocol) for how a new drug should be tested.",
          "The Safety Guardian: They monitor patients in a study to ensure they are not having bad side effects.",
          "The Data Detective: They collect thousands of data points—from blood pressure to heart rates—and analyze them to see if a treatment is a success.",
          "Why it matters: India is currently a global hub for clinical trials. With our diverse population and world-class doctors, global companies like Pfizer, Novartis, and Serum Institute of India rely on Indian clinical researchers to develop the next generation of life-saving miracles."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Protocol Pilot",
        icon: "Clock",
        description: "Real workflow of a clinical researcher.",
        color: BLUE2,
        content: [
          "8:00 AM – The Site Check: You arrive at a major hospital in Mumbai or Bangalore. Your role today is a Clinical Research Coordinator (CRC). First, you check the 'Investigational Product' (the new medicine being tested). It must be stored at an exact temperature. If it gets too warm, the whole experiment fails.",
          "10:30 AM – Meeting the Heroes: The 'heroes' are the volunteers. You meet a patient who has joined a trial for a new diabetes drug. You spend an hour explaining the 'Informed Consent' form. You aren't just giving them a paper to sign; you are ensuring they understand exactly what is happening to their body.",
          "1:30 PM – Data Entry & Verification: Lunch is a quick break before you sit with your laptop. You enter the morning's results into a global database. Accuracy is everything. A single typo could lead to a wrong conclusion about a drug's safety.",
          "4:00 PM – The Monitor's Visit: A Clinical Research Associate (CRA) from the pharmaceutical company arrives. They are here to 'audit' your work. You show them your files, the patient records, and the lab results. It's like a high-stakes school inspection, but for science.",
          "6:30 PM – The Global Sync: Before heading home, you have a video call with a team in Switzerland. You discuss the recruitment numbers for the day. You leave the hospital knowing that the data you collected today might help millions of people five years from now."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Clinical Core.",
        color: BLUE,
        content: [
          "Attention to Detail: Do you notice tiny errors that others miss?",
          "Ethical Integrity: Can you be trusted to do the right thing when no one is watching?",
          "Communication: Can you explain a 'Pharmacokinetic profile' to a worried patient in simple words?",
          "Patience: Trials can take 10 years. Are you okay with the 'long game'?",
          "Hard Skills: Knowledge of GCP (Good Clinical Practice), Pharmacology, and Medical Writing.",
          "Self-Assessment: Do I care about accuracy? Can I handle responsibility? Do I want to help people? If yes, you have the Clinical Core."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Drug Development Lifecycle.",
        color: BLUE2,
        content: [
          "Patient Recruitment: Finding the right people to join the study based on specific criteria.",
          "Monitoring: Regularly checking participants' health and recording vital signs.",
          "Data Management: Ensuring every piece of information is recorded correctly in the database.",
          "Reporting: Writing the final results for the government (CDSCO in India or FDA in the US).",
          "Compliance: Ensuring all work follows Good Clinical Practice (GCP) guidelines.",
          "Documentation: Maintaining detailed records for regulatory audits and inspections."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a clinical researcher.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.Sc. in Life Sciences/Pharmacy (3-4 years)","Step 3: Complete M.Sc. in Clinical Research (2 years)","Step 4: Learn ICH-GCP guidelines and regulatory affairs","Step 5: Complete internship in clinical research organization (CRO)","Step 6: Join as Clinical Research Associate/Clinical Project Manager","Pathway B: Pharmacy/Medical Route","Step 1: Complete Class 12th with PCB/PCM stream","Step 2: Pursue B.Pharm or MBBS degree (4-5 years)","Step 3: Get certified in Good Clinical Practice (GCP)","Step 4: Learn tools like Oracle, CTMS, EDC systems","Step 5: Gain experience in hospital/pharma clinical trials","Step 6: Join as Clinical Trial Manager/Medical Monitor/Drug Safety Officer","Pathway C: Certification/Skill-Based Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue any life sciences graduate degree","Step 3: Complete PG Diploma in Clinical Research","Step 4: Get certified through ACRP or SoCRA certification","Step 5: Join CRO as Clinical Data Coordinator/Trainee","Step 6: Advance as Senior CRA/Pharmacovigilance Associate"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO (15+ yrs): ₹50 LPA – ₹1.2 Crore","Senior (10+ yrs): ₹25 – ₹45 LPA","Mid-Level (5–8 yrs): ₹12 – ₹22 LPA","Junior (3–5 yrs): ₹6 – ₹11 LPA","Entry Level (0–2 yrs): ₹3.5 – ₹6 LPA","Salary Note: Metros pay 30% extra. GCP certification boosts pay.","Where Are the Jobs?","Top Cities: Mumbai, Bangalore, Hyderabad, Pune, Delhi.","Top Industries: CROs, Pharma, Healthcare, Biotech.","Global Demand: USA, UK. Remote monitoring is growing.","Top Institutions","Government: All India Institute of Medical Sciences (AIIMS), Delhi, Indian Council of Medical Research (ICMR), Postgraduate Institute of Medical Education & Research (PGIMER), Chandigarh, National Institute of Pharmaceutical Education & Research (NIPER)","Private: Manipal Academy of Higher Education, SRM Institute of Science and Technology, Jamia Hamdard University, Delhi, Symbiosis International University, Pune","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Clinical Research Associate","Clinical Trial Coordinator","Clinical Data Manager","Pharmacovigilance Associate","New-age and AI driven","Clinical Data Scientist","AI-Driven Trial Analyst","Digital Health Research Associate","Real-World Evidence Analyst","Remote/entrepreneurship","Remote Clinical Research Consultant","Medical Writer","Clinical Research Trainer","CRO Startup Founder"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Contract Research Organizations (CROs) like IQVIA or Parexel, Pharma giants like Sun Pharma or Cipla, Multi-specialty Hospitals.",
          "Top Cities: Bangalore, Hyderabad, Mumbai, Chennai, and Delhi-NCR.",
          "Remote Potential: High in Pharmacovigilance (Drug Safety) and Medical Writing.",
          "International: Indian experience is highly valued in the USA, Germany, and Australia.",
          "Emerging Hubs: Bangalore (Biotech Capital), Hyderabad (Pharma Hub), Pune (Research Center), Delhi-NCR (Regulatory Hub)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government (AIIMS/NIPER): ₹15,000–₹1.5L total. Very affordable for quality education.",
          "Private (ICRI/Cliniminds): ₹1.5L–₹4L total. Higher cost but strong industry connections.",
          "Duration: 1 year (PG Diploma) to 2 years (Masters) after graduation.",
          "Living Costs: ₹15,000–₹25,000 per month in major hubs (Hostel/Rent, Food, Transport).",
          "Certifications: ICH-GCP Certification (₹5,000–₹15,000), CCRC Exam (₹10,000–₹20,000).",
          "ROI: Entry salary of ₹3.5L+ makes education investment recoverable in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government/Elite: AIIMS Delhi, NIPER (Mohali/Hyderabad), TISS Mumbai, IIT Kharagpur-Medical.",
          "Private: ICRI (Multiple Cities), Cliniminds, Amity University, JSS Mysore, Manipal Academy.",
          "Online: upGrad, Coursera (Johns Hopkins), IGMPI, Swayam.",
          "Regional Diversity: North (AIIMS), South (JSS/NIPER), West (TISS/ICRI), East (IIT Kharagpur)."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: National Fellowship for Higher Education of ST/SC Students (M.Phil/PhD), INSPIRE Scholarship.",
          "State: Various state-level 'Merit-cum-Means' scholarships for science students.",
          "Institutional: NIPER and AIIMS offer stipends of ₹12,000–₹31,000/month for PG/Research students.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "CDSCO (Central Drugs Standard Control Organisation): The Indian regulator. Understanding their guidelines is essential.",
          "Certifications: ICH-GCP Certification (Mandatory for most roles), CCRC (Certified Clinical Research Coordinator).",
          "Memberships: ISCR (Indian Society for Clinical Research), ACRP (Association of Clinical Research Professionals).",
          "Specialized Training: Advanced Clinical Trial Management, Pharmacovigilance, Medical Writing, Regulatory Affairs.",
          "International: ACRP and SOCRA certifications for global recognition."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in clinical research careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Clinical Research Associate (CRA), Coordinator (CRC), Data Manager, Site Manager, Regulatory Officer.",
          "New-Age Careers: AI Clinical Trial Analyst, Remote Site Monitor, Decentralized Trial Specialist, Digital Health Researcher.",
          "Entrepreneurship: Starting a Site Management Organization (SMO), Medical Writing agency, Clinical Consulting firm.",
          "Freelancing: Medical Writer, Clinical Consultant, Regulatory Advisor, Trial Monitor.",
          "Interdisciplinary Roles: Clinical Research + Data Science, Clinical Research + AI, Clinical Research + Public Health."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of clinical research careers.",
        color: BLUE,
        content: [
          "Zero Error Margin: A single mistake in a lab report can disqualify a multi-million dollar study.",
          "Travel Stress: CRAs often travel 3–4 days a week to visit different hospital sites.",
          "Ethics vs. Speed: The pressure to finish a trial can sometimes clash with strict ethical rules. You must be the 'voice of the patient.'",
          "Regulatory Complexity: Keeping up with changing regulations from CDSCO, FDA, and EMA is challenging.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Emotional Weight: Dealing with patient side effects or trial failures can be emotionally taxing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in clinical research.",
        color: BLUE2,
        content: [
          "AI-Driven Trials: AI will predict which patients are most likely to respond to a drug, making trials shorter and cheaper.",
          "Wearable Tech: Instead of going to a hospital, patients will use 'Smart Patches' that send heart rate data directly to the researcher's computer.",
          "Personalized Trials: Testing drugs on 'Digital Twins' (computer models of patients) before ever touching a human.",
          "Decentralized Trials: Patients participate from home using telemedicine instead of visiting hospital sites.",
          "Real-World Evidence: Using data from electronic health records and patient registries to supplement traditional trials.",
          "Impact on Employment: New roles for AI specialists, data scientists, and digital health experts. Required skills: Python, Machine Learning, Data Analytics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Master Statistics: Clinical research is all about 'Probability' and 'Significance.' Learn statistics thoroughly.",
          "Scientific Reading: Start reading science blogs like ScienceDaily or The Lancet (it's tough, but try!).",
          "Communication: Join a debate or drama club. You'll need confidence to talk to doctors and patients.",
          "Ethics Awareness: Read about the history of science and why rules exist to protect human subjects.",
          "Focus on Biology & Chemistry: Master 'Pharmacology' and 'Biochemistry' chapters in NCERT books.",
          "Coding: Learn basic Python for data analysis.",
          "Observation: Keep a lab journal. Document observations carefully and precisely.",
          "Volunteering: Visit local hospitals or research centers to understand the real-world environment.",
          "Online Courses: Take free courses on Coursera or edX about clinical research and bioethics."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in clinical research.",
        color: BLUE2,
        content: [
          "Dr. Rajiv Bahl: Director General of ICMR; a leader in maternal and child health research.",
          "Dr. Soumya Swaminathan: Former Chief Scientist at WHO; her work in tuberculosis and HIV clinical research is world-renowned.",
          "Dr. Krishna Ella: Founder of Bharat Biotech; the man behind Covaxin, India's indigenous COVID-19 vaccine.",
          "Kiran Mazumdar-Shaw: While a business leader, she has been a pioneer in bringing world-class clinical research to India through Biocon.",
          "Dr. Roli Mathur: Head of the ICMR Bioethics unit; she writes the rules that protect every patient in an Indian clinical trial.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's clinical research and vaccine development initiatives."
        ]
      }
    ]
  },
  fishery_biologist: {
    slug: "fishery_biologist",
    badge: "The Blue Guardian for Class 10+",
    heading: "Fishery Biologist",
    subheading: "Imagine you are standing on a quiet pier at 5:00 AM. Below the surface, an entire world is waking up—billions of creatures that feed nations, support economies, and keep our planet healthy. Become the detective, doctor, and engineer for this underwater world.",
    whyCards: [
      { icon: "Fish", title: "Health Inspector", description: "Study fish health and water quality to prevent diseases in both wild and farmed fish.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "Population Detective", description: "Track fish populations to prevent overfishing and ensure sustainable supply for future generations.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Farm Architect", description: "Design high-tech aquaculture systems where fish can be raised in controlled, healthy environments.", borderColor: "#F59E0B" },
      { icon: "Leaf", title: "Conservationist", description: "Protect endangered species like Olive Ridley turtles and the Gangetic Dolphin.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹4.5L–₹8.4L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Aquatic Ecology, Data Analysis, GIS, Scuba Diving", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.F.Sc. (4 yrs) + M.F.Sc. (2 yrs) + PhD/Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "10% CAGR", label: "Sector Growth Annually", gradient: "from-green-500 to-green-600" },
      { value: "$15B", label: "Export Market Target by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The scientific study of fish populations and aquatic ecosystems.",
        color: BLUE,
        content: [
          "Fishery Biology is the scientific study of fish populations, their habitats, and the ecosystems they live in. It isn't just about 'counting fish'; it's about managing one of India's most vital natural resources.",
          "The Health Inspector: They study fish health and water quality to prevent diseases in both wild and farmed fish.",
          "The Population Detective: They track how many fish are in a river or sea to prevent 'overfishing,' ensuring there are enough fish for future generations.",
          "The Farm Architect: They design high-tech aquaculture systems (fish farms) where fish can be raised in controlled, healthy environments.",
          "The Conservationist: They protect endangered species like the Olive Ridley turtles or the Gangetic Dolphin.",
          "Why it matters: With climate change warming our oceans and a growing population needing protein, Fishery Biologists are the ones ensuring that our 'Blue Food' supply remains safe and plentiful."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Tide Tracker",
        icon: "Clock",
        description: "Real workflow of a fishery biologist in research.",
        color: BLUE2,
        content: [
          "05:30 AM – Into the Deep: Your day begins while the rest of the world is sleeping. You board a research vessel at a port like Visakhapatnam or Kochi. Today, you are surveying a coral reef. You gear up in your wetsuit and dive under the waves with a waterproof tablet to record the species you see.",
          "10:00 AM – The Lab Labours: Back on land, you head to the lab at a research institute like CMFRI (Central Marine Fisheries Research Institute). You analyze water samples for oxygen levels and microplastics. You look through a microscope at fish eggs to see if the breeding season is starting early due to a warmer summer.",
          "02:00 PM – The Data Huddle: You spend the afternoon at your computer. You use GIS (Geographic Information Systems) and AI tools to create a map of fish migration. This data will help the government decide where to create 'No-Fishing Zones' for the next three months.",
          "04:30 PM – Community Connect: You drive down to a local fishing village. You meet with the community leaders to explain a new sustainable net design that lets small, baby fish escape while catching the mature ones. You are a scientist, but today, you are also a teacher and a partner.",
          "07:00 PM – Sunset Reflection: As the sun sets, you finish your reports. You've balanced hard data with real-world impact. You head home, knowing you are helping both the ocean and the people who depend on it."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Fishery DNA.",
        color: BLUE,
        content: [
          "Personality Traits: Curiosity (A deep desire to explore the unknown), Resilience (Ability to work in rainy weather, on rocking boats, or in remote coastal areas), Patience (Scientific research takes time; you must be okay with waiting for results).",
          "Soft Skills: Observation (Noticing tiny changes in fish behavior or water color), Communication (Explaining complex science to local fishermen in simple language), Leadership (Guiding communities toward sustainable practices).",
          "Hard Skills: Biology & Chemistry (Strong foundations in life sciences), Tech-Agility (Comfort with drones, underwater cameras, and data analysis software), Swimming & Diving (Essential for field work).",
          "Self-Assessment: Do I love the ocean and aquatic life? Can I work in challenging field conditions? Do I care about sustainability? If yes, you have the Fishery DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Research, Management, and Conservation Cycle.",
        color: BLUE2,
        content: [
          "Field Collection: Gathering samples from rivers, lakes, or oceans using nets, traps, and underwater cameras.",
          "Lab Analysis: Testing for DNA, toxins, growth rates, and disease markers in fish samples.",
          "Data Modeling: Using computers to predict future fish numbers and population trends.",
          "Reporting: Advising the government on fishing laws, environmental safety, and conservation strategies.",
          "Community Engagement: Working with local fishermen to implement sustainable practices.",
          "Documentation: Maintaining detailed records for regulatory compliance and research publication."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a fishery biologist.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.F.Sc. in Fisheries Science (4 years)","Step 3: Complete M.F.Sc. in Fishery Biology (2 years)","Step 4: Gain fieldwork experience in fisheries research station","Step 5: Pursue Ph.D. or clear ICAR-NET/ARS exam","Step 6: Join as Fishery Scientist/Professor/Research Officer","Pathway B: Applied/Industry Route","Step 1: Complete Class 12th with PCB stream","Step 2: Pursue B.Sc. in Zoology/Aquaculture (3 years)","Step 3: Complete M.Sc. in Marine Biology/Aquaculture","Step 4: Learn fish taxonomy, water quality testing techniques","Step 5: Complete internship in CIFRI/CMFRI/state fisheries department","Step 6: Join as Aquaculture Manager/Fisheries Development Officer","Pathway C: Skill-Based/Diploma Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue diploma in Fisheries Technology/Aquaculture","Step 3: Get trained in hatchery management practically","Step 4: Join fish farm or hatchery as technician","Step 5: Gain experience and pursue part-time B.F.Sc.","Step 6: Advance as Senior Fisheries Technologist/Farm Supervisor"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹45 LPA – ₹1.2 Crore","Senior / Lead Role (10+ yrs): ₹18 – ₹35 LPA","Mid-Level Professional (5–8 yrs): ₹9 – ₹16 LPA","Junior / Associate (3–5 yrs): ₹5 – ₹9 LPA","Entry Level (0–2 yrs): ₹3 – ₹6 LPA","Note: Coastal regions pay 30% extra. ICAR-NET/ARS impact high.","Where Are the Jobs?","Top Cities: Kochi, Vizag, Chennai, Mumbai, Kolkata, Bhubaneswar.","Top Industries: Aquaculture, Seafood Export, Feed Mills, Research Institutes.","Global Demand: High in Norway, Canada. Remote data analysis growing.","Top Institutions","Government: Central Institute of Fisheries Education (CIFE), Mumbai, Central Marine Fisheries Research Institute (CMFRI), Kochi, Central Inland Fisheries Research Institute (CIFRI), Kolkata, College of Fisheries, Mangalore (KVAFSU)","Private: Amity University, Lovely Professional University, Sharda University, NIMS University, Jaipur","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Fishery Biologist","Aquatic Research Officer","Hatchery Biologist","Marine Resource Scientist","New-age and AI driven","Aquaculture Data Analyst","GIS-Based Fisheries Analyst","Marine Conservation Technologist","AI-Enabled Stock Assessment Analyst","Remote/entrepreneurship","Fisheries Consultant","Aquaculture Startup Founder","Scientific Content Creator","Online Fisheries Trainer","The future: Sustainability, marine conservation, and resource management = a high-growth future in fishery biology."]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Government (Fisheries Dept, ICAR), Hatcheries, Seafood Export (MPEDA), Aquarium Trade, NGOs (WWF, Nature Conservation Foundation).",
          "Top Cities: Kochi, Mumbai, Visakhapatnam, Chennai, and Kolkata.",
          "Gig Economy: High potential for Aquaculture Consultants and Ecological Surveyors.",
          "International: Huge demand in Norway, Australia, and Vietnam for Indian experts in tropical aquaculture.",
          "Emerging Hubs: Kochi (Fisheries Hub), Visakhapatnam (Marine Research), Chennai (Aquaculture), Kolkata (Inland Fisheries)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹20,000–₹1.5L total (Subsidized). CIFE Mumbai, KUFOS Kochi, College of Fisheries Mangalore.",
          "Private Institutions: ₹4L–₹10L total. SAGE University Bhopal, Centurion University Odisha.",
          "Duration: 4 years (B.F.Sc.) + 2 years (M.F.Sc.) + Optional PhD.",
          "Living Costs: ₹15,000–₹25,000 per month in major hubs like Kochi or Mumbai.",
          "Additional Costs: SCUBA certification (optional but valuable) costs ₹30,000–₹50,000. Diving equipment, research tools.",
          "ROI: Entry salary of ₹4.5L+ makes education investment recoverable in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Public: CIFE Mumbai, KUFOS Kochi, College of Fisheries Mangalore, WB University of Animal & Fishery Sciences Kolkata.",
          "Regional Diversity: North (G.B. Pant University, Uttarakhand), South (KUFOS Kerala), West (Veraval College, Gujarat), East (COF Agartala).",
          "Private: SAGE University Bhopal, Centurion University Odisha.",
          "Research Centers: CMFRI Kochi, ICAR-CIFE Mumbai, Central Inland Fisheries Research Institute Barrackpore."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: ICAR JRF/SRF (₹12k–₹31k/month), National Overseas Scholarship for international studies.",
          "State: Post-Matric Scholarships for SC/ST/OBC students across all states.",
          "Institutional: Most Agricultural Universities offer monthly stipends of ₹2,000–₹5,000 for B.F.Sc. students.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "MBAI: Marine Biological Association of India. Premier professional body for marine scientists.",
          "Certifications: Aquaculture Farm Manager, HACCP (Food Safety), PADI Scuba Diving, GIS Specialist.",
          "Specialized Training: Advanced Aquaculture Techniques, Fish Genetics, Sustainable Fisheries Management.",
          "International: IUCN (International Union for Conservation of Nature) certifications for conservation work.",
          "Continuing Education: Regular workshops and seminars to stay updated with latest research."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in fishery biology careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Fisheries Officer, Researcher, Lecturer, Hatchery Manager, Farm Supervisor.",
          "New-Age Careers: AI-Aquaculture Specialist, Marine Forensic Expert, Blue Carbon Analyst, Sustainable Seafood Consultant.",
          "Entrepreneurship: Starting an Ornamental Fish Hatchery, Sustainable Seafood Brand, Aquaculture Consultancy.",
          "Freelancing: Scientific Writer, Environmental Consultant, Aquaculture Advisor, Research Analyst.",
          "Interdisciplinary Roles: Fisheries + Climate Science, Fisheries + Data Science, Fisheries + Policy."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of fishery biology careers.",
        color: BLUE,
        content: [
          "Physical Strain: Long hours on water and dealing with strong smells is not for everyone.",
          "Irregular Hours: Fish don't follow a 9-to-5 schedule; you may work early mornings or late nights during breeding seasons.",
          "Environmental Stakes: Watching ecosystems struggle with pollution can be emotionally taxing.",
          "Weather Dependency: Field work is heavily dependent on weather conditions.",
          "Limited Urban Opportunities: Most jobs are in coastal or remote areas.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in fishery biology.",
        color: BLUE2,
        content: [
          "Smart Aquaculture: Using IoT sensors and drones to feed fish automatically and monitor water from a smartphone.",
          "Lab-Grown Seafood: Scientists are starting to grow fish fillets in labs using 'Cell-Culture' technology.",
          "Climate-Resilient Breeding: Engineering fish that can survive in saltier or warmer waters.",
          "Blockchain Traceability: Tracking seafood from farm to table using blockchain technology.",
          "Microplastics Research: Studying and mitigating microplastics in aquatic ecosystems.",
          "Impact on Employment: New roles for AI specialists, data scientists, and sustainability experts. Required skills: Python, IoT, Sustainability."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Start a Mini-Aquarium: Learn about water pH and fish behavior first-hand.",
          "Master Biology & Stats: Data is the new fuel for biology; learn how to read graphs and analyze data.",
          "Learn Swimming: It's a literal life-saver and a vital career skill. Get certified if possible.",
          "Volunteer: Visit a local fish market or a river clean-up drive. Understand the real-world impact.",
          "Focus on Chemistry: Water quality testing requires strong chemistry knowledge.",
          "Learn GIS Basics: Geographic Information Systems are crucial for modern fisheries management.",
          "Read Scientific Blogs: Follow ScienceDaily or Nature News for fisheries breakthroughs.",
          "Coding: Learn basic Python for data analysis.",
          "Observation: Keep a field journal. Document observations about local water bodies and aquatic life."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in fishery biology.",
        color: BLUE2,
        content: [
          "Dr. Modadugu Vijay Gupta: Known as the 'Blue Revolution' pioneer. He won the World Food Prize for developing low-cost fish farming for the poor.",
          "Dr. S. Ayyappan: Former Director-General of ICAR, who revolutionized fisheries research and education in India.",
          "Dr. J.K. Jena: A leading scientist in fish genetics and aquaculture who has authored over 200 research papers.",
          "Dr. G. Syda Rao: Former Director of CMFRI, known for his breakthrough work in open-sea cage farming.",
          "Dr. Dilip Kumar: Pioneer in inland fisheries and aquaculture development in India.",
          "Dr. Shyam Salim: Leading researcher in marine conservation and sustainable fisheries management."
        ]
      }
    ]
  },
  physiology: {
    slug: "physiology",
    badge: "The Architect of Life for Class 10+",
    heading: "Physiology",
    subheading: "Imagine you are given the world's most advanced supercomputer. It's faster than any AI, can heal itself, and runs 24/7 for nearly a century. This supercomputer is you—the human body. Become the expert who understands every wire, every chemical signal, and every beat of its heart.",
    whyCards: [
      { icon: "FlaskConical", title: "Body's Detective", description: "Investigate how the body responds to stress, exercise, high altitudes, and deep-sea diving.", borderColor: "#10B981" },
      { icon: "Zap", title: "Health Innovator", description: "Work with doctors to understand how new medicines affect blood pressure, brain waves, and organ function.", borderColor: "#3B82F6" },
      { icon: "TrendingUp", title: "Sports Performance Expert", description: "Help Indian athletes optimize breathing, muscle recovery, and peak performance for the Olympics.", borderColor: "#F59E0B" },
      { icon: "Rocket", title: "Space Scientist", description: "Help ISRO understand how Indian astronauts (Gaganyatris) will survive in zero gravity.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹4.5L–₹7.5L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Biology, Chemistry, Physics, Data Analysis, Python", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. (3 yrs) + M.Sc./MD (2-3 yrs) + Research/PhD", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "12% CAGR", label: "Job Growth in Exercise Physiology", gradient: "from-green-500 to-green-600" },
      { value: "2x by 2030", label: "Demand Growth in Fitness & Tech", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The science of how living systems work.",
        color: BLUE,
        content: [
          "Physiology is the study of how living systems work. While an anatomist looks at the 'parts' (like the heart or lungs), a physiologist asks, 'How does it work?' and 'Why does it react this way?'",
          "The Body's Detective: They investigate how the body responds to stress, exercise, high altitudes (like the Himalayas), or deep-sea diving.",
          "The Health Innovator: They work with doctors to understand how a new medicine affects a patient's blood pressure or brain waves.",
          "The Sports Performance Expert: They help Indian athletes in the Olympics optimize their breathing and muscle recovery.",
          "The Space Scientist: They help ISRO understand how Indian astronauts (Gaganyatris) will survive in zero gravity.",
          "Why it matters: India is facing a 'lifestyle disease' epidemic (diabetes, hypertension). Physiologists are the ones discovering how to prevent these through better understanding of our body's internal balance (Homeostasis)."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Lab Explorer",
        icon: "Clock",
        description: "Real workflow of a physiologist in research.",
        color: BLUE2,
        content: [
          "9:00 AM – The Base Check: You arrive at a premier research lab in Bangalore or a Medical College in Delhi. Your first task is to check the data from an overnight 'Stress Test' conducted on a volunteer. You are looking at how their heart rate and cortisol levels (the stress hormone) changed during deep sleep.",
          "11:30 AM – The High-Tech Simulation: You head to the 'Human Performance Lab.' Today, you're testing a new 'Smart Wearable' device. You hook up a marathon runner to a metabolic cart. As they run on a specialized treadmill, you watch real-time graphs of their oxygen consumption (VO₂ max).",
          "1:30 PM – The Academic Huddle: Lunch is spent with fellow researchers and medical students. You discuss a paper about how 'Intermittent Fasting' affects the body's insulin sensitivity. You aren't just eating; you're analyzing the fuel!",
          "4:00 PM – Microscopy and Data: The afternoon is for the 'Micro-world.' You examine muscle tissue under a microscope to see how it repairs itself after a high-intensity workout. You use specialized software to model how these cells communicate.",
          "6:30 PM – Writing the Future: Before heading home, you document your findings. These results might become a new health guideline for millions of Indians. You leave the lab tired but inspired, knowing you are decoding the secrets of life itself."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Traits & Skills)",
        icon: "User",
        description: "Check if you have the Physiologist DNA.",
        color: BLUE,
        content: [
          "The 'Why' Person: You aren't satisfied with knowing what happened; you want to know the mechanism behind it.",
          "Detail-Oriented: You notice the small 'blip' on a heart monitor that others might miss.",
          "Analytical Mind: You love puzzles—especially the ones where the pieces are chemical signals and electrical pulses.",
          "Patience: Science is a marathon. Some experiments take weeks to show results.",
          "Self-Assessment Checklist: Do I love Biology but also enjoy Chemistry and Physics? Am I fascinated by how my body feels when I run fast or get nervous? Do I enjoy working with technology and data?"
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Observation-Analysis Cycle.",
        color: BLUE2,
        content: [
          "Observation: Monitoring a biological function (e.g., breathing).",
          "Experimentation: Introducing a variable (e.g., high altitude or a specific food).",
          "Measurement: Using high-tech sensors to collect data.",
          "Inference: Drawing conclusions about how the body adapted.",
          "Documentation: Recording findings for publication and further research.",
          "Collaboration: Working with medical teams, researchers, and athletes to apply findings."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a physiologist.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.Sc. in Physiology/Human Biology (3 years)","Step 3: Complete M.Sc. in Physiology (2 years)","Step 4: Gain research experience in physiology laboratory","Step 5: Pursue Ph.D. or clear GATE/NET/ICMR exam","Step 6: Join as Physiologist/Research Scientist/University Professor","Pathway B: Medical/Clinical Physiology Route","Step 1: Complete Class 12th with PCB stream","Step 2: Pursue MBBS or B.Sc. in Medical Physiology","Step 3: Complete MD/M.Sc. in Clinical Physiology","Step 4: Learn cardiac, respiratory, neurophysiology diagnostic techniques","Step 5: Complete clinical training in hospital/medical institute","Step 6: Join as Clinical Physiologist/Medical Researcher/Hospital Consultant","Pathway C: Skill-Based/Applied Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue B.Sc. in any life sciences discipline","Step 3: Complete diploma/certification in exercise/sports physiology","Step 4: Learn tools like spirometry, ECG, EMG practically","Step 5: Join sports academy/rehabilitation centre as trainee","Step 6: Advance as Exercise Physiologist/Sports Scientist/Wellness Consultant"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1.2 Crore","Senior / Lead Role (10+ yrs): ₹20 – ₹38 LPA","Mid-Level Professional (5–8 yrs): ₹10 – ₹18 LPA","Junior / Associate (3–5 yrs): ₹6 – ₹10 LPA","Entry Level (0–2 yrs): ₹3.5 – ₹6 LPA","Note: Metros pay 30% more. MD/PhD degrees boost pay.","Where Are the Jobs?","Top Cities: Bangalore, Hyderabad, Delhi, Mumbai, Chennai, Pune.","Top Industries: Medical Academics, Pharma, Sports Science, Wellness.","Global Demand: USA, UAE. Remote health coaching is rising.","Top Institutions","Government: All India Institute of Medical Sciences (AIIMS), Delhi, University of Calcutta, Kolkata, Banaras Hindu University (BHU), University of Madras, Chennai","Private: Manipal Academy of Higher Education, Kasturba Medical College, Mangalore, Amity University, Sri Ramachandra Institute of Higher Education, Chennai","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Physiologist","Clinical Physiologist","Research Associate","Physiology Faculty","New-age and AI driven","Exercise Physiologist","Neurophysiology Analyst","Digital Health Research Analyst","AI-Based Health Data Analyst","Remote/entrepreneurship","Online Physiology Trainer","Medical Content Creator","Health Research Consultant","Wellness Startup Founder"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Medical Colleges, Pharmaceutical Companies (R&D), Sports Authorities (SAI), Hospitals (Diagnostic Labs), Space Research (ISRO), Biotech Companies.",
          "Top Cities: Bangalore, Delhi, Hyderabad, Pune, and Chennai.",
          "Remote Work: While lab work is on-site, Data Analysis and Scientific Writing offer excellent remote/freelance potential.",
          "Emerging Hubs: Pune (Biotech), Hyderabad (Pharma), Bangalore (Tech + Health), Delhi (Research Institutes)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹5,000–₹50,000 per year (Subsidized). AIIMS, JIPMER, Central Universities.",
          "Private Institutions: ₹1.5L–₹4.5L per year. Kasturba Medical College, St. John's Medical College.",
          "Living Costs: ₹15,000–₹25,000 per month in major cities (Hostel/Rent, Food, Transport).",
          "Additional Costs: Lab equipment (stethoscopes, kits), specialized software training, research materials.",
          "Scholarships: INSPIRE Scholarship (DST), KVPY Fellowship, UGC NET/JRF (₹31,000-35,000/month for PhD).",
          "ROI: Entry salary of ₹4.5L+ makes education investment recoverable in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: AIIMS (New Delhi, Rishikesh), JIPMER (Puducherry), University of Calcutta, King George's Medical University (Lucknow), IPGMER Kolkata.",
          "Private: Kasturba Medical College (Manipal), St. John's Medical College (Bangalore), Amity University, Symbiosis (Pune).",
          "Regional: North: AIIMS Delhi; South: JIPMER; East: IPGMER Kolkata; West: BJ Medical College Pune.",
          "Research Centers: National Institute of Immunology (Delhi), Institute of Genomics and Integrative Biology (Delhi), CSIR Labs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "INSPIRE Scholarship (DST): For top 1% of Class 12 board students pursuing Basic Sciences. ₹80,000/year.",
          "KVPY (Kishore Vaigyanik Protsahan Yojana): Fellowship for students interested in research. ₹5,000-7,000/month.",
          "UGC NET/JRF Fellowship: ₹31,000-35,000/month for PhD students.",
          "Institutional Scholarships: Many medical colleges offer stipends of ₹15,000–₹30,000 for Master's/Ph.D. students.",
          "State Government Schemes: Maharashtra, West Bengal, Uttar Pradesh, and Gujarat offer various scholarship schemes.",
          "Private/Corporate: Sitaram Jindal Foundation, Tata Trusts, Dr. Ambedkar Central Sector Scheme."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "FIPS (Federation of Indian Physiological Societies): The apex body for Indian physiologists.",
          "ASSOPI (Association of Physiologists of India): Focuses on promotive and preventive physiology.",
          "Certifications: ACSM (Exercise Physiologist), CSIR-NET (for Lectureship), Advanced Research Methodology.",
          "Specialized Training: Archival Management, Wearable Technology, AI in Physiology, Sleep Medicine.",
          "Licensing: No mandatory license required. However, government positions require UPSC/State Civil Services clearance."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in physiology careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: University Professor, Clinical Researcher, Lab Director, Medical College Lecturer, Hospital Physiologist.",
          "New-Age Careers: Sleep Physiologist, Aviation/Space Physiologist, Health-Tech Consultant (Designing apps like Fitbit/Apple Health), Wearable Technology Specialist.",
          "Emerging Roles: AI-Assisted Physiological Analysis, Personalized Medicine Specialist, Telemedicine Physiologist.",
          "Entrepreneurship: Starting a Performance Testing Center for pro-athletes, Wellness Consultancy, Health-Tech Startup.",
          "Freelancing: Sports Performance Consultant (₹50,000-2,00,000/month), Research Writer, Online Course Creator."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of physiology careers.",
        color: BLUE,
        content: [
          "Academic Length: It takes time to become an expert (usually a Master's or Ph.D. is required).",
          "Competition: High-end research roles in institutions like AIIMS are very competitive.",
          "Lab-Bound: Early career often involves long hours in windowless labs.",
          "Funding Challenges: Research projects depend on grants, which can be difficult to secure.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Limited Public Awareness: Physiology is not mainstream. Explaining your job to relatives can be challenging."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in physiology.",
        color: BLUE2,
        content: [
          "AI Integration: AI will predict organ failure before it happens, based on physiological data.",
          "Wearable Revolution: Every Indian will soon wear a physiological monitor; we need experts to interpret that data.",
          "Geron-Physiology: As India's population ages, experts in 'Elderly Physiology' will be in massive demand.",
          "Space Physiology: With India's space ambitions, space physiology will be a booming field.",
          "Personalized Medicine: Devices tailored to individual patient genetics and physiology.",
          "Impact on Employment: New roles for data analysts, AI specialists, and health-tech consultants. Required skills: Python, Machine Learning, Data Visualization."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Learn Python: Data analysis is the future of physiology. Start with basic Python programming.",
          "Volunteer: Try to shadow a technician in a local hospital's 'TMT' (Treadmill Test) or 'ECG' lab.",
          "Read: Follow ScienceDaily (Physiology section) and research papers on human performance.",
          "Observation: Keep a 'Body Journal'—track your own heart rate or sleep patterns for a week.",
          "Science Fairs: Participate in science olympiads and research projects on human physiology.",
          "Focus on Biology: Master 'Human Physiology' chapters in NCERT books. Build strong foundation.",
          "Chemistry & Physics: Strong grip on Chemistry (biochemistry) and Physics (biophysics).",
          "Coding: Learn basic coding with Python or R for data analysis.",
          "Fitness Tracking: Use wearables to understand your own physiology. Analyze the data."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in physiology.",
        color: BLUE2,
        content: [
          "Jagdish Chandra Bose: The pioneer who proved plants have feelings and a circulatory system. Founder of experimental physiology in India.",
          "Mandayam Osuri Parthasarathy (M.O.P.) Iyengar: While an algologist, his work on cell physiology laid the foundation for Indian phycology.",
          "Dr. S.B. Deshpande: A modern giant in Neurophysiology, known for his work on snake venoms and their effect on the body.",
          "Dr. Padma Srivastava: Leading researcher in cardiovascular physiology and women's health.",
          "Dr. Atul Patel: Pioneer in exercise physiology and sports science in India.",
          "Dr. Rajesh Parikh: Renowned cardiologist and physiologist contributing to preventive health in India."
        ]
      }
    ]
  },
  // Slug aliases for routing compatibility
  bio_informatics: buildData(
    'bioinformatics',
    'Bioinformatics',
    'Decode biological data using algorithms, software, and genomic analysis workflows.',
    'Python, R, Statistics, Genomics, SQL',
    'Demand is rising as hospitals and biotech companies use genomic and molecular datasets at scale.'
  ),
  bio_technology: {
    slug: "biotechnology",
    badge: "The Future Architects for Class 10+",
    heading: "Biotechnology Research",
    subheading: "Imagine a world where plastic is made from corn, fuel is made from algae, and a single injection can edit a faulty gene to cure a lifelong disease. Become the architect of life itself and shape India's $300 billion bioeconomy by 2030.",
    whyCards: [
      { icon: "Dna", title: "Microscopic Engineer", description: "Tweak genetic code of microbes to eat oil spills or produce life-saving insulin.", borderColor: "#10B981" },
      { icon: "Leaf", title: "Crop Innovator", description: "Develop seeds that grow in salty soil or survive long droughts, ensuring food security.", borderColor: "#3B82F6" },
      { icon: "Syringe", title: "Vaccine Architect", description: "Study how viruses behave to design shields that protect millions of people.", borderColor: "#F59E0B" },
      { icon: "Zap", title: "Life Architect", description: "Move beyond using technology to inventing it—shape the future of humanity.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹4.5L–₹7.0L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Molecular Biology, Biostatistics, AI & Machine Learning, CRISPR", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Tech/B.Sc. (4 yrs) + M.Tech/M.Sc. (2 yrs) + PhD (3-5 yrs)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "17.9% CAGR", label: "Industry Growth Rate", gradient: "from-green-500 to-green-600" },
      { value: "$300B", label: "India Bioeconomy Target by 2030", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Using living organisms to create products that solve real-world problems.",
        color: BLUE,
        content: [
          "Biotechnology Research is the science of using living organisms—like bacteria, yeast, plant cells, or even human DNA—to create products that solve real-world problems.",
          "The Microscopic Engineer: They tweak the genetic code of a microbe so it can 'eat' oil spills in the ocean or produce life-saving insulin.",
          "The Crop Innovator: They develop seeds that can grow in salty soil or survive long droughts, ensuring farmers can always feed the nation.",
          "The Vaccine Architect: They study how viruses behave to design 'shields' (vaccines) that protect millions of people.",
          "Why it matters: India is the 'Pharmacy of the World' and a global leader in agriculture. To maintain this lead, we need researchers who can move beyond just 'using' technology to 'inventing' it. You aren't just a scientist; you are an architect of life itself."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Lab Detective",
        icon: "Clock",
        description: "Real workflow of a biotech researcher.",
        color: BLUE2,
        content: [
          "8:30 AM – The Sterile Shield: Your day begins at a high-tech lab in the Genome Valley, Hyderabad. You don't just walk in; you suit up. Lab coat, gloves, mask, and goggles are your uniform. You enter a 'Clean Room' to check on your cell cultures. These cells are producing a new type of therapeutic protein, and they need the perfect temperature to survive.",
          "11:00 AM – The Pipette Symphony: The core of your morning is precision. You use a pipette to move microliters of clear liquid between test tubes. Today, you are testing a 'CRISPR' gene-editing kit. One tiny mistake could ruin weeks of work, so focus is your best friend.",
          "1:30 PM – The Data Brainstorm: Lunch is a quick break with colleagues from the Bioinformatics team. You discuss why the latest batch of cells didn't produce as much protein as expected. Someone suggests the pH level was slightly off. You head back to your computer to analyze the digital logs.",
          "4:00 PM – The Visual Proof: You spend the afternoon at a Confocal Microscope. Under the lens, you see glowing green spots—proof that your gene-editing was successful! You capture the images to include in your research paper.",
          "6:30 PM – The Future Log: Before leaving, you document everything in your Electronic Lab Notebook (ELN). In research, if it isn't recorded, it didn't happen. You leave the lab tired but excited, knowing you've just moved a tiny step closer to a scientific breakthrough."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality & Skills)",
        icon: "User",
        description: "Check if you have the Biotech Spark.",
        color: BLUE,
        content: [
          "Patience of a Saint: Research can take years. Can you stay motivated even when an experiment fails ten times in a row?",
          "Observational Mastery: Do you notice the tiny color change in a liquid or the small spike on a graph?",
          "Logical Curiosity: Are you the person who takes a toy apart just to see how it works?",
          "Soft Skills: You must be a Team Player. Science is a relay race, not a solo sprint.",
          "Hard Skills: Mastery of Molecular Biology, Biostatistics, and increasingly, AI & Machine Learning.",
          "Self-Assessment: Do I love solving complex problems? Can I work with precision? Do I want to create something that changes the world? If yes, you have the Biotech Spark."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Research & Development Cycle.",
        color: BLUE2,
        content: [
          "Hypothesis: Asking a 'What if?' question (e.g., 'What if this bacteria could produce plastic?').",
          "Lab Experimentation: Testing the idea in a controlled environment with strict protocols.",
          "Data Analysis: Using software to see if the results match the hypothesis.",
          "Scaling Up: Moving from a small test tube to a massive 1,000-liter bioreactor.",
          "Regulatory Approval: Proving to the government that the product is safe for humans and the environment.",
          "Documentation: Maintaining detailed records for quality assurance and regulatory compliance."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a biotech researcher.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th with PCB (Science)","Step 2: Pursue B.Sc. in Biotechnology (3 years)","Step 3: Complete M.Sc. in Biotechnology (2 years)","Step 4: Publish research papers in scientific journals","Step 5: Pursue Ph.D. or clear GATE/NET exam","Step 6: Join as Research Scientist/Professor/Lab Director","Pathway B: Engineering/Industry Research Route","Step 1: Complete Class 12th with PCB/PCM stream","Step 2: Pursue B.Tech in Biotechnology (4 years)","Step 3: Complete internship in biotech/pharma research lab","Step 4: Learn techniques like PCR, CRISPR, cell culture","Step 5: Pursue M.Tech or MBA in Biotech Management","Step 6: Join as R&D Scientist/Biotech Engineer/Product Researcher","Pathway C: Skill-Based Entry Route","Step 1: Complete Class 12th with Science stream","Step 2: Pursue diploma in Biotechnology/Lab Technology","Step 3: Get certified in molecular biology techniques","Step 4: Join research lab as Junior Research Fellow","Step 5: Gain experience and pursue part-time B.Sc./M.Sc.","Step 6: Advance as Senior Research Associate/Lab Supervisor"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO (15+ yrs): ₹55 LPA – ₹1.4 Crore","Senior (10+ yrs): ₹22 – ₹45 LPA","Mid-Level (5–8 yrs): ₹11 – ₹19 LPA","Junior (3–5 yrs): ₹6 – ₹10 LPA","Entry Level (0–2 yrs): ₹3.5 – ₹5.5 LPA","Note: Metros pay 30% extra. PhD/GATE impacts entry pay.","Where Are the Jobs?","Top Cities: Bangalore, Hyderabad, Pune, Mumbai, Ahmedabad.","Top Industries: Pharma R&D, Bioprocessing, Agri-biotech, Clinical Research.","Global Demand: USA, Germany. Remote consulting is rising.","Top Institutions","Government: Indian Institute of Science (IISc), Bangalore, Jawaharlal Nehru University (JNU), Delhi, Indian Institute of Technology (IIT), Delhi, National Institute of Immunology (NII), Delhi","Private: Manipal Academy of Higher Education, Amity University, VIT University, Vellore, BITS Pilani","Online: NPTEL (IIT/IISc courses), IGNOU, SWAYAM Portal, Coursera (partnered Indian institutes)","Career Opportunities","Conventional","Biotechnology Research Associate","Molecular Biology Scientist","Microbiology Research Scientist","Bioprocess Research Analyst","New-age and AI driven","Computational Biology Researcher","Synthetic Biology Researcher","Genomics Data Scientist","AI-Driven Drug Discovery Researcher","Remote/entrepreneurship","Freelance Research Consultant","Scientific Content Creator","Biotech Startup Founder","Online Research Trainer"]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top industries and cities.",
        color: BLUE,
        content: [
          "Top Industries: Biopharmaceuticals (Vaccines/Drugs), Agri-Biotech (Seeds/Fertilizers), Industrial Biotech (Biofuels), Bioinformatics (Data Analysis).",
          "Top Cities: Hyderabad (Vaccine Capital), Bangalore (Biotech Hub), Pune (Serum Institute), Gurgaon/Manesar.",
          "Gig Potential: Emerging 'Freelance Scientific Consultants' who help startups with patent filing and regulatory paperwork.",
          "International: High demand in the USA, Germany, and Switzerland for Ph.D. holders in Biotechnology.",
          "Emerging Hubs: Hyderabad (Genome Valley), Bangalore (Tech + Biotech), Pune (Pharma), Gurgaon (Startups)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹50,000–₹2,00,000 total (IITs/NITs/IISc). Very affordable for quality education.",
          "Private Institutions: ₹6,00,000–₹15,00,000 total (VIT, Amity, Manipal). Higher cost but strong industry connections.",
          "Duration: 4 years (B.Tech) or 3+2 years (B.Sc.+M.Sc.) + 3-5 years (Ph.D. optional).",
          "Living Costs: ₹15,000–₹25,000 per month in major biotech cities (Hostel/Rent, Food, Transport).",
          "Additional Costs: Certification exams (Clinical Research, Patent Agent) can cost ₹20,000–₹50,000.",
          "ROI: Entry salary of ₹4.5L+ makes education investment recoverable in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: BLUE,
        content: [
          "Government: IISc Bangalore, IIT Delhi, JNU Delhi, National Chemical Laboratory (Pune), Regional Centre for Biotechnology (Faridabad).",
          "Private: VIT Vellore, Manipal (MAHE), Amity Institute of Biotechnology, BITS Pilani, Lovely Professional University (LPU).",
          "Distance/Online: IGNOU (B.Sc. options), though research roles strictly require hands-on lab degrees.",
          "Research Centers: CSIR Labs, DBT-supported institutes, Biotech Park facilities across major cities."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE,
        content: [
          "Central: INSPIRE Fellowship (for toppers in 12th), GAT-B Stipend (₹12,000/month for M.Sc. students), DBT-JRF (₹12,000-31,000/month).",
          "Institutional: Full/Partial fee waivers for Ph.D. scholars at IITs and IISc. Research assistantships available.",
          "Private: Biocon Rama Mazumdar Scholarship, L'Oréal India For Young Women in Science, Ratan Tata Scholarship.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "UGC NET/JRF: ₹31,000-35,000/month for PhD students pursuing research."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE2,
        content: [
          "BRSI (Biotech Research Society, India): The primary networking body for Indian researchers.",
          "BCIL (Biotech Consortium India Limited): Provides industrial training and placement assistance.",
          "Certifications: Clinical Data Management, Patent Agent Examination, Quality Control (QC) Certifications, CRISPR Gene Editing.",
          "Specialized Training: Advanced Bioinformatics, Bioprocess Engineering, Regulatory Affairs, Scientific Writing.",
          "International: ASHG (American Society of Human Genetics) membership for global recognition."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in biotech careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Research Scientist, Microbiologist, Quality Control Officer, Bioprocess Engineer, Lab Manager.",
          "New-Age Careers: AI Drug Discovery Analyst, Genome Editor, Bio-entrepreneur, Synthetic Biology Specialist, Precision Medicine Researcher.",
          "Freelancing: Scientific Writing, Patent Consultancy, Bio-safety Auditing, Regulatory Consulting.",
          "Entrepreneurship: Starting a Biotech Startup, Diagnostic Lab, Agri-Biotech Company, Biofuel Production Facility.",
          "Interdisciplinary Roles: Biotech + Data Science, Biotech + AI, Biotech + Environmental Science, Biotech + Agriculture."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of biotech careers.",
        color: BLUE,
        content: [
          "The Long Game: Research takes time. You might work on one medicine for 10 years before it hits the shelf.",
          "Academic Pressure: To reach the top, a Ph.D. is almost mandatory. This means another 4–5 years of study after your Master's.",
          "Lab Hazards: You will work with chemicals and potentially dangerous microbes. Safety is a life-or-death priority.",
          "Regulatory Complexity: Navigating government approvals and international standards is time-consuming and complex.",
          "Slow Career Progression: Moving from junior to senior positions often takes 10-15 years.",
          "Funding Challenges: Research projects depend on grants, which can be unpredictable and competitive."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in biotechnology.",
        color: BLUE2,
        content: [
          "Bio-AI: AI is now predicting how proteins fold, doing 5 years of work in 5 minutes.",
          "Personalized Medicine: In 2030, your doctor might give you a medicine designed specifically for your DNA.",
          "Lab-Grown Food: Biotech researchers are working on 'Cultured Meat' to provide protein without raising livestock.",
          "CRISPR Revolution: Gene editing will move from research labs to clinical practice, curing genetic diseases.",
          "Biofuels & Bioplastics: Sustainable alternatives to fossil fuels and plastics will become mainstream.",
          "Impact on Employment: New roles for AI specialists, bioinformatics experts, and biotech entrepreneurs. Required skills: Python, Machine Learning, Genomics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Read Scientific Blogs: Follow ScienceDaily or Nature News to see what's trending globally.",
          "Master Statistics: Research is 50% Biology and 50% Math. Learn 'Mean, Median, and Probability' very well!",
          "Kitchen Science: Try baking or making curd. Both are actually complex biotech processes!",
          "Join Olympiads: Participate in the National Science Olympiad (NSO) to test your logic.",
          "Learn Coding: Start with Python for data analysis and bioinformatics.",
          "Lab Visits: Try to get a tour of a local biotech lab or research institute.",
          "Science Projects: Conduct experiments on fermentation, DNA extraction, or microbial growth.",
          "Online Courses: Take free courses on Coursera or edX about biotechnology and molecular biology.",
          "Observation: Keep a lab journal. Document observations carefully and precisely."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in biotechnology.",
        color: BLUE2,
        content: [
          "Har Gobind Khorana: Nobel Prize winner (1968) who helped crack the genetic code. He is the reason we understand how DNA works!",
          "Kiran Mazumdar-Shaw: The 'Biotech Queen of India.' She founded Biocon and turned it into a global biopharma giant.",
          "Dr. Soumya Swaminathan: Former Chief Scientist at WHO; she played a vital role in global health and vaccine research during COVID-19.",
          "Dr. Renu Swarup: Former Secretary, DBT. She was instrumental in creating the 'Biotech Startup' ecosystem in India.",
          "Dr. Krishna Ella: The man behind Covaxin. He proved that India can develop high-end vaccines entirely on its own.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's biotech and vaccine development initiatives."
        ]
      }
    ]
  }
};

