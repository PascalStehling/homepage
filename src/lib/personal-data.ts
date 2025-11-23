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
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

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

export const mainSkills = [
  { name: "Python (Pandas/Numpy/Dagster)", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "DBT", icon: SiDbt },
  { name: "Typescript/HTML (React)", icon: SiReact },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Azure Basics", icon: VscAzure },
];

export const previousExperience = [
  { name: "Java", icon: FaJava },
  { name: "LabView", icon: SiLabview },
  { name: "Perl", icon: SiPerl },
  { name: "Delphi", icon: SiDelphi },
  { name: "C++", icon: SiCplusplus },
];

export const interests = [
  { name: "Data Engineering", icon: LuDatabase },
  { name: "Agentic Programming", icon: LuBot },
  { name: "Quantum Secure Encryption", icon: LuShieldCheck },
  { name: "Rust", icon: SiRust },
  { name: "Algorithms & Data Structures", icon: LuBinary },
];

