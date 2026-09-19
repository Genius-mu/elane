import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import HotelNavbar from "@/components/navigation/HotelNavbar";
import Footer from "@/components/sections/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#17150F",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "ÉLANE — International Hotel & Residences",
  description:
    "A five-star sanctuary of architectural stillness, exceptional gastronomy, and curated suites high above the metropolitan grid.",
  keywords: [
    "Élane",
    "Luxury Hotel",
    "Architectural Hotel",
    "Bespoke Suites",
    "Fine Dining",
    "Aurea",
    "Thermal Sanctuary",
  ],
  openGraph: {
    title: "ÉLANE — International Hotel & Residences",
    description: "Stay above the ordinary. A collection of private spaces and quiet moments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#17150F] text-[#E9E5DD]">
        <SmoothScrollProvider>
          <CustomCursor />
          <HotelNavbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
