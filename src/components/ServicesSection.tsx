import { packages } from "@/data/packages";
import { SITE } from "@/lib/constants";
import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <AnimateOnScroll direction="scale">
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/80 uppercase">
          Services
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          How We Can Work Together
        </h2>
        <p className="mb-14 max-w-xl text-base text-text-muted">
          Fixed-scope packages where possible. Clear deliverables, weekly demos,
          tests included. Final quote after a short scope call.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg, i) => (
          <AnimateOnScroll key={pkg.title} delay={i * 0.1} direction="left">
            <div className="group flex h-full flex-col rounded-xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover active:scale-[0.98]">
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-text">{pkg.title}</h3>
                <span className="shrink-0 rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  {pkg.price}
                </span>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">
                {pkg.description}
              </p>
              <ul className="space-y-1.5 border-t border-border/60 pt-4">
                {pkg.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 font-mono text-xs text-text-muted"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={0.2}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
          <a
            href={SITE.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.1] px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.16] hover:shadow-[0_0_24px_rgba(20,241,149,0.12)]"
          >
            Book a 15-min scope call
          </a>
          <p className="font-mono text-xs text-text-muted">
            Prefer email?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
