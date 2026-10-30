import Link from "next/link";
import { cn } from "@/lib/utils";

// Placeholder until the logo and bee mascot are exported from Figma into public/.
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="BeePops home"
      className={cn("font-logo flex items-center gap-1.5 text-xl font-bold", className)}
    >
      <span aria-hidden className="text-2xl leading-none">
        🐝
      </span>
      BeePops
    </Link>
  );
}
