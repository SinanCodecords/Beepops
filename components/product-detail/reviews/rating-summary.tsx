import { StarRating } from "@/components/shared/star-rating";
import { RATING_SUMMARY } from "./data";
import { RatingBar } from "./rating-bar";

export function RatingSummary() {
  return (
    <div className="self-start rounded-xl border border-[#e5e5e5] bg-white p-6 text-center">
      <p className="font-heading text-[34px] leading-[1.9] text-forest">{RATING_SUMMARY.average}</p>
      <div className="mt-2 flex justify-center">
        <StarRating size={13} />
      </div>
      <p className="mt-1 text-[11.5px] text-ink">Based on {RATING_SUMMARY.total} ratings</p>
      <div className="mt-4 space-y-3">
        {RATING_SUMMARY.bars.map((bar) => (
          <RatingBar key={bar.stars} {...bar} />
        ))}
      </div>
    </div>
  );
}
