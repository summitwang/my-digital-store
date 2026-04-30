// app/layout.tsx
// This is the "shell" of your entire app.
// The Navbar and Footer here appear on EVERY page automatically.

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SoftwareHub — Digital Products Store",
  description: "Buy premium software licenses at the best prices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen flex flex-col">
        <Navbar />
        {/* "children" = whatever page you're on */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
