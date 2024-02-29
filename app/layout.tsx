import Header from "../components/Header";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dark Inc.",
  description:
    "Dark Inc. is the best place to get your website and apps built. We offer the best services at the best prices. We are the best in the business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
