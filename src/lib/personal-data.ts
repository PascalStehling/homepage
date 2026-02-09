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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
   TYPE HELPERS
   ============================================================================ */
export type LocaleString = {
  en: string;
  de: string;
};

/* ============================================================================
   WORK & EDUCATION - Single source of truth
   ============================================================================ */
export interface WorkExperience {
  company: string;
  jobTitle: string;
  location: string;
  startYear: number;
  endYear?: number;
  description: LocaleString;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  startYear: number;
  endYear: number;
  description: LocaleString;
}

export const workExperience: WorkExperience[] = [
  {
    company: "Catenion",
    jobTitle: "Senior Data Architect",
    location: "Berlin, Germany",
    startYear: 2020,
    description: {
      en: "Began as a Data Science working student in 2019-2020 and transitioned to a full-time role after completing my Master's in Data Science. My focus evolved from Data Science to Data Engineering, and ultimately to Data Architecture. In addition to designing and improving data pipelines and architecture, I developed data-driven web applications and managed the entire IT infrastructure for the Data Unit. For the past year, I have been leading a small data team, including two working students.",
      de: "Begann 2020 als studentische Hilfskraft im Bereich Data Science und wechselte nach meinem Master in Data Science in eine Vollzeitstelle. Mein Fokus entwickelte sich von Data Science über Data Engineering zur Data Architecture. Neben der Gestaltung und Verbesserung von Datenpipelines und -architekturen entwickelte ich datengesteuerte Web-Anwendungen und verwaltete die gesamte IT-Infrastruktur der Data Unit. Im letzten Jahr leite ich ein kleines Data-Team mit zwei studentischen Hilfskräften.",
    },
  },
  {
    company: "Sopra Steria",
    jobTitle: "Data Science Working Student",
    location: "Berlin, Germany",
    startYear: 2019,
    endYear: 2020,
    description: {
      en: "As a working student, I conducted research in AI and Data Science. This role provided me with foundational experience in the field and prepared me for more project-oriented work in subsequent positions.",
      de: "Als studentische Hilfskraft führte ich Forschungen im Bereich KI und Data Science durch. Diese Rolle vermittelte mir grundlegende Erfahrungen im Feld und bereitete mich auf projektorientiertere Arbeiten vor.",
    },
  },
  {
    company: "Helmholtz-Zentrum Berlin (HZB)",
    jobTitle: "Computer Science Apprentice",
    location: "Berlin, Germany",
    startYear: 2016,
    endYear: 2019,
    description: {
      en: "Completed a Computer Science Apprenticeship through a dual study program, where I applied academic knowledge to practical projects at a major research institution.",
      de: "Absolvierte ein Informatik-Praktikum im Rahmen eines dualen Studiums, in dem ich akademisches Wissen auf praktische Projekte in einer großen Forschungseinrichtung anwendete.",
    },
  },
];

export const educationHistory: Education[] = [
  {
    school: "Hochschule Wismar",
    degree: "M.Eng in Cyber Security and Digital Forensics",
    location: "Wismar/Hamburg/Berlin, Germany",
    startYear: 2022,
    endYear: 2024,
    description: {
      en: "Driven by a passion for continuous learning, I pursued a second Master's degree in Cyber Security. This program allowed me to rediscover my interest in algebra, leading to a Master's thesis on Homomorphic Encryption with Module-Learning with Errors (M-LWE). I graduated with an overall grade of 1.3.",
      de: "Getrieben von der Leidenschaft für kontinuierliches Lernen verfolgte ich einen zweiten Master in Cybersecurity. Dieses Programm ermöglichte es mir, mein Interesse an Algebra wiederzuentdecken, was zu einer Masterarbeit über homomorphe Verschlüsselung mit Module-Learning with Errors (M-LWE) führte. Ich graduierte mit einer Gesamtnote von 1,3.",
    },
  },
  {
    school: "Berliner Hochschule für Technik (BHT)",
    degree: "M.Sc. in Data Science",
    location: "Berlin, Germany",
    startYear: 2019,
    endYear: 2021,
    description: {
      en: "This practical Master's program provided extensive knowledge of various AI models and their underlying infrastructure. A course on virtualization and containers proved particularly influential, and I now use these techniques, especially Dev Containers, daily. I graduated with an overall grade of 1.3 and distinction.",
      de: "Dieses praxisorientierte Masterprogramm vermittelte umfassende Kenntnisse verschiedener KI-Modelle und ihrer zugrunde liegenden Infrastruktur. Ein Kurs zu Virtualisierung und Containern erwies sich als besonders einflussreich, und ich nutze diese Techniken, besonders Dev Containers, täglich. Ich graduierte mit Auszeichnung und einer Gesamtnote von 1,3.",
    },
  },
  {
    school: "Hochschule für Wirtschaft und Recht (HWR)",
    degree: "B.Sc. in Computer Science",
    location: "Berlin, Germany",
    startYear: 2016,
    endYear: 2019,
    description: {
      en: "This dual study program combined theoretical computer science with practical application at HZB.",
      de: "Dieses duale Studium kombinierte theoretische Informatik mit praktischer Anwendung am HZB.",
    },
  },
  {
    school: "Johann-Gottfried-Seume-Gymnasium Vacha",
    degree: "Abitur",
    location: "Vacha, Germany",
    startYear: 2008,
    endYear: 2016,
    description: {
      en: "My German High School degree",
      de: "Deutsches Abitur",
    },
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
  name: LocaleString;
  description: LocaleString;
  startYear: number;
  endYear?: number;
}

export const nonTechnicalInterests: NonTechnicalInterest[] = [
  {
    name: {
      en: "Cooking",
      de: "Kochen",
    },
    description: {
      en: "Cooking daily something different for relaxation and a nice dinner",
      de: "Tägliches Kochen zur entspannung und einen leckeres Essen",
    },
    startYear: 2016,
  },
  {
    name: {
      en: "Swing Dancing",
      de: "Swing Tanzen",
    },
    description: {
      en: "Lindy Hop and Charleston",
      de: "Lindy Hop und Charleston",
    },
    startYear: 2024,
  },
  {
    name: {
      en: "Sewing",
      de: "Nähen",
    },
    description: {
      en: "General tailoring: Creating something new, but most often just fixing",
      de: "Generelles Nähen: Dinge von 0 auf nähen, meistens aber nur beschädigte Stücke reparieren",
    },
    startYear: 2024,
  },
  {
    name: {
      en: "Sailing",
      de: "Segeln",
    },
    description: {
      en: "Made my Sailing License on Wansee, Berlin. But only small sport boats yet",
      de: "Hab meine Segellizenz auf dem Wansee gemacht. Bisher aber nur kleine Sportboote",
    },
    startYear: 2025,
  },
  {
    name: {
      en: "Mushroom Hunting",
      de: "Pilze Sammeln",
    },
    description: {
      en: "Searching and Identifying Mushrooms in the forest",
      de: "Pilze im Wald suchen und bestimmen",
    },
    startYear: 2025,
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

/* ============================================================================
   BOOKS - Single source of truth
   ============================================================================ */
export interface BookInput {
  title: string;
  author: string;
  yearRead: number;
  category: "fictional" | "non-fictional";
  isbn?: string;
  publisherURL?: string;
  gutenbergURL?: string;
}

export interface Book extends BookInput {
  slug: string;
}

function generateSlug(title: string, author: string): string {
  const combined = `${title}-${author}`
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
  return combined;
}

const booksInput: BookInput[] = [
  // Image 1
  {
    title: "Hands-On Graph Analytics with Neo4j",
    author: "Estelle Scifo",
    yearRead: 2021,
    category: "non-fictional",
    isbn: "9781839212611",
    publisherURL: "https://www.packtpub.com/en-us/product/hands-on-graph-analytics-with-neo4j-9781839212611"
  },
  {
    title: "Quantentheorie in 30 Sekunden",
    author: "Brian Clegg",
    yearRead: 2015,
    category: "non-fictional",
    isbn: "9789089984906"
  },
  {
    title: "Deutschland. Ein Wintermärchen",
    author: "Heinrich Heine",
    yearRead: 2023,
    category: "fictional",
    gutenbergURL: "https://www.gutenberg.org/ebooks/6079"
  },
  {
    title: "Dr Jekyll & Mr. Hyde",
    author: "Robert Louis Stevenson",
    yearRead: 2023,
    category: "fictional",
    gutenbergURL: "https://www.gutenberg.org/ebooks/43"
  },
  {
    title: "Bekenntnisse eines englischen Opiumessers",
    author: "Thomas De Quincey",
    yearRead: 2024,
    category: "fictional",
    gutenbergURL: "https://www.projekt-gutenberg.org/quincey/opiumess/opiumess.html"
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    yearRead: 2023,
    category: "non-fictional",
    isbn: "9781449373320",
    publisherURL: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"
  },
  {
    title: "Vorkurs Informatik: Der Einstieg ins Informatikstudium",
    author: "Heinrich Müller and Frank Weichert",
    yearRead: 2016,
    category: "non-fictional",
    publisherURL: "https://link.springer.com/book/10.1007/978-3-658-36468-7"
  },
  {
    title: "Die Buddenbrooks",
    author: "Thomas Mann",
    yearRead: 2025,
    category: "fictional",
    isbn: "9780679752608",
    gutenbergURL: "https://archive.org/details/buddenbrooksverf34811gut"
  },
  {
    title: "Der Zauberberg",
    author: "Thomas Mann",
    yearRead: 2025,
    category: "fictional",
    isbn: "9783596294336",
    gutenbergURL: "https://www.gutenberg.org/ebooks/65661"
  },
  {
    title: "Die Physik der unsichtbaren Dimensionen",
    author: "Michio Kaku",
    yearRead: 2016,
    category: "non-fictional",
    publisherURL: "https://www.rowohlt.de/buch/michio-kaku-die-physik-der-unsichtbaren-dimensionen-9783499615092"
  },
  {
    title: "Data Matching: Concepts and Techniques for Record Linkage, Entity Resolution, and Duplicate Detection",
    author: "Peter Christen",
    yearRead: 2021,
    category: "non-fictional",
    isbn: "9783642311635",
    publisherURL: "https://link.springer.com/book/10.1007/978-3-642-31164-2"
  },
  {
    title: "Atomgewicht 500",
    author: "Hans Dominik",
    yearRead: 2021,
    category: "fictional",
    gutenbergURL: "https://www.projekt-gutenberg.org/dominik/atom500/atom500.html"
  },
  {
    title: "Die Harzreise",
    author: "Heinrich Heine",
    yearRead: 2022,
    category: "fictional",
    gutenbergURL: "https://www.gutenberg.org/ebooks/24249"
  },
  {
    title: "IT-Sicherheit: Konzepte - Verfahren - Protokolle",
    author: "Claudia Eckert",
    yearRead: 2022,
    category: "non-fictional",
    publisherURL: "https://link.springer.com/book/10.1007/978-3-658-26084-9"
  },
  {
    title: "Knowledge Graphs: Fundamentals, Techniques, and Applications",
    author: "Mayank Kejriwal, Craig A. Knoblock, Pedro Szekely",
    yearRead: 2021,
    category: "non-fictional",
    isbn: "9780262045094",
    publisherURL: "https://mitpress.mit.edu/9780262045094/knowledge-graphs/"
  },
  {
    title: "Big Data: A Revolution That Will Transform How We Live, Work, and Think",
    author: "Viktor Mayer-Schönberger and Kenneth Cukier",
    yearRead: 2020,
    category: "non-fictional",
    isbn: "9780544227750",
    publisherURL: "https://www.hachettebookgroup.com/"
  },
  {
    title: "Drogen: Die Geschichte eines langen Krieges",
    author: "Johann Hari",
    yearRead: 2018,
    category: "non-fictional",
    publisherURL: "https://www.fischerverlage.de/buch/johann-hari-drogen-9783596034192"
  },
  {
    title: "Power to the People: Wie wir mit Technologie die Demokratie neu erfinden",
    author: "Georg Diez and Emanuel Heisenberg",
    yearRead: 2024,
    category: "non-fictional",
    publisherURL: "https://www.hanser-literaturverlage.de/buch/power-to-the-people-9783446266889-t-3194"
  },
  {
    title: "Polizei- und Kriminalpsychologie",
    author: "Birgitta Sticher",
    yearRead: 2023,
    category: "non-fictional",
    publisherURL: "https://polizeiwissenschaft.de/"
  },
  {
    title: "Immun: A Journey into the Mysterious System That Keeps You Alive",
    author: "Philipp Dettmer",
    yearRead: 2023,
    category: "non-fictional",
    isbn: "9780593241318",
    publisherURL: "https://www.philippdettmer.net/immune"
  },
  {
    title: "Pilz in Sicht ... und dann im Topf",
    author: "Renate Volk and Fridhelm Volk",
    yearRead: 2025,
    category: "non-fictional"
  },
  {
    title: "Die Sprache der Rechten",
    author: "Heidrun Deborah Kämper",
    yearRead: 2025,
    category: "non-fictional",
    isbn: "9783150145951",
    publisherURL: "https://www.reclam.de/produktdetail/die-sprache-der-rechten-wie-sie-reden-und-was-sie-sagen-9783150146637"
  },
  {
    title: "Schnelles Denken, Langsames Denken",
    author: "Daniel Kahneman",
    yearRead: 2024,
    category: "non-fictional",
    isbn: "978-3328100348",
    publisherURL: "https://www.penguin.de/buecher/daniel-kahneman-schnelles-denken-langsames-denken/taschenbuch/9783328100348"
  },
  {
    title: "Sein erster Fall: Teil 2 - Das Ende der Trilogie",
    author: "Jan Philipp Zymny and Henry Frottey",
    yearRead: 2019,
    category: "fictional",
    isbn: "9783954610204"
  },
  {
    title: "Maschinelles Lernen",
    author: "Jörg Frochte",
    yearRead: 2019,
    category: "non-fictional",
    isbn: "9783446461444",
    publisherURL: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446461444"
  },
  {
    title: "Effektive Softwarearchitekturen",
    author: "Gernot Starke",
    yearRead: 2022,
    category: "non-fictional",
    isbn: "978-3-446-47672-1",
    publisherURL: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446476721"
  },
  {
    title: "No Tech Hacking",
    author: "Johnny Long, Jack Wiles, Scott Pinzon, and Kevin D. Mitnick",
    yearRead: 2017,
    category: "non-fictional",
    isbn: "9781597492157",
    publisherURL: "https://www.oreilly.com/library/view/no-tech-hacking/9781597492157/"
  },
  {
    title: "Permanent Record",
    author: "Edward Snowden",
    yearRead: 2021,
    category: "non-fictional",
    isbn: "9781250237231",
    publisherURL: "https://us.macmillan.com/books/9781250237231/permanentrecord/"
  },
  {
    title: "GitHub - Eine praktische Einführung",
    author: "Anke Lederer",
    yearRead: 2020,
    category: "non-fictional",
    isbn: "978-3-96009-141-7",
    publisherURL: "https://dpunkt.de/produkt/github-eine-praktische-einfuehrung/"
  },
  {
    title: "Einsteins Jahrhundertwerk",
    author: "Thomas Bührke",
    yearRead: 2017,
    category: "non-fictional",
    isbn: "9783423348980",
    publisherURL: "https://www.dtv.de/buch/einsteins-jahrhundertwerk-34898"
  },
  {
    title: "A Field Guide to Genetic Programming",
    author: "Riccardo Poli, William B. Langdon, Nicholas F. McPhee",
    yearRead: 2018,
    category: "non-fictional",
    publisherURL: "http://www.gp-field-guide.org.uk/"
  },
  {
    title: "Machine Learning mit Python",
    author: "Sebastian Raschka",
    yearRead: 2019,
    category: "non-fictional",
    isbn: "978-3958457331",
    publisherURL: "https://www.mitp.de/IT-WEB/KI-Data-Science/Machine-Learning-mit-Python.html"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    yearRead: 2020,
    category: "non-fictional",
    isbn: "9780132350884",
    publisherURL: "https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html"
  },
  {
    title: "Deep Learning mit Python",
    author: "François Chollet",
    yearRead: 2020,
    category: "non-fictional",
    isbn: "9781617294433",
    publisherURL: "https://www.manning.com/books/deep-learning-with-python"
  },
  {
    title: "Hacking",
    author: "Jon Erickson",
    yearRead: 2017,
    category: "non-fictional",
    isbn: "978-1593271442",
    publisherURL: "https://nostarch.com/hacking2.htm"
  },
  {
    title: "Docker",
    author: "Bernd Öggl and Michael Kofler",
    yearRead: 2020,
    category: "non-fictional",
    isbn: "978-3836261760",
    publisherURL: "https://www.rheinwerk-verlag.de/docker-das-praxisbuch-fuer-entwickler-und-devops-teams/"
  },
  {
    title: "React",
    author: "Sebastian Springer",
    yearRead: 2020,
    category: "non-fictional",
    isbn: "978-1493224401",
    publisherURL: "https://www.rheinwerk-verlag.de/react-das-umfassende-handbuch/"
  },
  {
    title: "Skalierbare Container-Infrastrukturen",
    author: "Oliver Liebel",
    yearRead: 2022,
    category: "non-fictional",
    isbn: "978-3-8362-7772-3",
    publisherURL: "https://www.rheinwerk-verlag.de/skalierbare-container-infrastrukturen-das-handbuch-fuer-administratoren/"
  },
  {
    title: "Nähen - Das Standardwerk",
    author: "Jutta Kühnle, Karin Roser, and Brigitte Binder",
    yearRead: 2024,
    category: "non-fictional",
    isbn: "9783772448607",
    publisherURL: "https://www.topp-kreativ.de/naehen-das-standardwerk-4860"
  },
  {
    title: "Metro 2035",
    author: "Dmitry Glukhovsky",
    yearRead: 2018,
    category: "fictional",
    isbn: "9783453315556",
    publisherURL: "https://www.goodreads.com/book/show/33113864-metro-2035"
  },
  {
    title: "Die Kunst der Täuschung",
    author: "Kevin Mitnick and William L. Simon",
    yearRead: 2019,
    category: "non-fictional",
    isbn: "9783826615696",
    publisherURL: "https://www.mitp.de/IT-WEB/IT-Sicherheit/Die-Kunst-der-Taeuschung.html"
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    yearRead: 2020,
    category: "fictional",
    isbn: "9781451673319",
    publisherURL: "https://www.simonandschuster.com/books/Fahrenheit-451/Ray-Bradbury/9781451673265"
  },
  {
    title: "The Information",
    author: "James Gleick",
    yearRead: 2023,
    category: "non-fictional",
    isbn: "9781400096237",
    publisherURL: "https://www.goodreads.com/book/show/8701960-the-information"
  },
  {
    title: "1984",
    author: "George Orwell",
    yearRead: 2020,
    category: "fictional",
    isbn: "9780451524935",
    publisherURL: "https://www.penguinrandomhouse.com/books/326569/1984-by-george-orwell-with-a-foreword-by-thomas-pynchon/"
  },
  {
    title: "Schöne neue Welt",
    author: "Aldous Huxley",
    yearRead: 2020,
    category: "fictional",
    isbn: "978-3596905737",
    publisherURL: "https://www.fischerverlage.de/buch/aldous-huxley-schoene-neue-welt-9783596905737"
  },
  {
    title: "Americanah",
    author: "Chimamanda Ngozi Adichie",
    yearRead: 2025,
    category: "fictional",
    isbn: "9780307455925",
    publisherURL: "https://www.penguinrandomhouse.com/books/878/americanah-by-chimamanda-ngozi-adichie/"
  },
  {
    title: "Rechte Gefühle: Affekte und Strategien des digitalen Faschismus",
    author: "Simon Strick",
    yearRead: 2024,
    category: "non-fictional",
    isbn: "978-3-8376-5495-0",
    publisherURL: "https://www.transcript-verlag.de/978-3-8376-5495-0/rechte-gefuehle/"
  }
];

export const books: Book[] = booksInput.map((book) => ({
  ...book,
  slug: generateSlug(book.title, book.author),
}));
