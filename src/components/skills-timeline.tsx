"use client";

import { skillCategories, milestones, nonTechnicalInterests } from "@/lib/personal-data";
import { LuGraduationCap, LuBriefcase, LuHeartHandshake } from "react-icons/lu";

const startYear = 2014;
const endYear = 2026;
const totalYears = endYear - startYear;

const getPosition = (year: number) => ((year - startYear) / totalYears) * 100;
const getWidth = (start: number, end?: number) => {
  const finalEnd = end || 2026;
  return Math.max(((finalEnd - start) / totalYears) * 100, 3);
};

const proficiencyColors = {
  advanced: "bg-emerald-500",
  proficient: "bg-blue-500",
  experienced: "bg-amber-500",
  learning: "bg-purple-500",
};

const proficiencyLabels = {
  advanced: "Advanced",
  proficient: "Proficient",
  experienced: "Experienced",
  learning: "Learning",
};

interface TimelineItemProps {
  item: { startYear: number; endYear?: number; proficiency?: string };
  title: string;
  subtitle?: string;
  barColor?: string;
  getBarColor?: (item: any) => string;
  icon: React.ComponentType<{ className?: string }>;
}

function TimelineItem({ item, title, subtitle, barColor, getBarColor, icon: Icon }: TimelineItemProps) {
  const displayStartYear = Math.max(item.startYear, startYear);
  const barWidth = getWidth(displayStartYear, item.endYear);
  const showLabel = barWidth > 6;
  const color = getBarColor ? getBarColor(item) : barColor || "bg-gray-500";

  return (
    <div key={`${item.startYear}-${title}`} className="group relative h-8 flex items-center">
      <div
        className={`absolute h-6 rounded-sm transition-all duration-200 hover:h-7 flex items-center px-2 gap-1 ${color} opacity-80 group-hover:opacity-100`}
        style={{
          left: `${getPosition(displayStartYear)}%`,
          width: `${barWidth}%`,
        }}
      >
        {showLabel && (
          <div className="text-white text-[11px] font-medium truncate flex items-center gap-0.5">
            <Icon className="h-2.5 w-2.5 shrink-0" />
            <span className="truncate">{title}</span>
          </div>
        )}
      </div>

      {/* Tooltip */}
      <div
        className="absolute left-0 top-full mt-1 px-2 py-1 bg-foreground text-background rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap"
        style={{ left: `${getPosition(item.startYear)}%` }}
      >
        <div className="font-semibold">{title}</div>
        <div className="text-[10px]">
          {item.startYear} - {item.endYear || "present"}
        </div>
        {subtitle && <div className="text-[10px]">{subtitle}</div>}
      </div>
    </div>
  );
}

interface TimelineSectionProps {
  title: string;
  items: any[];
  barColor?: string;
  getBarColor?: (item: any) => string;
  icon: React.ComponentType<{ className?: string }>;
  getTitle: (item: any) => string;
  getSubtitle?: (item: any) => string;
}

function TimelineSection({
  title,
  items,
  barColor,
  getBarColor,
  icon,
  getTitle,
  getSubtitle,
}: TimelineSectionProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
        {title}
      </h2>
      <div className="space-y-1">
        {items.map((item) => (
          <TimelineItem
            key={`${item.startYear}-${getTitle(item)}`}
            item={item}
            title={getTitle(item)}
            subtitle={getSubtitle?.(item)}
            barColor={barColor}
            getBarColor={getBarColor}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsTimeline() {
  const allSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .sort((a, b) => a.startYear - b.startYear || (a.endYear || 2026) - (b.endYear || 2026));

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Journey</h1>
        <p className="text-lg text-muted-foreground">
          Education, career, technical skills, and personal interests over time
        </p>
      </div>

      {/* Timeline Header with Years */}
      <div className="space-y-6">
        <div className="relative h-12">
          {/* Year markers */}
          <div className="absolute inset-x-0 top-0 flex justify-between text-xs font-medium text-muted-foreground">
            {Array.from({ length: totalYears + 1 }, (_, i) => startYear + i).map((year) => (
              <span key={year} className="absolute" style={{ left: `${getPosition(year)}%` }}>
                {year}
              </span>
            ))}
          </div>
          {/* Timeline line */}
          <div className="absolute inset-x-0 bottom-4 h-0.5 bg-border"></div>
        </div>

        {/* Timeline Sections */}
        <div className="space-y-6 pb-6 border-b border-border">
          <TimelineSection
            title="Education"
            items={milestones.filter((m) => m.type === "education")}
            barColor="bg-blue-500"
            icon={LuGraduationCap}
            getTitle={(m) => m.title}
            getSubtitle={(m) => m.description}
          />

          <TimelineSection
            title="Work Experience"
            items={milestones.filter((m) => m.type === "work")}
            barColor="bg-emerald-500"
            icon={LuBriefcase}
            getTitle={(m) => m.title}
            getSubtitle={(m) => m.description}
          />

          <TimelineSection
            title="Personal Interests"
            items={nonTechnicalInterests}
            barColor="bg-rose-500"
            icon={LuHeartHandshake}
            getTitle={(m) => m.name}
            getSubtitle={(m) => m.description}
          />
        </div>

        {/* Technical Skills */}
        <TimelineSection
          title="Technical Skills"
          items={allSkills}
          getBarColor={(skill) => proficiencyColors[skill.proficiency as keyof typeof proficiencyColors]}
          icon={LuHeartHandshake}
          getTitle={(s) => s.name}
          getSubtitle={(s) => proficiencyLabels[s.proficiency as keyof typeof proficiencyLabels]}
        />
      </div>

      {/* Legend */}
      <div className="pt-8 border-t border-border space-y-4">
        <h2 className="text-lg font-semibold">Legend</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Proficiency Levels</h3>
            <div className="space-y-1">
              {(
                Object.entries(proficiencyLabels) as [
                  keyof typeof proficiencyLabels,
                  string,
                ][]
              ).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-sm ${proficiencyColors[key]}`}></div>
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Timeline Categories</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <LuGraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">Education</span>
              </div>
              <div className="flex items-center gap-2">
                <LuBriefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm">Work</span>
              </div>
              <div className="flex items-center gap-2">
                <LuHeartHandshake className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                <span className="text-sm">Personal Interests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
