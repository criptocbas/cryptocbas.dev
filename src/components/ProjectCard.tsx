import type { Project } from "@/data/projects";
import { GlowCard } from "./GlowCard";
import { TechPill } from "./TechPill";
import { StatusBadge } from "./StatusBadge";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <AnimateOnScroll delay={index * 0.15}>
      <GlowCard className="flex h-full flex-col">
        {/* Image / Gradient Placeholder */}
        {project.image ? (
          <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
          </div>
        ) : (
          <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-accent/[0.04] via-bg-card to-purple/[0.04]">
              <span className="font-mono text-5xl font-black tracking-tighter text-accent/[0.08]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-bold tracking-tight text-text">
              {project.title}
            </h3>
            {project.hackathon && (
              <p className="mt-1 font-mono text-xs text-purple">
                {project.hackathon}
              </p>
            )}
          </div>
          <StatusBadge status={project.status} award={project.award} />
        </div>

        <p className="mb-1 font-mono text-sm text-accent">
          {project.tagline}
        </p>

        <p className="mb-6 flex-1 text-base leading-relaxed text-text-muted">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 border-t border-border/60 pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/30 px-4 py-2 font-mono text-sm text-text-muted transition-all duration-300 hover:border-accent/20 hover:text-accent hover:shadow-[0_0_12px_rgba(0,255,200,0.06)]"
            >
              {link.icon === "github" && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              )}
              {link.icon === "external" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              )}
              {link.icon === "youtube" && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
                </svg>
              )}
              {link.label}
            </a>
          ))}
        </div>
      </GlowCard>
    </AnimateOnScroll>
  );
}
