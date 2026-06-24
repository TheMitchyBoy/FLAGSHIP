import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fathomline.com"),
  title: "Fathomline — Deep Learning, Fathomed",
  description:
    "A living showcase of deep-learning & AI concepts — from research mockups to production models. Explore what we're building, then vote on what surfaces next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="aurora" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 mt-20">
          <div className="mx-auto max-w-6xl px-6 text-sm text-white/40 flex flex-col sm:flex-row gap-2 justify-between">
            <span>© {new Date().getFullYear()} Fathomline. Built with Next.js.</span>
            <span>Train · Vote · Build · Ship</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
