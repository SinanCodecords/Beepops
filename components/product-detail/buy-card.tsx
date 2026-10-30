import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon, SecurityCheckIcon } from "@hugeicons/core-free-icons";
import { StarRating } from "@/components/shared/star-rating";
import { CATEGORY_TAGS, getSubtitle, type Product } from "@/lib/shopify";
import { cn } from "@/lib/utils";
import { BuyControls } from "./buy-controls";
import { RATING_SUMMARY } from "./reviews";

const BADGE_STYLES = ["border-amber bg-[#fff9e6] text-amber", "border-forest bg-[#ebf1ed] text-forest"];

const TRUST_BADGES = [
  { icon: SecurityCheckIcon, label: "Doctor-Led Clean Formulation" },
  { icon: DeliveryTruck01Icon, label: "Free shipping on orders above ₹2000" },
];

export function BuyCard({ product }: { product: Product }) {
  // Tags that aren't categories (e.g. "Jaipur Crafted") show as badges.
  const badges = product.tags.filter((tag) => !CATEGORY_TAGS.includes(tag));

  return (
    <div className="rounded-3xl border border-[#e5e5e5] bg-white p-5 md:p-6 lg:sticky lg:top-28">
      {badges.length > 0 && (
        <div className="mb-6 flex gap-2">
          {badges.map((badge, i) => (
            <span
              key={badge}
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[10.5px] font-bold uppercase",
                BADGE_STYLES[i % BADGE_STYLES.length],
              )}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      <h1 className="text-2xl leading-tight text-forest md:text-[27px]">{product.title}</h1>
      <p className="mt-1 text-[13.5px] text-[#706f6f]">{getSubtitle(product.description)}</p>
      <div className="mt-3 flex items-center gap-2 text-[12.5px]">
        <StarRating size={15} />
        <span className="font-semibold text-ink">{RATING_SUMMARY.average}</span>
        <span className="text-[#706f6f]">({RATING_SUMMARY.total} reviews)</span>
      </div>
      <BuyControls variants={product.variants} />
      <ul className="mt-3 space-y-2.5 border-t border-[#e5e2d9] pt-4 text-[12.5px] text-[#706f6f]">
        {TRUST_BADGES.map(({ icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <HugeiconsIcon icon={icon} size={15} />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
