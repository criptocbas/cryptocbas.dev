import { projects } from "@/data/projects";
import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <AnimateOnScroll>
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          <span className="text-accent">/</span> Projects
        </h2>
        <p className="mb-12 font-mono text-sm text-text-muted">
          Things I&apos;ve shipped and am building
        </p>
      </AnimateOnScroll>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
