import type { Metadata } from "next";
import { Anton, DM_Serif_Display, Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Fonts are best guesses from the Figma screenshots; swap once confirmed.
const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-heading" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-logo" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BeePops | Millet Protein Bars & Himalayan Honey",
    template: "%s | BeePops",
  },
  description:
    "Millet-based protein bars and pure honey from Jaipur. Clean, doctor-led nutrition for kids, adults and families.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        figtree.variable,
        anton.variable,
        dmSerif.variable,
        geistMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
