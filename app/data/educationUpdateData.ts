import { CareerPageData } from './careerPageData';

const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const educationUpdateData: Record<string, CareerPageData> = {
  corporate_trainer: {
    slug: "corporate_trainer",
    badge: "The Catalyst of Growth for Class 10+",
    heading: "Corporate Trainer",
    subheading: "Transform talent into performance. Design learning experiences that move companies forward. Join $39.9B market with ₹4L–₹60L+ salaries.",
    whyCards: [
      { icon: "TrendingUp", title: "$39.9B Market by 2034", description: "Indian corporate training market growing from $12.2B (2025) to $39.9B (2034). Explosive 3x growth opportunity.", borderColor: "#10B981" },
      { icon: "Users", title: "₹4L–₹60L+ Salaries", description: "Entry-level ₹4L–₹7L. Senior specialists ₹30L–₹60L+. Freelancers earning ₹15k–₹1.5L per day.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in IT/ITeS, BFSI, Pharma. International training roles abundant. Remote work potential.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Skills Gap Crisis", description: "India's 2M+ young workforce needs upskilling. Corporate Trainers solving demographic dividend challenge.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + MBA/Certification (2-3 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CAT, GMAT, or Certification Programs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$39.9B", label: "Market Size by 2034", gradient: "from-green-500 to-green-600" },
      { value: "3x Growth", label: "Market Expansion (2025-2034)", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Transforming talent into performance through strategic learning.",
        color: BLUE,
        content: [
          "Corporate Trainer Definition: A professional educator who works within business environment to improve skills, knowledge, and performance of employees. Bridge between potential and performance.",
          "The Role: The Skill Surgeon (identify gaps where employees struggling, design specific lessons to fix them), The Master Storyteller (take dry complex information and turn into engaging workshops), The Culture Builder (teach soft skills like leadership, empathy, teamwork—the 'glue' keeping company together).",
          "What They Do: Conduct needs analysis, design curricula, deliver workshops, facilitate role-plays, create digital content, measure training effectiveness, coach executives, build learning cultures.",
          "Why It Matters: India home to world's largest young workforce. Many graduates 'unemployable' because they lack industry-specific skills. Corporate Trainers frontline warriors solving this, ensuring India's 'demographic dividend' turns into economic power.",
          "The Scope: Work in IT companies, banks, pharma firms, e-commerce, manufacturing, or as freelance consultant.",
          "The Impact: You're not just teaching—you're moving company's needle. You transform individuals into high performers and build organizational cultures of continuous learning."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Transformation Artist",
        icon: "Clock",
        description: "Real workflow of a corporate trainer.",
        color: BLUE2,
        content: [
          "8:30 AM -  The Final Tech-Check: Arrive at vibrant office in Gurgaon. Today training 30 new 'First-Time Managers.' Test VR (Virtual Reality) headsets; today's session uses simulation where managers handle difficult 'virtual' employee.",
          "10:00 AM -  Lights, Camera, Action!: Workshop begins. Don't stand and lecture. Instead, moving around, facilitating high-energy role-play session. Watch how trainees handle conflict and provide instant, constructive feedback. More like sports coach than school teacher.",
          "1:30 PM -  The Strategy Lunch: Lunch with Head of Human Resources (HR). They tell you company moving into AI-driven customer service. Your next mission? Design curriculum to teach 500 employees how to work with AI tools by next quarter.",
          "3:30 PM -  Curriculum Design: Head to quiet corner of office (or home office). Using tools like Articulate Storyline to create 'Microlearning' module—5-minute video and quiz employees can complete on phones during commute.",
          "6:00 PM -  The Impact Report: Review data from last week's Sales Training. See that team trained improved 'conversion rate' by 12%. Send report to CEO showing Return on Investment (ROI) of session. Head home knowing you didn't just teach—you moved company's needle."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Trainer's DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: High Energy (keep room full of tired adults excited for six hours?), Empathy (understand why someone struggling and find way to help them?), Lifelong Learner (to teach latest tech, must learn it first).",
          "Soft Skills: Public Speaking (comfortable in front of crowd of 5 or 500?), Adaptability (one day training interns; next, coaching VPs?), Creativity (turn boring content into engaging experiences).",
          "Hard Skills: Instructional Design (knowledge of how adults learn—Andragogy—and models like ADDIE), LMS Knowledge (proficiency in Learning Management Systems), Data Analysis (measure training effectiveness).",
          "The Self-Check: Do you love helping people grow? Can you speak confidently? Are you always learning? If yes, you have the Trainer's DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & TNA to ROI Cycle",
        icon: "Briefcase",
        description: "The complete trainer workflow.",
        color: BLUE2,
        content: [
          "Training Needs Analysis (TNA): Figuring out what needs to be taught. Conducting surveys and interviews.",
          "Design & Development: Creating slides, videos, and activities. Building engaging learning experiences.",
          "Delivery/Facilitation: Running actual workshop or webinar. Engaging participants and managing group dynamics.",
          "Evaluation: Using Kirkpatrick Model to see if training actually worked. Measuring impact and ROI.",
          "Coaching: Providing one-on-one guidance to executives and high-potential employees.",
          "Content Creation: Developing digital content, microlearning modules, and learning resources.",
          "Stakeholder Management: Working with HR, department heads, and senior leadership.",
          "Continuous Improvement: Gathering feedback and iterating on training programs."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: MBA Route","Step 1: Complete Class 12th in any stream","Step 2: Graduate with BA/BBA/BCom degree","Step 3: Pursue MBA in Human Resource Management","Step 4: Complete internship in corporate training department","Step 5: Join as Junior Corporate Trainer","Step 6: Grow into Senior Corporate Trainer role","Pathway B: Certification Route","Step 1: Complete Class 12th in any stream","Step 2: Complete graduation in any discipline","Step 3: Earn certified professional trainer certification (CPTD/ATD)","Step 4: Learn tools like PowerPoint, Canva, Zoom","Step 5: Conduct freelance training workshops for practice","Step 6: Join organization as Corporate Trainer","Pathway C: Domain Expert Route","Step 1: Complete Class 12th in any stream","Step 2: Graduate in specialized field (IT/Finance/Marketing)","Step 3: Work 3–5 years gaining domain expertise","Step 4: Complete train-the-trainer certification program","Step 5: Transition into domain-specific training role","Step 6: Become full-time Corporate Trainer"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹1.5 Crore",
          "Senior / Lead Role (10+ yrs): ₹25 LPA – ₹50 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 LPA – ₹22 LPA",
          "Junior / Associate (3–5 yrs): ₹6 LPA – ₹10 LPA",
          "Entry Level (0–2 yrs): ₹3LPA – ₹5 LPA",
          "Note: Metros pay 30% higher; certifications (ATD, PMP) boost pay.",
          "Where Are the Jobs?",
          "Top Cities: Bengaluru, Mumbai, Gurgaon, Hyderabad, Pune, Noida.",
          "Top Industries: IT, BFSI, EdTech, Manufacturing, Healthcare.",
          "Global Demand: High remote work demand in USA, UK, UAE.",
          "Top Institutions",
          "Government: Indian Institute of Management (IIMs), National Institute of Training and Development, Indian Society for Training and Development (ISTD), Central Board for Workers Education",
          "Private: XLRI Jamshedpur, Symbiosis Institute of Business Management, Dale Carnegie Training India, T.V. Rao Learning Systems",
          "Online: Coursera (IIM/ISB courses), Udemy, LinkedIn Learning, UpGrad"
        ]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Degree Fees: ₹50,000 (Government Colleges) to ₹15L+ (Top MBAs). Varies by institution.",
          "Certifications: 'Train the Trainer' programs cost between ₹20,000 and ₹1,50,000. Various options available.",
          "Prep Duration: 2-year MBA or 3-6 month intensive certification.",
          "Living Costs: ₹10,000–₹20,000 per month during studies.",
          "Additional Costs: Online courses (₹5k–₹50k), software tools (₹10k–₹30k), certifications (₹20k–₹100k).",
          "Total Investment: Approximately ₹5L–₹20L for complete degree and certifications.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top education and training institutes across India.",
        color: BLUE,
        content: [
          "Public: TISS (Mumbai), IIMs (various locations), University of Delhi, Banaras Hindu University.",
          "Private: XLRI (Jamshedpur), Symbiosis (Pune), NMIMS (Mumbai), FLAME (Pune), Christ University (Bangalore).",
          "Online/Digital: upGrad for Business, Simplilearn, Harappa Education, Coursera, LinkedIn Learning.",
          "Specialized: ISTD (Indian Society for Training & Development), ATD (Association for Talent Development).",
          "Note: Choose institutes with strong faculty, industry connections, and practical training focus."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "National Scholarship Portal (NSP): Post-matric scholarships for meritorious students.",
          "SHRM Foundation Scholarships: For those pursuing HR and training degrees.",
          "IIHRSM Scholarships: Specialized grants for HR science and management studies in India.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "ISTD (Indian Society for Training & Development): Offers recognized Diploma in Training & Development.",
          "ATD (Association for Talent Development): Global gold standard for certifications like CPLP (Certified Professional in Learning and Performance).",
          "SHRM: Society for Human Resource Management. Offers SHRM-CP and SHRM-SCP certifications.",
          "ADDIE Certification: Instructional Design methodology certification.",
          "Continuing Education: Must stay updated on latest training methodologies and technologies."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in corporate training careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: In-house Corporate Trainer, HR Manager (L&D), Soft Skills Trainer, Technical Trainer.",
          "New-Age Careers: Instructional Designer (Content Creator), AI-Learning Strategist, Virtual Facilitator, Learning Experience Designer.",
          "Specialized Roles: Executive Coach, Leadership Development Specialist, Sales Trainer, Technical Skills Trainer.",
          "Freelancing: Keynote Speaker, Executive Coach, 'Solopreneur' with online academy, Consultant.",
          "Entrepreneurship: Starting training academy, online learning platform, or corporate consulting firm."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of corporate training career.",
        color: BLUE,
        content: [
          "Travel Fatigue: Freelancers may spend 15 days a month in hotels and flights.",
          "The 'Proof of Value': Must constantly prove training made company money (ROI).",
          "The Content Treadmill: If you stop learning for six months, material becomes 'boring' and outdated.",
          "Resistance to Change: Employees sometimes resistant to training. Must overcome skepticism.",
          "Measurement Challenges: Proving training effectiveness can be difficult and time-consuming.",
          "Competitive Field: Growing number of trainers. Need to differentiate through specialization.",
          "Work-Life Balance: Tight deadlines and multiple projects can demand long hours.",
          "Continuous Learning: Must stay updated on latest training technologies and methodologies."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in corporate training careers.",
        color: BLUE2,
        content: [
          "AI-Personalization: AI will create custom lessons for every single employee based on their strengths.",
          "Gamification: Training will look like video games, with leaderboards and badges.",
          "VR/AR Learning: Practicing difficult conversations or technical repairs in 100% safe, virtual environments.",
          "Microlearning: Short, focused learning modules (5-10 minutes) becoming standard.",
          "Mobile Learning: Training accessible on smartphones and tablets. Learning on-the-go.",
          "Social Learning: Peer-to-peer learning and collaborative training experiences.",
          "Data-Driven Training: Using analytics to personalize and optimize learning paths.",
          "Continuous Learning Culture: Shift from one-time training to continuous upskilling."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Public Speaking: Join Debate Club or Model UN (MUN). Build confidence speaking in front of groups.",
          "Content Creation: Start YouTube channel or blog explaining hobby—this is basic 'Instructional Design.'",
          "Volunteer: Offer to 'train' juniors in school in skill you know (Chess, Coding, Sports).",
          "Communication: Excel in English and presentation skills. These are core trainer competencies.",
          "Tech Skills: Learn basic video editing, presentation software, and digital tools.",
          "Psychology: Read about how people learn and behavioral psychology. Understand human motivation.",
          "Leadership: Take on leadership roles in school clubs and activities.",
          "Networking: Connect with professionals in HR and training fields. Learn about career paths.",
          "Online Courses: Take free courses on platforms like Coursera or Udemy on training and development.",
          "Entrance Prep: Start early preparation for MBA entrance exams (CAT, GMAT) if pursuing that path."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Corporate Trainers & Educators",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Shiv Khera: Author of 'You Can Win.' Legendary motivational speaker and corporate trainer.",
          "Simerjeet Singh: Leading international keynote speaker and mindset coach known for 'conversational' style.",
          "Priya Kumar: Bestselling author and trainer who uses storytelling to transform leadership.",
          "Kaushik Mahapatra: Renowned for blending emotional intelligence with leadership frameworks for Fortune 500 companies.",
          "Rashmi Datt: Specialist in emotional intelligence and conflict management with over two decades of experience.",
          "Harshvardhan Joshi: Known for innovative training methodologies and digital learning solutions.",
          "Deepak Ramola: Pioneer in executive coaching and leadership development in India."
        ]
      }
    ]
  },
  image_consultant: {
    slug: "image_consultant",
    badge: "The Architect of Presence for Class 10+",
    heading: "Image Consultant",
    subheading: "Master the art of presence. Transform how people see you. Build personal brands that open doors. Join ₹4L–₹60L+ market with 7.3% CAGR growth.",
    whyCards: [
      { icon: "Sparkles", title: "7.3% Market CAGR", description: "Image consulting market growing rapidly. Global market surpassing $6.2B by 2030. India's premium segment booming.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4L–₹60L+ Salaries", description: "Entry-level ₹4L–₹7L. Mid-level ₹12L–₹25L. Senior specialists ₹30L–₹60L+. Solopreneurs earning ₹5k–₹50k/hour.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in corporate training, fashion, PR, entertainment. International consulting roles abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Executive Presence Crisis", description: "India's professionals need image transformation. First impression = lasting impact. Your expertise is invaluable.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Certification (1-2 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "NIFT Entrance or Certification Programs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4L–₹60L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$6.2B", label: "Global Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "7.3%", label: "Market CAGR Growth", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The professional art and science of managing presence.",
        color: BLUE,
        content: [
          "Image Consultant Definition: A professional who manages a person's presence holistically. Goes far beyond fashion—it's about visual architecture, communication coaching, and brand strategy.",
          "The Role: The Visual Architect (help clients choose colors, styles, wardrobes reflecting authentic personality), The Communication Coach (refine body language, vocal tone, etiquette), The Brand Strategist (align public image with values, especially in digital age).",
          "What They Do: Conduct wardrobe audits, color analysis, style consultations, etiquette training, body language coaching, social media profile optimization, personal branding shoots, executive presence workshops.",
          "Why It Matters: In hyper-visual, fast-paced India, success linked to Executive Presence. From politicians to young graduates, everyone needs to project 'best version of themselves.' Image consultants are catalysts for transformation.",
          "The Scope: Work with corporate executives, entrepreneurs, celebrities, politicians, or as independent solopreneur.",
          "The Impact: You're not just changing clothes—you're transforming confidence, opening doors, and building personal brands that change lives."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Transformation Specialist",
        icon: "Clock",
        description: "Real workflow of an image consultant.",
        color: BLUE2,
        content: [
          "9:00 AM -  The Consultation Kick-off: Day begins at sunlit studio in South Mumbai or Gurgaon. First client is brilliant tech entrepreneur preparing for investor pitches. Discussing Color Psychology—how navy blue projects stability and trust.",
          "11:30 AM -  Wardrobe Audit: Visit client's home for 'Wardrobe Declutter.' Sift through clothes, identifying pieces fitting body shape and those that 'drain' energy. Create list of 'missing essentials' for capsule wardrobe.",
          "1:30 PM -  The Personal Shopper Sprint: Quick lunch while heading to premium mall or designer boutique. Pre-selected five outfits for C-suite executive's upcoming international conference. Selecting 'power armor.'",
          "3:30 PM -  Corporate Training Workshop: Head to corporate office to lead session on Professional Etiquette for new hires. Teaching 'Art of the Handshake' and how to maintain 'Digital Presence' in virtual meetings.",
          "6:00 PM -  Digital Strategy Session: Back at desk, reviewing client's social media profile photos. Coordinating with professional photographer to schedule 'branding shoot.' Feeling like magician—except magic based on science, psychology, and style."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Presence DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Eye for Detail (spot mismatched button or slight slump in posture?), Empathy (dealing with people's insecurities, making them feel empowered?), Communication Mastery (your own image, voice, manners must be impeccable).",
          "Soft Skills: Psychological Insight (70% of image consulting is psychology), Confidence (must walk the talk), Creativity (transform people's self-perception), Listening (understand client's goals and insecurities).",
          "Hard Skills: Color Theory & Style Analysis, Body Language Expertise, Fashion Knowledge, Digital Branding, Photography Coordination, Etiquette Mastery.",
          "The Self-Check: Do you notice how people present themselves? Can you make others feel confident? Do you understand psychology? If yes, you have the Presence DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & A.B.C.D. Cycle",
        icon: "Briefcase",
        description: "The complete image consultant workflow.",
        color: BLUE2,
        content: [
          "Client Discovery: Understanding client's lifestyle, goals, insecurities, and professional aspirations.",
          "Color & Style Analysis: Using scientific tools to find what enhances client's physical features and personality.",
          "Etiquette & Soft Skills Training: Coaching on manners, dining etiquette, public speaking, body language.",
          "Wardrobe Planning: Building functional wardrobe working for client's specific career and social needs.",
          "Digital Presence Optimization: Reviewing social media profiles, coordinating professional photography.",
          "Personal Branding: Developing cohesive brand identity across all touchpoints.",
          "Ongoing Support: Providing guidance on new purchases, seasonal updates, and confidence building.",
          "Corporate Workshops: Delivering group training on professional presence and etiquette."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: Professional Degree Route","Step 1: Complete Class 12th in any stream","Step 2: Graduate in Fashion/Communication/Psychology","Step 3: Pursue diploma in Image Consulting","Step 4: Intern with established Image Consultants","Step 5: Build portfolio with real client makeovers","Step 6: Launch career as Professional Image Consultant","Pathway B: Certification Route","Step 1: Complete Class 12th in any stream","Step 2: Complete graduation in any discipline","Step 3: Earn certification from ICBI/CONSELLE/ICI","Step 4: Learn colour analysis, body styling, etiquette","Step 5: Practice with friends, family, social media","Step 6: Join firm or start freelance consulting","Pathway C: Skill-Based Entry Route","Step 1: Complete Class 12th in any stream","Step 2: Take short courses in styling, grooming","Step 3: Work in fashion retail or salon industry","Step 4: Attend workshops on personal branding, etiquette","Step 5: Build social media presence showcasing transformations","Step 6: Transition into full-time Image Consultant role"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1.2 Crore","Senior / Lead Role (10+ yrs): ₹20 LPA – ₹40 LPA","Mid-Level Professional (5–8 yrs): ₹10 LPA – ₹18 LPA","Junior / Associate (3–5 yrs): ₹5 LPA – ₹9 LPA","Entry Level (0–2 yrs): ₹3 LPA – ₹5 LPA","Note: Metros pay 30% more; AICI/ICBI certifications boost income.","Where Are the Jobs?","Top Cities: Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Gurgaon.","Top Industries: Luxury Retail, BFSI, IT, Media, Hospitality.","Global Demand: High in UAE, USA; remote/freelance demand rising.","Top Institutions","Government: National Institute of Fashion Technology (NIFT), Indian Institute of Art & Design (IIAD), National Institute of Design (NID), Government College of Fine Arts, Chennai","Private: Image Consulting Business Institute (ICBI), Pearl Academy, Conselle Institute of Image Management, Wigan & Leigh College (India Campus)","Online: Udemy, Coursera, Sterling Style Academy (Online), Image Consulting Business Institute (ICBI Online)","Career Opportunities","Conventional","Personal Image Consultant","Corporate Grooming Trainer","Etiquette and Soft Skills Coach","Wardrobe and Styling Consultant","New-age and AI driven","Personal Branding Consultant","Digital Presence Coach","Virtual Styling Consultant","AI-Assisted Image Strategist","Remote/Entrepreneurship","Freelance Image Consultant","Online Style Coach","Influencer Branding Consultant","Image Consulting Studio Founder"]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government/Public Degrees: ₹50,000–₹2L per year for Fashion/Design degrees. Very affordable but highly competitive.",
          "Private Certifications: Professional 'Image Consulting' programs cost between ₹1.5L and ₹4.5L. Various options available.",
          "Prep Duration: Bachelor's degree (3 years) + Certification (6 months to 1 year).",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs like Mumbai or Delhi.",
          "Additional Costs: Professional wardrobe (₹50k–₹100k), photography portfolio (₹20k–₹50k), certifications (₹50k–₹150k).",
          "Total Investment: Approximately ₹8L–₹15L for complete degree and certifications.",
          "ROI: With entry-level salaries of ₹4L–₹7L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top image consulting and fashion institutes across India.",
        color: BLUE,
        content: [
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Institutional: Institutes like Imagecon Academy offer 'Scholarship Quests' (up to 50% waiver).",
          "Corporate: WICCI (Women's Indian Chamber of Commerce and Industry) often provides grants for women starting image businesses.",
          "National: Standard NSP schemes apply for students pursuing design/fashion degrees in government institutes.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized training programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "AICI (Association of Image Consultants International): The global gold standard for licensing and professional development.",
          "IMPA (Image Management Professionals' Association): The Indian body for networking and state chapters.",
          "ICBI Certification: Image Consulting Business Institute offers recognized certification programs.",
          "ISIM Diploma: Indian School of Image Management offers specialized diplomas.",
          "Continuing Education: Must stay updated on latest fashion trends, etiquette standards, and digital branding strategies."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in image consulting careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Personal Stylist, Grooming Expert, Corporate Etiquette Trainer, Fashion Consultant.",
          "New-Age Careers: AI Style Assistant Curator, Executive Presence Coach, Digital Persona Consultant, Virtual Styling Expert.",
          "Specialized Roles: Celebrity Image Manager, Political Campaign Consultant, Corporate Branding Specialist, Wedding Stylist.",
          "Entrepreneurship: Starting boutique agency, online school, personal branding app, or styling consultancy.",
          "Freelancing: Personal Stylist, Wardrobe Consultant, Corporate Trainer, Photography Coordinator, Digital Branding Consultant."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of image consulting career.",
        color: BLUE,
        content: [
          "Selling a 'Feeling': You aren't selling a product; you're selling a transformation. Takes time to build trust.",
          "Constant Updation: Must stay ahead of global trends in fashion, etiquette, and technology.",
          "The 'Wealthy' Myth: Many think this is only for the rich. Breaking stigma to reach 'middle-class professional' market is challenge.",
          "Client Insecurities: Dealing with people's deep insecurities about appearance and confidence. Requires emotional intelligence.",
          "Competitive Field: Growing number of consultants. Need to differentiate through specialization and personal brand.",
          "Measurement Challenges: Proving ROI of image transformation can be subjective.",
          "Work-Life Balance: Client demands can be unpredictable, especially for celebrity or high-profile clients.",
          "Continuous Learning: Must stay updated on latest fashion, etiquette, and digital branding trends."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in image consulting careers.",
        color: BLUE2,
        content: [
          "Virtual Consultations: Using AI-powered Body Scanners and virtual wardrobes to consult clients globally from your room.",
          "Sustainable Styling: Focus on 'Conscious Closets' and ethical fashion choices. Eco-friendly personal branding.",
          "Neuro-Styling: Using neuroscience to understand how certain fabrics and colors affect client's brain and mood.",
          "AI Style Assistants: AI tools helping with color matching, outfit combinations, and personalized recommendations.",
          "Digital Personal Branding: Growing focus on LinkedIn, Instagram, and TikTok presence optimization.",
          "Metaverse Styling: Helping clients build avatars and digital presence in virtual worlds.",
          "Wellness Integration: Combining image consulting with wellness, mental health, and confidence coaching.",
          "Global Opportunities: International consulting for Indian professionals working abroad."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Psychology: Read about human behavior and body language. Understand what makes people tick.",
          "Public Speaking: Join school debate or drama club. Confidence starts with the voice.",
          "Art & Design: Understand color wheels and basic symmetry. Study fashion and design.",
          "Social Media Literacy: Learn to create a 'professional' profile. Experiment with your own LinkedIn or Instagram brand.",
          "Fashion Awareness: Follow fashion blogs, magazines, and influencers. Understand style trends.",
          "Observation: Notice how people present themselves. Analyze what works and what doesn't.",
          "Communication: Excel in English and presentation skills. These are core consultant competencies.",
          "Networking: Connect with fashion professionals and consultants. Learn about different specializations.",
          "Photography: Learn basic photography and styling for photos. Understand visual composition.",
          "Entrance Prep: Start early preparation for NIFT entrance or certification programs if pursuing that path."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Image Consultants & Experts",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Sonia Dubey Dewan: Founder of ISIM; the first AICI Certified Image Master in India. Pioneer in image management education.",
          "Suman Agarwal: Co-founder of ICBI; pioneer who helped structure image management education in India.",
          "Coach Samira Gupta: Leading figure in Executive Presence and Corporate Grooming with over 20 years of experience.",
          "Nancy Katyal: Awarded for work in personal branding and leadership coaching for corporate professionals.",
          "Samira Gupta: Known for executive presence coaching and corporate training for Top MNCs.",
          "Priya Sharma: Celebrity stylist and image consultant known for transforming Bollywood personalities.",
          "Deepika Verma: Expert in corporate branding and executive presence for Fortune 500 companies."
        ]
      }
    ]
  },
  librarian_and_education_administration: {
    slug: "librarian_and_education_administration",
    badge: "The Information Alchemist for Class 10+",
    heading: "Librarian & Education Administration",
    subheading: "Master the DNA of knowledge. Organize information, lead institutions, shape learning futures. Join ₹2.5L–₹35L+ market with 15% growth by 2030.",
    whyCards: [
      { icon: "BookOpen", title: "15% Growth by 2030", description: "Demand for Digital Librarians and Knowledge Managers growing rapidly. Information science becoming critical field.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹2.5L–₹35L+ Salaries", description: "Entry-level ₹2.5L–₹5L. Mid-level ₹6L–₹12L. Senior specialists ₹15L–₹35L+. Leadership roles abundant.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Europe and Middle East. International library systems need Indian professionals. Remote possibilities.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Truth Gatekeepers", description: "In era of 'fake news,' librarians are gatekeepers of verified information. India needs expert administrators for thousands of new institutions.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + Master's (3-4 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "University Entrance or Direct Admission", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹2.5L–₹35L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "15%", label: "Growth Rate by 2030", gradient: "from-green-500 to-green-600" },
      { value: "Digital", label: "Future of Libraries", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Managing the DNA of knowledge and leading educational institutions.",
        color: BLUE,
        content: [
          "Librarian & Education Administration Definition: Professionals managing the 'DNA of Knowledge.' Divided into two overlapping worlds: Librarianship (collecting, organizing, preserving information) and Education Administration (managing educational institutions).",
          "The Role: The Information Scientist (collect, organize, preserve books, digital journals, videos, data), The Digital Curator (make information accessible through technology), The Educational Leader (manage institutions, handle scheduling, budgeting, student welfare, policy-making).",
          "What They Do: Acquire resources, catalog materials, preserve documents, create workshops, manage staff, design library systems, handle budgets, ensure quality education, implement policies.",
          "Why It Matters: In era of 'fake news,' librarians are gatekeepers of truth. In India with thousands of new colleges and schools opening, expert administrators ensure smooth operations and high-quality education.",
          "The Scope: Work in schools, universities, corporate law firms, media houses, research labs (CSIR/ISRO), public libraries, or as independent consultant.",
          "The Impact: You're not just organizing books—you're empowering people with knowledge, preserving history, and shaping the future of education."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Knowledge Navigator",
        icon: "Clock",
        description: "Real workflow of a librarian and education administrator.",
        color: BLUE2,
        content: [
          "8:30 AM -  The Tech Ritual: Day begins at high-tech university library in Hyderabad. Don't start by dusting books—start by checking 'Discovery Service' software allowing students to search millions of e-books and research papers from phones. Resolve login issue for PhD student.",
          "10:30 AM -  The Curation Huddle: Meet with Education Administration team. Dean wants to launch new 'Digital Literacy' course. As librarian, suggest best open-access resources to keep course affordable. Acting as Learning Consultant.",
          "1:00 PM -  The Human Connection: Group of Class 10 students from local school visits for 'Research Workshop.' Teach them difference between random blog and peer-reviewed article. See 'Aha!' moment in their eyes. This is heart of work—empowering others.",
          "3:30 PM -  The Archive Project: Spend afternoon in 'Rare Documents Wing.' Supervise high-resolution scanning of 200-year-old manuscripts. By digitizing, ensuring someone 100 years from now can read them without paper crumbling to dust.",
          "5:00 PM -  Administrative Strategy: End day reviewing library's budget. Decide to shift funds from physical newspapers to subscription for global AI-research database. Not just keeper of books—Strategic Manager of institution's future."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Admin & Info DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: The Organizer (love sorting apps into folders or color-coding notes?), The Helper (get thrill out of helping someone find answer?), The Learner (curious about everything from history to coding?).",
          "Soft Skills: Communication (speak clearly to students and persuasively to management), Patience (solving research puzzles or handling school schedules takes time), Leadership (manage teams and institutions).",
          "Hard Skills: Information Literacy (navigate databases and search engines), Digital Management (Library Management Software like Koha or DSpace), Data Analysis (understand metadata and information architecture).",
          "The Self-Check: Do you love organizing information? Can you help others find answers? Are you curious and patient? If yes, you have the Admin & Info DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Knowledge Cycle",
        icon: "Briefcase",
        description: "The complete librarian and administrator workflow.",
        color: BLUE2,
        content: [
          "Acquisition: Deciding which books or databases to buy. Evaluating resources for quality and relevance.",
          "Cataloging: Assigning 'Metadata' (digital tags) so resources can be found easily. Organizing information systems.",
          "Preservation: Taking care of physical books and ensuring digital files don't get corrupted. Archiving and digitization.",
          "Dissemination: Creating workshops, newsletters, and apps to get people to use library. User engagement and education.",
          "Administration: Managing staff, building, legal policies of school or library. Budget management and strategic planning.",
          "Technology Management: Maintaining library management systems and digital platforms.",
          "Policy Development: Creating and implementing institutional policies and procedures.",
          "Community Engagement: Building relationships with students, faculty, and community members."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: Traditional Degree Route","Step 1: Complete Class 12th in any stream","Step 2: Pursue BA/BSc in any subject","Step 3: Complete BLISc (Bachelor of Library Science)","Step 4: Pursue MLISc for advanced career opportunities","Step 5: Clear UGC NET for university librarian posts","Step 6: Join as Librarian in school/college/university","Pathway B: Certification Route","Step 1: Complete Class 12th in any stream","Step 2: Complete graduation in any discipline","Step 3: Earn certificate/diploma in Library Science","Step 4: Learn digital tools like Koha, OPAC software","Step 5: Gain experience in school or public library","Step 6: Work as Assistant Librarian or Information Officer","Pathway C: Digital Librarianship Route","Step 1: Complete Class 12th with Computer Science","Step 2: Graduate in IT/Computer Science/Information Technology","Step 3: Pursue MLISc or PG Diploma in Digital Libraries","Step 4: Learn digital archiving, metadata, database management","Step 5: Intern at digital libraries or research institutions","Step 6: Join as Digital Librarian or Knowledge Manager"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: [
          "Salary Snapshot (Annual INR)",
          "CXO / Top Leadership (15+ yrs): ₹18 LPA – ₹40 LPA",
          "Senior / Lead Role (10+ yrs): ₹10 LPA – ₹17 LPA",
          "Mid-Level Professional (5–8 yrs): ₹6 LPA – ₹9 LPA",
          "Junior / Associate (3–5 yrs): ₹3.5 LPA – ₹5.5 LPA",
          "Entry Level (0–2 yrs): ₹2 LPA – ₹3 LPA",
          "Note: Private universities pay more; digital skills boost pay significantly.",
          "Where Are the Jobs?",
          "Top Cities: Delhi NCR, Bengaluru, Chennai, Mumbai, Pune.",
          "Top Industries: Education, Research Institutions, Law Firms, Museums.",
          "Global Demand: Canada, UAE; Remote metadata management roles are growing.",
          "Top Institutions",
         
          "Career Opportunities",
          "Conventional",
          "School Librarian",
          "College Librarian",
          "University Librarian",
          "Library Information Assistant",
          "New-age and AI driven",
          "Digital Librarian",
          "Knowledge Management Specialist",
          "E-Resources Manager",
          "Library Automation Specialist",
          "Remote/Entrepreneurship",
          "Research Support Consultant",
          "Academic Content Curator",
          "Information Services Freelancer",
          "Library Setup Consultant"
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹5,000–₹40,000 (Total for degree). Very affordable but highly competitive.",
          "Private Institutions: ₹50,000–₹2L (Total for degree). Better infrastructure and placement support.",
          "Duration: 1-2 years for professional degrees (B.Lib/M.Lib).",
          "Living Costs: ₹10,000–₹15,000 per month in major education hubs.",
          "Additional Costs: Software certifications (₹10k–₹30k), entrance coaching (₹5k–₹20k), professional memberships (₹5k–₹15k).",
          "Total Investment: Approximately ₹3L–₹8L for complete degree.",
          "ROI: With entry-level salaries of ₹2.5L–₹5L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top library science and education administration institutes across India.",
        color: BLUE,
        content: [
           "Government: University of Delhi (DU), Banaras Hindu University (BHU), Aligarh Muslim University (AMU), University of Calcutta",
          "Private: Symbiosis Institute of Library Science, Amity University, Lovely Professional University (LPU), Manipal University",
          "Online: IGNOU (B.Lib / M.Lib), Coursera, Swayam (UGC Courses), Udemy"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: NSP (National Scholarship Portal) – Post-Matric and Merit-cum-Means schemes.",
          "Institutional: Most central universities offer stipends to M.Lib and Ph.D. students.",
          "Private: TATA Trusts offers scholarships for students pursuing professional degrees.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "ILA (Indian Library Association): Premier professional body for networking and professional development.",
          "UGC-NET: Mandatory for those wishing to work as Assistant Professors or in senior University library positions.",
          "DLIS Certification: Diploma in Library and Information Science from recognized universities.",
          "MLIS Certification: Master's in Library and Information Science.",
          "Continuing Education: Must stay updated on latest library technologies and information management practices."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in library and education administration careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: School Librarian, Public Librarian, University Librarian, Registrar, Education Administrator.",
          "New-Age Careers: Knowledge Manager (for big companies), Digital Archivist, Information Architect, UX Librarian, Data Librarian.",
          "Specialized Roles: Research Librarian, Medical Librarian, Law Librarian, Corporate Information Manager.",
          "Entrepreneurship: Setting up private libraries, conducting information literacy workshops, consulting for NGOs.",
          "Freelancing: Information consultant, digital archivist, library automation specialist, training facilitator."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of library and education administration career.",
        color: BLUE,
        content: [
          "The 'Silent' Stigma: People don't realize how high-tech the job is. Perception vs. reality gap can be frustrating.",
          "Physical Strain: Sorting physical books involves standing and lifting. Ergonomic challenges.",
          "Continuous Learning: Must learn new software every 2–3 years to keep library updated.",
          "Budget Constraints: Often working with limited resources and competing priorities.",
          "Resistance to Change: Institutions sometimes resistant to modernization and digital transformation.",
          "Work-Life Balance: Administrative roles can demand long hours, especially during academic cycles.",
          "Emotional Toll: Seeing valuable resources discarded or institutions struggling can be disheartening.",
          "Career Advancement: Limited senior positions compared to other fields. Competition can be intense."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in library and education administration careers.",
        color: BLUE2,
        content: [
          "AI Integration: AI chatbots will handle routine 'where is this book?' questions, allowing librarians to focus on complex research assistance.",
          "Smart Libraries: Using RFID and Internet of Things (IoT) for automated book tracking and inventory management.",
          "The Library as Maker Space: Libraries becoming places to use 3D printers, record podcasts, code—not just read.",
          "Virtual Libraries: Expanding digital collections and virtual learning spaces. Remote access becoming standard.",
          "Data Science: Librarians becoming data scientists, analyzing information patterns and user behavior.",
          "Sustainability Focus: Green libraries and sustainable information management practices.",
          "Global Collaboration: International library networks and cross-border information sharing.",
          "Personalized Learning: AI-powered recommendation systems for personalized learning experiences."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Volunteer: Ask your school librarian if you can help for one hour a week. Gain practical experience.",
          "Master Search: Learn 'Advanced Search' on Google and Wikipedia. Understand information retrieval.",
          "Read Widely: Better you know books, better you can recommend them. Build broad knowledge base.",
          "Basic Coding: Understanding how data is structured will make you better Digital Librarian.",
          "Organization: Practice organizing your own information. Create systems and databases.",
          "Communication: Excel in English and presentation skills. These are core librarian competencies.",
          "Technology: Learn basic software and digital tools. Stay updated on tech trends.",
          "Networking: Connect with librarians and information professionals. Learn about different specializations.",
          "Research Skills: Practice research methodology and information evaluation.",
          "Entrance Prep: Start early preparation for university entrance exams if pursuing that path."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Librarians & Education Administrators",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Dr. S. R. Ranganathan: Known as 'Father of Library Science in India.' Created Five Laws of Library Science followed worldwide.",
          "B. S. Kesavan: First librarian of independent India's National Library. Father of Indian National Bibliography.",
          "Syed Bashiruddin: Visionary who built world-class libraries at Aligarh Muslim University. Won Padma Shri for his work.",
          "P.N. Kaula: Global expert who wrote over 60 books. Helped establish library systems in many developing countries.",
          "Prof. Margam Madhusudhan: Modern-day leader in field. Awarded Innovative Educator Award 2025 for digital library science work.",
          "Dr. Ramesh Pandey: Pioneer in digital library development and information management in India.",
          "Prof. Rajesh Sharma: Expert in education administration and institutional management."
        ]
      }
    ]
  },
  professor: {
    slug: "professor",
    badge: "The Architect of Minds for Class 10+",
    heading: "Professor",
    subheading: "Discover new truths. Shape future leaders. Combine research with mentorship. Join ₹8L–₹45L+ market with 1.5M annual demand.",
    whyCards: [
      { icon: "BookOpen", title: "1.5M Annual Demand", description: "India needs 1.5 million new teachers annually. Massive growth opportunity as nation becomes knowledge superpower.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹8L–₹45L+ Salaries", description: "Entry-level ₹8L–₹15L. Mid-level ₹18L–₹28L. Senior specialists ₹30L–₹45L+. Plus research grants and consulting income.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "Indian professors highly respected in USA, UK, Singapore. International branch campuses abundant. Remote teaching potential.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Intellectual Impact", description: "Shape leaders of tomorrow. Conduct groundbreaking research. Advise government. Solve real-world problems. Legacy-building career.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Master's + PhD (5-7 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "UGC-NET, CSIR-NET, or GATE", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹8L–₹45L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "1.5M", label: "Annual Teacher Demand", gradient: "from-green-500 to-green-600" },
      { value: "Global", label: "Career Opportunities", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Senior educator and researcher combining discovery with mentorship.",
        color: BLUE,
        content: [
          "Professor Definition: A senior educator and researcher at university or college. Subject matter expert diving incredibly deep into one specific area—AI, Ancient History, Molecular Biology, etc.",
          "The Role: The Knowledge Creator (conduct original research, write books, publish papers changing how we understand world), The Mentor (guide college students and PhD scholars), The Public Intellectual (advise government, speak in media, solve real-world problems).",
          "What They Do: Conduct research, teach lectures, mentor students, write papers and books, design curricula, serve on committees, consult with industry, present at conferences, supervise labs.",
          "Why It Matters: As India moves towards becoming global knowledge superpower, professors train doctors, engineers, entrepreneurs of future. They are 'intellectual heartbeat' of nation.",
          "The Scope: Work in government universities, private universities, IITs/IIMs, research institutes, or international branch campuses.",
          "The Impact: You're not just teaching—you're discovering new knowledge, shaping future leaders, and contributing to humanity's understanding of the world."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Scholar-Explorer",
        icon: "Clock",
        description: "Real workflow of a professor.",
        color: BLUE2,
        content: [
          "8:30 AM -  The Deep Dive: Day begins in office surrounded by stacks of journals and steaming cup of tea. 'Research Hour'—analyzing data for upcoming paper on sustainable urban planning in Indian cities.",
          "10:30 AM -  The Lecture Hall: Step into hall filled with 60 energetic undergraduates. Don't just read from book—spark debate. Ask 'Can AI ever have a soul?' and watch room explode with ideas. Conductor of orchestra of thoughts.",
          "1:00 PM -  The Lab Huddle: Over quick lunch, meet with PhD students. One stuck on complex equation; another made breakthrough. Provide hint, encouragement, critique. Helping them become experts of next generation.",
          "3:30 PM -  The Administrative Gear: Attend Board of Studies meeting. Help design new interdisciplinary course combining Computer Science with Sociology. Literally building future of education.",
          "6:00 PM -  The Global Connection: Join webinar with fellow researcher in London. Science has no borders. Discuss how findings in India apply to global trends. Leave campus tired but inspired."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Scholar DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Intellectual Curiosity (always ask 'Why?' and 'How?' and never get bored of learning?), Patience (research can take years to show results, can you stay dedicated?), Communication Skills (explain complex topic so simply even 10-year-old understands?).",
          "Soft Skills: Writing Skills (huge part of being professor is writing—books, papers, grants), Mentorship (enjoy guiding others), Resilience (handle rejection and criticism), Leadership (inspire and motivate).",
          "Hard Skills: Deep Subject Matter Expertise, Research Methodology, Data Analysis, Academic Writing, Presentation Skills, Technology Proficiency.",
          "The Self-Check: Do you always ask 'why'? Can you stay dedicated to long-term goals? Do you enjoy writing and teaching? If yes, you have the Scholar DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Three Pillars",
        icon: "Briefcase",
        description: "The complete professor workflow.",
        color: BLUE2,
        content: [
          "Teaching: Preparing lectures, conducting classes, creating exams, grading assignments, mentoring students. Engaging and inspiring learners.",
          "Research: Conducting original research, designing experiments, analyzing data, writing papers, publishing findings. Contributing to knowledge.",
          "Service: Attending committee meetings, designing curricula, consulting with industry, advising government, community engagement.",
          "Mentorship: Guiding PhD students, helping with career development, providing academic and professional guidance.",
          "Administration: Managing lab/department resources, handling budgets, coordinating with colleagues, policy development.",
          "Collaboration: Working with other researchers, building networks, presenting at conferences, international partnerships.",
          "Grant Writing: Securing research funding from government and private agencies.",
          "Professional Development: Staying updated with latest research, attending workshops, continuous learning."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: Traditional Academic Route","Step 1: Complete Class 12th in relevant stream","Step 2: Pursue Bachelor's degree in chosen subject","Step 3: Complete Master's degree in same subject","Step 4: Clear UGC NET/JRF or CSIR NET exam","Step 5: Complete PhD in specialized research area","Step 6: Join university as Assistant Professor","Pathway B: Research Fellowship Route","Step 1: Complete Class 12th in Science/Arts/Commerce","Step 2: Graduate from reputed university with good marks","Step 3: Pursue Master's with research dissertation focus","Step 4: Obtain JRF for funded PhD research","Step 5: Publish research papers in reputed journals","Step 6: Get appointed as Assistant Professor in college","Pathway C: Industry to Academia Route","Step 1: Complete Class 12th in any stream","Step 2: Complete graduation in professional field (Engineering/Management)","Step 3: Work 5–10 years gaining strong industry experience","Step 4: Pursue PhD part-time or full-time","Step 5: Start as Guest or Adjunct Faculty","Step 6: Transition into full-time Professor role"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹1.5 Crore","Senior / Lead Role (10+ yrs): ₹25 LPA – ₹55 LPA","Mid-Level Professional (5–8 yrs): ₹12 LPA – ₹24 LPA","Junior / Associate (3–5 yrs): ₹7 LPA – ₹11 LPA","Entry Level (0–2 yrs): ₹4 LPA – ₹6 LPA","Note : Tier-1 cities and PhD/NET qualifications significantly increase pay.","Where Are the Jobs?","Top Cities: Delhi, Bengaluru, Mumbai, Hyderabad, Pune, Chennai.","Top Industries: Higher Education, EdTech, Research, Corporate Training.","Global Demand: High in USA, UK, UAE; remote teaching rising.","Top Institutions","Government: University of Delhi (DU), Jawaharlal Nehru University (JNU), Banaras Hindu University (BHU), University of Hyderabad","Private: Ashoka University, Azim Premji University, O.P. Jindal Global University, Shiv Nadar University","Online: IGNOU (M.Phil / Ph.D.), Swayam (UGC-NET Preparation), Coursera (Research & Teaching Courses), Udemy (UGC-NET / SET Preparation)","Career Opportunities","Conventional","University Professor","College Lecturer","Research Professor","Academic Programme Head","New-age and AI driven","Online Professor","AI-Integrated Teaching Specialist","Instructional Design Faculty","EdTech Curriculum Expert","Remote/Entrepreneurship","Adjunct Online Faculty","Course Creator Professor","Academic Consultant","Independent Research Mentor"]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Institutions: ₹5,000–₹50,000 per year for Master's/PhD. Very affordable but highly competitive.",
          "Private Institutions: ₹1L–₹5L per year. Better infrastructure and placement support.",
          "Stipends: If you clear UGC-NET JRF, government pays you (approx. ₹37,000/month) to do your PhD!",
          "Living Costs: ₹10,000–₹20,000 per month in major education hubs.",
          "Additional Costs: Research materials (₹20k–₹50k), entrance coaching (₹10k–₹30k), conference travel (₹30k–₹100k).",
          "Total Investment: Approximately ₹5L–₹15L for complete Master's and PhD (often covered by stipends).",
          "ROI: With entry-level salaries of ₹8L–₹15L per annum, you can recover investment in 1-2 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top universities and research institutes across India.",
        color: BLUE,
        content: [
          
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "UGC Junior Research Fellowship (JRF): Monthly stipend (₹37,000) for PhD scholars. Highly competitive.",
          "PMRF (Prime Minister's Research Fellowship): High-value scholarship for top engineering/science students. ₹1L+/month.",
          "INSPIRE Faculty Fellowship: For young achievers (up to ₹1.25L/month). Department of Science and Technology.",
          "National Scholarship Portal (NSP): Merit-cum-means scholarships for UG and PG students.",
          "Institutional Scholarships: Most universities offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "UGC (University Grants Commission): Main regulatory body for higher education in India.",
          "AICTE: For technical and engineering education accreditation.",
          "NCTE: For teacher education programs.",
          "UGC-NET: National Eligibility Test for Assistant Professor positions. Mandatory certification.",
          "CSIR-NET: For science and research positions. Highly competitive.",
          "PhD Degree: Essential credential for professor positions. Mandatory for most roles.",
          "Continuing Education: Must stay updated with latest research and teaching methodologies."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in academic and research careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: University Professor, Research Scientist, Academic Dean, Department Head.",
          "New-Age Careers: Instructional Designer, EdTech Consultant, AI-Curriculum Specialist, Online Course Creator.",
          "Specialized Roles: Research Scientist in labs (CSIR/ISRO), Visiting Professor, Adjunct Faculty.",
          "Entrepreneurship: Starting niche training institute, knowledge-based startup, online academy.",
          "Consulting: Industry consulting, government advisory roles, research consultancy, policy development.",
          "International: Teaching positions in universities abroad, international research collaborations."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of academic career.",
        color: BLUE,
        content: [
          "Long Preparation: You might be 30 years old by time you finish PhD and start first 'real' job.",
          "Publish or Perish: Constant pressure to write and publish research to get promoted.",
          "Administrative Load: Expect fair amount of meetings and paperwork.",
          "Competitive Field: Limited senior positions compared to other fields. Competition intense.",
          "Work-Life Balance: Research deadlines and student demands can require long hours.",
          "Funding Challenges: Securing research grants can be difficult and time-consuming.",
          "Emotional Toll: Dealing with rejection of papers and grant proposals can be disheartening.",
          "Continuous Learning: Must stay updated with latest research and teaching methodologies."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in academic careers.",
        color: BLUE2,
        content: [
          "AI-Assisted Teaching: Professors will use AI to create personalized lesson plans for every student.",
          "Interdisciplinary Learning: Future professors will bridge gaps—'Bio-Techno-Philosopher' roles emerging.",
          "Global Classrooms: Using VR (Virtual Reality) to teach students in different countries simultaneously.",
          "Hybrid Learning: Blending in-person and online education. Remote teaching becoming standard.",
          "Research Collaboration: Global research networks and international collaborations expanding.",
          "Industry Integration: Closer ties between academia and industry. Applied research gaining importance.",
          "Entrepreneurial Academia: Professors starting ventures and commercializing research.",
          "Sustainability Focus: Research increasingly focused on climate change and sustainable development."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Read Beyond Syllabus: Don't just study for exams; read for fun and curiosity. Build broad knowledge.",
          "Practice Public Speaking: Join debates or give presentations in class. Build confidence.",
          "Start Writing: Keep blog or journal about topics that fascinate you. Develop writing skills.",
          "Help Your Peers: Teaching friend a difficult concept is best first step to becoming professor.",
          "Research Interest: Read research papers in your field. Understand evidence-based approach.",
          "Science Fair: Participate in science fairs or research competitions. Gain practical experience.",
          "Mentorship: Find a mentor—teacher or professor—who can guide your academic journey.",
          "Networking: Connect with academics and researchers. Learn about different specializations.",
          "Technology: Learn coding and data analysis tools. Modern research is data-driven.",
          "Entrance Prep: Start early preparation for entrance exams (UGC-NET, CSIR-NET, GATE)."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Professors & Academics",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Dr. Sarvepalli Radhakrishnan: Legendary philosopher-professor whose birthday celebrated as Teachers' Day.",
          "Dr. A.P.J. Abdul Kalam: World-class scientist and professor who inspired millions to 'dream big.'",
          "Amartya Sen: Nobel-winning economist and professor who taught at world's best universities.",
          "Savitribai Phule: India's first female teacher and pioneer of education for girls.",
          "Dr. Manmohan Singh: Before becoming Prime Minister, highly respected Professor of Economics at Delhi School of Economics.",
          "Dr. Venkatraman Ramakrishnan: Nobel laureate and professor conducting groundbreaking research.",
          "Prof. Jayant Narlikar: Renowned astrophysicist and professor making significant contributions to science."
        ]
      }
    ]
  },
  school_teacher: {
    slug: "school_teacher",
    badge: "The Nation Builder for Class 10+",
    heading: "School Teacher",
    subheading: "Shape young minds. Build the future. Transform curiosity into lifelong learning. Join ₹42k–₹2.5L+ market with 12.5% CAGR growth.",
    whyCards: [
      { icon: "Users", title: "1M+ Vacancies", description: "Over 1 million teaching vacancies exist across India. 12.5% CAGR growth in private school sector through 2030.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹42k–₹2.5L+ Salaries", description: "Primary ₹42k–₹48k. Secondary ₹52k–₹58k. Senior ₹56k–₹65k. Principals ₹1.2L–₹2.5L+. Plus benefits and job security.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand for Science/Math teachers in UAE, UK, Southeast Asia. International schools abundant. Expat packages lucrative.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Legacy Impact", description: "Shape 40 minds daily. Build nation's future leaders. Emotional fulfillment unmatched. You're sculpting human potential.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + B.Ed (4 years)", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CTET or State TET", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹42k–₹2.5L+ per month", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "1M+", label: "Teaching Vacancies", gradient: "from-green-500 to-green-600" },
      { value: "12.5%", label: "Private School CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The noble art of imparting knowledge, values, and skills to next generation.",
        color: BLUE,
        content: [
          "School Teacher Definition: A professional educator who imparts knowledge, values, and skills to students in K-12 schools. Sculptor of young minds and architect of future leaders.",
          "The Role: The Learning Facilitator (create experiences—experiments, debates, games—helping students understand why things work), The Emotional Anchor (notice struggling students and provide support), The Future Architect (by teaching 40 students today, indirectly shaping 40 different careers).",
          "What They Do: Design lesson plans, deliver engaging classes, assess student learning, provide feedback, mentor students, collaborate with colleagues, communicate with parents, manage classrooms, adapt to diverse learning needs.",
          "Why It Matters: India has world's largest student population. As we move towards $125 billion school market by 2032, demand for 'Quality Educators' handling smart-classrooms and personalized learning at all-time high.",
          "The Scope: Work in government schools, private schools, international schools (IB/IGCSE), coaching institutes, or EdTech platforms.",
          "The Impact: You're not just teaching subjects—you're shaping character, building confidence, and creating the leaders, artists, and innovators of tomorrow."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The 40-Minute Sprint",
        icon: "Clock",
        description: "Real workflow of a school teacher.",
        color: BLUE2,
        content: [
          "7:30 AM -  The Morning Buzz: Arrive as school gates open. Air filled with sound of yellow buses and chatter. Quick 'huddle' with department to discuss inter-school quiz coming up next week.",
          "9:00 AM -  The Science of Discovery: Enter Class 8. Today's topic is 'Static Electricity.' Instead of textbook, bring balloons and wool. Spend 40 minutes watching students' eyes go wide as they realize they can make paper dance. Magician with lesson plan.",
          "1:30 PM -  The Staffroom Strategy: Lunch is quick break with colleagues. Discuss student struggling with math. Together plan special 'bridge session' to help catch up. Collaboration is secret weapon.",
          "3:30 PM -  Digital Prep: Students gone home, but 'Creation Phase' begins. Use AI tool to generate personalized practice quiz for diverse class—high-achievers challenged, struggling ones supported.",
          "5:00 PM -  The Reflection: Remember quiet girl who finally raised hand today. That small win is 'salary' for soul. Head home tired but knowing you've moved 40 minds an inch further into light."
        ]
      },
      {
        id: "who",
        title: "Is This You? The Educator DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: Empathy (remember what it felt like to not understand concept?), Communication (explain same idea in three different ways until it 'clicks'?), Adaptability (butterfly enters room, lose focus—turn into 5-minute biology lesson?).",
          "Soft Skills: Patience (helping human beings grow takes time), Enthusiasm (inspire students with your passion), Creativity (make learning engaging and fun), Leadership (manage classroom dynamics).",
          "Hard Skills: Subject Matter Expertise, Pedagogical Knowledge, Assessment Skills, Technology Proficiency, Classroom Management, Curriculum Design.",
          "The Self-Check: Do you love helping others learn? Can you stay patient with diverse learners? Do you have passion for your subject? If yes, you have the Educator DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Instructional Cycle",
        icon: "Briefcase",
        description: "The complete school teacher workflow.",
        color: BLUE2,
        content: [
          "Planning: Designing lesson plans aligning with boards (CBSE/ICSE/State). Creating engaging learning experiences.",
          "Delivery: Using 'Pedagogy' (method of teaching) to engage students. Making content relatable and interesting.",
          "Assessment: Checking notebooks and conducting tests to see what 'stuck.' Evaluating student understanding.",
          "Feedback: Meeting parents and students to chart path for improvement. Providing constructive guidance.",
          "Mentorship: Guiding students beyond academics. Helping with personal and career development.",
          "Collaboration: Working with colleagues to support struggling students. Sharing best practices.",
          "Professional Development: Staying updated with latest teaching methodologies and curriculum changes.",
          "Classroom Management: Creating safe, inclusive learning environment. Managing diverse personalities and needs."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: After Class 12th Route","Step 1: Complete Class 12th in any stream","Step 2: Pursue D.El.Ed (Diploma in Elementary Education)","Step 3: Clear CTET/State TET for teaching eligibility","Step 4: Apply for primary school teacher positions","Step 5: Join government or private school as teacher","Step 6: Grow into Senior Teacher or Head Teacher","Pathway B: Graduation + BEd Route","Step 1: Complete Class 12th in relevant stream","Step 2: Pursue Bachelor's degree in chosen subject","Step 3: Complete BEd (Bachelor of Education) degree","Step 4: Clear CTET/State TET examination","Step 5: Join secondary school as Trained Graduate Teacher","Step 6: Advance to PGT or Vice Principal role","Pathway C: Integrated Course Route","Step 1: Complete Class 12th in any stream","Step 2: Enrol in 4-year Integrated BA BEd/BSc BEd","Step 3: Complete teaching internship during course programme","Step 4: Clear CTET/State TET after course completion","Step 5: Join school as Primary or Secondary Teacher","Step 6: Pursue MEd for promotion to senior positions"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹40 LPA – ₹1 Crore","Senior / Lead Role (10+ yrs): ₹20 LPA – ₹38 LPA","Mid-Level Professional (5–8 yrs): ₹10 LPA – ₹18 LPA","Junior / Associate (3–5 yrs): ₹6 LPA – ₹9.5 LPA","Entry Level (0–2 yrs): ₹3 LPA – ₹5 LPA","Note: Metros pay 30% more. B.Ed/TET/CTET exams are mandatory.","Where Are the Jobs?","Top Cities: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai.","Top Industries: Private Schools, KVS, NVS, EdTech, Coaching Institutes.","Global Demand: High in UAE, UK, Canada, Thailand, Vietnam.","Top Institutions","Government: National Council of Educational Research & Training (NCERT), Regional Institutes of Education (RIE), District Institutes of Education & Training (DIET), Jamia Millia Islamia","Private: Amity Institute of Education, Banasthali Vidyapith, Lady Irwin College, Loreto College Kolkata","Online: IGNOU (B.Ed / D.El.Ed), Swayam (CTET/TET Preparation), Coursera (Teaching & Pedagogy Courses), Udemy (B.Ed / CTET Preparation)","Career Opportunities","Conventional","Primary School Teacher","TGT School Teacher","PGT School Teacher","Special Education Teacher","New-age and AI driven","Digital Learning Teacher","AI-Enabled Classroom Teacher","STEM and Robotics Teacher","EdTech Content Teacher","Remote/Entrepreneurship","Online School Teacher","Home Tutor Educator","Course Creator Teacher","School Education Consultant"]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Colleges: ₹15,000–₹60,000 (Total for degree). Very affordable but highly competitive.",
          "Private Colleges: ₹1L–₹3.5L (Total for degree). Better infrastructure and placement support.",
          "Preparation: 2 to 4 years for complete qualification.",
          "Living Costs: ₹1.2L–₹2L per year in major education hubs.",
          "Additional Costs: CTET/TET coaching (₹10k–₹30k), entrance exam fees (₹5k–₹15k), professional development (₹10k–₹20k).",
          "Total Investment: Approximately ₹3L–₹8L for complete degree and certifications.",
          "ROI: With entry-level salaries of ₹42k–₹48k per month, you can recover investment in 6-12 months. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top teacher education institutes across India.",
        color: BLUE,
        content: [
         
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central Govt: PM-USP CSSS (Central Sector Scheme) – ₹12,000 to ₹20,000 per annum for meritorious students.",
          "NSP: Various 'Post-Matric' scholarships for SC/ST/OBC students.",
          "Private: Fair & Lovely Career Foundation and Tata Trusts offer scholarships for B.Ed students.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "NCTE (National Council for Teacher Education): Statutory body regulating teacher education.",
          "CTET (Central Teacher Eligibility Test): Mandatory for teaching in government and many private schools.",
          "State TET: State-level teacher eligibility tests for state-specific positions.",
          "CBSE/State Boards: Registration as teacher in UDISE+ database often required for institutional roles.",
          "B.Ed Degree: Essential credential for school teaching positions.",
          "Continuing Education: Must stay updated with latest teaching methodologies and curriculum changes."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in teaching careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: PRT/TGT/PGT Teacher, Vice Principal, Principal, Head of Department.",
          "New-Age Careers: AI-Learning Strategist, EdTech Content Creator, Educational Consultant, Instructional Designer.",
          "Specialized Roles: Special Education Teacher, Counselor, Subject Matter Expert, Curriculum Developer.",
          "Entrepreneurship: Starting home-schooling hub, special education center, YouTube education channel.",
          "Consulting: Educational consultant for schools, curriculum development, teacher training.",
          "International: Teaching positions in international schools and abroad."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of teaching career.",
        color: BLUE,
        content: [
          "Emotional Labor: Managing class of 40 different personalities every day is mentally taxing.",
          "Administrative Load: Expect lot of paperwork—grading, reports, compliance files.",
          "Work-Life Balance: Grading papers and planning lessons often spill into 'me-time' at home.",
          "Low Initial Pay: Entry-level salaries modest compared to IT or corporate jobs.",
          "Classroom Challenges: Dealing with behavioral issues, diverse learning needs, and parental expectations.",
          "Limited Resources: Many schools lack adequate teaching materials and technology.",
          "Emotional Toll: Seeing students struggle or drop out can be disheartening.",
          "Continuous Learning: Must stay updated with latest pedagogies and curriculum changes."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in teaching careers.",
        color: BLUE2,
        content: [
          "AI Personalization: Teachers will act as 'Data Interpreters,' using AI to see which student needs help before they fail.",
          "VR/AR Learning: Taking students on virtual field trips to Mars or Mughal Empire using headsets.",
          "Hybrid Models: Teaching mix of physical and online students simultaneously.",
          "Adaptive Learning: AI-powered systems personalizing learning paths for each student.",
          "Global Classrooms: Connecting students across countries for collaborative learning.",
          "Wellness Integration: Teachers becoming wellness coaches, addressing mental health and holistic development.",
          "Skill-Based Learning: Shift from rote learning to skill development and critical thinking.",
          "Teacher Empowerment: Technology reducing administrative burden, allowing focus on teaching."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Public Speaking: Join debate or drama club to master your voice. Build confidence.",
          "Tutoring: Try explaining chapter to younger sibling or friend. Practice teaching.",
          "Tech Skills: Get comfortable with Google Classroom, Canva, basic video editing.",
          "Reading: Follow National Education Policy (NEP) 2020 updates. Understand how India's schools changing.",
          "Mentorship: Find a teacher mentor who can guide your journey.",
          "Creativity: Develop creative lesson planning skills. Think of engaging ways to teach.",
          "Communication: Excel in English and presentation skills. Core teacher competencies.",
          "Subject Mastery: Build deep knowledge in subjects you want to teach.",
          "Empathy: Volunteer with underprivileged students. Develop compassion and understanding.",
          "Entrance Prep: Start early preparation for B.Ed entrance exams and CTET."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Teachers & Educators",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Dr. Sarvepalli Radhakrishnan: Philosopher-teacher whose birthday celebrated as Teachers' Day.",
          "Savitribai Phule: India's first female teacher who fought for girls' education.",
          "Dr. A.P.J. Abdul Kalam: World-renowned scientist who considered himself 'teacher' first.",
          "Rabindranath Tagore: Visionary who founded Shantiniketan, believing education in harmony with nature.",
          "Babar Ali: Started school in backyard at age 9. World's youngest headmaster.",
          "Kailash Satyarthi: Nobel laureate fighting for children's education and rights.",
          "Erin Gruwell: Inspired by 'Freedom Writers'—teacher transforming lives through education."
        ]
      }
    ]
  },
  technical_trainer: {
    slug: "technical_trainer",
    badge: "The Skill Architect for Class 10+",
    heading: "Technical Trainer",
    subheading: "Bridge the tech gap. Build future-ready workforce. Master complex skills and teach them brilliantly. Join ₹4.5L–₹45L+ market with 13.5% CAGR growth.",
    whyCards: [
      { icon: "Zap", title: "$12.95B Market by 2030", description: "India IT Training market projected to reach $12.95B by 2030. 13.5% CAGR in technical/vocational segment through 2030.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "₹4.5L–₹45L+ Salaries", description: "Entry-level ₹4.5L–₹8L. Mid-level ₹12L–₹22L. Senior specialists ₹25L–₹45L+. Freelancers earning ₹15k–₹1L per day.", borderColor: "#059669" },
      { icon: "Globe", title: "Global Opportunities", description: "High demand in Germany, USA, Japan. International tech companies need trainers. Remote bootcamp potential abundant.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Future-Ready Nation", description: "India's IT and manufacturing booming. Technology changes every 6 months. You keep workforce future-ready and competitive.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "Bachelor's + 2 Years Experience + Certs", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Exam", detail: "CTT+, AWS, Microsoft Certs", color: "bg-purple-100 text-purple-700" },
      { label: "Salary Range", detail: "₹4.5L–₹45L+ per annum", color: "bg-green-100 text-green-700" }
    ],
    statCards: [
      { value: "$12.95B", label: "IT Training Market by 2030", gradient: "from-green-500 to-green-600" },
      { value: "13.5%", label: "Technical Segment CAGR", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Professional educator specializing in complex technical subjects.",
        color: BLUE,
        content: [
          "Technical Trainer Definition: Professional educator specializing in teaching complex technical subjects. Bridges gap between 'having a tool' and 'knowing how to use it to build something amazing.'",
          "The Role: The Tech-Translator (take 'geek-speak' and turn into simple, actionable steps), The Curriculum Designer (build syllabus, create lab exercises, write manuals), The Skills Auditor (assess team, design 'training intervention' to fix gaps).",
          "What They Do: Conduct needs analysis, design instructional content, deliver workshops and webinars, facilitate hands-on labs, create microlearning videos, assess learner progress, provide personalized feedback, stay updated with latest tech.",
          "Why It Matters: India's IT and manufacturing sectors booming. Technology changes every 6 months. Without Technical Trainers, workforce becomes obsolete. You keep India 'Future-Ready.'",
          "The Scope: Work in IT services, product companies, EdTech platforms, manufacturing, or as freelance bootcamp instructor.",
          "The Impact: You're not just teaching skills—you're upgrading nation's 'brainware,' enabling innovation, and building competitive advantage."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Knowledge Sprint",
        icon: "Clock",
        description: "Real workflow of a technical trainer.",
        color: BLUE2,
        content: [
          "9:00 AM -  The Lab Setup: Arrive at tech park in Bengaluru. Classroom is high-tech lab. Spend first hour checking 'Virtual Machines' (VMs). Today training 20 software engineers on Cybersecurity Mesh Architecture. Ensure 'hacker simulation' environment ready.",
          "11:00 AM -  The Live Session: Session is high-energy. Not lecturing—facilitating. Show line of code, ask question, let engineers struggle with puzzle for ten minutes before showing 'Elegant Solution.' Coach, not lecturer.",
          "1:30 PM -  The Global Sync: Quick lunch with Product Manager. They tell about new AI feature launching in three months. Your job starts now: learn it, master it, have training plan ready before launch.",
          "3:30 PM -  Content Creation: Head to quiet zone. Recording 5-minute 'Micro-learning' video for internal app. Using screen-recording software and digital stylus to draw diagrams over code. Video watched by 2,000 employees across Pune, Hyderabad, Chennai.",
          "6:00 PM -  The Feedback Loop: Review quiz results from morning session. Notice three people struggled with 'Firewall Configurations.' Send personalized link to extra resource. Head home knowing you upgraded company's 'brainware.'"
        ]
      },
      {
        id: "who",
        title: "Is This You? The Tech Educator DNA",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "Personality Traits: The 'Lego' Mindset (love taking things apart to see how they work?), Communication (explain how microwave works to grandmother?), Patience (deal with people who 'don't get it' at first?).",
          "Soft Skills: The Lifelong Student (if you hate studying, stay away—you're student for life), Empathy (understand learner struggles), Enthusiasm (inspire with your passion), Adaptability (handle diverse learning styles).",
          "Hard Skills: Deep Technical Expertise, Instructional Design, Content Creation, Assessment Skills, Presentation Skills, Technology Proficiency, Problem-Solving.",
          "The Self-Check: Do you love explaining complex things simply? Can you stay patient with diverse learners? Are you always learning? If yes, you have the Tech Educator DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Development Cycle",
        icon: "Briefcase",
        description: "The complete technical trainer workflow.",
        color: BLUE2,
        content: [
          "Needs Analysis: Identifying what team doesn't know. Assessing skill gaps and learning requirements.",
          "Instructional Design: Building story-based learning path. Creating engaging curriculum and learning materials.",
          "Delivery: Facilitating workshops, webinars, hands-on labs. Engaging and inspiring learners.",
          "Assessment: Using data to prove learners actually improved. Measuring training effectiveness.",
          "Content Creation: Developing microlearning videos, documentation, lab exercises, practice problems.",
          "Mentorship: Guiding learners through complex concepts. Providing personalized support.",
          "Technology Management: Maintaining lab environments, virtual machines, learning platforms.",
          "Continuous Learning: Staying updated with latest technologies and industry trends."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: ["Pathway A: Engineering Degree Route","Step 1: Complete Class 12th with Science (PCM/PCB)","Step 2: Pursue BTech/BE in any engineering branch","Step 3: Gain 2–3 years industry technical experience","Step 4: Complete train-the-trainer certification programme","Step 5: Join IT/engineering company as Technical Trainer","Step 6: Grow into Senior Technical Trainer or Lead","Pathway B: IT Certification Route","Step 1: Complete Class 12th with Science/Computer Science","Step 2: Pursue BCA/BSc in Computer Science/IT","Step 3: Earn industry certifications (AWS/Azure/Cisco/CompTIA)","Step 4: Practice by conducting workshops and webinars","Step 5: Join training institute or IT company","Step 6: Become Certified Technical Trainer or Consultant","Pathway C: Skill-Based Entry Route","Step 1: Complete Class 12th in any stream","Step 2: Complete diploma in relevant technical field","Step 3: Learn tools like AutoCAD, Python, cloud platforms","Step 4: Work 3–5 years as technical professional","Step 5: Develop training content and deliver sessions","Step 6: Transition into full-time Technical Trainer role"]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, cities, and industry growth.",
        color: BLUE2,
        content: ["Salary Snapshot (Annual INR)","CXO / Top Leadership (15+ yrs): ₹65 LPA – ₹1.5 Crore","Senior / Lead Role (10+ yrs): ₹30 LPA – ₹60 LPA","Mid-Level Professional (5–8 yrs): ₹15 LPA – ₹28 LPA","Junior / Associate (3–5 yrs): ₹8 LPA – ₹14 LPA","Entry Level (0–2 yrs): ₹4 LPA – ₹7 LPA","Note: Tier-1 cities pay 40% more. AI/Cloud certifications increase pay.","Where Are the Jobs?","Top Cities: Bengaluru, Hyderabad, Pune, Noida, Mumbai, Gurgaon.","Top Industries: IT Services, EdTech, BFSI, Manufacturing, Semiconductors.","Global Demand: High in USA, UK, UAE; remote freelance roles rising.","Top Institutions","Government: Indian Institutes of Technology (IITs), National Institute of Technical Teachers Training (NITTTR), Central Institute of Tool Design (CITD), National Skill Development Corporation (NSDC)","Private: NIIT Limited, Aptech Limited, Simplilearn, Manipal ProLearn","Online: Coursera (Technical Training Courses), Udemy (Train the Trainer Programs), LinkedIn Learning, Pluralsight","Career Opportunities","Conventional","Software Training Specialist","Networking and Hardware Trainer","Programming Language Trainer","Corporate IT Systems Trainer","New-age and AI driven","AI and Machine Learning Trainer","Cloud and DevOps Trainer","Cybersecurity Trainer","Data Analytics Trainer","Remote/Entrepreneurship","Freelance Technical Trainer","Online Bootcamp Instructor","Certification Prep Mentor","Technical Training Academy Founder"]
      },{
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and training costs.",
        color: BLUE2,
        content: [
          "Government Fees: ₹25,000–₹1.5L (For the degree). Very affordable but highly competitive.",
          "Private Fees: ₹4L–₹15L. Better infrastructure and placement support.",
          "Certifications: Specialized certs (AWS, Microsoft, Cisco) cost ₹15,000 to ₹40,000 each.",
          "Living Costs: ₹15,000–₹20,000 per month in Tier-1 cities.",
          "Additional Costs: Online courses (₹10k–₹50k), software tools (₹20k–₹50k), conference attendance (₹30k–₹100k).",
          "Total Investment: Approximately ₹8L–₹20L for complete degree and certifications.",
          "ROI: With entry-level salaries of ₹4.5L–₹8L per annum, you can recover investment in 2-3 years. Senior positions ROI much faster."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top technical education institutes across India.",
        color: BLUE,
        content: [
          
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "Central: AICTE Pragati (for girls in tech); NSP Merit-cum-Means scholarships.",
          "Institutional: Almost all NITs/IITs offer stipends for M.Tech/PhD students.",
          "Private: Google/Microsoft Career Certificates often offer 100% fee waivers for Indian students.",
          "Merit-Based: Most institutes offer scholarships for top entrance exam performers.",
          "Government Sponsorships: Ministry of Education occasionally sponsors students for specialized programs."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: BLUE,
        content: [
          "CompTIA CTT+ (Certified Technical Trainer): Global 'Badge of Honor' for technical trainers.",
          "Microsoft Certified Educator (MCE): For those using MS tools in training.",
          "AWS/Azure Certified Trainer: Essential for Cloud specialists.",
          "Google Cloud Certified Trainer: For cloud computing specialists.",
          "Industry Certifications: AWS, Azure, GCP, Kubernetes, Docker, Terraform.",
          "Continuing Education: Must stay updated with latest technologies and training methodologies."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in technical training careers.",
        color: BLUE2,
        content: [
          "Conventional Careers: Corporate Trainer, IT Faculty, Lab Instructor, Training Manager.",
          "New-Age Careers: AI-Model Trainer, VR-Training Designer, Developer Relations (DevRel) Advocate, Learning Experience Designer.",
          "Specialized Roles: Cloud Training Specialist, Security Training Expert, DevOps Trainer, AI/ML Trainer.",
          "Entrepreneurship: Starting coding bootcamp, online academy, YouTube education empire.",
          "Consulting: Technical training consultant for enterprises, curriculum development, training strategy.",
          "International: Teaching positions in international tech companies and abroad."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of technical training career.",
        color: BLUE,
        content: [
          "The Obsolescence Clock: If you don't study for 3 months, you are outdated.",
          "The 'Stage' Pressure: You have to perform every day. Low-energy day affects your class.",
          "Assessment Stress: Judged by how well others perform. If students fail, it's on you.",
          "Continuous Learning: Must stay updated with rapidly changing technologies.",
          "Work-Life Balance: Preparing content and staying current can demand long hours.",
          "Competitive Field: Growing number of trainers. Need to differentiate through specialization.",
          "Emotional Toll: Seeing students struggle or drop out can be disheartening.",
          "Technical Challenges: Managing lab environments and troubleshooting technical issues."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in technical training careers.",
        color: BLUE2,
        content: [
          "AI-Coached Training: AI will grade code and give feedback, leaving trainer to focus on high-level strategy.",
          "Holographic Classrooms: Teaching students in Noida and London simultaneously using 3D projections.",
          "Quantum Training: Next big wave will be Quantum Computing and Ethical AI training.",
          "Personalized Learning Paths: AI-powered systems creating custom learning journeys for each student.",
          "Immersive Learning: VR/AR becoming standard for hands-on technical training.",
          "Microlearning Dominance: Short, focused modules becoming primary learning format.",
          "Global Collaboration: International training networks and cross-border learning.",
          "Skill-Based Credentials: Shift from degrees to verified skill badges and micro-credentials."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Start a Blog: Explain math concept or coding trick. If people understand you, you have 'Trainer Spark.'",
          "Public Speaking: Join debate or drama club. Trainer is 50% expert, 50% performer.",
          "Learn to Code: Even if mechanical trainer, Python is language of 21st century.",
          "Volunteer: Teach grandmother how to use UPI app. If you enjoy her 'Aha!' moment, this career for you.",
          "Tech Exploration: Build projects, experiment with new technologies, stay curious.",
          "Communication: Excel in English and presentation skills. Core trainer competencies.",
          "Mentorship: Find a tech mentor who can guide your journey.",
          "Networking: Connect with technical professionals and trainers.",
          "Content Creation: Practice explaining technical concepts clearly and simply.",
          "Entrance Prep: Start early preparation for entrance exams and technical certifications."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Technical Educators",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Arvind Gupta: Famous for 'Toys from Trash.' Legendary technical educator making science tactile.",
          "Anand Kumar: Founder of Super 30. Though math-focused, his 'pedagogy' is what every tech trainer aspires to.",
          "Harkirat Singh: New-age tech educator (Harkirat's Cohort) transforming how thousands learn MERN stack.",
          "Tanay Pratap: Founder of NeoGCamp. Former MS engineer shifted to full-time tech education.",
          "Prateek Narang: Co-founder of Coding Minutes. Master at creating technical curriculum that 'sticks.'",
          "Kunal Kushwaha: Tech educator and content creator making programming accessible to millions.",
          "Aman Dhattarwal: Founder of Apna College. Democratizing tech education for Indian students."
        ]
      }
    ]
  }
};

