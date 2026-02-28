import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
    siteName: "CBas",
    url: "https://cryptocbas.dev",
    description:
      "I build on-chain applications on Solana — from hackathon prototype to production. Available for freelance projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBas | Solana Developer",
    description:
      "I build on-chain applications on Solana — from hackathon prototype to production. Available for freelance projects.",
    images: ["/opengraph-image"],
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
        <MotionProvider>
          <Navbar />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
