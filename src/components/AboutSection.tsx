import { skillCategories } from "@/data/skills";
import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <AnimateOnScroll direction="scale">
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/80 uppercase">
          About
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Builder, not a slide deck
        </h2>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-text-muted">
          I specialize in confidential compute on Solana (Arcium MPC) and
          full-stack product shipping — Anchor programs, DeFi primitives, and
          polished Next.js clients. I move fast with AI-assisted workflows, but
          the deliverables are still tested, documented, and production-minded.
        </p>
        <p className="mb-14 max-w-2xl text-base leading-relaxed text-text-muted">
          Best fit for founders who need an owner: privacy features, protocol
          logic, or an MVP that has to demo cleanly under a deadline.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <AnimateOnScroll key={cat.label} delay={i * 0.1} direction="right">
            <div className="group rounded-xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover active:scale-[0.98]">
              {/* Terminal-style header */}
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-accent/70">
                  &gt;_
                </span>
                <h3 className="font-mono text-sm font-semibold text-accent">
                  {cat.label}
                </h3>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent/50" />
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
