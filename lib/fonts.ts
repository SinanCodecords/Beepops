import { Anton, DM_Serif_Display, Figtree, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

// Best guesses from the Figma screenshots; swap once the real fonts are confirmed.
const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-heading" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-logo" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const fontVariables = cn(
  figtree.variable,
  anton.variable,
  dmSerif.variable,
  geistMono.variable,
);
