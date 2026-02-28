import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptocbas.dev"),
  alternates: { canonical: "https://cryptocbas.dev" },
  title: "CBas | Solana Developer",
  description:
    "I build on-chain applications on Solana — from hackathon prototype to production. Available for freelance projects.",
  icons: {
    icon: "/madlad-icon.png",
    apple: "/madlad-icon.png",
  },
  openGraph: {
    title: "CBas | Solana Developer",
    description:
      "I build on-chain applications on Solana — from hackathon prototype to production. Available for freelance projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBas | Solana Developer",
    description:
      "I build on-chain applications on Solana — from hackathon prototype to production. Available for freelance projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} dot-grid antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
