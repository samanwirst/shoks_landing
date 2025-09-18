import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const initialThemeScript = `
(function () {
  try {
    var hasCookie = /(^|;)\\s*theme\\s*=\\s*([^;]+)/.test(document.cookie);
    if (hasCookie) return;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    // fail silently
  }
})();
`;


export const metadata: Metadata = {
  metadataBase: new URL("https://shokssat.com"),
  title: {
    default: "Shoks SAT",
    template: "%s | Shoks SAT",
  },
  description:
    "Shoks SAT — English-language online SAT & AP prep with live lessons, on-demand courses, practice platform, PDFs and admissions coaching.",
  keywords: [
    "SAT",
    "AP",
    "SAT prep",
    "AP prep",
    "college admissions",
    "online school",
    "test prep",
    "Shoks SAT",
    "admissions coaching",
    "practice tests"
  ],
  authors: [
    { name: "Mukhammadiev Samandar", url: "https://github.com/samanwirst" }
  ],
  applicationName: "Shoks SAT",
  category: "Education",
  openGraph: {
    title: "Shoks SAT - SAT, AP & Admissions Prep",
    description:
      "Live online lessons, pre-recorded courses, full practice platform and admissions support — for students aiming at top universities.",
    url: "https://shokssat.com",
    siteName: "Shoks SAT",
    images: [
      {
        url: "https://shokssat.com/og/shokssat.png",
        width: 1200,
        height: 630,
        alt: "Shoks SAT — SAT and AP preparation"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoks SAT - SAT, AP & Admissions Prep",
    description:
      "Live lessons, on-demand courses, practice platform and admissions support for students targeting top universities.",
    images: ["https://shokssat.com/og/shokssat.png"],
  },
  icons: {
    icon: "/logo/shoks-logo-favicon.png",
    shortcut: "/logo/shoks-logo-favicon.png",
    apple: "/logo/shoks-logo-favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://shokssat.com",
    languages: {
      "en-US": "/",
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    "instagram:site": "https://instagram.com/shoks_sat/",
    "telegram:channel": "https://t.me/shoks_sat",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shoks SAT",
  "url": "https://shokssat.com",
  "logo": "https://shokssat.com/logo/shoks-logo-favicon.png",
  "sameAs": [
    "https://linkedin.com/company/shoks-sat",
    "https://instagram.com/shoks_sat",
    "https://t.me/shoks_sat"
  ],
  "description": "English-language online SAT & AP preparation with live lessons, on-demand courses and admissions support.",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@shokssat.com",
      "areaServed": ["US", "RU"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "messaging support",
      "url": "https://t.me/shoksl_support",
      "areaServed": ["US", "RU"]
    }
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieTheme = (await cookies()).get("theme")?.value;
  const htmlClass = cookieTheme === "dark" ? "dark" : undefined;
  return (
    <html lang="en" className={htmlClass}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
