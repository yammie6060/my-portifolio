
import { PROJECTS } from "../data";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-12 bg-white/[0.01]
                 border-y border-teal-500/[0.07]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="Featured Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}