# CBas Portfolio — cryptocbas.dev

Personal portfolio site for CBas, a Solana developer.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, `src/` directory)
- **Tailwind CSS v4** — CSS-first `@theme inline` tokens in `globals.css`, no `tailwind.config.ts`
- **Motion** — import from `motion/react` (not `framer-motion`)
- **Fonts**: Inter (body, `--font-inter`) + JetBrains Mono (code/accent, `--font-jetbrains`) via `next/font/google`
- **Package manager**: pnpm
- **Deploy**: Vercel (static generation)

## Design Tokens (globals.css)

- Background: `bg` (#0a0a0f), `bg-card` (#12121a)
- Accent: `accent` (#d4a040) — warm amber
- Secondary: `purple` (#9945ff) — Solana purple
- Text: `text` (#e0e0e0), `text-muted` (#8888a0)
- Border: `border` (#2a2a3e)

## Project Structure

```
src/
├── app/           # Root layout, globals.css, page.tsx
├── components/    # All UI components (client components use "use client")
├── data/          # projects.ts, skills.ts, socials.ts — content lives here
└── lib/           # constants.ts (site name, tagline, etc.)
```

## Adding a New Project

Append an object to the `projects` array in `src/data/projects.ts`. Nothing else needs to change.

## Key Conventions

- All components are in `src/components/`, one component per file
- Scroll animations use the `AnimateOnScroll` wrapper (motion `whileInView`)
- Interactive components (Navbar, Hero, GlowCard, AnimateOnScroll) are client components with `"use client"`
- Section components use `SectionWrapper` for consistent padding and max-width
- Social links/URLs are centralized in `src/data/socials.ts`

## Links

- **Repo**: https://github.com/criptocbas/cryptocbas.dev
- **GitHub**: https://github.com/criptocbas
- **X**: https://x.com/Crypto_CBas

## Design Context

### Users
Potential clients — founders and teams looking to hire a Solana freelance developer. They arrive from X, GitHub, or referrals and need to quickly assess CBas's competence, shipping record, and professionalism. They're evaluating whether to trust him with their project.

### Brand Personality
**Bold, technical, sharp.** Confident developer energy with clean precision and edge. Not corporate, not playful — a builder who takes craft seriously. The MadLad avatar and casual "gm" greeting add personality without undermining professionalism.

### Aesthetic Direction
- **Dark-mode native** cyberpunk/terminal aesthetic — already nailed, don't change direction
- **Warm amber (#d4a040) + Solana purple (#9945ff)** on deep navy-black — the signature palette
- **Monospace accents** (JetBrains Mono) for labels, taglines, and technical elements reinforce "developer" identity
- **Glassmorphism** with blurred navbars, glowing card borders, particle effects
- **Motion-rich but purposeful** — staggered reveals, 3D hover, scroll animations. Never gratuitous
- **Anti-references**: Generic SaaS landing pages, overly minimal "designer" portfolios, anything that looks templated or AI-generated

### Design Principles

1. **Ship proof over words** — Lead with real projects, hackathon wins, and tangible output. Every design choice should reinforce credibility and demonstrate competence.
2. **Terminal-native aesthetic** — Monospace type, boot sequences, dot grids, and neon glow create a cohesive hacker identity. Lean into this language for new features.
3. **Motion earns attention** — Animations should reward interaction (hover glows, 3D cards) or guide the eye (scroll reveals). Never animate just to animate. Always respect `prefers-reduced-motion`.
4. **Contrast and hierarchy** — High-contrast text on dark backgrounds. Accent color is used sparingly for CTAs and key elements. Muted tones for secondary content. Clear visual hierarchy at a glance.
5. **One clear path** — The site should funnel visitors toward one action: reaching out. Every section builds the case; the contact section closes it.
