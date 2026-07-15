import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { MotionProvider } from "@/components/MotionProvider";
import { BootWrapper } from "@/components/BootWrapper";
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
  title: "CBas | Confidential Compute & Full-Stack Solana",
  description:
    "Solana engineer specializing in Arcium MPC confidential compute, Anchor programs, and full-stack dApps. Open Track winner — available for freelance work.",
  icons: {
    icon: "/madlad-icon.png",
    apple: "/madlad-icon.png",
  },
  openGraph: {
    title: "CBas | Confidential Compute & Full-Stack Solana",
    siteName: "CBas",
    url: "https://cryptocbas.dev",
    description:
      "Solana engineer specializing in Arcium MPC confidential compute, Anchor programs, and full-stack dApps. Open Track winner — available for freelance work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBas | Confidential Compute & Full-Stack Solana",
    description:
      "Solana engineer specializing in Arcium MPC confidential compute, Anchor programs, and full-stack dApps. Open Track winner — available for freelance work.",
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
          <BootWrapper>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
          </BootWrapper>
        </MotionProvider>
      </body>
    </html>
  );
}
