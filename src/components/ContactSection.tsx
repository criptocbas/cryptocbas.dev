import { socials } from "@/data/socials";
import { SectionWrapper } from "./SectionWrapper";
import { SocialIcon } from "./SocialIcon";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="pb-12">
      <AnimateOnScroll>
        <div className="text-center">
          <p className="mb-6 font-mono text-xs tracking-widest text-accent/60 uppercase">
            Contact
          </p>

          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
              Let&apos;s ship something.
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-md text-sm text-text-muted">
            Want to collaborate on Solana, team up for a hackathon, or just say
            gm? Reach out.
          </p>

          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-5 py-3 font-mono text-sm text-text-muted transition-all duration-300 hover:border-accent/20 hover:text-accent hover:shadow-[0_0_20px_rgba(0,255,200,0.06)]"
              >
                <SocialIcon icon={s.icon} url={s.url} label={s.label} />
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
