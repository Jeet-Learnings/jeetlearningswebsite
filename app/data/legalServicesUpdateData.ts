import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const RED3 = "#E70000";
const RED4 = "#B30000";
const RED5 = "#9B0000";

export const legalServicesUpdateData: Record<string, CareerPageData> = {
  forensic_scientist: {
    slug: "forensic_scientist",
    badge: "The Voice of Silent Victims for Class 10+",
    heading: "Forensic Scientist",
    subheading: "Use science to solve crimes. Analyze evidence, testify in court, and ensure justice prevails. Become the invisible detective behind every conviction.",
    whyCards: [
      { icon: "Microscope", title: "Justice Through Science", description: "Your evidence directly determines guilt or innocence. You're the voice of silent victims.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "12-15% Job Growth", description: "India's justice system increasingly relies on forensic evidence. Massive demand for experts.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, UK, UAE for Indian forensic scientists. International career paths.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Cyber Forensics Boom", description: "Digital crimes rising exponentially. Cyber forensic experts command premium salaries.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-5 Years (B.Sc + M.Sc)", color: "bg-red-100 text-red-700" },
      { label: "Salary Range", detail: "₹3.5L–₹60L+ (Entry to Senior)", color: "bg-orange-100 text-orange-700" },
      { label: "Growth", detail: "12–15% CAGR, Job Market Growth", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "12–15%", label: "Job Market Growth", gradient: "from-red-500 to-red-600" },
      { value: "₹60L+", label: "Senior Leadership Salary", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Microscope",
        description: "Understanding forensic science and its role in the justice system",
        color: RED,
        content: [
          "Forget what you see in movies where a detective solves a murder in 45 minutes using a magic computer. Real Forensic Science is slower, harder, but infinitely more important.",
          "A Forensic Scientist applies scientific principles to legal problems. You are the voice of the silent victims. You use chemistry, biology, physics, and computer science to analyze evidence found at crime scenes—whether it's a drop of blood, a deleted email, a shattered bullet, or a fake signature.",
          "In today's India, the justice system relies heavily on 'evidence-based conviction' rather than just witness statements. With the new Bharatiya Nyaya Sanhita (BNS) laws emphasizing forensic evidence in serious crimes, this career has moved from the sidelines to the center stage of the Indian justice system.",
          "You don't just work in a lab; you protect the innocent and ensure the guilty face justice.",
          "Forensic scientists work in government labs, police departments, private firms, and international organizations."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world experience of a working forensic scientist",
        color: RED2,
        content: [
          "08:30 AM - Arjun clocks in at the State Forensic Science Laboratory (FSL) in Lucknow: The smell of chemicals hangs faintly in the air. He dons his white coat and checks the 'Chain of Custody' log. A sealed packet arrived last night from a robbery case.",
          "10:00 AM - Lab Analysis. Arjun specializes in Serology (body fluids): He carefully opens the packet containing a stained shirt. Using a high-powered microscope and chemical reagents, he tests the stain. Is it blood? Yes. Is it human? Yes. He prepares the sample for DNA profiling.",
          "01:00 PM - Lunch: He eats quickly with colleagues from the Ballistics division. They discuss a new case involving a country-made pistol.",
          "02:30 PM - Court Summons: Arjun has to testify in the High Court today regarding a case he analyzed two years ago. He stands in the witness box, facing a barrage of questions from the defense lawyer. 'Dr. Arjun, are you 100% sure the sample wasn't contaminated?' He calmly explains his scientific process.",
          "05:00 PM - Back to the Lab: A rush request comes in from the Cyber Cell. They need help lifting latent fingerprints from a seized hard drive before they analyze the data. Arjun dusts the drive using magnetic powder, photographs the prints, and uploads them to the database.",
          "06:30 PM - Paperwork: He spends an hour writing a detailed report. In forensics, if you didn't document it, you didn't do it. He logs off, mentally tired but knowing his work today moved three cases closer to justice."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Traits that make someone well-suited for forensic science",
        color: RED3,
        content: [
          "The Skeptic: You don't take things at face value. You need proof.",
          "The Detail-Obsessive: You notice if a picture frame is tilted by 2 degrees.",
          "The Iron Stomach: Can you handle bad smells, blood, and disturbing images without fainting? (This is non-negotiable for bio-forensics).",
          "The Patient Monk: Real lab work is repetitive. You might test 50 samples to get 1 match.",
          "Integrity: You must be unbribable and objective.",
          "Communication: Ability to explain complex science to a judge.",
          "Tech-Savvy: Comfortable with lab equipment, databases, and increasingly, coding."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Core duties of a forensic scientist",
        color: RED4,
        content: [
          "The workflow generally follows the 'Locard's Exchange Principle' (Every contact leaves a trace):",
          "1. Evidence Collection: Carefully bagging items without contamination.",
          "2. Analysis: Testing the evidence in a controlled lab environment (e.g., matching a bullet striation to a gun).",
          "3. Interpretation: Connecting the dots. 'The soil on the shoe matches the soil from the garden, placing the suspect at the scene.'",
          "4. Reporting: Writing a legally admissible report.",
          "5. Testimony: Defending your findings in a court of law.",
          "6. Documentation: Maintaining chain of custody and detailed records."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "How to become a forensic scientist in India",
        color: RED,
        content: [
          "Pathway A: After Class 12th (Science Stream)",
          "Step 1: Pass Class 12th with Physics, Chemistry, Biology.",
          "Step 2: Complete B.Sc. in Forensic Science (3 years).",
          "Step 3: Pursue M.Sc. in Forensic Science or Toxicology.",
          "Step 4: Do internship at forensic science laboratory (FSL).",
          "Step 5: Clear UGC-NET or state forensic department exam.",
          "Step 6: Join as Forensic Scientist in government FSL.",
         
          "Pathway B: Medical/Pharmacy Route",
          "Step 1: Pass Class 12th with Biology or PCM stream.",
          "Step 2: Complete MBBS, BDS, or B.Pharmacy degree course.",
          "Step 3: Pursue PG Diploma in Forensic Medicine/Science.",
          "Step 4: Gain hands-on training in DNA or toxicology lab.",
          "Step 5: Apply for forensic expert posts in hospitals/labs.",
          "Step 6: Work as Forensic Medicine Expert or Analyst.",
          "Pathway C: Cyber Forensics / Digital Route",
          "Step 1: Pass Class 12th with PCM or Computer Science.",
          "Step 2: Complete B.Tech in Computer Science or IT.",
          "Step 3: Do certification in Cyber Forensics or CEH.",
          "Step 4: Learn tools like EnCase, FTK, and Autopsy.",
          "Step 5: Intern with cyber crime cell or private firm.",
          "Step 6: Join as Cyber Forensic Expert in law enforcement."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary, growth, and job market data for forensic scientists",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹60LPA – ₹1.5 Crore",
          "Senior / Lead Role (10+ yrs): ₹25 LPA –₹55 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12LPA – ₹24 LPA",
          "Junior / Associate (3–5 yrs): ₹6 LPA –₹11 LPA",
          "Entry Level (0–2 yrs): ₹3 LPA – ₹6 LPA",
          "Note: Digital Forensics and Cyber skills offer 40% salary premium.",
          "",
          "Where Are the Jobs?",
          "Top Cities: Delhi, Gandhinagar, Hyderabad, Bengaluru, Mumbai, Pune.",
          "Top Industries: Government Labs, Cyber-Security, BFSI, Healthcare, Legal Firms.",
          "Global Demand: High remote demand in USA, UK, and UAE."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top forensic science institutes across India",
        color: RED,
        content: [
          "Government: National Forensic Sciences University (NFSU) - Gandhinagar; Central Forensic Science Laboratory (CFSL) - Delhi; State Forensic Science Laboratories in major cities.",
          "Private: Amity University - Noida; LPU - Punjab; Manipal Academy - Bangalore; Christ University - Bangalore.",
          "Online/Distance: Limited options; most forensic education requires hands-on lab work.",
          "Specialization Centers: Cyber Forensics institutes in Bangalore and Hyderabad; DNA labs in major metros."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment required for forensic science education",
        color: RED3,
        content: [
          "Government Institutions: ₹2.5L–₹4L (M.Sc total)",
          "State Universities (DU/Panjab): ₹20,000–₹50,000 (Very affordable)",
          "Private Universities (Amity/LPU): ₹6L–₹10L (Good infrastructure but pricey)",
          "Additional Costs: ₹10,000 for lab coats, records, field visits",
          "Living Costs: ₹15,000–₹25,000 per month in major cities",
          "Study Materials: ₹50,000–₹1L for specialized courses",
          "Scholarships: Can significantly reduce out-of-pocket expenses"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial support available for forensic science students",
        color: RED5,
        content: [
          "INSPIRE Scholarship (SHE): For top 1% students in Class 12 Boards pursuing Basic/Natural Sciences",
          "NFSU Merit Scholarship: Specific to NFSU students based on semester performance",
          "Post-Matric Scholarship: For SC/ST/OBC students by State Governments",
          "Police Welfare Scholarships: Some states offer scholarships to wards of police personnel",
          "Central: NSP (National Scholarship Portal) – Merit-cum-Means for professional degrees",
          "Institutional: Need-based financial assistance at various universities",
          "Merit-Based: Top performers in entrance exams receive full or partial scholarships"
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "Certifications:",
          "UGC-NET (Forensic Science): Mandatory if you want to become a Professor or go into research (JRF)",
          "CHFI (Computer Hacking Forensic Investigator): Essential for digital forensics",
          "CFE (Certified Fraud Examiner): Great for corporate jobs",
          "",
          "Professional Bodies:",
          "Indian Academy of Forensic Medicine (IAFM)",
          "International Society of Forensic Genetics (ISFG)",
          "",
          "Continuing Education: Mandatory CPD (Continuing Professional Development) hours annually"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse career paths for forensic scientists",
        color: RED2,
        content: [
          "Conventional Careers:",
          "Forensic Toxicologist: Finds poisons/drugs in body fluids",
          "Ballistics Expert: Studies guns and bullets",
          "Forensic Serologist: Analyzes blood and biological stains",
          "",
          "New-Age Careers:",
          "Digital Forensic Analyst: Recovering data from smashed phones or cloud servers",
          "Forensic Odontologist: Identifying victims via dental records",
          "Forensic Psychologist: Profiling criminals' minds",
          "",
          "Freelancing:",
          "Questioned Document Examiner: Checking fake wills/cheques",
          "Legal Consultant: Advising lawyers on scientific validity of evidence"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Challenges to be aware of in the forensic science profession",
        color: RED3,
        content: [
          "The 'Yuck' Factor: You will deal with decomposed bodies, maggots, and gruesome crime scenes. It is not for the faint-hearted.",
          "Slow Justice: You might analyze a sample today, but the court case might happen 5 years later. It requires immense patience.",
          "Backlog: Indian labs are overburdened. You may have hundreds of pending cases, leading to high work pressure.",
          "Smell: Labs often smell of chemicals (Formalin) and biological decay.",
          "Emotional Toll: Exposure to disturbing crime scenes can affect mental health.",
          "Long Hours: During high-profile cases, you might work extended hours.",
          "Accuracy Pressure: One mistake can free a guilty person or jail an innocent one."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in forensic science",
        color: RED2,
        content: [
          "AI-Powered Analysis: Machine learning algorithms will speed up fingerprint and DNA matching.",
          "Blockchain Evidence: Immutable digital records of evidence chain of custody.",
          "Drone Forensics: Using drones to collect evidence from crime scenes.",
          "Deepfake Detection: New field detecting manipulated videos and audio.",
          "Pandemic Forensics: Investigating crimes during health emergencies.",
          "Climate Forensics: Analyzing environmental evidence in eco-crimes."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey",
        color: RED,
        content: [
          "Master Chemistry: Especially organic and analytical chemistry.",
          "Learn Biology: Focus on genetics and microbiology.",
          "Develop Observation Skills: Practice noticing small details.",
          "Read Crime Stories: Understand investigative thinking.",
          "Learn Photography: Document evidence properly.",
          "Coding Basics: Python or C++ for digital forensics.",
          "Visit Labs: Attend science fairs and lab demonstrations."
        ]
      }
    ]
  },

  lawyer: {
    slug: "lawyer",
    badge: "The Voice of Justice for Class 10+",
    heading: "Lawyer",
    subheading: "Fight for justice. Defend the innocent, prosecute the guilty, and shape the law. Become the architect of a fair and just society.",
    whyCards: [
      { icon: "Scale", title: "Justice & Impact", description: "Your arguments directly impact lives. You defend the innocent and ensure accountability.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "Explosive Growth", description: "India's legal sector growing at 15% CAGR. Massive demand for skilled lawyers.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in USA, UK for Indian lawyers. International law firms expanding in India.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Tier-1 Salaries", description: "Tier-1 law firms offer ₹80L+ entry salaries. Highest-paying legal careers globally.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5 Years (Integrated) or 3 Years (Post-Grad)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "CLAT, AILET, LSAT", color: "bg-orange-100 text-orange-700" },
      { label: "Salary Range", detail: "₹4L–₹3Cr+ (Entry to Leadership)", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "15%", label: "Legal Sector CAGR", gradient: "from-red-500 to-red-600" },
      { value: "₹3Cr+", label: "Top Leadership Salary", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Scale",
        description: "Understanding the legal profession and its role in society",
        color: RED,
        content: [
          "A Lawyer is a professional who practices law. You represent clients in legal matters, argue cases in court, draft legal documents, and provide legal advice. You are the guardian of justice and the protector of rights.",
          "In India's rapidly evolving legal landscape, lawyers are more important than ever. With new laws like the Bharatiya Nyaya Sanhita (BNS), Bharatiya Sakshya Adhiniyam (BSA), and Bharatiya Nagrik Suraksha Sanhita (BNSS), the legal profession is undergoing transformation.",
          "Lawyers work in multiple domains: Criminal Law (defending or prosecuting), Civil Law (property disputes), Corporate Law (mergers, contracts), Tax Law, Intellectual Property, Environmental Law, and more.",
          "The profession offers both financial rewards and the deep satisfaction of fighting for justice. You can work in law firms, government, NGOs, or start your own practice.",
          "India needs skilled lawyers to handle the explosion of legal cases, corporate transactions, and emerging areas like Cyber Law and Environmental Law."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world experience of a working lawyer",
        color: RED2,
        content: [
          "08:00 AM - Office Prep: Priya arrives at her law firm in Mumbai. She reviews case files for three ongoing matters: a corporate merger, a criminal defense case, and a property dispute.",
          "10:00 AM - Client Meeting: Meets with a startup founder facing regulatory issues. Explains compliance requirements and drafts a response to the government notice.",
          "12:30 PM - Court Appearance: Rushes to the High Court for a hearing. Argues a motion before the judge. The opposing counsel challenges her interpretation of a statute. She calmly counters with case precedents.",
          "02:00 PM - Lunch & Research: Grabs lunch while researching a recent Supreme Court judgment that affects her client's case.",
          "03:30 PM - Document Drafting: Returns to office and drafts a detailed legal memorandum on a complex contract clause. Precision is critical; one wrong word can cost millions.",
          "06:00 PM - Team Meeting: Discusses strategy with junior associates on an upcoming trial. Mentors them on cross-examination techniques.",
          "08:00 PM - Continuing Education: Attends a webinar on new amendments to the Companies Act. Lawyers must stay updated constantly."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Traits that make someone well-suited for law",
        color: RED3,
        content: [
          "The Debater: You love arguing and defending your position with logic and evidence.",
          "The Detail Detective: You notice loopholes and inconsistencies in contracts and statements.",
          "The Empathizer: You genuinely care about your clients' problems and want to help.",
          "The Researcher: You enjoy digging through documents, precedents, and legal texts.",
          "The Communicator: You can explain complex legal concepts in simple language.",
          "The Ethical Guardian: You have strong principles and won't compromise on integrity.",
          "The Strategist: You think several steps ahead and plan your legal moves carefully."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Core duties of a lawyer",
        color: RED4,
        content: [
          "Client Consultation: Understanding client's legal problem and advising on options.",
          "Legal Research: Researching relevant laws, precedents, and case law.",
          "Document Drafting: Creating contracts, wills, petitions, and legal memoranda.",
          "Negotiation: Settling disputes outside court when possible.",
          "Court Representation: Arguing cases before judges and juries.",
          "Evidence Preparation: Gathering and organizing evidence for trial.",
          "Compliance: Ensuring clients follow legal requirements.",
          "Mentoring: Guiding junior lawyers and paralegals."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "How to become a lawyer in India",
        color: RED,
        content: [
          "Pathway A: After Class 12th (5-Year Integrated Law)",
          "Step 1: Pass Class 12th in any stream (Arts/Science/Commerce).",
          "Step 2: Clear CLAT/AILET entrance exam after Class 12th.",
          "Step 3: Complete 5-year integrated BA LLB/BBA LLB degree.",
          "Step 4: Do internship under practicing advocate or law firm.",
          "Step 5: Enroll with State Bar Council after degree completion.",
          "Step 6: Practice as Advocate in district or high court.",
          "",
          "Pathway B: After Graduation (3-Year LLB Route)",
          "Step 1: Pass Class 12th and complete any graduation degree.",
          "Step 2: Clear entrance exam for 3-year LLB programme.",
          "Step 3: Complete LLB degree from recognized university or college.",
          "Step 4: Specialize in Criminal, Civil, Corporate, or Tax law.",
          "Step 5: Register with Bar Council of India after LLB.",
          "Step 6: Join law firm or start independent legal practice.",
          "",
          "Pathway C: Judicial Services / Government Law Route",
          "Step 1: Pass Class 12th and pursue integrated or regular LLB.",
          "Step 2: Complete LLB and gain minimum required practice experience.",
          "Step 3: Prepare for State Judicial Services Examination (PCS-J).",
          "Step 4: Clear preliminary, mains, and interview selection stages.",
          "Step 5: Get appointed as Civil Judge (Junior Division).",
          "Step 6: Rise to District Judge or High Court level."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary, growth, and job market data for lawyers",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹80L –₹3 Crore",
          "Senior / Lead Role (10+ yrs): ₹30L –₹70L",
          "Mid-Level Professional (5–8 yrs): ₹15L– ₹30L",
          "Junior / Associate (3–5 yrs): ₹7L – ₹15L",
          "Entry Level (0–2 yrs): ₹4L – ₹9L",
          "Note: Tier-1 firms and metros offer 100% salary premium.",
          "",
          "Where Are the Jobs?",
          "Top Cities: Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Pune, Chennai.",
          "Top Industries: Corporate Law, BFSI, Tech-Legal, Real Estate.",
          "Global Demand: Remote roles in USA, UK; freelance LPO demand."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top law institutes across India",
        color: RED,
        content: [
          "National Law Universities: National Law School of India University (NLSIU) - Bangalore; Nalsar University of Law - Hyderabad; Gujarat National Law University - Gandhinagar; Rajiv Gandhi School of IP Law - Kharagpur.",
          "Delhi University: Faculty of Law - Delhi University (one of India's oldest and most prestigious).",
          "Private Law Schools: Symbiosis Law School - Pune; Jindal Global Law School - Delhi; Ashoka University - Delhi; Christ University - Bangalore.",
          "State Universities: Panjab University - Chandigarh; Banaras Hindu University - Varanasi; University of Mumbai - Mumbai.",
          "Online/Distance: IGNOU offers distance LLB programs."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment required for law education",
        color: RED3,
        content: [
          "Government Law Schools: ₹50,000–₹2L (Total for 5 years). Highly affordable.",
          "National Law Universities: ₹1L–₹3L (Total for 5 years). Excellent value.",
          "Private Law Schools: ₹5L–₹15L (Total for 5 years). Premium institutions.",
          "Hostel/Living: ₹10,000–₹20,000 per month depending on city.",
          "Additional Costs: Bar exam fees (₹5,000–₹10,000), internship travel, legal research databases.",
          "Total Investment: Approximately ₹10L–₹30L for complete law degree.",
          "ROI: With entry-level salaries of ₹4L–₹9L per annum, you can recover investment in 2-3 years."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial support available for law students",
        color: RED5,
        content: [
          "NLSIU Merit Scholarship: Full tuition waiver for top performers.",
          "Nalsar Scholarships: Merit-based and need-based scholarships.",
          "NSP (National Scholarship Portal): Merit-cum-Means scholarships for SC/ST/OBC students.",
          "State Scholarships: Various states offer scholarships for law students.",
          "Bar Council Scholarships: Some state bar councils offer scholarships.",
          "Corporate Sponsorships: Law firms sponsor talented students' education.",
          "Women-Specific: Special scholarships for women law students."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Regulatory framework and professional credentials",
        color: RED,
        content: [
          "Bar Council Registration: Mandatory after LLB to practice law.",
          "Bar Exam: State-level bar exam to get enrollment certificate.",
          "Continuing Legal Education (CLE): Mandatory CPD hours annually.",
          "",
          "Professional Bodies:",
          "Bar Council of India (BCI): Supreme regulatory body for lawyers.",
          "State Bar Councils: Regulate lawyers at state level.",
          "Indian Bar Association: Professional association for lawyers.",
          "",
          "Specialization Certifications:",
          "Cyber Law Certification",
          "Intellectual Property Law Certification",
          "Environmental Law Certification",
          "International Arbitration Certification"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse career paths for lawyers",
        color: RED2,
        content: [
          "Conventional Careers:",
          "Criminal Lawyer: Defending or prosecuting criminal cases.",
          "Civil Lawyer: Handling property, family, and contract disputes.",
          "Corporate Lawyer: Advising companies on mergers, contracts, compliance.",
          "Tax Lawyer: Specializing in tax law and financial regulations.",
          "",
          "New-Age Careers:",
          "Cyber Lawyer: Handling data privacy, cybercrime, digital rights.",
          "Environmental Lawyer: Protecting environment through legal action.",
          "Intellectual Property Lawyer: Protecting patents, trademarks, copyrights.",
          "Tech-Legal Specialist: Advising tech startups on legal compliance.",
          "",
          "Entrepreneurship:",
          "Solo Practice: Starting your own law firm.",
          "Legal Consulting: Advising corporations on legal strategy.",
          "Legal Tech Founder: Building legal software and platforms.",
          "Online Legal Services: Providing legal advice through digital platforms."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Challenges to be aware of in the legal profession",
        color: RED3,
        content: [
          "Slow Justice System: Cases can drag on for 5-10 years. Patience is essential.",
          "High Stress: Dealing with clients' serious problems and high-stakes cases.",
          "Work-Life Balance: Long hours, especially during trials and negotiations.",
          "Emotional Toll: Exposure to human suffering and injustice.",
          "Ethical Dilemmas: Sometimes you must defend clients you personally dislike.",
          "Competitive Field: Highly competitive profession with limited top positions.",
          "Continuous Learning: Laws change constantly; you must stay updated."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the legal profession",
        color: RED2,
        content: [
          "AI-Powered Legal Research: AI tools will speed up case research and document review.",
          "Blockchain Contracts: Smart contracts will automate legal agreements.",
          "Online Dispute Resolution: More cases will be resolved through digital platforms.",
          "Cyber Law Boom: Explosive growth in data privacy and cybercrime law.",
          "Climate Law: New field addressing environmental and climate-related legal issues.",
          "Legal Tech Startups: Disruption of traditional legal services through technology.",
          "Remote Legal Services: More lawyers working remotely for global clients."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey",
        color: RED,
        content: [
          "Master English: Strong writing and communication skills are essential.",
          "Develop Debate Skills: Join debate clubs and participate in competitions.",
          "Read Current Affairs: Stay updated on legal and political news.",
          "Learn Logic: Study philosophy and logic to strengthen reasoning.",
          "Participate in Moot Courts: Practice legal argumentation.",
          "Read Legal Cases: Understand how courts reason and decide.",
          "Develop Research Skills: Learn to find and analyze information."
        ]
      }
    ]
  },

  judiciary: {
    slug: "judiciary",
    badge: "The Guardian of Constitutional Justice for Class 10+",
    heading: "Judiciary",
    subheading: "Interpret the law and deliver justice. Sit on the bench and shape the nation's legal future. Become the ultimate arbiter of right and wrong.",
    whyCards: [
      { icon: "Gavel", title: "Constitutional Power", description: "Your judgments shape the nation's legal framework and protect fundamental rights.", borderColor: "#EF4444" },
      { icon: "TrendingUp", title: "Prestige & Authority", description: "Highest respect in society. Judges are guardians of democracy and constitutional values.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Global Recognition", description: "Indian judges recognized internationally. Opportunities in international arbitration and courts.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Lifetime Security", description: "Secure government position with pension, benefits, and constitutional protection.", borderColor: "#10B981" }
    ],
    quickFacts: [
      { label: "Duration", detail: "5-15 Years (LLB + Practice)", color: "bg-red-100 text-red-700" },
      { label: "Entry Exam", detail: "PCS-J (Judicial Services)", color: "bg-orange-100 text-orange-700" },
      { label: "Salary Range", detail: "₹9L–₹1.5Cr+ (Entry to Supreme Court)", color: "bg-blue-100 text-blue-700" }
    ],
    statCards: [
      { value: "₹1.5Cr+", label: "Supreme Court Judge Salary", gradient: "from-red-500 to-red-600" },
      { value: "Lifetime", label: "Job Security", gradient: "from-blue-600 to-indigo-600" }
    ],
    guideSections: [
      {
        id: "1",
        title: "What is This Career All About?",
        icon: "Gavel",
        description: "Understanding the judicial profession and its role in democracy",
        color: RED,
        content: [
          "A Judge is the ultimate arbiter of justice. You interpret the law, hear both sides of a dispute, and deliver judgments that determine guilt or innocence, rights or obligations. You are the guardian of the Constitution and protector of fundamental rights.",
          "The Indian Judiciary is one of the world's largest and most respected. With over 50 million pending cases, India desperately needs more judges. This creates unprecedented opportunities for talented legal professionals.",
          "Judges work at multiple levels: District Courts (handle local cases), High Courts (appellate jurisdiction), and the Supreme Court (constitutional matters). Each level offers unique challenges and opportunities.",
          "The profession offers unparalleled prestige, lifetime security, and the profound satisfaction of delivering justice. You're not just deciding cases; you're shaping the nation's legal future.",
          "Becoming a judge requires years of legal practice, rigorous examination, and unwavering commitment to constitutional values."
        ]
      },
      {
        id: "2",
        title: "A Day in the Life",
        icon: "Clock",
        description: "Real-world experience of a working judge",
        color: RED2,
        content: [
          "08:30 AM - Chambers Review: Justice Sharma arrives at the High Court. Reviews case files for today's hearings. Three complex matters: a constitutional petition, a criminal appeal, and a commercial dispute.",
          "10:00 AM - First Hearing: Hears arguments from both sides in a constitutional case about fundamental rights. Lawyers present their positions. Justice Sharma asks probing questions, seeking clarity on legal principles.",
          "12:30 PM - Lunch & Research: Researches relevant Supreme Court precedents and international law on the constitutional issue. Judicial research is critical for sound judgments.",
          "02:00 PM - Second Hearing: Presides over a criminal appeal. Listens to arguments about whether evidence was properly admitted. The stakes are high—a person's freedom depends on this judgment.",
          "04:00 PM - Judgment Writing: Returns to chambers and begins drafting a detailed judgment on a complex commercial case. Every word matters; the judgment will be cited in future cases.",
          "06:00 PM - Administrative Duties: Meets with court staff about case management and judicial efficiency. Judges also manage court operations.",
          "07:30 PM - Continuing Education: Attends a judicial conference on new laws and constitutional developments. Judges must stay updated constantly."
        ]
      },
      {
        id: "3",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Traits that make someone well-suited for the judiciary",
        color: RED3,
        content: [
          "The Impartial Thinker: You can set aside personal biases and decide based purely on law and facts.",
          "The Principled Leader: You have strong constitutional values and won't compromise on justice.",
          "The Patient Listener: You listen carefully to both sides before forming opinions.",
          "The Logical Reasoner: You can connect complex legal principles to reach sound conclusions.",
          "The Ethical Guardian: You have unquestionable integrity and moral courage.",
          "The Communicator: You can explain complex legal reasoning in clear, understandable language.",
          "The Visionary: You see how your judgments impact society and shape the future."
        ]
      },
      {
        id: "4",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "Core duties of a judge",
        color: RED4,
        content: [
          "Case Hearing: Listening to arguments from both sides in disputes.",
          "Evidence Evaluation: Assessing the credibility and relevance of evidence presented.",
          "Legal Interpretation: Applying existing laws to new situations and disputes.",
          "Judgment Writing: Drafting detailed, reasoned judgments explaining the decision.",
          "Constitutional Protection: Ensuring government actions comply with constitutional limits.",
          "Precedent Setting: Creating legal precedents that guide future cases.",
          "Court Management: Overseeing court operations and case scheduling.",
          "Mentoring: Guiding junior judges and judicial officers."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "How to become a judge in India",
        color: RED,
        content: [
          "Pathway A: Lower Judiciary (Civil Judge / Judicial Magistrate)",
          "Step 1: Pass Class 12th in any stream preferably Arts.",
          "Step 2: Complete 5-year integrated LLB or 3-year LLB.",
          "Step 3: Enroll as Advocate with State Bar Council.",
          "Step 4: Prepare for State Judicial Services Examination (PCS-J).",
          "Step 5: Clear preliminary, mains, and personal interview rounds.",
          "Step 6: Get appointed as Civil Judge (Junior Division).",
   
          "Pathway B: Higher Judiciary (High Court Judge)",
          "Step 1: Pass Class 12th and complete LLB degree course.",
          "Step 2: Practice as Advocate for minimum 10 years continuously.",
          "Step 3: Build strong record in Constitutional or Civil law.",
          "Step 4: Get recommended by High Court Collegium for appointment.",
          "Step 5: Receive appointment under Article 217 of Constitution.",
          "Step 6: Serve as Judge of the respective High Court.",
          
          "Pathway C: Supreme Court Judge Route",
          "Step 1: Pass Class 12th and complete LLB degree course.",
          "Step 2: Practice as Advocate for minimum 10 years experience.",
          "Step 3: Serve as High Court Judge for 5 years minimum.",
          "Step 4: Get recommended by Supreme Court Collegium for elevation.",
          "Step 5: Receive Presidential appointment under Article 124 of Constitution.",
          "Step 6: Serve as Judge of the Supreme Court of India."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salary, growth, and job market data for judges",
        color: RED2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹70LPA – ₹1.5 Crore",
          "Senior / Lead Role (10+ yrs): ₹35 LPA –₹65 LPA",
          "Mid-Level Professional (5–8 yrs): ₹20LPA – ₹38 LPA",
          "Junior / Associate (3–5 yrs): ₹14 LPA –₹22 LPA",
          "Entry Level (0–2 yrs): ₹9 LPA – ₹15 LPA",
          "Note: Perks and Judicial Service exams significantly impact pay.",
          "",
          "Where Are the Jobs?",
          "Top Cities: Delhi, Mumbai, Bengaluru, Prayagraj, Kolkata.",
          "Top Industries: Government Judiciary, Tribunals, Arbitration.",
          "Global Demand: International Arbitration, Global Legal Bodies."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top law institutes for judicial career preparation",
        color: RED,
        content: [
          "National Law Universities: National Law School of India University (NLSIU) - Bangalore; Nalsar University of Law - Hyderabad; Gujarat National Law University - Gandhinagar.",
          "Delhi University: Faculty of Law - Delhi University (strong judicial tradition).",
          "Private Law Schools: Symbiosis Law School - Pune; Jindal Global Law School - Delhi; Ashoka University - Delhi.",
          "Judicial Academies: National Judicial Academy - Bhopal (for judicial training); State Judicial Academies (for ongoing judicial education).",
          "Online/Distance: IGNOU offers distance LLB programs."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Investment required for judicial career preparation",
        color: RED3,
        content: [
          "Government Law Schools: ₹50,000–₹2L (Total for 5 years). Highly affordable.",
          "National Law Universities: ₹1L–₹3L (Total for 5 years). Excellent value.",
          "Private Law Schools: ₹5L–₹15L (Total for 5 years). Premium institutions.",
          "PCS-J Coaching: ₹50,000–₹2L for specialized judicial services coaching.",
          "Hostel/Living: ₹10,000–₹20,000 per month depending on city.",
          "Additional Costs: Bar exam fees, judicial academy training, legal research databases.",
          "Total Investment: Approximately ₹15L–₹40L for complete preparation.",
          "ROI: Government salary with lifetime security and pension makes this highly valuable."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial support available for law students pursuing judicial careers",
        color: RED5,
        content: [
          "NLSIU Merit Scholarship: Full tuition waiver for top performers.",
          "Nalsar Scholarships: Merit-based and need-based scholarships.",
          "NSP (National Scholarship Portal): Merit-cum-Means scholarships for SC/ST/OBC students.",
          "State Scholarships: Various states offer scholarships for law students.",
          "Judicial Academy Sponsorships: Some states sponsor promising advocates for judicial training.",
          "Women-Specific: Special scholarships for women law students pursuing judicial careers.",
          "Government Support: Judicial services candidates often receive government support."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Regulatory framework and professional credentials for judges",
        color: RED,
        content: [
          "Bar Council Registration: Mandatory after LLB to practice law.",
          "Bar Exam: State-level bar exam to get enrollment certificate.",
          "PCS-J Examination: State Judicial Services Examination (mandatory for lower judiciary).",
          "",
          "Professional Bodies:",
          "Bar Council of India (BCI): Supreme regulatory body.",
          "State Bar Councils: Regulate lawyers at state level.",
          "Supreme Court Collegium: Recommends judges for higher courts.",
          "",
          "Judicial Training:",
          "National Judicial Academy: Provides training for newly appointed judges.",
          "State Judicial Academies: Ongoing judicial education and development.",
          "Continuing Judicial Education: Mandatory CPD for all judges."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse career paths in the judiciary",
        color: RED2,
        content: [
          "Conventional Careers:",
          "District Judge: Presiding over district-level cases.",
          "High Court Judge: Hearing appellate cases and constitutional matters.",
          "Supreme Court Judge: Deciding cases of national importance.",
          "Tribunal Member: Adjudicating specialized disputes (tax, labor, etc.).",
          "",
          "Specialized Roles:",
          "Constitutional Court Judge: Focusing on constitutional law.",
          "Commercial Court Judge: Handling complex commercial disputes.",
          "Family Court Judge: Presiding over family law matters.",
          "Environmental Court Judge: Addressing environmental disputes.",
          "",
          "Post-Retirement:",
          "International Arbitrator: Resolving international disputes.",
          "Legal Consultant: Advising on judicial matters.",
          "Law Professor: Teaching at universities.",
          "Legal Author: Writing on constitutional and judicial matters."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "Challenges to be aware of in the judicial profession",
        color: RED3,
        content: [
          "Massive Case Backlog: Indian courts have 50+ million pending cases. Judges work under immense pressure.",
          "Emotional Toll: Dealing with human suffering, crime, and injustice daily.",
          "Difficult Decisions: Some cases have no perfect solution; you must choose the lesser evil.",
          "Public Scrutiny: Judges' decisions are publicly criticized and analyzed.",
          "Long Hours: Complex cases require extensive research and judgment writing.",
          "Ethical Dilemmas: Balancing justice with legal technicalities.",
          "Isolation: Judges must maintain distance from society to preserve impartiality."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in the judicial profession",
        color: RED2,
        content: [
          "AI-Assisted Judgment: AI tools will help judges research precedents and analyze cases.",
          "Online Courts: More cases will be heard through virtual courts.",
          "Specialized Tribunals: New tribunals for emerging areas like cyber law and climate law.",
          "Faster Justice: Technology will reduce case backlogs and speed up justice delivery.",
          "International Collaboration: Indian judges will participate more in international arbitration.",
          "Constitutional Evolution: New constitutional interpretations addressing modern challenges.",
          "Judicial Diversity: More women and minority judges in higher courts."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build in School (Class 9–12)",
        icon: "Rocket",
        description: "Actionable steps to start your journey",
        color: RED,
        content: [
          "Master English: Strong writing and communication skills are essential.",
          "Develop Debate Skills: Join debate clubs and participate in competitions.",
          "Read Constitutional Law: Understand India's Constitution and fundamental rights.",
          "Study Current Affairs: Stay updated on legal and political developments.",
          "Learn Logic & Philosophy: Strengthen your reasoning and analytical skills.",
          "Participate in Moot Courts: Practice legal argumentation and judgment writing.",
          "Read Supreme Court Judgments: Understand how judges reason and decide cases."
        ]
      }
    ]
  }
};
