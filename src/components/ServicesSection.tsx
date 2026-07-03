import { SectionWrapper } from "./SectionWrapper";
import { AnimateOnScroll } from "./AnimateOnScroll";

const services = [
  {
    title: "Confidential Compute",
    description:
      "Private on-chain apps with Arcium's MPC network — sealed-bid auctions, hidden game state, confidential DeFi. Data stays encrypted even while it's computed on, so nothing leaks to the chain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
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
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <AnimateOnScroll direction="scale">
        <p className="mb-2 font-mono text-xs tracking-widest text-accent/80 uppercase">
          Services
        </p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          What I Can Build For You
        </h2>
        <p className="mb-14 max-w-lg text-base text-text-muted">
          From confidential on-chain programs to polished full-stack dApps —
          privacy-first, and shipped fast.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <AnimateOnScroll key={service.title} delay={i * 0.1} direction="left">
            <div className="group flex h-full flex-col rounded-xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover active:scale-[0.98]">
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
