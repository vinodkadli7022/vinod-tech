import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinodkumar — Full-Stack Engineer & AI Agent Builder",
  description: "Full-stack engineer building multi-agent AI systems — RAG pipelines, orchestration, and production FastAPI services.",
  openGraph: {
    title: "Vinodkumar — Full-Stack Engineer & AI Agent Builder",
    description: "Full-stack engineer building multi-agent AI systems — RAG pipelines, orchestration, and production FastAPI services.",
    type: "website",
    locale: "en_IN",
    siteName: "Vinodkumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinodkumar — Full-Stack Engineer & AI Agent Builder",
    description: "Full-stack engineer building multi-agent AI systems — RAG pipelines, orchestration, and production FastAPI services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-cream text-ink font-sans selection:bg-indigo-soft selection:text-ink min-h-screen">
        {children}
      </body>
    </html>
  );
}
