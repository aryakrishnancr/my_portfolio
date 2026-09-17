import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Arya Krishnan C R",
  title: "Hi all, I'm Arya",
  description:
    "Data Engineer at Accenture (AMEX client) specializing in building reliable, scalable data platforms and pipelines. I work across Python, SQL, Spark, Airflow, GCP, and modern data engineering tooling to deliver high-quality, production-grade data solutions that power analytics and business decisions. Based in Kerala, India.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "aryakrishnancr",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "",
  linkedin: "https://www.linkedin.com/in/aryakrishnan-c-r",
  github: "https://github.com/aryakrishnancr",
  instagram: "",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "DATA ENGINEER BUILDING SCALABLE, RELIABLE DATA PLATFORMS AND PIPELINES",
  data: [
    {
      title: "Data Engineering",
      lottieAnimationFile: "/lottie/data.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Designing and orchestrating batch/streaming data pipelines (Airflow, Apache Spark, PySpark)"),
        emoji("⚡ Building robust ETL/ELT workflows on GCP (Cloud Storage, BigQuery, Dataflow/Dataproc, Cloud Composer)"),
        emoji("⚡ Implementing CI/CD pipelines for automated deployment of DAG files and Python scripts with testing, data quality validation, and schema checks")
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "SQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Apache Spark",
          iconifyTag: "logos:apache-spark",
        },
        {
          skillName: "Apache Airflow",
          iconifyTag: "logos:airflow",
        },
        {
          skillName: "Google Pub-Sub",
          iconifyTag: "simple-icons:googlepubsub",
        },
        {
          skillName: "Google Cloud Storage",
          iconifyTag: "simple-icons:googlecloudstorage",
        },
        {
          skillName: "Google Cloud",
          iconifyTag: "logos:google-cloud",
        },
        {
          skillName: "BigQuery",
          iconifyTag: "simple-icons:googlebigquery",
        },
        {
          skillName: "Dataproc",
          iconifyTag: "simple-icons:googledataproc",
        },
        {
          skillName: "Google Cloud Composer",
          iconifyTag: "simple-icons:googlecloudcomposer",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Data Engineering", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Cloud & Orchestration",
    progressPercentage: "85",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Amal Jyothi College of Engineering",
    subHeader: "BTech in Computer Science and Engineering",
    duration: "2019 - 2023",
    desc: "I completed my Bachelor of Technology in Computer Science and Engineering at Amal Jyothi College of Engineering and Technology. During my time there, I gained a strong foundation in computer science, programming, and software development. I also had the opportunity to work on several projects that helped me develop my skills and knowledge.",
    grade: "8.0 CGPA",
    descBullets: [
      "Completed Bachelor of Technology in Computer Science and Engineering",
      "Gained a strong foundation in computer science, programming, and software development",
      "Worked on several projects that helped me develop my skills and knowledge",
    ], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Data Engineer",
    company: "Accenture (AMEX client)",
    companyLogo: "/img/icons/common/Accenture.png",
    date: "2023 - Present",
    desc: "Led data validation and migration automation for AMEX’s move to GCP, delivering secure, scalable DVT tooling that accelerated time-to-market and improved data quality across environments.",
    descBullets: [
      "Built SwiftDVT, Hash DVT, BQ-to-BQ DVT, Lumi First, and BQ Clustering & Partitioning Analyzer",
      "Established cross-environment DVTs as a company-wide capability and client-applied patent",
      "Reduced code conversion effort by >80% and testing time by >50%",
      "Improved data accuracy and reduced manual effort by >90% via the Data Validation Framework",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Swift DVT",
    desc: "Event-driven data validation tool to verify parity between Cornerstone (Hive) and Lumi (BigQuery) with summary stats, row/column comparisons, scheduling, email alerts, and multi-environment support.",
    link: "",
  },
  {
    name: "Hash DVT",
    desc: "High-speed parity checks using hashing to validate data integrity across on-prem and GCP with minimal overhead.",
    link: "",
  },
  {
    name: "BQ-to-BQ DVT",
    desc: "BigQuery-native validator for cross-dataset/table comparisons enabling robust post-migration and intra-cloud validations.",
    link: "",
  },
  {
    name: "Lumi First",
    desc: "Data readiness and acceleration toolkit to enable faster BigQuery adoption for analytics teams.",
    link: "",
  },
  {
    name: "BQ Clustering & Partitioning Analyzer",
    desc: "Analyzer recommending optimal partitioning and clustering strategies to improve BigQuery performance and cost.",
    link: "",
  },
  {
    name: "Lumi Ascend",
    desc: "Automated validation tool that periodically polls UDM Audit Table to identify new ingestions and compares data between direct source and hydration tables. Generates ingestion summary and detailed discrepancy reports with configurable auto-validation thresholds, plus manual trigger capability for re-runs and backfills.",
    link: "",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Pulkit Aggarwal",
    role: "Senior Engineer | LUMI Data Transformation (American Express)",
    feedback:
      "Recognizing Arya & Niranjan's outstanding contributions to BQ-to-BQ DVT. Despite being new to the corporate world, they quickly understood a complex codebase and delivered 30+ features including Fail Fast with Pre-Check Validation, JSON comparison, email notifications, and the 1024k query length fix. Their learning agility, ownership, and high-quality delivery with minimal supervision set a great example and made a significant impact on the project's success.",
  },
  {
    name: "Accenture Technology",
    role: "Accenture Celebrates Excellence • FY’24 – Q3",
    feedback:
      "Congratulations to Aryakrishnan C R on winning the Bright Beginners Award. Recognized for impactful contributions and being an incredible value addition to the organization early in career. Wishing continued success ahead.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Arya Krishnan C R",
  description: greetings.description,
  author: "Arya Krishnan C R",
  image: "",
  url: "",
  keywords: [
    "Arya Krishnan C R",
    "Arya Portfolio",
    "Data Engineer",
    "Accenture",
    "AMEX",
    "Portfolio",
  ],
};

// Structured content for the redesigned data engineering portfolio.
export const portfolioData = {
  about: {
    description:
      "Data Engineer building reliable GCP pipelines, migration systems, validation frameworks, and LLM-powered data products.",
    title: "About Me",
  },
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    grade: "8.0 CGPA",
    institution: "Amal Jyothi College of Engineering",
    location: "India",
    period: "June 2019 - April 2023",
  },
  experience: [
    {
      company: "Accenture (Amex client)",
      companyPeriod: "Feb 2024 - Present · Bangalore",
      roles: [
        {
          period: "Nov 2025 - Present",
          position: "Data Engineering Analyst · Full Time",
          responsibilities: [
            "Architected an LLM-orchestrated PII detection service with FastAPI, Gemini/GPT, sqlglot lineage parsing, and adaptive chunking for flows with 100+ SQL blocks.",
            "Built schema-constrained LLM invocations with structured-output parsing, retry/backoff resilience, SQL sanitization, and lineage-based reasoning for every classification decision.",
            "Led native GCP migration of System of Record tables from legacy Cornerstone replication to Lumi Direct ingestion pipelines.",
            "Engineered multi-environment E1/E2/E3 deployment with Airflow, MDM APIs, WireSafe metadata encryption, and Kafka-to-Pub/Sub streaming.",
            "Developed a two-phase BigQuery validation framework using checksums, key joins, hashing, and aggregations, cutting manual effort 70% and runtime 50%.",
            "Automated hourly validation reports in BigQuery/GCS, reducing manual reporting effort by 60%.",
          ],
        },
        {
          period: "Feb 2024 - Nov 2025",
          position: "Data Engineering Associate",
          responsibilities: [
            "Developed BigQuery-to-BigQuery and on-prem-to-GCP validation checks across seven-day ingestion windows for schema drift, row counts, PII/decryption accuracy, and timestamp precision.",
            "Automated BigQuery and Hive query generation with Pub/Sub integration, increasing validation efficiency by 90% and saving 30 hours per month.",
            "Built a cross-environment table comparison application with Airflow and GCP services, improving ingestion efficiency by 80%.",
            "Established retry mechanisms and operational SOPs using Refresh and Stargate APIs across cutover and hypercare phases.",
          ],
        },
      ],
    },
  ],
  methodology: [
    "Cloud Data Engineering",
    "Pipeline Automation",
    "Agentic AI / LLM Engineering",
    "SQL Lineage Parsing",
    "Data Validation Frameworks",
    "Database Migration Lifecycle",
    "Zero-Downtime Cutover & Hypercare",
  ],
  highlights: [
    "Amex Bright Beginner Award",
    "Accenture (Amex) Star Award",
    "Delivery Excellence Award",
    "Google Cloud Digital Leader · 2024–2027",
  ],
  personalInfo: {
    email: "aryakrishnancr@gmail.com",
    experience: "3 years",
    github: "https://github.com/aryakrishnancr",
    linkedin: "https://www.linkedin.com/in/aryakrishnan-c-r/",
    location: "India",
    name: "Aryakrishnan C R",
    phone: "+91 6238161638",
    title: "Data Engineer · Cloud Data Engineering & Pipeline Automation",
  },
  projects: [
    {
      name: "LLM PII Lineage Engine",
      type: "Agentic data quality",
      description:
        "Traces column-level lineage through translated BigQuery SQL flows and auto-classifies PII roles across output tables with explainable reasoning.",
      stack: "FastAPI · Gemini/GPT · sqlglot · BigQuery",
    },
    {
      name: "Ascend Data Validation Tool",
      type: "Migration assurance",
      description:
        "Two-phase checksum and key-join validation for native GCP migration, including mismatch analysis for composite keys, nested data, and PII.",
      stack: "Python · BigQuery · Airflow · GCS",
    },
    {
      name: "Lumi Direct Ingestion",
      type: "Cloud architecture",
      description:
        "Multi-environment ingestion architecture connecting MDM APIs, CDM converters, Airflow DAGs, encrypted metadata, and real-time Pub/Sub streams.",
      stack: "GCP · Kafka · Pub/Sub · Composer",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "GCP",
    "BigQuery",
    "Apache Airflow",
    "PySpark",
    "Databricks",
    "Hive / HDFS",
    "Kafka / Pub/Sub",
    "FastAPI",
    "LLM pipelines",
    "sqlglot",
  ],
  technicalExpertise: [
    "Python",
    "SQL",
    "HTML/CSS",
    "Java",
    "Google Cloud Platform (GCP)",
    "Apache Airflow",
    "FastAPI",
  ],
  tools: [
    "Git",
    "GitHub Actions",
    "Databricks",
    "Apache Airflow",
    "Google Cloud Platform",
    "FastAPI",
    "Jira",
    "BigQuery DVT",
  ],
};
