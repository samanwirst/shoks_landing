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

export const metadata: Metadata = {
  title: {
    default: "Shoks SAT",
    template: "%s | Shoks SAT",
  },
  description: "Online school for SAT preparation.",
  keywords: ["SAT", "SAT prep", "online school", "Shoks SAT", "education", "Shoks"],
  authors: [{ name: "Shoks SAT Team" }, { name: "Mukhammadiev Samandar", url: "https://github.com/samanwirst" }],
  openGraph: {
    title: "Shoks SAT – Online SAT Preparation",
    description: "Prepare for the SAT with structured courses and practice.",
    url: "https://shokssat.com",
    siteName: "Shoks SAT",
    images: [
      {
        url: "/logo/shoks-logo.png",
        width: 512,
        height: 512,
        alt: "Shoks SAT Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shoks SAT – Online SAT Preparation",
    description: "Prepare for the SAT with structured courses and practice.",
    images: ["/logo/shoks-logo.png"],
  },
  icons: {
    icon: "/logo/shoks-logo.png",
    shortcut: "/logo/shoks-logo.png",
    apple: "/logo/shoks-logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
