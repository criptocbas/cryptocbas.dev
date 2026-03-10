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

          {/* Primary CTA — Email */}
          <a
            href={`mailto:${SITE.email}`}
            className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-8 py-3 font-mono text-sm text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.12] hover:shadow-[0_0_30px_rgba(20,241,149,0.1)]"
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
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {SITE.email}
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.icon === "email" ? undefined : "_blank"}
                rel={s.icon === "email" ? undefined : "noopener noreferrer"}
                aria-label={s.icon === "email" ? s.label : `${s.label} (opens in new tab)`}
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
        <p className="font-mono text-xs text-text-muted/60">
          Built on Solana
          <span className="mx-2 text-accent/20">|</span>
          Next.js + Tailwind
        </p>
      </div>
    </SectionWrapper>
  );
}
