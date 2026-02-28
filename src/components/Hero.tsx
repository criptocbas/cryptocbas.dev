"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SITE } from "@/lib/constants";
import { socials } from "@/data/socials";
import { SocialIcon } from "./SocialIcon";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.05 }}
          className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-accent/20 shadow-[0_0_30px_rgba(0,255,200,0.1)] sm:h-32 sm:w-32"
        >
          <Image
            src="/madlad.webp"
            alt="CBas"
            width={128}
            height={128}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.15 }}
          className="mb-4 font-mono text-sm tracking-wider text-accent/80"
        >
          gm, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="mb-6 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-r from-accent via-purple to-accent bg-[length:200%_auto] bg-clip-text text-transparent">
            {SITE.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.35 }}
          className="mb-5 font-mono text-lg tracking-wide text-text-muted md:text-xl"
        >
          {SITE.tagline}
          <span className="ml-0.5 inline-block animate-blink text-accent">
            _
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.5 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-muted"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.65 }}
          className="flex items-center justify-center gap-5"
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
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
      </motion.div>
    </section>
  );
}
