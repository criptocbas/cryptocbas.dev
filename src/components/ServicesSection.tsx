import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

const services = [
  {
    title: "Solana Programs",
    description:
      "Custom smart contracts built with Anchor and Rust. Token programs, DeFi protocols, on-chain game logic — designed for security and performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack dApps",
    description:
      "End-to-end development from on-chain program to polished frontend. Next.js, React, wallet integration, and real-time data — shipped and deployed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.559" />
      </svg>
    ),
  },
  {
    title: "Hackathon & MVPs",
    description:
      "Rapid prototyping under tight deadlines. I've won hackathons building from zero to demo in days — I can do the same for your idea.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Integrations",
    description:
      "MagicBlock, Metaplex, Tapestry, SPL tokens, FHE, VRF — deep experience wiring together Solana's ecosystem into cohesive products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <AnimateOnScroll direction="scale">
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/60 uppercase">
          Services
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          What I Can Build For You
        </h2>
        <p className="mb-14 max-w-lg text-base text-text-muted">
          Available for freelance projects on Solana. From smart contracts to
          full-stack applications — I ship fast and build to last.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <AnimateOnScroll key={service.title} delay={i * 0.1} direction="left">
            <div className="group flex h-full flex-col rounded-xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover">
              <div className="mb-4 text-accent/70 transition-colors duration-300 group-hover:text-accent">
                {service.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-text">
                {service.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
