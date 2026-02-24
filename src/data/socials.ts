export interface Social {
  label: string;
  url: string;
  icon: "github" | "x" | "email";
}

export const socials: Social[] = [
  {
    label: "GitHub",
    url: "https://github.com/criptocbas",
    icon: "github",
  },
  {
    label: "X",
    url: "https://x.com/Crypto_CBas",
    icon: "x",
  },
  {
    label: "Email",
    url: "mailto:cbas.solana@gmail.com",
    icon: "email",
  },
];
