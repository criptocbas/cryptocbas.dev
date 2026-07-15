export interface ServicePackage {
  title: string;
  price: string;
  description: string;
  highlights: string[];
}

/** Client-facing offers — soft floors to filter tire-kickers without boxing you in. */
export const packages: ServicePackage[] = [
  {
    title: "Confidential Compute",
    price: "Custom",
    description:
      "Arcium MPC integrations and private on-chain logic — sealed state, encrypted game/DeFi flows, threat-model-aware design.",
    highlights: ["MPC circuits + Anchor", "Privacy threat models", "End-to-end demos"],
  },
  {
    title: "Solana MVP",
    price: "From $15k",
    description:
      "Program + tests + Next.js frontend + wallet flow, scoped for a shippable product surface in weeks, not months.",
    highlights: ["Anchor program", "Polished UI", "Deploy + handoff docs"],
  },
  {
    title: "Programs & Features",
    price: "From $5k",
    description:
      "New instructions, CPI integrations, Token-2022/hooks, or hardening an existing codebase with real tests.",
    highlights: ["Feature-scoped", "LiteSVM / integration tests", "Security-minded review"],
  },
  {
    title: "Sprint Retainer",
    price: "From $6k/mo",
    description:
      "Part-time dedicated capacity for ongoing product work — async-friendly, demo-driven weekly progress.",
    highlights: ["10–20 hrs/wk typical", "Priority support", "Flexible cancel"],
  },
];
