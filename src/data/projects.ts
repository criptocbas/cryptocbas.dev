export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  links: { label: string; url: string; icon?: "github" | "external" | "youtube" }[];
  status: "Shipped" | "In Progress" | "Hackathon Winner";
  award?: string;
  hackathon?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "hiddenhand",
    title: "HiddenHand",
    image: "/HiddenHand.webp",
    tagline: "The only poker game where the house can't see your cards.",
    description:
      "Fully on-chain Texas Hold'em where the deck lives on-chain only as encrypted ciphertext. Shuffle, deal, and reveal run inside Arcium's MPC network, so the randomness never touches the chain — hands stay hidden by construction, not by trust. Not even the house can see your cards.",
    tech: ["Solana", "Anchor", "Arcium", "MPC", "Next.js", "TypeScript"],
    links: [
      { label: "GitHub", url: "https://github.com/HiddenHandPoker/HiddenHand", icon: "github" },
      { label: "Live Demo", url: "https://hiddenhand.netlify.app", icon: "external" },
      { label: "Demo Video", url: "https://youtu.be/6WgATb6sfp4", icon: "youtube" },
    ],
    status: "Hackathon Winner",
    award: "Open Track Winner",
    hackathon: "Solana Privacy Hack",
  },
  {
    slug: "outcry",
    title: "OUTCRY",
    image: "/outcry.webp",
    tagline: "Going, going, onchain.",
    description:
      "Real-time live auctions where every bid settles onchain at sub-50ms via Ephemeral Rollups. Anti-sniping protection, compressed NFT badges, and a built-in social layer.",
    tech: ["Solana", "Anchor", "Ephemeral Rollups", "Metaplex Bubblegum", "Tapestry", "Next.js"],
    links: [
      { label: "GitHub", url: "https://github.com/criptocbas/outcry", icon: "github" },
      { label: "Live Demo", url: "https://outcry.vercel.app/", icon: "external" },
      { label: "Demo Video", url: "https://youtu.be/IUS9oxn_54c", icon: "youtube" },
    ],
    status: "Shipped",
    hackathon: "Graveyard Hackathon",
  },
  {
    slug: "candor",
    title: "Candor",
    image: "/candor.webp",
    tagline: "Truth in every pixel.",
    description:
      "Mobile-first app that cryptographically seals photos on Solana at the moment of capture. SHA-256 hashing, on-chain verification, and direct SOL vouching between creators — no middleman.",
    tech: ["Solana", "Anchor", "React Native", "Expo", "Mobile Wallet Adapter", "Supabase"],
    links: [
      { label: "GitHub", url: "https://github.com/criptocbas/candor", icon: "github" },
    ],
    status: "Shipped",
    hackathon: "Solana Monolith Hackathon",
  },
];
