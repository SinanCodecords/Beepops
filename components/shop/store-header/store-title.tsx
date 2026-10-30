import { cn } from "@/lib/utils";
import { STORE, STORE_BADGES } from "./data";

export function StoreTitle() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="text-[28px] leading-none font-extrabold text-forest md:text-[32px]">
        {STORE.name}
      </p>
      {STORE_BADGES.map((badge) => (
        <span
          key={badge.label}
          className={cn(
            "rounded-md px-2 py-1 text-[11px] font-bold tracking-wide uppercase",
            badge.className,
          )}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}
