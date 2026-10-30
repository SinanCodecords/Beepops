import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon, SecurityCheckIcon } from "@hugeicons/core-free-icons";
import { StarRating } from "@/components/shared/star-rating";
import { cn } from "@/lib/utils";
import { PurchaseOptions, QuantitySelector } from "./buy-controls";
import { PRODUCT } from "./data";

const BADGE_STYLES = ["border-amber bg-[#fff9e6] text-amber", "border-forest bg-[#ebf1ed] text-forest"];

const TRUST_BADGES = [
  { icon: SecurityCheckIcon, label: "Doctor-Led Clean Formulation" },
  { icon: DeliveryTruck01Icon, label: "Free shipping on orders above ₹2000" },
];

export function BuyCard() {
  return (
    <div className="rounded-3xl border border-[#e5e5e5] bg-white p-5 md:p-6 lg:sticky lg:top-28">
      <div className="flex gap-2">
        {PRODUCT.badges.map((badge, i) => (
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
      <div className="mt-6">
        <h1 className="text-2xl leading-tight text-forest md:text-[27px]">{PRODUCT.title}</h1>
        <p className="mt-1 text-[13.5px] text-[#706f6f]">{PRODUCT.subtitle}</p>
        <div className="mt-3 flex items-center gap-2 text-[12.5px]">
          <StarRating size={15} />
          <span className="font-semibold text-ink">{PRODUCT.rating}</span>
          <span className="text-[#706f6f]">({PRODUCT.reviewCount} reviews)</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className="font-heading text-[31px] leading-[1.9] text-ink">{PRODUCT.price}</span>
        <span className="text-[15px] text-[#706f6f] line-through">MRP {PRODUCT.mrp}</span>
        <span className="rounded-md bg-[#ebf7ed] px-2 py-0.5 text-[11.5px] font-bold text-[#1e6b2a]">
          {PRODUCT.discount}
        </span>
      </div>
      <PurchaseOptions />
      <div className="mt-7">
        <QuantitySelector />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="h-[51px] rounded-xl bg-amber text-[15px] font-bold text-ink uppercase transition-colors hover:bg-honey"
          >
            Subscribe now
          </button>
          <button
            type="button"
            className="h-[51px] rounded-xl border border-forest bg-white text-[15px] font-bold text-forest uppercase transition-colors hover:bg-forest hover:text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
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
