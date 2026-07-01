import { socials } from "@/data/socials";
import { SectionWrapper } from "./SectionWrapper";
import { SocialIcon } from "./SocialIcon";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { SITE } from "@/lib/constants";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="pb-12">
      <AnimateOnScroll>
        <div className="text-center">
          <p className="mb-6 font-mono text-xs tracking-widest text-accent/80 uppercase">
            Contact
          </p>

          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
              Have a project in mind?
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-text-muted">
            Whether you need a smart contract, a full-stack dApp, or a
            hackathon teammate — let&apos;s talk.
          </p>

          {/* Primary CTA — Book a call */}
          <a
            href={SITE.calendar}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a 15-minute intro call (opens in new tab)"
            className="group mb-4 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.1] px-8 py-3.5 font-mono text-sm font-medium text-accent transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.16] hover:shadow-[0_0_30px_rgba(20,241,149,0.15)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book a 15-min call
          </a>

          {/* Secondary — Email */}
          <p className="mb-8 font-mono text-xs text-text-muted">
            or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-text-muted underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent/40"
            >
              {SITE.email}
            </a>
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socials
              .filter((s) => s.icon !== "email")
              .map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in new tab)`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-5 py-3 font-mono text-sm text-text-muted transition-all duration-300 hover:border-accent/20 hover:text-accent hover:shadow-[0_0_20px_rgba(20,241,149,0.06)]"
              >
                <SocialIcon icon={s.icon} url="#" label={s.label} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Footer */}
      <div className="mt-24 border-t border-border/40 pt-8 text-center">
        <p className="font-mono text-xs text-text-muted">
          Built on Solana
          <span className="mx-2 text-border">|</span>
          Next.js + Tailwind
        </p>
      </div>
    </SectionWrapper>
  );
}
