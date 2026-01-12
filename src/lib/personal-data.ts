import {
  LuBinary,
  LuBot,
  LuDatabase,
  LuGithub,
  LuMail,
  LuShieldCheck,
} from "react-icons/lu";
import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiDbt,
  SiDelphi,
  SiDocker,
  SiGit,
  SiHtml5,
  SiLabview,
  SiPerl,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

/* ============================================================================
   SOCIAL LINKS
   ============================================================================ */
export const socialItems = [
  {
    name: "GitHub",
    path: "https://github.com/PascalStehling",
    icon: LuGithub,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "Email",
    path: "mailto:web@stehl.ing",
    icon: LuMail,
  },
];

/* ============================================================================
   SKILLS - Single source of truth
   ============================================================================ */
export interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  proficiency: "advanced" | "proficient" | "experienced" | "learning";
  startYear: number;
  endYear?: number;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Stack",
    description: "Core data engineering tools and frameworks",
    skills: [
      { name: "Python (Pandas/Numpy/Dagster)", icon: SiPython, proficiency: "advanced", startYear: 2018 },
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "advanced", startYear: 2022 },
      { name: "DBT", icon: SiDbt, proficiency: "advanced", startYear: 2023, endYear:2025 },
      { name: "Docker", icon: SiDocker, proficiency: "proficient", startYear: 2020 },
    ],
  },
  {
    name: "Frontend & Web",
    description: "Web development and UI technologies",
    skills: [
      { name: "TypeScript/React", icon: SiReact, proficiency: "proficient", startYear: 2020 },
      { name: "HTML", icon: SiHtml5, proficiency: "proficient", startYear: 2017 },
    ],
  },
  {
    name: "Infrastructure & Tools",
    description: "DevOps, version control, and cloud",
    skills: [
      { name: "Git", icon: SiGit, proficiency: "advanced", startYear: 2016 },
      { name: "Azure", icon: VscAzure, proficiency: "proficient", startYear: 2022 },
    ],
  },
  {
    name: "Security & Research",
    description: "Cryptography and security interests",
    skills: [
      { name: "Quantum Secure Encryption", icon: LuShieldCheck, proficiency: "advanced", startYear: 2022, endYear: 2024 },
      { name: "Algorithms & Data Structures", icon: LuBinary, proficiency: "advanced", startYear: 2022 },
    ],
  },
  {
    name: "Areas of Interest",
    description: "Currently exploring and learning",
    skills: [
      { name: "Data Engineering", icon: LuDatabase, proficiency: "advanced", startYear: 2022 },
      { name: "Agentic Programming", icon: LuBot, proficiency: "learning", startYear: 2025 },
      { name: "Rust", icon: SiRust, proficiency: "learning", startYear: 2025 },
    ],
  },
  {
    name: "Previous Experience",
    description: "Languages and tools from earlier projects",
    skills: [
      { name: "Java", icon: FaJava, proficiency: "experienced", startYear: 2016, endYear: 2019 },
      { name: "C++", icon: SiCplusplus, proficiency: "experienced", startYear: 2016, endYear: 2019 },
      { name: "LabView", icon: SiLabview, proficiency: "experienced", startYear: 2016, endYear: 2019 },
      { name: "Perl", icon: SiPerl, proficiency: "experienced", startYear: 2016, endYear: 2019 },
      { name: "Delphi", icon: SiDelphi, proficiency: "experienced", startYear: 2014, endYear: 2016 },
    ],
  },
];

// Derive convenience exports from skillCategories for backward compatibility
export const mainSkills = skillCategories
  .flatMap((cat) => cat.skills)
  .filter((skill) => skill.proficiency === "advanced")
  .slice(0, 7);

export const previousExperience = skillCategories
  .find((cat) => cat.name === "Previous Experience")
  ?.skills.slice(0, 5) || [];

export const interests = [
  ...skillCategories.find((cat) => cat.name === "Security & Research")?.skills || [],
  ...skillCategories.find((cat) => cat.name === "Areas of Interest")?.skills || [],
];

/* ============================================================================
   WORK & EDUCATION - Single source of truth
   ============================================================================ */
export interface WorkExperience {
  company: string;
  jobTitle: string;
  location: string;
  startYear: number;
  endYear?: number;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  startYear: number;
  endYear: number;
  description: string;
}

export const workExperience: WorkExperience[] = [
  {
    company: "Catenion",
    jobTitle: "Senior Data Architect",
    location: "Berlin, Germany",
    startYear: 2020,
    description: "Began as a Data Science working student in 2019-2020 and transitioned to a full-time role after completing my Master's in Data Science. My focus evolved from Data Science to Data Engineering, and ultimately to Data Architecture. In addition to designing and improving data pipelines and architecture, I developed data-driven web applications and managed the entire IT infrastructure for the Data Unit. For the past year, I have been leading a small data team, including two working students.",
  },
  {
    company: "Sopra Steria",
    jobTitle: "Data Science Working Student",
    location: "Berlin, Germany",
    startYear: 2019,
    endYear: 2020,
    description: "As a working student, I conducted research in AI and Data Science. This role provided me with foundational experience in the field and prepared me for more project-oriented work in subsequent positions.",
  },
  {
    company: "Helmholtz-Zentrum Berlin (HZB)",
    jobTitle: "Computer Science Apprentice",
    location: "Berlin, Germany",
    startYear: 2016,
    endYear: 2019,
    description: "Completed a Computer Science Apprenticeship through a dual study program, where I applied academic knowledge to practical projects at a major research institution.",
  },
];

export const educationHistory: Education[] = [
  {
    school: "Hochschule Wismar",
    degree: "M.Eng in Cyber Security and Digital Forensics",
    location: "Wismar/Hamburg/Berlin, Germany",
    startYear: 2022,
    endYear: 2024,
    description: "Driven by a passion for continuous learning, I pursued a second Master's degree in Cyber Security. This program allowed me to rediscover my interest in algebra, leading to a Master's thesis on Homomorphic Encryption with Module-Learning with Errors (M-LWE). I graduated with an overall grade of 1.3.",
  },
  {
    school: "Berliner Hochschule für Technik (BHT)",
    degree: "M.Sc. in Data Science",
    location: "Berlin, Germany",
    startYear: 2019,
    endYear: 2021,
    description: "This practical Master's program provided extensive knowledge of various AI models and their underlying infrastructure. A course on virtualization and containers proved particularly influential, and I now use these techniques, especially Dev Containers, daily. I graduated with an overall grade of 1.3 and distinction.",
  },
  {
    school: "Hochschule für Wirtschaft und Recht (HWR)",
    degree: "B.Sc. in Computer Science",
    location: "Berlin, Germany",
    startYear: 2016,
    endYear: 2019,
    description: "This dual study program combined theoretical computer science with practical application at HZB.",
  },
  {
    school: "Johann-Gottfried-Seume-Gymnasium Vacha",
    degree: "Abitur",
    location: "Vacha, Germany",
    startYear: 2008,
    endYear: 2016,
    description: "My German High School degree",
  },
];

/* ============================================================================
   TIMELINE MILESTONES - Derived from work & education
   ============================================================================ */
export interface Milestone {
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  type: "education" | "work";
}

/* ============================================================================
   NON-TECHNICAL INTERESTS & HOBBIES
   ============================================================================ */
export interface NonTechnicalInterest {
  name: string;
  description: string;
  startYear: number;
  endYear?: number;
}

export const nonTechnicalInterests: NonTechnicalInterest[] = [
  {
    name: "Swing Dancing",
    description: "Lindy Hop and Charleston",
    startYear: 2024,
  },
  {
    name: "Sewing",
    description: "Classic menswear tailoring",
    startYear: 2025,
  },
  {
    name: "Cooking",
    description: "Classic menswear tailoring",
    startYear: 2016,
  },
];

// Derive milestones from work and education data
export const milestones: Milestone[] = [
  ...educationHistory.map((edu) => ({
    title: edu.degree,
    description: edu.school,
    startYear: edu.startYear,
    endYear: edu.endYear,
    type: "education" as const,
  })),
  ...workExperience.map((work) => ({
    title: work.jobTitle,
    description: work.company,
    startYear: work.startYear,
    endYear: work.endYear || 2026, // Ongoing positions run until now
    type: "work" as const,
  })),
].sort((a, b) => a.startYear - b.startYear);
