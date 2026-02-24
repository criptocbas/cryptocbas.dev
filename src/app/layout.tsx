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
  title: "CBas | Solana Developer",
  description:
    "Portfolio of CBas — Solana developer building privacy-first and real-time on-chain applications.",
  openGraph: {
    title: "CBas | Solana Developer",
    description:
      "Solana developer building privacy-first and real-time on-chain applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBas | Solana Developer",
    description:
      "Solana developer building privacy-first and real-time on-chain applications.",
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
