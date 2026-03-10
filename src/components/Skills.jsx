
import { SKILLS } from "../data";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Expertise" title="Technical Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.category} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}