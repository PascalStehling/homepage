import Link from "next/link";
import { skillCategories } from "@/lib/personal-data";
import { LuArrowRight } from "react-icons/lu";

const proficiencyColors = {
  advanced: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100",
  proficient: "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100",
  experienced: "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100",
  learning: "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100",
};

export function SkillsTeaser() {
  // Get top 6 skills (all advanced proficiency)
  const topSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .filter((skill) => skill.proficiency === "advanced")
    .slice(0, 6);

  return (
    <div className="space-y-4 animate-fade-in-up delay-200">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Key Skills</h2>
        <Link
          href="/skills"
          className="group flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View timeline <LuArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {topSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className={`p-3 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 ${
                proficiencyColors[skill.proficiency]
              }`}
            >
              <div className="flex items-start gap-2">
                <Icon className="h-4 w-4 mt-0.5 shrink-0" />
                <p className="text-sm font-medium leading-snug line-clamp-1">
                  {skill.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
