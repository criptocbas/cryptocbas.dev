export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Blockchain",
    skills: [
      "Solana / Anchor",
      "Arcium MPC",
      "PDAs · CPIs · SPL",
      "Token-2022",
      "Program security",
    ],
  },
  {
    label: "DeFi & Protocols",
    skills: ["AMM / CLMM", "Lending", "Routers & vaults", "LiteSVM testing", "Oracle patterns"],
  },
  {
    label: "Full-stack",
    skills: ["Next.js", "TypeScript", "Wallet adapters", "React Native", "Real-time UIs"],
  },
  {
    label: "Infra & Ship",
    skills: ["Rust", "Ephemeral Rollups", "Vercel", "PostgreSQL", "AI-accelerated delivery"],
  },
];
