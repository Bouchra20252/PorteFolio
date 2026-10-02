// =====================================================================
//  Single source of truth for the portfolio content.
//  Edit this file to update the site — no admin panel, no database.
// =====================================================================

export const profile = {
  name: "Simali Bouchra",
  firstName: "Bouchra",
  initials: "SB",
  role: "Future Computer Science & Networks Engineer",
  specialization: "AI & Data Specialization",
  location: "Casablanca, Morocco",
  email: "simalibouchra20@gmail.com",
  phone: "+212 674 437 322",
  phoneHref: "+212674437322",
  cvPath: "/cv-simali-bouchra.pdf",
  availability: "Open to a 6-month PFE internship — February 2027",
  // Leave a link empty ("") to hide it from the site.
  links: {
    github: "",
    linkedin: "",
  },
  headline:
    "I build data pipelines, machine learning models and intelligent applications — from raw data to deployed product.",
  about: [
    "AI & Data Engineering student pursuing an Engineering degree in Computer Science and Networks at EMSI Casablanca, with a specialization in AI & Data. Expected to graduate in 2027.",
    "My work sits where data engineering meets applied machine learning: predictive maintenance on industrial systems, NLP-based recommendation engines, and full-stack web and mobile applications that put models in the hands of users.",
    "I am currently looking for a 6-month final-year project internship (PFE) starting in February 2027.",
  ],
};

export const stats = [
  { value: "2027", label: "Expected graduation" },
  { value: "1", label: "Industrial internship" },
  { value: "4+", label: "Academic projects" },
  { value: "6", label: "Certifications" },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    title: "Predictive Maintenance System — Internship",
    company: "JESA",
    period: "Jul 2026 — Aug 2026",
    location: "Morocco",
    points: [
      "Introduced a data fusion strategy to contextualize data across digital maintenance systems.",
      "Developed a System of Systems approach to unify interconnected maintenance systems.",
      "Built a predictive maintenance pipeline for failure prediction, root-cause diagnosis and Remaining Useful Life (RUL) estimation.",
      "Integrated Neo4j, MQTT and Node-RED for contextualization and real-time monitoring.",
    ],
    stack: ["Python", "Machine Learning", "Neo4j", "MQTT", "Node-RED", "Data Fusion"],
  },
];

export type Project = {
  title: string;
  category: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Book Recommendation System",
    category: "NLP · Machine Learning",
    period: "Mar 2026 — May 2026",
    summary:
      "A content-based NLP recommendation engine that generates personalized book suggestions.",
    points: [
      "Data engineering on ~10k books: cleaning, missing-value handling, feature engineering (title, author, genres) and reliability filtering (>1,000 ratings).",
      "Modeling and ranking with TF-IDF, cosine similarity and rating-based re-ranking.",
      "Model serialization with Pickle for fast and scalable execution.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Pickle"],
  },
  {
    title: "Biblio Archivist",
    category: "Mobile Application",
    period: "Oct 2025 — Dec 2025",
    summary:
      "A mobile application dedicated to the management and reading of digital books.",
    points: [
      "Smooth navigation, interactive library and detailed book browsing.",
      "Enhanced reading module with visual customization and profile-based reading progress tracking.",
      "Dynamic bookmarks, favorites management and quick access to saved reading positions.",
    ],
    stack: ["React Native", "MongoDB", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "AI Compiler",
    category: "AI · Developer Tools",
    period: "Apr 2025 — May 2025",
    summary:
      "A multi-language online compiler with AI-powered error assistance.",
    points: [
      "Runs Python, Java and C++ via file upload or direct input, with automatic language detection and instant results.",
      "Clear error messages, simplified explanations and intelligent correction suggestions.",
      "TF-IDF and lexical processing on error history to improve recommendations over time.",
    ],
    stack: ["Python", "Java", "C++", "TF-IDF", "NLP"],
  },
  {
    title: "Ad_On — Classified Ads Website",
    category: "Full-Stack Web",
    period: "Dec 2024 — Feb 2025",
    summary:
      "A full-stack platform for real-time publishing, browsing and management of classified listings.",
    points: [
      "User profiles and integrated messaging between buyers and sellers.",
      "Advanced search and filtering by category, keywords, price, location and product type.",
      "Listing moderation, user management and protection of sensitive data.",
    ],
    stack: ["Django", "Python", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python", "Java", "C", "C++", "C#", "SQL", "Bash"] },
  {
    group: "AI & Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "TF-IDF", "NLP"],
  },
  {
    group: "Data Engineering",
    items: ["ETL", "Dimensional Modeling", "SSIS / SSRS", "Hadoop"],
  },
  {
    group: "Databases",
    items: ["MySQL", "MongoDB", "Oracle 19c (PL/SQL)", "SQL Server (T-SQL)", "Neo4j"],
  },
  {
    group: "Development & Tools",
    items: ["Git", "GitHub", "Docker", "Node.js", "React", "React Native", "Django"],
  },
  { group: "Web", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { group: "Methodologies", items: ["UML", "MERISE 2", "Agile / Scrum"] },
];

export const softSkills = [
  "Teamwork",
  "Adaptability",
  "Problem-Solving",
  "Time Management & Organization",
  "Continuous Learning",
];

export const education = [
  {
    degree: "Engineering Degree in Computer Science and Networks — AI / Data option",
    school: "Moroccan School of Engineering Sciences (EMSI)",
    place: "Casablanca",
    period: "2024 — 2027",
  },
  {
    degree: "Preparatory Years — Engineering Studies",
    school: "Moroccan School of Engineering Sciences (EMSI)",
    place: "Casablanca",
    period: "2022 — 2024",
  },
  {
    degree: "Baccalaureate in Experimental Sciences — Physics & Chemistry (Mention Bien)",
    school: "Groupe Scolaire Ambassadeur",
    place: "Casablanca",
    period: "2021 — 2022",
  },
];

export const certifications = [
  { name: "Introduction to Object-Oriented Programming in C++", issuer: "" },
  { name: "Interactivity with JavaScript", issuer: "Coursera" },
  { name: "Successful Negotiation: Essential Strategies and Skills", issuer: "" },
  { name: "Using Python to Access Web Data", issuer: "" },
  { name: "React Native", issuer: "Meta" },
  { name: "Software Engineering: Software Design and Project Management", issuer: "" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const interests = ["Martial Arts", "Reading", "Gaming"];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
