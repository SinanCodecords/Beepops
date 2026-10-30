import { cn } from "@/lib/utils";
import { PRODUCT } from "../data";

const STYLES = [
  "border-amber bg-[#fff9e6] text-amber",
  "border-forest bg-[#ebf1ed] text-forest",
];

export function ProductBadges() {
  return (
    <div className="flex gap-2">
      {PRODUCT.badges.map((badge, i) => (
        <span
          key={badge}
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-[10.5px] font-bold uppercase",
            STYLES[i % STYLES.length],
          )}
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
