import { StarRating } from "@/components/shared/star-rating";
import { PRODUCT } from "../data";

export function ProductIdentity() {
  return (
    <div className="mt-6">
      <h1 className="text-2xl leading-tight text-forest md:text-[27px]">{PRODUCT.title}</h1>
      <p className="mt-1 text-[13.5px] text-[#706f6f]">{PRODUCT.subtitle}</p>
      <div className="mt-3 flex items-center gap-2 text-[12.5px]">
        <StarRating size={15} />
        <span className="font-semibold text-ink">{PRODUCT.rating}</span>
        <span className="text-[#706f6f]">({PRODUCT.reviewCount} reviews)</span>
      </div>
    </div>
  );
}
