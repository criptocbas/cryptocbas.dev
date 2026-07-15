"use client";

import Image from "next/image";
import { m } from "motion/react";
import { SITE } from "@/lib/constants";
import { socials } from "@/data/socials";
import { SocialIcon } from "./SocialIcon";
import { ParticleNetwork } from "./ParticleNetwork";

const ease = [0.16, 1, 0.3, 1] as const;

const proofPoints = [
  "Open Track Winner",
  "Arcium MPC",
  "Anchor + Next.js",
  "DeFi from scratch",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* ── Particle Background ── */}
      <ParticleNetwork />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Avatar */}
        <m.div
          initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-accent/20 shadow-[0_0_30px_rgba(20,241,149,0.1)] sm:h-32 sm:w-32"
        >
          <Image
            src="/madlad.webp"
            alt="CBas"
            width={128}
            height={128}
            sizes="(max-width: 640px) 112px, 128px"
            priority
            className="h-full w-full object-cover"
          />
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mb-4 font-mono text-sm tracking-wider text-accent/80"
        >
          gm, I&apos;m
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mb-6 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-r from-accent via-purple to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
            {SITE.name}
          </span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          className="mb-5 font-mono text-lg tracking-wide text-text-muted md:text-xl"
        >
          {SITE.tagline}
          <span className="ml-0.5 inline-block animate-blink text-accent">
            _
          </span>
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-muted"
        >
          {SITE.description}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.95, ease }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 font-mono text-xs tracking-wide text-accent">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance work
          </span>
        </m.div>

        <m.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease }}
          className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-wide text-text-muted sm:text-xs"
        >
          {proofPoints.map((point, i) => (
            <li key={point} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span className="text-border" aria-hidden="true">
                  ·
                </span>
              )}
              <span>{point}</span>
            </li>
          ))}
        </m.ul>

        <m.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href={SITE.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.12] px-7 py-3 font-mono text-sm font-medium text-accent transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.18] hover:shadow-[0_0_24px_rgba(20,241,149,0.15)]"
          >
            Book a call
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/60 px-6 py-3 font-mono text-sm text-text-muted transition-all duration-300 hover:border-accent/30 hover:text-accent"
          >
            View projects
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
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.25, ease }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <SocialIcon
              key={s.label}
              icon={s.icon}
              url={s.url}
              label={s.label}
              className="text-xl"
            />
          ))}
        </m.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
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
      </m.div>
    </section>
  );
}
