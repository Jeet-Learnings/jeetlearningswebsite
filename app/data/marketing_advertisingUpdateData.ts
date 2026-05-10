import { CareerPageData } from './careerPageData';

const RED = "#C20000";
const RED2 = "#DA1313";
const BLUE = "#1E40AF";
const BLUE2 = "#3B82F6";

export const marketing_advertisingUpdateData: Record<string, CareerPageData> = {
  advertising_and_communication: {
    slug: "advertising_and_communication",
    badge: "Career Exploration for Class 10+",
    heading: "Advertising and Communication",
    subheading: "Explore opportunities in Advertising and Communication.",
    whyCards: [
      { icon: "Briefcase", title: "Career Growth", description: "Build a successful career in Advertising and Communication.", borderColor: "#10B981" },
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
        description: "Understanding Advertising and Communication.",
        color: RED,
        content: [
          "Advertising and Communication is a dynamic and rewarding career path.",
          "It offers opportunities for growth and development.",
          "Professionals in this field make a significant impact.",
          "The industry is evolving with new technologies.",
          "Career prospects are excellent for qualified candidates."
        ]
      },
      {
        id: "education",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: RED,
        content: [
          "Pathway A: Degree Route",
          "Step 1: Complete Class 12th",
          "Step 2: Pursue relevant bachelor's degree",
          "Step 3: Gain practical experience through internships",
          "Step 4: Pursue advanced certifications",
          "Step 5: Build professional network",
          "Step 6: Advance to senior positions",
          "Pathway B: Skill-Based Entry",
          "Step 1: Complete Class 12th",
          "Step 2: Take specialized training courses",
          "Step 3: Gain hands-on experience",
          "Step 4: Get industry certifications",
          "Step 5: Build portfolio",
          "Step 6: Transition to professional roles",
          "Pathway C: Higher Education Route",
          "Step 1: Complete Class 12th",
          "Step 2: Pursue master's degree",
          "Step 3: Specialize in specific domain",
          "Step 4: Conduct research or projects",
          "Step 5: Publish work or build portfolio",
          "Step 6: Join as specialist or researcher"
        ]
      },
      {
        id: "salary",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries and opportunities.",
        color: RED2,
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
        color: RED2,
        content: [
          "Top Cities: Delhi-NCR, Mumbai, Bengaluru, Hyderabad, Pune",
          "Top Industries: Various sectors offering opportunities",
          "Global Demand: High in developed markets"
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions across India.",
        color: RED,
        content: [
          "Government:\nTop government institutions offering programs",
          "Private:\nLeading private institutions",
          "Online:\nOnline learning platforms and courses"
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Various career roles.",
        color: RED2,
        content: [
          "Conventional: Traditional roles in the industry",
          "New-Age & AI Driven: Emerging roles with technology",
          "Remote/Entrepreneurship: Freelance and startup opportunities"
        ]
      }
    ]
  },
  digital_marketing: {
    slug: "digital_marketing",
    badge: "The Digital Growth Experts for Class 10+",
    heading: "Digital Marketing",
    subheading: "Master the art of online marketing. Drive growth through SEO, social media, paid ads, and content strategy. Build brands in the digital age.",
    whyCards: [
      { icon: "Zap", title: "Fastest Growing Career", description: "Digital marketing is growing 3x faster than traditional marketing. Every company needs digital experts.", borderColor: "#10B981" },
      { icon: "TrendingUp", title: "High Salary Potential", description: "Entry-level: ₹3.5L–₹6L. Leadership: ₹60L–₹3Cr+. Fastest salary growth in marketing.", borderColor: "#059669" },
      { icon: "Globe", title: "Remote & Freelance Friendly", description: "Work from anywhere. Freelance on Upwork, Fiverr, or build your own agency. Complete flexibility.", borderColor: "#3B82F6" },
      { icon: "Award", title: "Measurable Impact", description: "Unlike traditional marketing, every rupee spent is tracked. You see ROI instantly. Data-driven decisions.", borderColor: "#F59E0B" }
    ],
    quickFacts: [
      { label: "Duration", detail: "3-6 Months Certification / 2 Years MBA", color: "bg-blue-100 text-blue-700" },
      { label: "Entry Path", detail: "Certification or Degree", color: "bg-green-100 text-green-700" },
      { label: "Salary Range", detail: "₹3.5L–₹3Cr+ per annum", color: "bg-amber-100 text-amber-700" }
    ],
    statCards: [
      { value: "3x Faster", label: "Growth vs Traditional Marketing", gradient: "from-blue-500 to-blue-600" },
      { value: "₹3Cr+", label: "Leadership Salary Potential", gradient: "from-green-500 to-green-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The art and science of online marketing.",
        color: BLUE,
        content: [
          "Digital Marketing is the art of promoting products and services using digital channels: Google, Facebook, Instagram, Email, Websites, and Apps.",
          "While traditional marketing is like shouting in a crowded marketplace, digital marketing is like having a one-on-one conversation with each customer. You know exactly who they are, what they want, and when they're ready to buy.",
          "A Digital Marketer's job is to drive traffic, generate leads, and convert them into customers. Every action is measured. Every rupee spent is tracked. You live in data.",
          "In today's India, where 700+ million people are online, digital marketing is the fastest-growing career. Every startup, every e-commerce company, every bank needs digital marketers.",
          "You don't need to be a coder or designer. You need to be a strategist, a storyteller, and a data analyst rolled into one."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: Priya, Digital Marketing Manager",
        icon: "Clock",
        description: "Real workflow at a D2C e-commerce startup.",
        color: BLUE2,
        content: [
          "09:00 AM – Morning Standup: Priya joins the marketing team meeting. They review yesterday's campaign performance. The Instagram ad had a 3.5% CTR (Click-Through Rate). The email campaign had a 22% open rate. Numbers, numbers, numbers.",
          "10:00 AM – Data Deep Dive: She opens Google Analytics. The website had 50,000 visitors yesterday. But only 2% converted to customers. She digs deeper: Where are they dropping off? The checkout page. She flags this to the product team.",
          "11:30 AM – Content Strategy: She meets with the content team. They're planning next week's social media posts. Priya suggests: 'Let's create a video showing how our product solves a real problem. Videos get 10x more engagement than static posts.'",
          "01:00 PM – Lunch & Learning: She eats while watching a YouTube video on 'AI in Marketing.' Continuous learning is non-negotiable in this field.",
          "02:00 PM – Paid Ads Management: She logs into Google Ads and Meta Ads Manager. She's running 5 campaigns simultaneously. One campaign is underperforming. She pauses it and reallocates the budget to the winning campaign. A/B testing is her daily ritual.",
          "03:30 PM – Email Marketing: She designs an email campaign for abandoned cart recovery. 'Hey, you left something behind!' She segments the audience: New customers get a 20% discount. Loyal customers get free shipping. Personalization is key.",
          "05:00 PM – Reporting: She creates a dashboard showing KPIs (Key Performance Indicators): Traffic, Leads, Conversions, Cost Per Acquisition (CPA), Return on Ad Spend (ROAS). The CEO wants to see ROI. She delivers.",
          "06:30 PM – End of Day: She logs off. Today, her campaigns generated 500 leads and 50 sales. That's ₹2 Lakhs in revenue. Not bad for a day's work."
        ]
      },
      {
        id: "who",
        title: "Is This You? Personality Traits & Skills",
        icon: "User",
        description: "Self-assessment for the ideal candidate.",
        color: BLUE,
        content: [
          "The Data Junkie: Do you love numbers? Do you get excited seeing a graph go up? Can you interpret data and make decisions based on it?",
          "The Creative Storyteller: Can you write a compelling headline that makes people click? Can you create a story that resonates with your audience?",
          "The Experimenter: Do you love testing new ideas? A/B testing, new platforms, new strategies—you're always curious.",
          "The Hustler: You're not afraid to wear multiple hats. One day you're writing copy, the next day you're analyzing data, the next day you're managing a vendor.",
          "Hard Skills: Google Analytics, Google Ads, Meta Ads Manager, Email Marketing platforms (Mailchimp, HubSpot), SEO knowledge, Content Writing, Excel/Data Analysis.",
          "Soft Skills: Communication, Creativity, Analytical thinking, Problem-solving, Time management, Adaptability."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities & Workflow",
        icon: "Briefcase",
        description: "The marketing funnel and daily operations.",
        color: BLUE2,
        content: [
          "Awareness: Get people to know your brand. Use SEO, social media, and paid ads to drive traffic.",
          "Consideration: Make them interested. Use content marketing, email nurturing, and retargeting ads.",
          "Conversion: Turn them into customers. Optimize landing pages, reduce friction, and make the purchase easy.",
          "Retention: Keep them coming back. Use email marketing, loyalty programs, and customer service.",
          "Advocacy: Turn them into brand ambassadors. Encourage reviews, referrals, and user-generated content.",
          "Analytics: Measure everything. Track metrics, identify trends, and optimize continuously."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Educational journey from Class 10 onwards.",
        color: BLUE,
        content: [
          "Pathway A: After Class 12th (Degree Route)",
          "Step 1: Complete Class 12th in any stream subjects.",
          "Step 2: Pursue BBA/BMS or BA in Marketing/Mass Communication.",
          "Step 3: Learn SEO, SEM, Google Analytics, and content marketing.",
          "Step 4: Get Google Ads and Meta Blueprint certified online.",
          "Step 5: Complete internship at digital agency or e-commerce company.",
          "Step 6: Join as Digital Marketing Executive or SEO Analyst.",
          "Pathway B: Graduation + MBA/PG Diploma Route",
          "Step 1: Complete Class 12th in any stream subjects.",
          "Step 2: Pursue graduation in any discipline (BA/B.Com/BCA).",
          "Step 3: Gain experience in blogging, social media, or freelancing.",
          "Step 4: Pursue MBA (Digital Marketing) or PG Diploma course.",
          "Step 5: Master paid advertising, email marketing, and marketing automation.",
          "Step 6: Join as Digital Marketing Manager or Growth Marketing Lead.",
          "Pathway C: Certification and Skill-Based Entry Route",
          "Step 1: Complete Class 10th or 12th any stream.",
          "Step 2: Join certified digital marketing course (3–6 months).",
          "Step 3: Learn Google Ads, Meta Ads, HubSpot, and Canva.",
          "Step 4: Start freelancing or manage social media for brands.",
          "Step 5: Build portfolio with real campaign results and case studies.",
          "Step 6: Get hired as Social Media Manager or Performance Marketer."
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
          "CXO / Top Leadership (15+ yrs): ₹60 LPA – ₹3.0 Crore",
          "Senior / Lead Role (10+ yrs): ₹25 – ₹55 LPA",
          "Mid-Level Professional (5–8 yrs): ₹12 – ₹22 LPA",
          "Junior / Associate (3–5 yrs): ₹6 – ₹11 LPA",
          "Entry Level (0–2 yrs): ₹3 – ₹6 LPA",
          "Note: AI-driven marketing and Metros boost pay by 45%.",
          "Growth: Digital marketing is growing at 25-30% annually. Every company is shifting budget from traditional to digital.",
          "Demand: High demand in E-commerce, EdTech, Fintech, Consumer Goods, and Media sectors."
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
          "E-commerce: Amazon, Flipkart, Myntra (massive hiring for growth marketing).",
          "EdTech: Unacademy, Byju's, Vedantu (need digital marketers for student acquisition).",
          "Fintech: PhonePe, Paytm, Razorpay (growth hacking is critical).",
          "Consumer Goods: P&G, Nestlé, ITC (shifting to digital-first strategies).",
          "Media & Entertainment: Netflix, YouTube, Hotstar (content marketing and audience growth).",
          "Top Cities:",
          "Bengaluru: Tech hub with highest concentration of startups and digital agencies.",
          "Mumbai: Media and advertising capital. Highest salaries.",
          "Delhi-NCR: Growing startup ecosystem.",
          "Hyderabad: Emerging tech hub with competitive salaries.",
          "Pune: Growing digital marketing hub.",
          "Remote Work: Very High. Most digital marketing roles offer 100% remote or hybrid flexibility. Freelancing is booming."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Course fees and education costs.",
        color: BLUE2,
        content: [
          "BBA/BMS (3 Years): Government ₹2L–₹4L total, Private ₹8L–₹15L total.",
          "MBA (Digital Marketing) (2 Years): Government ₹5L–₹8L total, Private ₹12L–₹20L total.",
          "PG Diploma (Digital Marketing) (1 Year): ₹2L–₹5L total.",
          "Certification Courses (3–6 Months): ₹20k–₹1L. Google Digital Garage is FREE.",
          "Online Certifications: Google Ads (Free), Meta Blueprint (Free), HubSpot Academy (Free), Coursera (₹2k–₹5k per course).",
          "Additional Costs: Laptop (₹50k–₹1L), software subscriptions (Google Ads, Meta Ads Manager are free), tools like Canva Pro (₹1.2k/month)."
        ]
      },
      {
        id: "institutions",
        title: "Top Institutions",
        icon: "Building2",
        description: "Where to pursue digital marketing education.",
        color: BLUE,
        content: [
          "Government Institutes: Indian Institute of Mass Communication (IIMC) New Delhi; National Institute of Electronics & IT (NIELIT); IIM Bangalore (Digital Marketing Programme); University of Delhi (Department of Commerce)",
          "Private Institutes: MICA Ahmedabad; Symbiosis Institute of Business Management Pune; Internet and Mobile Association of India (IAMAI); Digital Vidya New Delhi",
          "Online Institutes: Google Digital Garage (Free Certification); HubSpot Academy (Inbound Marketing); Coursera (Meta & Google Digital Marketing); Udemy (Complete Digital Marketing Courses); LinkedIn Learning (Digital Marketing Strategies)"
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: BLUE2,
        content: [
          "AICTE Pragati Scheme: ₹50,000/year for girls pursuing technical/business education.",
          "Merit-cum-Means Scholarships: Available at government colleges for students with family income below ₹1L/year.",
          "Institute Merit Scholarships: Top rankers in entrance exams get tuition waivers (25-50%) at private colleges.",
          "Google Career Certificates: Free or heavily subsidized through Google's scholarship programs.",
          "Company Scholarships: Many digital agencies and e-commerce companies offer scholarships to students.",
          "Government Schemes: Various state scholarships for higher education through NSP (National Scholarship Portal)."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Credentials and professional organizations.",
        color: BLUE,
        content: [
          "Essential Certifications (Resume Boosters):",
          "Google Ads Certification: Free. Proves you can run Google Search, Display, and Shopping ads. Highly valued.",
          "Meta Blueprint Certification: Free. Proves expertise in Facebook and Instagram advertising.",
          "Google Analytics Certification: Free. Essential for data analysis and reporting.",
          "HubSpot Inbound Marketing Certification: Free. Covers email marketing, content strategy, and lead nurturing.",
          "Advanced Certifications:",
          "Google Digital Marketing & E-commerce Certificate: ₹2k–₹5k. Comprehensive course on Coursera.",
          "Hootsuite Social Marketing Certification: ₹5k–₹10k. For social media management.",
          "Professional Bodies:",
          "IAMAI (Internet and Mobile Association of India): Great for networking and industry updates.",
          "Digital Marketing Institute (DMI): Global certification body. Recognized worldwide.",
          "Content Marketing Institute: For content strategy and storytelling."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in digital marketing.",
        color: BLUE2,
        content: [
          "Conventional: Digital Marketing Manager at corporate houses; SEO/SEM Specialist at IT companies; Social Media Manager at media houses; Email Marketing Executive at banks and insurance firms; Content Strategist at publishing companies",
          "New-Age & AI-Driven: Performance Marketing Specialist at D2C startups; AI-Driven Marketing Automation Specialist at martech companies; Programmatic Advertising Manager at adtech platforms; Growth Hacker at fintech/edtech startups; Marketing Data Analyst using AI for predictive analytics",
          "Remote/Entrepreneurship: Freelance Digital Marketing Consultant on global platforms (Upwork, Fiverr); Founder of digital marketing or performance marketing agency; Remote SEO/Content Strategist for international brands and SaaS companies; Digital Marketing Educator and Content Creator; Affiliate Marketer building passive income streams"
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of digital marketing.",
        color: BLUE,
        content: [
          "Algorithm Changes: Google and Meta constantly change their algorithms. What worked yesterday might not work today. You must stay updated constantly.",
          "Pressure for Results: Your job is to drive ROI. If campaigns don't perform, it's on you. The pressure is immense.",
          "Burnout Risk: Digital marketing is 24/7. Campaigns run at night. Emergencies happen on weekends. Work-life balance is challenging.",
          "Skill Obsolescence: New tools and platforms emerge every month. You must continuously learn or become irrelevant.",
          "Low Entry Salaries: Entry-level salaries (₹3.5L–₹6L) are lower than IT or engineering. Growth is fast, but the start is humble.",
          "Attribution Complexity: It's hard to know which touchpoint led to a conversion. Multiple channels interact. Attribution is messy.",
          "Ad Fatigue: Audiences get tired of ads. You must constantly create fresh content and new campaigns."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in digital marketing.",
        color: BLUE2,
        content: [
          "AI-Powered Marketing: ChatGPT and AI will write copy, design ads, and optimize campaigns automatically. Your job shifts from execution to strategy.",
          "Privacy-First Marketing: Third-party cookies are dying. First-party data and contextual targeting will dominate. Marketers must adapt.",
          "Voice & Visual Search: Alexa, Google Assistant, and visual search (Google Lens) are growing. Optimize for voice and images, not just text.",
          "Metaverse Marketing: Brands will create virtual stores in the metaverse. NFTs and virtual goods will be marketed. New frontier.",
          "Sustainability Marketing: Consumers care about the environment. Brands will market their sustainability efforts. Green marketing is the future.",
          "Hyper-Personalization: AI will create personalized experiences for each user. Generic marketing is dead.",
          "Short-Form Video Dominance: TikTok, Instagram Reels, YouTube Shorts. Video is king. Text and static images are declining."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: BLUE,
        content: [
          "Start a Blog: Write about topics you're passionate about. Learn SEO by optimizing your blog for Google. Get real traffic.",
          "Manage Social Media: Offer to manage Instagram/Facebook for a local business. Learn paid ads by running small campaigns.",
          "Learn Google Analytics: Install it on your blog. Understand traffic sources, user behavior, and conversion funnels.",
          "Take Free Certifications: Google Digital Garage, Meta Blueprint, HubSpot Academy. All free. Build your resume.",
          "Freelance on Upwork: Offer social media management or content writing services. Build a portfolio with real results.",
          "Follow Industry Leaders: Follow Neil Patel, Rand Fishkin, Gary Vee on social media. Learn from the best.",
          "Experiment with Ads: Create a small Google Ads or Meta Ads campaign for a local business. Learn by doing.",
          "Build a Personal Brand: Create content on LinkedIn or YouTube. Show your expertise. Attract opportunities."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities in Digital Marketing",
        icon: "User",
        description: "Inspiring figures in the field.",
        color: BLUE2,
        content: [
          "Neil Patel: While American, he's hugely influential in India. Built a digital marketing empire from scratch. Proof that digital marketing can lead to massive success.",
          "Deepak Kanakaraju: Founder of Digital Vidya. He democratized digital marketing education in India. Trained 100,000+ students.",
          "Avinash Kaushik: Google's Digital Marketing Evangelist. His blog and books are bibles for digital marketers. Indian origin, global impact.",
          "Harsh Agarwal: Founder of ShoutMeLoud. Built a successful blog and digital marketing agency. Shows how blogging can lead to business.",
          "Ankur Warikoo: Entrepreneur and digital marketing expert. Built multiple successful ventures. Active on social media with 1M+ followers.",
          "Ranveer Allahbadia: Founder of BeerBiceps. Built a personal brand through YouTube and digital marketing. Shows the power of content creation."
        ]
      }
    ]
  },
};
