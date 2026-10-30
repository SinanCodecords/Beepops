import { Container } from "@/components/shared/container";
import { EmptyReviews } from "./empty-reviews";
import { StoreRatings } from "./store-ratings";

export function ReviewsPanel() {
  return (
    <Container className="pt-6 pb-16 md:pb-20">
      <div className="rounded-3xl border border-[#dee2e6] bg-white p-5 md:p-10">
        <StoreRatings />
        <hr className="my-8 border-[#dee2e6] md:my-10" />
        <EmptyReviews />
      </div>
    </Container>
  );
}
