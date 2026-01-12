import { Metadata } from "next";
import { SkillsTimeline } from "@/components/skills-timeline";

export const metadata: Metadata = {
  title: "Skills Timeline",
  description: "Pascal's technical skills and learning journey over time",
};

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <SkillsTimeline />
    </div>
  );
}
