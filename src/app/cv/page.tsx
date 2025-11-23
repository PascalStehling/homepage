import { cn } from "@/lib/utils";
import { interests, mainSkills, previousExperience } from "@/lib/personal-data";

const works = [
  {
    company: "Catenion",
    time: "2020-present",
    job_title: "Senior Data Architect",
    location: "Berlin, Germany",
    description: "Began as a Data Science working student in 2020 and transitioned to a full-time role after completing my Master's in Data Science. My focus evolved from Data Science to Data Engineering, and ultimately to Data Architecture. In addition to designing and improving data pipelines and architecture, I developed data-driven web applications and managed the entire IT infrastructure for the Data Unit. For the past year, I have been leading a small data team, including two working students.",
  },
  {
    company: "Sopra Steria",
    time: "2019-2020",
    job_title: "Data Science Working Student",
    location: "Berlin, Germany",
    description: "As a working student, I conducted research in AI and Data Science. This role provided me with foundational experience in the field and prepared me for more project-oriented work in subsequent positions.",
  },
  {
    company: "Helmholtz-Zentrum Berlin (HZB)",
    time: "2016-2019",
    job_title: "Computer Science Apprentice",
    location: "Berlin Germany",
    description: "Completed a Computer Science Apprenticeship through a dual study program, where I applied academic knowledge to practical projects at a major research institution.",
  },
];

const educations = [
  {
    school: "Hochschule Wismar, distance learning",
    time: "2022-2024",
    job_title: "M.Eng in Cyber Security and Digital Forensics",
    location: "Wismar/Hamburg/Berlin, Germany",
    description: "Driven by a passion for continuous learning, I pursued a second Master's degree in Cyber Security. This program allowed me to rediscover my interest in algebra, leading to a Master's thesis on Homomorphic Encryption with Module-Learning with Errors (M-LWE). I graduated with an overall grade of 1.3.",
  },
  {
    school: "Berliner Hochschule für Technik (BHT)",
    time: "2019-2021",
    job_title: "M.Sc. in Data Science",
    location: "Berlin, Germany",
    description: "This practical Master's program provided extensive knowledge of various AI models and their underlying infrastructure. A course on virtualization and containers proved particularly influential, and I now use these techniques, especially Dev Containers, daily. I graduated with an overall grade of 1.3 and distinction.",
  },
  {
    school: "Hochschule für Wirtschaft und Recht (HWR)",
    time: "2016-2019",
    job_title: "B.Sc. in Computer Science",
    location: "Berlin, Germany",
    description: "This dual study program combined theoretical computer science with practical application at HZB.",
  },
];

function TimelineItem({ item, last }: { item: any; last?: boolean }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {!last && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border group-hover:bg-neutral-400 dark:group-hover:bg-neutral-600 transition-colors duration-300" />
      )}
      <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-background bg-border group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200 group-hover:scale-110 transition-all duration-300 z-10" />
      
      <div className="space-y-2 transition-transform duration-300 group-hover:translate-x-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="font-semibold text-lg text-foreground">
            {item.job_title || item.school}
          </h3>
          <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
            {item.time}
          </span>
        </div>
        
        <div className="text-sm font-medium text-foreground">
          {item.company || item.school} • {item.location}
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto space-y-16">
      <section className="animate-fade-in-up">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Work Experience</h2>
        <div className="space-y-0">
          {works.map((work, i) => (
            <TimelineItem key={i} item={work} last={i === works.length - 1} />
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Education</h2>
        <div className="space-y-0">
          {educations.map((edu, i) => (
            <TimelineItem key={i} item={edu} last={i === educations.length - 1} />
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up delay-500">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Main Skills</h3>
            <div className="flex flex-wrap gap-2">
              {mainSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-md border border-transparent bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/20"
                >
                  <skill.icon className="mr-1.5 h-3.5 w-3.5" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-muted-foreground">Previous Experience</h3>
            <div className="flex flex-wrap gap-2">
              {previousExperience.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-md border border-transparent bg-muted px-2.5 py-0.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                >
                  <skill.icon className="mr-1.5 h-3.5 w-3.5" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest.name}
                  className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
                >
                  <interest.icon className="mr-1.5 h-3.5 w-3.5" />
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
