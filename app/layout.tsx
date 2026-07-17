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
  description: "Full-stack engineer building multi-agent AI systems, RAG pipelines, and production FastAPI services. Shipping scalable products that solve real business problems.",
  keywords: ["Vinodkumar", "Full-Stack Engineer", "AI Agent Builder", "FastAPI", "React", "Next.js", "TypeScript", "Python", "Multi-agent systems", "RAG pipelines", "Software Developer", "Bengaluru"],
  authors: [{ name: "Vinodkumar", url: "https://github.com/vinodkadli7022" }],
  creator: "Vinodkumar",
  publisher: "Vinodkumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vinodkumar — Full-Stack Engineer & AI Agent Builder",
    description: "Full-stack engineer building multi-agent AI systems, RAG pipelines, and production FastAPI services. Shipping scalable products that solve real business problems.",
    type: "website",
    locale: "en_IN",
    siteName: "Vinodkumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinodkumar — Full-Stack Engineer & AI Agent Builder",
    description: "Full-stack engineer building multi-agent AI systems, RAG pipelines, and production FastAPI services.",
  },
  alternates: {
    canonical: "/",
  }
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
