"use client";

import { skillCategories, milestones, nonTechnicalInterests } from "@/lib/personal-data";
import { LuGraduationCap, LuBriefcase, LuHeartHandshake } from "react-icons/lu";
import { useState } from "react";

const START_YEAR = 2014;
const END_YEAR = 2026;
const TOTAL_YEARS = END_YEAR - START_YEAR;

const getPosition = (year: number) => ((year - START_YEAR) / TOTAL_YEARS) * 100;
const getWidth = (start: number, end?: number) => {
  const finalEnd = end || END_YEAR;
  return Math.max(((finalEnd - start) / TOTAL_YEARS) * 100, 3);
};

const proficiencyColors = {
  advanced: "bg-emerald-500",
  proficient: "bg-blue-500",
  experienced: "bg-amber-500",
  learning: "bg-purple-500",
};

interface TimelineBarProps {
  item: any;
  title: string;
  subtitle?: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

function TimelineBar({ item, title, subtitle, color, icon: Icon }: TimelineBarProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const displayStartYear = Math.max(item.startYear, START_YEAR);
  const barWidth = getWidth(displayStartYear, item.endYear);
  const barLeft = getPosition(displayStartYear);
  const showLabel = barWidth > 8;

  return (
    <div className="relative h-8 group">
      <div
        className={`absolute h-6 rounded ${color} opacity-90 hover:opacity-100 cursor-pointer transition-all hover:h-7 flex items-center px-2 gap-1`}
        style={{ left: `${barLeft}%`, width: `${barWidth}%` }}
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showLabel && (
          <>
            <Icon className="h-3 w-3 text-white shrink-0" />
            <span className="text-xs text-white font-medium truncate">{title}</span>
          </>
        )}
      </div>

      {showTooltip && (
        <div
          className="absolute z-50 px-3 py-2 bg-foreground text-background rounded shadow-lg text-xs whitespace-nowrap"
          style={{ left: `${barLeft}%`, top: "100%", marginTop: "4px" }}
        >
          <div className="font-semibold">{title}</div>
          <div className="text-[10px] opacity-80">
            {item.startYear} - {item.endYear || "present"}
          </div>
          {subtitle && <div className="text-[10px] opacity-80 mt-1">{subtitle}</div>}
        </div>
      )}
    </div>
  );
}

export default function SkillsPage() {
  const allSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .sort((a, b) => a.startYear - b.startYear);

  const education = milestones.filter((m) => m.type === "education");
  const work = milestones.filter((m) => m.type === "work");
  const years = Array.from({ length: TOTAL_YEARS + 1 }, (_, i) => START_YEAR + i);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Journey</h1>
        <p className="text-lg text-muted-foreground">
          Education, career, technical skills, and personal interests over time
        </p>
      </div>

      {/* Gantt Chart - Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px] relative">
          {/* Year Headers */}
          <div className="sticky top-0 bg-background z-20 pb-4 border-b-2 border-border">
            <div className="relative h-8">
              {years.map((year) => (
                <div
                  key={year}
                  className="absolute text-sm font-semibold"
                  style={{ left: `${getPosition(year)}%` }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Year Lines */}
          <div className="absolute left-0 right-0" style={{ top: "48px", bottom: 0 }}>
            {years.map((year) => (
              <div
                key={`line-${year}`}
                className="absolute top-0 bottom-0 w-px bg-border/30"
                style={{ left: `${getPosition(year)}%` }}
              />
            ))}
          </div>

          {/* Timeline Sections */}
          <div className="space-y-6 py-6 relative">
            {/* Education */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Education
              </h3>
              <div className="space-y-1">
                {education.map((item) => (
                  <TimelineBar
                    key={`edu-${item.startYear}-${item.title}`}
                    item={item}
                    title={item.title}
                    subtitle={item.description}
                    color="bg-blue-500"
                    icon={LuGraduationCap}
                  />
                ))}
              </div>
            </div>

            {/* Work */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Work Experience
              </h3>
              <div className="space-y-1">
                {work.map((item) => (
                  <TimelineBar
                    key={`work-${item.startYear}-${item.title}`}
                    item={item}
                    title={item.title}
                    subtitle={item.description}
                    color="bg-emerald-500"
                    icon={LuBriefcase}
                  />
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Personal Interests
              </h3>
              <div className="space-y-1">
                {nonTechnicalInterests.map((item) => (
                  <TimelineBar
                    key={`interest-${item.startYear}-${item.name}`}
                    item={item}
                    title={item.name}
                    subtitle={item.description}
                    color="bg-rose-500"
                    icon={LuHeartHandshake}
                  />
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Technical Skills
              </h3>
              <div className="space-y-1">
                {allSkills.map((skill) => (
                  <TimelineBar
                    key={`skill-${skill.startYear}-${skill.name}`}
                    item={skill}
                    title={skill.name}
                    subtitle={skill.proficiency}
                    color={proficiencyColors[skill.proficiency as keyof typeof proficiencyColors]}
                    icon={LuHeartHandshake}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="pt-8 border-t border-border">
        <h2 className="text-lg font-semibold mb-4">Legend</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Categories</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-blue-500"></div>
                <span>Education</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-emerald-500"></div>
                <span>Work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-rose-500"></div>
                <span>Personal Interests</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Proficiency</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-emerald-500"></div>
                <span>Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-blue-500"></div>
                <span>Proficient</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-amber-500"></div>
                <span>Experienced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-purple-500"></div>
                <span>Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
