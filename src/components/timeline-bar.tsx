"use client";

import { useState } from "react";
import { LuGraduationCap, LuBriefcase, LuHeartHandshake } from "react-icons/lu";
import { START_YEAR, getPosition, getWidth } from "@/lib/timeline-utils";

export type TimelineBarIcon = "education" | "work" | "interest";

const iconMap: Record<TimelineBarIcon, React.ComponentType<{ className?: string }>> = {
  education: LuGraduationCap,
  work: LuBriefcase,
  interest: LuHeartHandshake,
};

interface TimelineBarProps {
  item: { startYear: number; endYear?: number };
  title: string;
  subtitle?: string;
  color: string;
  iconType: TimelineBarIcon;
}

export function TimelineBar({
  item,
  title,
  subtitle,
  color,
  iconType,
}: TimelineBarProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const displayStartYear = Math.max(item.startYear, START_YEAR);
  const barWidth = getWidth(displayStartYear, item.endYear);
  const barLeft = getPosition(displayStartYear);
  const showLabel = barWidth > 8;
  const Icon = iconMap[iconType];

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
            <span className="text-xs text-white font-medium truncate">
              {title}
            </span>
          </>
        )}
      </div>

      {showTooltip && (
        <div
          className="absolute z-50 px-3 py-2 bg-foreground text-background rounded shadow-lg text-xs whitespace-nowrap"
          style={{ left: `${barLeft}%`, top: "100%", marginTop: "4px" }}
        >
          <div className="font-semibold">{title}</div>
          <div className="text-xs opacity-80">
            {item.startYear} - {item.endYear || "present"}
          </div>
          {subtitle && (
            <div className="text-xs opacity-80 mt-1">{subtitle}</div>
          )}
        </div>
      )}
    </div>
  );
}
