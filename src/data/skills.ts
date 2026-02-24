export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Blockchain",
    skills: ["Solana", "Anchor", "SPL Tokens", "ZK Proofs", "Program Security"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    label: "Backend & Infra",
    skills: ["Node.js", "Rust", "PostgreSQL", "WebSockets", "Vercel"],
  },
  {
    label: "Tools",
    skills: ["Git", "pnpm", "Turborepo", "Figma", "Linux"],
  },
];
