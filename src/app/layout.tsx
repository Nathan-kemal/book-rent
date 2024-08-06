import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import RouteWrapper from "@/components/routeWraper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Rent",
  description: "Book Renting Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Toaster />
        <RouteWrapper children={children} />
      </body>
    </html>
  );
}
