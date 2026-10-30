import { STORE_RATINGS } from "./data";
import { RatingCard } from "./rating-card";

export function StoreRatings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-sans text-xl font-extrabold tracking-normal text-forest normal-case md:text-2xl">
          Store Performance Ratings
        </h2>
        <p className="text-sm text-[#706f6f]">
          Calculated based on ONDC buyer logs, fulfillment metrics, and official response indicators.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
        {STORE_RATINGS.map((rating) => (
          <RatingCard key={rating.title} rating={rating} />
        ))}
      </div>
    </div>
  );
}
