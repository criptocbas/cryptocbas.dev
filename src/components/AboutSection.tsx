import { skillCategories } from "@/data/skills";
import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <AnimateOnScroll>
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          <span className="text-accent">/</span> About
        </h2>
        <p className="mb-12 max-w-2xl font-mono text-sm text-text-muted">
          Developer focused on the Solana ecosystem. I build decentralized
          protocols, win hackathons, and ship products people can use.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <AnimateOnScroll key={cat.label} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-bg-card p-5">
              <h3 className="mb-3 font-mono text-sm font-semibold text-accent">
                {cat.label}
              </h3>
              <ul className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-text-muted"
                  >
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
