import { SectionTitle } from "../section-title";
import { REVIEWS } from "./data";
import { RatingSummary } from "./rating-summary";
import { ReviewCard } from "./review-card";

export function Reviews() {
  return (
    <section>
      <SectionTitle>Customer Reviews</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-[231px_1fr] md:gap-8">
        <RatingSummary />
        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
