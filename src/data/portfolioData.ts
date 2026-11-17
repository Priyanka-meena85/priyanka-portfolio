import { Project, Experience, SkillCategory, Education } from "@/types";

export interface JourneyNode {
  id: string;
  step: string;
  stageTitle: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: "Completed" | "Active Production" | "Next Horizon";
  badgeColor: "emerald" | "cyan" | "purple" | "amber";
  humanStory: string;
  engineeringChallenge: string;
  keyArchitectureDecision: string;
  humanAndBusinessImpact: string;
  metrics: string[];
  technologies: string[];
  keyTradeoff: {
    question: string;
    decision: string;
    rationale: string;
  };
}

export const PERSONAL_INFO = {
  name: "Priyanka Meena",
  firstName: "Priyanka",
  lastName: "Meena",
  title: "Full-Stack Web Developer",
  headline: "Full-Stack Web Developer | React · Next.js · TypeScript · Node.js · MongoDB",
  location: "Jaipur, Rajasthan, India",
  email: "Priyankameena4656@gmail.com",
  phone: "+91 85039 96575",
  github: "https://github.com/PriyankaMeena",
  linkedin: "https://linkedin.com/in/priyanka-meena",
  tagline:
    "Full-Stack Web Developer building scalable production Next.js/Node.js systems across 3 live B2B SaaS platforms — designing REST APIs, MongoDB schemas, and JWT-based authentication, shipping SSR/ISR frontends held to Core Web Vitals and Lighthouse 85+ standards.",
  philosophy:
    "I believe great software isn't just about clean syntax; it's about deep empathy for the human on the other side of the glass. Sub-2.5s LCP respects a user's time and battery; reliable failovers protect operational peace of mind.",
  bio: [
    "Full-Stack Web Developer building scalable production Next.js/Node.js systems across 3 live B2B SaaS platforms — designing REST APIs, MongoDB schemas, and JWT-based authentication, and shipping SSR/ISR frontends held to Core Web Vitals and Lighthouse 85+ standards.",
    "Comfortable owning features end-to-end (architecture, implementation, testing, post-launch performance tuning); works in Agile/Scrum sprints and collaborates cross-functionally with design and backend teams.",
    "Strong CS fundamentals in DSA, OOP, DBMS, OS, Networks, and System Design.",
  ],
  stats: [
    { label: "Production SaaS Platforms", value: "3", detail: "OxMaint AI, iFactory AI, FleetRabbit" },
    { label: "Lighthouse Performance", value: "85+", detail: "LCP < 2.5s, CLS < 0.1 passing CWV" },
    { label: "Pages Published Daily", value: "50+", detail: "Autonomous Node.js SEO pipeline" },
    { label: "Organic Traffic Growth", value: "40%", detail: "Via sitemap, JSON-LD schema & QA" },
  ],
  engineeringPrinciples: [
    {
      title: "Performance is User Empathy",
      subtitle: "The Human Side of Core Web Vitals",
      desc: "Speed is not a vanity metric. When a platform loads in under 1.2s with zero layout shift, it honors the worker accessing industrial dashboards on low-signal mobile connections in field environments.",
      quote: "Every millisecond saved is cognitive friction removed.",
      icon: "Gauge",
      tag: "User Centricity",
    },
    {
      title: "Architecture Over Quick Fixes",
      subtitle: "End-to-End Ownership & Tradeoffs",
      desc: "Knowing how pieces fit together is essential. From choosing Incremental Static Regeneration (ISR) over pure SSR, to compound MongoDB indexing, every layer must serve longevity and speed.",
      quote: "Clean, durable code is the best foundation for rapid shipping.",
      icon: "Layers",
      tag: "Systems Thinking",
    },
    {
      title: "Resilience Under Real-World Conditions",
      subtitle: "Fail-Soft & Graceful Degradation",
      desc: "From packet-loss cryptography at DRDO to high-volume water telemetry at GAIL, real-world networks fail. I build systems that assume networks will drop, caches will warm, and errors must self-heal cleanly.",
      quote: "Software must degrade gracefully without frustrating the user.",
      icon: "ShieldAlert",
      tag: "Fault Tolerance",
    },
    {
      title: "Developer Experience Compounds",
      subtitle: "Empowering the Engineering Team",
      desc: "Clear REST contracts, typed schemas, and automated test pipelines aren't bureaucratic overhead — they liberate teammates to innovate without fear of breaking production.",
      quote: "Great software elevates the humans who build and maintain it.",
      icon: "Users",
      tag: "Team Multiplier",
    },
  ],
  csFundamentals: [
    { name: "Data Structures & Algorithms", desc: "Arrays, Trees, Graphs, DP, Sorting, Searching, Complexity Analysis" },
    { name: "Object-Oriented Programming", desc: "Inheritance, Polymorphism, Abstraction, Encapsulation, Clean Code" },
    { name: "Database Management Systems", desc: "Normalization, ACID, Indexing, Mongoose Schemas, Aggregation Pipelines" },
    { name: "Operating Systems", desc: "Process Scheduling, Multithreading, Concurrency, Memory Management" },
    { name: "Computer Networks", desc: "TCP/IP, HTTP/HTTPS, WebSockets, Packet Loss Simulation, Protocol Analysis" },
    { name: "System Design", desc: "RESTful API Architecture, MVC, Microservices, Caching, Role-Based Access Control" },
  ],
  liveStatus: {
    available: true,
    text: "Available for Full-Stack Web Developer Roles",
    relocation: "Jaipur, Bengaluru, Delhi NCR, Remote",
  },
};

export const JOURNEY_FLOW: JourneyNode[] = [
  {
    id: "node-1-gail",
    step: "01",
    stageTitle: "The Operational Reality Check",
    role: "Summer Intern",
    company: "GAIL (India) Ltd.",
    location: "Jaipur, Rajasthan",
    period: "May 2025 – Jul 2025",
    status: "Completed",
    badgeColor: "emerald",
    humanStory:
      "At GAIL, water consumption wasn't an abstract database column — it represented essential industrial resources and environmental accountability. Operations engineers were drowning in manual spreadsheet audits, often catching costly pipe leakages or anomalous consumption days too late.",
    engineeringChallenge:
      "How do you automatically separate normal operating fluctuation from abnormal usage surges across disparate time-series sensor logs without false-positive alert fatigue?",
    keyArchitectureDecision:
      "Engineered a Python and SQL pipeline incorporating statistical anomaly detection algorithms with moving baseline windows, paired with an intuitive operational dashboard.",
    humanAndBusinessImpact:
      "Cut manual log-review time from hours down to near real-time, giving operations engineers immediate visibility into abnormal usage patterns and preventing resource wastage.",
    metrics: [
      "Near real-time anomaly detection",
      "Cut manual log-review effort substantially",
      "Clean SQL time-series schema",
    ],
    technologies: ["Python", "SQL", "Statistical Anomaly Detection", "Time-Series Telemetry", "Operations Dashboards"],
    keyTradeoff: {
      question: "Static Thresholds vs. Rolling Statistical Baselines?",
      decision: "Rolling Statistical Standard Deviation (Z-score)",
      rationale:
        "Static thresholds triggered false alarms during planned shift changes. A rolling window adapted dynamically to plant shifts while catching true leakages instantly.",
    },
  },
  {
    id: "node-2-drdo",
    step: "02",
    stageTitle: "The Cryptographic Forge & Networks",
    role: "Research & Development Intern",
    company: "DRDO (Defence Research & Development Organisation)",
    location: "New Delhi",
    period: "Jul 2025 – Sep 2025",
    status: "Completed",
    badgeColor: "purple",
    humanStory:
      "Mission-critical defense systems operate where bandwidth is severely constrained and signal degradation is constant. Here, engineering isn't about shiny UI components; it's about whether critical payload bytes arrive intact and securely over adversarial, unstable radio links.",
    engineeringChallenge:
      "Prototyping reliable server-client communications under simulated high-jitter packet loss while determining the optimal encryption scheme for constrained micro-processors.",
    keyArchitectureDecision:
      "Built a fault-tolerant socket communication protocol with adaptive retransmission and systematically benchmarked AES-256, RSA, and ECC (Elliptic Curve) across latency, CPU throughput, and key exchange overhead.",
    humanAndBusinessImpact:
      "Provided empirical benchmarking data that directly informed cipher selection for low-bandwidth embedded hardware, proving ECC achieved equal cryptographic strength with 80% smaller key sizes.",
    metrics: [
      "3 Cryptographic Schemes Benchmarked",
      "Fault-tolerant socket module under simulated packet loss",
      "Empirical latency & throughput profiling",
    ],
    technologies: ["Python", "Socket Programming", "AES-256", "RSA", "ECC Cryptography", "Packet Loss Simulation"],
    keyTradeoff: {
      question: "RSA vs. Elliptic Curve Cryptography (ECC) for Constrained Networks?",
      decision: "ECC (Elliptic Curve Cryptography)",
      rationale:
        "RSA-2048 keys caused transmission bloat and packet fragmentation over lossy links; ECC-256 delivered equivalent security with vastly smaller payload footprints.",
    },
  },
  {
    id: "node-3-jrs",
    step: "03",
    stageTitle: "Scale, Speed & Industrial SaaS Systems",
    role: "Full-Stack Software Engineering Intern",
    company: "JRS Innovation Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    period: "Feb 2026 – Present",
    status: "Active Production",
    badgeColor: "cyan",
    humanStory:
      "Managing production across 3 live B2B SaaS platforms (OxMaint AI, iFactory AI, FleetRabbit) serving plant managers, fleet operators, and industrial enterprises. Real businesses rely on these platforms for asset maintenance uptime, where page lag or API outages directly disrupt operations.",
    engineeringChallenge:
      "How to rapidly expand organic SEO reach by 50+ pages/day without degrading site speed, while simultaneously building robust Node/Express REST APIs integrated with Next.js SSR/ISR frontends that pass strict Core Web Vitals.",
    keyArchitectureDecision:
      "Architected an autonomous Node.js content engine with JSON-LD schema injection, automated sitemaps, and programmatic QA validation. Refactored Next.js frontend chunks to leverage Incremental Static Regeneration (ISR) and server-side optimizations, guaranteeing Lighthouse 85+ and sub-2.5s LCP.",
    humanAndBusinessImpact:
      "Contributed to a 40% surge in organic enterprise traffic, held sub-2.5s LCP across live production domains, and automated KPI reporting by unifying Google Search Console and Ahrefs into internal executive dashboards.",
    metrics: [
      "85+ Lighthouse score across all 3 SaaS platforms",
      "Passing Core Web Vitals (LCP < 2.5s, CLS < 0.1)",
      "50+ pages/day automated content pipeline",
      "40% organic traffic growth delivered",
    ],
    technologies: [
      "Next.js (SSR/ISR)",
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "JSON-LD Schema",
      "Search Console API",
      "Ahrefs API",
      "Core Web Vitals",
    ],
    keyTradeoff: {
      question: "Pure Client-Side SPA vs. Server-Side Rendering vs. Incremental Static Regeneration?",
      decision: "Next.js ISR (Incremental Static Regeneration)",
      rationale:
        "Pure SSR bogged down server CPU on heavy traffic spikes; client SPA killed SEO crawlability. ISR provided pre-rendered CDN speeds (LCP < 1.2s) with on-demand background cache invalidation.",
    },
  },
  {
    id: "node-4-future",
    step: "04",
    stageTitle: "The Next Horizon: Full-Stack Web Development",
    role: "Full-Stack Web Developer",
    company: "Next High-Growth Product Team",
    location: "Jaipur / Bengaluru / Delhi NCR / Remote",
    period: "Immediate Availability",
    status: "Next Horizon",
    badgeColor: "amber",
    humanStory:
      "Ready to bring end-to-end full-stack development experience, API design rigor, and front-to-back ownership to a product team shipping ambitious web applications.",
    engineeringChallenge:
      "Building seamless user experiences, engineering resilient REST APIs, and crafting intuitive, accessible interfaces that scale reliably.",
    keyArchitectureDecision:
      "Focusing on modern Next.js 14 App Router, robust TypeScript end-to-end typing, sub-second latency optimizations, and high-velocity team collaboration.",
    humanAndBusinessImpact:
      "Immediate ownership of web features, delivering measurable performance gains, and shipping maintainable full-stack systems.",
    metrics: [
      "Full product lifecycle ownership",
      "Core Web Vitals commitment",
      "Clean TypeScript & REST standards",
    ],
    technologies: ["Next.js 14+", "Node.js / Express", "MongoDB / PostgreSQL", "TypeScript", "Tailwind CSS"],
    keyTradeoff: {
      question: "Speed of Shipping vs. Architectural Rigor?",
      decision: "Pragmatic Architecture with Strong Guardrails",
      rationale:
        "Moving fast doesn't mean writing sloppy code. Strong TypeScript types, modular MVC patterns, and automated tests actually increase shipping velocity over time.",
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", hot: true },
      { name: "TypeScript", hot: true },
      { name: "Java" },
      { name: "Python", hot: true },
      { name: "C++" },
      { name: "SQL", hot: true },
    ],
  },
  {
    title: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React.js", hot: true },
      { name: "Next.js (SSR/ISR/SSG)", hot: true },
      { name: "Redux" },
      { name: "Tailwind CSS", hot: true },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", hot: true },
      { name: "Express.js", hot: true },
      { name: "REST APIs", hot: true },
      { name: "JWT Authentication", hot: true },
      { name: "OAuth" },
      { name: "MVC Architecture" },
    ],
  },
  {
    title: "Database",
    iconName: "Database",
    skills: [
      { name: "MongoDB (Mongoose)", hot: true },
      { name: "MongoDB Aggregation" },
      { name: "MongoDB Indexing", hot: true },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Tools & DevOps",
    iconName: "Wrench",
    skills: [
      { name: "Git", hot: true },
      { name: "GitHub", hot: true },
      { name: "Docker" },
      { name: "CI/CD Pipelines" },
      { name: "Agile / Scrum", hot: true },
    ],
  },
  {
    title: "Cloud & Hosting",
    iconName: "Cloud",
    skills: [
      { name: "Vercel", hot: true },
      { name: "Netlify" },
      { name: "Render", hot: true },
      { name: "MongoDB Atlas", hot: true },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1-jrs",
    role: "Full-Stack Software Engineering Intern",
    company: "JRS Innovation Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    period: "Feb 2026 – Present",
    type: "Internship",
    tagline: "Building scalable production Next.js/Node.js systems across 3 live B2B SaaS platforms",
    description: [
      "Built REST APIs on Node/Express integrated with Next.js SSR/ISR frontend across 3 production SaaS platforms (OxMaint AI, iFactory AI, FleetRabbit), raising Lighthouse Performance to 85+ and holding Core Web Vitals (LCP < 2.5s, CLS < 0.1).",
      "Built a Node.js content pipeline (auto sitemaps, JSON-LD injection, QA validation) publishing 50+ pages/day, contributing to 40% organic traffic growth.",
      "Built dashboards integrating Search Console + Ahrefs to automate KPI reporting.",
    ],
    technologies: ["Next.js", "Node.js", "Express.js", "TypeScript", "REST APIs", "Core Web Vitals", "Search Console API", "Ahrefs API"],
    metrics: ["85+ Lighthouse Score", "LCP < 2.5s, CLS < 0.1", "50+ Pages/Day Pipeline", "40% Organic Traffic Growth"],
    icon: "Rocket",
  },
  {
    id: "exp-2-drdo",
    role: "Research & Development Intern",
    company: "DRDO (Defence Research & Development Organisation)",
    location: "New Delhi",
    period: "Jul 2025 – Sep 2025",
    type: "Internship",
    tagline: "Cryptographic benchmarking & fault-tolerant server-client socket programming",
    description: [
      "Prototyped server-client communication under simulated packet loss.",
      "Benchmarked AES-256, RSA, ECC on latency/throughput/key management.",
      "Delivered empirical reports guiding encryption protocol choices in resource-constrained environments.",
    ],
    technologies: ["Python", "Socket Programming", "AES-256", "RSA", "ECC", "Network Simulation"],
    metrics: ["3 Encryption Algorithms Benchmarked", "Fault-tolerant Protocol Prototype", "Low-latency Packet Recovery"],
    icon: "Shield",
  },
  {
    id: "exp-3-gail",
    role: "Summer Intern",
    company: "GAIL (India) Ltd.",
    location: "Jaipur, Rajasthan",
    period: "May 2025 – Jul 2025",
    type: "Internship",
    tagline: "Water-consumption monitoring system with statistical anomaly detection",
    description: [
      "Built a Python/SQL water-consumption monitoring system with anomaly detection.",
      "Implemented statistical thresholding and automated notifications to catch abnormal spikes.",
      "Collaborated with on-site operations engineers to validate real-world sensor telemetry against ground truth.",
    ],
    technologies: ["Python", "SQL", "Data Analysis", "Anomaly Detection", "Telemetry"],
    metrics: ["Real-time Spike Detection", "Automated Operational Alerts", "Historical Trend Modeling"],
    icon: "Activity",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "kaammitra",
    title: "KaamMitra",
    subtitle: "Bharat-first Service Marketplace Platform",
    description:
      "A full-stack service marketplace connecting customers with local service providers — role-based workflows, OTP authentication, and state-machine booking transitions.",
    longDescription:
      "Developed a full-stack service marketplace connecting customers with local service providers across India. Features role-based workflows, service discovery, booking, and profile management with a React frontend and Node.js/Express backend. Implemented production-focused features including OTP-based authentication and state-machine-based booking flows (similar to ride-hailing driver apps), offline handling, CORS security, and IDOR protection. Tested and debugged APIs using Postman and tracked development in Jira.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "OTP Auth", "REST APIs", "State Machines", "Postman", "Jira"],
    category: "Full-Stack",
    featured: true,
    liveUrl: "https://kaammitra-service.vercel.app",
    githubUrl: "https://github.com/PriyankaMeena/KaamMitra",
    metrics: ["OTP Auth & IDOR Security", "State-Machine Booking Transitions", "Postman & Jira QA Workflows"],
    architecture: {
      frontend: "React.js with booking state-machine UI & offline network handling",
      backend: "Node.js / Express REST API with state-machine lifecycle controller",
      database: "MongoDB with Mongoose schemas for customer & provider workflows",
      auth: "JWT-based authentication + OTP verification with input sanitization",
      deployment: "Vercel (Frontend) + Render (REST API Backend)",
    },
    highlights: [
      "State-machine booking flows managing real-time lifecycle transitions (request, accept, OTP verify, complete)",
      "Production security: OTP authentication, strict CORS, input validation, and IDOR protection",
      "Comprehensive API testing via Postman (HTTP methods, payloads, auth, status codes) tracked via Jira sprints",
    ],
    badge: "Featured Marketplace",
  },
  {
    id: "hars",
    title: "HARS (Hazard Analysis and Ranking System)",
    subtitle: "Industrial Safety & Risk Engine",
    description:
      "A safety management platform with automated risk-calculation engine, JWT authentication, and real-time KPI dashboard with PDF/Excel export.",
    longDescription:
      "Hazard Analysis and Ranking System (HARS) is an enterprise safety application built on Node.js, Express, and MongoDB. It digitizes hazard logging with an automated risk-calculation algorithm that prioritizes incident severity. Includes interactive real-time KPI dashboards and automated multi-format PDF/Excel reporting for compliance audits.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "PDF/Excel Export", "Risk Engine", "EJS/React"],
    category: "Full-Stack",
    featured: true,
    liveUrl: "https://hars-safety-demo.vercel.app",
    githubUrl: "https://github.com/PriyankaMeena/HARS",
    metrics: ["Automated Risk Formula Engine", "Instant PDF/Excel Audit Export", "Zero Audit Logging Data Loss"],
    architecture: {
      frontend: "Responsive Dashboard with interactive charts & export utilities",
      backend: "Node.js / Express API with modular risk-calculation service",
      database: "MongoDB with Mongoose schemas for audit trails",
      auth: "JWT authentication with session refresh tokens",
      deployment: "Vercel + MongoDB Atlas",
    },
    highlights: [
      "Automated mathematical risk-ranking matrix calculating severity x probability",
      "One-click server-side PDF and Excel audit report generation",
      "Real-time KPI charts monitoring incident mitigation velocity",
    ],
    badge: "Live Demo",
  },
  {
    id: "ai-content-automation",
    title: "AI Content Automation Engine",
    subtitle: "Autonomous Publishing Pipeline",
    description:
      "Chrome Extension + Node.js pipeline + DeepSeek API generating 3000+ word structured pages via prompt-engineered layouts.",
    longDescription:
      "Engineered an autonomous content creation pipeline combining a custom Chrome Extension for web capture, a robust Node.js backend pipeline, and the DeepSeek API. Generates 3000+ word structured, SEO-optimized articles with automated JSON-LD schema injection and automated quality assurance validation.",
    tags: ["Node.js", "Chrome Extension", "DeepSeek API", "Prompt Engineering", "JSON-LD", "Automation"],
    category: "AI & Automation",
    featured: true,
    githubUrl: "https://github.com/PriyankaMeena/ai-content-engine",
    metrics: ["3000+ Word Structured Output", "Automated JSON-LD Schema", "10x Faster Content Turnaround"],
    architecture: {
      frontend: "Chrome Extension (Manifest V3) for page scraping & prompt triggers",
      backend: "Node.js queue pipeline managing streaming AI responses",
      database: "MongoDB for storing page revisions and generated metadata",
      auth: "API Key validation & rate-limiting middleware",
      deployment: "Node.js background worker",
    },
    highlights: [
      "Prompt-engineered layout templates enforcing H1-H4 semantic hierarchy",
      "Programmatic JSON-LD rich snippet generation for Google search indexing",
      "Automated markdown validation preventing broken links and malformed code blocks",
    ],
    badge: "AI Powered",
  },
  {
    id: "computer-anudeshak",
    title: "Computer Anudeshak Exam Prep",
    subtitle: "Diagnostic Analytics & Learning Platform",
    description:
      "Flask/Python/SQLite learning platform with diagnostic analytics engine and dual-language question bank.",
    longDescription:
      "Built a specialized exam preparation web platform tailored for the Computer Anudeshak examination. Developed with Flask, Python, and SQLite, featuring a diagnostic analytics engine that pinpoints a student's weak syllabus areas, paired with a dual-language (Hindi/English) question bank.",
    tags: ["Flask", "Python", "SQLite", "Diagnostic Analytics", "Dual-Language", "Bootstrap/Tailwind"],
    category: "Backend / Systems",
    featured: false,
    liveUrl: "https://computer-anudeshak-prep.onrender.com",
    githubUrl: "https://github.com/PriyankaMeena/computer-anudeshak-prep",
    metrics: ["Dual-Language Hindi/English", "Real-Time Diagnostic Scoring", "SQLite Optimized Query Cache"],
    architecture: {
      frontend: "Dual-language interface with instant score breakdown",
      backend: "Flask (Python) with RESTful question endpoints",
      database: "SQLite with indexed syllabus category tables",
      auth: "Session-based student auth with progress persistence",
      deployment: "Render Cloud Platform",
    },
    highlights: [
      "Topic-by-topic diagnostic analytics showing accuracy percentages",
      "Dual-language question toggle without reloading test sessions",
      "Lightweight SQLite schema designed for rapid local query times",
    ],
    badge: "Live Demo",
  },
];

export const EDUCATION: Education = {
  degree: "B.Tech in Computer Science & Engineering",
  field: "Computer Science & Engineering",
  institution: "Government Engineering College, Ajmer (BTU)",
  location: "Rajasthan, India",
  period: "2022 – 2026",
  highlights: [
    "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering.",
    "Active contributor to college technical events, coding hackathons, and web development workshops.",
    "Maintained consistent focus on full-stack development, modern web standards, and distributed system fundamentals.",
  ],
};
