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
  availability: "Open to a 6-month PFE internship — Starting February 2027",
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
  { value: "6+", label: "Academic projects" },
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
    "A personalized book discovery system combining user preferences, NLP and content-based recommendation to generate relevant book suggestions.",
  points: [
    "Built an end-to-end recommendation pipeline covering data preprocessing, feature engineering, NLP representation and similarity-based ranking.",
    "Engineered book metadata into unified textual representations and applied TF-IDF to transform book characteristics into numerical vectors.",
    "Implemented cosine similarity to identify related books and generate ranked Top-5 recommendations based on content similarity.",
    "Designed an interactive questionnaire that translates user preferences into personalized recommendation criteria.",
    "Developed a Streamlit application integrating the complete recommendation workflow and reusable serialized model artifacts.",
  ],
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "NLP",
    "TF-IDF",
    "Streamlit",
    "Pickle",
  ],
},
{
  title: "MediaScope",
  category: "Data Engineering · Big Data",
  period: "2026",
  summary:
    "An end-to-end Data Engineering platform for collecting, processing, storing and analyzing news data using a Medallion Architecture.",
  points: [
    "Built an end-to-end ETL pipeline for collecting and processing news articles from multiple international sources through Python-based web scraping.",
    "Designed a Bronze/Silver/Gold Medallion Architecture using MinIO as a Data Lake for raw, cleaned and analytical data.",
    "Developed Apache Airflow workflows to orchestrate scraping, cleaning and transformation with scheduled execution and retry mechanisms.",
    "Containerized the data infrastructure with Docker Compose, integrating Airflow, MinIO, MySQL and phpMyAdmin into a reproducible environment.",
    "Developed an analytical dashboard for exploring news sources, topics, keywords, trends and historical distributions.",
  ],
  stack: [
    "Python",
    "Apache Airflow",
    "MinIO",
    "MySQL",
    "Docker",
    "Docker Compose",
    "Parquet",
    "Web Scraping",
  ],
},

 {
  title: "Predictive Maintenance System for Mining Equipment",
  category: "Industrial AI · Machine Learning · Data Engineering",
  period: "Jul 2026 — Present",
  summary:
    "An AI-based predictive maintenance system combining failure prediction, root-cause diagnosis, RUL estimation and real-time industrial monitoring.",
  points: [
    "Built an end-to-end predictive maintenance pipeline covering data preprocessing, feature engineering, failure prediction, root-cause analysis and Remaining Useful Life (RUL) estimation.",
    "Developed the machine failure prediction component with AutoGluon, selecting XGBoost as the final model and achieving 0.97 accuracy, 0.946 ROC-AUC and 0.504 PR-AUC.",
    "Designed a System of Systems approach integrating failure prediction, failure diagnosis and RUL estimation into a unified maintenance workflow.",
    "Implemented real-time AI communication using MQTT, Mosquitto and Paho MQTT to transmit machine measurements and prediction results.",
    "Built a Node-RED monitoring dashboard displaying machine status, failure probability, predicted failure type, RUL, root-cause confidence and maintenance recommendations.",
  ],
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "AutoGluon",
    "XGBoost",
    "Scikit-Learn",
    "MQTT",
    "Mosquitto",
    "Node-RED",
  ],
},



 {
  title: "Biblio Archivist",
  category: "Mobile Application · Backend",
  period: "Oct 2025 — Dec 2025",
  summary:
    "A database-driven mobile library application for discovering, organizing and managing digital book collections.",
  points: [
    "Developed a mobile library interface with React Native for browsing, searching and exploring detailed book information.",
    "Implemented a client-server architecture connecting the mobile application to backend services through REST API communication.",
    "Integrated MongoDB for structured storage and retrieval of book data and metadata.",
    "Designed a modular application structure with reusable components, navigation screens and dedicated service layers.",
    "Applied software engineering principles to separate presentation, application logic and data management layers.",
  ],
  stack: [
    "React Native",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "REST API",
    "npm",
  ],
},

{
  title: "KodexA Compiler",
  category: "Software Engineering · Cloud & DevOps",
  period: "2025",
  summary:
    "A secure multi-language online compiler platform combining automated language detection, REST APIs and Docker-isolated code execution.",
  points: [
    "Developed a web-based compiler supporting C++, Java and Python with direct code input and source-file upload.",
    "Implemented automatic programming-language detection using file extensions and language-specific syntax patterns.",
    "Designed a REST API architecture connecting the frontend, backend processing layer and code execution services.",
    "Containerized code compilation and execution with Docker to isolate untrusted user-submitted programs from the main application environment.",
    "Implemented structured compilation and runtime error handling to return execution results and actionable feedback to users.",
  ],
  stack: [
    "Python",
    "C++",
    "Java",
    "Docker",
    "REST API",
    "JavaScript",
    "HTML/CSS",
  ],
},

{
  title: "Ad_On — Classified Ads & Marketplace Platform",
  category: "Full-Stack Web · Django",
  period: "Dec 2024 — Feb 2025",
  summary:
    "A full-stack Django marketplace platform for publishing, discovering and managing classified listings with integrated user communication.",
  points: [
    "Developed a complete classified-advertising platform with user authentication, profiles and advertisement lifecycle management.",
    "Implemented CRUD workflows for listings with categories, pricing, locations, publication duration and multiple image uploads.",
    "Built keyword search, advanced filtering and result sorting to support efficient advertisement discovery.",
    "Integrated an internal messaging system with questions, seller communication and price negotiation around listings.",
    "Implemented administration and moderation features for user management, permissions and platform content supervision.",
  ],
  stack: [
    "Python",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "Django Templates",
    "SQL",
  ],
}
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
