import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 ОСЬ ТУТ МИ РОБИМО ЗМІНИ
export const metadata: Metadata = {
  // 1. Гарна назва, яка буде на вкладці браузера
  title: "FreeBetGeek - Best Betting Sites & Bonuses",
  // 2. Опис для пошуковиків (SEO)
  description: "Find the best free bets, odds boosts and bookmaker reviews in UK & Ireland.",
  // 3. Підключення твоєї нової іконки
  icons: {
    icon: "/favicon.svg", // Цей шлях веде до public/favicon.svg
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}