import { Boldonse, Fraunces, Geist_Mono, Host_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

// Fonts taken from the Figma file.
const hostGrotesk = Host_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const boldonse = Boldonse({ subsets: ["latin"], weight: "400", variable: "--font-heading" });
const fraunces = Fraunces({ subsets: ["latin"], weight: "700", variable: "--font-logo" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const fontVariables = cn(
  hostGrotesk.variable,
  boldonse.variable,
  fraunces.variable,
  geistMono.variable,
);
