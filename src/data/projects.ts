export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  links: { label: string; url: string; icon?: "github" | "external" }[];
  status: "Shipped" | "In Progress" | "Hackathon Winner";
  award?: string;
  hackathon?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "hiddenhand",
    title: "HiddenHand",
    image: "/HiddenHand.png",
    tagline: "The only poker game where the house can't see your cards.",
    description:
      "Fully on-chain Texas Hold'em on Solana with cryptographic privacy guarantees. Uses MagicBlock VRF for provably fair shuffling, Inco Lightning FHE to encrypt all 52 cards so not even the platform can peek, and Ed25519 signatures for verified reveals at showdown. Don't trust the dealer — trust the math.",
    tech: ["Solana", "Anchor", "Inco FHE", "MagicBlock VRF", "Next.js", "TypeScript"],
    links: [
      { label: "GitHub", url: "https://github.com/HiddenHandPoker/HiddenHand", icon: "github" },
      { label: "Live Demo", url: "https://hiddenhand.netlify.app", icon: "external" },
    ],
    status: "Hackathon Winner",
    award: "Open Track Winner",
    hackathon: "Solana Privacy Hack",
  },
  {
    slug: "outcry",
    title: "OUTCRY",
    image: "/outcry.png",
    tagline: "Going, going, onchain.",
    description:
      "Real-time live auction protocol on Solana — every bid is an onchain transaction at sub-50ms latency using MagicBlock Ephemeral Rollups. Artists list NFTs, collectors compete in English auctions, and spectators watch. Features anti-sniping, compressed NFT participation badges via Metaplex Bubblegum, and an on-chain social layer via Tapestry.",
    tech: ["Solana", "Anchor", "Ephemeral Rollups", "Metaplex Bubblegum", "Tapestry", "Next.js"],
    links: [
      { label: "GitHub", url: "https://github.com/criptocbas/outcry", icon: "github" },
    ],
    status: "In Progress",
    hackathon: "Graveyard Hackathon",
  },
];
