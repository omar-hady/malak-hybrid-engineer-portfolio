export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'telecom' | 'ai' | 'fusion';
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'telecom' | 'ai' | 'fusion';
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  period?: string;
  githubUrl?: string;
  dataset?: string;
  model?: string;
  output?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  relevance: 'telecom' | 'ai' | 'both';
  skills: string[];
  year: string;
}

export interface Skill {
  name: string;
  category: 'telecom' | 'ai' | 'tools' | 'soft';
  level: number;
}

export const timeline: TimelineItem[] = [
  {
    id: '1',
    title: 'Data Science Intern',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Jun 2025 – Dec 2025',
    description: 'Applied machine learning models to real-world datasets, building predictive analytics solutions and data visualization dashboards.',
    type: 'ai',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Visualization'],
  },
  {
    id: '2',
    title: 'IP Networks Trainee',
    organization: 'Nokia',
    period: 'Aug 2025 – Sep 2025',
    description: 'Configured and optimized IP routing protocols (OSPF, BGP, RIP), analyzed network performance, and implemented network security solutions.',
    type: 'telecom',
    skills: ['IP Networking', 'OSPF', 'BGP', 'Network Security'],
  },
  {
    id: '3',
    title: 'Telecommunication Systems Trainee',
    organization: 'WE (Telecom Egypt)',
    period: 'Apr 2025 – May 2025',
    description: 'Deployed FTTH infrastructure, performed fiber optic splicing, and maintained GSM & mobile network systems. Gained hands-on experience with signal analysis and network optimization.',
    type: 'telecom',
    skills: ['Fiber Optics', 'FTTH', 'GSM', 'Signal Analysis', 'MATLAB'],
  },
  {
    id: '4',
    title: 'Wireless and Mobile Communication Networks',
    organization: 'NTI',
    period: 'Jan 20, 2026 – Present',
    description: 'Training in wireless and mobile communication network technologies.',
    type: 'telecom',
    skills: ['Wireless Networks', 'Mobile Communications'],
  },
];

export const telecomProjects: Project[] = [
  {
    id: 't1',
    title: 'Fiber Optic Splicing & FTTH Deployment',
    category: 'telecom',
    problem: 'Deploying high-speed internet infrastructure to residential areas requires precise fiber optic connections and minimal signal loss.',
    solution: 'Performed fusion splicing of single-mode and multi-mode fibers, implemented FTTH architecture, and optimized signal transmission paths.',
    impact: 'Enabled high-speed broadband connectivity for thousands of households with minimal signal degradation.',
    technologies: ['Fiber Optics', 'FTTH', 'Fusion Splicing', 'OTDR'],
  },
  {
    id: 't2',
    title: 'IP Network Configuration (OSPF, BGP, RIP)',
    category: 'telecom',
    problem: 'Large-scale networks require efficient routing protocols to ensure optimal data packet delivery and network resilience.',
    solution: 'Configured dynamic routing protocols including OSPF for internal routing, BGP for inter-domain routing, and RIP for smaller networks. Implemented route optimization and failover mechanisms.',
    impact: 'Improved network efficiency and reduced latency by 30% through optimized routing paths.',
    technologies: ['OSPF', 'BGP', 'RIP', 'Cisco IOS', 'Network Simulation'],
  },
  {
    id: 't3',
    title: 'GSM & Mobile Network Infrastructure',
    category: 'telecom',
    problem: 'Mobile networks require robust infrastructure to handle increasing traffic loads and ensure seamless connectivity.',
    solution: 'Maintained and optimized GSM base stations, analyzed signal strength and coverage patterns, and implemented network capacity planning.',
    impact: 'Enhanced mobile network reliability and coverage area by 25%.',
    technologies: ['GSM', 'Base Stations', 'Signal Analysis', 'Network Planning'],
  },
  {
    id: 't4',
    title: 'Signal Analysis & MATLAB Simulations',
    category: 'telecom',
    problem: 'Understanding signal behavior and predicting network performance requires advanced mathematical modeling and simulation.',
    solution: 'Developed MATLAB simulations for signal propagation, interference analysis, and network performance modeling. Created visualization tools for signal quality metrics.',
    impact: 'Enabled predictive analysis of network performance, reducing troubleshooting time by 40%.',
    technologies: ['MATLAB', 'Signal Processing', 'Simulation', 'Data Visualization'],
  },
];

export const aiProjects: Project[] = [
  {
    id: 'a1',
    title: 'Fraud Detection',
    category: 'ai',
    problem: 'Credit card fraud detection requires handling imbalanced datasets and achieving high accuracy to minimize false positives.',
    solution: 'Built a Machine Learning model using Logistic Regression for credit card fraud detection. Handled imbalanced data and increased iterations to 3000 to stabilize convergence. Tested on 28 randomized transactions.',
    impact: 'Achieved ROC-AUC Score of 0.95, demonstrating high accuracy in fraud detection.',
    period: 'Jan 2026 – Feb 2026',
    technologies: ['Python', 'Machine Learning'],
    githubUrl: 'https://github.com/malak-hady/Fraud-Detection-Project',
  },
  {
    id: 'a2',
    title: 'Retail Analytics Copilot',
    category: 'ai',
    problem: 'Retail analytics requires intelligent querying of databases with natural language and providing auditable, cited answers.',
    solution: 'Built a local AI agent for retail analytics using RAG over local documents. Generates SQL queries on Northwind SQLite database. Provides typed, auditable answers with citations. Built with DSPy and LangGraph.',
    impact: 'Enabled natural language querying of retail data with reliable, traceable results.',
    period: 'Sep 2025 – Oct 2025',
    technologies: ['Python', 'DSPy', 'LangGraph', 'SQLite'],
    githubUrl: 'https://github.com/malak-hady/retail_copilot',
  },
];

// Fusion projects removed - strict separation between AI and Telecom

export const certifications: Certification[] = [
  {
    id: 'c1',
    name: 'Working in a Digital World: Professional Skills',
    issuer: 'IBM',
    relevance: 'both',
    skills: [
      'Mentorship & Peer Coaching',
      'Analytical Reasoning',
      'Emotional Intelligence',
      'Conflict Resolution',
      'Innovation Management',
      'Decision-Making Under Pressure',
      'Design Thinking',
      'Business Acumen',
      'Cross-cultural Communication',
      'Remote Work Productivity',
      'Team Collaboration',
      'Time Management',
      'Strategic Thinking',
      'Lateral Thinking',
      'Scenario Planning',
      'Interpersonal & Professional Communication',
      'Customer-Centric Thinking',
      'Problem Solving & Solutioning',
      'Leadership',
      'Presentation Design & Delivery',
      'Growth Mindset',
      'Systems Thinking',
      'Agile Methodology',
      'Adaptability',
      'Creative & Critical Thinking',
    ],
    year: 'Mar 2025',
  },
  {
    id: 'c2',
    name: 'McKinsey.org Forward Program',
    issuer: 'McKinsey & Company',
    relevance: 'both',
    skills: [
      'Mentorship & Peer Coaching',
      'Analytical Reasoning',
      'Emotional Intelligence',
      'Conflict Resolution',
      'Innovation Management',
      'Decision-Making Under Pressure',
      'Design Thinking',
      'Business Acumen',
      'Cross-cultural Communication',
      'Remote Work Productivity',
      'Team Collaboration',
      'Time Management',
      'Strategic Thinking',
      'Lateral Thinking',
      'Scenario Planning',
      'Interpersonal & Professional Communication',
      'Customer-Centric Thinking',
      'Problem Solving & Solutioning',
      'Leadership',
      'Presentation Design & Delivery',
      'Growth Mindset',
      'Systems Thinking',
      'Agile Methodology',
      'Adaptability',
      'Creative & Critical Thinking',
    ],
    year: 'Dec 2024',
  },
  {
    id: 'c3',
    name: 'HCIA-AI',
    issuer: 'Huawei ICT Academy-Egypt',
    relevance: 'ai',
    skills: [
      'Artificial Intelligence Fundamentals',
      'Machine Learning Concepts',
      'Data Preprocessing & Feature Engineering',
      'Python for AI & ML',
      'AI Model Development & Evaluation',
      'AI Ethics & Responsible AI',
      'Cloud AI & Edge Computing',
    ],
    year: 'Sep 2024',
  },
];

export const skills: Skill[] = [
  // Telecom Skills
  { name: 'Fiber Optics', category: 'telecom', level: 90 },
  { name: 'IP Networking', category: 'telecom', level: 85 },
  { name: 'OSPF/BGP/RIP', category: 'telecom', level: 88 },
  { name: 'GSM/LTE', category: 'telecom', level: 80 },
  { name: 'Signal Processing', category: 'telecom', level: 85 },
  { name: 'MATLAB', category: 'telecom', level: 85 },
  { name: 'Network Security', category: 'telecom', level: 82 },
  
  // AI & Data Skills
  { name: 'Machine Learning', category: 'ai', level: 88 },
  { name: 'Deep Learning', category: 'ai', level: 85 },
  { name: 'NLP', category: 'ai', level: 83 },
  { name: 'Python', category: 'ai', level: 90 },
  { name: 'Data Analysis', category: 'ai', level: 88 },
  { name: 'Predictive Modeling', category: 'ai', level: 85 },
  { name: 'Data Visualization', category: 'ai', level: 87 },
  
  // Tools & Platforms
  { name: 'TensorFlow', category: 'tools', level: 80 },
  { name: 'Scikit-learn', category: 'tools', level: 88 },
  { name: 'Pandas/NumPy', category: 'tools', level: 90 },
  { name: 'Cisco IOS', category: 'tools', level: 85 },
  { name: 'Git', category: 'tools', level: 85 },
  { name: 'Docker', category: 'tools', level: 75 },
  { name: 'Linux', category: 'tools', level: 85 },
  
  // Soft Skills
  { name: 'Leadership', category: 'soft', level: 90 },
  { name: 'Problem Solving', category: 'soft', level: 92 },
  { name: 'Communication', category: 'soft', level: 88 },
  { name: 'Collaboration', category: 'soft', level: 90 },
  { name: 'Project Management', category: 'soft', level: 85 },
];

export const leadership = {
  ieee: {
    role: 'Active Member',
    description: 'Contributing to technical communities, participating in conferences, and staying updated with latest industry trends.',
  },
  volunteering: [
    {
      title: 'Technical Mentor',
      organization: 'Student Organizations',
      description: 'Mentoring students in telecommunications and data science, sharing knowledge and industry insights.',
    },
    {
      title: 'Community Contributor',
      organization: 'Tech Communities',
      description: 'Active participation in tech meetups, workshops, and knowledge-sharing sessions.',
    },
  ],
  recommendations: [
    {
      quote: 'Malak demonstrates exceptional ability to bridge the gap between telecommunications engineering and data science, bringing innovative solutions to complex problems.',
      author: 'Industry Professional',
    },
    {
      quote: 'Her technical expertise combined with strong leadership skills makes her an invaluable team member and future industry leader.',
      author: 'Academic Advisor',
    },
  ],
};

