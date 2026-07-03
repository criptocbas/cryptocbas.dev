export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Blockchain",
    skills: ["Solana", "Anchor", "Arcium", "MPC", "Program Security"],
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
