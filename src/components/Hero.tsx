import Image from "next/image";
import { SITE } from "@/lib/constants";
import { socials } from "@/data/socials";
import { SocialIcon } from "./SocialIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* ── Background Atmosphere ── */}

      {/* Large center cyan glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[140px]" />

      {/* Upper-right purple glow */}
      <div className="pointer-events-none absolute top-[20%] right-[15%] h-[400px] w-[400px] rounded-full bg-purple/[0.04] blur-[120px] animate-float-slow" />

      {/* Lower-left subtle glow */}
      <div className="pointer-events-none absolute bottom-[20%] left-[10%] h-[300px] w-[350px] rounded-full bg-accent/[0.02] blur-[100px] animate-float-slow [animation-delay:3s]" />

      {/* ── Decorative Elements ── */}

      {/* Floating lines */}
      <div className="pointer-events-none absolute top-[30%] left-[8%] h-px w-32 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-float [animation-delay:1s]" />
      <div className="pointer-events-none absolute bottom-[35%] right-[12%] h-px w-24 bg-gradient-to-r from-transparent via-purple/20 to-transparent animate-float [animation-delay:2.5s]" />
      <div className="pointer-events-none absolute top-[55%] right-[8%] h-px w-16 bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-float [animation-delay:4s]" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute top-[25%] right-[20%] h-1.5 w-1.5 rounded-full bg-accent/30 animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-[30%] left-[18%] h-1 w-1 rounded-full bg-purple/40 animate-pulse-glow [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute top-[60%] left-[25%] h-1 w-1 rounded-full bg-accent/20 animate-pulse-glow [animation-delay:3s]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-accent/20 shadow-[0_0_30px_rgba(0,255,200,0.1)] sm:h-32 sm:w-32 animate-hero-scale [animation-delay:50ms]">
          <Image
            src="/madlad.webp"
            alt="CBas"
            width={128}
            height={128}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mb-4 font-mono text-sm tracking-wider text-accent/80 animate-hero-enter [animation-delay:150ms]">
          gm, I&apos;m
        </p>

        <h1 className="mb-6 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl animate-hero-enter [animation-delay:200ms]">
          <span className="bg-gradient-to-r from-accent via-purple to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
            {SITE.name}
          </span>
        </h1>

        <p className="mb-5 font-mono text-lg tracking-wide text-text-muted md:text-xl animate-hero-enter [animation-delay:350ms]">
          {SITE.tagline}
          <span className="ml-0.5 inline-block animate-blink text-accent">
            _
          </span>
        </p>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-muted animate-hero-enter [animation-delay:500ms]">
          {SITE.description}
        </p>

        <div className="flex items-center justify-center gap-5 animate-hero-enter [animation-delay:650ms]">
          {socials.map((s) => (
            <SocialIcon
              key={s.label}
              icon={s.icon}
              url={s.url}
              label={s.label}
              className="text-xl"
            />
          ))}
          <a
            href="#projects"
            className="group ml-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-6 py-2.5 font-mono text-sm text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.12] hover:shadow-[0_0_20px_rgba(0,255,200,0.1)]"
          >
            View Projects
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-hero-fade [animation-delay:1.5s]">
        <div className="animate-scroll-hint">
          <svg
            className="h-5 w-5 text-text-muted/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
