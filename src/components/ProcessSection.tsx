import { SITE } from "@/lib/constants";
import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Scope call",
    body: "15 minutes. Goals, constraints, network (devnet/mainnet), and what “done” looks like. No pressure pitch.",
  },
  {
    n: "02",
    title: "Fixed proposal",
    body: "Clear deliverables, timeline, price, and what’s out of scope. You approve before any code starts.",
  },
  {
    n: "03",
    title: "Ship in public",
    body: "Weekly demos (or faster for sprints). You see progress in a live environment — not a black box.",
  },
  {
    n: "04",
    title: "Handoff",
    body: "Tests, deploy notes, and a clean repo. You own the code. Optional support retainer if you want it.",
  },
];

const guarantees = [
  "Written scope before billing",
  "Milestone payments on larger work",
  "You own IP and repos",
  "Async-friendly (Telegram / email)",
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <AnimateOnScroll direction="scale">
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/80 uppercase">
          Process
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          How engagement works
        </h2>
        <p className="mb-14 max-w-xl text-base text-text-muted">
          Designed for founders who want speed without chaos — and engineers who
          want a clean handoff.
        </p>
      </AnimateOnScroll>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.n} delay={i * 0.08} direction="up">
            <div className="h-full rounded-xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover">
              <p className="mb-3 font-mono text-xs text-accent/70">{step.n}</p>
              <h3 className="mb-2 text-base font-semibold text-text">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {step.body}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={0.15}>
        <div className="rounded-xl border border-border bg-bg-card/80 p-6 sm:p-8">
          <p className="mb-4 font-mono text-xs tracking-widest text-accent/80 uppercase">
            Working terms
          </p>
          <ul className="mb-6 grid gap-3 sm:grid-cols-2">
            {guarantees.map((g) => (
              <li
                key={g}
                className="flex items-center gap-2.5 text-sm text-text-muted"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] font-mono text-[10px] text-accent"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {g}
              </li>
            ))}
          </ul>
          <a
            href={SITE.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent transition-colors hover:text-accent/80"
          >
            Start with a free scope call
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
