import type { Metadata } from "next";
import "./globals.css";
import LayoutDefault from "@/components/Layouts/LayoutDefault";

export const metadata: Metadata = {
  title: "Shoks SAT",
  description: "Landing page",
  icons: {
    icon: "images/logo/logomark-o.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutDefault>
          {children}
        </LayoutDefault>
      </body>
    </html>
  );
}
