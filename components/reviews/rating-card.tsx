import type { StoreRating } from "./data";

export function RatingCard({ rating }: { rating: StoreRating }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#e5e5e5] bg-cream px-3 py-6 text-center">
      <span className="flex size-[72px] items-center justify-center rounded-full bg-[#3d8c47] text-base font-extrabold text-white">
        {rating.score}
      </span>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-forest">{rating.title}</p>
        <p className="text-[13px] text-[#706f6f]">{rating.note}</p>
      </div>
    </div>
  );
}
