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
- Accent: `accent` (#00ffc8) — neon cyan
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
