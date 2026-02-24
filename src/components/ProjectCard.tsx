import type { Project } from "@/data/projects";
import { GlowCard } from "./GlowCard";
import { TechPill } from "./TechPill";
import { StatusBadge } from "./StatusBadge";
import { SocialIcon } from "./SocialIcon";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <AnimateOnScroll delay={index * 0.1}>
      <GlowCard className="flex h-full flex-col">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-text">{project.title}</h3>
            <p className="font-mono text-sm text-accent">{project.tagline}</p>
          </div>
          <StatusBadge status={project.status} award={project.award} />
        </div>

        {project.hackathon && (
          <p className="mb-3 font-mono text-xs text-purple">
            {project.hackathon}
          </p>
        )}

        <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-border pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted transition-colors hover:text-accent"
            >
              {link.icon && <SocialIcon icon={link.icon} url={link.url} label={link.label} />}
              {link.label}
            </a>
          ))}
        </div>
      </GlowCard>
    </AnimateOnScroll>
  );
}
