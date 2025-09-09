"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// Note: metadata export needs to be moved to a separate file when using 'use client'
// You'll need to handle metadata differently for client components

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooter = pathname === "/case-studies" || pathname === "/contact";

  return (
    <html lang="en">
      <body className="font-sans" style={{ margin: "0 55px" }}>
        <Navigation />
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
