import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickSite.cz — Web pro vaši firmu za 48 hodin",
  description:
    "Vytváříme moderní weby pro živnostníky a malé firmy. S pomocí AI rychleji, levněji a bez zbytečných komplikací.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-body antialiased text-gray-800 bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
