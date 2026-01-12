import { skillCategories } from "@/lib/personal-data";

const proficiencyColors = {
  advanced: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100",
  proficient: "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100",
  experienced: "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100",
  learning: "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100",
};

const proficiencyLabels = {
  advanced: "Advanced",
  proficient: "Proficient",
  experienced: "Experienced",
  learning: "Learning",
};

export function SkillsVisualization() {
  return (
    <div className="space-y-8 animate-fade-in-up delay-200">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Skills & Interests</h2>
        <p className="text-muted-foreground">
          Color-coded by expertise level
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105 ${
                      proficiencyColors[skill.proficiency]
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <Icon className="h-4 w-4 mt-0.5 shrink-0" />
                      <span className="text-xs font-medium opacity-70">
                        {proficiencyLabels[skill.proficiency]}
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-snug line-clamp-2">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="pt-6 border-t border-border">
        <p className="text-sm font-semibold mb-3 text-foreground">
          Proficiency Levels
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(
            Object.entries(proficiencyLabels) as [
              keyof typeof proficiencyLabels,
              string
            ][]
          ).map(([key, label]) => (
            <div
              key={key}
              className={`p-2 rounded-lg text-center text-sm font-medium ${
                proficiencyColors[key]
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
