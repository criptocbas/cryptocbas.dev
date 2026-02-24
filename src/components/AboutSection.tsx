import { skillCategories } from "@/data/skills";
import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <AnimateOnScroll>
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/60 uppercase">
          About
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          What I Work With
        </h2>
        <p className="mb-14 max-w-xl text-sm leading-relaxed text-text-muted">
          Focused on the Solana ecosystem — building decentralized protocols,
          winning hackathons, and shipping products people can use.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <AnimateOnScroll key={cat.label} delay={i * 0.1}>
            <div className="group rounded-xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover">
              {/* Terminal-style header */}
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-accent/50">
                  &gt;_
                </span>
                <h3 className="font-mono text-sm font-semibold text-accent/90">
                  {cat.label}
                </h3>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent/30" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
