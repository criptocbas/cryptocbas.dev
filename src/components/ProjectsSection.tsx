import { projects } from "@/data/projects";
import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <AnimateOnScroll>
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/60 uppercase">
          Portfolio
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Projects
        </h2>
        <p className="mb-14 max-w-lg text-sm text-text-muted">
          On-chain applications I&apos;ve shipped and am building on Solana.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
