import { CareerPageData } from './careerPageData';

const GREEN = '#166534';
const GREEN2 = '#15803D';

const buildData = (
  slug: string,
  heading: string,
  subheading: string,
  skillLine: string,
  impactLine: string
): CareerPageData => ({
  slug,
  badge: 'Environment Career Pathway',
  heading,
  subheading,
  whyCards: [
    {
      icon: 'Trees',
      title: 'Conservation Mission',
      description: 'Protect forests, biodiversity, and natural resources through field and policy action.',
      borderColor: '#16A34A'
    },
    {
      icon: 'ShieldCheck',
      title: 'Public Service Role',
      description: 'Work with communities and agencies to enforce environmental and wildlife laws.',
      borderColor: '#059669'
    },
    {
      icon: 'Briefcase',
      title: 'Long-Term Demand',
      description: impactLine,
      borderColor: '#F59E0B'
    }
  ],
  quickFacts: [
    { label: 'Entry Path', detail: 'Forestry or allied degree plus state or UPSC route', color: 'bg-green-100 text-green-700' },
    { label: 'Top Skills', detail: skillLine, color: 'bg-blue-100 text-blue-700' },
    { label: 'Work Style', detail: 'Field operations plus administration', color: 'bg-emerald-100 text-emerald-700' }
  ],
  statCards: [
    { value: 'High', label: 'Ecological Impact', gradient: 'from-green-500 to-green-600' },
    { value: 'Pan India', label: 'Forest Cadre Opportunities', gradient: 'from-emerald-500 to-emerald-600' }
  ],
  guideSections: [
    {
      id: 'what',
      title: 'What is this career about?',
      icon: 'Target',
      description: 'Understand the role and public mission.',
      color: GREEN,
      content: [
        'A Forest Officer protects forests, wildlife habitats, and natural resources while balancing conservation and local livelihood needs.:',
        'The role combines field inspections, anti-poaching efforts, fire prevention, land and biodiversity monitoring, and legal enforcement.:',
        'You may serve in state forest departments, wildlife divisions, eco-development projects, or policy and planning units.:'
      ]
    },
    {
      id: 'who',
      title: 'Who should consider this?',
      icon: 'User',
      description: 'Traits and mindset for success.',
      color: GREEN2,
      content: [
        'Strong interest in environment, ecology, and conservation outcomes.:',
        'Physical stamina and willingness to work in forests, remote terrain, and mixed weather conditions.:',
        'Leadership, law-and-order awareness, and communication skills for working with teams and local communities.:'
      ]
    },
    {
      id: 'startnow',
      title: 'Start now (Class 9-12)',
      icon: 'Rocket',
      description: 'Practical actions to begin early.',
      color: GREEN,
      content: [
        'Focus on Biology, Geography, and Environmental Science fundamentals.:',
        'Take part in nature clubs, biodiversity surveys, clean-up drives, and conservation volunteering.:',
        'Build fitness, map-reading basics, and awareness of Indian forest and wildlife protection laws.:'
      ]
    }
  ]
});

export const environmentUpdateData: Record<string, CareerPageData> = {
  forest_officer: {
    slug: "forest_officer",
    badge: "The Guardian of the Wild for Class 10+",
    heading: "Forest Officer",
    subheading: "If the sound of rustling leaves is more musical to you than any pop song, become the Guardian of India's green lungs. Protect biodiversity, manage ecosystems, and ensure that forests survive for your grandchildren.",
    whyCards: [
      { icon: "Trees", title: "Ecosystem Guardian", description: "Manage complex ecosystems and protect biodiversity as a frontline defender of nature.", borderColor: "#10B981" },
      { icon: "Shield", title: "Wildlife Protector", description: "Track animal health, manage habitats, and reduce human-animal conflict in real-time.", borderColor: "#3B82F6" },
      { icon: "Leaf", title: "Climate Warrior", description: "Lead afforestation projects and carbon credit management to fight climate change.", borderColor: "#F59E0B" },
      { icon: "Gavel", title: "Law Enforcer", description: "Combat illegal poaching and timber smuggling to protect India's natural heritage.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹56,100–₹1,20,000 annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Ecology, GIS, Law Enforcement, Leadership, Field Survey", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. Forestry (3 yrs) + UPSC IFoS Exam + IGNFA Training (2 yrs)", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "33%", label: "India's Forest Cover Target", gradient: "from-green-500 to-green-600" },
      { value: "All India Service", label: "Prestigious Government Career", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Managing, protecting, and conserving forest resources and wildlife.",
        color: GREEN,
        content: [
          "A Forest Officer is a professional specialized in managing, protecting, and conserving forest resources and wildlife. But they are much more than 'tree guards.'",
          "They are scientists who understand complex ecosystems, negotiators who resolve conflicts between humans and animals, and law enforcement officers who fight illegal poaching and timber smuggling.",
          "In a world facing a climate crisis, this career is critical. Forests are India's 'green lungs,' and Forest Officers are their primary doctors.",
          "They ensure that biodiversity survives, that our water cycles remain stable, and that the natural heritage of India is preserved for future generations.",
          "The role combines field work, technology, community engagement, and legal enforcement into one of India's most impactful careers.",
          "As India commits to increasing forest cover to 33%, the demand for specialized Forest Officers is at an all-time high."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Forest Guardian",
        icon: "Clock",
        description: "Real workflow of a Divisional Forest Officer.",
        color: GREEN2,
        content: [
          "5:30 AM – The Forest's First Light: A Divisional Forest Officer (DFO) starts his day while most of the world is asleep. He steps out of his Forest Rest House, breathing in air so fresh it feels like a tonic.",
          "7:00 AM – The Morning Patrol: He joins a team of Forest Rangers for a foot patrol. They aren't just walking; they are looking for signs. A pugmark in the mud tells them a tigress passed by an hour ago. A broken fence indicates a need for immediate repair to prevent elephants from wandering into a nearby village.",
          "10:30 AM – Tech in the Wild: Back at the range office, he reviews images from 'camera traps.' He uses GIS (Geographic Information System) software to track forest cover changes and coordinates with a drone pilot to scout a remote area for signs of illegal forest fires or logging.",
          "1:30 PM – The Village Council: Lunch is a quick affair before heading to a 'Gram Sabha' (village meeting). Here, he becomes a diplomat. He explains to the villagers how a new eco-tourism project will bring them jobs while keeping the forest safe. He also listens to their concerns about livestock safety, acting as a bridge between the government and the community.",
          "4:00 PM – Law and Order: He receives an alert about an intercepted vehicle carrying illegal timber. He spends the afternoon supervising the legal paperwork and ensuring the evidence is recorded correctly for court. In the forest, the law is as important as the biology.",
          "7:30 PM – Night Vigil: As the forest transitions into its nocturnal life, he reviews the night-patrol schedule. He falls asleep to the distant call of a nightjar, knowing that under his watch, the wild is safe for another night."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Check if you have the Wild DNA.",
        color: GREEN,
        content: [
          "Physical & Mental Resilience: Can you trek for 10 kilometers in the heat or rain without complaining?",
          "A Love for Solitude: Many postings are in remote areas. Do you enjoy your own company and the quiet of nature?",
          "Observational Excellence: Do you notice the small things—a different bird call, a change in leaf color, or a strange footprint?",
          "Problem-Solving: If a forest fire breaks out, can you stay calm and direct a team to stop it?",
          "Integrity: You will manage vast natural resources; a strong moral compass is non-negotiable.",
          "Self-Assessment: Do I love nature and wildlife? Can I work in remote areas? Do I have the courage to stand against corruption? If yes, you have the Wild DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Protection-Conservation-Community Cycle.",
        color: GREEN2,
        content: [
          "Patrolling & Protection: Constant monitoring to prevent poaching, illegal logging, and forest fires.",
          "Wildlife Management: Tracking animal health, managing habitats, and reducing human-animal conflict.",
          "Afforestation: Planning and leading projects to plant new trees and restore degraded lands.",
          "Legal Enforcement: Enforcing the Wildlife Protection Act and Forest Conservation Act.",
          "Community Outreach: Educating and working with tribal and local communities to ensure they benefit from the forest.",
          "Documentation: Maintaining detailed records for regulatory compliance and research purposes."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "The prestigious journey through the Indian Forest Service.",
        color: GREEN,
        content: [
          "After Class 10: Choose Science Stream (PCM or PCB). Focus on subjects like Biology, Agriculture, or Math.",
          "After Class 12: Get a Bachelor's Degree in a relevant field. Subjects: Forestry, Agriculture, Engineering, or Pure Sciences (Botany, Zoology, etc.).",
          "Entry Point: Appear for UPSC Indian Forest Service (IFoS) Exam. Must clear Civil Services Prelims + IFoS Mains + Interview.",
          "State Level: Appear for State Public Service Commission (SPSC) exams for roles like Forest Range Officer (FRO) or ACF.",
          "Important: For IFoS, you must have a degree in Science or Engineering. Humanities and Commerce students are generally not eligible for technical officer roles.",
          "Training: Selected candidates undergo 2-year training at IGNFA (Indira Gandhi National Forest Academy), Dehradun, fully funded by the government."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries and career growth in the Indian Forest Service.",
        color: GREEN2,
        content: [
          "Entry-Level (ACF): ₹56,100–₹1,20,000 (Level 10). Positions: Assistant Conservator of Forests.",
          "Mid-Level (DFO/Conservator): ₹78,800–₹1,75,000 (Level 12-13). Positions: Divisional Forest Officer, Conservator.",
          "Senior-Level (CCF/PCCF): ₹1,82,200–₹2,25,000 (Level 15-17). Positions: Chief Conservator, Principal Chief Conservator.",
          "Apex Level (Director General): ₹2,25,000 (Fixed). Positions: Director General of Forests.",
          "Career Growth: ACF → DFO (4-8 years) → CF → CCF → PCCF.",
          "Hiring Trends: With India's commitment to increasing forest cover to 33%, demand for specialized officers in Eco-restoration and Carbon Credit management is rising."
        ]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top posting hubs and opportunities.",
        color: GREEN,
        content: [
          "Primary Employer: Government of India (IFoS) and various State Forest Departments.",
          "Top Posting Hubs: States with high forest cover like Madhya Pradesh, Arunachal Pradesh, Chhattisgarh, Odisha, and Uttarakhand.",
          "New-Age Hubs: Urban Forest Divisions in 'Smart Cities' (Delhi, Bengaluru, Pune).",
          "International: Deputation to global bodies like the UN Environment Programme (UNEP) or World Bank for environmental policy roles.",
          "Emerging Opportunities: Carbon Credit management, Eco-tourism development, Climate change mitigation projects.",
          "Remote Postings: Many positions are in remote, pristine forest areas with limited connectivity."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and preparation costs.",
        color: GREEN2,
        content: [
          "Course Fees: Most B.Sc. Forestry degrees in government universities cost ₹15,000–₹50,000 per year.",
          "Training: Once selected for IFoS, your 2-year training at IGNFA, Dehradun is fully funded by the government, and you receive a monthly stipend (salary).",
          "Preparation: UPSC coaching can cost ₹1L–₹2L, but many students succeed through self-study using free online resources.",
          "Living Costs: ₹10,000–₹20,000 per month during degree studies.",
          "Exam Fees: UPSC exam registration fees are minimal (₹100-200).",
          "ROI: Entry salary of ₹56,100+ makes education investment recoverable in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions for forestry education.",
        color: GREEN,
        content: [
          "Public/Premier: Forest Research Institute (FRI), Dehradun; Indian Institute of Forest Management (IIFM), Bhopal; Tamil Nadu Agricultural University (TNAU), Coimbatore; Dr. Y.S. Parmar University of Horticulture & Forestry, Nauni (H.P.).",
          "Training Academies: Indira Gandhi National Forest Academy (IGNFA), Dehradun (For IFoS); CASFOS (Coimbatore/Dehradun) (For SFS Officers).",
          "State Universities: Various state agricultural and forestry universities across India.",
          "Online Options: Limited, but some universities offer distance education in forestry-related subjects."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: GREEN,
        content: [
          "ICAR National Talent Scholarship: For students pursuing B.Sc. Forestry outside their home state.",
          "BIMSTEC/SAARC Scholarships: Available at FRI Dehradun for regional students.",
          "UGC Fellowships: For students pursuing research (Ph.D.) in Forestry or Wildlife Science.",
          "State Scholarships: Various state-level scholarships for science students.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Post-Selection: Once selected for IFoS, all training costs are covered by the government."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: GREEN2,
        content: [
          "IFS Association: The primary body for service members.",
          "VCI (for Vets in Forestry): Veterinary Council of India registration is needed if you are a Wildlife Vet.",
          "NATA/JEE: Not directly required for forestry, but Engineering graduates are highly valued for the technical wing of the service.",
          "Specialized Certifications: GIS/Remote Sensing, Wildlife Management, Fire Management, Carbon Accounting.",
          "International: IUCN (International Union for Conservation of Nature) membership for global recognition.",
          "Continuous Learning: Regular training programs and workshops throughout career."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in forest conservation.",
        color: GREEN2,
        content: [
          "Conventional: Forest Officer, Wildlife Warden, Silviculturist (expert in growing trees), Range Officer.",
          "New-Age: Carbon Credit Auditor, GIS/Remote Sensing Specialist, Eco-Tourism Manager, Climate Change Specialist.",
          "Entrepreneurship: Starting a Social Forestry Consultancy, Sustainable Timber startup, Eco-tourism venture.",
          "Research: Pursuing Ph.D. in Forestry, Wildlife Biology, or Environmental Science.",
          "International: Working with NGOs like WWF, The Nature Conservancy, or UN agencies.",
          "Interdisciplinary Roles: Forest Officer + Data Science, Forest Officer + Community Development, Forest Officer + Climate Action."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of forest service careers.",
        color: GREEN,
        content: [
          "Personal Safety: You deal with dangerous wildlife and sometimes armed poachers.",
          "Political Pressure: Balancing conservation with 'development projects' (like roads/dams) can be mentally exhausting.",
          "Isolation: You may spend weeks in areas with no mobile network or modern luxuries.",
          "Physical Demands: Constant trekking and fieldwork in challenging terrain and weather.",
          "Bureaucratic Challenges: Navigating complex government procedures and red tape.",
          "Emotional Weight: Witnessing habitat destruction or wildlife suffering can be emotionally taxing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in forest conservation.",
        color: GREEN2,
        content: [
          "AI & Machine Learning: Using AI to predict forest fires before they spread.",
          "Blockchain: Tracing the origin of timber to stop illegal logging globally.",
          "Carbon Markets: India's new Carbon Credit Trading Scheme will make Forest Officers the key 'Accountants' of the country's air quality.",
          "Drone Technology: Extensive use of drones for monitoring and surveillance.",
          "Climate Adaptation: Managing forests for climate resilience and carbon sequestration.",
          "Impact on Employment: New roles for data scientists, drone pilots, and climate specialists. Required skills: GIS, Remote Sensing, Data Analytics, AI."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: GREEN,
        content: [
          "Trekking: Build your physical stamina. Start walking long distances.",
          "Photography: A great way to learn about wildlife and documentation.",
          "Read Maps: Learn how to use a physical map and compass.",
          "Volunteer: Join an NGO like WWF-India or a local tree-plantation drive.",
          "Learn GIS: Familiarize yourself with Geographic Information Systems.",
          "Science Projects: Conduct experiments on ecology, biodiversity, or environmental conservation.",
          "Online Courses: Take free courses on Coursera or edX about environmental science.",
          "Observation: Keep a nature journal. Document wildlife and ecosystem changes.",
          "Physical Fitness: Prepare for the physical fitness requirements of the service."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in forest conservation.",
        color: GREEN2,
        content: [
          "Sanjiv Chaturvedi: Known for his incredible integrity and whistleblowing against forest corruption.",
          "Neha Verma: An IIT graduate who left a software job to join the IFoS; she is a leader in training frontline staff.",
          "B.K. Singh: A former PCCF known for his strong stand on protecting the Western Ghats.",
          "Dr. S.P. Yadav: A key figure in Project Tiger, instrumental in bringing back tiger populations in India.",
          "Ananda Kumar: An officer who won the 'Green Oscar' for his innovative work in reducing human-elephant conflict using SMS alerts.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's environmental and conservation initiatives."
        ]
      }
    ]
  },
  geology: {
    slug: "geology",
    badge: "The Earth's Detective for Class 10+",
    heading: "Geology",
    subheading: "Imagine being a detective whose 'crime scene' is 4.5 billion years old. Become the Earth's Detective who finds hidden resources, predicts natural disasters, and helps India become self-reliant.",
    whyCards: [
      { icon: "Mountain", title: "Resource Hunter", description: "Find the hidden gold, lithium, and oil that power our world and drive India's growth.", borderColor: "#10B981" },
      { icon: "Zap", title: "EV Revolution Leader", description: "Lead India's electric vehicle revolution by finding critical minerals like lithium and cobalt.", borderColor: "#3B82F6" },
      { icon: "Shield", title: "Safety Guardian", description: "Tell us where it's safe to build and predict earthquakes, landslides, and volcanic activity.", borderColor: "#F59E0B" },
      { icon: "Droplet", title: "Water Protector", description: "Protect groundwater and ensure sustainable water resources for future generations.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹5L–₹9L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Field Mapping, GIS, Lab Analysis, Data Modeling, Mineralogy", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. Geology (3 yrs) + M.Sc./M.Tech (2 yrs) + Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "10.7% CAGR", label: "Market Growth to 2030", gradient: "from-green-500 to-green-600" },
      { value: "Atmanirbhar", label: "India's Self-Reliance Mission", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The scientific study of Earth and its hidden treasures.",
        color: GREEN,
        content: [
          "Geology is the scientific study of the Earth—the rocks it's made of, the processes that shape its surface (like volcanoes and earthquakes), and the history of life hidden in fossils.",
          "A Geologist doesn't just 'look at stones.' They are the experts who find the hidden gold, lithium, and oil that power our world.",
          "They are the scientists who tell us where it's safe to build a skyscraper or a dam, and the environmental guardians who protect our groundwater.",
          "In a world facing climate change and a massive shift toward electric vehicles (which need minerals like lithium), Geologists are more important than ever.",
          "They are the ones helping India find the resources it needs to become a 'Self-Reliant' (Atmanirbhar) nation.",
          "The role combines fieldwork, laboratory analysis, computer modeling, and strategic resource planning."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Earth's Detective",
        icon: "Clock",
        description: "Real workflow of a Junior Geologist.",
        color: GREEN2,
        content: [
          "7:00 AM – The Field Call: A Junior Geologist with the Geological Survey of India (GSI) starts his day in a remote part of Rajasthan. He's dressed in heavy-duty boots and a sun-hat, carrying a 'Geological Hammer' and a compass. Today's mission: mapping a rock formation that might contain copper.",
          "10:30 AM – Rock Talk: Under the bright sun, he chips off a piece of rock. He uses a hand lens to look at the tiny crystals inside. He records the 'dip' and 'strike' (the angle at which the rock is tilted) in his field diary. This isn't just a walk; it's a high-stakes treasure hunt.",
          "1:30 PM – The Strategy Meeting: Back at the camp, he meets with a Geophysicist. They look at satellite images and 'seismic data' (vibrations through the ground). They are trying to figure out if the copper ore they found on the surface continues deep underground.",
          "4:00 PM – Laboratory Analysis: He travels to a regional lab where he prepares thin sections of the rock to look at under a high-powered polarizing microscope. He's looking for specific minerals that indicate how the rock was formed millions of years ago.",
          "7:00 PM – Data and Documentation: The day ends at a computer. He enters his field measurements into GIS (Geographic Information System) software to create a digital 3D map of the area. As the sun sets, he knows that the map he's building today could lead to a massive new mine that provides jobs for thousands."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Check if you have the Geologist DNA.",
        color: GREEN,
        content: [
          "Adventure-Seeking: You are happy to spend weeks in remote areas with basic facilities.",
          "Analytical Mind: You love puzzles and can look at a pile of data to find a hidden pattern.",
          "Physical Fitness: You can walk long distances on uneven terrain.",
          "Observation Skills: You notice small details—a change in rock color or a tiny fossil embedded in a stone.",
          "Tech-Savvy: You are comfortable using high-tech tools like drones, GPS, and advanced mapping software.",
          "Self-Assessment: Do I love the outdoors and nature? Can I work with precision? Do I want to find Earth's hidden treasures? If yes, you have the Geologist DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Investigation-Analysis-Modeling Cycle.",
        color: GREEN2,
        content: [
          "Field Investigation: Mapping, sampling, and surveying the land using physical tools and drones.",
          "Laboratory Research: Testing rocks for chemical composition, age, and mineral content.",
          "Modeling & Reporting: Using computers to create 3D maps and 'resource estimates' (predicting how much oil or mineral is underground).",
          "Safety Assessment: Evaluating geological hazards like earthquakes, landslides, and volcanic activity.",
          "Environmental Protection: Monitoring groundwater and assessing environmental impact of mining or construction.",
          "Documentation: Maintaining detailed records for regulatory compliance and research purposes."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a geologist.",
        color: GREEN,
        content: [
          "After Class 10: Focus on Science Stream (PCM or PCB). Strong foundation in Chemistry & Physics.",
          "After Class 12: Enroll in B.Sc. Geology or B.Tech. Applied Geology. Clear CUET-UG or State CETs.",
          "After Graduation: Pursue M.Sc. or M.Tech (Essential for most jobs). Clear IIT-JAM or GATE.",
          "Professional Entry: Competitive exams for Government roles or private hiring. UPSC Geo-Scientist Exam for Group A posts.",
          "Specializations: Mineral Exploration, Hydrogeology, Environmental Geology, Geotechnical Engineering, Paleontology.",
          "Advanced: Post-doctoral research or leadership roles in mining and energy companies."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: GREEN2,
        content: [
          "Entry-Level: ₹5L–₹9L annually. Positions: Junior Geologist, Exploration Geologist, Field Technician.",
          "Mid-Level (5–12 years): ₹15L–₹28L annually. Positions: Senior Geologist, Project Lead, Hydrogeologist.",
          "Senior/Chief Geologist: ₹35L–₹60L annually. Positions: Chief Geologist, Research Director, Institute Head.",
          "Leadership/CXO: ₹80L–₹1.5 Crore+ (Common in top private firms like Vedanta, Reliance, or global consultancies).",
          "Market Size: The Indian geotechnics and mineral exploration market is expected to grow at a CAGR of 10.7% up to 2030.",
          "Hiring Trends: Major hiring is happening in the 'Critical Minerals' and 'Renewable Energy' (Geothermal) sectors."
        ]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top employers and cities.",
        color: GREEN,
        content: [
          "Public Sector: Geological Survey of India (GSI), ONGC, Oil India, Coal India, Mineral Exploration Corporation Limited (MECL).",
          "Private Sector: Vedanta, Tata Steel, Reliance Industries, Schlumberger, Shell.",
          "International: High demand in Australia, Canada, and the Middle East (Dubai/Qatar) for Indian geologists.",
          "Remote/Gig: High potential in BIM (Building Information Modeling) and GIS analysis roles.",
          "Emerging Hubs: Bangalore (Tech + Geology), Hyderabad (Mineral Research), Pune (Geotechnical), Delhi (Policy)."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: GREEN2,
        content: [
          "Government Institutions: ₹15,000–₹80,000 total (3-year B.Sc fees). Very affordable for quality education.",
          "Private Institutions: ₹3L–₹8L total (3-year B.Sc fees). Higher cost but strong industry connections.",
          "Hostel/Living: ₹12,000–₹20,000 per month in cities like Delhi, Pune, or Hyderabad.",
          "Equipment: A geologist's kit (Hammer, Lens, Brunton Compass) costs approx. ₹15,000.",
          "Additional Costs: Field trips, lab materials, and certifications can cost ₹20,000–₹50,000.",
          "ROI: Entry salary of ₹5L+ makes education investment recoverable in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions for geology education.",
        color: GREEN,
        content: [
          "Premier: IIT Bombay, IIT Kharagpur, IIT Dhanbad (ISM), IISERs.",
          "Central Universities: Banaras Hindu University (BHU), Delhi University (Hansraj/Ramjas), Jadavpur University.",
          "South: Anna University (Chennai), University of Hyderabad.",
          "North: Jammu University, Wadia Institute of Himalayan Geology (for research).",
          "Research Centers: Geological Survey of India Training Institute, CSIR Labs."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: GREEN,
        content: [
          "Central: NSP (National Scholarship Portal) – Merit-cum-Means scholarships.",
          "UPSC/Government: Selected trainees for GSI receive a full salary (approx. ₹85,000/month) during their 1-year orientation.",
          "International: SEG Scholarship (up to $10,000 for geophysics/geoscience students).",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Licensing",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: GREEN2,
        content: [
          "Geological Society of India (GSI): The primary professional body.",
          "UPSC Combined Geo-Scientist: Mandatory for Group A central government gazetted posts.",
          "DGMS Certifications: Necessary for those working in the mining sector.",
          "Specialized Certifications: GIS/Remote Sensing, Hydrogeology, Geotechnical Engineering, Environmental Geology.",
          "International: SEG (Society of Exploration Geophysicists) membership for global recognition.",
          "Continuous Learning: Regular training programs and workshops throughout career."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in geology careers.",
        color: GREEN2,
        content: [
          "Conventional: Exploration Geologist, Hydrogeologist (Groundwater), Mine Manager, Geotechnical Engineer.",
          "New-Age: Critical Minerals Analyst, Planetary Geologist (ISRO/Space research), Geological Data Scientist (using AI to predict landslides).",
          "Entrepreneurship: Technical Consultant for construction firms, Environmental Auditor, Geotourism Developer.",
          "Research: Pursuing Ph.D. in Geology, Paleontology, or Geophysics.",
          "International: Working with global mining companies or UN agencies on resource management.",
          "Interdisciplinary Roles: Geology + Data Science, Geology + Environmental Science, Geology + Climate Action."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of geology careers.",
        color: GREEN,
        content: [
          "Remote Work: You will often be away from family and city life for months.",
          "Physical Risk: Working in mines or high mountains can be dangerous.",
          "Fluctuating Markets: Hiring in Oil & Gas can drop if global prices fall.",
          "Weather Challenges: Fieldwork in extreme heat, cold, or rain is common.",
          "Bureaucratic Delays: Government projects can move slowly due to red tape.",
          "Emotional Weight: Witnessing environmental damage or failed projects can be emotionally taxing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in geology.",
        color: GREEN2,
        content: [
          "The 'Lithium Rush': Geologists are now the frontline warriors for India's EV revolution.",
          "AI-Enhanced Exploration: Machine Learning will analyze millions of years of rock data to find 'invisible' mineral deposits.",
          "Space Mining: ISRO missions will start needing geologists to study Moon and Mars samples!",
          "Climate Geology: Understanding how rocks and minerals respond to climate change.",
          "Geothermal Energy: Geologists will lead India's renewable energy transition.",
          "Impact on Employment: New roles for AI specialists, drone pilots, and climate specialists. Required skills: GIS, Remote Sensing, Data Analytics, AI."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: GREEN,
        content: [
          "Geography & Math: These are your core tools. Master mapping and statistics.",
          "Learn GIS Basics: Try a free online course in QGIS or explore Google Earth Pro.",
          "Nature Observation: Start a 'Rock Collection.' Note where you found each stone and its properties.",
          "Photography: Practice taking clear, high-detail photos of natural landscapes.",
          "Science Projects: Conduct experiments on rock formation, mineral identification, or fossil analysis.",
          "Online Courses: Take free courses on Coursera or edX about geology and earth science.",
          "Field Trips: Join geology clubs and participate in field surveys.",
          "Observation: Keep a geology journal. Document rock formations and geological features.",
          "Physical Fitness: Build stamina for fieldwork in challenging terrain."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in geology.",
        color: GREEN2,
        content: [
          "B.P. Radhakrishna: Known for his original concepts on the tectonic movements of the Indian Peninsula.",
          "Shiva Balak Misra: Discovered the oldest multicellular fossils on Earth (Fractofususmisrai) in Newfoundland.",
          "Ashok Sahni: A world-renowned Palaeontologist known for his study of Indian dinosaurs and evolution.",
          "Narinder Kapany: Though a physicist, his work in fiber optics (which geologists use for sensors) changed the field.",
          "K.S. Valdiya: A legend in Himalayan Geology who mapped the 'Great Boundary Fault.'",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's geological and environmental initiatives."
        ]
      }
    ]
  },
  oceanographer: {
    slug: "oceanographer",
    badge: "Decoding the Blue Heart of Earth for Class 10+",
    heading: "Oceanographer",
    subheading: "Imagine a world that covers 70% of our planet, yet we know less about it than the surface of the Moon. Become the Sea Detective who decodes the ocean's mysteries and protects India's 7,500 km coastline.",
    whyCards: [
      { icon: "Waves", title: "Monsoon Predictor", description: "Help our farmers know when the rains will arrive by studying ocean currents.", borderColor: "#10B981" },
      { icon: "Globe", title: "Climate Warrior", description: "Study how the sea absorbs carbon dioxide to fight global warming and climate change.", borderColor: "#3B82F6" },
      { icon: "Zap", title: "Resource Explorer", description: "Find new sources of energy and minerals on the seabed for India's future.", borderColor: "#F59E0B" },
      { icon: "Shield", title: "Coastal Protector", description: "Save our cities from rising sea levels, tsunamis, and marine hazards.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹5L–₹8L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Physics, Chemistry, Biology, Coding, Data Analysis", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc./B.Tech (3-4 yrs) + M.Sc./M.Tech (2 yrs) + Specialization", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "12% CAGR", label: "Blue Economy Growth", gradient: "from-green-500 to-green-600" },
      { value: "7,500 km", label: "India's Coastline", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "The scientific study of everything related to the sea.",
        color: GREEN,
        content: [
          "Oceanography is the scientific study of everything related to the sea—from the tiniest plankton and giant blue whales to underwater volcanoes and the massive currents that dictate India's monsoons.",
          "An Oceanographer is a 'Sea Detective.' They use biology, chemistry, physics, and geology to understand how the ocean works.",
          "The ocean is the 'engine room' of our climate. For a country like India, with a 7,500 km coastline, oceanographers are essential for predicting monsoons, fighting climate change, exploring resources, and protecting coastal cities.",
          "Oceanographers work on research ships, in laboratories, and with advanced technology like satellites and underwater robots.",
          "The role combines fieldwork, laboratory analysis, computer modeling, and strategic environmental planning.",
          "As India expands its Blue Economy, oceanographers are more critical than ever for sustainable ocean management."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Sea Detective",
        icon: "Clock",
        description: "Real workflow of a Physical Oceanographer.",
        color: GREEN2,
        content: [
          "5:30 AM – The Deep Sea Dawn: A Physical Oceanographer at the National Institute of Oceanography (NIO) in Goa begins his day aboard the RV Sindhu Sadhana, a massive research ship. He isn't at a desk; he's on the deck, breathing in salt spray as a robotic sensor is lowered into the Arabian Sea.",
          "9:00 AM – Data Diving: Back in the ship's high-tech lab, he analyzes the 'Live Feed.' Sensors are sending back data on water temperature and salinity from 2,000 meters below. He notices a warm patch of water—this is a 'Marine Heatwave' that could affect the fish population. He marks the coordinates for the biological team to investigate.",
          "1:30 PM – The 'Blue Tech' Meeting: After a quick lunch, he joins a satellite link-up with the Indian National Centre for Ocean Information Services (INCOIS) in Hyderabad. They are using AI models to predict a potential storm surge near the Odisha coast. He provides the 'ground-truth' data from the ship to make the AI prediction more accurate.",
          "4:00 PM – Lab Work & Samples: The ship's robotic arm brings up a 'Core Sample'—a long tube of mud from the ocean floor. He helps the geological team label it. This mud contains 'fossilized clues' that tell the story of Earth's climate from 10,000 years ago.",
          "7:30 PM – The Starry Watch: As the sun sets over the horizon, he updates his research log. He spends an hour teaching a young intern how to calibrate an underwater drone. The ship is quiet, lit only by the stars and the glow of computer monitors. He ends his day knowing that the data he collected today will help protect thousands of lives back on the mainland."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Check if you have the Oceanic Spirit.",
        color: GREEN,
        content: [
          "Adventure-Ready: You love the outdoors and don't mind spending weeks on a ship or in remote coastal villages.",
          "Curious & Analytical: You love puzzles and are always asking 'Why?' about the natural world.",
          "Stamina: You are physically fit; field research can involve hiking, diving, or working on moving ships.",
          "Tech-Savvy: You enjoy playing with gadgets, drones, and computer models.",
          "Collaborative: Oceans are too big for one person. You must be a team player who can work with biologists, chemists, and engineers.",
          "Self-Assessment: Do I love the ocean and marine life? Can I work in challenging environments? Do I want to protect our seas? If yes, you have the Oceanic Spirit."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Observe-Analyze-Predict Cycle.",
        color: GREEN2,
        content: [
          "Data Collection: Using ships, satellites, and underwater robots to gather samples.",
          "Laboratory Analysis: Testing water chemistry or biological specimens in a controlled lab.",
          "Modeling: Entering data into 'Supercomputers' to create 3D maps of ocean movement.",
          "Reporting: Writing research papers or advising the government on coastal safety laws.",
          "Monitoring: Tracking marine ecosystems and environmental changes over time.",
          "Documentation: Maintaining detailed records for regulatory compliance and research purposes."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become an oceanographer.",
        color: GREEN,
        content: [
          "After Class 10: Choose Science Stream (PCM or PCB). Focus on Physics, Maths, and Geography.",
          "After Class 12: Enroll in B.Sc. / B.Tech. Clear CUET or State Exams.",
          "B.Sc. Route: 3-year B.Sc. in Physics, Chemistry, Geology, or Marine Science. Build strong lab and coding skills.",
          "B.Tech. Route: 4-year B.Tech. in Ocean/Marine Engineering. Clear JEE Main.",
          "After Graduation: Pursue M.Sc. or M.Tech (Essential). Clear IIT-JAM or GATE.",
          "Specialization: Research (Ph.D.) or PSU Jobs. Join institutes like NIO or INCOIS."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: GREEN2,
        content: [
          "Entry-Level (JRF/Trainee): ₹5L–₹8L annually. Positions: Research Associate, Junior Scientist, Trainee.",
          "Mid-Level (Scientist C/D): ₹12L–₹22L annually. Positions: Scientist, Project Lead, Senior Researcher.",
          "Senior/Director: ₹35L–₹60L annually. Positions: Research Director, Institute Head, Chief Scientist.",
          "International Consultant: ₹80L+ annually. Positions: Global consultant for ocean research.",
          "Hiring Trends: Major demand for professionals with AI and Data Science skills to manage massive ocean datasets.",
          "Industry Growth: Expected to grow at 12% CAGR as India expands its offshore wind energy and deep-sea mining projects."
        ]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top employers and cities.",
        color: GREEN,
        content: [
          "Top Public Sectors: CSIR-National Institute of Oceanography (NIO), INCOIS, National Institute of Ocean Technology (NIOT), Indian Navy.",
          "Private Industries: Offshore energy companies (ONGC, Reliance), Environmental Consultancies, Fisheries.",
          "Remote Work: High potential in Ocean Modeling and Satellite Data Analysis.",
          "Top Cities: Goa, Hyderabad, Chennai, Visakhapatnam, and Kochi.",
          "Emerging Hubs: Coastal cities with research centers and offshore energy projects."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: GREEN2,
        content: [
          "Government Institutions: ₹15,000–₹1L total (3/4-year degree). Very affordable for quality education.",
          "Private Institutions: ₹4L–₹12L total (4-year degree). Higher cost but strong industry connections.",
          "Hostel/Living: ₹10,000–₹20,000 per month.",
          "Additional: Scuba diving certification (₹25,000–₹40,000) is often a valuable extra.",
          "Equipment: Research tools and diving gear can cost ₹20,000–₹50,000.",
          "ROI: Entry salary of ₹5L+ makes education investment recoverable in 2-3 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions for oceanography education.",
        color: GREEN,
        content: [
          "Premier Public: IIT Madras / IIT Kharagpur (Ocean Engineering), Cochin University of Science and Technology (CUSAT), Goa University (Marine Science), Andhra University (Visakhapatnam).",
          "Private: Amity University (Noida), SRM Institute (Chennai), VIT Vellore.",
          "Research Centers: CSIR-NIO (Goa), INCOIS (Hyderabad), NIOT (Chennai).",
          "Online Options: Limited, but some universities offer distance education in marine science-related subjects."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: GREEN,
        content: [
          "CSIR-UGC NET JRF: Monthly stipend of approx. ₹37,000 for Ph.D. students.",
          "MoES Fellowships: Specific to the Deep Ocean Mission for research scholars.",
          "NSP (National Scholarship Portal): Merit-cum-means scholarships for UG students.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: GREEN2,
        content: [
          "Ocean Society of India (OSI): The primary networking body for Indian sea scientists.",
          "GIS / Remote Sensing: Certifications from IIRS (ISRO) add immense value.",
          "Scuba Certification (PADI/SSI): Not always mandatory but highly recommended for biological oceanographers.",
          "Specialized Certifications: Ocean Modeling, Satellite Oceanography, Marine Data Analysis.",
          "International: International Association for the Physical Sciences of the Oceans (IAPSO) membership for global recognition.",
          "Continuous Learning: Regular training programs and workshops throughout career."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in oceanography careers.",
        color: GREEN2,
        content: [
          "Conventional: Research Scientist, Marine Biologist, Physical Oceanographer, Oceanographic Technician.",
          "New-Age: AI Ocean Modeler, Deep-Sea Mining Specialist, Marine Carbon Auditor, Ocean Data Scientist.",
          "Entrepreneurship: Technical Consultant for port development, Environmental NGO advisor, Marine Biotech startup.",
          "Research: Pursuing Ph.D. in Oceanography, Marine Biology, or Geophysics.",
          "International: Working with global research organizations or UN agencies on ocean conservation.",
          "Interdisciplinary Roles: Oceanography + Data Science, Oceanography + Climate Science, Oceanography + Renewable Energy."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of oceanography careers.",
        color: GREEN,
        content: [
          "Motion Sickness: Life on a ship isn't always glamorous; sea sickness is a real hurdle for many!",
          "Long Absences: Research cruises can keep you away from family for weeks or months.",
          "Grant Writing: For researchers, a lot of time is spent writing proposals to get funding for projects.",
          "Weather Challenges: Fieldwork can be cancelled or delayed due to storms or rough seas.",
          "Funding Uncertainty: Research projects depend on grants, which can be unpredictable and competitive.",
          "Emotional Weight: Witnessing ocean pollution or ecosystem degradation can be emotionally taxing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in oceanography.",
        color: GREEN2,
        content: [
          "Ocean Renewable Energy: Building giant underwater turbines to generate electricity from tides.",
          "Digital Twins of the Ocean: Using AI to create a 'Virtual Ocean' that can test climate scenarios in seconds.",
          "Marine Biotechnology: Finding new medicines from deep-sea organisms that can cure rare diseases.",
          "Deep-Sea Mining: Exploring sustainable ways to extract minerals from the ocean floor.",
          "Climate Adaptation: Managing oceans for climate resilience and carbon sequestration.",
          "Impact on Employment: New roles for AI specialists, drone pilots, and climate specialists. Required skills: Python, Machine Learning, Data Analytics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: GREEN,
        content: [
          "Master Physics & Math: Understanding waves and thermodynamics is the core of oceanography.",
          "Learn Python: Coding is now as important as a microscope for scientists.",
          "Join Eco-Clubs: Participate in beach cleanups or wetland conservation projects.",
          "Geography Exploration: Start studying maps—learn about ocean trenches and ridge systems.",
          "Science Projects: Conduct experiments on water chemistry, marine ecosystems, or ocean currents.",
          "Online Courses: Take free courses on Coursera or edX about oceanography and marine science.",
          "Documentaries: Watch ocean documentaries to understand real-world oceanography.",
          "Observation: Keep a nature journal. Document marine life and ocean changes.",
          "Physical Fitness: Build stamina for fieldwork and potential diving activities."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in oceanography.",
        color: GREEN2,
        content: [
          "Dr. Aditi Pant: An inspiration for all—she was one of the first Indian women to visit Antarctica in 1983.",
          "Dr. N. Kesava Panikkar: The founder of the National Institute of Oceanography and a pioneer in Indian marine biology.",
          "Dr. Shailesh Nayak: A world-renowned expert in satellite oceanography and the primary architect of India's Tsunami Warning System.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's ocean and environmental research initiatives.",
          "Dr. Hari Haran: A leading researcher in marine conservation and coastal ecology.",
          "Dr. Vinay Kumar: Pioneer in deep-sea research and marine biodiversity studies."
        ]
      }
    ]
  },
  wildlife_biologist: {
    slug: "wildlife_biologist",
    badge: "The Voice of the Wild for Class 10+",
    heading: "Wildlife Biologist",
    subheading: "Imagine being a detective whose crime scene is a dense tropical forest or a Himalayan slope. Become the Voice of the Wild who decodes nature's secrets and saves species from disappearing forever.",
    whyCards: [
      { icon: "Binoculars", title: "Nature Detective", description: "Decode the secrets of wild animals and understand why they behave the way they do.", borderColor: "#10B981" },
      { icon: "Heart", title: "Species Savior", description: "Design conservation plans to save endangered species and restore their habitats.", borderColor: "#3B82F6" },
      { icon: "Users", title: "Bridge Builder", description: "Help humans and animals share this beautiful country safely and sustainably.", borderColor: "#F59E0B" },
      { icon: "Globe", title: "Biodiversity Guardian", description: "Protect India's 8% of the world's biodiversity for future generations.", borderColor: "#6366F1" }
    ],
    quickFacts: [
      { label: "Entry Salary", detail: "₹3L–₹6L annually", color: "bg-green-100 text-green-700" },
      { label: "Top Skills", detail: "Field Research, Data Analysis, GIS, Ecology, Fieldwork", color: "bg-blue-100 text-blue-700" },
      { label: "Pathway", detail: "B.Sc. Zoology (3 yrs) + M.Sc. Wildlife Science (2 yrs) + PhD", color: "bg-purple-100 text-purple-700" }
    ],
    statCards: [
      { value: "9.9% CAGR", label: "Wildlife Tourism Market Growth", gradient: "from-green-500 to-green-600" },
      { value: "8%", label: "World's Biodiversity in India", gradient: "from-blue-500 to-blue-600" }
    ],
    guideSections: [
      {
        id: "what",
        title: "What is This Career All About?",
        icon: "Target",
        description: "Studying the biology, behavior, and habitats of wild animals.",
        color: GREEN,
        content: [
          "A Wildlife Biologist is a professional scientist who studies the biology, behavior, and habitats of wild animals.",
          "They figure out why a tiger chooses a specific path, how a tiny bird migrates thousands of kilometers across oceans, or what we must do to save a species from disappearing forever.",
          "In today's India—home to nearly 8% of the world's biodiversity—this career is a mission.",
          "As our cities grow, Wildlife Biologists are the essential bridge-builders, ensuring that humans and animals can share this beautiful country safely and sustainably.",
          "The role combines fieldwork, laboratory analysis, data modeling, and community engagement.",
          "Wildlife Biologists work in forests, wetlands, mountains, and coastal areas to protect our natural heritage."
        ]
      },
      {
        id: "dayinlife",
        title: "A Day in the Life: The Nature Detective",
        icon: "Clock",
        description: "Real workflow of a Wildlife Biologist.",
        color: GREEN2,
        content: [
          "5:00 AM – The Forest Awakening: A Wildlife Biologist studying Snow Leopards in Spiti Valley starts his day before the sun hits the peaks. He isn't at a desk; he's trekking through the crunching snow, checking 'camera traps' (motion-sensor cameras) he set up last week.",
          "9:00 AM – The Scavenger Hunt: He finds fresh 'scat' (animal droppings) and carefully collects it in a sterile vial. To a biologist, this isn't waste—it's a goldmine of DNA that reveals what the leopard ate and its health status. He records the GPS coordinates on his tablet.",
          "12:30 PM – Tech in the Tent: Back at his base camp, he pulls the SD cards from the cameras. He uses an AI-powered software that automatically identifies individual leopards based on their unique spot patterns. 'There's Ghost,' he smiles, recognizing a male he's tracked for three years.",
          "3:30 PM – Community Connection: He walks to a nearby village to meet with local shepherds. He shares photos of the leopard and discusses a new 'predator-proof' corral design to protect their sheep. In India, a biologist must be part-scientist, part-diplomat.",
          "7:00 PM – Data and Dreams: The day ends by the glow of a laptop. He enters his data into a global conservation database. As the temperature drops to -10°C, he falls asleep to the sound of the wind, knowing his work is helping a ghost survive."
        ]
      },
      {
        id: "who",
        title: "Is This You? (Personality Traits & Skills)",
        icon: "User",
        description: "Check if you have the Wild DNA.",
        color: GREEN,
        content: [
          "Physical & Mental Resilience: Can you stay in a tent for weeks or hike in the rain without a phone signal?",
          "Extreme Patience: You might wait days just to see a single movement in the grass.",
          "Analytical Thinking: Do you love puzzles? You'll be looking at data to find hidden patterns in nature.",
          "Tech-Savvy: Modern biology is high-tech—using drones, satellite tagging, and DNA sequencing.",
          "Empathy & Ethics: You must care deeply about the welfare of creatures that cannot speak for themselves.",
          "Self-Assessment: Do I love wildlife and nature? Can I work in challenging field conditions? Do I want to save endangered species? If yes, you have the Wild DNA."
        ]
      },
      {
        id: "responsibilities",
        title: "Key Responsibilities and Workflow",
        icon: "Briefcase",
        description: "The Field-to-Lab-to-Policy Cycle.",
        color: GREEN2,
        content: [
          "Surveying: Counting animals and mapping their homes using foot surveys or drones.",
          "Sample Collection: Gathering hair, scat, or blood samples for genetic testing.",
          "Data Analysis: Using statistics to predict if a population is growing or shrinking.",
          "Conservation Action: Designing plans to reduce human-wildlife conflict or restore a forest.",
          "Policy Advocacy: Presenting findings to the government to create new National Parks.",
          "Documentation: Maintaining detailed records for regulatory compliance and research purposes."
        ]
      },
      {
        id: "pathways",
        title: "Career Pathways in India",
        icon: "Map",
        description: "Multiple entry routes to become a wildlife biologist.",
        color: GREEN,
        content: [
          "After Class 10: Choose Science Stream (PCB: Physics, Chemistry, Biology). Strong foundation in Life Sciences.",
          "After Class 12: Enroll in B.Sc. Zoology, Life Sciences, or Forestry. Clear CUET-UG or State Exams.",
          "During Graduation: Take internships at NGOs (WWF, WTI) or research labs. Build your 'Field Resume.'",
          "After Graduation: Pursue M.Sc. in Wildlife Science or Ecology. Clear ICAR AIEEA (PG) or GATE.",
          "Research Entry: Qualify for NET/JRF to start a Ph.D. Become a lead scientist.",
          "Note: While Science is the primary route, those from Humanities/Commerce can enter the field via Environmental Law or NGO Management later in their careers."
        ]
      },
      {
        id: "market",
        title: "Market Snapshot — India 2026",
        icon: "TrendingUp",
        description: "Salaries, growth, and job opportunities.",
        color: GREEN2,
        content: [
          "Entry-Level (Project Assistant): ₹3L–₹6L annually. Positions: Research Assistant, Field Technician, Junior Biologist.",
          "Mid-Level (Scientist/Asst. Professor): ₹10L–₹18L annually. Positions: Scientist, Project Lead, Assistant Professor.",
          "Senior/Leadership: ₹25L–₹45L annually. Positions: Research Director, Institute Head, Chief Scientist.",
          "Specialized Consultant: ₹50L+ (Common in international projects).",
          "Growth Projections: The wildlife health and tourism market is expected to grow at a CAGR of 9.9% until 2030.",
          "Hiring Trends: This is creating a surge in jobs for disease surveillance and eco-tourism specialists."
        ]
      },
      {
        id: "locations",
        title: "Where Are the Jobs?",
        icon: "MapPin",
        description: "Top employers and cities.",
        color: GREEN,
        content: [
          "Public Sector: Wildlife Institute of India (WII), National Centre for Biological Sciences (NCBS), Forest Departments (as consultants).",
          "Private/NGOs: WWF-India, Wildlife Trust of India (WTI), Bombay Natural History Society (BNHS).",
          "International: Conservation International, Wildlife Conservation Society (WCS), United Nations (UNEP).",
          "Remote Potential: High in Bioinformatics, Eco-modeling, and Environmental Writing.",
          "Top Cities: Dehradun, Bengaluru, Pune, Goa, and Hyderabad."
        ]
      },
      {
        id: "costs",
        title: "What Will It Cost?",
        icon: "CircleDollarSign",
        description: "Education and training costs.",
        color: GREEN2,
        content: [
          "Government Institutions: ₹15,000–₹80,000 total (3-year B.Sc. fees). Very affordable for quality education.",
          "Private Institutions: ₹3L–₹8L total (3-year B.Sc. fees). Higher cost but strong industry connections.",
          "Masters (M.Sc.): Highly competitive; top programs (WII/NCBS) often offer full fellowships (stipends).",
          "Living Costs: ₹10,000–₹18,000 per month in education hubs like Dehradun or Bengaluru.",
          "Additional Costs: Field equipment, certifications, and research materials can cost ₹20,000–₹50,000.",
          "ROI: Entry salary of ₹3L+ makes education investment recoverable in 3-4 years."
        ]
      },
      {
        id: "institutions",
        title: "Where to Study?",
        icon: "Building2",
        description: "Top institutions for wildlife biology education.",
        color: GREEN,
        content: [
          "Premier Public: Wildlife Institute of India (WII), Dehradun – The 'Gold Standard'; NCBS, Bengaluru – Focus on high-end genetics and ecology; SACON, Coimbatore – Specialized in birds (Ornithology).",
          "Private Leaders: BVIEER, Pune (Integrated science and social issues); Amity University, Noida.",
          "Geographic Diversity: North (WII), South (NCBS/SACON), West (BVU Pune), East (Gauhati University).",
          "Research Centers: Various national parks and wildlife sanctuaries offer field research opportunities."
        ]
      },
      {
        id: "scholarships",
        title: "Scholarship Opportunities",
        icon: "Award",
        description: "Financial assistance programs.",
        color: GREEN,
        content: [
          "WCS-India Graduate Program: Fully funded 2-year Masters for selected students.",
          "National Fellowship for ST Students: Monthly stipend (₹25,000–₹28,000) for higher education.",
          "NSP (National Scholarship Portal): Various merit-cum-means schemes for UG students.",
          "Merit-Based: Many institutions offer scholarships for top scorers in entrance exams.",
          "Research Assistantships: Opportunities to earn while studying in research projects."
        ]
      },
      {
        id: "certifications",
        title: "Professional Bodies & Certifications",
        icon: "Award",
        description: "Professional organizations and credentials.",
        color: GREEN2,
        content: [
          "Wildlife Society (TWS): International networking and certification.",
          "NATA/GATE: GATE (Life Sciences) is often used for entry into premium research positions.",
          "Certifications: GIS (Mapping), Scuba Diving (for Marine Biologists), and Drone Pilot Licenses add massive value.",
          "Specialized Training: Camera trap operation, DNA analysis, Bioinformatics, Conservation Planning.",
          "International: IUCN (International Union for Conservation of Nature) membership for global recognition.",
          "Continuous Learning: Regular training programs and workshops throughout career."
        ]
      },
      {
        id: "opportunities",
        title: "Career Opportunities",
        icon: "Briefcase",
        description: "Diverse paths in wildlife biology careers.",
        color: GREEN2,
        content: [
          "Conventional: Wildlife Researcher, Park Warden, Zoo Curator, Field Biologist.",
          "New-Age: Wildlife Forensic Scientist (solving poaching crimes), Climate Change Modeler, Drone Technologist for surveys.",
          "Entrepreneurship: Wildlife Photographer, Eco-tourism Guide, Technical Consultant for infrastructure projects.",
          "Research: Pursuing Ph.D. in Wildlife Biology, Ecology, or Conservation.",
          "International: Working with global conservation organizations or UN agencies.",
          "Interdisciplinary Roles: Wildlife Biology + Data Science, Wildlife Biology + Climate Science, Wildlife Biology + Community Development."
        ]
      },
      {
        id: "challenges",
        title: "Challenges and Realities",
        icon: "AlertTriangle",
        description: "The hard truths of wildlife biology careers.",
        color: GREEN,
        content: [
          "Physical Danger: Dealing with unpredictable wild animals and difficult terrains.",
          "Isolation: Spending months away from family in areas with no Wi-Fi or electricity.",
          "Modest Initial Pay: Entry-level NGO roles pay less than IT or Corporate jobs; this is a career of passion.",
          "Weather Challenges: Fieldwork can be cancelled or delayed due to storms or extreme conditions.",
          "Funding Uncertainty: Research projects depend on grants, which can be unpredictable and competitive.",
          "Emotional Weight: Witnessing habitat destruction or species decline can be emotionally taxing."
        ]
      },
      {
        id: "future",
        title: "Emerging Trends & Future Outlook (2025–2035)",
        icon: "Sparkles",
        description: "What's next in wildlife biology.",
        color: GREEN2,
        content: [
          "AI & Machine Learning: AI will automatically scan millions of camera trap images, doing months of work in minutes.",
          "Genomics: We will use 'environmental DNA' (eDNA) from a cup of water to list every animal that visited a lake.",
          "Zoonotic Vigilance: Biologists will be the 'Early Warning System' to prevent future pandemics like COVID-19 by monitoring animal health.",
          "Climate Adaptation: Managing wildlife populations for climate resilience and ecosystem stability.",
          "Drone Technology: Extensive use of drones for monitoring and population surveys.",
          "Impact on Employment: New roles for AI specialists, drone pilots, and data scientists. Required skills: Python, Machine Learning, Data Analytics."
        ]
      },
      {
        id: "startnow",
        title: "Skills to Build While Still in School",
        icon: "Rocket",
        description: "Actionable steps to start your journey.",
        color: GREEN,
        content: [
          "Photography: Start a 'Nature Journal.' Photograph the birds and insects in your own balcony.",
          "Physical Fitness: Start trekking or long-distance walking to build stamina.",
          "Learn Python: Modern biology is data-driven; basic coding will set you apart.",
          "Read Up: Follow the Sanctuary Asia magazine or watch documentaries like Our Planet.",
          "Science Projects: Conduct experiments on animal behavior, ecology, or conservation.",
          "Online Courses: Take free courses on Coursera or edX about wildlife biology and ecology.",
          "Volunteering: Join local NGOs or nature clubs for conservation activities.",
          "Observation: Keep a nature journal. Document wildlife and ecosystem changes.",
          "Field Skills: Learn basic field techniques like bird watching, animal tracking, and habitat assessment."
        ]
      },
      {
        id: "personalities",
        title: "Famous Indian Personalities",
        icon: "User",
        description: "Inspiring figures in wildlife biology.",
        color: GREEN2,
        content: [
          "Sálim Ali: The 'Birdman of India.' He turned bird-watching into a serious science in India.",
          "Ullas Karanth: A legend in tiger conservation who pioneered the use of camera traps in India.",
          "Krutika Kupfer: A young biologist known for her work on marine life and turtle conservation.",
          "Valmik Thapar: One of India's most famous tiger experts and a prolific author.",
          "Vidya Athreya: Known as the 'Leopard Lady' for her pathbreaking work on how leopards live alongside humans in Mumbai and Pune.",
          "Dr. Balram Bhargava: Director General of ICMR, leading India's wildlife and environmental research initiatives."
        ]
      }
    ]
  }
};

