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
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "DATA ENGINEER BUILDING SCALABLE, RELIABLE DATA PLATFORMS AND PIPELINES",
  data: [
    {
      title: "Data Engineering",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Designing and orchestrating batch/streaming data pipelines (Airflow, Spark)"),
        emoji("⚡ Building robust ETL/ELT workflows on GCP (Cloud Storage, BigQuery, Dataflow/Dataproc, Cloud Composer)"),
        emoji("⚡ Modeling data for analytics, BI, and downstream ML use cases"),
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
          skillName: "Kafka",
          iconifyTag: "logos:kafka-icon",
        },
        {
          skillName: "Google Cloud",
          iconifyTag: "logos:google-cloud",
        },
        {
          skillName: "BigQuery",
          iconifyTag: "logos:google-bigquery",
        },
        {
          skillName: "Databricks",
          iconifyTag: "simple-icons:databricks",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
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
