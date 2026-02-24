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
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            <span className="text-accent">/</span> Contact
          </h2>
          <p className="mx-auto mb-10 max-w-md font-mono text-sm text-text-muted">
            Want to collaborate, chat about Solana, or just say gm? Reach out.
          </p>

          <div className="flex items-center justify-center gap-6">
            {socials.map((s) => (
              <SocialIcon
                key={s.label}
                icon={s.icon}
                url={s.url}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8 text-center">
        <p className="font-mono text-xs text-text-muted">
          Built by{" "}
          <span className="text-accent">{SITE.name}</span> with Next.js +
          Tailwind
        </p>
      </div>
    </SectionWrapper>
  );
}
