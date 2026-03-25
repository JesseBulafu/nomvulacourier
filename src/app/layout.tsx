import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomvula Courier & Procurement | Premium Freight & Logistics",
  description:
    "Nomvula Courier & Procurement — Based in Kempton Park, South Africa. Your trusted partner in freight, logistics, and courier services across Africa and beyond. Fast, reliable, and secure delivery solutions.",
  keywords: [
    "courier",
    "freight",
    "logistics",
    "delivery",
    "shipping",
    "Kempton Park",
    "South Africa",
    "Africa",
  ],
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
      <head>
        <link rel="icon" href="/favicon-truck.svg" />
        <link rel="apple-touch-icon" href="/favicon-truck.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff7a00" />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
