import { projects } from "@/data/projects";
import { SectionWrapper } from "./SectionWrapper";
import { ProjectCard } from "./ProjectCard";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <SectionWrapper id="projects">
      <AnimateOnScroll direction="scale">
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/80 uppercase">
          Portfolio
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Selected work
        </h2>
        <p className="mb-14 max-w-xl text-base text-text-muted">
          Confidential compute, DeFi protocol implementations, real-time
          systems, and mobile Solana — demos and source included.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-8 md:grid-cols-2">
        {featured && (
          <ProjectCard
            project={featured}
            index={0}
            direction="scale"
            featured
          />
        )}
        {rest.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i + 1}
            direction={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
