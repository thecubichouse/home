import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormspreeProviderWrapper from "@/components/FormspreeProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cubic House",
  description: "Crafting timeless spaces with elegance and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-black text-white`}
      >
        <FormspreeProviderWrapper>
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <Footer />
        </FormspreeProviderWrapper>
      </body>
    </html>
  );
}
